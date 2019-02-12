<template>
  <div class="countrypedia_map_container">
    <div class="outer_map_container">
      <svg-map
        :countries="countries"
        v-model="activeIndex"
      />
      <div class="info">This map is only for representation purpose.</div>
    </div>
    <box-list type="countrypediaFlagItems" />
  </div>
</template>

<script>
import { countrySelectionProps } from '~/components/mixins/general';

import svgMap from '~/components/utils/svg-map.vue';
import boxList from '~/components/box-list.vue';

export default {
  mixins: [countrySelectionProps],

  components: {
    svgMap,
    boxList
  },

  methods: {
    flagItemClicked({index}) {
      this.activeIndex = index;
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.countrypedia_map_container {
  $break_point: Lmobile;

  > .outer_map_container {
    @include media($break_point) {
      display: none;
    }

    position: relative;

    > .info {
      position: absolute;
      right: 0%;
      bottom: 0%;
      @extend %XS_font_size;
    }
  }

  ul.box_list.countrypediaFlagItems {
    @extend %col3_small;

    @include media(-$break_point) {
      display: none;
    }
  }
}
</style>
