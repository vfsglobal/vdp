import Vue from "vue";
import { verticalScroll } from "~/utils";

var defaultOptions = {
    top: 0,
    duration: 700
  },
  $router;

var checkAnimateScroll = (function() {
  var getRouteAnimateScroll = (function() {
    function autocorrect(routeAnimateScroll) {
      routeAnimateScroll =
        routeAnimateScroll == undefined ? true : routeAnimateScroll;

      if (routeAnimateScroll === true) {
        return defaultOptions;
      } else if (typeof routeAnimateScroll == "function") {
        routeAnimateScroll = autocorrect(routeAnimateScroll());
      }

      return (
        routeAnimateScroll && {
          ...defaultOptions,
          ...routeAnimateScroll
        }
      );
    }

    return function(to, from) {
      if (to.path === from.path) return false;

      var matchedComponents = $router.getMatchedComponents(to).reverse(),
        routeAnimateScroll;

      matchedComponents.every(({ options }) => {
        if (options.routeAnimateScroll != undefined) {
          routeAnimateScroll = options.routeAnimateScroll;
          return false;
        }

        return true;
      });

      return autocorrect(routeAnimateScroll);
    };
  })();

  return function(to, from) {
    var routeAnimateScroll = getRouteAnimateScroll(to, from);

    if (!routeAnimateScroll) return;

    var { top, duration } = routeAnimateScroll;

    setTimeout(function() {
      var $el = $(to.hash || (typeof top == "string" ? top : null));

      verticalScroll.animate(
        $el.length ? verticalScroll.getAnimateTopOfEl($el) : top,
        duration
      );
    }, 100);
  };
})();

Vue.mixin({
  beforeMount() {
    if ($router) return;

    $router = this.$router;
    $router.afterEach(checkAnimateScroll);
  }
});
