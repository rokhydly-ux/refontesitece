import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import hooksPlugin from 'eslint-plugin-react-hooks';
import refreshPlugin from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ["dist", "node_modules", "eslint.config.js"],
  },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { 
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
      globals: globals.browser,
    },
  },
  ...tseslint.configs.recommended,
  {
    plugins: {
      'react-hooks': hooksPlugin,
      'react-refresh': refreshPlugin,
      'react': pluginReact,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': 'warn',
       ...pluginReact.configs.recommended.rules,
       ...pluginReact.configs['jsx-runtime'].rules,
    },
  },
];

