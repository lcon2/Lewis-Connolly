var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/graphology/dist/graphology.umd.min.js
var require_graphology_umd_min = __commonJS({
  "node_modules/graphology/dist/graphology.umd.min.js"(exports, module) {
    !(function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).graphology = e();
    })(exports, (function() {
      "use strict";
      function t(e2) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t2) {
          return typeof t2;
        } : function(t2) {
          return t2 && "function" == typeof Symbol && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : typeof t2;
        }, t(e2);
      }
      function e(t2, e2) {
        t2.prototype = Object.create(e2.prototype), t2.prototype.constructor = t2, r(t2, e2);
      }
      function n(t2) {
        return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
          return t3.__proto__ || Object.getPrototypeOf(t3);
        }, n(t2);
      }
      function r(t2, e2) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
          return t3.__proto__ = e3, t3;
        }, r(t2, e2);
      }
      function i() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if ("function" == typeof Proxy) return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
          }))), true;
        } catch (t2) {
          return false;
        }
      }
      function o(t2, e2, n2) {
        return o = i() ? Reflect.construct.bind() : function(t3, e3, n3) {
          var i2 = [null];
          i2.push.apply(i2, e3);
          var o2 = new (Function.bind.apply(t3, i2))();
          return n3 && r(o2, n3.prototype), o2;
        }, o.apply(null, arguments);
      }
      function a(t2) {
        var e2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
        return a = function(t3) {
          if (null === t3 || (i2 = t3, -1 === Function.toString.call(i2).indexOf("[native code]"))) return t3;
          var i2;
          if ("function" != typeof t3) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== e2) {
            if (e2.has(t3)) return e2.get(t3);
            e2.set(t3, a2);
          }
          function a2() {
            return o(t3, arguments, n(this).constructor);
          }
          return a2.prototype = Object.create(t3.prototype, { constructor: { value: a2, enumerable: false, writable: true, configurable: true } }), r(a2, t3);
        }, a(t2);
      }
      function c(t2) {
        if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t2;
      }
      var u = function() {
        for (var t2 = arguments[0], e2 = 1, n2 = arguments.length; e2 < n2; e2++) if (arguments[e2]) for (var r2 in arguments[e2]) t2[r2] = arguments[e2][r2];
        return t2;
      };
      function d(t2, e2, n2, r2) {
        var i2 = t2._nodes.get(e2), o2 = null;
        return i2 ? o2 = "mixed" === r2 ? i2.out && i2.out[n2] || i2.undirected && i2.undirected[n2] : "directed" === r2 ? i2.out && i2.out[n2] : i2.undirected && i2.undirected[n2] : o2;
      }
      function s(e2) {
        return "object" === t(e2) && null !== e2;
      }
      function h(t2) {
        var e2;
        for (e2 in t2) return false;
        return true;
      }
      function p(t2, e2, n2) {
        Object.defineProperty(t2, e2, { enumerable: false, configurable: false, writable: true, value: n2 });
      }
      function f(t2, e2, n2) {
        var r2 = { enumerable: true, configurable: true };
        "function" == typeof n2 ? r2.get = n2 : (r2.value = n2, r2.writable = false), Object.defineProperty(t2, e2, r2);
      }
      function l(t2) {
        return !!s(t2) && !(t2.attributes && !Array.isArray(t2.attributes));
      }
      "function" == typeof Object.assign && (u = Object.assign);
      var g, y = { exports: {} }, w = "object" == typeof Reflect ? Reflect : null, v = w && "function" == typeof w.apply ? w.apply : function(t2, e2, n2) {
        return Function.prototype.apply.call(t2, e2, n2);
      };
      g = w && "function" == typeof w.ownKeys ? w.ownKeys : Object.getOwnPropertySymbols ? function(t2) {
        return Object.getOwnPropertyNames(t2).concat(Object.getOwnPropertySymbols(t2));
      } : function(t2) {
        return Object.getOwnPropertyNames(t2);
      };
      var b = Number.isNaN || function(t2) {
        return t2 != t2;
      };
      function m() {
        m.init.call(this);
      }
      y.exports = m, y.exports.once = function(t2, e2) {
        return new Promise((function(n2, r2) {
          function i2(n3) {
            t2.removeListener(e2, o2), r2(n3);
          }
          function o2() {
            "function" == typeof t2.removeListener && t2.removeListener("error", i2), n2([].slice.call(arguments));
          }
          U(t2, e2, o2, { once: true }), "error" !== e2 && (function(t3, e3, n3) {
            "function" == typeof t3.on && U(t3, "error", e3, n3);
          })(t2, i2, { once: true });
        }));
      }, m.EventEmitter = m, m.prototype._events = void 0, m.prototype._eventsCount = 0, m.prototype._maxListeners = void 0;
      var k = 10;
      function _(t2) {
        if ("function" != typeof t2) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t2);
      }
      function G(t2) {
        return void 0 === t2._maxListeners ? m.defaultMaxListeners : t2._maxListeners;
      }
      function x(t2, e2, n2, r2) {
        var i2, o2, a2, c2;
        if (_(n2), void 0 === (o2 = t2._events) ? (o2 = t2._events = /* @__PURE__ */ Object.create(null), t2._eventsCount = 0) : (void 0 !== o2.newListener && (t2.emit("newListener", e2, n2.listener ? n2.listener : n2), o2 = t2._events), a2 = o2[e2]), void 0 === a2) a2 = o2[e2] = n2, ++t2._eventsCount;
        else if ("function" == typeof a2 ? a2 = o2[e2] = r2 ? [n2, a2] : [a2, n2] : r2 ? a2.unshift(n2) : a2.push(n2), (i2 = G(t2)) > 0 && a2.length > i2 && !a2.warned) {
          a2.warned = true;
          var u2 = new Error("Possible EventEmitter memory leak detected. " + a2.length + " " + String(e2) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          u2.name = "MaxListenersExceededWarning", u2.emitter = t2, u2.type = e2, u2.count = a2.length, c2 = u2, console && console.warn && console.warn(c2);
        }
        return t2;
      }
      function E() {
        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
      }
      function A(t2, e2, n2) {
        var r2 = { fired: false, wrapFn: void 0, target: t2, type: e2, listener: n2 }, i2 = E.bind(r2);
        return i2.listener = n2, r2.wrapFn = i2, i2;
      }
      function L(t2, e2, n2) {
        var r2 = t2._events;
        if (void 0 === r2) return [];
        var i2 = r2[e2];
        return void 0 === i2 ? [] : "function" == typeof i2 ? n2 ? [i2.listener || i2] : [i2] : n2 ? (function(t3) {
          for (var e3 = new Array(t3.length), n3 = 0; n3 < e3.length; ++n3) e3[n3] = t3[n3].listener || t3[n3];
          return e3;
        })(i2) : D(i2, i2.length);
      }
      function S(t2) {
        var e2 = this._events;
        if (void 0 !== e2) {
          var n2 = e2[t2];
          if ("function" == typeof n2) return 1;
          if (void 0 !== n2) return n2.length;
        }
        return 0;
      }
      function D(t2, e2) {
        for (var n2 = new Array(e2), r2 = 0; r2 < e2; ++r2) n2[r2] = t2[r2];
        return n2;
      }
      function U(t2, e2, n2, r2) {
        if ("function" == typeof t2.on) r2.once ? t2.once(e2, n2) : t2.on(e2, n2);
        else {
          if ("function" != typeof t2.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t2);
          t2.addEventListener(e2, (function i2(o2) {
            r2.once && t2.removeEventListener(e2, i2), n2(o2);
          }));
        }
      }
      function N(t2) {
        if ("function" != typeof t2) throw new Error("obliterator/iterator: expecting a function!");
        this.next = t2;
      }
      Object.defineProperty(m, "defaultMaxListeners", { enumerable: true, get: function() {
        return k;
      }, set: function(t2) {
        if ("number" != typeof t2 || t2 < 0 || b(t2)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t2 + ".");
        k = t2;
      } }), m.init = function() {
        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      }, m.prototype.setMaxListeners = function(t2) {
        if ("number" != typeof t2 || t2 < 0 || b(t2)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t2 + ".");
        return this._maxListeners = t2, this;
      }, m.prototype.getMaxListeners = function() {
        return G(this);
      }, m.prototype.emit = function(t2) {
        for (var e2 = [], n2 = 1; n2 < arguments.length; n2++) e2.push(arguments[n2]);
        var r2 = "error" === t2, i2 = this._events;
        if (void 0 !== i2) r2 = r2 && void 0 === i2.error;
        else if (!r2) return false;
        if (r2) {
          var o2;
          if (e2.length > 0 && (o2 = e2[0]), o2 instanceof Error) throw o2;
          var a2 = new Error("Unhandled error." + (o2 ? " (" + o2.message + ")" : ""));
          throw a2.context = o2, a2;
        }
        var c2 = i2[t2];
        if (void 0 === c2) return false;
        if ("function" == typeof c2) v(c2, this, e2);
        else {
          var u2 = c2.length, d2 = D(c2, u2);
          for (n2 = 0; n2 < u2; ++n2) v(d2[n2], this, e2);
        }
        return true;
      }, m.prototype.addListener = function(t2, e2) {
        return x(this, t2, e2, false);
      }, m.prototype.on = m.prototype.addListener, m.prototype.prependListener = function(t2, e2) {
        return x(this, t2, e2, true);
      }, m.prototype.once = function(t2, e2) {
        return _(e2), this.on(t2, A(this, t2, e2)), this;
      }, m.prototype.prependOnceListener = function(t2, e2) {
        return _(e2), this.prependListener(t2, A(this, t2, e2)), this;
      }, m.prototype.removeListener = function(t2, e2) {
        var n2, r2, i2, o2, a2;
        if (_(e2), void 0 === (r2 = this._events)) return this;
        if (void 0 === (n2 = r2[t2])) return this;
        if (n2 === e2 || n2.listener === e2) 0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : (delete r2[t2], r2.removeListener && this.emit("removeListener", t2, n2.listener || e2));
        else if ("function" != typeof n2) {
          for (i2 = -1, o2 = n2.length - 1; o2 >= 0; o2--) if (n2[o2] === e2 || n2[o2].listener === e2) {
            a2 = n2[o2].listener, i2 = o2;
            break;
          }
          if (i2 < 0) return this;
          0 === i2 ? n2.shift() : (function(t3, e3) {
            for (; e3 + 1 < t3.length; e3++) t3[e3] = t3[e3 + 1];
            t3.pop();
          })(n2, i2), 1 === n2.length && (r2[t2] = n2[0]), void 0 !== r2.removeListener && this.emit("removeListener", t2, a2 || e2);
        }
        return this;
      }, m.prototype.off = m.prototype.removeListener, m.prototype.removeAllListeners = function(t2) {
        var e2, n2, r2;
        if (void 0 === (n2 = this._events)) return this;
        if (void 0 === n2.removeListener) return 0 === arguments.length ? (this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0) : void 0 !== n2[t2] && (0 == --this._eventsCount ? this._events = /* @__PURE__ */ Object.create(null) : delete n2[t2]), this;
        if (0 === arguments.length) {
          var i2, o2 = Object.keys(n2);
          for (r2 = 0; r2 < o2.length; ++r2) "removeListener" !== (i2 = o2[r2]) && this.removeAllListeners(i2);
          return this.removeAllListeners("removeListener"), this._events = /* @__PURE__ */ Object.create(null), this._eventsCount = 0, this;
        }
        if ("function" == typeof (e2 = n2[t2])) this.removeListener(t2, e2);
        else if (void 0 !== e2) for (r2 = e2.length - 1; r2 >= 0; r2--) this.removeListener(t2, e2[r2]);
        return this;
      }, m.prototype.listeners = function(t2) {
        return L(this, t2, true);
      }, m.prototype.rawListeners = function(t2) {
        return L(this, t2, false);
      }, m.listenerCount = function(t2, e2) {
        return "function" == typeof t2.listenerCount ? t2.listenerCount(e2) : S.call(t2, e2);
      }, m.prototype.listenerCount = S, m.prototype.eventNames = function() {
        return this._eventsCount > 0 ? g(this._events) : [];
      }, "undefined" != typeof Symbol && (N.prototype[Symbol.iterator] = function() {
        return this;
      }), N.of = function() {
        var t2 = arguments, e2 = t2.length, n2 = 0;
        return new N((function() {
          return n2 >= e2 ? { done: true } : { done: false, value: t2[n2++] };
        }));
      }, N.empty = function() {
        return new N((function() {
          return { done: true };
        }));
      }, N.fromSequence = function(t2) {
        var e2 = 0, n2 = t2.length;
        return new N((function() {
          return e2 >= n2 ? { done: true } : { done: false, value: t2[e2++] };
        }));
      }, N.is = function(t2) {
        return t2 instanceof N || "object" == typeof t2 && null !== t2 && "function" == typeof t2.next;
      };
      var O = N, j = {};
      j.ARRAY_BUFFER_SUPPORT = "undefined" != typeof ArrayBuffer, j.SYMBOL_SUPPORT = "undefined" != typeof Symbol;
      var C = O, M = j, z = M.ARRAY_BUFFER_SUPPORT, W = M.SYMBOL_SUPPORT;
      var P = function(t2) {
        var e2 = (function(t3) {
          return "string" == typeof t3 || Array.isArray(t3) || z && ArrayBuffer.isView(t3) ? C.fromSequence(t3) : "object" != typeof t3 || null === t3 ? null : W && "function" == typeof t3[Symbol.iterator] ? t3[Symbol.iterator]() : "function" == typeof t3.next ? t3 : null;
        })(t2);
        if (!e2) throw new Error("obliterator: target is not iterable nor a valid iterator.");
        return e2;
      }, R = P, K = function(t2, e2) {
        for (var n2, r2 = arguments.length > 1 ? e2 : 1 / 0, i2 = r2 !== 1 / 0 ? new Array(r2) : [], o2 = 0, a2 = R(t2); ; ) {
          if (o2 === r2) return i2;
          if ((n2 = a2.next()).done) return o2 !== e2 && (i2.length = o2), i2;
          i2[o2++] = n2.value;
        }
      }, T = (function(t2) {
        function n2(e2) {
          var n3;
          return (n3 = t2.call(this) || this).name = "GraphError", n3.message = e2, n3;
        }
        return e(n2, t2), n2;
      })(a(Error)), B = (function(t2) {
        function n2(e2) {
          var r2;
          return (r2 = t2.call(this, e2) || this).name = "InvalidArgumentsGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
        }
        return e(n2, t2), n2;
      })(T), F = (function(t2) {
        function n2(e2) {
          var r2;
          return (r2 = t2.call(this, e2) || this).name = "NotFoundGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
        }
        return e(n2, t2), n2;
      })(T), I = (function(t2) {
        function n2(e2) {
          var r2;
          return (r2 = t2.call(this, e2) || this).name = "UsageGraphError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(c(r2), n2.prototype.constructor), r2;
        }
        return e(n2, t2), n2;
      })(T);
      function Y(t2, e2) {
        this.key = t2, this.attributes = e2, this.clear();
      }
      function q(t2, e2) {
        this.key = t2, this.attributes = e2, this.clear();
      }
      function J(t2, e2) {
        this.key = t2, this.attributes = e2, this.clear();
      }
      function V(t2, e2, n2, r2, i2) {
        this.key = e2, this.attributes = i2, this.undirected = t2, this.source = n2, this.target = r2;
      }
      Y.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.undirectedDegree = 0, this.undirectedLoops = 0, this.directedLoops = 0, this.in = {}, this.out = {}, this.undirected = {};
      }, q.prototype.clear = function() {
        this.inDegree = 0, this.outDegree = 0, this.directedLoops = 0, this.in = {}, this.out = {};
      }, J.prototype.clear = function() {
        this.undirectedDegree = 0, this.undirectedLoops = 0, this.undirected = {};
      }, V.prototype.attach = function() {
        var t2 = "out", e2 = "in";
        this.undirected && (t2 = e2 = "undirected");
        var n2 = this.source.key, r2 = this.target.key;
        this.source[t2][r2] = this, this.undirected && n2 === r2 || (this.target[e2][n2] = this);
      }, V.prototype.attachMulti = function() {
        var t2 = "out", e2 = "in", n2 = this.source.key, r2 = this.target.key;
        this.undirected && (t2 = e2 = "undirected");
        var i2 = this.source[t2], o2 = i2[r2];
        if (void 0 === o2) return i2[r2] = this, void (this.undirected && n2 === r2 || (this.target[e2][n2] = this));
        o2.previous = this, this.next = o2, i2[r2] = this, this.target[e2][n2] = this;
      }, V.prototype.detach = function() {
        var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
        this.undirected && (n2 = r2 = "undirected"), delete this.source[n2][e2], delete this.target[r2][t2];
      }, V.prototype.detachMulti = function() {
        var t2 = this.source.key, e2 = this.target.key, n2 = "out", r2 = "in";
        this.undirected && (n2 = r2 = "undirected"), void 0 === this.previous ? void 0 === this.next ? (delete this.source[n2][e2], delete this.target[r2][t2]) : (this.next.previous = void 0, this.source[n2][e2] = this.next, this.target[r2][t2] = this.next) : (this.previous.next = this.next, void 0 !== this.next && (this.next.previous = this.previous));
      };
      function H(t2, e2, n2, r2, i2, o2, a2) {
        var c2, u2, d2, s2;
        if (r2 = "" + r2, 0 === n2) {
          if (!(c2 = t2._nodes.get(r2))) throw new F("Graph.".concat(e2, ': could not find the "').concat(r2, '" node in the graph.'));
          d2 = i2, s2 = o2;
        } else if (3 === n2) {
          if (i2 = "" + i2, !(u2 = t2._edges.get(i2))) throw new F("Graph.".concat(e2, ': could not find the "').concat(i2, '" edge in the graph.'));
          var h2 = u2.source.key, p2 = u2.target.key;
          if (r2 === h2) c2 = u2.target;
          else {
            if (r2 !== p2) throw new F("Graph.".concat(e2, ': the "').concat(r2, '" node is not attached to the "').concat(i2, '" edge (').concat(h2, ", ").concat(p2, ")."));
            c2 = u2.source;
          }
          d2 = o2, s2 = a2;
        } else {
          if (!(u2 = t2._edges.get(r2))) throw new F("Graph.".concat(e2, ': could not find the "').concat(r2, '" edge in the graph.'));
          c2 = 1 === n2 ? u2.source : u2.target, d2 = i2, s2 = o2;
        }
        return [c2, d2, s2];
      }
      var Q = [{ name: function(t2) {
        return "get".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          return a2.attributes[c2];
        };
      } }, { name: function(t2) {
        return "get".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          return H(this, e2, n2, t3, r2)[0].attributes;
        };
      } }, { name: function(t2) {
        return "has".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          return a2.attributes.hasOwnProperty(c2);
        };
      } }, { name: function(t2) {
        return "set".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2, o2) {
          var a2 = H(this, e2, n2, t3, r2, i2, o2), c2 = a2[0], u2 = a2[1], d2 = a2[2];
          return c2.attributes[u2] = d2, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
        };
      } }, { name: function(t2) {
        return "update".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2, o2) {
          var a2 = H(this, e2, n2, t3, r2, i2, o2), c2 = a2[0], u2 = a2[1], d2 = a2[2];
          if ("function" != typeof d2) throw new B("Graph.".concat(e2, ": updater should be a function."));
          var s2 = c2.attributes, h2 = d2(s2[u2]);
          return s2[u2] = h2, this.emit("nodeAttributesUpdated", { key: c2.key, type: "set", attributes: c2.attributes, name: u2 }), this;
        };
      } }, { name: function(t2) {
        return "remove".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          return delete a2.attributes[c2], this.emit("nodeAttributesUpdated", { key: a2.key, type: "remove", attributes: a2.attributes, name: c2 }), this;
        };
      } }, { name: function(t2) {
        return "replace".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          if (!s(c2)) throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
          return a2.attributes = c2, this.emit("nodeAttributesUpdated", { key: a2.key, type: "replace", attributes: a2.attributes }), this;
        };
      } }, { name: function(t2) {
        return "merge".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          if (!s(c2)) throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
          return u(a2.attributes, c2), this.emit("nodeAttributesUpdated", { key: a2.key, type: "merge", attributes: a2.attributes, data: c2 }), this;
        };
      } }, { name: function(t2) {
        return "update".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2 = H(this, e2, n2, t3, r2, i2), a2 = o2[0], c2 = o2[1];
          if ("function" != typeof c2) throw new B("Graph.".concat(e2, ": provided updater is not a function."));
          return a2.attributes = c2(a2.attributes), this.emit("nodeAttributesUpdated", { key: a2.key, type: "update", attributes: a2.attributes }), this;
        };
      } }];
      var X = [{ name: function(t2) {
        return "get".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return i2.attributes[r2];
        };
      } }, { name: function(t2) {
        return "get".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3) {
          var r2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 1) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var i2 = "" + t3, o2 = "" + arguments[1];
            if (!(r2 = d(this, i2, o2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(i2, '" - "').concat(o2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(r2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return r2.attributes;
        };
      } }, { name: function(t2) {
        return "has".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return i2.attributes.hasOwnProperty(r2);
        };
      } }, { name: function(t2) {
        return "set".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 3) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var a2 = "" + t3, c2 = "" + r2;
            if (r2 = arguments[2], i2 = arguments[3], !(o2 = d(this, a2, c2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a2, '" - "').concat(c2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(o2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return o2.attributes[r2] = i2, this.emit("edgeAttributesUpdated", { key: o2.key, type: "set", attributes: o2.attributes, name: r2 }), this;
        };
      } }, { name: function(t2) {
        return "update".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2, i2) {
          var o2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 3) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var a2 = "" + t3, c2 = "" + r2;
            if (r2 = arguments[2], i2 = arguments[3], !(o2 = d(this, a2, c2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(a2, '" - "').concat(c2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(o2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          if ("function" != typeof i2) throw new B("Graph.".concat(e2, ": updater should be a function."));
          return o2.attributes[r2] = i2(o2.attributes[r2]), this.emit("edgeAttributesUpdated", { key: o2.key, type: "set", attributes: o2.attributes, name: r2 }), this;
        };
      } }, { name: function(t2) {
        return "remove".concat(t2, "Attribute");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          return delete i2.attributes[r2], this.emit("edgeAttributesUpdated", { key: i2.key, type: "remove", attributes: i2.attributes, name: r2 }), this;
        };
      } }, { name: function(t2) {
        return "replace".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          if (!s(r2)) throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
          return i2.attributes = r2, this.emit("edgeAttributesUpdated", { key: i2.key, type: "replace", attributes: i2.attributes }), this;
        };
      } }, { name: function(t2) {
        return "merge".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          if (!s(r2)) throw new B("Graph.".concat(e2, ": provided attributes are not a plain object."));
          return u(i2.attributes, r2), this.emit("edgeAttributesUpdated", { key: i2.key, type: "merge", attributes: i2.attributes, data: r2 }), this;
        };
      } }, { name: function(t2) {
        return "update".concat(t2, "Attributes");
      }, attacher: function(t2, e2, n2) {
        t2.prototype[e2] = function(t3, r2) {
          var i2;
          if ("mixed" !== this.type && "mixed" !== n2 && n2 !== this.type) throw new I("Graph.".concat(e2, ": cannot find this type of edges in your ").concat(this.type, " graph."));
          if (arguments.length > 2) {
            if (this.multi) throw new I("Graph.".concat(e2, ": cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about."));
            var o2 = "" + t3, a2 = "" + r2;
            if (r2 = arguments[2], !(i2 = d(this, o2, a2, n2))) throw new F("Graph.".concat(e2, ': could not find an edge for the given path ("').concat(o2, '" - "').concat(a2, '").'));
          } else {
            if ("mixed" !== n2) throw new I("Graph.".concat(e2, ": calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type."));
            if (t3 = "" + t3, !(i2 = this._edges.get(t3))) throw new F("Graph.".concat(e2, ': could not find the "').concat(t3, '" edge in the graph.'));
          }
          if ("function" != typeof r2) throw new B("Graph.".concat(e2, ": provided updater is not a function."));
          return i2.attributes = r2(i2.attributes), this.emit("edgeAttributesUpdated", { key: i2.key, type: "update", attributes: i2.attributes }), this;
        };
      } }];
      var Z = O, $ = P, tt = function() {
        var t2 = arguments, e2 = null, n2 = -1;
        return new Z((function() {
          for (var r2 = null; ; ) {
            if (null === e2) {
              if (++n2 >= t2.length) return { done: true };
              e2 = $(t2[n2]);
            }
            if (true !== (r2 = e2.next()).done) break;
            e2 = null;
          }
          return r2;
        }));
      }, et = [{ name: "edges", type: "mixed" }, { name: "inEdges", type: "directed", direction: "in" }, { name: "outEdges", type: "directed", direction: "out" }, { name: "inboundEdges", type: "mixed", direction: "in" }, { name: "outboundEdges", type: "mixed", direction: "out" }, { name: "directedEdges", type: "directed" }, { name: "undirectedEdges", type: "undirected" }];
      function nt(t2, e2, n2, r2) {
        var i2 = false;
        for (var o2 in e2) if (o2 !== r2) {
          var a2 = e2[o2];
          if (i2 = n2(a2.key, a2.attributes, a2.source.key, a2.target.key, a2.source.attributes, a2.target.attributes, a2.undirected), t2 && i2) return a2.key;
        }
      }
      function rt(t2, e2, n2, r2) {
        var i2, o2, a2, c2 = false;
        for (var u2 in e2) if (u2 !== r2) {
          i2 = e2[u2];
          do {
            if (o2 = i2.source, a2 = i2.target, c2 = n2(i2.key, i2.attributes, o2.key, a2.key, o2.attributes, a2.attributes, i2.undirected), t2 && c2) return i2.key;
            i2 = i2.next;
          } while (void 0 !== i2);
        }
      }
      function it(t2, e2) {
        var n2, r2 = Object.keys(t2), i2 = r2.length, o2 = 0;
        return new O((function() {
          do {
            if (n2) n2 = n2.next;
            else {
              if (o2 >= i2) return { done: true };
              var a2 = r2[o2++];
              if (a2 === e2) {
                n2 = void 0;
                continue;
              }
              n2 = t2[a2];
            }
          } while (!n2);
          return { done: false, value: { edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected } };
        }));
      }
      function ot(t2, e2, n2, r2) {
        var i2 = e2[n2];
        if (i2) {
          var o2 = i2.source, a2 = i2.target;
          return r2(i2.key, i2.attributes, o2.key, a2.key, o2.attributes, a2.attributes, i2.undirected) && t2 ? i2.key : void 0;
        }
      }
      function at(t2, e2, n2, r2) {
        var i2 = e2[n2];
        if (i2) {
          var o2 = false;
          do {
            if (o2 = r2(i2.key, i2.attributes, i2.source.key, i2.target.key, i2.source.attributes, i2.target.attributes, i2.undirected), t2 && o2) return i2.key;
            i2 = i2.next;
          } while (void 0 !== i2);
        }
      }
      function ct(t2, e2) {
        var n2 = t2[e2];
        return void 0 !== n2.next ? new O((function() {
          if (!n2) return { done: true };
          var t3 = { edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected };
          return n2 = n2.next, { done: false, value: t3 };
        })) : O.of({ edge: n2.key, attributes: n2.attributes, source: n2.source.key, target: n2.target.key, sourceAttributes: n2.source.attributes, targetAttributes: n2.target.attributes, undirected: n2.undirected });
      }
      function ut(t2, e2) {
        if (0 === t2.size) return [];
        if ("mixed" === e2 || e2 === t2.type) return "function" == typeof Array.from ? Array.from(t2._edges.keys()) : K(t2._edges.keys(), t2._edges.size);
        for (var n2, r2, i2 = "undirected" === e2 ? t2.undirectedSize : t2.directedSize, o2 = new Array(i2), a2 = "undirected" === e2, c2 = t2._edges.values(), u2 = 0; true !== (n2 = c2.next()).done; ) (r2 = n2.value).undirected === a2 && (o2[u2++] = r2.key);
        return o2;
      }
      function dt(t2, e2, n2, r2) {
        if (0 !== e2.size) {
          for (var i2, o2, a2 = "mixed" !== n2 && n2 !== e2.type, c2 = "undirected" === n2, u2 = false, d2 = e2._edges.values(); true !== (i2 = d2.next()).done; ) if (o2 = i2.value, !a2 || o2.undirected === c2) {
            var s2 = o2, h2 = s2.key, p2 = s2.attributes, f2 = s2.source, l2 = s2.target;
            if (u2 = r2(h2, p2, f2.key, l2.key, f2.attributes, l2.attributes, o2.undirected), t2 && u2) return h2;
          }
        }
      }
      function st(t2, e2) {
        if (0 === t2.size) return O.empty();
        var n2 = "mixed" !== e2 && e2 !== t2.type, r2 = "undirected" === e2, i2 = t2._edges.values();
        return new O((function() {
          for (var t3, e3; ; ) {
            if ((t3 = i2.next()).done) return t3;
            if (e3 = t3.value, !n2 || e3.undirected === r2) break;
          }
          return { value: { edge: e3.key, attributes: e3.attributes, source: e3.source.key, target: e3.target.key, sourceAttributes: e3.source.attributes, targetAttributes: e3.target.attributes, undirected: e3.undirected }, done: false };
        }));
      }
      function ht(t2, e2, n2, r2, i2, o2) {
        var a2, c2 = e2 ? rt : nt;
        if ("undirected" !== n2) {
          if ("out" !== r2 && (a2 = c2(t2, i2.in, o2), t2 && a2)) return a2;
          if ("in" !== r2 && (a2 = c2(t2, i2.out, o2, r2 ? void 0 : i2.key), t2 && a2)) return a2;
        }
        if ("directed" !== n2 && (a2 = c2(t2, i2.undirected, o2), t2 && a2)) return a2;
      }
      function pt(t2, e2, n2, r2) {
        var i2 = [];
        return ht(false, t2, e2, n2, r2, (function(t3) {
          i2.push(t3);
        })), i2;
      }
      function ft(t2, e2, n2) {
        var r2 = O.empty();
        return "undirected" !== t2 && ("out" !== e2 && void 0 !== n2.in && (r2 = tt(r2, it(n2.in))), "in" !== e2 && void 0 !== n2.out && (r2 = tt(r2, it(n2.out, e2 ? void 0 : n2.key)))), "directed" !== t2 && void 0 !== n2.undirected && (r2 = tt(r2, it(n2.undirected))), r2;
      }
      function lt(t2, e2, n2, r2, i2, o2, a2) {
        var c2, u2 = n2 ? at : ot;
        if ("undirected" !== e2) {
          if (void 0 !== i2.in && "out" !== r2 && (c2 = u2(t2, i2.in, o2, a2), t2 && c2)) return c2;
          if (void 0 !== i2.out && "in" !== r2 && (r2 || i2.key !== o2) && (c2 = u2(t2, i2.out, o2, a2), t2 && c2)) return c2;
        }
        if ("directed" !== e2 && void 0 !== i2.undirected && (c2 = u2(t2, i2.undirected, o2, a2), t2 && c2)) return c2;
      }
      function gt(t2, e2, n2, r2, i2) {
        var o2 = [];
        return lt(false, t2, e2, n2, r2, i2, (function(t3) {
          o2.push(t3);
        })), o2;
      }
      function yt(t2, e2, n2, r2) {
        var i2 = O.empty();
        return "undirected" !== t2 && (void 0 !== n2.in && "out" !== e2 && r2 in n2.in && (i2 = tt(i2, ct(n2.in, r2))), void 0 !== n2.out && "in" !== e2 && r2 in n2.out && (e2 || n2.key !== r2) && (i2 = tt(i2, ct(n2.out, r2)))), "directed" !== t2 && void 0 !== n2.undirected && r2 in n2.undirected && (i2 = tt(i2, ct(n2.undirected, r2))), i2;
      }
      var wt = [{ name: "neighbors", type: "mixed" }, { name: "inNeighbors", type: "directed", direction: "in" }, { name: "outNeighbors", type: "directed", direction: "out" }, { name: "inboundNeighbors", type: "mixed", direction: "in" }, { name: "outboundNeighbors", type: "mixed", direction: "out" }, { name: "directedNeighbors", type: "directed" }, { name: "undirectedNeighbors", type: "undirected" }];
      function vt() {
        this.A = null, this.B = null;
      }
      function bt(t2, e2, n2, r2, i2) {
        for (var o2 in r2) {
          var a2 = r2[o2], c2 = a2.source, u2 = a2.target, d2 = c2 === n2 ? u2 : c2;
          if (!e2 || !e2.has(d2.key)) {
            var s2 = i2(d2.key, d2.attributes);
            if (t2 && s2) return d2.key;
          }
        }
      }
      function mt(t2, e2, n2, r2, i2) {
        if ("mixed" !== e2) {
          if ("undirected" === e2) return bt(t2, null, r2, r2.undirected, i2);
          if ("string" == typeof n2) return bt(t2, null, r2, r2[n2], i2);
        }
        var o2, a2 = new vt();
        if ("undirected" !== e2) {
          if ("out" !== n2) {
            if (o2 = bt(t2, null, r2, r2.in, i2), t2 && o2) return o2;
            a2.wrap(r2.in);
          }
          if ("in" !== n2) {
            if (o2 = bt(t2, a2, r2, r2.out, i2), t2 && o2) return o2;
            a2.wrap(r2.out);
          }
        }
        if ("directed" !== e2 && (o2 = bt(t2, a2, r2, r2.undirected, i2), t2 && o2)) return o2;
      }
      function kt(t2, e2, n2) {
        var r2 = Object.keys(n2), i2 = r2.length, o2 = 0;
        return new O((function() {
          var a2 = null;
          do {
            if (o2 >= i2) return t2 && t2.wrap(n2), { done: true };
            var c2 = n2[r2[o2++]], u2 = c2.source, d2 = c2.target;
            a2 = u2 === e2 ? d2 : u2, t2 && t2.has(a2.key) && (a2 = null);
          } while (null === a2);
          return { done: false, value: { neighbor: a2.key, attributes: a2.attributes } };
        }));
      }
      function _t(t2, e2) {
        var n2 = e2.name, r2 = e2.type, i2 = e2.direction;
        t2.prototype[n2] = function(t3) {
          if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return [];
          t3 = "" + t3;
          var e3 = this._nodes.get(t3);
          if (void 0 === e3) throw new F("Graph.".concat(n2, ': could not find the "').concat(t3, '" node in the graph.'));
          return (function(t4, e4, n3) {
            if ("mixed" !== t4) {
              if ("undirected" === t4) return Object.keys(n3.undirected);
              if ("string" == typeof e4) return Object.keys(n3[e4]);
            }
            var r3 = [];
            return mt(false, t4, e4, n3, (function(t5) {
              r3.push(t5);
            })), r3;
          })("mixed" === r2 ? this.type : r2, i2, e3);
        };
      }
      function Gt(t2, e2) {
        var n2 = e2.name, r2 = e2.type, i2 = e2.direction, o2 = n2.slice(0, -1) + "Entries";
        t2.prototype[o2] = function(t3) {
          if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return O.empty();
          t3 = "" + t3;
          var e3 = this._nodes.get(t3);
          if (void 0 === e3) throw new F("Graph.".concat(o2, ': could not find the "').concat(t3, '" node in the graph.'));
          return (function(t4, e4, n3) {
            if ("mixed" !== t4) {
              if ("undirected" === t4) return kt(null, n3, n3.undirected);
              if ("string" == typeof e4) return kt(null, n3, n3[e4]);
            }
            var r3 = O.empty(), i3 = new vt();
            return "undirected" !== t4 && ("out" !== e4 && (r3 = tt(r3, kt(i3, n3, n3.in))), "in" !== e4 && (r3 = tt(r3, kt(i3, n3, n3.out)))), "directed" !== t4 && (r3 = tt(r3, kt(i3, n3, n3.undirected))), r3;
          })("mixed" === r2 ? this.type : r2, i2, e3);
        };
      }
      function xt(t2, e2, n2, r2, i2) {
        for (var o2, a2, c2, u2, d2, s2, h2, p2 = r2._nodes.values(), f2 = r2.type; true !== (o2 = p2.next()).done; ) {
          var l2 = false;
          if (a2 = o2.value, "undirected" !== f2) for (c2 in u2 = a2.out) {
            d2 = u2[c2];
            do {
              if (s2 = d2.target, l2 = true, h2 = i2(a2.key, s2.key, a2.attributes, s2.attributes, d2.key, d2.attributes, d2.undirected), t2 && h2) return d2;
              d2 = d2.next;
            } while (d2);
          }
          if ("directed" !== f2) {
            for (c2 in u2 = a2.undirected) if (!(e2 && a2.key > c2)) {
              d2 = u2[c2];
              do {
                if ((s2 = d2.target).key !== c2 && (s2 = d2.source), l2 = true, h2 = i2(a2.key, s2.key, a2.attributes, s2.attributes, d2.key, d2.attributes, d2.undirected), t2 && h2) return d2;
                d2 = d2.next;
              } while (d2);
            }
          }
          if (n2 && !l2 && (h2 = i2(a2.key, null, a2.attributes, null, null, null, null), t2 && h2)) return null;
        }
      }
      function Et(t2) {
        if (!s(t2)) throw new B('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');
        if (!("key" in t2)) throw new B("Graph.import: serialized node is missing its key.");
        if ("attributes" in t2 && (!s(t2.attributes) || null === t2.attributes)) throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
      }
      function At(t2) {
        if (!s(t2)) throw new B('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');
        if (!("source" in t2)) throw new B("Graph.import: serialized edge is missing its source.");
        if (!("target" in t2)) throw new B("Graph.import: serialized edge is missing its target.");
        if ("attributes" in t2 && (!s(t2.attributes) || null === t2.attributes)) throw new B("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");
        if ("undirected" in t2 && "boolean" != typeof t2.undirected) throw new B("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.");
      }
      vt.prototype.wrap = function(t2) {
        null === this.A ? this.A = t2 : null === this.B && (this.B = t2);
      }, vt.prototype.has = function(t2) {
        return null !== this.A && t2 in this.A || null !== this.B && t2 in this.B;
      };
      var Lt, St = (Lt = 255 & Math.floor(256 * Math.random()), function() {
        return Lt++;
      }), Dt = /* @__PURE__ */ new Set(["directed", "undirected", "mixed"]), Ut = /* @__PURE__ */ new Set(["domain", "_events", "_eventsCount", "_maxListeners"]), Nt = { allowSelfLoops: true, multi: false, type: "mixed" };
      function Ot(t2, e2, n2) {
        var r2 = new t2.NodeDataClass(e2, n2);
        return t2._nodes.set(e2, r2), t2.emit("nodeAdded", { key: e2, attributes: n2 }), r2;
      }
      function jt(t2, e2, n2, r2, i2, o2, a2, c2) {
        if (!r2 && "undirected" === t2.type) throw new I("Graph.".concat(e2, ": you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead."));
        if (r2 && "directed" === t2.type) throw new I("Graph.".concat(e2, ": you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead."));
        if (c2 && !s(c2)) throw new B("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
        if (o2 = "" + o2, a2 = "" + a2, c2 = c2 || {}, !t2.allowSelfLoops && o2 === a2) throw new I("Graph.".concat(e2, ': source & target are the same ("').concat(o2, `"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`));
        var u2 = t2._nodes.get(o2), d2 = t2._nodes.get(a2);
        if (!u2) throw new F("Graph.".concat(e2, ': source node "').concat(o2, '" not found.'));
        if (!d2) throw new F("Graph.".concat(e2, ': target node "').concat(a2, '" not found.'));
        var h2 = { key: null, undirected: r2, source: o2, target: a2, attributes: c2 };
        if (n2) i2 = t2._edgeKeyGenerator();
        else if (i2 = "" + i2, t2._edges.has(i2)) throw new I("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
        if (!t2.multi && (r2 ? void 0 !== u2.undirected[a2] : void 0 !== u2.out[a2])) throw new I("Graph.".concat(e2, ': an edge linking "').concat(o2, '" to "').concat(a2, `" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`));
        var p2 = new V(r2, i2, u2, d2, c2);
        t2._edges.set(i2, p2);
        var f2 = o2 === a2;
        return r2 ? (u2.undirectedDegree++, d2.undirectedDegree++, f2 && (u2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (u2.outDegree++, d2.inDegree++, f2 && (u2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, h2.key = i2, t2.emit("edgeAdded", h2), i2;
      }
      function Ct(t2, e2, n2, r2, i2, o2, a2, c2, d2) {
        if (!r2 && "undirected" === t2.type) throw new I("Graph.".concat(e2, ": you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead."));
        if (r2 && "directed" === t2.type) throw new I("Graph.".concat(e2, ": you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead."));
        if (c2) {
          if (d2) {
            if ("function" != typeof c2) throw new B("Graph.".concat(e2, ': invalid updater function. Expecting a function but got "').concat(c2, '"'));
          } else if (!s(c2)) throw new B("Graph.".concat(e2, ': invalid attributes. Expecting an object but got "').concat(c2, '"'));
        }
        var h2;
        if (o2 = "" + o2, a2 = "" + a2, d2 && (h2 = c2, c2 = void 0), !t2.allowSelfLoops && o2 === a2) throw new I("Graph.".concat(e2, ': source & target are the same ("').concat(o2, `"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`));
        var p2, f2, l2 = t2._nodes.get(o2), g2 = t2._nodes.get(a2);
        if (!n2 && (p2 = t2._edges.get(i2))) {
          if (!(p2.source.key === o2 && p2.target.key === a2 || r2 && p2.source.key === a2 && p2.target.key === o2)) throw new I("Graph.".concat(e2, ': inconsistency detected when attempting to merge the "').concat(i2, '" edge with "').concat(o2, '" source & "').concat(a2, '" target vs. ("').concat(p2.source.key, '", "').concat(p2.target.key, '").'));
          f2 = p2;
        }
        if (f2 || t2.multi || !l2 || (f2 = r2 ? l2.undirected[a2] : l2.out[a2]), f2) {
          var y2 = [f2.key, false, false, false];
          if (d2 ? !h2 : !c2) return y2;
          if (d2) {
            var w2 = f2.attributes;
            f2.attributes = h2(w2), t2.emit("edgeAttributesUpdated", { type: "replace", key: f2.key, attributes: f2.attributes });
          } else u(f2.attributes, c2), t2.emit("edgeAttributesUpdated", { type: "merge", key: f2.key, attributes: f2.attributes, data: c2 });
          return y2;
        }
        c2 = c2 || {}, d2 && h2 && (c2 = h2(c2));
        var v2 = { key: null, undirected: r2, source: o2, target: a2, attributes: c2 };
        if (n2) i2 = t2._edgeKeyGenerator();
        else if (i2 = "" + i2, t2._edges.has(i2)) throw new I("Graph.".concat(e2, ': the "').concat(i2, '" edge already exists in the graph.'));
        var b2 = false, m2 = false;
        l2 || (l2 = Ot(t2, o2, {}), b2 = true, o2 === a2 && (g2 = l2, m2 = true)), g2 || (g2 = Ot(t2, a2, {}), m2 = true), p2 = new V(r2, i2, l2, g2, c2), t2._edges.set(i2, p2);
        var k2 = o2 === a2;
        return r2 ? (l2.undirectedDegree++, g2.undirectedDegree++, k2 && (l2.undirectedLoops++, t2._undirectedSelfLoopCount++)) : (l2.outDegree++, g2.inDegree++, k2 && (l2.directedLoops++, t2._directedSelfLoopCount++)), t2.multi ? p2.attachMulti() : p2.attach(), r2 ? t2._undirectedSize++ : t2._directedSize++, v2.key = i2, t2.emit("edgeAdded", v2), [i2, true, b2, m2];
      }
      function Mt(t2, e2) {
        t2._edges.delete(e2.key);
        var n2 = e2.source, r2 = e2.target, i2 = e2.attributes, o2 = e2.undirected, a2 = n2 === r2;
        o2 ? (n2.undirectedDegree--, r2.undirectedDegree--, a2 && (n2.undirectedLoops--, t2._undirectedSelfLoopCount--)) : (n2.outDegree--, r2.inDegree--, a2 && (n2.directedLoops--, t2._directedSelfLoopCount--)), t2.multi ? e2.detachMulti() : e2.detach(), o2 ? t2._undirectedSize-- : t2._directedSize--, t2.emit("edgeDropped", { key: e2.key, attributes: i2, source: n2.key, target: r2.key, undirected: o2 });
      }
      var zt = (function(n2) {
        function r2(t2) {
          var e2;
          if (e2 = n2.call(this) || this, "boolean" != typeof (t2 = u({}, Nt, t2)).multi) throw new B(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "`.concat(t2.multi, '".'));
          if (!Dt.has(t2.type)) throw new B(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "`.concat(t2.type, '".'));
          if ("boolean" != typeof t2.allowSelfLoops) throw new B(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "`.concat(t2.allowSelfLoops, '".'));
          var r3 = "mixed" === t2.type ? Y : "directed" === t2.type ? q : J;
          p(c(e2), "NodeDataClass", r3);
          var i3 = "geid_" + St() + "_", o2 = 0;
          return p(c(e2), "_attributes", {}), p(c(e2), "_nodes", /* @__PURE__ */ new Map()), p(c(e2), "_edges", /* @__PURE__ */ new Map()), p(c(e2), "_directedSize", 0), p(c(e2), "_undirectedSize", 0), p(c(e2), "_directedSelfLoopCount", 0), p(c(e2), "_undirectedSelfLoopCount", 0), p(c(e2), "_edgeKeyGenerator", (function() {
            var t3;
            do {
              t3 = i3 + o2++;
            } while (e2._edges.has(t3));
            return t3;
          })), p(c(e2), "_options", t2), Ut.forEach((function(t3) {
            return p(c(e2), t3, e2[t3]);
          })), f(c(e2), "order", (function() {
            return e2._nodes.size;
          })), f(c(e2), "size", (function() {
            return e2._edges.size;
          })), f(c(e2), "directedSize", (function() {
            return e2._directedSize;
          })), f(c(e2), "undirectedSize", (function() {
            return e2._undirectedSize;
          })), f(c(e2), "selfLoopCount", (function() {
            return e2._directedSelfLoopCount + e2._undirectedSelfLoopCount;
          })), f(c(e2), "directedSelfLoopCount", (function() {
            return e2._directedSelfLoopCount;
          })), f(c(e2), "undirectedSelfLoopCount", (function() {
            return e2._undirectedSelfLoopCount;
          })), f(c(e2), "multi", e2._options.multi), f(c(e2), "type", e2._options.type), f(c(e2), "allowSelfLoops", e2._options.allowSelfLoops), f(c(e2), "implementation", (function() {
            return "graphology";
          })), e2;
        }
        e(r2, n2);
        var i2 = r2.prototype;
        return i2._resetInstanceCounters = function() {
          this._directedSize = 0, this._undirectedSize = 0, this._directedSelfLoopCount = 0, this._undirectedSelfLoopCount = 0;
        }, i2.hasNode = function(t2) {
          return this._nodes.has("" + t2);
        }, i2.hasDirectedEdge = function(t2, e2) {
          if ("undirected" === this.type) return false;
          if (1 === arguments.length) {
            var n3 = "" + t2, r3 = this._edges.get(n3);
            return !!r3 && !r3.undirected;
          }
          if (2 === arguments.length) {
            t2 = "" + t2, e2 = "" + e2;
            var i3 = this._nodes.get(t2);
            return !!i3 && i3.out.hasOwnProperty(e2);
          }
          throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i2.hasUndirectedEdge = function(t2, e2) {
          if ("directed" === this.type) return false;
          if (1 === arguments.length) {
            var n3 = "" + t2, r3 = this._edges.get(n3);
            return !!r3 && r3.undirected;
          }
          if (2 === arguments.length) {
            t2 = "" + t2, e2 = "" + e2;
            var i3 = this._nodes.get(t2);
            return !!i3 && i3.undirected.hasOwnProperty(e2);
          }
          throw new B("Graph.hasDirectedEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i2.hasEdge = function(t2, e2) {
          if (1 === arguments.length) {
            var n3 = "" + t2;
            return this._edges.has(n3);
          }
          if (2 === arguments.length) {
            t2 = "" + t2, e2 = "" + e2;
            var r3 = this._nodes.get(t2);
            return !!r3 && (void 0 !== r3.out && r3.out.hasOwnProperty(e2) || void 0 !== r3.undirected && r3.undirected.hasOwnProperty(e2));
          }
          throw new B("Graph.hasEdge: invalid arity (".concat(arguments.length, ", instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target."));
        }, i2.directedEdge = function(t2, e2) {
          if ("undirected" !== this.type) {
            if (t2 = "" + t2, e2 = "" + e2, this.multi) throw new I("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");
            var n3 = this._nodes.get(t2);
            if (!n3) throw new F('Graph.directedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
            if (!this._nodes.has(e2)) throw new F('Graph.directedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
            var r3 = n3.out && n3.out[e2] || void 0;
            return r3 ? r3.key : void 0;
          }
        }, i2.undirectedEdge = function(t2, e2) {
          if ("directed" !== this.type) {
            if (t2 = "" + t2, e2 = "" + e2, this.multi) throw new I("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");
            var n3 = this._nodes.get(t2);
            if (!n3) throw new F('Graph.undirectedEdge: could not find the "'.concat(t2, '" source node in the graph.'));
            if (!this._nodes.has(e2)) throw new F('Graph.undirectedEdge: could not find the "'.concat(e2, '" target node in the graph.'));
            var r3 = n3.undirected && n3.undirected[e2] || void 0;
            return r3 ? r3.key : void 0;
          }
        }, i2.edge = function(t2, e2) {
          if (this.multi) throw new I("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.edge: could not find the "'.concat(t2, '" source node in the graph.'));
          if (!this._nodes.has(e2)) throw new F('Graph.edge: could not find the "'.concat(e2, '" target node in the graph.'));
          var r3 = n3.out && n3.out[e2] || n3.undirected && n3.undirected[e2] || void 0;
          if (r3) return r3.key;
        }, i2.areDirectedNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.areDirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && (e2 in n3.in || e2 in n3.out);
        }, i2.areOutNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.areOutNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && e2 in n3.out;
        }, i2.areInNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.areInNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && e2 in n3.in;
        }, i2.areUndirectedNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.areUndirectedNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "directed" !== this.type && e2 in n3.undirected;
        }, i2.areNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.areNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && (e2 in n3.in || e2 in n3.out) || "directed" !== this.type && e2 in n3.undirected;
        }, i2.areInboundNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.areInboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && e2 in n3.in || "directed" !== this.type && e2 in n3.undirected;
        }, i2.areOutboundNeighbors = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.areOutboundNeighbors: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" !== this.type && e2 in n3.out || "directed" !== this.type && e2 in n3.undirected;
        }, i2.inDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.inDegree: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.inDegree;
        }, i2.outDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.outDegree: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.outDegree;
        }, i2.directedDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.directedDegree: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.inDegree + e2.outDegree;
        }, i2.undirectedDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.undirectedDegree: could not find the "'.concat(t2, '" node in the graph.'));
          return "directed" === this.type ? 0 : e2.undirectedDegree;
        }, i2.inboundDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.inboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.inDegree), n3;
        }, i2.outboundDegree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.outboundDegree: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.outDegree), n3;
        }, i2.degree = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.degree: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree), "undirected" !== this.type && (n3 += e2.inDegree + e2.outDegree), n3;
        }, i2.inDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.inDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.inDegree - e2.directedLoops;
        }, i2.outDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.outDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.outDegree - e2.directedLoops;
        }, i2.directedDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.directedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          return "undirected" === this.type ? 0 : e2.inDegree + e2.outDegree - 2 * e2.directedLoops;
        }, i2.undirectedDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.undirectedDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          return "directed" === this.type ? 0 : e2.undirectedDegree - 2 * e2.undirectedLoops;
        }, i2.inboundDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.inboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0, r3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.inDegree, r3 += e2.directedLoops), n3 - r3;
        }, i2.outboundDegreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.outboundDegreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0, r3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.outDegree, r3 += e2.directedLoops), n3 - r3;
        }, i2.degreeWithoutSelfLoops = function(t2) {
          t2 = "" + t2;
          var e2 = this._nodes.get(t2);
          if (!e2) throw new F('Graph.degreeWithoutSelfLoops: could not find the "'.concat(t2, '" node in the graph.'));
          var n3 = 0, r3 = 0;
          return "directed" !== this.type && (n3 += e2.undirectedDegree, r3 += 2 * e2.undirectedLoops), "undirected" !== this.type && (n3 += e2.inDegree + e2.outDegree, r3 += 2 * e2.directedLoops), n3 - r3;
        }, i2.source = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new F('Graph.source: could not find the "'.concat(t2, '" edge in the graph.'));
          return e2.source.key;
        }, i2.target = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new F('Graph.target: could not find the "'.concat(t2, '" edge in the graph.'));
          return e2.target.key;
        }, i2.extremities = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new F('Graph.extremities: could not find the "'.concat(t2, '" edge in the graph.'));
          return [e2.source.key, e2.target.key];
        }, i2.opposite = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._edges.get(e2);
          if (!n3) throw new F('Graph.opposite: could not find the "'.concat(e2, '" edge in the graph.'));
          var r3 = n3.source.key, i3 = n3.target.key;
          if (t2 === r3) return i3;
          if (t2 === i3) return r3;
          throw new F('Graph.opposite: the "'.concat(t2, '" node is not attached to the "').concat(e2, '" edge (').concat(r3, ", ").concat(i3, ")."));
        }, i2.hasExtremity = function(t2, e2) {
          t2 = "" + t2, e2 = "" + e2;
          var n3 = this._edges.get(t2);
          if (!n3) throw new F('Graph.hasExtremity: could not find the "'.concat(t2, '" edge in the graph.'));
          return n3.source.key === e2 || n3.target.key === e2;
        }, i2.isUndirected = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new F('Graph.isUndirected: could not find the "'.concat(t2, '" edge in the graph.'));
          return e2.undirected;
        }, i2.isDirected = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new F('Graph.isDirected: could not find the "'.concat(t2, '" edge in the graph.'));
          return !e2.undirected;
        }, i2.isSelfLoop = function(t2) {
          t2 = "" + t2;
          var e2 = this._edges.get(t2);
          if (!e2) throw new F('Graph.isSelfLoop: could not find the "'.concat(t2, '" edge in the graph.'));
          return e2.source === e2.target;
        }, i2.addNode = function(t2, e2) {
          var n3 = (function(t3, e3, n4) {
            if (n4 && !s(n4)) throw new B('Graph.addNode: invalid attributes. Expecting an object but got "'.concat(n4, '"'));
            if (e3 = "" + e3, n4 = n4 || {}, t3._nodes.has(e3)) throw new I('Graph.addNode: the "'.concat(e3, '" node already exist in the graph.'));
            var r3 = new t3.NodeDataClass(e3, n4);
            return t3._nodes.set(e3, r3), t3.emit("nodeAdded", { key: e3, attributes: n4 }), r3;
          })(this, t2, e2);
          return n3.key;
        }, i2.mergeNode = function(t2, e2) {
          if (e2 && !s(e2)) throw new B('Graph.mergeNode: invalid attributes. Expecting an object but got "'.concat(e2, '"'));
          t2 = "" + t2, e2 = e2 || {};
          var n3 = this._nodes.get(t2);
          return n3 ? (e2 && (u(n3.attributes, e2), this.emit("nodeAttributesUpdated", { type: "merge", key: t2, attributes: n3.attributes, data: e2 })), [t2, false]) : (n3 = new this.NodeDataClass(t2, e2), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: e2 }), [t2, true]);
        }, i2.updateNode = function(t2, e2) {
          if (e2 && "function" != typeof e2) throw new B('Graph.updateNode: invalid updater function. Expecting a function but got "'.concat(e2, '"'));
          t2 = "" + t2;
          var n3 = this._nodes.get(t2);
          if (n3) {
            if (e2) {
              var r3 = n3.attributes;
              n3.attributes = e2(r3), this.emit("nodeAttributesUpdated", { type: "replace", key: t2, attributes: n3.attributes });
            }
            return [t2, false];
          }
          var i3 = e2 ? e2({}) : {};
          return n3 = new this.NodeDataClass(t2, i3), this._nodes.set(t2, n3), this.emit("nodeAdded", { key: t2, attributes: i3 }), [t2, true];
        }, i2.dropNode = function(t2) {
          t2 = "" + t2;
          var e2, n3 = this._nodes.get(t2);
          if (!n3) throw new F('Graph.dropNode: could not find the "'.concat(t2, '" node in the graph.'));
          if ("undirected" !== this.type) {
            for (var r3 in n3.out) {
              e2 = n3.out[r3];
              do {
                Mt(this, e2), e2 = e2.next;
              } while (e2);
            }
            for (var i3 in n3.in) {
              e2 = n3.in[i3];
              do {
                Mt(this, e2), e2 = e2.next;
              } while (e2);
            }
          }
          if ("directed" !== this.type) for (var o2 in n3.undirected) {
            e2 = n3.undirected[o2];
            do {
              Mt(this, e2), e2 = e2.next;
            } while (e2);
          }
          this._nodes.delete(t2), this.emit("nodeDropped", { key: t2, attributes: n3.attributes });
        }, i2.dropEdge = function(t2) {
          var e2;
          if (arguments.length > 1) {
            var n3 = "" + arguments[0], r3 = "" + arguments[1];
            if (!(e2 = d(this, n3, r3, this.type))) throw new F('Graph.dropEdge: could not find the "'.concat(n3, '" -> "').concat(r3, '" edge in the graph.'));
          } else if (t2 = "" + t2, !(e2 = this._edges.get(t2))) throw new F('Graph.dropEdge: could not find the "'.concat(t2, '" edge in the graph.'));
          return Mt(this, e2), this;
        }, i2.dropDirectedEdge = function(t2, e2) {
          if (arguments.length < 2) throw new I("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
          if (this.multi) throw new I("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
          var n3 = d(this, t2 = "" + t2, e2 = "" + e2, "directed");
          if (!n3) throw new F('Graph.dropDirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
          return Mt(this, n3), this;
        }, i2.dropUndirectedEdge = function(t2, e2) {
          if (arguments.length < 2) throw new I("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");
          if (this.multi) throw new I("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");
          var n3 = d(this, t2, e2, "undirected");
          if (!n3) throw new F('Graph.dropUndirectedEdge: could not find a "'.concat(t2, '" -> "').concat(e2, '" edge in the graph.'));
          return Mt(this, n3), this;
        }, i2.clear = function() {
          this._edges.clear(), this._nodes.clear(), this._resetInstanceCounters(), this.emit("cleared");
        }, i2.clearEdges = function() {
          for (var t2, e2 = this._nodes.values(); true !== (t2 = e2.next()).done; ) t2.value.clear();
          this._edges.clear(), this._resetInstanceCounters(), this.emit("edgesCleared");
        }, i2.getAttribute = function(t2) {
          return this._attributes[t2];
        }, i2.getAttributes = function() {
          return this._attributes;
        }, i2.hasAttribute = function(t2) {
          return this._attributes.hasOwnProperty(t2);
        }, i2.setAttribute = function(t2, e2) {
          return this._attributes[t2] = e2, this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
        }, i2.updateAttribute = function(t2, e2) {
          if ("function" != typeof e2) throw new B("Graph.updateAttribute: updater should be a function.");
          var n3 = this._attributes[t2];
          return this._attributes[t2] = e2(n3), this.emit("attributesUpdated", { type: "set", attributes: this._attributes, name: t2 }), this;
        }, i2.removeAttribute = function(t2) {
          return delete this._attributes[t2], this.emit("attributesUpdated", { type: "remove", attributes: this._attributes, name: t2 }), this;
        }, i2.replaceAttributes = function(t2) {
          if (!s(t2)) throw new B("Graph.replaceAttributes: provided attributes are not a plain object.");
          return this._attributes = t2, this.emit("attributesUpdated", { type: "replace", attributes: this._attributes }), this;
        }, i2.mergeAttributes = function(t2) {
          if (!s(t2)) throw new B("Graph.mergeAttributes: provided attributes are not a plain object.");
          return u(this._attributes, t2), this.emit("attributesUpdated", { type: "merge", attributes: this._attributes, data: t2 }), this;
        }, i2.updateAttributes = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.updateAttributes: provided updater is not a function.");
          return this._attributes = t2(this._attributes), this.emit("attributesUpdated", { type: "update", attributes: this._attributes }), this;
        }, i2.updateEachNodeAttributes = function(t2, e2) {
          if ("function" != typeof t2) throw new B("Graph.updateEachNodeAttributes: expecting an updater function.");
          if (e2 && !l(e2)) throw new B("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
          for (var n3, r3, i3 = this._nodes.values(); true !== (n3 = i3.next()).done; ) (r3 = n3.value).attributes = t2(r3.key, r3.attributes);
          this.emit("eachNodeAttributesUpdated", { hints: e2 || null });
        }, i2.updateEachEdgeAttributes = function(t2, e2) {
          if ("function" != typeof t2) throw new B("Graph.updateEachEdgeAttributes: expecting an updater function.");
          if (e2 && !l(e2)) throw new B("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");
          for (var n3, r3, i3, o2, a2 = this._edges.values(); true !== (n3 = a2.next()).done; ) i3 = (r3 = n3.value).source, o2 = r3.target, r3.attributes = t2(r3.key, r3.attributes, i3.key, o2.key, i3.attributes, o2.attributes, r3.undirected);
          this.emit("eachEdgeAttributesUpdated", { hints: e2 || null });
        }, i2.forEachAdjacencyEntry = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.forEachAdjacencyEntry: expecting a callback.");
          xt(false, false, false, this, t2);
        }, i2.forEachAdjacencyEntryWithOrphans = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");
          xt(false, false, true, this, t2);
        }, i2.forEachAssymetricAdjacencyEntry = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");
          xt(false, true, false, this, t2);
        }, i2.forEachAssymetricAdjacencyEntryWithOrphans = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");
          xt(false, true, true, this, t2);
        }, i2.nodes = function() {
          return "function" == typeof Array.from ? Array.from(this._nodes.keys()) : K(this._nodes.keys(), this._nodes.size);
        }, i2.forEachNode = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.forEachNode: expecting a callback.");
          for (var e2, n3, r3 = this._nodes.values(); true !== (e2 = r3.next()).done; ) t2((n3 = e2.value).key, n3.attributes);
        }, i2.findNode = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.findNode: expecting a callback.");
          for (var e2, n3, r3 = this._nodes.values(); true !== (e2 = r3.next()).done; ) if (t2((n3 = e2.value).key, n3.attributes)) return n3.key;
        }, i2.mapNodes = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.mapNode: expecting a callback.");
          for (var e2, n3, r3 = this._nodes.values(), i3 = new Array(this.order), o2 = 0; true !== (e2 = r3.next()).done; ) n3 = e2.value, i3[o2++] = t2(n3.key, n3.attributes);
          return i3;
        }, i2.someNode = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.someNode: expecting a callback.");
          for (var e2, n3, r3 = this._nodes.values(); true !== (e2 = r3.next()).done; ) if (t2((n3 = e2.value).key, n3.attributes)) return true;
          return false;
        }, i2.everyNode = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.everyNode: expecting a callback.");
          for (var e2, n3, r3 = this._nodes.values(); true !== (e2 = r3.next()).done; ) if (!t2((n3 = e2.value).key, n3.attributes)) return false;
          return true;
        }, i2.filterNodes = function(t2) {
          if ("function" != typeof t2) throw new B("Graph.filterNodes: expecting a callback.");
          for (var e2, n3, r3 = this._nodes.values(), i3 = []; true !== (e2 = r3.next()).done; ) t2((n3 = e2.value).key, n3.attributes) && i3.push(n3.key);
          return i3;
        }, i2.reduceNodes = function(t2, e2) {
          if ("function" != typeof t2) throw new B("Graph.reduceNodes: expecting a callback.");
          if (arguments.length < 2) throw new B("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");
          for (var n3, r3, i3 = e2, o2 = this._nodes.values(); true !== (n3 = o2.next()).done; ) i3 = t2(i3, (r3 = n3.value).key, r3.attributes);
          return i3;
        }, i2.nodeEntries = function() {
          var t2 = this._nodes.values();
          return new O((function() {
            var e2 = t2.next();
            if (e2.done) return e2;
            var n3 = e2.value;
            return { value: { node: n3.key, attributes: n3.attributes }, done: false };
          }));
        }, i2.export = function() {
          var t2 = this, e2 = new Array(this._nodes.size), n3 = 0;
          this._nodes.forEach((function(t3, r4) {
            e2[n3++] = (function(t4, e3) {
              var n4 = { key: t4 };
              return h(e3.attributes) || (n4.attributes = u({}, e3.attributes)), n4;
            })(r4, t3);
          }));
          var r3 = new Array(this._edges.size);
          return n3 = 0, this._edges.forEach((function(e3, i3) {
            r3[n3++] = (function(t3, e4, n4) {
              var r4 = { key: e4, source: n4.source.key, target: n4.target.key };
              return h(n4.attributes) || (r4.attributes = u({}, n4.attributes)), "mixed" === t3 && n4.undirected && (r4.undirected = true), r4;
            })(t2.type, i3, e3);
          })), { options: { type: this.type, multi: this.multi, allowSelfLoops: this.allowSelfLoops }, attributes: this.getAttributes(), nodes: e2, edges: r3 };
        }, i2.import = function(t2) {
          var e2, n3, i3, o2, a2, c2 = this, u2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (t2 instanceof r2) return t2.forEachNode((function(t3, e3) {
            u2 ? c2.mergeNode(t3, e3) : c2.addNode(t3, e3);
          })), t2.forEachEdge((function(t3, e3, n4, r3, i4, o3, a3) {
            u2 ? a3 ? c2.mergeUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.mergeDirectedEdgeWithKey(t3, n4, r3, e3) : a3 ? c2.addUndirectedEdgeWithKey(t3, n4, r3, e3) : c2.addDirectedEdgeWithKey(t3, n4, r3, e3);
          })), this;
          if (!s(t2)) throw new B("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");
          if (t2.attributes) {
            if (!s(t2.attributes)) throw new B("Graph.import: invalid attributes. Expecting a plain object.");
            u2 ? this.mergeAttributes(t2.attributes) : this.replaceAttributes(t2.attributes);
          }
          if (t2.nodes) {
            if (i3 = t2.nodes, !Array.isArray(i3)) throw new B("Graph.import: invalid nodes. Expecting an array.");
            for (e2 = 0, n3 = i3.length; e2 < n3; e2++) {
              Et(o2 = i3[e2]);
              var d2 = o2, h2 = d2.key, p2 = d2.attributes;
              u2 ? this.mergeNode(h2, p2) : this.addNode(h2, p2);
            }
          }
          if (t2.edges) {
            var f2 = false;
            if ("undirected" === this.type && (f2 = true), i3 = t2.edges, !Array.isArray(i3)) throw new B("Graph.import: invalid edges. Expecting an array.");
            for (e2 = 0, n3 = i3.length; e2 < n3; e2++) {
              At(a2 = i3[e2]);
              var l2 = a2, g2 = l2.source, y2 = l2.target, w2 = l2.attributes, v2 = l2.undirected, b2 = void 0 === v2 ? f2 : v2;
              "key" in a2 ? (u2 ? b2 ? this.mergeUndirectedEdgeWithKey : this.mergeDirectedEdgeWithKey : b2 ? this.addUndirectedEdgeWithKey : this.addDirectedEdgeWithKey).call(this, a2.key, g2, y2, w2) : (u2 ? b2 ? this.mergeUndirectedEdge : this.mergeDirectedEdge : b2 ? this.addUndirectedEdge : this.addDirectedEdge).call(this, g2, y2, w2);
            }
          }
          return this;
        }, i2.nullCopy = function(t2) {
          var e2 = new r2(u({}, this._options, t2));
          return e2.replaceAttributes(u({}, this.getAttributes())), e2;
        }, i2.emptyCopy = function(t2) {
          var e2 = this.nullCopy(t2);
          return this._nodes.forEach((function(t3, n3) {
            var r3 = u({}, t3.attributes);
            t3 = new e2.NodeDataClass(n3, r3), e2._nodes.set(n3, t3);
          })), e2;
        }, i2.copy = function(t2) {
          if ("string" == typeof (t2 = t2 || {}).type && t2.type !== this.type && "mixed" !== t2.type) throw new I('Graph.copy: cannot create an incompatible copy from "'.concat(this.type, '" type to "').concat(t2.type, '" because this would mean losing information about the current graph.'));
          if ("boolean" == typeof t2.multi && t2.multi !== this.multi && true !== t2.multi) throw new I("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");
          if ("boolean" == typeof t2.allowSelfLoops && t2.allowSelfLoops !== this.allowSelfLoops && true !== t2.allowSelfLoops) throw new I("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");
          for (var e2, n3, r3 = this.emptyCopy(t2), i3 = this._edges.values(); true !== (e2 = i3.next()).done; ) jt(r3, "copy", false, (n3 = e2.value).undirected, n3.key, n3.source.key, n3.target.key, u({}, n3.attributes));
          return r3;
        }, i2.toJSON = function() {
          return this.export();
        }, i2.toString = function() {
          return "[object Graph]";
        }, i2.inspect = function() {
          var e2 = this, n3 = {};
          this._nodes.forEach((function(t2, e3) {
            n3[e3] = t2.attributes;
          }));
          var r3 = {}, i3 = {};
          this._edges.forEach((function(t2, n4) {
            var o3, a3 = t2.undirected ? "--" : "->", c2 = "", u2 = t2.source.key, d2 = t2.target.key;
            t2.undirected && u2 > d2 && (o3 = u2, u2 = d2, d2 = o3);
            var s2 = "(".concat(u2, ")").concat(a3, "(").concat(d2, ")");
            n4.startsWith("geid_") ? e2.multi && (void 0 === i3[s2] ? i3[s2] = 0 : i3[s2]++, c2 += "".concat(i3[s2], ". ")) : c2 += "[".concat(n4, "]: "), r3[c2 += s2] = t2.attributes;
          }));
          var o2 = {};
          for (var a2 in this) this.hasOwnProperty(a2) && !Ut.has(a2) && "function" != typeof this[a2] && "symbol" !== t(a2) && (o2[a2] = this[a2]);
          return o2.attributes = this._attributes, o2.nodes = n3, o2.edges = r3, p(o2, "constructor", this.constructor), o2;
        }, r2;
      })(y.exports.EventEmitter);
      "undefined" != typeof Symbol && (zt.prototype[Symbol.for("nodejs.util.inspect.custom")] = zt.prototype.inspect), [{ name: function(t2) {
        return "".concat(t2, "Edge");
      }, generateKey: true }, { name: function(t2) {
        return "".concat(t2, "DirectedEdge");
      }, generateKey: true, type: "directed" }, { name: function(t2) {
        return "".concat(t2, "UndirectedEdge");
      }, generateKey: true, type: "undirected" }, { name: function(t2) {
        return "".concat(t2, "EdgeWithKey");
      } }, { name: function(t2) {
        return "".concat(t2, "DirectedEdgeWithKey");
      }, type: "directed" }, { name: function(t2) {
        return "".concat(t2, "UndirectedEdgeWithKey");
      }, type: "undirected" }].forEach((function(t2) {
        ["add", "merge", "update"].forEach((function(e2) {
          var n2 = t2.name(e2), r2 = "add" === e2 ? jt : Ct;
          t2.generateKey ? zt.prototype[n2] = function(i2, o2, a2) {
            return r2(this, n2, true, "undirected" === (t2.type || this.type), null, i2, o2, a2, "update" === e2);
          } : zt.prototype[n2] = function(i2, o2, a2, c2) {
            return r2(this, n2, false, "undirected" === (t2.type || this.type), i2, o2, a2, c2, "update" === e2);
          };
        }));
      })), (function(t2) {
        Q.forEach((function(e2) {
          var n2 = e2.name, r2 = e2.attacher;
          r2(t2, n2("Node"), 0), r2(t2, n2("Source"), 1), r2(t2, n2("Target"), 2), r2(t2, n2("Opposite"), 3);
        }));
      })(zt), (function(t2) {
        X.forEach((function(e2) {
          var n2 = e2.name, r2 = e2.attacher;
          r2(t2, n2("Edge"), "mixed"), r2(t2, n2("DirectedEdge"), "directed"), r2(t2, n2("UndirectedEdge"), "undirected");
        }));
      })(zt), (function(t2) {
        et.forEach((function(e2) {
          !(function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction;
            t3.prototype[n2] = function(t4, e4) {
              if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return [];
              if (!arguments.length) return ut(this, r2);
              if (1 === arguments.length) {
                t4 = "" + t4;
                var o2 = this._nodes.get(t4);
                if (void 0 === o2) throw new F("Graph.".concat(n2, ': could not find the "').concat(t4, '" node in the graph.'));
                return pt(this.multi, "mixed" === r2 ? this.type : r2, i2, o2);
              }
              if (2 === arguments.length) {
                t4 = "" + t4, e4 = "" + e4;
                var a2 = this._nodes.get(t4);
                if (!a2) throw new F("Graph.".concat(n2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                if (!this._nodes.has(e4)) throw new F("Graph.".concat(n2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                return gt(r2, this.multi, i2, a2, e4);
              }
              throw new B("Graph.".concat(n2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
            };
          })(t2, e2), (function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[o2] = function(t4, e4, n3) {
              if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                if (1 === arguments.length) return dt(false, this, r2, n3 = t4);
                if (2 === arguments.length) {
                  t4 = "" + t4, n3 = e4;
                  var a3 = this._nodes.get(t4);
                  if (void 0 === a3) throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                  return ht(false, this.multi, "mixed" === r2 ? this.type : r2, i2, a3, n3);
                }
                if (3 === arguments.length) {
                  t4 = "" + t4, e4 = "" + e4;
                  var c3 = this._nodes.get(t4);
                  if (!c3) throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                  if (!this._nodes.has(e4)) throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                  return lt(false, r2, this.multi, i2, c3, e4, n3);
                }
                throw new B("Graph.".concat(o2, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
              }
            };
            var a2 = "map" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[a2] = function() {
              var t4, e4 = Array.prototype.slice.call(arguments), n3 = e4.pop();
              if (0 === e4.length) {
                var i3 = 0;
                "directed" !== r2 && (i3 += this.undirectedSize), "undirected" !== r2 && (i3 += this.directedSize), t4 = new Array(i3);
                var a3 = 0;
                e4.push((function(e5, r3, i4, o3, c3, u3, d2) {
                  t4[a3++] = n3(e5, r3, i4, o3, c3, u3, d2);
                }));
              } else t4 = [], e4.push((function(e5, r3, i4, o3, a4, c3, u3) {
                t4.push(n3(e5, r3, i4, o3, a4, c3, u3));
              }));
              return this[o2].apply(this, e4), t4;
            };
            var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[c2] = function() {
              var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop(), n3 = [];
              return t4.push((function(t5, r3, i3, o3, a3, c3, u3) {
                e4(t5, r3, i3, o3, a3, c3, u3) && n3.push(t5);
              })), this[o2].apply(this, t4), n3;
            };
            var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[u2] = function() {
              var t4, e4, n3 = Array.prototype.slice.call(arguments);
              if (n3.length < 2 || n3.length > 4) throw new B("Graph.".concat(u2, ": invalid number of arguments (expecting 2, 3 or 4 and got ").concat(n3.length, ")."));
              if ("function" == typeof n3[n3.length - 1] && "function" != typeof n3[n3.length - 2]) throw new B("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
              2 === n3.length ? (t4 = n3[0], e4 = n3[1], n3 = []) : 3 === n3.length ? (t4 = n3[1], e4 = n3[2], n3 = [n3[0]]) : 4 === n3.length && (t4 = n3[2], e4 = n3[3], n3 = [n3[0], n3[1]]);
              var r3 = e4;
              return n3.push((function(e5, n4, i3, o3, a3, c3, u3) {
                r3 = t4(r3, e5, n4, i3, o3, a3, c3, u3);
              })), this[o2].apply(this, n3), r3;
            };
          })(t2, e2), (function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "find" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[o2] = function(t4, e4, n3) {
              if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return false;
              if (1 === arguments.length) return dt(true, this, r2, n3 = t4);
              if (2 === arguments.length) {
                t4 = "" + t4, n3 = e4;
                var a3 = this._nodes.get(t4);
                if (void 0 === a3) throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                return ht(true, this.multi, "mixed" === r2 ? this.type : r2, i2, a3, n3);
              }
              if (3 === arguments.length) {
                t4 = "" + t4, e4 = "" + e4;
                var c3 = this._nodes.get(t4);
                if (!c3) throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                if (!this._nodes.has(e4)) throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                return lt(true, r2, this.multi, i2, c3, e4, n3);
              }
              throw new B("Graph.".concat(o2, ": too many arguments (expecting 1, 2 or 3 and got ").concat(arguments.length, ")."));
            };
            var a2 = "some" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[a2] = function() {
              var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
              return t4.push((function(t5, n3, r3, i3, o3, a3, c3) {
                return e4(t5, n3, r3, i3, o3, a3, c3);
              })), !!this[o2].apply(this, t4);
            };
            var c2 = "every" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[c2] = function() {
              var t4 = Array.prototype.slice.call(arguments), e4 = t4.pop();
              return t4.push((function(t5, n3, r3, i3, o3, a3, c3) {
                return !e4(t5, n3, r3, i3, o3, a3, c3);
              })), !this[o2].apply(this, t4);
            };
          })(t2, e2), (function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = n2.slice(0, -1) + "Entries";
            t3.prototype[o2] = function(t4, e4) {
              if ("mixed" !== r2 && "mixed" !== this.type && r2 !== this.type) return O.empty();
              if (!arguments.length) return st(this, r2);
              if (1 === arguments.length) {
                t4 = "" + t4;
                var n3 = this._nodes.get(t4);
                if (!n3) throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                return ft(r2, i2, n3);
              }
              if (2 === arguments.length) {
                t4 = "" + t4, e4 = "" + e4;
                var a2 = this._nodes.get(t4);
                if (!a2) throw new F("Graph.".concat(o2, ':  could not find the "').concat(t4, '" source node in the graph.'));
                if (!this._nodes.has(e4)) throw new F("Graph.".concat(o2, ':  could not find the "').concat(e4, '" target node in the graph.'));
                return yt(r2, i2, a2, e4);
              }
              throw new B("Graph.".concat(o2, ": too many arguments (expecting 0, 1 or 2 and got ").concat(arguments.length, ")."));
            };
          })(t2, e2);
        }));
      })(zt), (function(t2) {
        wt.forEach((function(e2) {
          _t(t2, e2), (function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = "forEach" + n2[0].toUpperCase() + n2.slice(1, -1);
            t3.prototype[o2] = function(t4, e4) {
              if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                t4 = "" + t4;
                var n3 = this._nodes.get(t4);
                if (void 0 === n3) throw new F("Graph.".concat(o2, ': could not find the "').concat(t4, '" node in the graph.'));
                mt(false, "mixed" === r2 ? this.type : r2, i2, n3, e4);
              }
            };
            var a2 = "map" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[a2] = function(t4, e4) {
              var n3 = [];
              return this[o2](t4, (function(t5, r3) {
                n3.push(e4(t5, r3));
              })), n3;
            };
            var c2 = "filter" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[c2] = function(t4, e4) {
              var n3 = [];
              return this[o2](t4, (function(t5, r3) {
                e4(t5, r3) && n3.push(t5);
              })), n3;
            };
            var u2 = "reduce" + n2[0].toUpperCase() + n2.slice(1);
            t3.prototype[u2] = function(t4, e4, n3) {
              if (arguments.length < 3) throw new B("Graph.".concat(u2, ": missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array."));
              var r3 = n3;
              return this[o2](t4, (function(t5, n4) {
                r3 = e4(r3, t5, n4);
              })), r3;
            };
          })(t2, e2), (function(t3, e3) {
            var n2 = e3.name, r2 = e3.type, i2 = e3.direction, o2 = n2[0].toUpperCase() + n2.slice(1, -1), a2 = "find" + o2;
            t3.prototype[a2] = function(t4, e4) {
              if ("mixed" === r2 || "mixed" === this.type || r2 === this.type) {
                t4 = "" + t4;
                var n3 = this._nodes.get(t4);
                if (void 0 === n3) throw new F("Graph.".concat(a2, ': could not find the "').concat(t4, '" node in the graph.'));
                return mt(true, "mixed" === r2 ? this.type : r2, i2, n3, e4);
              }
            };
            var c2 = "some" + o2;
            t3.prototype[c2] = function(t4, e4) {
              return !!this[a2](t4, e4);
            };
            var u2 = "every" + o2;
            t3.prototype[u2] = function(t4, e4) {
              return !this[a2](t4, (function(t5, n3) {
                return !e4(t5, n3);
              }));
            };
          })(t2, e2), Gt(t2, e2);
        }));
      })(zt);
      var Wt = (function(t2) {
        function n2(e2) {
          var n3 = u({ type: "directed" }, e2);
          if ("multi" in n3 && false !== n3.multi) throw new B("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
          if ("directed" !== n3.type) throw new B('DirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
          return t2.call(this, n3) || this;
        }
        return e(n2, t2), n2;
      })(zt), Pt = (function(t2) {
        function n2(e2) {
          var n3 = u({ type: "undirected" }, e2);
          if ("multi" in n3 && false !== n3.multi) throw new B("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");
          if ("undirected" !== n3.type) throw new B('UndirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
          return t2.call(this, n3) || this;
        }
        return e(n2, t2), n2;
      })(zt), Rt = (function(t2) {
        function n2(e2) {
          var n3 = u({ multi: true }, e2);
          if ("multi" in n3 && true !== n3.multi) throw new B("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");
          return t2.call(this, n3) || this;
        }
        return e(n2, t2), n2;
      })(zt), Kt = (function(t2) {
        function n2(e2) {
          var n3 = u({ type: "directed", multi: true }, e2);
          if ("multi" in n3 && true !== n3.multi) throw new B("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
          if ("directed" !== n3.type) throw new B('MultiDirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
          return t2.call(this, n3) || this;
        }
        return e(n2, t2), n2;
      })(zt), Tt = (function(t2) {
        function n2(e2) {
          var n3 = u({ type: "undirected", multi: true }, e2);
          if ("multi" in n3 && true !== n3.multi) throw new B("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");
          if ("undirected" !== n3.type) throw new B('MultiUndirectedGraph.from: inconsistent "' + n3.type + '" type in given options!');
          return t2.call(this, n3) || this;
        }
        return e(n2, t2), n2;
      })(zt);
      function Bt(t2) {
        t2.from = function(e2, n2) {
          var r2 = u({}, e2.options, n2), i2 = new t2(r2);
          return i2.import(e2), i2;
        };
      }
      return Bt(zt), Bt(Wt), Bt(Pt), Bt(Rt), Bt(Kt), Bt(Tt), zt.Graph = zt, zt.DirectedGraph = Wt, zt.UndirectedGraph = Pt, zt.MultiGraph = Rt, zt.MultiDirectedGraph = Kt, zt.MultiUndirectedGraph = Tt, zt.InvalidArgumentsGraphError = B, zt.NotFoundGraphError = F, zt.UsageGraphError = I, zt;
    }));
  }
});

// node_modules/events/events.js
var require_events = __commonJS({
  "node_modules/events/events.js"(exports, module) {
    "use strict";
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    module.exports = EventEmitter;
    module.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er;
        if (args.length > 0)
          er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          ReflectApply(listeners[i], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit(
            "newListener",
            type,
            listener.listener ? listener.listener : listener
          );
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once(emitter, name) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
        if (name !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name, listener);
        } else {
          emitter.on(name, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
  }
});

// node_modules/graphology-utils/is-graph.js
var require_is_graph = __commonJS({
  "node_modules/graphology-utils/is-graph.js"(exports, module) {
    module.exports = function isGraph(value) {
      return value !== null && typeof value === "object" && typeof value.addUndirectedEdgeWithKey === "function" && typeof value.dropNode === "function" && typeof value.multi === "boolean";
    };
  }
});

// node_modules/graphology-metrics/extent.js
var require_extent = __commonJS({
  "node_modules/graphology-metrics/extent.js"(exports, module) {
    var isGraph = require_is_graph();
    function nodeExtent(graph, attribute) {
      if (!isGraph(graph))
        throw new Error("graphology-metrics/extent: the given graph is not a valid graphology instance.");
      var attributes = [].concat(attribute);
      var value, key, a;
      var results = {};
      for (a = 0; a < attributes.length; a++) {
        key = attributes[a];
        results[key] = [Infinity, -Infinity];
      }
      graph.forEachNode(function(node, data) {
        for (a = 0; a < attributes.length; a++) {
          key = attributes[a];
          value = data[key];
          if (value < results[key][0])
            results[key][0] = value;
          if (value > results[key][1])
            results[key][1] = value;
        }
      });
      return typeof attribute === "string" ? results[attribute] : results;
    }
    function edgeExtent(graph, attribute) {
      if (!isGraph(graph))
        throw new Error("graphology-metrics/extent: the given graph is not a valid graphology instance.");
      var attributes = [].concat(attribute);
      var value, key, a;
      var results = {};
      for (a = 0; a < attributes.length; a++) {
        key = attributes[a];
        results[key] = [Infinity, -Infinity];
      }
      graph.forEachEdge(function(edge, data) {
        for (a = 0; a < attributes.length; a++) {
          key = attributes[a];
          value = data[key];
          if (value < results[key][0])
            results[key][0] = value;
          if (value > results[key][1])
            results[key][1] = value;
        }
      });
      return typeof attribute === "string" ? results[attribute] : results;
    }
    var extent = nodeExtent;
    extent.nodeExtent = nodeExtent;
    extent.edgeExtent = edgeExtent;
    module.exports = extent;
  }
});

// node_modules/sigma/utils/matrices.js
var require_matrices = __commonJS({
  "node_modules/sigma/utils/matrices.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multiplyVec = exports.multiply = exports.translate = exports.rotate = exports.scale = exports.identity = void 0;
    function identity() {
      return Float32Array.of(1, 0, 0, 0, 1, 0, 0, 0, 1);
    }
    exports.identity = identity;
    function scale(m, x, y) {
      m[0] = x;
      m[4] = typeof y === "number" ? y : x;
      return m;
    }
    exports.scale = scale;
    function rotate(m, r) {
      var s = Math.sin(r), c = Math.cos(r);
      m[0] = c;
      m[1] = s;
      m[3] = -s;
      m[4] = c;
      return m;
    }
    exports.rotate = rotate;
    function translate(m, x, y) {
      m[6] = x;
      m[7] = y;
      return m;
    }
    exports.translate = translate;
    function multiply(a, b) {
      var a00 = a[0], a01 = a[1], a02 = a[2];
      var a10 = a[3], a11 = a[4], a12 = a[5];
      var a20 = a[6], a21 = a[7], a22 = a[8];
      var b00 = b[0], b01 = b[1], b02 = b[2];
      var b10 = b[3], b11 = b[4], b12 = b[5];
      var b20 = b[6], b21 = b[7], b22 = b[8];
      a[0] = b00 * a00 + b01 * a10 + b02 * a20;
      a[1] = b00 * a01 + b01 * a11 + b02 * a21;
      a[2] = b00 * a02 + b01 * a12 + b02 * a22;
      a[3] = b10 * a00 + b11 * a10 + b12 * a20;
      a[4] = b10 * a01 + b11 * a11 + b12 * a21;
      a[5] = b10 * a02 + b11 * a12 + b12 * a22;
      a[6] = b20 * a00 + b21 * a10 + b22 * a20;
      a[7] = b20 * a01 + b21 * a11 + b22 * a21;
      a[8] = b20 * a02 + b21 * a12 + b22 * a22;
      return a;
    }
    exports.multiply = multiply;
    function multiplyVec(a, b) {
      var a00 = a[0], a01 = a[1], a02 = a[2];
      var a10 = a[3], a11 = a[4], a12 = a[5];
      var a20 = a[6], a21 = a[7], a22 = a[8];
      var b0 = b[0], b1 = b[1], b2 = b[2];
      var c = Array.isArray(b) ? [0, 0, 0] : Float32Array.of(0, 0, 0);
      c[0] = b0 * a00 + b1 * a10 + b2 * a20;
      c[1] = b0 * a01 + b1 * a11 + b2 * a21;
      c[2] = b0 * a02 + b1 * a12 + b2 * a22;
      return c;
    }
    exports.multiplyVec = multiplyVec;
  }
});

// node_modules/sigma/utils/index.js
var require_utils = __commonJS({
  "node_modules/sigma/utils/index.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateGraph = exports.canUse32BitsIndices = exports.extractPixel = exports.matrixFromCamera = exports.getCorrectionRatio = exports.floatColor = exports.zIndexOrdering = exports.createNormalizationFunction = exports.getPixelRatio = exports.createElement = exports.cancelFrame = exports.requestFrame = exports.assignDeep = exports.isPlainObject = void 0;
    var is_graph_1 = __importDefault(require_is_graph());
    var matrices_1 = require_matrices();
    function isPlainObject(value) {
      return typeof value === "object" && value !== null && value.constructor === Object;
    }
    exports.isPlainObject = isPlainObject;
    function assignDeep(target) {
      var objects = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
      }
      target = target || {};
      for (var i = 0, l = objects.length; i < l; i++) {
        var o = objects[i];
        if (!o)
          continue;
        for (var k in o) {
          if (isPlainObject(o[k])) {
            target[k] = assignDeep(target[k], o[k]);
          } else {
            target[k] = o[k];
          }
        }
      }
      return target;
    }
    exports.assignDeep = assignDeep;
    exports.requestFrame = typeof requestAnimationFrame !== "undefined" ? function(callback) {
      return requestAnimationFrame(callback);
    } : function(callback) {
      return setTimeout(callback, 0);
    };
    exports.cancelFrame = typeof cancelAnimationFrame !== "undefined" ? function(requestID) {
      return cancelAnimationFrame(requestID);
    } : function(requestID) {
      return clearTimeout(requestID);
    };
    function createElement(tag, style, attributes) {
      var element = document.createElement(tag);
      if (style) {
        for (var k in style) {
          element.style[k] = style[k];
        }
      }
      if (attributes) {
        for (var k in attributes) {
          element.setAttribute(k, attributes[k]);
        }
      }
      return element;
    }
    exports.createElement = createElement;
    function getPixelRatio() {
      if (typeof window.devicePixelRatio !== "undefined")
        return window.devicePixelRatio;
      return 1;
    }
    exports.getPixelRatio = getPixelRatio;
    function createNormalizationFunction(extent) {
      var _a = __read(extent.x, 2), minX = _a[0], maxX = _a[1], _b = __read(extent.y, 2), minY = _b[0], maxY = _b[1];
      var ratio = Math.max(maxX - minX, maxY - minY);
      if (ratio === 0)
        ratio = 1;
      var dX = (maxX + minX) / 2, dY = (maxY + minY) / 2;
      var fn = function(data) {
        return {
          x: 0.5 + (data.x - dX) / ratio,
          y: 0.5 + (data.y - dY) / ratio
        };
      };
      fn.applyTo = function(data) {
        data.x = 0.5 + (data.x - dX) / ratio;
        data.y = 0.5 + (data.y - dY) / ratio;
      };
      fn.inverse = function(data) {
        return {
          x: dX + ratio * (data.x - 0.5),
          y: dY + ratio * (data.y - 0.5)
        };
      };
      fn.ratio = ratio;
      return fn;
    }
    exports.createNormalizationFunction = createNormalizationFunction;
    function zIndexOrdering(extent, getter, elements) {
      return elements.sort(function(a, b) {
        var zA = getter(a) || 0, zB = getter(b) || 0;
        if (zA < zB)
          return -1;
        if (zA > zB)
          return 1;
        return 0;
      });
    }
    exports.zIndexOrdering = zIndexOrdering;
    var FLOAT_COLOR_CACHE = {};
    var INT8 = new Int8Array(4);
    var INT32 = new Int32Array(INT8.buffer, 0, 1);
    var FLOAT32 = new Float32Array(INT8.buffer, 0, 1);
    var RGBA_TEST_REGEX = /^\s*rgba?\s*\(/;
    var RGBA_EXTRACT_REGEX = /^\s*rgba?\s*\(\s*([0-9]*)\s*,\s*([0-9]*)\s*,\s*([0-9]*)(?:\s*,\s*(.*)?)?\)\s*$/;
    function floatColor(val) {
      if (typeof FLOAT_COLOR_CACHE[val] !== "undefined")
        return FLOAT_COLOR_CACHE[val];
      var r = 0, g = 0, b = 0, a = 1;
      if (val[0] === "#") {
        if (val.length === 4) {
          r = parseInt(val.charAt(1) + val.charAt(1), 16);
          g = parseInt(val.charAt(2) + val.charAt(2), 16);
          b = parseInt(val.charAt(3) + val.charAt(3), 16);
        } else {
          r = parseInt(val.charAt(1) + val.charAt(2), 16);
          g = parseInt(val.charAt(3) + val.charAt(4), 16);
          b = parseInt(val.charAt(5) + val.charAt(6), 16);
        }
      } else if (RGBA_TEST_REGEX.test(val)) {
        var match = val.match(RGBA_EXTRACT_REGEX);
        if (match) {
          r = +match[1];
          g = +match[2];
          b = +match[3];
          if (match[4])
            a = +match[4];
        }
      }
      a = a * 255 | 0;
      INT32[0] = (a << 24 | b << 16 | g << 8 | r) & 4278190079;
      var color = FLOAT32[0];
      FLOAT_COLOR_CACHE[val] = color;
      return color;
    }
    exports.floatColor = floatColor;
    function getCorrectionRatio(viewportDimensions, graphDimensions) {
      var viewportRatio = viewportDimensions.height / viewportDimensions.width;
      var graphRatio = graphDimensions.height / graphDimensions.width;
      if (viewportRatio < 1 && graphRatio > 1 || viewportRatio > 1 && graphRatio < 1) {
        return 1;
      }
      return Math.min(Math.max(graphRatio, 1 / graphRatio), Math.max(1 / viewportRatio, viewportRatio));
    }
    exports.getCorrectionRatio = getCorrectionRatio;
    function matrixFromCamera(state, viewportDimensions, graphDimensions, padding, inverse) {
      var angle = state.angle, ratio = state.ratio, x = state.x, y = state.y;
      var width = viewportDimensions.width, height = viewportDimensions.height;
      var matrix = (0, matrices_1.identity)();
      var smallestDimension = Math.min(width, height) - 2 * padding;
      var correctionRatio = getCorrectionRatio(viewportDimensions, graphDimensions);
      if (!inverse) {
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 2 * (smallestDimension / width) * correctionRatio, 2 * (smallestDimension / height) * correctionRatio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), -angle));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), 1 / ratio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), -x, -y));
      } else {
        (0, matrices_1.multiply)(matrix, (0, matrices_1.translate)((0, matrices_1.identity)(), x, y));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), ratio));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.rotate)((0, matrices_1.identity)(), angle));
        (0, matrices_1.multiply)(matrix, (0, matrices_1.scale)((0, matrices_1.identity)(), width / smallestDimension / 2 / correctionRatio, height / smallestDimension / 2 / correctionRatio));
      }
      return matrix;
    }
    exports.matrixFromCamera = matrixFromCamera;
    function extractPixel(gl, x, y, array) {
      var data = array || new Uint8Array(4);
      gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
      return data;
    }
    exports.extractPixel = extractPixel;
    function canUse32BitsIndices(gl) {
      var webgl2 = typeof WebGL2RenderingContext !== "undefined" && gl instanceof WebGL2RenderingContext;
      return webgl2 || !!gl.getExtension("OES_element_index_uint");
    }
    exports.canUse32BitsIndices = canUse32BitsIndices;
    function validateGraph(graph) {
      if (!(0, is_graph_1.default)(graph))
        throw new Error("Sigma: invalid graph instance.");
      graph.forEachNode(function(key, attributes) {
        if (!Number.isFinite(attributes.x) || !Number.isFinite(attributes.y)) {
          throw new Error("Sigma: Coordinates of node " + key + " are invalid. A node must have a numeric 'x' and 'y' attribute.");
        }
      });
    }
    exports.validateGraph = validateGraph;
  }
});

