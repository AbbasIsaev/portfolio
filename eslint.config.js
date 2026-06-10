import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import {defineConfig, globalIgnores} from 'eslint/config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default defineConfig([
    globalIgnores(['dist', 'dev-dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            globals: globals.browser,
        },
        plugins: {
            'simple-import-sort': simpleImportSort // Регистрация плагина
        },
        rules: {
            '@typescript-eslint/no-var-requires': 0,
            '@typescript-eslint/explicit-module-boundary-types': 0,
            // Правила https://eslint.org/docs/rules/
            // Запретить console.log('Лог')
            "no-console": "warn",
            // Пробелы
            'no-multi-spaces': 'warn',
            'object-curly-spacing': [
                'warn',
                'never',
                {
                    'objectsInObjects': false,
                    'arraysInObjects': false
                }
            ],
            'array-bracket-spacing': [
                'warn',
                'never',
                {
                    'singleValue': false,
                    'arraysInArrays': false
                }
            ],
            'computed-property-spacing': [
                'warn',
                'never'
            ],
            'key-spacing': [
                'warn',
                {
                    'mode': 'strict'
                }
            ],
            'comma-spacing': [
                'warn',
                {
                    'before': false,
                    'after': true
                }
            ],
            // Отступ 4 пробела https://eslint.org/docs/rules/indent
            'indent': [
                'warn',
                4,
                {
                    'MemberExpression': 1,
                    'SwitchCase': 1
                }
            ],
            'linebreak-style': [
                'warn',
                'unix'
            ],
            // Запретить debugger
            'no-debugger': 'warn',
            // Запретить использование оповещения
            'no-alert': 'warn',
            // Предлагать const вместо let
            'prefer-const': 'warn',
            // Запретить ;
            'semi': [
                'warn',
                'never'
            ],
            // Если блок if содержит return инструкцию, блок else становится ненужным
            'no-else-return': 'warn',
            /* Разрешается одинарная кавычка, allowTemplateLiterals - обратные кавычки,
               avoidEscape - позволяет использовать одинарные или двойные кавычки, внутри строки */
            'quotes': [
                'warn',
                'single',
                {
                    'allowTemplateLiterals': true,
                    'avoidEscape': true
                }
            ],
            // Запятые ставятся в конце текущей строки
            'comma-style': [
                'warn',
                'last',
                {
                    'exceptions': {
                        'ArrayExpression': false,
                        'ArrayPattern': false,
                        'ArrowFunctionExpression': false,
                        'CallExpression': false,
                        'FunctionDeclaration': false,
                        'FunctionExpression': false,
                        'ImportDeclaration': false,
                        'ObjectExpression': false,
                        'VariableDeclaration': false,
                        'NewExpression': false,
                        'ObjectPattern': false
                    }
                }
            ],
            // Запрещает использование запятых в конце объектов и массивов
            'comma-dangle': [
                'warn',
                'never'
            ],
            /* Лексическое объявление применяется только к текущему предложению case,
               заключите ваши предложения в блоки.*/
            'no-case-declarations': 'warn',
            /* Никогда не опускать фигурные скобки вокруг блоков, если блок содержит только один оператор
            "curly": "warn",*/
            /* Только camelcase, "properties": "never" - не проверяет имена свойств на camelcase,
               "ignoreDestructuring": true - не проверяет деструктурированные идентификаторы
               (но все же проверяет любое использование этих идентификаторов позже в коде)
            "camelcase": [
              "warn",
              {
                "properties": "never",
                "ignoreDestructuring": true
              }
            ]*/

            // Порядок расположения импортов
            // Сортировка импортов — простая и надёжная
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn'
        }
    },
])
