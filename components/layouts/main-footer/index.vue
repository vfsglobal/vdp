<template>
  <footer>
    <div class="wrapper">
      <ul class="main_content_list">
        <li>
          <div class="main_content_wrapper">
            <h3>Get in touch</h3>
            <div class="main_content">
              <p><strong>Address:</strong> <span v-html="address" /></p>
              <br>
              <p><strong>Ph:</strong> <span v-html="contactNoHTML" /></p>
              <p><strong>Email:</strong>
                <email-link :email="email" />
              </p>
            </div>
          </div>
        </li>
        <li>
          <div class="main_content_wrapper">
            <h3>Our Services</h3>
            <div class="main_content">
              <list
                :content="services"
                class="link_list"
              >
                <hyperlink
                  slot-scope="slotProps"
                  :link="slotProps.item.link"
                >{{slotProps.item.text}}</hyperlink>
              </list>
            </div>
          </div>
        </li>
        <li>
          <div class="main_content_wrapper">
            <h3>Quick links</h3>
            <div class="main_content">
              <list
                :content="topNav"
                class="link_list"
              >
                <hyperlink
                  slot-scope="slotProps"
                  :link="slotProps.item.link"
                >{{slotProps.item.text}}</hyperlink>
              </list>
            </div>
          </div>
        </li>
        <li>
          <div class="main_content_wrapper">
            <img
              :src="'images/vdp-global-services-logo.png' | router-url"
              alt="VDP Global Services"
              class="main_image"
            />
            <div class="main_content">
              VDP Global Services is a registered trademark of VFS Data Processing Pvt. Ltd.
            </div>
          </div>
        </li>
      </ul>
    </div>
    <copyright-wrapper />
  </footer>
</template>

<script>
import list from '~/components/utils/list.vue';
import copyrightWrapper from './copyright-wrapper.vue';

import { mapState, mapGetters } from 'vuex';

export default {
  name: 'main-footer',

  components: {
    list,
    copyrightWrapper
  },

  computed: {
    ...mapState({
      email: state => state['contact-details'].emailId,
      topNav: state => state['top-nav'].list
    }),
    ...mapGetters({
      services: 'services/linkList',
      address: 'contact-details/addressText',
      contactNoHTML: 'contact-details/contactNoHTML'
    })
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

footer {
  background: $light_background_color;
  $break_point: mobile;

  @include multi_media(
    border-top,
    (
      default: 3px,
      _onlymobile: 2px
    ),
    (
      suffix: " solid " + $purple
    )
  );
  ul.main_content_list {
    $col_type: 4_full;
    @extend %col#{$col_type};
    @extend %marv_normal;
    > li {
      $bottom_spacing: map-get($space_details, normal);
      $border_color: $light_border_color;
      position: relative;
      @include multi_media(
        margin-bottom,
        $bottom_spacing,
        (
          multiply: 2
        )
      );
      @include media($break_point) {
        justify-content: center;
        text-align: center;
      }
      &:before {
        content: "";
        display: block;
        position: absolute;
        left: 0%;
        @include multi_media(
          bottom,
          $bottom_spacing,
          (
            prefix: "-"
          )
        );
        width: 100%;
        height: 1px;
        background: $border_color;
      }
      @include add_col_selector_css($col_type, last_row) {
        margin-bottom: 0px;
        &:before {
          display: none;
        }
      }
      @include add_col_selector_css($col_type, first_column, true) {
        padding-left: $box_big_spacing;
      }
      @include add_col_selector_css($col_type, last_column, true) {
        padding-right: $box_big_spacing;
        &:after {
          content: "";
          display: block;
          position: absolute;
          right: 0%;
          top: 50%;
          width: 1px;
          height: 90%;
          background: $border_color;
          transform: translateY(-50%);
        }
      }
      > .main_content_wrapper {
        > h3,
        > img.main_image {
          @extend %marb_normal;
        }
        > h3 {
          color: $dark_content_color;
          @extend %L_font_size;
          font-weight: bold;
          text-transform: uppercase;
        }
        > .main_content {
          @extend %XS_font_size;
          line-height: 1.5em;
        }
        ul.link_list > li:not(:last-child) {
          @extend %marb_extra_mini;
        }
        a {
          color: inherit;
          transition: all 0.3s;
          &:hover {
            color: $orange;
          }
        }
      }
    }
  }
}
</style>
