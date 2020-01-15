import {assert} from "./utils.js";

export default function(eventName, obj) {

	obj.forEach(i => {
		if (args.length === 0) {
			i.dispatchEvent(new Event(eventName, arguments.splice(2)));
		} else {
			i.addEventListener(eventName, arguments.splice(2));
		}
	});
	return obj;
}
