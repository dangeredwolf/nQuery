export default objects => parseFloat(getComputedStyle(objects[0]).width.replace("px", ""));
