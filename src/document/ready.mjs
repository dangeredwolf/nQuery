export default (func) => {
	if (nQuery.__ready) {
		(func || function(){})();
	} else {
		nQuery.__internal_r.push(func);
	}
}
