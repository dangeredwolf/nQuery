/*
	nQuery Config

	This is where any configurable compile-time options are stored.
*/

const config = {
	use$:true,
	usejQuery:true
}

/*
	nQuery Modules List

	This is where you can add or remove any modules that are loaded into nQuery
*/

// Event handler helper function
import handler from "./src/addEventHandler.js";

let windowModules = []; // Modules for Window objects
let documentModules = []; // Modules for Document objects
let objectModules = []; // Modules accessible from any nQueryObject (but not global)
let globalModules = []; // Modules accessible via window.$ / window.nQuery
let elementModules = []; // Modules accessible from Element objects

// Global modules
// globals are accessed by nQuery.X()

import ajax from "./src/global/ajax.js";
globalModules.ajax = ajax;

import ajaxComplete from "./src/global/ajaxComplete.js";
globalModules.ajaxComplete = ajaxComplete;
documentModules.ajaxComplete = ajaxComplete;

import ajaxPrefilter from "./src/global/ajaxPrefilter.js";
globalModules.ajaxPrefilter = ajaxPrefilter;
documentModules.ajaxPrefilter = ajaxPrefilter;

import ajaxSuccess from "./src/global/ajaxSuccess.js";
globalModules.ajaxSuccess = ajaxSuccess;
documentModules.ajaxSuccess = ajaxSuccess;

import Deferred from "./src/global/Deferred.js";
globalModules.Deferred = Deferred;

import eachGlobal from "./src/global/each.js";
globalModules.each = eachGlobal;

import extend from "./src/global/extend.js";
globalModules.extend = extend;

import now from "./src/global/now.js";
globalModules.now = now;

import trim from "./src/global/trim.js";
globalModules.trim = trim;

import type from "./src/global/type.js";
globalModules.type = type;

import support from "./src/global/support.js";
globalModules.support = support;

import when from "./src/global/when.js";
globalModules.when = when;

// Object modules

import jquery from "./src/properties/jquery.js";
objectModules.jquery = jquery;

// Document modules

import ready from "./src/document/ready.js";
documentModules.ready = ready;
globalModules.ready = ready; // ready is also accessible globally (nQuery.ready)

// Element modules

import add from "./src/element/add.js";
elementModules.add = add;

import addClass from "./src/element/addClass.js";
elementModules.addClass = addClass;

import after from "./src/element/after.js";
elementModules.after = after;

import append from "./src/element/append.js";
elementModules.append = append;

import attr from "./src/element/attr.js";
elementModules.attr = attr;

import children from "./src/element/children.js";
elementModules.children = children;

handler(elementModules, "blur");
handler(elementModules, "click");
handler(elementModules, "change");
handler(elementModules, "contextmenu");

import css from "./src/element/css.js";
elementModules.css = css;

import data from "./src/element/data.js";
elementModules.data = data;

handler(elementModules, "dblclick");

import each from "./src/element/each.js";
elementModules.each = each;

import find from "./src/element/find.js";
elementModules.find = find;

import first from "./src/element/first.js";
elementModules.first = first;

import hasClass from "./src/element/hasClass.js";
elementModules.hasClass = hasClass;

import height from "./src/element/height.js";
elementModules.height = height;
windowModules.height = height;
documentModules.height = height;

import hide from "./src/element/hide.js";
elementModules.hide = hide;

handler(elementModules, "hover");

import html from "./src/element/html.js";
elementModules.html = html;

import insertBefore from "./src/element/insertBefore.js";
elementModules.insertBefore = insertBefore;

import is from "./src/element/is.js";
elementModules.is = is;
windowModules.is = is;

handler(elementModules, "mousedown");
handler(elementModules, "mouseenter");
handler(elementModules, "mouseleave");
handler(elementModules, "mousemove");
handler(elementModules, "mouseout");
handler(elementModules, "mouseover");
handler(elementModules, "mouseup");

import next from "./src/element/next.js";
elementModules.next = next;

import on from "./src/element/on.js";
elementModules.on = on;
documentModules.on = on;
windowModules.on = on;
// alias for legacy "bind"
elementModules.bind = on;
documentModules.bind = on;
windowModules.bind = on;

import one from "./src/element/one.js";
elementModules.one = one;
documentModules.one = one;
windowModules.one = one;

import off from "./src/element/off.js";
elementModules.off = off;
documentModules.off = off;
windowModules.off = off;

import outerHeight from "./src/element/outerHeight.js";
elementModules.outerHeight = outerHeight;

import outerWidth from "./src/element/outerWidth.js";
elementModules.outerWidth = outerWidth;

import parents from "./src/element/parents.js";
elementModules.parents = parents;

import parent from "./src/element/parent.js";
elementModules.parent = parent;

import position from "./src/element/position.js";
elementModules.position = position;

import prepend from "./src/element/prepend.js";
elementModules.prepend = prepend;

import prev from "./src/element/prev.js";
elementModules.prev = prev;

handler(elementModules, "resize");
handler(windowModules, "resize"); // also should work on window

import remove from "./src/element/remove.js";
elementModules.remove = remove;

import removeAttr from "./src/element/removeAttr.js";
elementModules.removeAttr = removeAttr;

import removeClass from "./src/element/removeClass.js";
elementModules.removeClass = removeClass;

import replaceWith from "./src/element/replaceWith.js";
elementModules.replaceWith = replaceWith;

handler(elementModules, "scroll");
handler(windowModules, "scroll"); // also should work on window

import scrollTop from "./src/element/scrollTop.js";
elementModules.scrollTop = scrollTop;

import show from "./src/element/show.js";
elementModules.show = show;

import siblings from "./src/element/siblings.js";
elementModules.siblings = siblings;

import text from "./src/element/text.js";
elementModules.text = text;

import toggleClass from "./src/element/toggleClass.js";
elementModules.toggleClass = toggleClass;

import trigger from "./src/element/trigger.js";
elementModules.trigger = trigger;
windowModules.trigger = trigger; // also should work on window
documentModules.trigger = trigger; // also should work on window

import width from "./src/element/width.js";
elementModules.width = width;
windowModules.width = width;
documentModules.width = width;

export {elementModules, documentModules, windowModules, objectModules, globalModules, config}
