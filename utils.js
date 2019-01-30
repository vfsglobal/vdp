import routerBaseUrl from "~/router-base-url";

/*test*/

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

export function capitalFirst(str) {
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

/*directive operations*/

export function createAdvancedAutocorrectOptions(defaultOptions, nonObjKey) {
  var nonObjType = typeof defaultOptions[nonObjKey];

  return binding => {
    var { value: options } = binding;

    if (typeof options == nonObjType) {
      options = {
        [nonObjKey]: options
      };
    }

    options = {
      ...defaultOptions,
      ...options
    };

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
    callback() {}
  };

  return function($el, options) {
    options = {
      ...defaultOptions,
      ...options
    };

    var {
      toHeight,
      duration,
      delay,
      hideOverflow,
      removeHeightAfterAnimate,
      removeOverflowAfterAnimate,
      callback
    } = options;

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

        callback.apply(this, arguments);
      });
    }, delay);
  };
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
