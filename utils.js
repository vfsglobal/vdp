import routerBaseUrl from "./router-base-url";

/*defaults*/

export const defaultContentOptions = {
  items: 1,
  autoHeight: true,
  smartSpeed: 700,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false
};

/*string operations*/

export function checkAddSlashInPath(path) {
  if (!path) return path;

  path = path.trim().toLowerCase();
  return path + (path.lastIndexOf("/") == path.length - 1 ? "" : "/");
}

export function removeLastSlashFromPath(path) {
  if (!path) return path;

  path = path.trim().toLowerCase();
  return path.substring(
    0,
    path.lastIndexOf("/") == path.length - 1 ? path.length - 1 : path.length
  );
}

export function replaceTags(html, replaceFn) {
  return html.replace(/(<([^>]+)>)/g, replaceFn).trim();
}

export function htmlToText(html) {
  return replaceTags(html, "").replace(/\s+/g, " ");
}

export function upperFirst(str) {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

export function substringFromText(
  str,
  startStr,
  endStr,
  fromIndex,
  includeStrings
) {
  if (!startStr || !endStr) return null;

  if (typeof fromIndex == "boolean") {
    includeStrings = fromIndex;
    fromIndex = undefined;
  }

  var startIndex = str.indexOf(startStr, fromIndex),
    endIndex = str.indexOf(endStr, startIndex + 1);

  return startIndex == -1 || endIndex == -1
    ? null
    : str.substring(
        startIndex + (includeStrings ? 0 : startStr.length),
        endIndex + (includeStrings ? endStr.length : 0)
      );
}

export const replaceHyphenToCamelcase = (function() {
  var replaceHyphenCharToUppercase = function(str) {
    return str.charAt(1).toUpperCase();
  };

  return function(str) {
    return str.replace(/-./g, replaceHyphenCharToUppercase);
  };
})();

/*array sort functions*/

export function arrSortNum(a, b) {
  return a - b;
}

/*array operations*/

export function checkAndPush(mainArr, elementArr) {
  elementArr = elementArr instanceof Array ? elementArr : [elementArr];

  elementArr.forEach(element => {
    if (mainArr.indexOf(element) == -1) mainArr.push(element);
  });

  return mainArr;
}

export function checkAndRemove(mainArr, elementArr) {
  elementArr = elementArr instanceof Array ? elementArr : [elementArr];

  elementArr.forEach(element => {
    var foundIndex = mainArr.indexOf(element);

    if (foundIndex != -1) mainArr.splice(foundIndex, 1);
  });

  return mainArr;
}

export function removeIndexFromArr(mainArr, indexArr) {
  indexArr = indexArr instanceof Array ? indexArr : [indexArr];

  indexArr.sort(arrSortNum).reverse();

  indexArr.forEach(index => mainArr.splice(index, 1));

  return mainArr;
}

export function removeElementFromArr(mainArr, elementArr) {
  elementArr = elementArr instanceof Array ? elementArr : [elementArr];

  elementArr.forEach(element => {
    var elementIndex = mainArr.indexOf(element);

    if (elementIndex != -1) mainArr.splice(elementIndex, 1);
  });

  return mainArr;
}

export function indexOfElements(mainArr, elements) {
  return elements.map(element => mainArr.indexOf(element));
}

export function indexOfByFunction(mainArr, fn) {
  var foundIndex = -1;

  mainArr.every((element, index) => {
    if (fn(element, index)) {
      foundIndex = index;
      return false;
    }
    return true;
  });

  return foundIndex;
}

export function autocorrectIndexes(indexArr) {
  for (var i = 0; i < indexArr.length; i++) {
    if (indexArr[i] == -1) {
      indexArr.splice(i, 1);
      i--;
    }
  }

  return indexArr;
}

export function autocorrectedIndexOfElements(mainArr, elements) {
  var indexArr = [];

  elements.forEach(element => {
    var index = mainArr.indexOf(element);

    if (index != -1) indexArr.push(index);
  });

  return indexArr;
}

export const indexPathFromArr = (() => {
  function setPathIndexes(arr, fn, nestedKey, pathIndexes) {
    pathIndexes = pathIndexes || [];

    var curIndex = pathIndexes.push(null) - 1,
      isFound = false;

    arr.every((element, index) => {
      pathIndexes[curIndex] = index;

      if (element.hasOwnProperty(nestedKey)) {
        indexPathFromArr(element[nestedKey], fn, nestedKey, pathIndexes);

        if (pathIndexes.length - 1 != curIndex) return (isFound = true), false;
      }

      if (fn(element, index, arr, pathIndexes)) return (isFound = true), false;

      return true;
    });

    if (!isFound) pathIndexes.pop();

    return pathIndexes;
  }

  return function() {
    return setPathIndexes.apply(
      null,
      Array.prototype.slice.call(arguments, 0, 3)
    );
  };
})();

/*array nav operations*/

export function indexPathOfRoutePath(curPath, pathArr, pathKey, submenuKey) {
  curPath = checkAddSlashInPath(curPath);

  return indexPathFromArr(
    pathArr,
    path => checkAddSlashInPath(pathKey ? path[pathKey] : path) == curPath,
    submenuKey
  );
}

export function sortRoutePath(
  pathArrToSort,
  loopPathArr,
  pathKey,
  submenuKey,
  result
) {
  result = result || [];

  loopPathArr.forEach(path => {
    var submenu = submenuKey && path[submenuKey],
      path = checkAddSlashInPath(pathKey ? path[pathKey] : path),
      foundIndex = pathArrToSort.indexOf(path);

    if (foundIndex != -1 && result.indexOf(path) == -1) result.push(path);

    if (submenu)
      sortRoutePath(pathArrToSort, submenu, pathKey, submenuKey, result);
  });

  return result;
}

/*object operations*/

export function createImageStyle(image, path) {
  return (
    (image &&
      path && {
        backgroundImage: `url(${routerBaseUrl}images/${checkAddSlashInPath(
          path
        ) + (image.name || image)})`,
        backgroundPosition: image.position || "center"
      }) ||
    {}
  );
}

export function isNumericKeysObject(obj) {
  if (!obj || Object.keys(obj).length == 0) return false;

  var hasNumericKey = true;

  for (var key in obj) {
    if (isNaN(key)) {
      hasNumericKey = false;
      break;
    }
  }

  return hasNumericKey;
}

export function getKeyOfValue(obj, value) {
  for (var key in obj) {
    if (obj[key] == value) return key;
  }

  return null;
}

export function getSwapValue(swapObj, value) {
  var strValue = String(value);

  if (swapObj.hasOwnProperty(strValue)) return swapObj[strValue];
  else return getKeyOfValue(swapObj, value);
}

export const objUpdateEachValue = (function() {
  function defaultSetFn(obj, key, value) {
    obj[key] = value;
  }

  return function(obj, value, setFn) {
    setFn = setFn || defaultSetFn;

    for (var key in obj) setFn(obj, key, value);

    return obj;
  };
})();

export function createAdvancedAutocorrectOptions(
  defaultOptions,
  nonObjKey,
  additionalAutocorrectKeyFn
) {
  var nonObjType = typeof defaultOptions[nonObjKey];

  return options => {
    if (typeof options == nonObjType) {
      options = {
        [nonObjKey]: options
      };
    }

    options = {
      ...defaultOptions,
      ...options
    };

    for (var key in additionalAutocorrectKeyFn)
      options[key] = additionalAutocorrectKeyFn[key](options[key], options);

    return options;
  };
}

/*function operations*/

export function createMergedFunction(functionsArr) {
  functionsArr =
    typeof functionsArr == "function" ? [functionsArr] : functionsArr;
  functionsArr = functionsArr || [];

  function mainFn() {
    var returnVal = [];

    functionsArr.forEach(fn => {
      returnVal.push(fn.apply(this, arguments));
    });

    return returnVal;
  }

  mainFn._fnArr = functionsArr;

  return mainFn;
}

export function mergeObjectContainingFunction(
  objArr,
  newObj,
  nonObjectCallback
) {
  if (typeof newObj == "function") {
    nonObjectCallback = newObj;
    newObj = undefined;
  }

  newObj = newObj || {};

  objArr.forEach(obj => {
    if (typeof obj != "object") {
      nonObjectCallback(obj, newObj);
    } else {
      var val;

      for (var key in obj) {
        val = obj[key];

        if (typeof val != "function") {
          newObj[key] = val;
        } else {
          if (!newObj.hasOwnProperty(key)) newObj[key] = createMergedFunction();

          newObj[key]._fnArr.push(val);
        }
      }
    }
  });

  return newObj;
}

/*vue operations*/

export function mergeTransition(transitionsArr) {
  transitionsArr =
    transitionsArr instanceof Array ? transitionsArr : [transitionsArr];

  var newTransitionMergedFn = createMergedFunction(),
    newTransitionFn = function() {
      return mergeObjectContainingFunction(
        newTransitionMergedFn.apply(this, arguments),
        (obj, newObj) => {
          if (typeof obj == "string") newObj.name = obj;
        }
      );
    };

  transitionsArr.forEach(transitionFn => {
    newTransitionMergedFn._fnArr.push(
      typeof transitionFn == "function" ? transitionFn : () => transitionFn
    );
  });

  return newTransitionFn;
}

/*vuex operations*/

export function getStateFromStoreModuleName(state, moduleName) {
  var moules = moduleName.split("/");

  moules.every(name => {
    state = state[name.trim()];

    return state ? true : false;
  });

  return state;
}

export function getLinkFromState({ pageLink, linkType }, { key }) {
  return pageLink + linkType + key;
}

export const createLinkListFn = (() => {
  var defaultOptions = {
      linkType: "/",
      textKey: "title"
    },
    getLinkObj = (() => {
      var allKeyFn = {
        link: (element, options, state) => getLinkFromState(state, element),
        text: (element, { textKey }) => element[textKey]
      };

      return function() {
        var linkObj = {};

        for (var key in allKeyFn)
          linkObj[key] = allKeyFn[key].apply(this, arguments);

        return linkObj;
      };
    })();

  return function(options) {
    options = {
      ...defaultOptions,
      ...options
    };

    return state => {
      return state.list.map(element => getLinkObj(element, options, state));
    };
  };
})();

/*array content operations*/

/* generate new modified data according to ordered key; also it will contain other data */

export var generateNewArrData = (function() {
  var generateOtherData = (function() {
    var ignoreDataDetailsKeyInLoop = ["keyOrder", "dataDetails"];

    return function(dataDetails, dataKey) {
      var otherData = {};

      for (var dataDetailsKey in dataDetails) {
        if (ignoreDataDetailsKeyInLoop.indexOf(dataDetailsKey) != -1) continue;

        otherData[dataDetailsKey] = dataDetails[dataDetailsKey][dataKey];
      }

      return otherData;
    };
  })();

  return function(data, dataDetails) {
    var innerDataDetails = dataDetails.dataDetails;

    return dataDetails.keyOrder.map(dataKey => {
      var curInnerDataDetails = innerDataDetails && innerDataDetails[dataKey],
        dataValue = data[dataKey];

      return {
        key: dataKey,
        ...generateOtherData(dataDetails, dataKey),
        value: curInnerDataDetails
          ? generateNewArrData(dataValue, curInnerDataDetails)
          : dataValue
      };
    });
  };
})();

/*animation operations*/

export const animateHeight = (() => {
  var defaultOptions = {
      toHeight: "auto",
      duration: 700,
      delay: 0,
      hideOverflow: true,
      removeHeightAfterAnimate: true,
      removeOverflowAfterAnimate: true,
      callbacks: {}
    },
    autocorrectOptions = createAdvancedAutocorrectOptions(
      defaultOptions,
      "toHeight"
    ),
    animatedElements = [],
    mainFn = function($el, options) {
      options = autocorrectOptions(options);

      var {
        toHeight,
        duration,
        delay,
        hideOverflow,
        removeHeightAfterAnimate,
        removeOverflowAfterAnimate,
        callbacks
      } = options;

      $el.data("animate-to-height", toHeight);
      checkAndPush(animatedElements, $el);

      callbacks.beforeAnimate && callbacks.beforeAnimate($el);

      setTimeout(() => {
        var $htmlBody = $("html, body"),
          curScrollTop = $htmlBody.scrollTop(),
          curHeight = $el.stop().height();

        $el.css("height", toHeight);

        var newHeight = $el.height();
        
        $el.css("height", curHeight + "px");
        $htmlBody.scrollTop(curScrollTop);

        if (hideOverflow) $el.css("overflow", "hidden");

        $el.animate({ height: newHeight + "px" }, duration, function() {
          var $this = $(this);

          $this.css("height", removeHeightAfterAnimate ? "" : toHeight);

          if (removeOverflowAfterAnimate) $el.css("overflow", "");

          $el.removeData("animate-to-height");
          checkAndRemove(animatedElements, $el);

          callbacks.animateComplete && callbacks.animateComplete($this);
        });
      }, delay);
    };

  mainFn.temporaryJumpToEnd = (function() {
    function jumpToEnd($el) {
      $el.data("animate-temp-height", $el.css("height"));
      $el.css("height", $el.data("animate-to-height"));
    }

    function rollbackHeight($el) {
      $el.css("height", $el.data("animate-temp-height"));
      $el.removeData("animate-temp-height");
    }

    return function(callback) {
      var prevScrollTop = $(window).scrollTop();

      animatedElements.forEach(jumpToEnd);
      callback();
      animatedElements.forEach(rollbackHeight);
      
      $("html, body").scrollTop(prevScrollTop);
    };
  })();

  return mainFn;
})();

/*require operations*/

export const getAllModules = (function() {
  function generateModuleName(fileName) {
    var fileNames = fileName.split("/");

    fileName = fileNames[fileNames.length - 1];

    return fileName.substring(0, fileName.lastIndexOf("."));
  }

  return function(requireContext) {
    var modules = {};

    requireContext.keys().forEach(fileName => {
      var curModule = requireContext(fileName);
      curModule = curModule.default || curModule;

      modules[curModule.name || generateModuleName(fileName)] =
        curModule.default || curModule;
    });

    return modules;
  };
})();

/*css operations*/

export const getInlineCss = (function() {
  var prefixes = ["", "Webkit", "ms", "Moz", "O"];

  return function(el, cssName) {
    var cssFirstCapitalName, cssStyleName, elCssValue;

    cssName = replaceHyphenToCamelcase(cssName);

    cssFirstCapitalName = upperFirst(cssName);

    prefixes.every(prefix => {
      if (prefix == "") cssStyleName = cssName;
      else cssStyleName = prefix + cssFirstCapitalName;

      elCssValue = el.style[cssStyleName];

      if (elCssValue != "" && elCssValue != undefined) return false;

      return true;
    });

    return elCssValue == undefined ? "" : elCssValue;
  };
})();

/*other operations*/

export const verticalScroll = (function() {
  var getScrollTop = function(el) {
      if (el.is("body")) return $(window).scrollTop();

      return el.scrollTop();
    },
    getScrollableEl = (function() {
      var getOverflow = function(el) {
        if (el.is("body")) return "auto";

        var overflow = el.css("overflow").toLowerCase();

        if (overflow == "") return el.css("overflow-y").toLowerCase();

        return overflow;
      };

      return function(el) {
        var parentEl = el,
          parentOverflow;

        while (parentOverflow != "auto" && parentOverflow != "scroll") {
          parentEl = parentEl.parent();
          parentOverflow = getOverflow(parentEl);
        }

        return parentEl;
      };
    })(),
    getAnimateTopOfEl = (function() {
      var getData = (function() {
          var dataPropsFn = [
            {
              prop: "elOffsetTop",
              fn: function(elements) {
                return elements.mainEl.offset().top;
              }
            },
            {
              prop: "scrollableElOffsetTop",
              fn: function(elements) {
                return elements.scrollableEl.offset().top;
              }
            },
            {
              prop: "elHeight",
              fn: function(elements) {
                return elements.mainEl.outerHeight();
              }
            },
            {
              prop: "scrollableElHeight",
              fn: function(elements) {
                return elements.scrollableEl.outerHeight();
              }
            },
            {
              prop: "scrollTop",
              fn: function(elements) {
                return getScrollTop(elements.scrollableEl);
              }
            },
            {
              prop: "elRelatedTop",
              fn: function(elements, data) {
                if (elements.scrollableEl.is("body")) return data.elOffsetTop;

                return (
                  data.elOffsetTop - data.scrollableElOffsetTop + data.scrollTop
                );
              }
            },
            {
              prop: "maxScrollTop",
              fn: (function() {
                var setAutoHeightTemporary = function(
                    scrollableEl,
                    data,
                    fn,
                    fnParam
                  ) {
                    var height = getInlineCss(scrollableEl[0], "height") || "",
                      maxHeight =
                        getInlineCss(scrollableEl[0], "max-height") || "";

                    scrollableEl.css({
                      height: "auto",
                      maxHeight: "none",
                      overflowY: "scroll"
                    });

                    fn(fnParam);

                    scrollableEl.css({
                      height: height,
                      maxHeight: maxHeight,
                      overflowY: ""
                    });

                    scrollableEl.scrollTop(data.scrollTop);
                  },
                  setMaxScrollTop = function(param) {
                    param.maxScrollTop =
                      param.scrollableEl.outerHeight() - param.initialHeight;
                  };

                return function(elements, data) {
                  if (elements.scrollableEl.is("body"))
                    return data.scrollableElHeight - window.innerHeight;

                  var param = {
                    scrollableEl: elements.scrollableEl,
                    initialHeight: data.scrollableElHeight
                  };

                  setAutoHeightTemporary(
                    elements.scrollableEl,
                    data,
                    setMaxScrollTop,
                    param
                  );

                  return param.maxScrollTop;
                };
              })()
            }
          ];

          return function(elements) {
            var data = {};

            dataPropsFn.forEach(
              ({ prop, fn }) => (data[prop] = fn(elements, data))
            );

            return data;
          };
        })(),
        getAnimateTopFn = {
          scrollToTop: function(elements, data) {
            return data.elRelatedTop;
          },
          scrollToShow: function(elements, data) {
            var scrollToTop = getAnimateTopFn.scrollToTop(elements, data),
              matchOffsetTop = elements.scrollableEl.is("body")
                ? data.scrollTop
                : data.scrollableElOffsetTop,
              matchHeight = elements.scrollableEl.is("body")
                ? window.innerHeight
                : data.scrollableElHeight;

            if (data.elOffsetTop < matchOffsetTop) return scrollToTop;
            else if (
              data.elOffsetTop + data.elHeight >
              matchOffsetTop + matchHeight
            )
              return scrollToTop - matchHeight + data.elHeight;
            else return data.scrollTop;
          }
        },
        mainFn = function(el, animateTopType) {
          var elements = {
              mainEl: el,
              scrollableEl: getScrollableEl(el)
            },
            data = getData(elements),
            animateTop;

          animateTopType = animateTopType || "scrollToTop";

          animateTop = getAnimateTopFn[animateTopType](elements, data);

          animateTop = animateTop < 0 ? 0 : animateTop;
          animateTop =
            animateTop > data.maxScrollTop ? data.maxScrollTop : animateTop;

          return animateTop;
        };

      return function() {
        var _this = this,
          _arguments = arguments,
          animateTop;

        animateHeight.temporaryJumpToEnd(function() {
          animateTop = mainFn.apply(_this, _arguments);
        });

        return animateTop;
      };
    })(),
    animate = function(el, animateTop, duration, callback, behaviour) {
      if (typeof el == "number") {
        behaviour = callback;
        callback = duration;
        duration = animateTop;
        animateTop = el;
        el = undefined;
      }

      if (typeof callback == "string") {
        behaviour = callback;
        callback = undefined;
      }

      behaviour = behaviour || "normal";

      var $htmlBody = $("html, body");

      el = el || $htmlBody;

      if (el.is($htmlBody)) el = $htmlBody;

      if (behaviour == "preventIfAnimating" && el.is(":animated")) return false;

      if (getScrollTop(el) != animateTop) {
        if (behaviour == "jumpToEnd") el.stop(true, true);
        else el.stop();

        el.animate(
          {
            scrollTop: animateTop
          },
          duration,
          callback
        );
      } else if (callback != undefined) {
        callback();
      }

      return true;
    },
    animateToEl = function(el, duration, callback, options) {
      if (typeof callback == "object") {
        options = callback;
        callback = undefined;
      }

      options = options || {};

      return animate(
        getScrollableEl(el),
        getAnimateTopOfEl(el, options.animateTopType),
        duration,
        callback,
        options.behaviour
      );
    };

  return {
    getAnimateTopOfEl: getAnimateTopOfEl,
    animate: animate,
    animateToEl: animateToEl
  };
})();
