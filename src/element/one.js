import {assert} from "../utils.js";

export default (objects, eventName, func, ...args) => {
	objects.forEach(obj => {
		obj.addEventListener(eventName, e => {
			obj.removeEventListener(eventName);
			func(e);
		}, ...args)
	});
	return objects;
}
