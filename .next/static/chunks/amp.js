(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function _tryApplyUpdates() {
  _tryApplyUpdates = // This function reads code updates on the fly and hard
  // reloads the page when it has changed.
  _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, jsonData, curPage, pageUpdated;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch(typeof __webpack_require__.j !== 'undefined' ? "".concat(hotUpdatePath).concat(curHash, ".").concat(__webpack_require__.j, ".hot-update.json") : "".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            jsonData = _context.sent;
            curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

            pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(function (mod) {
              return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils).setupPing(assetPrefix, function () {
  return page;
});
(0, _fouc).displayContent();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(function (cb) {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response1 = window.Response;
var TextDecoder1 = window.TextDecoder;
var TextEncoder1 = window.TextEncoder;
var AbortController1 = window.AbortController;

if (AbortController1 == undefined) {
  AbortController1 = function AbortController1() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 128 >> shift && codePoint << shift <= 2047;
    }

    if (octetsCount === 2) {
      return codePoint >= 2048 >> shift && codePoint << shift <= 55295 || codePoint >= 57344 >> shift && codePoint << shift <= 65535;
    }

    if (octetsCount === 3) {
      return codePoint >= 65536 >> shift && codePoint << shift <= 1114111;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 65533;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 65535) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
        string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder1().decode(new TextEncoder1().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder1 == undefined || TextEncoder1 == undefined || !supportsStreamOption()) {
  TextDecoder1 = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 32);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers1 = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers1), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers2) {
  this._headers = headers2;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers2) {
  var controller = new AbortController1();
  var signal = controller.signal // see #120
  ;
  var textDecoder = new TextDecoder1();
  fetch(url, {
    headers: headers2,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget1() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget1;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget1.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget1.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget1.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event1(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event1;

function MessageEvent1(type, options) {
  Event1.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent1;
MessageEvent1.prototype = Object.create(Event1.prototype);

function ConnectionEvent(type, options) {
  Event1.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event1.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget1.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response1 != undefined && 'body' in Response1.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers2 = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers3, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent1(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event1('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers2 != undefined) {
      for (var name in headers2) {
        if (Object.prototype.hasOwnProperty.call(headers2, name)) {
          requestHeaders[name] = headers2[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget1.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget1");
$RefreshReg$(_c8, "Event1");
$RefreshReg$(_c9, "MessageEvent1");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.displayContent = displayContent;

function displayContent(callback) {
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource).getEventSourceWrapper({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(encodeURIComponent(currentPage)),
    timeout: 5000
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data); // don't attempt fetching the page if we're already showing
      // the dev overlay as this can cause the error to be triggered
      // repeatedly

      if (payload.invalid && !self.__NEXT_DATA__.err) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0EsYUFBYTtBQUNiLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLE1BQU07QUFDTixlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRDtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsY0FBYztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFD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L0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvYW1wLWRldi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9mb3VjLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX2V2ZW50U291cmNlUG9seWZpbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbFwiKSk7XHJcbnZhciBfZXZlbnRzb3VyY2UgPSByZXF1aXJlKFwiLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlXCIpO1xyXG52YXIgX29uRGVtYW5kRW50cmllc1V0aWxzID0gcmVxdWlyZShcIi4vb24tZGVtYW5kLWVudHJpZXMtdXRpbHNcIik7XHJcbnZhciBfZm91YyA9IHJlcXVpcmUoXCIuL2ZvdWNcIik7XHJcbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZm8uZG9uZSkge1xyXG4gICAgICAgIHJlc29sdmUodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcclxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xyXG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgX25leHQodW5kZWZpbmVkKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmlmICghd2luZG93LkV2ZW50U291cmNlKSB7XHJcbiAgICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBfZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O1xyXG59XHJcbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpO1xyXG5sZXQgeyBhc3NldFByZWZpeCAsIHBhZ2UgIH0gPSBkYXRhO1xyXG5hc3NldFByZWZpeCA9IGFzc2V0UHJlZml4IHx8ICcnO1xyXG5sZXQgbW9zdFJlY2VudEhhc2ggPSBudWxsO1xyXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi8gbGV0IGN1ckhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fO1xyXG5jb25zdCBob3RVcGRhdGVQYXRoID0gYXNzZXRQcmVmaXggKyAoYXNzZXRQcmVmaXguZW5kc1dpdGgoJy8nKSA/ICcnIDogJy8nKSArICdfbmV4dC9zdGF0aWMvd2VicGFjay8nO1xyXG4vLyBJcyB0aGVyZSBhIG5ld2VyIHZlcnNpb24gb2YgdGhpcyBjb2RlIGF2YWlsYWJsZT9cclxuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XHJcbiAgICAvLyBfX3dlYnBhY2tfaGFzaF9fIGlzIHRoZSBoYXNoIG9mIHRoZSBjdXJyZW50IGNvbXBpbGF0aW9uLlxyXG4gICAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxyXG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovIHJldHVybiBtb3N0UmVjZW50SGFzaCAhPT0gX193ZWJwYWNrX2hhc2hfXztcclxufVxyXG4vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cclxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xyXG4gICAgcmV0dXJuIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09ICdpZGxlJztcclxufVxyXG5mdW5jdGlvbiBfdHJ5QXBwbHlVcGRhdGVzKCkge1xyXG4gICAgX3RyeUFwcGx5VXBkYXRlcyA9IC8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcclxuICAgIC8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cclxuICAgIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKigpIHtcclxuICAgICAgICBpZiAoIWlzVXBkYXRlQXZhaWxhYmxlKCkgfHwgIWNhbkFwcGx5VXBkYXRlcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgZmV0Y2godHlwZW9mIF9fd2VicGFja19ydW50aW1lX2lkX18gIT09ICd1bmRlZmluZWQnID8gYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LiR7X193ZWJwYWNrX3J1bnRpbWVfaWRfX30uaG90LXVwZGF0ZS5qc29uYCA6IGAke2hvdFVwZGF0ZVBhdGh9JHtjdXJIYXNofS5ob3QtdXBkYXRlLmpzb25gKTtcclxuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSB5aWVsZCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJQYWdlID0gcGFnZSA9PT0gJy8nID8gJ2luZGV4JyA6IHBhZ2U7XHJcbiAgICAgICAgICAgIC8vIHdlYnBhY2sgNSB1c2VzIGFuIGFycmF5IGluc3RlYWRcclxuICAgICAgICAgICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKSA/IGpzb25EYXRhLmMgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKSkuc29tZSgobW9kKT0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZC5pbmRleE9mKGBwYWdlcyR7Y3VyUGFnZS5zdWJzdHIoMCwgMSkgPT09ICcvJyA/IGN1clBhZ2UgOiBgLyR7Y3VyUGFnZX1gfWApICE9PSAtMSB8fCBtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gLnJlcGxhY2UoL1xcLy9nLCAnXFxcXCcpKSAhPT0gLTE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAocGFnZVVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJywgZXJyKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIF90cnlBcHBseVVwZGF0ZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5mdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XHJcbiAgICByZXR1cm4gX3RyeUFwcGx5VXBkYXRlcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcbigwLCBfZXZlbnRzb3VyY2UpLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpPT57XHJcbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcclxuICAgICAgICAgICAgaWYgKCFtZXNzYWdlLmhhc2gpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtb3N0UmVjZW50SGFzaCA9IG1lc3NhZ2UuaGFzaDtcclxuICAgICAgICAgICAgdHJ5QXBwbHlVcGRhdGVzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignSW52YWxpZCBITVIgbWVzc2FnZTogJyArIGV2ZW50LmRhdGEgKyAnXFxuJyArIGV4KTtcclxuICAgIH1cclxufSk7XHJcbigwLCBfb25EZW1hbmRFbnRyaWVzVXRpbHMpLnNldHVwUGluZyhhc3NldFByZWZpeCwgKCk9PnBhZ2VcclxuKTtcclxuKDAsIF9mb3VjKS5kaXNwbGF5Q29udGVudCgpO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YW1wLWRldi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5hZGRNZXNzYWdlTGlzdGVuZXIgPSBhZGRNZXNzYWdlTGlzdGVuZXI7XHJcbmV4cG9ydHMuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyID0gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyO1xyXG5jb25zdCBldmVudENhbGxiYWNrcyA9IFtdO1xyXG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xyXG4gICAgdmFyIHNvdXJjZTtcclxuICAgIHZhciBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xyXG4gICAgaWYgKCFvcHRpb25zLnRpbWVvdXQpIHtcclxuICAgICAgICBvcHRpb25zLnRpbWVvdXQgPSAyMCAqIDEwMDA7XHJcbiAgICB9XHJcbiAgICBpbml0KCk7XHJcbiAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xyXG4gICAgICAgICAgICBoYW5kbGVEaXNjb25uZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMik7XHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgICAgIHNvdXJjZSA9IG5ldyB3aW5kb3cuRXZlbnRTb3VyY2Uob3B0aW9ucy5wYXRoKTtcclxuICAgICAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lO1xyXG4gICAgICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdDtcclxuICAgICAgICBzb3VyY2Uub25tZXNzYWdlID0gaGFuZGxlTWVzc2FnZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU9ubGluZSgpIHtcclxuICAgICAgICBpZiAob3B0aW9ucy5sb2cpIGNvbnNvbGUubG9nKCdbSE1SXSBjb25uZWN0ZWQnKTtcclxuICAgICAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShldmVudCkge1xyXG4gICAgICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tpXShldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+e1xyXG4gICAgICAgICAgICBpZiAoIWNiLnVuZmlsdGVyZWQgJiYgZXZlbnQuZGF0YS5pbmRleE9mKCdhY3Rpb24nKSA9PT0gLTEpIHJldHVybjtcclxuICAgICAgICAgICAgY2IoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICBzb3VyY2UuY2xvc2UoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KGluaXQsIG9wdGlvbnMudGltZW91dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNsb3NlOiAoKT0+e1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgc291cmNlLmNsb3NlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRNZXNzYWdlTGlzdGVuZXI6IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5wdXNoKGZuKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYikge1xyXG4gICAgZXZlbnRDYWxsYmFja3MucHVzaChjYik7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucyk7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50c291cmNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbi8qIGVzbGludC1kaXNhYmxlICovIC8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cclxuLy8gQXZhaWxhYmxlIHVuZGVyIE1JVCBMaWNlbnNlIChNSVQpXHJcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XHJcbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcclxudmFyIFJlc3BvbnNlMSA9IHdpbmRvdy5SZXNwb25zZTtcclxudmFyIFRleHREZWNvZGVyMSA9IHdpbmRvdy5UZXh0RGVjb2RlcjtcclxudmFyIFRleHRFbmNvZGVyMSA9IHdpbmRvdy5UZXh0RW5jb2RlcjtcclxudmFyIEFib3J0Q29udHJvbGxlcjEgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyO1xyXG5pZiAoQWJvcnRDb250cm9sbGVyMSA9PSB1bmRlZmluZWQpIHtcclxuICAgIEFib3J0Q29udHJvbGxlcjEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNpZ25hbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hYm9ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKSB7XHJcbiAgICB0aGlzLmJpdHNOZWVkZWQgPSAwO1xyXG4gICAgdGhpcy5jb2RlUG9pbnQgPSAwO1xyXG59XHJcblRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZSA9IGZ1bmN0aW9uKG9jdGV0cykge1xyXG4gICAgZnVuY3Rpb24gdmFsaWQoY29kZVBvaW50LCBzaGlmdCwgb2N0ZXRzQ291bnQpIHtcclxuICAgICAgICBpZiAob2N0ZXRzQ291bnQgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAxMjggPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDIwNDc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xyXG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID49IDIwNDggPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDU1Mjk1IHx8IGNvZGVQb2ludCA+PSA1NzM0NCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gNjU1MzU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID49IDY1NTM2ID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAxMTE0MTExO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xyXG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29kZVBvaW50ID4+IDYgPiAxNSA/IDMgOiBjb2RlUG9pbnQgPiAzMSA/IDIgOiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+IDE1ID8gMyA6IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xyXG4gICAgICAgICAgICByZXR1cm4gMztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgUkVQTEFDRVIgPSA2NTUzMztcclxuICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkO1xyXG4gICAgdmFyIGNvZGVQb2ludCA9IHRoaXMuY29kZVBvaW50O1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSl7XHJcbiAgICAgICAgdmFyIG9jdGV0ID0gb2N0ZXRzW2ldO1xyXG4gICAgICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvY3RldCA8IDEyOCB8fCBvY3RldCA+IDE5MSB8fCAhdmFsaWQoY29kZVBvaW50IDw8IDYgfCBvY3RldCAmIDYzLCBiaXRzTmVlZGVkIC0gNiwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSkpIHtcclxuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSAwO1xyXG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xyXG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XHJcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDE7XHJcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcclxuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMjtcclxuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xyXG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDYgKiAzO1xyXG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYml0c05lZWRlZCAhPT0gMCAmJiAhdmFsaWQoY29kZVBvaW50LCBiaXRzTmVlZGVkLCBvY3RldHNDb3VudChiaXRzTmVlZGVkLCBjb2RlUG9pbnQpKSkge1xyXG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJpdHNOZWVkZWQgLT0gNjtcclxuICAgICAgICAgICAgY29kZVBvaW50ID0gY29kZVBvaW50IDw8IDYgfCBvY3RldCAmIDYzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoY29kZVBvaW50IDw9IDY1NTM1KSB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoNTUyOTYgKyAoY29kZVBvaW50IC0gNjU1MzUgLSAxID4+IDEwKSk7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NjMyMCArIChjb2RlUG9pbnQgLSA2NTUzNSAtIDEgJiAxMDIzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmJpdHNOZWVkZWQgPSBiaXRzTmVlZGVkO1xyXG4gICAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnQ7XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG59O1xyXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxyXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb24gPSBmdW5jdGlvbigpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUZXh0RGVjb2RlcjEoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyMSgpLmVuY29kZSgndGVzdCcpLCB7XHJcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxyXG4gICAgICAgIH0pID09PSAndGVzdCc7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufTtcclxuLy8gSUUsIEVkZ2VcclxuaWYgKFRleHREZWNvZGVyMSA9PSB1bmRlZmluZWQgfHwgVGV4dEVuY29kZXIxID09IHVuZGVmaW5lZCB8fCAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKSkge1xyXG4gICAgVGV4dERlY29kZXIxID0gVGV4dERlY29kZXJQb2x5ZmlsbDtcclxufVxyXG52YXIgayA9IGZ1bmN0aW9uKCkge1xyXG59O1xyXG5mdW5jdGlvbiBYSFJXcmFwcGVyKHhocikge1xyXG4gICAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuICAgIHRoaXMucmVzcG9uc2VUeXBlID0gJyc7XHJcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAwO1xyXG4gICAgdGhpcy5zdGF0dXMgPSAwO1xyXG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJyc7XHJcbiAgICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnO1xyXG4gICAgdGhpcy5vbnByb2dyZXNzID0gaztcclxuICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gaztcclxuICAgIHRoaXMuX2NvbnRlbnRUeXBlID0gJyc7XHJcbiAgICB0aGlzLl94aHIgPSB4aHI7XHJcbiAgICB0aGlzLl9zZW5kVGltZW91dCA9IDA7XHJcbiAgICB0aGlzLl9hYm9ydCA9IGs7XHJcbn1cclxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsKSB7XHJcbiAgICB0aGlzLl9hYm9ydCh0cnVlKTtcclxuICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgIHZhciB4aHIgPSB0aGlzLl94aHI7XHJcbiAgICB2YXIgc3RhdGUgPSAxO1xyXG4gICAgdmFyIHRpbWVvdXQgPSAwO1xyXG4gICAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbihzaWxlbnQpIHtcclxuICAgICAgICBpZiAodGhhdC5fc2VuZFRpbWVvdXQgIT09IDApIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcclxuICAgICAgICAgICAgc3RhdGUgPSA0O1xyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gaztcclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBrO1xyXG4gICAgICAgICAgICB4aHIub25hYm9ydCA9IGs7XHJcbiAgICAgICAgICAgIHhoci5vbnByb2dyZXNzID0gaztcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGs7XHJcbiAgICAgICAgICAgIC8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XHJcbiAgICAgICAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcclxuICAgICAgICAgICAgeGhyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNpbGVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNDtcclxuICAgICAgICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUgPSAwO1xyXG4gICAgfTtcclxuICAgIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSAxKSB7XHJcbiAgICAgICAgICAgIC8vIHN0YXRlID0gMjtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IDA7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNUZXh0ID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IHhoci5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSUUgPCAxMCB0aHJvd3MgZXhjZXB0aW9uIGZvciBgeGhyLnN0YXR1c2Agd2hlbiB4aHIucmVhZHlTdGF0ZSA9PT0gMiB8fCB4aHIucmVhZHlTdGF0ZSA9PT0gM1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcclxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XHJcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcclxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzID0gMjAwO1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9ICdPSyc7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgdGhhdC5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZTtcclxuICAgICAgICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBvblN0YXJ0KCk7XHJcbiAgICAgICAgaWYgKHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XHJcbiAgICAgICAgICAgIHN0YXRlID0gMztcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9ICcnO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gSUUgOCAtIDkgd2l0aCBYTUxIdHRwUmVxdWVzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDM7XHJcbiAgICAgICAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxyXG4gICAgICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXHJcbiAgICAgICAgb25Qcm9ncmVzcygpO1xyXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xyXG4gICAgICAgICAgICBzdGF0ZSA9IDQ7XHJcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0O1xyXG4gICAgICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHhociAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gT3BlcmEgMTJcclxuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBvblByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XHJcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3MoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcclxuICAgIHhoci5vbmxvYWQgPSBvbkZpbmlzaDtcclxuICAgIHhoci5vbmVycm9yID0gb25GaW5pc2g7XHJcbiAgICAvLyBpbXByb3BlciBmaXggdG8gbWF0Y2ggRmlyZWZveCBiZWhhdmlvciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XHJcbiAgICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XHJcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcclxuICAgIC8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcclxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xyXG4gICAgeGhyLm9uYWJvcnQgPSBvbkZpbmlzaDtcclxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTczNjcyM1xyXG4gICAgaWYgKCEoJ3NlbmRBc0JpbmFyeScgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJiAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKSB7XHJcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzO1xyXG4gICAgfVxyXG4gICAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxyXG4gICAgLy8gT3BlcmEgPCAxMlxyXG4gICAgLy8gRmlyZWZveCA8IDMuNVxyXG4gICAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXHJcbiAgICAvLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxyXG4gICAgLy8gc2VlIGFsc28gIzY0XHJcbiAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlO1xyXG4gICAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XHJcbiAgICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJztcclxuICAgIH1cclxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcclxuICAgIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XHJcbiAgICAgICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXHJcbiAgICAgICAgLy8gIzkxXHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG59O1xyXG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5fYWJvcnQoZmFsc2UpO1xyXG59O1xyXG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250ZW50VHlwZTtcclxufTtcclxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XHJcbiAgICB2YXIgeGhyID0gdGhpcy5feGhyO1xyXG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiB4aHIpIHtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn07XHJcblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkID8gdGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIDogJyc7XHJcbn07XHJcblhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbigpIHtcclxuICAgIC8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxyXG4gICAgaWYgKCEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJiBkb2N1bWVudCAhPSB1bmRlZmluZWQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPSB1bmRlZmluZWQgJiYgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoYXQuX3NlbmRUaW1lb3V0ID0gMDtcclxuICAgICAgICAgICAgdGhhdC5zZW5kKCk7XHJcbiAgICAgICAgfSwgNCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIHhociA9IHRoaXMuX3hocjtcclxuICAgIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxyXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXHJcbiAgICAgICAgeGhyLnNlbmQodW5kZWZpbmVkKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yMSkge1xyXG4gICAgICAgIC8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcclxuICAgICAgICB0aHJvdyBlcnJvcjE7XHJcbiAgICB9XHJcbn07XHJcbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcclxuICAgIHJldHVybiBuYW1lLnJlcGxhY2UoL1tBLVpdL2csIGZ1bmN0aW9uKGMpIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAzMik7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XHJcbiAgICAvLyBHZXQgaGVhZGVyczogaW1wbGVtZW50ZWQgYWNjb3JkaW5nIHRvIG1vemlsbGEncyBleGFtcGxlIGNvZGU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9YTUxIdHRwUmVxdWVzdC9nZXRBbGxSZXNwb25zZUhlYWRlcnMjRXhhbXBsZVxyXG4gICAgdmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoJ1xcclxcbicpO1xyXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKXtcclxuICAgICAgICB2YXIgbGluZSA9IGFycmF5W2ldO1xyXG4gICAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJyk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzogJyk7XHJcbiAgICAgICAgbWFwW3RvTG93ZXJDYXNlKG5hbWUpXSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbWFwID0gbWFwO1xyXG59XHJcbkhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hcFt0b0xvd2VyQ2FzZShuYW1lKV07XHJcbn07XHJcbmZ1bmN0aW9uIFhIUlRyYW5zcG9ydCgpIHtcclxufVxyXG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbih4aHIsIG9uU3RhcnRDYWxsYmFjaywgb25Qcm9ncmVzc0NhbGxiYWNrLCBvbkZpbmlzaENhbGxiYWNrLCB1cmwsIHdpdGhDcmVkZW50aWFscywgaGVhZGVycykge1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgICB2YXIgb2Zmc2V0ID0gMDtcclxuICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgdmFyIGNodW5rID0gcmVzcG9uc2VUZXh0LnNsaWNlKG9mZnNldCk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aDtcclxuICAgICAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO1xyXG4gICAgfTtcclxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHhoci5zdGF0dXM7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQ7XHJcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XHJcbiAgICAgICAgICAgIHZhciBoZWFkZXJzMSA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKTtcclxuICAgICAgICAgICAgb25TdGFydENhbGxiYWNrKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVyczEpLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHhoci5hYm9ydCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XHJcbiAgICAgICAgICAgIG9uRmluaXNoQ2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHdpdGhDcmVkZW50aWFscztcclxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCc7XHJcbiAgICBmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7XHJcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCBoZWFkZXJzW25hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB4aHIuc2VuZCgpO1xyXG59O1xyXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzMikge1xyXG4gICAgdGhpcy5faGVhZGVycyA9IGhlYWRlcnMyO1xyXG59XHJcbkhlYWRlcnNXcmFwcGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSk7XHJcbn07XHJcbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge1xyXG59XHJcbkZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oeGhyLCBvblN0YXJ0Q2FsbGJhY2ssIG9uUHJvZ3Jlc3NDYWxsYmFjaywgb25GaW5pc2hDYWxsYmFjaywgdXJsLCB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMyKSB7XHJcbiAgICB2YXIgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIxKCk7XHJcbiAgICB2YXIgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWwgLy8gc2VlICMxMjBcclxuICAgIDtcclxuICAgIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcjEoKTtcclxuICAgIGZldGNoKHVybCwge1xyXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMyLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiB3aXRoQ3JlZGVudGlhbHMgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxyXG4gICAgICAgIHNpZ25hbDogc2lnbmFsLFxyXG4gICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnXHJcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIHJlYWRlciA9IHJlc3BvbnNlLmJvZHkuZ2V0UmVhZGVyKCk7XHJcbiAgICAgICAgb25TdGFydENhbGxiYWNrKHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLCBuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5jYW5jZWwoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5kb25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGU6IGJ5dGVzIGluIHRleHREZWNvZGVyIGFyZSBpZ25vcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSB0ZXh0RGVjb2Rlci5kZWNvZGUocmVzdWx0LnZhbHVlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW06IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVsnY2F0Y2gnXShmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9KTtcclxufTtcclxuZnVuY3Rpb24gRXZlbnRUYXJnZXQxKCkge1xyXG4gICAgdGhpcy5fbGlzdGVuZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxufVxyXG5mdW5jdGlvbiB0aHJvd0Vycm9yKGUpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhyb3cgZTtcclxuICAgIH0sIDApO1xyXG59XHJcbkV2ZW50VGFyZ2V0MS5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC50YXJnZXQgPSB0aGlzO1xyXG4gICAgdmFyIHR5cGVMaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNbZXZlbnQudHlwZV07XHJcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGg7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKXtcclxuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIuaGFuZGxlRXZlbnQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5FdmVudFRhcmdldDEucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbih0eXBlLCBsaXN0ZW5lcikge1xyXG4gICAgdHlwZSA9IFN0cmluZyh0eXBlKTtcclxuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XHJcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXTtcclxuICAgIGlmICh0eXBlTGlzdGVuZXJzID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHR5cGVMaXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICBsaXN0ZW5lcnNbdHlwZV0gPSB0eXBlTGlzdGVuZXJzO1xyXG4gICAgfVxyXG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XHJcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSl7XHJcbiAgICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvdW5kKSB7XHJcbiAgICAgICAgdHlwZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgIH1cclxufTtcclxuRXZlbnRUYXJnZXQxLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcclxuICAgIHR5cGUgPSBTdHJpbmcodHlwZSk7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xyXG4gICAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV07XHJcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2YXIgZmlsdGVyZWQgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldICE9PSBsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzW3R5cGVdID0gZmlsdGVyZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiBFdmVudDEodHlwZSkge1xyXG4gICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIE1lc3NhZ2VFdmVudDEodHlwZSwgb3B0aW9ucykge1xyXG4gICAgRXZlbnQxLmNhbGwodGhpcywgdHlwZSk7XHJcbiAgICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGE7XHJcbiAgICB0aGlzLmxhc3RFdmVudElkID0gb3B0aW9ucy5sYXN0RXZlbnRJZDtcclxufVxyXG5NZXNzYWdlRXZlbnQxLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQxLnByb3RvdHlwZSk7XHJcbmZ1bmN0aW9uIENvbm5lY3Rpb25FdmVudCh0eXBlLCBvcHRpb25zKSB7XHJcbiAgICBFdmVudDEuY2FsbCh0aGlzLCB0eXBlKTtcclxuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXM7XHJcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHQ7XHJcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XHJcbn1cclxuQ29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQxLnByb3RvdHlwZSk7XHJcbnZhciBXQUlUSU5HID0gLTE7XHJcbnZhciBDT05ORUNUSU5HID0gMDtcclxudmFyIE9QRU4gPSAxO1xyXG52YXIgQ0xPU0VEID0gMjtcclxudmFyIEFGVEVSX0NSID0gLTE7XHJcbnZhciBGSUVMRF9TVEFSVCA9IDA7XHJcbnZhciBGSUVMRCA9IDE7XHJcbnZhciBWQUxVRV9TVEFSVCA9IDI7XHJcbnZhciBWQUxVRSA9IDM7XHJcbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7XHJcbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMDtcclxudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMDtcclxudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSwgZGVmKSB7XHJcbiAgICB2YXIgbiA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XHJcbiAgICBpZiAobiAhPT0gbikge1xyXG4gICAgICAgIG4gPSBkZWY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKTtcclxufTtcclxudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbihuKSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pO1xyXG59O1xyXG52YXIgZmlyZSA9IGZ1bmN0aW9uKHRoYXQsIGYsIGV2ZW50KSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBmLmNhbGwodGhhdCwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB0aHJvd0Vycm9yKGUpO1xyXG4gICAgfVxyXG59O1xyXG5mdW5jdGlvbiBFdmVudFNvdXJjZVBvbHlmaWxsKHVybCwgb3B0aW9ucykge1xyXG4gICAgRXZlbnRUYXJnZXQxLmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMub25tZXNzYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5vbmVycm9yID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy51cmwgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX2Nsb3NlID0gdW5kZWZpbmVkO1xyXG4gICAgc3RhcnQodGhpcywgdXJsLCBvcHRpb25zKTtcclxufVxyXG52YXIgaXNGZXRjaFN1cHBvcnRlZCA9IGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZTEgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZTEucHJvdG90eXBlO1xyXG5mdW5jdGlvbiBzdGFydChlcywgdXJsLCBvcHRpb25zKSB7XHJcbiAgICB1cmwgPSBTdHJpbmcodXJsKTtcclxuICAgIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKTtcclxuICAgIHZhciBpbml0aWFsUmV0cnkgPSBjbGFtcER1cmF0aW9uKDEwMDApO1xyXG4gICAgdmFyIGhlYXJ0YmVhdFRpbWVvdXQgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQgIT0gdW5kZWZpbmVkID8gcGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsIDQ1MDAwKSA6IGNsYW1wRHVyYXRpb24oNDUwMDApO1xyXG4gICAgdmFyIGxhc3RFdmVudElkID0gJyc7XHJcbiAgICB2YXIgcmV0cnkgPSBpbml0aWFsUmV0cnk7XHJcbiAgICB2YXIgd2FzQWN0aXZpdHkgPSBmYWxzZTtcclxuICAgIHZhciBoZWFkZXJzMiA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWQgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpIDogdW5kZWZpbmVkO1xyXG4gICAgdmFyIEN1cnJlbnRUcmFuc3BvcnQgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQgPyBvcHRpb25zLlRyYW5zcG9ydCA6IFhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgdmFyIHhociA9IGlzRmV0Y2hTdXBwb3J0ZWQgJiYgIShvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWQpID8gdW5kZWZpbmVkIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSk7XHJcbiAgICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpO1xyXG4gICAgdmFyIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgdmFyIHRpbWVvdXQgPSAwO1xyXG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkc7XHJcbiAgICB2YXIgZGF0YUJ1ZmZlciA9ICcnO1xyXG4gICAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJyc7XHJcbiAgICB2YXIgZXZlbnRUeXBlQnVmZmVyID0gJyc7XHJcbiAgICB2YXIgdGV4dEJ1ZmZlciA9ICcnO1xyXG4gICAgdmFyIHN0YXRlID0gRklFTERfU1RBUlQ7XHJcbiAgICB2YXIgZmllbGRTdGFydCA9IDA7XHJcbiAgICB2YXIgdmFsdWVTdGFydCA9IDA7XHJcbiAgICB2YXIgb25TdGFydCA9IGZ1bmN0aW9uKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIGhlYWRlcnMzLCBjYW5jZWwpIHtcclxuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gY2FuY2VsO1xyXG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDAgJiYgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOO1xyXG4gICAgICAgICAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XHJcbiAgICAgICAgICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTjtcclxuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzM1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiRXZlbnRTb3VyY2UncyByZXNwb25zZSBoYXMgYSBzdGF0dXMgXCIgKyBzdGF0dXMgKyAnICcgKyBzdGF0dXNUZXh0ICsgJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIgKyAoY29udGVudFR5cGUgPT0gdW5kZWZpbmVkID8gJy0nIDogY29udGVudFR5cGUucmVwbGFjZSgvXFxzKy9nLCAnICcpKSArICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzM1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uKHRleHRDaHVuaykge1xyXG4gICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcclxuICAgICAgICAgICAgdmFyIG4gPSAtMTtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRleHRDaHVuay5sZW5ndGg7IGkgKz0gMSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHRleHRDaHVuay5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG4gPSBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpO1xyXG4gICAgICAgICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSk7XHJcbiAgICAgICAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IodmFyIHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCBjaHVuay5sZW5ndGg7IHBvc2l0aW9uICs9IDEpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IgJiYgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgIT09IEZJRUxEX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNodW5rLnNsaWNlKHZhbHVlU3RhcnQgKyAodmFsdWVTdGFydCA8IHBvc2l0aW9uICYmIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApID8gMSA6IDApLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQgPT09ICdkYXRhJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gJ1xcbic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdpZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2V2ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFCdWZmZXIgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQgPSBsYXN0RXZlbnRJZEJ1ZmZlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnbWVzc2FnZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBNZXNzYWdlRXZlbnQxKGV2ZW50VHlwZUJ1ZmZlciwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhQnVmZmVyLnNsaWNlKDEpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZDogbGFzdEV2ZW50SWRCdWZmZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnbWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25tZXNzYWdlLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApID8gQUZURVJfQ1IgOiBGSUVMRF9TVEFSVDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTEQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjID09PSAnOicuY2hhckNvZGVBdCgwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gVkFMVUVfU1RBUlQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gVkFMVUU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcclxuICAgICAgICAgICAgY3VycmVudFN0YXRlID0gV0FJVElORztcclxuICAgICAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgb25UaW1lb3V0KCk7XHJcbiAgICAgICAgICAgIH0sIHJldHJ5KTtcclxuICAgICAgICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKTtcclxuICAgICAgICAgICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkc7XHJcbiAgICAgICAgICAgIHZhciBldmVudCA9IG5ldyBFdmVudDEoJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgICAgICBmaXJlKGVzLCBlcy5vbmVycm9yLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBjbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRDtcclxuICAgICAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlcy5yZWFkeVN0YXRlID0gQ0xPU0VEO1xyXG4gICAgfTtcclxuICAgIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aW1lb3V0ID0gMDtcclxuICAgICAgICBpZiAoY3VycmVudFN0YXRlICE9PSBXQUlUSU5HKSB7XHJcbiAgICAgICAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcignTm8gYWN0aXZpdHkgd2l0aGluICcgKyBoZWFydGJlYXRUaW1lb3V0ICsgJyBtaWxsaXNlY29uZHMuIFJlY29ubmVjdGluZy4nKSk7XHJcbiAgICAgICAgICAgICAgICBjYW5jZWxGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KCk7XHJcbiAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdhc0FjdGl2aXR5ID0gZmFsc2U7XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xyXG4gICAgICAgIH0sIGhlYXJ0YmVhdFRpbWVvdXQpO1xyXG4gICAgICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkc7XHJcbiAgICAgICAgZGF0YUJ1ZmZlciA9ICcnO1xyXG4gICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICcnO1xyXG4gICAgICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWQ7XHJcbiAgICAgICAgdGV4dEJ1ZmZlciA9ICcnO1xyXG4gICAgICAgIGZpZWxkU3RhcnQgPSAwO1xyXG4gICAgICAgIHZhbHVlU3RhcnQgPSAwO1xyXG4gICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XHJcbiAgICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XHJcbiAgICAgICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxyXG4gICAgICAgIHZhciByZXF1ZXN0VVJMID0gdXJsO1xyXG4gICAgICAgIGlmICh1cmwuc2xpY2UoMCwgNSkgIT09ICdkYXRhOicgJiYgdXJsLnNsaWNlKDAsIDUpICE9PSAnYmxvYjonKSB7XHJcbiAgICAgICAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RVUkwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdsYXN0RXZlbnRJZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXF1ZXN0SGVhZGVyc1snQWNjZXB0J10gPSAndGV4dC9ldmVudC1zdHJlYW0nO1xyXG4gICAgICAgIGlmIChoZWFkZXJzMiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBuYW1lIGluIGhlYWRlcnMyKXtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVyczIsIG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzMltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0cmFuc3BvcnQub3Blbih4aHIsIG9uU3RhcnQsIG9uUHJvZ3Jlc3MsIG9uRmluaXNoLCByZXF1ZXN0VVJMLCB3aXRoQ3JlZGVudGlhbHMsIHJlcXVlc3RIZWFkZXJzKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjbG9zZSgpO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgZXMudXJsID0gdXJsO1xyXG4gICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkc7XHJcbiAgICBlcy53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XHJcbiAgICBlcy5fY2xvc2UgPSBjbG9zZTtcclxuICAgIG9uVGltZW91dCgpO1xyXG59XHJcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldDEucHJvdG90eXBlKTtcclxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkc7XHJcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLk9QRU4gPSBPUEVOO1xyXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5DTE9TRUQgPSBDTE9TRUQ7XHJcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0aGlzLl9jbG9zZSgpO1xyXG59O1xyXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HO1xyXG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOO1xyXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRDtcclxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xyXG52YXIgX2RlZmF1bHQgPSBFdmVudFNvdXJjZVBvbHlmaWxsO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50LXNvdXJjZS1wb2x5ZmlsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5kaXNwbGF5Q29udGVudCA9IGRpc3BsYXlDb250ZW50O1xyXG5mdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xyXG4gICAgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yKHZhciB4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksIGkgPSB4Lmxlbmd0aDsgaS0tOyl7XHJcbiAgICAgICAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdWMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuY2xvc2VQaW5nID0gY2xvc2VQaW5nO1xyXG5leHBvcnRzLnNldHVwUGluZyA9IHNldHVwUGluZztcclxuZXhwb3J0cy5jdXJyZW50UGFnZSA9IHZvaWQgMDtcclxudmFyIF9ldmVudHNvdXJjZSA9IHJlcXVpcmUoXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIik7XHJcbmxldCBldnRTb3VyY2U7XHJcbmxldCBjdXJyZW50UGFnZTtcclxuZXhwb3J0cy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xyXG5mdW5jdGlvbiBjbG9zZVBpbmcoKSB7XHJcbiAgICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKTtcclxuICAgIGV2dFNvdXJjZSA9IG51bGw7XHJcbn1cclxuZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LCBwYXRobmFtZUZuLCByZXRyeSkge1xyXG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRobmFtZUZuKCk7XHJcbiAgICAvLyBNYWtlIHN1cmUgdG8gb25seSBjcmVhdGUgbmV3IEV2ZW50U291cmNlIHJlcXVlc3QgaWYgcGFnZSBoYXMgY2hhbmdlZFxyXG4gICAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVybjtcclxuICAgIGV4cG9ydHMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSA9IHBhdGhuYW1lO1xyXG4gICAgLy8gY2xvc2UgY3VycmVudCBFdmVudFNvdXJjZSBjb25uZWN0aW9uXHJcbiAgICBjbG9zZVBpbmcoKTtcclxuICAgIGV2dFNvdXJjZSA9ICgwLCBfZXZlbnRzb3VyY2UpLmdldEV2ZW50U291cmNlV3JhcHBlcih7XHJcbiAgICAgICAgcGF0aDogYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtlbmNvZGVVUklDb21wb25lbnQoY3VycmVudFBhZ2UpfWAsXHJcbiAgICAgICAgdGltZW91dDogNTAwMFxyXG4gICAgfSk7XHJcbiAgICBldnRTb3VyY2UuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCk9PntcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm47XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGRvbid0IGF0dGVtcHQgZmV0Y2hpbmcgdGhlIHBhZ2UgaWYgd2UncmUgYWxyZWFkeSBzaG93aW5nXHJcbiAgICAgICAgICAgIC8vIHRoZSBkZXYgb3ZlcmxheSBhcyB0aGlzIGNhbiBjYXVzZSB0aGUgZXJyb3IgdG8gYmUgdHJpZ2dlcmVkXHJcbiAgICAgICAgICAgIC8vIHJlcGVhdGVkbHlcclxuICAgICAgICAgICAgaWYgKHBheWxvYWQuaW52YWxpZCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmVycikge1xyXG4gICAgICAgICAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxyXG4gICAgICAgICAgICAgICAgZmV0Y2gobG9jYXRpb24uaHJlZiwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXHJcbiAgICAgICAgICAgICAgICB9KS50aGVuKChwYWdlUmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzLm1hcCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJfZXZlbnRTb3VyY2VQb2x5ZmlsbCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwidmFsdWUiLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsIndpbmRvdyIsIkV2ZW50U291cmNlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0ZXh0Q29udGVudCIsImFzc2V0UHJlZml4IiwicGFnZSIsIm1vc3RSZWNlbnRIYXNoIiwiY3VySGFzaCIsIl9fd2VicGFja19oYXNoX18iLCJob3RVcGRhdGVQYXRoIiwiZW5kc1dpdGgiLCJpc1VwZGF0ZUF2YWlsYWJsZSIsImNhbkFwcGx5VXBkYXRlcyIsIm1vZHVsZSIsImhvdCIsInN0YXR1cyIsIl90cnlBcHBseVVwZGF0ZXMiLCJmZXRjaCIsIl9fd2VicGFja19ydW50aW1lX2lkX18iLCJyZXMiLCJqc29uIiwianNvbkRhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJBcnJheSIsImlzQXJyYXkiLCJjIiwiT2JqZWN0Iiwia2V5cyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsInRyeUFwcGx5VXBkYXRlcyIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJzZXR1cFBpbmciLCJkaXNwbGF5Q29udGVudCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImdldEV2ZW50U291cmNlV3JhcHBlciIsImV2ZW50Q2FsbGJhY2tzIiwiRXZlbnRTb3VyY2VXcmFwcGVyIiwib3B0aW9ucyIsInNvdXJjZSIsImxhc3RBY3Rpdml0eSIsIkRhdGUiLCJsaXN0ZW5lcnMiLCJ0aW1lb3V0IiwiaW5pdCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJoYW5kbGVEaXNjb25uZWN0IiwicGF0aCIsIm9ub3BlbiIsImhhbmRsZU9ubGluZSIsIm9uZXJyb3IiLCJvbm1lc3NhZ2UiLCJoYW5kbGVNZXNzYWdlIiwibG9nIiwiaSIsImxlbmd0aCIsImZvckVhY2giLCJjYiIsInVuZmlsdGVyZWQiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwicHVzaCIsIlJlc3BvbnNlMSIsIlJlc3BvbnNlIiwiVGV4dERlY29kZXIxIiwiVGV4dERlY29kZXIiLCJUZXh0RW5jb2RlcjEiLCJUZXh0RW5jb2RlciIsIkFib3J0Q29udHJvbGxlcjEiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNlbmQiLCJlcnJvcjEiLCJ0b0xvd2VyQ2FzZSIsImNoYXJDb2RlQXQiLCJIZWFkZXJzUG9seWZpbGwiLCJhbGwiLCJtYXAiLCJjcmVhdGUiLCJhcnJheSIsInNwbGl0IiwibGluZSIsInBhcnRzIiwiam9pbiIsIl9tYXAiLCJnZXQiLCJYSFJUcmFuc3BvcnQiLCJvblN0YXJ0Q2FsbGJhY2siLCJvblByb2dyZXNzQ2FsbGJhY2siLCJvbkZpbmlzaENhbGxiYWNrIiwiaGVhZGVycyIsIm9mZnNldCIsImNodW5rIiwic2xpY2UiLCJoZWFkZXJzMSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiaGVhZGVyczIiLCJfaGVhZGVycyIsIkZldGNoVHJhbnNwb3J0IiwiY29udHJvbGxlciIsInRleHREZWNvZGVyIiwiY3JlZGVudGlhbHMiLCJjYWNoZSIsInJlc3BvbnNlIiwicmVhZGVyIiwiYm9keSIsImdldFJlYWRlciIsImNhbmNlbCIsInJlYWROZXh0Q2h1bmsiLCJyZWFkIiwicmVzdWx0IiwiRXZlbnRUYXJnZXQxIiwiX2xpc3RlbmVycyIsInRocm93RXJyb3IiLCJlIiwiZGlzcGF0Y2hFdmVudCIsInRhcmdldCIsInR5cGVMaXN0ZW5lcnMiLCJ0eXBlIiwibGlzdGVuZXIiLCJoYW5kbGVFdmVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3VuZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmaWx0ZXJlZCIsIkV2ZW50MSIsIk1lc3NhZ2VFdmVudDEiLCJsYXN0RXZlbnRJZCIsIkNvbm5lY3Rpb25FdmVudCIsIldBSVRJTkciLCJDT05ORUNUSU5HIiwiT1BFTiIsIkNMT1NFRCIsIkFGVEVSX0NSIiwiRklFTERfU1RBUlQiLCJGSUVMRCIsIlZBTFVFX1NUQVJUIiwiVkFMVUUiLCJjb250ZW50VHlwZVJlZ0V4cCIsIk1JTklNVU1fRFVSQVRJT04iLCJNQVhJTVVNX0RVUkFUSU9OIiwicGFyc2VEdXJhdGlvbiIsImRlZiIsIm4iLCJwYXJzZUludCIsImNsYW1wRHVyYXRpb24iLCJNYXRoIiwibWluIiwibWF4IiwiZmlyZSIsImYiLCJFdmVudFNvdXJjZVBvbHlmaWxsIiwiX2Nsb3NlIiwic3RhcnQiLCJpc0ZldGNoU3VwcG9ydGVkIiwiZXMiLCJCb29sZWFuIiwiaW5pdGlhbFJldHJ5IiwiaGVhcnRiZWF0VGltZW91dCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJzdHJpbmdpZnkiLCJDdXJyZW50VHJhbnNwb3J0IiwiVHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJoZWFkZXJzMyIsInRlc3QiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwiX2RlZmF1bHQiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIngiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2xvc2VQaW5nIiwiY3VycmVudFBhZ2UiLCJldnRTb3VyY2UiLCJwYXRobmFtZUZuIiwicGF0aG5hbWUiLCJwYXlsb2FkIiwiaW52YWxpZCIsIl9fTkVYVF9EQVRBX18iLCJocmVmIiwicGFnZVJlcyJdLCJzb3VyY2VSb290IjoiIn0=