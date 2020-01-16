export default function(obj, tag, value) {

	if (typeof value === "undefined") {
		if (obj[0]) {
			return obj[0].getAttribute("data-" + tag);
		} else {
			return undefined;
		}
	}

	obj.forEach(i => {
		i.setAttribute("data-" + tag, value);
	});

	return obj;

}
