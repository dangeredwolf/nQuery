import {nQuery} from "../main.js";

export default (objects, matches) => {
	let results = [];

	let find = obj => {
		if (obj.children) {
			for (let i = 0; i < obj.children.length; i++) {
				if (obj.children[i].matches(matches)) {
					results.push(obj.children[i]);
				}
				find(obj.children[i])
			}
		}
	}

	objects.forEach(obj => find(obj));

	return nQuery(results);
}
