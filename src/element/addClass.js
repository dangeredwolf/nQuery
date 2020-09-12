import {splitCSSClasses} from "../utils.js";

export default (objects, ...classes) => {
	for (let i = 0; i < objects.length; i++) {
		let cssClasses = splitCSSClasses(classes);
		for (let j = 0; j < cssClasses.length; j++) {
			objects[i].classList.add(cssClasses[j]);
		}
	}
	return objects;
}
