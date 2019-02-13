<template>
  <div>
    <accordion>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Employment & Payroll</h4>
        </template>
        <p>Employees working in Americas could be paid at least weekly/ forth-nightly/ or monthly via Pay check, direct deposit, payroll cards or cash.</p>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Minimum Wage</h4>
        </template>
        <p>The Federal Minimum wage is $7.25/hour. </p>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>HR & Labour</h4>
        </template>
        <ul class="side_heading_content_list">
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Working Hours:</h5>
            </div>
            <div class="main_content">
              <p>The maximum working week is 40 hours for full time employees; and up to 30 hours for part time employees. </p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Overtime Policy:</h5>
            </div>
            <div class="main_content">
              <p>employees covered by the Fair Labour Standards Act (FLSA) should receive overtime pay for hours worked in excess of 40 in a workweek of at least one and one-half times their regular rates of pay-i.e. @ 150% of base rate. The FLSA does not require overtime pay for work on Saturdays, Sundays, holidays, or regular days of rest, unless overtime hours are worked on such days.</p>
            </div>
          </li>
           <li>
            <div class="heading_wrapper">
              <h5 class="normal">401(k) Plan:</h5>
            </div>
            <div class="main_content">
              <p class="small_space">A 401(k) is a feature of a qualified profit-sharing plan that allows employees to contribute a portion of their wages to individual accounts.</p>
              <ul class="normal_list">
                <li>Elective salary deferrals are excluded from the employee’s taxable income (except for designated Roth deferrals).</li>
                <li>Employers can contribute to employees’ accounts.</li>
                 <li>Distributions, including earnings, are includible in taxable income at retirement (except for qualified distributions of designated Roth accounts).</li>
              </ul>
            </div>
          </li>
        </ul>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Leave Entitlement</h4>
        </template>
        <p>There are different types of leaves under Family and Medical Leave Act of 1993 (FMLA).</p>
        <p class="small_space">Following leaves are applicable in United States of Americas from January to December every year.</p>
        <ul class="side_heading_content_list">
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Annual Leave:</h5>
            </div>
            <div class="main_content">
              <p>There is no statutory minimum paid vacation or paid public holidays. It is left to the employers to offer paid vacation. The average number of paid vacation days offered by private employers is 10 days after 1 year of service, 14 days after 5 years, 17 days after 10 years, and 20 days after 20 years.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Sick Leave:</h5>
            </div>
            <div class="main_content">
              <p>In most states in the US, employees earn 1 hour of sick leave for every 30-40 hours worked in a week. There are currently seven states, and Washington D.C., that have paid sick leave laws at the state levels. </p>
            </div>
          </li>
           <li>
            <div class="heading_wrapper">
              <h5 class="normal">Personal Leave:</h5>
            </div>
            <div class="main_content">
              <p>3 leaves in a year if employee joins before August; employee entitled to it from day 1.</p>
            </div>
          </li>
           <li>
            <div class="heading_wrapper">
              <h5 class="normal">Hospitalisation Leave:</h5>
            </div>
            <div class="main_content">
              <p>An FMLA leave allows employees to take up to 12 weeks off in a 12-month period. If their absence is not protected by the Family and Medical Leave Act (FMLA), then it's considered a non-FMLA medical leave.</p>
            </div>
          </li>
           <li>
            <div class="heading_wrapper">
              <h5 class="normal">Childcare Leave:</h5>
            </div>
            <div class="main_content">
              <p>No leave</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Maternity Leave:</h5>
            </div>
            <div class="main_content">
              <p>12 weeks of unpaid family leave after the birth or adoption of a child under the Family and Medical Leave Act (FMLA).</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Paternity Leave:</h5>
            </div>
            <div class="main_content">
              <p>12 weeks of unpaid family leave after the birth or adoption of a child under the Family and Medical Leave Act (FMLA).</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Adoption Leave:</h5>
            </div>
            <div class="main_content">
              <p>12 weeks of unpaid family leave after the birth or adoption of a child under the Family and Medical Leave Act (FMLA).</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Shared Parental Leave:</h5>
            </div>
            <div class="main_content">
              <p>No Leave</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Unpaid Infant Care Leave:</h5>
            </div>
            <div class="main_content">
              <p>No Leave</p>
            </div>
          </li>
        </ul>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Terminations</h4>
        </template>
        <section>
          <h4 class="normal">Notice Period</h4>
          <ul class="side_heading_content_list">
            <li>
              <div class="heading_wrapper">
                <h5 class="normal">Standard Notice Period:</h5>
              </div>
              <div class="main_content">
                <p>There is also no statutory requirement, though two or more weeks’ notice is customary.</p>
              </div>
            </li>
          </ul>
        </section>
       
      </accordion-element>
    </accordion>
  </div>
</template>

<script>
import { countrypediaPage } from '~/components/mixins/page';

export default {
  mixins: [countrypediaPage]
}
</script>

<style>
</style>

