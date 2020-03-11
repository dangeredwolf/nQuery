export default objects => {
	objects.forEach(obj => obj.parentElement.removeChild(obj));
	return objects;
}
