export default objects => {
	objects.forEach(obj => obj.remove());
	return objects;
}
