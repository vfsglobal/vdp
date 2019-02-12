import {
  checkAddSlashInPath,
  indexPathOfRoutePath,
  sortRoutePath,
  mergeTransition,
  animateHeight,
  verticalScroll
} from "~/utils";

import accordion from "~/components/accordion/index.vue";
import accordionElement from "~/components/accordion/element.vue";

var sitemapLinkKey = "link",
  sitemapTextKey = "text",
  sitemapSubmenuKey = "sitemapSubmenu";

export const pageTitle = {
  head: (() => {
    //for adding title
    var defaultTitle = "VDP Global Services",
      titleSeperator = " | ",
      allPathTitles = {
        "/": "Welcome to VDP Global Services"
      };

    return function() {
      var curPath = checkAddSlashInPath(this.$route.path),
        title = allPathTitles[curPath];

      if (!title) {
        var linkList = this.$store.getters["sitemap/linkList"],
          curLinkObj,
          indexPath = indexPathOfRoutePath(
            curPath,
            linkList,
            sitemapLinkKey,
            sitemapSubmenuKey
          );

        title = defaultTitle;

        for (var i = 0; i < indexPath.length; i++) {
          curLinkObj = linkList[indexPath[i]];
          title += titleSeperator + curLinkObj[sitemapTextKey];
          linkList = curLinkObj[sitemapSubmenuKey];
        }
      }

      return {
        title
      };
    };
  })()
};

const transitionFunctions = {
  rootPageTransitionName(to, from) {
    var defaultTransition = "page-from-right",
      fromPath = from && checkAddSlashInPath(from.path),
      toPath = to && checkAddSlashInPath(to.path);

    if (!fromPath || !toPath) return { name: defaultTransition, mode: "" };

    var sortedPaths = sortRoutePath(
      [fromPath, toPath],
      $nuxt.$store.getters["sitemap/linkList"],
      sitemapLinkKey,
      sitemapSubmenuKey
    );

    $nuxt.$store.getters["sitemap/linkList"];

    var fromPathIndex = sortedPaths.indexOf(fromPath),
      toPathIndex = sortedPaths.indexOf(toPath);

    return {
      name: toPathIndex > fromPathIndex ? "page-from-right" : "page-from-left",
      mode: ""
    };
  },
  hideBodyOverflow: {
    beforeEnter() {
      $("body").css("overflow-x", "hidden");
    },
    afterEnter() {
      $("body").css("overflow-x", "");
    }
  },
  createAnimateContainerHeight(pageContainerSelector, animationOptions) {
    return {
      beforeEnter() {
        var $pageContainer = $(pageContainerSelector);

        $pageContainer.stop().css("height", $pageContainer.height() + "px");
      },
      enter() {
        animateHeight($(pageContainerSelector), animationOptions);
      }
    };
  },
  createAnimateScrollBar(fn, args) {
    return {
      beforeEnter() {
        verticalScroll[fn].apply(verticalScroll, args);
      }
    };
  }
};

export const pageDefault = {
  mixins: [pageTitle],
  transition: mergeTransition([
    transitionFunctions.rootPageTransitionName,
    transitionFunctions.hideBodyOverflow,
    transitionFunctions.animateScrollToTop,
    transitionFunctions.createAnimateContainerHeight(".page_container", {
      duration: 1000,
      delay: 500
    }),
    transitionFunctions.createAnimateScrollBar("animate", [0, 700])
  ])
};

export const countrypediaPage = {
  mixins: [pageTitle],
  components: {
    accordion,
    accordionElement
  }
};
