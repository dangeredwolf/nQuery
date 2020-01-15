let m = [];

import addClass from "./modules/addClass.mjs";
m.push(addClass);

import append from "./modules/append.mjs";
m.push(append);

import on from "./modules/on.mjs";
m.push(on);

import off from "./modules/off.mjs";
m.push(off);

import remove from "./modules/remove.mjs";
m.push(remove);

import removeClass from "./modules/removeClass.mjs";
m.push(removeClass);

export default m;
