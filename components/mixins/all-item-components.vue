<template>
  <list
    :ul-tag="listUlTag"
    :class="[defaultClass, className]"
    :li-tag="listLiTag"
    :li-class="listLiClass"
    :content="mainContent"
  >
    <template slot-scope="slotProps">
      <component
        v-if="type != 'default'"
        :list-index.prop="slotProps.index"
        :vue-self.prop="_self"
        :content="slotProps.item"
        :is="typeDetails.itemComponent"
        :class="mainComponentClass[slotProps.index]"
        @click.native="emitItemClick(slotProps, $event)"
      />
      <slot
        v-else
        v-bind="slotProps"
      />
    </template>
  </list>
</template>

<script>
import {
  contentProp,
  generateTypeDetailsMixin,
  generateMultiClassMixin
} from "~/components/mixins/general";

import { getStateFromStoreModuleName, getAllModules } from "~/utils";

import list from "~/components/utils/list.vue";

var allTypeDetails = (() => {
  var getContent = {
    statsShortList($store) {
      return $store.state.stats.shortList;
    },
    statsMainList($store) {
      return $store.state.stats.mainList;
    }
  };

  return {
    services: {
      itemComponent: "service-item"
    },
    statsShortListBig: {
      itemComponent: "stats-short-list-big-item",
      getContent: getContent.statsShortList
    },
    statsShortListOneLine: {
      itemComponent: "stats-short-list-one-line-item",
      getContent: getContent.statsShortList
    },
    statsMainListBig: {
      itemComponent: 'stats-complete-list-big-item',
      getContent: getContent.statsMainList
    },
    countrypediaFlagItems: {
      itemComponent: 'country-flag-item',
      getContent: 'countrypedia'
    }
  };
})();

export default {
  mixins: [
    contentProp,
    generateTypeDetailsMixin({
      data: allTypeDetails,
      includeProp: true
    }),
    generateMultiClassMixin({
      propName: "componentClass",
      mainDataName: "mainComponentClass",
      contentPropName: "mainContent"
    })
  ],

  components: {
    list,
    ...getAllModules(
      require.context(
        "~/components/store-items/",
        false,
        /^((?!\/index\.).)+\.vue$/
      )
    )
  },

  props: {
    itemClass: {
      type: Object,
      default: null
    }
  },

  computed: {
    className() {
      return this.type.replace(/\//g, "-");
    },
    mainContent() {
      var $store = this.$store,
        getContent = this.typeDetails && this.typeDetails.getContent,
        storeModuleName = typeof getContent == 'string' ? getContent : this.type;

      return (
        this.content ||
        (typeof getContent == 'function'
          ? getContent($store)
          : $store.getters[`${storeModuleName}/correctedListContent`] ||
          getStateFromStoreModuleName($store.state, storeModuleName).list)
      );
    }
  },

  methods: {
    emitItemClick(item, index, event) {
      if (arguments.length == 2) {
        event = index;
        var { item, index } = item;
      }

      this.$emit("item-click", {
        item,
        index,
        event
      });
    }
  }
};
</script>