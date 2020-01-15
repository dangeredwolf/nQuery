import {jQuery} from "../nanoQuery.js";

export default function(obj, ...args) {
	return jQuery(obj[0]);
}
