export default function(obj) {
	obj.forEach(i => i.remove());
	return obj;
}
