const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',

    output: {
        filename: 'main.[fullhash].js',
        path: path.resolve(__dirname, './docs'),
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/i,
                use: ['css-loader'],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

    devServer: {
        port: 3000,
        compress: true,
        historyApiFallback: true,
        proxy: {
            '/api': 'http://localhost:5000'
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'bid・it',
            template: './src/index.ejs',
            publicPath: '/',
            hash: true
        })
    ]
};