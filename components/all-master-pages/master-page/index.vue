<template>
  <div class="container">
    <banner :image="bannerImage">
      <slot name="banner" />
    </banner>
    <section
      class="off_white_bg"
      :class="bannerNextSectionType"
    >
      <div class="wrapper">
        <purple-heading-wrapper
          :heading-tag="purpleHeadingTag"
        >{{purpleHeadingText}}</purple-heading-wrapper>
        <slot name="bannerNextSection" />
      </div>
    </section>
    <slot />
    <stats-list-wrapper v-if="!isHome" />
  </div>
</template>

<script>
import banner from './banner.vue';
import purpleHeadingWrapper from '~/components/purple-heading-wrapper.vue';
import statsListWrapper from './stats-list-wrapper.vue';

export default {
  name: 'master-page',

  components: {
    banner,
    purpleHeadingWrapper,
    statsListWrapper
  },

  props: {
    bannerNextSectionType: {
      type: String,
      default: 'default'
    },
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

<style lang="scss">
@import "./assets/scss/globals/main";

section.off_white_bg.overlapContent {
  @extend %padb_normal;
}
</style>