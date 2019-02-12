import Vue from "vue";

var allOuterHooksInComponents = {};

Vue.config.optionMergeStrategies.outerHooks =
  Vue.config.optionMergeStrategies.watch;

Vue.mixin({
  beforeCreate() {
    var outerHooks = this.$options.outerHooks;

    for (var key in outerHooks) {
      allOuterHooksInComponents[key] =
        allOuterHooksInComponents[key] || {};

      var fn = outerHooks[key];

      if(typeof fn == 'object') {
        var {immediate} = fn;
        fn = fn.handler;
        
        if(immediate) {
          immediate = immediate == true ? 'created' : immediate;
          this.$once('hook:' + immediate, () => {
            setTimeout(() => {
              fn.call(this);
            });
          });
        }
      }

      allOuterHooksInComponents[key][this._uid] = {
        component: this,
        fn
      };
    }
  },
  destroyed() {
    var outerHooks = this.$options.outerHooks;

    for (var key in outerHooks)
      delete allOuterHooksInComponents[key][this._uid];
  }
});

function emit(hookName) {
  var curOuterHooksInComponents = allOuterHooksInComponents[hookName];

  for (var uid in curOuterHooksInComponents) {
    var fn = curOuterHooksInComponents[uid].fn,
      component = curOuterHooksInComponents[uid].component;

    if (typeof fn == "function") {
      fn.call(component);
    } else {
      for (var j = 0; j < fn.length; j++) fn[j].call(component);
    }
  }
}

$(window).on({
  load: () => emit("windowLoaded"),
  resize: () => emit("windowResized")
});
