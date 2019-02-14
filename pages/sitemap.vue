<template>
  <master-page
    banner-image="home.jpg"
    purple-heading-text="Sitemap"
  >
    <basic-section>
      <menu-nav
        :content="mainLinkList"
        :submenu-key="submenuKey"
        class="sitemap"
      />
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
@import "./assets/scss/globals/main";

ul.sitemap > li {
  $vertical_space: map-get($space_details, small);
  $hor_padding: 15px;

  position: relative;
  @include multi_media((padding-top padding-bottom), $vertical_space);

  padding-left: $hor_padding;
  padding-right: $hor_padding;

  &:not(:last-child) {
    border-bottom: 1px solid $light_border_color;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0%;
    margin-top: 5px;
    @include multi_media(top, $vertical_space);
    @include create_filled_arrow(
      (
        direction: right,
        tip_length: 7px,
        broadness: 7px,
        color: $content_color
      )
    );
  }
  a {
    color: inherit;
    transition: all 0.5s;
    &:hover {
      color: $orange;
    }
  }
  > a {
    @extend %L_font_size;
  }
  ul {
    @extend %padt_mini;
    @extend %padl_extra_small;
    > li:not(:last-child) {
      @extend %padb_mini;
    }
  }
}
</style>