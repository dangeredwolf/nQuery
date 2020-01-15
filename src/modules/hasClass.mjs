import {splitCSSClasses} from "../utils.js";

export default function(obj, ...args) {
	result = false;
	obj.forEach(i => {
		splitCSSClasses(args).forEach(cssClass => result = result || i.classList.contains(cssClass));
	});
	return result;
}
