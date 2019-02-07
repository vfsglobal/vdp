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
@import "./assets/scss/globals/main";

.stats_short_list_one_line_item {
  > * {
    @include inline_valign();
  }

  > i {
    @include multi_media(
      font-size,
      (
        default: 32px,
        _onlySdesktop: 28px,
        _onlymobile: 22px
      )
    );
    @extend %padr_extra_mini;
  }

  > span {
    @extend %L_font_size;
  }
}
ul.box_list.statsShortListBig > li {
  text-align: center;
}
</style>
