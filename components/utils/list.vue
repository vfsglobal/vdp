<template>
  <component :is="ulTag">
    <component
      :is="liTag"
      v-for="(item, index) in content"
      :key="index"
      :class="mainClass[index]"
      :style="mainStyle[index]"
      @click="emitClick(item, index)"
    >
      <slot
        :item="item"
        :index="index"
      />
    </component>
  </component>
</template>

<script>
import { isNumericKeysObject } from '~/utils';

import { contentProp, generateMultiClassMixin, generateMultiStyleMixin } from '~/components/mixins/general';

export default {
  mixins: [contentProp, generateMultiClassMixin({ propName: 'liClass' }), generateMultiStyleMixin({ propName: 'liStyle' })],

  props: {
    ulTag: {
      type: String,
      default: 'ul'
    },
    liTag: {
      type: String,
      default: 'li'
    }
  },

  methods: {
    emitClick(item, index) {
      this.$emit('item-click', {
        item,
        index
      });
    }
  }
}
</script>