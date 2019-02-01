import {
  generateNewArrData,
  createLinkListFn,
  getLinkFromState
} from "~/utils";

export const state = () => ({
  list: [
    {
      key: "au",
      title: "Australia",
      labelPositionDY: -5,
      mainInfo: {
        currency: "Australian Dollars (AUD)",
        fiscalYear: "1st July to 30th June"
      }
    },
    {
      key: "cn",
      title: "China",
      mainInfo: {
        currency: "Chinese Yuan (CNY)",
        fiscalYear: "1st January to 31st December"
      }
    },
    {
      key: "in",
      title: "India",
      labelPositionDX: -9,
      mainInfo: {
        currency: "Indian rupee (INR)",
        fiscalYear: "1st April to 31st March"
      }
    },
    {
      key: "sg",
      title: "Singapore",
      mainInfo: {
        currency: "Singapore Dollars (SGD)",
        fiscalYear: "1st April to 31st March"
      }
    },
    {
      key: "za",
      title: "South Africa",
      mainInfo: {
        currency: "South African rand (ZAR)",
        fiscalYear: "1st April to 31st March"
      }
    },
    {
      key: "ae",
      title: "UAE",
      mainInfo: {
        currency: "United Arab Emirates Dirham (AED)",
        fiscalYear: "1st January to 31st December"
      }
    },
    {
      key: "gb",
      title: "United Kingdom",
      mainInfo: {
        currency: "Sterling Pounds (GBP)",
        fiscalYear: "6th April to 5th April"
      }
    },
    {
      key: "us",
      title: "United States",
      mainInfo: {
        currency: "United States Dollar (USD)",
        fiscalYear: "1st October to 30th September"
      },
      labelPositionDX: 45,
      labelPositionDY: 20
    }
  ],
  mainInfoDetails: {
    heading: {
      currency: "Currency",
      fiscalYear: "Fiscal Year"
    },
    keyOrder: ["currency", "fiscalYear"]
  },
  pageLink: "/countrypedia",
  linkType: "/"
});

export const getters = {
  correctedListContent({
    list,
    mainInfoDetails,
    pageLink,
    linkType,
  }) {
    return list.map(element => ({
      ...element,
      mainInfo: generateNewArrData(element.mainInfo, mainInfoDetails),
      link: getLinkFromState({ pageLink, linkType }, element)
    }));
  },

  linkList: createLinkListFn()
};
