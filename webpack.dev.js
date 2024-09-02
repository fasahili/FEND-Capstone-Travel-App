const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  devServer: {
    port: 3000,
    allowedHosts: "all",
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:9000",
        changeOrigin: true,
        secure: false,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      cleanStaleWebpackAssets: true,
      protectWebpackAssets: false,
    }),
  ],
});
