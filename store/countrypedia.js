import {
  createLinkListFn,
  getLinkFromState
} from "~/utils";

export const state = () => ({
  list: [
    {
      key: "au",
      title: "Australia",
      labelPositionDY: -5
    },
    {
      key: "cn",
      title: "China"
    },
    {
      key: "in",
      title: "India",
      labelPositionDX: -9
    },
    {
      key: "sg",
      title: "Singapore"
    },
    {
      key: "za",
      title: "South Africa"
    },
    {
      key: "gb",
      title: "United Kingdom"
    },
    {
      key: "us",
      title: "United States",
      labelPositionDX: 45,
      labelPositionDY: 20
    }
  ],
  pageLink: "/countrypedia",
  linkType: "/",
  bannerImageFormat: "jpg"
});

export const getters = {
  correctedListContent({
    list,
    pageLink,
    linkType,
    bannerImageFormat
  }) {
    return list.map(element => ({
      ...element,
      link: getLinkFromState({ pageLink, linkType }, element),
      bannerImage: {
        name: element.key + "." + bannerImageFormat,
        position: element.imagePosition
      }
    }));
  },

  linkList: createLinkListFn()
};
