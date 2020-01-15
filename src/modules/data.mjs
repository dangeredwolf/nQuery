import {normalizeElementArray} from "../utils.js";

export default function(obj, attribute, value) {
	var returnMe = obj;
	obj.forEach(i => {
		if (typeof value === "undefined") {
			returnMe = i.getAttribute("data-" + attribute);
		} else {
			i.setAttribute("data-" + attribute, value);
		}
	});
	return obj;
}
