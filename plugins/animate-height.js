import Vue from "vue";
import { animateHeight } from "~/utils";

function hook(el, binding, vnode) {
  var $el = $(el),
    el_height = $el.height();
  
  if (el_height == $el.data("animate-current-height")) return;
  
  $el.data("animate-current-height", el_height);

  $el.stop().css("height", el_height + "px");
  
  vnode.context.$nextTick(function() {
    animateHeight($el, binding.value);
  });

  setTimeout(function() {
    $el.removeData("animate-current-height");
  });
}

Vue.directive("animate-height", {
  update: hook,
  componentUpdated: hook
});

export { defaultOptions };
