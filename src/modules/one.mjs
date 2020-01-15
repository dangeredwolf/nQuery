import {assert} from "../utils.js";

export default function(obj, eventName, func, ...args) {
	obj.forEach(i => {
		i.addEventListener(eventName, () => {
			i.removeEventListener(eventName);
		}, ...args)
	});
	return obj;
}
