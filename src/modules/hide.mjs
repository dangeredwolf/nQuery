export default function(obj) {
	obj.forEach(i => {
		i.style.display = "none";
	});
	return obj;
}
