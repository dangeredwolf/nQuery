import {nQuery} from "../main.js";

export default (objects, matches) => {
	let results = [];

	let obj = objects[0];

	while (obj && obj.nodeName !== "HTML") {
		results.push(obj);
		obj = obj.parentElement;
	}

	return nQuery(results);
}
