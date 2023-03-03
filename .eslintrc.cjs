module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'prettier'],
  plugins: ['react', 'import', 'unused-imports', 'simple-import-sort', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['src/@types/utils.ts', 'src/services/converter/**', 'src/test.ts'],
  rules: {
    'prettier/prettier': 2,
    'unused-imports/no-unused-imports': 2,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/no-unknown-property': [2, { ignore: ['css'] }],
    'func-names': [2, 'as-needed'],
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/no-unstable-nested-components': 0,
    'no-return-assign': 0,
  },
};
