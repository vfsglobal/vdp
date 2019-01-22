<template>
  <box-item class="stats_short_list_one_line_item">
    <i :class="content.iconClass" />
    <span>{{content.topText}} {{content.count}} {{content.bottomText}}</span>
  </box-item>
</template>

<script>
import boxItemMixin from '~/components/mixins/box-item';

export default {
  name: 'stats-short-list-one-line-item',

  mixins: [boxItemMixin]
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

.stats_short_list_one_line_item {
  > * {
    @include inline_valign();
  }

  > i {
    font-size: 32px;
    padding-right: 5px;
  }

  > span {
    font-size: 16px;
  }
}
</style>
