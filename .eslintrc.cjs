module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  env: {
    node: true, // Node.js 환경 추가
    es2021: true,
  },
  rules: {
    'no-console': 'off', // console.log 사용 허용
    // 추가적인 규칙을 여기에 추가할 수 있습니다.
  },
}
