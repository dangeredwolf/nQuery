export default function(obj, ...args) {
	if (obj[0]) {
		return obj[0].offsetHeight
	} else {
		return obj;
	}
}
