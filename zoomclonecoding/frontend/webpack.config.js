const path = require("path");
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "src/[name].js",
  },
  devServer: {
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(svg|gif)$/,
        loader: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    //new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  devtool: "inline-source-map",
  mode: "development",
};