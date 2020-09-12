import {splitCSSClasses} from "../utils.js";

export default (objects, ...args) => {
	for (let i = 0; i < objects.length; i++) {
		let cssClasses = splitCSSClasses(args)
		for (let j = 0; j < cssClasses.length; j++) {
			objects[i].classList.remove(cssClasses[j])
		}
	}
	return objects;
}
