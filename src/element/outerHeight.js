export default objects => {
	if (objects[0] instanceof Window)
		return objects[0].outerHeight;
	else
		return objects[0].offsetHeight;
}
