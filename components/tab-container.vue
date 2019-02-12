<template>
  <div class="tab_container">
    <div class="responsive_button_select_wrapper">
      <div
        class="arrow left"
        :class="{disabled: isFirstActive}"
        @click="navigateActive(-1)"
      />
      <div class="selected_wrapper">
        <div class="main_content">
          <slot
            name="buttonContent"
            :item="activeContent"
            :index="activeIndex"
          />
        </div>
      </div>
      <div
        class="arrow right"
        :class="{disabled: isLastActive}"
        @click="navigateActive(1)"
      />
    </div>
    <list
      class="button_list clearfix"
      :content="content"
      :li-style="buttonStyle"
      :li-class="buttonClass"
    >
      <template slot-scope="slotProps">
        <div
          class="button_content"
          @click="activeIndex = slotProps.index"
        >
          <slot
            name="buttonContent"
            :item="slotProps.item"
            :index="slotProps.index"
          />
        </div>
      </template>
    </list>
    <div class="content_warpper">
      <owl-carousel
        :content="content"
        :options="contentCarouselOptions"
        v-model="activeIndex"
        class="contents"
      >
        <div
          class="main_content_container"
          slot-scope="slotProps"
          v-html="slotProps.item.desc"
        />
      </owl-carousel>
    </div>
  </div>
</template>

<script>
import { contentProp, contentCarouselOptions, generateVModelMixin } from '~/components/mixins/general';

import list from '~/components/utils/list.vue';
import owlCarousel from '~/components/owl-carousel.vue';

export default {
  mixins: [contentProp, contentCarouselOptions, generateVModelMixin({
    propName: 'activeIndex',
    event: 'change',
    type: Number,
    _default: 0
  })],

  components: {
    list,
    owlCarousel
  },

  props: {
    setButtonWidth: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    buttonStyle() {
      return this.setButtonWidth && {
        width: 100 / this.content.length + '%'
      };
    },
    buttonClass() {
      return {
        [this.activeIndex]: 'active'
      };
    },
    isFirstActive() {
      return this.activeIndex == 0;
    },
    isLastActive() {
      return this.activeIndex == this.content.length - 1;
    },
    activeContent() {
      return this.content[this.activeIndex];
    }
  },

  methods: {
    navigateActive(index) {
      var newIndex = this.activeIndex + index;

      if(newIndex < 0 || newIndex >= this.content.length) 
        return;
      
      this.activeIndex = newIndex;
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.tab_container {
  > .responsive_button_select_wrapper {
    display: none;
    background: $orange;
    @extend %padv_extra_small;
    color: #fff;
    align-items: center;
    
    > .arrow {
      @extend %padh_mini;
      $options: (
        tip_length: 15px,
        broadness: 20px,
        color: #fff
      );
      transition: all 0.3s;

      &.left {
        @include create_filled_arrow(
          map-merge(
            (
              direction: left
            ),
            $options
          )
        );
      }
      &.right {
        @include create_filled_arrow(
          map-merge(
            (
              direction: right
            ),
            $options
          )
        );
      }

      &.disabled {
        opacity: 0.3;
      }
    }
    > .selected_wrapper {
      flex: 1;
      text-align: center;
      > .main_content {
        @include inline_valign();
        @extend %L_font_size;
        font-weight: bold;
      }
    }
  }
  > ul.button_list {
    width: 100%;
    > li {
      position: relative;
      float: left;
      background: $light_background_color;
      > .button_content {
        position: relative;
        @extend %pad_extra_small;
        font-weight: bold;
        text-align: center;
        cursor: pointer;
        z-index: 1;
        transition: all 0.3s;
        &:before {
          content: "";
          position: absolute;
          left: 0%;
          bottom: 0%;
          width: 100%;
          height: 0%;
          background: $purple;
          opacity: 0;
          z-index: -1;
          transition: all 0.3s;
        }
      }
      &:hover,
      &.active {
        > .button_content {
          color: #fff;
          &:before {
            height: 100%;
            opacity: 1;
          }
        }
      }
      &.active > .button_content:before {
        background: $orange;
      }
      &:not(:last-child) {
        > .button_content:after {
          $height: 60%;
          content: "";
          position: absolute;
          right: -1px;
          top: (100 - $height) / 2;
          width: 1px;
          height: $height;
          background: $dark_background_color;
          transition: all 0.3s;
        }
        &.active > .button_content:after {
          background: transparent;
        }
      }
    }
  }
  > .content_warpper {
    background: $light_background_color;
    @include multi_media(
      border-top,
      (
        default: 3px,
        _onlymobile: 2px
      ),
      (
        suffix: " solid " + $orange
      )
    );
  }
  &.simple_content_tab > .content_warpper {
    @extend %pad_small;
  }
}
</style>