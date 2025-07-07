import tseslint from 'typescript-eslint';

export default [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      semi: 'off',
      '@typescript-eslint/semi': 'warn',
      '@typescript-eslint/no-empty-interface': ['error', { allowSingleExtends: true }],
    },
  },
];
