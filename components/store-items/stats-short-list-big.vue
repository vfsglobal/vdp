<template>
  <box-item class="stats_short_list_big_item">
    <div class="inner_box">
      <h4>
        <span
          class="text"
          :class="{empty: !content.topText}"
        >{{content.topText || '&nbsp;'}}</span>
        <span class="count">{{content.count}}</span>
        <span
          class="text"
          :class="{empty: !content.bottomText}"
        >{{content.bottomText || '&nbsp;'}}</span>
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
$border: 1px solid $border_color;

$icon_size: (
  default: 60px,
  _onlySdesktop: 50px,
  _onlymobile: 40px
);
$spacing: map-get($space_details, normal);
$first_break_point: Stablet;
$second_break_point: mobile;
$only_first_break_point: $first_break_point + "/" + $second_break_point;
#{$root_element_selector} {
  $box_background: $light_background_color;
  @include media($only_first_break_point) {
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
      flex-direction: row-reverse;
      justify-content: flex-end;
      align-items: center;
    }
    @include media($only_first_break_point) {
      width: 200px;
      background: none;
    }
    @include media($second_break_point) {
      width: 100%;
    }
    > i {
      display: flex;
      position: relative;
      margin: 0 auto;
      background: #fff;
      color: $purple;
      border-radius: 50%;
      border: $border;
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
      @include media($first_break_point) {
        margin: 0px;
      }
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
    > h4 {
      text-align: center;
      @include media($first_break_point) {
        padding-left: 10px;
        text-align: left;
      }
      > span {
        display: block;
        @include media($second_break_point) {
          @include inline_valign();
        }
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
        @include media($second_break_point) {
          $text_space: 5px;
          &.empty {
            display: none;
          }
          &:first-child {
            padding-right: $text_space;
          }
          &:not(:first-child) {
            padding-left: $text_space;
          }
        }
      }
    }
  }
}
ul.box_list.statsShortListBig > li {
  margin-bottom: 0px;
  @include media($only_first_break_point) {
    border-bottom: $border;
    #{get_column_selector(2, last_row)} {
      border-bottom: none;
    }
    #{get_column_selector(2, last_column, true)} {
      border-right: $border;
    }
  }
  @include media($second_break_point) {
    &:not(:last-child) #{$root_element_selector} > .inner_box {
      margin-bottom: 15px;
    }
  }
  #{$root_element_selector} {
    position: relative;
    &:before {
      $border_pos: modify_map_value(
        $icon_size,
        (
          multiply: 0.5,
          add: $spacing
        )
      );
      content: "";
      display: block;
      position: absolute;
      left: 0%;
      @include multi_media(
        bottom,
        map-merge(
          $border_pos,
          (
            _onlymobile: auto
          )
        )
      );
      width: 100%;
      height: 1px;
      background: $border_color;
      @include media($only_first_break_point) {
        display: none;
      }
      @include media($second_break_point) {
        left: map-get($border_pos, _onlymobile) !important;
        width: 1px !important;
        height: 100%;
      }
    }
  }
  &:first-child #{$root_element_selector}:before {
    left: 50%;
    width: 50%;
    @include media($second_break_point) {
      top: 50%;
      height: 50%;
    }
  }
  &:last-child #{$root_element_selector}:before {
    left: 0%;
    width: 50%;
    @include media($second_break_point) {
      height: 50%;
    }
  }
}
</style>
