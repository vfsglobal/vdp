<template>
  <master-page
    banner-image="home.jpg"
    purple-heading-text="Disclaimer"
  >
    <basic-section class="main_content_container">
      <p>VFS Data Processing Private Limited (hereinafter referred to as “VDP Global Services”) is a specialist business process company, providing HR related Service globally. VDP Global Services is a wholly owned subsidiary of VFS Global.</p>
      <p>VDP Global Services is engaged in the business of serving HR Operations by managing administrative and non-judgmental tasks related to the entire employment cycle viz. onboarding formalities, employee confirmation, transfers, letter and contracts, leave and other benefits, separation and settlements, payroll, insurance management, HR data management, manpower reporting, HR audit, HR policies.</p>
      <p><strong>Confidentiality : </strong> Without prejudice to any existing contractual arrangements between the parties, VDP Global Services shall treat all Personal Data as strictly confidential and it shall inform all its employees, agents and/or approved vendors engaged in processing the Personal Data of the confidential nature of the Personal Data. The VDP Global Services shall ensure that all such persons or parties have signed an appropriate confidentiality agreement, are otherwise bound to a duty of confidentiality, or are under an appropriate statutory obligation of confidentiality.</p>
      <p>VDP agrees to perform their rights and obligations under this Agreement in an ethical manner and shall not indulge in corrupt practices of any form such as offering or giving or agreeing to give to any Government official, bribe of gift or consideration of any kind as an inducement or reward to obtain benefit. If it is brought to the notice of one Party that the other Party and or its employees are indulging in such corrupt practices, then in that event notwithstanding any other remedies available to the non-defaulting Party, shall be entitled to terminate this Agreement with immediate effect.</p>
      <p><strong>Advertising : </strong> Advertising material may accompany the relevant communication at the time there are responded to the requestor/s or customer/s, with no liability to VDP Global Services. If the requestor/s or customer/s does not wish to receive any such advertising material along with the communication, the requestor/s or customer/s must intimate the VDP Global Services in writing in the first email itself.</p>
      <p>VDP Global Services, in its sole discretion, may change, amend, cancel or withdraw any or all of the terms and conditions mentioned herein at any time without any prior notice. No employee of VDP Global Services has any authority whatsoever to change / amend / amplify or withdraw any or all of the terms and conditions mentioned herein without the prior written approval of VDP Global Services.</p>
      <p>These terms and conditions shall be governed and construed in accordance with the laws of India. Any claims or disputes arising in relation to the services provided by VDP Global Services to the applicant / user shall be subject to the exclusive jurisdiction of the courts in Mumbai.</p>
      <p>The applicant / user hereby accepts and confirms that the applicant / user and/or his/her representative, prior to availing any services rendered by VDP Global services, the applicant/user , has read, understood and agreed to be bound by, without limitation or qualification, all of the terms, conditions and details provided herein.</p>
      <ul class="side_heading_content_list">
        <li>
          <div class="heading_wrapper">
            <h5 class="normal">Corporate Office:</h5>
          </div>
          <div class="main_content">
            <p v-html="address" />
          </div>
        </li>
      </ul>
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/general';

import {mapState} from 'vuex';

export default {
  mixins: [pageDefault],

  computed: mapState('contact-details/address', {
    address: state => state.html
  })
}
</script>