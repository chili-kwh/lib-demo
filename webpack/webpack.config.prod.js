const path = require('path');
const DIST = path.resolve(__dirname, '../dist');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: DIST,
        filename: 'lib-demo.js',
        library: "libDemo", // 导出库(exported library)的名称
        libraryTarget: "umd", // 通用模块定义
    },
    externals: {
        'react': 'react',
        'react-dom': 'react-dom'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                }],
            }
        ]
    }
}