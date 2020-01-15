import {normalizeElementArray} from "../utils.js";

export default function(obj, ...args) {
	obj.forEach(i => {
		args.forEach(j => {
			normalizeElementArray(j).forEach(k => i.appendChild(k));
		});
	});
	return obj;
}
