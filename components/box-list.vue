<script>
import { generateTypeDetailsMixin } from '~/components/mixins/general';
import allItemComponents from '~/components/mixins/all-item-components.vue';

var allTypeDetails = {
  'services': 'col6_details',
  'statsShortListBig': 'full_col4_details',
  'statsShortListOneLine': 'full_col4_details'
};

export default {
  mixins: [allItemComponents, generateTypeDetailsMixin({
    namePrefix: 'main',
    data: allTypeDetails
  })],

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
    },
    listAttrs() {
      return {
        'data-column-details': this.mainTypeDetails
      };
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

  &.statsShortListOneLine > li {
    text-align: center;
  }
}
</style>