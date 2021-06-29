const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            /*{
                test: /\.js$/,
                exclude: "/(node_modules)/",
                use: {
                  loader: 'babel-loader'
                }
            },*/
            {
                test: /\.scss$/, 
                use: ["style-loader",'css-loader',"sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ], 
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "app/index.html"
        })
    ]

};