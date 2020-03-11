export default (objects, css, value) => {
	if (value || (typeof css === "object" && !(css instanceof Array))) {
		if (value) {
			objects.forEach(obj => obj.style[css] = typeof value === "number" ? value + "px" : value)
		} else {
			for (let i in css) {
				objects.forEach(obj => obj.style[i] = typeof css[i] === "number" ? css[i] + "px" : css[i])
			}
		}
	} else {
		if (typeof css === "string") {
			return getComputedStyle(objects[0]).getPropertyValue(css);
		} else if (typeof css === "object") {
			let results = {};
			let compStyles = getComputedStyle(objects[0]);

			css.forEach(property => {
				results[property] = compStyles.getPropertyValue(property);
			});

			return results;
		}
	}

}
