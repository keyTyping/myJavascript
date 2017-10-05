var htmlWebpack= require('html-webpack-plugin');

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
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpack({
            title:'首页',
            filename:'index.html',
            template:'index1.html'
        })
    ]
}
