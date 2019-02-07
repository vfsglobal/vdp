<template>
  <nav>
    <div class="wrapper">
      <menu-nav
        :content="navContent"
        class="desktop"
      />
    </div>
    <button
      class="responsive_toggle"
      :class="{active: showResponsive}"
      @click="toggleResponsive"
    > Menu </button>
    <transition name="responsive-menu">
      <div
        class="responsive_menu_wrapper"
        v-if="showResponsive"
      >
        <menu-nav :content="navContent" />
      </div>
    </transition>
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
  },

  data() {
    return {
      showResponsive: false
    };
  },

  watch: {
    $route() {
      this.showResponsive = false;
    }
  },

  methods: {
    toggleResponsive() {
      this.showResponsive = !this.showResponsive;
    }
  },

  mounted() {
    var _this = this,
      root_el = this.$el;

    $('body').on('click', function (e) {
      if (!$(e.target).is(root_el) && !$.contains(root_el, e.target))
        _this.showResponsive = false;
    });
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

  position: relative;
  background: $purple;
  z-index: 99;
  %height_with_line_height {
    @include add_css_from_map(
      (
        (height line-height): $height,
      )
    );
  }

  $responsive_active_link_selector: "&:not(:first-child) > a.nuxt-link-active";
  $desktop_active_link_selector: "&:first-child > a.nuxt-link-exact-active, " + $responsive_active_link_selector;

  ul.menu_nav.desktop {
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
      #{$desktop_active_link_selector} {
        @extend %hover;
      }
    }
  }
  %show_responsive {
    display: none;
    @include media($break_point) {
      display: block;
    }
  }
  $responsive_transition_duration: 0.5s;
  button.responsive_toggle {
    @extend %show_responsive;
    position: relative;
    width: 100%;
    color: #fff;
    @extend %height_with_line_height;
    @extend %S_font_size;
    font-weight: bold;
    outline: none;
    z-index: 1;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: $wrapper_left_space;
      top: 50%;
      @include add_lines(35px, 5px, #fff, 3, 5px);
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0%;
      bottom: 0%;
      width: 100%;
      height: 0%;
      background: $orange;
      opacity: 0;
      z-index: -1;
      transition: all $responsive_transition_duration;
    }
    &.active:after {
      opacity: 1;
      height: 100%;
    }
  }
  .responsive_menu_wrapper {
    @extend %show_responsive;
    position: absolute;
    left: 0%;
    top: 100%;
    width: 100%;
    background: $light_background_color2;
    box-shadow: 0px 10px 10px $light_shadow_color;
    ul.menu_nav > li {
      > a {
        display: block;
        position: relative;
        padding: 15px $wrapper_left_space;
        font-size: 14px;
        color: $purple;
        transition: all 0.5s;
        &:before {
          content: "";
          display: block;
          position: absolute;
          left: $wrapper_left_space;
          bottom: -1px;
          width: $wrapper_width;
          height: 1px;
          background: $light_border_color;
        }
      }
      #{$responsive_active_link_selector} {
        background: $orange;
        color: #fff;
      }
    }
    &.responsive-menu-enter-active,
    &.responsive-menu-leave-active {
      transition: all $responsive_transition_duration;
    }
    &.responsive-menu-enter,
    &.responsive-menu-leave-to {
      opacity: 0;
      transform: translateY(100px);
    }
  }
}
</style>
