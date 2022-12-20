// eslint-disable-next-line no-undef
module.exports = {
  extends: ["eslint:recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,

  overrides: [
    {
      files: ["*.ts", "*.tsx"],

      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
        "plugin:prettier/react",
        "plugin:prettier/@typescript-eslint",
      ],

      plugins: ["@typescript-eslint", "react", "prettier"],

      rules: {
        "@typescript-eslint/no-floating-promises": "off",
        "react/react-in-jsx-scope": "off",
      },

      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],

  settings: {
    react: {
      version: "detect",
    },
  },
};
