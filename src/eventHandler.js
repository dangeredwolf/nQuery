import {assert} from "./utils.js";

export default (eventName, o, ...a) => {
	o.forEach(i => a.length === 0 ? i.dispatchEvent(new Event(eventName, ...a)) : i.addEventListener(eventName, ...a));
	return o;
}
