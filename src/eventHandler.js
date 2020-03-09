export default (eventName, objects, ...args) => {
	objects.forEach(obj => args.length <= 0 ? obj.dispatchEvent(new Event(eventName, ...args)) : obj.addEventListener(eventName, ...args));
	return objects;
}
