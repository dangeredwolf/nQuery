export default objects => {
	objects.forEach(obj => {while (obj.firstChild) {
		obj.removeChild(obj.firstChild);
	}});
	return objects;
}
