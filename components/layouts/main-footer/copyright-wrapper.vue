<template>
  <div class="copyright_wrapper">
    <div class="wrapper">
      <div class="main_content">
        <list
          :content="links"
          class="clearfix"
        >
          <hyperlink
            slot-scope="slotProps"
            :link="slotProps.item.link"
            class="bottom_border"
          >{{slotProps.item.text}}</hyperlink>
        </list>
        <span>Copyright &copy; {{year}} All Rights Reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
import list from '~/components/utils/list';

import { mapState } from 'vuex';

export default {
  components: {
    list
  },

  data() {
    return {
      year: new Date().getFullYear()
    };
  },

  computed: mapState('footer-extra-links', {
    links: state => state.list
  })
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.copyright_wrapper {
  $text_color: rgba(#fff, 0.7);
  $pad_key: small;
  $first_break_point: Ltablet;
  $second_break_point: Stablet;
  $only_first_break_point: $first_break_point + "/" + $second_break_point;

  @extend %pad_#{$pad_key};
  @extend %XS_font_size;
  background: $purple;
  text-align: center;

  &,
  a {
    color: $text_color;
  }

  > .wrapper {
    > .main_content {
      display: table;
      margin: 0 auto;
      direction: rtl;

      > * {
        direction: ltr;
        @include inline_valign();

        @include media($first_break_point) {
          display: block;
        }
      }

      > ul {
        $col_type: 3_non_default;
        @extend %col#{$col_type};
        @include media($first_break_point) {
          @include multi_media(
            (padding-bottom margin-bottom),
            map-get($space_details, $pad_key)
          );
          border-bottom: 1px solid rgba($text_color, 0.1);
        }

        > li {
          position: relative;
          float: left;
          @include media($second_break_point) {
            float: none;
          }

          $hor_spacing: map-get($space_details, extra_small);
          @include multi_media((padding-left margin-left), $hor_spacing);

          &:before {
            $seperator_height: 70%;

            content: "";
            display: block;
            position: absolute;
            left: 0%;
            top: (100 - $seperator_height) / 2;
            width: 1px;
            height: $seperator_height;
            background: $text_color;
          }

          @mixin hide_left_space() {
            padding-left: 0px;
            margin-left: 0px;
          }

          @mixin hide_border() {
            &:before {
              display: none;
            }
          }

          @include media($only_first_break_point) {
            &:first-child {
              @include hide_left_space();
              @include hide_border();
            }
          }

          @include media($second_break_point) {
            @include hide_left_space();
            @include multi_media((padding-left padding-right), $hor_spacing);
            justify-content: center;

            @include add_col_selector_css($col_type, first_column) {
              @include hide_border();
            }
          }

          a {
            transition: all 0.3s;

            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
