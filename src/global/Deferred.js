import nQueryPromise from "./../class/nQueryPromise.js";

export default func => {
	let promise = new nQueryPromise();
	func(promise);
	return promise;
}
