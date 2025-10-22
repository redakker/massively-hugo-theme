module.exports = {
	env: {
		browser: true,
		es2021: true,
		jquery: true,
	},
	extends: ['standard', 'prettier'],
	plugins: ['prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'script',
	},
	globals: {
		$: 'readonly',
		jQuery: 'readonly',
		breakpoints: 'readonly',
	},
	rules: {
		// Allow semicolons (theme uses them)
		semi: ['error', 'always'],

		// Allow tabs for indentation (theme uses tabs)
		indent: ['error', 'tab'],
		'no-tabs': 'off',

		// Allow function declarations to be used before they are defined
		'no-use-before-define': ['error', { functions: false }],

		// Allow == and != for loose equality (common in jQuery code)
		eqeqeq: ['error', 'smart'],

		// Allow console statements during development
		'no-console': 'warn',

		// Allow unused vars in function parameters (common in jQuery callbacks)
		'no-unused-vars': ['error', { args: 'none' }],

		// Allow object shorthand properties to be optional
		'object-shorthand': 'off',

		// Allow space before function parentheses to be flexible
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never',
				asyncArrow: 'always',
			},
		],

		// Allow multiple variable declarations
		'one-var': 'off',

		// Allow chained assignments
		'no-multi-assign': 'off',

		// Prettier integration
		'prettier/prettier': 'error',
	},
	overrides: [
		{
			// Configuration files can use Node.js features
			files: ['*.config.js', '.eslintrc.js'],
			env: {
				node: true,
			},
		},
		{
			// Main theme JavaScript files (legacy jQuery style)
			files: ['static/assets/js/main.js', 'static/assets/js/util.js'],
			rules: {
				// Allow function expressions to be used as statements
				'func-names': 'off',

				// Allow immediately invoked function expressions
				'wrap-iife': ['error', 'outside'],

				// Allow spacing around operators to be flexible
				'space-infix-ops': 'error',

				// Allow multiple spaces for alignment
				'no-multi-spaces': ['error', { ignoreEOLComments: true }],
			},
		},
	],
};
