module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "@vue/airbnb", "@vue/typescript/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "class-methods-use-this": 0,
    "arrow-body-style": ["warn", "as-needed"],
    "import/prefer-default-export": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-namespace": "off",
    "linebreak-style": "off",
    "import/no-cycle": "off",
    "max-len": ["error", { ignoreUrls: true }],
    "max-len": ["error", { code: 180 }],
    "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
  },
  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],
      env: {
        mocha: true,
      },
    },
  ],
};
