export default (target, ...args) => {
	args.forEach(prop => Object.assign(target, prop))
}
