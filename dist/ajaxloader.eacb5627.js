// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"js/leaflet/ajaxloader.js":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  function a(b, c, d) {
    var e = a.resolve(b);

    if (null == e) {
      d = d || b, c = c || "root";
      var f = new Error('Failed to require "' + d + '" from "' + c + '"');
      throw f.path = d, f.parent = c, f.require = !0, f;
    }

    var g = a.modules[e];
    return g.exports || (g.exports = {}, g.client = g.component = !0, g.call(this, g.exports, a.relative(e), g)), g.exports;
  }

  a.modules = {}, a.aliases = {}, a.resolve = function (b) {
    "/" === b.charAt(0) && (b = b.slice(1));

    for (var c = [b, b + ".js", b + ".json", b + "/index.js", b + "/index.json"], d = 0; d < c.length; d++) {
      var b = c[d];
      if (a.modules.hasOwnProperty(b)) return b;
      if (a.aliases.hasOwnProperty(b)) return a.aliases[b];
    }
  }, a.normalize = function (a, b) {
    var c = [];
    if ("." != b.charAt(0)) return b;
    a = a.split("/"), b = b.split("/");

    for (var d = 0; d < b.length; ++d) {
      ".." == b[d] ? a.pop() : "." != b[d] && "" != b[d] && c.push(b[d]);
    }

    return a.concat(c).join("/");
  }, a.register = function (b, c) {
    a.modules[b] = c;
  }, a.alias = function (b, c) {
    if (!a.modules.hasOwnProperty(b)) throw new Error('Failed to alias "' + b + '", it does not exist');
    a.aliases[c] = b;
  }, a.relative = function (b) {
    function c(a, b) {
      for (var c = a.length; c--;) {
        if (a[c] === b) return c;
      }

      return -1;
    }

    function d(c) {
      var e = d.resolve(c);
      return a(e, b, c);
    }

    var e = a.normalize(b, "..");
    return d.resolve = function (d) {
      var f = d.charAt(0);
      if ("/" == f) return d.slice(1);
      if ("." == f) return a.normalize(e, d);
      var g = b.split("/"),
          h = c(g, "deps") + 1;
      return h || (h = 0), d = g.slice(0, h + 1).join("/") + "/deps/" + d;
    }, d.exists = function (b) {
      return a.modules.hasOwnProperty(d.resolve(b));
    }, d;
  }, a.register("calvinmetcalf-setImmediate/lib/index.js", function (a, b, c) {
    "use strict";

    function d() {
      var a,
          b = 0,
          c = g;

      for (g = []; a = c[b++];) {
        a();
      }
    }

    var e,
        f = [b("./nextTick"), b("./mutation"), b("./postMessage"), b("./messageChannel"), b("./stateChange"), b("./timeout")],
        g = [];
    f.some(function (a) {
      var b = a.test();
      return b && (e = a.install(d)), b;
    });

    var h = function h(a) {
      var b, c;
      return arguments.length > 1 && "function" == typeof a && (c = Array.prototype.slice.call(arguments, 1), c.unshift(void 0), a = a.bind.apply(a, c)), 1 === (b = g.push(a)) && e(d), b;
    };

    h.clear = function (a) {
      return a <= g.length && (g[a - 1] = function () {}), this;
    }, c.exports = h;
  }), a.register("calvinmetcalf-setImmediate/lib/nextTick.js", function (a) {
    "use strict";

    a.test = function () {
      return "object" == (typeof process === "undefined" ? "undefined" : _typeof(process)) && "[object process]" === Object.prototype.toString.call(process);
    }, a.install = function () {
      return process.nextTick;
    };
  }), a.register("calvinmetcalf-setImmediate/lib/postMessage.js", function (a, b) {
    "use strict";

    var c = b("./global");
    a.test = function () {
      if (!c.postMessage || c.importScripts) return !1;
      var a = !0,
          b = c.onmessage;
      return c.onmessage = function () {
        a = !1;
      }, c.postMessage("", "*"), c.onmessage = b, a;
    }, a.install = function (a) {
      function b(b) {
        b.source === c && b.data === d && a();
      }

      var d = "com.calvinmetcalf.setImmediate" + Math.random();
      return c.addEventListener ? c.addEventListener("message", b, !1) : c.attachEvent("onmessage", b), function () {
        c.postMessage(d, "*");
      };
    };
  }), a.register("calvinmetcalf-setImmediate/lib/messageChannel.js", function (a, b) {
    "use strict";

    var c = b("./global");
    a.test = function () {
      return !!c.MessageChannel;
    }, a.install = function (a) {
      var b = new c.MessageChannel();
      return b.port1.onmessage = a, function () {
        b.port2.postMessage(0);
      };
    };
  }), a.register("calvinmetcalf-setImmediate/lib/stateChange.js", function (a, b) {
    "use strict";

    var c = b("./global");
    a.test = function () {
      return "document" in c && "onreadystatechange" in c.document.createElement("script");
    }, a.install = function (a) {
      return function () {
        var b = c.document.createElement("script");
        return b.onreadystatechange = function () {
          a(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null;
        }, c.document.documentElement.appendChild(b), a;
      };
    };
  }), a.register("calvinmetcalf-setImmediate/lib/timeout.js", function (a) {
    "use strict";

    a.test = function () {
      return !0;
    }, a.install = function (a) {
      return function () {
        setTimeout(a, 0);
      };
    };
  }), a.register("calvinmetcalf-setImmediate/lib/global.js", function (a, b, c) {
    c.exports = "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global ? global : this;
  }), a.register("calvinmetcalf-setImmediate/lib/mutation.js", function (a, b) {
    "use strict";

    var c = b("./global"),
        d = c.MutationObserver || c.WebKitMutationObserver;
    a.test = function () {
      return d;
    }, a.install = function (a) {
      var b = new d(a),
          e = c.document.createElement("div");
      return b.observe(e, {
        attributes: !0
      }), c.addEventListener("unload", function () {
        b.disconnect(), b = null;
      }, !1), function () {
        e.setAttribute("drainQueue", "drainQueue");
      };
    };
  }), a.register("lie/lie.js", function (a, b, c) {
    function d(a) {
      function b(a, b) {
        return d(function (c, d) {
          k.push({
            resolve: a,
            reject: b,
            resolver: c,
            rejecter: d
          });
        });
      }

      function c(a, c) {
        return l ? l(a, c) : b(a, c);
      }

      function h(a, b) {
        for (var d, h, i = a ? "resolve" : "reject", j = 0, m = k.length; m > j; j++) {
          d = k[j], h = d[i], "function" == typeof h ? g(f, h, b, d.resolver, d.rejecter) : a ? d.resolver(b) : d.rejecter(b);
        }

        l = e(c, b, a);
      }

      function i(a) {
        l || h(!0, a);
      }

      function j(a) {
        l || h(!1, a);
      }

      if (!(this instanceof d)) return new d(a);
      var k = [],
          l = !1;
      this.then = c;

      try {
        a(function (a) {
          a && "function" == typeof a.then ? a.then(i, j) : i(a);
        }, j);
      } catch (m) {
        j(m);
      }
    }

    function e(a, b, c) {
      return function (e, h) {
        var i = c ? e : h;
        return "function" != typeof i ? d(function (b, c) {
          a(b, c);
        }) : d(function (a, c) {
          g(f, i, b, a, c);
        });
      };
    }

    function f(a, b, c, d) {
      try {
        var e = a(b);
        e && "function" == typeof e.then ? e.then(c, d) : c(e);
      } catch (f) {
        d(f);
      }
    }

    var g = b("immediate");
    c.exports = d;
  }), a.alias("calvinmetcalf-setImmediate/lib/index.js", "lie/deps/immediate/lib/index.js"), a.alias("calvinmetcalf-setImmediate/lib/nextTick.js", "lie/deps/immediate/lib/nextTick.js"), a.alias("calvinmetcalf-setImmediate/lib/postMessage.js", "lie/deps/immediate/lib/postMessage.js"), a.alias("calvinmetcalf-setImmediate/lib/messageChannel.js", "lie/deps/immediate/lib/messageChannel.js"), a.alias("calvinmetcalf-setImmediate/lib/stateChange.js", "lie/deps/immediate/lib/stateChange.js"), a.alias("calvinmetcalf-setImmediate/lib/timeout.js", "lie/deps/immediate/lib/timeout.js"), a.alias("calvinmetcalf-setImmediate/lib/global.js", "lie/deps/immediate/lib/global.js"), a.alias("calvinmetcalf-setImmediate/lib/mutation.js", "lie/deps/immediate/lib/mutation.js"), a.alias("calvinmetcalf-setImmediate/lib/index.js", "lie/deps/immediate/index.js"), a.alias("calvinmetcalf-setImmediate/lib/index.js", "immediate/index.js"), a.alias("calvinmetcalf-setImmediate/lib/index.js", "calvinmetcalf-setImmediate/index.js"), a.alias("lie/lie.js", "lie/index.js"), L.Util.Promise = a("lie");
}(), L.Util.ajax = function (url, options) {
  "use strict";

  if (options = options || {}, options.jsonp) return L.Util.ajax.jsonp(url, options);
  var request,
      cancel,
      out = L.Util.Promise(function (resolve, reject) {
    var Ajax;
    cancel = reject, Ajax = void 0 === window.XMLHttpRequest ? function () {
      try {
        return new ActiveXObject("Microsoft.XMLHTTP.6.0");
      } catch (a) {
        try {
          return new ActiveXObject("Microsoft.XMLHTTP.3.0");
        } catch (b) {
          reject("XMLHttpRequest is not supported");
        }
      }
    } : window.XMLHttpRequest;
    var response;
    request = new Ajax(), request.open("GET", url), request.onreadystatechange = function () {
      4 === request.readyState && (request.status < 400 && options.local || 200 === request.status ? (window.JSON ? response = JSON.parse(request.responseText) : options.evil && (response = eval("(" + request.responseText + ")")), resolve(response)) : request.status ? reject(request.statusText) : reject("Attempted cross origin request without CORS enabled"));
    }, request.send();
  });
  return out.then(null, function (a) {
    return request.abort(), a;
  }), out.abort = cancel, out;
}, L.Util.jsonp = function (a, b) {
  b = b || {};
  var c,
      d,
      e,
      f,
      g = document.getElementsByTagName("head")[0],
      h = L.DomUtil.create("script", "", g),
      i = L.Util.Promise(function (i, j) {
    f = j;
    var k = b.cbParam || "callback";
    b.callbackName ? c = b.callbackName : (e = "_" + ("" + Math.random()).slice(2), c = "L.Util.jsonp.cb." + e), h.type = "text/javascript", e && (L.Util.jsonp.cb[e] = function (a) {
      g.removeChild(h), delete L.Util.jsonp.cb[e], i(a);
    }), d = -1 === a.indexOf("?") ? a + "?" + k + "=" + c : a + "&" + k + "=" + c, h.src = d;
  }).then(null, function (a) {
    return g.removeChild(h), delete L.Util.ajax.cb[e], a;
  });
  return i.abort = f, i;
}, L.Util.jsonp.cb = {}, L.GeoJSON.AJAX = L.GeoJSON.extend({
  defaultAJAXparams: {
    dataType: "json",
    callbackParam: "callback",
    local: !1,
    middleware: function middleware(a) {
      return a;
    }
  },
  initialize: function initialize(a, b) {
    this.urls = [], a && ("string" == typeof a ? this.urls.push(a) : "function" == typeof a.pop ? this.urls = this.urls.concat(a) : (b = a, a = void 0));
    var c = L.Util.extend({}, this.defaultAJAXparams);

    for (var d in b) {
      this.defaultAJAXparams.hasOwnProperty(d) && (c[d] = b[d]);
    }

    this.ajaxParams = c, this._layers = {}, L.Util.setOptions(this, b), this.on("data:loaded", function () {
      this.filter && this.refilter(this.filter);
    }, this);
    var e = this;
    this.urls.length > 0 && L.Util.Promise(function (a) {
      a();
    }).then(function () {
      e.addUrl();
    });
  },
  clearLayers: function clearLayers() {
    return this.urls = [], L.GeoJSON.prototype.clearLayers.call(this), this;
  },
  addUrl: function addUrl(a) {
    var b = this;
    a && ("string" == typeof a ? b.urls.push(a) : "function" == typeof a.pop && (b.urls = b.urls.concat(a)));
    var c = b.urls.length,
        d = 0;
    b.fire("data:loading"), b.urls.forEach(function (a) {
      "json" === b.ajaxParams.dataType.toLowerCase() ? L.Util.ajax(a, b.ajaxParams).then(function (a) {
        var c = b.ajaxParams.middleware(a);
        b.addData(c), b.fire("data:progress", c);
      }, function (a) {
        b.fire("data:progress", {
          error: a
        });
      }) : "jsonp" === b.ajaxParams.dataType.toLowerCase() && L.Util.jsonp(a, b.ajaxParams).then(function (a) {
        var c = b.ajaxParams.middleware(a);
        b.addData(c), b.fire("data:progress", c);
      }, function (a) {
        b.fire("data:progress", {
          error: a
        });
      });
    }), b.on("data:progress", function () {
      ++d === c && b.fire("data:loaded");
    });
  },
  refresh: function refresh(a) {
    a = a || this.urls, this.clearLayers(), this.addUrl(a);
  },
  refilter: function refilter(a) {
    "function" != typeof a ? (this.filter = !1, this.eachLayer(function (a) {
      a.setStyle({
        stroke: !0,
        clickable: !0
      });
    })) : (this.filter = a, this.eachLayer(function (b) {
      a(b.feature) ? b.setStyle({
        stroke: !0,
        clickable: !0
      }) : b.setStyle({
        stroke: !1,
        clickable: !1
      });
    }));
  }
}), L.geoJson.ajax = function (a, b) {
  return new L.GeoJSON.AJAX(a, b);
};
},{"process":"node_modules/process/browser.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50474" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/leaflet/ajaxloader.js"], null)
//# sourceMappingURL=/ajaxloader.eacb5627.js.map