const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const autoprefixer = require("autoprefixer")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const pxtorem = require("postcss-pxtorem")
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
    // 开发环境
    mode: 'development',
    entry: path.join(__dirname, './main.js'),
    //打包的输入文件及地址
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "static/js/bundle.js",
    },

    //loader配置相关
    module: {
        rules: [{
            // js文件、babel配置
            test: /\.js|jsx$/,
            exclude: [
                path.resolve(__dirname, 'node_modules')
            ],

            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        require.resolve('@babel/preset-react'),
                        [require.resolve('@babel/preset-env'), {
                            "useBuiltIns": "usage",
                            "corejs": 3,
                            modules: false
                        },
                        ],
                    ],
                    plugins: ["@babel/plugin-proposal-class-properties"],
                    cacheDirectory: true
                }
            }]
        },
        //css、scss和模块化相关配置
        {
            test: /\.scss$/,
            use: ['style-loader', {
                loader: 'css-loader',
                options: {
                    modules: true,
                    importLoaders: 1,
                }
            }, 'sass-loader']
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                autoprefixer(["last 2 version", "> 1%", "not ie < 11"]),
                                pxtorem({
                                    rootValue: 16,
                                    unitPrecision: 5,
                                    propList: ["font", "font-size", "line-height", "letter-spacing", "width", "height", "margin", "padding"],
                                    selectorBlackList: [],
                                    replace: true,
                                    mediaQuery: false,
                                    minPixelValue: 0,
                                    exclude: /node_modules/i
                                })
                            ]
                        }
                    }
                }
            ]
        },
        // 文件配置
        {
            test: /\.(png|svg|jpg|gif|ttf|woff|woff2|eot)$/,
            use: {
                loader: "url-loader",
                options: {
                    esModule: false,
                    name: "static/images/[hash:8].[name].[ext]",
                    limit: 3 * 1024
                }
            }
        }
        ]
    },
    // 路径别名配置
    resolve: {
        extensions: ['.json', '.ts', '.tsx', '.js', '.jsx'],
        alias: {
            "@images": path.resolve("./src/assets"),
            "@css": path.resolve("./src/css"),
            "@views": path.resolve("./src/views"),
            "@components": path.resolve("./src/components"),
            "@utils": path.resolve("./src/utils")
        }
    },
    //插件配置
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].css",
            chunkFilename: "static/css/[id].css"
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html"
        })
    ],
    //服务器代理配置
    devServer: {
        port: "8082",
        historyApiFallback: true,
        inline: true,

    }
}
