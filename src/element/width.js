export default (objects, set) => {
	if (set) {
		objects.forEach(obj => obj.style.width = typeof set === "string" ? set : (set + "px"))
	} else {
		try {
			return parseFloat(getComputedStyle(objects[0], null).width.replace("px", ""));
		} catch (e) {
			return objects[0]?.offsetWidth
		}
	}
}
