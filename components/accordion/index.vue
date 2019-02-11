<template>
  <ul class="accordion">
    <accordion-element
      v-for="(item, index) in forLoopContent"
      :key="index"
    >
      <template slot="buttonContent">
        <slot
          name="buttonContent"
          :item="item"
          :index="index"
        />
      </template>
      <slot
        :item="item"
        :index="index"
      />
    </accordion-element>
    <slot v-if="!content" />
  </ul>
</template>

<script>
import { contentProp, generateVModelMixin } from '~/components/mixins/general';

import accordionElement from './element.vue';

import { autocorrectedIndexOfElements } from '~/utils';

var { defaultOptions: { duration: defaultSlideDuration } } = require('~/plugins/show-by-slide');

export default {
  name: 'accordion',

  mixins: [contentProp, generateVModelMixin({
    propName: 'activeIndex',
    event: 'change',
    type: [Number, Array],
    _default: -1,
    addToData: false
  })],

  components: {
    accordionElement
  },

  props: {
    allowMultiOpen: {
      type: Boolean,
      default: false
    },
    slideDuration: {
      type: Number,
      default: () => defaultSlideDuration
    },
    noSlideAnimationOnMount: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      mounted: false,
      openedElements: []
    };
  },

  computed: {
    mainSlideDuration() {
      return this.noSlideAnimationOnMount ? (this.mounted ? this.slideDuration : 0) : this.slideDuration;
    },
    openedIndexes() {
      return autocorrectedIndexOfElements(this.$children, this.openedElements);
    },
    activeIndex: {
      get() {
        var openedIndexes = this.openedIndexes;

        return this.allowMultiOpen ? openedIndexes : (openedIndexes.length == 0 ? -1 : openedIndexes[openedIndexes.length - 1]);
      },
      set(val) {
        this.setChildren(val);
      }
    }
  },

  watch: {
    activeIndex: 'setChildren'
  },

  methods: {
    setChildren(val) {
      var isValArray = val instanceof Array;

      val = val instanceof Array ? val : [val];

      val.forEach(index => {
        var $curChildren = this.$children[index];

        if ($curChildren)
          $curChildren.isOpen = true;
      });

      this.$nextTick(() => {
        this.$children.forEach((element, index) => {
          if (val.indexOf(index) != -1)
            return;

          element.isOpen = false;
        });
      });
    }
  },

  mounted() {
    this.setChildren(this.value);

    this.$nextTick(() => {
      this.mounted = true;
    });
  }
}
</script>
