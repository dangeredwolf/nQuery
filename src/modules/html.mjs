export default function(obj, value) {

	if (typeof value === "undefined") {
		if (obj[0]) {
			return obj[0].innerHTML;
		} else {
			return undefined;
		}
	}

	obj.forEach(i => {
		i.innerHTML = value;
	});

	return obj;

}
