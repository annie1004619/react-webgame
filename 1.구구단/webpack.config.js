const path = require("path");

module.exports = {
    mode:"development",
    devtool:"eval" ,//hidden-source-map -> production 일때
    resolve: {
        extensions: ['.jsx','.js']
    },
    entry:{
        app: ['./client'],
    },
    module: {
        rules:[{
            test: /\.jsx?$/,
            loader:'babel-loader',
            options:{
                presets:[['@babel/preset-env', {
                    targets:{
                        browsers:['> 1% in KR'],//browserlist
                    },
                    debug:true,
                }],
                '@babel/preset-react',
                ],
            }
        }],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
}
