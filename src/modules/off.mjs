import {assert} from "../utils.js";

export default function(obj, ...args) {
	obj.forEach(i => {
		i.removeEventListener(...args)
	});
	return obj;
}
