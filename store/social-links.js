export const state = () => ({
  list: [
    {
      iconClass: "icon-linkedin brand",
      link: "https://www.linkedin.com/company/vdp-global-services/"
    }
  ]
});

export const getters = {
  correctedListContent(state) {
    return state.list.map(({link, iconClass}) => ({
      link: {
        href: link,
        target: link == "#" ? "_self" : "_blank"
      },
      class: iconClass
    }));
  }
};
