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
@import "./assets/scss/globals/main";

.stats_list_wrapper {
  background: $orange;
  @extend %padv_small;

  ul > li {
    color: #fff;
    border-right-color: #FFF !important;
    &:before {
      background: #FFF !important;
    }
  }
}
</style>
