import {
  upperFirst,
  isNumericKeysObject,
  checkAddSlashInPath,
  removeLastSlashFromPath,
  indexOfByFunction
} from "~/utils";

export const contentProp = {
  props: {
    content: {
      default: null
    }
  },
  computed: {
    forLoopContent() {
      return this.content || [];
    }
  }
};

var typePropConfig = {
  type: String,
  default: "default"
};

export const typeProp = {
  props: {
    type: typePropConfig
  }
};

export const generateTypeDetailsMixin = (function() {
  var defaultOptions = {
    includeProp: false,
    includeBlankForNotFound: true
  };

  return function(options) {
    options = {
      ...defaultOptions,
      ...options
    };

    var { namePrefix, data, includeProp, includeBlankForNotFound } = options,
      typeName = namePrefix ? namePrefix + "Type" : "type",
      mainTypePropName = includeProp ? typeName : "type",
      allTypeDetailsName = `all${upperFirst(typeName)}Details`,
      mixin = {
        data() {
          return {
            [allTypeDetailsName]: data
          };
        },

        computed: {
          [typeName + "Details"]() {
            return (
              this[allTypeDetailsName][this[mainTypePropName]] ||
              (includeBlankForNotFound ? {} : null)
            );
          }
        }
      };

    if (includeProp) {
      mixin.props = {
        [typeName]: typePropConfig
      };
    }

    return mixin;
  };
})();

export const optionsProp = {
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  computed: {
    hasOptions() {
      return Object.keys(this.options).length > 0;
    }
  }
};

export const contentCarouselOptions = {
  data() {
    return {
      contentCarouselOptions: {
        items: 1,
        margin: 20,
        autoHeight: true,
        smartSpeed: 700,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false
      }
    };
  }
};

export const jQueryEl = {
  mounted() {
    this.$jQueryEl = $(this.$el);
  }
};

export const jQueryRefs = {
  mounted() {
    for (var key in this.$refs) this["$" + key] = $(this.$refs[key]);
  }
};

export const generateVModelMixin = (function() {
  var defaultOptions = {
    event: "input",
    addToData: true
  };

  return function(options) {
    options = {
      ...defaultOptions,
      ...options
    };

    var { propName, event, type, _default, addToData } = options;

    return {
      model: {
        prop: "value",
        event
      },

      props: {
        value: {
          type,
          default: _default
        }
      },

      data() {
        return addToData
          ? {
              [propName]: this.value
            }
          : null;
      },

      watch: {
        value(val) {
          this[propName] = val;
        },
        [propName](val) {
          this.$emit(event, val);
        }
      }
    };
  };
})();

export const countrySelectionProps = {
  mixins: [
    generateVModelMixin({
      propName: "activeIndex",
      event: "change",
      type: Number,
      _default: -1
    })
  ],
  props: {
    countries: {
      type: Array,
      required: true
    }
  }
};

function generateMultiDataMixin(config) {
  var { dataName, _default, isCommon, isEach, getValueAtIndex } = config,
    defaultOptions = {
      mainDataName: "main" + upperFirst(dataName),
      contentPropName: "content"
    };

  return function(options) {
    options = {
      ...defaultOptions,
      ...options
    };

    var { propName, mainDataName, contentPropName } = options;

    return {
      props: {
        [propName]: {
          default: _default
        }
      },
      computed: {
        [mainDataName]() {
          var propValue = this[propName];

          if (!propValue) return [];

          if (isCommon(propValue)) {
            propValue = {
              common: propValue
            };
          } else if (isEach(propValue)) {
            propValue = {
              each: propValue
            };
          }

          var common = propValue.common || "",
            each = propValue.each || {};

          return this[contentPropName].map((el, index) =>
            getValueAtIndex({ el, index, common, each })
          );
        }
      }
    };
  };
}

export const generateMultiClassMixin = generateMultiDataMixin({
  dataName: "class",
  _default: "",
  isCommon: propValue => typeof propValue == "string",
  isEach: propValue => !propValue.common && !propValue.each,
  getValueAtIndex: ({ common, each, index }) =>
    `${common} ${each[index] || ""}`.trim()
});

