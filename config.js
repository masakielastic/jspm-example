System.config({
  baseURL: "/jspm-example",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build.js": [
      "lib/main.js",
      "lib/foo.js",
      "npm:babel-runtime@5.8.24/helpers/class-call-check",
      "npm:babel-runtime@5.8.24/helpers/create-class",
      "npm:babel-runtime@5.8.24/core-js/object/define-property",
      "npm:core-js@1.1.4/library/fn/object/define-property",
      "npm:core-js@1.1.4/library/modules/$"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.24",
    "babel-runtime": "npm:babel-runtime@5.8.24",
    "core-js": "npm:core-js@1.1.4",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.24": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@1.1.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    }
  }
});
