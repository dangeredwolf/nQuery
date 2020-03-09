let m_window = [];
let m_document = [];
let m_properties = {};
let m_global = [];
let m = [];

// global
// globals are accessed by nQuery.X()

import ajax from "./global/ajax.js";
m_global.ajax = ajax;

import now from "./global/now.js";
m_global.now = now;

import type from "./global/type.js";
m_global.type = type;

// properties
// Properties apply to nQueryObjects and are static

import jquery from "./properties/jquery.js";
m_properties["jquery"] = jquery;

// document

import ready from "./document/ready.js";
m.ready = ready;
m_global.ready = ready; // ready is also accessible globally (nQuery.ready)

// element

import addClass from "./element/addClass.js";
m.addClass = addClass;

import append from "./element/append.js";
m.append = append;

import attr from "./element/attr.js";
m.attr = attr;

import eventHandler from "./eventHandler.js";
let e = eventHandler;

m.blur = (...a) => e("blur", ...a);
m.click = (...a) => e("click", ...a);
m.change = (...a) => e("change", ...a);

m.contextmenu = (...a) => e("contextmenu", ...a);

import data from "./element/data.js";
m.data = data;

m.dblclick = (...a) => e("dblclick", ...a);

import each from "./element/each.js";
m.each = each;

import first from "./element/first.js";
m.first = first;

import hasClass from "./element/hasClass.js";
m.hasClass = hasClass;

import height from "./element/height.js";
m.height = height;

import hide from "./element/hide.js";
m.hide = hide;

let hover = (...a) => e("mouseover", ...a);
m.hover = hover;

import html from "./element/html.js";
m.html = html;

m.mousedown = (...a) => e("mousedown", ...a);
m.mouseenter = (...a) => e("mouseenter", ...a);
m.mouseleave = (...a) => e("mouseleave", ...a);
m.mousemove = (...a) => e("mousemove", ...a);
m.mouseout = (...a) => e("mouseout", ...a);
m.mouseover = (...a) => e("mouseover", ...a);
m.mouseup = (...a) => e("mouseup", ...a);

import on from "./element/on.js";
m.on = on;

import one from "./element/one.js";
m.one = one;

import off from "./element/off.js";
m.off = off;

let resize = (...a) => e("resize", ...a);
m.resize = resize;
m_window.resize = resize; // also should work on window

import remove from "./element/remove.js";
m.remove = remove;

import removeClass from "./element/removeClass.js";
m.removeClass = removeClass;

let scroll = (...a) => e("scroll", ...a);
m.scroll = scroll;
m_window.scroll = scroll; // also should work on window

import show from "./element/show.js";
m.show = show;

import text from "./element/text.js";
m.text = text;

import toggleClass from "./element/toggleClass.js";
m.toggleClass = toggleClass;

import width from "./element/width.js";
m.width = width;

export {m, m_document, m_window, m_properties, m_global}
