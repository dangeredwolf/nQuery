export default objects => {
	if (objects[0] instanceof Window)
		return objects[0].outerWidth;
	else
		return objects[0].offsetWidth;
}
