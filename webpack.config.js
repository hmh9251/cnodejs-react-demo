const webpack = require('webpack');
const path = require('path');
const postcss = require('postcss-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: "./src/main"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: [/node_modules/],
                use: [
                    'react-hot-loader',
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test: /\.styl$/,
                exclude: [/node_modules/],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader?modules&localIdentName=[path]-[local]-[hash:base64:5]",
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: _ => [
                                    require('autoprefixer')({
                                        browsers: ["last 20 version", "Firefox > 20", "not ie <= 8"]
                                    })
                                ]
                            }
                        },
                        "stylus-loader"],
                    publicPath: "/dist"
                })
            },
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    'css-loader',
                    'autoprefixer-loader'
                ]
            },
            {
                test: /\.(gif|jpg|png)\??.*$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.styl']
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                {
                    from: /.*\/assets\/.*/,
                    to: function (context) {
                        return context.parsedUrl.pathname.match(/\/assets\/.*/)[0];
                    }
                },
                {
                    from: /\/main\.js.*/,
                    to: function (context) {
                        return context.parsedUrl.pathname.match(/\/main\.js.*/)[0];
                    }
                },
                {
                    from: /\/style\.css.*/,
                    to: function (context) {
                        return context.parsedUrl.pathname.match(/\/style\.css.*/)[0];
                    }
                }
            ]
        },
        inline: true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "This is index",
            filename: __dirname + "/dist/index.html",
            template: __dirname + "/index.html",
            hash: true,
            chunks: ['main']
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/assets/',
            to: __dirname + '/dist/assets/'
        }]),
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin()
    ]
};