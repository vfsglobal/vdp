<template>
  <section
    class="basic"
    :class="type"
  >
    <div
      class="bg"
      :style="style"
    />
    <div class="wrapper">
      <slot />
    </div>
  </section>
</template>

<script>
import { optionsProp, generateTypeDetailsMixin } from '~/components/mixins/general';
import { createImageStyle } from '~/utils';

function createBannerImageStyle() {
  return createImageStyle(this.options.image, 'banners/')
}

var allTypeDetails = {
  bg: createBannerImageStyle,
  bg_and_bottom_border: createBannerImageStyle
};

export default {
  mixins: [optionsProp, generateTypeDetailsMixin({
    data: allTypeDetails,
    includeProp: true,
    includeBlankForNotFound: false
  })],

  data() {
    return {
      mounted: false,
      windowLoaded: false
    };
  },

  computed: {
    style() {
      var style_fn = this.typeDetails;

      return style_fn && style_fn.call(this);
    }
  },

  mounted() {
    this.mounted = true;
  },

  outerHooks: {
    windowLoaded() {
      this.windowLoaded = true;
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

section.basic {
  position: relative;
  @extend %padv_big;
  z-index: 1;

  > .bg {
    position: absolute;
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    z-index: -1;
  }

  .heading_wrapper > .main_heading {
    text-align: center;
    @extend %marv_big;
  }

  &.bg_and_bottom_border {
    @include multi_media(
      border-bottom,
      $main_boder_thickness,
      (
        suffix: " solid " + $purple
      )
    );
  }

  &.bottom_seperator > .wrapper {
    @extend %padb_normal;
    border-bottom: 1px solid $light_border_color;
  }

  &:last-child {
    @extend %padb_extra_big;
  }
}
</style>