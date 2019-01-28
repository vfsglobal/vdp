<template>
  <master-page
    banner-image="home.jpg"
    purple-heading-text="Terms and Conditions"
  >
    <basic-section class="main_content_container">
      <p>In visiting the website and availing of any services through the website, VFS Data Processing Pvt. Ltd. and its worldwide companies and subsidiaries (“VDP ” “we,” or “us”) may provide the Services as detailed below on the terms and conditions herein provided. </p>
      <p>VDP is engaged in the business of providing HR services related to Onboarding Formalities, Employee Confirmation, Transfers, Letter and Contracts, Employee Benefits, Employee Exits, Payroll, Insurance Management, HR Data Management, Manpower Reporting, HR Audit, HR Policies, Employee Query handling (“Services”).</p>
      <p>To use / avail the Services, the Users should refer to the instructions available on the <nuxt-link to="/">{{website}}</nuxt-link> website. The Users agree to comply with all instructions we may give concerning the services. We will be entitled to treat any failure by Users themselves to comply with these instructions as a breach of these terms and conditions, which will entitle us to deny Users access to the services and/or the website.</p>
      <p>The Users are responsible for paying charges for availing the Services. Charges once paid for the services will not be refunded under any circumstances.</p>
      <p>The Users shall at its sole risk be responsible for taking all reasonable steps to prevent unauthorized persons gaining access to the Services.</p>
      <p>VDP specifically excludes all liability of any kind (including negligence) in respect of any third party information or other material made available on, or which can be accessed using the website.</p>
      <p>This terms and conditions are governed by the law of India and both parties submit to the exclusive jurisdiction of the courts at Mumbai.</p>
      <h4 class="normal">Third Party Links</h4>
      <p>VDP website may contain links to third party sites promoting various products and/or services that VDP does not own or operate. These links to websites are in nature of paid advertising and are not verified by VDP.</p>
      <p>These links are provided for convenient access. Access to these links is voluntary and does not indicate that VDP endorses it or is associated with any of these other third party websites. Users are requested to use these links at their own discretion, risk and cost when dealing with these websites and neither VDP nor its officers, employees, agents shall have any responsibility or liability of any nature whatsoever for these other third party websites/links or any other information contained in them.</p>
      <h4 class="normal">Spam</h4>
      <p>VDP does not tolerate spam. </p>
      <p>VDP website/s or communication tools shall not be used to send spam or otherwise send content that would violate the terms and conditions of VDP user agreement.</p>
      <p>VDP filters and automatically scans messages for viruses and other illegal or prohibited content before they are sent.</p>
      <p>To report any issues related to spam or spoof emails to VDP, please address e-mails to <email-link :email="dpoEmail" />. </p>
      <p>VDP does not permanently store email messages sent to or from us. VDP does not rent or sell any email addresses to third parties.</p>
      <p>It is not permitted to license, add, modify, deface, hack, misuse or abuse VDP’ website or the contents therein.</p>
      <h4 class="normal">Fraudulent Recruitment / Employment Offers</h4>
      <p>It has come to VDP’s attention that, individuals misrepresenting themselves as VDP’ agents or representatives have approached people to offer fraudulent/fictitious employment opportunities, with the intent to steal personal information or solicit money from people. VDP encourage the User to exercise caution and common sense when receiving any such employment offer, which requires payment of any fees/money, or promises a work visa in exchange for money. The said offers are completely fake and not valid. Scammers operate primarily via the internet, email, phone etc. VDP warns people to beware of such scams.</p>
      <p>Please be advised that, VDP is engaged in the business of providing HR services related to Onboarding Formalities, Employee Confirmation, Transfers, Letter and Contracts, Employee Benefits, Employee Exits, Payroll, Insurance Management, HR Data Management, Manpower Reporting, HR Audit, HR Policies, Employee Query handling. Neither VDP nor its representatives will ask for money from individuals under any circumstances to lure them with employment opportunities either in VDP Global or outside. If you receive any offer that purports to be from VDP, which ask for money, these types of offers are fraudulent.</p>
      <ul class="side_heading_content_list">
        <li>
          <div class="heading_wrapper">
            <h5 class="normal">Warning signs of recruitment fraud</h5>
          </div>
          <div class="main_content">
            <p class="small_space">The following are some examples of recruitment fraud which are in violation of VDP’s processes and ethical practices:</p>
            <ul class="normal_list">
              <li>The email is not sent from an official VDP e-mail address but from a free e-mail service such as: Hotmail, Gmail, Outlook, Yahoo, etc. It is also possible that, the email is sent from a fake email address.</li>
              <li>The Users are asked to disclose private or confidential information.</li>
              <li>The Users are asked to be interviewed over the phone or via an instant-messenger type program.</li>
              <li>The Users are requested to pay fees/money.</li>
              <li>The Users are requested to complete bogus recruitment documentations, (the VDP / VFS Global name and logo could be forged/fabricated and featured on the documentation without authority).</li>
              <li>Insistence on urgency.</li>
            </ul>
          </div>
        </li>
      </ul>
      <p>Such actions are presumably intended to defraud or obtain personal information from the victims. </p>
      <p>The activities of these individuals involve criminal and civil liabilities. While VDP takes such matter seriously and reserves its right to contact competent law enforcement agencies to investigate and prosecute such illegal activities, it is often difficult to locate and prosecute these individuals.</p>
      <p>Therefore, if the Users receive a request, either in writing or verbally, for an interview or a job offer that is believed to be or might be fraudulent or suspicious, VDP urges the users to disregard them and verify the same with VDP at <email-link :email="dpoEmail" />.</p>
      <p>If the Users come to know that a fraud is being perpetrated, VDP encourages to forthwith contact the local police and/or any competent authorities and also to keep VDP informed by reporting the fraud to our Compliance officer at
        <email-link :email="dpoEmail" />
      </p>
      <p>Under no circumstances will VDP be liable or responsible for any loss, damages, expenses or inconvenience resulting from these unauthorized persons and/or activities.</p>
      <h4 class="normal">Changes to this Terms of Use</h4>
      <p>Please be advised that the Terms of Use of the website may be updated from time to time without any notice and thus Users to regularly visit VDP website to access the latest policy statement.</p>
      <h4 class="normal">Contact Us</h4>
      <p>For any questions about these Terms of use or the practices described herein,  please  contact  us to our regional offices for more information <nuxt-link to="/">{{website}}</nuxt-link></p>
    </basic-section>
  </master-page>
</template>

<script>
import { pageDefault } from '~/components/mixins/page';

import { mapState } from 'vuex';

export default {
  mixins: [pageDefault],

  computed: mapState({
    dpoEmail: state => state['dpo-contact-details'].emailId,
    website: state => state['contact-details'].website
  })
}
</script>