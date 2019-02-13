<template>
  <div class="container countrypedia">
    <basic-section
      type="bg"
      :options="{
        image: {
          name: 'countrypedia.jpg',
          position: 'top'
        }
      }"
    >
      <countrypedia-map-container
        :countries="countryList"
        v-model="activeCountryIndex"
      />
    </basic-section>
    <div class="heading_page_container" v-animate-height="{duration: 1000}">
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
            <list
              :content="activeCountry.mainInfo"
              class="heading_content_list"
            >
              <template slot-scope="slotProps">
                <h4 class="normal">{{slotProps.item.heading}}</h4>
                <div class="main_content"><strong>{{slotProps.item.value}}</strong></div>
              </template>
            </list>
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

import countrypediaMapContainer from '~/components/countrypedia-map-container.vue';
import list from '~/components/utils/list.vue';
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
    countrypediaMapContainer,
    list,
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
@import "./assets/scss/globals/main";

.countrypedia .inner_page_container ul.heading_content_list {
  @extend %col2;
}
</style>