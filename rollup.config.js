const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const pkg = require('./package.json')

module.exports = [
	{
		input: './src/cli.js',
		external: [ 'gluegun' ],
		output: [
			{ file: pkg.main, format: 'cjs' }
		],
    plugins: [
      resolve(),
      commonjs({
        include: 'node_modules/**'
      })
    ]
	}
]
