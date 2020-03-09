export default () => {
	let a = arguments;
	let settings = a[1] ? a[1] : a[0];

	if (typeof a[0] === "string") {
		if (typeof a[1] !== "object") {
			settings = {url:a[0]}
		} else {
			a[1].url = a[0]
		}
	}
	var request = new XMLHttpRequest;

	request.open(settings.method || "GET", settings.url, typeof settings.async === "undefined" ? true : settings.async, settings.username, settings.password);

	if (settings.dataType)
		settings.overrideMimeType(settings.dataType);

	return {
		done: (func) => {
			request.addEventListener("load", () => {
				var res = request.responseText;

				try {
					res = JSON.parse(res);
				} catch(e) {}

				func(res);
			});
			let str;

			if (request.body) {
				try {
					str = JSON.stringify(request.body);
				} catch(e) {}
			}

			request.send(str);
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
