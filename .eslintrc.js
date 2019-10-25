module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      modules: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  'extends': 'standard'
}