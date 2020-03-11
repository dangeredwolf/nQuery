export default (objects, ...elements) => {
	elements.forEach(element => objects[0].insertAdjacentElement('afterend', element));
	return objects;
}
