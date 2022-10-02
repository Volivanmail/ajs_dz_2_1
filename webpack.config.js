const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require ('mini-css-extract-plugin');
const path = require ('path');



module.exports = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'CSS-loader'
                ]  
            },
            {

            }
        ]
    },
    plugins: [
        new MiniCSSExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}