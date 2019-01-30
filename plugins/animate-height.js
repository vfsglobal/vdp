import Vue from "vue";
import { createAdvancedAutocorrectOptions, animateHeight } from "~/utils";

var defaultOptions = {
    toHeight: "auto",
    duration: 700,
    delay: 0,
    callback() {}
  },
  autocorrectOptions = createAdvancedAutocorrectOptions(
    defaultOptions,
    "toHeight"
  );

function hook(el, binding, vnode) {
  var $el = $(el);
  options;

//   $el.data('animate-height', $el.height());
  
//   options = autocorrectOptions(binding);

//   $el.stop().css("height", $pageContainer.height() + "px");

//   vnode.context.$nextTick(function() {
//     console.log($(el).height());
//   });
//   console.log($(el).height());
}

Vue.directive("animate-height", {
  update: hook,
  componentUpdated: hook
});

export { defaultOptions };
