export default class nQueryObject extends Array {
	constructor(objects) {
		super();
		// for X in Y loops are somehow unbelievably slow here.. it's kinda amazing... so instead we use a fast incremental loop
		for (var i = 0; i < objects.length; i++) {
			this[i] = objects[i];
		}
	}
}
