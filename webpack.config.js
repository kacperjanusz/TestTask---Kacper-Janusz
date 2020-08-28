const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"],
  },

  devServer: {
    port: 8080,
    disableHostCheck: true,
    contentBase: path.join(__dirname, "public"),
  },
  output: {
    filename: "bundle.min.js",
    publicPath: "dist/",
    path: path.resolve(__dirname, "public/dist"),
  },
  watch: false,
  mode: "development",
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: [/\.scss$/, /\.css$/],
        use: [
          "style-loader", //3. Inject styles into DOM
          MiniCssExtractPlugin.loader,
          "css-loader", //2. Turns css into commonjs
          //          'postcss-loader',
          "sass-loader", //1. Turns sass into css
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "imgs/",
          },
        },
      },
      {
        test: /\.(woff(2)?|otf|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
};
