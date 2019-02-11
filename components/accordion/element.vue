<template>
  <li :class="{active: isOpen}">
    <div
      class="accordion_button"
      @click="isOpen = !isOpen"
    >
      <div class="button_content">
        <slot name="buttonContent" />
      </div>
      <span class="arrow" />
    </div>
    <div
      class="accordion_content"
      v-show-by-slide="showBySlideOptions"
    >
      <div class="main_content_container">
        <slot />
      </div>
    </div>
  </li>
</template>

<script>
import { checkAndPush, removeElementFromArr } from '~/utils';

export default {
  name: 'accordion-element',

  data() {
    return {
      isOpen: false
    };
  },

  computed: {
    slideDuration() {
      return this.$parent.mainSlideDuration;
    },
    scrollToTop() {
      return this.slideDuration ? {
        on: 'show',
        selector: 'li'
      } : false;
    },
    showBySlideOptions() {
      var options = {
        show: this.isOpen,
        scrollToTop: this.scrollToTop
      };

      if (this.slideDuration != undefined)
        options.duration = this.slideDuration;
      
      return options;
    }
  },

  watch: {
    isOpen(val) {
      var $parent = this.$parent;

      if (val)
        checkAndPush($parent.openedElements, this);
      else
        removeElementFromArr($parent.openedElements, this);
    }
  },

  destroyed() {
    removeElementFromArr(this.$parent.openedElements, this);
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

ul.accordion > li {
  $left_border_width: (
    default: 5px,
    _onlySdesktop: 4px,
    _onlymobile: 3px
  );
  $transition: all $accordion_transition_duration;
  position: relative;
  background: $light_background_color;
  @include multi_media(
    border-left,
    $left_border_width,
    (
      suffix: " solid " + $purple
    )
  );
  &:not(:last-child) {
    @extend %marb_normal;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    @include add_css_from_map(
      (
        left:
          modify_map_value(
            $left_border_width,
            (
              prefix: "-"
            )
          ),
        width: $left_border_width
      )
    );
    bottom: 0%;
    height: 0%;
    background: $orange;
    transition: $transition;
  }
  &:hover:before,
  &.active:before {
    height: 100%;
  }
  > .accordion_button {
    display: flex;
    position: relative;
    @extend %padv_extra_small;
    @include multi_media((padding-left padding-right), $accordion_hor_padding);
    align-items: center;
    cursor: pointer;
    z-index: 1;
    transition: $transition;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0%;
      bottom: 0%;
      width: 100%;
      height: 0%;
      background: $orange;
      z-index: -1;
      transition: $transition;
    }
    > .button_content {
      flex: 1;
      @include multi_media(padding-right, $accordion_hor_padding);
      > h4 {
        @extend %L2_font_size;
      }
    }
    > .arrow {
      @include create_circle_arrow(
        unfilled,
        (
          default: 25px,
          _onlySdesktop: 22px,
          _onlymobile: 20px
        ),
        (
          direction: bottom,
          size: (
            default: 7px,
            _onlySdesktop: 6px,
            _onlymobile: 6px
          ),
          border_width: (
            default: 2px,
            _onlymobile: 1px
          ),
          color: $purple
        )
      ) {
        transition: $transition;
      }
    }
  }
  &.active > .accordion_button {
    color: #fff;
    &:before {
      height: 100%;
    }
    > .arrow {
      @include set_circle_arrow_color(unfilled, #fff);
      transform: rotate(180deg);
    }
  }
  > .accordion_content > .main_content_container {
    @include multi_media(padding, $accordion_hor_padding);
  }
}
</style>