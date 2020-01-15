import {assert} from "../utils.js";

export default function(obj, ...args) {
	obj.forEach(i => {
		i.addEventListener(...args)
	});
	return obj;
}
