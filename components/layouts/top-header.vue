<template>
  <header>
    <div class="wrapper">
      <div class="logo">
        <nuxt-link to="/">
          <img
            :src="'images/vdp-global-services-logo.png' | router-url"
            alt="VDP Global Services"
          />
        </nuxt-link>
      </div>
      <ul class="extra_content">
        <li>
          <icon-text icon="phone">
            <strong v-html="contactNoHTML" />
          </icon-text>
        </li>
        <li>
          <icon-text icon="email">
            <email-link
              :email="email"
              wrapper-tag="strong"
            />
          </icon-text>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import routerBaseUrl from '~/router-base-url';
import iconText from '~/components/utils/icon-text.vue';

import { mapState, mapGetters } from 'vuex';

export default {
  components: {
    iconText
  },

  data() {
    return {
      routerBaseUrl
    };
  },

  computed: {
    ...mapGetters({
      contactNoHTML: 'contact-details/contactNoHTML'
    }),

    ...mapState('contact-details', {
      email: state => state.emailId
    })
  }
};
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

header {
  $break_point: mobile;

  @extend %XS_font_size;
  @include multi_media(
    border-top,
    $main_boder_thickness,
    (
      suffix: " solid " + $orange
    )
  );
  @extend %padv_extra_small;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul.extra_content {
      text-align: center;
      > li {
        @include inline_valign();
        @extend %padv_mini;
        @include media($break_point) {
          $padding: 7px;

          display: block;
          padding-top: $padding;
          padding-bottom: $padding;
        }
        a {
          color: inherit;
          transition: all 0.3s;
          &:hover {
            color: $orange;
          }
        }
        .icon_text > i {
          color: $purple;
          @include multi_media(
            font-size,
            (
              default: 24px,
              _onlySdesktop: 20px,
              _onlymobile: 18px
            )
          );
        }
        &:not(:last-child) {
          $border: 1px solid #ddd;
          @extend %padr_normal;
          border-right: $border;
          @extend %marr_normal;
          @include media($break_point) {
            border-right: none;
            padding-right: 0px;
            margin-right: 0px;
            border-bottom: $border;
          }
        }
        > * {
          @include inline_valign();
        }
      }
    }
  }
}
</style>
