<template>
  <component
    class="box"
    :is="mainTag"
    v-bind="attrs"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'box-item',

  props: {
    link: null,
    tag: String
  },

  computed: {
    mainTag() {
      return this.link ? 'hyperlink' : (this.tag || 'div');
    },

    attrs() {
      return this.mainTag == 'hyperlink' ? {
        link: this.link
      } : null;
    }
  }
}
</script>

<style lang="scss">
a.box {
  display: block;
}
</style>
