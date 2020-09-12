import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	preserveModules: false,
	output: [
		{
			file: 'out/nquery.js',
			format: 'iife', // immediately-invoked function expression — suitable for <script> tags
			sourcemap: true,
			banner: `/**\n* nQuery ${require('./package.json').version}\n* @license MIT\n* https://github.com/dangeredwolf/nQuery\n**/`,
			hoistTransitiveImports: true
		},
		{
			file: 'out/nquery.min.js',
			format: 'iife', // immediately-invoked function expression — suitable for <script> tags
			sourcemap: true,
			banner: `/**\n* nQuery ${require('./package.json').version}\n* @license MIT\n* https://github.com/dangeredwolf/nQuery\n**/`,
			hoistTransitiveImports: true,
			plugins: [terser({
				mangle: {
					reserved:["nQueryInit", "nQueryObject", "nQueryDocument", "nQueryElement", "nQueryWindow", "nQueryPromise"]
				},
				ecma: 8
			})]
		}
	],
	plugins: [
		resolve(),
		babel()
	]
};
