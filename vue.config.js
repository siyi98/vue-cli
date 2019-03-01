module.exports = {
  // 修改为相对路径
  publicPath: './',
  devServer: {
    open: false, // 项目启动时是否自动打开网页
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
