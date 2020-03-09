let m_window = [];
let m_document = [];
let m_properties = {};
let m_global = [];
let m = [];

// global
// globals are accessed by nQuery.X()

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

let blur = (...a) => eventHandler("blur", ...a);
m.push(blur);

let click = (...a) => eventHandler("click", ...a);
m.push(click);

let change = (...a) => eventHandler("change", ...a);
m.push(change);

let contextmenu = (...a) => eventHandler("contextmenu", ...a);
m.push(contextmenu);

import data from "./element/data.js";
m.push(data);

let dblclick = (...a) => eventHandler("dblclick", ...a);
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

let hover = (...a) => eventHandler("mouseover", ...a);
m.push(hover);

import html from "./element/html.js";
m.push(html);

let mousedown = (...a) => eventHandler("mousedown", ...a);
m.push(mousedown);

let mouseenter = (...a) => eventHandler("mouseenter", ...a);
m.push(mouseenter);

let mouseleave = (...a) => eventHandler("mouseleave", ...a);
m.push(mouseleave);

let mousemove = (...a) => eventHandler("mousemove", ...a);
m.push(mousemove);

let mouseout = (...a) => eventHandler("mouseout", ...a);
m.push(mouseout);

let mouseover = (...a) => eventHandler("mouseover", ...a);
m.push(mouseover);

let mouseup = (...a) => eventHandler("mouseup", ...a);
m.push(mouseup);

import on from "./element/on.js";
m.push(on);

import one from "./element/one.js";
m.push(one);

import off from "./element/off.js";
m.push(off);

let resize = (...a) => eventHandler("resize", ...a);
m.push(resize);
m_window.push(resize); // also should work on window

import remove from "./element/remove.js";
m.push(remove);

import removeClass from "./element/removeClass.js";
m.push(removeClass);

let scroll = (...a) => eventHandler("scroll", ...a);
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