export const generateMultiStyleMixin = generateMultiDataMixin({
  dataName: "style",
  _default: null,
  isCommon: propValue =>
    !(propValue.common || propValue.each) && !isNumericKeysObject(propValue),
  isEach: propValue => isNumericKeysObject(propValue),
  getValueAtIndex: ({ common, each, index }) => ({
    ...common,
    ...(each[index] || {})
  })
});

export function generateIsLandingPageMixin(landingPagePath) {
  landingPagePath = checkAddSlashInPath(landingPagePath);

  return {
    computed: {
      isLandingPage() {
        return checkAddSlashInPath(this.$route.path) == landingPagePath;
      }
    }
  };
}

export const generateURLAndListIndexSyncMixin = (function() {
  var defaultOptions = {
      listName: "list",
      activeIndexName: "activeIndex",
      linkType: "#",
      routeChageType: "replace",
      landingPagePath: null,
      addIsLandingPageMixin: true
    },
    linkTypeDetails = {
      "#": {
        getURLKey() {
          return this.$route.hash.substring(1).toLowerCase();
        },
        routeChangeKey: "hash",
        defaultRouteChangeVal: () => ""
      },
      "/": {
        getURLKey() {
          var path = removeLastSlashFromPath(this.$route.path);
          return path.substring(path.lastIndexOf("/") + 1).toLowerCase();
        },
        getActiveIndex() {
          return this.isLandingPage ? -1 : null;
        },
        routeChangeKey: "path",
        defaultRouteChangeVal(options) {
          return options.landingPagePath;
        },
        routeChangeValModifier(options, routeVal) {
          return options.landingPagePath + routeVal;
        },
        addAdditionalMixin(options) {
          if (!options.addIsLandingPageMixin) return;

          return generateIsLandingPageMixin(options.landingPagePath);
        }
      }
    };

  function autocorrectOptions(options) {
    options.landingPagePath = checkAddSlashInPath(options.landingPagePath);
    return options;
  }

  return function(options) {
    options = autocorrectOptions({
      ...defaultOptions,
      ...options
    });

    var { listName, activeIndexName, linkType, routeChageType } = options,
      curLinkTypeDetails = linkTypeDetails[linkType],
      {
        getURLKey,
        getActiveIndex,
        routeChangeKey,
        defaultRouteChangeVal,
        routeChangeValModifier,
        addAdditionalMixin
      } = curLinkTypeDetails,
      mainMixin = {
        computed: {
          [activeIndexName]: {
            get() {
              var urlKey = getURLKey.call(this),
                activeIndex = getActiveIndex && getActiveIndex.call(this);

              return activeIndex == null
                ? indexOfByFunction(
                    this[listName],
                    obj => obj.key.toLowerCase() == urlKey
                  )
                : activeIndex;
            },
            set(val) {
              var routeChangeVal =
                val == -1
                  ? defaultRouteChangeVal(options)
                  : this[listName][val].key.toLowerCase();

              this.$router[routeChageType]({
                [routeChangeKey]:
                  val != -1 && routeChangeValModifier
                    ? routeChangeValModifier(options, routeChangeVal)
                    : routeChangeVal
              });
            }
          }
        }
      },
      additionalMixin = addAdditionalMixin && addAdditionalMixin(options);

    if (additionalMixin) mainMixin.mixins = [additionalMixin];

    return mainMixin;
  };
})();

export const submenuKeyProp = {
  props: {
    submenuKey: {
      type: String,
      default: "submenu"
    }
  }
};

//this function will remove current path form current link list
export const generateMainLinkListMixin = (function() {
  var defaultOptions = {
    curListName: "linkList",
    computedListName: "mainLinkList",
    submenuKeyName: "submenuKey"
  };

  function createMainList(linkList, curPath, submenuKey) {
    var mainList = [];

    linkList.forEach(obj => {
      if (checkAddSlashInPath(obj.link) != curPath) mainList.push(obj);

      if (obj.hasOwnProperty(submenuKey))
        obj[submenuKey] = createMainList(obj[submenuKey], curPath, submenuKey);
    });

    return mainList;
  }

  return function(options) {
    var options = {
      ...defaultOptions,
      ...options
    };

    var { curListName, computedListName, submenuKeyName } = options;

    return {
      computed: {
        [computedListName]() {
          return createMainList(
            JSON.parse(JSON.stringify(this[curListName])),
            checkAddSlashInPath(this.$route.path),
            this[submenuKeyName]
          );
        }
      }
    };
  };
})();
