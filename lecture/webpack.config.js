const path=require('path')//node에서 경로 조작하는 것

module.exports={
    name:'wordrelay-setting',//끝말잇기 설정할래~
    mode: 'development', //실서비스:production
    devtool:'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },

    //entry와 output이 젤 중요!
    entry:{
        //입력
        app:['./client'],
        //client.jsx가 WordRelay.jsx 불러오기때문에 WordRelay.jsx 안 적어줘도 됨
        //확장자도 안적어줘도 됨 => resolve 사용
    },
    module:{
        rules: [{

            test:/\.jsx?/,//정규표현식 js파일이랑jsx 파일을 이 rule을 적용하겠다.
            loader: 'babel-loader',
            options:{
                presets:[['@babel/preset-env', {
                    targets:{
                        browsers:['> 1% in KR'],//browserlist
                    },
                    debug:true,
                }],
                    '@babel/preset-react',
                ],
                plugins: ['@babel/plugin-proposal-class-properties',
                'react-hot-loader/babel',
                ]
            }
        }]
    },
    output:{
        //출력
        path: path.join(__dirname, 'dist'), //join: 경로를 알아서 합쳐줌 >현재 폴더안에 dist
        filename: 'app.js'
    },
};