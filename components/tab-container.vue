<template>
  <div class="tab_container">
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
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.tab_container {
  > ul.button_list {
    width: 100%;

    > li {
      position: relative;
      float: left;
      background: $light_background_color;

      > .button_content {
        position: relative;
        padding: 10px;
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
    border-top: 3px solid $orange;
  }

  &.simple_content_tab > .content_warpper {
    padding: 15px;
  }
}
</style>