import {assert} from "../utils.js";

export default function(obj, ...args) {

	obj.forEach(i => {
		if (args.length === 0) {
			i.dispatchEvent(new Event("click", ...args));
		} else {
			i.addEventListener("click", ...args);
		}
	});
	return obj;
}
