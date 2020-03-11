export default (objects, eventName, func, ...args) => {
	objects.forEach(obj => {
		obj.addEventListener(eventName, e => {
			obj.removeEventListener(eventName);
			func(e);
		}, ...args)
	});
	return objects;
}
