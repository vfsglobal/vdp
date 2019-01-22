<template>
  <box-item class="stats_short_list_big_item">
    <h4>
      <span class="text top">{{content.topText || '&nbsp;'}}</span>
      <span class="count">{{content.count}}</span>
      <span class="text bottom">{{content.bottomText || '&nbsp;'}}</span>
    </h4>
      <i :class="content.iconClass" />
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

.stats_short_list_big_item {
  $icon_size: 60px;
  $bottom_border_color: $light_border_color;

  position: relative;
  margin: 20px 0px;
  padding-bottom: $icon_size / 2 + 20px;
  justify-content: center;
  border-bottom: 1px solid $bottom_border_color;

  > i {
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 0%;
    width: $icon_size;
    height: $icon_size;
    font-size: 30px;
    background: #FFF;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    border: 1px solid $bottom_border_color;
    color: $purple;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  > h4 {
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
</style>
