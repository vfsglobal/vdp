<template>
  <box-item
    class="country_flag_item"
    :link="content.link"
  >
    <img
      :src="content.flagImage | routerUrl"
      :alt="content.title"
    />
    <h4>{{content.title}}</h4>
  </box-item>
</template>

<script>
import boxItemMixin from '~/components/mixins/box-item';

export default {
  name: 'country-flag-item',

  mixins: [boxItemMixin]
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.country_flag_item {
  $link_active_transition: all 0.3s;
  margin: 0 auto;
  transition: $link_active_transition;

  > img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    @extend %marv_extra_small;
    max-width: 100%;
  }

  > h4 {
    position: relative;
    @extend %pad_extra_mini;
    background: $dark_background_color2;
    color: $dark_content_color;
    font-family: Poppins, sans-serif;
    @extend %L_font_size;
    text-align: center;
    z-index: 1;
    transition: $link_active_transition;

    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0%;
      bottom: 0%;
      width: 100%;
      height: 0%;
      opacity: 0;
      background: $orange;
      z-index: -1;
      transition: $link_active_transition;
    }
  }

  &.nuxt-link-exact-active {
    box-shadow: 0px 0px 10px $light_shadow_color;

    > h4 {
      color: #fff;

      &:before {
        opacity: 1;
        height: 100%;
      }
    }
  }
}
</style>
