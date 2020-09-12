export default (objects, set) => {
	if (set) {
		objects.forEach(obj => obj.style.scrollTop = typeof set === "string" ? set : (set + "px"))
	} else {
		objects[0]?.scrollTop;
	}
}
