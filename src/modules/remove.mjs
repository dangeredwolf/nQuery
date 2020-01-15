export default function(obj) {
	obj.forEach(i => i.remove()); // i.parentElement.removeChild(i)
	return obj;
}
