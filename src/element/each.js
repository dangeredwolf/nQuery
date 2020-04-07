export default (objects, func) => {
	objects.forEach((obj, i) => {func?.(i)})
	return objects;
}
