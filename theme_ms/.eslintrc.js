module.exports = {
  root: true,
  env: {
    node: true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  // "extends": [
  //   "plugin:vue/essential",
  //   "@vue/prettier",
  //   'vuetify',
  // ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
