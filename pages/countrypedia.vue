<template>
  <div class="container countrypedia">
    <basic-section
      type="bg"
      :options="{image: 'countrypedia.jpg'}"
    >
      <div class="outer_map_container">
        <svg-map
          :countries="countryList"
          v-model="activeCountryIndex"
        />
        <div class="info">This map is only for representation purpose.</div>
      </div>
    </basic-section>
    <div v-animate-height="{duration: 1000}">
      <div class="wrapper purple_heading_container">
        <transition name="purple-heading">
          <purple-heading-wrapper
            v-if="activeCountry"
            :key="activeCountry.title"
          >{{activeCountry.title}}</purple-heading-wrapper>
        </transition>
      </div>
      <div class="inner_page_container">
        <transition name="inner-page">
          <basic-section
            v-if="activeCountry"
            :key="activeCountry.title"
            class="main_content_container"
          >
            <p>All information in this document is as of November 2018. This information is only a reference paper through various website links which is not officially verified. This document may not be used as a guide for policy or regulation. The creator or sender bears no liability for the authentication of this data.</p>
            <!-- <ul
              class="heading_content_list"
              data-column-details="full_col2_details"
            >
              <li>
                <h4>Currency</h4>
                <div class="main_content">Sterling Pounds, GBP (Symbol : £)</div>
              </li>
              <li>
                <h4>Fiscal Year</h4>
                <div class="main_content">6 April – 5 April each year</div>
              </li>
            </ul> -->
            <nuxt-child />
          </basic-section>
        </transition>
      </div>
    </div>
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

.countrypedia {
  .outer_map_container {
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
}
</style>