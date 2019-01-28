<template>
  <div class="container">
    <basic-section
      type="bg"
      :options="{image: 'countrypedia.jpg'}"
    >
      <div class="countrypedia_map_container">
        <svg-map
          :countries="countryList"
          v-model="activeCountryIndex"
        />
        <div class="info">This map is only for representation purpose.</div>
      </div>
    </basic-section>
    <div class="wrapper purple_heading_container">
      <transition name="purple-heading">
        <purple-heading-wrapper
          v-if="activeCountry"
          :key="activeCountry.title"
        >{{activeCountry.title}}</purple-heading-wrapper>
      </transition>
    </div>
    <basic-section v-if="activeCountry" class="main_content_container">
      <div class="inner_page_container">
        <nuxt-child />
      </div>
    </basic-section>
  </div>
</template>

<script>
import { pageDefault } from '~/components/mixins/page';
import { generateURLAndListIndexSyncMixin } from '~/components/mixins/general';

import svgMap from '~/components/utils/svg-map.vue';
import purpleHeadingWrapper from '~/components/purple-heading-wrapper.vue';

import { mapGetters } from 'vuex';

export default {
  mixins: [pageDefault, generateURLAndListIndexSyncMixin({
    listName: 'countryList',
    activeIndexName: 'activeCountryIndex',
    linkType: '/',
    landingPagePath: '/countrypedia'
  })],

  components: {
    svgMap,
    purpleHeadingWrapper
  },

  computed: {
    ...mapGetters({
      countryList: 'countrypedia/correctedListContent'
    }),
    activeCountry() {
      return this.activeCountryIndex == -1 ? null : this.countryList[this.activeCountryIndex];
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

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