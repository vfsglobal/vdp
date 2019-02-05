<template>
  <nav>
    <div class="wrapper">
      <menu-nav :content="navContent" />
    </div>
    <button class="responsive_toggle"> Menu </button>
  </nav>
</template>

<script>
import menuNav from '~/components/utils/menu-nav.vue';

import { mapState } from 'vuex';

export default {
  components: {
    menuNav
  },
  computed: {
    ...mapState('top-nav', {
      navContent: state => state.list
    })
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

nav {
  $break_point: tablet;

  $height: (
    default: 50px,
    _onlySdesktop: 45px,
    _onlymobile: 40px
  );

  background: $purple;
  %height_with_line_height {
    @include add_css_from_map(
      (
        height: $height,
        line-height: $height
      )
    );
  }
  ul.menu_nav {
    display: flex;
    justify-content: space-between;
    @include media($break_point) {
      display: none;
    }
    > li {
      $link_hover_border_height: (
        default: 3px,
        _onlySdesktop: 2px,
        _onlymobile: 1px
      );
      $link_hover_border_radius: modify_map_value(
        $link_hover_border_height,
        (
          repeat: 2
        )
      );
      %hover {
        &:before,
        &:after {
          @include multi_media(height, $link_hover_border_height);
        }
      }
      > a {
        position: relative;
        display: block;
        @extend %height_with_line_height;
        @extend %padh_extra_mini;
        color: #fff;
        text-transform: uppercase;
        @extend %S_font_size;
        font-weight: bold;
        transition: 0.3s;
        &:before,
        &:after {
          content: "";
          position: absolute;
          left: 0%;
          width: 100%;
          height: 0px;
          background: $orange;
          transition: all 0.3s;
        }
        &:before {
          top: 0%;
          @include multi_media(
            border-radius,
            $link_hover_border_radius,
            (
              prefix: "0 0 "
            )
          );
        }
        &:after {
          bottom: 0%;
          @include multi_media(
            border-radius,
            $link_hover_border_radius,
            (
              suffix: " 0 0"
            )
          );
        }
        &:hover {
          @extend %hover;
        }
      }
      &:first-child > a.nuxt-link-exact-active,
      &:not(:first-child) > a.nuxt-link-active {
        @extend %hover;
      }
    }
  }
  button.responsive_toggle {
    display: none;
    position: relative;
    width: 100%;
    color: #fff;
    @extend %height_with_line_height;
    @extend %S_font_size;
    font-weight: bold;
    outline: none;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: (100 - $wrapper_width) / 2;
      top: 50%;
      @include add_lines(35px, 5px, #fff, 3, 5px);
    }
    @include media($break_point) {
      display: block;
    }
  }
}
</style>
