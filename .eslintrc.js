module.exports = {
  env: {
    browser: true
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-prettier',
    'github',
    'import',
    'jsx-a11y',
    'prefer-arrow-functions',
    'prettier',
    'react',
    'sonarjs',
    'unused-imports'
  ],
  extends: [
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:no-unsanitized/DOM',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./client/tsconfig.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true }
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/prefer-for-of': 2,
    eqeqeq: 2,
    'eslint/no-throw-literal': 0,
    'github/array-foreach': 2,
    'import/newline-after-import': 2,
    'import/no-default-export': 2,
    'import/no-unresolved': 2,
    'no-fallthrough': 0,
    'no-multi-spaces': 2,
    'prefer-arrow-functions/prefer-arrow-functions': 2,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': [2, { maximum: 1, when: 'multiline' }],
    'react/jsx-uses-react': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'sonarjs/no-duplicate-string': 0,
    'unused-imports/no-unused-imports': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};

