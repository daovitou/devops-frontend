module.exports = {
  root: true,
  globals: {
    $nuxt: true,
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  env: {
    node: true,
    jest: true,
    browser: true,
  },
  extends: [
    "plugin:nuxt/recommended",
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended"
  ],
  rules: {
    "vue/comment-directive": ["error", {
      "reportUnusedDisableDirectives": false
    }],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    'prettier/prettier': [
      'error',  // alternativly change to 'warn' if you want only warning
      {
        endOfLine: 'auto',
        // ... put other prettier rules here like "semi":flase,
      },
    ],
  },
  ignorePatterns: [".eslintrc.js"],
};
