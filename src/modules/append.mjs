import {normalizeElementArray} from "../utils.js";

export default (o, ...a) => {
	o.forEach(i => a.forEach(j => normalizeElementArray(j).forEach(k => i.appendChild(k))));
	return o;
}
