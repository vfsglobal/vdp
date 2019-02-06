<template>
  <box-item class="stats_short_list_big_item">
    <div class="inner_box">
      <h4>
        <span class="text top">{{content.topText || '&nbsp;'}}</span>
        <span class="count">{{content.count}}</span>
        <span class="text bottom">{{content.bottomText || '&nbsp;'}}</span>
      </h4>
      <i :class="content.iconClass" />
    </div>
  </box-item>
</template>

<script>
import boxItemMixin from '~/components/mixins/box-item';

export default {
  name: 'stats-short-list-big-item',

  mixins: [boxItemMixin]
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

$root_element_selector: ".stats_short_list_big_item";
$border_color: $light_border_color;

$icon_size: (
  default: 60px,
  _onlySdesktop: 50px,
  _onlymobile: 40px
);
$spacing: map-get($space_details, normal);
$first_break_point: Stablet;
#{$root_element_selector} {
  $box_background: $light_background_color;
  @include media($first_break_point) {
    background: $box_background;
  }
  > .inner_box {
    @include add_css_from_map(
      (
        width: (
          default: 190px,
          _onlySdesktop: 150px,
          _onlymobile: 110px
        ),
        padding: $spacing,
        border-radius: (
          default: 10px,
          _onlySdesktop: 7px,
          _onlymobile: 5px
        )
      )
    );
    margin: 0 auto;
    background: $box_background;
    box-sizing: border-box;
    @include media($first_break_point) {
      display: flex;
      width: auto;
      flex-direction: row-reverse;
      background: none;
    }
    > i {
      display: flex;
      position: relative;
      margin: 0 auto;
      background: #fff;
      color: $purple;
      border-radius: 50%;
      border: 1px solid $border_color;
      @include add_css_from_map(
        (
          font-size: (
            default: 30px,
            _onlySdesktop: 25px,
            _onlymobile: 20px
          ),
          margin-top: $spacing,
          width: $icon_size,
          height: $icon_size
        )
      );
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    > h4 {
      @include media($first_break_point) {
        flex: 1;
      }

      text-align: center;
      > span {
        display: block;
      }
      > .count {
        $font_size: (
          default: 50px,
          _onlySdesktop: 40px,
          _onlymobile: 30px
        );
        @include add_css_from_map(
          (
            font-size: $font_size,
            line-height: $font_size
          )
        );
        color: $purple;
      }
      > .text {
        @extend %L_font_size;
        font-weight: bold;
      }
    }
  }
}
ul.box_list.statsShortListBig > li {
  margin-bottom: 0px;
  @include media($first_break_point) {
    &:not(#{get_last_row_selector(2)}) {
      border-bottom: 1px solid $border_color;
    }
    
    &:not(#{get_row_last_child_selector(2)}) {
      border-right: 1px solid $border_color;
    }
  }
  #{$root_element_selector} {
    position: relative;
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0%;
      @include multi_media(
        bottom,
        $icon_size,
        (
          multiply: 0.5,
          add: $spacing
        )
      );
      width: 100%;
      height: 1px;
      background: $border_color;
      @include media($first_break_point) {
        display: none;
      }
    }
  }
  &:first-child #{$root_element_selector}:before {
    left: 50%;
    width: 50%;
  }
  &:last-child #{$root_element_selector}:before {
    left: 0%;
    width: 50%;
  }
}
</style>
