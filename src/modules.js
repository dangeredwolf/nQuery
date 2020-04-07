import eventHandler from "./eventHandler.js";
let e = eventHandler;
import handler from "./addEventHandler.js";

let m_window = [];
let m_document = [];
let m_properties = {};
let m_global = [];
let m = [];

// global
// globals are accessed by nQuery.X()

import ajax from "./global/ajax.js";
m_global.ajax = ajax;

import ajaxPrefilter from "./global/ajaxPrefilter.js";
m_global.ajaxPrefilter = ajaxPrefilter;
m_document.ajaxPrefilter = ajaxPrefilter;

import ajaxSuccess from "./global/ajaxSuccess.js";
m_global.ajaxSuccess = ajaxSuccess;
m_document.ajaxSuccess = ajaxSuccess;

import extend from "./global/extend.js";
m_global.extend = extend;

import now from "./global/now.js";
m_global.now = now;

import type from "./global/type.js";
m_global.type = type;

import support from "./global/support.js";
m_global.support = support;

import when from "./global/when.js";
m_global.when = when;

// properties
// Properties apply to nQueryObjects and are static

import jquery from "./properties/jquery.js";
m_properties["jquery"] = jquery;

// document

import ready from "./document/ready.js";
m_document.ready = ready;
m_global.ready = ready; // ready is also accessible globally (nQuery.ready)

// element

import add from "./element/add.js";
m.add = add;

import addClass from "./element/addClass.js";
m.addClass = addClass;

import after from "./element/after.js";
m.after = after;

import append from "./element/append.js";
m.append = append;

import attr from "./element/attr.js";
m.attr = attr;

import children from "./element/children.js";
m.children = children;

handler(m, "blur");
handler(m, "click");
handler(m, "change");
handler(m, "contextmenu");

import css from "./element/css.js";
m.css = css;

import data from "./element/data.js";
m.data = data;

handler(m, "dblclick");

import each from "./element/each.js";
m.each = each;

import find from "./element/find.js";
m.find = find;

import first from "./element/first.js";
m.first = first;

import hasClass from "./element/hasClass.js";
m.hasClass = hasClass;

import height from "./element/height.js";
m.height = height;

import hide from "./element/hide.js";
m.hide = hide;

handler(m, "hover");

import html from "./element/html.js";
m.html = html;

import insertBefore from "./element/insertBefore.js";
m.insertBefore = insertBefore;

import is from "./element/is.js";
m.is = is;
m_window.is = is;

handler(m, "mousedown");
handler(m, "mouseenter");
handler(m, "mouseleave");
handler(m, "mousemove");
handler(m, "mouseout");
handler(m, "mouseover");
handler(m, "mouseup");

import next from "./element/next.js";
m.next = next;

import on from "./element/on.js";
m.on = on;
m_document.on = on;
m_window.on = on;
// alias for legacy "bind"
m.bind = on;
m_document.bind = on;
m_window.bind = on;

import one from "./element/one.js";
m.one = one;
m_document.one = one;
m_window.one = one;

import off from "./element/off.js";
m.off = off;
m_document.off = off;
m_window.off = off;

import outerHeight from "./element/outerHeight.js";
m.outerHeight = outerHeight;

import outerWidth from "./element/outerWidth.js";
m.outerWidth = outerWidth;

import parents from "./element/parents.js";
m.parents = parents;

import parent from "./element/parent.js";
m.parent = parent;

import position from "./element/position.js";
m.position = position;

import prepend from "./element/prepend.js";
m.prepend = prepend;

import prev from "./element/prev.js";
m.prev = prev;

handler(m, "resize");
handler(m_window, "resize"); // also should work on window

import remove from "./element/remove.js";
m.remove = remove;

import removeAttr from "./element/removeAttr.js";
m.removeAttr = removeAttr;

import removeClass from "./element/removeClass.js";
m.removeClass = removeClass;

import replaceWith from "./element/replaceWith.js";
m.replaceWith = replaceWith;

handler(m, "scroll");
handler(m_window, "scroll"); // also should work on window

import show from "./element/show.js";
m.show = show;

import siblings from "./element/siblings.js";
m.siblings = siblings;

import text from "./element/text.js";
m.text = text;

import toggleClass from "./element/toggleClass.js";
m.toggleClass = toggleClass;

import trigger from "./element/trigger.js";
m.trigger = trigger;
m_window.trigger = trigger; // also should work on window
m_document.trigger = trigger; // also should work on window

import width from "./element/width.js";
m.width = width;

export {m, m_document, m_window, m_properties, m_global}
