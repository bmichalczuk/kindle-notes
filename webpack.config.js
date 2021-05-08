const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/(node_modules)/",
                use: {
                  loader: 'babel-loader'
                }
            },
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
    plugins: [
        new HTMLWebpackPlugin({
            template: "app/index.html"
        })
    ]

};