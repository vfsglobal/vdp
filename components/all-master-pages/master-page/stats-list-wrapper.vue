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

    &:not(:last-child) {
      @include multi_media(
        border-right,
        (
          default: 2px solid #fff,
           _onlymobile: 1px
        ),
        (
          suffix: " solid " 
        )
      );
    }
  }
}
</style>
