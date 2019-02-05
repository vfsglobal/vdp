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
    @extend %col4_big;
    @extend %marv_normal;
    > li {
      position: relative;

      &:not(:last-child) {
        padding-right: $box_big_spacing;
        &:after {
          content: "";
          display: block;
          position: absolute;
          right: 0%;
          top: 0%;
          width: 1px;
          height: 100%;
          background: $light_border_color;
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
