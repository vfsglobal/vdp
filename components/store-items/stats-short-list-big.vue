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
@import "./assets/scss/globals";

$root_element_selector: ".stats_short_list_big_item";
$border_color: $light_border_color;
$icon_size: 60px;
$spacing: 20px;

#{$root_element_selector} {
  > .inner_box {
    width: 190px;
    margin: 0 auto;
    background: $light_background_color;
    padding: $spacing;
    border-radius: 10px;
    box-sizing: border-box;

    > i {
      display: flex;
      position: relative;
      width: $icon_size;
      height: $icon_size;
      margin: 0 auto;
      margin-top: $spacing;
      font-size: 30px;
      background: #fff;
      color: $purple;
      border-radius: 50%;
      border: 1px solid $border_color;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }

    > h4 {
      text-align: center;

      > span {
        display: block;
      }

      > .count {
        font-size: 50px;
        line-height: 50px;
        color: $purple;
      }

      > .text {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}

ul.box_list.statsShortListBig > li {
  #{$root_element_selector} {
    position: relative;

    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0%;
      bottom: $icon_size / 2 + $spacing;
      width: 100%;
      height: 1px;
      background: $border_color;
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
