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

function createBannerImageStyle(component) {
  return createImageStyle(component.options.image, 'banners/')
}

var allTypeDetails = {
  bg_and_bottom_border() {
    return createBannerImageStyle(this);
  }
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
@import "./assets/scss/globals";

section.basic {
  position: relative;
  padding: $container_spacing 0px;
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

  .heading_wrapper {
    > .main_heading {
      text-align: center;
      margin: $container_spacing 0px;
    }
    > i.main-icon {
      $size: 30px;

      display: block;
      width: $size;
      height: $size;
      line-height: $size;
      font-size: 16px;
      border: 2px solid $orange;
      margin: 0 auto;
      margin-bottom: $container_spacing;
      border-radius: 50%;
      color: $orange;
      text-align: center;
    }
  }

  &.bg_and_bottom_border {
    border-bottom: $main_boder_thinckness solid $purple;
  }

  &:last-child {
    padding-bottom: $container_big_spacing;
  }
}
</style>