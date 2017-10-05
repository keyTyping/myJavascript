
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/main.js',
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename:'build.js'
    },
    module:{
        // loaders:[
        //     test: /\.css$/,
        //     loader: 'style-loader!css-loader'        //1的写法
        // ]
        rules:[
            {
            test: /\.css$/,
            use:['style-loader','css-loader']
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            title:'首页',
            filename:'index.html',
            template:'templete.html'
        })
    ]
}
