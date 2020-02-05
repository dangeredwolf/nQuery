export default (o, v) => {

	if (typeof v === "undefined") {
		return o[0] ? o[0].innerHTML : undefined;
	}

	o.forEach(i => {
		i.innerHTML = v;
	});

	return o;

}
