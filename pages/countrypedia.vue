<template>
  <div class="countrypedia_container" :style="imageStyle">
    <h2>Comming soon...</h2>
  </div>
</template>

<script>
import { pageDefault } from '~/components/mixins/general';
import { createImageStyle } from '~/utils';

export default {
  mixins: [pageDefault],

  computed: {
    imageStyle() {
      return createImageStyle('countrypedia.jpg', '/');
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/globals';

.countrypedia_container {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  > h2 {
    font-size: 48px;
    font-weight: bold;
    color: $purple;
  }
}
</style>
