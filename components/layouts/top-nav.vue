<template>
    <nav>
        <div class="wrapper">
            <menu-nav :content="navContent" class="clearfix" />
        </div>
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
@import "./assets/scss/globals";

nav {
  $height: 50px;

  background: $purple;
  ul {
    > li {
      float: left;

      &:not(:last-child) {
        margin-right: 60px;
      }

      $link_hover_border_height: 3px;
      $link_hover_border_radius: $link_hover_border_height;

      %hover {
        &:before, &:after {
          height: $link_hover_border_height;
        }
      }
      
      > a {
        position: relative;
        display: block;
        height: $height;
        line-height: $height;
        padding: 0px 5px;
        color: #fff;
        text-transform: uppercase;
        font-size: 12px;
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
          border-radius: 0 0 $link_hover_border_radius $link_hover_border_radius;
        }
        &:after {
          bottom: 0%;
          border-radius: $link_hover_border_radius $link_hover_border_radius 0 0;
        }
        &:hover {
          @extend %hover;
        }
      }

      &:first-child > a.nuxt-link-exact-active, &:not(:first-child) > a.nuxt-link-active {
        @extend %hover;
      }
    }
  }
}
</style>
