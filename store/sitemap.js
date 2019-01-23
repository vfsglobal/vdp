import { getStateFromStoreModuleName } from "~/utils";

export const state = () => ({
  linkModules: ["top-nav", "footer-extra-links"]
});

export const getters = {
  linkList: (() => {
    var allModuleLinkLists = {};

    function getLinkListFromModule(moduleName, rootState, rootGetters) {
      if (allModuleLinkLists.hasOwnProperty(moduleName))
        return allModuleLinkLists[moduleName];

      var linkList,
        state = getStateFromStoreModuleName(rootState, moduleName);

      if (state.list) {
        let firstObj = state.list[0];

        if (firstObj.link && firstObj.text) linkList = state.list;
      }

      if (!linkList) linkList = rootGetters[moduleName + "/linkList"];

      linkList = JSON.parse(JSON.stringify(linkList));

      allModuleLinkLists[moduleName] = linkList;

      return linkList;
    }

    function createRootLevelLinks(linkModules, rootState, rootGetters) {
      var links = [];

      linkModules.forEach(moduleName => {
        links = links.concat(
          getLinkListFromModule(moduleName, rootState, rootGetters)
        );
      });

      return links;
    }

    function addSubmenuModuleLinks(links, rootState, rootGetters) {
      links.forEach(linkObj => {
        var { sitemapSubmenuModule } = linkObj;

        if (!sitemapSubmenuModule) return;

        var linkList = allModuleLinkLists[sitemapSubmenuModule];

        if(!linkList) {
            linkList = getLinkListFromModule(sitemapSubmenuModule, rootState, rootGetters);
            allModuleLinkLists[sitemapSubmenuModule] = linkList;
        }

        linkObj.sitemapSubmenu = linkList;
      });
    }

    return function({ linkModules }, getters, rootState, rootGetters) {
      allModuleLinkLists = {};

      var links = createRootLevelLinks(linkModules, rootState, rootGetters);

      addSubmenuModuleLinks(links, rootState, rootGetters);

      return links;
    };
  })()
};
