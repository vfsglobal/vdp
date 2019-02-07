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
ul.box_list.statsShortListOneLine {
  $col_type: 4_full;
  $break_point: mobile;
  @extend %col#{$col_type};
  > li {
    $border_color: $light_border_color;

    position: relative;
    text-align: center;
    @include add_col_selector_css($col_type, last_column, true) {
      border-right: 2px solid $border_color;
    }
    &:not(:last-child) {
      @include media($break_point) {
        @include multi_media(padding-bottom, $box_bottom_space);

        &:before {
          content: '';
          display: block;
          position: absolute;
          left: 50%;
          bottom: 0%;
          transform: translateX(-50%);
          width: strip_unit($wrapper_width) * 1vw;
          height: 1px;
          background: $light_border_color;
          opacity: 0.3;
        }
      }
    }
  }
}
</style>
