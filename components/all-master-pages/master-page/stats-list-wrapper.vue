<template>
  <div class="stats_list_wrapper">
    <div class="wrapper">
      <box-list type="statsShortListOneLine" />
    </div>
  </div>
</template>

<script>
import boxList from '~/components/box-list.vue';

export default {
  components: {
    boxList
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

.stats_list_wrapper {
  background: $orange;
  padding: 15px 0px;

  ul > li {
    color: #fff;

    &:not(:last-child) {
      border-right: 2px solid #fff;
    }
  }
}
</style>
