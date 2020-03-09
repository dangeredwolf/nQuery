let m_window = [];
let m_document = [];
let m_properties = {};
let m_global = [];
let m = [];

// global
// globals are accessed by nQuery.X()

// import("./global/ajax.js").then(ajax => m_global.push(ajax))

import ajax from "./global/ajax.js";
m_global.push(ajax);

import now from "./global/now.js";
m_global.push(now);

import type from "./global/type.js";
m_global.push(type);

// properties
// Properties apply to nQueryObjects and are static

import jquery from "./properties/jquery.js";
m_properties["jquery"] = jquery;

// document

import ready from "./document/ready.js";
m.push(ready);
m_global.push(ready); // ready is also accessible globally (nQuery.ready)

// element

import addClass from "./element/addClass.js";
m.push(addClass);

import append from "./element/append.js";
m.push(append);

import attr from "./element/attr.js";
m.push(attr);

import eventHandler from "./eventHandler.js";
let e = eventHandler;

let blur = (...a) => e("blur", ...a);
m.push(blur);

let click = (...a) => e("click", ...a);
m.push(click);

let change = (...a) => e("change", ...a);
m.push(change);

let contextmenu = (...a) => e("contextmenu", ...a);
m.push(contextmenu);

import data from "./element/data.js";
m.push(data);

let dblclick = (...a) => e("dblclick", ...a);
m.push(dblclick);

import each from "./element/each.js";
m.push(each);

import first from "./element/first.js";
m.push(first);

import hasClass from "./element/hasClass.js";
m.push(hasClass);

import height from "./element/height.js";
m.push(height);

import hide from "./element/hide.js";
m.push(hide);

let hover = (...a) => e("mouseover", ...a);
m.push(hover);

import html from "./element/html.js";
m.push(html);

let mousedown = (...a) => e("mousedown", ...a);
m.push(mousedown);

let mouseenter = (...a) => e("mouseenter", ...a);
m.push(mouseenter);

let mouseleave = (...a) => e("mouseleave", ...a);
m.push(mouseleave);

let mousemove = (...a) => e("mousemove", ...a);
m.push(mousemove);

let mouseout = (...a) => e("mouseout", ...a);
m.push(mouseout);

let mouseover = (...a) => e("mouseover", ...a);
m.push(mouseover);

let mouseup = (...a) => e("mouseup", ...a);
m.push(mouseup);

import on from "./element/on.js";
m.push(on);

import one from "./element/one.js";
m.push(one);

import off from "./element/off.js";
m.push(off);

let resize = (...a) => e("resize", ...a);
m.push(resize);
m_window.push(resize); // also should work on window

import remove from "./element/remove.js";
m.push(remove);

import removeClass from "./element/removeClass.js";
m.push(removeClass);

let scroll = (...a) => e("scroll", ...a);
m.push(scroll);
m_window.push(scroll); // also should work on window

import show from "./element/show.js";
m.push(show);

import text from "./element/text.js";
m.push(text);

import toggleClass from "./element/toggleClass.js";
m.push(toggleClass);

import width from "./element/width.js";
m.push(width);

export {m, m_document, m_window, m_properties, m_global}
