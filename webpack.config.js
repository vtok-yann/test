const path = require('path')                                        // core nodejs 모듈 중 하나, 파일 경로 설정할 때 사용
const HtmlWebpackPlugin = require('html-webpack-plugin')            // index.html 파일을 dist 폴더에 index_bundle.js 파일과 함께 자동으로 생성, 우리는 그냥 시작만 하고싶지 귀찮게 index.html 파일까지 만들고 싶지 않다.!!

module.exports = {                                      // moduel export (옛날 방식..)
    entry: './index.js',                            // 리액트 파일이 시작하는 곳
    output: {                                           // bundled compiled 파일
        path: path.join(__dirname, '/dist'),            //__dirname : 현재 디렉토리, dist 폴더에 모든 컴파일된 하나의 번들파일을 넣을 예정
        filename: 'index_bundle.js'
        
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {                                           // javascript 모듈을 생성할 규칙을 지정 (node_module을 제외한.js 파일을 babel-loader로 불러와 모듈을 생성
        rules: [
                {
                test: /\.(js|jsx)$/,               // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
                exclude: /node_module/,                 // node module 폴더는 babel 컴파일에서 제외
                use:[
                    {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                      }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'                // 생성한 템플릿 파일
        })
    ]
}