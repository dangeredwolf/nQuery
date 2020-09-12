import eventHandler from "./src/eventHandler.js";
let e = eventHandler;
import handler from "./src/addEventHandler.js";

let m_window = [];
let m_document = [];
let m_properties = {};
let m_global = [];
let m = [];

// global
// globals are accessed by nQuery.X()

import ajax from "./src/global/ajax.js";
m_global.ajax = ajax;

import ajaxPrefilter from "./src/global/ajaxPrefilter.js";
m_global.ajaxPrefilter = ajaxPrefilter;
m_document.ajaxPrefilter = ajaxPrefilter;

import ajaxSuccess from "./src/global/ajaxSuccess.js";
m_global.ajaxSuccess = ajaxSuccess;
m_document.ajaxSuccess = ajaxSuccess;

import Deferred from "./src/global/Deferred.js";
m_global.Deferred = Deferred;

import extend from "./src/global/extend.js";
m_global.extend = extend;

import now from "./src/global/now.js";
m_global.now = now;

import type from "./src/global/type.js";
m_global.type = type;

import support from "./src/global/support.js";
m_global.support = support;

import when from "./src/global/when.js";
m_global.when = when;

// properties
// Properties apply to nQueryObjects and are static

import jquery from "./src/properties/jquery.js";
m_properties.jquery = jquery;

// document

import ready from "./src/document/ready.js";
m_document.ready = ready;
m_global.ready = ready; // ready is also accessible globally (nQuery.ready)

// element

import add from "./src/element/add.js";
m.add = add;

import addClass from "./src/element/addClass.js";
m.addClass = addClass;

import after from "./src/element/after.js";
m.after = after;

import append from "./src/element/append.js";
m.append = append;

import attr from "./src/element/attr.js";
m.attr = attr;

import children from "./src/element/children.js";
m.children = children;

handler(m, "blur");
handler(m, "click");
handler(m, "change");
handler(m, "contextmenu");

import css from "./src/element/css.js";
m.css = css;

import data from "./src/element/data.js";
m.data = data;

handler(m, "dblclick");

import each from "./src/element/each.js";
m.each = each;

import find from "./src/element/find.js";
m.find = find;

import first from "./src/element/first.js";
m.first = first;

import hasClass from "./src/element/hasClass.js";
m.hasClass = hasClass;

import height from "./src/element/height.js";
m.height = height;

import hide from "./src/element/hide.js";
m.hide = hide;

handler(m, "hover");

import html from "./src/element/html.js";
m.html = html;

import insertBefore from "./src/element/insertBefore.js";
m.insertBefore = insertBefore;

import is from "./src/element/is.js";
m.is = is;
m_window.is = is;

handler(m, "mousedown");
handler(m, "mouseenter");
handler(m, "mouseleave");
handler(m, "mousemove");
handler(m, "mouseout");
handler(m, "mouseover");
handler(m, "mouseup");

import next from "./src/element/next.js";
m.next = next;

import on from "./src/element/on.js";
m.on = on;
m_document.on = on;
m_window.on = on;
// alias for legacy "bind"
m.bind = on;
m_document.bind = on;
m_window.bind = on;

import one from "./src/element/one.js";
m.one = one;
m_document.one = one;
m_window.one = one;

import off from "./src/element/off.js";
m.off = off;
m_document.off = off;
m_window.off = off;

import outerHeight from "./src/element/outerHeight.js";
m.outerHeight = outerHeight;

import outerWidth from "./src/element/outerWidth.js";
m.outerWidth = outerWidth;

import parents from "./src/element/parents.js";
m.parents = parents;

import parent from "./src/element/parent.js";
m.parent = parent;

import position from "./src/element/position.js";
m.position = position;

import prepend from "./src/element/prepend.js";
m.prepend = prepend;

import prev from "./src/element/prev.js";
m.prev = prev;

handler(m, "resize");
handler(m_window, "resize"); // also should work on window

import remove from "./src/element/remove.js";
m.remove = remove;

import removeAttr from "./src/element/removeAttr.js";
m.removeAttr = removeAttr;

import removeClass from "./src/element/removeClass.js";
m.removeClass = removeClass;

import replaceWith from "./src/element/replaceWith.js";
m.replaceWith = replaceWith;

handler(m, "scroll");
handler(m_window, "scroll"); // also should work on window

import scrollTop from "./src/element/scrollTop.js";
m.scrollTop = scrollTop;

import show from "./src/element/show.js";
m.show = show;

import siblings from "./src/element/siblings.js";
m.siblings = siblings;

import text from "./src/element/text.js";
m.text = text;

import toggleClass from "./src/element/toggleClass.js";
m.toggleClass = toggleClass;

import trigger from "./src/element/trigger.js";
m.trigger = trigger;
m_window.trigger = trigger; // also should work on window
m_document.trigger = trigger; // also should work on window

import width from "./src/element/width.js";
m.width = width;

export {m, m_document, m_window, m_properties, m_global}
