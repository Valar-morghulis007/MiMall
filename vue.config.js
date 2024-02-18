module.exports = {
  devServer: {
    host: "localhost",
    port: 8081,
    proxy: {
      "/activity": {
        target: "https://www.imooc.com",
        changeOrigin: true,
        pathRewrite:{
          'activity':'activity'
        }
      },
    },
  },
};
