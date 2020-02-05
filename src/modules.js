let m = [];

import eventHandler from "./eventHandler.js";

import addClass from "./element/addClass.mjs";
m.push(addClass);

import append from "./element/append.mjs";
m.push(append);

import attr from "./element/attr.mjs";
m.push(attr);

let blur = (...a) => eventHandler("blur", ...a);
m.push(blur);

let click = (...a) => eventHandler("click", ...a);
m.push(click);

let change = (...a) => eventHandler("change", ...a);
m.push(change);

import data from "./element/data.mjs";
m.push(data);

let dblclick = (...a) => eventHandler("dblclick", ...a);
m.push(dblclick);

import each from "./element/each.mjs";
m.push(each);

import first from "./element/first.mjs";
m.push(first);

import hasClass from "./element/hasClass.mjs";
m.push(hasClass);

import height from "./element/height.mjs";
m.push(height);

import hide from "./element/hide.mjs";
m.push(hide);

import html from "./element/html.mjs";
m.push(html);

import on from "./element/on.mjs";
m.push(on);

import one from "./element/one.mjs";
m.push(one);

import off from "./element/off.mjs";
m.push(off);

import remove from "./element/remove.mjs";
m.push(remove);

import removeClass from "./element/removeClass.mjs";
m.push(removeClass);

import show from "./element/show.mjs";
m.push(show);

import text from "./element/text.mjs";
m.push(text);

import toggleClass from "./element/toggleClass.mjs";
m.push(toggleClass);

export default m;