// node_modules/sigma/utils/easings.js
var require_easings = __commonJS({
  "node_modules/sigma/utils/easings.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cubicInOut = exports.cubicOut = exports.cubicIn = exports.quadraticInOut = exports.quadraticOut = exports.quadraticIn = exports.linear = void 0;
    var linear = function(k) {
      return k;
    };
    exports.linear = linear;
    var quadraticIn = function(k) {
      return k * k;
    };
    exports.quadraticIn = quadraticIn;
    var quadraticOut = function(k) {
      return k * (2 - k);
    };
    exports.quadraticOut = quadraticOut;
    var quadraticInOut = function(k) {
      if ((k *= 2) < 1)
        return 0.5 * k * k;
      return -0.5 * (--k * (k - 2) - 1);
    };
    exports.quadraticInOut = quadraticInOut;
    var cubicIn = function(k) {
      return k * k * k;
    };
    exports.cubicIn = cubicIn;
    var cubicOut = function(k) {
      return --k * k * k + 1;
    };
    exports.cubicOut = cubicOut;
    var cubicInOut = function(k) {
      if ((k *= 2) < 1)
        return 0.5 * k * k * k;
      return 0.5 * ((k -= 2) * k * k + 2);
    };
    exports.cubicInOut = cubicInOut;
    var easings = {
      linear: exports.linear,
      quadraticIn: exports.quadraticIn,
      quadraticOut: exports.quadraticOut,
      quadraticInOut: exports.quadraticInOut,
      cubicIn: exports.cubicIn,
      cubicOut: exports.cubicOut,
      cubicInOut: exports.cubicInOut
    };
    exports.default = easings;
  }
});

