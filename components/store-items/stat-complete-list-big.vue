<template>
  <box-item class="stats_complete_list_big_item">
    <h2 class="big_heading">
      <i :class="content.iconClass" />
      <div class="main_content">
        <span class="text">{{content.text}}</span>
        <span class="count">{{content.count}}</span>
      </div>
    </h2>
  </box-item>
</template>

<script>
import boxItemMixin from '~/components/mixins/box-item';

export default {
  name: 'stats-complete-list-big-item',

  mixins: [boxItemMixin]
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.stats_complete_list_big_item > .big_heading {
  display: flex;
  @extend %padv_extra_small;
  align-items: center;
  justify-content: center;
  text-align: left;

  > i {
    @include multi_media(
      font-size,
      (
        default: 60px,
       _onlySdesktop: 50px,
      _onlymobile: 40px
      )
    );
    
    color: #fff;
  }

  > .main_content {
    @extend %padl_normal;

    > span {
      display: block;

      &.text {
        font-size: 0.5em;
        font-weight: normal;
        @extend %padb_extra_mini;
      }
    }
  }
}
</style>