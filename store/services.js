import {createLinkListFn, getLinkFromState} from '~/utils';

export const state = () => ({
  list: [
    {
      key: "managed-hr-services",
      title: "Managed HR Services",
      shortDesc:
        "VDP Global offers comprehensive HR solutions facilitating the full range of HR services from on-boarding to off-boarding.",
      mainContent: `<p>VDP offers end-to- end HR operation services to take care of everyday transactional tasks that can often take up valuable time, freeing up your HR team to focus on strategic functions. Our team of HR experts will work with you to maintain data, schedule tasks and carry out administrative activities, ensuring that employee services are delivered at highest standards.</p>`
    },
    {
      key: "payroll",
      title: "Payroll",
      shortDesc:
        "VDP provides wholesome support in payroll management leveraging upon its inventive tools and techniques.",
      mainContent: `<p>VDP supports end-to-end management of the payroll process. This includes payroll management, salary data accounting, support for monthly, quarterly and year end compliances, amongst others.</p>
      <p>We also assist with statutory wage rate amendments and implementation. Other related services include payroll and compliance audit handling, payroll process compliances (Internal Control Systems), salary account evaluations, statutory statistics, tax returns certificates, statutory notice handling, support for labour authority inspections, actuarial valuation – leave encashment, actuarial valuation – gratuity, accruals and reporting.</p>`
    },
    {
      key: "employee-benefits",
      title: "Employee Benefits",
      shortDesc:
        "VDP supports in managing benefit plans and renewals and partners with its clients to arrive at the best possible solutions for their employees.",
      mainContent: `<p>VDP supports in managing benefit plans and renewals and partners with its clients to arrive at the best possible solutions for their employees. We also administer the benefits plans through monthly operational activities of insurance (payments and monthly/annual updates, insurance claims, monthly benefit enrollment, annual benefit enrollment and premium payments). These benefits include, insurance (life, accidental, medical), expatriate insurance and local employee benefits, and management personnel benefits. </p>
      <p>VDP also delivers support services for payment of social security and related savings of employees in relation with their employment, payment of gratuity and related savings, statutory bonus pay-outs and related record keeping, payment of Pension (Provident) of employees in relation with the employment, providing guidance on procedures related to pension.</p>`
    },
    {
      key: "vendor-management",
      title: "Vendor Management",
      shortDesc:
        "With its vast clientele of service providers and domain expertise, VDP also supports its clients with vendor management solutions.",
      mainContent: `<p>Leveraging upon a vast network of service providers and domain expertise, VDP offers vendor management solution to its large size clients to benefit from our market expertise, economies of scale and pooling contracts.</p>
        <p>We also support clients in identifying best vendor solution through market research and help them in their service outsourcing in the areas of employee benefits, payroll, statutory compliance, background verification/reference checks, insurance, etc. Post outsourcing support in terms of managing the vendor agreements, renewals and interim service reviews are also part of the scope.</p>`
    },
    {
      key: "shared-services-consulting",
      title: "Shared Services Consulting",
      shortDesc: "VDP offers experienced HR consulting services across various dimensions of design, planning and implementation of a service delivery model.",
      mainContent: `<p>If you are considering maximising cost effectiveness and meeting industry benchmarks, the first challenge that you will face will be to adopt an off-the-shelf solution which may prove to be more of a hindrance in your organisation’s overall operational framework.</p>
      <p>Hence, we offer tailored Shared Service Solutions across various dimensions of design, planning and implementation of a service delivery model. </p>
      <p>Our widespread understanding of contrasting business models, put together with decades of cumulative experience with implementation and scope of coverage truly divulge into a global approach with regional expertise. </p>
      <p class="small_space">All this and more to help you through a range of services:</p>
      <ol type="1">
        <li>Shared Services advisory model and KPI management role.</li>
        <li>Systems implementation and integration</li>
        <li>Human and System Interface for flawless rollout of Shared Services </li>
      </ol>
      <p>Between the thousands of employment regulations that affect both large and small companies and the vast complexity of payroll and benefits, it’s important that you have access to the right expert on demand.</p>
      <p>At VDP, we understand the difference between solutions and practically tested solutions, which are ready to be implemented and show immediate results. We employ hands-on learning and an adaptable framework to help guide clients to the best shared services solution for their unique situation. </p>`
    },
    {
      key: "contact-centre",
      title: "Contact Centre",
      shortDesc:
        "VDP also provides an advanced technology tool to help businesses manage their employee queries through various platforms like chat, phone call, online portal and social media.",
      mainContent: `<p>VDP also provides an advanced technology tool to help businesses manage their employee queries through various platforms like chat, phone call, online portal and social media. This provides a seamless setup for HR departments to offload their routine operational query management. The tool opens up various channels of communication, thus making it convenient for everyone working across different locations and time zones.</p>`
    }
  ],
  pageLink: "/services",
  linkType: '#',
  iconClassPrefix: "icon-service-"
});

export const getters = {
  correctedListContent({ list, pageLink, linkType, iconClassPrefix }) {
    return list.map(element => ({
      ...element,
      link: getLinkFromState({pageLink, linkType}, element),
      text: element.title,
      iconClass: iconClassPrefix + element.key
    }));
  },

  linkList: createLinkListFn()
};
