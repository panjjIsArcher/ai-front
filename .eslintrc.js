module.exports = {
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  globals: {
    wx: true,
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "no-undef": "off",
    "no-debugger": "off",
    "vue/order-in-components": "error",
  },
};
