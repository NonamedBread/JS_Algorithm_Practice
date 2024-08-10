module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  // rules: {
  //   'import/order': [
  //     'error',
  //     {
  //       groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
  //       'newlines-between': 'always',
  //       alphabetize: {
  //         order: 'asc',
  //         caseInsensitive: true,
  //       },
  //     },
  //   ],
  // },
}
