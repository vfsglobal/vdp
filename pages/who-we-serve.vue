<template>
  <master-page
    banner-image="who-we-serve.jpg"
    purple-heading-text="Who We Serve"
  >
    <basic-section>
      <div class="main_content_container">
        <ul class="seperator_content_list">
          <li>
            <h4 class="main_heading bottom_space">Introduction</h4>
            <p>As business becomes more complex, so do the functions of Human Resources, consequences of a HR oversight can entail legal and economic ramifications.</p>
            <p>Today the merits of outsourcing human resources activities have been well established and have become a widely accepted practice. We have developed a streamlined process that evaluates and takes care of your HR needs. </p>
            <p>VDP’s shared service solution can provide customer centric support in the form of a tailor made delivery model to suit your organisation. </p>
          </li>
          <li
            v-for="(item, index) in list"
            :key="index"
          >
            <h4 class="main_heading bottom_space">{{item.title}}</h4>
            <tab-container
              :content="item.content"
              :set-button-width="false"
              class="simple_content_tab"
              :class="{show_responsive: showResponsive}"
            >
              <template
                slot="buttonContent"
                slot-scope="slotProps"
              >{{slotProps.item.title}}</template>
              <div
                slot-scope="slotProps"
                v-html="slotProps.item.desc"
              />
            </tab-container>
          </li>
        </ul>
      </div>
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/page';

import tabContainer from '~/components/tab-container.vue';

import { mapGetters } from 'vuex';

export default {
  mixins: [pageDefault],

  components: {
    tabContainer
  },

  computed: mapGetters({
    list: 'who-we-serve/correctedListContent'
  }),

  data() {
    return {
      showResponsive: false
    };
  },

  outerHooks: {
    windowResized: {
      handler() {
        this.showResponsive = window.innerWidth <= 900;
      },
      immediate: true
    }
  }
}
</script>