export default (objects, eventName, ...args) => {
	objects.forEach(obj => {
		obj.addEventListener(eventName, ...args)
	});
	return objects;
}
