module.exports = {
  lintOnSave: 'warning',
  configureWebpack: {
    // 为了使用npm link 调试本地项目，所以需要禁用掉该规则。避免追踪软连接实际地址
    // https://github.com/webpack/webpack/issues/811#issuecomment-309797397
    resolve: {
      symlinks: false
    }
  },
  css: {
    extract: false
  }
}
