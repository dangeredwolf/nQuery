import eventHandler from "./eventHandler.js";

export default (moduleSet, eventName) => {
	moduleSet[eventName] = (...args) => eventHandler(eventName, ...args)
}
