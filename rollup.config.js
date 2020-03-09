import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	preserveModules: false,
	output: {
		file: 'nquery.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true,
		name:"nquery",
		hoistTransitiveImports: true
	},
	plugins: [
		resolve()
	]
};
