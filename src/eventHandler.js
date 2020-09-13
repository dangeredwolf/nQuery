export default (eventName, objects, ...args) => {
	for (let i = 0; i < objects.length; i++) {
		let obj = objects[i];
		args.length <= 0 ? obj.dispatchEvent(new Event(eventName, ...args)) : obj.addEventListener(eventName, ...args);
	}
	return objects;
}
