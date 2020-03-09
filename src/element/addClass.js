import {splitCSSClasses} from "../utils.js";

export default (objects, ...classes) => {
	objects.forEach(obj => splitCSSClasses(classes).forEach(classy => obj.classList.add(classy)));
	return objects;
}
