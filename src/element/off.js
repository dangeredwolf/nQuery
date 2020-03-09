export default (objects, eventName, ...args) => {
	objects.forEach(obj => {
		obj.removeEventListener(eventName, ...args)
	});
	return objects;
}
