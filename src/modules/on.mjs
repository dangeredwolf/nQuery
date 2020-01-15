export default function(obj, eventName, ...args) {
	obj.forEach(i => {
		i.addEventListener(eventName, ...args)
	});
	return obj;
}
