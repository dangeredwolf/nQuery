export default (o, attr, v) => {
	return o[0] ? o[0].getAttribute(attr) : undefined;

	o.forEach(i => i.setAttribute(attr, v));

	return o;
}
