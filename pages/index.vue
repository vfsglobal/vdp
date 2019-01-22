<template>
  <master-page
    banner-image="home.jpg"
    banner-next-section-type="overlapContent"
    purple-heading-text="Our Services"
    is-home
  >
    <template slot="banner">
      <h1 class="big_heading">Welcome to VDP Global Services</h1>
      <p v-html="bannerPara" />
      <hyperlink
        link="/about"
        class="main_button"
      >Know more...</hyperlink>
    </template>
    <template slot="bannerNextSection">
      <box-list type="services" />
    </template>
    <basic-section>
      <div class="heading_wrapper">
        <box-list type="statsShortListBig" />
      </div>
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/general';

import boxList from '~/components/box-list.vue';

import { mapState } from 'vuex';

export default {
  mixins: [pageDefault],

  components: {
    boxList
  },

  computed: mapState('about-us-main-para', {
    bannerPara: state => state.content
  })
}
</script>
