<template>
  <div>
    <accordion>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Employment & Payroll</h4>
        </template>
        <p>Employees working in United Kingdom can be paid at least weekly/ forth-nightly or monthly via cheques, direct deposit (BACS) </p>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Minimum Wage</h4>
        </template>
        <p>These rates are for the National Living Wage and the National Minimum Wage. The rates change every April.</p>
        <p class="small_space">Minimum Wage Rate as of April 2018</p>
        <div class="table_wrapper">
          <table>
            <tr class="header">
              <th>Age Group</th>
              <th>Minimum Wage Rate</th>
            </tr>
            <tr>
              <td>25 years and above</td>
              <td>£7.83</td>
            </tr>
            <tr>
              <td>21 years to 24 years</td>
              <td>£7.38</td>
            </tr>
            <tr>
              <td>18 years to 20 years</td>
              <td>£5.90</td>
            </tr>
            <tr>
              <td>Under 18 years</td>
              <td>£4.20</td>
            </tr>
            <tr>
              <td>Apprentice</td>
              <td>£3.70</td>
            </tr>
          </table>
        </div>
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
              <p>The maximum working week is 40 hours for full time employees and  up to 30 hours a week for part time employees.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Overtime Policy:</h5>
            </div>
            <div class="main_content">
              <p>Employers do not have to pay workers for overtime; unless employee’s contract guarantees employee overtime. </p>
            </div>
          </li>
        </ul>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Leave Entitlement</h4>
        </template>
        <p class="small_space">Following leaves are applicable in United Kingdom from January to December every year.</p>
        <ul class="side_heading_content_list">
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Annual Leave:</h5>
            </div>
            <div class="main_content">
              <p>Most workers who work a 5-day week must receive at least 28 days’ paid annual leave per year. This is the equivalent of 5.6 weeks of holiday.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Sick Leave:</h5>
            </div>
            <div class="main_content">
              <p> Eligible employees may get up to 28 weeks paid sick leaves. Employees who are off work sick for more than 4 weeks may be considered long-term sick.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Maternity Leave:</h5>
            </div>
            <div class="main_content">
              <p>Eligible employees can take up to 52 weeks  maternity leave. The first 26 weeks are  known as ‘Ordinary Maternity Leave, the last 26 weeks are known as as ‘Additional Maternity Leave’.<br>
               The earliest that leave can be taken is 11 weeks before the expected week of childbirth , unless the baby is born early. Employees must take at least 2 weeks off after the birth (or 4 weeks if they’re a factory worker).</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Paternity Leave:</h5>
            </div>
            <div class="main_content">
              <p> 1 or 2 weeks’ paid Paternity Leave.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Adoption Leave:</h5>
            </div>
            <div class="main_content">
              <p> Eligible employees can take up to 52 weeks’ adoption leave.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Shared Parental Leave:</h5>
            </div>
            <div class="main_content">
              <p> Eligible employees can take up to 50 weeks of leave and up to 37 weeks of pay between employee and employee’s partner. </p>
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
              
              <div class="main_content">
                <p>There is also no statutory requirement of a notice period; however most employers include the notice period range from 2 weeks 1 to 3 months as per the grade of employees.</p>
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
