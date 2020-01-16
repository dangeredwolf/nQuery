import {assert} from "./utils.js";

export default function(eventName, obj, ...args) {

	obj.forEach(i => {
		if (arguments.length === 0) {
			i.dispatchEvent(new Event(eventName, ...args));
		} else {
			i.addEventListener(eventName, ...args);
		}
	});
	return obj;
}
