export default (o, eventName, ...a) => {
	o.forEach(i => {
		i.addEventListener(eventName, ...a)
	});
	return o;
}
