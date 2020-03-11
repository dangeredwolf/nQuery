export default (objects, func) => {
	if (nQuery.__ready) {
		(func ? func : (objects || (() => {})))();
	} else {
		nQuery.__internal_r.push(func);
	}
}
