const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
// const isProd = env === 'production';

const extractScss = new ExtractTextPlugin({
  filename: 'index.css',
  disable: isDev
});

module.exports = {
  entry: {
    bundle: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    }),
    extractScss
  ],
  module: {
    rules: [
      {
      test: require.resolve('snapsvg/dist/snap.svg.js'),
      use: 'imports-loader?this=>window,fix=>module.exports=0'
    },
    {
      enforce: 'pre',
      test: /\.js$/,
      exclude: /(node_modules|.svg.js)/,
      use: 'eslint-loader'
    }, 
    {
      test: /\.(png|jp(e*)g|svg|PNG)$/,  
      use: [{
          loader: 'url-loader',
          options: { 
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]'
          } 
      }]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /(\.css|\.scss)$/,
      exclude: /node_modules/,
      use: extractScss.extract({
        use:[
          {loader: 'css-loader'},
          {loader: 'sass-loader'}
        ],
        fallback: 'style-loader'
      })
    }]
  },
  resolve: {
    alias: {
      snapsvg: 'snapsvg/dist/snap.svg.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    open: isDev ? true : false
  }
};