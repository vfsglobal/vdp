<template>
  <div>
    <top-header />
    <top-nav />
    <div class="page_container">
      <nuxt />
    </div>
    <main-footer />
    <move-top-button />
  </div>
</template>

<script>
import topHeader from '~/components/layouts/top-header.vue';
import topNav from '~/components/layouts/top-nav.vue';
import mainFooter from '~/components/layouts/main-footer/index.vue';
import moveTopButton from '~/components/layouts/move-top-button.vue';

export default {
  components: {
    topHeader,
    topNav,
    mainFooter,
    moveTopButton
  }
}
</script>

<style lang="scss">
.page_container {
  position: relative;
}
</style>
