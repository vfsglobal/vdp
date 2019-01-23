<template>
  <master-page
    banner-image="careers.jpg"
    purple-heading-text="Careers"
  >
    <basic-section class="main_content_container">
      <p class="main">We believe in the power of people and know the best ideas can come from anywhere. <br>
        Join a team that's enhancing work and life every day.</p>
      <section>
        <h3 class="main_heading bottom_space">Apply Now</h3>
        <p>Email us your resume at
          <email-link email="careers@vdpglobalservices.com" />
        </p>
      </section>
      <section>
        <h3 class="main_heading top_space bottom_space">Vacancies</h3>
        <accordion class="careers">
          <accordion-element>
            <template slot="buttonContent">
              <h4>Dy. Manager HR / Sr. Executive HR / Executive HR</h4>
              <h5>Location: Mumbai / Bangkok</h5>
            </template>
            <section>
              <h4 class="normal">Roles & Responsibilities</h4>
              <ul class="normal_list">
                <li>International HR Individual Contributor Role in an HR Shared Services / HR BPO</li>
                <li>End to End remote HR lifecycle management from hire to exit</li>
                <li>HRIS Updation & records creation</li>
                <li>Payroll Processing for multiple companies and / or countries</li>
                <li>Employee Document Management</li>
                <li>Employee query management</li>
                <li>Client Management & Customer Service</li>
                <li>Reporting, Projects & Audit support</li>
              </ul>
            </section>
            <br>
            <section>
              <h4 class="normal">Requirements</h4>
              <ul class="normal_list">
                <li><strong>Education :</strong> Graduate or Master’s Degree in HR</li>
                <li><strong>Work Experience :</strong> 1 – 10 years of experience in generalist HR with payroll processing.<br>
                  Experience in hands on experience in payroll processing for 2 or more countries is an advantage</li>
              </ul>
            </section>
          </accordion-element>
          <accordion-element>
            <template slot="buttonContent">
              <h4>HR Manager / Sr. HR Manager</h4>
              <h5>Location: Mumbai / Bangkok</h5>
            </template>
            <section>
              <h4 class="normal">Roles & Responsibilities</h4>
              <ul class="normal_list">
                <li>International HR Managerial Role in an HR Shared Services / HR BPO</li>
                <li>Team Management</li>
                <li>End to End remote HR lifecycle management from hire to exit</li>
                <li>Ensuring that the HRIS is always updated & records are created on time</li>
                <li>Overseeing the Payroll is Processed and checked for multiple companies and / or countries</li>
                <li>Managing Employee Documentation Process</li>
                <li>Managing Allocation of Escalations Employee Queries</li>
                <li>Client Management & Customer Service</li>
                <li>Reporting, Projects & Audit support</li>
              </ul>
            </section>
            <br>
            <section>
              <h4 class="normal">Requirements</h4>
              <ul class="normal_list">
                <li><strong>Education :</strong> Graduate or Master’s Degree in HR</li>
                <li><strong>Work Experience :</strong> 7 – 12 years of experience in generalist HR with payroll processing in atleast 2 countries.<br>
                  Should have handled a team of atleast 2 people for atleast 2 years.<br>
                  Experience in hands on experience in payroll process management for 2 or more countries is an advantage</li>
              </ul>
            </section>
          </accordion-element>
          <accordion-element>
            <template slot="buttonContent">
              <h4>HR Internships / HR Trainees</h4>
              <h5>Location: Mumbai</h5>
            </template>
            <section>
              <h4 class="normal">Roles & Responsibilities</h4>
              <ul class="normal_list">
                <li>International HR Support & Projects</li>
                <li>Assistance in End to End remote HR lifecycle management from hire to exit</li>
                <li>Assistance in HRIS Updation & records creation</li>
                <li>Assistance in Payroll Processing for multiple companies and / or countries</li>
                <li>Assistance in Employee Document Management</li>
                <li>Assistance in Employee query management</li>
                <li>Assistance in Client Management & Customer Service</li>
                <li>Assistance in Reporting, Projects & Audit support</li>
              </ul>
            </section>
            <br>
            <section>
              <h4 class="normal">Requirements</h4>
              <ul class="normal_list">
                <li><strong>Education :</strong> Internship phase during Graduate or related Master’s Degree</li>
                <li><strong>Work Experience :</strong> Freshers or any experience</li>
              </ul>
            </section>
          </accordion-element>
        </accordion>
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

<style lang="scss">
@import "./assets/scss/globals";

ul.accordion.careers > li {
  > .accordion_button {
    padding-top: 0px;
    padding-bottom: 0px;

    > .button_content {
      > h4 {
        padding: 10px 0px;
      }

      > h5 {
        $border_radius: 5px;

        display: inline-block;
        font-size: 14px;
        padding: 5px;
        background: $dark_background_color2;
        border-radius: $border_radius $border_radius 0 0;
      }
    }
  }
}
</style>