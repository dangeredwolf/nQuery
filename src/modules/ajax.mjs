export default function() {
	let settings = arguments[1] ? arguments[1] : arguments[0];

	if (typeof arguments[0] === "string") {
		if (typeof arguments[1] !== "object") {
			settings = {url:arguments[0]}
		} else {
			arguments[1].url = arguments[0]
		}
	}
	var request = new XMLHttpRequest;

	request.open(settings.method || "GET", settings.url, typeof settings.async === "undefined" ? true : settings.async, settings.username, settings.password);

	if (settings.dataType) {
		settings.overrideMimeType(settings.dataType)
	}

	return {
		done: (func) => {
			request.addEventListener("load", () => {
				var res = request.responseText;

				try {
					res = JSON.parse(res);
				} catch(e) {}

				func(res);
			});
			request.send();
		},
		fail:(func) => {
			request.addEventListener("error", func);
			request.addEventListener("abort", func);
		},
		always:(func) => {
			request.addEventListener("load", func);
			request.addEventListener("error", func);
			request.addEventListener("abort", func);
		}
	}
}