// node_modules/sigma/utils/animate.js
var require_animate = __commonJS({
  "node_modules/sigma/utils/animate.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animateNodes = exports.ANIMATE_DEFAULTS = void 0;
    var index_1 = require_utils();
    var easings_1 = __importDefault(require_easings());
    exports.ANIMATE_DEFAULTS = {
      easing: "quadraticInOut",
      duration: 150
    };
    function animateNodes(graph, targets, opts, callback) {
      var options = Object.assign({}, exports.ANIMATE_DEFAULTS, opts);
      var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
      var start = Date.now();
      var startPositions = {};
      for (var node in targets) {
        var attrs = targets[node];
        startPositions[node] = {};
        for (var k in attrs)
          startPositions[node][k] = graph.getNodeAttribute(node, k);
      }
      var frame = null;
      var step = function() {
        var p = (Date.now() - start) / options.duration;
        if (p >= 1) {
          for (var node2 in targets) {
            var attrs2 = targets[node2];
            for (var k2 in attrs2)
              graph.setNodeAttribute(node2, k2, attrs2[k2]);
          }
          if (typeof callback === "function")
            callback();
          return;
        }
        p = easing(p);
        for (var node2 in targets) {
          var attrs2 = targets[node2];
          var s = startPositions[node2];
          for (var k2 in attrs2)
            graph.setNodeAttribute(node2, k2, attrs2[k2] * p + s[k2] * (1 - p));
        }
        frame = (0, index_1.requestFrame)(step);
      };
      step();
      return function() {
        if (frame)
          (0, index_1.cancelFrame)(frame);
      };
    }
    exports.animateNodes = animateNodes;
  }
});

