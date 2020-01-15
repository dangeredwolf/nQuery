import {assert} from "../utils.js";

export default function(obj, ...args) {
	obj.forEach(i => {
		i.addEventListener(args[0], () => {
			args[1]();
			i.removeEventListener(args[0]);
		}, args[2])
	});
	return obj;
}
