"use strict";

(function (exports) {
  'use strict';

  function normalizeElementArray(obj) {
    // https://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array
    if (obj instanceof HTMLElement) {
      obj = [obj];
      return obj;
    } else if (obj instanceof Array || obj instanceof NodeList) {
      return obj;
    } else {
      console.warn("Someone passed me a non-element object?");
      console.info(obj);
      return obj;
    }
  }

  function splitCSSClasses() {
    var arr = [];
    arguments.forEach(function (i) {
      if (typeof i === "string") {
        i.split(" ").forEach(function (j) {
          return arr.push(j);
        });
      } else if (i instanceof Array) {
        i.forEach(function (j) {
          return arr.push(j);
        });
      }
    });
    return arr;
  }

  function eventHandler(eventName, obj) {
    var _arguments = arguments;
    obj.forEach(function (i) {
      if (args.length === 0) {
        i.dispatchEvent(new Event(eventName, _arguments.splice(2)));
      } else {
        i.addEventListener(eventName, _arguments.splice(2));
      }
    });
    return obj;
  }

  function addClass(obj) {
    var _arguments2 = arguments;
    obj.forEach(function (i) {
      splitCSSClasses(_arguments2.splice(1)).forEach(function (cssClass) {
        return i.classList.add(cssClass);
      });
    });
    return obj;
  }

  function append(obj) {
    var _arguments3 = arguments;
    obj.forEach(function (i) {
      _arguments3.splice(1).forEach(function (j) {
        normalizeElementArray(j).forEach(function (k) {
          return i.appendChild(k);
        });
      });
    });
    return obj;
  }

  function attr(obj, attribute, value) {
    var returnMe = obj;
    obj.forEach(function (i) {
      if (typeof value === "undefined") {
        returnMe = i.getAttribute(attribute);
      } else {
        i.setAttribute(attribute, value);
      }
    });
    return obj;
  }

  function data(obj, attribute, value) {
    var returnMe = obj;
    obj.forEach(function (i) {
      if (typeof value === "undefined") {
        returnMe = i.getAttribute("data-" + attribute);
      } else {
        i.setAttribute("data-" + attribute, value);
      }
    });
    return obj;
  }

  function first(obj) {
    return nQuery(obj[0]);
  }

  function hasClass(obj) {
    var _arguments4 = arguments;
    result = false;
    obj.forEach(function (i) {
      splitCSSClasses(_arguments4.splice(1)).forEach(function (cssClass) {
        return result = result || i.classList.contains(cssClass);
      });
    });
    return result;
  }

  function on(obj) {
    var _arguments5 = arguments;
    obj.forEach(function (i) {
      i.addEventListener(_arguments5.splice(1));
    });
    return obj;
  }

  function one(obj) {
    var _arguments6 = arguments;
    obj.forEach(function (i) {
      i.addEventListener(_arguments6[1], function () {
        _arguments6[2]();

        i.removeEventListener(_arguments6[1]);
      }, _arguments6[3]);
    });
    return obj;
  }

  function off(obj) {
    var _arguments7 = arguments;
    obj.forEach(function (i) {
      i.removeEventListener(_arguments7.splice(1));
    });
    return obj;
  }

  function remove(obj) {
    obj.forEach(function (i) {
      return i.remove();
    }); // i.parentElement.removeChild(i)

    return obj;
  }

  function removeClass(obj) {
    var _arguments8 = arguments;
    obj.forEach(function (i) {
      splitCSSClasses(_arguments8.splice(1)).forEach(function (cssClass) {
        return i.classList.remove(cssClass);
      });
    });
    return obj;
  }

  var m = [];
  m.push(addClass);
  m.push(append);
  m.push(attr);

  var blur = function blur() {
    eventHandler("blur", arguments[0], arguments[1], arguments[2]);
  };

  m.push(blur);

  var click = function click() {
    eventHandler("click", arguments[0], arguments[1], arguments[2]);
  };

  m.push(click);

  var change = function change() {
    eventHandler("change", arguments[0], arguments[1], arguments[2]);
  };

  m.push(change);
  m.push(data);

  var dblclick = function dblclick() {
    eventHandler("dblclick", arguments[0], arguments[1], arguments[2]);
  };

  m.push(dblclick);
  m.push(first);
  m.push(hasClass);
  m.push(on);
  m.push(one);
  m.push(off);
  m.push(remove);
  m.push(removeClass);
  console.log(m);

  function nQuery(object) {
    if (typeof object === "string") {
      object = document.querySelectorAll(object);
    } else {
      object = normalizeElementArray(object);
    }

    var m = nQuery.fn;

    for (var i in m) {
      if (i.name) {
        object[i.name] = function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return i.apply(void 0, [object].concat(args));
        };
      }
    }

    return object;
  }

  nQuery._internal__readyFuncs = [];
  nQuery.fn = m;

  nQuery.fn.extend = function () {
    arguments.forEach(function (i) {
      return nQuery.fn.push(i);
    });
  };

  nQuery.ready = function (func) {
    nQuery._internal__readyFuncs.push(func);
  };

  document.addEventListener("DOMContentLoaded", function () {
    nQuery._internal__readyFuncs.forEach(function (f) {
      f();
    });
  });
  window.$ = nQuery; // window.jQuery = nQuery;

  window.nQuery = nQuery;
  exports.nQuery = nQuery;
  return exports;
})({});