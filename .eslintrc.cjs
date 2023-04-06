// process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu/eslint-config-ts',
  rules: {
    'no-console': 'off',
    'unicorn/throw-new-error': 'off',
    'antfu/top-level-function': 'off',
  },
}