// node_modules/sigma/core/camera.js
var require_camera = __commonJS({
  "node_modules/sigma/core/camera.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require_events();
    var animate_1 = require_animate();
    var easings_1 = __importDefault(require_easings());
    var utils_1 = require_utils();
    var DEFAULT_ZOOMING_RATIO = 1.5;
    var Camera = (
      /** @class */
      (function(_super) {
        __extends(Camera2, _super);
        function Camera2() {
          var _this = _super.call(this) || this;
          _this.x = 0.5;
          _this.y = 0.5;
          _this.angle = 0;
          _this.ratio = 1;
          _this.nextFrame = null;
          _this.previousState = null;
          _this.enabled = true;
          _this.previousState = _this.getState();
          return _this;
        }
        Camera2.from = function(state) {
          var camera = new Camera2();
          return camera.setState(state);
        };
        Camera2.prototype.enable = function() {
          this.enabled = true;
          return this;
        };
        Camera2.prototype.disable = function() {
          this.enabled = false;
          return this;
        };
        Camera2.prototype.getState = function() {
          return {
            x: this.x,
            y: this.y,
            angle: this.angle,
            ratio: this.ratio
          };
        };
        Camera2.prototype.hasState = function(state) {
          return this.x === state.x && this.y === state.y && this.ratio === state.ratio && this.angle === state.angle;
        };
        Camera2.prototype.getPreviousState = function() {
          var state = this.previousState;
          if (!state)
            return null;
          return {
            x: state.x,
            y: state.y,
            angle: state.angle,
            ratio: state.ratio
          };
        };
        Camera2.prototype.isAnimated = function() {
          return !!this.nextFrame;
        };
        Camera2.prototype.setState = function(state) {
          if (!this.enabled)
            return this;
          this.previousState = this.getState();
          if (typeof state.x === "number")
            this.x = state.x;
          if (typeof state.y === "number")
            this.y = state.y;
          if (typeof state.angle === "number")
            this.angle = state.angle;
          if (typeof state.ratio === "number")
            this.ratio = state.ratio;
          if (!this.hasState(this.previousState))
            this.emit("updated", this.getState());
          return this;
        };
        Camera2.prototype.animate = function(state, opts, callback) {
          var _this = this;
          if (!this.enabled)
            return;
          var options = Object.assign({}, animate_1.ANIMATE_DEFAULTS, opts);
          var easing = typeof options.easing === "function" ? options.easing : easings_1.default[options.easing];
          var start = Date.now(), initialState = this.getState();
          var fn = function() {
            var t = (Date.now() - start) / options.duration;
            if (t >= 1) {
              _this.nextFrame = null;
              _this.setState(state);
              if (_this.animationCallback) {
                _this.animationCallback.call(null);
                _this.animationCallback = void 0;
              }
              return;
            }
            var coefficient = easing(t);
            var newState = {};
            if (state.x)
              newState.x = initialState.x + (state.x - initialState.x) * coefficient;
            if (state.y)
              newState.y = initialState.y + (state.y - initialState.y) * coefficient;
            if (state.angle)
              newState.angle = initialState.angle + (state.angle - initialState.angle) * coefficient;
            if (state.ratio)
              newState.ratio = initialState.ratio + (state.ratio - initialState.ratio) * coefficient;
            _this.setState(newState);
            _this.nextFrame = (0, utils_1.requestFrame)(fn);
          };
          if (this.nextFrame) {
            (0, utils_1.cancelFrame)(this.nextFrame);
            if (this.animationCallback)
              this.animationCallback.call(null);
            this.nextFrame = (0, utils_1.requestFrame)(fn);
          } else {
            fn();
          }
          this.animationCallback = callback;
        };
        Camera2.prototype.animatedZoom = function(factorOrOptions) {
          if (!factorOrOptions) {
            this.animate({ ratio: this.ratio / DEFAULT_ZOOMING_RATIO });
          } else {
            if (typeof factorOrOptions === "number")
              return this.animate({ ratio: this.ratio / factorOrOptions });
            else
              this.animate({
                ratio: this.ratio / (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
              }, factorOrOptions);
          }
        };
        Camera2.prototype.animatedUnzoom = function(factorOrOptions) {
          if (!factorOrOptions) {
            this.animate({ ratio: this.ratio * DEFAULT_ZOOMING_RATIO });
          } else {
            if (typeof factorOrOptions === "number")
              return this.animate({ ratio: this.ratio * factorOrOptions });
            else
              this.animate({
                ratio: this.ratio * (factorOrOptions.factor || DEFAULT_ZOOMING_RATIO)
              }, factorOrOptions);
          }
        };
        Camera2.prototype.animatedReset = function(options) {
          this.animate({
            x: 0.5,
            y: 0.5,
            ratio: 1,
            angle: 0
          }, options);
        };
        Camera2.prototype.copy = function() {
          return Camera2.from(this.getState());
        };
        return Camera2;
      })(events_1.EventEmitter)
    );
    exports.default = Camera;
  }
});

// node_modules/sigma/core/captors/captor.js
var require_captor = __commonJS({
  "node_modules/sigma/core/captors/captor.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWheelDelta = exports.getTouchCoords = exports.getTouchesArray = exports.getMouseCoords = exports.getPosition = exports.getY = exports.getX = void 0;
    var events_1 = require_events();
    function getX(e) {
      if (typeof e.offsetX !== "undefined")
        return e.offsetX;
      if (typeof e.clientX !== "undefined")
        return e.clientX;
      throw new Error("Captor: could not extract x from event.");
    }
    exports.getX = getX;
    function getY(e) {
      if (typeof e.offsetY !== "undefined")
        return e.offsetY;
      if (typeof e.clientY !== "undefined")
        return e.clientY;
      throw new Error("Captor: could not extract y from event.");
    }
    exports.getY = getY;
    function getPosition(e) {
      return {
        x: getX(e),
        y: getY(e)
      };
    }
    exports.getPosition = getPosition;
    function getMouseCoords(e) {
      return {
        x: getX(e),
        y: getY(e),
        clientX: e.clientX,
        clientY: e.clientY,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        shiftKey: e.shiftKey,
        // TODO: this is not ideal... But I am wondering why we don't just pass the event through
        preventDefault: e.preventDefault.bind(e),
        original: e
      };
    }
    exports.getMouseCoords = getMouseCoords;
    var MAX_TOUCHES = 2;
    function getTouchesArray(touches) {
      var arr = [];
      for (var i = 0, l = Math.min(touches.length, MAX_TOUCHES); i < l; i++)
        arr.push(touches[i]);
      return arr;
    }
    exports.getTouchesArray = getTouchesArray;
    function getTouchCoords(e) {
      return {
        touches: getTouchesArray(e.touches).map(getPosition),
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey,
        shiftKey: e.shiftKey,
        // TODO: same as for getMouseCoords
        preventDefault: e.preventDefault.bind(e),
        original: e
      };
    }
    exports.getTouchCoords = getTouchCoords;
    function getWheelDelta(e) {
      if (typeof e.deltaY !== "undefined")
        return e.deltaY * -3 / 360;
      if (typeof e.detail !== "undefined")
        return e.detail / -9;
      throw new Error("Captor: could not extract delta from event.");
    }
    exports.getWheelDelta = getWheelDelta;
    var Captor = (
      /** @class */
      (function(_super) {
        __extends(Captor2, _super);
        function Captor2(container, renderer) {
          var _this = _super.call(this) || this;
          _this.container = container;
          _this.renderer = renderer;
          return _this;
        }
        return Captor2;
      })(events_1.EventEmitter)
    );
    exports.default = Captor;
  }
});

