module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:testing-library/recommended", // enforce good testing practices
    "plugin:testcafe/recommended", // avoid false positives when linting e2e tests
    "plugin:mdx/recommended", // For MDX stories
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ["testing-library"],
  ignorePatterns: ["**/build/**", "**/dist/**"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off", // this gets really ugly when using complex types e.g. for Redux
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      {
        overrides: {
          constructors: "off",
          methods: "no-public",
        },
      },
    ],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto", // to avoid EOL problems when running build jobs using Linux and/or Windows
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
