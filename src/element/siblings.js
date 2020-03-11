import {nQuery} from "../main.js";

export default objects => {
	let results = [];

	objects.forEach(obj => {
		obj.parentNode.children.forEach(child => {
			if (child !== obj) {
				results.push(child)
			}
		})
	});

	return nQuery(results);
}
