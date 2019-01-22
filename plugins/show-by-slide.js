import Vue from "vue";

var defaultOptions = {
  show: false,
  slideDuration: 700,
  callback() {}
};

function autocorrectOptions(binding) {
  var { value: options } = binding;

  if (typeof options == "boolean") {
    options = {
      show: options
    };
  }

  options = {
    ...defaultOptions,
    ...options
  };

  return options;
}

Vue.directive("show-by-slide", {
  bind(el, binding) {
    var options = autocorrectOptions(binding),
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
