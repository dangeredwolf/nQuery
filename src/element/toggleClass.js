import {splitCSSClasses} from "../utils.js";

export default (objects, ...args) => {
	objects.forEach(obj => splitCSSClasses(args).forEach(cssClass => obj.classList?.toggle?.(cssClass)));
	return objects;
}
