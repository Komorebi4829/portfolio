// eslint.config.mjs
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import tseslint from 'typescript-eslint'
import nextjs from '@next/eslint-plugin-next'
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort'
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 使用 FlatCompat 来支持老式配置
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
})

export default [
  // 忽略文件配置
  {
    ignores: [
      'public/**',
      'node_modules/**',
      'dist/**',
      'build/**',
      '.history/**',
      '.next/**',
      'LICENSE',
      'yarn-error.log',
      'pnpm-lock.yaml',
      'package-lock.json',
      '.DS_Store',
      '.prettierignore',
      '.gitignore',
      'docker/**',
      'Dockerfile*',
      'next-env.d.ts',
      '*.sql',
      '*.lock',
      '*.png',
      '*.jpg',
      '*.jpeg',
      '*.eot',
      '*.ttf',
      '*.woff',
    ],
  },

  // 基础 JavaScript 配置
  js.configs.recommended,

  // TypeScript 配置
  ...tseslint.configs.recommended,

  // 兼容 Next.js 配置
  ...compat.config({
    extends: ['next', 'next/core-web-vitals'],
  }),

  // 主要配置
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        React: 'readonly',
        JSX: 'readonly',
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImportsPlugin,
      '@next/next': nextjs,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // 基础规则
      'no-unused-vars': 'off',
      'no-console': 'warn',

      // TypeScript 规则
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      // React 规则
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

      // 未使用导入规则
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // 导入排序规则
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^@?\\w', '^\\u0000'],
            ['^.+\\.s?css$'],
            ['^@/libs', '^@/hooks'],
            ['^@/data'],
            ['^@/components', '^@/container'],
            ['^@/store'],
            ['^@/'],
            [
              '^\\./?$',
              '^\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\.\\.(?!/?$)',
              '^\\.\\../\\.\\./?$',
              '^\\.\\../\\.\\.(?!/?$)',
              '^\\.\\../\\.\\../\\.\\./?$',
              '^\\.\\../\\.\\../\\.\\.(?!/?$)',
            ],
            ['^@/types'],
            ['^'],
          ],
        },
      ],
      '@typescript-eslint/no-unused-expressions': 'off', // 短路求值表达式
      'no-useless-escape': 'off', // 不必要的转义
      '@typescript-eslint/no-explicit-any': 'off', // 或 'warn'

    },
  },
]
