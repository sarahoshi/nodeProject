const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') // including is need when you want to call func in webpack
// used webpack 3 because has plugin no support webpack 4
// mode dev, production not consist in wp4 :( 

// vender caching technique to cache all dependencies to browser at first time for enhancing load speed for system 
// note:  not load css|style-loader to client to avoid error
const VENDOR_LIBS =[
    "axios",
    "bootstrap",
    //"font-awesome", // error when load...
    "jquery",
    "react",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "redux",
    "redux-thunk"
]

module.exports = {
    entry: {
        bundle: "./src/index.js", // string | object | array
        vendor: VENDOR_LIBS
    },
    output: {
      path: path.resolve(__dirname, "dist"), // string
      filename: "[name][chunkhash].js", // encrypt file name for cache with manifest
    },
    module: {
        rules:[
            {
                use: 'babel-loader',
                test: /\.js$/, // find by pattern
                exclude: '/node_modules'// except find in node module,
                
            },
            {
                use:[
                    "style-loader",
                    "css-loader"
                ],
                test: /\.css$/
            },
            {
                loader: 'file-loader',
                test: /\jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.icon$/
            }
        ]
    },
    plugins:[
        // register js to project
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        // create file to save common lib
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] // add manyfest to cache and build only changed file when build
        }),
        // build html file in dist and auto load bunder and vendor
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open:true,
    }
}