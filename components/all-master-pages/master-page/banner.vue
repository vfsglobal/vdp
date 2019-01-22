<template>
  <div
    class="banner"
    :style="imageStyle"
  >
    <div
      class="wrapper"
      v-if="$slots.default"
    >
      <div class="main_content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { createImageStyle } from '~/utils';

export default {
  props: {
    image: {
      type: [String, Object],
      required: true
    }
  },
  computed: {
    imageStyle() {
      return createImageStyle(this.image, 'banners/');
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

.banner {
  $bottom_overlap_space: 50px;

  display: flex;
  position: relative;
  min-height: 450px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: -$bottom_overlap_space;
  align-items: center;
  z-index: 1;

  > .wrapper > .main_content {
    padding-bottom: $bottom_overlap_space;
    text-align: center;
    color: #fff;

    .big_heading {
      font-size: 48px;
      font-weight: bold;
      text-shadow: 3px 3px 3px $shadow_color;
    }

    > p {
      font-size: 18px;
      line-height: 28px;
      padding-top: 20px;
    }

    > a.main_button {
      display: inline-block;
      margin-top: 20px;
      padding: 10px 20px;
      background: $orange;
      color: #fff;
      font-size: 16px;
      border-radius: 10px;
      box-shadow: 5px 5px 5px $shadow_color;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
