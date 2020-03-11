import nQueryPromise from "./../class/nQueryPromise.js";

export default (...a) => {

	var request = new XMLHttpRequest;

	let promise = new nQueryPromise((resolve, reject) => {
		let settings = a[1] ? a[1] : a[0];

		if (typeof a[0] === "string") {
			if (typeof a[1] !== "object") {
				settings = {url:a[0]}
			} else {
				settings.url = a[0]
			}
		}

		request.open(settings.method || "GET", settings.url, typeof settings.async === "undefined" ? true : settings.async, settings.username, settings.password);

		if (settings.dataType) {
			request.overrideMimeType(settings.dataType);
		}

		request.addEventListener("load", () => {
			var res = request.responseText;

			try {
				res = JSON.parse(res);
			} catch(e) {}
			resolve(res);
		});

		request.addEventListener("error", reject);
		request.addEventListener("abort", reject);


		let str;

		if (typeof request.body === "object") {
			str = JSON.stringify(request.body);
		} else {
			str = request.body;
		}

		request.send(str);
	});

	return promise;
}
