import {nQuery} from "../main.js";

export default (objects, add) => {
	let newElems = nQuery(add);
	newElems.forEach(elem => objects.push(elem));
	return objects;
}
