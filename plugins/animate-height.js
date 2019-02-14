import Vue from "vue";
import { animateHeight } from "~/utils";

function hook(el, binding, vnode) {
  var $el = $(el),
    el_height = $el.height();

  $el.stop().css("height", el_height + "px");
  
  vnode.context.$nextTick(function() {
    animateHeight($el, binding.value);
  });
}

Vue.directive("animate-height", {
  update: hook,
  componentUpdated: hook
});

export { defaultOptions };
