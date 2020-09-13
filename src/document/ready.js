export default (objects, func) => {
	if (window.nQuery.__ready) {
		(func ? func : (objects || (() => {})))();
	} else {
		window.nQuery.__internal_r.push(func);
	}
}
