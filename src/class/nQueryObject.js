export default class nQueryObject extends Array {
	constructor(a) {
		super();
		// for X in Y loops are somehow unbelievably slow here.. it's kinda amazing... so instead we use a fast incremental loop
		for (var i = 0; i < a.length; i++) {
			this[i] = a[i];
		}
	}
}
