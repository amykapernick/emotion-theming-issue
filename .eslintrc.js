module.exports = {
	extends: [`airbnb-base`],
	plugins: [`import`, `react`, `emotion`],
	parser: `babel-eslint`,
	rules: {
		'emotion/jsx-import': `error`,
		'emotion/no-vanilla': `error`,
		'emotion/import-from-emotion': `error`,
		'emotion/styled-import': `error`,
		'emotion/syntax-preference': [2, `string`],
		'linebreak-style': 0,
		'no-tabs': 0,
		indent: [`error`, `tab`, {
			SwitchCase: 1,
			VariableDeclarator: 1
		}],
		'arrow-spacing': [`error`, { before: true, after: true }],
		'comma-dangle': [
			`error`,
			{
				objects: `only-multiline`,
				arrays: `only-multiline`,
				imports: `never`,
				exports: `never`,
				functions: `never`,
			},
		],
		'no-var': `error`,
		'no-unused-vars': 1,
		'one-var': [2, `consecutive`],
		quotes: [`error`, `backtick`],
		'no-param-reassign': [`error`, { props: false }],
		'react/jsx-uses-react': `error`,
		'react/jsx-uses-vars': `error`,
		'class-methods-use-this': 0,
		'import/no-dynamic-require': 0
	}
};
