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
    showBySlideOptions() {
      return {
        show: this.isOpen,
        slideDuration: this.slideDuration
      };
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
@import "./assets/scss/globals";

ul.accordion > li {
  $left_border_width: 5px;
  $transition: all $accordion_transition_duration;

  position: relative;
  background: $light_background_color;
  border-left: $left_border_width solid $purple;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -$left_border_width;
    bottom: 0%;
    width: $left_border_width;
    height: 0%;
    background: $orange;
    transition: $transition;
  }

  &:hover:before,
  &.active:before {
    height: 100%;
  }

  > .accordion_button {
    position: relative;
    padding: 10px $accordion_hor_padding;
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

    > .button_content > h4 {
      font-size: 18px;
    }

    > .arrow {
      @include create_circle_arrow(
        unfilled,
        25px,
        (
          direction: bottom,
          size: 7px,
          border_width: 2px,
          color: $purple
        ),
        (
          position: absolute
        )
      ) {
        transition: $transition;
      }
      right: $accordion_hor_padding;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  &.active > .accordion_button {
    color: #fff;
    &:before {
      height: 100%;
    }
    > .arrow {
      @include set_circle_arrow_color(unfilled, #fff);
      transform: translateY(-50%) rotate(180deg);
    }
  }
  > .accordion_content > .main_content_container {
    padding: $accordion_hor_padding;
  }
}
</style>