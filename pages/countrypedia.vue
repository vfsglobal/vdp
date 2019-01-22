<template>
  <div class="container">
    <basic-section>
      <div class="countrypedia_map_container">
        <svg-map
          :countries="countryList"
          v-model="activeCountryIndex"
        />
        <div class="info">This map is only for representation purpose.</div>
      </div>
      <nuxt-child />
    </basic-section>
  </div>
</template>

<script>
import { pageDefault, generateURLAndListIndexSyncMixin } from '~/components/mixins/general';

import svgMap from '~/components/utils/svg-map.vue';

import { mapState } from 'vuex';

export default {
  mixins: [pageDefault, generateURLAndListIndexSyncMixin({
    listName: 'countryList',
    activeIndexName: 'activeCountryIndex',
    linkType: '/',
    landingPagePath: '/countrypedia'
  })],

  components: {
    svgMap
  },

  computed: {
    ...mapState('countrypedia', {
      countryList: state => state.list
    })
  }
}
</script>

<style lang="scss">
.countrypedia_map_container {
  position: relative;

  > .svg_map_container {
    width: 100%;
    height: 500px;
  }

  > .info {
    position: absolute;
    right: 0%;
    bottom: 0%;
    font-size: 12px;
  }
}
</style>