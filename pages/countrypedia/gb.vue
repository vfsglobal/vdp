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
          <li><strong>25 and over:</strong> £7.83</li>
          <li><strong>25 and over:</strong> £7.83</li>
          <li><strong>25 and over:</strong> £7.83</li>
          <li><strong>25 and over:</strong> £7.83</li>
          <li><strong>25 and over:</strong> £7.83</li>
          <li><strong>25 and over:</strong> £7.83</li>
        </ul>
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>HR & Labour</h4>
        </template>

      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Leave Entitlement</h4>
        </template>
        
      </accordion-element>
      <accordion-element>
        <template slot="buttonContent">
          <h4>Terminations</h4>
        </template>
        <h4 class="normal">Notice Period</h4>
        <ul class="side_heading_content_list">
          <li>
            <div class="heading_wrapper">
              <h5 class="normal">Standard Notice Period:</h5>
            </div>
            <div class="main_content">
              <p>There is also no statutory requirement; however most of the employer’s include the notice period from the range of 2 weeks to 1 to 3 months as per the grade of employees. </p>
            </div>
          </li>
        </ul>
      </accordion-element>
    </accordion>
  </div>
</template>

<script>
import { innerPage } from '~/components/mixins/page';

export default {
  mixins: [innerPage]
}
</script>

<style>
</style>
