<template>
  <div>
    <accordion>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Employment & Payroll</h4>
        </template>
        <p>Employees working in UAE must be paid at least monthly via Wage Protection System (WPS)/Online bank Transfer/Cheque. Salaries are paid last business day of the Month.</p>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Minimum Wage</h4>
        </template>
        <p>There is no minimum wage rate pay in Dubai</p>
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
              <p>The maximum working week is 48 hours for full time employees.</p>
            </div>
          </li>
        
        </ul>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Leave Entitlement</h4>
        </template>
        <p>There are different types of leave under UAE Employment Act depend on the eligibility and entitlement.</p>
        <p class="small_space">Following leaves are applicable in UAE Example of Leave Types:</p>
        <ul class="side_heading_content_list">
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Annual Leave :</h5>
            </div>
            <div class="main_content">
              <p>Entitled to 30 days of paid annual leave for each year of service.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Sick Leave :</h5>
            </div>
            <div class="main_content">
              <p>All confirmed employee is eligible for Sick Leave up to 7 days a year. Employee will receive full pay for the first 15 days, half pay for the next 30 days and no pay for the rest 45 days.</p>
            </div>
          </li>
         
        
          <li>
            <div class="heading_wrapper">
              <h5 class="normal"> Maternity Leave:</h5>
            </div>
            <div class="main_content">
              <p>45 days maternity leave with full pay which includes the period before and after the delivery. And if the any employee has not completed a year, the maternity leave shall be with half pay. </p>

            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Paternity Leave:</h5>
            </div>
            <div class="main_content">
              <p>Working fathers are not provided paternity leave under the law.</p>
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
                <h5 class="normal">Limited Contract:</h5>
              </div>
              <div class="main_content">
                <p>A limited contract cannot exceed a 2 year term and it must mention the notice period ranging from a minimum of one month to a maximum of three months.</p>
              </div>
            </li>
            <li>
              <div class="heading_wrapper">
                <h5 class="normal">Unlimited Contract:</h5>
              </div>
              <div class="main_content">
                <p>An employment contract, whether limited or unlimited can be terminated without notice period by either party in accordance of the UAE Labour Law.</p>
              </div>
            </li>
          </ul>
        </section>

      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Major Reasons for Terminations</h4>
        </template>
        <section>

          <ul class="side_heading_content_list">
            <li>
              <div class="heading_wrapper">
                <h5 class="normal">Limited Contract:</h5>
              </div>
              <div class="main_content">
                <p class="small_space">A limited contract can be terminated on the following bases:</p>
                <ul class="normal_list">
                  <li> if the term of the contract expires and is not renewed.</li>
                  <li>if both, the employer and employee mutually agree to end it.</li>
                  <li>if a worker commits any of the violations as mentioned under Article 120 of the Labour Law.</li>

                </ul>
              </div>
            </li>
            <li>
              <div class="heading_wrapper">
                <h5 class="normal">Unlimited Contract:</h5>
              </div>
              <div class="main_content">
                <p class="small_space">An employer can terminate an employment contract without notice on the following bases:</p>
                <ul class="normal_list">
                  <li>Adopts a false identity or nationality or if he submits forged documents or certificates</li>
                  <li>Violates instructions concerning safety of the place of business provided that such instructions are displayed in writing</li>
                  <li>Divulges any secrets of the establishment where he is employed</li>
                  <li>Is awarded final judgement by the competent court in respect of an offence prejudicing honour, honesty or public morals</li>
                  <li>During working hours, is found drunk or under the influence of prohibited drugs</li>
                  <li>In the course of his work, commits an assault on the employer, the manager or any of his colleagues</li>
                  <li>Absents himself without lawful excuse for more than 20 intermittent days or for more than 7 successive days during one year.
                  </li>
                </ul>
                <p>Post termination of employment contract and cancellation of work visa, the terminated employee is granted a 30-day grace period from the date of cancellation, where he can either obtain a new residence permit or leave the country.</p>
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

