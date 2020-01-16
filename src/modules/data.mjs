export default (o, tag, v) => {

	if (typeof v === "undefined") {
		return o[0] ? o[0].getAttribute("data-" + tag) : undefined;
	}

	o.forEach(i => i.setAttribute("data-" + tag, v));

	return o;

}
