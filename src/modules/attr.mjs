import {normalizeElementArray} from "../utils.js";

export default function(obj, attribute, value) {
	var returnMe = obj;
	obj.forEach(i => {
		if (typeof value === "undefined") {
			returnMe = i.getAttribute(attribute);
		} else {
			i.setAttribute(attribute, value);
		}
	});
	return obj;
}
