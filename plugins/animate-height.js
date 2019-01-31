import Vue from "vue";
import { animateHeight } from "~/utils";

function hook(el, binding, vnode) {
  var $el = $(el),
    el_height = $el.height();

  //if (el_height == $el.data("animate-height")) return;

  //$el.data("animate-height", $el.height());

  //options = autocorrectOptions(binding);

  $el.stop().css("height", el_height + "px");

  vnode.context.$nextTick(function() {
    animateHeight($el, binding.value);
  });
  //   console.log($(el).height());
}

Vue.directive("animate-height", {
  update: hook,
  componentUpdated: hook
});

export { defaultOptions };
