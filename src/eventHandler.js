import {assert} from "./utils.js";

export default function(eventName, obj, ...args) {

	obj.forEach(i => {
		if (args.length === 0) {
			i.dispatchEvent(new Event(eventName, ...args));
		} else {
			i.addEventListener(eventName, ...args);
		}
	});
	return obj;
}
