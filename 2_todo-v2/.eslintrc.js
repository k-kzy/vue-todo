module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    'prettier/vue',
  ],
  env: {
    'browser': true,
    'node': true
  },
  rules: {
    'max-len': ['error', { code: 120, tabWidth: 2 }],
    'no-new': 'off',

    // 括弧が省略可能ならよしとする
    'arrow-parens': ['error', 'as-needed'],

    // vuexのstateは変更する必要があるのでignoreした
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: ['state'],
    }],

    // 登録されたコンポーネントはPascalCaseを強制する
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
    }],

    // 属性値にはハイフン付きの名前を強制する
    'vue/attribute-hyphenation': ['error', 'always'],
  },
};