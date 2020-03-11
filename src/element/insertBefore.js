import {normalizeElementArray} from "../utils.js";

export default (objects, ...elements) => {
	objects.forEach(obj => elements.forEach(element => normalizeElementArray(element).forEach(realElement => obj.insertBefore(realElement))));
	return objects;
}