// node_modules/sigma/core/captors/mouse.js
var require_mouse = __commonJS({
  "node_modules/sigma/core/captors/mouse.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var captor_1 = __importStar(require_captor());
    var DRAG_TIMEOUT = 100;
    var DRAGGED_EVENTS_TOLERANCE = 3;
    var MOUSE_INERTIA_DURATION = 200;
    var MOUSE_INERTIA_RATIO = 3;
    var MOUSE_ZOOM_DURATION = 250;
    var ZOOMING_RATIO = 1.7;
    var DOUBLE_CLICK_TIMEOUT = 300;
    var DOUBLE_CLICK_ZOOMING_RATIO = 2.2;
    var DOUBLE_CLICK_ZOOMING_DURATION = 200;
    var MouseCaptor = (
      /** @class */
      (function(_super) {
        __extends(MouseCaptor2, _super);
        function MouseCaptor2(container, renderer) {
          var _this = _super.call(this, container, renderer) || this;
          _this.enabled = true;
          _this.draggedEvents = 0;
          _this.downStartTime = null;
          _this.lastMouseX = null;
          _this.lastMouseY = null;
          _this.isMouseDown = false;
          _this.isMoving = false;
          _this.movingTimeout = null;
          _this.startCameraState = null;
          _this.clicks = 0;
          _this.doubleClickTimeout = null;
          _this.currentWheelDirection = 0;
          _this.handleClick = _this.handleClick.bind(_this);
          _this.handleRightClick = _this.handleRightClick.bind(_this);
          _this.handleDown = _this.handleDown.bind(_this);
          _this.handleUp = _this.handleUp.bind(_this);
          _this.handleMove = _this.handleMove.bind(_this);
          _this.handleWheel = _this.handleWheel.bind(_this);
          _this.handleOut = _this.handleOut.bind(_this);
          container.addEventListener("click", _this.handleClick, false);
          container.addEventListener("contextmenu", _this.handleRightClick, false);
          container.addEventListener("mousedown", _this.handleDown, false);
          container.addEventListener("mousemove", _this.handleMove, false);
          container.addEventListener("wheel", _this.handleWheel, false);
          container.addEventListener("mouseout", _this.handleOut, false);
          document.addEventListener("mouseup", _this.handleUp, false);
          return _this;
        }
        MouseCaptor2.prototype.kill = function() {
          var container = this.container;
          container.removeEventListener("click", this.handleClick);
          container.removeEventListener("contextmenu", this.handleRightClick);
          container.removeEventListener("mousedown", this.handleDown);
          container.removeEventListener("mousemove", this.handleMove);
          container.removeEventListener("wheel", this.handleWheel);
          container.removeEventListener("mouseout", this.handleOut);
          document.removeEventListener("mouseup", this.handleUp);
        };
        MouseCaptor2.prototype.handleClick = function(e) {
          var _this = this;
          if (!this.enabled)
            return;
          this.clicks++;
          if (this.clicks === 2) {
            this.clicks = 0;
            if (typeof this.doubleClickTimeout === "number") {
              clearTimeout(this.doubleClickTimeout);
              this.doubleClickTimeout = null;
            }
            return this.handleDoubleClick(e);
          }
          setTimeout(function() {
            _this.clicks = 0;
            _this.doubleClickTimeout = null;
          }, DOUBLE_CLICK_TIMEOUT);
          if (this.draggedEvents < DRAGGED_EVENTS_TOLERANCE)
            this.emit("click", (0, captor_1.getMouseCoords)(e));
        };
        MouseCaptor2.prototype.handleRightClick = function(e) {
          if (!this.enabled)
            return;
          this.emit("rightClick", (0, captor_1.getMouseCoords)(e));
        };
        MouseCaptor2.prototype.handleDoubleClick = function(e) {
          if (!this.enabled)
            return;
          var camera = this.renderer.getCamera();
          var newRatio = camera.getState().ratio / DOUBLE_CLICK_ZOOMING_RATIO;
          camera.animate(this.renderer.getViewportZoomedState({ x: (0, captor_1.getX)(e), y: (0, captor_1.getY)(e) }, newRatio), {
            easing: "quadraticInOut",
            duration: DOUBLE_CLICK_ZOOMING_DURATION
          });
          if (e.preventDefault)
            e.preventDefault();
          else
            e.returnValue = false;
          e.stopPropagation();
          return false;
        };
        MouseCaptor2.prototype.handleDown = function(e) {
          if (!this.enabled)
            return;
          this.startCameraState = this.renderer.getCamera().getState();
          this.lastMouseX = (0, captor_1.getX)(e);
          this.lastMouseY = (0, captor_1.getY)(e);
          this.draggedEvents = 0;
          this.downStartTime = Date.now();
          switch (e.which) {
            default:
              this.isMouseDown = true;
              this.emit("mousedown", (0, captor_1.getMouseCoords)(e));
          }
        };
        MouseCaptor2.prototype.handleUp = function(e) {
          var _this = this;
          if (!this.enabled || !this.isMouseDown)
            return;
          var camera = this.renderer.getCamera();
          this.isMouseDown = false;
          if (typeof this.movingTimeout === "number") {
            clearTimeout(this.movingTimeout);
            this.movingTimeout = null;
          }
          var x = (0, captor_1.getX)(e), y = (0, captor_1.getY)(e);
          var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || { x: 0, y: 0 };
          if (this.isMoving) {
            camera.animate({
              x: cameraState.x + MOUSE_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
              y: cameraState.y + MOUSE_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
            }, {
              duration: MOUSE_INERTIA_DURATION,
              easing: "quadraticOut"
            });
          } else if (this.lastMouseX !== x || this.lastMouseY !== y) {
            camera.setState({
              x: cameraState.x,
              y: cameraState.y
            });
          }
          this.isMoving = false;
          setTimeout(function() {
            _this.draggedEvents = 0;
            _this.renderer.refresh();
          }, 0);
          this.emit("mouseup", (0, captor_1.getMouseCoords)(e));
        };
        MouseCaptor2.prototype.handleMove = function(e) {
          var _this = this;
          if (!this.enabled)
            return;
          this.emit("mousemove", (0, captor_1.getMouseCoords)(e));
          if (this.isMouseDown) {
            this.isMoving = true;
            this.draggedEvents++;
            if (typeof this.movingTimeout === "number") {
              clearTimeout(this.movingTimeout);
            }
            this.movingTimeout = window.setTimeout(function() {
              _this.movingTimeout = null;
              _this.isMoving = false;
            }, DRAG_TIMEOUT);
            var camera = this.renderer.getCamera();
            var eX = (0, captor_1.getX)(e), eY = (0, captor_1.getY)(e);
            var lastMouse = this.renderer.viewportToFramedGraph({
              x: this.lastMouseX,
              y: this.lastMouseY
            });
            var mouse = this.renderer.viewportToFramedGraph({ x: eX, y: eY });
            var offsetX = lastMouse.x - mouse.x, offsetY = lastMouse.y - mouse.y;
            var cameraState = camera.getState();
            var x = cameraState.x + offsetX, y = cameraState.y + offsetY;
            camera.setState({ x, y });
            this.lastMouseX = eX;
            this.lastMouseY = eY;
          }
          if (e.preventDefault)
            e.preventDefault();
          else
            e.returnValue = false;
          e.stopPropagation();
          return false;
        };
        MouseCaptor2.prototype.handleWheel = function(e) {
          var _this = this;
          if (e.preventDefault)
            e.preventDefault();
          else
            e.returnValue = false;
          e.stopPropagation();
          if (!this.enabled)
            return false;
          var delta = (0, captor_1.getWheelDelta)(e);
          if (!delta)
            return false;
          var ratioDiff = delta > 0 ? 1 / ZOOMING_RATIO : ZOOMING_RATIO;
          var camera = this.renderer.getCamera();
          var newRatio = camera.getState().ratio * ratioDiff;
          var wheelDirection = delta > 0 ? 1 : -1;
          var now = Date.now();
          if (this.currentWheelDirection === wheelDirection && this.lastWheelTriggerTime && now - this.lastWheelTriggerTime < MOUSE_ZOOM_DURATION / 5) {
            return false;
          }
          camera.animate(this.renderer.getViewportZoomedState({ x: (0, captor_1.getX)(e), y: (0, captor_1.getY)(e) }, newRatio), {
            easing: "quadraticOut",
            duration: MOUSE_ZOOM_DURATION
          }, function() {
            _this.currentWheelDirection = 0;
          });
          this.currentWheelDirection = wheelDirection;
          this.lastWheelTriggerTime = now;
          return false;
        };
        MouseCaptor2.prototype.handleOut = function() {
        };
        return MouseCaptor2;
      })(captor_1.default)
    );
    exports.default = MouseCaptor;
  }
});

// node_modules/@yomguithereal/helpers/extend.js
var require_extend = __commonJS({
  "node_modules/@yomguithereal/helpers/extend.js"(exports, module) {
    module.exports = function extend(array, values) {
      var l2 = values.length;
      if (l2 === 0)
        return;
      var l1 = array.length;
      array.length += l2;
      for (var i = 0; i < l2; i++)
        array[l1 + i] = values[i];
    };
  }
});

// node_modules/sigma/core/quadtree.js
var require_quadtree = __commonJS({
  "node_modules/sigma/core/quadtree.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.rectangleCollidesWithQuad = exports.squareCollidesWithQuad = exports.getCircumscribedAlignedRectangle = exports.isRectangleAligned = void 0;
    var extend_1 = __importDefault(require_extend());
    var BLOCKS = 4;
    var MAX_LEVEL = 5;
    var OUTSIDE_BLOCK = "outside";
    var X_OFFSET = 0;
    var Y_OFFSET = 1;
    var WIDTH_OFFSET = 2;
    var HEIGHT_OFFSET = 3;
    var TOP_LEFT = 1;
    var TOP_RIGHT = 2;
    var BOTTOM_LEFT = 3;
    var BOTTOM_RIGHT = 4;
    var hasWarnedTooMuchOutside = false;
    function isRectangleAligned(rect) {
      return rect.x1 === rect.x2 || rect.y1 === rect.y2;
    }
    exports.isRectangleAligned = isRectangleAligned;
    function getCircumscribedAlignedRectangle(rect) {
      var width = Math.sqrt(Math.pow(rect.x2 - rect.x1, 2) + Math.pow(rect.y2 - rect.y1, 2));
      var heightVector = {
        x: (rect.y1 - rect.y2) * rect.height / width,
        y: (rect.x2 - rect.x1) * rect.height / width
      };
      var tl = { x: rect.x1, y: rect.y1 };
      var tr = { x: rect.x2, y: rect.y2 };
      var bl = {
        x: rect.x1 + heightVector.x,
        y: rect.y1 + heightVector.y
      };
      var br = {
        x: rect.x2 + heightVector.x,
        y: rect.y2 + heightVector.y
      };
      var xL = Math.min(tl.x, tr.x, bl.x, br.x);
      var xR = Math.max(tl.x, tr.x, bl.x, br.x);
      var yT = Math.min(tl.y, tr.y, bl.y, br.y);
      var yB = Math.max(tl.y, tr.y, bl.y, br.y);
      return {
        x1: xL,
        y1: yT,
        x2: xR,
        y2: yT,
        height: yB - yT
      };
    }
    exports.getCircumscribedAlignedRectangle = getCircumscribedAlignedRectangle;
    function squareCollidesWithQuad(x1, y1, w, qx, qy, qw, qh) {
      return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + w > qy;
    }
    exports.squareCollidesWithQuad = squareCollidesWithQuad;
    function rectangleCollidesWithQuad(x1, y1, w, h, qx, qy, qw, qh) {
      return x1 < qx + qw && x1 + w > qx && y1 < qy + qh && y1 + h > qy;
    }
    exports.rectangleCollidesWithQuad = rectangleCollidesWithQuad;
    function pointIsInQuad(x, y, qx, qy, qw, qh) {
      var xmp = qx + qw / 2, ymp = qy + qh / 2, top = y < ymp, left = x < xmp;
      return top ? left ? TOP_LEFT : TOP_RIGHT : left ? BOTTOM_LEFT : BOTTOM_RIGHT;
    }
    function buildQuadrants(maxLevel, data) {
      var stack = [0, 0];
      while (stack.length) {
        var level = stack.pop(), block = stack.pop();
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var x = data[block + X_OFFSET], y = data[block + Y_OFFSET], width = data[block + WIDTH_OFFSET], height = data[block + HEIGHT_OFFSET], hw = width / 2, hh = height / 2;
        data[topLeftBlock + X_OFFSET] = x;
        data[topLeftBlock + Y_OFFSET] = y;
        data[topLeftBlock + WIDTH_OFFSET] = hw;
        data[topLeftBlock + HEIGHT_OFFSET] = hh;
        data[topRightBlock + X_OFFSET] = x + hw;
        data[topRightBlock + Y_OFFSET] = y;
        data[topRightBlock + WIDTH_OFFSET] = hw;
        data[topRightBlock + HEIGHT_OFFSET] = hh;
        data[bottomLeftBlock + X_OFFSET] = x;
        data[bottomLeftBlock + Y_OFFSET] = y + hh;
        data[bottomLeftBlock + WIDTH_OFFSET] = hw;
        data[bottomLeftBlock + HEIGHT_OFFSET] = hh;
        data[bottomRightBlock + X_OFFSET] = x + hw;
        data[bottomRightBlock + Y_OFFSET] = y + hh;
        data[bottomRightBlock + WIDTH_OFFSET] = hw;
        data[bottomRightBlock + HEIGHT_OFFSET] = hh;
        if (level < maxLevel - 1) {
          stack.push(bottomRightBlock, level + 1);
          stack.push(bottomLeftBlock, level + 1);
          stack.push(topRightBlock, level + 1);
          stack.push(topLeftBlock, level + 1);
        }
      }
    }
    function insertNode(maxLevel, data, containers, key, x, y, size) {
      var x1 = x - size, y1 = y - size, w = size * 2;
      var level = 0, block = 0;
      while (true) {
        if (level >= maxLevel) {
          containers[block] = containers[block] || [];
          containers[block].push(key);
          return;
        }
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var collidingWithTopLeft = squareCollidesWithQuad(x1, y1, w, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
        var collidingWithTopRight = squareCollidesWithQuad(x1, y1, w, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
        var collidingWithBottomLeft = squareCollidesWithQuad(x1, y1, w, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
        var collidingWithBottomRight = squareCollidesWithQuad(x1, y1, w, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
        var collisions = [
          collidingWithTopLeft,
          collidingWithTopRight,
          collidingWithBottomLeft,
          collidingWithBottomRight
        ].reduce(function(acc, current) {
          if (current)
            return acc + 1;
          else
            return acc;
        }, 0);
        if (collisions === 0 && level === 0) {
          containers[OUTSIDE_BLOCK].push(key);
          if (!hasWarnedTooMuchOutside && containers[OUTSIDE_BLOCK].length >= 5) {
            hasWarnedTooMuchOutside = true;
            console.warn("sigma/quadtree.insertNode: At least 5 nodes are outside the global quadtree zone. You might have a problem with the normalization function or the custom bounding box.");
          }
          return;
        }
        if (collisions === 0)
          throw new Error("sigma/quadtree.insertNode: no collision (level: " + level + ", key: " + key + ", x: " + x + ", y: " + y + ", size: " + size + ").");
        if (collisions === 3)
          throw new Error("sigma/quadtree.insertNode: 3 impossible collisions (level: " + level + ", key: " + key + ", x: " + x + ", y: " + y + ", size: " + size + ").");
        if (collisions > 1) {
          containers[block] = containers[block] || [];
          containers[block].push(key);
          return;
        } else {
          level++;
        }
        if (collidingWithTopLeft)
          block = topLeftBlock;
        if (collidingWithTopRight)
          block = topRightBlock;
        if (collidingWithBottomLeft)
          block = bottomLeftBlock;
        if (collidingWithBottomRight)
          block = bottomRightBlock;
      }
    }
    function getNodesInAxisAlignedRectangleArea(maxLevel, data, containers, x1, y1, w, h) {
      var stack = [0, 0];
      var collectedNodes = [];
      var container;
      while (stack.length) {
        var level = stack.pop(), block = stack.pop();
        container = containers[block];
        if (container)
          (0, extend_1.default)(collectedNodes, container);
        if (level >= maxLevel)
          continue;
        var topLeftBlock = 4 * block + BLOCKS, topRightBlock = 4 * block + 2 * BLOCKS, bottomLeftBlock = 4 * block + 3 * BLOCKS, bottomRightBlock = 4 * block + 4 * BLOCKS;
        var collidingWithTopLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[topLeftBlock + X_OFFSET], data[topLeftBlock + Y_OFFSET], data[topLeftBlock + WIDTH_OFFSET], data[topLeftBlock + HEIGHT_OFFSET]);
        var collidingWithTopRight = rectangleCollidesWithQuad(x1, y1, w, h, data[topRightBlock + X_OFFSET], data[topRightBlock + Y_OFFSET], data[topRightBlock + WIDTH_OFFSET], data[topRightBlock + HEIGHT_OFFSET]);
        var collidingWithBottomLeft = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomLeftBlock + X_OFFSET], data[bottomLeftBlock + Y_OFFSET], data[bottomLeftBlock + WIDTH_OFFSET], data[bottomLeftBlock + HEIGHT_OFFSET]);
        var collidingWithBottomRight = rectangleCollidesWithQuad(x1, y1, w, h, data[bottomRightBlock + X_OFFSET], data[bottomRightBlock + Y_OFFSET], data[bottomRightBlock + WIDTH_OFFSET], data[bottomRightBlock + HEIGHT_OFFSET]);
        if (collidingWithTopLeft)
          stack.push(topLeftBlock, level + 1);
        if (collidingWithTopRight)
          stack.push(topRightBlock, level + 1);
        if (collidingWithBottomLeft)
          stack.push(bottomLeftBlock, level + 1);
        if (collidingWithBottomRight)
          stack.push(bottomRightBlock, level + 1);
      }
      return collectedNodes;
    }
    var QuadTree = (
      /** @class */
      (function() {
        function QuadTree2(params) {
          var _a;
          if (params === void 0) {
            params = {};
          }
          this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
          this.cache = null;
          this.lastRectangle = null;
          var L = Math.pow(4, MAX_LEVEL);
          this.data = new Float32Array(BLOCKS * ((4 * L - 1) / 3));
          if (params.boundaries)
            this.resize(params.boundaries);
          else
            this.resize({
              x: 0,
              y: 0,
              width: 1,
              height: 1
            });
        }
        QuadTree2.prototype.add = function(key, x, y, size) {
          insertNode(MAX_LEVEL, this.data, this.containers, key, x, y, size);
          return this;
        };
        QuadTree2.prototype.resize = function(boundaries) {
          this.clear();
          this.data[X_OFFSET] = boundaries.x;
          this.data[Y_OFFSET] = boundaries.y;
          this.data[WIDTH_OFFSET] = boundaries.width;
          this.data[HEIGHT_OFFSET] = boundaries.height;
          buildQuadrants(MAX_LEVEL, this.data);
        };
        QuadTree2.prototype.clear = function() {
          var _a;
          this.containers = (_a = {}, _a[OUTSIDE_BLOCK] = [], _a);
          return this;
        };
        QuadTree2.prototype.point = function(x, y) {
          var nodes = this.containers[OUTSIDE_BLOCK];
          var block = 0, level = 0;
          do {
            if (this.containers[block])
              nodes.push.apply(nodes, __spreadArray([], __read(this.containers[block]), false));
            var quad = pointIsInQuad(x, y, this.data[block + X_OFFSET], this.data[block + Y_OFFSET], this.data[block + WIDTH_OFFSET], this.data[block + HEIGHT_OFFSET]);
            block = 4 * block + quad * BLOCKS;
            level++;
          } while (level <= MAX_LEVEL);
          return nodes;
        };
        QuadTree2.prototype.rectangle = function(x1, y1, x2, y2, height) {
          var _a;
          var lr = this.lastRectangle;
          if (lr && x1 === lr.x1 && x2 === lr.x2 && y1 === lr.y1 && y2 === lr.y2 && height === lr.height) {
            return this.cache;
          }
          this.lastRectangle = {
            x1,
            y1,
            x2,
            y2,
            height
          };
          if (!isRectangleAligned(this.lastRectangle))
            this.lastRectangle = getCircumscribedAlignedRectangle(this.lastRectangle);
          this.cache = getNodesInAxisAlignedRectangleArea(MAX_LEVEL, this.data, this.containers, x1, y1, Math.abs(x1 - x2) || Math.abs(y1 - y2), height);
          (_a = this.cache).push.apply(_a, __spreadArray([], __read(this.containers[OUTSIDE_BLOCK]), false));
          return this.cache;
        };
        return QuadTree2;
      })()
    );
    exports.default = QuadTree;
  }
});

// node_modules/sigma/core/labels.js
var require_labels = __commonJS({
  "node_modules/sigma/core/labels.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.edgeLabelsToDisplayFromNodes = exports.LabelGrid = void 0;
    var LabelCandidate = (
      /** @class */
      (function() {
        function LabelCandidate2(key, size) {
          this.key = key;
          this.size = size;
        }
        LabelCandidate2.compare = function(first, second) {
          if (first.size > second.size)
            return -1;
          if (first.size < second.size)
            return 1;
          if (first.key > second.key)
            return 1;
          return -1;
        };
        return LabelCandidate2;
      })()
    );
    var LabelGrid = (
      /** @class */
      (function() {
        function LabelGrid2() {
          this.width = 0;
          this.height = 0;
          this.cellSize = 0;
          this.columns = 0;
          this.rows = 0;
          this.cells = {};
        }
        LabelGrid2.prototype.resizeAndClear = function(dimensions, cellSize) {
          this.width = dimensions.width;
          this.height = dimensions.height;
          this.cellSize = cellSize;
          this.columns = Math.ceil(dimensions.width / cellSize);
          this.rows = Math.ceil(dimensions.height / cellSize);
          this.cells = {};
        };
        LabelGrid2.prototype.getIndex = function(pos) {
          var xIndex = Math.floor(pos.x / this.cellSize);
          var yIndex = Math.floor(pos.y / this.cellSize);
          return xIndex * this.columns + yIndex;
        };
        LabelGrid2.prototype.add = function(key, size, pos) {
          var candidate = new LabelCandidate(key, size);
          var index = this.getIndex(pos);
          var cell = this.cells[index];
          if (!cell) {
            cell = [];
            this.cells[index] = cell;
          }
          cell.push(candidate);
        };
        LabelGrid2.prototype.organize = function() {
          for (var k in this.cells) {
            var cell = this.cells[k];
            cell.sort(LabelCandidate.compare);
          }
        };
        LabelGrid2.prototype.getLabelsToDisplay = function(ratio, density) {
          var cellArea = this.cellSize * this.cellSize;
          var scaledCellArea = cellArea / ratio / ratio;
          var scaledDensity = scaledCellArea * density / cellArea;
          var labelsToDisplayPerCell = Math.ceil(scaledDensity);
          var labels = [];
          for (var k in this.cells) {
            var cell = this.cells[k];
            for (var i = 0; i < Math.min(labelsToDisplayPerCell, cell.length); i++) {
              labels.push(cell[i].key);
            }
          }
          return labels;
        };
        return LabelGrid2;
      })()
    );
    exports.LabelGrid = LabelGrid;
    function edgeLabelsToDisplayFromNodes(params) {
      var graph = params.graph, hoveredNode = params.hoveredNode, highlightedNodes = params.highlightedNodes, displayedNodeLabels = params.displayedNodeLabels;
      var worthyEdges = [];
      graph.forEachEdge(function(edge, _, source, target) {
        if (source === hoveredNode || target === hoveredNode || highlightedNodes.has(source) || highlightedNodes.has(target) || displayedNodeLabels.has(source) && displayedNodeLabels.has(target)) {
          worthyEdges.push(edge);
        }
      });
      return worthyEdges;
    }
    exports.edgeLabelsToDisplayFromNodes = edgeLabelsToDisplayFromNodes;
  }
});

// node_modules/sigma/rendering/canvas/label.js
var require_label = __commonJS({
  "node_modules/sigma/rendering/canvas/label.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function drawLabel(context, data, settings) {
      if (!data.label)
        return;
      var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
      context.fillStyle = "#000";
      context.font = weight + " " + size + "px " + font;
      context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
    }
    exports.default = drawLabel;
  }
});

// node_modules/sigma/rendering/canvas/hover.js
var require_hover = __commonJS({
  "node_modules/sigma/rendering/canvas/hover.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var label_1 = __importDefault(require_label());
    function drawHover(context, data, settings) {
      var size = settings.labelSize, font = settings.labelFont, weight = settings.labelWeight;
      context.font = weight + " " + size + "px " + font;
      context.fillStyle = "#FFF";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 8;
      context.shadowColor = "#000";
      var PADDING = 2;
      if (typeof data.label === "string") {
        var textWidth = context.measureText(data.label).width, boxWidth = Math.round(textWidth + 5), boxHeight = Math.round(size + 2 * PADDING), radius = Math.max(data.size, size / 2) + PADDING;
        var angleRadian = Math.asin(boxHeight / 2 / radius);
        var xDeltaCoord = Math.sqrt(Math.abs(Math.pow(radius, 2) - Math.pow(boxHeight / 2, 2)));
        context.beginPath();
        context.moveTo(data.x + xDeltaCoord, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y + boxHeight / 2);
        context.lineTo(data.x + radius + boxWidth, data.y - boxHeight / 2);
        context.lineTo(data.x + xDeltaCoord, data.y - boxHeight / 2);
        context.arc(data.x, data.y, radius, angleRadian, -angleRadian);
        context.closePath();
        context.fill();
      } else {
        context.beginPath();
        context.arc(data.x, data.y, data.size + PADDING, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      (0, label_1.default)(context, data, settings);
    }
    exports.default = drawHover;
  }
});

// node_modules/sigma/rendering/canvas/edge-label.js
var require_edge_label = __commonJS({
  "node_modules/sigma/rendering/canvas/edge-label.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function drawEdgeLabel(context, edgeData, sourceData, targetData, settings) {
      var size = settings.edgeLabelSize, font = settings.edgeLabelFont, weight = settings.edgeLabelWeight, label = edgeData.label;
      if (!label)
        return;
      context.fillStyle = edgeData.color;
      context.font = weight + " " + size + "px " + font;
      var textWidth = context.measureText(label).width;
      var cx = (sourceData.x + targetData.x) / 2;
      var cy = (sourceData.y + targetData.y) / 2;
      var dx = targetData.x - sourceData.x;
      var dy = targetData.y - sourceData.y;
      var d = Math.sqrt(dx * dx + dy * dy);
      var angle;
      if (dx > 0) {
        if (dy > 0)
          angle = Math.acos(dx / d);
        else
          angle = Math.asin(dy / d);
      } else {
        if (dy > 0)
          angle = Math.acos(dx / d) + Math.PI;
        else
          angle = Math.asin(dx / d) + Math.PI / 2;
      }
      context.save();
      context.translate(cx, cy);
      context.rotate(angle);
      context.fillText(label, -textWidth / 2, edgeData.size / 2 + size);
      context.restore();
    }
    exports.default = drawEdgeLabel;
  }
});

// node_modules/sigma/rendering/webgl/shaders/node.fast.vert.glsl.js
var require_node_fast_vert_glsl = __commonJS({
  "node_modules/sigma/rendering/webgl/shaders/node.fast.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var o = { d: (t2, n2) => {
        for (var e in n2) o.o(n2, e) && !o.o(t2, e) && Object.defineProperty(t2, e, { enumerable: true, get: n2[e] });
      }, o: (o2, t2) => Object.prototype.hasOwnProperty.call(o2, t2), r: (o2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o2, "__esModule", { value: true });
      } }, t = {};
      o.r(t), o.d(t, { default: () => n });
      const n = "attribute vec2 a_position;\nattribute float a_size;\nattribute vec4 a_color;\n\nuniform float u_ratio;\nuniform float u_scale;\nuniform mat3 u_matrix;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  gl_Position = vec4(\n    (u_matrix * vec3(a_position, 1)).xy,\n    0,\n    1\n  );\n\n  // Multiply the point size twice:\n  //  - x SCALING_RATIO to correct the canvas scaling\n  //  - x 2 to correct the formulae\n  gl_PointSize = a_size * u_ratio * u_scale * 2.0;\n\n  v_border = (1.0 / u_ratio) * (0.5 / a_size);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      module.exports = t;
    })();
  }
});

// node_modules/sigma/rendering/webgl/shaders/node.fast.frag.glsl.js
var require_node_fast_frag_glsl = __commonJS({
  "node_modules/sigma/rendering/webgl/shaders/node.fast.frag.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var o = { d: (e2, n2) => {
        for (var r in n2) o.o(n2, r) && !o.o(e2, r) && Object.defineProperty(e2, r, { enumerable: true, get: n2[r] });
      }, o: (o2, e2) => Object.prototype.hasOwnProperty.call(o2, e2), r: (o2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(o2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(o2, "__esModule", { value: true });
      } }, e = {};
      o.r(e), o.d(e, { default: () => n });
      const n = "precision mediump float;\n\nvarying vec4 v_color;\nvarying float v_border;\n\nconst float radius = 0.5;\n\nvoid main(void) {\n  vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);\n  vec2 m = gl_PointCoord - vec2(0.5, 0.5);\n  float dist = radius - length(m);\n\n  float t = 0.0;\n  if (dist > v_border)\n    t = 1.0;\n  else if (dist > 0.0)\n    t = dist / v_border;\n\n  gl_FragColor = mix(color0, v_color, t);\n}\n";
      module.exports = e;
    })();
  }
});

// node_modules/sigma/rendering/webgl/shaders/utils.js
var require_utils2 = __commonJS({
  "node_modules/sigma/rendering/webgl/shaders/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadProgram = exports.loadFragmentShader = exports.loadVertexShader = void 0;
    function loadShader(type, gl, source) {
      var glType = type === "VERTEX" ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER;
      var shader = gl.createShader(glType);
      if (shader === null) {
        throw new Error("loadShader: error while creating the shader");
      }
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      var successfullyCompiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!successfullyCompiled) {
        var infoLog = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error("loadShader: error while compiling the shader:\n" + infoLog + "\n" + source);
      }
      return shader;
    }
    function loadVertexShader(gl, source) {
      return loadShader("VERTEX", gl, source);
    }
    exports.loadVertexShader = loadVertexShader;
    function loadFragmentShader(gl, source) {
      return loadShader("FRAGMENT", gl, source);
    }
    exports.loadFragmentShader = loadFragmentShader;
    function loadProgram(gl, shaders) {
      var program = gl.createProgram();
      if (program === null) {
        throw new Error("loadProgram: error while creating the program.");
      }
      var i, l;
      for (i = 0, l = shaders.length; i < l; i++)
        gl.attachShader(program, shaders[i]);
      gl.linkProgram(program);
      var successfullyLinked = gl.getProgramParameter(program, gl.LINK_STATUS);
      if (!successfullyLinked) {
        gl.deleteProgram(program);
        throw new Error("loadProgram: error while linking the program.");
      }
      return program;
    }
    exports.loadProgram = loadProgram;
  }
});

// node_modules/sigma/rendering/webgl/programs/common/program.js
var require_program = __commonJS({
  "node_modules/sigma/rendering/webgl/programs/common/program.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbstractProgram = void 0;
    var utils_1 = require_utils2();
    var AbstractProgram = (
      /** @class */
      (function() {
        function AbstractProgram2(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
          this.array = new Float32Array();
          this.points = points;
          this.attributes = attributes;
          this.gl = gl;
          this.vertexShaderSource = vertexShaderSource;
          this.fragmentShaderSource = fragmentShaderSource;
          var buffer = gl.createBuffer();
          if (buffer === null)
            throw new Error("AbstractProgram: error while creating the buffer");
          this.buffer = buffer;
          gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
          this.vertexShader = (0, utils_1.loadVertexShader)(gl, this.vertexShaderSource);
          this.fragmentShader = (0, utils_1.loadFragmentShader)(gl, this.fragmentShaderSource);
          this.program = (0, utils_1.loadProgram)(gl, [this.vertexShader, this.fragmentShader]);
        }
        AbstractProgram2.prototype.bufferData = function() {
          var gl = this.gl;
          gl.bufferData(gl.ARRAY_BUFFER, this.array, gl.DYNAMIC_DRAW);
        };
        AbstractProgram2.prototype.allocate = function(capacity) {
          this.array = new Float32Array(this.points * this.attributes * capacity);
        };
        return AbstractProgram2;
      })()
    );
    exports.AbstractProgram = AbstractProgram;
  }
});

