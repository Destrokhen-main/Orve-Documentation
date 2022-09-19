const package = require('root-require')('package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const log = require('log-beautify');

const object = {
  name: package.name,
  description: package.description,
}

console.clear()
module.exports = {
  entry: __dirname + '/src/index.js',
  mode: "development",
  stats: 'errors-only',
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  __dirname + '/public/index.html',
      templateParameters: object,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(?:ico|png|jpg|jpeg|svg|gif)$/,
          loader: "file-loader",
          options: {
            outputPath: "assets/images",
            name() {
              return "[name].[hash].[ext]";
            },
          },
      },
    ]
  },
  devServer: {
    allowedHosts: "all",
    port: "auto", 
    compress: true,
    magicHtml: true,
    historyApiFallback: true,
    client: {
      logging: 'warn',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    onListening: async function (devServer) {
      const port = devServer.server.address().port;
      const ipv4 = await WebpackDevServer.internalIP('v4');
      const ipv6 = await WebpackDevServer.internalIP('v6');
      console.clear()
      console.log("Simple-reactive start")
      log.success("server start on port :" + port);
      console.log()
      console.log(`\tlocal: \t\thttp://localhost:${port}`);
      console.log(`\tlocal ip-v4: \thttp://${ipv4}:${port}`);
      console.log(`\tlocal ip-v6: \thttp://[${ipv6}]:${port}`)
    }
  }
}