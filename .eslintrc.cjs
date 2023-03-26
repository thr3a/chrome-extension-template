module.exports = {
  // root: true,
  // parser: '@typescript-eslint/parser',
  // plugins: [
  //   '@typescript-eslint'
  // ],
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended'
  ],
  // parserOptions: {
  //   tsconfigRootDir: __dirname,
  //   project: ['./tsconfig.json'],
  // },
  rules: {
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    'react/prop-types': 'off',
    "react/react-in-jsx-scope": 'off'
    // '@typescript-eslint/no-misused-promises': [
    //   'error',
    //   {
    //     checksVoidReturn: {
    //       arguments: false,
    //       attributes: false,
    //     },
    //   },
    // ],
  },
  env: {
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
