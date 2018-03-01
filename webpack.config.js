module.exports = {
    entry: './src/App.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
        
    },
    devServer: {
        inline: true,
        contentBase: './public',
        port: 3000
    },
    module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader'
            }
          }
        ]
      },
      devtool: 'eval-source-map',
      resolve: {
        extensions: ['*', '.js', '.jsx']
      }   
      
};