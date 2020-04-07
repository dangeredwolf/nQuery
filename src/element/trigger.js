export default (objects, eventName, ...args) => {
	objects.forEach(obj => {
        obj.dispatchEvent(new Event(eventName, ...args));
	});
	return objects;
}
