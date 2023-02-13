const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production"; //para saber si prod o dev
module.exports = {
  entry: ["@babel/polyfill", "./src/app/index.js"],
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
  },

  mode: "development", //para desarrollo

  module: {
    rules: [
      {
        test: /\.js$/, //carga archivos js y lo carga a traves
        loader: "babel-loader", //atravez de un loader //permite usar los otros mofdulos de babel
      },
      {
        test: /\.css$/, // manera en cargar archicos css
        use: [
          //si quiero cargar archivos css los debo pasar por aui
          //si esta en desarrollo sino produccion
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 4001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
