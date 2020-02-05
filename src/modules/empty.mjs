export default o => {
	o.forEach(i => {while (i.firstChild) {
		i.removeChild(i.firstChild);
	}});
	return o;
}
