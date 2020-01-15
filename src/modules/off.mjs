export default function(obj, eventName, ...args) {
	obj.forEach(i => {
		i.removeEventListener(eventName, ...args)
	});
	return obj;
}
