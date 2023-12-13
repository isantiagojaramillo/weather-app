const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // WHICH JS FILES HAS TO COPY
    entry: './src/app/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    
    // THE PORT AVAILABLE TO USE THE SERVER
    devServer: {
        port: 3000
    },

    // UPLOADING THE CSS FILES
    module: {
        rules: [
            {
                // JS REGULAR EXPRESION. IT WORKS TO READ ALL THE CSS FILES IN THE PROJECT
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    // UPLOADING THE HTML FILE
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
