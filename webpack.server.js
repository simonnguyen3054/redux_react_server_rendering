const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  //inform webpack we're building a bundle for node js, not for browser
  target: "node",

  //Tell webpack the root file of our server application
  entry: "./src/index.js",

  //Tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  //tell webpack to not bundle any modules that are inside node_modules
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);