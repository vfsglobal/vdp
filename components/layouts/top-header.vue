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
@import "./assets/scss/globals";

header {
  font-size: 13px;
  border-top: $main_boder_thinckness solid $orange;
  padding: 10px 0px;

  .wrapper {
    @include table_with_cell();

    ul.extra_content {
      text-align: right;

      > li {
        @include inline_valign();
        padding: 7px 0px;

        a {
          color: inherit;
          transition: all 0.3s;

          &:hover {
            color: $orange;
          }
        }

        .icon_text > i {
          color: $purple;
          font-size: 24px;
        }

        &:not(:last-child) {
          $spacing: 20px;

          padding-right: $spacing;
          margin-right: $spacing;
          border-right: 1px solid #ddd;
        }

        > * {
          @include inline_valign();
        }
      }
    }
  }
}
</style>
