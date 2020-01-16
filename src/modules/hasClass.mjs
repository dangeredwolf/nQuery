import {splitCSSClasses} from "../utils.js";

export default (o, ...a) => {
	let r = false;
	o.forEach(i => splitCSSClasses(a).forEach(c => r = r || i.classList.contains(c)));
	return r;
}
