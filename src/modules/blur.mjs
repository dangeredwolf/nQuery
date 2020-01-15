import {assert} from "../utils.js";

export default function(obj, ...args) {

	obj.forEach(i => {
		if (args.length === 0) {
			i.dispatchEvent(new Event("blur", ...args));
		} else {
			i.addEventListener("blur", ...args);
		}
	});
	return obj;
}
