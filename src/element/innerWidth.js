export default objects => {
	if (objects[0] instanceof Window)
		return objects[0].innerWidth;
	else
		return window.getComputedStyle(objects[0], null).getPropertyValue("width");
}
