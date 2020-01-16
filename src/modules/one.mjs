import {assert} from "../utils.js";

export default (o, eventName, func, ...args) => {
	o.forEach(i => {
		i.addEventListener(eventName, e => {
			i.removeEventListener(eventName);
			func(e);
		}, ...args)
	});
	return o;
}
