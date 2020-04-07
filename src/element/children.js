import {nQuery} from "../main.js";

export default (objects, matches) => {
	let results = [];

	objects.forEach(obj => {
		for (let i = 0; i < obj.children?.length; i++) {
			if (!matches || obj.children[i].matches(matches)) {
				results.push(obj.children[i]);
			}
		}
	});

	return nQuery(results);
}
