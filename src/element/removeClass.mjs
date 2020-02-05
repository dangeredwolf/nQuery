import {splitCSSClasses} from "../utils.js";

export default (o, ...a) => {
	o.forEach(i => splitCSSClasses(a).forEach(c => i.classList.remove(c)));
	return o;
}
