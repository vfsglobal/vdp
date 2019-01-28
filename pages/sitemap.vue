<template>
  <master-page
    banner-image="home.jpg"
    purple-heading-text="Sitemap"
  >
    <basic-section>
      <menu-nav :content="mainLinkList" :submenu-key="submenuKey" class="sitemap" />
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/page';
import { generateMainLinkListMixin } from '~/components/mixins/general';

import menuNav from '~/components/utils/menu-nav.vue';

import { mapGetters } from 'vuex';

export default {
  mixins: [pageDefault, generateMainLinkListMixin()],

  components: {
    menuNav
  },

  data() {
    return {
      submenuKey: 'sitemapSubmenu'
    };
  },

  computed: {
    ...mapGetters({
      linkList: 'sitemap/linkList'
    })
  }
}
</script>

<style lang="scss">
@import './assets/scss/globals';

ul.sitemap > li {
  $vertical_space: 15px;

  position: relative;
  padding: $vertical_space 15px;

  &:not(:last-child) {
    border-bottom: 1px solid $light_border_color;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0%;
    top: $vertical_space;
    margin-top: 5px;
    @include create_filled_arrow((
      direction: right,
      tip_length: 7px,
      broadness: 7px,
      color: $content_color
    ));
  }

  a { 
    color: inherit;
    transition: all 0.5s;

    &:hover {
      color: $orange;
    }
  }

  > a {
    font-size: 16px;
  }

  ul {
    padding-top: 7px;
    padding-left: 10px;

    > li:not(:last-child) {
      padding-bottom: 5px;
    }
  }
}
</style>