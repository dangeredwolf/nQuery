import {splitCSSClasses} from "../utils.js";

export default (objects, ...args) => {
	let result = false;
	objects.forEach(obj => splitCSSClasses(args).forEach(cssClasses => result = result || obj.classList.contains(cssClasses)));
	return result;
}
