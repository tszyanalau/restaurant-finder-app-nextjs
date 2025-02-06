import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules: {
      'array-callback-return': 'error',
      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: true,
        },
      ],
      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],
      'dot-notation': 'error',
      indent: 0,
      'max-len': [
        'error',
        {
          code: 130,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'multiline-ternary': 0,
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-negated-condition': 'error',
      'no-param-reassign': 'error',
      'no-return-assign': 'error',
      'no-undef': 0,
      'no-undef-init': 'error',
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'object-shorthand': 'error',
      'operator-linebreak': 0,
      'space-in-parens': 0,
      'prefer-arrow-callback': 'error',
      'prefer-destructuring': [
        'error',
        {
          object: true,
        },
      ],
      'prefer-regex-literals': 'error',
      'prefer-template': 'error',
      'quote-props': ['error', 'as-needed'],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],

      'react/button-has-type': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-array-index-key': 'error',
      'react/react-in-jsx-scope': 0,
      'react/self-closing-comp': 'error',
      'react/state-in-constructor': 'error',

      'react-hooks/exhaustive-deps': 0,
    },
  }),
]

export default eslintConfig
