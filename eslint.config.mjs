import nextConfig from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import tseslint from 'typescript-eslint';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

const eslintConfig = [
  // Other tools' git worktrees (e.g. Kilo) carry their own copy of the repo.
  { ignores: ['.kilo/**'] },
  ...nextConfig,
  ...nextCoreWebVitals,
  ...tseslint.configs.recommended,
  prettierPlugin,
  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    // CLI scripts report to the terminal.
    files: ['scripts/**'],
    rules: { 'no-console': 'off' },
  },
];

export default eslintConfig;
