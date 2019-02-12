import Vue from "vue";
import {
  createAdvancedAutocorrectOptions,
  verticalScroll,
  getSwapValue
} from "~/utils";

var slideElement = (function() {
  var allSlideTypes = {
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

  allSlideTypes.allClasses = Object.keys(allSlideTypes.details);

  var autocorrectConfig = (function() {
      var checkSlidable = function({
        $el,
        slideType,
        slideTypeDetails: { checkCondition }
      }) {
        if (
          !($el instanceof jQuery) ||
          $el.length == 0 ||
          $el.hasClass(slideType) ||
          (checkCondition && !checkCondition($el))
        )
          return false;

        return true;
      };

      return function(curConfig) {
        curConfig.slideTypeDetails = allSlideTypes.details[curConfig.slideType];
        curConfig.isSlidable = checkSlidable(curConfig);

        return curConfig;
      };
    })(),
    checkAndSlide = (function() {
      var animationCompleted = function($el, slideTypeDetails, callbacks) {
          $el.css({
            height: "",
            overflow: ""
          });

          if (slideTypeDetails.onComplete) slideTypeDetails.onComplete($el);

          callbacks.onComplete && callbacks.onComplete($el);
        },
        scrollTop = {
          onBeforeStart: function(scrollTopData) {
            scrollTopData.previousScrollTop = $(window).scrollTop();
          },
          onEach: [
            function(curConfig) {
              var {
                $el,
                slideTypeDetails: { cssHeightForScrollTop }
              } = curConfig;

              curConfig.scrollTopPreviousHeight = $el.css("height");
              $el.css("height", cssHeightForScrollTop);
            },
            function(curConfig, scrollTopData) {
              var {
                $el,
                options: { scrollToTop, duration }
              } = curConfig;

              if (scrollToTop == false) return;

              scrollTopData.animateTop = verticalScroll.getAnimateTopOfEl(
                scrollToTop == "" || scrollToTop == true
                  ? $el
                  : $el.closest(scrollToTop)
              );
              scrollTopData.animationDuration = duration;
            },
            function(curConfig) {
              var { $el, scrollTopPreviousHeight } = curConfig;

              $el.css("height", scrollTopPreviousHeight);
            }
          ],
          onAfterStart: function({
            previousScrollTop,
            animateTop,
            animationDuration
          }) {
            var $htmlBody = $("html, body");

            $htmlBody.scrollTop(previousScrollTop);
            
            if (animateTop == undefined) return;
            
            if (animationDuration)
              verticalScroll.animate(animateTop, animationDuration);
            else $htmlBody.scrollTop(animateTop);
          }
        },
        initAll = function(curConfig) {
          var {
            $el,
            slideType,
            slideTypeDetails: { getFromToHeightFn }
          } = curConfig;

          $el.css("display", "block");

          curConfig.elHeight = $el.height();
          curConfig.animateObj = {
            height: getFromToHeightFn.to($el, curConfig.elHeight)
          };
          curConfig.swappedSlideType = getSwapValue(
            allSlideTypes.swapProps,
            slideType
          );
        },
        callBeforeAnimationCallback = function(curConfig) {
          var {
            $el,
            options: {
              callbacks: { beforeAnimation }
            }
          } = curConfig;

          beforeAnimation && beforeAnimation($el);
        },
        animateAll = function(curConfig) {
          var {
            $el,
            elHeight,
            slideType,
            swappedSlideType,
            animateObj,
            slideTypeDetails,
            slideTypeDetails: { getFromToHeightFn },
            options: { duration, callbacks }
          } = curConfig;

          $el.css("height", getFromToHeightFn.from($el, elHeight) + "px");

          $el.removeClass(swappedSlideType).addClass(slideType);

          if (duration) {
            $el.stop().animate(animateObj, duration, function() {
              animationCompleted($(this), slideTypeDetails, callbacks);
            });
          } else {
            animationCompleted($el, slideTypeDetails, callbacks);
          }
        };

      return function(config) {
        var mainConfig = [];

        config.forEach((curConfig, index) => {
          curConfig = config[index] = autocorrectConfig(curConfig);

          if (curConfig.isSlidable) mainConfig.push(curConfig);
        });

        if (!mainConfig.length) return false;

        var scrollTopData = {};

        scrollTop.onBeforeStart(scrollTopData);

        mainConfig.forEach(initAll);

        mainConfig.forEach(callBeforeAnimationCallback);

        scrollTop.onEach.forEach(fn =>
          mainConfig.forEach(curConfig => fn(curConfig, scrollTopData))
        );

        mainConfig.forEach(animateAll);

        scrollTop.onAfterStart(scrollTopData);

        return true;
      };
    })(),
    getSlideFn = function(slideType) {
      return function($el, options) {
        return checkAndSlide([
          {
            $el,
            slideType,
            options
          }
        ]);
      };
    };

  for (var type in allSlideTypes.details)
    checkAndSlide[type] = getSlideFn(type);

  return checkAndSlide;
})();

var defaultOptions = {
    show: false,
    duration: 700,
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
      _slideType(slideType, { show }) {
        return show ? "show" : "hide";
      },
      scrollToTop: (function() {
        var defaultOptions = {
          on: "",
          selector: ""
        };

        return function(scrollToTop, { _slideType }) {
          if (!scrollToTop) return scrollToTop;

          if (scrollToTop == true) {
            scrollToTop = {
              on: "",
              selector: ""
            };
          } else if (scrollToTop == "show" || scrollToTop == "hide") {
            scrollToTop = {
              on: scrollToTop,
              selector: ""
            };
          } else if (typeof scrollToTop == "string") {
            scrollToTop = {
              on: "",
              selector: scrollToTop
            };
          } else {
            scrollToTop = {
              ...defaultOptions,
              ...scrollToTop
            };
          }

          var { on, selector } = scrollToTop;

          return !on || _slideType == on ? selector : false;
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

var allElementToSlide = [];

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

    var options = autocorrectOptions(binding.value);
    
    allElementToSlide.push({
      $el: $(el),
      slideType: options._slideType,
      options
    });

    var $root = vnode.context.$root;

    if ($root.timerInited) return;

    $root.timerInited = true;

    setTimeout(function() {
      slideElement(allElementToSlide);
      allElementToSlide = [];
      delete $root.timerInited;
    });
  }
});

export { defaultOptions };
