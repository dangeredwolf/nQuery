# nQuery
A small, modular, fast alternative to jQuery.

nQuery is currently in **Alpha**. It is therefore not recommended that you use nQuery in production yet.

### N stands for Nano

At less than 5 KB minified, it's way smaller than jQuery 3.4.1's 87 KB size. It makes nQuery viable even for simple webpages.

### N stands for Nitro

nQuery is fast, and was designed from the beginning to offer simple, jQuery-compatible calls, but cutting out overhead and getting you closer to the raw attributes, functions, and events the browser already provides for you. 

### nQuery is Familiar

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

* Chrome 49+ 
* Microsoft Edge 15+ (And all Chromium versions)
* Firefox 52+
* Opera 36+
* Safari 10+
* iOS 10+
* IE support is **not** guaranteed and requires transpilation

If IE11 compatibility is a must, you can transpile to ES5 using Babel (use `npm run babel`). However, you negate some of the file size and performance benefits. While we will make reasonable efforts to make sure it works with IE11, support is *not* guaranteed with babel or browsers not listed above.
