const path = require('path');


module.exports = {



    entry: './src/index.js',

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    
    mode: 'development',
    optimization: {
        usedExports: true,
    },
    devtools: 'eval-source-map',

};

