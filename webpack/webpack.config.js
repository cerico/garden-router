module.exports = options => {
  return {
    entry: './src/js/index.js',
    output: {
      filename: 'bundle.js',
    },
    devtool: 'source-map',
    devServer: {
       port: 2008,
        historyApiFallback: {
          index: 'src/index.html',
      },
    },
  }
}