// node_modules/sigma/rendering/webgl/programs/common/node.js
var require_node = __commonJS({
  "node_modules/sigma/rendering/webgl/programs/common/node.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createNodeCompoundProgram = exports.AbstractNodeProgram = void 0;
    var program_1 = require_program();
    var AbstractNodeProgram = (
      /** @class */
      (function(_super) {
        __extends(AbstractNodeProgram2, _super);
        function AbstractNodeProgram2(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
          var _this = _super.call(this, gl, vertexShaderSource, fragmentShaderSource, points, attributes) || this;
          _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
          _this.sizeLocation = gl.getAttribLocation(_this.program, "a_size");
          _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
          var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
          if (matrixLocation === null)
            throw new Error("AbstractNodeProgram: error while getting matrixLocation");
          _this.matrixLocation = matrixLocation;
          var ratioLocation = gl.getUniformLocation(_this.program, "u_ratio");
          if (ratioLocation === null)
            throw new Error("AbstractNodeProgram: error while getting ratioLocation");
          _this.ratioLocation = ratioLocation;
          var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
          if (scaleLocation === null)
            throw new Error("AbstractNodeProgram: error while getting scaleLocation");
          _this.scaleLocation = scaleLocation;
          return _this;
        }
        AbstractNodeProgram2.prototype.bind = function() {
          var gl = this.gl;
          gl.enableVertexAttribArray(this.positionLocation);
          gl.enableVertexAttribArray(this.sizeLocation);
          gl.enableVertexAttribArray(this.colorLocation);
          gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, this.attributes * Float32Array.BYTES_PER_ELEMENT, 0);
          gl.vertexAttribPointer(this.sizeLocation, 1, gl.FLOAT, false, this.attributes * Float32Array.BYTES_PER_ELEMENT, 8);
          gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, this.attributes * Float32Array.BYTES_PER_ELEMENT, 12);
        };
        return AbstractNodeProgram2;
      })(program_1.AbstractProgram)
    );
    exports.AbstractNodeProgram = AbstractNodeProgram;
    function createNodeCompoundProgram(programClasses) {
      return (
        /** @class */
        (function() {
          function NodeCompoundProgram(gl, renderer) {
            this.programs = programClasses.map(function(ProgramClass) {
              return new ProgramClass(gl, renderer);
            });
          }
          NodeCompoundProgram.prototype.bufferData = function() {
            this.programs.forEach(function(program) {
              return program.bufferData();
            });
          };
          NodeCompoundProgram.prototype.allocate = function(capacity) {
            this.programs.forEach(function(program) {
              return program.allocate(capacity);
            });
          };
          NodeCompoundProgram.prototype.bind = function() {
          };
          NodeCompoundProgram.prototype.render = function(params) {
            this.programs.forEach(function(program) {
              return program.render(params);
            });
          };
          NodeCompoundProgram.prototype.process = function(data, hidden, offset) {
            this.programs.forEach(function(program) {
              return program.process(data, hidden, offset);
            });
          };
          return NodeCompoundProgram;
        })()
      );
    }
    exports.createNodeCompoundProgram = createNodeCompoundProgram;
  }
});

// node_modules/sigma/rendering/webgl/programs/node.fast.js
var require_node_fast = __commonJS({
  "node_modules/sigma/rendering/webgl/programs/node.fast.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var node_fast_vert_glsl_1 = __importDefault(require_node_fast_vert_glsl());
    var node_fast_frag_glsl_1 = __importDefault(require_node_fast_frag_glsl());
    var node_1 = require_node();
    var POINTS = 1;
    var ATTRIBUTES = 4;
    var NodeProgramFast = (
      /** @class */
      (function(_super) {
        __extends(NodeProgramFast2, _super);
        function NodeProgramFast2(gl) {
          var _this = _super.call(this, gl, node_fast_vert_glsl_1.default, node_fast_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
          _this.bind();
          return _this;
        }
        NodeProgramFast2.prototype.process = function(data, hidden, offset) {
          var array = this.array;
          var i = offset * POINTS * ATTRIBUTES;
          if (hidden) {
            array[i++] = 0;
            array[i++] = 0;
            array[i++] = 0;
            array[i++] = 0;
            return;
          }
          var color = (0, utils_1.floatColor)(data.color);
          array[i++] = data.x;
          array[i++] = data.y;
          array[i++] = data.size;
          array[i] = color;
        };
        NodeProgramFast2.prototype.render = function(params) {
          var gl = this.gl;
          var program = this.program;
          gl.useProgram(program);
          gl.uniform1f(this.ratioLocation, 1 / Math.pow(params.ratio, params.nodesPowRatio));
          gl.uniform1f(this.scaleLocation, params.scalingRatio);
          gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
          gl.drawArrays(gl.POINTS, 0, this.array.length / ATTRIBUTES);
        };
        return NodeProgramFast2;
      })(node_1.AbstractNodeProgram)
    );
    exports.default = NodeProgramFast;
  }
});

// node_modules/sigma/rendering/webgl/shaders/edge.vert.glsl.js
var require_edge_vert_glsl = __commonJS({
  "node_modules/sigma/rendering/webgl/shaders/edge.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var n = { d: (t2, o2) => {
        for (var e in o2) n.o(o2, e) && !n.o(t2, e) && Object.defineProperty(t2, e, { enumerable: true, get: o2[e] });
      }, o: (n2, t2) => Object.prototype.hasOwnProperty.call(n2, t2), r: (n2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n2, "__esModule", { value: true });
      } }, t = {};
      n.r(t), n.d(t, { default: () => o });
      const o = "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_thickness;\nattribute vec4 a_color;\n\nuniform mat3 u_matrix;\nuniform float u_scale;\nuniform float u_cameraRatio;\nuniform float u_viewportRatio;\nuniform float u_thicknessRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float minThickness = 0.8;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  // Computing thickness in screen space:\n  float thickness = a_thickness * u_thicknessRatio * u_scale * u_viewportRatio / 2.0;\n  thickness = max(thickness, minThickness * u_viewportRatio);\n\n  // Add normal vector to the position in screen space, but correct thickness first:\n  vec2 position = (u_matrix * vec3(a_position + a_normal * thickness * u_cameraRatio, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  v_normal = a_normal;\n  v_thickness = thickness;\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      module.exports = t;
    })();
  }
});

// node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js
var require_edge_frag_glsl = __commonJS({
  "node_modules/sigma/rendering/webgl/shaders/edge.frag.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e = { d: (n2, o2) => {
        for (var t in o2) e.o(o2, t) && !e.o(n2, t) && Object.defineProperty(n2, t, { enumerable: true, get: o2[t] });
      }, o: (e2, n2) => Object.prototype.hasOwnProperty.call(e2, n2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, n = {};
      e.r(n), e.d(n, { default: () => o });
      const o = "precision mediump float;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float feather = 0.001;\nconst vec4 color0 = vec4(0.0, 0.0, 0.0, 0.0);\n\nvoid main(void) {\n  float dist = length(v_normal) * v_thickness;\n\n  float t = smoothstep(\n    v_thickness - feather,\n    v_thickness,\n    dist\n  );\n\n  gl_FragColor = mix(v_color, color0, t);\n}\n";
      module.exports = n;
    })();
  }
});

// node_modules/sigma/rendering/webgl/programs/common/edge.js
var require_edge = __commonJS({
  "node_modules/sigma/rendering/webgl/programs/common/edge.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createEdgeCompoundProgram = exports.AbstractEdgeProgram = void 0;
    var program_1 = require_program();
    var AbstractEdgeProgram = (
      /** @class */
      (function(_super) {
        __extends(AbstractEdgeProgram2, _super);
        function AbstractEdgeProgram2(gl, vertexShaderSource, fragmentShaderSource, points, attributes) {
          return _super.call(this, gl, vertexShaderSource, fragmentShaderSource, points, attributes) || this;
        }
        return AbstractEdgeProgram2;
      })(program_1.AbstractProgram)
    );
    exports.AbstractEdgeProgram = AbstractEdgeProgram;
    function createEdgeCompoundProgram(programClasses) {
      return (
        /** @class */
        (function() {
          function EdgeCompoundProgram(gl, renderer) {
            this.programs = programClasses.map(function(ProgramClass) {
              return new ProgramClass(gl, renderer);
            });
          }
          EdgeCompoundProgram.prototype.bufferData = function() {
            this.programs.forEach(function(program) {
              return program.bufferData();
            });
          };
          EdgeCompoundProgram.prototype.allocate = function(capacity) {
            this.programs.forEach(function(program) {
              return program.allocate(capacity);
            });
          };
          EdgeCompoundProgram.prototype.bind = function() {
          };
          EdgeCompoundProgram.prototype.computeIndices = function() {
            this.programs.forEach(function(program) {
              return program.computeIndices();
            });
          };
          EdgeCompoundProgram.prototype.render = function(params) {
            this.programs.forEach(function(program) {
              program.bind();
              program.bufferData();
              program.render(params);
            });
          };
          EdgeCompoundProgram.prototype.process = function(sourceData, targetData, data, hidden, offset) {
            this.programs.forEach(function(program) {
              return program.process(sourceData, targetData, data, hidden, offset);
            });
          };
          return EdgeCompoundProgram;
        })()
      );
    }
    exports.createEdgeCompoundProgram = createEdgeCompoundProgram;
  }
});

// node_modules/sigma/rendering/webgl/programs/edge.js
var require_edge2 = __commonJS({
  "node_modules/sigma/rendering/webgl/programs/edge.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var edge_vert_glsl_1 = __importDefault(require_edge_vert_glsl());
    var edge_frag_glsl_1 = __importDefault(require_edge_frag_glsl());
    var edge_1 = require_edge();
    var POINTS = 4;
    var ATTRIBUTES = 6;
    var STRIDE = POINTS * ATTRIBUTES;
    var EdgeProgram = (
      /** @class */
      (function(_super) {
        __extends(EdgeProgram2, _super);
        function EdgeProgram2(gl) {
          var _this = _super.call(this, gl, edge_vert_glsl_1.default, edge_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
          var indicesBuffer = gl.createBuffer();
          if (indicesBuffer === null)
            throw new Error("EdgeProgram: error while getting resolutionLocation");
          _this.indicesBuffer = indicesBuffer;
          _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
          _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
          _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
          _this.thicknessLocation = gl.getAttribLocation(_this.program, "a_thickness");
          var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
          if (scaleLocation === null)
            throw new Error("EdgeProgram: error while getting scaleLocation");
          _this.scaleLocation = scaleLocation;
          var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
          if (matrixLocation === null)
            throw new Error("EdgeProgram: error while getting matrixLocation");
          _this.matrixLocation = matrixLocation;
          var cameraRatioLocation = gl.getUniformLocation(_this.program, "u_cameraRatio");
          if (cameraRatioLocation === null)
            throw new Error("EdgeProgram: error while getting cameraRatioLocation");
          _this.cameraRatioLocation = cameraRatioLocation;
          var viewportRatioLocation = gl.getUniformLocation(_this.program, "u_viewportRatio");
          if (viewportRatioLocation === null)
            throw new Error("EdgeProgram: error while getting viewportRatioLocation");
          _this.viewportRatioLocation = viewportRatioLocation;
          var thicknessRatioLocation = gl.getUniformLocation(_this.program, "u_thicknessRatio");
          if (thicknessRatioLocation === null)
            throw new Error("EdgeProgram: error while getting thicknessRatioLocation");
          _this.thicknessRatioLocation = thicknessRatioLocation;
          _this.canUse32BitsIndices = (0, utils_1.canUse32BitsIndices)(gl);
          _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
          _this.indicesArray = new _this.IndicesArray();
          _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
          _this.bind();
          return _this;
        }
        EdgeProgram2.prototype.bind = function() {
          var gl = this.gl;
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
          gl.enableVertexAttribArray(this.positionLocation);
          gl.enableVertexAttribArray(this.normalLocation);
          gl.enableVertexAttribArray(this.thicknessLocation);
          gl.enableVertexAttribArray(this.colorLocation);
          gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
          gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
          gl.vertexAttribPointer(this.thicknessLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
          gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
        };
        EdgeProgram2.prototype.computeIndices = function() {
          var l = this.array.length / ATTRIBUTES;
          var size = l + l / 2;
          var indices = new this.IndicesArray(size);
          for (var i = 0, c = 0; i < l; i += 4) {
            indices[c++] = i;
            indices[c++] = i + 1;
            indices[c++] = i + 2;
            indices[c++] = i + 2;
            indices[c++] = i + 1;
            indices[c++] = i + 3;
          }
          this.indicesArray = indices;
        };
        EdgeProgram2.prototype.bufferData = function() {
          _super.prototype.bufferData.call(this);
          var gl = this.gl;
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
        };
        EdgeProgram2.prototype.process = function(sourceData, targetData, data, hidden, offset) {
          if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
              this.array[i_1] = 0;
            return;
          }
          var thickness = data.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, color = (0, utils_1.floatColor)(data.color);
          var dx = x2 - x1, dy = y2 - y1;
          var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
          if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len;
            n2 = dx * len;
          }
          var i = POINTS * ATTRIBUTES * offset;
          var array = this.array;
          array[i++] = x1;
          array[i++] = y1;
          array[i++] = n1;
          array[i++] = n2;
          array[i++] = thickness;
          array[i++] = color;
          array[i++] = x1;
          array[i++] = y1;
          array[i++] = -n1;
          array[i++] = -n2;
          array[i++] = thickness;
          array[i++] = color;
          array[i++] = x2;
          array[i++] = y2;
          array[i++] = n1;
          array[i++] = n2;
          array[i++] = thickness;
          array[i++] = color;
          array[i++] = x2;
          array[i++] = y2;
          array[i++] = -n1;
          array[i++] = -n2;
          array[i++] = thickness;
          array[i] = color;
        };
        EdgeProgram2.prototype.render = function(params) {
          var gl = this.gl;
          var program = this.program;
          gl.useProgram(program);
          gl.uniform1f(this.scaleLocation, params.scalingRatio);
          gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
          gl.uniform1f(this.cameraRatioLocation, params.ratio);
          gl.uniform1f(this.viewportRatioLocation, 1 / Math.min(params.width, params.height));
          gl.uniform1f(this.thicknessRatioLocation, 1 / Math.pow(params.ratio, params.edgesPowRatio));
          gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
        };
        return EdgeProgram2;
      })(edge_1.AbstractEdgeProgram)
    );
    exports.default = EdgeProgram;
  }
});

// node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js
var require_edge_arrowHead_vert_glsl = __commonJS({
  "node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var a = { d: (n2, t2) => {
        for (var o in t2) a.o(t2, o) && !a.o(n2, o) && Object.defineProperty(n2, o, { enumerable: true, get: t2[o] });
      }, o: (a2, n2) => Object.prototype.hasOwnProperty.call(a2, n2), r: (a2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(a2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(a2, "__esModule", { value: true });
      } }, n = {};
      a.r(n), a.d(n, { default: () => t });
      const t = "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_thickness;\nattribute float a_radius;\nattribute vec4 a_color;\nattribute vec3 a_barycentric;\n\nuniform mat3 u_matrix;\nuniform float u_scale;\nuniform float u_cameraRatio;\nuniform float u_viewportRatio;\nuniform float u_thicknessRatio;\n\nvarying vec4 v_color;\n\nconst float arrowHeadLengthThicknessRatio = 2.5;\nconst float arrowHeadWidthLengthRatio = 0.66;\nconst float minThickness = 0.8;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  // Computing thickness in screen space:\n  float thickness = a_thickness * u_thicknessRatio * u_scale * u_viewportRatio / 2.0;\n  thickness = max(thickness, minThickness * u_viewportRatio);\n\n  float nodeRadius = a_radius * u_thicknessRatio * u_viewportRatio * u_cameraRatio;\n  float arrowHeadLength = thickness * 2.0 * arrowHeadLengthThicknessRatio * u_cameraRatio;\n  float arrowHeadHalfWidth = arrowHeadWidthLengthRatio * arrowHeadLength / 2.0;\n\n  float da = a_barycentric.x;\n  float db = a_barycentric.y;\n  float dc = a_barycentric.z;\n\n  vec2 delta = vec2(\n      da * ((nodeRadius) * a_normal.y)\n    + db * ((nodeRadius + arrowHeadLength) * a_normal.y + arrowHeadHalfWidth * a_normal.x)\n    + dc * ((nodeRadius + arrowHeadLength) * a_normal.y - arrowHeadHalfWidth * a_normal.x),\n\n      da * (-(nodeRadius) * a_normal.x)\n    + db * (-(nodeRadius + arrowHeadLength) * a_normal.x + arrowHeadHalfWidth * a_normal.y)\n    + dc * (-(nodeRadius + arrowHeadLength) * a_normal.x - arrowHeadHalfWidth * a_normal.y)\n  );\n\n  vec2 position = (u_matrix * vec3(a_position + delta, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      module.exports = n;
    })();
  }
});

// node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js
var require_edge_arrowHead_frag_glsl = __commonJS({
  "node_modules/sigma/rendering/webgl/shaders/edge.arrowHead.frag.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var e = { d: (o2, r2) => {
        for (var t in r2) e.o(r2, t) && !e.o(o2, t) && Object.defineProperty(o2, t, { enumerable: true, get: r2[t] });
      }, o: (e2, o2) => Object.prototype.hasOwnProperty.call(e2, o2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, o = {};
      e.r(o), e.d(o, { default: () => r });
      const r = "precision mediump float;\n\nvarying vec4 v_color;\n\nvoid main(void) {\n  gl_FragColor = v_color;\n}\n";
      module.exports = o;
    })();
  }
});

// node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js
var require_edge_arrowHead = __commonJS({
  "node_modules/sigma/rendering/webgl/programs/edge.arrowHead.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var utils_1 = require_utils();
    var edge_arrowHead_vert_glsl_1 = __importDefault(require_edge_arrowHead_vert_glsl());
    var edge_arrowHead_frag_glsl_1 = __importDefault(require_edge_arrowHead_frag_glsl());
    var edge_1 = require_edge();
    var POINTS = 3;
    var ATTRIBUTES = 10;
    var STRIDE = POINTS * ATTRIBUTES;
    var EdgeArrowHeadProgram = (
      /** @class */
      (function(_super) {
        __extends(EdgeArrowHeadProgram2, _super);
        function EdgeArrowHeadProgram2(gl) {
          var _this = _super.call(this, gl, edge_arrowHead_vert_glsl_1.default, edge_arrowHead_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
          _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
          _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
          _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
          _this.thicknessLocation = gl.getAttribLocation(_this.program, "a_thickness");
          _this.radiusLocation = gl.getAttribLocation(_this.program, "a_radius");
          _this.barycentricLocation = gl.getAttribLocation(_this.program, "a_barycentric");
          var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
          if (scaleLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting scaleLocation");
          _this.scaleLocation = scaleLocation;
          var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
          if (matrixLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting matrixLocation");
          _this.matrixLocation = matrixLocation;
          var cameraRatioLocation = gl.getUniformLocation(_this.program, "u_cameraRatio");
          if (cameraRatioLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting cameraRatioLocation");
          _this.cameraRatioLocation = cameraRatioLocation;
          var viewportRatioLocation = gl.getUniformLocation(_this.program, "u_viewportRatio");
          if (viewportRatioLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting viewportRatioLocation");
          _this.viewportRatioLocation = viewportRatioLocation;
          var thicknessRatioLocation = gl.getUniformLocation(_this.program, "u_thicknessRatio");
          if (thicknessRatioLocation === null)
            throw new Error("EdgeArrowHeadProgram: error while getting thicknessRatioLocation");
          _this.thicknessRatioLocation = thicknessRatioLocation;
          _this.bind();
          return _this;
        }
        EdgeArrowHeadProgram2.prototype.bind = function() {
          var gl = this.gl;
          gl.enableVertexAttribArray(this.positionLocation);
          gl.enableVertexAttribArray(this.normalLocation);
          gl.enableVertexAttribArray(this.thicknessLocation);
          gl.enableVertexAttribArray(this.radiusLocation);
          gl.enableVertexAttribArray(this.colorLocation);
          gl.enableVertexAttribArray(this.barycentricLocation);
          gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
          gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
          gl.vertexAttribPointer(this.thicknessLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
          gl.vertexAttribPointer(this.radiusLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
          gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 24);
          gl.vertexAttribPointer(this.barycentricLocation, 3, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 28);
        };
        EdgeArrowHeadProgram2.prototype.computeIndices = function() {
        };
        EdgeArrowHeadProgram2.prototype.process = function(sourceData, targetData, data, hidden, offset) {
          if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
              this.array[i_1] = 0;
            return;
          }
          var thickness = data.size || 1, radius = targetData.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, color = (0, utils_1.floatColor)(data.color);
          var dx = x2 - x1, dy = y2 - y1;
          var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
          if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len;
            n2 = dx * len;
          }
          var i = POINTS * ATTRIBUTES * offset;
          var array = this.array;
          array[i++] = x2;
          array[i++] = y2;
          array[i++] = -n1;
          array[i++] = -n2;
          array[i++] = thickness;
          array[i++] = radius;
          array[i++] = color;
          array[i++] = 1;
          array[i++] = 0;
          array[i++] = 0;
          array[i++] = x2;
          array[i++] = y2;
          array[i++] = -n1;
          array[i++] = -n2;
          array[i++] = thickness;
          array[i++] = radius;
          array[i++] = color;
          array[i++] = 0;
          array[i++] = 1;
          array[i++] = 0;
          array[i++] = x2;
          array[i++] = y2;
          array[i++] = -n1;
          array[i++] = -n2;
          array[i++] = thickness;
          array[i++] = radius;
          array[i++] = color;
          array[i++] = 0;
          array[i++] = 0;
          array[i] = 1;
        };
        EdgeArrowHeadProgram2.prototype.render = function(params) {
          var gl = this.gl;
          var program = this.program;
          gl.useProgram(program);
          gl.uniform1f(this.scaleLocation, params.scalingRatio);
          gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
          gl.uniform1f(this.cameraRatioLocation, params.ratio);
          gl.uniform1f(this.viewportRatioLocation, 1 / Math.min(params.width, params.height));
          gl.uniform1f(this.thicknessRatioLocation, 1 / Math.pow(params.ratio, params.edgesPowRatio));
          gl.drawArrays(gl.TRIANGLES, 0, this.array.length / ATTRIBUTES);
        };
        return EdgeArrowHeadProgram2;
      })(edge_1.AbstractEdgeProgram)
    );
    exports.default = EdgeArrowHeadProgram;
  }
});

// node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js
var require_edge_clamped_vert_glsl = __commonJS({
  "node_modules/sigma/rendering/webgl/shaders/edge.clamped.vert.glsl.js"(exports, module) {
    (() => {
      "use strict";
      var n = { d: (t2, o2) => {
        for (var e in o2) n.o(o2, e) && !n.o(t2, e) && Object.defineProperty(t2, e, { enumerable: true, get: o2[e] });
      }, o: (n2, t2) => Object.prototype.hasOwnProperty.call(n2, t2), r: (n2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n2, "__esModule", { value: true });
      } }, t = {};
      n.r(t), n.d(t, { default: () => o });
      const o = "attribute vec2 a_position;\nattribute vec2 a_normal;\nattribute float a_thickness;\nattribute vec4 a_color;\nattribute float a_radius;\n\nuniform mat3 u_matrix;\nuniform float u_scale;\nuniform float u_cameraRatio;\nuniform float u_viewportRatio;\nuniform float u_thicknessRatio;\n\nvarying vec4 v_color;\nvarying vec2 v_normal;\nvarying float v_thickness;\n\nconst float arrowHeadLengthThicknessRatio = 2.5;\nconst float minThickness = 0.8;\nconst float bias = 255.0 / 254.0;\n\nvoid main() {\n\n  // Computing thickness in screen space:\n  float thickness = a_thickness * u_thicknessRatio * u_scale * u_viewportRatio / 2.0;\n  thickness = max(thickness, minThickness * u_viewportRatio);\n\n  float direction = sign(a_radius);\n  float nodeRadius = direction * a_radius * u_thicknessRatio * u_viewportRatio;\n  float arrowHeadLength = thickness * 2.0 * arrowHeadLengthThicknessRatio;\n\n  vec2 arrowHeadVector = vec2(-direction * a_normal.y, direction * a_normal.x);\n\n  // Add normal vector to the position in screen space, but correct thickness first:\n  vec2 position = a_position + a_normal * thickness * u_cameraRatio;\n  // Add vector that corrects the arrow head length:\n  position = position + arrowHeadVector * (arrowHeadLength + nodeRadius) * u_cameraRatio;\n  // Apply camera\n  position = (u_matrix * vec3(position, 1)).xy;\n\n  gl_Position = vec4(position, 0, 1);\n\n  v_normal = a_normal;\n  v_thickness = thickness;\n\n  // Extract the color:\n  v_color = a_color;\n  v_color.a *= bias;\n}\n";
      module.exports = t;
    })();
  }
});

// node_modules/sigma/rendering/webgl/programs/edge.clamped.js
var require_edge_clamped = __commonJS({
  "node_modules/sigma/rendering/webgl/programs/edge.clamped.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var edge_1 = require_edge();
    var utils_1 = require_utils();
    var edge_clamped_vert_glsl_1 = __importDefault(require_edge_clamped_vert_glsl());
    var edge_frag_glsl_1 = __importDefault(require_edge_frag_glsl());
    var POINTS = 4;
    var ATTRIBUTES = 7;
    var STRIDE = POINTS * ATTRIBUTES;
    var EdgeClampedProgram = (
      /** @class */
      (function(_super) {
        __extends(EdgeClampedProgram2, _super);
        function EdgeClampedProgram2(gl) {
          var _this = _super.call(this, gl, edge_clamped_vert_glsl_1.default, edge_frag_glsl_1.default, POINTS, ATTRIBUTES) || this;
          var indicesBuffer = gl.createBuffer();
          if (indicesBuffer === null)
            throw new Error("EdgeClampedProgram: error while getting resolutionLocation");
          _this.indicesBuffer = indicesBuffer;
          _this.positionLocation = gl.getAttribLocation(_this.program, "a_position");
          _this.colorLocation = gl.getAttribLocation(_this.program, "a_color");
          _this.normalLocation = gl.getAttribLocation(_this.program, "a_normal");
          _this.thicknessLocation = gl.getAttribLocation(_this.program, "a_thickness");
          _this.radiusLocation = gl.getAttribLocation(_this.program, "a_radius");
          var scaleLocation = gl.getUniformLocation(_this.program, "u_scale");
          if (scaleLocation === null)
            throw new Error("EdgeClampedProgram: error while getting scaleLocation");
          _this.scaleLocation = scaleLocation;
          var matrixLocation = gl.getUniformLocation(_this.program, "u_matrix");
          if (matrixLocation === null)
            throw new Error("EdgeClampedProgram: error while getting matrixLocation");
          _this.matrixLocation = matrixLocation;
          var cameraRatioLocation = gl.getUniformLocation(_this.program, "u_cameraRatio");
          if (cameraRatioLocation === null)
            throw new Error("EdgeClampedProgram: error while getting cameraRatioLocation");
          _this.cameraRatioLocation = cameraRatioLocation;
          var viewportRatioLocation = gl.getUniformLocation(_this.program, "u_viewportRatio");
          if (viewportRatioLocation === null)
            throw new Error("EdgeClampedProgram: error while getting viewportRatioLocation");
          _this.viewportRatioLocation = viewportRatioLocation;
          var thicknessRatioLocation = gl.getUniformLocation(_this.program, "u_thicknessRatio");
          if (thicknessRatioLocation === null)
            throw new Error("EdgeClampedProgram: error while getting thicknessRatioLocation");
          _this.thicknessRatioLocation = thicknessRatioLocation;
          _this.canUse32BitsIndices = (0, utils_1.canUse32BitsIndices)(gl);
          _this.IndicesArray = _this.canUse32BitsIndices ? Uint32Array : Uint16Array;
          _this.indicesArray = new _this.IndicesArray();
          _this.indicesType = _this.canUse32BitsIndices ? gl.UNSIGNED_INT : gl.UNSIGNED_SHORT;
          _this.bind();
          return _this;
        }
        EdgeClampedProgram2.prototype.bind = function() {
          var gl = this.gl;
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
          gl.enableVertexAttribArray(this.positionLocation);
          gl.enableVertexAttribArray(this.normalLocation);
          gl.enableVertexAttribArray(this.thicknessLocation);
          gl.enableVertexAttribArray(this.colorLocation);
          gl.enableVertexAttribArray(this.radiusLocation);
          gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 0);
          gl.vertexAttribPointer(this.normalLocation, 2, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 8);
          gl.vertexAttribPointer(this.thicknessLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 16);
          gl.vertexAttribPointer(this.colorLocation, 4, gl.UNSIGNED_BYTE, true, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 20);
          gl.vertexAttribPointer(this.radiusLocation, 1, gl.FLOAT, false, ATTRIBUTES * Float32Array.BYTES_PER_ELEMENT, 24);
        };
        EdgeClampedProgram2.prototype.process = function(sourceData, targetData, data, hidden, offset) {
          if (hidden) {
            for (var i_1 = offset * STRIDE, l = i_1 + STRIDE; i_1 < l; i_1++)
              this.array[i_1] = 0;
            return;
          }
          var thickness = data.size || 1, x1 = sourceData.x, y1 = sourceData.y, x2 = targetData.x, y2 = targetData.y, radius = targetData.size || 1, color = (0, utils_1.floatColor)(data.color);
          var dx = x2 - x1, dy = y2 - y1;
          var len = dx * dx + dy * dy, n1 = 0, n2 = 0;
          if (len) {
            len = 1 / Math.sqrt(len);
            n1 = -dy * len;
            n2 = dx * len;
          }
          var i = POINTS * ATTRIBUTES * offset;
          var array = this.array;
          array[i++] = x1;
          array[i++] = y1;
          array[i++] = n1;
          array[i++] = n2;
          array[i++] = thickness;
          array[i++] = color;
          array[i++] = 0;
          array[i++] = x1;
          array[i++] = y1;
          array[i++] = -n1;
          array[i++] = -n2;
          array[i++] = thickness;
          array[i++] = color;
          array[i++] = 0;
          array[i++] = x2;
          array[i++] = y2;
          array[i++] = n1;
          array[i++] = n2;
          array[i++] = thickness;
          array[i++] = color;
          array[i++] = radius;
          array[i++] = x2;
          array[i++] = y2;
          array[i++] = -n1;
          array[i++] = -n2;
          array[i++] = thickness;
          array[i++] = color;
          array[i] = -radius;
        };
        EdgeClampedProgram2.prototype.computeIndices = function() {
          var l = this.array.length / ATTRIBUTES;
          var size = l + l / 2;
          var indices = new this.IndicesArray(size);
          for (var i = 0, c = 0; i < l; i += 4) {
            indices[c++] = i;
            indices[c++] = i + 1;
            indices[c++] = i + 2;
            indices[c++] = i + 2;
            indices[c++] = i + 1;
            indices[c++] = i + 3;
          }
          this.indicesArray = indices;
        };
        EdgeClampedProgram2.prototype.bufferData = function() {
          _super.prototype.bufferData.call(this);
          var gl = this.gl;
          gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indicesArray, gl.STATIC_DRAW);
        };
        EdgeClampedProgram2.prototype.render = function(params) {
          var gl = this.gl;
          var program = this.program;
          gl.useProgram(program);
          gl.uniform1f(this.scaleLocation, params.scalingRatio);
          gl.uniformMatrix3fv(this.matrixLocation, false, params.matrix);
          gl.uniform1f(this.cameraRatioLocation, params.ratio);
          gl.uniform1f(this.viewportRatioLocation, 1 / Math.min(params.width, params.height));
          gl.uniform1f(this.thicknessRatioLocation, 1 / Math.pow(params.ratio, params.edgesPowRatio));
          gl.drawElements(gl.TRIANGLES, this.indicesArray.length, this.indicesType, 0);
        };
        return EdgeClampedProgram2;
      })(edge_1.AbstractEdgeProgram)
    );
    exports.default = EdgeClampedProgram;
  }
});

