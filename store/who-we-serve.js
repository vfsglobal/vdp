import { createImageStyle } from "~/utils";

export const state = () => {
  var onsiteHRServices = {
      title: "On-site HR Services",
      desc: `<p>Our HR Professionals can assist with On-site HR services for both long term and short term assignments. While on-site, our HR professional can audit current HR practices, develop and install new practices.</p>`
    },
    smallOnSiteHRServices = {
      title: "On-site HR Services",
      desc: `<p>Our HR Professionals can assist with On-site HR services for both long term and short term assignments. While on-site, our HR professional can audit current HR practices, develop and install new practices. Our On-site teams will consist of small teams with hi-touch customer service. </p>`
    },
    hubServices = {
      title: "Hub Services",
      desc: `<p>Our team of experts can cater to all continents from various hub locations. Presently our HR Hubs are present in Bogota, Paris and New Delhi which cater to Latin America, Europe and all locations in India respectively. </p>`
    },
    sharedServiceSupport = {
      title: "Shared Services Support",
      desc: `<p>From on boarding new employees to processing payroll, our Shared Services setup helps you through the entire employee life cycle. Our service team becomes an extension of your HR department, using tried-and-tested processes, helping streamline administration and execute tasks faster.</p>`
    },
    remoteHRServices = {
      title: "Remote HR services",
      desc: `<p>VDP provides Remote HR services designed to reduce your costs and provide premier HR outsourcing services. Improved performance, compliant processes and lower cost of administration makes us the ultimate solution for all aspects of HR management. Our highly trained Remote HR Executives can supervise your employees and/or manage the daily operational HR activities. </p>`
    },
    payrollAndCompliance = {
      title: "Payroll & Compliance",
      desc: `<p>VDP offers comprehensive payroll solution which includes salary calculations, salary data accounting, and employee payments amongst others. Other related services would include monthly, quarterly and year end compliances, compliance audit, statutory statistics, tax returns certificates, statutory notice handling, support for labour authority inspections and employment law advice.</p>`
    },
    payrollComplianceBenefits = {
      title: "Payroll, Compliance, Benefits",
      desc: `<p>VDP offers comprehensive payroll solution which includes salary calculations, salary data accounting, and employee payments amongst others. Other related services would include monthly, quarterly and year end compliances, compliance audit, statutory statistics, tax return certificates, statutory notice handling, support for labour authority inspections and employment law advice. Our benefits team cater to various employee benefits requirement which covers benefit design, market benchmark plan setup and pricing administration. </p>`
    },
    vendorManagement = {
      title: "Vendor Management",
      desc: `<p>Leveraging upon a vast network of service providers and domain expertise, VDP offers vendor management solution to its large size clients to benefit from our market expertise, economies of scale and pooling contracts.</p>`
    };

  return {
    list: [
      {
        title: "Employees over 3000",
        content: [
          onsiteHRServices,
          hubServices,
          sharedServiceSupport,
          payrollComplianceBenefits,
          vendorManagement
        ]
      },
      {
        title: "Employees between 500-3000",
        content: [onsiteHRServices, remoteHRServices, payrollComplianceBenefits]
      },
      {
        title: "Employees up to 500",
        content: [smallOnSiteHRServices, payrollAndCompliance]
      }
    ]
  };
};

export const getters = {
  correctedListContent(state) {
    return state.list.map(element => ({
      ...element,
      imageStyle: createImageStyle(
        element.key + "." + state.imageFormat,
        state.resourceFolder
      )
    }));
  }
};
