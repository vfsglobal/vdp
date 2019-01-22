import Vue from "vue";
import { getAllModules } from "~/utils";

//additional global components
import basicSection from "~/components/basic-section.vue";
import emailLink from "~/components/utils/email-link.vue";
import hyperlink from "~/components/utils/hyperlink.vue";

Vue.component("basic-section", basicSection);
Vue.component("email-link", emailLink);
Vue.component("hyperlink", hyperlink);

//add multiple components from entire folder
function addComponents(components) {
  for (var componentName in components)
    Vue.component(componentName, components[componentName]);
}

addComponents(
  getAllModules(
    require.context(
      "~/components/all-master-pages/",
      true,
      /^\.\/((((?!\/).)+)|(((?!\/).)+\/index))\.vue$/
    )
  )
);
