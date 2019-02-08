import Vue from "vue";
import {
  createAdvancedAutocorrectOptions,
  verticalScroll,
  getSwapValue
} from "~/utils";

var slideElement = (function() {
  var slideType = {
    swapProps: {
      show: "hide"
    },
    details: {
      show: {
        getFromToHeightFn: {
          from: function($el, elHeight) {
            return elHeight == $el.css("height", "").height() ? 0 : elHeight;
          },
          to: function($el) {
            return $el.css("height", "").height();
          }
        },
        cssHeightForScrollTop: "",
        fromToKeys: {
          from: "from",
          to: "to"
        },
        onComplete: function($el) {
          $el.css("display", "");
        }
      },
      hide: {
        checkCondition: function($el) {
          return $el.hasClass("show");
        },
        getFromToHeightFn: {
          from: function($el) {
            return $el.height();
          },
          to: function() {
            return 0;
          }
        },
        cssHeightForScrollTop: "0px",
        fromToKeys: {
          from: "to",
          to: "from"
        },
        onComplete: function($el) {
          $el.css("display", "none");
        }
      }
    }
  };

  slideType.allClasses = Object.keys(slideType.details);

  var checkAndSlide = (function() {
      var animationCompleted = function($el, typeDetails, callbacks) {
          $el.css({
            height: "",
            overflow: ""
          });

          if (typeDetails.onComplete) typeDetails.onComplete($el);

          callbacks.onComplete && callbacks.onComplete($el);
        },
        scrollTop = {
          onBeforeStart: function($el, typeDetails, scrollToTop) {
            var previousHeight = $el.css("height"),
              previousScrollTop = $(window).scrollTop(),
              $animateTopToEl =
                scrollToTop == "" || scrollToTop == true
                  ? $el
                  : $el.closest(scrollToTop),
              animateTop;

            $el.css("height", typeDetails.cssHeightForScrollTop);

            animateTop = verticalScroll.getAnimateTopOfEl($animateTopToEl);

            $el.css("height", previousHeight);
            $("html, body").scrollTop(previousScrollTop);

            return animateTop;
          },
          onAfterStart: function(animateTop, duration) {
            if (duration) verticalScroll.animate(animateTop, duration);
            else $("html, body").scrollTop(animateTop);
          }
        },
        scrollToTopDataTypes = ["boolean", "string"];

      return function(
        $el,
        type,
        typeDetails,
        duration,
        callbacks,
        scrollToTop
      ) {
        if (!($el instanceof jQuery) || $el.length == 0) return false;

        if (
          $el.hasClass(type) ||
          (typeDetails.checkCondition && !typeDetails.checkCondition($el))
        )
          return false;

        //autoset params

        if (scrollToTopDataTypes.indexOf(typeof callbacks) != -1) {
          scrollToTop = callbacks;
          callbacks = undefined;
        }

        if (typeof duration == "object") {
          callbacks = duration;
          duration = undefined;
        } else if (scrollToTopDataTypes.indexOf(typeof duration) != -1) {
          scrollToTop = duration;
          duration = undefined;
        }

        duration = duration || 0;
        callbacks = callbacks || {};
        scrollToTop = scrollToTop == undefined ? false : scrollToTop;

        //end autoset params

        $el.css("display", "block");

        callbacks.beforeAnimation && callbacks.beforeAnimation($el);

        var elHeight = $el.height(),
          animateObj = {
            height: typeDetails.getFromToHeightFn.to($el, elHeight)
          },
          swappedType = getSwapValue(slideType.swapProps, type),
          scrollTopReturnVal =
            scrollToTop != false
              ? scrollTop.onBeforeStart($el, typeDetails, scrollToTop)
              : null;

        $el.css(
          "height",
          typeDetails.getFromToHeightFn.from($el, elHeight) + "px"
        );

        $el.removeClass(swappedType).addClass(type);

        if (duration) {
          $el.stop().animate(animateObj, duration, function() {
            animationCompleted($(this), typeDetails, callbacks);
          });
        } else {
          animationCompleted($el, typeDetails, callbacks);
        }

        if (scrollToTop) scrollTop.onAfterStart(scrollTopReturnVal, duration);

        return true;
      };
    })(),
    getSlideFn = function(type) {
      var typeDetails = slideType.details[type];

      return function($el, duration, callbacks, scrollToTop) {
        return checkAndSlide(
          $el,
          type,
          typeDetails,
          duration,
          callbacks,
          scrollToTop
        );
      };
    },
    mainFn = function(config) {
      
    };

  for (var type in slideType.details) mainFn[type] = getSlideFn(type);

  return mainFn;
})();

var defaultOptions = {
    show: false,
    slideDuration: 700,
    scrollToTop: false, //below are possible options
    //give true to scroll to top of current el on both show and hide;
    //give 'show' to scroll to top of current el on show only
    //give 'hide' to scroll to top of current el on hide only
    //give '(selector)' to scroll to top of closest element of selector on both show and hide
    //give {on: '(type)', selector: '(selector)'} to scroll to top of closest element of selector on given event in on property;
    //on can be 'show', 'hide', ''; selector can be '' or any proper selector to pass in closest function
    callbacks: {}
  },
  autocorrectOptions = createAdvancedAutocorrectOptions(
    defaultOptions,
    "show",
    {
      scrollToTop: (function() {
        var defaultOptions = {
          on: "",
          selector: ""
        };

        return function(scrollToTop) {
          if (!scrollToTop) return scrollToTop;

          if (scrollToTop == true) {
            return {
              on: "",
              selector: ""
            };
          } else if (scrollToTop == "show" || scrollToTop == "hide") {
            return {
              on: scrollToTop,
              selector: ""
            };
          } else if (typeof scrollToTop == "string") {
            return {
              on: "",
              selector: scrollToTop
            };
          } else {
            return {
              ...defaultOptions,
              ...scrollToTop
            };
          }
        };
      })(),

      callbacks(callbacks) {
        return typeof callbacks == "function"
          ? {
              onComplete: callbacks
            }
          : callbacks;
      }
    }
  );

Vue.directive("show-by-slide", {
  bind(el, binding) {
    var options = autocorrectOptions(binding.value),
      { show } = options;

    el.style.display = show ? null : "none";
    el.bound = true;
  },
  update(el, binding, vnode) {
    if (
      binding.value == binding.oldValue ||
      (binding.value.show != undefined &&
        binding.value.show == binding.oldValue.show)
    )
      return;

    var options = autocorrectOptions(binding.value),
      { show, slideDuration, callbacks, scrollToTop } = options,
      slideFn = show ? "show" : "hide",
      { on, selector } = scrollToTop;

    slideElement[slideFn](
      $(el),
      slideDuration,
      callbacks,
      !on || slideFn == on ? selector : false
    );

    // var $root = vnode.context.$root;

    // if($root.timerInited) return;

    // $root.timerInited = true;
    
    // setTimeout(function() {
    //   delete $root.timerInited;
    // });
  }
});

export { defaultOptions };
