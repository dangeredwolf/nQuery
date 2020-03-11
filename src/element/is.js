export default (objects, selector) => {
	let result = false;

	objects.forEach(obj => {
		result = result || (obj.matches ? obj.matches(selector) : false);
	});

	return result;
}
