export default class nQueryPlugins {
	constructor() {
		return new Proxy(this, this);
	}
	set (target, plugin, val) {
		window.nQueryObject.prototype[plugin] = function() {
			val.apply(this, arguments);
		}
		return true;
	}
	get (target, plugin) {
		console.log(plugin)
		if (plugin === "extend") {
			return function(exts) {
				for (let ext in exts) {
					nQueryObject.prototype[ext] = function() {
						exts[ext].apply(this, arguments)
					}
				}
			}
		}
		return window.nQueryObject.prototype[plugin];
	}
}
