import {nQuery} from "../main.js";

export default objects => {
	let results = [];

	for (let o = 0; o < objects.length; o++) {
		let children = objects[o].parentNode.children;
		for (let i = 0; i < children.length; i++) {
			if (children[i] !== objects[o]) {
				results.push(children[i])
			}
		}
	}

	return nQuery(results);
}
