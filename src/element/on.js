export default (objects, eventName, ...args) => {
	objects.forEach(obj => {
		obj.__nq_event = obj.__nq_event || [];
		obj.__nq_event.push(obj.addEventListener(eventName, ...args));
	});
	return objects;
}
