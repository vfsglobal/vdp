<template>
  <master-page
    banner-image="our-services.jpg"
    purple-heading-text="Our Services"
  >
    <basic-section class="main_content_container">
      <accordion
        class="services"
        :content="list"
        id-key="key"
        v-model="activeServiceIndex"
      >
        <template
          slot="buttonContent"
          slot-scope="slotProps"
        >
          <i :class="slotProps.item.iconClass" />
          <h4>{{slotProps.item.title}}</h4>
        </template>
        <div
          slot-scope="slotProps"
          v-html="slotProps.item.mainContent"
        />
      </accordion>
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/page';
import { generateURLAndListIndexSyncMixin } from '~/components/mixins/general';

import accordion from '~/components/accordion/index.vue';

import { mapGetters } from 'vuex';

export default {
  mixins: [pageDefault, generateURLAndListIndexSyncMixin({
    activeIndexName: 'activeServiceIndex'
  })],

  components: {
    accordion
  },

  computed: {
    ...mapGetters({
      list: 'services/correctedListContent'
    })
  }
}
</script>

<style lang="scss">
@import "./assets/scss/globals/main";

ul.accordion.services > li {
  > .accordion_button > .button_content {
    display: flex;
    align-items: center;

    > i {
      @include add_css_from_map(
        (
          font-size: (
            default: 40px,
            _onlySdesktop: 35px,
            _onlymobile: 30px
          ),
          padding-right: $accordion_hor_padding
        )
      );
      color: $orange;
      transition: all $accordion_transition_duration;
    }
  }
  &.active > .accordion_button > .button_content > i {
    color: #fff;
  }
}
</style>