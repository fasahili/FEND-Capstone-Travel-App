const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devServer: {
    port: 9000,
    allowedHosts: "all",
  },
  plugins: [
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});
