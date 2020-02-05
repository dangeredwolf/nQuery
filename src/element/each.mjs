export default (o, f) => {
	o.forEach((a, i) => {f(i)})
	return o;
}
