export default (objects, set) => {
	if (set) {
		objects.forEach(obj => obj.style.height = typeof set === "string" ? set : (set + "px"))
	} else {
		return parseFloat(getComputedStyle(objects[0], null).height.replace("px", ""));
	}
}
