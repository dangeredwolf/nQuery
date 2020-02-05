export default (o, attr, v) => {
	if (v) {
		o.forEach(i => i.setAttribute(attr, v));
		return o;
	} else {
		if (o[0]) {
			return o[0].getAttribute(attr) || undefined;
		}
	}



}
