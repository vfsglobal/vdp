import { writeFileSync } from "fs";
import { remove } from "fs-extra";
import { Nuxt, Builder, Generator } from "nuxt";

var { root: rootDir, branch: gitBranch } = require("git-repo-info")();

var nuxtConfig;

var config = {
  routerBaseURLJSFile: "router-base-url.js",
  branchWiseRouterDemoURLs: {
    master: "/vfsdemowebsites/Marketing_and_Branding/VDP/",
    "phase-1": "/vfsdemowebsites/Marketing_and_Branding/VDP/Phase-1/"
  },
  liveZipFileName: "live-files",
  defaultProcessArgs: "--forlive",
  defaultGenerateDir: "dist"
};

function getMainProcessArgs() {
  var curArg = process.argv[2] || config.defaultProcessArgs;

  return curArg.indexOf("--") == 0 ? curArg.substring(2) : null;
}

function showErrorAndExit(msg) {
  console.error("\x1b[31m%s\x1b[0m", msg);
  process.exit(0);
}

function writeRouterBaseURL(val) {
  if (!val)
    showErrorAndExit(
      `router base url for branch "${gitBranch}" doesn't exists`
    );

  writeFileSync(
    rootDir + "/" + config.routerBaseURLJSFile,
    `export default '${val}';`,
    "utf-8"
  );
}

var processArgsDetails = {
  fordemo: {
    routerBaseURL() {
      return config.branchWiseRouterDemoURLs[gitBranch];
    }
  },
  forlive: (() => {
    var details = {
      routerBaseURL: "/",
      generateDir() {
        return nuxtConfig.generate.dir + "/" + config.liveZipFileName;
      },
      hooks: {
        "generate:done"() {
          var zipFolder = require("zip-folder"),
            curZipFolder = nuxtConfig.generate.dir;

          zipFolder(curZipFolder, curZipFolder + ".zip", err => {
            if (err) showErrorAndExit(err);

            remove(curZipFolder + '/');
          });
        }
      }
    };

    return details;
  })()
};

(function run() {
  var curProcessArgsDetails = processArgsDetails[getMainProcessArgs()],
    { routerBaseURL, generateDir, hooks } = curProcessArgsDetails;

  writeRouterBaseURL(
    typeof routerBaseURL == "string" ? routerBaseURL : routerBaseURL()
  );

  nuxtConfig = require("./nuxt.config.js");
  nuxtConfig.dev = false;

  if (generateDir) {
    nuxtConfig.generate = nuxtConfig.generate || {};
    nuxtConfig.generate.dir =
      nuxtConfig.generate.dir || config.defaultGenerateDir;
    nuxtConfig.generate.dir =
      typeof generateDir == "string" ? generateDir : generateDir();
  }

  const nuxt = new Nuxt(nuxtConfig);
  const builder = new Builder(nuxt);
  const generator = new Generator(nuxt, builder);

  if (hooks) nuxt.addHooks(hooks);

  generator.generate();
})();
