<template>
  <master-page
    banner-image="contact-us.jpg"
    purple-heading-text="Contact Us"
  >
    <basic-section>
      <div class="contact_us_content_container">
        <div class="map_container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42680.108777851805!2d72.80171918044789!3d19.001016370731318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef2d9f22acb%3A0x2c82fb36993053bd!2sUrmi+Estate!5e0!3m2!1sen!2sin!4v1548144602710"
            allowfullscreen
          ></iframe>
          <div class="main_content_container">
            <div class="main_content">
              <section class="address_wrapper">
                <h4 class="main_heading small_border_space">Address</h4>
                <p v-html="address" />
              </section>
              <ul class="icon_info_list">
                <li>
                  <i class="icon-email" />
                  <div class="main_content_wrapper">
                    <h4>Email Us</h4>
                    <div class="main_content">
                      <email-link :email="email" />
                    </div>
                  </div>
                </li>
                <li>
                  <i class="icon-phone" />
                  <div class="main_content_wrapper">
                    <h4>Call Us</h4>
                    <div
                      class="main_content"
                      v-html="contactNoHTML"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/page';

import { mapState, mapGetters } from 'vuex';

export default {
  mixins: [pageDefault],

  computed: {
    ...mapState('contact-details', {
      address: state => state.addressHTML,
      email: state => state.emailId
    }),
    ...mapGetters({
      contactNoHTML: 'contact-details/contactNoHTML'
    })
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.contact_us_content_container > .map_container {
  $first_break_point: Stablet;
  $second_break_point: Lmobile;
  $only_first_break_point: $first_break_point + "/" + $second_break_point;
  display: flex;
  height: 280px;
  overflow: hidden;
  @include media($first_break_point) {
    flex-direction: column;
    height: auto;
  }
  > iframe {
    display: block;
    flex: 1;
    height: inherit;
    border: 1px solid $light_border_color;
    border-right: none;
    box-sizing: border-box;
  }
  > .main_content_container {
    display: flex;
    position: relative;
    width: 320px;
    @extend %pad_normal;
    background: $light_background_color2;
    box-shadow: 0px 0px 10px 3px $light_shadow_color;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    @include media($first_break_point) {
      flex: 1;
      width: 100%;
    }
    > .main_content {
      display: flex;
      flex-direction: column;
      @include media($only_first_break_point) {
        flex-direction: row;
        align-items: center;
      }
      > .address_wrapper {
        text-align: center;
        @extend %padb_normal;
        @include media($only_first_break_point) {
          padding-right: 30px;
          padding-bottom: 0px;
        }
      }
      > ul.icon_info_list > li {
        display: flex;
        align-items: center;
        &:not(:last-child) {
          @extend %marb_extra_small;
        }
        > i {
          $size: (
            default: 45px,
            _onlySdesktop: 35px,
            _onlymobile: 32px
          );
          display: flex;
          @include add_css_from_map(
            (
              (
                  width height
                ):
                $size,
              font-size: (
                default: 25px,
                _onlySdesktop: 23px,
                _onlymobile: 20px
              ),
              border-radius: (
                default: 5px,
                _onlymobile: 4px
              )
            )
          );
          background: $orange;
          color: #fff;
          align-items: center;
          justify-content: center;
        }
        > .main_content_wrapper {
          flex: 1;
          @extend %padl_extra_small;
          > h4 {
            @extend %padb_extra_mini;
          }
          > .main_content {
            @include multi_media(
              font-size,
              (
                default: 16px,
                _onlySdesktop: 14px,
                _onlymobile: 13px
              )
            );
          }
        }
      }
    }
  }
}
</style>
