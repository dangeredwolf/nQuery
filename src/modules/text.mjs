export default (o, v) => {

	if (typeof v === "undefined") {
		return o[0] ? o[0].innerText : undefined;
	}

	o.forEach(i => {
		i.innerText = v;
	});

	return o;

}
