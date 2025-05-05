const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'), // ������� ��� ����������� ������ 
        filename: 'index.js', // ��� ����� � ������������ ������ (������ ��������� � entry point � ���� 1)
        library: 'ajs', // �������� ����� ����������
        libraryTarget: 'umd', // UMD (Universal Module Definition https://github.com/umdjs/umd) - ������, ������� ��������� ������������ RequireJS � �������
        libraryExport: 'default', // �������������� ��� default
        globalObject: 'this', // ��� ��������� �� ���������� ������, ����� ������������� window, � ���, ��� �� ������, �� ��������� Node.js ���
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};