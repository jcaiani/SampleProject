const path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.png$/,
                use: {
                    loader: "url-loader?limit=100000"
                }
            },
            {
                test: /\.jpg$/,
                use: {
                    loader: "file-loader"
                }
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                }
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
                }
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader'
                }
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                }
            }
        ],
    },
    devServer: {
        contentBase: './dist',
        port: 9000
    }
};