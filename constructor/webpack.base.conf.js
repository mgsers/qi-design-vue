import path from "path";

import packagejson from "../package.json";
import webpack from "webpack";
import VueLoaderPlugin from "vue-loader/lib/plugin";
import PostcssPresetEnv from "postcss-preset-env";
import postcssPxToViewport from "postcss-px-to-viewport";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import env from "./env.js";

var CssRules = (function () {
    let base = [{
        loader: "css-loader",
    },
    {
        loader: "postcss-loader",
        options: {
            ident: "postcss",
            plugins: () => [
                PostcssPresetEnv({
                    autoprefixer: true
                }),
                // postcssPxToViewport({
                //     viewportWidth: 375,
                //     unitPrecision: 2,
                //     viewportUnit: "vw",
                //     selectorBlackList: [".ignore"],
                //     minPixelValue: 1,
                //     mediaQuery: false
                // })
            ]
        }
    },
    {
        loader: "less-loader",
    }]

    if (process.env.NODE_ENV === "development") {
        base.unshift({
            loader: "style-loader",
        });
    } else {
        base.unshift({
            loader: MiniCssExtractPlugin.loader,
        });
    }

    return base;
})();

export default {
    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
    },
    resolve: {
        alias: {
            "@qiqi1996/qi-design-vue": env.PATH_LIBRARY,
            "document": env.PATH_DOCUMENT,
            "vue": "vue/dist/vue"
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    transformAssetUrls: {
                        video: ["src", "poster"],
                        source: "src",
                        img: "src",
                        "q-image": ["src", "src-dark"],
                        "q-avatar": ["src", "src-dark"],
                    }
                }
            },
            {
                resourceQuery: /blockType=i18n/,
                type: 'javascript/auto',
                loader: '@kazupon/vue-i18n-loader'
            },
            {
                test: /\.(css|less)$/,
                use: CssRules,
            },
            {
                test: /\.(png|jpe?g|gif|ttf|eot|woff2?|svg)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets',
                    esModule: false
                }
            }, {
                test: /\.(md)$/,
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "__VERSION__": `"${packagejson.version}"`
        }),
        new VueLoaderPlugin(),
        new FriendlyErrorsWebpackPlugin()
    ]
}