// node_modules/sigma/rendering/webgl/programs/edge.arrow.js
var require_edge_arrow = __commonJS({
  "node_modules/sigma/rendering/webgl/programs/edge.arrow.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var edge_1 = require_edge();
    var edge_arrowHead_1 = __importDefault(require_edge_arrowHead());
    var edge_clamped_1 = __importDefault(require_edge_clamped());
    var program = (0, edge_1.createEdgeCompoundProgram)([edge_clamped_1.default, edge_arrowHead_1.default]);
    exports.default = program;
  }
});

// node_modules/sigma/settings.js
var require_settings = __commonJS({
  "node_modules/sigma/settings.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DEFAULT_SETTINGS = exports.validateSettings = void 0;
    var label_1 = __importDefault(require_label());
    var hover_1 = __importDefault(require_hover());
    var edge_label_1 = __importDefault(require_edge_label());
    var node_fast_1 = __importDefault(require_node_fast());
    var edge_1 = __importDefault(require_edge2());
    var edge_arrow_1 = __importDefault(require_edge_arrow());
    function validateSettings(settings) {
      if (typeof settings.labelDensity !== "number" || settings.labelDensity < 0) {
        throw new Error("Settings: invalid `labelDensity`. Expecting a positive number.");
      }
    }
    exports.validateSettings = validateSettings;
    exports.DEFAULT_SETTINGS = {
      // Performance
      hideEdgesOnMove: false,
      hideLabelsOnMove: false,
      renderLabels: true,
      renderEdgeLabels: false,
      // Component rendering
      defaultNodeColor: "#999",
      defaultNodeType: "circle",
      defaultEdgeColor: "#ccc",
      defaultEdgeType: "line",
      labelFont: "Arial",
      labelSize: 14,
      labelWeight: "normal",
      edgeLabelFont: "Arial",
      edgeLabelSize: 14,
      edgeLabelWeight: "normal",
      stagePadding: 30,
      // Labels
      labelDensity: 0.07,
      labelGridCellSize: 60,
      labelRenderedSizeThreshold: 6,
      // Reducers
      nodeReducer: null,
      edgeReducer: null,
      // Features
      zIndex: false,
      // Renderers
      labelRenderer: label_1.default,
      hoverRenderer: hover_1.default,
      edgeLabelRenderer: edge_label_1.default,
      // Program classes
      nodeProgramClasses: {
        circle: node_fast_1.default
      },
      edgeProgramClasses: {
        arrow: edge_arrow_1.default,
        line: edge_1.default
      }
    };
  }
});

// node_modules/sigma/core/captors/touch.js
var require_touch = __commonJS({
  "node_modules/sigma/core/captors/touch.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __createBinding = exports && exports.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var captor_1 = __importStar(require_captor());
    var DRAG_TIMEOUT = 200;
    var TOUCH_INERTIA_RATIO = 3;
    var TOUCH_INERTIA_DURATION = 200;
    var TouchCaptor = (
      /** @class */
      (function(_super) {
        __extends(TouchCaptor2, _super);
        function TouchCaptor2(container, renderer) {
          var _this = _super.call(this, container, renderer) || this;
          _this.enabled = true;
          _this.isMoving = false;
          _this.touchMode = 0;
          _this.handleStart = _this.handleStart.bind(_this);
          _this.handleLeave = _this.handleLeave.bind(_this);
          _this.handleMove = _this.handleMove.bind(_this);
          container.addEventListener("touchstart", _this.handleStart, false);
          container.addEventListener("touchend", _this.handleLeave, false);
          container.addEventListener("touchcancel", _this.handleLeave, false);
          container.addEventListener("touchmove", _this.handleMove, false);
          return _this;
        }
        TouchCaptor2.prototype.kill = function() {
          var container = this.container;
          container.removeEventListener("touchstart", this.handleStart);
          container.removeEventListener("touchend", this.handleLeave);
          container.removeEventListener("touchcancel", this.handleLeave);
          container.removeEventListener("touchmove", this.handleMove);
        };
        TouchCaptor2.prototype.getDimensions = function() {
          return {
            width: this.container.offsetWidth,
            height: this.container.offsetHeight
          };
        };
        TouchCaptor2.prototype.dispatchRelatedMouseEvent = function(type, e, position, emitter) {
          var mousePosition = position || (0, captor_1.getPosition)(e.touches[0]);
          var mouseEvent = new MouseEvent(type, {
            clientX: mousePosition.x,
            clientY: mousePosition.y,
            altKey: e.altKey,
            ctrlKey: e.ctrlKey
          });
          (emitter || this.container).dispatchEvent(mouseEvent);
        };
        TouchCaptor2.prototype.handleStart = function(e) {
          if (!this.enabled)
            return;
          e.preventDefault();
          if (e.touches.length === 1)
            this.dispatchRelatedMouseEvent("mousedown", e);
          var touches = (0, captor_1.getTouchesArray)(e.touches);
          this.isMoving = true;
          this.touchMode = touches.length;
          this.startCameraState = this.renderer.getCamera().getState();
          this.startTouchesPositions = touches.map(captor_1.getPosition);
          this.lastTouchesPositions = this.startTouchesPositions;
          if (this.touchMode === 2) {
            var _a = __read(this.startTouchesPositions, 2), _b = _a[0], x0 = _b.x, y0 = _b.y, _c = _a[1], x1 = _c.x, y1 = _c.y;
            this.startTouchesAngle = Math.atan2(y1 - y0, x1 - x0);
            this.startTouchesDistance = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
          }
          this.emit("touchdown", (0, captor_1.getTouchCoords)(e));
        };
        TouchCaptor2.prototype.handleLeave = function(e) {
          if (!this.enabled)
            return;
          e.preventDefault();
          if (e.touches.length === 0 && this.lastTouchesPositions && this.lastTouchesPositions.length) {
            this.dispatchRelatedMouseEvent("mouseup", e, this.lastTouchesPositions[0], document);
            this.dispatchRelatedMouseEvent("click", e, this.lastTouchesPositions[0]);
          }
          if (this.movingTimeout) {
            this.isMoving = false;
            clearTimeout(this.movingTimeout);
          }
          switch (this.touchMode) {
            case 2:
              if (e.touches.length === 1) {
                this.handleStart(e);
                e.preventDefault();
                break;
              }
            /* falls through */
            case 1:
              if (this.isMoving) {
                var camera = this.renderer.getCamera();
                var cameraState = camera.getState(), previousCameraState = camera.getPreviousState() || { x: 0, y: 0 };
                camera.animate({
                  x: cameraState.x + TOUCH_INERTIA_RATIO * (cameraState.x - previousCameraState.x),
                  y: cameraState.y + TOUCH_INERTIA_RATIO * (cameraState.y - previousCameraState.y)
                }, {
                  duration: TOUCH_INERTIA_DURATION,
                  easing: "quadraticOut"
                });
              }
              this.isMoving = false;
              this.touchMode = 0;
              break;
          }
          this.emit("touchup", (0, captor_1.getTouchCoords)(e));
        };
        TouchCaptor2.prototype.handleMove = function(e) {
          var _a;
          var _this = this;
          if (!this.enabled)
            return;
          e.preventDefault();
          if (e.touches.length === 1)
            this.dispatchRelatedMouseEvent("mousemove", e);
          var startCameraState = this.startCameraState;
          var touches = (0, captor_1.getTouchesArray)(e.touches);
          var touchesPositions = touches.map(captor_1.getPosition);
          this.lastTouchesPositions = touchesPositions;
          this.isMoving = true;
          if (this.movingTimeout)
            clearTimeout(this.movingTimeout);
          this.movingTimeout = window.setTimeout(function() {
            _this.isMoving = false;
          }, DRAG_TIMEOUT);
          switch (this.touchMode) {
            case 1: {
              var _b = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0]), xStart = _b.x, yStart = _b.y;
              var _c = this.renderer.viewportToFramedGraph(touchesPositions[0]), x = _c.x, y = _c.y;
              this.renderer.getCamera().setState({
                x: startCameraState.x + xStart - x,
                y: startCameraState.y + yStart - y
              });
              break;
            }
            case 2: {
              var newCameraState = {};
              var _d = touchesPositions[0], x0 = _d.x, y0 = _d.y;
              var _e = touchesPositions[1], x1 = _e.x, y1 = _e.y;
              var angleDiff = Math.atan2(y1 - y0, x1 - x0) - this.startTouchesAngle;
              var ratioDiff = Math.hypot(y1 - y0, x1 - x0) / this.startTouchesDistance;
              newCameraState.ratio = startCameraState.ratio / ratioDiff;
              newCameraState.angle = startCameraState.angle + angleDiff;
              var dimensions = this.getDimensions();
              var touchGraphPosition = this.renderer.viewportToFramedGraph((this.startTouchesPositions || [])[0], { cameraState: startCameraState });
              var smallestDimension = Math.min(dimensions.width, dimensions.height);
              var dx = smallestDimension / dimensions.width;
              var dy = smallestDimension / dimensions.height;
              var ratio = newCameraState.ratio / smallestDimension;
              var x = x0 - smallestDimension / 2 / dx;
              var y = y0 - smallestDimension / 2 / dy;
              _a = __read([
                x * Math.cos(-newCameraState.angle) - y * Math.sin(-newCameraState.angle),
                y * Math.cos(-newCameraState.angle) + x * Math.sin(-newCameraState.angle)
              ], 2), x = _a[0], y = _a[1];
              newCameraState.x = touchGraphPosition.x - x * ratio;
              newCameraState.y = touchGraphPosition.y + y * ratio;
              this.renderer.getCamera().setState(newCameraState);
              break;
            }
          }
          this.emit("touchmove", (0, captor_1.getTouchCoords)(e));
        };
        return TouchCaptor2;
      })(captor_1.default)
    );
    exports.default = TouchCaptor;
  }
});

