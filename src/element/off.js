import {splitCSSClasses} from "../utils.js";

export default (objects, eventName, ...args) => {
	// Remove all event listeners if not passed with eventName
	objects.forEach(obj => {
		if (typeof obj.__nq_event === "undefined") {
			return;
		}

		if (!eventName) {
			for (let i = 0; i < obj.__nq_event.length; i++) {
				var e = obj.__nq_event[i];
				obj.removeEventListener(e.type, e);
			}
		} else {
			splitCSSClasses(eventName).forEach(eventNames => {
				for (let i = 0; i < obj.__nq_event.length; i++) {
					var e = obj.__nq_event[i];
					if (e.type === eventNames) {
						obj.removeEventListener(e.type, e);
					}
				}
			})
			objects.forEach(obj => obj.removeEventListener(eventName, ...args));
		}
	});

	return objects;
}
