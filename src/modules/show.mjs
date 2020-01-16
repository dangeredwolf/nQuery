export default function(obj) {
	obj.forEach(i => {
		i.style.display = null;
	});
	return obj;
}
