const path = require("path");
const webpack = require('webpack');

module.exports = {

    devServer: {
        overlay: true,
        open: true
      },

      module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "static_src"),
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                  presets: ['@babel/env', '@babel/react'],
                },
                
            },
        ],
    },
 
 
   entry: {
       app: './index.jsx',
   },
   context: path.resolve(__dirname, "static_src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'app.js',
   },
};