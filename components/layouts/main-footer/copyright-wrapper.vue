<template>
  <div class="copyright_wrapper">
    <div class="wrapper">
      <div class="main_content">
        <list
          :content="links"
          class="clearfix"
        >
          <hyperlink
            slot-scope="slotProps"
            :link="slotProps.item.link"
            class="bottom_border"
          >{{slotProps.item.text}}</hyperlink>
        </list>
        <span>Copyright &copy; {{year}} All Rights Reserved</span>
      </div>
    </div>
  </div>
</template>

<script>
import list from '~/components/utils/list';

import { mapState } from 'vuex';

export default {
  components: {
    list
  },

  data() {
    return {
      year: new Date().getFullYear()
    };
  },

  computed: mapState('footer-extra-links', {
    links: state => state.list
  })
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

.copyright_wrapper {
  $text_color: rgba(#fff, 0.7);

  padding: 15px;
  font-size: 12px;
  background: $purple;
  text-align: center;

  &,
  a {
    color: $text_color;
  }

  > .wrapper {
    > .main_content {
      display: table;
      margin: 0 auto;
      direction: rtl;

      > * {
        direction: ltr;
        @include inline_valign();
      }

      > ul > li {
        $spacing: 10px;

        position: relative;
        float: left;
        padding-left: $spacing;
        margin-left: $spacing;

        &:before {
          $seperator_height: 70%;

          content: "";
          display: block;
          position: absolute;
          left: 0%;
          top: (100 - $seperator_height) / 2;
          width: 1px;
          height: $seperator_height;
          background: $text_color;
        }

        a {
          transition: all 0.3s;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
