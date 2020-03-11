import {splitCSSClasses} from "../utils.js";

export default (objects, ...args) => {
	objects.forEach(obj => args.forEach(attr => obj.removeAttribute(attr)));
	return objects;
}
