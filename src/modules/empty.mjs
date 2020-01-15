import {splitCSSClasses} from "../utils.js";

export default function(obj, ...args) {
	obj.forEach(i => {
		while (i.firstChild) {
			i.removeChild(i.firstChild);
		}
	});
	return obj;
}
