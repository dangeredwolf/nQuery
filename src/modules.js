let m = [];

import eventHandler from "./eventHandler.js";

import addClass from "./modules/addClass.mjs";
m.push(addClass);

import append from "./modules/append.mjs";
m.push(append);

import attr from "./modules/attr.mjs";
m.push(attr);

let blur = (...a) => eventHandler("blur", ...a);
m.push(blur);

let click = (...a) => eventHandler("click", ...a);
m.push(click);

let change = (...a) => eventHandler("change", ...a);
m.push(change);

import data from "./modules/data.mjs";
m.push(data);

let dblclick = (...a) => eventHandler("dblclick", ...a);
m.push(dblclick);

import each from "./modules/each.mjs";
m.push(each);

import first from "./modules/first.mjs";
m.push(first);

import hasClass from "./modules/hasClass.mjs";
m.push(hasClass);

import height from "./modules/height.mjs";
m.push(height);

import hide from "./modules/hide.mjs";
m.push(hide);

import html from "./modules/html.mjs";
m.push(html);

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

import show from "./modules/show.mjs";
m.push(show);

import toggleClass from "./modules/toggleClass.mjs";
m.push(toggleClass);

export default m;
