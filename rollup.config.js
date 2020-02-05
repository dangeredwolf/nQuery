import resolve from '@rollup/plugin-node-resolve';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'src/main.js',
	output: {
		file: 'nquery.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve()
	]
};
