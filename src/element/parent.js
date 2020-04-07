import {nQuery} from "../main.js";

export default objects => {
	return nQuery(objects[0]?.parentElement);
}
