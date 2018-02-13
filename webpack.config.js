const webpack = require('webpack')

module.exports = {
    entry: __dirname + '/js/main',
    output: {
        path: __dirname + '/docs/js',
        filename: 'asscup-page.js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    }
}
