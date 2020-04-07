export default (objects, selector) => {
	let result = false;

	objects.forEach(obj => {
		result = result || obj.matches?.(selector);
	});

	return result;
}
