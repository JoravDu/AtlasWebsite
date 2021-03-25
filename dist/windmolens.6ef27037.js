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
})({"js/leaflet/windmolens.js":[function(require,module,exports) {
var molens = {
  "type": "FeatureCollection",
  "name": "windmolens",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [{
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.210555556000031, 52.001388889000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.298027778000063, 51.944872222000072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.339952778000053, 52.356002778000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.863333333000071, 52.394444444000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.143144444000029, 52.077788889000018, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.178888889000064, 52.184444444000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.617611111000031, 53.19825277800004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.215161111000044, 51.386294444000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.762625, 51.602883333000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.894722222000042, 51.537222222000082, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.581394444000068, 52.379136111000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.000511111000037, 50.85329722200003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.556936111000027, 51.753725, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.925555556000062, 51.609444444000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.905758333000051, 52.225208333000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.859905556000058, 53.193825, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.253522222000072, 52.047144444000025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.821388889000048, 52.172222222000066, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.771388889000036, 52.224722222000082, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.143055556000036, 52.488611111000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.484722222000073, 52.181944444000059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.75755, 53.14131111100005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.545261111000059, 52.519052778000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.198888889000044, 52.795555556000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.57, 52.003611111000041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.79156111100002, 53.084558333000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.860277778000068, 51.223611111000075, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.846666667000023, 50.875, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.487777778000066, 51.909166667000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.322005556000022, 52.080416667000073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.478611111000021, 51.925, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.324083333000033, 52.071655556000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.873444444000029, 52.33608888900006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.916944444000023, 52.345, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.874166667000053, 52.337777778000032, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.488588889000027, 51.90715555600007, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.493372222000062, 51.908758333000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.483502778000059, 51.917755556000031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.484722222000073, 51.903333333000035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.469444444000032, 51.91055555600007, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.48868055600002, 51.917019444000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.109016667000049, 52.085769444000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.485555556000065, 51.903888889000029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.321066667000025, 52.078547222000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.487752778000072, 51.905113889000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.320775, 52.079958333000036, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.46966666700007, 51.911333333000066, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.33, 51.678055556000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.324688889000072, 52.081936111000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.321755556000028, 52.07909722200003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.065508333000024, 51.560219444000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.901133333000075, 52.216158333000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.791666667000073, 53.198055556000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.337519444000066, 52.07886666700005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.431111111000064, 51.912222222000082, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.471388889000025, 51.9225, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.217313889000024, 52.375708333000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.485136111000032, 51.917666667000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.4725, 51.924444444000066, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.468652778000035, 51.922172222000029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.7625, 52.3075, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.906944444000033, 51.156666667000088, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.841388889000029, 51.705555556000029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.034166667000022, 51.956944444000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.108333333000076, 52.08944444400003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.03888888900002, 51.946388889000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.10777777800007, 52.089722222000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.13735, 52.339094444000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.071944444000053, 51.96, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.107355556000073, 52.090288889000078, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.07666666700004, 51.951388889000029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.361666667000066, 52.495833333000064, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.046111111000073, 52.759444444000046, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.868055556000058, 53.41277777800007, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.935833333000062, 53.084722222000032, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.89722222200004, 53.0575, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.699444444000051, 52.4875, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.86, 50.9425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.967777778000027, 51.5125, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.0825, 51.964166667000022, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.065, 51.943333333000048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.663333333000026, 51.783888889000075, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.774166667000031, 52.876111111000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.935833333000062, 53.171666667000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.051111111000067, 51.799722222000078, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.739722222000069, 51.850833333000026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.593222222000066, 52.478197222000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.591122222000024, 52.478569444000073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.770038889000034, 52.517125, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.087647222000044, 51.796375, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.051744444000065, 52.816608333000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.926111111000067, 51.970277778000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.574838889000033, 52.593994444000032, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.657727778000037, 51.705280556000041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.435661111000059, 52.848202778000022, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.389722222000046, 52.606388889000073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.973586111000031, 52.863858333000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.634014444000059, 51.300165083000088, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.986436111000046, 52.836944444000039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.705172222000044, 52.566305556000039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.058333333000064, 52.908611111000027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.062283333000039, 52.859155556000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1648, 51.66625, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.804197222000027, 53.456788889000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.925833333000072, 50.831944444000051, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.12138888900006, 52.090555556000012, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.360277778000068, 52.012222222000048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.585616667000068, 52.476902778000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.35138888900002, 51.886944444000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.945, 52.754444444000065, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.342222222000032, 51.882222222000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.727222222000023, 51.445555556000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.57555555600004, 51.669722222000075, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.291944444000023, 51.872777778000064, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.275, 51.896666667000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.026388889000032, 51.959166667000027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.802222222000069, 50.985555556000072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.253333333000058, 51.88, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.106944444000021, 51.9425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.78, 51.3425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.796111111000074, 50.981666667000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.795833333000076, 50.976944444000026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.367777778000061, 51.884722222000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.844444444000032, 51.708611111000032, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.444166667000047, 51.911388889000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.295833333000076, 51.87611111100005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.29527777800007, 51.873333333000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.563055556000052, 51.683611111000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.907222222000031, 51.154444444000035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.171111111000073, 51.933888889000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.072222222000051, 52.103055556000072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.370833333000064, 51.988611111000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.843333333000032, 51.711111111000029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.728888889000075, 51.443888889000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.772222222000039, 51.3425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.792777778000072, 52.399722222000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.10777777800007, 51.945, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.799722222000071, 50.978611111000077, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.368888889000061, 51.882777778000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.828888889000042, 51.856111111000075, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.63472222200005, 52.472777778000072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.372777778000057, 51.882222222000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.794166667000071, 50.959166667000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.070627778000073, 51.943947222000077, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.722222222000028, 51.442222222000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.796552778000034, 50.958238889000022, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.341111111000032, 51.878055556000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.805, 50.971666667000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.843888889000027, 52.40638888900002, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.341666667000027, 51.876388889000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.338888889000032, 51.880277778000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.559722222000062, 51.682222222000064, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.689166667000052, 50.818055556000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.5837, 52.47715, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.335277778000034, 51.88, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.545555556000068, 51.681111111000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.365, 51.883888889000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.847222222000029, 52.40527777800002, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.725833333000026, 51.43972222200005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.339444444000037, 51.877777778000045, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.971944444000029, 51.223333333000021, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.018888889000038, 51.970555556000072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.880833333000055, 53.436666667000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.617519444000038, 52.491797222000059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.289166667000075, 52.075833333000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.364722222000069, 51.885, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.616747222000072, 52.491897222000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.04416666700007, 51.171666667000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.427222222000069, 51.910277778000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.403536111000051, 52.902788889000085, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.164444444000026, 52.2425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.60472222200002, 51.438055556000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.448611111000048, 51.87583333300006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.053611111000066, 52.01, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.669722222000075, 52.38805555600004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.698888889000044, 52.909166667000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.876111111000056, 51.986388889000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.835511111000074, 51.176811111000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.077222222000046, 51.607222222000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.975555556000074, 51.183888889000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.335833333000039, 52.080833333000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.466666667000027, 51.905555556000074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.437777778000054, 52.526111111000027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.461111111000037, 51.523055556000024, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.646586111000033, 52.137175, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.441616667000062, 52.236872222000038, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.8875, 52.336388889000027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.796111111000074, 52.497777778000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.884444444000053, 51.510833333000036, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595, 51.810555556000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.704166667000038, 51.526388889000017, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.669288889000029, 51.622038889000059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.805, 51.803055556000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.804166667000061, 51.82, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.622777778000057, 51.763055556000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.6775, 51.887222222000048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.378055556000049, 51.841111111000025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.804444444000069, 51.813888889000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.667222222000021, 51.891388889000041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.837777778000032, 51.708055556000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.983333333000076, 52.3675, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.394722222000041, 51.710277778000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.98277777800007, 52.372777778000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.914166667000075, 51.166111111000077, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.619444444000067, 51.936666667000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.401388889000032, 51.721388889000082, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.744166667000059, 51.825, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.744444444000067, 51.820277778000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.62916666700005, 51.76416666700004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.593333333000032, 51.892222222000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.6725, 51.8925, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.380277778000051, 51.843888889000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.805277778000061, 51.796944444000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.911944444000028, 51.17138888900007, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.839444444000037, 51.710833333000039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.597777778000022, 51.896666667000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.670555556000068, 51.888055556000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.622777778000057, 51.934166667000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.841944444000035, 51.715277778000029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.613455556000076, 52.03367222200005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.6979, 51.640163889000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.244783333000044, 51.881080556000015, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.014891667000029, 51.600147222000025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.675202778000028, 51.619911111000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.461285556000063, 52.40759444400004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.101527778000047, 52.781905556000027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.737486111000067, 52.643855556000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.000275, 51.604166667000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.510235556000055, 52.39877777800006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.415047222000055, 52.408655556000035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.836444444000052, 51.688311111000075, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589402778000021, 52.514716667000073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.020947222000075, 51.977513889000086, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.523888889000035, 52.391263889000072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.0207, 51.592191667000058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.540036111000063, 52.391802778000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.590688889000035, 52.383425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.218333333000032, 51.970277778000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.611936111000034, 52.030336111000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.302997222000045, 51.899044444000026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.70218333300005, 51.636936111000075, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.708147222000036, 51.64079166700003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.009777778000056, 53.307697222000051, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589016667000067, 52.517777778000038, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.010758333000069, 53.313305556000032, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.386388889000045, 52.07108333300004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.521158333000074, 52.392766667000039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.800738889000058, 53.455097222000056, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.023827778000054, 51.594252778000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.41373333300004, 52.413813889000039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.426632222000023, 52.402411111000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.446247222000069, 52.424540556000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.464316667000048, 52.408863889000024, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.438005278000048, 52.431993333000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.471111111000027, 52.403188889000027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.453552500000058, 52.414190278000028, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.514229722000039, 52.405013889000031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.453829444000064, 52.41778, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.748277778000045, 52.432358333000082, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.689063889000067, 51.599708333000088, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.682697222000058, 51.621033333000078, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.418066667000062, 52.40989305600003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.005269444000021, 53.308730556000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.022711111000035, 51.974619444000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.551972222000074, 52.381927778000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.019458333000046, 51.972002778000046, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.682419444000061, 51.596833333000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.526619444000062, 52.38976, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.576326944000073, 52.486354722000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.011894444000064, 51.962366667000026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.0105, 51.598641667000031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.459127500000023, 52.409415556000056, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.197747222000033, 52.235866667000046, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.876658333000023, 52.569488889000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.578594444000032, 52.380472222000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.722980556000038, 51.651669444000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.435772222000026, 52.434052222000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.55765, 52.380719444000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.4428, 52.427719167000078, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.506469444000061, 52.405805556000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.011675, 53.31035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7309, 52.64465, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.490904167000052, 52.385721944000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.04972222200007, 51.586111111000029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.703772222000054, 51.449033333000045, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.728347222000025, 51.654647222000058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.480360556000051, 52.391901389000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.518431944000042, 52.394270833000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.702147222000065, 51.64361944400008, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.298175, 51.899672222000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.723722222000049, 52.643038889000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.683183333000045, 51.599652778000056, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.584825, 52.38166666700004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.41074666700007, 52.412504444000035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.512966667000057, 52.397274444000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.57213888900003, 52.379869444000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.42223583300006, 52.406235278000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.79205, 52.42272777800008, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.53207777800003, 52.386749444000031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.450818611000045, 52.416549444000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.578275, 52.503182778000046, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.729016667000054, 52.642080556000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.873886111000047, 52.572516667000059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.462140278000049, 52.410707500000051, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.59605, 52.385705556000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.531619167000032, 52.396413889000023, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.540891667000039, 51.909094444000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.449646944000051, 52.421591389000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.288866667000036, 51.717455556000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.87055, 52.576083333000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.007166667000035, 53.311383333000038, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.47528055600003, 52.395733333000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.67937222200004, 51.617758333000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.878, 52.211872222000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.734680556000058, 52.641488889000065, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.184047222000062, 52.235913889000074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.864616667000064, 52.576208333000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.485893611000051, 52.388512500000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.016944444000046, 51.975261111000066, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.56355277800003, 52.380013889000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.6785, 51.622830556000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.5157, 52.395772222000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.736058333000074, 52.647419444000036, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.507505278000053, 52.400282778000083, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.727325, 51.651588889000031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.562908333000053, 52.497925, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.45654722200004, 52.415440556000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.721022222000045, 52.640361111000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.724158333000048, 51.654730556000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.46811027800004, 52.401902500000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.700152778000075, 51.445608333000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.40679444400007, 52.416116667000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.419238333000067, 52.40493888900005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.72675, 52.434441667000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.813341667000032, 52.426394444000024, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.550344444000076, 52.515527778000013, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.546625, 52.383611111000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.473113889000046, 52.40148861100004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.439777500000048, 52.426368889000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.52342777800004, 52.401001389000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.470138889000055, 52.400191667000058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.52934722200007, 52.388255556000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.116222222000033, 51.708277778000074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.800077778000059, 52.404027778000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.797830556000066, 52.651213889000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.313997222000069, 54.48585555600004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.739751944000034, 52.426538889000021, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.335180556000068, 52.314694444000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.437377778000041, 51.554661111000023, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.990755556000068, 51.573736111000073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.000402778000023, 51.579036111000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.564941667000028, 52.393613889000051, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.384580556000061, 54.441580556000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.695111111000074, 51.589213889000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.419030556000052, 52.280188889000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.183055556000056, 52.575833333000048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.581388889000038, 52.579444444000039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.396208333000061, 51.668922222000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.633791667000025, 51.616022222000026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.428080556000054, 53.0944, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.180558333000022, 51.664147222000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.939394444000072, 54.302825, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.302955556000029, 51.80274166700007, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.905516667000029, 54.061505556000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.657436111000038, 51.615541667000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.238888889000066, 52.606944444000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.407775, 52.273827778000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.182375, 51.660552778000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.315683333000038, 54.541033333000016, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.570730556000057, 52.532411111000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.573088889000076, 52.470019444000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.875361111000075, 51.586944444000025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.482083333000048, 51.61370555600007, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.591322222000031, 51.616386111000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.366773611000042, 52.627333056000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.80132777800003, 51.620236111000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.599005556000066, 51.607988889000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1482, 52.41668333300003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.36835, 54.389702778000064, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.151369444000068, 52.014066667000066, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.38836666700007, 54.451966667000072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.5858, 52.694694444000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.851788889000034, 54.351597222000066, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.621136111000055, 52.471972222000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.232355556000073, 51.454163889000021, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.544636111000045, 52.130352778000031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.910105556000075, 54.274994444000065, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587777778000032, 52.56472222200005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.813888889000054, 53.4625, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.24372777800005, 51.403533333000041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587227778000056, 52.758175, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.791980556000055, 51.636441667000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.774827778000031, 52.420980556000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.199869444000058, 51.934913889000036, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.956213889000026, 53.295019444000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.45805, 52.605458056000032, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.652872222000042, 52.61798611100005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.724388889000068, 51.636297222000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.421102222000059, 52.631925, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.55643333300003, 52.54690277800006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.625611111000069, 52.019280556000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.197994444000074, 51.76799166700004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.909872222000048, 54.311333333000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.92465, 54.303502778000059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.576941667000028, 52.698438889000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.135922222000033, 51.34049722200006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.590413889000046, 52.532825, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.507658333000052, 51.919536111000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.398536111000055, 51.710144444000029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.94435, 53.326463889000081, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.530675, 52.134977778000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.152686111000037, 51.934441667000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.347577778000073, 52.340005556000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.134419444000059, 51.93852222200006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.164733333000072, 52.37745, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.543722222000042, 52.39645, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.21445, 51.757586111000073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.557305556000073, 51.959852778000013, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.138444444000072, 51.658591667000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.624566667000067, 51.622047222000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.194444444000055, 52.60444444400008, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.127080556000067, 52.022975, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.565272222000033, 52.547086111000048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.791944444000023, 52.490555556000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.011961111000062, 51.57305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.539733333000072, 52.506577778000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.960522222000065, 51.992316667000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.493747222000025, 53.700544444000059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.954886111000063, 53.277647222000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.789458333000027, 52.643002778000039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58368888900003, 52.532677778000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.909908333000032, 54.304061111000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.396702778000076, 51.70246666700006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.052344444000028, 54.072491667000058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.137363889000028, 51.323325, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.448836111000048, 51.562591667000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.827758333000077, 54.274905556000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.015277778000041, 51.559722222000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.53193333300004, 51.965397222000036, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.847202778000053, 51.67276111100005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.994663889000037, 53.286052778000048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.645861111000044, 52.46726666700004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.179672222000022, 51.649663889000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.576283333000049, 52.475658333000077, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.43662222200004, 53.692477778000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.243791667000039, 51.518325, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.789219444000025, 53.451, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.9072, 51.650583333000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.669663889000049, 52.535488889000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.434541667000076, 52.578835833000021, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.246944444000064, 52.568055556000047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.793333333000021, 52.503055556000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.638358333000042, 52.822313889000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.361797222000064, 52.301058333000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.463658333000069, 51.613130556000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.108308333000025, 51.969911111000052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.677222222000069, 52.483888889000077, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.221638889000076, 51.524580556000046, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595383333000029, 52.683558333000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.175552778000053, 51.921163889000056, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.440833333000058, 53.682008333000041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.104177778000064, 51.97199722200002, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.81406666700002, 54.053944444000074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.926738889000035, 54.382877778000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.868805556000041, 51.593861111000074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.491266667000048, 53.974111111000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589586111000075, 52.774697222000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.552541667000071, 52.543686111000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.635547222000071, 52.01941944400005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.8964, 51.836947222000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.849136111000064, 51.893644444000074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.583975, 52.40465, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.26305555600004, 52.584444444000034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.87695, 51.591283333000028, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.591588889000036, 51.602005556000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.231005556000071, 51.407561111000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.876494444000059, 54.003558333000058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.986111111000071, 51.576388889000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.6055, 51.620680556000082, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.731194444000039, 51.632741667000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.843602778000047, 51.67524166700008, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.109808333000046, 51.708947222000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.62709166700006, 52.642547222000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.680552778000049, 51.588302778000077, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.108413889000076, 51.967080556000035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.691561111000056, 51.591658333000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.399269444000026, 51.644111111000022, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.62285, 52.459008333000035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.297433333000072, 54.481827778000074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.952572222000072, 51.299747222000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.800025, 52.414280556000044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.225266667000028, 51.461341667000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.133305556000039, 52.024572222000074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.150905556000055, 51.678608333000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.536727778000056, 51.967511111000071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.22415, 51.75213611100002, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.90953055600005, 54.362208333000076, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.20495, 52.430916667000083, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.988397222000061, 54.067783333000079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.867405556000051, 51.672291667000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.703333333000046, 52.476666667000075, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.947219444000041, 51.555555556000051, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.763605556000073, 51.649858333000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.708494444000053, 51.631636111000027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.414616667000075, 51.634313889000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.745826944000044, 52.408452778000019, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.442669444000046, 53.091538889000041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.785833333000029, 53.444444444000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.189158333000023, 51.937591667000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.939133333000029, 54.00331111100008, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.964352778000033, 51.985958333000035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.800708333000046, 51.712291667000038, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.597016667000049, 52.757388889000026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.025925, 54.002919444000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.536580556000047, 52.543197222000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.8, 52.522777778000041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.458308333000048, 52.28338888900003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.491222222000033, 53.994305556000022, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.53425, 51.92298055600002, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.259972222000044, 54.45993611100004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.568777778000027, 52.51334722200005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.602633333000029, 52.769786111000023, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1382, 51.662247222000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.656544444000076, 52.487855556000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.092369444000042, 54.002569444000073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.00431111100005, 53.316591667000054, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.722230556000056, 51.625405556000025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.84244166700006, 51.671975, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.952316667000048, 51.623416667000065, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.553813889000025, 51.956275, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.834019444000035, 51.673858333000048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.842283333000069, 51.599, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.075011111000038, 51.612077778000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.861388889000068, 53.45055555600004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.559708333000061, 52.406686111000056, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.837680556000066, 51.671188889000049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.174158333000037, 51.647791667000043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.190286111000034, 51.935825, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.762222222000048, 52.468333333000025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.432230556000035, 52.320627778000073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.538408333000064, 52.521236111000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.31565, 54.498433333000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.124983333000046, 52.390883333000019, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.838883333000069, 51.674563889000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.599213889000055, 51.621644444000026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.746630556000071, 53.460038889000025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.989597222000043, 53.275033333000067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.926102778000029, 51.307072222000038, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [2.975, 51.538891667000023, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.232527778000076, 51.748433333000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.168688889000066, 51.92929444400005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.885877778000065, 51.834494444000022, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.41618333300005, 54.541016667000065, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.873888889000056, 53.421944444000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.939619444000073, 54.387302778000048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.053655556000024, 51.60725, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.002533333000031, 51.567008333000039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.040525, 51.98346666700008, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.519883333000053, 51.920569444000087, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.629352778000055, 52.534433333000038, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.017916667000066, 54.307063889000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.069188889000031, 51.976927778000068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.381455556000049, 52.312936111000056, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.749755556000025, 51.504625, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.614244444000065, 51.60908888900007, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.635833333000051, 52.533477778000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.73979444400004, 51.491138889000069, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.85555555600007, 53.436388889000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.497944444000041, 53.690072222000019, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.779636111000058, 52.412272222000063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.65130833300003, 52.817330556000051, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.779061111000033, 53.449011111000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.326658333000069, 51.809577778000055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.147016667000059, 51.677569444000028, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.87675, 54.362027778000027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.5772, 52.758191667000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.653927778000025, 51.629038889000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.648688889000027, 52.438494444000064, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.681902778000052, 51.591683333000042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.121227778000048, 51.945811111000062, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.138302778000025, 51.962916667000059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.668455556000025, 52.449308333000033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.82895, 54.341547222000031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.744488889000024, 53.45566111100004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.400241667000046, 51.674888889000037, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.554383333000033, 52.52181388900005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.882222222000053, 53.437777778000061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.548169444000052, 51.923588889000023, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.831316667000067, 51.892741667000053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.018216667000048, 54.422063889000057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.116822222000053, 52.010936111000035, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.2, 52.4237, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1853, 52.4278, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.2049, 52.4309, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1945, 52.4177, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1363, 52.4041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1714, 52.4255, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1786, 52.4231, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1461, 52.3922, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1565, 52.4055, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1491, 52.408, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1418, 52.4105, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1837, 52.4047, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1766, 52.4071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1695, 52.4095, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1624, 52.4119, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1616, 52.387, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1638, 52.403, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1711, 52.4006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1785, 52.3981, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1539, 52.3896, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1384, 52.3949, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1306, 52.3975, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.174, 52.3913, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1665, 52.3939, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1589, 52.3964, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1514, 52.399, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1439, 52.4015, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1482, 52.4167, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1889, 52.4113, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1568, 52.3801, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1409, 52.3855, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1681, 52.4183, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1488, 52.3828, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1553, 52.4143, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1329, 52.3882, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.125, 52.3909, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1612, 52.4207, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1543, 52.423, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1751, 52.416, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1858, 52.4206, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1693, 52.3844, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.182, 52.4136, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1647, 52.3774, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.367657, 52.630464, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.373786, 52.626059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.380059, 52.621681, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.386054, 52.617211, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.392193, 52.612787, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.397338, 52.623013, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.398331, 52.608371, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.403492, 52.618588, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.404573, 52.603875, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.40861, 52.628804, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.409615, 52.614163, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.410709, 52.599459, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.414749, 52.624388, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.415737, 52.609746, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.416814, 52.595042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.419915, 52.634613, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.420887, 52.619953, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.421872, 52.60532, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.422947, 52.590607, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.426054, 52.630187, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.427038, 52.615536, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.428959, 52.586279, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.431681, 52.598236, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.432191, 52.625761, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.433923, 52.610558, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.43509, 52.581861, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.437813, 52.593819, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.438327, 52.621334, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.443401, 52.603741, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.443944, 52.589401, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.445302, 52.616284, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.449519, 52.599268, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.450089, 52.584973, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.454674, 52.609537, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.455708, 52.594841, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.460762, 52.605073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.240781, 52.604583, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.226756, 52.605175, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.233486, 52.602418, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.240231, 52.599643, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.246959, 52.596895, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.212474, 52.605385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.219293, 52.602693, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.226124, 52.600009, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.232926, 52.597325, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.239726, 52.594641, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.246571, 52.591948, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.253369, 52.58928, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.260197, 52.586586, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.204727, 52.602504, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.211794, 52.599895, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.218525, 52.597113, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.225438, 52.5947, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.23234, 52.592089, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.239227, 52.58945, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.246112, 52.586865, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.253026, 52.584253, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.259925, 52.58164, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.19703, 52.599452, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.204006, 52.596915, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.210982, 52.594387, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.217956, 52.591867, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.224959, 52.589338, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.231917, 52.586809, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.238889, 52.584288, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.245861, 52.581757, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.252831, 52.579227, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.196458, 52.593865, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.203534, 52.591419, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.210551, 52.588972, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.217611, 52.586525, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.22467, 52.584087, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.231699, 52.581621, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.238772, 52.579173, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.245844, 52.576724, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.252899, 52.574284, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.188869, 52.590723, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.196001, 52.588368, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.20312, 52.585977, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.210399, 52.583604, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.217397, 52.581256, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.224497, 52.578899, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.231626, 52.576533, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.238755, 52.574148, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.245853, 52.571781, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.188647, 52.585301, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.195837, 52.583001, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.203098, 52.580728, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.210227, 52.578453, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.217384, 52.576178, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.224615, 52.573858, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.2318, 52.571582, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.188802, 52.580144, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.196063, 52.577916, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.203337, 52.575697, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.21058, 52.573504, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.399563064, 51.6450388, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.403144128, 51.64242812, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.406664915, 51.63978609, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.410635095, 51.63740338, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.414912646, 51.63523967, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.255435, 51.5281, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.308233, 51.5723, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.696705, 51.6595, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.697437, 51.6589, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.351974, 51.6482, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.355061, 51.6496, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.358215, 51.651, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.36198, 51.652, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.555551, 51.6588, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.286244, 51.572, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.222397, 51.5131, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.224975, 51.5129, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.227562, 51.5128, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.230137, 51.5126, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.232713, 51.5125, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.235132, 51.5119, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.238778, 51.5107, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.39307, 51.6847, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.395248, 51.6859, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.397794, 51.6868, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.400181, 51.6878, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.401769, 51.69, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.409534, 51.6938, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.412871, 51.6947, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.415527, 51.6961, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.418164, 51.6975, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.420795, 51.6989, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.423654, 51.7002, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.708787, 51.6321, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.292198, 51.4263, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.624566, 51.6221, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.62557, 51.6199, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.628127, 51.6184, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.630839, 51.617, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.633807, 51.616, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.583791, 51.6912, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.587579, 51.6919, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.064773, 51.7087, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.068492, 51.7107, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.072627, 51.7083, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.076063, 51.7103, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.079699, 51.7079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.240711, 51.5091, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.463658, 51.6131, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.468021, 51.6133, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.47284, 51.6136, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.477717, 51.6137, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.482083, 51.6137, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.834018, 51.6739, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.838882, 51.6746, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.843601, 51.6752, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.83768, 51.6712, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.842455, 51.672, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.847246, 51.6727, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.37506, 51.6609, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.385666, 51.6646, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.387051, 51.6666, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.388422, 51.6687, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.389749, 51.6708, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.391149, 51.6729, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.392535, 51.6749, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.288866, 51.7174, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.01489, 51.6001, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.018895, 51.5976, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.023829, 51.5943, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.010501, 51.5986, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.020699, 51.5922, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.832024, 52.8287, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.655683, 51.62229, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.656557, 51.618915, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.65480456, 51.6257, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.653926779, 51.629, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.591001, 51.6163, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.591164, 51.6128, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.591127, 51.6092, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.591291, 51.6056, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.591355, 51.602, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.370623577, 51.6592, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.61422995, 51.6091, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.612103045, 51.6119, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.609887867, 51.6148, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.607626466, 51.6179, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.605498585, 51.6207, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.599332617, 51.60890689, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.599391616, 51.61233475, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.599449863, 51.61574935, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.599501668, 51.61915875, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.599540886, 51.62257622, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.40054158, 51.6758161, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.398592054, 51.67291727, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.396514327, 51.66984709, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.406769093, 51.63309954, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.410604245, 51.63040883, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.414535575, 51.62852638, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.419787384, 51.62647101, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.126938, 52.752818, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.729004, 52.642077, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.723721, 52.643038, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.719568, 52.639167, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.723721213, 52.64303816, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.719567469, 52.63916727, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.611072, 52.724234, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.605473, 52.706648, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.378874, 52.305492, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.384017, 52.392428, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.408179, 52.41509, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.409748, 52.413818, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.41459, 52.36226, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.425751, 52.372592, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.510802, 52.541161, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.567903, 52.415547, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.582044, 52.501593, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.605215, 52.724308, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.604607, 52.546595, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.617694, 52.593846, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.648671, 52.636067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.652636, 52.544698, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.652726, 52.450331, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.672685, 52.463489, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.68804, 52.566384, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.744499, 52.777858, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.745721, 52.578547, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.749524, 52.50022, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.935973, 52.724671, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595163, 52.716641, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.59519, 52.717756, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595215, 52.718882, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595241, 52.72001, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595258, 52.721122, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595292, 52.722253, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595309, 52.72339, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595344, 52.724507, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595391, 52.72675, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595369, 52.725627, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595413, 52.727874, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595432, 52.728992, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595491, 52.73124, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595457, 52.730119, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.5955, 52.732367, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595529, 52.733491, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595552, 52.734614, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595574, 52.735737, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.59561, 52.736857, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595636, 52.737978, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595658, 52.739101, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595691, 52.740229, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595716, 52.741347, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595755, 52.743594, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595721, 52.742475, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.620395, 52.588368, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.697478, 52.630328, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.801832, 52.669205, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.80503, 52.665882, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595819, 52.490309, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.754916, 52.747266, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.680168, 52.707244, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.542349, 52.570521, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.54754, 52.570019, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.566527, 52.589446, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.568844, 52.567468, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.551648, 52.363708, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.641776, 52.639353, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.648945, 52.632552, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.705857, 52.660648, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.730157, 52.615638, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.550973, 52.587817, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.552984, 52.589124, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.554994, 52.590441, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.557083, 52.591697, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.559354, 52.592841, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.561798, 52.593845, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.564403, 52.594702, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.567133, 52.595404, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.569934, 52.595933, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.572784, 52.596404, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.575634, 52.596864, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.578475, 52.597339, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58133, 52.597797, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.584172, 52.59828, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.584627, 52.55888, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58703, 52.598745, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58989, 52.599211, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.592735, 52.599676, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595581, 52.600154, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.59843, 52.600621, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.60128, 52.601086, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.604129, 52.601555, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.606981, 52.602028, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.609824, 52.602497, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.612361, 52.768827, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.612673, 52.602962, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.61448, 52.754647, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.615527, 52.603431, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.618371, 52.603901, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.621222, 52.604372, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.623821, 52.754544, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.624068, 52.604836, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.629747, 52.779445, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.737096, 52.783207, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.626191, 52.642243, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.627955, 52.640577, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.486515, 52.548327, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.576322, 52.486359, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.57824, 52.503185, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.608818, 52.764925, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.647678, 52.743957, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.654813, 52.80425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.670767, 52.542682, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.724839, 52.634326, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.373924, 52.328531, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.406788, 52.416113, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.409344, 52.367162, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.513101, 52.366206, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.51784, 52.369374, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.560082, 52.480606, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.562321, 52.459628, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.562925, 52.497912, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.572298, 52.567068, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.64671, 52.704318, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.739097, 52.832522, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.74767, 52.666305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.50533, 52.373288, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.516134, 52.383937, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.533889, 52.563886, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.534241, 52.560843, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.540034, 52.562261, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.548004, 52.573734, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.549293, 52.554758, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.550132, 52.37077, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.560653, 52.558544, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.564658, 52.584641, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.565447, 52.574793, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.56519, 52.519442, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.568197, 52.563079, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.569853, 52.574718, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.578904, 52.539585, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.579624, 52.556801, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.605428, 52.71803, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.659756, 52.69939, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.755226, 52.675891, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.328471, 52.382657, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.328688, 52.365806, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.331478, 52.383944, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.332577, 52.378926, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.332893, 52.362116, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.335584, 52.380214, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.336993, 52.375101, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.341332, 52.37149, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.344341, 52.372774, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.348946, 52.36904, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.350332, 52.364033, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.352416, 52.342614, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.353339, 52.365327, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.354491, 52.360329, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.355406, 52.397274, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.356686, 52.338936, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.356661, 52.344444, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.356838, 52.37817, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.357486, 52.36162, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.358868, 52.356498, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.360894, 52.340777, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.361062, 52.374494, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.361868, 52.3578, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.362223, 52.391367, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.363027, 52.352796, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.367083, 52.349056, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.367829, 52.403076, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.370053, 52.324113, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.370084, 52.350342, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.370765, 52.400766, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.370896, 52.404506, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.371261, 52.345357, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.373761, 52.402065, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.374263, 52.34665, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.374972, 52.397085, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.375657, 52.341689, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.376006, 52.326681, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.377985, 52.398383, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.378611, 52.343003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.379179, 52.393178, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.379317, 52.376553, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.380081, 52.338059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.382167, 52.394487, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.383082, 52.339349, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.383317, 52.321487, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.383551, 52.372874, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.38544, 52.319645, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.385641, 52.411478, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.387418, 52.331612, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.387674, 52.385636, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.388378, 52.334779, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.390426, 52.332912, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.390677, 52.386927, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.390788, 52.403903, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.392007, 52.382006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.393789, 52.405202, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.394993, 52.383293, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.395115, 52.400168, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.395763, 52.324327, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.396581, 52.37826, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.39661, 52.327425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.398097, 52.401448, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.39907, 52.417295, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.399597, 52.379563, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.40018, 52.340011, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.40088, 52.374614, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.404969, 52.330985, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.40711, 52.388292, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.411333, 52.384612, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.412825, 52.345563, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.414996, 52.343653, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.415317, 52.332667, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.417843, 52.336489, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.423628, 52.401084, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.427851, 52.397505, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.429688, 52.333951, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.432387, 52.393671, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.432287, 52.326081, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.43953, 52.329591, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.448784, 52.342176, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.45245, 52.348118, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.454793, 52.344838, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.458023, 52.350535, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.462433, 52.346963, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.467956, 52.349324, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.469254, 52.355375, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.473468, 52.351701, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.478073, 52.37347, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.478443, 52.3969, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.47876, 52.353974, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.480904, 52.365121, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.482562, 52.375443, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.484619, 52.357874, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.484677, 52.373607, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.499403, 52.369498, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.530289, 52.377712, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.540237, 52.356579, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.545563, 52.363559, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587011, 52.503923, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.646573, 52.698201, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.64662, 52.700238, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.967181, 52.652264, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.409875, 52.417316, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.410753, 52.412497, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.413731, 52.413806, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.415043, 52.408653, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.42035, 52.345917, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.430901, 52.398756, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.435388, 52.394972, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.438589, 52.337794, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.463745, 52.353001, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.473564, 52.371534, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.475675, 52.369691, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.490898, 52.385727, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.491825, 52.376671, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.511302, 52.377337, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.51425, 52.405009, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.523429, 52.401003, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.531253, 52.362058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.531627, 52.39641, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.540036, 52.391797, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.540539, 52.360233, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.345945, 52.36775, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.367961, 52.325964, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.38537, 52.333485, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.398833, 52.325641, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.405239, 52.339508, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.407054, 52.329143, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.413217, 52.334501, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.41654, 52.324113, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.418072, 52.409886, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.419229, 52.404946, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.419963, 52.334656, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.42224, 52.406232, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.422474, 52.326446, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.423702, 52.331367, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.426636, 52.402405, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.426691, 52.33266, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.432655, 52.335239, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.434832, 52.341061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.43574, 52.434083, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.435626, 52.336513, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.437877, 52.342365, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.437999, 52.432023, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.439782, 52.426363, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.440841, 52.343645, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.441587, 52.339078, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.442787, 52.427659, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.443847, 52.344936, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.446204, 52.424563, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.449627, 52.421533, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.450815, 52.41655, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.453554, 52.414189, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.453912, 52.417762, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.456551, 52.415481, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.459126, 52.409412, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.46129, 52.407601, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.461557, 52.373031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.462117, 52.410733, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.464299, 52.408892, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.464336, 52.374227, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.465702, 52.369444, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.46706, 52.375395, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.46811, 52.4019, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.468444, 52.370624, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.470138, 52.400185, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.471118, 52.403198, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.473154, 52.401485, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.475275, 52.395738, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.480184, 52.371629, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.480347, 52.391905, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.485412, 52.367063, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.485894, 52.388518, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.487288, 52.363637, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.488279, 52.390224, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.489675, 52.378501, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.492698, 52.387757, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.492864, 52.366071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.497676, 52.381934, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.499077, 52.395324, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.500111, 52.383614, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.500431, 52.380371, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.501846, 52.393844, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.502376, 52.382349, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.504552, 52.398987, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.506133, 52.377202, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.507274, 52.397475, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.507515, 52.400287, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.508613, 52.378862, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.510238, 52.398776, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.51297, 52.397272, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.513386, 52.382049, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.515695, 52.39577, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.516093, 52.380542, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.518414, 52.394271, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.52025, 52.383318, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.521157, 52.392766, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.522628, 52.388655, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.523873, 52.391266, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.525356, 52.374411, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.525316, 52.387118, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.526604, 52.389754, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.529327, 52.388254, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.532062, 52.386749, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.535242, 52.381031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.537638, 52.362277, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.539706, 52.506565, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.543631, 52.507901, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.547544, 52.509256, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.551528, 52.510505, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.555676, 52.511569, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.559973, 52.512385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.564345, 52.512991, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.56705, 52.412032, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.568815, 52.513349, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.569508, 52.413619, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.571981, 52.415189, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.574454, 52.416768, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.576913, 52.418354, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.579391, 52.419923, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.329071, 52.297875, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.331703, 52.296332, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.334364, 52.294769, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.336993, 52.293192, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.339645, 52.291651, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.344932, 52.288533, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.347561, 52.286976, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.350204, 52.285421, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.352845, 52.283862, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.355485, 52.282305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.35811, 52.280744, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.360703, 52.27921, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.363386, 52.277629, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.366025, 52.276061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.368653, 52.274503, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.371296, 52.272941, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.373943, 52.271378, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.376563, 52.269823, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.614169, 52.770579, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.12385, 52.37518, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.126703, 52.378501, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.127014, 52.371739, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.129665, 52.381735, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.129897, 52.37496, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.130369, 52.368353, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.132792, 52.378261, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.133011, 52.37149, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.135892, 52.374791, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.139022, 52.37132, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.549134, 52.559977, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.552584, 52.562074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.555973, 52.564196, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.559331, 52.566352, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.562671, 52.568504, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.564953, 52.393596, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.566007, 52.570661, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.568752, 52.395817, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.572552, 52.398026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.576358, 52.400236, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.580155, 52.40245, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.581314, 52.579479, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.582638, 52.576534, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.583935, 52.573583, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.583962, 52.404661, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58524, 52.570632, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.586561, 52.567684, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587859, 52.564704, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.605937, 52.591721, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.607253, 52.588764, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.608582, 52.585781, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.609902, 52.582793, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.611216, 52.579836, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.612539, 52.576878, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.613855, 52.573904, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.526596, 52.404649, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.531019, 52.40749, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.535502, 52.410365, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.539987, 52.413237, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.543741, 52.396449, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.544472, 52.416115, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.546928, 52.398497, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.548955, 52.418978, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.55013, 52.400542, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.553348, 52.421791, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.553323, 52.402595, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.556515, 52.404637, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.557732, 52.424599, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.559715, 52.406686, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.562317, 52.427532, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.566901, 52.430476, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.570694, 52.53241, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.577207, 52.532551, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.583713, 52.532689, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.590393, 52.532815, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.596881, 52.533085, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.603394, 52.533356, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.609882, 52.533627, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.616389, 52.533894, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.622885, 52.534165, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.629389, 52.534434, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.677173, 52.483991, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.681512, 52.482788, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.685862, 52.481566, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.690204, 52.480342, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.69455, 52.479119, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.698892, 52.477899, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.70324, 52.476687, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.536592, 52.543188, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.536716, 52.540764, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.536867, 52.538201, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.537017, 52.535765, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.537155, 52.533348, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.537343, 52.530917, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.537562, 52.528495, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.537871, 52.526081, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.538141, 52.52364, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.538442, 52.521227, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.552555, 52.543599, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.552679, 52.541178, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.55281, 52.538758, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.552939, 52.536329, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.55308, 52.5339, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.553209, 52.531477, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.553495, 52.529061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.553784, 52.526638, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.554077, 52.524219, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.554374, 52.521799, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.621127, 52.47195, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.625075, 52.473721, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.629008, 52.475485, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.632948, 52.477258, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.636878, 52.479026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.640827, 52.480796, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.644777, 52.482556, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.648697, 52.484319, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.652658, 52.486074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.656588, 52.48784, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.54106, 52.554571, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.544669, 52.556758, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.335319, 52.314793, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.338455, 52.317158, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.341475, 52.319598, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.344194, 52.322157, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.346379, 52.324995, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.34796, 52.327967, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.348914, 52.331138, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.349146, 52.334104, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.349043, 52.337152, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.347721, 52.340109, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.586937, 52.561707, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587103, 52.558652, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587265, 52.555595, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587426, 52.552548, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.622849, 52.458993, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.626076, 52.456446, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.629317, 52.453877, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.632548, 52.451318, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.635806, 52.533464, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.635787, 52.448755, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.639, 52.446189, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.641455, 52.5338, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.642228, 52.443628, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.645458, 52.441059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.645847, 52.467268, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.647112, 52.534137, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.648689, 52.43849, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.649079, 52.4647, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.652755, 52.534479, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.65231, 52.462128, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.655544, 52.459567, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.658399, 52.534816, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.658791, 52.457011, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.662001, 52.454452, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.664047, 52.535153, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.665233, 52.45188, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.668449, 52.449317, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.669692, 52.535489, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.762203, 52.468201, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.765489, 52.470684, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.768797, 52.473149, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.772092, 52.475634, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.775386, 52.478109, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.778678, 52.480586, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.781987, 52.483064, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.785273, 52.485532, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.788576, 52.48801, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.791876, 52.490484, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.382497, 52.355774, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.386682, 52.352128, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.469758, 52.376563, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.731421, 52.454357, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.735864, 52.456285, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.740308, 52.458223, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.744752, 52.460159, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.749211, 52.462087, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.753656, 52.464024, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.483083, 52.393409, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589024747, 52.51779465, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589423041, 52.51469335, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.796699, 52.513332, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.797775, 52.516591, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.798866, 52.51985, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.799943, 52.523108, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.798859681, 52.5198505, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.794545, 52.506814, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58912, 52.51539, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.728666, 52.641977, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.261311, 52.18499, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.262165, 52.18376, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.263019, 52.182553, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.263872, 52.181332, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.263008119, 52.1825472, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.263859544, 52.18132574, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.458217, 52.28314, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.446460925, 52.30031952, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.448831179, 52.29692994, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.451201071, 52.29354031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.453570615, 52.29015963, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.455939785, 52.2867699, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.458308608, 52.28338911, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.381455628, 52.31293505, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.38487259, 52.30996024, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.388289093, 52.30697634, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.374259, 52.293692, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.378455, 52.291204, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.382665, 52.288714, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.38686, 52.28623, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.391073, 52.283735, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.395273, 52.281246, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.399402, 52.278736, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.40449, 52.275654, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.408461, 52.273216, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.381459, 52.312913, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.384871, 52.309964, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.388294, 52.306979, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.391709, 52.304009, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.395129, 52.301028, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.398545, 52.298052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.401959, 52.295073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.405379, 52.292097, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.408798, 52.289113, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.412209, 52.286145, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.415619, 52.283163, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.419035, 52.280188, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.546624167, 52.38361189, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.551970741, 52.38192767, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.557651017, 52.3807202, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.563552173, 52.38001344, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.572138894, 52.37986948, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.578594076, 52.3804715, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.584825558, 52.38166559, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.59068924, 52.38342413, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.596049549, 52.38570648, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.556889378, 52.54793591, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.3456, 52.32508, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.602632, 52.769785, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.606592, 52.773651, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.610569, 52.777544, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.614531, 52.781419, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.618494, 52.785294, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.622472, 52.789177, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.626437, 52.793052, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.651781163, 52.81839725, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.647825395, 52.81453804, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.643867984, 52.81067641, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.639911271, 52.80681465, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.635955271, 52.80295276, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.630875741, 52.79799287, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.62690546, 52.79411516, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.622935898, 52.7902373, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.618966994, 52.78635933, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.614998853, 52.78248121, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.611031355, 52.77860296, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.607064511, 52.77471191, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.603098348, 52.77084589, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.597481861, 52.75844726, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.597379528, 52.75383244, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.597264553, 52.74921771, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.597162252, 52.74460289, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.597084006, 52.73998786, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.596970404, 52.7353731, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.596868197, 52.73075827, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.596765982, 52.7261434, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.596663807, 52.72152903, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.596166508, 52.69845448, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.596051178, 52.69383971, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595949156, 52.6892248, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.595847185, 52.6846099, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.627548851, 52.64359253, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.634927188, 52.63657567, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.638600676, 52.6330626, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.871045105, 52.57712044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.874384676, 52.5735732, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.556889378, 52.54793591, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589090261, 52.52191835, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58215, 52.51438, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.844837, 52.924615, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.333649, 53.074387, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.472625, 53.155424, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.503321, 53.191296, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.518947, 53.246753, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.525776, 53.250175, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.525997, 53.237019, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.581448, 53.157732, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.704316, 53.252082, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.768862, 53.192129, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.779824, 53.321185, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.882571, 53.305829, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.909102, 53.352396, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.917083, 53.376191, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.920325, 53.296216, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.939449, 52.93334, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.941241, 52.929482, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.034406, 53.354285, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.305558, 53.03536, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.455336, 53.172315, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.511629, 53.055368, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.519367, 53.252216, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.519927, 53.246984, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.524472, 53.218796, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.527934, 53.250359, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.531251, 53.149895, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.560792, 53.24041, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.564167, 52.992273, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.581849, 53.157111, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587295, 53.234957, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.588025, 53.234358, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.588727, 53.23379, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.615904, 53.109492, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.618607, 53.299754, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.635834, 53.183177, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.636942, 53.072416, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.666762, 53.145639, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.671683, 53.087004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.695778, 53.112967, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.700781, 53.200977, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.704596, 53.150676, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.705271, 53.191453, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.706715, 53.148118, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.712455, 53.25345, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.725385, 53.270112, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.725462, 53.163218, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.730842, 53.167578, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.734885, 53.187279, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.736236, 53.187259, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.763317, 53.157745, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.781388, 53.333699, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.783629, 53.28358, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.814644, 53.265533, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.819101, 53.091622, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.819375, 52.997177, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.837832, 53.331452, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.849546, 53.359711, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.846679, 52.983291, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.852713, 53.362215, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.848983, 52.898074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.862211, 53.328681, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.158559, 53.310338, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.893528, 53.314331, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.942759, 53.381612, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.95649, 53.361187, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.958344, 53.329846, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.981474, 53.386737, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.981606, 53.388837, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.987221, 53.3863, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.009846, 53.386059, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.034406, 53.354285, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.063678, 53.403538, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.489566, 53.17786, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.49019, 53.178938, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.490972, 53.179954, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.491429, 53.178162, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.491904, 53.180931, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.492206, 53.179184, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.492999, 53.180212, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.493788, 53.181221, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.494867, 53.180506, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.495653, 53.18153, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.3959, 52.88509, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.386036, 53.093179, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.693472, 52.922702, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.694066, 52.921584, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.694705, 52.920385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.695324, 52.919243, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.695905, 52.918136, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.696573, 52.916877, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.422755, 53.058105, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.423761, 53.044015, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.44515, 53.055514, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.505218, 53.162246, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.537633, 53.145601, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.548272, 53.141139, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.593787, 53.213095, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.660979, 53.181498, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.715002, 53.292999, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.747405, 53.288372, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.782533, 53.108797, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.838858, 53.300241, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.852467, 53.250536, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.856295, 53.273873, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.856636, 53.274763, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.410538, 53.091184, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.413208, 53.092646, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.450695, 53.104767, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.452695, 53.142579, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.491653, 53.018328, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.499287, 53.141411, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.535002, 53.04046, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.568083, 53.179852, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.569705, 53.123625, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.581384, 53.218511, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.653806, 53.285579, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.676129, 53.114563, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.696341, 53.226248, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.804665, 53.315381, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.866566, 53.309583, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.867358, 53.308198, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.97299, 53.377138, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.032251, 53.364206, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.042653, 53.358356, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.718675, 53.091888, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.630117, 52.994794, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.655385, 52.954244, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.719418, 53.235491, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.738698, 53.252801, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.771994, 53.249227, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.815547, 53.249528, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.821167, 53.067947, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.841346, 53.344981, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.841606, 53.353841, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.843052, 53.012226, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.891598, 53.373465, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.156924, 53.306345, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.5003, 53.067765, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.510944, 53.218305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.512115, 53.215706, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.51329, 53.213099, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.513823, 53.220167, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.514465, 53.210503, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.515002, 53.217568, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.516165, 53.214965, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.517345, 53.212363, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.517882, 53.219427, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.519048, 53.21683, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.520226, 53.214222, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.521397, 53.211629, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.570969, 53.257134, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.57271, 53.255755, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.574497, 53.25434, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.574825, 53.257672, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.576287, 53.252922, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.576563, 53.256292, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.577979, 53.251581, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.57835, 53.254877, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.579853, 53.250096, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58183, 53.25212, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.583708, 53.250631, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.665151, 52.859617, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.666304, 52.861888, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.386908, 53.094638, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.389178, 53.09533, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.389939, 53.093839, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.390655, 53.09241, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.391401, 53.090918, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.391865, 53.095843, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.392656, 53.094297, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.393372, 53.092868, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.396627, 53.09497, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.397582, 53.093596, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.559179, 53.182023, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.50463, 53.071234, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.512389, 53.191528, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.62705, 53.193871, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.632419, 53.211858, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.634297, 53.210479, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.636145, 53.209119, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.638008, 53.207749, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.63769, 53.002136, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.639871, 53.206388, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.855948, 53.033352, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.492071, 53.228705, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.583605, 53.165405, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.587038, 53.163847, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589118, 53.172178, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.626704, 53.094332, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.645938, 53.123256, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.661463, 53.112809, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.67336, 52.974763, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.693403, 53.002825, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.189286, 53.28307, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.189636, 53.277511, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.651655, 53.070183, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.695444, 53.0842, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.213907, 53.265572, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.221864, 53.244177, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.401078, 53.103091, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.425018, 52.96154, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.42629, 53.001515, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.426547, 53.022199, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.44, 52.964509, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.447812, 52.946236, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.455957, 52.950869, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.467598, 52.973526, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.471788, 53.018669, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.556826, 53.126522, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.558751, 53.117528, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.578219, 53.126565, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.579909, 53.11466, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.581324, 53.130317, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.58289, 53.114954, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.59216, 53.099534, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.607809, 53.124305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.643167, 53.111952, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.895131, 52.972352, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.397704, 52.873314, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.398837, 52.87202, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.399975, 52.870728, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.404308, 52.87533, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.40585, 52.877365, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.406162, 52.874676, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.420617, 53.11729, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.422079, 53.090727, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.424369, 52.976317, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.424937, 52.977652, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.433762, 53.135476, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.433822, 53.122542, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.438383, 52.995011, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.440245, 53.055414, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.453099, 53.059458, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.46243, 53.111372, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.475565, 52.936757, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.477486, 53.139764, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.490252, 53.118831, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.512008, 53.139367, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.516894, 53.043799, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.518923, 53.098198, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.521987, 53.088632, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.528435, 53.043798, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.558325, 53.080009, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.882271, 53.331161, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.228221, 53.320813, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.424519, 53.066181, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.424967, 53.041384, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.430237, 53.049326, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.431361, 53.047099, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.434009, 53.049521, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.461445, 53.077927, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.47094, 52.968756, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.520009, 53.182133, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.523891, 53.181323, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.56451, 53.180779, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.454718, 53.039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.427721, 53.192194, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.428633, 53.193878, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.465006, 52.958663, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.46848, 52.984221, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.48463, 52.976659, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.723702, 53.296965, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.728038, 53.296775, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.811573, 53.328275, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.844376, 53.197528, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.844656, 53.195817, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.847007, 53.198456, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.43068, 53.197285, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.488806, 53.047669, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.491092, 53.049776, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.493373, 53.051881, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.495652, 53.053992, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.497935, 53.056087, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.500235, 53.058201, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.458751, 53.180214, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.45735, 53.176834, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.877499, 53.005265, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.774796, 53.323562, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.776878, 53.324785, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.778958, 53.325991, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.781102, 53.327167, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.783305, 53.328297, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.785589, 53.329392, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.787892, 53.330452, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.467493, 53.18571, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.47105, 53.186869, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.474629, 53.18801, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.478216, 53.189115, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.481825, 53.1902, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.485456, 53.191265, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.566675, 53.182065, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.442273, 53.091617, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.437573, 53.092571, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.432796, 53.093536, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.428085, 53.094462, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.486521, 53.045564, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.484235, 53.043455, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.898624, 53.345939, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.527141, 53.23716, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.641996, 52.863, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.516359, 52.916, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.55617, 52.835, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.514441, 53.18229, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589025, 52.517795, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.509561217, 53.18110876, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.027639172, 53.27796248, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.421986838, 52.90648126, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.810462936, 53.32899081, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.439952818, 52.96450833, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.447800581, 52.9462355, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.455930757, 52.95086802, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.425007422, 52.96152159, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.467592839, 52.97353305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.454699, 53.039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.641993, 52.863, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.893504, 53.314, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.452985, 53.111713, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.452614, 53.11205, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.441019779, 53.19747355, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.627047, 53.193886, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.607822, 53.314172, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.589145, 52.27393, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.857148, 51.968311, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.191014, 52.158779, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.191653, 52.161659, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.192317, 52.164518, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.192106, 51.935824, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.195831, 51.935174, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.19987, 51.934909, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.531929, 51.965407, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.536712, 51.967509, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.538438, 51.963339, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.542352, 51.966494, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.547525, 51.959645, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.552044, 51.962792, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.553811, 51.956293, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.557309, 51.959881, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.729041, 52.132928, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.507662, 51.919532, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.51169, 51.920085, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.515805, 51.920512, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.519875, 51.920571, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.539483631, 51.92421987, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.534708806, 51.92393251, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.544156809, 51.9245351, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.548625116, 51.92455815, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.017480002, 51.97623572, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.019994362, 51.97297256, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.02325294, 51.9756006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.021224381, 51.97848257, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.613950357, 52.03464772, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.612378251, 52.03145313, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.2031, 53.4072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.3007, 53.3322, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.4528, 53.2848, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.5276, 53.2488, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.2377, 53.3909, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.2623, 53.1524, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.4147, 53.3674, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.4152, 53.3684, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.455, 53.3974, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.5527, 53.3608, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.5564, 53.3355, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.5933, 53.3262, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.5967, 53.3179, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6713, 53.2266, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6717, 53.2275, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6721, 53.2284, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6726, 53.2292, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.673, 53.2301, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6734, 53.231, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6736, 53.2262, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.674, 53.2271, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6744, 53.228, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6748, 53.2288, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6753, 53.2297, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6757, 53.2305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6902, 53.2977, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7002, 53.2357, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9018, 53.1925, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9267, 53.1736, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9284, 53.1737, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9302, 53.1739, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9319, 53.174, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9338, 53.1741, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9353, 53.1742, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9368, 53.1743, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9383, 53.1744, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9397, 53.1745, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9414, 53.1746, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.943, 53.1747, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9428, 53.166, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9448, 53.1748, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9756, 53.2623, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.984, 53.2213, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9871, 53.2681, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9922, 53.1943, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.0252, 53.1157, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.5031, 53.3331, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.33, 53.3846, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.5894, 53.3424, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6438, 53.4109, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9425, 53.2817, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9426, 53.2733, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9499, 53.281, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9499, 53.2795, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6086, 53.3139, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8108, 53.398, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9152, 53.2748, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9425, 53.288, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.0188, 53.2931, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [7.0235, 53.283, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.4974, 53.4105, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.837, 53.4119, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.845, 53.4206, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8682, 53.3889, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9342, 53.27, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7008, 53.4458, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7215, 53.4263, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7351, 53.4442, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8725, 53.4119, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.4787, 53.3487, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9554, 53.285, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9558, 53.2901, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9562, 53.295, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.959, 53.2771, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9594, 53.2799, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.96, 53.2841, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9606, 53.2892, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9612, 53.2938, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9651, 53.279, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.966, 53.283, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9671, 53.2879, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9681, 53.2922, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9709, 53.278, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9717, 53.2819, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9728, 53.2868, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9737, 53.2909, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.975, 53.2774, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9759, 53.2811, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9771, 53.286, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9781, 53.2899, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9786, 53.2768, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9796, 53.2804, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.981, 53.2852, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9821, 53.289, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9851, 53.2758, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9863, 53.2791, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9881, 53.2839, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9893, 53.2873, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9896, 53.275, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9911, 53.2783, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9932, 53.2829, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.9947, 53.286, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8703, 53.1666, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.345, 53.388, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.3401, 53.3869, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8107, 53.4573, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8153, 53.4565, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8205, 53.4557, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8256, 53.4549, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8307, 53.4541, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8408, 53.451, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.844, 53.4464, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8505, 53.4492, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.86, 53.4467, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8493, 53.4464, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8585, 53.4434, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8372, 53.4427, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8421, 53.4421, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.847, 53.4413, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.852, 53.4406, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8567, 53.4393, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8612, 53.4376, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7921, 53.4484, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7981, 53.4481, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8007, 53.4551, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8115, 53.4479, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7892, 53.451, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7851, 53.4524, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.781, 53.4536, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7768, 53.4547, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7727, 53.4559, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7684, 53.4567, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7639, 53.4576, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7598, 53.4584, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7555, 53.4592, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7511, 53.4597, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7466, 53.46, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7577, 53.4536, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7621, 53.4529, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7664, 53.452, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7706, 53.4511, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7748, 53.4501, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7791, 53.449, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7888, 53.4444, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7935, 53.4447, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7995, 53.4446, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.805, 53.444, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8096, 53.4436, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8148, 53.443, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8201, 53.4425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8253, 53.4419, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8306, 53.441, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.836, 53.4402, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8409, 53.4394, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8458, 53.4386, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8508, 53.4379, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8555, 53.4364, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.86, 53.4347, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8643, 53.4331, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8668, 53.4305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8664, 53.4377, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8683, 53.442, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8735, 53.444, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8704, 53.4458, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.866, 53.4484, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8616, 53.4504, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.857, 53.4519, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8523, 53.4531, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8428, 53.4549, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8324, 53.458, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8275, 53.4591, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8226, 53.4604, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8176, 53.4616, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8126, 53.4616, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.806, 53.458, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7963, 53.4522, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8025, 53.4513, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8083, 53.4503, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8719, 53.4396, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8701, 53.4354, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8775, 53.4416, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8763, 53.4389, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8745, 53.4348, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8731, 53.4317, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8811, 53.4392, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.879, 53.4309, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8765, 53.4263, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8738, 53.4219, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.871, 53.4254, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.8689, 53.4279, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7445, 53.4557, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.749, 53.455, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7537, 53.4543, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.4973, 53.4134, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.3912, 53.4, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.7035, 53.3738, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.4914, 53.2651, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.4942, 53.2647, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.429556765, 53.33509372, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.5894, 53.3424, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.6438, 53.4109, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.847465, 53.454247, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.868900327, 53.39004829, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.996822, 50.847857, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.011512, 50.847275, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.014189, 50.844965, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.925961, 51.307073, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.931221, 51.305628, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.947329, 51.301192, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.952573, 51.299746, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.936984443, 51.30507216, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.437384, 51.554667, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.442542, 51.558588, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.448844, 51.562592, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.653056, 52.728159, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.686317, 52.742693, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.686566, 52.741978, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.234325, 52.738615, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.245225, 52.732655, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.685394, 52.745504, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.685633, 52.74481, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.685839, 52.744103, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.686816, 52.741272, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.687045, 52.740569, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.687268, 52.739869, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.692853, 52.733871, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.73648, 52.491207, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.738055, 52.828553, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.777348, 52.87213, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.782013, 52.941304, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.781894, 52.942391, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.837007, 52.883162, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.862255, 52.747706, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.104938, 52.749118, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.106019, 52.749695, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.189938, 52.734591, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.004265, 52.381593, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.265179, 52.749904, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.267313, 52.748663, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.946929, 52.421509, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.664046, 52.402592, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.66472, 52.40151, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.665404, 52.400427, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.666091, 52.39933, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.641859, 52.231869, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.754429, 52.948236, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.863236, 52.880124, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.193712, 52.667986, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.666029, 52.246595, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.736067, 52.693153, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.737647, 52.693539, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.739266, 52.693942, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.031821, 52.928089, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.033092, 52.928233, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.881269, 52.802004, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.881893, 52.804218, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.882202, 52.805326, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.882513, 52.806434, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.882777, 52.809932, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.883099, 52.811039, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.883409, 52.81215, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.883724, 52.813255, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.884359, 52.81547, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.88468, 52.816577, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.88499, 52.817681, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.885309, 52.818792, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.885623, 52.819898, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.885939, 52.821002, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.886792, 52.823975, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.887108, 52.825084, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.887418, 52.826194, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.080727, 52.740175, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.792435, 52.8638, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.80922, 52.769468, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.814295, 52.753048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.823719, 52.759027, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.852751, 52.858579, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.850955, 53.045912, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.874605, 52.846754, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.895745, 52.861316, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.201695, 52.728514, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.209713, 52.732884, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.11873, 52.794333, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.119083, 52.796128, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.119458, 52.797926, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.119807, 52.799727, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.828232, 52.838455, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.830566, 52.8393, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.832908, 52.840146, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.835235, 52.840988, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.837574, 52.841829, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.839912, 52.84268, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.842292, 52.843542, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.844555, 52.844358, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.896288, 52.823871, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.903816, 52.778179, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.907403, 52.786963, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.909123, 52.785639, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.910845, 52.784315, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.912567, 52.78299, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.914287, 52.781669, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.919416, 52.77772, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.921106, 52.77642, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.922801, 52.775115, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.92449, 52.77382, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.926178, 52.772517, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.927874, 52.771213, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.929566, 52.769911, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.931253, 52.768608, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.93295, 52.767304, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.934642, 52.766007, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.936332, 52.764702, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.938024, 52.763398, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.941666, 52.760593, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.080025, 52.80205, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.083471, 52.801872, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.086792, 52.801699, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.090487, 52.80151, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.094036, 52.801323, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.788552, 52.945711, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.789565, 52.94655, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.829252, 52.875441, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.889338, 52.724663, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.931132, 52.671355, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.934462, 52.670433, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.042423, 52.935709, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.773011, 52.392431, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.774119, 52.394915, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.775226, 52.397404, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.776335, 52.399891, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.786449, 52.943146, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.801595, 52.400295, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.802588, 52.39798, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.803994, 52.39582, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.806028, 52.393781, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.808696, 52.391989, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.811946, 52.390613, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.815325, 52.389688, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.819466, 52.389178, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.825242, 52.415219, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.826032, 52.412583, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.828442, 52.410328, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.831803, 52.408659, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.835332, 52.407085, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.839636, 52.405159, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.843928, 52.40324, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.847944, 52.401648, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.882077, 52.678236, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.885633, 52.678211, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.028559, 52.892019, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.030003, 52.736982, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.030754, 52.738704, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.031506, 52.740434, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.032223, 52.742091, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.032956, 52.743742, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.033669, 52.745405, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.906367, 52.838424, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.906954, 52.840367, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.907525, 52.842284, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.908103, 52.84423, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.908687, 52.846159, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.909268, 52.848091, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.909841, 52.850025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.910459, 52.852078, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.094848, 52.807989, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.724197, 52.479382, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.94859, 52.840847, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.967742, 52.813284, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.979002, 52.7713, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.983651, 52.625315, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.986505, 52.625916, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.987991, 52.799862, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.98836, 52.771102, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.989771, 52.62662, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.993021, 52.627315, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.996515, 52.628058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.000006, 52.628793, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.003459, 52.629526, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.00328, 52.774564, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.007378, 52.766832, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.013961, 52.817475, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.018554, 52.871162, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.019361, 52.818099, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.034189, 52.815413, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.040331, 52.824837, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.043446, 52.863603, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.049096, 52.890788, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.050146, 52.839468, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.052839, 52.876914, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.055706, 52.883145, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.059768, 52.782891, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.103764, 52.810553, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.131189, 52.730034, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.183342, 52.726444, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.186577, 52.727222, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.190569, 52.728391, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.212768, 52.734541, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.762678, 52.856416, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.763435, 52.858338, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.76421, 52.860259, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.764974, 52.862178, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.767159, 52.867752, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.768479, 52.87113, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.770569, 52.876513, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.958937, 52.862328, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.973261, 52.876693, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.980345, 52.847046, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.994955, 52.872352, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.997567, 52.858596, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.04293, 52.840661, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.056138, 52.796517, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.060792, 52.826777, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.065802, 52.839712, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.081093, 52.823644, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.087116, 52.874391, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.095356, 52.837472, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.922572, 52.808744, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.924431, 52.806036, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.926279, 52.803348, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.928128, 52.800647, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.929975, 52.797953, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.936659, 52.790437, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.939812, 52.787726, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.942976, 52.785028, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.946131, 52.782331, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.949292, 52.779622, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.952449, 52.77692, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.955608, 52.77421, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.966187, 52.76177, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.972096, 52.761665, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.978027, 52.761549, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.983939, 52.761441, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.98986, 52.761333, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.995795, 52.761219, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.001722, 52.761106, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.007624, 52.760995, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.013557, 52.760876, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.019049, 52.760776, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.024518, 52.760676, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.030003, 52.760567, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.033815, 52.886966, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.036371, 52.88398, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.038943, 52.88094, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.041504, 52.877934, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.049546, 52.868463, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.0521, 52.86548, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.054624, 52.862485, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.0585, 52.857931, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.679152, 52.764316, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.686652, 52.783547, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.724548, 52.7724, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.941873, 52.288245, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.703472, 52.507535, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.813349, 52.426447, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.080088, 52.831785, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.084596, 52.831552, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.08911, 52.831317, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.093608, 52.831085, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.098131, 52.830841, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.774851, 52.421031, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.776843, 52.417185, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.779624, 52.412275, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.792036, 52.422737, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.800063, 52.407538, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.800046, 52.410768, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.800025, 52.414276, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.084067, 52.817351, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.096255, 52.816732, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.09016, 52.817043, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.722992, 52.770299, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.843339, 52.41953, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.868366, 52.413961, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.748268, 52.432212, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.998129, 52.605342, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.999204, 52.607394, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.000293, 52.609447, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.003063, 52.605641, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.003526, 52.607777, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.003979, 52.609917, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.73977, 52.426519, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.738911, 52.42406, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.738554, 52.419323, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.739311, 52.416831, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.740046, 52.414361, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.740795, 52.411892, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.745824, 52.408448, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.750786, 52.407811, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.771153, 52.714, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.771391, 52.716058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.771785, 52.718126, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.772313, 52.720098, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.77304, 52.721979, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.773912, 52.723862, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.774932, 52.725701, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.77612, 52.727478, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.276534, 52.684632, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.278778, 52.685939, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.281044, 52.687246, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.283273, 52.688551, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.285514, 52.689851, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.997441, 52.770921, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.68609, 52.743389, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.684674, 52.757044, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.686034, 52.758741, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.687435, 52.76048, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.688833, 52.762222, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.690216, 52.763954, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.691617, 52.765692, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.693019, 52.767424, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.694417, 52.769158, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.695812, 52.770903, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.009431, 52.777207, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.758585, 52.605194, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.854148, 52.729346, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.79784, 52.651227, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.794039, 52.647021, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.789464, 52.642998, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.873325, 52.870136, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.830815, 52.814187, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.751477, 52.846638, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.044068, 52.875016, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.047209, 52.871333, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.757097, 52.602299, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.772926, 52.711991, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.772282, 52.709913, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.771821, 52.707816, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.57309, 52.47002, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.574494, 52.472879, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.576288, 52.475642, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.088321, 52.433801, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.086552, 52.432215, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.101527, 52.781905, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.657192, 52.235591, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.659854, 52.237446, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.66268, 52.239414, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.759392, 52.604689, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.760585, 52.603797, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.757095, 52.602295, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.831717, 52.827568, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.888594407, 52.71953834, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.0442, 52.4903, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.209287, 52.655, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.642872664, 52.23143568, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.647309483, 52.2287042, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.754129506, 52.59707001, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.04461, 51.982517, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.048754, 51.981662, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.754154578, 52.59692105, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.095736291, 52.83854076, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.087512111, 52.87545899, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.056072598, 52.88422009, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.05322169, 52.87798983, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.043821972, 52.86466278, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.018932503, 52.87224141, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.973643693, 52.87776223, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.959299388, 52.86339322, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.980723045, 52.84809928, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.997944835, 52.85966101, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.019743377, 52.81915074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.014348354, 52.81854078, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.988727571, 52.77216918, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.00775819, 52.76788867, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.066168746, 52.84078355, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.979366727, 52.77234552, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.04331426, 52.84172771, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.034600836, 52.81646338, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.056482663, 52.79761168, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.095280843, 52.80902974, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.103792, 52.810534, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.050537309, 52.84054521, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.1093752, 52.8230277, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.967761, 52.813286, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.988035, 52.799879, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.988035, 52.799879, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.22015, 52.591315, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.223529, 52.595415, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.230152, 52.595046, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.203278, 52.558497, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.205294, 52.561467, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.207296, 52.564446, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.209298, 52.567425, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.210251, 52.556058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.212616, 52.559475, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.214995, 52.562892, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.21736, 52.566318, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.735299918, 52.64181697, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.736671049, 52.64847096, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.731466539, 52.64567257, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.719667, 52.634641, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.198290761, 52.23685875, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [6.184586862, 52.23690707, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.960529, 51.992317, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.962512, 51.989113, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.964432, 51.986016, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.878005, 52.211872, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.127477625, 52.02394768, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.124974833, 52.02123443, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.122420075, 52.01847459, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.119244536, 52.01455762, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [5.117232623, 52.01191532, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.452132, 51.533067, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.452318, 51.532402, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.583636, 51.365918, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.746994, 51.678965, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.876589, 51.680383, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.876939, 51.679929, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.077575, 51.649431, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.695032, 51.443479, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.699378, 51.441005, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.70341, 51.438714, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.707532, 51.436388, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.451978, 51.535672, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.453513, 51.536525, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.693641, 51.477225, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.695365, 51.477886, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.696518, 51.474225, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.697138, 51.478491, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.697465, 51.473219, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.698339, 51.4723, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.698999, 51.478979, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.700795, 51.479305, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.702645, 51.479519, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.704508, 51.47962, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.706376, 51.479602, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.708238, 51.479464, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.710088, 51.479215, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.924694, 51.537735, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.987437, 51.454562, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.990207, 51.453805, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.605017, 51.443102, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.60654, 51.442503, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.607904, 51.441938, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.6093, 51.441372, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.611227, 51.441662, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.612953, 51.441953, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.61469, 51.442245, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.001636, 51.706431, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.003404, 51.705296, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.004918, 51.704108, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.006364, 51.702836, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.570938, 51.51473, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.727391, 51.415368, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.740257, 51.445428, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.740638, 51.444168, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.741435, 51.440325, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.743102, 51.442299, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.744193, 51.444387, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.220024, 51.399521, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.223425, 51.398506, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.710584, 51.434751, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.9047, 51.354913, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.908339, 51.357006, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.693922, 51.444025, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.696122, 51.442852, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.698311, 51.441607, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.700383, 51.440432, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.702397, 51.439283, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.704424, 51.438135, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.706437, 51.436986, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.708567, 51.435776, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.717654, 51.466026, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.719795, 51.463769, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.927438, 51.45514, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.929337, 51.45295, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.93108, 51.455671, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.933262, 51.453552, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.93535, 51.451566, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.935294, 51.456384, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.937102, 51.454191, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.939007, 51.451856, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.940666, 51.455476, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.942222, 51.45329, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.612763, 51.372804, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.614066, 51.375505, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.625255, 51.363589, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.626527, 51.36617, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.627835, 51.368853, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.718078, 51.440249, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.678464, 51.622795, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.682411, 51.59683, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.683153, 51.599663, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.682697, 51.621021, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.689056, 51.599718, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.697913, 51.64016, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.702193, 51.636941, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.702086, 51.643556, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.868795, 51.593845, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.872783, 51.59066, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.875344, 51.586942, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.713587, 51.437939, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.717696, 51.4356, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.83957, 51.28854, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.844237, 51.290787, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.849327, 51.292931, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.854953, 51.293394, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.860365, 51.292582, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.864699, 51.291156, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.867654, 51.288983, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.86976, 51.286421, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.853295, 51.289621, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.85886, 51.286539, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.86384, 51.282937, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.846769, 51.289245, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.847803, 51.286241, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.84975, 51.28351, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.852259, 51.281669, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.862136, 51.279021, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.865352, 51.277821, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.862753, 51.272557, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.853019, 51.270487, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.860155, 51.268801, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.865689, 51.269143, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.871002, 51.269716, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.259234, 51.385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.260957, 51.386, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.261788, 51.385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.262762, 51.383, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.263337, 51.386, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.263905, 51.381, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.264536, 51.385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.264831, 51.379, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.265616, 51.383, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.265607, 51.386, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.266865, 51.381, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.267127, 51.385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.267829, 51.38, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.268916, 51.383, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.269929, 51.382, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.27092, 51.381, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.053652, 51.607256, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.059096, 51.608489, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.064353, 51.609672, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.069643, 51.610863, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.075012, 51.612071, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.680572, 51.588286, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.681913, 51.591682, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.686948, 51.589597, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.691527, 51.59164, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.695108, 51.589222, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.685024, 51.477654, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.687776, 51.478727, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.690531, 51.47979, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.693388, 51.48074, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.696283, 51.481657, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.699335, 51.482312, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.703107, 51.482719, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.706062, 51.482788, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.709212, 51.482584, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.712293, 51.482103, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.715306, 51.481397, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.718101, 51.480369, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.721363, 51.468852, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.045838, 51.555677, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.043896, 51.558945, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.041899, 51.56161, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.039633, 51.565072, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.101971, 51.6383, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.107179, 51.636282, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.112307, 51.634308, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.117445, 51.632327, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.122624, 51.630337, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.736402303, 51.44052498, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.260967, 51.386, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.263352, 51.386, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.265623, 51.386, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.259239, 51.385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.261769, 51.385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.264516, 51.385, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": null
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.178472, 51.683839, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.178544, 51.684722, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.73756, 52.065184, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.390447, 51.729431, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.392437, 51.728767, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.394565, 51.728209, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.396425, 51.727477, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.398513, 51.726835, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.400618, 51.726243, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.402737, 51.725664, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.15781, 51.696194, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.159155, 51.694753, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1605, 51.693307, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.161846, 51.691869, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.163181, 51.690431, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.164536, 51.688998, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.054027, 51.836964, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.056057, 51.838488, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.058223, 51.839936, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.060664, 51.84121, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.063317, 51.84231, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.066119, 51.843267, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.276697, 51.868884, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.685412, 52.014304, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.179393, 51.769381, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.595732, 51.716227, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.599078, 51.716653, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.602482, 51.717086, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.605889, 51.717786, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.608715, 51.719167, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.611526, 51.720592, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.156476, 51.697643, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.138295, 51.962903, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.142677, 51.960729, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.14703, 51.958555, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.151397, 51.956381, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.155763, 51.954206, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.1646, 51.949723, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.168063, 51.948078, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.171469, 51.946387, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.17486, 51.944696, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.178251, 51.942996, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.316845, 51.661149, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.32061, 51.661911, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.324362, 51.662727, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.328297, 51.663262, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.332069, 51.66404, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.335815, 51.664878, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.339411, 51.665944, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.342889, 51.667204, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.346494, 51.668259, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.350089, 51.669338, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.353685, 51.670401, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.356693, 51.671972, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.28036, 51.866628, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.285577, 51.866849, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.290643, 51.867083, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.295716, 51.8673, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.300685, 51.867538, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.305843, 51.867799, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.99087, 51.923692, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.991002, 51.921811, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.991779, 51.92551, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.992221, 51.920058, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.993444, 51.92711, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.995158, 51.928702, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.996847, 51.930298, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [3.99856, 51.93188, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.000259, 51.933468, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.002946, 51.934411, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.006018, 51.933993, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.008934, 51.933367, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.011965, 51.932718, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.014849, 51.932051, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.016834, 51.93029, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.016967, 51.926485, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.016972, 51.928366, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.517501, 52.042635, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.485729, 52.125758, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.487935, 52.12699, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.052934, 51.98085, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.057083, 51.980011, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.061196, 51.979076, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.065237, 51.97806, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.069204, 51.976921, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.003551, 51.9373, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.005558, 51.939178, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.007528, 51.941064, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.009525, 51.942964, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.011505, 51.944873, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.085202, 51.945679, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.086807, 51.941976, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.091309, 51.955824, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.091909, 51.940949, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.095085, 51.950453, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.095845, 51.940439, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.096838, 51.954295, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.101196, 51.948426, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.103012, 51.952454, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.109864, 51.708939, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.113026, 51.708609, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.11623, 51.708289, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.152577, 51.934398, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.156519, 51.933057, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.160464, 51.931711, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.165366, 51.930554, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.168587, 51.92926, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.171069, 51.927489, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.172842, 51.925401, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.173472, 51.923135, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.17544, 51.921139, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.198004, 51.768, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.200738, 51.766257, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.203473, 51.764537, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.206227, 51.762797, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.208952, 51.761061, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.211706, 51.75932, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.244798, 51.881087, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.121752, 51.942415, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.125484, 51.940552, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.129969, 51.939569, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.134421, 51.938532, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.607573, 52.124363, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.613354, 52.124768, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.619197, 52.124673, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.625607, 52.019295, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.623704, 52.122314, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.630575, 52.019354, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.635542, 52.019427, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.121239, 51.945815, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.64045, 52.019556, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.224166, 51.752141, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.226954, 51.750905, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.229745, 51.749673, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.232543, 51.748433, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.124903, 51.935693, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.130181, 51.935023, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.135178, 51.934353, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.140247, 51.934188, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.885889257, 51.83450179, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.891202021, 51.835585, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.896381623, 51.83692807, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.040532, 51.98347, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.044608, 51.982519, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.048753, 51.981659, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.298457686, 51.90063377, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.303284385, 51.90000612, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.275299109, 51.86727472, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.270685991, 51.8670781, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.262329675, 51.86790631, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.257220552, 51.86954616, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.250822324, 51.87180135, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.245103546, 51.87380036, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.239847058, 51.87621187, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.236942961, 51.87985143, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.187951062, 51.91563376, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.192388154, 51.91341782, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.196007124, 51.91162123, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.199747218, 51.90985855, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.203523232, 51.90812488, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.211293965, 51.90396616, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.215971698, 51.90174802, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.069219932, 51.97798716, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.06138167, 51.98023774, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.065277945, 51.97910053, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.05736714, 51.98114588, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.053268597, 51.98197595, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.397025466, 51.70342404, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.396795416, 51.70612398, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.397304012, 51.70853616, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.398829012, 51.71106707, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.650920732, 52.23199449, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.654220883, 52.2342893, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.158072478, 51.69712705, 0.0]
    }
  }, {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [4.160759361, 51.69424364, 0.0]
    }
  }]
};
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51772" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/leaflet/windmolens.js"], null)
//# sourceMappingURL=/windmolens.6ef27037.js.map