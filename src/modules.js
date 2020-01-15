let m = [];

import eventHandler from "./eventHandler.js";

import addClass from "./modules/addClass.mjs";
m.push(addClass);

import append from "./modules/append.mjs";
m.push(append);

import attr from "./modules/attr.mjs";
m.push(attr);

let blur = function(...args){ eventHandler("blur",...args) }
m.push(blur);

let click = function(...args){ eventHandler("click",...args) }
m.push(click);

let change = function(...args){ eventHandler("change",...args) }
m.push(change);

import data from "./modules/data.mjs";
m.push(data);

let dblclick = function(...args){ eventHandler("dblclick",...args) }
m.push(dblclick);

import first from "./modules/first.mjs";
m.push(first);

import hasClass from "./modules/hasClass.mjs";
m.push(hasClass);

import on from "./modules/on.mjs";
m.push(on);

import one from "./modules/one.mjs";
m.push(one);

import off from "./modules/off.mjs";
m.push(off);

import remove from "./modules/remove.mjs";
m.push(remove);

import removeClass from "./modules/removeClass.mjs";
m.push(removeClass);

export default m;
