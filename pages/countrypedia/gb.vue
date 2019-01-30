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
        <p class="small_space">As of April 2018</p>
        <ul class="normal_list">
          <!--li>
            <h4 class="normal">Annual Leave</h4>
            <p>as per Wikipedia, there is no statutory minimum paid vacation or paid public holidays. It is left to the employers to offer paid vacation. The average number of paid vacation days offered by private employers is 10 days after 1 year of service, 14 days after 5 years, 17 days after 10 years, and 20 days after 20 years.<br>
              The earliest that leave can be taken is 11 weeks before the expected week of childbirth, unless the baby is born early. Employees must take at least 2 weeks after the birth (or 4 weeks if they’re a factory worker).</p>
          </li>
          <li>
            <h4 class="normal">Childcare Leave</h4>
            <ul class="normal_list">
              <li><strong>Maternity Leave:</strong> 12 weeks of unpaid family leave after the birth or adoption of a child under the Family and Medical Leave Act (FMLA).</li>
              <li><strong>Paternity Leave:</strong> 12 weeks of unpaid family leave after the birth or adoption of a child under the Family and Medical Leave Act (FMLA).</li>
            </ul>
          </li-->
          <li><strong>25 and over:</strong> £7.83</li>
          <li><strong>21 to 24:</strong> £7.38</li>
          <li><strong>18 to 20:</strong> £5.90</li>
          <li><strong>Under 18:</strong> £4.20</li>
          <li><strong>Apprentice:</strong> £3.70</li>
        </ul>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>HR & Labour</h4>
        </template>
        <ul class="normal_list">
          <li><strong>Working Hours:</strong> The maximum working week is 40 hours for full time employees; & up to 30 hours for part time employees. </li>
          <li><strong>Overtime Policy:</strong> Employers do not have to pay workers for overtime; unless employee’s contract guarantees employee overtime.</li>
        </ul>

      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Leave Entitlement</h4>
        </template>
        <p class="small_space">Following leaves are applicable in United Kingdom from January to December every year.</p>
        <ul class="normal_list">
          <li><strong>Annual Leave:</strong> Most workers who work a 5-day week must receive at least 28 days’ paid annual leave per year. This is the equivalent of 5.6 weeks of holiday.</li>
          <li><strong>Sick Leave:</strong> Eligible employees may get up to 28 weeks paid sick leaves. Employees who are off work sick for more than 4 weeks may be considered long-term sick.</li>
          <li><strong>Maternity Leave:</strong> Eligible employees can take up to 52 weeks’ maternity leave. The first 26 weeks is known as ‘Ordinary Maternity Leave’, the last 26 weeks as ‘Additional Maternity Leave’.<br>
          The earliest that leave can be taken is 11 weeks before the expected week of childbirth, unless the baby is born early. Employees must take at least 2 weeks after the birth (or 4 weeks if they’re a factory worker).</li>
          <li><strong>Paternity Leave:</strong> 1 or 2 weeks’ paid Paternity Leave.</li>
          <li><strong>Adoption Leave:</strong> Eligible employees can take up to 52 weeks’ adoption leave.</li>
          <li><strong>Shared Parental Leave:</strong> Eligible employees can take up to 50 weeks of leave and up to 37 weeks of pay between employee and employee’s partner. </li>
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
                <p class="small_space">There is also no statutory requirement; however most of the employer’s include the notice period from the range of 2 weeks to 1 to 3 months as per the grade of employees. </p>
                <!--ul class="normal_list">
                  <li>1 year or less 1 week</li>
                  <li>1 year or less 1 week</li>
                </ul-->
              </div>
            </li>
          </ul>
        </section>
        <!--section>
          <h4 class="normal">Major Reasons for Terminations</h4>
          <p>Resignations</p>
        </section-->
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