// node_modules/sigma/sigma.js
var require_sigma = __commonJS({
  "node_modules/sigma/sigma.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var events_1 = require_events();
    var extent_1 = __importDefault(require_extent());
    var camera_1 = __importDefault(require_camera());
    var mouse_1 = __importDefault(require_mouse());
    var quadtree_1 = __importDefault(require_quadtree());
    var utils_1 = require_utils();
    var labels_1 = require_labels();
    var settings_1 = require_settings();
    var touch_1 = __importDefault(require_touch());
    var matrices_1 = require_matrices();
    var nodeExtent = extent_1.default.nodeExtent;
    var PIXEL_RATIO = (0, utils_1.getPixelRatio)();
    var WEBGL_OVERSAMPLING_RATIO = (0, utils_1.getPixelRatio)();
    var SIZE_SCALING_EXPONENT = 0.5;
    function applyNodeDefaults(settings, key, data) {
      if (!data.hasOwnProperty("x") || !data.hasOwnProperty("y"))
        throw new Error('Sigma: could not find a valid position (x, y) for node "' + key + '". All your nodes must have a number "x" and "y". Maybe your forgot to apply a layout or your "nodeReducer" is not returning the correct data?');
      if (!data.color)
        data.color = settings.defaultNodeColor;
      if (!data.label && data.label !== "")
        data.label = null;
      if (data.label !== void 0 && data.label !== null)
        data.label = "" + data.label;
      else
        data.label = null;
      if (!data.size)
        data.size = 2;
      if (!data.hasOwnProperty("hidden"))
        data.hidden = false;
      if (!data.hasOwnProperty("highlighted"))
        data.highlighted = false;
      if (!data.type || data.type === "")
        data.type = settings.defaultNodeType;
      if (!data.zIndex)
        data.zIndex = 0;
      return data;
    }
    function applyEdgeDefaults(settings, key, data) {
      if (!data.color)
        data.color = settings.defaultEdgeColor;
      if (!data.label)
        data.label = "";
      if (!data.size)
        data.size = 0.5;
      if (!data.hasOwnProperty("hidden"))
        data.hidden = false;
      if (!data.type || data.type === "")
        data.type = settings.defaultEdgeType;
      if (!data.zIndex)
        data.zIndex = 0;
      return data;
    }
    var Sigma2 = (
      /** @class */
      (function(_super) {
        __extends(Sigma3, _super);
        function Sigma3(graph, container, settings) {
          if (settings === void 0) {
            settings = {};
          }
          var _this = _super.call(this) || this;
          _this.elements = {};
          _this.canvasContexts = {};
          _this.webGLContexts = {};
          _this.activeListeners = {};
          _this.quadtree = new quadtree_1.default();
          _this.labelGrid = new labels_1.LabelGrid();
          _this.nodeDataCache = {};
          _this.edgeDataCache = {};
          _this.nodeKeyToIndex = {};
          _this.edgeKeyToIndex = {};
          _this.nodeExtent = { x: [0, 1], y: [0, 1] };
          _this.matrix = (0, matrices_1.identity)();
          _this.invMatrix = (0, matrices_1.identity)();
          _this.customBBox = null;
          _this.normalizationFunction = (0, utils_1.createNormalizationFunction)({
            x: [-Infinity, Infinity],
            y: [-Infinity, Infinity]
          });
          _this.cameraSizeRatio = 1;
          _this.width = 0;
          _this.height = 0;
          _this.displayedLabels = /* @__PURE__ */ new Set();
          _this.highlightedNodes = /* @__PURE__ */ new Set();
          _this.hoveredNode = null;
          _this.renderFrame = null;
          _this.renderHighlightedNodesFrame = null;
          _this.needToProcess = false;
          _this.needToSoftProcess = false;
          _this.nodePrograms = {};
          _this.hoverNodePrograms = {};
          _this.edgePrograms = {};
          _this.settings = (0, utils_1.assignDeep)({}, settings_1.DEFAULT_SETTINGS, settings);
          (0, settings_1.validateSettings)(_this.settings);
          (0, utils_1.validateGraph)(graph);
          if (!(container instanceof HTMLElement))
            throw new Error("Sigma: container should be an html element.");
          _this.graph = graph;
          _this.container = container;
          _this.initializeCache();
          _this.createWebGLContext("edges");
          _this.createWebGLContext("nodes");
          _this.createCanvasContext("edgeLabels");
          _this.createCanvasContext("labels");
          _this.createCanvasContext("hovers");
          _this.createWebGLContext("hoverNodes");
          _this.createCanvasContext("mouse");
          var gl = _this.webGLContexts.nodes;
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
          gl.enable(gl.BLEND);
          gl = _this.webGLContexts.edges;
          gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
          gl.enable(gl.BLEND);
          for (var type in _this.settings.nodeProgramClasses) {
            var NodeProgramClass = _this.settings.nodeProgramClasses[type];
            _this.nodePrograms[type] = new NodeProgramClass(_this.webGLContexts.nodes, _this);
            _this.hoverNodePrograms[type] = new NodeProgramClass(_this.webGLContexts.hoverNodes, _this);
          }
          for (var type in _this.settings.edgeProgramClasses) {
            var EdgeProgramClass = _this.settings.edgeProgramClasses[type];
            _this.edgePrograms[type] = new EdgeProgramClass(_this.webGLContexts.edges, _this);
          }
          _this.resize();
          _this.camera = new camera_1.default();
          _this.bindCameraHandlers();
          _this.mouseCaptor = new mouse_1.default(_this.elements.mouse, _this);
          _this.touchCaptor = new touch_1.default(_this.elements.mouse, _this);
          _this.bindEventHandlers();
          _this.bindGraphHandlers();
          _this.process();
          _this.render();
          return _this;
        }
        Sigma3.prototype.createCanvas = function(id) {
          var canvas = (0, utils_1.createElement)("canvas", {
            position: "absolute"
          }, {
            class: "sigma-" + id
          });
          this.elements[id] = canvas;
          this.container.appendChild(canvas);
          return canvas;
        };
        Sigma3.prototype.createCanvasContext = function(id) {
          var canvas = this.createCanvas(id);
          var contextOptions = {
            preserveDrawingBuffer: false,
            antialias: false
          };
          this.canvasContexts[id] = canvas.getContext("2d", contextOptions);
          return this;
        };
        Sigma3.prototype.createWebGLContext = function(id) {
          var canvas = this.createCanvas(id);
          var contextOptions = {
            preserveDrawingBuffer: false,
            antialias: false
          };
          var context;
          context = canvas.getContext("webgl2", contextOptions);
          if (!context)
            context = canvas.getContext("webgl", contextOptions);
          if (!context)
            context = canvas.getContext("experimental-webgl", contextOptions);
          this.webGLContexts[id] = context;
          return this;
        };
        Sigma3.prototype.initializeCache = function() {
          var _this = this;
          var graph = this.graph;
          var i = 0;
          graph.forEachNode(function(key) {
            _this.nodeKeyToIndex[key] = i++;
          });
          i = 0;
          graph.forEachEdge(function(key) {
            _this.edgeKeyToIndex[key] = i++;
          });
        };
        Sigma3.prototype.bindCameraHandlers = function() {
          var _this = this;
          this.activeListeners.camera = function() {
            _this._scheduleRefresh();
          };
          this.camera.on("updated", this.activeListeners.camera);
          return this;
        };
        Sigma3.prototype.bindEventHandlers = function() {
          var _this = this;
          this.activeListeners.handleResize = function() {
            _this.needToSoftProcess = true;
            _this._scheduleRefresh();
          };
          window.addEventListener("resize", this.activeListeners.handleResize);
          var mouseIsOnNode = function(mouseX, mouseY, nodeX, nodeY, size) {
            return mouseX > nodeX - size && mouseX < nodeX + size && mouseY > nodeY - size && mouseY < nodeY + size && Math.sqrt(Math.pow(mouseX - nodeX, 2) + Math.pow(mouseY - nodeY, 2)) < size;
          };
          var getQuadNodes = function(mouseX, mouseY) {
            var mouseGraphPosition = _this.viewportToFramedGraph({ x: mouseX, y: mouseY });
            return _this.quadtree.point(mouseGraphPosition.x, 1 - mouseGraphPosition.y);
          };
          this.activeListeners.handleMove = function(e) {
            var quadNodes = getQuadNodes(e.x, e.y);
            var minDistance = Infinity, nodeToHover = null;
            for (var i = 0, l = quadNodes.length; i < l; i++) {
              var node = quadNodes[i];
              var data = _this.nodeDataCache[node];
              var pos = _this.framedGraphToViewport(data);
              var size = _this.scaleSize(data.size);
              if (mouseIsOnNode(e.x, e.y, pos.x, pos.y, size)) {
                var distance = Math.sqrt(Math.pow(e.x - pos.x, 2) + Math.pow(e.y - pos.y, 2));
                if (distance < minDistance) {
                  minDistance = distance;
                  nodeToHover = node;
                }
              }
            }
            if (nodeToHover && _this.hoveredNode !== nodeToHover && !_this.nodeDataCache[nodeToHover].hidden) {
              if (_this.hoveredNode)
                _this.emit("leaveNode", { node: _this.hoveredNode });
              _this.hoveredNode = nodeToHover;
              _this.emit("enterNode", { node: nodeToHover });
              _this.scheduleHighlightedNodesRender();
              return;
            }
            if (_this.hoveredNode) {
              var data = _this.nodeDataCache[_this.hoveredNode];
              var pos = _this.framedGraphToViewport(data);
              var size = _this.scaleSize(data.size);
              if (!mouseIsOnNode(e.x, e.y, pos.x, pos.y, size)) {
                var node = _this.hoveredNode;
                _this.hoveredNode = null;
                _this.emit("leaveNode", { node });
                return _this.scheduleHighlightedNodesRender();
              }
            }
          };
          var createClickListener = function(eventType) {
            return function(e) {
              var quadNodes = getQuadNodes(e.x, e.y);
              for (var i = 0, l = quadNodes.length; i < l; i++) {
                var node = quadNodes[i];
                var data = _this.nodeDataCache[node];
                var pos = _this.framedGraphToViewport(data);
                var size = _this.scaleSize(data.size);
                if (mouseIsOnNode(e.x, e.y, pos.x, pos.y, size))
                  return _this.emit(eventType + "Node", { node, captor: e, event: e });
              }
              return _this.emit(eventType + "Stage", { event: e });
            };
          };
          this.activeListeners.handleClick = createClickListener("click");
          this.activeListeners.handleRightClick = createClickListener("rightClick");
          this.activeListeners.handleDown = createClickListener("down");
          this.mouseCaptor.on("mousemove", this.activeListeners.handleMove);
          this.mouseCaptor.on("click", this.activeListeners.handleClick);
          this.mouseCaptor.on("rightClick", this.activeListeners.handleRightClick);
          this.mouseCaptor.on("mousedown", this.activeListeners.handleDown);
          return this;
        };
        Sigma3.prototype.bindGraphHandlers = function() {
          var _this = this;
          var graph = this.graph;
          this.activeListeners.graphUpdate = function() {
            _this.needToProcess = true;
            _this._scheduleRefresh();
          };
          this.activeListeners.softGraphUpdate = function() {
            _this.needToSoftProcess = true;
            _this._scheduleRefresh();
          };
          this.activeListeners.addNodeGraphUpdate = function(e) {
            _this.nodeKeyToIndex[e.key] = graph.order - 1;
            _this.activeListeners.graphUpdate();
          };
          this.activeListeners.addEdgeGraphUpdate = function(e) {
            _this.nodeKeyToIndex[e.key] = graph.order - 1;
            _this.activeListeners.graphUpdate();
          };
          graph.on("nodeAdded", this.activeListeners.addNodeGraphUpdate);
          graph.on("nodeDropped", this.activeListeners.graphUpdate);
          graph.on("nodeAttributesUpdated", this.activeListeners.softGraphUpdate);
          graph.on("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.on("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
          graph.on("edgeDropped", this.activeListeners.graphUpdate);
          graph.on("edgeAttributesUpdated", this.activeListeners.softGraphUpdate);
          graph.on("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.on("edgesCleared", this.activeListeners.graphUpdate);
          graph.on("cleared", this.activeListeners.graphUpdate);
          return this;
        };
        Sigma3.prototype.process = function(keepArrays) {
          var _this = this;
          if (keepArrays === void 0) {
            keepArrays = false;
          }
          var graph = this.graph;
          var settings = this.settings;
          var dimensions = this.getDimensions();
          var nodeZExtent = [Infinity, -Infinity];
          var edgeZExtent = [Infinity, -Infinity];
          this.quadtree.clear();
          this.labelGrid.resizeAndClear(dimensions, settings.labelGridCellSize);
          this.highlightedNodes = /* @__PURE__ */ new Set();
          var nodeExtentProperties = ["x", "y"];
          this.nodeExtent = nodeExtent(graph, nodeExtentProperties);
          var nullCamera = new camera_1.default();
          var nullCameraMatrix = (0, utils_1.matrixFromCamera)(nullCamera.getState(), this.getDimensions(), this.getGraphDimensions(), this.getSetting("stagePadding") || 0);
          this.normalizationFunction = (0, utils_1.createNormalizationFunction)(this.customBBox || this.nodeExtent);
          var nodesPerPrograms = {};
          var nodes = graph.nodes();
          for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            var attr = Object.assign({}, graph.getNodeAttributes(node));
            if (settings.nodeReducer)
              attr = settings.nodeReducer(node, attr);
            var data = applyNodeDefaults(this.settings, node, attr);
            nodesPerPrograms[data.type] = (nodesPerPrograms[data.type] || 0) + 1;
            this.nodeDataCache[node] = data;
            this.normalizationFunction.applyTo(data);
            if (this.settings.zIndex) {
              if (data.zIndex < nodeZExtent[0])
                nodeZExtent[0] = data.zIndex;
              if (data.zIndex > nodeZExtent[1])
                nodeZExtent[1] = data.zIndex;
            }
          }
          for (var type in nodesPerPrograms) {
            if (!this.nodePrograms.hasOwnProperty(type)) {
              throw new Error('Sigma: could not find a suitable program for node type "' + type + '"!');
            }
            if (!keepArrays)
              this.nodePrograms[type].allocate(nodesPerPrograms[type]);
            nodesPerPrograms[type] = 0;
          }
          if (this.settings.zIndex && nodeZExtent[0] !== nodeZExtent[1])
            nodes = (0, utils_1.zIndexOrdering)(nodeZExtent, function(node2) {
              return _this.nodeDataCache[node2].zIndex;
            }, nodes);
          for (var i = 0, l = nodes.length; i < l; i++) {
            var node = nodes[i];
            var data = this.nodeDataCache[node];
            this.quadtree.add(node, data.x, 1 - data.y, data.size / this.width);
            if (data.label)
              this.labelGrid.add(node, data.size, this.framedGraphToViewport(data, { matrix: nullCameraMatrix }));
            this.nodePrograms[data.type].process(data, data.hidden, nodesPerPrograms[data.type]++);
            if (data.highlighted && !data.hidden)
              this.highlightedNodes.add(node);
            this.nodeKeyToIndex[node] = i;
          }
          this.labelGrid.organize();
          var edgesPerPrograms = {};
          var edges = graph.edges();
          for (var i = 0, l = edges.length; i < l; i++) {
            var edge = edges[i];
            var attr = Object.assign({}, graph.getEdgeAttributes(edge));
            if (settings.edgeReducer)
              attr = settings.edgeReducer(edge, attr);
            var data = applyEdgeDefaults(this.settings, edge, attr);
            edgesPerPrograms[data.type] = (edgesPerPrograms[data.type] || 0) + 1;
            this.edgeDataCache[edge] = data;
            if (this.settings.zIndex) {
              if (data.zIndex < edgeZExtent[0])
                edgeZExtent[0] = data.zIndex;
              if (data.zIndex > edgeZExtent[1])
                edgeZExtent[1] = data.zIndex;
            }
          }
          for (var type in edgesPerPrograms) {
            if (!this.edgePrograms.hasOwnProperty(type)) {
              throw new Error('Sigma: could not find a suitable program for edge type "' + type + '"!');
            }
            if (!keepArrays)
              this.edgePrograms[type].allocate(edgesPerPrograms[type]);
            edgesPerPrograms[type] = 0;
          }
          if (this.settings.zIndex && edgeZExtent[0] !== edgeZExtent[1])
            edges = (0, utils_1.zIndexOrdering)(edgeZExtent, function(edge2) {
              return _this.edgeDataCache[edge2].zIndex;
            }, edges);
          for (var i = 0, l = edges.length; i < l; i++) {
            var edge = edges[i];
            var data = this.edgeDataCache[edge];
            var extremities = graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]];
            var hidden = data.hidden || sourceData.hidden || targetData.hidden;
            this.edgePrograms[data.type].process(sourceData, targetData, data, hidden, edgesPerPrograms[data.type]++);
            this.nodeKeyToIndex[edge] = i;
          }
          for (var type in this.edgePrograms) {
            var program = this.edgePrograms[type];
            if (!keepArrays && typeof program.computeIndices === "function")
              program.computeIndices();
          }
          return this;
        };
        Sigma3.prototype._refresh = function() {
          if (this.needToProcess) {
            this.process();
          } else if (this.needToSoftProcess) {
            this.process(true);
          }
          this.needToProcess = false;
          this.needToSoftProcess = false;
          this.render();
          return this;
        };
        Sigma3.prototype._scheduleRefresh = function() {
          var _this = this;
          if (!this.renderFrame) {
            this.renderFrame = (0, utils_1.requestFrame)(function() {
              _this._refresh();
              _this.renderFrame = null;
            });
          }
          return this;
        };
        Sigma3.prototype.renderLabels = function() {
          if (!this.settings.renderLabels)
            return this;
          var cameraState = this.camera.getState();
          var visibleNodes;
          if (cameraState.ratio >= 1) {
            visibleNodes = new Set(this.graph.nodes());
          } else {
            var viewRectangle = this.viewRectangle();
            visibleNodes = new Set(this.quadtree.rectangle(viewRectangle.x1, 1 - viewRectangle.y1, viewRectangle.x2, 1 - viewRectangle.y2, viewRectangle.height));
          }
          var labelsToDisplay = this.labelGrid.getLabelsToDisplay(cameraState.ratio, this.settings.labelDensity);
          this.displayedLabels = /* @__PURE__ */ new Set();
          var context = this.canvasContexts.labels;
          for (var i = 0, l = labelsToDisplay.length; i < l; i++) {
            var node = labelsToDisplay[i];
            var data = this.nodeDataCache[node];
            if (data.hidden)
              continue;
            var _a = this.framedGraphToViewport(data), x = _a.x, y = _a.y;
            var size = this.scaleSize(data.size);
            if (size < this.settings.labelRenderedSizeThreshold)
              continue;
            if (!visibleNodes.has(node))
              continue;
            this.displayedLabels.add(node);
            this.settings.labelRenderer(context, {
              key: node,
              label: data.label,
              color: "#000",
              size,
              x,
              y
            }, this.settings);
          }
          return this;
        };
        Sigma3.prototype.renderEdgeLabels = function() {
          if (!this.settings.renderEdgeLabels)
            return this;
          var context = this.canvasContexts.edgeLabels;
          context.clearRect(0, 0, this.width, this.height);
          var edgeLabelsToDisplay = (0, labels_1.edgeLabelsToDisplayFromNodes)({
            graph: this.graph,
            hoveredNode: this.hoveredNode,
            displayedNodeLabels: this.displayedLabels,
            highlightedNodes: this.highlightedNodes
          });
          for (var i = 0, l = edgeLabelsToDisplay.length; i < l; i++) {
            var edge = edgeLabelsToDisplay[i], extremities = this.graph.extremities(edge), sourceData = this.nodeDataCache[extremities[0]], targetData = this.nodeDataCache[extremities[1]], edgeData = this.edgeDataCache[edgeLabelsToDisplay[i]];
            if (edgeData.hidden || sourceData.hidden || targetData.hidden) {
              continue;
            }
            var _a = this.framedGraphToViewport(sourceData), sourceX = _a.x, sourceY = _a.y;
            var _b = this.framedGraphToViewport(targetData), targetX = _b.x, targetY = _b.y;
            var size = this.scaleSize(edgeData.size);
            this.settings.edgeLabelRenderer(context, {
              key: edge,
              label: edgeData.label,
              color: edgeData.color,
              size
            }, {
              key: extremities[0],
              x: sourceX,
              y: sourceY
            }, {
              key: extremities[1],
              x: targetX,
              y: targetY
            }, this.settings);
          }
          return this;
        };
        Sigma3.prototype.renderHighlightedNodes = function() {
          var _this = this;
          var context = this.canvasContexts.hovers;
          context.clearRect(0, 0, this.width, this.height);
          var render = function(node) {
            var data = _this.nodeDataCache[node];
            var _a = _this.framedGraphToViewport(data), x = _a.x, y = _a.y;
            var size = _this.scaleSize(data.size);
            _this.settings.hoverRenderer(context, {
              key: node,
              label: data.label,
              color: data.color,
              size,
              x,
              y
            }, _this.settings);
          };
          var nodesToRender = [];
          if (this.hoveredNode && !this.nodeDataCache[this.hoveredNode].hidden) {
            nodesToRender.push(this.hoveredNode);
          }
          this.highlightedNodes.forEach(function(node) {
            if (node !== _this.hoveredNode)
              nodesToRender.push(node);
          });
          nodesToRender.forEach(function(node) {
            return render(node);
          });
          var nodesPerPrograms = {};
          nodesToRender.forEach(function(node) {
            var type2 = _this.nodeDataCache[node].type;
            nodesPerPrograms[type2] = (nodesPerPrograms[type2] || 0) + 1;
          });
          for (var type in this.hoverNodePrograms) {
            this.hoverNodePrograms[type].allocate(nodesPerPrograms[type] || 0);
            nodesPerPrograms[type] = 0;
          }
          nodesToRender.forEach(function(node) {
            var data = _this.nodeDataCache[node];
            _this.hoverNodePrograms[data.type].process(data, data.hidden, nodesPerPrograms[data.type]++);
          });
          for (var type in this.hoverNodePrograms) {
            var program = this.hoverNodePrograms[type];
            program.bind();
            program.bufferData();
            program.render({
              matrix: this.matrix,
              width: this.width,
              height: this.height,
              ratio: this.camera.ratio,
              nodesPowRatio: 0.5,
              scalingRatio: WEBGL_OVERSAMPLING_RATIO
            });
          }
        };
        Sigma3.prototype.scheduleHighlightedNodesRender = function() {
          var _this = this;
          if (this.renderHighlightedNodesFrame || this.renderFrame)
            return;
          this.renderHighlightedNodesFrame = (0, utils_1.requestFrame)(function() {
            _this.renderHighlightedNodesFrame = null;
            _this.renderHighlightedNodes();
            _this.renderEdgeLabels();
          });
        };
        Sigma3.prototype.render = function() {
          if (this.renderFrame) {
            (0, utils_1.cancelFrame)(this.renderFrame);
            this.renderFrame = null;
            this.needToProcess = false;
            this.needToSoftProcess = false;
          }
          this.resize();
          this.clear();
          this.updateCachedValues();
          if (!this.graph.order)
            return this;
          var mouseCaptor = this.mouseCaptor;
          var moving = this.camera.isAnimated() || mouseCaptor.isMoving || mouseCaptor.draggedEvents || mouseCaptor.currentWheelDirection;
          var cameraState = this.camera.getState();
          var viewportDimensions = this.getDimensions();
          var graphDimensions = this.getGraphDimensions();
          var padding = this.getSetting("stagePadding") || 0;
          this.matrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding);
          this.invMatrix = (0, utils_1.matrixFromCamera)(cameraState, viewportDimensions, graphDimensions, padding, true);
          for (var type in this.nodePrograms) {
            var program = this.nodePrograms[type];
            program.bind();
            program.bufferData();
            program.render({
              matrix: this.matrix,
              width: this.width,
              height: this.height,
              ratio: cameraState.ratio,
              nodesPowRatio: 0.5,
              scalingRatio: WEBGL_OVERSAMPLING_RATIO
            });
          }
          if (!this.settings.hideEdgesOnMove || !moving) {
            for (var type in this.edgePrograms) {
              var program = this.edgePrograms[type];
              program.bind();
              program.bufferData();
              program.render({
                matrix: this.matrix,
                width: this.width,
                height: this.height,
                ratio: cameraState.ratio,
                edgesPowRatio: 0.5,
                scalingRatio: WEBGL_OVERSAMPLING_RATIO
              });
            }
          }
          if (this.settings.hideLabelsOnMove && moving)
            return this;
          this.renderLabels();
          this.renderEdgeLabels();
          this.renderHighlightedNodes();
          this.emit("afterRender");
          return this;
        };
        Sigma3.prototype.updateCachedValues = function() {
          var ratio = this.camera.getState().ratio;
          this.cameraSizeRatio = Math.pow(ratio, SIZE_SCALING_EXPONENT);
        };
        Sigma3.prototype.getCamera = function() {
          return this.camera;
        };
        Sigma3.prototype.getGraph = function() {
          return this.graph;
        };
        Sigma3.prototype.getMouseCaptor = function() {
          return this.mouseCaptor;
        };
        Sigma3.prototype.getTouchCaptor = function() {
          return this.touchCaptor;
        };
        Sigma3.prototype.getDimensions = function() {
          return { width: this.width, height: this.height };
        };
        Sigma3.prototype.getGraphDimensions = function() {
          var extent = this.customBBox || this.nodeExtent;
          return {
            width: extent.x[1] - extent.x[0] || 1,
            height: extent.y[1] - extent.y[0] || 1
          };
        };
        Sigma3.prototype.getNodeDisplayData = function(key) {
          var node = this.nodeDataCache[key];
          return node ? Object.assign({}, node) : void 0;
        };
        Sigma3.prototype.getEdgeDisplayData = function(key) {
          var edge = this.edgeDataCache[key];
          return edge ? Object.assign({}, edge) : void 0;
        };
        Sigma3.prototype.getSetting = function(key) {
          return this.settings[key];
        };
        Sigma3.prototype.setSetting = function(key, value) {
          this.settings[key] = value;
          (0, settings_1.validateSettings)(this.settings);
          this.needToProcess = true;
          this._scheduleRefresh();
          return this;
        };
        Sigma3.prototype.updateSetting = function(key, updater) {
          this.settings[key] = updater(this.settings[key]);
          (0, settings_1.validateSettings)(this.settings);
          this.needToProcess = true;
          this._scheduleRefresh();
          return this;
        };
        Sigma3.prototype.resize = function() {
          var previousWidth = this.width, previousHeight = this.height;
          this.width = this.container.offsetWidth;
          this.height = this.container.offsetHeight;
          if (this.width === 0)
            throw new Error("Sigma: container has no width.");
          if (this.height === 0)
            throw new Error("Sigma: container has no height.");
          if (previousWidth === this.width && previousHeight === this.height)
            return this;
          for (var id in this.elements) {
            var element = this.elements[id];
            element.style.width = this.width + "px";
            element.style.height = this.height + "px";
          }
          for (var id in this.canvasContexts) {
            this.elements[id].setAttribute("width", this.width * PIXEL_RATIO + "px");
            this.elements[id].setAttribute("height", this.height * PIXEL_RATIO + "px");
            if (PIXEL_RATIO !== 1)
              this.canvasContexts[id].scale(PIXEL_RATIO, PIXEL_RATIO);
          }
          for (var id in this.webGLContexts) {
            this.elements[id].setAttribute("width", this.width * WEBGL_OVERSAMPLING_RATIO + "px");
            this.elements[id].setAttribute("height", this.height * WEBGL_OVERSAMPLING_RATIO + "px");
            this.webGLContexts[id].viewport(0, 0, this.width * WEBGL_OVERSAMPLING_RATIO, this.height * WEBGL_OVERSAMPLING_RATIO);
          }
          return this;
        };
        Sigma3.prototype.clear = function() {
          this.webGLContexts.nodes.clear(this.webGLContexts.nodes.COLOR_BUFFER_BIT);
          this.webGLContexts.edges.clear(this.webGLContexts.edges.COLOR_BUFFER_BIT);
          this.canvasContexts.labels.clearRect(0, 0, this.width, this.height);
          this.canvasContexts.hovers.clearRect(0, 0, this.width, this.height);
          this.canvasContexts.edgeLabels.clearRect(0, 0, this.width, this.height);
          return this;
        };
        Sigma3.prototype.refresh = function() {
          this.needToProcess = true;
          this._refresh();
          return this;
        };
        Sigma3.prototype.scheduleRefresh = function() {
          this.needToProcess = true;
          this._scheduleRefresh();
          return this;
        };
        Sigma3.prototype.getViewportZoomedState = function(viewportTarget, newRatio) {
          var _a = this.camera.getState(), ratio = _a.ratio, angle = _a.angle, x = _a.x, y = _a.y;
          var ratioDiff = newRatio / ratio;
          var center = {
            x: this.width / 2,
            y: this.height / 2
          };
          var graphMousePosition = this.viewportToFramedGraph(viewportTarget);
          var graphCenterPosition = this.viewportToFramedGraph(center);
          return {
            angle,
            x: (graphMousePosition.x - graphCenterPosition.x) * (1 - ratioDiff) + x,
            y: (graphMousePosition.y - graphCenterPosition.y) * (1 - ratioDiff) + y,
            ratio: newRatio
          };
        };
        Sigma3.prototype.viewRectangle = function() {
          var marginX = 0 * this.width / 8, marginY = 0 * this.height / 8;
          var p1 = this.viewportToFramedGraph({ x: 0 - marginX, y: 0 - marginY }), p2 = this.viewportToFramedGraph({ x: this.width + marginX, y: 0 - marginY }), h = this.viewportToFramedGraph({ x: 0, y: this.height + marginY });
          return {
            x1: p1.x,
            y1: p1.y,
            x2: p2.x,
            y2: p2.y,
            height: p2.y - h.y
          };
        };
        Sigma3.prototype.framedGraphToViewport = function(coordinates, override) {
          if (override === void 0) {
            override = {};
          }
          var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !!override.graphDimensions;
          var matrix = override.matrix ? override.matrix : recomputeMatrix ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0) : this.matrix;
          var framedGraphVec = [coordinates.x, coordinates.y, 1];
          var viewportVec = (0, matrices_1.multiplyVec)(matrix, framedGraphVec);
          return {
            x: (1 + viewportVec[0]) * this.width / 2,
            y: (1 - viewportVec[1]) * this.height / 2
          };
        };
        Sigma3.prototype.viewportToFramedGraph = function(coordinates, override) {
          if (override === void 0) {
            override = {};
          }
          var recomputeMatrix = !!override.cameraState || !!override.viewportDimensions || !override.graphDimensions;
          var invMatrix = override.matrix ? override.matrix : recomputeMatrix ? (0, utils_1.matrixFromCamera)(override.cameraState || this.camera.getState(), override.viewportDimensions || this.getDimensions(), override.graphDimensions || this.getGraphDimensions(), override.padding || this.getSetting("stagePadding") || 0, true) : this.invMatrix;
          var viewportVec = [coordinates.x / this.width * 2 - 1, 1 - coordinates.y / this.height * 2, 1];
          var framedGraphVec = (0, matrices_1.multiplyVec)(invMatrix, viewportVec);
          return {
            x: framedGraphVec[0],
            y: framedGraphVec[1]
          };
        };
        Sigma3.prototype.viewportToGraph = function(viewportPoint) {
          return this.normalizationFunction.inverse(this.viewportToFramedGraph(viewportPoint));
        };
        Sigma3.prototype.graphToViewport = function(graphPoint) {
          return this.framedGraphToViewport(this.normalizationFunction(graphPoint));
        };
        Sigma3.prototype.getBBox = function() {
          return nodeExtent(this.graph, ["x", "y"]);
        };
        Sigma3.prototype.getCustomBBox = function() {
          return this.customBBox;
        };
        Sigma3.prototype.setCustomBBox = function(customBBox) {
          this.customBBox = customBBox;
          this._scheduleRefresh();
          return this;
        };
        Sigma3.prototype.kill = function() {
          var graph = this.graph;
          this.emit("kill");
          this.removeAllListeners();
          this.camera.removeListener("updated", this.activeListeners.camera);
          window.removeEventListener("resize", this.activeListeners.handleResize);
          this.mouseCaptor.kill();
          this.touchCaptor.kill();
          graph.removeListener("nodeAdded", this.activeListeners.addNodeGraphUpdate);
          graph.removeListener("nodeDropped", this.activeListeners.graphUpdate);
          graph.removeListener("nodeAttributesUpdated", this.activeListeners.softGraphUpdate);
          graph.removeListener("eachNodeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.removeListener("edgeAdded", this.activeListeners.addEdgeGraphUpdate);
          graph.removeListener("edgeDropped", this.activeListeners.graphUpdate);
          graph.removeListener("edgeAttributesUpdated", this.activeListeners.softGraphUpdate);
          graph.removeListener("eachEdgeAttributesUpdated", this.activeListeners.graphUpdate);
          graph.removeListener("edgesCleared", this.activeListeners.graphUpdate);
          graph.removeListener("cleared", this.activeListeners.graphUpdate);
          this.quadtree = new quadtree_1.default();
          this.nodeDataCache = {};
          this.edgeDataCache = {};
          this.highlightedNodes.clear();
          if (this.renderFrame) {
            (0, utils_1.cancelFrame)(this.renderFrame);
            this.renderFrame = null;
          }
          if (this.renderHighlightedNodesFrame) {
            (0, utils_1.cancelFrame)(this.renderHighlightedNodesFrame);
            this.renderHighlightedNodesFrame = null;
          }
          var container = this.container;
          while (container.firstChild)
            container.removeChild(container.firstChild);
        };
        Sigma3.prototype.scaleSize = function(size) {
          return size / this.cameraSizeRatio;
        };
        return Sigma3;
      })(events_1.EventEmitter)
    );
    exports.default = Sigma2;
  }
});

// node_modules/sigma/index.js
var require_sigma2 = __commonJS({
  "node_modules/sigma/index.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sigma = exports.MouseCaptor = exports.QuadTree = exports.Camera = void 0;
    var sigma_1 = __importDefault(require_sigma());
    exports.Sigma = sigma_1.default;
    var camera_1 = __importDefault(require_camera());
    exports.Camera = camera_1.default;
    var quadtree_1 = __importDefault(require_quadtree());
    exports.QuadTree = quadtree_1.default;
    var mouse_1 = __importDefault(require_mouse());
    exports.MouseCaptor = mouse_1.default;
    exports.default = sigma_1.default;
  }
});

// assets/js/threads-graph.entry.mjs
var import_graphology = __toESM(require_graphology_umd_min(), 1);
var import_sigma = __toESM(require_sigma2(), 1);
function threadsLightLabelRenderer(context, data, settings) {
  if (!data.label) return;
  const size = settings.labelSize;
  const font = settings.labelFont;
  const weight = settings.labelWeight;
  context.fillStyle = "#e8e8e8";
  context.font = `${weight} ${size}px ${font}`;
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}
function layoutRadialByDate(sortedAsc) {
  const n = sortedAsc.length;
  const rMin = 48;
  const rMax = 240;
  const positions = /* @__PURE__ */ new Map();
  if (n === 0) return positions;
  if (n === 1) {
    positions.set(sortedAsc[0].id, { x: 0, y: 0 });
    return positions;
  }
  sortedAsc.forEach((node, rank) => {
    const t = rank / (n - 1);
    const r = rMin + t * (rMax - rMin);
    const angle = 2 * Math.PI * rank / n - Math.PI / 2;
    positions.set(node.id, {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r
    });
  });
  return positions;
}
function fitSigmaViewport(sigma, graph, padding = 72) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  graph.forEachNode((_id, a) => {
    const sz = a.size || 10;
    minX = Math.min(minX, a.x - sz);
    maxX = Math.max(maxX, a.x + sz);
    minY = Math.min(minY, a.y - sz);
    maxY = Math.max(maxY, a.y + sz);
  });
  if (!Number.isFinite(minX)) return;
  sigma.setCustomBBox({
    x: [minX - padding, maxX + padding],
    y: [minY - padding, maxY + padding]
  });
  sigma.getCamera().setState({ x: 0.5, y: 0.5, ratio: 1, angle: 0 });
  sigma.refresh();
}
function showGraphError(container, summary, err) {
  const wrap = document.createElement("div");
  wrap.className = "threads-graph-error";
  wrap.setAttribute("role", "alert");
  const p = document.createElement("p");
  p.className = "threads-graph-error__summary";
  p.textContent = summary;
  wrap.appendChild(p);
  if (err) {
    const det = document.createElement("details");
    det.className = "threads-graph-error__details";
    const sm = document.createElement("summary");
    sm.textContent = "Technical details";
    det.appendChild(sm);
    const pre = document.createElement("pre");
    pre.textContent = `${err.name}: ${err.message}`;
    det.appendChild(pre);
    wrap.appendChild(det);
  }
  container.appendChild(wrap);
}
function isWebglAvailable() {
  const canvas = document.createElement("canvas");
  const opts = { failIfMajorPerformanceCaveat: false };
  try {
    return !!(canvas.getContext("webgl2", opts) || canvas.getContext("webgl", opts) || canvas.getContext("experimental-webgl", opts));
  } catch {
    return false;
  }
}
function runGraph(container, dataEl) {
  let payload;
  try {
    payload = JSON.parse(dataEl.textContent.trim());
  } catch (e) {
    console.error("threads-graph: invalid JSON", e);
    showGraphError(
      container,
      "Could not read graph data. Check the page source JSON block.",
      e
    );
    return;
  }
  const baseurl = typeof payload.baseurl === "string" ? payload.baseurl : "";
  const nodes = Array.isArray(payload.nodes) ? payload.nodes : [];
  const rawEdges = Array.isArray(payload.edges) ? payload.edges : [];
  if (nodes.length === 0) {
    showGraphError(container, "No posts to display in this map.");
    return;
  }
  if (!isWebglAvailable()) {
    showGraphError(
      container,
      "This map needs WebGL, which is disabled or unavailable in this browser. Try another browser or turn off \u201Cdisable WebGL\u201D / strict privacy modes."
    );
    return;
  }
  let graph;
  try {
    const sortedAsc = [...nodes].sort((a, b) => {
      const da = String(a.date || "");
      const db = String(b.date || "");
      return da.localeCompare(db);
    });
    const nodeSet = new Set(nodes.map((n) => n.id));
    const posById = layoutRadialByDate(sortedAsc);
    graph = new import_graphology.default({ type: "directed" });
    for (const node of sortedAsc) {
      const p = posById.get(node.id);
      graph.addNode(node.id, {
        x: p.x,
        y: p.y,
        label: node.title || "",
        size: 10,
        color: "#c9a962"
      });
    }
    for (const e of rawEdges) {
      if (!e || typeof e.source !== "string" || typeof e.target !== "string") continue;
      if (!nodeSet.has(e.source) || !nodeSet.has(e.target)) continue;
      if (e.source === e.target) continue;
      if (!graph.hasNode(e.source) || !graph.hasNode(e.target)) continue;
      if (graph.hasEdge(e.source, e.target)) continue;
      const kind = e.kind || "related";
      const edgeType = kind === "precursor" ? "arrow" : "line";
      try {
        graph.addEdge(e.source, e.target, { type: edgeType, kind });
      } catch (_) {
      }
    }
  } catch (err) {
    console.error("threads-graph: graph build failed", err);
    showGraphError(
      container,
      "Could not build the post graph from the page data.",
      err
    );
    return;
  }
  let sigma = null;
  try {
    sigma = new import_sigma.default(graph, container, {
      renderLabels: true,
      defaultNodeColor: "#c9a962",
      defaultEdgeColor: "#6e6e6e",
      labelDensity: 0.22,
      labelSize: 13,
      labelFont: "Georgia, 'Times New Roman', serif",
      labelWeight: "normal",
      labelRenderer: threadsLightLabelRenderer,
      defaultEdgeType: "line"
    });
    fitSigmaViewport(sigma, graph);
    sigma.on("clickNode", ({ node }) => {
      window.location.href = baseurl + node;
    });
    const ro = new ResizeObserver(() => {
      try {
        sigma.resize();
        fitSigmaViewport(sigma, graph);
      } catch (_) {
      }
    });
    ro.observe(container);
  } catch (err) {
    console.error("threads-graph: Sigma / rendering failed", err);
    if (sigma && typeof sigma.kill === "function") {
      try {
        sigma.kill();
      } catch (_) {
      }
    }
    showGraphError(
      container,
      "The graph viewer could not start. See technical details below or the browser console.",
      err
    );
  }
}
function startWhenContainerReady() {
  const dataEl = document.getElementById("threads-graph-data");
  const container = document.getElementById("threads-sigma-container");
  if (!dataEl || !container) return;
  let done = false;
  let ro = null;
  const tryRun = () => {
    if (done) return;
    if (container.offsetWidth > 0 && container.offsetHeight > 0) {
      done = true;
      if (ro) ro.disconnect();
      runGraph(container, dataEl);
    }
  };
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      tryRun();
      if (done) return;
      ro = new ResizeObserver(() => tryRun());
      ro.observe(container);
      setTimeout(tryRun, 250);
    });
  });
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startWhenContainerReady);
} else {
  startWhenContainerReady();
}
