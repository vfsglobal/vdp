<template>
  <component
    :is="linkTag"
    v-bind="linkAttrs"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    link: {
      required: true
    }
  },

  computed: {
    isLinkString() {
      return typeof this.link == 'string';
    },
    linkTag() {
      var href = this.isLinkString ? this.link : this.link.href;
      return href.indexOf('/') == 0 ? 'nuxt-link' : 'a';
    },
    linkAttrs() {
      if (this.linkTag == 'a') {
        if (this.isLinkString) {
          return {
            href: this.link
          };
        } else {
          return this.link;
        }
      } else {
        if (this.isLinkString) {
          return {
            to: this.link
          };
        } else {
          var attrs = {
            ...this.link
          };

          attrs.to = attrs.href;
          delete attrs.href;

          return attrs;
        }
      }
    }
  }
}
</script>

<style>
</style>
