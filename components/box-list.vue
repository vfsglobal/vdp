<script>
import allItemComponents from '~/components/mixins/all-item-components.vue';

export default {
  mixins: [allItemComponents],

  data() {
    return {
      listUlTag: undefined,
      listLiTag: undefined,
      defaultClass: 'box_list'
    }
  },

  computed: {
    listLiClass() {
      return this.itemClass;
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals";

.box_list {
  > li > .box {
    width: 100%;
  }

  &.services {
    @extend %col6;
  }

  &.statsShortListBig, &.statsShortListOneLine {
    @extend %col4_full;
  }

  &.statsShortListOneLine > li {
    text-align: center;
  }
}
</style>