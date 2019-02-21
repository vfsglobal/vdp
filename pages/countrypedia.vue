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
    <div class="heading_page_container" ref="headingPageContainer">
      <div class="wrapper purple_heading_container" ref="purpleHeadingContainer">
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
            <p class="small top_space"><sup>*</sup>This document may not be used as a guide for policy or regulation.</p>
          </basic-section>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { pageDefault } from '~/components/mixins/page';
import { jQueryRefs, generateURLAndListIndexSyncMixin } from '~/components/mixins/general';

import countrypediaMapContainer from '~/components/countrypedia-map-container.vue';
import list from '~/components/utils/list.vue';
import purpleHeadingWrapper from '~/components/purple-heading-wrapper.vue';

import { mapState, mapGetters } from 'vuex';

import { animateHeight } from '~/utils';

export default {
  mixins: [pageDefault, jQueryRefs, generateURLAndListIndexSyncMixin({
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

  data() {
    return {
      animateHeightOptions: {
        callbacks: {
          animateComplete: () => {
            this.$purpleHeadingContainer.css('height', '');
          }
        }
      }
    }
  },

  computed: {
    ...mapGetters({
      countryList: 'countrypedia/correctedListContent'
    }),
    ...mapState('countrypedia', {
      animateHeightDuration: state => state.animateHeightDuration
    }),
    activeCountry() {
      return this.activeCountryIndex == -1 ? null : this.countryList[this.activeCountryIndex];
    },
    mainAnimateHeightOptions() {
      return {
        ...this.animateHeightOptions,
        duration: this.animateHeightDuration,
        toHeight: this.activeCountry ? 'auto' : '0px'
      }
    }
  },

  watch: {
    activeCountry(val) {
      if (val) return;

      this.$purpleHeadingContainer.css('height', this.$purpleHeadingContainer.height() + 'px');
    },
    $route() {
      this.$headingPageContainer.css('height', this.$headingPageContainer.height() + 'px');
      
      setTimeout(() => {
        animateHeight(this.$headingPageContainer, this.mainAnimateHeightOptions);
      });
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