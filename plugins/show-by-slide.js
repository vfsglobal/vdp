import Vue from "vue";
import { createAdvancedAutocorrectOptions } from "~/utils";

var defaultOptions = {
    show: false,
    slideDuration: 700,
    callback() {}
  },
  autocorrectOptions = createAdvancedAutocorrectOptions(defaultOptions, "show");

Vue.directive("show-by-slide", {
  bind(el, binding) {
    var options = autocorrectOptions(binding.value),
      { show } = options;

    el.style.display = show ? null : "none";
  },
  update(el, binding) {
    if (binding.oldValue == binding.value) return;

    var options = autocorrectOptions(binding),
      { show, slideDuration, callback } = options;

    $(el)
      .stop()
      [show ? "slideDown" : "slideUp"](slideDuration, callback);
  }
});

export { defaultOptions };
