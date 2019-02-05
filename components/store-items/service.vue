<template>
  <box-item
    class="service_item"
    :link="content.link"
  >
    <div class="icon_heading_wrapper">
      <i :class="content.iconClass" />
      <h4 class="normal">{{content.title}}</h4>
    </div>
    <div class="hover_content_wrapper bg_icon">
      <i :class="content.iconClass" />
      <div
        class="main_content"
        v-html="content.shortDesc"
      />
      <span class="read_more">Read More</span>
    </div>
  </box-item>
</template>

<script>
import boxItemMixin from '~/components/mixins/box-item';

export default {
  name: 'service-item',

  mixins: [boxItemMixin]
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.service_item {
  $break_point: mobile;
  $hover_content_transition: all 0.7s;
  position: relative;
  background: #fff;
  @extend %padv_big;
  @extend %padh_extra_small;
  text-align: center;
  overflow: hidden;
  transition: $hover_content_transition;

  $mobile_padding: 10px;

  @include media($break_point) {
    padding-top: $mobile_padding;
    padding-bottom: $mobile_padding * 2.5;
  }

  > .icon_heading_wrapper {
    @include media($break_point) {
      display: flex;
      align-items: center;
    }

    > i {
      @include multi_media(
        font-size,
        (
          default: 60px,
          _onlySdesktop: 50px,
          _onlymobile: 40px
        )
      );
      @include media($break_point) {
        padding-right: $mobile_padding;
      }
      color: $orange;
    }
    > h4 {
      @extend %padt_big;
      @extend %padb_extra_mini;
      @include media($break_point) {
        padding: 0px;
      }
    }
  }
  > .hover_content_wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0%;
    top: 100%;
    width: 100%;
    height: 100%;
    background: $light_background_color;
    color: $dark_content_color;
    transition: $hover_content_transition;
    @include media($break_point) {
      position: static;
      top: 0%;
      height: auto;
      background: none;
      color: $content_color;
    }
    > .main_content {
      display: flex;
      flex: 1;
      align-items: center;
      @extend %pad_extra_small;
      box-sizing: border-box;
      @include media($break_point) {
        padding: 0;
        padding-top: $mobile_padding;
        line-height: 1.5em;
        text-align: left;
      }
    }
    > .read_more {
      display: block;
      @extend %pad_extra_mini2;
      background: $orange;
      color: #fff;
      font-weight: bold;
      @include media($break_point) {
        position: absolute;
        padding: 3px 5px;
        bottom: 0%;
        right: 0%;
      }
    }
    &.bg_icon > i {
      @include multi_media(
        font-size,
        (
          default: 130px,
          _onlySdesktop: 100px,
          _onlymobile: 80px
        )
      );
      @include media($break_point) {
        display: none;
      }
    }
  }
  &:hover {
    box-shadow: 0px 0px 10px $light_shadow_color;
    > .hover_content_wrapper {
      top: 0%;
    }
  }
}
</style>
