import {splitCSSClasses} from "../utils.js";

export default function(obj, ...args) {
	obj.forEach(i => {
		splitCSSClasses(args).forEach(cssClass => i.classList.remove(cssClass));
	});
	return obj;
}
