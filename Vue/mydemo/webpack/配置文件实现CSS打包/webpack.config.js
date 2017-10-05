module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'build.js'
    }
    ,
    module: {
        loaders: [
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    }
}
