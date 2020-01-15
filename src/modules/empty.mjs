export default function(obj) {
	obj.forEach(i => {
		while (i.firstChild) {
			i.removeChild(i.firstChild);
		}
	});
	return obj;
}
