const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'out.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}