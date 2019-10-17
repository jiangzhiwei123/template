module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-plugin-px2rem": {
      // 换算基数
      rootValue: 100,
      exclude: /(node_module)/,
      selectorBlackList: ["html"]
    }
  }
};
