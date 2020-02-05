let m_window = [];
let m_document = [];
let m = [];

// document

import ready from "./document/ready.mjs";
m.push(ready);

// element

import addClass from "./element/addClass.mjs";
m.push(addClass);

import append from "./element/append.mjs";
m.push(append);

import attr from "./element/attr.mjs";
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

let hover = (...a) => eventHandler("mouseover", ...a);
m.push(hover);

import html from "./element/html.mjs";
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

import on from "./element/on.mjs";
m.push(on);

import one from "./element/one.mjs";
m.push(one);

import off from "./element/off.mjs";
m.push(off);

let resize = (...a) => eventHandler("resize", ...a);
m.push(resize);
m_window.push(resize); // also should work on window

import remove from "./element/remove.mjs";
m.push(remove);

import removeClass from "./element/removeClass.mjs";
m.push(removeClass);

let scroll = (...a) => eventHandler("scroll", ...a);
m.push(scroll);
m_window.push(scroll); // also should work on window

import show from "./element/show.mjs";
m.push(show);

import text from "./element/text.mjs";
m.push(text);

import toggleClass from "./element/toggleClass.mjs";
m.push(toggleClass);

import width from "./element/width.mjs";
m.push(width);

export {m, m_document, m_window}
