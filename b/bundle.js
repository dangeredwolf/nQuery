"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(function (exports) {
  'use strict';

  function normalizeElementArray(obj) {
    // https://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array
    if (obj instanceof Array || obj instanceof NodeList) {
      return obj;
    } else if (obj instanceof HTMLElement) {
      obj = [obj];
      return obj;
    } else {
      console.warn("Someone passed me a non-element object?");
      console.info(obj);
      return obj;
    }
  }

  function splitCSSClasses() {
    var arr = [];

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.forEach(function (i) {
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

    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    obj.forEach(function (i) {
      if (_arguments.length === 0) {
        i.dispatchEvent(_construct(Event, [eventName].concat(args)));
      } else {
        i.addEventListener.apply(i, [eventName].concat(args));
      }
    });
    return obj;
  }

  function addClass(obj) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    obj.forEach(function (i) {
      splitCSSClasses(args).forEach(function (cssClass) {
        return i.classList.add(cssClass);
      });
    });
    return obj;
  }

  function append(obj) {
    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    obj.forEach(function (i) {
      args.forEach(function (j) {
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
    for (var _len5 = arguments.length, args = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
      args[_key5 - 1] = arguments[_key5];
    }

    var result = false;
    obj.forEach(function (i) {
      splitCSSClasses(args).forEach(function (cssClass) {
        return result = result || i.classList.contains(cssClass);
      });
    });
    return result;
  }

  function on(obj, eventName) {
    for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
      args[_key6 - 2] = arguments[_key6];
    }

    obj.forEach(function (i) {
      i.addEventListener.apply(i, [eventName].concat(args));
    });
    return obj;
  }

  function one(obj, eventName, func) {
    for (var _len7 = arguments.length, args = new Array(_len7 > 3 ? _len7 - 3 : 0), _key7 = 3; _key7 < _len7; _key7++) {
      args[_key7 - 3] = arguments[_key7];
    }

    obj.forEach(function (i) {
      i.addEventListener.apply(i, [eventName, function () {
        i.removeEventListener(eventName);
      }].concat(args));
    });
    return obj;
  }

  function off(obj, eventName) {
    for (var _len8 = arguments.length, args = new Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
      args[_key8 - 2] = arguments[_key8];
    }

    obj.forEach(function (i) {
      i.removeEventListener.apply(i, [eventName].concat(args));
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
    for (var _len9 = arguments.length, args = new Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
      args[_key9 - 1] = arguments[_key9];
    }

    obj.forEach(function (i) {
      splitCSSClasses(args).forEach(function (cssClass) {
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

  function ajax() {
    var settings = arguments[1] ? arguments[1] : arguments[0];

    if (typeof arguments[0] === "string") {
      if (_typeof(arguments[1]) !== "object") {
        settings = {
          url: arguments[0]
        };
      } else {
        arguments[1].url = arguments[0];
      }
    }

    var request = new XMLHttpRequest();
    request.open(settings.method || "GET", settings.url, typeof settings.async === "undefined" ? true : settings.async, settings.username, settings.password);

    if (settings.dataType) {
      settings.overrideMimeType(settings.dataType);
    }

    return {
      done: function done(func) {
        request.addEventListener("load", function () {
          var res = request.responseText;

          try {
            res = JSON.parse(res);
          } catch (e) {}

          func(res);
        });
        request.send();
      },
      fail: function fail(func) {
        request.addEventListener("error", func);
        request.addEventListener("abort", func);
      },
      always: function always(func) {
        request.addEventListener("load", func);
        request.addEventListener("error", func);
        request.addEventListener("abort", func);
      }
    };
  }

  console.log(m);

  function nQuery(object) {
    if (typeof object === "string") {
      object = document.querySelectorAll(object);
    }

    if (object instanceof Document) {
      object.ready = function (func) {
        nQuery._internal__readyFuncs.push(func);
      };
    }

    object = normalizeElementArray(object); // if (typeof object === "undefined" || object.length <= 0) {
    //
    // }

    var m = nQuery.fn;

    var _loop = function _loop(i) {
      if (m[i].name) {
        object[m[i].name] = function () {
          for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
            args[_key10] = arguments[_key10];
          }

          return m[i].apply(m, [object].concat(args));
        };
      } else {
        object[i] = function () {
          for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
            args[_key11] = arguments[_key11];
          }

          return m[i].apply(m, [object].concat(args));
        };
      }
    };

    for (var i in m) {
      _loop(i);
    }

    return object;
  }

  nQuery._internal__readyFuncs = [];
  nQuery.fn = m;
  nQuery.ajax = ajax;

  nQuery.type = function (a) {
    return _typeof(a);
  };

  nQuery.now = function (_) {
    return Date.now();
  };

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
  window.$ = nQuery;
  window.jQuery = nQuery;
  window.nQuery = nQuery;
  exports.nQuery = nQuery;
  return exports;
})({});