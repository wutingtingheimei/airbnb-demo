const cracoLessPlugin = require("craco-less");
const path = require("path");
const resolve = (pathName) => path.resolve(__dirname, pathName);

module.exports = {
  // less
  plugins: [
    {
      plugin: cracoLessPlugin,
      // options: {
      //   lessLoadOptions: {
      //     lessOptions: {
      //       modifyVars: { "@primary-color": "#00b96b" },
      //       javascriptEnabled: true,
      //     },
      //   },
      // },
    },
  ],
  // webpack
  webpack: {
    // 配置别名
    alias: {
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils"),
    },

    // resolve: {
    //   alias:
    // }
  },
};
