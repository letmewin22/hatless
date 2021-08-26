module.exports = {
  parser: 'babel-eslint', // uses babel-eslint transforms
  settings: {
    react: {
      version: 'detect', // detect react version
    },
  },
  env: {
    node: true, // defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended', // use recommended configs
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-anonymous-exports-page-templates': 'warn',
    'limited-exports-page-templates': 'warn',
    'arrow-parens': [1, 'as-needed', { requireForBlockBody: false }],
    'comma-dangle': 'off',
    'no-console': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    'unicorn/prefer-text-content': 'off',
    'no-new': 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'prettier/prettier': [
      'off',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
