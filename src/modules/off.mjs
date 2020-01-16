export default (o, eventName, ...a) => {
	o.forEach(i => {
		i.removeEventListener(eventName, ...a)
	});
	return o;
}
