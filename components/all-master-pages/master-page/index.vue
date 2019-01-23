<template>
  <div class="container">
    <banner :image="bannerImage">
      <slot name="banner" />
    </banner>
    <section
      class="off_white_bg"
      :class="bannerNextSectionTypeDetails.offWhiteSectionClass"
    >
      <div class="wrapper">
        <purple-heading-wrapper
          :heading-tag="purpleHeadingTag"
          :class="bannerNextSectionTypeDetails.purpleHeadingClass"
        >{{purpleHeadingText}}</purple-heading-wrapper>
        <slot name="bannerNextSection" />
      </div>
    </section>
    <slot />
    <stats-list-wrapper v-if="!isHome" />
  </div>
</template>

<script>
import { generateTypeDetailsMixin } from '~/components/mixins/general';

import banner from './banner.vue';
import purpleHeadingWrapper from '~/components/purple-heading-wrapper.vue';
import statsListWrapper from './stats-list-wrapper.vue';

var allBannerNextSectionTypeDetails = {
  overlapContent: {
    offWhiteSectionClass: 'padb_small',
    purpleHeadingClass: 'overlap_content'
  }
};

export default {
  name: 'master-page',

  mixins: [generateTypeDetailsMixin({
    namePrefix: 'bannerNextSection',
    data: allBannerNextSectionTypeDetails,
    includeProp: true
  })],

  components: {
    banner,
    purpleHeadingWrapper,
    statsListWrapper
  },

  props: {
    bannerImage: {
      type: [String, Object],
      required: true
    },
    purpleHeadingText: {
      type: String,
      required: true
    },
    isHome: {
      type: Boolean,
      default: false
    }
  },

  computed: {
      purpleHeadingTag() {
          return this.isHome ? undefined : 'h1';
      }
  }
}
</script>