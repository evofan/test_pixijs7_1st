const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");

module.exports = {
  // When the mode is set to "production", the JS file is output in an optimized state
  // When the mode is set to "development", the source map is valid and the JS file is output
  // mode: "production",
  // or
  mode: "development",

  // Launch local development environment, browser automatically opens localhost at runtime
  devServer: {
    // contentBase: "dist",
    strict: "dist",
    open: true
  },

  entry: "./src/index.js",

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Pixi.js Demo", // If there is template.html, that title takes precedence
      template: "./src/html/index.html"
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    }),
  ],

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    sourceMapFilename: "[name].js.map"
  },
  
  // devtool: "source-map",
  devtool: "eval-cheap-source-map",

  devServer: {
    // public folder of webpack-dev-server
    // contentBase: path.join(__dirname, "dist")
  },

  // Set rules to be applied to the module (here we often set the loader)
  module: {
    rules: [
      {
        // Turn off SourceMap warnings.
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
};
