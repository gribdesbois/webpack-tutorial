const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const mesfess = require('monzboub');
module.exports = {

    mode: 'development',

    entry: {    
        index: './src/index.js',
      },
    
    devtool: 'inline-source-map',

    devServer: {

        contentBase: './dist',
        hot: true,
    
      },

    plugins: [
    new HtmlWebpackPlugin({
        title: 'Hot Module Replacement',
    }),
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};

