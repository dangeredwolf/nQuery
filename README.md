# nQuery [![Build Status](https://travis-ci.com/dangeredwolf/nQuery.svg?branch=master)](https://travis-ci.com/dangeredwolf/nQuery) [![devDependencies Status](https://david-dm.org/dangeredwolf/nQuery/dev-status.svg)](https://david-dm.org/dangeredwolf/nQuery?type=dev)

A small, modular, fast alternative to jQuery.

nQuery is currently in **Alpha**. It is therefore not recommended that you use nQuery in production yet.

### N stands for Nano

At less than 5 KB minified, it's way smaller than jQuery 3.4.1's 87 KB size. It makes nQuery viable even for simple webpages.

*(Fun fact: this README file is larger than a minified version of nQuery)*

### N stands for Nitro

nQuery is fast, and was designed from the beginning to offer simple, jQuery-compatible calls, but cutting out overhead and getting you closer to the raw attributes, functions, and events the browser already provides for you. 

`test/test.html` provides a few simple performance tests which you can run and verify for yourself.

We ran these tests using nQuery 0.2.0 in Chrome 79

------

Add/Remove Class (Queries and (Chained) Function Calls):

* **jQuery 3.4.1 - 13.7±0.5 ns avg**
* **nQuery 0.2.0 - 6.2±0.1 ns avg**
* **Raw JS (querySelector/classList) - 5.5±0.1 ns avg**

Having nearly double the overall performance is great in larger applications.

------

Add/Remove Class (Function Calls):

* **jQuery 3.4.1 - 11.7±0.3 ns avg**
* **nQuery 0.2.0 - 4.8±0.1 ns avg**
* **Raw JS (querySelector/classList) - 4.9±0.05 ns avg**

What's really impressive is that nQuery was able to beat plain javascript by 0.1 ns, something that came up even over multiple test runs.

------

Query Calls:

* **jQuery 3.4.1 - 1.8±0.1 ns avg**
* **nQuery 0.2.0 - 1.3±0.1 ns avg**
* **Raw JS - 0.6±0.05 ns avg**

------

### nQuery is familiar to jQuery users

Example code:
```
$(document).ready(() => {

    console.log("Hello world! The document is ready.");
    
    $("button").click(() => {
        console.log("You clicked the button!");
        $("button").first().addClass("clicked").removeClass("notclicked");
    });
    
});
```

nQuery can act as a drop-in replacement for jQuery in simple applications.

### nQuery is designed for modern browsers

nQuery is built with modern browser features in mind.

By default, nQuery requires a JavaScript engine that supports basic ECMAScript 2015 features. (Arrow functions, classes).

### nQuery is free and open source software

nQuery is released under the permissive [MIT license](https://github.com/dangeredwolf/nQuery/blob/master/LICENSE).

### Supported browsers

If there's a compatibility issue with one of these browsers, please report the issue so we can fix it.

* Chrome 60+ 
* Microsoft Edge 15+
* Firefox 55+
* Opera 47+
* Safari 10+
* iOS 10+
* IE support is **not** guaranteed and requires transpilation

If IE11 compatibility is a must, you can transpile to ES5 using Babel (use `npm run babel`). However, you negate some of the file size and performance benefits. While we will make reasonable efforts to make sure it works with IE11, support is *not* guaranteed with babel or browsers not listed above.

### Building / Testing

We build using [Node.js](https://nodejs.org/en/). A recent Current or LTS version should work fine.

nQuery does not have runtime dependencies, only dev dependencies.

Build using `npm run build` (generates `nquery.js` file)

Minify for production using `npm run minify` (generates `nquery.min.js` file)

If you need to build an IE-compatible version, use `npm run babel`.

---------------------

We have a dedicated test sandbox which also contains the benchmarks at `test/test.html`.

Note: This is set up by default to use the uncompressed, development version of nQuery.

### Selective builds

If you only need certain functions, any non-core function can be removed, and you can add your own using the primary function tree or with `nQuery.fn.extend` (work in progress, not fully functional).

`src/modules.js` is where the module index is stored. You can make your modifications here.

```
import append from "./element/append.mjs";
m.push(append);
```

Each entry looks something like this.

* `m` is the module list for Element objects
* `m_window` is the module list for Window objects
* `m_document` is the module list for Document objects

If a function works in more than one place, for example, the scroll event (works on elements or window), you can push it to multiple arrays.

```
let scroll = (...args) => eventHandler("scroll", ...args);
m.push(scroll);
m_window.push(scroll); // you can push to both!
```

### Global variables

**`window.nQuery`**

nQuery accessor. Always set.

**`window.$`**

nQuery accessor shorthand. Set by default.

**`window.jQuery`**

nQuery accessor. Optional; useful if you have code that accessed jQuery using `window.jQuery` and you're switching to nQuery.

**`window.nQueryObject`**

The root nQuery object so your code can compare whether something is an `instanceof nQueryObject`. You should not access this alone, as it's a superclass without methods.

**`window.nQueryDocument`**
**`window.nQueryElement`**
**`window.nQueryWindow`**

Extended classes of the `nQueryObject`, but these are the objects that correspond with what functions it support. `$("p")` is an instance of `nQueryObject` and `nQueryElement` but NOT `nQueryWindow`, as an example.

Creating new objects with these alone is possible, but not recommended. `window.$`/`window.nQuery` will always create the correct object given the input.
