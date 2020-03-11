let prom = Promise;

prom.prototype.done = prom.prototype.then;
prom.prototype.fail = prom.prototype.catch;
prom.prototype.always = prom.prototype.finally;

let nQueryPromise = prom;

export default nQueryPromise;
