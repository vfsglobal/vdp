<template>
  <master-page
    banner-image="about-us.jpg"
    purple-heading-text="About Us"
  >
    <template slot="banner">
      <owl-carousel type="statsMainListBig" />
    </template>
    <basic-section>
      <p
        class="main"
        v-html="mainPara"
      />
      <ul class="about_us_box_content_list">
        <li>
          <div class="main_content_wrapper about_us">
            <h3 class="main_heading bottom_space">About Us</h3>
            <div class="main_content_container">
              <p>Since 2010, VDP Global has been helping organisations streamline their HR services and achieve their vision of an efficient and trusted Human Resource function. </p>
              <p>Operating through a centralised setup, it has grown from being an in-house HR Expertise Centre into an HR Outsourcing organisation. With an ever growing Expertise Centre and Partner network that caters to various HR functions across industries and geographies, VDP Global is now a trusted partner of several clients.</p>
            </div>
          </div>
        </li>
        <li>
          <div class="main_content_wrapper our_story">
            <h3 class="main_heading bottom_space">Our Story</h3>
            <div class="main_content_container">
              <p>Since its setup in 2010, VDP has grown from being an in-house HR Expertise Center into an HR Outsourcing organisation with an ever growing Expertise Center and Partner network that can cater to various HR functions across industries and geographies.</p>
              <p>A truly diverse team and vast knowledge of core HR functions, makes VDP a trusted partner of the clients.</p>
            </div>
          </div>
        </li>
      </ul>
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/page';

import owlCarousel from '~/components/owl-carousel.vue';

import { mapState } from 'vuex';

export default {
  mixins: [pageDefault],

  components: {
    owlCarousel
  },

  computed: {
    ...mapState('about-us-main-para', {
      mainPara: state => state.content
    })
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

ul.about_us_box_content_list {
  @extend %col2;

  .main_content_wrapper {
    @extend %pad_big;
    box-sizing: border-box;

    &.about_us {
      background: $purple;
      color: #fff;
    }

    &.our_story {
      background: $light_background_color;
    }
  }
}
</style>
