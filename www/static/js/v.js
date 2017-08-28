(function() { var t = this,
        e = t._,
        r = Array.prototype,
        i = Object.prototype,
        n = Function.prototype,
        o = r.push,
        s = r.slice,
        a = r.concat,
        u = i.toString,
        l = i.hasOwnProperty,
        h = Array.isArray,
        c = Object.keys,
        p = n.bind,
        d = function(t) { return t instanceof d ? t : this instanceof d ? void(this._wrapped = t) : new d(t) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = d), exports._ = d) : t._ = d, d.VERSION = "1.7.0"; var f = function(t, e, r) { if (void 0 === e) return t; switch (null == r ? 3 : r) {
            case 1:
                return function(r) { return t.call(e, r) };
            case 2:
                return function(r, i) { return t.call(e, r, i) };
            case 3:
                return function(r, i, n) { return t.call(e, r, i, n) };
            case 4:
                return function(r, i, n, o) { return t.call(e, r, i, n, o) } } return function() { return t.apply(e, arguments) } };
    d.iteratee = function(t, e, r) { return null == t ? d.identity : d.isFunction(t) ? f(t, e, r) : d.isObject(t) ? d.matches(t) : d.property(t) }, d.each = d.forEach = function(t, e, r) { if (null == t) return t;
        e = f(e, r); var i, n = t.length; if (n === +n)
            for (i = 0; n > i; i++) e(t[i], i, t);
        else { var o = d.keys(t); for (i = 0, n = o.length; n > i; i++) e(t[o[i]], o[i], t) } return t }, d.map = d.collect = function(t, e, r) { if (null == t) return [];
        e = d.iteratee(e, r); for (var i, n = t.length !== +t.length && d.keys(t), o = (n || t).length, s = Array(o), a = 0; o > a; a++) i = n ? n[a] : a, s[a] = e(t[i], i, t); return s }; var v = "Reduce of empty array with no initial value";
    d.reduce = d.foldl = d.inject = function(t, e, r, i) { null == t && (t = []), e = f(e, i, 4); var n, o = t.length !== +t.length && d.keys(t),
            s = (o || t).length,
            a = 0; if (arguments.length < 3) { if (!s) throw new TypeError(v);
            r = t[o ? o[a++] : a++] } for (; s > a; a++) n = o ? o[a] : a, r = e(r, t[n], n, t); return r }, d.reduceRight = d.foldr = function(t, e, r, i) { null == t && (t = []), e = f(e, i, 4); var n, o = t.length !== +t.length && d.keys(t),
            s = (o || t).length; if (arguments.length < 3) { if (!s) throw new TypeError(v);
            r = t[o ? o[--s] : --s] } for (; s--;) n = o ? o[s] : s, r = e(r, t[n], n, t); return r }, d.find = d.detect = function(t, e, r) { var i; return e = d.iteratee(e, r), d.some(t, function(t, r, n) { return e(t, r, n) ? (i = t, !0) : void 0 }), i }, d.filter = d.select = function(t, e, r) { var i = []; return null == t ? i : (e = d.iteratee(e, r), d.each(t, function(t, r, n) { e(t, r, n) && i.push(t) }), i) }, d.reject = function(t, e, r) { return d.filter(t, d.negate(d.iteratee(e)), r) }, d.every = d.all = function(t, e, r) { if (null == t) return !0;
        e = d.iteratee(e, r); var i, n, o = t.length !== +t.length && d.keys(t),
            s = (o || t).length; for (i = 0; s > i; i++)
            if (n = o ? o[i] : i, !e(t[n], n, t)) return !1; return !0 }, d.some = d.any = function(t, e, r) { if (null == t) return !1;
        e = d.iteratee(e, r); var i, n, o = t.length !== +t.length && d.keys(t),
            s = (o || t).length; for (i = 0; s > i; i++)
            if (n = o ? o[i] : i, e(t[n], n, t)) return !0; return !1 }, d.contains = d.include = function(t, e) { return null == t ? !1 : (t.length !== +t.length && (t = d.values(t)), d.indexOf(t, e) >= 0) }, d.invoke = function(t, e) { var r = s.call(arguments, 2),
            i = d.isFunction(e); return d.map(t, function(t) { return (i ? e : t[e]).apply(t, r) }) }, d.pluck = function(t, e) { return d.map(t, d.property(e)) }, d.where = function(t, e) { return d.filter(t, d.matches(e)) }, d.findWhere = function(t, e) { return d.find(t, d.matches(e)) }, d.max = function(t, e, r) { var i, n, o = -1 / 0,
            s = -1 / 0; if (null == e && null != t) { t = t.length === +t.length ? t : d.values(t); for (var a = 0, u = t.length; u > a; a++) i = t[a], i > o && (o = i) } else e = d.iteratee(e, r), d.each(t, function(t, r, i) { n = e(t, r, i), (n > s || n === -1 / 0 && o === -1 / 0) && (o = t, s = n) }); return o }, d.min = function(t, e, r) { var i, n, o = 1 / 0,
            s = 1 / 0; if (null == e && null != t) { t = t.length === +t.length ? t : d.values(t); for (var a = 0, u = t.length; u > a; a++) i = t[a], o > i && (o = i) } else e = d.iteratee(e, r), d.each(t, function(t, r, i) { n = e(t, r, i), (s > n || 1 / 0 === n && 1 / 0 === o) && (o = t, s = n) }); return o }, d.shuffle = function(t) { for (var e, r = t && t.length === +t.length ? t : d.values(t), i = r.length, n = Array(i), o = 0; i > o; o++) e = d.random(0, o), e !== o && (n[o] = n[e]), n[e] = r[o]; return n }, d.sample = function(t, e, r) { return null == e || r ? (t.length !== +t.length && (t = d.values(t)), t[d.random(t.length - 1)]) : d.shuffle(t).slice(0, Math.max(0, e)) }, d.sortBy = function(t, e, r) { return e = d.iteratee(e, r), d.pluck(d.map(t, function(t, r, i) { return { value: t, index: r, criteria: e(t, r, i) } }).sort(function(t, e) { var r = t.criteria,
                i = e.criteria; if (r !== i) { if (r > i || void 0 === r) return 1; if (i > r || void 0 === i) return -1 } return t.index - e.index }), "value") }; var g = function(t) { return function(e, r, i) { var n = {}; return r = d.iteratee(r, i), d.each(e, function(i, o) { var s = r(i, o, e);
                t(n, i, s) }), n } };
    d.groupBy = g(function(t, e, r) { d.has(t, r) ? t[r].push(e) : t[r] = [e] }), d.indexBy = g(function(t, e, r) { t[r] = e }), d.countBy = g(function(t, e, r) { d.has(t, r) ? t[r]++ : t[r] = 1 }), d.sortedIndex = function(t, e, r, i) { r = d.iteratee(r, i, 1); for (var n = r(e), o = 0, s = t.length; s > o;) { var a = o + s >>> 1;
            r(t[a]) < n ? o = a + 1 : s = a } return o }, d.toArray = function(t) { return t ? d.isArray(t) ? s.call(t) : t.length === +t.length ? d.map(t, d.identity) : d.values(t) : [] }, d.size = function(t) { return null == t ? 0 : t.length === +t.length ? t.length : d.keys(t).length }, d.partition = function(t, e, r) { e = d.iteratee(e, r); var i = [],
            n = []; return d.each(t, function(t, r, o) {
            (e(t, r, o) ? i : n).push(t) }), [i, n] }, d.first = d.head = d.take = function(t, e, r) { return null == t ? void 0 : null == e || r ? t[0] : 0 > e ? [] : s.call(t, 0, e) }, d.initial = function(t, e, r) { return s.call(t, 0, Math.max(0, t.length - (null == e || r ? 1 : e))) }, d.last = function(t, e, r) { return null == t ? void 0 : null == e || r ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0)) }, d.rest = d.tail = d.drop = function(t, e, r) { return s.call(t, null == e || r ? 1 : e) }, d.compact = function(t) { return d.filter(t, d.identity) }; var m = function(t, e, r, i) { if (e && d.every(t, d.isArray)) return a.apply(i, t); for (var n = 0, s = t.length; s > n; n++) { var u = t[n];
            d.isArray(u) || d.isArguments(u) ? e ? o.apply(i, u) : m(u, e, r, i) : r || i.push(u) } return i };
    d.flatten = function(t, e) { return m(t, e, !1, []) }, d.without = function(t) { return d.difference(t, s.call(arguments, 1)) }, d.uniq = d.unique = function(t, e, r, i) { if (null == t) return [];
        d.isBoolean(e) || (i = r, r = e, e = !1), null != r && (r = d.iteratee(r, i)); for (var n = [], o = [], s = 0, a = t.length; a > s; s++) { var u = t[s]; if (e) s && o === u || n.push(u), o = u;
            else if (r) { var l = r(u, s, t);
                d.indexOf(o, l) < 0 && (o.push(l), n.push(u)) } else d.indexOf(n, u) < 0 && n.push(u) } return n }, d.union = function() { return d.uniq(m(arguments, !0, !0, [])) }, d.intersection = function(t) { if (null == t) return []; for (var e = [], r = arguments.length, i = 0, n = t.length; n > i; i++) { var o = t[i]; if (!d.contains(e, o)) { for (var s = 1; r > s && d.contains(arguments[s], o); s++);
                s === r && e.push(o) } } return e }, d.difference = function(t) { var e = m(s.call(arguments, 1), !0, !0, []); return d.filter(t, function(t) { return !d.contains(e, t) }) }, d.zip = function(t) { if (null == t) return []; for (var e = d.max(arguments, "length").length, r = Array(e), i = 0; e > i; i++) r[i] = d.pluck(arguments, i); return r }, d.object = function(t, e) { if (null == t) return {}; for (var r = {}, i = 0, n = t.length; n > i; i++) e ? r[t[i]] = e[i] : r[t[i][0]] = t[i][1]; return r }, d.indexOf = function(t, e, r) { if (null == t) return -1; var i = 0,
            n = t.length; if (r) { if ("number" != typeof r) return i = d.sortedIndex(t, e), t[i] === e ? i : -1;
            i = 0 > r ? Math.max(0, n + r) : r } for (; n > i; i++)
            if (t[i] === e) return i; return -1 }, d.lastIndexOf = function(t, e, r) { if (null == t) return -1; var i = t.length; for ("number" == typeof r && (i = 0 > r ? i + r + 1 : Math.min(i, r + 1)); --i >= 0;)
            if (t[i] === e) return i; return -1 }, d.range = function(t, e, r) { arguments.length <= 1 && (e = t || 0, t = 0), r = r || 1; for (var i = Math.max(Math.ceil((e - t) / r), 0), n = Array(i), o = 0; i > o; o++, t += r) n[o] = t; return n }; var y = function() {};
    d.bind = function(t, e) { var r, i; if (p && t.bind === p) return p.apply(t, s.call(arguments, 1)); if (!d.isFunction(t)) throw new TypeError("Bind must be called on a function"); return r = s.call(arguments, 2), i = function() { if (!(this instanceof i)) return t.apply(e, r.concat(s.call(arguments)));
            y.prototype = t.prototype; var n = new y;
            y.prototype = null; var o = t.apply(n, r.concat(s.call(arguments))); return d.isObject(o) ? o : n } }, d.partial = function(t) { var e = s.call(arguments, 1); return function() { for (var r = 0, i = e.slice(), n = 0, o = i.length; o > n; n++) i[n] === d && (i[n] = arguments[r++]); for (; r < arguments.length;) i.push(arguments[r++]); return t.apply(this, i) } }, d.bindAll = function(t) { var e, r, i = arguments.length; if (1 >= i) throw new Error("bindAll must be passed function names"); for (e = 1; i > e; e++) r = arguments[e], t[r] = d.bind(t[r], t); return t }, d.memoize = function(t, e) { var r = function(i) { var n = r.cache,
                o = e ? e.apply(this, arguments) : i; return d.has(n, o) || (n[o] = t.apply(this, arguments)), n[o] }; return r.cache = {}, r }, d.delay = function(t, e) { var r = s.call(arguments, 2); return setTimeout(function() { return t.apply(null, r) }, e) }, d.defer = function(t) { return d.delay.apply(d, [t, 1].concat(s.call(arguments, 1))) }, d.throttle = function(t, e, r) { var i, n, o, s = null,
            a = 0;
        r || (r = {}); var u = function() { a = r.leading === !1 ? 0 : d.now(), s = null, o = t.apply(i, n), s || (i = n = null) }; return function() { var l = d.now();
            a || r.leading !== !1 || (a = l); var h = e - (l - a); return i = this, n = arguments, 0 >= h || h > e ? (clearTimeout(s), s = null, a = l, o = t.apply(i, n), s || (i = n = null)) : s || r.trailing === !1 || (s = setTimeout(u, h)), o } }, d.debounce = function(t, e, r) { var i, n, o, s, a, u = function() { var l = d.now() - s;
            e > l && l > 0 ? i = setTimeout(u, e - l) : (i = null, r || (a = t.apply(o, n), i || (o = n = null))) }; return function() { o = this, n = arguments, s = d.now(); var l = r && !i; return i || (i = setTimeout(u, e)), l && (a = t.apply(o, n), o = n = null), a } }, d.wrap = function(t, e) { return d.partial(e, t) }, d.negate = function(t) { return function() { return !t.apply(this, arguments) } }, d.compose = function() { var t = arguments,
            e = t.length - 1; return function() { for (var r = e, i = t[e].apply(this, arguments); r--;) i = t[r].call(this, i); return i } }, d.after = function(t, e) { return function() { return --t < 1 ? e.apply(this, arguments) : void 0 } }, d.before = function(t, e) { var r; return function() { return --t > 0 ? r = e.apply(this, arguments) : e = null, r } }, d.once = d.partial(d.before, 2), d.keys = function(t) { if (!d.isObject(t)) return []; if (c) return c(t); var e = []; for (var r in t) d.has(t, r) && e.push(r); return e }, d.values = function(t) { for (var e = d.keys(t), r = e.length, i = Array(r), n = 0; r > n; n++) i[n] = t[e[n]]; return i }, d.pairs = function(t) { for (var e = d.keys(t), r = e.length, i = Array(r), n = 0; r > n; n++) i[n] = [e[n], t[e[n]]]; return i }, d.invert = function(t) { for (var e = {}, r = d.keys(t), i = 0, n = r.length; n > i; i++) e[t[r[i]]] = r[i]; return e }, d.functions = d.methods = function(t) { var e = []; for (var r in t) d.isFunction(t[r]) && e.push(r); return e.sort() }, d.extend = function(t) { if (!d.isObject(t)) return t; for (var e, r, i = 1, n = arguments.length; n > i; i++) { e = arguments[i]; for (r in e) l.call(e, r) && (t[r] = e[r]) } return t }, d.pick = function(t, e, r) { var i, n = {}; if (null == t) return n; if (d.isFunction(e)) { e = f(e, r); for (i in t) { var o = t[i];
                e(o, i, t) && (n[i] = o) } } else { var u = a.apply([], s.call(arguments, 1));
            t = new Object(t); for (var l = 0, h = u.length; h > l; l++) i = u[l], i in t && (n[i] = t[i]) } return n }, d.omit = function(t, e, r) { if (d.isFunction(e)) e = d.negate(e);
        else { var i = d.map(a.apply([], s.call(arguments, 1)), String);
            e = function(t, e) { return !d.contains(i, e) } } return d.pick(t, e, r) }, d.defaults = function(t) { if (!d.isObject(t)) return t; for (var e = 1, r = arguments.length; r > e; e++) { var i = arguments[e]; for (var n in i) void 0 === t[n] && (t[n] = i[n]) } return t }, d.clone = function(t) { return d.isObject(t) ? d.isArray(t) ? t.slice() : d.extend({}, t) : t }, d.tap = function(t, e) { return e(t), t }; var x = function(t, e, r, i) { if (t === e) return 0 !== t || 1 / t === 1 / e; if (null == t || null == e) return t === e;
        t instanceof d && (t = t._wrapped), e instanceof d && (e = e._wrapped); var n = u.call(t); if (n !== u.call(e)) return !1; switch (n) {
            case "[object RegExp]":
            case "[object String]":
                return "" + t == "" + e;
            case "[object Number]":
                return +t !== +t ? +e !== +e : 0 === +t ? 1 / +t === 1 / e : +t === +e;
            case "[object Date]":
            case "[object Boolean]":
                return +t === +e } if ("object" != typeof t || "object" != typeof e) return !1; for (var o = r.length; o--;)
            if (r[o] === t) return i[o] === e; var s = t.constructor,
            a = e.constructor; if (s !== a && "constructor" in t && "constructor" in e && !(d.isFunction(s) && s instanceof s && d.isFunction(a) && a instanceof a)) return !1;
        r.push(t), i.push(e); var l, h; if ("[object Array]" === n) { if (l = t.length, h = l === e.length)
                for (; l-- && (h = x(t[l], e[l], r, i));); } else { var c, p = d.keys(t); if (l = p.length, h = d.keys(e).length === l)
                for (; l-- && (c = p[l], h = d.has(e, c) && x(t[c], e[c], r, i));); } return r.pop(), i.pop(), h };
    d.isEqual = function(t, e) { return x(t, e, [], []) }, d.isEmpty = function(t) { if (null == t) return !0; if (d.isArray(t) || d.isString(t) || d.isArguments(t)) return 0 === t.length; for (var e in t)
            if (d.has(t, e)) return !1; return !0 }, d.isElement = function(t) { return !(!t || 1 !== t.nodeType) }, d.isArray = h || function(t) { return "[object Array]" === u.call(t) }, d.isObject = function(t) { var e = typeof t; return "function" === e || "object" === e && !!t }, d.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) { d["is" + t] = function(e) { return u.call(e) === "[object " + t + "]" } }), d.isArguments(arguments) || (d.isArguments = function(t) { return d.has(t, "callee") }), "function" != typeof /./ && (d.isFunction = function(t) { return "function" == typeof t || !1 }), d.isFinite = function(t) { return isFinite(t) && !isNaN(parseFloat(t)) }, d.isNaN = function(t) { return d.isNumber(t) && t !== +t }, d.isBoolean = function(t) { return t === !0 || t === !1 || "[object Boolean]" === u.call(t) }, d.isNull = function(t) { return null === t }, d.isUndefined = function(t) { return void 0 === t }, d.has = function(t, e) { return null != t && l.call(t, e) }, d.noConflict = function() { return t._ = e, this }, d.identity = function(t) { return t }, d.constant = function(t) { return function() { return t } }, d.noop = function() {}, d.property = function(t) { return function(e) { return e[t] } }, d.matches = function(t) { var e = d.pairs(t),
            r = e.length; return function(t) { if (null == t) return !r;
            t = new Object(t); for (var i = 0; r > i; i++) { var n = e[i],
                    o = n[0]; if (n[1] !== t[o] || !(o in t)) return !1 } return !0 } }, d.times = function(t, e, r) { var i = Array(Math.max(0, t));
        e = f(e, r, 1); for (var n = 0; t > n; n++) i[n] = e(n); return i }, d.random = function(t, e) { return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1)) }, d.now = Date.now || function() { return (new Date).getTime() }; var b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
        _ = d.invert(b),
        T = function(t) { var e = function(e) { return t[e] },
                r = "(?:" + d.keys(t).join("|") + ")",
                i = RegExp(r),
                n = RegExp(r, "g"); return function(t) { return t = null == t ? "" : "" + t, i.test(t) ? t.replace(n, e) : t } };
    d.escape = T(b), d.unescape = T(_), d.result = function(t, e) { if (null == t) return void 0; var r = t[e]; return d.isFunction(r) ? t[e]() : r }; var E = 0;
    d.uniqueId = function(t) { var e = ++E + ""; return t ? t + e : e }, d.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var S = /(.)^/,
        w = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
        A = /\\|'|\r|\n|\u2028|\u2029/g,
        C = function(t) { return "\\" + w[t] };
    d.template = function(t, e, r) {!e && r && (e = r), e = d.defaults({}, e, d.templateSettings); var i = RegExp([(e.escape || S).source, (e.interpolate || S).source, (e.evaluate || S).source].join("|") + "|$", "g"),
            n = 0,
            o = "__p+='";
        t.replace(i, function(e, r, i, s, a) { return o += t.slice(n, a).replace(A, C), n = a + e.length, r ? o += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), e }), o += "';\n", e.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n"; try { var s = new Function(e.variable || "obj", "_", o) } catch (a) { throw a.source = o, a } var u = function(t) { return s.call(this, t, d) },
            l = e.variable || "obj"; return u.source = "function(" + l + "){\n" + o + "}", u }, d.chain = function(t) { var e = d(t); return e._chain = !0, e }; var M = function(t) { return this._chain ? d(t).chain() : t };
    d.mixin = function(t) { d.each(d.functions(t), function(e) { var r = d[e] = t[e];
            d.prototype[e] = function() { var t = [this._wrapped]; return o.apply(t, arguments), M.call(this, r.apply(d, t)) } }) }, d.mixin(d), d.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) { var e = r[t];
        d.prototype[t] = function() { var r = this._wrapped; return e.apply(r, arguments), "shift" !== t && "splice" !== t || 0 !== r.length || delete r[0], M.call(this, r) } }), d.each(["concat", "join", "slice"], function(t) { var e = r[t];
        d.prototype[t] = function() { return M.call(this, e.apply(this._wrapped, arguments)) } }), d.prototype.value = function() { return this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function() { return d }) }).call(this),
    function(t) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else { var e;
            e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.PIXI = t() } }(function() {
        var t;
        return function e(t, r, i) {
            function n(s, a) { if (!r[s]) { if (!t[s]) { var u = "function" == typeof require && require; if (!a && u) return u(s, !0); if (o) return o(s, !0); var l = new Error("Cannot find module '" + s + "'"); throw l.code = "MODULE_NOT_FOUND", l } var h = r[s] = { exports: {} };
                    t[s][0].call(h.exports, function(e) { var r = t[s][1][e]; return n(r ? r : e) }, h, h.exports, e, t, r, i) } return r[s].exports } for (var o = "function" == typeof require && require, s = 0; s < i.length; s++) n(i[s]); return n }({
            1: [function(t, e) {
                (function(r) { t("./polyfill"); var i = e.exports = t("./core");
                    i.extras = t("./extras"), i.filters = t("./filters"), i.interaction = t("./interaction"), i.loaders = t("./loaders"), i.mesh = t("./mesh"), i.loader = new i.loaders.Loader, Object.assign(i, t("./deprecation")), r.PIXI = i }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { "./core": 29, "./deprecation": 78, "./extras": 85, "./filters": 102, "./interaction": 117, "./loaders": 120, "./mesh": 126, "./polyfill": 130 }],
            2: [function(e, r) {
                (function(e) {! function() {
                        function i(t) { var e = !1; return function() { if (e) throw new Error("Callback was already called.");
                                e = !0, t.apply(n, arguments) } } var n, o, s = {};
                        n = this, null != n && (o = n.async), s.noConflict = function() { return n.async = o, s }; var a = Object.prototype.toString,
                            u = Array.isArray || function(t) { return "[object Array]" === a.call(t) },
                            l = function(t, e) { if (t.forEach) return t.forEach(e); for (var r = 0; r < t.length; r += 1) e(t[r], r, t) },
                            h = function(t, e) { if (t.map) return t.map(e); var r = []; return l(t, function(t, i, n) { r.push(e(t, i, n)) }), r },
                            c = function(t, e, r) { return t.reduce ? t.reduce(e, r) : (l(t, function(t, i, n) { r = e(r, t, i, n) }), r) },
                            p = function(t) { if (Object.keys) return Object.keys(t); var e = []; for (var r in t) t.hasOwnProperty(r) && e.push(r); return e }; "undefined" != typeof e && e.nextTick ? (s.nextTick = e.nextTick, s.setImmediate = "undefined" != typeof setImmediate ? function(t) { setImmediate(t) } : s.nextTick) : "function" == typeof setImmediate ? (s.nextTick = function(t) { setImmediate(t) }, s.setImmediate = s.nextTick) : (s.nextTick = function(t) { setTimeout(t, 0) }, s.setImmediate = s.nextTick), s.each = function(t, e, r) {
                            function n(e) { e ? (r(e), r = function() {}) : (o += 1, o >= t.length && r()) } if (r = r || function() {}, !t.length) return r(); var o = 0;
                            l(t, function(t) { e(t, i(n)) }) }, s.forEach = s.each, s.eachSeries = function(t, e, r) { if (r = r || function() {}, !t.length) return r(); var i = 0,
                                n = function() { e(t[i], function(e) { e ? (r(e), r = function() {}) : (i += 1, i >= t.length ? r() : n()) }) };
                            n() }, s.forEachSeries = s.eachSeries, s.eachLimit = function(t, e, r, i) { var n = d(e);
                            n.apply(null, [t, r, i]) }, s.forEachLimit = s.eachLimit; var d = function(t) { return function(e, r, i) { if (i = i || function() {}, !e.length || 0 >= t) return i(); var n = 0,
                                        o = 0,
                                        s = 0;! function a() { if (n >= e.length) return i(); for (; t > s && o < e.length;) o += 1, s += 1, r(e[o - 1], function(t) { t ? (i(t), i = function() {}) : (n += 1, s -= 1, n >= e.length ? i() : a()) }) }() } },
                            f = function(t) { return function() { var e = Array.prototype.slice.call(arguments); return t.apply(null, [s.each].concat(e)) } },
                            v = function(t, e) { return function() { var r = Array.prototype.slice.call(arguments); return e.apply(null, [d(t)].concat(r)) } },
                            g = function(t) { return function() { var e = Array.prototype.slice.call(arguments); return t.apply(null, [s.eachSeries].concat(e)) } },
                            m = function(t, e, r, i) { if (e = h(e, function(t, e) { return { index: e, value: t } }), i) { var n = [];
                                    t(e, function(t, e) { r(t.value, function(r, i) { n[t.index] = i, e(r) }) }, function(t) { i(t, n) }) } else t(e, function(t, e) { r(t.value, function(t) { e(t) }) }) };
                        s.map = f(m), s.mapSeries = g(m), s.mapLimit = function(t, e, r, i) { return y(e)(t, r, i) }; var y = function(t) { return v(t, m) };
                        s.reduce = function(t, e, r, i) { s.eachSeries(t, function(t, i) { r(e, t, function(t, r) { e = r, i(t) }) }, function(t) { i(t, e) }) }, s.inject = s.reduce, s.foldl = s.reduce, s.reduceRight = function(t, e, r, i) { var n = h(t, function(t) { return t }).reverse();
                            s.reduce(n, e, r, i) }, s.foldr = s.reduceRight; var x = function(t, e, r, i) { var n = [];
                            e = h(e, function(t, e) { return { index: e, value: t } }), t(e, function(t, e) { r(t.value, function(r) { r && n.push(t), e() }) }, function() { i(h(n.sort(function(t, e) { return t.index - e.index }), function(t) { return t.value })) }) };
                        s.filter = f(x), s.filterSeries = g(x), s.select = s.filter, s.selectSeries = s.filterSeries; var b = function(t, e, r, i) { var n = [];
                            e = h(e, function(t, e) { return { index: e, value: t } }), t(e, function(t, e) { r(t.value, function(r) { r || n.push(t), e() }) }, function() { i(h(n.sort(function(t, e) { return t.index - e.index }), function(t) { return t.value })) }) };
                        s.reject = f(b), s.rejectSeries = g(b); var _ = function(t, e, r, i) { t(e, function(t, e) { r(t, function(r) { r ? (i(t), i = function() {}) : e() }) }, function() { i() }) };
                        s.detect = f(_), s.detectSeries = g(_), s.some = function(t, e, r) { s.each(t, function(t, i) { e(t, function(t) { t && (r(!0), r = function() {}), i() }) }, function() { r(!1) }) }, s.any = s.some, s.every = function(t, e, r) { s.each(t, function(t, i) { e(t, function(t) { t || (r(!1), r = function() {}), i() }) }, function() { r(!0) }) }, s.all = s.every, s.sortBy = function(t, e, r) { s.map(t, function(t, r) { e(t, function(e, i) { e ? r(e) : r(null, { value: t, criteria: i }) }) }, function(t, e) { if (t) return r(t); var i = function(t, e) { var r = t.criteria,
                                        i = e.criteria; return i > r ? -1 : r > i ? 1 : 0 };
                                r(null, h(e.sort(i), function(t) { return t.value })) }) }, s.auto = function(t, e) { e = e || function() {}; var r = p(t),
                                i = r.length; if (!i) return e(); var n = {},
                                o = [],
                                a = function(t) { o.unshift(t) },
                                h = function(t) { for (var e = 0; e < o.length; e += 1)
                                        if (o[e] === t) return void o.splice(e, 1) },
                                d = function() { i--, l(o.slice(0), function(t) { t() }) };
                            a(function() { if (!i) { var t = e;
                                    e = function() {}, t(null, n) } }), l(r, function(r) { var i = u(t[r]) ? t[r] : [t[r]],
                                    o = function(t) { var i = Array.prototype.slice.call(arguments, 1); if (i.length <= 1 && (i = i[0]), t) { var o = {};
                                            l(p(n), function(t) { o[t] = n[t] }), o[r] = i, e(t, o), e = function() {} } else n[r] = i, s.setImmediate(d) },
                                    f = i.slice(0, Math.abs(i.length - 1)) || [],
                                    v = function() { return c(f, function(t, e) { return t && n.hasOwnProperty(e) }, !0) && !n.hasOwnProperty(r) }; if (v()) i[i.length - 1](o, n);
                                else { var g = function() { v() && (h(g), i[i.length - 1](o, n)) };
                                    a(g) } }) }, s.retry = function(t, e, r) { var i = 5,
                                n = []; "function" == typeof t && (r = e, e = t, t = i), t = parseInt(t, 10) || i; var o = function(i, o) { for (var a = function(t, e) { return function(r) { t(function(t, i) { r(!t || e, { err: t, result: i }) }, o) } }; t;) n.push(a(e, !(t -= 1)));
                                s.series(n, function(t, e) { e = e[e.length - 1], (i || r)(e.err, e.result) }) }; return r ? o() : o }, s.waterfall = function(t, e) { if (e = e || function() {}, !u(t)) { var r = new Error("First argument to waterfall must be an array of functions"); return e(r) } if (!t.length) return e(); var i = function(t) { return function(r) { if (r) e.apply(null, arguments), e = function() {};
                                    else { var n = Array.prototype.slice.call(arguments, 1),
                                            o = t.next();
                                        n.push(o ? i(o) : e), s.setImmediate(function() { t.apply(null, n) }) } } };
                            i(s.iterator(t))() }; var T = function(t, e, r) { if (r = r || function() {}, u(e)) t.map(e, function(t, e) { t && t(function(t) { var r = Array.prototype.slice.call(arguments, 1);
                                    r.length <= 1 && (r = r[0]), e.call(null, t, r) }) }, r);
                            else { var i = {};
                                t.each(p(e), function(t, r) { e[t](function(e) { var n = Array.prototype.slice.call(arguments, 1);
                                        n.length <= 1 && (n = n[0]), i[t] = n, r(e) }) }, function(t) { r(t, i) }) } };
                        s.parallel = function(t, e) { T({ map: s.map, each: s.each }, t, e) }, s.parallelLimit = function(t, e, r) { T({ map: y(e), each: d(e) }, t, r) }, s.series = function(t, e) { if (e = e || function() {}, u(t)) s.mapSeries(t, function(t, e) { t && t(function(t) { var r = Array.prototype.slice.call(arguments, 1);
                                    r.length <= 1 && (r = r[0]), e.call(null, t, r) }) }, e);
                            else { var r = {};
                                s.eachSeries(p(t), function(e, i) { t[e](function(t) { var n = Array.prototype.slice.call(arguments, 1);
                                        n.length <= 1 && (n = n[0]), r[e] = n, i(t) }) }, function(t) { e(t, r) }) } }, s.iterator = function(t) { var e = function(r) { var i = function() { return t.length && t[r].apply(null, arguments), i.next() }; return i.next = function() { return r < t.length - 1 ? e(r + 1) : null }, i }; return e(0) }, s.apply = function(t) { var e = Array.prototype.slice.call(arguments, 1); return function() { return t.apply(null, e.concat(Array.prototype.slice.call(arguments))) } }; var E = function(t, e, r, i) { var n = [];
                            t(e, function(t, e) { r(t, function(t, r) { n = n.concat(r || []), e(t) }) }, function(t) { i(t, n) }) };
                        s.concat = f(E), s.concatSeries = g(E), s.whilst = function(t, e, r) { t() ? e(function(i) { return i ? r(i) : void s.whilst(t, e, r) }) : r() }, s.doWhilst = function(t, e, r) { t(function(i) { if (i) return r(i); var n = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, n) ? s.doWhilst(t, e, r) : r() }) }, s.until = function(t, e, r) { t() ? r() : e(function(i) { return i ? r(i) : void s.until(t, e, r) }) }, s.doUntil = function(t, e, r) { t(function(i) { if (i) return r(i); var n = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, n) ? r() : s.doUntil(t, e, r) }) }, s.queue = function(t, e) {
                            function r(t, e, r, i) { return t.started || (t.started = !0), u(e) || (e = [e]), 0 == e.length ? s.setImmediate(function() { t.drain && t.drain() }) : void l(e, function(e) { var n = { data: e, callback: "function" == typeof i ? i : null };
                                    r ? t.tasks.unshift(n) : t.tasks.push(n), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process) }) } void 0 === e && (e = 1); var n = 0,
                                o = { tasks: [], concurrency: e, saturated: null, empty: null, drain: null, started: !1, paused: !1, push: function(t, e) { r(o, t, !1, e) }, kill: function() { o.drain = null, o.tasks = [] }, unshift: function(t, e) { r(o, t, !0, e) }, process: function() { if (!o.paused && n < o.concurrency && o.tasks.length) { var e = o.tasks.shift();
                                            o.empty && 0 === o.tasks.length && o.empty(), n += 1; var r = function() { n -= 1, e.callback && e.callback.apply(e, arguments), o.drain && o.tasks.length + n === 0 && o.drain(), o.process() },
                                                s = i(r);
                                            t(e.data, s) } }, length: function() { return o.tasks.length }, running: function() { return n }, idle: function() { return o.tasks.length + n === 0 }, pause: function() { o.paused !== !0 && (o.paused = !0, o.process()) }, resume: function() { o.paused !== !1 && (o.paused = !1, o.process()) } }; return o }, s.priorityQueue = function(t, e) {
                            function r(t, e) { return t.priority - e.priority }

                            function i(t, e, r) { for (var i = -1, n = t.length - 1; n > i;) { var o = i + (n - i + 1 >>> 1);
                                    r(e, t[o]) >= 0 ? i = o : n = o - 1 } return i }

                            function n(t, e, n, o) { return t.started || (t.started = !0), u(e) || (e = [e]), 0 == e.length ? s.setImmediate(function() { t.drain && t.drain() }) : void l(e, function(e) { var a = { data: e, priority: n, callback: "function" == typeof o ? o : null };
                                    t.tasks.splice(i(t.tasks, a, r) + 1, 0, a), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process) }) } var o = s.queue(t, e); return o.push = function(t, e, r) { n(o, t, e, r) }, delete o.unshift, o }, s.cargo = function(t, e) { var r = !1,
                                i = [],
                                n = { tasks: i, payload: e, saturated: null, empty: null, drain: null, drained: !0, push: function(t, r) { u(t) || (t = [t]), l(t, function(t) { i.push({ data: t, callback: "function" == typeof r ? r : null }), n.drained = !1, n.saturated && i.length === e && n.saturated() }), s.setImmediate(n.process) }, process: function o() { if (!r) { if (0 === i.length) return n.drain && !n.drained && n.drain(), void(n.drained = !0); var s = "number" == typeof e ? i.splice(0, e) : i.splice(0, i.length),
                                                a = h(s, function(t) { return t.data });
                                            n.empty && n.empty(), r = !0, t(a, function() { r = !1; var t = arguments;
                                                l(s, function(e) { e.callback && e.callback.apply(null, t) }), o() }) } }, length: function() { return i.length }, running: function() { return r } }; return n }; var S = function(t) { return function(e) { var r = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, r.concat([function(e) { var r = Array.prototype.slice.call(arguments, 1); "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && l(r, function(e) { console[t](e) })) }])) } };
                        s.log = S("log"), s.dir = S("dir"), s.memoize = function(t, e) { var r = {},
                                i = {};
                            e = e || function(t) { return t }; var n = function() { var n = Array.prototype.slice.call(arguments),
                                    o = n.pop(),
                                    a = e.apply(null, n);
                                a in r ? s.nextTick(function() { o.apply(null, r[a]) }) : a in i ? i[a].push(o) : (i[a] = [o], t.apply(null, n.concat([function() { r[a] = arguments; var t = i[a];
                                    delete i[a]; for (var e = 0, n = t.length; n > e; e++) t[e].apply(null, arguments) }]))) }; return n.memo = r, n.unmemoized = t, n }, s.unmemoize = function(t) { return function() { return (t.unmemoized || t).apply(null, arguments) } }, s.times = function(t, e, r) { for (var i = [], n = 0; t > n; n++) i.push(n); return s.map(i, e, r) }, s.timesSeries = function(t, e, r) { for (var i = [], n = 0; t > n; n++) i.push(n); return s.mapSeries(i, e, r) }, s.seq = function() { var t = arguments; return function() { var e = this,
                                    r = Array.prototype.slice.call(arguments),
                                    i = r.pop();
                                s.reduce(t, r, function(t, r, i) { r.apply(e, t.concat([function() { var t = arguments[0],
                                            e = Array.prototype.slice.call(arguments, 1);
                                        i(t, e) }])) }, function(t, r) { i.apply(e, [t].concat(r)) }) } }, s.compose = function() { return s.seq.apply(null, Array.prototype.reverse.call(arguments)) }; var w = function(t, e) { var r = function() { var r = this,
                                    i = Array.prototype.slice.call(arguments),
                                    n = i.pop(); return t(e, function(t, e) { t.apply(r, i.concat([e])) }, n) }; if (arguments.length > 2) { var i = Array.prototype.slice.call(arguments, 2); return r.apply(this, i) } return r };
                        s.applyEach = f(w), s.applyEachSeries = g(w), s.forever = function(t, e) {
                            function r(i) { if (i) { if (e) return e(i); throw i } t(r) } r() }, "undefined" != typeof r && r.exports ? r.exports = s : "undefined" != typeof t && t.amd ? t([], function() { return s }) : n.async = s }() }).call(this, e("_process")) }, { _process: 4 }],
            3: [function(t, e, r) {
                (function(t) {
                    function e(t, e) { for (var r = 0, i = t.length - 1; i >= 0; i--) { var n = t[i]; "." === n ? t.splice(i, 1) : ".." === n ? (t.splice(i, 1), r++) : r && (t.splice(i, 1), r--) } if (e)
                            for (; r--; r) t.unshift(".."); return t }

                    function i(t, e) { if (t.filter) return t.filter(e); for (var r = [], i = 0; i < t.length; i++) e(t[i], i, t) && r.push(t[i]); return r } var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                        o = function(t) { return n.exec(t).slice(1) };
                    r.resolve = function() { for (var r = "", n = !1, o = arguments.length - 1; o >= -1 && !n; o--) { var s = o >= 0 ? arguments[o] : t.cwd(); if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                            s && (r = s + "/" + r, n = "/" === s.charAt(0)) } return r = e(i(r.split("/"), function(t) { return !!t }), !n).join("/"), (n ? "/" : "") + r || "." }, r.normalize = function(t) { var n = r.isAbsolute(t),
                            o = "/" === s(t, -1); return t = e(i(t.split("/"), function(t) { return !!t }), !n).join("/"), t || n || (t = "."), t && o && (t += "/"), (n ? "/" : "") + t }, r.isAbsolute = function(t) { return "/" === t.charAt(0) }, r.join = function() { var t = Array.prototype.slice.call(arguments, 0); return r.normalize(i(t, function(t) { if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings"); return t }).join("/")) }, r.relative = function(t, e) {
                        function i(t) { for (var e = 0; e < t.length && "" === t[e]; e++); for (var r = t.length - 1; r >= 0 && "" === t[r]; r--); return e > r ? [] : t.slice(e, r - e + 1) } t = r.resolve(t).substr(1), e = r.resolve(e).substr(1); for (var n = i(t.split("/")), o = i(e.split("/")), s = Math.min(n.length, o.length), a = s, u = 0; s > u; u++)
                            if (n[u] !== o[u]) { a = u; break }
                        for (var l = [], u = a; u < n.length; u++) l.push(".."); return l = l.concat(o.slice(a)), l.join("/") }, r.sep = "/", r.delimiter = ":", r.dirname = function(t) { var e = o(t),
                            r = e[0],
                            i = e[1]; return r || i ? (i && (i = i.substr(0, i.length - 1)), r + i) : "." }, r.basename = function(t, e) { var r = o(t)[2]; return e && r.substr(-1 * e.length) === e && (r = r.substr(0, r.length - e.length)), r }, r.extname = function(t) { return o(t)[3] }; var s = "b" === "ab".substr(-1) ? function(t, e, r) { return t.substr(e, r) } : function(t, e, r) { return 0 > e && (e = t.length + e), t.substr(e, r) } }).call(this, t("_process")) }, { _process: 4 }],
            4: [function(t, e) {
                function r() { if (!s) { s = !0; for (var t, e = o.length; e;) { t = o, o = []; for (var r = -1; ++r < e;) t[r]();
                            e = o.length } s = !1 } }

                function i() {} var n = e.exports = {},
                    o = [],
                    s = !1;
                n.nextTick = function(t) { o.push(t), s || setTimeout(r, 0) }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = i, n.addListener = i, n.once = i, n.off = i, n.removeListener = i, n.removeAllListeners = i, n.emit = i, n.binding = function() { throw new Error("process.binding is not supported") }, n.cwd = function() { return "/" }, n.chdir = function() { throw new Error("process.chdir is not supported") }, n.umask = function() { return 0 } }, {}],
            5: [function(e, r, i) {
                (function(e) {
                    ! function(n) {
                        function o(t) { throw RangeError(B[t]) }

                        function s(t, e) { for (var r = t.length; r--;) t[r] = e(t[r]); return t }

                        function a(t, e) { return s(t.split(O), e).join(".") }

                        function u(t) { for (var e, r, i = [], n = 0, o = t.length; o > n;) e = t.charCodeAt(n++), e >= 55296 && 56319 >= e && o > n ? (r = t.charCodeAt(n++), 56320 == (64512 & r) ? i.push(((1023 & e) << 10) + (1023 & r) + 65536) : (i.push(e), n--)) : i.push(e); return i }

                        function l(t) { return s(t, function(t) { var e = ""; return t > 65535 && (t -= 65536, e += N(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += N(t) }).join("") }

                        function h(t) { return 10 > t - 48 ? t - 22 : 26 > t - 65 ? t - 65 : 26 > t - 97 ? t - 97 : E }

                        function c(t, e) { return t + 22 + 75 * (26 > t) - ((0 != e) << 5) }

                        function p(t, e, r) { var i = 0; for (t = r ? I(t / C) : t >> 1, t += I(t / e); t > L * w >> 1; i += E) t = I(t / L); return I(i + (L + 1) * t / (t + A)) }

                        function d(t) { var e, r, i, n, s, a, u, c, d, f, v = [],
                                g = t.length,
                                m = 0,
                                y = R,
                                x = M; for (r = t.lastIndexOf(F), 0 > r && (r = 0), i = 0; r > i; ++i) t.charCodeAt(i) >= 128 && o("not-basic"), v.push(t.charCodeAt(i)); for (n = r > 0 ? r + 1 : 0; g > n;) { for (s = m, a = 1, u = E; n >= g && o("invalid-input"), c = h(t.charCodeAt(n++)), (c >= E || c > I((T - m) / a)) && o("overflow"), m += c * a, d = x >= u ? S : u >= x + w ? w : u - x, !(d > c); u += E) f = E - d, a > I(T / f) && o("overflow"), a *= f;
                                e = v.length + 1, x = p(m - s, e, 0 == s), I(m / e) > T - y && o("overflow"), y += I(m / e), m %= e, v.splice(m++, 0, y) } return l(v) }

                        function f(t) {
                            var e, r, i, n, s, a, l, h, d, f, v, g, m, y, x, b = [];
                            for (t = u(t), g = t.length, e = R, r = 0, s = M, a = 0; g > a; ++a) v = t[a], 128 > v && b.push(N(v));
                            for (i = n = b.length, n && b.push(F); g > i;) { for (l = T, a = 0; g > a; ++a) v = t[a], v >= e && l > v && (l = v); for (m = i + 1, l - e > I((T - r) / m) && o("overflow"), r += (l - e) * m, e = l, a = 0; g > a; ++a)
                                    if (v = t[a], e > v && ++r > T && o("overflow"), v == e) { for (h = r, d = E; f = s >= d ? S : d >= s + w ? w : d - s, !(f > h); d += E) x = h - f, y = E - f, b.push(N(c(f + x % y, 0))), h = I(x / y);
                                        b.push(N(c(h, 0))), s = p(r, m, i == n), r = 0, ++i }++r, ++e }
                            return b.join("")
                        }

                        function v(t) { return a(t, function(t) { return D.test(t) ? d(t.slice(4).toLowerCase()) : t }) }

                        function g(t) { return a(t, function(t) { return P.test(t) ? "xn--" + f(t) : t }) }
                        var m = "object" == typeof i && i,
                            y = "object" == typeof r && r && r.exports == m && r,
                            x = "object" == typeof e && e;
                        (x.global === x || x.window === x) && (n = x);
                        var b, _, T = 2147483647,
                            E = 36,
                            S = 1,
                            w = 26,
                            A = 38,
                            C = 700,
                            M = 72,
                            R = 128,
                            F = "-",
                            D = /^xn--/,
                            P = /[^ -~]/,
                            O = /\x2E|\u3002|\uFF0E|\uFF61/g,
                            B = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" },
                            L = E - S,
                            I = Math.floor,
                            N = String.fromCharCode;
                        if (b = { version: "1.2.4", ucs2: { decode: u, encode: l }, decode: d, encode: f, toASCII: g, toUnicode: v }, "function" == typeof t && "object" == typeof t.amd && t.amd) t("punycode", function() { return b });
                        else if (m && !m.nodeType)
                            if (y) y.exports = b;
                            else
                                for (_ in b) b.hasOwnProperty(_) && (m[_] = b[_]);
                        else n.punycode = b
                    }(this)
                }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }, {}],
            6: [function(t, e) { "use strict";

                function r(t, e) { return Object.prototype.hasOwnProperty.call(t, e) } e.exports = function(t, e, n, o) { e = e || "&", n = n || "="; var s = {}; if ("string" != typeof t || 0 === t.length) return s; var a = /\+/g;
                    t = t.split(e); var u = 1e3;
                    o && "number" == typeof o.maxKeys && (u = o.maxKeys); var l = t.length;
                    u > 0 && l > u && (l = u); for (var h = 0; l > h; ++h) { var c, p, d, f, v = t[h].replace(a, "%20"),
                            g = v.indexOf(n);
                        g >= 0 ? (c = v.substr(0, g), p = v.substr(g + 1)) : (c = v, p = ""), d = decodeURIComponent(c), f = decodeURIComponent(p), r(s, d) ? i(s[d]) ? s[d].push(f) : s[d] = [s[d], f] : s[d] = f } return s }; var i = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) } }, {}],
            7: [function(t, e) { "use strict";

                function r(t, e) { if (t.map) return t.map(e); for (var r = [], i = 0; i < t.length; i++) r.push(e(t[i], i)); return r } var i = function(t) { switch (typeof t) {
                        case "string":
                            return t;
                        case "boolean":
                            return t ? "true" : "false";
                        case "number":
                            return isFinite(t) ? t : "";
                        default:
                            return "" } };
                e.exports = function(t, e, s, a) { return e = e || "&", s = s || "=", null === t && (t = void 0), "object" == typeof t ? r(o(t), function(o) { var a = encodeURIComponent(i(o)) + s; return n(t[o]) ? r(t[o], function(t) { return a + encodeURIComponent(i(t)) }).join(e) : a + encodeURIComponent(i(t[o])) }).join(e) : a ? encodeURIComponent(i(a)) + s + encodeURIComponent(i(t)) : "" }; var n = Array.isArray || function(t) { return "[object Array]" === Object.prototype.toString.call(t) },
                    o = Object.keys || function(t) { var e = []; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.push(r); return e } }, {}],
            8: [function(t, e, r) { "use strict";
                r.decode = r.parse = t("./decode"), r.encode = r.stringify = t("./encode") }, { "./decode": 6, "./encode": 7 }],
            9: [function(t, e, r) {
                function i() { this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null }

                function n(t, e, r) { if (t && l(t) && t instanceof i) return t; var n = new i; return n.parse(t, e, r), n }

                function o(t) { return u(t) && (t = n(t)), t instanceof i ? t.format() : i.prototype.format.call(t) }

                function s(t, e) { return n(t, !1, !0).resolve(e) }

                function a(t, e) { return t ? n(t, !1, !0).resolveObject(e) : e }

                function u(t) { return "string" == typeof t }

                function l(t) { return "object" == typeof t && null !== t }

                function h(t) { return null === t }

                function c(t) { return null == t } var p = t("punycode");
                r.parse = n, r.resolve = s, r.resolveObject = a, r.format = o, r.Url = i; var d = /^([a-z0-9.+-]+:)/i,
                    f = /:[0-9]*$/,
                    v = ["<", ">", '"', "`", " ", "\r", "\n", "	"],
                    g = ["{", "}", "|", "\\", "^", "`"].concat(v),
                    m = ["'"].concat(g),
                    y = ["%", "/", "?", ";", "#"].concat(m),
                    x = ["/", "?", "#"],
                    b = 255,
                    _ = /^[a-z0-9A-Z_-]{0,63}$/,
                    T = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
                    E = { javascript: !0, "javascript:": !0 },
                    S = { javascript: !0, "javascript:": !0 },
                    w = { http: !0, https: !0, ftp: !0, gopher: !0, file: !0, "http:": !0, "https:": !0, "ftp:": !0, "gopher:": !0, "file:": !0 },
                    A = t("querystring");
                i.prototype.parse = function(t, e, r) { if (!u(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t); var i = t;
                    i = i.trim(); var n = d.exec(i); if (n) { n = n[0]; var o = n.toLowerCase();
                        this.protocol = o, i = i.substr(n.length) } if (r || n || i.match(/^\/\/[^@\/]+@[^@\/]+/)) { var s = "//" === i.substr(0, 2);!s || n && S[n] || (i = i.substr(2), this.slashes = !0) } if (!S[n] && (s || n && !w[n])) { for (var a = -1, l = 0; l < x.length; l++) { var h = i.indexOf(x[l]); - 1 !== h && (-1 === a || a > h) && (a = h) } var c, f;
                        f = -1 === a ? i.lastIndexOf("@") : i.lastIndexOf("@", a), -1 !== f && (c = i.slice(0, f), i = i.slice(f + 1), this.auth = decodeURIComponent(c)), a = -1; for (var l = 0; l < y.length; l++) { var h = i.indexOf(y[l]); - 1 !== h && (-1 === a || a > h) && (a = h) } - 1 === a && (a = i.length), this.host = i.slice(0, a), i = i.slice(a), this.parseHost(), this.hostname = this.hostname || ""; var v = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1]; if (!v)
                            for (var g = this.hostname.split(/\./), l = 0, C = g.length; C > l; l++) { var M = g[l]; if (M && !M.match(_)) { for (var R = "", F = 0, D = M.length; D > F; F++) R += M.charCodeAt(F) > 127 ? "x" : M[F]; if (!R.match(_)) { var P = g.slice(0, l),
                                            O = g.slice(l + 1),
                                            B = M.match(T);
                                        B && (P.push(B[1]), O.unshift(B[2])), O.length && (i = "/" + O.join(".") + i), this.hostname = P.join("."); break } } }
                        if (this.hostname = this.hostname.length > b ? "" : this.hostname.toLowerCase(), !v) { for (var L = this.hostname.split("."), I = [], l = 0; l < L.length; ++l) { var N = L[l];
                                I.push(N.match(/[^A-Za-z0-9_-]/) ? "xn--" + p.encode(N) : N) } this.hostname = I.join(".") } var U = this.port ? ":" + this.port : "",
                            k = this.hostname || "";
                        this.host = k + U, this.href += this.host, v && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== i[0] && (i = "/" + i)) } if (!E[o])
                        for (var l = 0, C = m.length; C > l; l++) { var j = m[l],
                                G = encodeURIComponent(j);
                            G === j && (G = escape(j)), i = i.split(j).join(G) }
                    var X = i.indexOf("#"); - 1 !== X && (this.hash = i.substr(X), i = i.slice(0, X)); var Y = i.indexOf("?"); if (-1 !== Y ? (this.search = i.substr(Y), this.query = i.substr(Y + 1), e && (this.query = A.parse(this.query)), i = i.slice(0, Y)) : e && (this.search = "", this.query = {}), i && (this.pathname = i), w[o] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) { var U = this.pathname || "",
                            N = this.search || "";
                        this.path = U + N } return this.href = this.format(), this }, i.prototype.format = function() { var t = this.auth || "";
                    t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@"); var e = this.protocol || "",
                        r = this.pathname || "",
                        i = this.hash || "",
                        n = !1,
                        o = "";
                    this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && l(this.query) && Object.keys(this.query).length && (o = A.stringify(this.query)); var s = this.search || o && "?" + o || ""; return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || w[e]) && n !== !1 ? (n = "//" + (n || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : n || (n = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), r = r.replace(/[?#]/g, function(t) { return encodeURIComponent(t) }), s = s.replace("#", "%23"), e + n + r + s + i }, i.prototype.resolve = function(t) { return this.resolveObject(n(t, !1, !0)).format() }, i.prototype.resolveObject = function(t) { if (u(t)) { var e = new i;
                        e.parse(t, !1, !0), t = e } var r = new i; if (Object.keys(this).forEach(function(t) { r[t] = this[t] }, this), r.hash = t.hash, "" === t.href) return r.href = r.format(), r; if (t.slashes && !t.protocol) return Object.keys(t).forEach(function(e) { "protocol" !== e && (r[e] = t[e]) }), w[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r; if (t.protocol && t.protocol !== r.protocol) { if (!w[t.protocol]) return Object.keys(t).forEach(function(e) { r[e] = t[e] }), r.href = r.format(), r; if (r.protocol = t.protocol, t.host || S[t.protocol]) r.pathname = t.pathname;
                        else { for (var n = (t.pathname || "").split("/"); n.length && !(t.host = n.shift()););
                            t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== n[0] && n.unshift(""), n.length < 2 && n.unshift(""), r.pathname = n.join("/") } if (r.search = t.search, r.query = t.query, r.host = t.host || "", r.auth = t.auth, r.hostname = t.hostname || t.host, r.port = t.port, r.pathname || r.search) { var o = r.pathname || "",
                                s = r.search || "";
                            r.path = o + s } return r.slashes = r.slashes || t.slashes, r.href = r.format(), r } var a = r.pathname && "/" === r.pathname.charAt(0),
                        l = t.host || t.pathname && "/" === t.pathname.charAt(0),
                        p = l || a || r.host && t.pathname,
                        d = p,
                        f = r.pathname && r.pathname.split("/") || [],
                        n = t.pathname && t.pathname.split("/") || [],
                        v = r.protocol && !w[r.protocol]; if (v && (r.hostname = "", r.port = null, r.host && ("" === f[0] ? f[0] = r.host : f.unshift(r.host)), r.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === n[0] ? n[0] = t.host : n.unshift(t.host)), t.host = null), p = p && ("" === n[0] || "" === f[0])), l) r.host = t.host || "" === t.host ? t.host : r.host, r.hostname = t.hostname || "" === t.hostname ? t.hostname : r.hostname, r.search = t.search, r.query = t.query, f = n;
                    else if (n.length) f || (f = []), f.pop(), f = f.concat(n), r.search = t.search, r.query = t.query;
                    else if (!c(t.search)) { if (v) { r.hostname = r.host = f.shift(); var g = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                            g && (r.auth = g.shift(), r.host = r.hostname = g.shift()) } return r.search = t.search, r.query = t.query, h(r.pathname) && h(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r } if (!f.length) return r.pathname = null, r.path = r.search ? "/" + r.search : null, r.href = r.format(), r; for (var m = f.slice(-1)[0], y = (r.host || t.host) && ("." === m || ".." === m) || "" === m, x = 0, b = f.length; b >= 0; b--) m = f[b], "." == m ? f.splice(b, 1) : ".." === m ? (f.splice(b, 1), x++) : x && (f.splice(b, 1), x--); if (!p && !d)
                        for (; x--; x) f.unshift("..");!p || "" === f[0] || f[0] && "/" === f[0].charAt(0) || f.unshift(""), y && "/" !== f.join("/").substr(-1) && f.push(""); var _ = "" === f[0] || f[0] && "/" === f[0].charAt(0); if (v) { r.hostname = r.host = _ ? "" : f.length ? f.shift() : ""; var g = r.host && r.host.indexOf("@") > 0 ? r.host.split("@") : !1;
                        g && (r.auth = g.shift(), r.host = r.hostname = g.shift()) } return p = p || r.host && f.length, p && !_ && f.unshift(""), f.length ? r.pathname = f.join("/") : (r.pathname = null, r.path = null), h(r.pathname) && h(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = t.auth || r.auth, r.slashes = r.slashes || t.slashes, r.href = r.format(), r }, i.prototype.parseHost = function() { var t = this.host,
                        e = f.exec(t);
                    e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t) } }, { punycode: 5, querystring: 8 }],
            10: [function(t, e) { "use strict";

                function r(t, e, r) { r = r || 2; var s = e && e.length,
                        a = s ? e[0] * r : t.length,
                        u = n(t, i(t, 0, a, r, !0)),
                        h = []; if (!u) return h; var c, p, d, f, v, g, m; if (s && (u = l(t, e, u, r)), t.length > 80 * r) { c = d = t[0], p = f = t[1]; for (var y = r; a > y; y += r) v = t[y], g = t[y + 1], c > v && (c = v), p > g && (p = g), v > d && (d = v), g > f && (f = g);
                        m = Math.max(d - c, f - p) } return o(t, u, h, r, c, p, m), h }

                function i(t, e, r, i, n) { var o, s, a, u = 0; for (o = e, s = r - i; r > o; o += i) u += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o; if (n === u > 0)
                        for (o = e; r > o; o += i) a = S(o, a);
                    else
                        for (o = r - i; o >= e; o -= i) a = S(o, a); return a }

                function n(t, e, r) { r || (r = e); var i, n = e;
                    do
                        if (i = !1, y(t, n.i, n.next.i) || 0 === m(t, n.prev.i, n.i, n.next.i)) { if (n.prev.next = n.next, n.next.prev = n.prev, n.prevZ && (n.prevZ.nextZ = n.nextZ), n.nextZ && (n.nextZ.prevZ = n.prevZ), n = r = n.prev, n === n.next) return null;
                            i = !0 } else n = n.next; while (i || n !== r); return r }

                function o(t, e, r, i, l, h, c, d) { if (e) { d || void 0 === l || p(t, e, l, h, c); for (var f, v, g = e; e.prev !== e.next;)
                            if (f = e.prev, v = e.next, s(t, e, l, h, c)) r.push(f.i / i), r.push(e.i / i), r.push(v.i / i), v.prev = f, f.next = v, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ), e = v.next, g = v.next;
                            else if (e = v, e === g) { d ? 1 === d ? (e = a(t, e, r, i), o(t, e, r, i, l, h, c, 2)) : 2 === d && u(t, e, r, i, l, h, c) : o(t, n(t, e), r, i, l, h, c, 1); break } } }

                function s(t, e, r, i, n) { var o = e.prev.i,
                        s = e.i,
                        a = e.next.i,
                        u = t[o],
                        l = t[o + 1],
                        h = t[s],
                        c = t[s + 1],
                        p = t[a],
                        d = t[a + 1],
                        v = u * c - l * h,
                        g = u * d - l * p,
                        m = p * c - d * h,
                        y = v - g - m; if (0 >= y) return !1; var x, b, _, T, E, S, w, A = d - l,
                        C = u - p,
                        M = l - c,
                        R = h - u; if (void 0 !== r) { var F = h > u ? p > u ? u : p : p > h ? h : p,
                            D = c > l ? d > l ? l : d : d > c ? c : d,
                            P = u > h ? u > p ? u : p : h > p ? h : p,
                            O = l > c ? l > d ? l : d : c > d ? c : d,
                            B = f(F, D, r, i, n),
                            L = f(P, O, r, i, n); for (w = e.nextZ; w && w.z <= L;)
                            if (x = w.i, w = w.nextZ, x !== o && x !== a && (b = t[x], _ = t[x + 1], T = A * b + C * _ - g, T >= 0 && (E = M * b + R * _ + v, E >= 0 && (S = y - T - E, S >= 0 && (T && E || T && S || E && S))))) return !1; for (w = e.prevZ; w && w.z >= B;)
                            if (x = w.i, w = w.prevZ, x !== o && x !== a && (b = t[x], _ = t[x + 1], T = A * b + C * _ - g, T >= 0 && (E = M * b + R * _ + v, E >= 0 && (S = y - T - E, S >= 0 && (T && E || T && S || E && S))))) return !1 } else
                        for (w = e.next.next; w !== e.prev;)
                            if (x = w.i, w = w.next, b = t[x], _ = t[x + 1], T = A * b + C * _ - g, T >= 0 && (E = M * b + R * _ + v, E >= 0 && (S = y - T - E, S >= 0 && (T && E || T && S || E && S)))) return !1; return !0 }

                function a(t, e, r, i) { var n = e;
                    do { var o = n.prev,
                            s = n.next.next; if (o.i !== s.i && x(t, o.i, n.i, n.next.i, s.i) && _(t, o, s) && _(t, s, o)) { r.push(o.i / i), r.push(n.i / i), r.push(s.i / i), o.next = s, s.prev = o; var a = n.prevZ,
                                u = n.nextZ && n.nextZ.nextZ;
                            a && (a.nextZ = u), u && (u.prevZ = a), n = e = s } n = n.next } while (n !== e); return n }

                function u(t, e, r, i, s, a, u) { var l = e;
                    do { for (var h = l.next.next; h !== l.prev;) { if (l.i !== h.i && g(t, l, h)) { var c = E(l, h); return l = n(t, l, l.next), c = n(t, c, c.next), o(t, l, r, i, s, a, u), void o(t, c, r, i, s, a, u) } h = h.next } l = l.next } while (l !== e) }

                function l(t, e, r, o) { var s, a, u, l, c, p = []; for (s = 0, a = e.length; a > s; s++) u = e[s] * o, l = a - 1 > s ? e[s + 1] * o : t.length, c = n(t, i(t, u, l, o, !1)), c && p.push(v(t, c)); for (p.sort(function(e, r) { return t[e.i] - t[r.i] }), s = 0; s < p.length; s++) h(t, p[s], r), r = n(t, r, r.next); return r }

                function h(t, e, r) { if (r = c(t, e, r)) { var i = E(r, e);
                        n(t, i, i.next) } }

                function c(t, e, r) { var i, n, o, s = r,
                        a = e.i,
                        u = t[a],
                        l = t[a + 1],
                        h = -1 / 0;
                    do { if (n = s.i, o = s.next.i, l <= t[n + 1] && l >= t[o + 1]) { var c = t[n] + (l - t[n + 1]) * (t[o] - t[n]) / (t[o + 1] - t[n + 1]);
                            u >= c && c > h && (h = c, i = t[n] < t[o] ? s : s.next) } s = s.next } while (s !== r); if (!i) return null; var p, d, f, v, g, m, y = t[i.i],
                        x = t[i.i + 1],
                        b = u * x - l * y,
                        T = u * l - l * h,
                        E = l - l,
                        S = u - h,
                        w = l - x,
                        A = y - u,
                        C = b - T - (h * x - l * y),
                        M = 0 >= C ? -1 : 1,
                        R = i,
                        F = 1 / 0; for (s = i.next; s !== R;) p = t[s.i], d = t[s.i + 1], f = u - p, f >= 0 && p >= y && (v = (E * p + S * d - T) * M, v >= 0 && (g = (w * p + A * d + b) * M, g >= 0 && C * M - v - g >= 0 && (m = Math.abs(l - d) / f, F > m && _(t, s, e) && (i = s, F = m)))), s = s.next; return i }

                function p(t, e, r, i, n) { var o = e;
                    do null === o.z && (o.z = f(t[o.i], t[o.i + 1], r, i, n)), o.prevZ = o.prev, o.nextZ = o.next, o = o.next; while (o !== e);
                    o.prevZ.nextZ = null, o.prevZ = null, d(o) }

                function d(t) { var e, r, i, n, o, s, a, u, l = 1;
                    do { for (r = t, t = null, o = null, s = 0; r;) { for (s++, i = r, a = 0, e = 0; l > e && (a++, i = i.nextZ, i); e++); for (u = l; a > 0 || u > 0 && i;) 0 === a ? (n = i, i = i.nextZ, u--) : 0 !== u && i ? r.z <= i.z ? (n = r, r = r.nextZ, a--) : (n = i, i = i.nextZ, u--) : (n = r, r = r.nextZ, a--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                            r = i } o.nextZ = null, l *= 2 } while (s > 1); return t }

                function f(t, e, r, i, n) { return t = 1e3 * (t - r) / n, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 1e3 * (e - i) / n, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1 }

                function v(t, e) { var r = e,
                        i = e;
                    do t[r.i] < t[i.i] && (i = r), r = r.next; while (r !== e); return i }

                function g(t, e, r) { return !b(t, e, e.i, r.i) && _(t, e, r) && _(t, r, e) && T(t, e, e.i, r.i) }

                function m(t, e, r, i) { var n = (t[r + 1] - t[e + 1]) * (t[i] - t[r]) - (t[r] - t[e]) * (t[i + 1] - t[r + 1]); return n > 0 ? 1 : 0 > n ? -1 : 0 }

                function y(t, e, r) { return t[e] === t[r] && t[e + 1] === t[r + 1] }

                function x(t, e, r, i, n) { return m(t, e, r, i) !== m(t, e, r, n) && m(t, i, n, e) !== m(t, i, n, r) }

                function b(t, e, r, i) { var n = e;
                    do { var o = n.i,
                            s = n.next.i; if (o !== r && s !== r && o !== i && s !== i && x(t, o, s, r, i)) return !0;
                        n = n.next } while (n !== e); return !1 }

                function _(t, e, r) { return -1 === m(t, e.prev.i, e.i, e.next.i) ? -1 !== m(t, e.i, r.i, e.next.i) && -1 !== m(t, e.i, e.prev.i, r.i) : -1 === m(t, e.i, r.i, e.prev.i) || -1 === m(t, e.i, e.next.i, r.i) }

                function T(t, e, r, i) { var n = e,
                        o = !1,
                        s = (t[r] + t[i]) / 2,
                        a = (t[r + 1] + t[i + 1]) / 2;
                    do { var u = n.i,
                            l = n.next.i;
                        t[u + 1] > a != t[l + 1] > a && s < (t[l] - t[u]) * (a - t[u + 1]) / (t[l + 1] - t[u + 1]) + t[u] && (o = !o), n = n.next } while (n !== e); return o }

                function E(t, e) { var r = new w(t.i),
                        i = new w(e.i),
                        n = t.next,
                        o = e.prev; return t.next = e, e.prev = t, r.next = n, n.prev = r, i.next = r, r.prev = i, o.next = i, i.prev = o, i }

                function S(t, e) { var r = new w(t); return e ? (r.next = e.next, r.prev = e, e.next.prev = r, e.next = r) : (r.prev = r, r.next = r), r }

                function w(t) { this.i = t, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null } e.exports = r }, {}],
            11: [function(t, e) { "use strict";

                function r(t, e, r) { this.fn = t, this.context = e, this.once = r || !1 }

                function i() {} var n = "function" != typeof Object.create ? "~" : !1;
                i.prototype._events = void 0, i.prototype.listeners = function(t, e) { var r = n ? n + t : t,
                        i = this._events && this._events[r]; if (e) return !!i; if (!i) return []; if (this._events[r].fn) return [this._events[r].fn]; for (var o = 0, s = this._events[r].length, a = new Array(s); s > o; o++) a[o] = this._events[r][o].fn; return a }, i.prototype.emit = function(t, e, r, i, o, s) { var a = n ? n + t : t; if (!this._events || !this._events[a]) return !1; var u, l, h = this._events[a],
                        c = arguments.length; if ("function" == typeof h.fn) { switch (h.once && this.removeListener(t, h.fn, void 0, !0), c) {
                            case 1:
                                return h.fn.call(h.context), !0;
                            case 2:
                                return h.fn.call(h.context, e), !0;
                            case 3:
                                return h.fn.call(h.context, e, r), !0;
                            case 4:
                                return h.fn.call(h.context, e, r, i), !0;
                            case 5:
                                return h.fn.call(h.context, e, r, i, o), !0;
                            case 6:
                                return h.fn.call(h.context, e, r, i, o, s), !0 } for (l = 1, u = new Array(c - 1); c > l; l++) u[l - 1] = arguments[l];
                        h.fn.apply(h.context, u) } else { var p, d = h.length; for (l = 0; d > l; l++) switch (h[l].once && this.removeListener(t, h[l].fn, void 0, !0), c) {
                            case 1:
                                h[l].fn.call(h[l].context); break;
                            case 2:
                                h[l].fn.call(h[l].context, e); break;
                            case 3:
                                h[l].fn.call(h[l].context, e, r); break;
                            default:
                                if (!u)
                                    for (p = 1, u = new Array(c - 1); c > p; p++) u[p - 1] = arguments[p];
                                h[l].fn.apply(h[l].context, u) } } return !0 }, i.prototype.on = function(t, e, i) { var o = new r(e, i || this),
                        s = n ? n + t : t; return this._events || (this._events = n ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], o] : this._events[s].push(o) : this._events[s] = o, this }, i.prototype.once = function(t, e, i) { var o = new r(e, i || this, !0),
                        s = n ? n + t : t; return this._events || (this._events = n ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], o] : this._events[s].push(o) : this._events[s] = o, this }, i.prototype.removeListener = function(t, e, r, i) { var o = n ? n + t : t; if (!this._events || !this._events[o]) return this; var s = this._events[o],
                        a = []; if (e)
                        if (s.fn)(s.fn !== e || i && !s.once || r && s.context !== r) && a.push(s);
                        else
                            for (var u = 0, l = s.length; l > u; u++)(s[u].fn !== e || i && !s[u].once || r && s[u].context !== r) && a.push(s[u]); return a.length ? this._events[o] = 1 === a.length ? a[0] : a : delete this._events[o], this }, i.prototype.removeAllListeners = function(t) { return this._events ? (t ? delete this._events[n ? n + t : t] : this._events = n ? {} : Object.create(null), this) : this }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() { return this }, i.prefixed = n, e.exports = i }, {}],
            12: [function(t, e) { "use strict";

                function r(t) { if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(t) } e.exports = Object.assign || function(t) { for (var e, i, n = r(t), o = 1; o < arguments.length; o++) { e = arguments[o], i = Object.keys(Object(e)); for (var s = 0; s < i.length; s++) n[i[s]] = e[i[s]] } return n } }, {}],
            13: [function(e, r) {
                (function(e) {! function() {
                        function i(t) { var e = !1; return function() { if (e) throw new Error("Callback was already called.");
                                e = !0, t.apply(n, arguments) } } var n, o, s = {};
                        n = this, null != n && (o = n.async), s.noConflict = function() { return n.async = o, s }; var a = Object.prototype.toString,
                            u = Array.isArray || function(t) { return "[object Array]" === a.call(t) },
                            l = function(t, e) { if (t.forEach) return t.forEach(e); for (var r = 0; r < t.length; r += 1) e(t[r], r, t) },
                            h = function(t, e) { if (t.map) return t.map(e); var r = []; return l(t, function(t, i, n) { r.push(e(t, i, n)) }), r },
                            c = function(t, e, r) { return t.reduce ? t.reduce(e, r) : (l(t, function(t, i, n) { r = e(r, t, i, n) }), r) },
                            p = function(t) { if (Object.keys) return Object.keys(t); var e = []; for (var r in t) t.hasOwnProperty(r) && e.push(r); return e }; "undefined" != typeof e && e.nextTick ? (s.nextTick = e.nextTick, s.setImmediate = "undefined" != typeof setImmediate ? function(t) { setImmediate(t) } : s.nextTick) : "function" == typeof setImmediate ? (s.nextTick = function(t) { setImmediate(t) }, s.setImmediate = s.nextTick) : (s.nextTick = function(t) { setTimeout(t, 0) }, s.setImmediate = s.nextTick), s.each = function(t, e, r) {
                            function n(e) { e ? (r(e), r = function() {}) : (o += 1, o >= t.length && r()) } if (r = r || function() {}, !t.length) return r(); var o = 0;
                            l(t, function(t) { e(t, i(n)) }) }, s.forEach = s.each, s.eachSeries = function(t, e, r) { if (r = r || function() {}, !t.length) return r(); var i = 0,
                                n = function() { e(t[i], function(e) { e ? (r(e), r = function() {}) : (i += 1, i >= t.length ? r() : n()) }) };
                            n() }, s.forEachSeries = s.eachSeries, s.eachLimit = function(t, e, r, i) { var n = d(e);
                            n.apply(null, [t, r, i]) }, s.forEachLimit = s.eachLimit; var d = function(t) { return function(e, r, i) { if (i = i || function() {}, !e.length || 0 >= t) return i(); var n = 0,
                                        o = 0,
                                        s = 0;! function a() { if (n >= e.length) return i(); for (; t > s && o < e.length;) o += 1, s += 1, r(e[o - 1], function(t) { t ? (i(t), i = function() {}) : (n += 1, s -= 1, n >= e.length ? i() : a()) }) }() } },
                            f = function(t) { return function() { var e = Array.prototype.slice.call(arguments); return t.apply(null, [s.each].concat(e)) } },
                            v = function(t, e) { return function() { var r = Array.prototype.slice.call(arguments); return e.apply(null, [d(t)].concat(r)) } },
                            g = function(t) { return function() { var e = Array.prototype.slice.call(arguments); return t.apply(null, [s.eachSeries].concat(e)) } },
                            m = function(t, e, r, i) { if (e = h(e, function(t, e) { return { index: e, value: t } }), i) { var n = [];
                                    t(e, function(t, e) { r(t.value, function(r, i) { n[t.index] = i, e(r) }) }, function(t) { i(t, n) }) } else t(e, function(t, e) { r(t.value, function(t) { e(t) }) }) };
                        s.map = f(m), s.mapSeries = g(m), s.mapLimit = function(t, e, r, i) { return y(e)(t, r, i) }; var y = function(t) { return v(t, m) };
                        s.reduce = function(t, e, r, i) { s.eachSeries(t, function(t, i) { r(e, t, function(t, r) { e = r, i(t) }) }, function(t) { i(t, e) }) }, s.inject = s.reduce, s.foldl = s.reduce, s.reduceRight = function(t, e, r, i) { var n = h(t, function(t) { return t }).reverse();
                            s.reduce(n, e, r, i) }, s.foldr = s.reduceRight; var x = function(t, e, r, i) { var n = [];
                            e = h(e, function(t, e) { return { index: e, value: t } }), t(e, function(t, e) { r(t.value, function(r) { r && n.push(t), e() }) }, function() { i(h(n.sort(function(t, e) { return t.index - e.index }), function(t) { return t.value })) }) };
                        s.filter = f(x), s.filterSeries = g(x), s.select = s.filter, s.selectSeries = s.filterSeries; var b = function(t, e, r, i) { var n = [];
                            e = h(e, function(t, e) { return { index: e, value: t } }), t(e, function(t, e) { r(t.value, function(r) { r || n.push(t), e() }) }, function() { i(h(n.sort(function(t, e) { return t.index - e.index }), function(t) { return t.value })) }) };
                        s.reject = f(b), s.rejectSeries = g(b); var _ = function(t, e, r, i) { t(e, function(t, e) { r(t, function(r) { r ? (i(t), i = function() {}) : e() }) }, function() { i() }) };
                        s.detect = f(_), s.detectSeries = g(_), s.some = function(t, e, r) { s.each(t, function(t, i) { e(t, function(t) { t && (r(!0), r = function() {}), i() }) }, function() { r(!1) }) }, s.any = s.some, s.every = function(t, e, r) { s.each(t, function(t, i) { e(t, function(t) { t || (r(!1), r = function() {}), i() }) }, function() { r(!0) }) }, s.all = s.every, s.sortBy = function(t, e, r) { s.map(t, function(t, r) { e(t, function(e, i) { e ? r(e) : r(null, { value: t, criteria: i }) }) }, function(t, e) { if (t) return r(t); var i = function(t, e) { var r = t.criteria,
                                        i = e.criteria; return i > r ? -1 : r > i ? 1 : 0 };
                                r(null, h(e.sort(i), function(t) { return t.value })) }) }, s.auto = function(t, e) { e = e || function() {}; var r = p(t),
                                i = r.length; if (!i) return e(); var n = {},
                                o = [],
                                a = function(t) { o.unshift(t) },
                                h = function(t) { for (var e = 0; e < o.length; e += 1)
                                        if (o[e] === t) return void o.splice(e, 1) },
                                d = function() { i--, l(o.slice(0), function(t) { t() }) };
                            a(function() { if (!i) { var t = e;
                                    e = function() {}, t(null, n) } }), l(r, function(r) { var i = u(t[r]) ? t[r] : [t[r]],
                                    o = function(t) { var i = Array.prototype.slice.call(arguments, 1); if (i.length <= 1 && (i = i[0]), t) { var o = {};
                                            l(p(n), function(t) { o[t] = n[t] }), o[r] = i, e(t, o), e = function() {} } else n[r] = i, s.setImmediate(d) },
                                    f = i.slice(0, Math.abs(i.length - 1)) || [],
                                    v = function() { return c(f, function(t, e) { return t && n.hasOwnProperty(e) }, !0) && !n.hasOwnProperty(r) }; if (v()) i[i.length - 1](o, n);
                                else { var g = function() { v() && (h(g), i[i.length - 1](o, n)) };
                                    a(g) } }) }, s.retry = function(t, e, r) { var i = 5,
                                n = []; "function" == typeof t && (r = e, e = t, t = i), t = parseInt(t, 10) || i; var o = function(i, o) { for (var a = function(t, e) { return function(r) { t(function(t, i) { r(!t || e, { err: t, result: i }) }, o) } }; t;) n.push(a(e, !(t -= 1)));
                                s.series(n, function(t, e) { e = e[e.length - 1], (i || r)(e.err, e.result) }) }; return r ? o() : o }, s.waterfall = function(t, e) { if (e = e || function() {}, !u(t)) { var r = new Error("First argument to waterfall must be an array of functions"); return e(r) } if (!t.length) return e(); var i = function(t) { return function(r) { if (r) e.apply(null, arguments), e = function() {};
                                    else { var n = Array.prototype.slice.call(arguments, 1),
                                            o = t.next();
                                        n.push(o ? i(o) : e), s.setImmediate(function() { t.apply(null, n) }) } } };
                            i(s.iterator(t))() }; var T = function(t, e, r) { if (r = r || function() {}, u(e)) t.map(e, function(t, e) { t && t(function(t) { var r = Array.prototype.slice.call(arguments, 1);
                                    r.length <= 1 && (r = r[0]), e.call(null, t, r) }) }, r);
                            else { var i = {};
                                t.each(p(e), function(t, r) { e[t](function(e) { var n = Array.prototype.slice.call(arguments, 1);
                                        n.length <= 1 && (n = n[0]), i[t] = n, r(e) }) }, function(t) { r(t, i) }) } };
                        s.parallel = function(t, e) { T({ map: s.map, each: s.each }, t, e) }, s.parallelLimit = function(t, e, r) { T({ map: y(e), each: d(e) }, t, r) }, s.series = function(t, e) { if (e = e || function() {}, u(t)) s.mapSeries(t, function(t, e) { t && t(function(t) { var r = Array.prototype.slice.call(arguments, 1);
                                    r.length <= 1 && (r = r[0]), e.call(null, t, r) }) }, e);
                            else { var r = {};
                                s.eachSeries(p(t), function(e, i) { t[e](function(t) { var n = Array.prototype.slice.call(arguments, 1);
                                        n.length <= 1 && (n = n[0]), r[e] = n, i(t) }) }, function(t) { e(t, r) }) } }, s.iterator = function(t) { var e = function(r) { var i = function() { return t.length && t[r].apply(null, arguments), i.next() }; return i.next = function() { return r < t.length - 1 ? e(r + 1) : null }, i }; return e(0) }, s.apply = function(t) { var e = Array.prototype.slice.call(arguments, 1); return function() { return t.apply(null, e.concat(Array.prototype.slice.call(arguments))) } }; var E = function(t, e, r, i) { var n = [];
                            t(e, function(t, e) { r(t, function(t, r) { n = n.concat(r || []), e(t) }) }, function(t) { i(t, n) }) };
                        s.concat = f(E), s.concatSeries = g(E), s.whilst = function(t, e, r) { t() ? e(function(i) { return i ? r(i) : void s.whilst(t, e, r) }) : r() }, s.doWhilst = function(t, e, r) { t(function(i) { if (i) return r(i); var n = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, n) ? s.doWhilst(t, e, r) : r() }) }, s.until = function(t, e, r) { t() ? r() : e(function(i) { return i ? r(i) : void s.until(t, e, r) }) }, s.doUntil = function(t, e, r) { t(function(i) { if (i) return r(i); var n = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, n) ? r() : s.doUntil(t, e, r) }) }, s.queue = function(t, e) {
                            function r(t, e, r, i) { return t.started || (t.started = !0), u(e) || (e = [e]), 0 == e.length ? s.setImmediate(function() { t.drain && t.drain() }) : void l(e, function(e) { var n = { data: e, callback: "function" == typeof i ? i : null };
                                    r ? t.tasks.unshift(n) : t.tasks.push(n), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process) }) } void 0 === e && (e = 1); var n = 0,
                                o = { tasks: [], concurrency: e, saturated: null, empty: null, drain: null, started: !1, paused: !1, push: function(t, e) { r(o, t, !1, e) }, kill: function() { o.drain = null, o.tasks = [] }, unshift: function(t, e) { r(o, t, !0, e) }, process: function() { if (!o.paused && n < o.concurrency && o.tasks.length) { var e = o.tasks.shift();
                                            o.empty && 0 === o.tasks.length && o.empty(), n += 1; var r = function() { n -= 1, e.callback && e.callback.apply(e, arguments), o.drain && o.tasks.length + n === 0 && o.drain(), o.process() },
                                                s = i(r);
                                            t(e.data, s) } }, length: function() { return o.tasks.length }, running: function() { return n }, idle: function() { return o.tasks.length + n === 0 }, pause: function() { o.paused !== !0 && (o.paused = !0, o.process()) }, resume: function() { o.paused !== !1 && (o.paused = !1, o.process()) } }; return o }, s.priorityQueue = function(t, e) {
                            function r(t, e) { return t.priority - e.priority }

                            function i(t, e, r) { for (var i = -1, n = t.length - 1; n > i;) { var o = i + (n - i + 1 >>> 1);
                                    r(e, t[o]) >= 0 ? i = o : n = o - 1 } return i }

                            function n(t, e, n, o) { return t.started || (t.started = !0), u(e) || (e = [e]), 0 == e.length ? s.setImmediate(function() { t.drain && t.drain() }) : void l(e, function(e) { var a = { data: e, priority: n, callback: "function" == typeof o ? o : null };
                                    t.tasks.splice(i(t.tasks, a, r) + 1, 0, a), t.saturated && t.tasks.length === t.concurrency && t.saturated(), s.setImmediate(t.process) }) } var o = s.queue(t, e); return o.push = function(t, e, r) { n(o, t, e, r) }, delete o.unshift, o }, s.cargo = function(t, e) { var r = !1,
                                i = [],
                                n = { tasks: i, payload: e, saturated: null, empty: null, drain: null, drained: !0, push: function(t, r) { u(t) || (t = [t]), l(t, function(t) { i.push({ data: t, callback: "function" == typeof r ? r : null }), n.drained = !1, n.saturated && i.length === e && n.saturated() }), s.setImmediate(n.process) }, process: function o() { if (!r) { if (0 === i.length) return n.drain && !n.drained && n.drain(), void(n.drained = !0); var s = "number" == typeof e ? i.splice(0, e) : i.splice(0, i.length),
                                                a = h(s, function(t) { return t.data });
                                            n.empty && n.empty(), r = !0, t(a, function() { r = !1; var t = arguments;
                                                l(s, function(e) { e.callback && e.callback.apply(null, t) }), o() }) } }, length: function() { return i.length }, running: function() { return r } }; return n }; var S = function(t) { return function(e) { var r = Array.prototype.slice.call(arguments, 1);
                                e.apply(null, r.concat([function(e) { var r = Array.prototype.slice.call(arguments, 1); "undefined" != typeof console && (e ? console.error && console.error(e) : console[t] && l(r, function(e) { console[t](e) })) }])) } };
                        s.log = S("log"), s.dir = S("dir"), s.memoize = function(t, e) { var r = {},
                                i = {};
                            e = e || function(t) { return t }; var n = function() { var n = Array.prototype.slice.call(arguments),
                                    o = n.pop(),
                                    a = e.apply(null, n);
                                a in r ? s.nextTick(function() { o.apply(null, r[a]) }) : a in i ? i[a].push(o) : (i[a] = [o], t.apply(null, n.concat([function() { r[a] = arguments; var t = i[a];
                                    delete i[a]; for (var e = 0, n = t.length; n > e; e++) t[e].apply(null, arguments) }]))) }; return n.memo = r, n.unmemoized = t, n }, s.unmemoize = function(t) { return function() { return (t.unmemoized || t).apply(null, arguments) } }, s.times = function(t, e, r) { for (var i = [], n = 0; t > n; n++) i.push(n); return s.map(i, e, r) }, s.timesSeries = function(t, e, r) { for (var i = [], n = 0; t > n; n++) i.push(n); return s.mapSeries(i, e, r) }, s.seq = function() { var t = arguments; return function() { var e = this,
                                    r = Array.prototype.slice.call(arguments),
                                    i = r.pop();
                                s.reduce(t, r, function(t, r, i) { r.apply(e, t.concat([function() { var t = arguments[0],
                                            e = Array.prototype.slice.call(arguments, 1);
                                        i(t, e) }])) }, function(t, r) { i.apply(e, [t].concat(r)) }) } }, s.compose = function() { return s.seq.apply(null, Array.prototype.reverse.call(arguments)) }; var w = function(t, e) { var r = function() { var r = this,
                                    i = Array.prototype.slice.call(arguments),
                                    n = i.pop(); return t(e, function(t, e) { t.apply(r, i.concat([e])) }, n) }; if (arguments.length > 2) { var i = Array.prototype.slice.call(arguments, 2); return r.apply(this, i) } return r };
                        s.applyEach = f(w), s.applyEachSeries = g(w), s.forever = function(t, e) {
                            function r(i) { if (i) { if (e) return e(i); throw i } t(r) } r() }, "undefined" != typeof r && r.exports ? r.exports = s : "undefined" != typeof t && t.amd ? t([], function() { return s }) : n.async = s }() }).call(this, e("_process")) }, { _process: 4 }],
            14: [function(t, e, r) { arguments[4][11][0].apply(r, arguments) }, { dup: 11 }],
            15: [function(t, e) {
                function r(t, e) { s.call(this), e = e || 10, this.baseUrl = t || "", this.progress = 0, this.loading = !1, this._progressChunk = 0, this._beforeMiddleware = [], this._afterMiddleware = [], this._boundLoadResource = this._loadResource.bind(this), this._boundOnLoad = this._onLoad.bind(this), this._buffer = [], this._numToLoad = 0, this._queue = i.queue(this._boundLoadResource, e), this.resources = {} }
                var i = t("async"),
                    n = t("url"),
                    o = t("./Resource"),
                    s = t("eventemitter3");
                r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.add = r.prototype.enqueue = function(t, e, r, i) { if (Array.isArray(t)) { for (var n = 0; n < t.length; ++n) this.add(t[n]); return this } if ("object" == typeof t && (i = e || t.callback || t.onComplete, r = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (i = r, r = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader."); if ("function" == typeof r && (i = r, r = null), this.resources[t]) throw new Error('Resource with name "' + t + '" already exists.'); return e = this._handleBaseUrl(e), this.resources[t] = new o(t, e, r), "function" == typeof i && this.resources[t].once("afterMiddleware", i), this._numToLoad++, this._queue.started ? (this._queue.push(this.resources[t]), this._progressChunk = (100 - this.progress) / (this._queue.length() + this._queue.running())) : (this._buffer.push(this.resources[t]), this._progressChunk = 100 / this._buffer.length), this }, r.prototype._handleBaseUrl = function(t) { var e = n.parse(t); return e.protocol || 0 === e.pathname.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && t.lastIndexOf("/") !== t.length - 1 ? this.baseUrl + "/" + t : this.baseUrl + t }, r.prototype.before = r.prototype.pre = function(t) { return this._beforeMiddleware.push(t), this }, r.prototype.after = r.prototype.use = function(t) { return this._afterMiddleware.push(t), this }, r.prototype.reset = function() { this.progress = 0, this.loading = !1, this._progressChunk = 0, this._buffer.length = 0, this._numToLoad = 0, this._queue.kill(), this._queue.started = !1, this.resources = {} }, r.prototype.load = function(t) { if ("function" == typeof t && this.once("complete", t), this._queue.started) return this;
                    this.emit("start", this); for (var e = 0; e < this._buffer.length; ++e) this._queue.push(this._buffer[e]); return this._buffer.length = 0, this }, r.prototype._loadResource = function(t, e) {
                    var r = this;
                    t._dequeue = e, this._runMiddleware(t, this._beforeMiddleware, function() { t.load(r._boundOnLoad) })
                }, r.prototype._onComplete = function() { this.emit("complete", this, this.resources) }, r.prototype._onLoad = function(t) { this.progress += this._progressChunk, this.emit("progress", this, t), t.error ? this.emit("error", t.error, this, t) : this.emit("load", this, t), this._runMiddleware(t, this._afterMiddleware, function() { t.emit("afterMiddleware", t), this._numToLoad--, 0 === this._numToLoad && this._onComplete() }), t._dequeue() }, r.prototype._runMiddleware = function(t, e, r) { var n = this;
                    i.eachSeries(e, function(e, r) { e.call(n, t, r) }, r.bind(this, t)) }, r.LOAD_TYPE = o.LOAD_TYPE, r.XHR_READY_STATE = o.XHR_READY_STATE, r.XHR_RESPONSE_TYPE = o.XHR_RESPONSE_TYPE
            }, { "./Resource": 16, async: 13, eventemitter3: 14, url: 9 }],
            16: [function(t, e) {
                function r(t, e, r) { if (o.call(this), r = r || {}, "string" != typeof t || "string" != typeof e) throw new Error("Both name and url are required for constructing a resource.");
                    this.name = t, this.url = e, this.isDataUrl = 0 === this.url.indexOf("data:"), this.data = null, this.crossOrigin = r.crossOrigin === !0 ? "anonymous" : null, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.error = null, this.xhr = null, this.isJson = !1, this.isXml = !1, this.isImage = !1, this.isAudio = !1, this.isVideo = !1, this._dequeue = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this) }

                function i(t) { return t.toString().replace("object ", "") }

                function n(t, e, r) { e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = r) } var o = t("eventemitter3"),
                    s = t("url"),
                    a = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
                    u = null;
                r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.complete = function() { this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError), this.data.removeEventListener("load", this._boundComplete), this.data.removeEventListener("progress", this._boundOnProgress), this.data.removeEventListener("canplaythrough", this._boundComplete)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError), this.xhr.removeEventListener("abort", this._boundXhrOnAbort), this.xhr.removeEventListener("progress", this._boundOnProgress), this.xhr.removeEventListener("load", this._boundXhrOnLoad)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.emit("complete", this) }, r.prototype.load = function(t) { switch (this.emit("start", this), t && this.once("complete", t), "string" != typeof this.crossOrigin && (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                        case r.LOAD_TYPE.IMAGE:
                            this._loadImage(); break;
                        case r.LOAD_TYPE.AUDIO:
                            this._loadElement("audio"); break;
                        case r.LOAD_TYPE.VIDEO:
                            this._loadElement("video"); break;
                        case r.LOAD_TYPE.XHR:
                        default:
                            a && this.crossOrigin ? this._loadXdr() : this._loadXhr() } }, r.prototype._loadImage = function() { this.data = new Image, this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.data.src = this.url, this.isImage = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1) }, r.prototype._loadElement = function(t) { if (this.data = document.createElement(t), Array.isArray(this.url))
                        for (var e = 0; e < this.url.length; ++e) this.data.appendChild(this._createSource(t, this.url[e]));
                    else this.data.appendChild(this._createSource(t, this.url));
                    this["is" + t[0].toUpperCase() + t.substring(1)] = !0, this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load() }, r.prototype._loadXhr = function() { "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType()); var t = this.xhr = new XMLHttpRequest;
                    t.open("GET", this.url, !0), t.responseType = this.xhrType === r.XHR_RESPONSE_TYPE.JSON || this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT ? r.XHR_RESPONSE_TYPE.TEXT : this.xhrType, t.addEventListener("error", this._boundXhrOnError, !1), t.addEventListener("abort", this._boundXhrOnAbort, !1), t.addEventListener("progress", this._boundOnProgress, !1), t.addEventListener("load", this._boundXhrOnLoad, !1), t.send() }, r.prototype._loadXdr = function() { "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType()); var t = this.xhr = new XDomainRequest;
                    t.timeout = 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXdrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() { t.send() }, 0) }, r.prototype._createSource = function(t, e, r) { r || (r = t + "/" + e.substr(e.lastIndexOf(".") + 1)); var i = document.createElement("source"); return i.src = e, i.type = r, i }, r.prototype._onError = function(t) { this.error = new Error("Failed to load element using " + t.target.nodeName), this.complete() }, r.prototype._onProgress = function(t) { t && t.lengthComputable && this.emit("progress", this, t.loaded / t.total) }, r.prototype._xhrOnError = function() { this.error = new Error(i(this.xhr) + " Request failed. Status: " + this.xhr.status + ', text: "' + this.xhr.statusText + '"'), this.complete() }, r.prototype._xhrOnAbort = function() { this.error = new Error(i(this.xhr) + " Request was aborted by the user."), this.complete() }, r.prototype._xdrOnTimeout = function() { this.error = new Error(i(this.xhr) + " Request timed out."), this.complete() }, r.prototype._xhrOnLoad = function() { var t = this.xhr,
                        e = void 0 !== t.status ? t.status : 200; if (200 === e || 204 === e || 0 === e && t.responseText.length > 0)
                        if (this.xhrType === r.XHR_RESPONSE_TYPE.TEXT) this.data = t.responseText;
                        else if (this.xhrType === r.XHR_RESPONSE_TYPE.JSON) try { this.data = JSON.parse(t.responseText), this.isJson = !0 } catch (i) { this.error = new Error("Error trying to parse loaded json:", i) } else if (this.xhrType === r.XHR_RESPONSE_TYPE.DOCUMENT) try { if (window.DOMParser) { var n = new DOMParser;
                                this.data = n.parseFromString(t.responseText, "text/xml") } else { var o = document.createElement("div");
                                o.innerHTML = t.responseText, this.data = o } this.isXml = !0 } catch (i) { this.error = new Error("Error trying to parse loaded xml:", i) } else this.data = t.response || t.responseText;
                        else this.error = new Error("[" + t.status + "]" + t.statusText + ":" + t.responseURL);
                    this.complete() }, r.prototype._determineCrossOrigin = function(t, e) { if (0 === t.indexOf("data:")) return "";
                    e = e || window.location, u || (u = document.createElement("a")), u.href = t, t = s.parse(u.href); var r = !t.port && "" === e.port || t.port === e.port; return t.hostname === e.hostname && r && t.protocol === e.protocol ? "" : "anonymous" }, r.prototype._determineXhrType = function() { return r._xhrTypeMap[this._getExtension()] || r.XHR_RESPONSE_TYPE.TEXT }, r.prototype._determineLoadType = function() { return r._loadTypeMap[this._getExtension()] || r.LOAD_TYPE.XHR }, r.prototype._getExtension = function() { var t, e = this.url; if (this.isDataUrl) { var r = e.indexOf("/");
                        t = e.substring(r + 1, e.indexOf(";", r)) } else { var i = e.indexOf("?"); - 1 !== i && (e = e.substring(0, i)), t = e.substring(e.lastIndexOf(".") + 1) } return t }, r.prototype._getMimeFromXhrType = function(t) { switch (t) {
                        case r.XHR_RESPONSE_TYPE.BUFFER:
                            return "application/octet-binary";
                        case r.XHR_RESPONSE_TYPE.BLOB:
                            return "application/blob";
                        case r.XHR_RESPONSE_TYPE.DOCUMENT:
                            return "application/xml";
                        case r.XHR_RESPONSE_TYPE.JSON:
                            return "application/json";
                        case r.XHR_RESPONSE_TYPE.DEFAULT:
                        case r.XHR_RESPONSE_TYPE.TEXT:
                        default:
                            return "text/plain" } }, r.LOAD_TYPE = { XHR: 1, IMAGE: 2, AUDIO: 3, VIDEO: 4 }, r.XHR_READY_STATE = { UNSENT: 0, OPENED: 1, HEADERS_RECEIVED: 2, LOADING: 3, DONE: 4 }, r.XHR_RESPONSE_TYPE = { DEFAULT: "text", BUFFER: "arraybuffer", BLOB: "blob", DOCUMENT: "document", JSON: "json", TEXT: "text" }, r._loadTypeMap = { gif: r.LOAD_TYPE.IMAGE, png: r.LOAD_TYPE.IMAGE, bmp: r.LOAD_TYPE.IMAGE, jpg: r.LOAD_TYPE.IMAGE, jpeg: r.LOAD_TYPE.IMAGE, tif: r.LOAD_TYPE.IMAGE, tiff: r.LOAD_TYPE.IMAGE, webp: r.LOAD_TYPE.IMAGE, tga: r.LOAD_TYPE.IMAGE }, r._xhrTypeMap = { xhtml: r.XHR_RESPONSE_TYPE.DOCUMENT, html: r.XHR_RESPONSE_TYPE.DOCUMENT, htm: r.XHR_RESPONSE_TYPE.DOCUMENT, xml: r.XHR_RESPONSE_TYPE.DOCUMENT, tmx: r.XHR_RESPONSE_TYPE.DOCUMENT, tsx: r.XHR_RESPONSE_TYPE.DOCUMENT, svg: r.XHR_RESPONSE_TYPE.DOCUMENT, gif: r.XHR_RESPONSE_TYPE.BLOB, png: r.XHR_RESPONSE_TYPE.BLOB, bmp: r.XHR_RESPONSE_TYPE.BLOB, jpg: r.XHR_RESPONSE_TYPE.BLOB, jpeg: r.XHR_RESPONSE_TYPE.BLOB, tif: r.XHR_RESPONSE_TYPE.BLOB, tiff: r.XHR_RESPONSE_TYPE.BLOB, webp: r.XHR_RESPONSE_TYPE.BLOB, tga: r.XHR_RESPONSE_TYPE.BLOB, json: r.XHR_RESPONSE_TYPE.JSON, text: r.XHR_RESPONSE_TYPE.TEXT, txt: r.XHR_RESPONSE_TYPE.TEXT }, r.setExtensionLoadType = function(t, e) { n(r._loadTypeMap, t, e) }, r.setExtensionXhrType = function(t, e) { n(r._xhrTypeMap, t, e) } }, { eventemitter3: 14, url: 9 }],
            17: [function(t, e) { e.exports = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encodeBinary: function(t) { for (var e, r = "", i = new Array(4), n = 0, o = 0, s = 0; n < t.length;) { for (e = new Array(3), o = 0; o < e.length; o++) e[o] = n < t.length ? 255 & t.charCodeAt(n++) : 0; switch (i[0] = e[0] >> 2, i[1] = (3 & e[0]) << 4 | e[1] >> 4, i[2] = (15 & e[1]) << 2 | e[2] >> 6, i[3] = 63 & e[2], s = n - (t.length - 1)) {
                                case 2:
                                    i[3] = 64, i[2] = 64; break;
                                case 1:
                                    i[3] = 64 } for (o = 0; o < i.length; o++) r += this._keyStr.charAt(i[o]) } return r } } }, {}],
            18: [function(t, e) { e.exports = t("./Loader"), e.exports.Resource = t("./Resource"), e.exports.middleware = { caching: { memory: t("./middlewares/caching/memory") }, parsing: { blob: t("./middlewares/parsing/blob") } } }, { "./Loader": 15, "./Resource": 16, "./middlewares/caching/memory": 19, "./middlewares/parsing/blob": 20 }],
            19: [function(t, e) { var r = {};
                e.exports = function() { return function(t, e) { r[t.url] ? (t.data = r[t.url], t.complete()) : (t.once("complete", function() { r[this.url] = this.data }), e()) } } }, {}],
            20: [function(t, e) { var r = t("../../Resource"),
                    i = t("../../b64");
                window.URL = window.URL || window.webkitURL, e.exports = function() { return function(t, e) { if (!t.data) return e(); if (t.xhr && t.xhrType === r.XHR_RESPONSE_TYPE.BLOB)
                            if (window.Blob && "string" != typeof t.data) { if (0 === t.data.type.indexOf("image")) { var n = URL.createObjectURL(t.data);
                                    t.blob = t.data, t.data = new Image, t.data.src = n, t.isImage = !0, t.data.onload = function() { URL.revokeObjectURL(n), t.data.onload = null, e() } } } else { var o = t.xhr.getResponseHeader("content-type");
                                o && 0 === o.indexOf("image") && (t.data = new Image, t.data.src = "data:" + o + ";base64," + i.encodeBinary(t.xhr.responseText), t.isImage = !0, t.data.onload = function() { t.data.onload = null, e() }) } else e() } } }, { "../../Resource": 16, "../../b64": 17 }],
            21: [function(t, e) { e.exports = { name: "pixi.js", version: "3.0.7", description: "Pixi.js is a fast lightweight 2D library that works across all devices.", author: "Mat Groves", contributors: ["Chad Engler <chad@pantherdev.com>", "Richard Davey <rdavey@gmail.com>"], main: "./src/index.js", homepage: "http://goodboydigital.com/", bugs: "https://github.com/GoodBoyDigital/pixi.js/issues", license: "MIT", repository: { type: "git", url: "https://github.com/GoodBoyDigital/pixi.js.git" }, scripts: { start: "gulp && gulp watch", test: "gulp && testem ci", build: "gulp", docs: "jsdoc -c ./gulp/util/jsdoc.conf.json -R README.md" }, files: ["bin/", "src/"], dependencies: { async: "^0.9.0", brfs: "^1.4.0", earcut: "^2.0.1", eventemitter3: "^1.1.0", "object-assign": "^2.0.0", "resource-loader": "^1.6.1" }, devDependencies: { browserify: "^10.2.3", chai: "^3.0.0", del: "^1.2.0", gulp: "^3.9.0", "gulp-cached": "^1.1.0", "gulp-concat": "^2.5.2", "gulp-debug": "^2.0.1", "gulp-jshint": "^1.11.0", "gulp-mirror": "^0.4.0", "gulp-plumber": "^1.0.1", "gulp-rename": "^1.2.2", "gulp-sourcemaps": "^1.5.2", "gulp-uglify": "^1.2.0", "gulp-util": "^3.0.5", "jaguarjs-jsdoc": "git+https://github.com/davidshimjs/jaguarjs-jsdoc.git", jsdoc: "^3.3.0", "jshint-summary": "^0.4.0", minimist: "^1.1.1", mocha: "^2.2.5", "require-dir": "^0.3.0", "run-sequence": "^1.1.0", testem: "^0.8.3", "vinyl-buffer": "^1.0.0", "vinyl-source-stream": "^1.1.0", watchify: "^3.2.1" }, browserify: { transform: ["brfs"] } } }, {}],
            22: [function(t, e) { var r = { VERSION: t("../../package.json").version, PI_2: 2 * Math.PI, RAD_TO_DEG: 180 / Math.PI, DEG_TO_RAD: Math.PI / 180, TARGET_FPMS: .06, RENDERER_TYPE: { UNKNOWN: 0, WEBGL: 1, CANVAS: 2 }, BLEND_MODES: { NORMAL: 0, ADD: 1, MULTIPLY: 2, SCREEN: 3, OVERLAY: 4, DARKEN: 5, LIGHTEN: 6, COLOR_DODGE: 7, COLOR_BURN: 8, HARD_LIGHT: 9, SOFT_LIGHT: 10, DIFFERENCE: 11, EXCLUSION: 12, HUE: 13, SATURATION: 14, COLOR: 15, LUMINOSITY: 16 }, DRAW_MODES: { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, SCALE_MODES: { DEFAULT: 0, LINEAR: 0, NEAREST: 1 }, RETINA_PREFIX: /@(.+)x/, RESOLUTION: 1, FILTER_RESOLUTION: 1, DEFAULT_RENDER_OPTIONS: { view: null, resolution: 1, antialias: !1, forceFXAA: !1, autoResize: !1, transparent: !1, backgroundColor: 0, clearBeforeRender: !0, preserveDrawingBuffer: !1 }, SHAPES: { POLY: 0, RECT: 1, CIRC: 2, ELIP: 3, RREC: 4 }, SPRITE_BATCH_SIZE: 2e3 };
                e.exports = r }, { "../../package.json": 21 }],
            23: [function(t, e) {
                function r() { n.call(this), this.children = [] } var i = t("../math"),
                    n = t("./DisplayObject"),
                    o = t("../textures/RenderTexture"),
                    s = new i.Matrix;
                r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { width: { get: function() { return this.scale.x * this.getLocalBounds().width }, set: function(t) { var e = this.getLocalBounds().width;
                            this.scale.x = 0 !== e ? t / e : 1, this._width = t } }, height: { get: function() { return this.scale.y * this.getLocalBounds().height }, set: function(t) { var e = this.getLocalBounds().height;
                            this.scale.y = 0 !== e ? t / e : 1, this._height = t } } }), r.prototype.addChild = function(t) { return this.addChildAt(t, this.children.length) }, r.prototype.addChildAt = function(t, e) { if (t === this) return t; if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), t.emit("added", this), t; throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length) }, r.prototype.swapChildren = function(t, e) { if (t !== e) { var r = this.getChildIndex(t),
                            i = this.getChildIndex(e); if (0 > r || 0 > i) throw new Error("swapChildren: Both the supplied DisplayObjects must be children of the caller.");
                        this.children[r] = e, this.children[i] = t } }, r.prototype.getChildIndex = function(t) { var e = this.children.indexOf(t); if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller"); return e }, r.prototype.setChildIndex = function(t, e) { if (0 > e || e >= this.children.length) throw new Error("The supplied index is out of bounds"); var r = this.getChildIndex(t);
                    this.children.splice(r, 1), this.children.splice(e, 0, t) }, r.prototype.getChildAt = function(t) { if (0 > t || t >= this.children.length) throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject is not a child of the caller"); return this.children[t] }, r.prototype.removeChild = function(t) { var e = this.children.indexOf(t); if (-1 !== e) return this.removeChildAt(e) }, r.prototype.removeChildAt = function(t) { var e = this.getChildAt(t); return e.parent = null, this.children.splice(t, 1), e.emit("removed", this), e }, r.prototype.removeChildren = function(t, e) { var r = t || 0,
                        i = "number" == typeof e ? e : this.children.length,
                        n = i - r; if (n > 0 && i >= n) { for (var o = this.children.splice(r, n), s = 0; s < o.length; ++s) o[s].parent = null; return o } if (0 === n && 0 === this.children.length) return []; throw new RangeError("removeChildren: numeric values are outside the acceptable range.") }, r.prototype.generateTexture = function(t, e, r) { var i = this.getLocalBounds(),
                        n = new o(t, 0 | i.width, 0 | i.height, r, e); return s.tx = -i.x, s.ty = -i.y, n.render(this, s), n }, r.prototype.updateTransform = function() { if (this.visible) { this.displayObjectUpdateTransform(); for (var t = 0, e = this.children.length; e > t; ++t) this.children[t].updateTransform() } }, r.prototype.containerUpdateTransform = r.prototype.updateTransform, r.prototype.getBounds = function() { if (!this._currentBounds) { if (0 === this.children.length) return i.Rectangle.EMPTY; for (var t, e, r, n = 1 / 0, o = 1 / 0, s = -1 / 0, a = -1 / 0, u = !1, l = 0, h = this.children.length; h > l; ++l) { var c = this.children[l];
                            c.visible && (u = !0, t = this.children[l].getBounds(), n = n < t.x ? n : t.x, o = o < t.y ? o : t.y, e = t.width + t.x, r = t.height + t.y, s = s > e ? s : e, a = a > r ? a : r) } if (!u) return i.Rectangle.EMPTY; var p = this._bounds;
                        p.x = n, p.y = o, p.width = s - n, p.height = a - o, this._currentBounds = p } return this._currentBounds }, r.prototype.containerGetBounds = r.prototype.getBounds, r.prototype.getLocalBounds = function() { var t = this.worldTransform;
                    this.worldTransform = i.Matrix.IDENTITY; for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].updateTransform(); return this.worldTransform = t, this._currentBounds = null, this.getBounds(i.Matrix.IDENTITY) }, r.prototype.renderWebGL = function(t) { if (this.visible && !(this.worldAlpha <= 0) && this.renderable) { var e, r; if (this._mask || this._filters) { for (t.currentRenderer.flush(), this._filters && t.filterManager.pushFilter(this, this._filters), this._mask && t.maskManager.pushMask(this, this._mask), t.currentRenderer.start(), this._renderWebGL(t), e = 0, r = this.children.length; r > e; e++) this.children[e].renderWebGL(t);
                            t.currentRenderer.flush(), this._mask && t.maskManager.popMask(this, this._mask), this._filters && t.filterManager.popFilter(), t.currentRenderer.start() } else
                            for (this._renderWebGL(t), e = 0, r = this.children.length; r > e; ++e) this.children[e].renderWebGL(t) } }, r.prototype._renderWebGL = function() {}, r.prototype._renderCanvas = function() {}, r.prototype.renderCanvas = function(t) { if (this.visible && !(this.alpha <= 0) && this.renderable) { this._mask && t.maskManager.pushMask(this._mask, t), this._renderCanvas(t); for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].renderCanvas(t);
                        this._mask && t.maskManager.popMask(t) } }, r.prototype.destroy = function(t) { if (n.prototype.destroy.call(this), t)
                        for (var e = 0, r = this.children.length; r > e; ++e) this.children[e].destroy(t);
                    this.removeChildren(), this.children = null } }, { "../math": 32, "../textures/RenderTexture": 70, "./DisplayObject": 24 }],
            24: [function(t, e) {
                function r() { o.call(this), this.position = new i.Point, this.scale = new i.Point(1, 1), this.pivot = new i.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.renderable = !0, this.parent = null, this.worldAlpha = 1, this.worldTransform = new i.Matrix, this.filterArea = null, this._sr = 0, this._cr = 1, this._bounds = new i.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cachedObject = null } var i = t("../math"),
                    n = t("../textures/RenderTexture"),
                    o = t("eventemitter3"),
                    s = t("../const"),
                    a = new i.Matrix;
                r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { x: { get: function() { return this.position.x }, set: function(t) { this.position.x = t } }, y: { get: function() { return this.position.y }, set: function(t) { this.position.y = t } }, worldVisible: { get: function() { var t = this;
                            do { if (!t.visible) return !1;
                                t = t.parent } while (t); return !0 } }, mask: { get: function() { return this._mask }, set: function(t) { this._mask && (this._mask.renderable = !0), this._mask = t, this._mask && (this._mask.renderable = !1) } }, filters: { get: function() { return this._filters && this._filters.slice() }, set: function(t) { this._filters = t && t.slice() } } }), r.prototype.updateTransform = function() { var t, e, r, i, n, o, a = this.parent.worldTransform,
                        u = this.worldTransform;
                    this.rotation % s.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)), t = this._cr * this.scale.x, e = this._sr * this.scale.x, r = -this._sr * this.scale.y, i = this._cr * this.scale.y, n = this.position.x, o = this.position.y, (this.pivot.x || this.pivot.y) && (n -= this.pivot.x * t + this.pivot.y * r, o -= this.pivot.x * e + this.pivot.y * i), u.a = t * a.a + e * a.c, u.b = t * a.b + e * a.d, u.c = r * a.a + i * a.c, u.d = r * a.b + i * a.d, u.tx = n * a.a + o * a.c + a.tx, u.ty = n * a.b + o * a.d + a.ty) : (t = this.scale.x, i = this.scale.y, n = this.position.x - this.pivot.x * t, o = this.position.y - this.pivot.y * i, u.a = t * a.a, u.b = t * a.b, u.c = i * a.c, u.d = i * a.d, u.tx = n * a.a + o * a.c + a.tx, u.ty = n * a.b + o * a.d + a.ty), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._currentBounds = null }, r.prototype.displayObjectUpdateTransform = r.prototype.updateTransform, r.prototype.getBounds = function() { return i.Rectangle.EMPTY }, r.prototype.getLocalBounds = function() { return this.getBounds(i.Matrix.IDENTITY) }, r.prototype.toGlobal = function(t) { return this.displayObjectUpdateTransform(), this.worldTransform.apply(t) }, r.prototype.toLocal = function(t, e) { return e && (t = e.toGlobal(t)), this.displayObjectUpdateTransform(), this.worldTransform.applyInverse(t) }, r.prototype.renderWebGL = function() {}, r.prototype.renderCanvas = function() {}, r.prototype.generateTexture = function(t, e, r) { var i = this.getLocalBounds(),
                        o = new n(t, 0 | i.width, 0 | i.height, e, r); return a.tx = -i.x, a.ty = -i.y, o.render(this, a), o }, r.prototype.destroy = function() { this.position = null, this.scale = null, this.pivot = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.worldTransform = null, this.filterArea = null } }, { "../const": 22, "../math": 32, "../textures/RenderTexture": 70, eventemitter3: 11 }],
            25: [function(t, e) {
                function r() { i.call(this), this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this._prevTint = 16777215, this.blendMode = l.BLEND_MODES.NORMAL, this.currentPath = null, this._webGL = {}, this.isMask = !1, this.boundsPadding = 0, this._localBounds = new u.Rectangle(0, 0, 1, 1), this.dirty = !0, this.glDirty = !1, this.boundsDirty = !0, this.cachedSpriteDirty = !1 } var i = t("../display/Container"),
                    n = t("../textures/Texture"),
                    o = t("../renderers/canvas/utils/CanvasBuffer"),
                    s = t("../renderers/canvas/utils/CanvasGraphics"),
                    a = t("./GraphicsData"),
                    u = t("../math"),
                    l = t("../const"),
                    h = new u.Point;
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, {}), r.prototype.clone = function() { var t = new r;
                    t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = this.dirty, t.glDirty = this.glDirty, t.cachedSpriteDirty = this.cachedSpriteDirty; for (var e = 0; e < this.graphicsData.length; ++e) t.graphicsData.push(this.graphicsData[e].clone()); return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t }, r.prototype.lineStyle = function(t, e, r) { return this.lineWidth = t || 0, this.lineColor = e || 0, this.lineAlpha = void 0 === r ? 1 : r, this.currentPath && (this.currentPath.shape.points.length ? this.drawShape(new u.Polygon(this.currentPath.shape.points.slice(-2))) : (this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha)), this }, r.prototype.moveTo = function(t, e) { return this.drawShape(new u.Polygon([t, e])), this }, r.prototype.lineTo = function(t, e) { return this.currentPath.shape.points.push(t, e), this.dirty = !0, this }, r.prototype.quadraticCurveTo = function(t, e, r, i) { this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0); var n, o, s = 20,
                        a = this.currentPath.shape.points;
                    0 === a.length && this.moveTo(0, 0); for (var u = a[a.length - 2], l = a[a.length - 1], h = 0, c = 1; s >= c; ++c) h = c / s, n = u + (t - u) * h, o = l + (e - l) * h, a.push(n + (t + (r - t) * h - n) * h, o + (e + (i - e) * h - o) * h); return this.dirty = this.boundsDirty = !0, this }, r.prototype.bezierCurveTo = function(t, e, r, i, n, o) { this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0); for (var s, a, u, l, h, c = 20, p = this.currentPath.shape.points, d = p[p.length - 2], f = p[p.length - 1], v = 0, g = 1; c >= g; ++g) v = g / c, s = 1 - v, a = s * s, u = a * s, l = v * v, h = l * v, p.push(u * d + 3 * a * v * t + 3 * s * l * r + h * n, u * f + 3 * a * v * e + 3 * s * l * i + h * o); return this.dirty = this.boundsDirty = !0, this }, r.prototype.arcTo = function(t, e, r, i, n) { this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e); var o = this.currentPath.shape.points,
                        s = o[o.length - 2],
                        a = o[o.length - 1],
                        u = a - e,
                        l = s - t,
                        h = i - e,
                        c = r - t,
                        p = Math.abs(u * c - l * h); if (1e-8 > p || 0 === n)(o[o.length - 2] !== t || o[o.length - 1] !== e) && o.push(t, e);
                    else { var d = u * u + l * l,
                            f = h * h + c * c,
                            v = u * h + l * c,
                            g = n * Math.sqrt(d) / p,
                            m = n * Math.sqrt(f) / p,
                            y = g * v / d,
                            x = m * v / f,
                            b = g * c + m * l,
                            _ = g * h + m * u,
                            T = l * (m + y),
                            E = u * (m + y),
                            S = c * (g + x),
                            w = h * (g + x),
                            A = Math.atan2(E - _, T - b),
                            C = Math.atan2(w - _, S - b);
                        this.arc(b + t, _ + e, n, A, C, l * h > c * u) } return this.dirty = this.boundsDirty = !0, this }, r.prototype.arc = function(t, e, r, i, n, o) { if (o = o || !1, i === n) return this;!o && i >= n ? n += 2 * Math.PI : o && n >= i && (i += 2 * Math.PI); var s = o ? -1 * (i - n) : n - i,
                        a = 40 * Math.ceil(Math.abs(s) / (2 * Math.PI)); if (0 === s) return this; var u = t + Math.cos(i) * r,
                        l = e + Math.sin(i) * r;
                    this.currentPath ? o && this.filling ? this.currentPath.shape.points.push(t, e) : this.currentPath.shape.points.push(u, l) : o && this.filling ? this.moveTo(t, e) : this.moveTo(u, l); for (var h = this.currentPath.shape.points, c = s / (2 * a), p = 2 * c, d = Math.cos(c), f = Math.sin(c), v = a - 1, g = v % 1 / v, m = 0; v >= m; m++) { var y = m + g * m,
                            x = c + i + p * y,
                            b = Math.cos(x),
                            _ = -Math.sin(x);
                        h.push((d * b + f * _) * r + t, (d * -_ + f * b) * r + e) } return this.dirty = this.boundsDirty = !0, this }, r.prototype.beginFill = function(t, e) { return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this }, r.prototype.endFill = function() { return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this }, r.prototype.drawRect = function(t, e, r, i) { return this.drawShape(new u.Rectangle(t, e, r, i)), this }, r.prototype.drawRoundedRect = function(t, e, r, i, n) { return this.drawShape(new u.RoundedRectangle(t, e, r, i, n)), this }, r.prototype.drawCircle = function(t, e, r) { return this.drawShape(new u.Circle(t, e, r)), this }, r.prototype.drawEllipse = function(t, e, r, i) { return this.drawShape(new u.Ellipse(t, e, r, i)), this }, r.prototype.drawPolygon = function(t) { var e = t; if (!Array.isArray(e)) { e = new Array(arguments.length); for (var r = 0; r < e.length; ++r) e[r] = arguments[r] } return this.drawShape(new u.Polygon(e)), this }, r.prototype.clear = function() { return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this }, r.prototype.generateTexture = function(t, e, r) { e = e || 1; var i = this.getLocalBounds(),
                        a = new o(i.width * e, i.height * e),
                        u = n.fromCanvas(a.canvas, r); return u.baseTexture.resolution = e, a.context.scale(e, e), a.context.translate(-i.x, -i.y), s.renderGraphics(this, a.context), u }, r.prototype._renderWebGL = function(t) { this.glDirty && (this.dirty = !0, this.glDirty = !1), t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this) }, r.prototype._renderCanvas = function(t) { if (this.isMask !== !0) { this._prevTint !== this.tint && (this.dirty = !0, this._prevTint = this.tint); var e = t.context,
                            r = this.worldTransform;
                        this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, e.globalCompositeOperation = t.blendModes[t.currentBlendMode]); var i = t.resolution;
                        e.setTransform(r.a * i, r.b * i, r.c * i, r.d * i, r.tx * i, r.ty * i), s.renderGraphics(this, e) } }, r.prototype.getBounds = function(t) { if (!this._currentBounds) { if (!this.renderable) return u.Rectangle.EMPTY;
                        this.boundsDirty && (this.updateLocalBounds(), this.glDirty = !0, this.cachedSpriteDirty = !0, this.boundsDirty = !1); var e = this._localBounds,
                            r = e.x,
                            i = e.width + e.x,
                            n = e.y,
                            o = e.height + e.y,
                            s = t || this.worldTransform,
                            a = s.a,
                            l = s.b,
                            h = s.c,
                            c = s.d,
                            p = s.tx,
                            d = s.ty,
                            f = a * i + h * o + p,
                            v = c * o + l * i + d,
                            g = a * r + h * o + p,
                            m = c * o + l * r + d,
                            y = a * r + h * n + p,
                            x = c * n + l * r + d,
                            b = a * i + h * n + p,
                            _ = c * n + l * i + d,
                            T = f,
                            E = v,
                            S = f,
                            w = v;
                        S = S > g ? g : S, S = S > y ? y : S, S = S > b ? b : S, w = w > m ? m : w, w = w > x ? x : w, w = w > _ ? _ : w, T = g > T ? g : T, T = y > T ? y : T, T = b > T ? b : T, E = m > E ? m : E, E = x > E ? x : E, E = _ > E ? _ : E, this._bounds.x = S, this._bounds.width = T - S, this._bounds.y = w, this._bounds.height = E - w, this._currentBounds = this._bounds } return this._currentBounds }, r.prototype.containsPoint = function(t) { this.worldTransform.applyInverse(t, h); for (var e = this.graphicsData, r = 0; r < e.length; r++) { var i = e[r]; if (i.fill && i.shape && i.shape.contains(h.x, h.y)) return !0 } return !1 }, r.prototype.updateLocalBounds = function() { var t = 1 / 0,
                        e = -1 / 0,
                        r = 1 / 0,
                        i = -1 / 0; if (this.graphicsData.length)
                        for (var n, o, s, a, u, h, c = 0; c < this.graphicsData.length; c++) { var p = this.graphicsData[c],
                                d = p.type,
                                f = p.lineWidth; if (n = p.shape, d === l.SHAPES.RECT || d === l.SHAPES.RREC) s = n.x - f / 2, a = n.y - f / 2, u = n.width + f, h = n.height + f, t = t > s ? s : t, e = s + u > e ? s + u : e, r = r > a ? a : r, i = a + h > i ? a + h : i;
                            else if (d === l.SHAPES.CIRC) s = n.x, a = n.y, u = n.radius + f / 2, h = n.radius + f / 2, t = t > s - u ? s - u : t, e = s + u > e ? s + u : e, r = r > a - h ? a - h : r, i = a + h > i ? a + h : i;
                            else if (d === l.SHAPES.ELIP) s = n.x, a = n.y, u = n.width + f / 2, h = n.height + f / 2, t = t > s - u ? s - u : t, e = s + u > e ? s + u : e, r = r > a - h ? a - h : r, i = a + h > i ? a + h : i;
                            else { o = n.points; for (var v = 0; v < o.length; v += 2) s = o[v], a = o[v + 1], t = t > s - f ? s - f : t, e = s + f > e ? s + f : e, r = r > a - f ? a - f : r, i = a + f > i ? a + f : i } } else t = 0, e = 0, r = 0, i = 0; var g = this.boundsPadding;
                    this._localBounds.x = t - g, this._localBounds.width = e - t + 2 * g, this._localBounds.y = r - g, this._localBounds.height = i - r + 2 * g }, r.prototype.drawShape = function(t) { this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null; var e = new a(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t); return this.graphicsData.push(e), e.type === l.SHAPES.POLY && (e.shape.closed = e.shape.closed || this.filling, this.currentPath = e), this.dirty = this.boundsDirty = !0, e }, r.prototype.destroy = function() { i.prototype.destroy.apply(this, arguments); for (var t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy(); for (var e in this._webgl)
                        for (var r = 0; r < this._webgl[e].data.length; ++r) this._webgl[e].data[r].destroy();
                    this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null } }, { "../const": 22, "../display/Container": 23, "../math": 32, "../renderers/canvas/utils/CanvasBuffer": 44, "../renderers/canvas/utils/CanvasGraphics": 45, "../textures/Texture": 71, "./GraphicsData": 26 }],
            26: [function(t, e) {
                function r(t, e, r, i, n, o, s) { this.lineWidth = t, this.lineColor = e, this.lineAlpha = r, this._lineTint = e, this.fillColor = i, this.fillAlpha = n, this._fillTint = i, this.fill = o, this.shape = s, this.type = s.type } r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() { return new r(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.shape) }, r.prototype.destroy = function() { this.shape = null } }, {}],
            27: [function(t, e) {
                function r(t) { s.call(this, t), this.graphicsDataPool = [], this.primitiveShader = null, this.complexPrimitiveShader = null, this.maximumSimplePolySize = 200 }
                var i = t("../../utils"),
                    n = t("../../math"),
                    o = t("../../const"),
                    s = t("../../renderers/webgl/utils/ObjectRenderer"),
                    a = t("../../renderers/webgl/WebGLRenderer"),
                    u = t("./WebGLGraphicsData"),
                    l = t("earcut");
                r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, a.registerPlugin("graphics", r), r.prototype.onContextChange = function() {}, r.prototype.destroy = function() { s.prototype.destroy.call(this); for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
                    this.graphicsDataPool = null }, r.prototype.render = function(t) { var e, r = this.renderer,
                        n = r.gl,
                        o = r.shaderManager.plugins.primitiveShader;
                    t.dirty && this.updateGraphics(t, n); var s = t._webGL[n.id];
                    r.blendModeManager.setBlendMode(t.blendMode); for (var a = 0; a < s.data.length; a++) 1 === s.data[a].mode ? (e = s.data[a], r.stencilManager.pushStencil(t, e, r), n.uniform1f(r.shaderManager.complexPrimitiveShader.uniforms.alpha._location, t.worldAlpha * e.alpha), n.drawElements(n.TRIANGLE_FAN, 4, n.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.stencilManager.popStencil(t, e, r)) : (e = s.data[a], o = r.shaderManager.primitiveShader, r.shaderManager.setShader(o), n.uniformMatrix3fv(o.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), n.uniformMatrix3fv(o.uniforms.projectionMatrix._location, !1, r.currentRenderTarget.projectionMatrix.toArray(!0)), n.uniform3fv(o.uniforms.tint._location, i.hex2rgb(t.tint)), n.uniform1f(o.uniforms.alpha._location, t.worldAlpha), n.bindBuffer(n.ARRAY_BUFFER, e.buffer), n.vertexAttribPointer(o.attributes.aVertexPosition, 2, n.FLOAT, !1, 24, 0), n.vertexAttribPointer(o.attributes.aColor, 4, n.FLOAT, !1, 24, 8), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer), n.drawElements(n.TRIANGLE_STRIP, e.indices.length, n.UNSIGNED_SHORT, 0)) }, r.prototype.updateGraphics = function(t) {
                    var e = this.renderer.gl,
                        r = t._webGL[e.id];
                    r || (r = t._webGL[e.id] = { lastIndex: 0, data: [], gl: e }), t.dirty = !1;
                    var i;
                    if (t.clearDirty) { for (t.clearDirty = !1, i = 0; i < r.data.length; i++) { var n = r.data[i];
                            n.reset(), this.graphicsDataPool.push(n) } r.data = [], r.lastIndex = 0 }
                    var s;
                    for (i = r.lastIndex; i < t.graphicsData.length; i++) {
                        var a = t.graphicsData[i];
                        if (a.type === o.SHAPES.POLY) {
                            if (a.points = a.shape.points.slice(), a.shape.closed && (a.points[0] !== a.points[a.points.length - 2] || a.points[1] !== a.points[a.points.length - 1]) && a.points.push(a.points[0], a.points[1]), a.fill && a.points.length >= 6)
                                if (a.points.length < 2 * this.maximumSimplePolySize) {
                                    s = this.switchMode(r, 0);
                                    var u = this.buildPoly(a, s);
                                    u || (s = this.switchMode(r, 1), this.buildComplexPoly(a, s))
                                } else s = this.switchMode(r, 1), this.buildComplexPoly(a, s);
                            a.lineWidth > 0 && (s = this.switchMode(r, 0), this.buildLine(a, s))
                        } else s = this.switchMode(r, 0), a.type === o.SHAPES.RECT ? this.buildRectangle(a, s) : a.type === o.SHAPES.CIRC || a.type === o.SHAPES.ELIP ? this.buildCircle(a, s) : a.type === o.SHAPES.RREC && this.buildRoundedRectangle(a, s);
                        r.lastIndex++
                    }
                    for (i = 0; i < r.data.length; i++) s = r.data[i], s.dirty && s.upload()
                }, r.prototype.switchMode = function(t, e) { var r; return t.data.length ? (r = t.data[t.data.length - 1], (r.points.length > 32e4 || r.mode !== e || 1 === e) && (r = this.graphicsDataPool.pop() || new u(t.gl), r.mode = e, t.data.push(r))) : (r = this.graphicsDataPool.pop() || new u(t.gl), r.mode = e, t.data.push(r)), r.dirty = !0, r }, r.prototype.buildRectangle = function(t, e) { var r = t.shape,
                        n = r.x,
                        o = r.y,
                        s = r.width,
                        a = r.height; if (t.fill) { var u = i.hex2rgb(t.fillColor),
                            l = t.fillAlpha,
                            h = u[0] * l,
                            c = u[1] * l,
                            p = u[2] * l,
                            d = e.points,
                            f = e.indices,
                            v = d.length / 6;
                        d.push(n, o), d.push(h, c, p, l), d.push(n + s, o), d.push(h, c, p, l), d.push(n, o + a), d.push(h, c, p, l), d.push(n + s, o + a), d.push(h, c, p, l), f.push(v, v, v + 1, v + 2, v + 3, v + 3) } if (t.lineWidth) { var g = t.points;
                        t.points = [n, o, n + s, o, n + s, o + a, n, o + a, n, o], this.buildLine(t, e), t.points = g } }, r.prototype.buildRoundedRectangle = function(t, e) { var r = t.shape,
                        n = r.x,
                        o = r.y,
                        s = r.width,
                        a = r.height,
                        u = r.radius,
                        h = []; if (h.push(n, o + u), this.quadraticBezierCurve(n, o + a - u, n, o + a, n + u, o + a, h), this.quadraticBezierCurve(n + s - u, o + a, n + s, o + a, n + s, o + a - u, h), this.quadraticBezierCurve(n + s, o + u, n + s, o, n + s - u, o, h), this.quadraticBezierCurve(n + u, o, n, o, n, o + u + 1e-10, h), t.fill) { var c = i.hex2rgb(t.fillColor),
                            p = t.fillAlpha,
                            d = c[0] * p,
                            f = c[1] * p,
                            v = c[2] * p,
                            g = e.points,
                            m = e.indices,
                            y = g.length / 6,
                            x = l(h, null, 2),
                            b = 0; for (b = 0; b < x.length; b += 3) m.push(x[b] + y), m.push(x[b] + y), m.push(x[b + 1] + y), m.push(x[b + 2] + y), m.push(x[b + 2] + y); for (b = 0; b < h.length; b++) g.push(h[b], h[++b], d, f, v, p) } if (t.lineWidth) { var _ = t.points;
                        t.points = h, this.buildLine(t, e), t.points = _ } }, r.prototype.quadraticBezierCurve = function(t, e, r, i, n, o, s) {
                    function a(t, e, r) { var i = e - t; return t + i * r } for (var u, l, h, c, p, d, f = 20, v = s || [], g = 0, m = 0; f >= m; m++) g = m / f, u = a(t, r, g), l = a(e, i, g), h = a(r, n, g), c = a(i, o, g), p = a(u, h, g), d = a(l, c, g), v.push(p, d); return v }, r.prototype.buildCircle = function(t, e) { var r, n, s = t.shape,
                        a = s.x,
                        u = s.y;
                    t.type === o.SHAPES.CIRC ? (r = s.radius, n = s.radius) : (r = s.width, n = s.height); var l = 40,
                        h = 2 * Math.PI / l,
                        c = 0; if (t.fill) { var p = i.hex2rgb(t.fillColor),
                            d = t.fillAlpha,
                            f = p[0] * d,
                            v = p[1] * d,
                            g = p[2] * d,
                            m = e.points,
                            y = e.indices,
                            x = m.length / 6; for (y.push(x), c = 0; l + 1 > c; c++) m.push(a, u, f, v, g, d), m.push(a + Math.sin(h * c) * r, u + Math.cos(h * c) * n, f, v, g, d), y.push(x++, x++);
                        y.push(x - 1) } if (t.lineWidth) { var b = t.points; for (t.points = [], c = 0; l + 1 > c; c++) t.points.push(a + Math.sin(h * c) * r, u + Math.cos(h * c) * n);
                        this.buildLine(t, e), t.points = b } }, r.prototype.buildLine = function(t, e) { var r = 0,
                        o = t.points; if (0 !== o.length) { if (t.lineWidth % 2)
                            for (r = 0; r < o.length; r++) o[r] += .5; var s = new n.Point(o[0], o[1]),
                            a = new n.Point(o[o.length - 2], o[o.length - 1]); if (s.x === a.x && s.y === a.y) { o = o.slice(), o.pop(), o.pop(), a = new n.Point(o[o.length - 2], o[o.length - 1]); var u = a.x + .5 * (s.x - a.x),
                                l = a.y + .5 * (s.y - a.y);
                            o.unshift(u, l), o.push(u, l) } var h, c, p, d, f, v, g, m, y, x, b, _, T, E, S, w, A, C, M, R, F, D, P, O = e.points,
                            B = e.indices,
                            L = o.length / 2,
                            I = o.length,
                            N = O.length / 6,
                            U = t.lineWidth / 2,
                            k = i.hex2rgb(t.lineColor),
                            j = t.lineAlpha,
                            G = k[0] * j,
                            X = k[1] * j,
                            Y = k[2] * j; for (p = o[0], d = o[1], f = o[2], v = o[3], y = -(d - v), x = p - f, P = Math.sqrt(y * y + x * x), y /= P, x /= P, y *= U, x *= U, O.push(p - y, d - x, G, X, Y, j), O.push(p + y, d + x, G, X, Y, j), r = 1; L - 1 > r; r++) p = o[2 * (r - 1)], d = o[2 * (r - 1) + 1], f = o[2 * r], v = o[2 * r + 1], g = o[2 * (r + 1)], m = o[2 * (r + 1) + 1], y = -(d - v), x = p - f, P = Math.sqrt(y * y + x * x), y /= P, x /= P, y *= U, x *= U, b = -(v - m), _ = f - g, P = Math.sqrt(b * b + _ * _), b /= P, _ /= P, b *= U, _ *= U, S = -x + d - (-x + v), w = -y + f - (-y + p), A = (-y + p) * (-x + v) - (-y + f) * (-x + d), C = -_ + m - (-_ + v), M = -b + f - (-b + g), R = (-b + g) * (-_ + v) - (-b + f) * (-_ + m), F = S * M - C * w, Math.abs(F) < .1 ? (F += 10.1, O.push(f - y, v - x, G, X, Y, j), O.push(f + y, v + x, G, X, Y, j)) : (h = (w * R - M * A) / F, c = (C * A - S * R) / F, D = (h - f) * (h - f) + (c - v) + (c - v), D > 19600 ? (T = y - b, E = x - _, P = Math.sqrt(T * T + E * E), T /= P, E /= P, T *= U, E *= U, O.push(f - T, v - E), O.push(G, X, Y, j), O.push(f + T, v + E), O.push(G, X, Y, j), O.push(f - T, v - E), O.push(G, X, Y, j), I++) : (O.push(h, c), O.push(G, X, Y, j), O.push(f - (h - f), v - (c - v)), O.push(G, X, Y, j))); for (p = o[2 * (L - 2)], d = o[2 * (L - 2) + 1], f = o[2 * (L - 1)], v = o[2 * (L - 1) + 1], y = -(d - v), x = p - f, P = Math.sqrt(y * y + x * x), y /= P, x /= P, y *= U, x *= U, O.push(f - y, v - x), O.push(G, X, Y, j), O.push(f + y, v + x), O.push(G, X, Y, j), B.push(N), r = 0; I > r; r++) B.push(N++);
                        B.push(N - 1) } }, r.prototype.buildComplexPoly = function(t, e) { var r = t.points.slice(); if (!(r.length < 6)) { var n = e.indices;
                        e.points = r, e.alpha = t.fillAlpha, e.color = i.hex2rgb(t.fillColor); for (var o, s, a = 1 / 0, u = -1 / 0, l = 1 / 0, h = -1 / 0, c = 0; c < r.length; c += 2) o = r[c], s = r[c + 1], a = a > o ? o : a, u = o > u ? o : u, l = l > s ? s : l, h = s > h ? s : h;
                        r.push(a, l, u, l, u, h, a, h); var p = r.length / 2; for (c = 0; p > c; c++) n.push(c) } }, r.prototype.buildPoly = function(t, e) { var r = t.points; if (!(r.length < 6)) { var n = e.points,
                            o = e.indices,
                            s = r.length / 2,
                            a = i.hex2rgb(t.fillColor),
                            u = t.fillAlpha,
                            h = a[0] * u,
                            c = a[1] * u,
                            p = a[2] * u,
                            d = l(r, null, 2); if (!d) return !1; var f = n.length / 6,
                            v = 0; for (v = 0; v < d.length; v += 3) o.push(d[v] + f), o.push(d[v] + f), o.push(d[v + 1] + f), o.push(d[v + 2] + f), o.push(d[v + 2] + f); for (v = 0; s > v; v++) n.push(r[2 * v], r[2 * v + 1], h, c, p, u); return !0 } }
            }, { "../../const": 22, "../../math": 32, "../../renderers/webgl/WebGLRenderer": 48, "../../renderers/webgl/utils/ObjectRenderer": 62, "../../utils": 76, "./WebGLGraphicsData": 28, earcut: 10 }],
            28: [function(t, e) {
                function r(t) { this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0, this.glPoints = null, this.glIndices = null } r.prototype.constructor = r, e.exports = r, r.prototype.reset = function() { this.points.length = 0, this.indices.length = 0 }, r.prototype.upload = function() { var t = this.gl;
                    this.glPoints = new Float32Array(this.points), t.bindBuffer(t.ARRAY_BUFFER, this.buffer), t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW), this.glIndices = new Uint16Array(this.indices), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndices, t.STATIC_DRAW), this.dirty = !1 }, r.prototype.destroy = function() { this.color = null, this.points = null, this.indices = null, this.gl.deleteBuffer(this.buffer), this.gl.deleteBuffer(this.indexBuffer), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null } }, {}],
            29: [function(t, e) { var r = e.exports = Object.assign(t("./const"), t("./math"), { utils: t("./utils"), ticker: t("./ticker"), DisplayObject: t("./display/DisplayObject"), Container: t("./display/Container"), Sprite: t("./sprites/Sprite"), ParticleContainer: t("./particles/ParticleContainer"), SpriteRenderer: t("./sprites/webgl/SpriteRenderer"), ParticleRenderer: t("./particles/webgl/ParticleRenderer"), Text: t("./text/Text"), Graphics: t("./graphics/Graphics"), GraphicsData: t("./graphics/GraphicsData"), GraphicsRenderer: t("./graphics/webgl/GraphicsRenderer"), Texture: t("./textures/Texture"), BaseTexture: t("./textures/BaseTexture"), RenderTexture: t("./textures/RenderTexture"), VideoBaseTexture: t("./textures/VideoBaseTexture"), TextureUvs: t("./textures/TextureUvs"), CanvasRenderer: t("./renderers/canvas/CanvasRenderer"), CanvasGraphics: t("./renderers/canvas/utils/CanvasGraphics"), CanvasBuffer: t("./renderers/canvas/utils/CanvasBuffer"), WebGLRenderer: t("./renderers/webgl/WebGLRenderer"), ShaderManager: t("./renderers/webgl/managers/ShaderManager"), Shader: t("./renderers/webgl/shaders/Shader"), ObjectRenderer: t("./renderers/webgl/utils/ObjectRenderer"), RenderTarget: t("./renderers/webgl/utils/RenderTarget"), AbstractFilter: t("./renderers/webgl/filters/AbstractFilter"), FXAAFilter: t("./renderers/webgl/filters/FXAAFilter"), SpriteMaskFilter: t("./renderers/webgl/filters/SpriteMaskFilter"), autoDetectRenderer: function(t, e, i, n) { return t = t || 800, e = e || 600, !n && r.utils.isWebGLSupported() ? new r.WebGLRenderer(t, e, i) : new r.CanvasRenderer(t, e, i) } }) }, { "./const": 22, "./display/Container": 23, "./display/DisplayObject": 24, "./graphics/Graphics": 25, "./graphics/GraphicsData": 26, "./graphics/webgl/GraphicsRenderer": 27, "./math": 32, "./particles/ParticleContainer": 38, "./particles/webgl/ParticleRenderer": 40, "./renderers/canvas/CanvasRenderer": 43, "./renderers/canvas/utils/CanvasBuffer": 44, "./renderers/canvas/utils/CanvasGraphics": 45, "./renderers/webgl/WebGLRenderer": 48, "./renderers/webgl/filters/AbstractFilter": 49, "./renderers/webgl/filters/FXAAFilter": 50, "./renderers/webgl/filters/SpriteMaskFilter": 51, "./renderers/webgl/managers/ShaderManager": 55, "./renderers/webgl/shaders/Shader": 60, "./renderers/webgl/utils/ObjectRenderer": 62, "./renderers/webgl/utils/RenderTarget": 64, "./sprites/Sprite": 66, "./sprites/webgl/SpriteRenderer": 67, "./text/Text": 68, "./textures/BaseTexture": 69, "./textures/RenderTexture": 70, "./textures/Texture": 71, "./textures/TextureUvs": 72, "./textures/VideoBaseTexture": 73, "./ticker": 75, "./utils": 76 }],
            30: [function(t, e) {
                function r() { this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0 } var i = t("./Point");
                r.prototype.constructor = r, e.exports = r, r.prototype.fromArray = function(t) { this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5] }, r.prototype.toArray = function(t, e) { this.array || (this.array = new Float32Array(9)); var r = e || this.array; return t ? (r[0] = this.a, r[1] = this.b, r[2] = 0, r[3] = this.c, r[4] = this.d, r[5] = 0, r[6] = this.tx, r[7] = this.ty, r[8] = 1) : (r[0] = this.a, r[1] = this.c, r[2] = this.tx, r[3] = this.b, r[4] = this.d, r[5] = this.ty, r[6] = 0, r[7] = 0, r[8] = 1), r }, r.prototype.apply = function(t, e) { e = e || new i; var r = t.x,
                        n = t.y; return e.x = this.a * r + this.c * n + this.tx, e.y = this.b * r + this.d * n + this.ty, e }, r.prototype.applyInverse = function(t, e) { e = e || new i; var r = 1 / (this.a * this.d + this.c * -this.b),
                        n = t.x,
                        o = t.y; return e.x = this.d * r * n + -this.c * r * o + (this.ty * this.c - this.tx * this.d) * r, e.y = this.a * r * o + -this.b * r * n + (-this.ty * this.a + this.tx * this.b) * r, e }, r.prototype.translate = function(t, e) { return this.tx += t, this.ty += e, this }, r.prototype.scale = function(t, e) { return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this }, r.prototype.rotate = function(t) { var e = Math.cos(t),
                        r = Math.sin(t),
                        i = this.a,
                        n = this.c,
                        o = this.tx; return this.a = i * e - this.b * r, this.b = i * r + this.b * e, this.c = n * e - this.d * r, this.d = n * r + this.d * e, this.tx = o * e - this.ty * r, this.ty = o * r + this.ty * e, this }, r.prototype.append = function(t) { var e = this.a,
                        r = this.b,
                        i = this.c,
                        n = this.d; return this.a = t.a * e + t.b * i, this.b = t.a * r + t.b * n, this.c = t.c * e + t.d * i, this.d = t.c * r + t.d * n, this.tx = t.tx * e + t.ty * i + this.tx, this.ty = t.tx * r + t.ty * n + this.ty, this }, r.prototype.prepend = function(t) { var e = this.tx; if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) { var r = this.a,
                            i = this.c;
                        this.a = r * t.a + this.b * t.c, this.b = r * t.b + this.b * t.d, this.c = i * t.a + this.d * t.c, this.d = i * t.b + this.d * t.d } return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this }, r.prototype.invert = function() { var t = this.a,
                        e = this.b,
                        r = this.c,
                        i = this.d,
                        n = this.tx,
                        o = t * i - e * r; return this.a = i / o, this.b = -e / o, this.c = -r / o, this.d = t / o, this.tx = (r * this.ty - i * n) / o, this.ty = -(t * this.ty - e * n) / o, this }, r.prototype.identity = function() { return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this }, r.prototype.clone = function() { var t = new r; return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t }, r.prototype.copy = function(t) { return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t }, r.IDENTITY = new r, r.TEMP_MATRIX = new r }, { "./Point": 31 }],
            31: [function(t, e) {
                function r(t, e) { this.x = t || 0, this.y = e || 0 } r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() { return new r(this.x, this.y) }, r.prototype.copy = function(t) { this.set(t.x, t.y) }, r.prototype.equals = function(t) { return t.x === this.x && t.y === this.y }, r.prototype.set = function(t, e) { this.x = t || 0, this.y = e || (0 !== e ? this.x : 0) } }, {}],
            32: [function(t, e) { e.exports = { Point: t("./Point"), Matrix: t("./Matrix"), Circle: t("./shapes/Circle"), Ellipse: t("./shapes/Ellipse"), Polygon: t("./shapes/Polygon"), Rectangle: t("./shapes/Rectangle"), RoundedRectangle: t("./shapes/RoundedRectangle") } }, { "./Matrix": 30, "./Point": 31, "./shapes/Circle": 33, "./shapes/Ellipse": 34, "./shapes/Polygon": 35, "./shapes/Rectangle": 36, "./shapes/RoundedRectangle": 37 }],
            33: [function(t, e) {
                function r(t, e, r) { this.x = t || 0, this.y = e || 0, this.radius = r || 0, this.type = n.SHAPES.CIRC } var i = t("./Rectangle"),
                    n = t("../../const");
                r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() { return new r(this.x, this.y, this.radius) }, r.prototype.contains = function(t, e) { if (this.radius <= 0) return !1; var r = this.x - t,
                        i = this.y - e,
                        n = this.radius * this.radius; return r *= r, i *= i, n >= r + i }, r.prototype.getBounds = function() { return new i(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius) } }, { "../../const": 22, "./Rectangle": 36 }],
            34: [function(t, e) {
                function r(t, e, r, i) { this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = i || 0, this.type = n.SHAPES.ELIP } var i = t("./Rectangle"),
                    n = t("../../const");
                r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() { return new r(this.x, this.y, this.width, this.height) }, r.prototype.contains = function(t, e) { if (this.width <= 0 || this.height <= 0) return !1; var r = (t - this.x) / this.width,
                        i = (e - this.y) / this.height; return r *= r, i *= i, 1 >= r + i }, r.prototype.getBounds = function() { return new i(this.x - this.width, this.y - this.height, this.width, this.height) } }, { "../../const": 22, "./Rectangle": 36 }],
            35: [function(t, e) {
                function r(t) { var e = t; if (!Array.isArray(e)) { e = new Array(arguments.length); for (var r = 0; r < e.length; ++r) e[r] = arguments[r] } if (e[0] instanceof i) { for (var o = [], s = 0, a = e.length; a > s; s++) o.push(e[s].x, e[s].y);
                        e = o } this.closed = !0, this.points = e, this.type = n.SHAPES.POLY } var i = t("../Point"),
                    n = t("../../const");
                r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() { return new r(this.points.slice()) }, r.prototype.contains = function(t, e) { for (var r = !1, i = this.points.length / 2, n = 0, o = i - 1; i > n; o = n++) { var s = this.points[2 * n],
                            a = this.points[2 * n + 1],
                            u = this.points[2 * o],
                            l = this.points[2 * o + 1],
                            h = a > e != l > e && (u - s) * (e - a) / (l - a) + s > t;
                        h && (r = !r) } return r } }, { "../../const": 22, "../Point": 31 }],
            36: [function(t, e) {
                function r(t, e, r, n) { this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = n || 0, this.type = i.SHAPES.RECT } var i = t("../../const");
                r.prototype.constructor = r, e.exports = r, r.EMPTY = new r(0, 0, 0, 0), r.prototype.clone = function() { return new r(this.x, this.y, this.width, this.height) }, r.prototype.contains = function(t, e) { return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height ? !0 : !1 } }, { "../../const": 22 }],
            37: [function(t, e) {
                function r(t, e, r, n, o) { this.x = t || 0, this.y = e || 0, this.width = r || 0, this.height = n || 0, this.radius = o || 20, this.type = i.SHAPES.RREC } var i = t("../../const");
                r.prototype.constructor = r, e.exports = r, r.prototype.clone = function() { return new r(this.x, this.y, this.width, this.height, this.radius) }, r.prototype.contains = function(t, e) { return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height ? !0 : !1 } }, { "../../const": 22 }],
            38: [function(t, e) {
                function r(t, e) { i.call(this), this._properties = [!1, !0, !1, !1, !1], this._size = t || 15e3, this._buffers = null, this._updateStatic = !1, this.interactiveChildren = !1, this.blendMode = n.BLEND_MODES.NORMAL, this.roundPixels = !0, this.setProperties(e) } var i = t("../display/Container"),
                    n = t("../const");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setProperties = function(t) { t && (this._properties[0] = "scale" in t ? !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "alpha" in t ? !!t.alpha : this._properties[4]) }, r.prototype.updateTransform = function() { this.displayObjectUpdateTransform() }, r.prototype.renderWebGL = function(t) { this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this)) }, r.prototype.addChildAt = function(t, e) { if (t === this) return t; if (e >= 0 && e <= this.children.length) return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this._updateStatic = !0, t; throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length) }, r.prototype.removeChildAt = function(t) { var e = this.getChildAt(t); return e.parent = null, this.children.splice(t, 1), this._updateStatic = !0, e }, r.prototype.renderCanvas = function(t) { if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) { var e = t.context,
                            r = this.worldTransform,
                            i = !0,
                            n = 0,
                            o = 0,
                            s = 0,
                            a = 0;
                        e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform(); for (var u = 0; u < this.children.length; ++u) { var l = this.children[u]; if (l.visible) { var h = l.texture.frame; if (e.globalAlpha = this.worldAlpha * l.alpha, l.rotation % (2 * Math.PI) === 0) i && (e.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), i = !1), n = l.anchor.x * -h.width * l.scale.x + l.position.x + .5, o = l.anchor.y * -h.height * l.scale.y + l.position.y + .5, s = h.width * l.scale.x, a = h.height * l.scale.y;
                                else { i || (i = !0), l.displayObjectUpdateTransform(); var c = l.worldTransform;
                                    t.roundPixels ? e.setTransform(c.a, c.b, c.c, c.d, 0 | c.tx, 0 | c.ty) : e.setTransform(c.a, c.b, c.c, c.d, c.tx, c.ty), n = l.anchor.x * -h.width + .5, o = l.anchor.y * -h.height + .5, s = h.width, a = h.height } e.drawImage(l.texture.baseTexture.source, h.x, h.y, h.width, h.height, n, o, s, a) } } } }, r.prototype.destroy = function() { if (i.prototype.destroy.apply(this, arguments), this._buffers)
                        for (var t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
                    this._properties = null, this._buffers = null } }, { "../const": 22, "../display/Container": 23 }],
            39: [function(t, e) {
                function r(t, e, r) { this.gl = t, this.vertSize = 2, this.vertByteSize = 4 * this.vertSize, this.size = r, this.dynamicProperties = [], this.staticProperties = []; for (var i = 0; i < e.length; i++) { var n = e[i];
                        n.dynamic ? this.dynamicProperties.push(n) : this.staticProperties.push(n) } this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.initBuffers() } r.prototype.constructor = r, e.exports = r, r.prototype.initBuffers = function() { var t, e, r = this.gl,
                        i = 0; for (this.dynamicStride = 0, t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], e.offset = i, i += e.size, this.dynamicStride += e.size;
                    this.dynamicData = new Float32Array(this.size * this.dynamicStride * 4), this.dynamicBuffer = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer), r.bufferData(r.ARRAY_BUFFER, this.dynamicData, r.DYNAMIC_DRAW); var n = 0; for (this.staticStride = 0, t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], e.offset = n, n += e.size, this.staticStride += e.size;
                    this.staticData = new Float32Array(this.size * this.staticStride * 4), this.staticBuffer = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer), r.bufferData(r.ARRAY_BUFFER, this.staticData, r.DYNAMIC_DRAW) }, r.prototype.uploadDynamic = function(t, e, r) { for (var i = this.gl, n = 0; n < this.dynamicProperties.length; n++) { var o = this.dynamicProperties[n];
                        o.uploadFunction(t, e, r, this.dynamicData, this.dynamicStride, o.offset) } i.bindBuffer(i.ARRAY_BUFFER, this.dynamicBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.dynamicData) }, r.prototype.uploadStatic = function(t, e, r) { for (var i = this.gl, n = 0; n < this.staticProperties.length; n++) { var o = this.staticProperties[n];
                        o.uploadFunction(t, e, r, this.staticData, this.staticStride, o.offset) } i.bindBuffer(i.ARRAY_BUFFER, this.staticBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.staticData) }, r.prototype.bind = function() { var t, e, r = this.gl; for (r.bindBuffer(r.ARRAY_BUFFER, this.dynamicBuffer), t = 0; t < this.dynamicProperties.length; t++) e = this.dynamicProperties[t], r.vertexAttribPointer(e.attribute, e.size, r.FLOAT, !1, 4 * this.dynamicStride, 4 * e.offset); for (r.bindBuffer(r.ARRAY_BUFFER, this.staticBuffer), t = 0; t < this.staticProperties.length; t++) e = this.staticProperties[t], r.vertexAttribPointer(e.attribute, e.size, r.FLOAT, !1, 4 * this.staticStride, 4 * e.offset) }, r.prototype.destroy = function() { this.dynamicProperties = null, this.dynamicData = null, this.gl.deleteBuffer(this.dynamicBuffer), this.staticProperties = null, this.staticData = null, this.gl.deleteBuffer(this.staticBuffer) } }, {}],
            40: [function(t, e) {
                function r(t) { i.call(this, t), this.size = 15e3; var e = 6 * this.size;
                    this.indices = new Uint16Array(e); for (var r = 0, n = 0; e > r; r += 6, n += 4) this.indices[r + 0] = n + 0, this.indices[r + 1] = n + 1, this.indices[r + 2] = n + 2, this.indices[r + 3] = n + 0, this.indices[r + 4] = n + 2, this.indices[r + 5] = n + 3;
                    this.shader = null, this.indexBuffer = null, this.properties = null, this.tempMatrix = new a.Matrix } var i = t("../../renderers/webgl/utils/ObjectRenderer"),
                    n = t("../../renderers/webgl/WebGLRenderer"),
                    o = t("./ParticleShader"),
                    s = t("./ParticleBuffer"),
                    a = t("../../math");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, n.registerPlugin("particle", r), r.prototype.onContextChange = function() { var t = this.renderer.gl;
                    this.shader = new o(this.renderer.shaderManager), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.properties = [{ attribute: this.shader.attributes.aVertexPosition, dynamic: !1, size: 2, uploadFunction: this.uploadVertices, offset: 0 }, { attribute: this.shader.attributes.aPositionCoord, dynamic: !0, size: 2, uploadFunction: this.uploadPosition, offset: 0 }, { attribute: this.shader.attributes.aRotation, dynamic: !1, size: 1, uploadFunction: this.uploadRotation, offset: 0 }, { attribute: this.shader.attributes.aTextureCoord, dynamic: !1, size: 2, uploadFunction: this.uploadUvs, offset: 0 }, { attribute: this.shader.attributes.aColor, dynamic: !1, size: 1, uploadFunction: this.uploadAlpha, offset: 0 }] }, r.prototype.start = function() { var t = this.renderer.gl;
                    t.activeTexture(t.TEXTURE0), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer); var e = this.shader;
                    this.renderer.shaderManager.setShader(e) }, r.prototype.render = function(t) { var e = t.children,
                        r = e.length,
                        i = t._size; if (0 !== r) { r > i && (r = i), t._buffers || (t._buffers = this.generateBuffers(t)), this.renderer.blendModeManager.setBlendMode(t.blendMode); var n = this.renderer.gl,
                            o = t.worldTransform.copy(this.tempMatrix);
                        o.prepend(this.renderer.currentRenderTarget.projectionMatrix), n.uniformMatrix3fv(this.shader.uniforms.projectionMatrix._location, !1, o.toArray(!0)), n.uniform1f(this.shader.uniforms.uAlpha._location, t.worldAlpha); var s = t._updateStatic,
                            a = e[0]._texture.baseTexture; if (a._glTextures[n.id]) n.bindTexture(n.TEXTURE_2D, a._glTextures[n.id]);
                        else { if (!this.renderer.updateTexture(a)) return;
                            this.properties[0].dynamic && this.properties[3].dynamic || (s = !0) } for (var u = 0, l = 0; r > l; l += this.size) { var h = r - l;
                            h > this.size && (h = this.size); var c = t._buffers[u++];
                            c.uploadDynamic(e, l, h), s && c.uploadStatic(e, l, h), c.bind(this.shader), n.drawElements(n.TRIANGLES, 6 * h, n.UNSIGNED_SHORT, 0), this.renderer.drawCount++ } t._updateStatic = !1 } }, r.prototype.generateBuffers = function(t) { var e, r = this.renderer.gl,
                        i = [],
                        n = t._size; for (e = 0; e < t._properties.length; e++) this.properties[e].dynamic = t._properties[e]; for (e = 0; n > e; e += this.size) i.push(new s(r, this.properties, this.size, this.shader)); return i }, r.prototype.uploadVertices = function(t, e, r, i, n, o) { for (var s, a, u, l, h, c, p, d, f, v = 0; r > v; v++) s = t[e + v], a = s._texture, l = s.scale.x, h = s.scale.y, a.trim ? (u = a.trim, p = u.x - s.anchor.x * u.width, c = p + a.crop.width, f = u.y - s.anchor.y * u.height, d = f + a.crop.height) : (c = a._frame.width * (1 - s.anchor.x), p = a._frame.width * -s.anchor.x, d = a._frame.height * (1 - s.anchor.y), f = a._frame.height * -s.anchor.y), i[o] = p * l, i[o + 1] = f * h, i[o + n] = c * l, i[o + n + 1] = f * h, i[o + 2 * n] = c * l, i[o + 2 * n + 1] = d * h, i[o + 3 * n] = p * l, i[o + 3 * n + 1] = d * h, o += 4 * n }, r.prototype.uploadPosition = function(t, e, r, i, n, o) { for (var s = 0; r > s; s++) { var a = t[e + s].position;
                        i[o] = a.x, i[o + 1] = a.y, i[o + n] = a.x, i[o + n + 1] = a.y, i[o + 2 * n] = a.x, i[o + 2 * n + 1] = a.y, i[o + 3 * n] = a.x, i[o + 3 * n + 1] = a.y, o += 4 * n } }, r.prototype.uploadRotation = function(t, e, r, i, n, o) { for (var s = 0; r > s; s++) { var a = t[e + s].rotation;
                        i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n } }, r.prototype.uploadUvs = function(t, e, r, i, n, o) { for (var s = 0; r > s; s++) { var a = t[e + s]._texture._uvs;
                        a ? (i[o] = a.x0, i[o + 1] = a.y0, i[o + n] = a.x1, i[o + n + 1] = a.y1, i[o + 2 * n] = a.x2, i[o + 2 * n + 1] = a.y2, i[o + 3 * n] = a.x3, i[o + 3 * n + 1] = a.y3, o += 4 * n) : (i[o] = 0, i[o + 1] = 0, i[o + n] = 0, i[o + n + 1] = 0, i[o + 2 * n] = 0, i[o + 2 * n + 1] = 0, i[o + 3 * n] = 0, i[o + 3 * n + 1] = 0, o += 4 * n) } }, r.prototype.uploadAlpha = function(t, e, r, i, n, o) { for (var s = 0; r > s; s++) { var a = t[e + s].alpha;
                        i[o] = a, i[o + n] = a, i[o + 2 * n] = a, i[o + 3 * n] = a, o += 4 * n } }, r.prototype.destroy = function() { this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), i.prototype.destroy.apply(this, arguments), this.shader.destroy(), this.indices = null, this.tempMatrix = null } }, { "../../math": 32, "../../renderers/webgl/WebGLRenderer": 48, "../../renderers/webgl/utils/ObjectRenderer": 62, "./ParticleBuffer": 39, "./ParticleShader": 41 }],
            41: [function(t, e) {
                function r(t) { i.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "void main(void){", "   vec2 v = aVertexPosition;", "   v.x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   v.y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "uniform float uAlpha;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor * uAlpha;", "  if (color.a == 0.0) discard;", "  gl_FragColor = color;", "}"].join("\n"), { uAlpha: { type: "1f", value: 1 } }, { aPositionCoord: 0, aRotation: 0 }) } var i = t("../../renderers/webgl/shaders/TextureShader");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r }, { "../../renderers/webgl/shaders/TextureShader": 61 }],
            42: [function(t, e) {
                function r(t, e, r, a) { if (s.call(this), i.sayHello(t), a)
                        for (var u in o.DEFAULT_RENDER_OPTIONS) "undefined" == typeof a[u] && (a[u] = o.DEFAULT_RENDER_OPTIONS[u]);
                    else a = o.DEFAULT_RENDER_OPTIONS;
                    this.type = o.RENDERER_TYPE.UNKNOWN, this.width = e || 800, this.height = r || 600, this.view = a.view || document.createElement("canvas"), this.resolution = a.resolution, this.transparent = a.transparent, this.autoResize = a.autoResize || !1, this.blendModes = null, this.preserveDrawingBuffer = a.preserveDrawingBuffer, this.clearBeforeRender = a.clearBeforeRender, this._backgroundColor = 0, this._backgroundColorRgb = [0, 0, 0], this._backgroundColorString = "#000000", this.backgroundColor = a.backgroundColor || this._backgroundColor, this._tempDisplayObjectParent = { worldTransform: new n.Matrix, worldAlpha: 1, children: [] }, this._lastObjectRendered = this._tempDisplayObjectParent } var i = t("../utils"),
                    n = t("../math"),
                    o = t("../const"),
                    s = t("eventemitter3");
                r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { backgroundColor: { get: function() { return this._backgroundColor }, set: function(t) { this._backgroundColor = t, this._backgroundColorString = i.hex2string(t), i.hex2rgb(t, this._backgroundColorRgb) } } }), r.prototype.resize = function(t, e) { this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px") }, r.prototype.destroy = function(t) { t && this.view.parent && this.view.parent.removeChild(this.view), this.type = o.RENDERER_TYPE.UNKNOWN, this.width = 0, this.height = 0, this.view = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this._backgroundColor = 0, this._backgroundColorRgb = null, this._backgroundColorString = null } }, { "../const": 22, "../math": 32, "../utils": 76, eventemitter3: 11 }],
            43: [function(t, e) {
                function r(t, e, r) { i.call(this, "Canvas", t, e, r), this.type = a.RENDERER_TYPE.CANVAS, this.context = this.view.getContext("2d", { alpha: this.transparent }), this.refresh = !0, this.maskManager = new n, this.roundPixels = !1, this.currentScaleMode = a.SCALE_MODES.DEFAULT, this.currentBlendMode = a.BLEND_MODES.NORMAL, this.smoothProperty = "imageSmoothingEnabled", this.context.imageSmoothingEnabled || (this.context.webkitImageSmoothingEnabled ? this.smoothProperty = "webkitImageSmoothingEnabled" : this.context.mozImageSmoothingEnabled ? this.smoothProperty = "mozImageSmoothingEnabled" : this.context.oImageSmoothingEnabled ? this.smoothProperty = "oImageSmoothingEnabled" : this.context.msImageSmoothingEnabled && (this.smoothProperty = "msImageSmoothingEnabled")), this.initPlugins(), this._mapBlendModes(), this._tempDisplayObjectParent = { worldTransform: new s.Matrix, worldAlpha: 1 }, this.resize(t, e) } var i = t("../SystemRenderer"),
                    n = t("./utils/CanvasMaskManager"),
                    o = t("../../utils"),
                    s = t("../../math"),
                    a = t("../../const");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, o.pluginTarget.mixin(r), r.prototype.render = function(t) { var e = t.parent;
                    this._lastObjectRendered = t, t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e, this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, this.currentBlendMode = a.BLEND_MODES.NORMAL, this.context.globalCompositeOperation = this.blendModes[a.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = this._backgroundColorString, this.context.fillRect(0, 0, this.width, this.height))), this.renderDisplayObject(t, this.context) }, r.prototype.destroy = function(t) { this.destroyPlugins(), i.prototype.destroy.call(this, t), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.roundPixels = !1, this.currentScaleMode = 0, this.currentBlendMode = 0, this.smoothProperty = null }, r.prototype.renderDisplayObject = function(t, e) { var r = this.context;
                    this.context = e, t.renderCanvas(this), this.context = r }, r.prototype.resize = function(t, e) { i.prototype.resize.call(this, t, e), this.currentScaleMode = a.SCALE_MODES.DEFAULT, this.smoothProperty && (this.context[this.smoothProperty] = this.currentScaleMode === a.SCALE_MODES.LINEAR) }, r.prototype._mapBlendModes = function() { this.blendModes || (this.blendModes = {}, o.canUseNewCanvasBlendModes() ? (this.blendModes[a.BLEND_MODES.NORMAL] = "source-over", this.blendModes[a.BLEND_MODES.ADD] = "lighter", this.blendModes[a.BLEND_MODES.MULTIPLY] = "multiply", this.blendModes[a.BLEND_MODES.SCREEN] = "screen", this.blendModes[a.BLEND_MODES.OVERLAY] = "overlay", this.blendModes[a.BLEND_MODES.DARKEN] = "darken", this.blendModes[a.BLEND_MODES.LIGHTEN] = "lighten", this.blendModes[a.BLEND_MODES.COLOR_DODGE] = "color-dodge", this.blendModes[a.BLEND_MODES.COLOR_BURN] = "color-burn", this.blendModes[a.BLEND_MODES.HARD_LIGHT] = "hard-light", this.blendModes[a.BLEND_MODES.SOFT_LIGHT] = "soft-light", this.blendModes[a.BLEND_MODES.DIFFERENCE] = "difference", this.blendModes[a.BLEND_MODES.EXCLUSION] = "exclusion", this.blendModes[a.BLEND_MODES.HUE] = "hue", this.blendModes[a.BLEND_MODES.SATURATION] = "saturate", this.blendModes[a.BLEND_MODES.COLOR] = "color", this.blendModes[a.BLEND_MODES.LUMINOSITY] = "luminosity") : (this.blendModes[a.BLEND_MODES.NORMAL] = "source-over", this.blendModes[a.BLEND_MODES.ADD] = "lighter", this.blendModes[a.BLEND_MODES.MULTIPLY] = "source-over", this.blendModes[a.BLEND_MODES.SCREEN] = "source-over", this.blendModes[a.BLEND_MODES.OVERLAY] = "source-over", this.blendModes[a.BLEND_MODES.DARKEN] = "source-over", this.blendModes[a.BLEND_MODES.LIGHTEN] = "source-over", this.blendModes[a.BLEND_MODES.COLOR_DODGE] = "source-over", this.blendModes[a.BLEND_MODES.COLOR_BURN] = "source-over", this.blendModes[a.BLEND_MODES.HARD_LIGHT] = "source-over", this.blendModes[a.BLEND_MODES.SOFT_LIGHT] = "source-over", this.blendModes[a.BLEND_MODES.DIFFERENCE] = "source-over", this.blendModes[a.BLEND_MODES.EXCLUSION] = "source-over", this.blendModes[a.BLEND_MODES.HUE] = "source-over", this.blendModes[a.BLEND_MODES.SATURATION] = "source-over", this.blendModes[a.BLEND_MODES.COLOR] = "source-over", this.blendModes[a.BLEND_MODES.LUMINOSITY] = "source-over")) } }, { "../../const": 22, "../../math": 32, "../../utils": 76, "../SystemRenderer": 42, "./utils/CanvasMaskManager": 46 }],
            44: [function(t, e) {
                function r(t, e) { this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = t, this.canvas.height = e } r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { width: { get: function() { return this.canvas.width }, set: function(t) { this.canvas.width = t } }, height: { get: function() { return this.canvas.height }, set: function(t) { this.canvas.height = t } } }), r.prototype.clear = function() {
                    this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }, r.prototype.resize = function(t, e) { this.canvas.width = t, this.canvas.height = e }, r.prototype.destroy = function() { this.context = null, this.canvas = null }
            }, {}],
            45: [function(t, e) { var r = t("../../../const"),
                    i = {};
                e.exports = i, i.renderGraphics = function(t, e) { var i = t.worldAlpha;
                    t.dirty && (this.updateGraphicsTint(t), t.dirty = !1); for (var n = 0; n < t.graphicsData.length; n++) { var o = t.graphicsData[n],
                            s = o.shape,
                            a = o._fillTint,
                            u = o._lineTint; if (e.lineWidth = o.lineWidth, o.type === r.SHAPES.POLY) { e.beginPath(); var l = s.points;
                            e.moveTo(l[0], l[1]); for (var h = 1; h < l.length / 2; h++) e.lineTo(l[2 * h], l[2 * h + 1]);
                            s.closed && e.lineTo(l[0], l[1]), l[0] === l[l.length - 2] && l[1] === l[l.length - 1] && e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), e.stroke()) } else if (o.type === r.SHAPES.RECT)(o.fillColor || 0 === o.fillColor) && (e.globalAlpha = o.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fillRect(s.x, s.y, s.width, s.height)), o.lineWidth && (e.globalAlpha = o.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), e.strokeRect(s.x, s.y, s.width, s.height));
                        else if (o.type === r.SHAPES.CIRC) e.beginPath(), e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), e.stroke());
                        else if (o.type === r.SHAPES.ELIP) { var c = 2 * s.width,
                                p = 2 * s.height,
                                d = s.x - c / 2,
                                f = s.y - p / 2;
                            e.beginPath(); var v = .5522848,
                                g = c / 2 * v,
                                m = p / 2 * v,
                                y = d + c,
                                x = f + p,
                                b = d + c / 2,
                                _ = f + p / 2;
                            e.moveTo(d, _), e.bezierCurveTo(d, _ - m, b - g, f, b, f), e.bezierCurveTo(b + g, f, y, _ - m, y, _), e.bezierCurveTo(y, _ + m, b + g, x, b, x), e.bezierCurveTo(b - g, x, d, _ + m, d, _), e.closePath(), o.fill && (e.globalAlpha = o.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), e.stroke()) } else if (o.type === r.SHAPES.RREC) { var T = s.x,
                                E = s.y,
                                S = s.width,
                                w = s.height,
                                A = s.radius,
                                C = Math.min(S, w) / 2 | 0;
                            A = A > C ? C : A, e.beginPath(), e.moveTo(T, E + A), e.lineTo(T, E + w - A), e.quadraticCurveTo(T, E + w, T + A, E + w), e.lineTo(T + S - A, E + w), e.quadraticCurveTo(T + S, E + w, T + S, E + w - A), e.lineTo(T + S, E + A), e.quadraticCurveTo(T + S, E, T + S - A, E), e.lineTo(T + A, E), e.quadraticCurveTo(T, E, T, E + A), e.closePath(), (o.fillColor || 0 === o.fillColor) && (e.globalAlpha = o.fillAlpha * i, e.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), e.fill()), o.lineWidth && (e.globalAlpha = o.lineAlpha * i, e.strokeStyle = "#" + ("00000" + (0 | u).toString(16)).substr(-6), e.stroke()) } } }, i.renderGraphicsMask = function(t, e) { var i = t.graphicsData.length; if (0 !== i) { e.beginPath(); for (var n = 0; i > n; n++) { var o = t.graphicsData[n],
                                s = o.shape; if (o.type === r.SHAPES.POLY) { var a = s.points;
                                e.moveTo(a[0], a[1]); for (var u = 1; u < a.length / 2; u++) e.lineTo(a[2 * u], a[2 * u + 1]);
                                a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath() } else if (o.type === r.SHAPES.RECT) e.rect(s.x, s.y, s.width, s.height), e.closePath();
                            else if (o.type === r.SHAPES.CIRC) e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath();
                            else if (o.type === r.SHAPES.ELIP) { var l = 2 * s.width,
                                    h = 2 * s.height,
                                    c = s.x - l / 2,
                                    p = s.y - h / 2,
                                    d = .5522848,
                                    f = l / 2 * d,
                                    v = h / 2 * d,
                                    g = c + l,
                                    m = p + h,
                                    y = c + l / 2,
                                    x = p + h / 2;
                                e.moveTo(c, x), e.bezierCurveTo(c, x - v, y - f, p, y, p), e.bezierCurveTo(y + f, p, g, x - v, g, x), e.bezierCurveTo(g, x + v, y + f, m, y, m), e.bezierCurveTo(y - f, m, c, x + v, c, x), e.closePath() } else if (o.type === r.SHAPES.RREC) { var b = s.x,
                                    _ = s.y,
                                    T = s.width,
                                    E = s.height,
                                    S = s.radius,
                                    w = Math.min(T, E) / 2 | 0;
                                S = S > w ? w : S, e.moveTo(b, _ + S), e.lineTo(b, _ + E - S), e.quadraticCurveTo(b, _ + E, b + S, _ + E), e.lineTo(b + T - S, _ + E), e.quadraticCurveTo(b + T, _ + E, b + T, _ + E - S), e.lineTo(b + T, _ + S), e.quadraticCurveTo(b + T, _, b + T - S, _), e.lineTo(b + S, _), e.quadraticCurveTo(b, _, b, _ + S), e.closePath() } } } }, i.updateGraphicsTint = function(t) { if (16777215 !== t.tint)
                        for (var e = (t.tint >> 16 & 255) / 255, r = (t.tint >> 8 & 255) / 255, i = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; n++) { var o = t.graphicsData[n],
                                s = 0 | o.fillColor,
                                a = 0 | o.lineColor;
                            o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * r * 255 << 8) + (255 & s) / 255 * i * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * r * 255 << 8) + (255 & a) / 255 * i * 255 } } }, { "../../../const": 22 }],
            46: [function(t, e) {
                function r() {} var i = t("./CanvasGraphics");
                r.prototype.constructor = r, e.exports = r, r.prototype.pushMask = function(t, e) { e.context.save(); var r = t.alpha,
                        n = t.worldTransform,
                        o = e.resolution;
                    e.context.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), t.texture || (i.renderGraphicsMask(t, e.context), e.context.clip()), t.worldAlpha = r }, r.prototype.popMask = function(t) { t.context.restore() }, r.prototype.destroy = function() {} }, { "./CanvasGraphics": 45 }],
            47: [function(t, e) { var r = t("../../../utils"),
                    i = {};
                e.exports = i, i.getTintedTexture = function(t, e) { var r = t.texture;
                    e = i.roundColor(e); var n = "#" + ("00000" + (0 | e).toString(16)).substr(-6); if (r.tintCache = r.tintCache || {}, r.tintCache[n]) return r.tintCache[n]; var o = i.canvas || document.createElement("canvas"); if (i.tintMethod(r, e, o), i.convertTintToImage) { var s = new Image;
                        s.src = o.toDataURL(), r.tintCache[n] = s } else r.tintCache[n] = o, i.canvas = null; return o }, i.tintWithMultiply = function(t, e, r) { var i = r.getContext("2d"),
                        n = t.crop;
                    r.width = n.width, r.height = n.height, i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "multiply", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height) }, i.tintWithOverlay = function(t, e, r) { var i = r.getContext("2d"),
                        n = t.crop;
                    r.width = n.width, r.height = n.height, i.globalCompositeOperation = "copy", i.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), i.fillRect(0, 0, n.width, n.height), i.globalCompositeOperation = "destination-atop", i.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height) }, i.tintWithPerPixel = function(t, e, i) { var n = i.getContext("2d"),
                        o = t.crop;
                    i.width = o.width, i.height = o.height, n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height); for (var s = r.hex2rgb(e), a = s[0], u = s[1], l = s[2], h = n.getImageData(0, 0, o.width, o.height), c = h.data, p = 0; p < c.length; p += 4) c[p + 0] *= a, c[p + 1] *= u, c[p + 2] *= l;
                    n.putImageData(h, 0, 0) }, i.roundColor = function(t) { var e = i.cacheStepsPerColorChannel,
                        n = r.hex2rgb(t); return n[0] = Math.min(255, n[0] / e * e), n[1] = Math.min(255, n[1] / e * e), n[2] = Math.min(255, n[2] / e * e), r.rgb2hex(n) }, i.cacheStepsPerColorChannel = 8, i.convertTintToImage = !1, i.canUseMultiply = r.canUseNewCanvasBlendModes(), i.tintMethod = i.canUseMultiply ? i.tintWithMultiply : i.tintWithPerPixel }, { "../../../utils": 76 }],
            48: [function(t, e) {
                function r(t, e, r) { r = r || {}, i.call(this, "WebGL", t, e, r), this.type = d.RENDERER_TYPE.WEBGL, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.handleContextLost, !1), this.view.addEventListener("webglcontextrestored", this.handleContextRestored, !1), this._useFXAA = !!r.forceFXAA && r.antialias, this._FXAAFilter = null, this._contextOptions = { alpha: this.transparent, antialias: r.antialias, premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent, stencil: !0, preserveDrawingBuffer: r.preserveDrawingBuffer }, this.drawCount = 0, this.shaderManager = new n(this), this.maskManager = new o(this), this.stencilManager = new s(this), this.filterManager = new a(this), this.blendModeManager = new u(this), this.currentRenderTarget = null, this.currentRenderer = new h(this), this.initPlugins(), this._createContext(), this._initContext(), this._mapGlModes(), this._renderTargetStack = [] } var i = t("../SystemRenderer"),
                    n = t("./managers/ShaderManager"),
                    o = t("./managers/MaskManager"),
                    s = t("./managers/StencilManager"),
                    a = t("./managers/FilterManager"),
                    u = t("./managers/BlendModeManager"),
                    l = t("./utils/RenderTarget"),
                    h = t("./utils/ObjectRenderer"),
                    c = t("./filters/FXAAFilter"),
                    p = t("../../utils"),
                    d = t("../../const");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, p.pluginTarget.mixin(r), r.glContextId = 0, r.prototype._createContext = function() { var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions); if (this.gl = t, !t) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                    this.glContextId = r.glContextId++, t.id = this.glContextId, t.renderer = this }, r.prototype._initContext = function() { var t = this.gl;
                    t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.enable(t.BLEND), this.renderTarget = new l(t, this.width, this.height, null, this.resolution, !0), this.setRenderTarget(this.renderTarget), this.emit("context", t), this.resize(this.width, this.height), this._useFXAA || (this._useFXAA = this._contextOptions.antialias && !t.getContextAttributes().antialias), this._useFXAA && (window.console.warn("FXAA antialiasing being used instead of native antialiasing"), this._FXAAFilter = [new c]) }, r.prototype.render = function(t) { if (!this.gl.isContextLost()) { this.drawCount = 0, this._lastObjectRendered = t, this._useFXAA && (this._FXAAFilter[0].uniforms.resolution.value.x = this.width, this._FXAAFilter[0].uniforms.resolution.value.y = this.height, t.filterArea = this.renderTarget.size, t.filters = this._FXAAFilter); var e = t.parent;
                        t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = e; var r = this.gl;
                        this.setRenderTarget(this.renderTarget), this.clearBeforeRender && (this.transparent ? r.clearColor(0, 0, 0, 0) : r.clearColor(this._backgroundColorRgb[0], this._backgroundColorRgb[1], this._backgroundColorRgb[2], 1), r.clear(r.COLOR_BUFFER_BIT)), this.renderDisplayObject(t, this.renderTarget) } }, r.prototype.renderDisplayObject = function(t, e, r) { this.setRenderTarget(e), r && e.clear(), this.filterManager.setFilterStack(e.filterStack), t.renderWebGL(this), this.currentRenderer.flush() }, r.prototype.setObjectRenderer = function(t) { this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start()) }, r.prototype.setRenderTarget = function(t) { this.currentRenderTarget !== t && (this.currentRenderTarget = t, this.currentRenderTarget.activate(), this.stencilManager.setMaskStack(t.stencilMaskStack)) }, r.prototype.resize = function(t, e) { i.prototype.resize.call(this, t, e), this.filterManager.resize(t, e), this.renderTarget.resize(t, e), this.currentRenderTarget === this.renderTarget && (this.renderTarget.activate(), this.gl.viewport(0, 0, this.width, this.height)) }, r.prototype.updateTexture = function(t) { if (t = t.baseTexture || t, t.hasLoaded) { var e = this.gl; return t._glTextures[e.id] || (t._glTextures[e.id] = e.createTexture(), t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this)), e.bindTexture(e.TEXTURE_2D, t._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t.scaleMode === d.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST), t.mipmap && t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === d.SCALE_MODES.LINEAR ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST), e.generateMipmap(e.TEXTURE_2D)) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t.scaleMode === d.SCALE_MODES.LINEAR ? e.LINEAR : e.NEAREST), t.isPowerOfTwo ? (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.REPEAT)) : (e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)), t._glTextures[e.id] } }, r.prototype.destroyTexture = function(t) { t = t.baseTexture || t, t.hasLoaded && t._glTextures[this.gl.id] && this.gl.deleteTexture(t._glTextures[this.gl.id]) }, r.prototype.handleContextLost = function(t) { t.preventDefault() }, r.prototype.handleContextRestored = function() { this._initContext(); for (var t in p.BaseTextureCache) p.BaseTextureCache[t]._glTextures.length = 0 }, r.prototype.destroy = function(t) { this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), i.prototype.destroy.call(this, t), this.uid = 0, this.shaderManager.destroy(), this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.maskManager = null, this.filterManager = null, this.blendModeManager = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.drawCount = 0, this.gl = null }, r.prototype._mapGlModes = function() { var t = this.gl;
                    this.blendModes || (this.blendModes = {}, this.blendModes[d.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.ADD] = [t.SRC_ALPHA, t.DST_ALPHA], this.blendModes[d.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.SCREEN] = [t.SRC_ALPHA, t.ONE], this.blendModes[d.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], this.blendModes[d.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA]), this.drawModes || (this.drawModes = {}, this.drawModes[d.DRAW_MODES.POINTS] = t.POINTS, this.drawModes[d.DRAW_MODES.LINES] = t.LINES, this.drawModes[d.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, this.drawModes[d.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, this.drawModes[d.DRAW_MODES.TRIANGLES] = t.TRIANGLES, this.drawModes[d.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, this.drawModes[d.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN) } }, { "../../const": 22, "../../utils": 76, "../SystemRenderer": 42, "./filters/FXAAFilter": 50, "./managers/BlendModeManager": 52, "./managers/FilterManager": 53, "./managers/MaskManager": 54, "./managers/ShaderManager": 55, "./managers/StencilManager": 56, "./utils/ObjectRenderer": 62, "./utils/RenderTarget": 64 }],
            49: [function(t, e) {
                function r(t, e, r) { this.shaders = [], this.padding = 0, this.uniforms = r || {}, this.vertexSrc = t || i.defaultVertexSrc, this.fragmentSrc = e || i.defaultFragmentSrc } var i = t("../shaders/TextureShader");
                r.prototype.constructor = r, e.exports = r, r.prototype.getShader = function(t) { var e = t.gl,
                        r = this.shaders[e.id]; return r || (r = new i(t.shaderManager, this.vertexSrc, this.fragmentSrc, this.uniforms, this.attributes), this.shaders[e.id] = r), r }, r.prototype.applyFilter = function(t, e, r, i) { var n = this.getShader(t);
                    t.filterManager.applyFilter(n, e, r, i) }, r.prototype.syncUniform = function(t) { for (var e = 0, r = this.shaders.length; r > e; ++e) this.shaders[e].syncUniform(t) } }, { "../shaders/TextureShader": 61 }],
            50: [function(t, e) {
                function r() { i.call(this, "\nprecision mediump float;\n\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform vec2 resolution;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n            out vec2 v_rgbNW, out vec2 v_rgbNE,\n            out vec2 v_rgbSW, out vec2 v_rgbSE,\n            out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n   vResolution = resolution;\n\n   //compute the texture coords and send them to varyings\n   texcoords(aTextureCoord * resolution, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n", 'precision lowp float;\n\n\n/**\nBasic FXAA implementation based on the code on geeks3d.com with the\nmodification that the texture2DLod stuff was removed since it\'s\nunsupported by WebGL.\n\n--\n\nFrom:\nhttps://github.com/mitsuhiko/webgl-meincraft\n\nCopyright (c) 2011 by Armin Ronacher.\n\nSome rights reserved.\n\nRedistribution and use in source and binary forms, with or without\nmodification, are permitted provided that the following conditions are\nmet:\n\n    * Redistributions of source code must retain the above copyright\n      notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above\n      copyright notice, this list of conditions and the following\n      disclaimer in the documentation and/or other materials provided\n      with the distribution.\n\n    * The names of the contributors may not be used to endorse or\n      promote products derived from this software without specific\n      prior written permission.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\nLIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\nA PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\nOWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\nSPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\nLIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\nDATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\nTHEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\nOF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n*/\n\n#ifndef FXAA_REDUCE_MIN\n    #define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n    #define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n    #define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vResolution;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform sampler2D uSampler;\n\n\nvoid main(void){\n\n    gl_FragColor = fxaa(uSampler, vTextureCoord * vResolution, vResolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n}\n', { resolution: { type: "v2", value: { x: 1, y: 1 } } }) } var i = t("./AbstractFilter");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r) { var i = t.filterManager,
                        n = this.getShader(t);
                    i.applyFilter(n, e, r) } }, { "./AbstractFilter": 49 }],
            51: [function(t, e) {
                function r(t) { var e = new n.Matrix;
                    i.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform sampler2D mask;\n\nvoid main(void)\n{\n    // check clip! this will stop the mask bleeding out from the edges\n    vec2 text = abs( vMaskCoord - 0.5 );\n    text = step(0.5, text);\n    float clip = 1.0 - max(text.y, text.x);\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    original *= (masky.r * masky.a * alpha * clip);\n    gl_FragColor = original;\n}\n", { mask: { type: "sampler2D", value: t._texture }, alpha: { type: "f", value: 1 }, otherMatrix: { type: "mat3", value: e.toArray(!0) } }), this.maskSprite = t, this.maskMatrix = e } var i = t("./AbstractFilter"),
                    n = t("../../../math");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r) { var i = t.filterManager;
                    this.uniforms.mask.value = this.maskSprite._texture, i.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.alpha.value = this.maskSprite.worldAlpha; var n = this.getShader(t);
                    i.applyFilter(n, e, r) }, Object.defineProperties(r.prototype, { map: { get: function() { return this.uniforms.mask.value }, set: function(t) { this.uniforms.mask.value = t } }, offset: { get: function() { return this.uniforms.offset.value }, set: function(t) { this.uniforms.offset.value = t } } }) }, { "../../../math": 32, "./AbstractFilter": 49 }],
            52: [function(t, e) {
                function r(t) { i.call(this, t), this.currentBlendMode = 99999 } var i = t("./WebGLManager");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setBlendMode = function(t) { if (this.currentBlendMode === t) return !1;
                    this.currentBlendMode = t; var e = this.renderer.blendModes[this.currentBlendMode]; return this.renderer.gl.blendFunc(e[0], e[1]), !0 } }, { "./WebGLManager": 57 }],
            53: [function(t, e) {
                function r(t) { i.call(this, t), this.filterStack = [], this.filterStack.push({ renderTarget: t.currentRenderTarget, filter: [], bounds: null }), this.texturePool = [], this.textureSize = new a.Rectangle(0, 0, t.width, t.height), this.currentFrame = null } var i = t("./WebGLManager"),
                    n = t("../utils/RenderTarget"),
                    o = t("../../../const"),
                    s = t("../utils/Quad"),
                    a = t("../../../math");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.onContextChange = function() { this.texturePool.length = 0; var t = this.renderer.gl;
                    this.quad = new s(t) }, r.prototype.setFilterStack = function(t) { this.filterStack = t }, r.prototype.pushFilter = function(t, e) { var r = t.filterArea ? t.filterArea.clone() : t.getBounds();
                    r.x = 0 | r.x, r.y = 0 | r.y, r.width = 0 | r.width, r.height = 0 | r.height; var i = 0 | e[0].padding; if (r.x -= i, r.y -= i, r.width += 2 * i, r.height += 2 * i, this.renderer.currentRenderTarget.transform) { var n = this.renderer.currentRenderTarget.transform;
                        r.x += n.tx, r.y += n.ty, this.capFilterArea(r), r.x -= n.tx, r.y -= n.ty } else this.capFilterArea(r); if (r.width > 0 && r.height > 0) { this.currentFrame = r; var o = this.getRenderTarget();
                        this.renderer.setRenderTarget(o), o.clear(), this.filterStack.push({ renderTarget: o, filter: e }) } else this.filterStack.push({ renderTarget: null, filter: e }) }, r.prototype.popFilter = function() { var t = this.filterStack.pop(),
                        e = this.filterStack[this.filterStack.length - 1],
                        r = t.renderTarget; if (t.renderTarget) { var i = e.renderTarget,
                            n = this.renderer.gl;
                        this.currentFrame = r.frame, this.quad.map(this.textureSize, r.frame), n.bindBuffer(n.ARRAY_BUFFER, this.quad.vertexBuffer), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.quad.indexBuffer); var s = t.filter; if (n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aVertexPosition, 2, n.FLOAT, !1, 0, 0), n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aTextureCoord, 2, n.FLOAT, !1, 0, 32), n.vertexAttribPointer(this.renderer.shaderManager.defaultShader.attributes.aColor, 4, n.FLOAT, !1, 0, 64), this.renderer.blendModeManager.setBlendMode(o.BLEND_MODES.NORMAL), 1 === s.length) s[0].uniforms.dimensions && (s[0].uniforms.dimensions.value[0] = this.renderer.width, s[0].uniforms.dimensions.value[1] = this.renderer.height, s[0].uniforms.dimensions.value[2] = this.quad.vertices[0], s[0].uniforms.dimensions.value[3] = this.quad.vertices[5]), s[0].applyFilter(this.renderer, r, i), this.returnRenderTarget(r);
                        else { for (var a = r, u = this.getRenderTarget(!0), l = 0; l < s.length - 1; l++) { var h = s[l];
                                h.uniforms.dimensions && (h.uniforms.dimensions.value[0] = this.renderer.width, h.uniforms.dimensions.value[1] = this.renderer.height, h.uniforms.dimensions.value[2] = this.quad.vertices[0], h.uniforms.dimensions.value[3] = this.quad.vertices[5]), h.applyFilter(this.renderer, a, u); var c = a;
                                a = u, u = c } s[s.length - 1].applyFilter(this.renderer, a, i), this.returnRenderTarget(a), this.returnRenderTarget(u) } return t.filter } }, r.prototype.getRenderTarget = function(t) { var e = this.texturePool.pop() || new n(this.renderer.gl, this.textureSize.width, this.textureSize.height, o.SCALE_MODES.LINEAR, this.renderer.resolution * o.FILTER_RESOLUTION); return e.frame = this.currentFrame, t && e.clear(!0), e }, r.prototype.returnRenderTarget = function(t) { this.texturePool.push(t) }, r.prototype.applyFilter = function(t, e, r, i) { var n = this.renderer.gl;
                    this.renderer.setRenderTarget(r), i && r.clear(), this.renderer.shaderManager.setShader(t), t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), t.syncUniforms(), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, e.texture), n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0) }, r.prototype.calculateMappedMatrix = function(t, e, r) { var i = e.worldTransform.copy(a.Matrix.TEMP_MATRIX),
                        n = e._texture.baseTexture,
                        o = r.identity(),
                        s = this.textureSize.height / this.textureSize.width;
                    o.translate(t.x / this.textureSize.width, t.y / this.textureSize.height), o.scale(1, s); var u = this.textureSize.width / n.width,
                        l = this.textureSize.height / n.height; return i.tx /= n.width * u, i.ty /= n.width * u, i.invert(), o.prepend(i), o.scale(1, 1 / s), o.scale(u, l), o.translate(e.anchor.x, e.anchor.y), o }, r.prototype.capFilterArea = function(t) { t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.textureSize.width && (t.width = this.textureSize.width - t.x), t.y + t.height > this.textureSize.height && (t.height = this.textureSize.height - t.y) }, r.prototype.resize = function(t, e) { this.textureSize.width = t, this.textureSize.height = e; for (var r = 0; r < this.texturePool.length; r++) this.texturePool[r].resize(t, e) }, r.prototype.destroy = function() { this.filterStack = null, this.offsetY = 0; for (var t = 0; t < this.texturePool.length; t++) this.texturePool[t].destroy();
                    this.texturePool = null } }, { "../../../const": 22, "../../../math": 32, "../utils/Quad": 63, "../utils/RenderTarget": 64, "./WebGLManager": 57 }],
            54: [function(t, e) {
                function r(t) { i.call(this, t), this.stencilStack = [], this.reverse = !0, this.count = 0, this.alphaMaskPool = [] } var i = t("./WebGLManager"),
                    n = t("../filters/SpriteMaskFilter");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.pushMask = function(t, e) { e.texture ? this.pushSpriteMask(t, e) : this.pushStencilMask(t, e) }, r.prototype.popMask = function(t, e) { e.texture ? this.popSpriteMask(t, e) : this.popStencilMask(t, e) }, r.prototype.pushSpriteMask = function(t, e) { var r = this.alphaMaskPool.pop();
                    r || (r = [new n(e)]), r[0].maskSprite = e, this.renderer.filterManager.pushFilter(t, r) }, r.prototype.popSpriteMask = function() { var t = this.renderer.filterManager.popFilter();
                    this.alphaMaskPool.push(t) }, r.prototype.pushStencilMask = function(t, e) { this.renderer.stencilManager.pushMask(e) }, r.prototype.popStencilMask = function(t, e) { this.renderer.stencilManager.popMask(e) } }, { "../filters/SpriteMaskFilter": 51, "./WebGLManager": 57 }],
            55: [function(t, e) {
                function r(t) { i.call(this, t), this.maxAttibs = 10, this.attribState = [], this.tempAttribState = []; for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
                    this.stack = [], this._currentId = -1, this.currentShader = null } var i = t("./WebGLManager"),
                    n = t("../shaders/TextureShader"),
                    o = t("../shaders/ComplexPrimitiveShader"),
                    s = t("../shaders/PrimitiveShader"),
                    a = t("../../../utils");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, a.pluginTarget.mixin(r), e.exports = r, r.prototype.onContextChange = function() { this.initPlugins(); var t = this.renderer.gl;
                    this.maxAttibs = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.attribState = []; for (var e = 0; e < this.maxAttibs; e++) this.attribState[e] = !1;
                    this.defaultShader = new n(this), this.primitiveShader = new s(this), this.complexPrimitiveShader = new o(this) }, r.prototype.setAttribs = function(t) { var e; for (e = 0; e < this.tempAttribState.length; e++) this.tempAttribState[e] = !1; for (var r in t) this.tempAttribState[t[r]] = !0; var i = this.renderer.gl; for (e = 0; e < this.attribState.length; e++) this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e], this.attribState[e] ? i.enableVertexAttribArray(e) : i.disableVertexAttribArray(e)) }, r.prototype.setShader = function(t) { return this._currentId === t.uid ? !1 : (this._currentId = t.uid, this.currentShader = t, this.renderer.gl.useProgram(t.program), this.setAttribs(t.attributes), !0) }, r.prototype.destroy = function() { i.prototype.destroy.call(this), this.destroyPlugins(), this.attribState = null, this.tempAttribState = null } }, { "../../../utils": 76, "../shaders/ComplexPrimitiveShader": 58, "../shaders/PrimitiveShader": 59, "../shaders/TextureShader": 61, "./WebGLManager": 57 }],
            56: [function(t, e) {
                function r(t) { i.call(this, t), this.stencilMaskStack = null }
                var i = t("./WebGLManager"),
                    n = t("../../../utils");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.setMaskStack = function(t) { this.stencilMaskStack = t; var e = this.renderer.gl;
                    0 === t.stencilStack.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST) }, r.prototype.pushStencil = function(t, e) {
                    this.renderer.currentRenderTarget.attachStencilBuffer();
                    var r = this.renderer.gl,
                        i = this.stencilMaskStack;
                    this.bindGraphics(t, e, this.renderer), 0 === i.stencilStack.length && (r.enable(r.STENCIL_TEST), r.clear(r.STENCIL_BUFFER_BIT), i.reverse = !0, i.count = 0), i.stencilStack.push(e);
                    var n = i.count;
                    r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), 1 === e.mode ? (r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), i.reverse ? (r.stencilFunc(r.EQUAL, 255 - n, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, n, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), i.reverse ? r.stencilFunc(r.EQUAL, 255 - (n + 1), 255) : r.stencilFunc(r.EQUAL, n + 1, 255), i.reverse = !i.reverse) : (i.reverse ? (r.stencilFunc(r.EQUAL, n, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, 255 - n, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n + 1, 255) : r.stencilFunc(r.EQUAL, 255 - (n + 1), 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), i.count++
                }, r.prototype.bindGraphics = function(t, e) { this._currentGraphics = t; var r, i = this.renderer.gl;
                    1 === e.mode ? (r = this.renderer.shaderManager.complexPrimitiveShader, this.renderer.shaderManager.setShader(r), i.uniformMatrix3fv(r.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(r.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform3fv(r.uniforms.tint._location, n.hex2rgb(t.tint)), i.uniform3fv(r.uniforms.color._location, e.color), i.uniform1f(r.uniforms.alpha._location, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, e.buffer), i.vertexAttribPointer(r.attributes.aVertexPosition, 2, i.FLOAT, !1, 8, 0), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer)) : (r = this.renderer.shaderManager.primitiveShader, this.renderer.shaderManager.setShader(r), i.uniformMatrix3fv(r.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), i.uniformMatrix3fv(r.uniforms.projectionMatrix._location, !1, this.renderer.currentRenderTarget.projectionMatrix.toArray(!0)), i.uniform3fv(r.uniforms.tint._location, n.hex2rgb(t.tint)), i.uniform1f(r.uniforms.alpha._location, t.worldAlpha), i.bindBuffer(i.ARRAY_BUFFER, e.buffer), i.vertexAttribPointer(r.attributes.aVertexPosition, 2, i.FLOAT, !1, 24, 0), i.vertexAttribPointer(r.attributes.aColor, 4, i.FLOAT, !1, 24, 8), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.indexBuffer)) }, r.prototype.popStencil = function(t, e) { var r = this.renderer.gl,
                        i = this.stencilMaskStack; if (i.stencilStack.pop(), i.count--, 0 === i.stencilStack.length) r.disable(r.STENCIL_TEST);
                    else { var n = i.count;
                        this.bindGraphics(t, e, this.renderer), r.colorMask(!1, !1, !1, !1), 1 === e.mode ? (i.reverse = !i.reverse, i.reverse ? (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, n + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n, 255) : r.stencilFunc(r.EQUAL, 255 - n, 255)) : (i.reverse ? (r.stencilFunc(r.EQUAL, n + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, 255 - (n + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), i.reverse ? r.stencilFunc(r.EQUAL, n, 255) : r.stencilFunc(r.EQUAL, 255 - n, 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP) } }, r.prototype.destroy = function() { i.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null }, r.prototype.pushMask = function(t) { this.renderer.setObjectRenderer(this.renderer.plugins.graphics), t.dirty && this.renderer.plugins.graphics.updateGraphics(t, this.renderer.gl), t._webGL[this.renderer.gl.id].data.length && this.pushStencil(t, t._webGL[this.renderer.gl.id].data[0], this.renderer) }, r.prototype.popMask = function(t) { this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.popStencil(t, t._webGL[this.renderer.gl.id].data[0], this.renderer) }
            }, { "../../../utils": 76, "./WebGLManager": 57 }],
            57: [function(t, e) {
                function r(t) { this.renderer = t, this.renderer.on("context", this.onContextChange, this) } r.prototype.constructor = r, e.exports = r, r.prototype.onContextChange = function() {}, r.prototype.destroy = function() { this.renderer.off("context", this.onContextChange, this), this.renderer = null } }, {}],
            58: [function(t, e) {
                function r(t) { i.call(this, t, ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), { tint: { type: "3f", value: [0, 0, 0] }, alpha: { type: "1f", value: 0 }, color: { type: "3f", value: [0, 0, 0] }, translationMatrix: { type: "mat3", value: new Float32Array(9) }, projectionMatrix: { type: "mat3", value: new Float32Array(9) } }, { aVertexPosition: 0 }) } var i = t("./Shader");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r }, { "./Shader": 60 }],
            59: [function(t, e) {
                function r(t) { i.call(this, t, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["precision mediump float;", "varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n"), { tint: { type: "3f", value: [0, 0, 0] }, alpha: { type: "1f", value: 0 }, translationMatrix: { type: "mat3", value: new Float32Array(9) }, projectionMatrix: { type: "mat3", value: new Float32Array(9) } }, { aVertexPosition: 0, aColor: 0 }) } var i = t("./Shader");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r }, { "./Shader": 60 }],
            60: [function(t, e) {
                function r(t, e, r, n, o) { if (!e || !r) throw new Error("Pixi.js Error. Shader requires vertexSrc and fragmentSrc");
                    this.uid = i.uid(), this.gl = t.renderer.gl, this.shaderManager = t, this.program = null, this.uniforms = n || {}, this.attributes = o || {}, this.textureCount = 1, this.vertexSrc = e, this.fragmentSrc = r, this.init() } var i = t("../../../utils");
                r.prototype.constructor = r, e.exports = r, r.prototype.init = function() { this.compile(), this.gl.useProgram(this.program), this.cacheUniformLocations(Object.keys(this.uniforms)), this.cacheAttributeLocations(Object.keys(this.attributes)) }, r.prototype.cacheUniformLocations = function(t) { for (var e = 0; e < t.length; ++e) this.uniforms[t[e]]._location = this.gl.getUniformLocation(this.program, t[e]) }, r.prototype.cacheAttributeLocations = function(t) { for (var e = 0; e < t.length; ++e) this.attributes[t[e]] = this.gl.getAttribLocation(this.program, t[e]) }, r.prototype.compile = function() { var t = this.gl,
                        e = this._glCompile(t.VERTEX_SHADER, this.vertexSrc),
                        r = this._glCompile(t.FRAGMENT_SHADER, this.fragmentSrc),
                        i = t.createProgram(); return t.attachShader(i, e), t.attachShader(i, r), t.linkProgram(i), t.getProgramParameter(i, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(i, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(i) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(i)), t.deleteProgram(i), i = null), t.deleteShader(e), t.deleteShader(r), this.program = i }, r.prototype.syncUniform = function(t) { var e, r, n = t._location,
                        o = t.value,
                        s = this.gl; switch (t.type) {
                        case "b":
                        case "bool":
                        case "boolean":
                            s.uniform1i(n, o ? 1 : 0); break;
                        case "i":
                        case "1i":
                            s.uniform1i(n, o); break;
                        case "f":
                        case "1f":
                            s.uniform1f(n, o); break;
                        case "2f":
                            s.uniform2f(n, o[0], o[1]); break;
                        case "3f":
                            s.uniform3f(n, o[0], o[1], o[2]); break;
                        case "4f":
                            s.uniform4f(n, o[0], o[1], o[2], o[3]); break;
                        case "v2":
                            s.uniform2f(n, o.x, o.y); break;
                        case "v3":
                            s.uniform3f(n, o.x, o.y, o.z); break;
                        case "v4":
                            s.uniform4f(n, o.x, o.y, o.z, o.w); break;
                        case "1iv":
                            s.uniform1iv(n, o); break;
                        case "2iv":
                            s.uniform2iv(n, o); break;
                        case "3iv":
                            s.uniform3iv(n, o); break;
                        case "4iv":
                            s.uniform4iv(n, o); break;
                        case "1fv":
                            s.uniform1fv(n, o); break;
                        case "2fv":
                            s.uniform2fv(n, o); break;
                        case "3fv":
                            s.uniform3fv(n, o); break;
                        case "4fv":
                            s.uniform4fv(n, o); break;
                        case "m2":
                        case "mat2":
                        case "Matrix2fv":
                            s.uniformMatrix2fv(n, t.transpose, o); break;
                        case "m3":
                        case "mat3":
                        case "Matrix3fv":
                            s.uniformMatrix3fv(n, t.transpose, o); break;
                        case "m4":
                        case "mat4":
                        case "Matrix4fv":
                            s.uniformMatrix4fv(n, t.transpose, o); break;
                        case "c":
                            "number" == typeof o && (o = i.hex2rgb(o)), s.uniform3f(n, o[0], o[1], o[2]); break;
                        case "iv1":
                            s.uniform1iv(n, o); break;
                        case "iv":
                            s.uniform3iv(n, o); break;
                        case "fv1":
                            s.uniform1fv(n, o); break;
                        case "fv":
                            s.uniform3fv(n, o); break;
                        case "v2v":
                            for (t._array || (t._array = new Float32Array(2 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[2 * e] = o[e].x, t._array[2 * e + 1] = o[e].y;
                            s.uniform2fv(n, t._array); break;
                        case "v3v":
                            for (t._array || (t._array = new Float32Array(3 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[3 * e] = o[e].x, t._array[3 * e + 1] = o[e].y, t._array[3 * e + 2] = o[e].z;
                            s.uniform3fv(n, t._array); break;
                        case "v4v":
                            for (t._array || (t._array = new Float32Array(4 * o.length)), e = 0, r = o.length; r > e; ++e) t._array[4 * e] = o[e].x, t._array[4 * e + 1] = o[e].y, t._array[4 * e + 2] = o[e].z, t._array[4 * e + 3] = o[e].w;
                            s.uniform4fv(n, t._array); break;
                        case "t":
                        case "sampler2D":
                            if (!t.value || !t.value.baseTexture.hasLoaded) break;
                            s.activeTexture(s["TEXTURE" + this.textureCount]); var a = t.value.baseTexture._glTextures[s.id];
                            a || (this.initSampler2D(t), a = t.value.baseTexture._glTextures[s.id]), s.bindTexture(s.TEXTURE_2D, a), s.uniform1i(t._location, this.textureCount), this.textureCount++; break;
                        default:
                            console.warn("Pixi.js Shader Warning: Unknown uniform type: " + t.type) } }, r.prototype.syncUniforms = function() { this.textureCount = 1; for (var t in this.uniforms) this.syncUniform(this.uniforms[t]) }, r.prototype.initSampler2D = function(t) { var e = this.gl,
                        r = t.value.baseTexture; if (r.hasLoaded)
                        if (t.textureData) { var i = t.textureData;
                            r._glTextures[e.id] = e.createTexture(), e.bindTexture(e.TEXTURE_2D, r._glTextures[e.id]), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultipliedAlpha), e.texImage2D(e.TEXTURE_2D, 0, i.luminance ? e.LUMINANCE : e.RGBA, e.RGBA, e.UNSIGNED_BYTE, r.source), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, i.magFilter ? i.magFilter : e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE) } else this.shaderManager.renderer.updateTexture(r) }, r.prototype.destroy = function() { this.gl.deleteProgram(this.program), this.gl = null, this.uniforms = null, this.attributes = null, this.vertexSrc = null, this.fragmentSrc = null }, r.prototype._glCompile = function(t, e) { var r = this.gl.createShader(t); return this.gl.shaderSource(r, e), this.gl.compileShader(r), this.gl.getShaderParameter(r, this.gl.COMPILE_STATUS) ? r : (console.log(this.gl.getShaderInfoLog(r)), null) } }, { "../../../utils": 76 }],
            61: [function(t, e) {
                function r(t, e, n, o, s) { var a = { uSampler: { type: "sampler2D", value: 0 }, projectionMatrix: { type: "mat3", value: new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]) } }; if (o)
                        for (var u in o) a[u] = o[u]; var l = { aVertexPosition: 0, aTextureCoord: 0, aColor: 0 }; if (s)
                        for (var h in s) l[h] = s[h];
                    e = e || r.defaultVertexSrc, n = n || r.defaultFragmentSrc, i.call(this, t, e, n, a, l) } var i = t("./Shader");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.defaultVertexSrc = ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), r.defaultFragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"].join("\n") }, { "./Shader": 60 }],
            62: [function(t, e) {
                function r(t) { i.call(this, t) } var i = t("../managers/WebGLManager");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.start = function() {}, r.prototype.stop = function() { this.flush() }, r.prototype.flush = function() {}, r.prototype.render = function() {} }, { "../managers/WebGLManager": 57 }],
            63: [function(t, e) {
                function r(t) { this.gl = t, this.vertices = new Float32Array([0, 0, 200, 0, 200, 200, 0, 200]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.colors = new Float32Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), this.indices = new Uint16Array([0, 1, 2, 0, 3, 2]), this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, 128, t.DYNAMIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), this.upload() } r.prototype.constructor = r, r.prototype.map = function(t, e) { var r = 0,
                        i = 0;
                    this.uvs[0] = r, this.uvs[1] = i, this.uvs[2] = r + e.width / t.width, this.uvs[3] = i, this.uvs[4] = r + e.width / t.width, this.uvs[5] = i + e.height / t.height, this.uvs[6] = r, this.uvs[7] = i + e.height / t.height, r = e.x, i = e.y, this.vertices[0] = r, this.vertices[1] = i, this.vertices[2] = r + e.width, this.vertices[3] = i, this.vertices[4] = r + e.width, this.vertices[5] = i + e.height, this.vertices[6] = r, this.vertices[7] = i + e.height, this.upload() }, r.prototype.upload = function() { var t = this.gl;
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices), t.bufferSubData(t.ARRAY_BUFFER, 32, this.uvs), t.bufferSubData(t.ARRAY_BUFFER, 64, this.colors) }, e.exports = r }, {}],
            64: [function(t, e) { var r = t("../../../math"),
                    i = t("../../../utils"),
                    n = t("../../../const"),
                    o = t("./StencilMaskStack"),
                    s = function(t, e, s, a, u, l) { if (this.gl = t, this.frameBuffer = null, this.texture = null, this.size = new r.Rectangle(0, 0, 1, 1), this.resolution = u || n.RESOLUTION, this.projectionMatrix = new r.Matrix, this.transform = null, this.frame = null, this.stencilBuffer = null, this.stencilMaskStack = new o, this.filterStack = [{ renderTarget: this, filter: [], bounds: this.size }], this.scaleMode = a || n.SCALE_MODES.DEFAULT, this.root = l, !this.root) { this.frameBuffer = t.createFramebuffer(), this.texture = t.createTexture(), t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, a === n.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, a === n.SCALE_MODES.LINEAR ? t.LINEAR : t.NEAREST); var h = i.isPowerOfTwo(e, s);
                            h ? (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)) : (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0) } this.resize(e, s) };
                s.prototype.constructor = s, e.exports = s, s.prototype.clear = function(t) { var e = this.gl;
                    t && e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT) }, s.prototype.attachStencilBuffer = function() { if (!this.stencilBuffer && !this.root) { var t = this.gl;
                        this.stencilBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencilBuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencilBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.size.width * this.resolution, this.size.height * this.resolution) } }, s.prototype.activate = function() { var t = this.gl;
                    t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer); var e = this.frame || this.size;
                    this.calculateProjection(e), this.transform && this.projectionMatrix.append(this.transform), t.viewport(0, 0, e.width * this.resolution, e.height * this.resolution) }, s.prototype.calculateProjection = function(t) { var e = this.projectionMatrix;
                    e.identity(), this.root ? (e.a = 1 / t.width * 2, e.d = -1 / t.height * 2, e.tx = -1 - t.x * e.a, e.ty = 1 - t.y * e.d) : (e.a = 1 / t.width * 2, e.d = 1 / t.height * 2, e.tx = -1 - t.x * e.a, e.ty = -1 - t.y * e.d) }, s.prototype.resize = function(t, e) { if (t = 0 | t, e = 0 | e, this.size.width !== t || this.size.height !== e) { if (this.size.width = t, this.size.height = e, !this.root) { var r = this.gl;
                            r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, t * this.resolution, e * this.resolution, 0, r.RGBA, r.UNSIGNED_BYTE, null), this.stencilBuffer && (r.bindRenderbuffer(r.RENDERBUFFER, this.stencilBuffer), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, t * this.resolution, e * this.resolution)) } var i = this.frame || this.size;
                        this.calculateProjection(i) } }, s.prototype.destroy = function() { var t = this.gl;
                    t.deleteFramebuffer(this.frameBuffer), t.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null } }, { "../../../const": 22, "../../../math": 32, "../../../utils": 76, "./StencilMaskStack": 65 }],
            65: [function(t, e) {
                function r() { this.stencilStack = [], this.reverse = !0, this.count = 0 } r.prototype.constructor = r, e.exports = r }, {}],
            66: [function(t, e) {
                function r(t) { o.call(this), this.anchor = new i.Point, this._texture = null, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = u.BLEND_MODES.NORMAL, this.shader = null, this.cachedTint = 16777215, this.texture = t || n.EMPTY } var i = t("../math"),
                    n = t("../textures/Texture"),
                    o = t("../display/Container"),
                    s = t("../renderers/canvas/utils/CanvasTinter"),
                    a = t("../utils"),
                    u = t("../const"),
                    l = new i.Point;
                r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { width: { get: function() { return this.scale.x * this.texture._frame.width }, set: function(t) { this.scale.x = t / this.texture._frame.width, this._width = t } }, height: { get: function() { return this.scale.y * this.texture._frame.height }, set: function(t) { this.scale.y = t / this.texture._frame.height, this._height = t } }, texture: { get: function() { return this._texture }, set: function(t) { this._texture !== t && (this._texture = t, this.cachedTint = 16777215, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this))) } } }), r.prototype._onTextureUpdate = function() { this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height) }, r.prototype._renderWebGL = function(t) { t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this) }, r.prototype.getBounds = function(t) { if (!this._currentBounds) { var e, r, i, n, o = this._texture._frame.width,
                            s = this._texture._frame.height,
                            a = o * (1 - this.anchor.x),
                            u = o * -this.anchor.x,
                            l = s * (1 - this.anchor.y),
                            h = s * -this.anchor.y,
                            c = t || this.worldTransform,
                            p = c.a,
                            d = c.b,
                            f = c.c,
                            v = c.d,
                            g = c.tx,
                            m = c.ty; if (0 === d && 0 === f) 0 > p && (p *= -1), 0 > v && (v *= -1), e = p * u + g, r = p * a + g, i = v * h + m, n = v * l + m;
                        else { var y = p * u + f * h + g,
                                x = v * h + d * u + m,
                                b = p * a + f * h + g,
                                _ = v * h + d * a + m,
                                T = p * a + f * l + g,
                                E = v * l + d * a + m,
                                S = p * u + f * l + g,
                                w = v * l + d * u + m;
                            e = y, e = e > b ? b : e, e = e > T ? T : e, e = e > S ? S : e, i = x, i = i > _ ? _ : i, i = i > E ? E : i, i = i > w ? w : i, r = y, r = b > r ? b : r, r = T > r ? T : r, r = S > r ? S : r, n = x, n = _ > n ? _ : n, n = E > n ? E : n, n = w > n ? w : n } if (this.children.length) { var A = this.containerGetBounds();
                            a = A.x, u = A.x + A.width, l = A.y, h = A.y + A.height, e = a > e ? e : a, i = l > i ? i : l, r = r > u ? r : u, n = n > h ? n : h } var C = this._bounds;
                        C.x = e, C.width = r - e, C.y = i, C.height = n - i, this._currentBounds = C } return this._currentBounds }, r.prototype.getLocalBounds = function() { return this._bounds.x = -this._texture._frame.width * this.anchor.x, this._bounds.y = -this._texture._frame.height * this.anchor.y, this._bounds.width = this._texture._frame.width, this._bounds.height = this._texture._frame.height, this._bounds }, r.prototype.containsPoint = function(t) { this.worldTransform.applyInverse(t, l); var e, r = this._texture._frame.width,
                        i = this._texture._frame.height,
                        n = -r * this.anchor.x; return l.x > n && l.x < n + r && (e = -i * this.anchor.y, l.y > e && l.y < e + i) ? !0 : !1 }, r.prototype._renderCanvas = function(t) { if (!(this.texture.crop.width <= 0 || this.texture.crop.height <= 0) && (this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, t.context.globalCompositeOperation = t.blendModes[t.currentBlendMode]), this.texture.valid)) { var e, r, i, n, o = this._texture,
                            a = this.worldTransform; if (t.context.globalAlpha = this.worldAlpha, t.smoothProperty && t.currentScaleMode !== o.baseTexture.scaleMode && (t.currentScaleMode = o.baseTexture.scaleMode, t.context[t.smoothProperty] = t.currentScaleMode === u.SCALE_MODES.LINEAR), o.rotate) { var l = a.a,
                                h = a.b;
                            a.a = -a.c, a.b = -a.d, a.c = l, a.d = h, i = o.crop.height, n = o.crop.width, e = o.trim ? o.trim.y - this.anchor.y * o.trim.height : this.anchor.y * -o._frame.height, r = o.trim ? o.trim.x - this.anchor.x * o.trim.width : this.anchor.x * -o._frame.width } else i = o.crop.width, n = o.crop.height, e = o.trim ? o.trim.x - this.anchor.x * o.trim.width : this.anchor.x * -o._frame.width, r = o.trim ? o.trim.y - this.anchor.y * o.trim.height : this.anchor.y * -o._frame.height;
                        t.roundPixels ? (t.context.setTransform(a.a, a.b, a.c, a.d, a.tx * t.resolution | 0, a.ty * t.resolution | 0), e = 0 | e, r = 0 | r) : t.context.setTransform(a.a, a.b, a.c, a.d, a.tx * t.resolution, a.ty * t.resolution); var c = o.baseTexture.resolution;
                        16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = s.getTintedTexture(this, this.tint)), t.context.drawImage(this.tintedTexture, 0, 0, i * c, n * c, e * t.resolution, r * t.resolution, i * t.resolution, n * t.resolution)) : t.context.drawImage(o.baseTexture.source, o.crop.x * c, o.crop.y * c, i * c, n * c, e * t.resolution, r * t.resolution, i * t.resolution, n * t.resolution) } }, r.prototype.destroy = function(t, e) { o.prototype.destroy.call(this), this.anchor = null, t && this._texture.destroy(e), this._texture = null, this.shader = null }, r.fromFrame = function(t) { var e = a.TextureCache[t]; if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache'); return new r(e) }, r.fromImage = function(t, e, i) { return new r(n.fromImage(t, e, i)) } }, { "../const": 22, "../display/Container": 23, "../math": 32, "../renderers/canvas/utils/CanvasTinter": 47, "../textures/Texture": 71, "../utils": 76 }],
            67: [function(t, e) {
                function r(t) { i.call(this, t), this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.size = o.SPRITE_BATCH_SIZE; var e = 4 * this.size * this.vertByteSize,
                        r = 6 * this.size;
                    this.vertices = new ArrayBuffer(e), this.positions = new Float32Array(this.vertices), this.colors = new Uint32Array(this.vertices), this.indices = new Uint16Array(r); for (var n = 0, s = 0; r > n; n += 6, s += 4) this.indices[n + 0] = s + 0, this.indices[n + 1] = s + 1, this.indices[n + 2] = s + 2, this.indices[n + 3] = s + 0, this.indices[n + 4] = s + 2, this.indices[n + 5] = s + 3;
                    this.currentBatchSize = 0, this.sprites = [], this.shader = null } var i = t("../../renderers/webgl/utils/ObjectRenderer"),
                    n = t("../../renderers/webgl/WebGLRenderer"),
                    o = t("../../const");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, n.registerPlugin("sprite", r), r.prototype.onContextChange = function() { var t = this.renderer.gl;
                    this.shader = this.renderer.shaderManager.defaultShader, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), this.currentBlendMode = 99999 }, r.prototype.render = function(t) { var e = t._texture;
                    this.currentBatchSize >= this.size && this.flush(); var r = e._uvs; if (r) { var i, n, o, s, a = t.anchor.x,
                            u = t.anchor.y; if (e.trim) { var l = e.trim;
                            n = l.x - a * l.width, i = n + e.crop.width, s = l.y - u * l.height, o = s + e.crop.height } else i = e._frame.width * (1 - a), n = e._frame.width * -a, o = e._frame.height * (1 - u), s = e._frame.height * -u; var h = this.currentBatchSize * this.vertByteSize,
                            c = t.worldTransform,
                            p = c.a,
                            d = c.b,
                            f = c.c,
                            v = c.d,
                            g = c.tx,
                            m = c.ty,
                            y = this.colors,
                            x = this.positions;
                        this.renderer.roundPixels ? (x[h] = p * n + f * s + g | 0, x[h + 1] = v * s + d * n + m | 0, x[h + 5] = p * i + f * s + g | 0, x[h + 6] = v * s + d * i + m | 0, x[h + 10] = p * i + f * o + g | 0, x[h + 11] = v * o + d * i + m | 0, x[h + 15] = p * n + f * o + g | 0, x[h + 16] = v * o + d * n + m | 0) : (x[h] = p * n + f * s + g, x[h + 1] = v * s + d * n + m, x[h + 5] = p * i + f * s + g, x[h + 6] = v * s + d * i + m, x[h + 10] = p * i + f * o + g, x[h + 11] = v * o + d * i + m, x[h + 15] = p * n + f * o + g, x[h + 16] = v * o + d * n + m), x[h + 2] = r.x0, x[h + 3] = r.y0, x[h + 7] = r.x1, x[h + 8] = r.y1, x[h + 12] = r.x2, x[h + 13] = r.y2, x[h + 17] = r.x3, x[h + 18] = r.y3; var b = t.tint;
                        y[h + 4] = y[h + 9] = y[h + 14] = y[h + 19] = (b >> 16) + (65280 & b) + ((255 & b) << 16) + (255 * t.worldAlpha << 24), this.sprites[this.currentBatchSize++] = t } }, r.prototype.flush = function() { if (0 !== this.currentBatchSize) { var t, e = this.renderer.gl; if (this.currentBatchSize > .5 * this.size) e.bufferSubData(e.ARRAY_BUFFER, 0, this.vertices);
                        else { var r = this.positions.subarray(0, this.currentBatchSize * this.vertByteSize);
                            e.bufferSubData(e.ARRAY_BUFFER, 0, r) } for (var i, n, o, s, a = 0, u = 0, l = null, h = this.renderer.blendModeManager.currentBlendMode, c = null, p = !1, d = !1, f = 0, v = this.currentBatchSize; v > f; f++) s = this.sprites[f], i = s._texture.baseTexture, n = s.blendMode, o = s.shader || this.shader, p = h !== n, d = c !== o, (l !== i || p || d) && (this.renderBatch(l, a, u), u = f, a = 0, l = i, p && (h = n, this.renderer.blendModeManager.setBlendMode(h)), d && (c = o, t = c.shaders ? c.shaders[e.id] : c, t || (t = c.getShader(this.renderer)), this.renderer.shaderManager.setShader(t), t.uniforms.projectionMatrix.value = this.renderer.currentRenderTarget.projectionMatrix.toArray(!0), t.syncUniforms(), e.activeTexture(e.TEXTURE0))), a++;
                        this.renderBatch(l, a, u), this.currentBatchSize = 0 } }, r.prototype.renderBatch = function(t, e, r) { if (0 !== e) { var i = this.renderer.gl;
                        t._glTextures[i.id] ? i.bindTexture(i.TEXTURE_2D, t._glTextures[i.id]) : this.renderer.updateTexture(t), i.drawElements(i.TRIANGLES, 6 * e, i.UNSIGNED_SHORT, 6 * r * 2), this.renderer.drawCount++ } }, r.prototype.start = function() { var t = this.renderer.gl;
                    t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer); var e = this.vertByteSize;
                    t.vertexAttribPointer(this.shader.attributes.aVertexPosition, 2, t.FLOAT, !1, e, 0), t.vertexAttribPointer(this.shader.attributes.aTextureCoord, 2, t.FLOAT, !1, e, 8), t.vertexAttribPointer(this.shader.attributes.aColor, 4, t.UNSIGNED_BYTE, !0, e, 16) }, r.prototype.destroy = function() { this.renderer.gl.deleteBuffer(this.vertexBuffer), this.renderer.gl.deleteBuffer(this.indexBuffer), this.shader.destroy(), this.renderer = null, this.vertices = null, this.positions = null, this.colors = null, this.indices = null, this.vertexBuffer = null, this.indexBuffer = null, this.sprites = null, this.shader = null } }, { "../../const": 22, "../../renderers/webgl/WebGLRenderer": 48, "../../renderers/webgl/utils/ObjectRenderer": 62 }],
            68: [function(t, e) {
                function r(t, e, r) { this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = r || a.RESOLUTION, this._text = null, this._style = null; var s = n.fromCanvas(this.canvas);
                    s.trim = new o.Rectangle, i.call(this, s), this.text = t, this.style = e } var i = t("../sprites/Sprite"),
                    n = t("../textures/Texture"),
                    o = t("../math"),
                    s = t("../utils"),
                    a = t("../const");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.fontPropertiesCache = {}, r.fontPropertiesCanvas = document.createElement("canvas"), r.fontPropertiesContext = r.fontPropertiesCanvas.getContext("2d"), Object.defineProperties(r.prototype, { width: { get: function() { return this.dirty && this.updateText(), this.scale.x * this._texture._frame.width }, set: function(t) { this.scale.x = t / this._texture._frame.width, this._width = t } }, height: { get: function() { return this.dirty && this.updateText(), this.scale.y * this._texture._frame.height }, set: function(t) { this.scale.y = t / this._texture._frame.height, this._height = t } }, style: { get: function() { return this._style }, set: function(t) { t = t || {}, "number" == typeof t.fill && (t.fill = s.hex2string(t.fill)), "number" == typeof t.stroke && (t.stroke = s.hex2string(t.stroke)), "number" == typeof t.dropShadowColor && (t.dropShadowColor = s.hex2string(t.dropShadowColor)), t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, t.dropShadow = t.dropShadow || !1, t.dropShadowColor = t.dropShadowColor || "#000000", t.dropShadowAngle = t.dropShadowAngle || Math.PI / 6, t.dropShadowDistance = t.dropShadowDistance || 5, t.padding = t.padding || 0, t.textBaseline = t.textBaseline || "alphabetic", t.lineJoin = t.lineJoin || "miter", t.miterLimit = t.miterLimit || 10, this._style = t, this.dirty = !0 } }, text: { get: function() { return this._text }, set: function(t) { t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0) } } }), r.prototype.updateText = function() { var t = this._style;
                    this.context.font = t.font; for (var e = t.wordWrap ? this.wordWrap(this._text) : this._text, r = e.split(/(?:\r\n|\r|\n)/), i = new Array(r.length), n = 0, o = this.determineFontProperties(t.font), s = 0; s < r.length; s++) { var a = this.context.measureText(r[s]).width;
                        i[s] = a, n = Math.max(n, a) } var u = n + t.strokeThickness;
                    t.dropShadow && (u += t.dropShadowDistance), this.canvas.width = (u + this.context.lineWidth) * this.resolution; var l = this.style.lineHeight || o.fontSize + t.strokeThickness,
                        h = l * r.length;
                    t.dropShadow && (h += t.dropShadowDistance), this.canvas.height = (h + 2 * this._style.padding) * this.resolution, this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = t.font, this.context.strokeStyle = t.stroke, this.context.lineWidth = t.strokeThickness, this.context.textBaseline = t.textBaseline, this.context.lineJoin = t.lineJoin, this.context.miterLimit = t.miterLimit; var c, p; if (t.dropShadow) { this.context.fillStyle = t.dropShadowColor; var d = Math.cos(t.dropShadowAngle) * t.dropShadowDistance,
                            f = Math.sin(t.dropShadowAngle) * t.dropShadowDistance; for (s = 0; s < r.length; s++) c = t.strokeThickness / 2, p = t.strokeThickness / 2 + s * l + o.ascent, "right" === t.align ? c += n - i[s] : "center" === t.align && (c += (n - i[s]) / 2), t.fill && this.context.fillText(r[s], c + d, p + f + this._style.padding) } for (this.context.fillStyle = t.fill, s = 0; s < r.length; s++) c = t.strokeThickness / 2, p = t.strokeThickness / 2 + s * l + o.ascent, "right" === t.align ? c += n - i[s] : "center" === t.align && (c += (n - i[s]) / 2), t.stroke && t.strokeThickness && this.context.strokeText(r[s], c, p + this._style.padding), t.fill && this.context.fillText(r[s], c, p + this._style.padding);
                    this.updateTexture() }, r.prototype.updateTexture = function() { var t = this._texture;
                    t.baseTexture.hasLoaded = !0, t.baseTexture.resolution = this.resolution, t.baseTexture.width = this.canvas.width / this.resolution, t.baseTexture.height = this.canvas.height / this.resolution, t.crop.width = t._frame.width = this.canvas.width / this.resolution, t.crop.height = t._frame.height = this.canvas.height / this.resolution, t.trim.x = 0, t.trim.y = -this._style.padding, t.trim.width = t._frame.width, t.trim.height = t._frame.height - 2 * this._style.padding, this._width = this.canvas.width / this.resolution, this._height = this.canvas.height / this.resolution, t.baseTexture.emit("update", t.baseTexture), this.dirty = !1 }, r.prototype.renderWebGL = function(t) { this.dirty && this.updateText(), i.prototype.renderWebGL.call(this, t) }, r.prototype._renderCanvas = function(t) { this.dirty && this.updateText(), i.prototype._renderCanvas.call(this, t) }, r.prototype.determineFontProperties = function(t) { var e = r.fontPropertiesCache[t]; if (!e) { e = {}; var i = r.fontPropertiesCanvas,
                            n = r.fontPropertiesContext;
                        n.font = t; var o = Math.ceil(n.measureText("|MÉq").width),
                            s = Math.ceil(n.measureText("M").width),
                            a = 2 * s;
                        s = 1.4 * s | 0, i.width = o, i.height = a, n.fillStyle = "#f00", n.fillRect(0, 0, o, a), n.font = t, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText("|MÉq", 0, s); var u, l, h = n.getImageData(0, 0, o, a).data,
                            c = h.length,
                            p = 4 * o,
                            d = 0,
                            f = !1; for (u = 0; s > u; u++) { for (l = 0; p > l; l += 4)
                                if (255 !== h[d + l]) { f = !0; break }
                            if (f) break;
                            d += p } for (e.ascent = s - u, d = c - p, f = !1, u = a; u > s; u--) { for (l = 0; p > l; l += 4)
                                if (255 !== h[d + l]) { f = !0; break }
                            if (f) break;
                            d -= p } e.descent = u - s, e.fontSize = e.ascent + e.descent, r.fontPropertiesCache[t] = e } return e }, r.prototype.wordWrap = function(t) { for (var e = "", r = t.split("\n"), i = this._style.wordWrapWidth, n = 0; n < r.length; n++) { for (var o = i, s = r[n].split(" "), a = 0; a < s.length; a++) { var u = this.context.measureText(s[a]).width,
                                l = u + this.context.measureText(" ").width;
                            0 === a || l > o ? (a > 0 && (e += "\n"), e += s[a], o = i - u) : (o -= l, e += " " + s[a]) } n < r.length - 1 && (e += "\n") } return e }, r.prototype.getBounds = function(t) { return this.dirty && this.updateText(), i.prototype.getBounds.call(this, t) }, r.prototype.destroy = function(t) { this.context = null, this.canvas = null, this._style = null, this._texture.destroy(void 0 === t ? !0 : t) } }, { "../const": 22, "../math": 32, "../sprites/Sprite": 66, "../textures/Texture": 71, "../utils": 76 }],
            69: [function(t, e) {
                function r(t, e, r) { o.call(this), this.uid = i.uid(), this.resolution = r || 1, this.width = 100, this.height = 100, this.realWidth = 100, this.realHeight = 100, this.scaleMode = e || n.SCALE_MODES.DEFAULT, this.hasLoaded = !1, this.isLoading = !1, this.source = null, this.premultipliedAlpha = !0, this.imageUrl = null, this.isPowerOfTwo = !1, this.mipmap = !1, this._glTextures = [], t && this.loadSource(t) }
                var i = t("../utils"),
                    n = t("../const"),
                    o = t("eventemitter3");
                r.prototype = Object.create(o.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.update = function() { this.realWidth = this.source.naturalWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.height, this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = i.isPowerOfTwo(this.realWidth, this.realHeight), this.emit("update", this) }, r.prototype.loadSource = function(t) {
                    var e = this.isLoading;
                    if (this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null), this.source = t, (this.source.complete || this.source.getContext) && this.source.width && this.source.height) this._sourceLoaded();
                    else if (!t.getContext) {
                        this.isLoading = !0;
                        var r = this;
                        t.onload = function() {
                            t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, r._sourceLoaded(), r.emit("loaded", r))
                        }, t.onerror = function() { t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, r.emit("error", r)) }, t.complete && t.src && (this.isLoading = !1, t.onload = null, t.onerror = null, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this))
                    }
                }, r.prototype._sourceLoaded = function() { this.hasLoaded = !0, this.update() }, r.prototype.destroy = function() { this.imageUrl ? (delete i.BaseTextureCache[this.imageUrl], delete i.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete i.BaseTextureCache[this.source._pixiId], this.source = null, this.dispose() }, r.prototype.dispose = function() { this.emit("dispose", this), this._glTextures.length = 0 }, r.prototype.updateSourceImage = function(t) { this.source.src = t, this.loadSource(this.source) }, r.fromImage = function(t, e, n) { var o = i.BaseTextureCache[t]; if (void 0 === e && 0 !== t.indexOf("data:") && (e = !0), !o) { var s = new Image;
                        e && (s.crossOrigin = ""), o = new r(s, n), o.imageUrl = t, s.src = t, i.BaseTextureCache[t] = o, o.resolution = i.getResolutionOfUrl(t) } return o }, r.fromCanvas = function(t, e) { t._pixiId || (t._pixiId = "canvas_" + i.uid()); var n = i.BaseTextureCache[t._pixiId]; return n || (n = new r(t, e), i.BaseTextureCache[t._pixiId] = n), n }
            }, { "../const": 22, "../utils": 76, eventemitter3: 11 }],
            70: [function(t, e) {
                function r(t, e, r, h, c) { if (!t) throw new Error("Unable to create RenderTexture, you must pass a renderer into the constructor.");
                    e = e || 100, r = r || 100, c = c || l.RESOLUTION; var p = new i; if (p.width = e, p.height = r, p.resolution = c, p.scaleMode = h || l.SCALE_MODES.DEFAULT, p.hasLoaded = !0, n.call(this, p, new u.Rectangle(0, 0, e, r)), this.width = e, this.height = r, this.resolution = c, this.render = null, this.renderer = t, this.renderer.type === l.RENDERER_TYPE.WEBGL) { var d = this.renderer.gl;
                        this.textureBuffer = new o(d, this.width, this.height, p.scaleMode, this.resolution), this.baseTexture._glTextures[d.id] = this.textureBuffer.texture, this.filterManager = new s(this.renderer), this.filterManager.onContextChange(), this.filterManager.resize(e, r), this.render = this.renderWebGL, this.renderer.currentRenderer.start(), this.renderer.currentRenderTarget.activate() } else this.render = this.renderCanvas, this.textureBuffer = new a(this.width * this.resolution, this.height * this.resolution), this.baseTexture.source = this.textureBuffer.canvas;
                    this.valid = !0, this._updateUvs() } var i = t("./BaseTexture"),
                    n = t("./Texture"),
                    o = t("../renderers/webgl/utils/RenderTarget"),
                    s = t("../renderers/webgl/managers/FilterManager"),
                    a = t("../renderers/canvas/utils/CanvasBuffer"),
                    u = t("../math"),
                    l = t("../const"),
                    h = new u.Matrix;
                r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.resize = function(t, e, r) {
                    (t !== this.width || e !== this.height) && (this.valid = t > 0 && e > 0, this.width = this._frame.width = this.crop.width = t, this.height = this._frame.height = this.crop.height = e, r && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.valid && (this.textureBuffer.resize(this.width, this.height), this.filterManager && this.filterManager.resize(this.width, this.height))) }, r.prototype.clear = function() { this.valid && (this.renderer.type === l.RENDERER_TYPE.WEBGL && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear()) }, r.prototype.renderWebGL = function(t, e, r, i) { if (this.valid) { if (i = void 0 !== i ? i : !0, this.textureBuffer.transform = e, this.textureBuffer.activate(), t.worldAlpha = 1, i) { t.worldTransform.identity(), t.currentBounds = null; var n, o, s = t.children; for (n = 0, o = s.length; o > n; ++n) s[n].updateTransform() } var a = this.renderer.filterManager;
                        this.renderer.filterManager = this.filterManager, this.renderer.renderDisplayObject(t, this.textureBuffer, r), this.renderer.filterManager = a } }, r.prototype.renderCanvas = function(t, e, r, i) { if (this.valid) { i = !!i; var n = t.worldTransform,
                            o = h;
                        o.identity(), e && o.append(e), t.worldTransform = o, t.worldAlpha = 1; var s, a, u = t.children; for (s = 0, a = u.length; a > s; ++s) u[s].updateTransform();
                        r && this.textureBuffer.clear(), t.worldTransform = n; var l = this.textureBuffer.context,
                            c = this.renderer.resolution;
                        this.renderer.resolution = this.resolution, this.renderer.renderDisplayObject(t, l), this.renderer.resolution = c } }, r.prototype.destroy = function() { n.prototype.destroy.call(this, !0), this.textureBuffer.destroy(), this.filterManager && this.filterManager.destroy(), this.renderer = null }, r.prototype.getImage = function() { var t = new Image; return t.src = this.getBase64(), t }, r.prototype.getBase64 = function() { return this.getCanvas().toDataURL() }, r.prototype.getCanvas = function() { if (this.renderer.type === l.RENDERER_TYPE.WEBGL) { var t = this.renderer.gl,
                            e = this.textureBuffer.size.width,
                            r = this.textureBuffer.size.height,
                            i = new Uint8Array(4 * e * r);
                        t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer), t.readPixels(0, 0, e, r, t.RGBA, t.UNSIGNED_BYTE, i), t.bindFramebuffer(t.FRAMEBUFFER, null); var n = new a(e, r),
                            o = n.context.getImageData(0, 0, e, r); return o.data.set(i), n.context.putImageData(o, 0, 0), n.canvas } return this.textureBuffer.canvas }, r.prototype.getPixels = function() { var t, e; if (this.renderer.type === l.RENDERER_TYPE.WEBGL) { var r = this.renderer.gl;
                        t = this.textureBuffer.size.width, e = this.textureBuffer.size.height; var i = new Uint8Array(4 * t * e); return r.bindFramebuffer(r.FRAMEBUFFER, this.textureBuffer.frameBuffer), r.readPixels(0, 0, t, e, r.RGBA, r.UNSIGNED_BYTE, i), r.bindFramebuffer(r.FRAMEBUFFER, null), i } return t = this.textureBuffer.canvas.width, e = this.textureBuffer.canvas.height, this.textureBuffer.canvas.getContext("2d").getImageData(0, 0, t, e).data }, r.prototype.getPixel = function(t, e) { if (this.renderer.type === l.RENDERER_TYPE.WEBGL) { var r = this.renderer.gl,
                            i = new Uint8Array(4); return r.bindFramebuffer(r.FRAMEBUFFER, this.textureBuffer.frameBuffer), r.readPixels(t, e, 1, 1, r.RGBA, r.UNSIGNED_BYTE, i), r.bindFramebuffer(r.FRAMEBUFFER, null), i } return this.textureBuffer.canvas.getContext("2d").getImageData(t, e, 1, 1).data } }, { "../const": 22, "../math": 32, "../renderers/canvas/utils/CanvasBuffer": 44, "../renderers/webgl/managers/FilterManager": 53, "../renderers/webgl/utils/RenderTarget": 64, "./BaseTexture": 69, "./Texture": 71 }],
            71: [function(t, e) {
                function r(t, e, i, n, o) { s.call(this), this.noFrame = !1, e || (this.noFrame = !0, e = new a.Rectangle(0, 0, 1, 1)), t instanceof r && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = n, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.width = 0, this.height = 0, this.crop = i || e, this.rotate = !!o, t.hasLoaded ? (this.noFrame && (e = new a.Rectangle(0, 0, t.width, t.height), t.on("update", this.onBaseTextureUpdated, this)), this.frame = e) : t.once("loaded", this.onBaseTextureLoaded, this) } var i = t("./BaseTexture"),
                    n = t("./VideoBaseTexture"),
                    o = t("./TextureUvs"),
                    s = t("eventemitter3"),
                    a = t("../math"),
                    u = t("../utils");
                r.prototype = Object.create(s.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { frame: { get: function() { return this._frame }, set: function(t) { if (this._frame = t, this.noFrame = !1, this.width = t.width, this.height = t.height, !this.trim && !this.rotate && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height)) throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
                            this.valid = t && t.width && t.height && this.baseTexture.hasLoaded, this.trim ? (this.width = this.trim.width, this.height = this.trim.height, this._frame.width = this.trim.width, this._frame.height = this.trim.height) : this.crop = t, this.valid && this._updateUvs() } } }), r.prototype.update = function() { this.baseTexture.update() }, r.prototype.onBaseTextureLoaded = function(t) { this.frame = this.noFrame ? new a.Rectangle(0, 0, t.width, t.height) : this._frame, this.emit("update", this) }, r.prototype.onBaseTextureUpdated = function(t) { this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this) }, r.prototype.destroy = function(t) { this.baseTexture && (t && this.baseTexture.destroy(), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.crop = null, this.valid = !1 }, r.prototype.clone = function() { return new r(this.baseTexture, this.frame, this.crop, this.trim, this.rotate) }, r.prototype._updateUvs = function() { this._uvs || (this._uvs = new o), this._uvs.set(this.crop, this.baseTexture, this.rotate) }, r.fromImage = function(t, e, n) { var o = u.TextureCache[t]; return o || (o = new r(i.fromImage(t, e, n)), u.TextureCache[t] = o), o }, r.fromFrame = function(t) { var e = u.TextureCache[t]; if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache'); return e }, r.fromCanvas = function(t, e) { return new r(i.fromCanvas(t, e)) }, r.fromVideo = function(t, e) { return "string" == typeof t ? r.fromVideoUrl(t, e) : new r(n.fromVideo(t, e)) }, r.fromVideoUrl = function(t, e) { return new r(n.fromUrl(t, e)) }, r.addTextureToCache = function(t, e) { u.TextureCache[e] = t }, r.removeTextureFromCache = function(t) { var e = u.TextureCache[t]; return delete u.TextureCache[t], delete u.BaseTextureCache[t], e }, r.EMPTY = new r(new i) }, { "../math": 32, "../utils": 76, "./BaseTexture": 69, "./TextureUvs": 72, "./VideoBaseTexture": 73, eventemitter3: 11 }],
            72: [function(t, e) {
                function r() { this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1 } e.exports = r, r.prototype.set = function(t, e, r) { var i = e.width,
                        n = e.height;
                    r ? (this.x0 = (t.x + t.height) / i, this.y0 = t.y / n, this.x1 = (t.x + t.height) / i, this.y1 = (t.y + t.width) / n, this.x2 = t.x / i, this.y2 = (t.y + t.width) / n, this.x3 = t.x / i, this.y3 = t.y / n) : (this.x0 = t.x / i, this.y0 = t.y / n, this.x1 = (t.x + t.width) / i, this.y1 = t.y / n, this.x2 = (t.x + t.width) / i, this.y2 = (t.y + t.height) / n, this.x3 = t.x / i, this.y3 = (t.y + t.height) / n) } }, {}],
            73: [function(t, e) {
                function r(t, e) { if (!t) throw new Error("No video source element specified.");
                    (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), n.call(this, t, e), this.autoUpdate = !1, this._onUpdate = this._onUpdate.bind(this), this._onCanPlay = this._onCanPlay.bind(this), t.complete || (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this._onPlayStart.bind(this)), t.addEventListener("pause", this._onPlayStop.bind(this))), this.__loaded = !1 }

                function i(t, e) { e || (e = "video/" + t.substr(t.lastIndexOf(".") + 1)); var r = document.createElement("source"); return r.src = t, r.type = e, r } var n = t("./BaseTexture"),
                    o = t("../utils");
                r.prototype = Object.create(n.prototype), r.prototype.constructor = r, e.exports = r, r.prototype._onUpdate = function() { this.autoUpdate && (window.requestAnimationFrame(this._onUpdate), this.update()) }, r.prototype._onPlayStart = function() { this.autoUpdate || (window.requestAnimationFrame(this._onUpdate), this.autoUpdate = !0) }, r.prototype._onPlayStop = function() { this.autoUpdate = !1 }, r.prototype._onCanPlay = function() { this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.source.play(), this.__loaded || (this.__loaded = !0, this.emit("loaded", this))) }, r.prototype.destroy = function() { this.source && this.source._pixiId && (delete o.BaseTextureCache[this.source._pixiId], delete this.source._pixiId), n.prototype.destroy.call(this) }, r.fromVideo = function(t, e) { t._pixiId || (t._pixiId = "video_" + o.uid()); var i = o.BaseTextureCache[t._pixiId]; return i || (i = new r(t, e), o.BaseTextureCache[t._pixiId] = i), i }, r.fromUrl = function(t, e) { var n = document.createElement("video"); if (Array.isArray(t))
                        for (var o = 0; o < t.length; ++o) n.appendChild(i(t.src || t, t.mime));
                    else n.appendChild(i(t.src || t, t.mime)); return n.load(), n.play(), r.fromVideo(n, e) }, r.fromUrls = r.fromUrl }, { "../utils": 76, "./BaseTexture": 69 }],
            74: [function(t, e) {
                function r() { var t = this;
                    this._tick = function(e) { t._requestId = null, t.started && (t.update(e), t.started && null === t._requestId && t._emitter.listeners(o, !0) && (t._requestId = requestAnimationFrame(t._tick))) }, this._emitter = new n, this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / i.TARGET_FPMS, this.lastTime = 0, this.speed = 1, this.started = !1 } var i = t("../const"),
                    n = t("eventemitter3"),
                    o = "tick";
                Object.defineProperties(r.prototype, { FPS: { get: function() { return 1e3 / this.elapsedMS } }, minFPS: { get: function() { return 1e3 / this._maxElapsedMS }, set: function(t) { var e = Math.min(Math.max(0, t) / 1e3, i.TARGET_FPMS);
                            this._maxElapsedMS = 1 / e } } }), r.prototype._requestIfNeeded = function() { null === this._requestId && this._emitter.listeners(o, !0) && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick)) }, r.prototype._cancelIfNeeded = function() { null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null) }, r.prototype._startIfPossible = function() { this.started ? this._requestIfNeeded() : this.autoStart && this.start() }, r.prototype.add = function(t, e) { return this._emitter.on(o, t, e), this._startIfPossible(), this }, r.prototype.addOnce = function(t, e) { return this._emitter.once(o, t, e), this._startIfPossible(), this }, r.prototype.remove = function(t, e) { return this._emitter.off(o, t, e), this._emitter.listeners(o, !0) || this._cancelIfNeeded(), this }, r.prototype.start = function() { this.started || (this.started = !0, this._requestIfNeeded()) }, r.prototype.stop = function() { this.started && (this.started = !1, this._cancelIfNeeded()) }, r.prototype.update = function(t) { var e;
                    t = t || performance.now(), e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * i.TARGET_FPMS * this.speed, this._emitter.emit(o, this.deltaTime), this.lastTime = t }, e.exports = r }, { "../const": 22, eventemitter3: 11 }],
            75: [function(t, e) { var r = t("./Ticker"),
                    i = new r;
                i.autoStart = !0, e.exports = { shared: i, Ticker: r } }, { "./Ticker": 74 }],
            76: [function(t, e) { var r = t("../const"),
                    i = e.exports = { _uid: 0, _saidHello: !1, pluginTarget: t("./pluginTarget"), async: t("async"), uid: function() { return ++i._uid }, hex2rgb: function(t, e) { return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e }, hex2string: function(t) { return t = t.toString(16), t = "000000".substr(0, 6 - t.length) + t, "#" + t }, rgb2hex: function(t) { return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2] }, canUseNewCanvasBlendModes: function() { if ("undefined" == typeof document) return !1; var t = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/",
                                e = "AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==",
                                r = new Image;
                            r.src = t + "AP804Oa6" + e; var i = new Image;
                            i.src = t + "/wCKxvRF" + e; var n = document.createElement("canvas");
                            n.width = 6, n.height = 1; var o = n.getContext("2d");
                            o.globalCompositeOperation = "multiply", o.drawImage(r, 0, 0), o.drawImage(i, 2, 0); var s = o.getImageData(2, 0, 1, 1).data; return 255 === s[0] && 0 === s[1] && 0 === s[2] }, getNextPowerOfTwo: function(t) { if (t > 0 && 0 === (t & t - 1)) return t; for (var e = 1; t > e;) e <<= 1; return e }, isPowerOfTwo: function(t, e) { return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1) }, getResolutionOfUrl: function(t) { var e = r.RETINA_PREFIX.exec(t); return e ? parseFloat(e[1]) : 1 }, sayHello: function(t) { if (!i._saidHello) { if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) { var e = ["\n %c %c %c Pixi.js " + r.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                                    window.console.log.apply(console, e) } else window.console && window.console.log("Pixi.js " + r.VERSION + " - " + t + " - http://www.pixijs.com/");
                                i._saidHello = !0 } }, isWebGLSupported: function() { var t = { stencil: !0 }; try { if (!window.WebGLRenderingContext) return !1; var e = document.createElement("canvas"),
                                    r = e.getContext("webgl", t) || e.getContext("experimental-webgl", t); return !(!r || !r.getContextAttributes().stencil) } catch (i) { return !1 } }, TextureCache: {}, BaseTextureCache: {} } }, { "../const": 22, "./pluginTarget": 77, async: 2 }],
            77: [function(t, e) {
                function r(t) { t.__plugins = {}, t.registerPlugin = function(e, r) { t.__plugins[e] = r }, t.prototype.initPlugins = function() { this.plugins = this.plugins || {}; for (var e in t.__plugins) this.plugins[e] = new t.__plugins[e](this) }, t.prototype.destroyPlugins = function() { for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
                        this.plugins = null } } e.exports = { mixin: function(t) { r(t) } } }, {}],
            78: [function(t) { var e = t("./core"),
                    r = t("./mesh"),
                    i = t("./extras"),
                    n = t("./filters");
                e.SpriteBatch = function() { throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.") }, e.AssetLoader = function() { throw new ReferenceError("The loader system was overhauled in pixi v3, please see the new PIXI.loaders.Loader class.") }, Object.defineProperties(e, { Stage: { get: function() { return console.warn("You do not need to use a PIXI Stage any more, you can simply render any container."), e.Container } }, DisplayObjectContainer: { get: function() { return console.warn("DisplayObjectContainer has been shortened to Container, please use Container from now on."), e.Container } }, Strip: { get: function() { return console.warn("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), r.Mesh } }, Rope: { get: function() { return console.warn("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), r.Rope } }, MovieClip: { get: function() { return console.warn("The MovieClip class has been moved to extras.MovieClip, please use extras.MovieClip from now on."), i.MovieClip } }, TilingSprite: { get: function() { return console.warn("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), i.TilingSprite } }, BitmapText: { get: function() { return console.warn("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), i.BitmapText } }, blendModes: { get: function() { return console.warn("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), e.BLEND_MODES } }, scaleModes: { get: function() { return console.warn("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), e.SCALE_MODES } }, BaseTextureCache: { get: function() { return console.warn("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), e.utils.BaseTextureCache } }, TextureCache: { get: function() { return console.warn("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), e.utils.TextureCache } }, math: { get: function() { return console.warn("The math namespace is deprecated, please access members already accessible on PIXI."), e } } }), e.Sprite.prototype.setTexture = function(t) { this.texture = t, console.warn("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;") }, i.BitmapText.prototype.setText = function(t) { this.text = t, console.warn("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';") }, e.Text.prototype.setText = function(t) { this.text = t, console.warn("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';") }, e.Text.prototype.setStyle = function(t) { this.style = t, console.warn("setStyle is now deprecated, please use the style property, e.g : myText.style = style;") }, e.Texture.prototype.setFrame = function(t) { this.frame = t, console.warn("setFrame is now deprecated, please use the frame property, e.g : myTexture.frame = frame;") }, Object.defineProperties(n, { AbstractFilter: { get: function() { return console.warn("filters.AbstractFilter is an undocumented alias, please use AbstractFilter from now on."), e.AbstractFilter } }, FXAAFilter: { get: function() { return console.warn("filters.FXAAFilter is an undocumented alias, please use FXAAFilter from now on."), e.FXAAFilter } }, SpriteMaskFilter: { get: function() { return console.warn("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), e.SpriteMaskFilter } } }), e.utils.uuid = function() { return console.warn("utils.uuid() is deprecated, please use utils.uid() from now on."), e.utils.uid() } }, { "./core": 29, "./extras": 85, "./filters": 102, "./mesh": 126 }],
            79: [function(t, e) {
                function r(t, e) { i.Container.call(this), e = e || {}, this.textWidth = 0, this.textHeight = 0, this._glyphs = [], this._font = { tint: void 0 !== e.tint ? e.tint : 16777215, align: e.align || "left", name: null, size: 0 }, this.font = e.font, this._text = t, this.maxWidth = 0, this.dirty = !1, this.updateText() } var i = t("../core");
                r.prototype = Object.create(i.Container.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { tint: { get: function() { return this._font.tint }, set: function(t) { this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0 } }, align: { get: function() { return this._font.align }, set: function(t) { this._font.align = t || "left", this.dirty = !0 } }, font: { get: function() { return this._font }, set: function(t) { t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : r.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0) } }, text: { get: function() { return this._text }, set: function(t) { t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0) } } }), r.prototype.updateText = function() { for (var t = r.fonts[this._font.name], e = new i.Point, n = null, o = [], s = 0, a = 0, u = [], l = 0, h = this._font.size / t.size, c = -1, p = 0; p < this.text.length; p++) { var d = this.text.charCodeAt(p); if (c = /(\s)/.test(this.text.charAt(p)) ? p : c, /(?:\r\n|\r|\n)/.test(this.text.charAt(p))) u.push(s), a = Math.max(a, s), l++, e.x = 0, e.y += t.lineHeight, n = null;
                        else if (-1 !== c && this.maxWidth > 0 && e.x * h > this.maxWidth) o.splice(c, p - c), p = c, c = -1, u.push(s), a = Math.max(a, s), l++, e.x = 0, e.y += t.lineHeight, n = null;
                        else { var f = t.chars[d];
                            f && (n && f.kerning[n] && (e.x += f.kerning[n]), o.push({ texture: f.texture, line: l, charCode: d, position: new i.Point(e.x + f.xOffset, e.y + f.yOffset) }), s = e.x + (f.texture.width + f.xOffset), e.x += f.xAdvance, n = d) } } u.push(s), a = Math.max(a, s); var v = []; for (p = 0; l >= p; p++) { var g = 0; "right" === this._font.align ? g = a - u[p] : "center" === this._font.align && (g = (a - u[p]) / 2), v.push(g) } var m = o.length,
                        y = this.tint; for (p = 0; m > p; p++) { var x = this._glyphs[p];
                        x ? x.texture = o[p].texture : (x = new i.Sprite(o[p].texture), this._glyphs.push(x)), x.position.x = (o[p].position.x + v[o[p].line]) * h, x.position.y = o[p].position.y * h, x.scale.x = x.scale.y = h, x.tint = y, x.parent || this.addChild(x) } for (p = m; p < this._glyphs.length; ++p) this.removeChild(this._glyphs[p]);
                    this.textWidth = a * h, this.textHeight = (e.y + t.lineHeight) * h }, r.prototype.updateTransform = function() { this.validate(), this.containerUpdateTransform() }, r.prototype.getLocalBounds = function() { return this.validate(), i.Container.prototype.getLocalBounds.call(this) }, r.prototype.validate = function() { this.dirty && (this.updateText(), this.dirty = !1) }, r.fonts = {} }, { "../core": 29 }],
            80: [function(t, e) {
                function r(t) { i.Sprite.call(this, t[0]), this._textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this._currentTime = 0, this.playing = !1 } var i = t("../core");
                r.prototype = Object.create(i.Sprite.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { totalFrames: { get: function() { return this._textures.length } }, textures: { get: function() { return this._textures }, set: function(t) { this._textures = t, this.texture = this._textures[Math.floor(this._currentTime) % this._textures.length] } }, currentFrame: { get: function() { return Math.floor(this._currentTime) % this._textures.length } } }), r.prototype.stop = function() { this.playing && (this.playing = !1, i.ticker.shared.remove(this.update, this)) }, r.prototype.play = function() { this.playing || (this.playing = !0, i.ticker.shared.add(this.update, this)) }, r.prototype.gotoAndStop = function(t) { this.stop(), this._currentTime = t; var e = Math.floor(this._currentTime);
                    this._texture = this._textures[e % this._textures.length] }, r.prototype.gotoAndPlay = function(t) { this._currentTime = t, this.play() }, r.prototype.update = function(t) { this._currentTime += this.animationSpeed * t; var e = Math.floor(this._currentTime);
                    0 > e ? this.loop ? this._texture = this._textures[this._textures.length - 1 + e % this._textures.length] : (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this.loop || e < this._textures.length ? this._texture = this._textures[e % this._textures.length] : e >= this._textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete()) }, r.prototype.destroy = function() { this.stop(), i.Sprite.prototype.destroy.call(this) }, r.fromFrames = function(t) { for (var e = [], n = 0; n < t.length; ++n) e.push(new i.Texture.fromFrame(t[n])); return new r(e) }, r.fromImages = function(t) { for (var e = [], n = 0; n < t.length; ++n) e.push(new i.Texture.fromImage(t[n])); return new r(e) } }, { "../core": 29 }],
            81: [function(t, e) {
                function r(t, e, r) { i.Sprite.call(this, t), this.tileScale = new i.Point(1, 1), this.tilePosition = new i.Point(0, 0), this._width = e || 100, this._height = r || 100, this._uvs = new i.TextureUvs, this._canvasPattern = null, this.shader = new i.AbstractFilter(["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform mat3 projectionMatrix;", "uniform vec4 uFrame;", "uniform vec4 uTransform;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vec2 coord = aTextureCoord;", "   coord -= uTransform.xy;", "   coord /= uTransform.zw;", "   vTextureCoord = coord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform vec4 uFrame;", "uniform vec2 uPixelSize;", "void main(void){", "   vec2 coord = mod(vTextureCoord, uFrame.zw);", "   coord = clamp(coord, uPixelSize, uFrame.zw - uPixelSize);", "   coord += uFrame.xy;", "   gl_FragColor =  texture2D(uSampler, coord) * vColor ;", "}"].join("\n"), { uFrame: { type: "4fv", value: [0, 0, 1, 1] }, uTransform: { type: "4fv", value: [0, 0, 1, 1] }, uPixelSize: { type: "2fv", value: [1, 1] } }) } var i = t("../core"),
                    n = new i.Point;
                r.prototype = Object.create(i.Sprite.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { width: { get: function() { return this._width }, set: function(t) { this._width = t } }, height: { get: function() { return this._height }, set: function(t) { this._height = t } } }), r.prototype._onTextureUpdate = function() {}, r.prototype._renderWebGL = function(t) { var e = this._texture; if (e && e._uvs) { var r = e._uvs,
                            i = e._frame.width,
                            n = e._frame.height,
                            o = e.baseTexture.width,
                            s = e.baseTexture.height;
                        e._uvs = this._uvs, e._frame.width = this.width, e._frame.height = this.height, this.shader.uniforms.uPixelSize.value[0] = 1 / o, this.shader.uniforms.uPixelSize.value[1] = 1 / s, this.shader.uniforms.uFrame.value[0] = r.x0, this.shader.uniforms.uFrame.value[1] = r.y0, this.shader.uniforms.uFrame.value[2] = r.x1 - r.x0, this.shader.uniforms.uFrame.value[3] = r.y2 - r.y0, this.shader.uniforms.uTransform.value[0] = this.tilePosition.x % (i * this.tileScale.x) / this._width, this.shader.uniforms.uTransform.value[1] = this.tilePosition.y % (n * this.tileScale.y) / this._height, this.shader.uniforms.uTransform.value[2] = o / this._width * this.tileScale.x, this.shader.uniforms.uTransform.value[3] = s / this._height * this.tileScale.y, t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this), e._uvs = r, e._frame.width = i, e._frame.height = n } }, r.prototype._renderCanvas = function(t) { var e = this._texture; if (e.baseTexture.hasLoaded) { var r = t.context,
                            n = this.worldTransform,
                            o = t.resolution,
                            s = e.baseTexture,
                            a = this.tilePosition.x % (e._frame.width * this.tileScale.x),
                            u = this.tilePosition.y % (e._frame.height * this.tileScale.y); if (!this._canvasPattern) { var l = new i.CanvasBuffer(e._frame.width, e._frame.height);
                            l.context.drawImage(s.source, -e._frame.x, -e._frame.y), this._canvasPattern = l.context.createPattern(l.canvas, "repeat") } r.globalAlpha = this.worldAlpha, r.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), r.scale(this.tileScale.x, this.tileScale.y), r.translate(a + this.anchor.x * -this._width, u + this.anchor.y * -this._height), this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, r.globalCompositeOperation = t.blendModes[t.currentBlendMode]), r.fillStyle = this._canvasPattern, r.fillRect(-a, -u, this._width / this.tileScale.x, this._height / this.tileScale.y) } }, r.prototype.getBounds = function() { var t, e, r, i, n = this._width,
                        o = this._height,
                        s = n * (1 - this.anchor.x),
                        a = n * -this.anchor.x,
                        u = o * (1 - this.anchor.y),
                        l = o * -this.anchor.y,
                        h = this.worldTransform,
                        c = h.a,
                        p = h.b,
                        d = h.c,
                        f = h.d,
                        v = h.tx,
                        g = h.ty,
                        m = c * a + d * l + v,
                        y = f * l + p * a + g,
                        x = c * s + d * l + v,
                        b = f * l + p * s + g,
                        _ = c * s + d * u + v,
                        T = f * u + p * s + g,
                        E = c * a + d * u + v,
                        S = f * u + p * a + g;
                    t = m, t = t > x ? x : t, t = t > _ ? _ : t, t = t > E ? E : t, r = y, r = r > b ? b : r, r = r > T ? T : r, r = r > S ? S : r, e = m, e = x > e ? x : e, e = _ > e ? _ : e, e = E > e ? E : e, i = y, i = b > i ? b : i, i = T > i ? T : i, i = S > i ? S : i; var w = this._bounds; return w.x = t, w.width = e - t, w.y = r, w.height = i - r, this._currentBounds = w, w }, r.prototype.containsPoint = function(t) { this.worldTransform.applyInverse(t, n); var e, r = this._width,
                        i = this._height,
                        o = -r * this.anchor.x; return n.x > o && n.x < o + r && (e = -i * this.anchor.y, n.y > e && n.y < e + i) ? !0 : !1 }, r.prototype.destroy = function() { i.Sprite.prototype.destroy.call(this), this.tileScale = null, this._tileScaleOffset = null, this.tilePosition = null, this._uvs = null }, r.fromFrame = function(t, e, n) { var o = i.utils.TextureCache[t]; if (!o) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this); return new r(o, e, n) }, r.fromImage = function(t, e, n, o, s) { return new r(i.Texture.fromImage(t, o, s), e, n) } }, { "../core": 29 }],
            82: [function(t) {
                var e = t("../core"),
                    r = e.DisplayObject,
                    i = new e.Matrix;
                r.prototype._cacheAsBitmap = !1, r.prototype._originalRenderWebGL = null, r.prototype._originalRenderCanvas = null, r.prototype._originalUpdateTransform = null, r.prototype._originalHitTest = null, r.prototype._originalDestroy = null, r.prototype._cachedSprite = null, Object.defineProperties(r.prototype, { cacheAsBitmap: { get: function() { return this._cacheAsBitmap }, set: function(t) { this._cacheAsBitmap !== t && (this._cacheAsBitmap = t, t ? (this._originalRenderWebGL = this.renderWebGL, this._originalRenderCanvas = this.renderCanvas, this._originalUpdateTransform = this.updateTransform, this._originalGetBounds = this.getBounds, this._originalDestroy = this.destroy, this._originalContainsPoint = this.containsPoint, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (this._cachedSprite && this._destroyCachedDisplayObject(), this.renderWebGL = this._originalRenderWebGL, this.renderCanvas = this._originalRenderCanvas, this.getBounds = this._originalGetBounds, this.destroy = this._originalDestroy, this.updateTransform = this._originalUpdateTransform, this.containsPoint = this._originalContainsPoint)) } } }), r.prototype._renderCachedWebGL = function(t) {!this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cachedSprite.worldAlpha = this.worldAlpha, t.setObjectRenderer(t.plugins.sprite), t.plugins.sprite.render(this._cachedSprite)) }, r.prototype._initCachedDisplayObject = function(t) { if (!this._cachedSprite) { t.currentRenderer.flush(); var r = this.getLocalBounds().clone(); if (this._filters) { var n = this._filters[0].padding;
                            r.x -= n, r.y -= n, r.width += 2 * n, r.height += 2 * n } var o = t.currentRenderTarget,
                            s = t.filterManager.filterStack,
                            a = new e.RenderTexture(t, 0 | r.width, 0 | r.height),
                            u = i;
                        u.tx = -r.x, u.ty = -r.y, this.renderWebGL = this._originalRenderWebGL, a.render(this, u, !0, !0), t.setRenderTarget(o), t.filterManager.filterStack = s, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new e.Sprite(a), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(r.x / r.width), this._cachedSprite.anchor.y = -(r.y / r.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite) } }, r.prototype._renderCachedCanvas = function(t) {!this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cachedSprite.worldAlpha = this.worldAlpha, this._cachedSprite.renderCanvas(t)) }, r.prototype._initCachedDisplayObjectCanvas = function(t) {
                    if (!this._cachedSprite) {
                        var r = this.getLocalBounds(),
                            n = t.context,
                            o = new e.RenderTexture(t, 0 | r.width, 0 | r.height),
                            s = i;
                        s.tx = -r.x, s.ty = -r.y, this.renderCanvas = this._originalRenderCanvas, o.render(this, s, !0), t.context = n, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.getBounds = this._getCachedBounds, this._cachedSprite = new e.Sprite(o), this._cachedSprite.worldTransform = this.worldTransform, this._cachedSprite.anchor.x = -(r.x / r.width), this._cachedSprite.anchor.y = -(r.y / r.height), this.updateTransform(), this.containsPoint = this._cachedSprite.containsPoint.bind(this._cachedSprite)
                    }
                }, r.prototype._getCachedBounds = function() { return this._cachedSprite._currentBounds = null, this._cachedSprite.getBounds() }, r.prototype._destroyCachedDisplayObject = function() { this._cachedSprite._texture.destroy(), this._cachedSprite = null }, r.prototype._cacheAsBitmapDestroy = function() { this.cacheAsBitmap = !1, this._originalDestroy() }
            }, { "../core": 29 }],
            83: [function(t) { var e = t("../core");
                e.DisplayObject.prototype.name = null, e.Container.prototype.getChildByName = function(t) { for (var e = 0; e < this.children.length; e++)
                        if (this.children[e].name === t) return this.children[e]; return null } }, { "../core": 29 }],
            84: [function(t) { var e = t("../core");
                e.DisplayObject.prototype.getGlobalPosition = function(t) { return t = t || new e.Point, this.parent ? (this.displayObjectUpdateTransform(), t.x = this.worldTransform.tx, t.y = this.worldTransform.ty) : (t.x = this.position.x, t.y = this.position.y), t } }, { "../core": 29 }],
            85: [function(t, e) { t("./cacheAsBitmap"), t("./getChildByName"), t("./getGlobalPosition"), e.exports = { MovieClip: t("./MovieClip"), TilingSprite: t("./TilingSprite"), BitmapText: t("./BitmapText") } }, { "./BitmapText": 79, "./MovieClip": 80, "./TilingSprite": 81, "./cacheAsBitmap": 82, "./getChildByName": 83, "./getGlobalPosition": 84 }],
            86: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nuniform vec4 dimensions;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n    if (clamp(p.x, 0.0, 4.0) == p.x && clamp(p.y, 0.0, 4.0) == p.y)\n    {\n        if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 uv = gl_FragCoord.xy;\n\n    vec3 col = texture2D(uSampler, floor( uv / pixelSize ) * pixelSize / dimensions.xy).rgb;\n\n    float gray = (col.r + col.g + col.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    vec2 p = mod( uv / ( pixelSize * 0.5 ), 2.0) - vec2(1.0);\n    col = col * character(n, p);\n\n    gl_FragColor = vec4(col, 1.0);\n}\n", { dimensions: { type: "4fv", value: new Float32Array([0, 0, 0, 0]) }, pixelSize: { type: "1f", value: 8 } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { size: { get: function() { return this.uniforms.pixelSize.value }, set: function(t) { this.uniforms.pixelSize.value = t } } }) }, { "../../core": 29 }],
            87: [function(t, e) {
                function r() { i.AbstractFilter.call(this), this.blurXFilter = new n, this.blurYFilter = new o, this.defaultFilter = new i.AbstractFilter } var i = t("../../core"),
                    n = t("../blur/BlurXFilter"),
                    o = t("../blur/BlurYFilter");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r) { var n = t.filterManager.getRenderTarget(!0);
                    this.defaultFilter.applyFilter(t, e, r), this.blurXFilter.applyFilter(t, e, n), t.blendModeManager.setBlendMode(i.BLEND_MODES.SCREEN), this.blurYFilter.applyFilter(t, n, r), t.blendModeManager.setBlendMode(i.BLEND_MODES.NORMAL), t.filterManager.returnRenderTarget(n) }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.blurXFilter.blur }, set: function(t) { this.blurXFilter.blur = this.blurYFilter.blur = t } }, blurX: { get: function() { return this.blurXFilter.blur }, set: function(t) { this.blurXFilter.blur = t } }, blurY: { get: function() { return this.blurYFilter.blur }, set: function(t) { this.blurYFilter.blur = t } } }) }, { "../../core": 29, "../blur/BlurXFilter": 90, "../blur/BlurYFilter": 91 }],
            88: [function(t, e) {
                function r(t, e) { i.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform float dirX;\nuniform float dirY;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[3];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[0] = aTextureCoord + vec2( (0.004 * strength) * dirX, (0.004 * strength) * dirY );\n    vBlurTexCoords[1] = aTextureCoord + vec2( (0.008 * strength) * dirX, (0.008 * strength) * dirY );\n    vBlurTexCoords[2] = aTextureCoord + vec2( (0.012 * strength) * dirX, (0.012 * strength) * dirY );\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[3];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vTextureCoord     ) * 0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0]) * 0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1]) * 0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2]) * 0.004431848411938341;\n}\n", { strength: { type: "1f", value: 1 }, dirX: { type: "1f", value: t || 0 }, dirY: { type: "1f", value: e || 0 } }), this.defaultFilter = new i.AbstractFilter, this.passes = 1, this.dirX = t || 0, this.dirY = e || 0, this.strength = 4 } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r, i) { var n = this.getShader(t); if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
                    else { var o = t.filterManager.getRenderTarget(!0);
                        t.filterManager.applyFilter(n, e, o, i); for (var s = 0; s < this.passes - 2; s++) t.filterManager.applyFilter(n, o, o, i);
                        t.filterManager.applyFilter(n, o, r, i), t.filterManager.returnRenderTarget(o) } }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.strength }, set: function(t) { this.padding = .5 * t, this.strength = t } }, dirX: { get: function() { return this.dirX }, set: function(t) { this.uniforms.dirX.value = t } }, dirY: { get: function() { return this.dirY }, set: function(t) { this.uniforms.dirY.value = t } } }) }, { "../../core": 29 }],
            89: [function(t, e) {
                function r() { i.AbstractFilter.call(this), this.blurXFilter = new n, this.blurYFilter = new o } var i = t("../../core"),
                    n = t("./BlurXFilter"),
                    o = t("./BlurYFilter");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r) { var i = t.filterManager.getRenderTarget(!0);
                    this.blurXFilter.applyFilter(t, e, i), this.blurYFilter.applyFilter(t, i, r), t.filterManager.returnRenderTarget(i) }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.blurXFilter.blur }, set: function(t) { this.padding = .5 * Math.abs(t), this.blurXFilter.blur = this.blurYFilter.blur = t } }, passes: { get: function() { return this.blurXFilter.passes }, set: function(t) { this.blurXFilter.passes = this.blurYFilter.passes = t } }, blurX: { get: function() { return this.blurXFilter.blur }, set: function(t) { this.blurXFilter.blur = t } }, blurY: { get: function() { return this.blurYFilter.blur }, set: function(t) { this.blurYFilter.blur = t } } }) }, { "../../core": 29, "./BlurXFilter": 90, "./BlurYFilter": 91 }],
            90: [function(t, e) {
                function r() { i.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(-0.012 * strength, 0.0);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(-0.008 * strength, 0.0);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(-0.004 * strength, 0.0);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2( 0.004 * strength, 0.0);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2( 0.008 * strength, 0.0);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2( 0.012 * strength, 0.0);\n\n    vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n", { strength: { type: "1f", value: 1 } }), this.passes = 1, this.strength = 4 } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r, i) { var n = this.getShader(t); if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.width / e.size.width), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
                    else { for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, u = 0; u < this.passes - 1; u++) { t.filterManager.applyFilter(n, s, a, !0); var l = a;
                            a = s, s = l } t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o) } }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.strength }, set: function(t) { this.padding = .5 * Math.abs(t), this.strength = t } } }) }, { "../../core": 29 }],
            91: [function(t, e) {
                function r() { i.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = vec4(0.0);\n\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    gl_FragColor += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n}\n", { strength: { type: "1f", value: 1 } }), this.passes = 1, this.strength = 4 } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r, i) { var n = this.getShader(t); if (this.uniforms.strength.value = Math.abs(this.strength) / 4 / this.passes * (e.frame.height / e.size.height), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
                    else { for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, u = 0; u < this.passes - 1; u++) { t.filterManager.applyFilter(n, s, a, !0); var l = a;
                            a = s, s = l } t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o) } }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.strength }, set: function(t) { this.padding = .5 * Math.abs(t), this.strength = t } } }) }, { "../../core": 29 }],
            92: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 delta;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta * percent);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n", { delta: { type: "v2", value: { x: .1, y: 0 } } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r }, { "../../core": 29 }],
            93: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[25];\n\nvoid main(void)\n{\n\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.r = (m[0] * c.r);\n        gl_FragColor.r += (m[1] * c.g);\n        gl_FragColor.r += (m[2] * c.b);\n        gl_FragColor.r += (m[3] * c.a);\n        gl_FragColor.r += m[4];\n\n    gl_FragColor.g = (m[5] * c.r);\n        gl_FragColor.g += (m[6] * c.g);\n        gl_FragColor.g += (m[7] * c.b);\n        gl_FragColor.g += (m[8] * c.a);\n        gl_FragColor.g += m[9];\n\n     gl_FragColor.b = (m[10] * c.r);\n        gl_FragColor.b += (m[11] * c.g);\n        gl_FragColor.b += (m[12] * c.b);\n        gl_FragColor.b += (m[13] * c.a);\n        gl_FragColor.b += m[14];\n\n     gl_FragColor.a = (m[15] * c.r);\n        gl_FragColor.a += (m[16] * c.g);\n        gl_FragColor.a += (m[17] * c.b);\n        gl_FragColor.a += (m[18] * c.a);\n        gl_FragColor.a += m[19];\n\n}\n", { m: { type: "1fv", value: [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0] } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype._loadMatrix = function(t, e) { e = !!e; var r = t;
                    e && (this._multiply(r, this.uniforms.m.value, t), r = this._colorMatrix(r)), this.uniforms.m.value = r }, r.prototype._multiply = function(t, e, r) { return t[0] = e[0] * r[0] + e[1] * r[5] + e[2] * r[10] + e[3] * r[15], t[1] = e[0] * r[1] + e[1] * r[6] + e[2] * r[11] + e[3] * r[16], t[2] = e[0] * r[2] + e[1] * r[7] + e[2] * r[12] + e[3] * r[17], t[3] = e[0] * r[3] + e[1] * r[8] + e[2] * r[13] + e[3] * r[18], t[4] = e[0] * r[4] + e[1] * r[9] + e[2] * r[14] + e[3] * r[19], t[5] = e[5] * r[0] + e[6] * r[5] + e[7] * r[10] + e[8] * r[15], t[6] = e[5] * r[1] + e[6] * r[6] + e[7] * r[11] + e[8] * r[16], t[7] = e[5] * r[2] + e[6] * r[7] + e[7] * r[12] + e[8] * r[17], t[8] = e[5] * r[3] + e[6] * r[8] + e[7] * r[13] + e[8] * r[18], t[9] = e[5] * r[4] + e[6] * r[9] + e[7] * r[14] + e[8] * r[19], t[10] = e[10] * r[0] + e[11] * r[5] + e[12] * r[10] + e[13] * r[15], t[11] = e[10] * r[1] + e[11] * r[6] + e[12] * r[11] + e[13] * r[16], t[12] = e[10] * r[2] + e[11] * r[7] + e[12] * r[12] + e[13] * r[17], t[13] = e[10] * r[3] + e[11] * r[8] + e[12] * r[13] + e[13] * r[18], t[14] = e[10] * r[4] + e[11] * r[9] + e[12] * r[14] + e[13] * r[19], t[15] = e[15] * r[0] + e[16] * r[5] + e[17] * r[10] + e[18] * r[15], t[16] = e[15] * r[1] + e[16] * r[6] + e[17] * r[11] + e[18] * r[16], t[17] = e[15] * r[2] + e[16] * r[7] + e[17] * r[12] + e[18] * r[17], t[18] = e[15] * r[3] + e[16] * r[8] + e[17] * r[13] + e[18] * r[18], t[19] = e[15] * r[4] + e[16] * r[9] + e[17] * r[14] + e[18] * r[19], t }, r.prototype._colorMatrix = function(t) { var e = new Float32Array(t); return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e }, r.prototype.brightness = function(t, e) { var r = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e) }, r.prototype.greyscale = function(t, e) { var r = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e) }, r.prototype.grayscale = r.prototype.greyscale, r.prototype.blackAndWhite = function(t) { var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.hue = function(t, e) { t = (t || 0) / 180 * Math.PI; var r = Math.cos(t),
                        i = Math.sin(t),
                        n = .213,
                        o = .715,
                        s = .072,
                        a = [n + r * (1 - n) + i * -n, o + r * -o + i * -o, s + r * -s + i * (1 - s), 0, 0, n + r * -n + .143 * i, o + r * (1 - o) + .14 * i, s + r * -s + i * -.283, 0, 0, n + r * -n + i * -(1 - n), o + r * -o + i * o, s + r * (1 - s) + i * s, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(a, e) }, r.prototype.contrast = function(t, e) { var r = (t || 0) + 1,
                        i = -128 * (r - 1),
                        n = [r, 0, 0, 0, i, 0, r, 0, 0, i, 0, 0, r, 0, i, 0, 0, 0, 1, 0];
                    this._loadMatrix(n, e) }, r.prototype.saturate = function(t, e) { var r = 2 * (t || 0) / 3 + 1,
                        i = (r - 1) * -.5,
                        n = [r, i, i, 0, 0, i, r, i, 0, 0, i, i, r, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(n, e) }, r.prototype.desaturate = function() { this.saturate(-1) }, r.prototype.negative = function(t) { var e = [0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.sepia = function(t) { var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.technicolor = function(t) { var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.polaroid = function(t) { var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.toBGR = function(t) { var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.kodachrome = function(t) { var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.browni = function(t) { var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.vintage = function(t) { var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.colorTone = function(t, e, r, i, n) { t = t || .2, e = e || .15, r = r || 16770432, i = i || 3375104; var o = (r >> 16 & 255) / 255,
                        s = (r >> 8 & 255) / 255,
                        a = (255 & r) / 255,
                        u = (i >> 16 & 255) / 255,
                        l = (i >> 8 & 255) / 255,
                        h = (255 & i) / 255,
                        c = [.3, .59, .11, 0, 0, o, s, a, t, 0, u, l, h, e, 0, o - u, s - l, a - h, 0, 0];
                    this._loadMatrix(c, n) }, r.prototype.night = function(t, e) { t = t || .1; var r = [-2 * t, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e) }, r.prototype.predator = function(t, e) { var r = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                    this._loadMatrix(r, e) }, r.prototype.lsd = function(t) { var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(e, t) }, r.prototype.reset = function() { var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                    this._loadMatrix(t, !1) }, Object.defineProperties(r.prototype, { matrix: { get: function() { return this.uniforms.m.value }, set: function(t) { this.uniforms.m.value = t } } }) }, { "../../core": 29 }],
            94: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float step;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    color = floor(color * step) / step;\n\n    gl_FragColor = color;\n}\n", { step: { type: "1f", value: 5 } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { step: { get: function() { return this.uniforms.step.value }, set: function(t) { this.uniforms.step.value = t } } }) }, { "../../core": 29 }],
            95: [function(t, e) {
                function r(t, e, r) { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n", { matrix: { type: "1fv", value: new Float32Array(t) }, texelSize: { type: "v2", value: { x: 1 / e, y: 1 / r } } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { matrix: { get: function() { return this.uniforms.matrix.value }, set: function(t) { this.uniforms.matrix.value = new Float32Array(t) } }, width: { get: function() { return 1 / this.uniforms.texelSize.value.x }, set: function(t) { this.uniforms.texelSize.value.x = 1 / t } }, height: { get: function() { return 1 / this.uniforms.texelSize.value.y }, set: function(t) { this.uniforms.texelSize.value.y = 1 / t } } }) }, { "../../core": 29 }],
            96: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n") } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r }, { "../../core": 29 }],
            97: [function(t, e) {
                function r(t) { var e = new i.Matrix;
                    t.renderable = !1, i.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vMapCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vMapCoord;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nvoid main(void)\n{\n   vec4 original =  texture2D(uSampler, vTextureCoord);\n   vec4 map =  texture2D(mapSampler, vMapCoord);\n\n   map -= 0.5;\n   map.xy *= scale;\n\n   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y));\n}\n", { mapSampler: { type: "sampler2D", value: t.texture }, otherMatrix: { type: "mat3", value: e.toArray(!0) }, scale: { type: "v2", value: { x: 1, y: 1 } } }), this.maskSprite = t, this.maskMatrix = e, this.scale = new i.Point(20, 20) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r) { var i = t.filterManager;
                    i.calculateMappedMatrix(e.frame, this.maskSprite, this.maskMatrix), this.uniforms.otherMatrix.value = this.maskMatrix.toArray(!0), this.uniforms.scale.value.x = this.scale.x * (1 / e.frame.width), this.uniforms.scale.value.y = this.scale.y * (1 / e.frame.height); var n = this.getShader(t);
                    i.applyFilter(n, e, r) }, Object.defineProperties(r.prototype, { map: { get: function() { return this.uniforms.mapSampler.value }, set: function(t) { this.uniforms.mapSampler.value = t } } }) }, { "../../core": 29 }],
            98: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 dimensions;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * dimensions.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n", { scale: { type: "1f", value: 1 }, angle: { type: "1f", value: 5 }, dimensions: { type: "4fv", value: [0, 0, 0, 0] } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { scale: { get: function() { return this.uniforms.scale.value }, set: function(t) { this.uniforms.scale.value = t } }, angle: { get: function() { return this.uniforms.angle.value }, set: function(t) { this.uniforms.angle.value = t } } }) }, { "../../core": 29 }],
            99: [function(t, e) {
                function r() { i.AbstractFilter.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\n\nuniform float strength;\nuniform vec2 offset;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying vec2 vBlurTexCoords[6];\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3((aVertexPosition+offset), 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n\n    vBlurTexCoords[ 0] = aTextureCoord + vec2(0.0, -0.012 * strength);\n    vBlurTexCoords[ 1] = aTextureCoord + vec2(0.0, -0.008 * strength);\n    vBlurTexCoords[ 2] = aTextureCoord + vec2(0.0, -0.004 * strength);\n    vBlurTexCoords[ 3] = aTextureCoord + vec2(0.0,  0.004 * strength);\n    vBlurTexCoords[ 4] = aTextureCoord + vec2(0.0,  0.008 * strength);\n    vBlurTexCoords[ 5] = aTextureCoord + vec2(0.0,  0.012 * strength);\n\n   vColor = vec4(aColor.rgb * aColor.a, aColor.a);\n}\n", "precision lowp float;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vBlurTexCoords[6];\nvarying vec4 vColor;\n\nuniform vec3 color;\nuniform float alpha;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec4 sum = vec4(0.0);\n\n    sum += texture2D(uSampler, vBlurTexCoords[ 0])*0.004431848411938341;\n    sum += texture2D(uSampler, vBlurTexCoords[ 1])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 2])*0.2419707245191454;\n    sum += texture2D(uSampler, vTextureCoord     )*0.3989422804014327;\n    sum += texture2D(uSampler, vBlurTexCoords[ 3])*0.2419707245191454;\n    sum += texture2D(uSampler, vBlurTexCoords[ 4])*0.05399096651318985;\n    sum += texture2D(uSampler, vBlurTexCoords[ 5])*0.004431848411938341;\n\n    gl_FragColor = vec4( color.rgb * sum.a * alpha, sum.a * alpha );\n}\n", { blur: { type: "1f", value: 1 / 512 }, color: { type: "c", value: [0, 0, 0] }, alpha: { type: "1f", value: .7 }, offset: { type: "2f", value: [5, 5] }, strength: { type: "1f", value: 1 } }), this.passes = 1, this.strength = 4 } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r, i) { var n = this.getShader(t); if (this.uniforms.strength.value = this.strength / 4 / this.passes * (e.frame.height / e.size.height), 1 === this.passes) t.filterManager.applyFilter(n, e, r, i);
                    else { for (var o = t.filterManager.getRenderTarget(!0), s = e, a = o, u = 0; u < this.passes - 1; u++) { t.filterManager.applyFilter(n, s, a, i); var l = a;
                            a = s, s = l } t.filterManager.applyFilter(n, s, r, i), t.filterManager.returnRenderTarget(o) } }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.strength }, set: function(t) { this.padding = .5 * t, this.strength = t } } }) }, { "../../core": 29 }],
            100: [function(t, e) {
                function r() { i.AbstractFilter.call(this), this.blurXFilter = new n, this.blurYTintFilter = new o, this.defaultFilter = new i.AbstractFilter, this.padding = 30, this._dirtyPosition = !0, this._angle = 45 * Math.PI / 180, this._distance = 10, this.alpha = .75, this.hideObject = !1, this.blendMode = i.BLEND_MODES.MULTIPLY } var i = t("../../core"),
                    n = t("../blur/BlurXFilter"),
                    o = t("./BlurYTintFilter");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r) { var n = t.filterManager.getRenderTarget(!0);
                    this._dirtyPosition && (this._dirtyPosition = !1, this.blurYTintFilter.uniforms.offset.value[0] = Math.sin(this._angle) * this._distance, this.blurYTintFilter.uniforms.offset.value[1] = Math.cos(this._angle) * this._distance), this.blurXFilter.applyFilter(t, e, n), t.blendModeManager.setBlendMode(this.blendMode), this.blurYTintFilter.applyFilter(t, n, r), t.blendModeManager.setBlendMode(i.BLEND_MODES.NORMAL), this.hideObject || this.defaultFilter.applyFilter(t, e, r), t.filterManager.returnRenderTarget(n) }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.blurXFilter.blur }, set: function(t) { this.blurXFilter.blur = this.blurYTintFilter.blur = t } }, blurX: { get: function() { return this.blurXFilter.blur }, set: function(t) { this.blurXFilter.blur = t } }, blurY: { get: function() { return this.blurYTintFilter.blur }, set: function(t) { this.blurYTintFilter.blur = t } }, color: { get: function() { return i.utils.rgb2hex(this.blurYTintFilter.uniforms.color.value) }, set: function(t) { this.blurYTintFilter.uniforms.color.value = i.utils.hex2rgb(t) } }, alpha: { get: function() { return this.blurYTintFilter.uniforms.alpha.value }, set: function(t) { this.blurYTintFilter.uniforms.alpha.value = t } }, distance: { get: function() { return this._distance }, set: function(t) { this._dirtyPosition = !0, this._distance = t } }, angle: { get: function() { return this._angle }, set: function(t) { this._dirtyPosition = !0, this._angle = t } } }) }, { "../../core": 29, "../blur/BlurXFilter": 90, "./BlurYTintFilter": 99 }],
            101: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\nuniform float gray;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);\n}\n", { gray: { type: "1f", value: 1 } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { gray: { get: function() { return this.uniforms.gray.value }, set: function(t) { this.uniforms.gray.value = t } } }) }, { "../../core": 29 }],
            102: [function(t, e) {
                e.exports = { AsciiFilter: t("./ascii/AsciiFilter"), BloomFilter: t("./bloom/BloomFilter"), BlurFilter: t("./blur/BlurFilter"), BlurXFilter: t("./blur/BlurXFilter"), BlurYFilter: t("./blur/BlurYFilter"), BlurDirFilter: t("./blur/BlurDirFilter"), ColorMatrixFilter: t("./color/ColorMatrixFilter"), ColorStepFilter: t("./color/ColorStepFilter"), ConvolutionFilter: t("./convolution/ConvolutionFilter"), CrossHatchFilter: t("./crosshatch/CrossHatchFilter"), DisplacementFilter: t("./displacement/DisplacementFilter"), DotScreenFilter: t("./dot/DotScreenFilter"), GrayFilter: t("./gray/GrayFilter"), DropShadowFilter: t("./dropshadow/DropShadowFilter"), InvertFilter: t("./invert/InvertFilter"), NoiseFilter: t("./noise/NoiseFilter"), NormalMapFilter: t("./normal/NormalMapFilter"), PixelateFilter: t("./pixelate/PixelateFilter"), RGBSplitFilter: t("./rgb/RGBSplitFilter"), ShockwaveFilter: t("./shockwave/ShockwaveFilter"), SepiaFilter: t("./sepia/SepiaFilter"), SmartBlurFilter: t("./blur/SmartBlurFilter"), TiltShiftFilter: t("./tiltshift/TiltShiftFilter"), TiltShiftXFilter: t("./tiltshift/TiltShiftXFilter"), TiltShiftYFilter: t("./tiltshift/TiltShiftYFilter"), TwistFilter: t("./twist/TwistFilter") }
            }, { "./ascii/AsciiFilter": 86, "./bloom/BloomFilter": 87, "./blur/BlurDirFilter": 88, "./blur/BlurFilter": 89, "./blur/BlurXFilter": 90, "./blur/BlurYFilter": 91, "./blur/SmartBlurFilter": 92, "./color/ColorMatrixFilter": 93, "./color/ColorStepFilter": 94, "./convolution/ConvolutionFilter": 95, "./crosshatch/CrossHatchFilter": 96, "./displacement/DisplacementFilter": 97, "./dot/DotScreenFilter": 98, "./dropshadow/DropShadowFilter": 100, "./gray/GrayFilter": 101, "./invert/InvertFilter": 103, "./noise/NoiseFilter": 104, "./normal/NormalMapFilter": 105, "./pixelate/PixelateFilter": 106, "./rgb/RGBSplitFilter": 107, "./sepia/SepiaFilter": 108, "./shockwave/ShockwaveFilter": 109, "./tiltshift/TiltShiftFilter": 111, "./tiltshift/TiltShiftXFilter": 112, "./tiltshift/TiltShiftYFilter": 113, "./twist/TwistFilter": 114 }],
            103: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform float invert;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);\n}\n", { invert: { type: "1f", value: 1 } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { invert: { get: function() { return this.uniforms.invert.value }, set: function(t) { this.uniforms.invert.value = t } } }) }, { "../../core": 29 }],
            104: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float noise;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    float diff = (rand(vTextureCoord) - 0.5) * noise;\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    gl_FragColor = color;\n}\n", { noise: { type: "1f", value: .5 } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { noise: { get: function() { return this.uniforms.noise.value }, set: function(t) { this.uniforms.noise.value = t } } }) }, { "../../core": 29 }],
            105: [function(t, e) {
                function r(t) { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D displacementMap;\nuniform sampler2D uSampler;\n\nuniform vec4 dimensions;\n\nconst vec2 Resolution = vec2(1.0,1.0);      //resolution of screen\nuniform vec3 LightPos;    //light position, normalized\nconst vec4 LightColor = vec4(1.0, 1.0, 1.0, 1.0);      //light RGBA -- alpha is intensity\nconst vec4 AmbientColor = vec4(1.0, 1.0, 1.0, 0.5);    //ambient RGBA -- alpha is intensity\nconst vec3 Falloff = vec3(0.0, 1.0, 0.2);         //attenuation coefficients\n\nuniform vec3 LightDir; // = vec3(1.0, 0.0, 1.0);\n\nuniform vec2 mapDimensions; // = vec2(256.0, 256.0);\n\n\nvoid main(void)\n{\n    vec2 mapCords = vTextureCoord.xy;\n\n    vec4 color = texture2D(uSampler, vTextureCoord.st);\n    vec3 nColor = texture2D(displacementMap, vTextureCoord.st).rgb;\n\n\n    mapCords *= vec2(dimensions.x/512.0, dimensions.y/512.0);\n\n    mapCords.y *= -1.0;\n    mapCords.y += 1.0;\n\n    // RGBA of our diffuse color\n    vec4 DiffuseColor = texture2D(uSampler, vTextureCoord);\n\n    // RGB of our normal map\n    vec3 NormalMap = texture2D(displacementMap, mapCords).rgb;\n\n    // The delta position of light\n    // vec3 LightDir = vec3(LightPos.xy - (gl_FragCoord.xy / Resolution.xy), LightPos.z);\n    vec3 LightDir = vec3(LightPos.xy - (mapCords.xy), LightPos.z);\n\n    // Correct for aspect ratio\n    // LightDir.x *= Resolution.x / Resolution.y;\n\n    // Determine distance (used for attenuation) BEFORE we normalize our LightDir\n    float D = length(LightDir);\n\n    // normalize our vectors\n    vec3 N = normalize(NormalMap * 2.0 - 1.0);\n    vec3 L = normalize(LightDir);\n\n    // Pre-multiply light color with intensity\n    // Then perform 'N dot L' to determine our diffuse term\n    vec3 Diffuse = (LightColor.rgb * LightColor.a) * max(dot(N, L), 0.0);\n\n    // pre-multiply ambient color with intensity\n    vec3 Ambient = AmbientColor.rgb * AmbientColor.a;\n\n    // calculate attenuation\n    float Attenuation = 1.0 / ( Falloff.x + (Falloff.y*D) + (Falloff.z*D*D) );\n\n    // the calculation which brings it all together\n    vec3 Intensity = Ambient + Diffuse * Attenuation;\n    vec3 FinalColor = DiffuseColor.rgb * Intensity;\n    gl_FragColor = vColor * vec4(FinalColor, DiffuseColor.a);\n\n    // gl_FragColor = vec4(1.0, 0.0, 0.0, Attenuation); // vColor * vec4(FinalColor, DiffuseColor.a);\n\n/*\n    // normalise color\n    vec3 normal = normalize(nColor * 2.0 - 1.0);\n\n    vec3 deltaPos = vec3( (light.xy - gl_FragCoord.xy) / resolution.xy, light.z );\n\n    float lambert = clamp(dot(normal, lightDir), 0.0, 1.0);\n\n    float d = sqrt(dot(deltaPos, deltaPos));\n    float att = 1.0 / ( attenuation.x + (attenuation.y*d) + (attenuation.z*d*d) );\n\n    vec3 result = (ambientColor * ambientIntensity) + (lightColor.rgb * lambert) * att;\n    result *= color.rgb;\n\n    gl_FragColor = vec4(result, 1.0);\n*/\n}\n", { displacementMap: { type: "sampler2D", value: t }, scale: { type: "2f", value: { x: 15, y: 15 } }, offset: { type: "2f", value: { x: 0, y: 0 } }, mapDimensions: { type: "2f", value: { x: 1, y: 1 } }, dimensions: { type: "4f", value: [0, 0, 0, 0] }, LightPos: { type: "3f", value: [0, 1, 0] } }), t.baseTexture._powerOf2 = !0, t.baseTexture.hasLoaded ? this.onTextureLoaded() : t.baseTexture.once("loaded", this.onTextureLoaded, this) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.onTextureLoaded = function() { this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height }, Object.defineProperties(r.prototype, { map: { get: function() { return this.uniforms.displacementMap.value }, set: function(t) { this.uniforms.displacementMap.value = t } }, scale: { get: function() { return this.uniforms.scale.value }, set: function(t) { this.uniforms.scale.value = t } }, offset: { get: function() { return this.uniforms.offset.value }, set: function(t) { this.uniforms.offset.value = t } } }) }, { "../../core": 29 }],
            106: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 dimensions;\nuniform vec2 pixelSize;\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    vec2 coord = vTextureCoord;\n\n    vec2 size = dimensions.xy / pixelSize;\n\n    vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;\n\n    gl_FragColor = texture2D(uSampler, color);\n}\n", { dimensions: { type: "4fv", value: new Float32Array([0, 0, 0, 0]) }, pixelSize: { type: "v2", value: { x: 10, y: 10 } } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { size: { get: function() { return this.uniforms.pixelSize.value }, set: function(t) { this.uniforms.pixelSize.value = t } } }) }, { "../../core": 29 }],
            107: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 dimensions;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n", { red: { type: "v2", value: { x: 20, y: 20 } }, green: { type: "v2", value: { x: -20, y: 20 } }, blue: { type: "v2", value: { x: 20, y: -20 } }, dimensions: { type: "4fv", value: [0, 0, 0, 0] } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { red: { get: function() { return this.uniforms.red.value }, set: function(t) { this.uniforms.red.value = t } }, green: { get: function() { return this.uniforms.green.value }, set: function(t) { this.uniforms.green.value = t } }, blue: { get: function() { return this.uniforms.blue.value }, set: function(t) { this.uniforms.blue.value = t } } }) }, { "../../core": 29 }],
            108: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float sepia;\n\nconst mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);\n}\n", { sepia: { type: "1f", value: 1 } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { sepia: { get: function() { return this.uniforms.sepia.value }, set: function(t) { this.uniforms.sepia.value = t } } }) }, { "../../core": 29 }],
            109: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision lowp float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nuniform vec2 center;\nuniform vec3 params; // 10.0, 0.8, 0.1\nuniform float time;\n\nvoid main()\n{\n    vec2 uv = vTextureCoord;\n    vec2 texCoord = uv;\n\n    float dist = distance(uv, center);\n\n    if ( (dist <= (time + params.z)) && (dist >= (time - params.z)) )\n    {\n        float diff = (dist - time);\n        float powDiff = 1.0 - pow(abs(diff*params.x), params.y);\n\n        float diffTime = diff  * powDiff;\n        vec2 diffUV = normalize(uv - center);\n        texCoord = uv + (diffUV * diffTime);\n    }\n\n    gl_FragColor = texture2D(uSampler, texCoord);\n}\n", { center: { type: "v2", value: { x: .5, y: .5 } }, params: { type: "v3", value: { x: 10, y: .8, z: .1 } }, time: { type: "1f", value: 0 } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { center: { get: function() { return this.uniforms.center.value }, set: function(t) { this.uniforms.center.value = t } }, params: { get: function() { return this.uniforms.params.value }, set: function(t) { this.uniforms.params.value = t } }, time: { get: function() { return this.uniforms.time.value }, set: function(t) { this.uniforms.time.value = t } } }) }, { "../../core": 29 }],
            110: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    gl_FragColor = color / total;\n    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n}\n", { blur: { type: "1f", value: 100 }, gradientBlur: { type: "1f", value: 600 }, start: { type: "v2", value: { x: 0, y: window.innerHeight / 2 } }, end: { type: "v2", value: { x: 600, y: window.innerHeight / 2 } }, delta: { type: "v2", value: { x: 30, y: 30 } }, texSize: { type: "v2", value: { x: window.innerWidth, y: window.innerHeight } } }), this.updateDelta() } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.updateDelta = function() { this.uniforms.delta.value.x = 0, this.uniforms.delta.value.y = 0 }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.uniforms.blur.value }, set: function(t) { this.uniforms.blur.value = t } }, gradientBlur: { get: function() { return this.uniforms.gradientBlur.value }, set: function(t) { this.uniforms.gradientBlur.value = t } }, start: { get: function() { return this.uniforms.start.value }, set: function(t) { this.uniforms.start.value = t, this.updateDelta() } }, end: { get: function() { return this.uniforms.end.value }, set: function(t) { this.uniforms.end.value = t, this.updateDelta() } } }) }, { "../../core": 29 }],
            111: [function(t, e) {
                function r() { i.AbstractFilter.call(this), this.tiltShiftXFilter = new n, this.tiltShiftYFilter = new o } var i = t("../../core"),
                    n = t("./TiltShiftXFilter"),
                    o = t("./TiltShiftYFilter");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.applyFilter = function(t, e, r) { var i = t.filterManager.getRenderTarget(!0);
                    this.tiltShiftXFilter.applyFilter(t, e, i), this.tiltShiftYFilter.applyFilter(t, i, r), t.filterManager.returnRenderTarget(i) }, Object.defineProperties(r.prototype, { blur: { get: function() { return this.tiltShiftXFilter.blur }, set: function(t) { this.tiltShiftXFilter.blur = this.tiltShiftYFilter.blur = t } }, gradientBlur: { get: function() { return this.tiltShiftXFilter.gradientBlur }, set: function(t) { this.tiltShiftXFilter.gradientBlur = this.tiltShiftYFilter.gradientBlur = t } }, start: { get: function() { return this.tiltShiftXFilter.start }, set: function(t) { this.tiltShiftXFilter.start = this.tiltShiftYFilter.start = t } }, end: { get: function() { return this.tiltShiftXFilter.end }, set: function(t) { this.tiltShiftXFilter.end = this.tiltShiftYFilter.end = t } } }) }, { "../../core": 29, "./TiltShiftXFilter": 112, "./TiltShiftYFilter": 113 }],
            112: [function(t, e) {
                function r() { i.call(this) } var i = t("./TiltShiftAxisFilter");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.updateDelta = function() { var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
                        e = this.uniforms.end.value.y - this.uniforms.start.value.y,
                        r = Math.sqrt(t * t + e * e);
                    this.uniforms.delta.value.x = t / r, this.uniforms.delta.value.y = e / r } }, { "./TiltShiftAxisFilter": 110 }],
            113: [function(t, e) {
                function r() { i.call(this) } var i = t("./TiltShiftAxisFilter");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.updateDelta = function() { var t = this.uniforms.end.value.x - this.uniforms.start.value.x,
                        e = this.uniforms.end.value.y - this.uniforms.start.value.y,
                        r = Math.sqrt(t * t + e * e);
                    this.uniforms.delta.value.x = -e / r, this.uniforms.delta.value.y = t / r } }, { "./TiltShiftAxisFilter": 110 }],
            114: [function(t, e) {
                function r() { i.AbstractFilter.call(this, null, "precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\n\nvoid main(void)\n{\n   vec2 coord = vTextureCoord - offset;\n   float dist = length(coord);\n\n   if (dist < radius)\n   {\n       float ratio = (radius - dist) / radius;\n       float angleMod = ratio * ratio * angle;\n       float s = sin(angleMod);\n       float c = cos(angleMod);\n       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n   }\n\n   gl_FragColor = texture2D(uSampler, coord+offset);\n}\n", { radius: { type: "1f", value: .5 }, angle: { type: "1f", value: 5 }, offset: { type: "v2", value: { x: .5, y: .5 } } }) } var i = t("../../core");
                r.prototype = Object.create(i.AbstractFilter.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { offset: { get: function() { return this.uniforms.offset.value }, set: function(t) { this.uniforms.offset.value = t } }, radius: { get: function() { return this.uniforms.radius.value }, set: function(t) { this.uniforms.radius.value = t } }, angle: { get: function() { return this.uniforms.angle.value }, set: function(t) { this.uniforms.angle.value = t } } }) }, { "../../core": 29 }],
            115: [function(t, e) {
                function r() { this.global = new i.Point, this.target = null, this.originalEvent = null } var i = t("../core");
                r.prototype.constructor = r, e.exports = r, r.prototype.getLocalPosition = function(t, e, r) { var n = t.worldTransform,
                        o = r ? r : this.global,
                        s = n.a,
                        a = n.c,
                        u = n.tx,
                        l = n.b,
                        h = n.d,
                        c = n.ty,
                        p = 1 / (s * h + a * -l); return e = e || new i.Point, e.x = h * p * o.x + -a * p * o.x + (c * a - u * h) * p, e.y = s * p * o.y + -l * p * o.y + (-c * s + u * l) * p, e } }, { "../core": 29 }],
            116: [function(t, e) {
                function r(t, e) { e = e || {}, this.renderer = t, this.autoPreventDefault = void 0 !== e.autoPreventDefault ? e.autoPreventDefault : !0, this.interactionFrequency = e.interactionFrequency || 10, this.mouse = new n, this.eventData = { stopped: !1, target: null, type: null, data: this.mouse, stopPropagation: function() { this.stopped = !0 } }, this.interactiveDataPool = [], this.interactionDOMElement = null, this.eventsAdded = !1, this.onMouseUp = this.onMouseUp.bind(this), this.processMouseUp = this.processMouseUp.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.processMouseDown = this.processMouseDown.bind(this), this.onMouseMove = this.onMouseMove.bind(this), this.processMouseMove = this.processMouseMove.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.processMouseOverOut = this.processMouseOverOut.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.processTouchStart = this.processTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.processTouchEnd = this.processTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.processTouchMove = this.processTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this._tempPoint = new i.Point, this.resolution = 1, this.setTargetElement(this.renderer.view, this.renderer.resolution) } var i = t("../core"),
                    n = t("./InteractionData");
                Object.assign(i.DisplayObject.prototype, t("./interactiveTarget")), r.prototype.constructor = r, e.exports = r, r.prototype.setTargetElement = function(t, e) { this.removeEvents(), this.interactionDOMElement = t, this.resolution = e || 1, this.addEvents() }, r.prototype.addEvents = function() { this.interactionDOMElement && (i.ticker.shared.add(this.update, this), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none"), window.document.addEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.addEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.addEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !0) }, r.prototype.removeEvents = function() { this.interactionDOMElement && (i.ticker.shared.remove(this.update), window.navigator.msPointerEnabled && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = ""), window.document.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0), this.eventsAdded = !1) }, r.prototype.update = function(t) { if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) { if (this.didMove) return void(this.didMove = !1);
                        this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor) } }, r.prototype.dispatchEvent = function(t, e, r) { r.stopped || (r.target = t, r.type = e, t.emit(e, r), t[e] && t[e](r)) }, r.prototype.mapPositionToPoint = function(t, e, r) { var i = this.interactionDOMElement.getBoundingClientRect();
                    t.x = (e - i.left) * (this.interactionDOMElement.width / i.width) / this.resolution, t.y = (r - i.top) * (this.interactionDOMElement.height / i.height) / this.resolution }, r.prototype.processInteractive = function(t, e, r, i, n) { if (!e.visible) return !1; var o = e.children,
                        s = !1; if (n = n || e.interactive, e.interactiveChildren)
                        for (var a = o.length - 1; a >= 0; a--) !s && i ? s = this.processInteractive(t, o[a], r, !0, n) : this.processInteractive(t, o[a], r, !1, !1); return n && (i && (e.hitArea ? (e.worldTransform.applyInverse(t, this._tempPoint), s = e.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) : e.containsPoint && (s = e.containsPoint(t))), e.interactive && r(e, s)), s }, r.prototype.onMouseDown = function(t) { this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.autoPreventDefault && this.mouse.originalEvent.preventDefault(), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseDown, !0) }, r.prototype.processMouseDown = function(t, e) { var r = this.mouse.originalEvent,
                        i = 2 === r.button || 3 === r.which;
                    e && (t[i ? "_isRightDown" : "_isLeftDown"] = !0, this.dispatchEvent(t, i ? "rightdown" : "mousedown", this.eventData)) }, r.prototype.onMouseUp = function(t) { this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseUp, !0) }, r.prototype.processMouseUp = function(t, e) { var r = this.mouse.originalEvent,
                        i = 2 === r.button || 3 === r.which,
                        n = i ? "_isRightDown" : "_isLeftDown";
                    e ? (this.dispatchEvent(t, i ? "rightup" : "mouseup", this.eventData), t[n] && (t[n] = !1, this.dispatchEvent(t, i ? "rightclick" : "click", this.eventData))) : t[n] && (t[n] = !1, this.dispatchEvent(t, i ? "rightupoutside" : "mouseupoutside", this.eventData)) }, r.prototype.onMouseMove = function(t) { this.mouse.originalEvent = t, this.eventData.data = this.mouse, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.didMove = !0, this.cursor = "inherit", this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseMove, !0), this.currentCursorStyle !== this.cursor && (this.currentCursorStyle = this.cursor, this.interactionDOMElement.style.cursor = this.cursor) }, r.prototype.processMouseMove = function(t, e) { this.dispatchEvent(t, "mousemove", this.eventData), this.processMouseOverOut(t, e) }, r.prototype.onMouseOut = function(t) { this.mouse.originalEvent = t, this.eventData.stopped = !1, this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.interactionDOMElement.style.cursor = "inherit", this.mapPositionToPoint(this.mouse.global, t.clientX, t.clientY), this.processInteractive(this.mouse.global, this.renderer._lastObjectRendered, this.processMouseOverOut, !1) }, r.prototype.processMouseOverOut = function(t, e) { e ? (t._over || (t._over = !0, this.dispatchEvent(t, "mouseover", this.eventData)), t.buttonMode && (this.cursor = t.defaultCursor)) : t._over && (t._over = !1, this.dispatchEvent(t, "mouseout", this.eventData)) }, r.prototype.onTouchStart = function(t) { this.autoPreventDefault && t.preventDefault(); for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) { var n = e[i],
                            o = this.getTouchData(n);
                        o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchStart, !0), this.returnTouchData(o) } }, r.prototype.processTouchStart = function(t, e) { e && (t._touchDown = !0, this.dispatchEvent(t, "touchstart", this.eventData)) }, r.prototype.onTouchEnd = function(t) { this.autoPreventDefault && t.preventDefault(); for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) { var n = e[i],
                            o = this.getTouchData(n);
                        o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchEnd, !0), this.returnTouchData(o) } }, r.prototype.processTouchEnd = function(t, e) { e ? (this.dispatchEvent(t, "touchend", this.eventData), t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "tap", this.eventData))) : t._touchDown && (t._touchDown = !1, this.dispatchEvent(t, "touchendoutside", this.eventData)) }, r.prototype.onTouchMove = function(t) { this.autoPreventDefault && t.preventDefault(); for (var e = t.changedTouches, r = e.length, i = 0; r > i; i++) { var n = e[i],
                            o = this.getTouchData(n);
                        o.originalEvent = t, this.eventData.data = o, this.eventData.stopped = !1, this.processInteractive(o.global, this.renderer._lastObjectRendered, this.processTouchMove, !1), this.returnTouchData(o) } }, r.prototype.processTouchMove = function(t, e) { e = e, this.dispatchEvent(t, "touchmove", this.eventData) }, r.prototype.getTouchData = function(t) { var e = this.interactiveDataPool.pop(); return e || (e = new n), e.identifier = t.identifier, this.mapPositionToPoint(e.global, t.clientX, t.clientY), navigator.isCocoonJS && (e.global.x = e.global.x / this.resolution, e.global.y = e.global.y / this.resolution), t.globalX = e.global.x, t.globalY = e.global.y, e }, r.prototype.returnTouchData = function(t) { this.interactiveDataPool.push(t) }, r.prototype.destroy = function() { this.removeEvents(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactiveDataPool = null, this.interactionDOMElement = null, this.onMouseUp = null, this.processMouseUp = null, this.onMouseDown = null, this.processMouseDown = null, this.onMouseMove = null, this.processMouseMove = null, this.onMouseOut = null, this.processMouseOverOut = null, this.onTouchStart = null, this.processTouchStart = null, this.onTouchEnd = null, this.processTouchEnd = null, this.onTouchMove = null, this.processTouchMove = null, this._tempPoint = null }, i.WebGLRenderer.registerPlugin("interaction", r), i.CanvasRenderer.registerPlugin("interaction", r) }, { "../core": 29, "./InteractionData": 115, "./interactiveTarget": 118 }],
            117: [function(t, e) { e.exports = { InteractionData: t("./InteractionData"), InteractionManager: t("./InteractionManager"), interactiveTarget: t("./interactiveTarget") } }, { "./InteractionData": 115, "./InteractionManager": 116, "./interactiveTarget": 118 }],
            118: [function(t, e) { var r = { interactive: !1, buttonMode: !1, interactiveChildren: !0, defaultCursor: "pointer", _over: !1, _touchDown: !1 };
                e.exports = r }, {}],
            119: [function(t, e) {
                function r(t, e) { var r = {},
                        i = t.data.getElementsByTagName("info")[0],
                        s = t.data.getElementsByTagName("common")[0];
                    r.font = i.getAttribute("face"), r.size = parseInt(i.getAttribute("size"), 10), r.lineHeight = parseInt(s.getAttribute("lineHeight"), 10), r.chars = {}; for (var a = t.data.getElementsByTagName("char"), u = 0; u < a.length; u++) { var l = parseInt(a[u].getAttribute("id"), 10),
                            h = new n.Rectangle(parseInt(a[u].getAttribute("x"), 10) + e.frame.x, parseInt(a[u].getAttribute("y"), 10) + e.frame.y, parseInt(a[u].getAttribute("width"), 10), parseInt(a[u].getAttribute("height"), 10));
                        r.chars[l] = { xOffset: parseInt(a[u].getAttribute("xoffset"), 10), yOffset: parseInt(a[u].getAttribute("yoffset"), 10), xAdvance: parseInt(a[u].getAttribute("xadvance"), 10), kerning: {}, texture: new n.Texture(e.baseTexture, h) } } var c = t.data.getElementsByTagName("kerning"); for (u = 0; u < c.length; u++) { var p = parseInt(c[u].getAttribute("first"), 10),
                            d = parseInt(c[u].getAttribute("second"), 10),
                            f = parseInt(c[u].getAttribute("amount"), 10);
                        r.chars[d].kerning[p] = f } t.bitmapFont = r, o.BitmapText.fonts[r.font] = r } var i = t("resource-loader").Resource,
                    n = t("../core"),
                    o = t("../extras"),
                    s = t("path");
                e.exports = function() { return function(t, e) { if (!t.data || !t.isXml) return e(); if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return e(); var o = s.dirname(t.url); "." === o && (o = ""), this.baseUrl && o && ("/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (o += "/"), o = o.replace(this.baseUrl, "")), o && "/" !== o.charAt(o.length - 1) && (o += "/"); var a = o + t.data.getElementsByTagName("page")[0].getAttribute("file"); if (n.utils.TextureCache[a]) r(t, n.utils.TextureCache[a]), e();
                        else { var u = { crossOrigin: t.crossOrigin, loadType: i.LOAD_TYPE.IMAGE };
                            this.add(t.name + "_image", a, u, function(i) { r(t, i.texture), e() }) } } } }, { "../core": 29, "../extras": 85, path: 3, "resource-loader": 18 }],
            120: [function(t, e) { e.exports = { Loader: t("./loader"), bitmapFontParser: t("./bitmapFontParser"), spritesheetParser: t("./spritesheetParser"), textureParser: t("./textureParser"), Resource: t("resource-loader").Resource } }, { "./bitmapFontParser": 119, "./loader": 121, "./spritesheetParser": 122, "./textureParser": 123, "resource-loader": 18 }],
            121: [function(t, e) {
                function r(t, e) { i.call(this, t, e); for (var n = 0; n < r._pixiMiddleware.length; ++n) this.use(r._pixiMiddleware[n]()) } var i = t("resource-loader"),
                    n = t("./textureParser"),
                    o = t("./spritesheetParser"),
                    s = t("./bitmapFontParser");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r._pixiMiddleware = [i.middleware.parsing.blob, n, o, s], r.addPixiMiddleware = function(t) { r._pixiMiddleware.push(t) }; var a = i.Resource;
                a.setExtensionXhrType("fnt", a.XHR_RESPONSE_TYPE.DOCUMENT) }, { "./bitmapFontParser": 119, "./spritesheetParser": 122, "./textureParser": 123, "resource-loader": 18 }],
            122: [function(t, e) { var r = t("resource-loader").Resource,
                    i = t("path"),
                    n = t("../core");
                e.exports = function() { return function(t, e) { if (!t.data || !t.isJson || !t.data.frames) return e(); var o = { crossOrigin: t.crossOrigin, loadType: r.LOAD_TYPE.IMAGE },
                            s = i.dirname(t.url.replace(this.baseUrl, "")),
                            a = n.utils.getResolutionOfUrl(t.url);
                        this.add(t.name + "_image", s + "/" + t.data.meta.image, o, function(r) { t.textures = {}; var i = t.data.frames; for (var o in i) { var s = i[o].frame; if (s) { var u = null,
                                        l = null; if (u = i[o].rotated ? new n.Rectangle(s.x, s.y, s.h, s.w) : new n.Rectangle(s.x, s.y, s.w, s.h), i[o].trimmed && (l = new n.Rectangle(i[o].spriteSourceSize.x / a, i[o].spriteSourceSize.y / a, i[o].sourceSize.w / a, i[o].sourceSize.h / a)), i[o].rotated) { var h = u.width;
                                        u.width = u.height, u.height = h } u.x /= a, u.y /= a, u.width /= a, u.height /= a, t.textures[o] = new n.Texture(r.texture.baseTexture, u, u.clone(), l, i[o].rotated), n.utils.TextureCache[o] = t.textures[o] } } e() }) } } }, { "../core": 29, path: 3, "resource-loader": 18 }],
            123: [function(t, e) { var r = t("../core");
                e.exports = function() { return function(t, e) { t.data && t.isImage && (t.texture = new r.Texture(new r.BaseTexture(t.data, null, r.utils.getResolutionOfUrl(t.url))), r.utils.TextureCache[t.url] = t.texture), e() } } }, { "../core": 29 }],
            124: [function(t, e) {
                function r(t, e, n, o, s) { i.Container.call(this), this._texture = null, this.uvs = n || new Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.vertices = e || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.indices = o || new Uint16Array([0, 1, 2, 3]), this.dirty = !0, this.blendMode = i.BLEND_MODES.NORMAL, this.canvasPadding = 0, this.drawMode = s || r.DRAW_MODES.TRIANGLE_MESH, this.texture = t }
                var i = t("../core"),
                    n = new i.Point,
                    o = new i.Polygon;
                r.prototype = Object.create(i.Container.prototype), r.prototype.constructor = r, e.exports = r, Object.defineProperties(r.prototype, { texture: { get: function() { return this._texture }, set: function(t) { this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this))) } } }), r.prototype._renderWebGL = function(t) { t.setObjectRenderer(t.plugins.mesh), t.plugins.mesh.render(this) }, r.prototype._renderCanvas = function(t) { var e = t.context,
                        i = this.worldTransform;
                    t.roundPixels ? e.setTransform(i.a, i.b, i.c, i.d, 0 | i.tx, 0 | i.ty) : e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), this.drawMode === r.DRAW_MODES.TRIANGLE_MESH ? this._renderCanvasTriangleMesh(e) : this._renderCanvasTriangles(e) }, r.prototype._renderCanvasTriangleMesh = function(t) { for (var e = this.vertices, r = this.uvs, i = e.length / 2, n = 0; i - 2 > n; n++) { var o = 2 * n;
                        this._renderCanvasDrawTriangle(t, e, r, o, o + 2, o + 4) } }, r.prototype._renderCanvasTriangles = function(t) { for (var e = this.vertices, r = this.uvs, i = this.indices, n = i.length, o = 0; n > o; o += 3) { var s = 2 * i[o],
                            a = 2 * i[o + 1],
                            u = 2 * i[o + 2];
                        this._renderCanvasDrawTriangle(t, e, r, s, a, u) } }, r.prototype._renderCanvasDrawTriangle = function(t, e, r, i, n, o) {
                    var s = this._texture.baseTexture.source,
                        a = this._texture.baseTexture.width,
                        u = this._texture.baseTexture.height,
                        l = e[i],
                        h = e[n],
                        c = e[o],
                        p = e[i + 1],
                        d = e[n + 1],
                        f = e[o + 1],
                        v = r[i] * a,
                        g = r[n] * a,
                        m = r[o] * a,
                        y = r[i + 1] * u,
                        x = r[n + 1] * u,
                        b = r[o + 1] * u;
                    if (this.canvasPadding > 0) {
                        var _ = this.canvasPadding / this.worldTransform.a,
                            T = this.canvasPadding / this.worldTransform.d,
                            E = (l + h + c) / 3,
                            S = (p + d + f) / 3,
                            w = l - E,
                            A = p - S,
                            C = Math.sqrt(w * w + A * A);
                        l = E + w / C * (C + _), p = S + A / C * (C + T), w = h - E, A = d - S, C = Math.sqrt(w * w + A * A), h = E + w / C * (C + _), d = S + A / C * (C + T), w = c - E, A = f - S, C = Math.sqrt(w * w + A * A), c = E + w / C * (C + _), f = S + A / C * (C + T)
                    }
                    t.save(), t.beginPath(), t.moveTo(l, p), t.lineTo(h, d), t.lineTo(c, f), t.closePath(), t.clip();
                    var M = v * x + y * m + g * b - x * m - y * g - v * b,
                        R = l * x + y * c + h * b - x * c - y * h - l * b,
                        F = v * h + l * m + g * c - h * m - l * g - v * c,
                        D = v * x * c + y * h * m + l * g * b - l * x * m - y * g * c - v * h * b,
                        P = p * x + y * f + d * b - x * f - y * d - p * b,
                        O = v * d + p * m + g * f - d * m - p * g - v * f,
                        B = v * x * f + y * d * m + p * g * b - p * x * m - y * g * f - v * d * b;
                    t.transform(R / M, P / M, F / M, O / M, D / M, B / M), t.drawImage(s, 0, 0), t.restore()
                }, r.prototype.renderMeshFlat = function(t) { var e = this.context,
                        r = t.vertices,
                        i = r.length / 2;
                    e.beginPath(); for (var n = 1; i - 2 > n; n++) { var o = 2 * n,
                            s = r[o],
                            a = r[o + 2],
                            u = r[o + 4],
                            l = r[o + 1],
                            h = r[o + 3],
                            c = r[o + 5];
                        e.moveTo(s, l), e.lineTo(a, h), e.lineTo(u, c) } e.fillStyle = "#FF0000", e.fill(), e.closePath() }, r.prototype._onTextureUpdate = function() { this.updateFrame = !0 }, r.prototype.getBounds = function(t) { if (!this._currentBounds) { for (var e = t || this.worldTransform, r = e.a, n = e.b, o = e.c, s = e.d, a = e.tx, u = e.ty, l = -1 / 0, h = -1 / 0, c = 1 / 0, p = 1 / 0, d = this.vertices, f = 0, v = d.length; v > f; f += 2) { var g = d[f],
                                m = d[f + 1],
                                y = r * g + o * m + a,
                                x = s * m + n * g + u;
                            c = c > y ? y : c, p = p > x ? x : p, l = y > l ? y : l, h = x > h ? x : h } if (c === -1 / 0 || 1 / 0 === h) return i.Rectangle.EMPTY; var b = this._bounds;
                        b.x = c, b.width = l - c, b.y = p, b.height = h - p, this._currentBounds = b } return this._currentBounds }, r.prototype.containsPoint = function(t) { if (!this.getBounds().contains(t.x, t.y)) return !1;
                    this.worldTransform.applyInverse(t, n); var e, i, s = this.vertices,
                        a = o.points; if (this.drawMode === r.DRAW_MODES.TRIANGLES) { var u = this.indices; for (i = this.indices.length, e = 0; i > e; e += 3) { var l = 2 * u[e],
                                h = 2 * u[e + 1],
                                c = 2 * u[e + 2]; if (a[0] = s[l], a[1] = s[l + 1], a[2] = s[h], a[3] = s[h + 1], a[4] = s[c], a[5] = s[c + 1], o.contains(n.x, n.y)) return !0 } } else
                        for (i = s.length, e = 0; i > e; e += 6)
                            if (a[0] = s[e], a[1] = s[e + 1], a[2] = s[e + 2], a[3] = s[e + 3], a[4] = s[e + 4], a[5] = s[e + 5], o.contains(n.x, n.y)) return !0; return !1 }, r.DRAW_MODES = { TRIANGLE_MESH: 0, TRIANGLES: 1 }
            }, { "../core": 29 }],
            125: [function(t, e) {
                function r(t, e) { i.call(this, t), this.points = e, this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length), this._ready = !0, this.refresh() } var i = t("./Mesh"),
                    n = t("../core");
                r.prototype = Object.create(i.prototype), r.prototype.constructor = r, e.exports = r, r.prototype.refresh = function() { var t = this.points; if (!(t.length < 1) && this._texture._uvs) { var e = this.uvs,
                            r = this.indices,
                            i = this.colors,
                            o = this._texture._uvs,
                            s = new n.Point(o.x0, o.y0),
                            a = new n.Point(o.x2 - o.x0, o.y2 - o.y0);
                        e[0] = 0 + s.x, e[1] = 0 + s.y, e[2] = 0 + s.x, e[3] = 1 * a.y + s.y, i[0] = 1, i[1] = 1, r[0] = 0, r[1] = 1; for (var u, l, h, c = t.length, p = 1; c > p; p++) u = t[p], l = 4 * p, h = p / (c - 1), e[l] = h * a.x + s.x, e[l + 1] = 0 + s.y, e[l + 2] = h * a.x + s.x, e[l + 3] = 1 * a.y + s.y, l = 2 * p, i[l] = 1, i[l + 1] = 1, l = 2 * p, r[l] = l, r[l + 1] = l + 1;
                        this.dirty = !0 } }, r.prototype._onTextureUpdate = function() { i.prototype._onTextureUpdate.call(this), this._ready && this.refresh() }, r.prototype.updateTransform = function() { var t = this.points; if (!(t.length < 1)) { for (var e, r, i, n, o, s, a = t[0], u = 0, l = 0, h = this.vertices, c = t.length, p = 0; c > p; p++) r = t[p], i = 4 * p, e = p < t.length - 1 ? t[p + 1] : r, l = -(e.x - a.x), u = e.y - a.y, n = 10 * (1 - p / (c - 1)), n > 1 && (n = 1), o = Math.sqrt(u * u + l * l), s = this._texture.height / 2, u /= o, l /= o, u *= s, l *= s, h[i] = r.x + u, h[i + 1] = r.y + l, h[i + 2] = r.x - u, h[i + 3] = r.y - l, a = r;
                        this.containerUpdateTransform() } } }, { "../core": 29, "./Mesh": 124 }],
            126: [function(t, e) { e.exports = { Mesh: t("./Mesh"), Rope: t("./Rope"), MeshRenderer: t("./webgl/MeshRenderer"), MeshShader: t("./webgl/MeshShader") } }, { "./Mesh": 124, "./Rope": 125, "./webgl/MeshRenderer": 127, "./webgl/MeshShader": 128 }],
            127: [function(t, e) {
                function r(t) { i.ObjectRenderer.call(this, t), this.indices = new Uint16Array(15e3); for (var e = 0, r = 0; 15e3 > e; e += 6, r += 4) this.indices[e + 0] = r + 0, this.indices[e + 1] = r + 1, this.indices[e + 2] = r + 2, this.indices[e + 3] = r + 0, this.indices[e + 4] = r + 2, this.indices[e + 5] = r + 3 } var i = t("../../core"),
                    n = t("../Mesh");
                r.prototype = Object.create(i.ObjectRenderer.prototype), r.prototype.constructor = r, e.exports = r, i.WebGLRenderer.registerPlugin("mesh", r), r.prototype.onContextChange = function() {}, r.prototype.render = function(t) { t._vertexBuffer || this._initWebGL(t); var e = this.renderer,
                        r = e.gl,
                        i = t._texture.baseTexture,
                        o = e.shaderManager.plugins.meshShader,
                        s = t.drawMode === n.DRAW_MODES.TRIANGLE_MESH ? r.TRIANGLE_STRIP : r.TRIANGLES;
                    e.blendModeManager.setBlendMode(t.blendMode), r.uniformMatrix3fv(o.uniforms.translationMatrix._location, !1, t.worldTransform.toArray(!0)), r.uniformMatrix3fv(o.uniforms.projectionMatrix._location, !1, e.currentRenderTarget.projectionMatrix.toArray(!0)), r.uniform1f(o.uniforms.alpha._location, t.worldAlpha), t.dirty ? (t.dirty = !1, r.bindBuffer(r.ARRAY_BUFFER, t._vertexBuffer), r.bufferData(r.ARRAY_BUFFER, t.vertices, r.STATIC_DRAW), r.vertexAttribPointer(o.attributes.aVertexPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, t._uvBuffer), r.bufferData(r.ARRAY_BUFFER, t.uvs, r.STATIC_DRAW), r.vertexAttribPointer(o.attributes.aTextureCoord, 2, r.FLOAT, !1, 0, 0), r.activeTexture(r.TEXTURE0), i._glTextures[r.id] ? r.bindTexture(r.TEXTURE_2D, i._glTextures[r.id]) : this.renderer.updateTexture(i), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t._indexBuffer), r.bufferData(r.ELEMENT_ARRAY_BUFFER, t.indices, r.STATIC_DRAW)) : (r.bindBuffer(r.ARRAY_BUFFER, t._vertexBuffer), r.bufferSubData(r.ARRAY_BUFFER, 0, t.vertices), r.vertexAttribPointer(o.attributes.aVertexPosition, 2, r.FLOAT, !1, 0, 0), r.bindBuffer(r.ARRAY_BUFFER, t._uvBuffer), r.vertexAttribPointer(o.attributes.aTextureCoord, 2, r.FLOAT, !1, 0, 0), r.activeTexture(r.TEXTURE0), i._glTextures[r.id] ? r.bindTexture(r.TEXTURE_2D, i._glTextures[r.id]) : this.renderer.updateTexture(i), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, t._indexBuffer), r.bufferSubData(r.ELEMENT_ARRAY_BUFFER, 0, t.indices)), r.drawElements(s, t.indices.length, r.UNSIGNED_SHORT, 0) }, r.prototype._initWebGL = function(t) { var e = this.renderer.gl;
                    t._vertexBuffer = e.createBuffer(), t._indexBuffer = e.createBuffer(), t._uvBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, t.vertices, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, t._uvBuffer), e.bufferData(e.ARRAY_BUFFER, t.uvs, e.STATIC_DRAW), t.colors && (t._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, t._colorBuffer), e.bufferData(e.ARRAY_BUFFER, t.colors, e.STATIC_DRAW)), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, t.indices, e.STATIC_DRAW) }, r.prototype.flush = function() {}, r.prototype.start = function() { var t = this.renderer.shaderManager.plugins.meshShader;
                    this.renderer.shaderManager.setShader(t) }, r.prototype.destroy = function() {} }, { "../../core": 29, "../Mesh": 124 }],
            128: [function(t, e) {
                function r(t) { i.Shader.call(this, t, ["precision lowp float;", "attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "varying vec2 vTextureCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"].join("\n"), ["precision lowp float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void){", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * alpha ;", "}"].join("\n"), { alpha: { type: "1f", value: 0 }, translationMatrix: { type: "mat3", value: new Float32Array(9) }, projectionMatrix: { type: "mat3", value: new Float32Array(9) } }, { aVertexPosition: 0, aTextureCoord: 0 }) } var i = t("../../core");
                r.prototype = Object.create(i.Shader.prototype), r.prototype.constructor = r, e.exports = r, i.ShaderManager.registerPlugin("meshShader", r) }, { "../../core": 29 }],
            129: [function(t) { Object.assign || (Object.assign = t("object-assign")) }, { "object-assign": 12 }],
            130: [function(t) { t("./Object.assign"), t("./requestAnimationFrame") }, { "./Object.assign": 129, "./requestAnimationFrame": 131 }],
            131: [function() {
                (function(t) { if (Date.now && Date.prototype.getTime || (Date.now = function() { return (new Date).getTime() }), !t.performance || !t.performance.now) { var e = Date.now();
                        t.performance || (t.performance = {}), t.performance.now = function() { return Date.now() - e } } for (var r = Date.now(), i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n) t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
                    t.requestAnimationFrame || (t.requestAnimationFrame = function(t) { if ("function" != typeof t) throw new TypeError(t + "is not a function"); var e = Date.now(),
                            i = 16 + r - e; return 0 > i && (i = 0), r = e, setTimeout(function() { r = Date.now(), t(performance.now()) }, i) }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) { clearTimeout(t) }) }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}]
        }, {}, [1])(1)
    });
var Stats = function() { var t = Date.now(),
        e = t,
        r = 0,
        i = 1 / 0,
        n = 0,
        o = 0,
        s = 1 / 0,
        a = 0,
        u = 0,
        l = 0,
        h = document.createElement("div");
    h.id = "stats", h.addEventListener("mousedown", function(t) { t.preventDefault(), y(++l % 2) }, !1), h.style.cssText = "width:80px;opacity:0.9;cursor:pointer"; var c = document.createElement("div");
    c.id = "fps", c.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#002", h.appendChild(c); var p = document.createElement("div");
    p.id = "fpsText", p.style.cssText = "color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", p.innerHTML = "FPS", c.appendChild(p); var d = document.createElement("div"); for (d.id = "fpsGraph", d.style.cssText = "position:relative;width:74px;height:30px;background-color:#0ff", c.appendChild(d); d.children.length < 74;) { var f = document.createElement("span");
        f.style.cssText = "width:1px;height:30px;float:left;background-color:#113", d.appendChild(f) } var v = document.createElement("div");
    v.id = "ms", v.style.cssText = "padding:0 0 3px 3px;text-align:left;background-color:#020;display:none", h.appendChild(v); var g = document.createElement("div");
    g.id = "msText", g.style.cssText = "color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px", g.innerHTML = "MS", v.appendChild(g); var m = document.createElement("div"); for (m.id = "msGraph", m.style.cssText = "position:relative;width:74px;height:30px;background-color:#0f0", v.appendChild(m); m.children.length < 74;) { var f = document.createElement("span");
        f.style.cssText = "width:1px;height:30px;float:left;background-color:#131", m.appendChild(f) } var y = function(t) { switch (l = t) {
                case 0:
                    c.style.display = "block", v.style.display = "none"; break;
                case 1:
                    c.style.display = "none", v.style.display = "block" } },
        x = function(t, e) { var r = t.appendChild(t.firstChild);
            r.style.height = e + "px" }; return { REVISION: 12, domElement: h, setMode: y, begin: function() { t = Date.now() }, end: function() { var l = Date.now(); return r = l - t, i = Math.min(i, r), n = Math.max(n, r), g.textContent = r + " MS (" + i + "-" + n + ")", x(m, Math.min(30, 30 - r / 200 * 30)), u++, l > e + 1e3 && (o = Math.round(1e3 * u / (l - e)), s = Math.min(s, o), a = Math.max(a, o), p.textContent = o + " FPS (" + s + "-" + a + ")", x(d, Math.min(30, 30 - o / 100 * 30)), e = l, u = 0), l }, update: function() { t = this.end() } } };
"object" == typeof module && (module.exports = Stats);