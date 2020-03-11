import {nQuery} from "../main.js";

export default objects => {
	return objects[0] ? nQuery(objects[0].parentElement) : nQuery();
}
