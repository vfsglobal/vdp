<template>
  <div>
    <accordion>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Employment & Payroll</h4>
        </template>
        <p>Employees working in Singapore must be paid at least monthly via bank transfer. Salaries are paid the end of the month.</p>
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
              <p>The maximum working week is 40 hours for full time employees. </p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Overtime Policy:</h5>
            </div>
            <div class="main_content">
              <p>Employer must pay at least 1.5 times the hourly basic rate of pay. Payment must be made within 14 days after the last day of the salary period.</p>
            </div>
          </li>
        </ul>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Leave Entitlement</h4>
        </template>
        <p>There are different types of leave under Singapore Employment Act depend on the eligibility and entitlement.</p>
        <p class="small_space">Following leaves are applicable in Singapore Example of Leave Types:</p>
        <ul class="side_heading_content_list">
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Annual Leave:</h5>
            </div>
            <div class="main_content">
              <p>Depends on the number of service years completed. 1st year 7 days, 2nd year 8 days and so on.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Sick Leave:</h5>
            </div>
            <div class="main_content">
              <p>14 days for paid sick leave</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Hospitalization Leave:</h5>
            </div>
            <div class="main_content">
              <p>60 days for paid hospitalization leave. The 60 days of hospitalization leave includes the 14 days sick leave entitlement.</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Childcare Leave:</h5>
            </div>
            <div class="main_content">
              <p>6 days per year</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Maternity Leave:</h5>
            </div>
            <div class="main_content">
              <p>16 weeks of Maternity Leave</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Paternity Leave:</h5>
            </div>
            <div class="main_content">
              <p>2 weeks of Government Paid Paternity Leave</p>
            </div>
          </li>
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Adoption Leave:</h5>
            </div>
            <div class="main_content">
              <p>12 weeks</p>
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
                <p>The length of the notice period should be according to the written contract, or verbal agreement, if there is no written contract.</p>
              </div>
            </li>
          </ul>
        </section>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Employee registration process</h4>
        </template>
        <p>Mandate forms are The National Registration Identity Card (NRIC), Singapore visa, Employment Pass. Authorities are not intimated & employee can use their current Central Provident Fund account with any employer.</p>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Central Provident Fund (CPF) / pension </h4>
        </template>
        <p>The CPF is an employment based savings scheme with employers and employees contributing a mandated amount to the Fund.</p>
        <p>It is administered by the Central Provident Fund Board, a statutory board operating under the Ministry of Manpower which is responsible for investing contributions.</p>
        <p>CPF contributions are payable for Singapore citizens (SCs) and Singapore permanent residents (SPRs) who works in Singapore & are employed as Full time, part time or casual basis.</p>
        <p>Employee contributions range from 5% to 20% of the monthly salary, and employer contribution range from 6% to 15.5% of the employee’s salary. All payments and withdrawals are tax free, and only the first 4,500 SGD of every salary is liable to contributions.</p>
        <p>Employee receives monthly pay-out from the CPF at eligible age of 64 through The CPF Lifelong Income for the Elderly (CPF LIFE) Scheme. Employee will be automatically included into CPF LIFE if he/she is a Singapore Citizen or Permanent Resident </p>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Tax</h4>
        </template>
        <p class="small_space">Generally, there are 2 groups of taxpayers</p>
        <ol type="1">
          <li>those who are required to file a tax return, and</li>
          <li>those who are on the No-Filing Service (NFS).</li>
        </ol>
        <p class="small_space">If you have received any letter, form or SMS informing you to file an Income Tax Return, you must file regardless of:</p>
        <p class="small_space">The amount of your annual income in the previous year; or</p>
        <ol type="1">
          <li>Whether your employer is participating in the Auto-Inclusion Scheme (AIS) for Employment Income.</li>
          <li>Please refer the below link for detailed information on the tax regulations in Singapore.<br>
          <a href="https://www.iras.gov.sg/" target="_blank">https://www.iras.gov.sg/</a></li>
        </ol>       
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Health & Insurance Benefits</h4>
        </template>
        <p>The Social Security system for citizens and permanent residents working in Singapore is called the Central Provident Fund (CPF). </p>
        <p>Every CPF member has three accounts: the Ordinary Account with a 2.5% interest rate, the Special Account and the Medisave Account, both earning 4% interest. </p>
        <p>Funds in the Ordinary Account can be used for purchasing property and insurance, paying for education, etc. Funds in Special Account are reserved exclusively for retirement savings. The Medisave Account is every Singaporean’s basic medical insurance</p>
      
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

