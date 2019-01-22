<template>
  <master-page
    banner-image="careers.jpg"
    purple-heading-text="Careers"
  >
    <basic-section class="main_content_container">
      <p class="main">We believe in the power of people and know the best ideas can come from anywhere. Join a team that's enhancing work and life every day.</p>
      <section>
        <h3 class="main_heading bottom_space">Apply Now</h3>
        <p>Email us your resume at
          <email-link email="careers@vdpglobalservices.com" />
        </p>
      </section>
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/general';

import accordion from '~/components/accordion/index.vue';
import accordionElement from '~/components/accordion/element.vue';

export default {
  mixins: [pageDefault],

  components: {
    accordion,
    accordionElement
  }
}
</script>