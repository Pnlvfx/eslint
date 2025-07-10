import type { Linter } from 'eslint';

const rules = {
  'no-var': 'error',
  semi: 'error',
  'no-multi-spaces': 'error',
  'no-empty-function': 'error',
  'no-floating-decimal': 'error',
  'no-implied-eval': 'error',
  'no-lone-blocks': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-new': 'error',
  'no-octal-escape': 'error',
  'no-return-await': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unused-expressions': 'error',
  'space-in-parens': 'error',
  'no-multiple-empty-lines': 'error',
  'no-unsafe-negation': 'error',
  'prefer-const': 'error',
  quotes: ['error', 'single', { avoidEscape: true }],
  'no-restricted-imports': ['error', { name: 'mongodb', message: 'Use @goatjs/db instead' }],
  'no-restricted-properties': [
    'error',
    { object: 'z', property: 'object', message: 'Use z.strictObject instead.' },
    { object: 'fs', property: 'access', message: 'Use @goatjs/node/fs instead' },
  ],

  'no-console': 'warn',
  'sonarjs/todo-tag': 'warn',

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'off',
  'sonarjs/no-unused-vars': 'off',
  'unicorn/prevent-abbreviations': 'off',
  'unicorn/catch-error-name': 'off',
  'no-empty': 'off',

  // duplicates of tseslint
  'sonarjs/no-misused-promises': 'off',
  'sonarjs/sonar-prefer-optional-chain': 'off',
  'sonarjs/deprecation': 'off',
  'sonarjs/unused-import': 'off',
} satisfies Linter.RulesRecord;

export default rules;
