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
.stats_complete_list_big_item > .big_heading {
  display: flex;
  padding: 10px 0px;
  align-items: center;
  justify-content: center;
  text-align: left;

  > i {
    font-size: 60px;
    color: #fff;
  }

  > .main_content {
    padding-left: 20px;

    > span {
      display: block;

      &.text {
        font-size: 0.5em;
        font-weight: normal;
        padding-bottom: 5px;
      }
    }
  }
}
</style>