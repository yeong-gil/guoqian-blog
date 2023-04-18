module.exports = {
  outputDir: "docs",
  publicPath: "/guoqian-blog",
  filenameHashing: false,
  productionSourceMap: false,
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/scss/_responsive.scss";
        `
      }
    }
  },
}