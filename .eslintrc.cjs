/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
	plugins: ['@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
		extraFileExtensions: ['.svelte'],
	},
	env: {
		browser: true,
		node: true,
	},
	globals: {
		Meta: 'readonly',
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
		{
			files: ['*.svelte'],
			rules: {
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						argsIgnorePattern: '^_',
					},
				],
			},
		},
	],
};
