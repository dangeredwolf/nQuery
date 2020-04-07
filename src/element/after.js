import {normalizeElementArray} from "../utils.js";

export default (objects, ...elements) => {
	normalizeElementArray(elements).forEach(element => {objects[0]?.insertAdjacentElement('afterend', element)});
	return objects;
}
