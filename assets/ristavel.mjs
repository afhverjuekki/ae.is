function ue(t) {
  const e = t || "";
  return function() {
    throw new Error(
      "this method " + e + " is abstract! (it has no implementation in class " + this.constructor.name + ")"
    );
  };
}
function _e(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
function Kr(t, e, r) {
  let n;
  Object.defineProperty(t, e, {
    get() {
      return n || (n = r.call(this)), n;
    }
  });
}
function En(t, e) {
  const r = [];
  for (; e-- > 0; )
    r.push(t());
  return r;
}
function Tn(t, e) {
  return new Array(e + 1).join(t);
}
function Er(t, e) {
  return En(() => t, e);
}
function Hr(t) {
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    t.lastIndexOf(n) !== r && e.indexOf(n) < 0 && e.push(n);
  }
  return e;
}
function yn(t) {
  const e = [];
  return t.forEach((r) => {
    e.indexOf(r) < 0 && e.push(r);
  }), e;
}
function Ce(t) {
  const e = t[0];
  return e === e.toUpperCase();
}
function An(t) {
  return !Ce(t);
}
function In(t, e, r) {
  return t.length < e ? Tn(" ", e - t.length) + t : t;
}
function xe() {
  this.strings = [];
}
xe.prototype.append = function(t) {
  this.strings.push(t);
};
xe.prototype.contents = function() {
  return this.strings.join("");
};
const Or = (t) => String.fromCodePoint(parseInt(t, 16));
function _n(t) {
  if (t.charAt(0) === "\\")
    switch (t.charAt(1)) {
      case "b":
        return "\b";
      case "f":
        return "\f";
      case "n":
        return `
`;
      case "r":
        return "\r";
      case "t":
        return "	";
      case "v":
        return "\v";
      case "x":
        return Or(t.slice(2, 4));
      case "u":
        return t.charAt(2) === "{" ? Or(t.slice(3, -1)) : Or(t.slice(2, 6));
      default:
        return t.charAt(1);
    }
  else
    return t;
}
function st(t) {
  if (t == null)
    return String(t);
  const e = Object.prototype.toString.call(t);
  try {
    let r;
    return t.constructor && t.constructor.name ? r = t.constructor.name : e.indexOf("[object ") === 0 ? r = e.slice(8, -1) : r = typeof t, r + ": " + JSON.stringify(String(t));
  } catch {
    return e;
  }
}
function wn(t, e = "unexpected null value") {
  if (t == null)
    throw new Error(e);
  return t;
}
const Os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  StringBuffer: xe,
  abstract: ue,
  assert: _e,
  checkNotNull: wn,
  copyWithoutDuplicates: yn,
  defineLazyProperty: Kr,
  getDuplicates: Hr,
  isLexical: An,
  isSyntactic: Ce,
  padLeft: In,
  repeat: Er,
  repeatFn: En,
  repeatStr: Tn,
  unescapeCodePoint: _n,
  unexpectedObjToString: st
}, Symbol.toStringTag, { value: "Module" })), Cn = (t) => new RegExp(String.raw`\p{${t}}`, "u"), zr = Object.fromEntries(
  [
    "Cc",
    "Cf",
    "Cn",
    "Co",
    "Cs",
    "Ll",
    "Lm",
    "Lo",
    "Lt",
    "Lu",
    "Mc",
    "Me",
    "Mn",
    "Nd",
    "Nl",
    "No",
    "Pc",
    "Pd",
    "Pe",
    "Pf",
    "Pi",
    "Po",
    "Ps",
    "Sc",
    "Sk",
    "Sm",
    "So",
    "Zl",
    "Zp",
    "Zs"
  ].map((t) => [t, Cn(t)])
);
zr.Ltmo = /\p{Lt}|\p{Lm}|\p{Lo}/u;
const Mt = Object.fromEntries(
  ["XID_Start", "XID_Continue", "White_Space"].map((t) => [t, Cn(t)])
);
class O {
  constructor() {
    if (this.constructor === O)
      throw new Error("PExpr cannot be instantiated -- it's abstract");
  }
  // Set the `source` property to the interval containing the source for this expression.
  withSource(e) {
    return e && (this.source = e.trimmed()), this;
  }
}
const re = Object.create(O.prototype), te = Object.create(O.prototype);
class Z extends O {
  constructor(e) {
    super(), this.obj = e;
  }
}
class ne extends O {
  constructor(e, r) {
    super(), this.from = e, this.to = r, this.matchCodePoint = e.length > 1 || r.length > 1;
  }
}
class ae extends O {
  constructor(e) {
    super(), this.index = e;
  }
}
class H extends O {
  constructor(e) {
    super(), this.terms = e;
  }
}
class Tr extends H {
  constructor(e, r, n) {
    const i = e.rules[r].body;
    super([n, i]), this.superGrammar = e, this.name = r, this.body = n;
  }
}
class yr extends H {
  constructor(e, r, n, i) {
    const s = e.rules[r].body;
    super([...n, s, ...i]), this.superGrammar = e, this.ruleName = r, this.expansionPos = n.length;
  }
}
class Q extends O {
  constructor(e) {
    super(), this.factors = e;
  }
}
class oe extends O {
  constructor(e) {
    super(), this.expr = e;
  }
}
class Ne extends oe {
}
class Je extends oe {
}
class Ee extends oe {
}
Ne.prototype.operator = "*";
Je.prototype.operator = "+";
Ee.prototype.operator = "?";
Ne.prototype.minNumMatches = 0;
Je.prototype.minNumMatches = 1;
Ee.prototype.minNumMatches = 0;
Ne.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
Je.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
Ee.prototype.maxNumMatches = 1;
class Y extends O {
  constructor(e) {
    super(), this.expr = e;
  }
}
class fe extends O {
  constructor(e) {
    super(), this.expr = e;
  }
}
class ce extends O {
  constructor(e) {
    super(), this.expr = e;
  }
}
class q extends O {
  constructor(e, r = []) {
    super(), this.ruleName = e, this.args = r;
  }
  isSyntactic() {
    return Ce(this.ruleName);
  }
  // This method just caches the result of `this.toString()` in a non-enumerable property.
  toMemoKey() {
    return this._memoKey || Object.defineProperty(this, "_memoKey", { value: this.toString() }), this._memoKey;
  }
}
class X extends O {
  constructor(e) {
    if (super(), this.categoryOrProp = e, e in zr)
      this.pattern = zr[e];
    else if (e in Mt)
      this.pattern = Mt[e];
    else
      throw new Error(
        `Invalid Unicode category or property name: ${JSON.stringify(e)}`
      );
  }
}
function V(t, e) {
  let r;
  return e ? (r = new Error(e.getLineAndColumnMessage() + t), r.shortMessage = t, r.interval = e) : r = new Error(t), r;
}
function Jr() {
  return V("Interval sources don't match");
}
function Ls(t) {
  const e = new Error();
  return Object.defineProperty(e, "message", {
    enumerable: !0,
    get() {
      return t.message;
    }
  }), Object.defineProperty(e, "shortMessage", {
    enumerable: !0,
    get() {
      return "Expected " + t.getExpectedText();
    }
  }), e.interval = t.getInterval(), e;
}
function Gs(t, e, r) {
  const n = e ? `Grammar ${t} is not declared in namespace '${e}'` : "Undeclared grammar " + t;
  return V(n, r);
}
function Rs(t, e) {
  return V("Grammar " + t.name + " is already declared in this namespace");
}
function Ps(t) {
  return V(`Grammar '${t.name}' does not support incremental parsing`);
}
function jn(t, e, r) {
  return V(
    "Rule " + t + " is not declared in grammar " + e,
    r
  );
}
function Ms(t, e, r) {
  return V(
    "Cannot override rule " + t + " because it is not declared in " + e,
    r
  );
}
function qs(t, e, r) {
  return V(
    "Cannot extend rule " + t + " because it is not declared in " + e,
    r
  );
}
function qt(t, e, r, n) {
  let i = "Duplicate declaration for rule '" + t + "' in grammar '" + e + "'";
  return e !== r && (i += " (originally declared in '" + r + "')"), V(i, n);
}
function Sn(t, e, r, n) {
  return V(
    "Wrong number of parameters for rule " + t + " (expected " + e + ", got " + r + ")",
    n
  );
}
function Ws(t, e, r, n) {
  return V(
    "Wrong number of arguments for rule " + t + " (expected " + e + ", got " + r + ")",
    n
  );
}
function Wt(t, e, r) {
  return V(
    "Duplicate parameter names in rule " + t + ": " + e.join(", "),
    r
  );
}
function Us(t, e) {
  return V(
    "Invalid parameter to rule " + t + ": " + e + " has arity " + e.getArity() + ", but parameter expressions must have arity 1",
    e.source
  );
}
const Vs = "NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";
function Ks(t, e) {
  return V(
    "Cannot apply syntactic rule " + t + " from here (inside a lexical context)",
    e.source
  );
}
function Hs(t) {
  const { ruleName: e } = t;
  return V(
    `applySyntactic is for syntactic rules, but '${e}' is a lexical rule. ` + Vs,
    t.source
  );
}
function zs(t) {
  return V(
    "applySyntactic is not required here (in a syntactic context)",
    t.source
  );
}
function Ut(t, e) {
  return V("Incorrect argument type: expected " + t, e.source);
}
function Js(t) {
  return V("'...' can appear at most once in a rule body", t.source);
}
function Qs(t) {
  const e = t._node;
  _e(e && e.isNonterminal() && e.ctorName === "escapeChar_unicodeCodePoint");
  const r = t.children.slice(1, -1).map((i) => i.source), n = r[0].coverageWith(...r.slice(1));
  return V(
    `U+${n.contents} is not a valid Unicode code point`,
    n
  );
}
function xn(t, e) {
  const r = e.length > 0 ? e[e.length - 1].args : [];
  let i = "Nullable expression " + t.expr.substituteParams(r) + " is not allowed inside '" + t.operator + "' (possible infinite loop)";
  if (e.length > 0) {
    const s = e.map((l) => new q(l.ruleName, l.args)).join(`
`);
    i += `
Application stack (most recent application last):
` + s;
  }
  return V(i, t.expr.source);
}
function Nn(t, e, r, n) {
  return V(
    "Rule " + t + " involves an alternation which has inconsistent arity (expected " + e + ", got " + r + ")",
    n.source
  );
}
function Ys(t) {
  const e = t.map((r) => r.message);
  return V(["Errors:"].concat(e).join(`
- `), t[0].interval);
}
function Xs(t, e, r, n) {
  let i = n.slice(0, -1).map((g) => {
    const d = "  " + g[0].name + " > " + g[1];
    return g.length === 3 ? d + " for '" + g[2] + "'" : d;
  }).join(`
`);
  i += `
  ` + e + " > " + t;
  let s = "";
  t === "_iter" && (s = [
    `
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,
    "  https://ohmjs.org/d/dsa for details."
  ].join(`
`));
  const l = [
    `Missing semantic action for '${t}' in ${r} '${e}'.${s}`,
    "Action stack (most recent call last):",
    i
  ].join(`
`), c = V(l);
  return c.name = "missingSemanticAction", c;
}
function Zs(t) {
  if (t.length === 1)
    throw t[0];
  if (t.length > 1)
    throw Ys(t);
}
function eu(t) {
  let e = 0;
  return t.map((n) => {
    const i = n.toString();
    return e = Math.max(e, i.length), i;
  }).map((n) => In(n, e));
}
function Vt(t, e, r) {
  const n = t.length, i = t.slice(0, r), s = t.slice(r + e.length);
  return (i + e + s).substr(0, n);
}
function ru(...t) {
  const e = this, { offset: r } = e, { repeatStr: n } = Os, i = new xe();
  i.append("Line " + e.lineNum + ", col " + e.colNum + `:
`);
  const s = eu([
    e.prevLine == null ? 0 : e.lineNum - 1,
    e.lineNum,
    e.nextLine == null ? 0 : e.lineNum + 1
  ]), l = (F, h, p) => {
    i.append(p + s[F] + " | " + h + `
`);
  };
  e.prevLine != null && l(0, e.prevLine, "  "), l(1, e.line, "> ");
  const c = e.line.length;
  let g = n(" ", c + 1);
  for (let F = 0; F < t.length; ++F) {
    let h = t[F][0], p = t[F][1];
    _e(h >= 0 && h <= p, "range start must be >= 0 and <= end");
    const v = r - e.colNum + 1;
    h = Math.max(0, h - v), p = Math.min(p - v, c), g = Vt(g, n("~", p - h), h);
  }
  const d = 2 + s[1].length + 3;
  return i.append(n(" ", d)), g = Vt(g, "^", e.colNum - 1), i.append(g.replace(/ +$/, "") + `
`), e.nextLine != null && l(2, e.nextLine, "  "), i.contents();
}
let Qr = [];
function Dn(t) {
  Qr.push(t);
}
function tu(t) {
  Qr.forEach((e) => {
    e(t);
  }), Qr = null;
}
function ut(t, e) {
  let r = 1, n = 1, i = 0, s = 0, l = null, c = null, g = -1;
  for (; i < e; ) {
    const h = t.charAt(i++);
    h === `
` ? (r++, n = 1, g = s, s = i) : h !== "\r" && n++;
  }
  let d = t.indexOf(`
`, s);
  if (d === -1)
    d = t.length;
  else {
    const h = t.indexOf(`
`, d + 1);
    l = h === -1 ? t.slice(d) : t.slice(d, h), l = l.replace(/^\r?\n/, "").replace(/\r$/, "");
  }
  g >= 0 && (c = t.slice(g, s).replace(/\r?\n$/, ""));
  const F = t.slice(s, d).replace(/\r$/, "");
  return {
    offset: e,
    lineNum: r,
    colNum: n,
    line: F,
    prevLine: c,
    nextLine: l,
    toString: ru
  };
}
function Bn(t, e, ...r) {
  return ut(t, e).toString(...r);
}
const Kt = /* @__PURE__ */ (() => {
  let t = 0;
  return (e) => "" + e + t++;
})();
class ee {
  constructor(e, r, n) {
    Object.defineProperty(this, "_sourceString", {
      value: e,
      configurable: !1,
      enumerable: !1,
      writable: !1
    }), this.startIdx = r, this.endIdx = n;
  }
  get sourceString() {
    return this._sourceString;
  }
  get contents() {
    return this._contents === void 0 && (this._contents = this.sourceString.slice(this.startIdx, this.endIdx)), this._contents;
  }
  get length() {
    return this.endIdx - this.startIdx;
  }
  coverageWith(...e) {
    return ee.coverage(...e, this);
  }
  collapsedLeft() {
    return new ee(this.sourceString, this.startIdx, this.startIdx);
  }
  collapsedRight() {
    return new ee(this.sourceString, this.endIdx, this.endIdx);
  }
  getLineAndColumn() {
    return ut(this.sourceString, this.startIdx);
  }
  getLineAndColumnMessage() {
    const e = [this.startIdx, this.endIdx];
    return Bn(this.sourceString, this.startIdx, e);
  }
  // Returns an array of 0, 1, or 2 intervals that represents the result of the
  // interval difference operation.
  minus(e) {
    if (this.sourceString !== e.sourceString)
      throw Jr();
    return this.startIdx === e.startIdx && this.endIdx === e.endIdx ? [] : this.startIdx < e.startIdx && e.endIdx < this.endIdx ? [
      new ee(this.sourceString, this.startIdx, e.startIdx),
      new ee(this.sourceString, e.endIdx, this.endIdx)
    ] : this.startIdx < e.endIdx && e.endIdx < this.endIdx ? [new ee(this.sourceString, e.endIdx, this.endIdx)] : this.startIdx < e.startIdx && e.startIdx < this.endIdx ? [new ee(this.sourceString, this.startIdx, e.startIdx)] : [this];
  }
  // Returns a new Interval that has the same extent as this one, but which is relative
  // to `that`, an Interval that fully covers this one.
  relativeTo(e) {
    if (this.sourceString !== e.sourceString)
      throw Jr();
    return _e(
      this.startIdx >= e.startIdx && this.endIdx <= e.endIdx,
      "other interval does not cover this one"
    ), new ee(
      this.sourceString,
      this.startIdx - e.startIdx,
      this.endIdx - e.startIdx
    );
  }
  // Returns a new Interval which contains the same contents as this one,
  // but with whitespace trimmed from both ends.
  trimmed() {
    const { contents: e } = this, r = this.startIdx + e.match(/^\s*/)[0].length, n = this.endIdx - e.match(/\s*$/)[0].length;
    return new ee(this.sourceString, r, n);
  }
  subInterval(e, r) {
    const n = this.startIdx + e;
    return new ee(this.sourceString, n, n + r);
  }
}
ee.coverage = function(t, ...e) {
  let { startIdx: r, endIdx: n } = t;
  for (const i of e) {
    if (i.sourceString !== t.sourceString)
      throw Jr();
    r = Math.min(r, i.startIdx), n = Math.max(n, i.endIdx);
  }
  return new ee(t.sourceString, r, n);
};
const nu = 65535, au = 1114111;
class Ar {
  constructor(e) {
    this.source = e, this.pos = 0, this.examinedLength = 0;
  }
  atEnd() {
    const e = this.pos >= this.source.length;
    return this.examinedLength = Math.max(this.examinedLength, this.pos + 1), e;
  }
  next() {
    const e = this.source[this.pos++];
    return this.examinedLength = Math.max(this.examinedLength, this.pos), e;
  }
  nextCharCode() {
    const e = this.next();
    return e && e.charCodeAt(0);
  }
  nextCodePoint() {
    const e = this.source.slice(this.pos++).codePointAt(0);
    return e > nu && (this.pos += 1), this.examinedLength = Math.max(this.examinedLength, this.pos), e;
  }
  matchString(e, r) {
    let n;
    if (r) {
      for (n = 0; n < e.length; n++) {
        const i = this.next(), s = e[n];
        if (i == null || i.toUpperCase() !== s.toUpperCase())
          return !1;
      }
      return !0;
    }
    for (n = 0; n < e.length; n++)
      if (this.next() !== e[n])
        return !1;
    return !0;
  }
  sourceSlice(e, r) {
    return this.source.slice(e, r);
  }
  interval(e, r) {
    return new ee(this.source, e, r || this.pos);
  }
}
class $n {
  constructor(e, r, n, i, s, l, c) {
    this.matcher = e, this.input = r, this.startExpr = n, this._cst = i, this._cstOffset = s, this._rightmostFailurePosition = l, this._rightmostFailures = c, this.failed() && (Kr(this, "message", function() {
      const g = "Expected " + this.getExpectedText();
      return Bn(this.input, this.getRightmostFailurePosition()) + g;
    }), Kr(this, "shortMessage", function() {
      const g = "expected " + this.getExpectedText(), d = ut(
        this.input,
        this.getRightmostFailurePosition()
      );
      return "Line " + d.lineNum + ", col " + d.colNum + ": " + g;
    }));
  }
  succeeded() {
    return !!this._cst;
  }
  failed() {
    return !this.succeeded();
  }
  getRightmostFailurePosition() {
    return this._rightmostFailurePosition;
  }
  getRightmostFailures() {
    if (!this._rightmostFailures) {
      this.matcher.setInput(this.input);
      const e = this.matcher._match(this.startExpr, {
        tracing: !1,
        positionToRecordFailures: this.getRightmostFailurePosition()
      });
      this._rightmostFailures = e.getRightmostFailures();
    }
    return this._rightmostFailures;
  }
  toString() {
    return this.succeeded() ? "[match succeeded]" : "[match failed at position " + this.getRightmostFailurePosition() + "]";
  }
  // Return a string summarizing the expected contents of the input stream when
  // the match failure occurred.
  getExpectedText() {
    if (this.succeeded())
      throw new Error("cannot get expected text of a successful MatchResult");
    const e = new xe();
    let r = this.getRightmostFailures();
    r = r.filter((n) => !n.isFluffy());
    for (let n = 0; n < r.length; n++)
      n > 0 && (n === r.length - 1 ? e.append(r.length > 2 ? ", or " : " or ") : e.append(", ")), e.append(r[n].toString());
    return e.contents();
  }
  getInterval() {
    const e = this.getRightmostFailurePosition();
    return new ee(this.input, e, e);
  }
}
class iu {
  constructor() {
    this.applicationMemoKeyStack = [], this.memo = {}, this.maxExaminedLength = 0, this.maxRightmostFailureOffset = -1, this.currentLeftRecursion = void 0;
  }
  isActive(e) {
    return this.applicationMemoKeyStack.indexOf(e.toMemoKey()) >= 0;
  }
  enter(e) {
    this.applicationMemoKeyStack.push(e.toMemoKey());
  }
  exit() {
    this.applicationMemoKeyStack.pop();
  }
  startLeftRecursion(e, r) {
    r.isLeftRecursion = !0, r.headApplication = e, r.nextLeftRecursion = this.currentLeftRecursion, this.currentLeftRecursion = r;
    const { applicationMemoKeyStack: n } = this, i = n.indexOf(e.toMemoKey()) + 1, s = n.slice(
      i
    );
    r.isInvolved = function(l) {
      return s.indexOf(l) >= 0;
    }, r.updateInvolvedApplicationMemoKeys = function() {
      for (let l = i; l < n.length; l++) {
        const c = n[l];
        this.isInvolved(c) || s.push(c);
      }
    };
  }
  endLeftRecursion() {
    this.currentLeftRecursion = this.currentLeftRecursion.nextLeftRecursion;
  }
  // Note: this method doesn't get called for the "head" of a left recursion -- for LR heads,
  // the memoized result (which starts out being a failure) is always used.
  shouldUseMemoizedResult(e) {
    if (!e.isLeftRecursion)
      return !0;
    const { applicationMemoKeyStack: r } = this;
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      if (e.isInvolved(i))
        return !1;
    }
    return !0;
  }
  memoize(e, r) {
    return this.memo[e] = r, this.maxExaminedLength = Math.max(this.maxExaminedLength, r.examinedLength), this.maxRightmostFailureOffset = Math.max(
      this.maxRightmostFailureOffset,
      r.rightmostFailureOffset
    ), r;
  }
  clearObsoleteEntries(e, r) {
    if (e + this.maxExaminedLength <= r)
      return;
    const { memo: n } = this;
    this.maxExaminedLength = 0, this.maxRightmostFailureOffset = -1, Object.keys(n).forEach((i) => {
      const s = n[i];
      e + s.examinedLength > r ? delete n[i] : (this.maxExaminedLength = Math.max(this.maxExaminedLength, s.examinedLength), this.maxRightmostFailureOffset = Math.max(
        this.maxRightmostFailureOffset,
        s.rightmostFailureOffset
      ));
    });
  }
}
const su = "✗", uu = "✓", ou = "⋅", fu = "⇒", lu = "␉", mu = "␊", cu = "␍", Yr = {
  succeeded: 1,
  isRootNode: 2,
  isImplicitSpaces: 4,
  isMemoized: 8,
  isHeadOfLeftRecursion: 16,
  terminatesLR: 32
};
function pu(t) {
  return Er(" ", t).join("");
}
function du(t, e, r) {
  const n = On(t.slice(e, e + r));
  return n.length < r ? n + Er(" ", r - n.length).join("") : n;
}
function On(t) {
  return typeof t == "string" ? t.replace(/ /g, ou).replace(/\t/g, lu).replace(/\n/g, mu).replace(/\r/g, cu) : String(t);
}
class Ie {
  constructor(e, r, n, i, s, l, c) {
    this.input = e, this.pos = this.pos1 = r, this.pos2 = n, this.source = new ee(e, r, n), this.expr = i, this.bindings = l, this.children = c || [], this.terminatingLREntry = null, this._flags = s ? Yr.succeeded : 0;
  }
  get displayString() {
    return this.expr.toDisplayString();
  }
  clone() {
    return this.cloneWithExpr(this.expr);
  }
  cloneWithExpr(e) {
    const r = new Ie(
      this.input,
      this.pos,
      this.pos2,
      e,
      this.succeeded,
      this.bindings,
      this.children
    );
    return r.isHeadOfLeftRecursion = this.isHeadOfLeftRecursion, r.isImplicitSpaces = this.isImplicitSpaces, r.isMemoized = this.isMemoized, r.isRootNode = this.isRootNode, r.terminatesLR = this.terminatesLR, r.terminatingLREntry = this.terminatingLREntry, r;
  }
  // Record the trace information for the terminating condition of the LR loop.
  recordLRTermination(e, r) {
    this.terminatingLREntry = new Ie(
      this.input,
      this.pos,
      this.pos2,
      this.expr,
      !1,
      [r],
      [e]
    ), this.terminatingLREntry.terminatesLR = !0;
  }
  // Recursively traverse this trace node and all its descendents, calling a visitor function
  // for each node that is visited. If `vistorObjOrFn` is an object, then its 'enter' property
  // is a function to call before visiting the children of a node, and its 'exit' property is
  // a function to call afterwards. If `visitorObjOrFn` is a function, it represents the 'enter'
  // function.
  //
  // The functions are called with three arguments: the Trace node, its parent Trace, and a number
  // representing the depth of the node in the tree. (The root node has depth 0.) `optThisArg`, if
  // specified, is the value to use for `this` when executing the visitor functions.
  walk(e, r) {
    let n = e;
    typeof n == "function" && (n = { enter: n });
    function i(s, l, c) {
      let g = !0;
      n.enter && n.enter.call(r, s, l, c) === Ie.prototype.SKIP && (g = !1), g && (s.children.forEach((d) => {
        i(d, s, c + 1);
      }), n.exit && n.exit.call(r, s, l, c));
    }
    this.isRootNode ? this.children.forEach((s) => {
      i(s, null, 0);
    }) : i(this, null, 0);
  }
  // Return a string representation of the trace.
  // Sample:
  //     12⋅+⋅2⋅*⋅3 ✓ exp ⇒  "12"
  //     12⋅+⋅2⋅*⋅3   ✓ addExp (LR) ⇒  "12"
  //     12⋅+⋅2⋅*⋅3       ✗ addExp_plus
  toString() {
    const e = new xe();
    return this.walk((r, n, i) => {
      if (!r)
        return this.SKIP;
      if (r.expr.constructor.name !== "Alt") {
        if (e.append(du(r.input, r.pos, 10) + pu(i * 2 + 1)), e.append((r.succeeded ? uu : su) + " " + r.displayString), r.isHeadOfLeftRecursion && e.append(" (LR)"), r.succeeded) {
          const l = On(r.source.contents);
          e.append(" " + fu + "  "), e.append(typeof l == "string" ? '"' + l + '"' : l);
        }
        e.append(`
`);
      }
    }), e.contents();
  }
}
Ie.prototype.SKIP = {};
Object.keys(Yr).forEach((t) => {
  const e = Yr[t];
  Object.defineProperty(Ie.prototype, t, {
    get() {
      return (this._flags & e) !== 0;
    },
    set(r) {
      r ? this._flags |= e : this._flags &= ~e;
    }
  });
});
O.prototype.allowsSkippingPrecedingSpace = ue("allowsSkippingPrecedingSpace");
re.allowsSkippingPrecedingSpace = te.allowsSkippingPrecedingSpace = q.prototype.allowsSkippingPrecedingSpace = Z.prototype.allowsSkippingPrecedingSpace = ne.prototype.allowsSkippingPrecedingSpace = X.prototype.allowsSkippingPrecedingSpace = function() {
  return !0;
};
H.prototype.allowsSkippingPrecedingSpace = oe.prototype.allowsSkippingPrecedingSpace = ce.prototype.allowsSkippingPrecedingSpace = fe.prototype.allowsSkippingPrecedingSpace = Y.prototype.allowsSkippingPrecedingSpace = ae.prototype.allowsSkippingPrecedingSpace = Q.prototype.allowsSkippingPrecedingSpace = function() {
  return !1;
};
let er;
Dn((t) => {
  er = t;
});
let vr;
O.prototype.assertAllApplicationsAreValid = function(t, e) {
  vr = 0, this._assertAllApplicationsAreValid(t, e);
};
O.prototype._assertAllApplicationsAreValid = ue(
  "_assertAllApplicationsAreValid"
);
re._assertAllApplicationsAreValid = te._assertAllApplicationsAreValid = Z.prototype._assertAllApplicationsAreValid = ne.prototype._assertAllApplicationsAreValid = ae.prototype._assertAllApplicationsAreValid = X.prototype._assertAllApplicationsAreValid = function(t, e) {
};
ce.prototype._assertAllApplicationsAreValid = function(t, e) {
  vr++, this.expr._assertAllApplicationsAreValid(t, e), vr--;
};
H.prototype._assertAllApplicationsAreValid = function(t, e) {
  for (let r = 0; r < this.terms.length; r++)
    this.terms[r]._assertAllApplicationsAreValid(t, e);
};
Q.prototype._assertAllApplicationsAreValid = function(t, e) {
  for (let r = 0; r < this.factors.length; r++)
    this.factors[r]._assertAllApplicationsAreValid(t, e);
};
oe.prototype._assertAllApplicationsAreValid = Y.prototype._assertAllApplicationsAreValid = fe.prototype._assertAllApplicationsAreValid = function(t, e) {
  this.expr._assertAllApplicationsAreValid(t, e);
};
q.prototype._assertAllApplicationsAreValid = function(t, e, r = !1) {
  const n = e.rules[this.ruleName], i = Ce(t) && vr === 0;
  if (!n)
    throw jn(this.ruleName, e.name, this.source);
  if (!r && Ce(this.ruleName) && !i)
    throw Ks(this.ruleName, this);
  const s = this.args.length, l = n.formals.length;
  if (s !== l)
    throw Ws(this.ruleName, l, s, this.source);
  const c = er && n === er.rules.applySyntactic;
  if (er && n === er.rules.caseInsensitive && !(this.args[0] instanceof Z))
    throw Ut('a Terminal (e.g. "abc")', this.args[0]);
  if (c) {
    const d = this.args[0];
    if (!(d instanceof q))
      throw Ut("a syntactic rule application", d);
    if (!Ce(d.ruleName))
      throw Hs(d);
    if (i)
      throw zs(this);
  }
  this.args.forEach((d) => {
    if (d._assertAllApplicationsAreValid(t, e, c), d.getArity() !== 1)
      throw Us(this.ruleName, d);
  });
};
O.prototype.assertChoicesHaveUniformArity = ue(
  "assertChoicesHaveUniformArity"
);
re.assertChoicesHaveUniformArity = te.assertChoicesHaveUniformArity = Z.prototype.assertChoicesHaveUniformArity = ne.prototype.assertChoicesHaveUniformArity = ae.prototype.assertChoicesHaveUniformArity = ce.prototype.assertChoicesHaveUniformArity = X.prototype.assertChoicesHaveUniformArity = function(t) {
};
H.prototype.assertChoicesHaveUniformArity = function(t) {
  if (this.terms.length === 0)
    return;
  const e = this.terms[0].getArity();
  for (let r = 0; r < this.terms.length; r++) {
    const n = this.terms[r];
    n.assertChoicesHaveUniformArity();
    const i = n.getArity();
    if (e !== i)
      throw Nn(t, e, i, n);
  }
};
Tr.prototype.assertChoicesHaveUniformArity = function(t) {
  const e = this.terms[0].getArity(), r = this.terms[1].getArity();
  if (e !== r)
    throw Nn(t, r, e, this.terms[0]);
};
Q.prototype.assertChoicesHaveUniformArity = function(t) {
  for (let e = 0; e < this.factors.length; e++)
    this.factors[e].assertChoicesHaveUniformArity(t);
};
oe.prototype.assertChoicesHaveUniformArity = function(t) {
  this.expr.assertChoicesHaveUniformArity(t);
};
Y.prototype.assertChoicesHaveUniformArity = function(t) {
};
fe.prototype.assertChoicesHaveUniformArity = function(t) {
  this.expr.assertChoicesHaveUniformArity(t);
};
q.prototype.assertChoicesHaveUniformArity = function(t) {
};
O.prototype.assertIteratedExprsAreNotNullable = ue(
  "assertIteratedExprsAreNotNullable"
);
re.assertIteratedExprsAreNotNullable = te.assertIteratedExprsAreNotNullable = Z.prototype.assertIteratedExprsAreNotNullable = ne.prototype.assertIteratedExprsAreNotNullable = ae.prototype.assertIteratedExprsAreNotNullable = X.prototype.assertIteratedExprsAreNotNullable = function(t) {
};
H.prototype.assertIteratedExprsAreNotNullable = function(t) {
  for (let e = 0; e < this.terms.length; e++)
    this.terms[e].assertIteratedExprsAreNotNullable(t);
};
Q.prototype.assertIteratedExprsAreNotNullable = function(t) {
  for (let e = 0; e < this.factors.length; e++)
    this.factors[e].assertIteratedExprsAreNotNullable(t);
};
oe.prototype.assertIteratedExprsAreNotNullable = function(t) {
  if (this.expr.assertIteratedExprsAreNotNullable(t), this.expr.isNullable(t))
    throw xn(this, []);
};
Ee.prototype.assertIteratedExprsAreNotNullable = Y.prototype.assertIteratedExprsAreNotNullable = fe.prototype.assertIteratedExprsAreNotNullable = ce.prototype.assertIteratedExprsAreNotNullable = function(t) {
  this.expr.assertIteratedExprsAreNotNullable(t);
};
q.prototype.assertIteratedExprsAreNotNullable = function(t) {
  this.args.forEach((e) => {
    e.assertIteratedExprsAreNotNullable(t);
  });
};
class ot {
  constructor(e) {
    this.matchLength = e;
  }
  get ctorName() {
    throw new Error("subclass responsibility");
  }
  numChildren() {
    return this.children ? this.children.length : 0;
  }
  childAt(e) {
    if (this.children)
      return this.children[e];
  }
  indexOfChild(e) {
    return this.children.indexOf(e);
  }
  hasChildren() {
    return this.numChildren() > 0;
  }
  hasNoChildren() {
    return !this.hasChildren();
  }
  onlyChild() {
    if (this.numChildren() !== 1)
      throw new Error(
        "cannot get only child of a node of type " + this.ctorName + " (it has " + this.numChildren() + " children)"
      );
    return this.firstChild();
  }
  firstChild() {
    if (this.hasNoChildren())
      throw new Error(
        "cannot get first child of a " + this.ctorName + " node, which has no children"
      );
    return this.childAt(0);
  }
  lastChild() {
    if (this.hasNoChildren())
      throw new Error(
        "cannot get last child of a " + this.ctorName + " node, which has no children"
      );
    return this.childAt(this.numChildren() - 1);
  }
  childBefore(e) {
    const r = this.indexOfChild(e);
    if (r < 0)
      throw new Error("Node.childBefore() called w/ an argument that is not a child");
    if (r === 0)
      throw new Error("cannot get child before first child");
    return this.childAt(r - 1);
  }
  childAfter(e) {
    const r = this.indexOfChild(e);
    if (r < 0)
      throw new Error("Node.childAfter() called w/ an argument that is not a child");
    if (r === this.numChildren() - 1)
      throw new Error("cannot get child after last child");
    return this.childAt(r + 1);
  }
  isTerminal() {
    return !1;
  }
  isNonterminal() {
    return !1;
  }
  isIteration() {
    return !1;
  }
  isOptional() {
    return !1;
  }
}
class De extends ot {
  get ctorName() {
    return "_terminal";
  }
  isTerminal() {
    return !0;
  }
  get primitiveValue() {
    throw new Error("The `primitiveValue` property was removed in Ohm v17.");
  }
}
class gu extends ot {
  constructor(e, r, n, i) {
    super(i), this.ruleName = e, this.children = r, this.childOffsets = n;
  }
  get ctorName() {
    return this.ruleName;
  }
  isNonterminal() {
    return !0;
  }
  isLexical() {
    return An(this.ctorName);
  }
  isSyntactic() {
    return Ce(this.ctorName);
  }
}
class Ln extends ot {
  constructor(e, r, n, i) {
    super(n), this.children = e, this.childOffsets = r, this.optional = i;
  }
  get ctorName() {
    return "_iter";
  }
  isIteration() {
    return !0;
  }
  isOptional() {
    return this.optional;
  }
}
O.prototype.eval = ue("eval");
re.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = e.nextCodePoint();
  return n !== void 0 ? (t.pushBinding(new De(String.fromCodePoint(n).length), r), !0) : (t.processFailure(r, this), !1);
};
te.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return e.atEnd() ? (t.pushBinding(new De(0), r), !0) : (t.processFailure(r, this), !1);
};
Z.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return e.matchString(this.obj) ? (t.pushBinding(new De(this.obj.length), r), !0) : (t.processFailure(r, this), !1);
};
ne.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = this.matchCodePoint ? e.nextCodePoint() : e.nextCharCode();
  return n !== void 0 && this.from.codePointAt(0) <= n && n <= this.to.codePointAt(0) ? (t.pushBinding(new De(String.fromCodePoint(n).length), r), !0) : (t.processFailure(r, this), !1);
};
ae.prototype.eval = function(t) {
  return t.eval(t.currentApplication().args[this.index]);
};
ce.prototype.eval = function(t) {
  t.enterLexifiedContext();
  const e = t.eval(this.expr);
  return t.exitLexifiedContext(), e;
};
H.prototype.eval = function(t) {
  for (let e = 0; e < this.terms.length; e++)
    if (t.eval(this.terms[e]))
      return !0;
  return !1;
};
Q.prototype.eval = function(t) {
  for (let e = 0; e < this.factors.length; e++) {
    const r = this.factors[e];
    if (!t.eval(r))
      return !1;
  }
  return !0;
};
oe.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = this.getArity(), i = [], s = [];
  for (; i.length < n; )
    i.push([]), s.push([]);
  let l = 0, c = r, g;
  for (; l < this.maxNumMatches && t.eval(this.expr); ) {
    if (e.pos === c)
      throw xn(this, t._applicationStack);
    c = e.pos, l++;
    const p = t._bindings.splice(t._bindings.length - n, n), v = t._bindingOffsets.splice(
      t._bindingOffsets.length - n,
      n
    );
    for (g = 0; g < p.length; g++)
      i[g].push(p[g]), s[g].push(v[g]);
  }
  if (l < this.minNumMatches)
    return !1;
  let d = t.posToOffset(r), F = 0;
  if (l > 0) {
    const p = i[n - 1], v = s[n - 1], I = v[v.length - 1] + p[p.length - 1].matchLength;
    d = s[0][0], F = I - d;
  }
  const h = this instanceof Ee;
  for (g = 0; g < i.length; g++)
    t._bindings.push(
      new Ln(i[g], s[g], F, h)
    ), t._bindingOffsets.push(d);
  return !0;
};
Y.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  t.pushFailuresInfo();
  const n = t.eval(this.expr);
  return t.popFailuresInfo(), n ? (t.processFailure(r, this), !1) : (e.pos = r, !0);
};
fe.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return t.eval(this.expr) ? (e.pos = r, !0) : !1;
};
q.prototype.eval = function(t) {
  const e = t.currentApplication(), r = e ? e.args : [], n = this.substituteParams(r), i = t.getCurrentPosInfo();
  if (i.isActive(n))
    return n.handleCycle(t);
  const s = n.toMemoKey(), l = i.memo[s];
  if (l && i.shouldUseMemoizedResult(l)) {
    if (t.hasNecessaryInfo(l))
      return t.useMemoizedResult(t.inputStream.pos, l);
    delete i.memo[s];
  }
  return n.reallyEval(t);
};
q.prototype.handleCycle = function(t) {
  const e = t.getCurrentPosInfo(), { currentLeftRecursion: r } = e, n = this.toMemoKey();
  let i = e.memo[n];
  return r && r.headApplication.toMemoKey() === n ? i.updateInvolvedApplicationMemoKeys() : i || (i = e.memoize(n, {
    matchLength: 0,
    examinedLength: 0,
    value: !1,
    rightmostFailureOffset: -1
  }), e.startLeftRecursion(this, i)), t.useMemoizedResult(t.inputStream.pos, i);
};
q.prototype.reallyEval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = t.getCurrentPosInfo(), i = t.grammar.rules[this.ruleName], { body: s } = i, { description: l } = i;
  t.enterApplication(n, this), l && t.pushFailuresInfo();
  const c = e.examinedLength;
  e.examinedLength = 0;
  let g = this.evalOnce(s, t);
  const d = n.currentLeftRecursion, F = this.toMemoKey(), h = d && d.headApplication.toMemoKey() === F;
  let p;
  t.doNotMemoize ? t.doNotMemoize = !1 : h ? (g = this.growSeedResult(s, t, r, d, g), n.endLeftRecursion(), p = d, p.examinedLength = e.examinedLength - r, p.rightmostFailureOffset = t._getRightmostFailureOffset(), n.memoize(F, p)) : (!d || !d.isInvolved(F)) && (p = n.memoize(F, {
    matchLength: e.pos - r,
    examinedLength: e.examinedLength - r,
    value: g,
    failuresAtRightmostPosition: t.cloneRecordedFailures(),
    rightmostFailureOffset: t._getRightmostFailureOffset()
  }));
  const v = !!g;
  if (l && (t.popFailuresInfo(), v || t.processFailure(r, this), p && (p.failuresAtRightmostPosition = t.cloneRecordedFailures(), p.rightmostFailureOffset = t._getRightmostFailureOffset())), t.isTracing() && p) {
    const I = t.getTraceEntry(r, this, v, v ? [g] : []);
    h && (_e(I.terminatingLREntry != null || !v), I.isHeadOfLeftRecursion = !0), p.traceEntry = I;
  }
  return e.examinedLength = Math.max(
    e.examinedLength,
    c
  ), t.exitApplication(n, g), v;
};
q.prototype.evalOnce = function(t, e) {
  const { inputStream: r } = e, n = r.pos;
  if (e.eval(t)) {
    const i = t.getArity(), s = e._bindings.splice(e._bindings.length - i, i), l = e._bindingOffsets.splice(e._bindingOffsets.length - i, i), c = r.pos - n;
    return new gu(this.ruleName, s, l, c);
  } else
    return !1;
};
q.prototype.growSeedResult = function(t, e, r, n, i) {
  if (!i)
    return !1;
  const { inputStream: s } = e;
  for (; ; ) {
    if (n.matchLength = s.pos - r, n.value = i, n.failuresAtRightmostPosition = e.cloneRecordedFailures(), e.isTracing()) {
      const l = e.trace[e.trace.length - 1];
      n.traceEntry = new Ie(
        e.input,
        r,
        s.pos,
        this,
        !0,
        [i],
        [l.clone()]
      );
    }
    if (s.pos = r, i = this.evalOnce(t, e), s.pos - r <= n.matchLength)
      break;
    e.isTracing() && e.trace.splice(-2, 1);
  }
  return e.isTracing() && n.traceEntry.recordLRTermination(e.trace.pop(), i), s.pos = r + n.matchLength, n.value;
};
X.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = e.nextCodePoint();
  if (n !== void 0 && n <= au) {
    const i = String.fromCodePoint(n);
    if (this.pattern.test(i))
      return t.pushBinding(new De(i.length), r), !0;
  }
  return t.processFailure(r, this), !1;
};
O.prototype.getArity = ue("getArity");
re.getArity = te.getArity = Z.prototype.getArity = ne.prototype.getArity = ae.prototype.getArity = q.prototype.getArity = X.prototype.getArity = function() {
  return 1;
};
H.prototype.getArity = function() {
  return this.terms.length === 0 ? 0 : this.terms[0].getArity();
};
Q.prototype.getArity = function() {
  let t = 0;
  for (let e = 0; e < this.factors.length; e++)
    t += this.factors[e].getArity();
  return t;
};
oe.prototype.getArity = function() {
  return this.expr.getArity();
};
Y.prototype.getArity = function() {
  return 0;
};
fe.prototype.getArity = ce.prototype.getArity = function() {
  return this.expr.getArity();
};
function ve(t, e) {
  const r = {};
  if (t.source && e) {
    const n = t.source.relativeTo(e);
    r.sourceInterval = [n.startIdx, n.endIdx];
  }
  return r;
}
O.prototype.outputRecipe = ue("outputRecipe");
re.outputRecipe = function(t, e) {
  return ["any", ve(this, e)];
};
te.outputRecipe = function(t, e) {
  return ["end", ve(this, e)];
};
Z.prototype.outputRecipe = function(t, e) {
  return ["terminal", ve(this, e), this.obj];
};
ne.prototype.outputRecipe = function(t, e) {
  return ["range", ve(this, e), this.from, this.to];
};
ae.prototype.outputRecipe = function(t, e) {
  return ["param", ve(this, e), this.index];
};
H.prototype.outputRecipe = function(t, e) {
  return ["alt", ve(this, e)].concat(
    this.terms.map((r) => r.outputRecipe(t, e))
  );
};
Tr.prototype.outputRecipe = function(t, e) {
  return this.terms[0].outputRecipe(t, e);
};
yr.prototype.outputRecipe = function(t, e) {
  const r = this.terms.slice(0, this.expansionPos), n = this.terms.slice(this.expansionPos + 1);
  return [
    "splice",
    ve(this, e),
    r.map((i) => i.outputRecipe(t, e)),
    n.map((i) => i.outputRecipe(t, e))
  ];
};
Q.prototype.outputRecipe = function(t, e) {
  return ["seq", ve(this, e)].concat(
    this.factors.map((r) => r.outputRecipe(t, e))
  );
};
Ne.prototype.outputRecipe = Je.prototype.outputRecipe = Ee.prototype.outputRecipe = Y.prototype.outputRecipe = fe.prototype.outputRecipe = ce.prototype.outputRecipe = function(t, e) {
  return [
    this.constructor.name.toLowerCase(),
    ve(this, e),
    this.expr.outputRecipe(t, e)
  ];
};
q.prototype.outputRecipe = function(t, e) {
  return [
    "app",
    ve(this, e),
    this.ruleName,
    this.args.map((r) => r.outputRecipe(t, e))
  ];
};
X.prototype.outputRecipe = function(t, e) {
  return ["unicodeChar", ve(this, e), this.categoryOrProp];
};
O.prototype.introduceParams = ue("introduceParams");
re.introduceParams = te.introduceParams = Z.prototype.introduceParams = ne.prototype.introduceParams = ae.prototype.introduceParams = X.prototype.introduceParams = function(t) {
  return this;
};
H.prototype.introduceParams = function(t) {
  return this.terms.forEach((e, r, n) => {
    n[r] = e.introduceParams(t);
  }), this;
};
Q.prototype.introduceParams = function(t) {
  return this.factors.forEach((e, r, n) => {
    n[r] = e.introduceParams(t);
  }), this;
};
oe.prototype.introduceParams = Y.prototype.introduceParams = fe.prototype.introduceParams = ce.prototype.introduceParams = function(t) {
  return this.expr = this.expr.introduceParams(t), this;
};
q.prototype.introduceParams = function(t) {
  const e = t.indexOf(this.ruleName);
  if (e >= 0) {
    if (this.args.length > 0)
      throw new Error("Parameterized rules cannot be passed as arguments to another rule.");
    return new ae(e).withSource(this.source);
  } else
    return this.args.forEach((r, n, i) => {
      i[n] = r.introduceParams(t);
    }), this;
};
O.prototype.isNullable = function(t) {
  return this._isNullable(t, /* @__PURE__ */ Object.create(null));
};
O.prototype._isNullable = ue("_isNullable");
re._isNullable = ne.prototype._isNullable = ae.prototype._isNullable = Je.prototype._isNullable = X.prototype._isNullable = function(t, e) {
  return !1;
};
te._isNullable = function(t, e) {
  return !0;
};
Z.prototype._isNullable = function(t, e) {
  return typeof this.obj == "string" ? this.obj === "" : !1;
};
H.prototype._isNullable = function(t, e) {
  return this.terms.length === 0 || this.terms.some((r) => r._isNullable(t, e));
};
Q.prototype._isNullable = function(t, e) {
  return this.factors.every((r) => r._isNullable(t, e));
};
Ne.prototype._isNullable = Ee.prototype._isNullable = Y.prototype._isNullable = fe.prototype._isNullable = function(t, e) {
  return !0;
};
ce.prototype._isNullable = function(t, e) {
  return this.expr._isNullable(t, e);
};
q.prototype._isNullable = function(t, e) {
  const r = this.toMemoKey();
  if (!Object.prototype.hasOwnProperty.call(e, r)) {
    const { body: n } = t.rules[this.ruleName], i = n.substituteParams(this.args);
    e[r] = !1, e[r] = i._isNullable(t, e);
  }
  return e[r];
};
O.prototype.substituteParams = ue("substituteParams");
re.substituteParams = te.substituteParams = Z.prototype.substituteParams = ne.prototype.substituteParams = X.prototype.substituteParams = function(t) {
  return this;
};
ae.prototype.substituteParams = function(t) {
  return wn(t[this.index]);
};
H.prototype.substituteParams = function(t) {
  return new H(this.terms.map((e) => e.substituteParams(t)));
};
Q.prototype.substituteParams = function(t) {
  return new Q(this.factors.map((e) => e.substituteParams(t)));
};
oe.prototype.substituteParams = Y.prototype.substituteParams = fe.prototype.substituteParams = ce.prototype.substituteParams = function(t) {
  return new this.constructor(this.expr.substituteParams(t));
};
q.prototype.substituteParams = function(t) {
  if (this.args.length === 0)
    return this;
  {
    const e = this.args.map((r) => r.substituteParams(t));
    return new q(this.ruleName, e);
  }
};
function Ht(t) {
  return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t);
}
function ft(t) {
  const e = /* @__PURE__ */ Object.create(null);
  t.forEach((r) => {
    e[r] = (e[r] || 0) + 1;
  }), Object.keys(e).forEach((r) => {
    if (e[r] <= 1)
      return;
    let n = 1;
    t.forEach((i, s) => {
      i === r && (t[s] = i + "_" + n++);
    });
  });
}
O.prototype.toArgumentNameList = ue("toArgumentNameList");
re.toArgumentNameList = function(t, e) {
  return ["any"];
};
te.toArgumentNameList = function(t, e) {
  return ["end"];
};
Z.prototype.toArgumentNameList = function(t, e) {
  return typeof this.obj == "string" && /^[_a-zA-Z0-9]+$/.test(this.obj) ? ["_" + this.obj] : ["$" + t];
};
ne.prototype.toArgumentNameList = function(t, e) {
  let r = this.from + "_to_" + this.to;
  return Ht(r) || (r = "_" + r), Ht(r) || (r = "$" + t), [r];
};
H.prototype.toArgumentNameList = function(t, e) {
  const r = this.terms.map(
    (s) => s.toArgumentNameList(t, !0)
  ), n = [], i = r[0].length;
  for (let s = 0; s < i; s++) {
    const l = [];
    for (let g = 0; g < this.terms.length; g++)
      l.push(r[g][s]);
    const c = yn(l);
    n.push(c.join("_or_"));
  }
  return e || ft(n), n;
};
Q.prototype.toArgumentNameList = function(t, e) {
  let r = [];
  return this.factors.forEach((n) => {
    const i = n.toArgumentNameList(t, !0);
    r = r.concat(i), t += i.length;
  }), e || ft(r), r;
};
oe.prototype.toArgumentNameList = function(t, e) {
  const r = this.expr.toArgumentNameList(t, e).map(
    (n) => n[n.length - 1] === "s" ? n + "es" : n + "s"
  );
  return e || ft(r), r;
};
Ee.prototype.toArgumentNameList = function(t, e) {
  return this.expr.toArgumentNameList(t, e).map((r) => "opt" + r[0].toUpperCase() + r.slice(1));
};
Y.prototype.toArgumentNameList = function(t, e) {
  return [];
};
fe.prototype.toArgumentNameList = ce.prototype.toArgumentNameList = function(t, e) {
  return this.expr.toArgumentNameList(t, e);
};
q.prototype.toArgumentNameList = function(t, e) {
  return [this.ruleName];
};
X.prototype.toArgumentNameList = function(t, e) {
  return ["$" + t];
};
ae.prototype.toArgumentNameList = function(t, e) {
  return ["param" + this.index];
};
O.prototype.toDisplayString = ue("toDisplayString");
H.prototype.toDisplayString = Q.prototype.toDisplayString = function() {
  return this.source ? this.source.trimmed().contents : "[" + this.constructor.name + "]";
};
re.toDisplayString = te.toDisplayString = oe.prototype.toDisplayString = Y.prototype.toDisplayString = fe.prototype.toDisplayString = ce.prototype.toDisplayString = Z.prototype.toDisplayString = ne.prototype.toDisplayString = ae.prototype.toDisplayString = function() {
  return this.toString();
};
q.prototype.toDisplayString = function() {
  if (this.args.length > 0) {
    const t = this.args.map((e) => e.toDisplayString());
    return this.ruleName + "<" + t.join(",") + ">";
  } else
    return this.ruleName;
};
X.prototype.toDisplayString = function() {
  return "Unicode [" + this.categoryOrProp + "] character";
};
function hu(t) {
  return t === "description" || t === "string" || t === "code";
}
class pe {
  constructor(e, r, n) {
    if (!hu(n))
      throw new Error("invalid Failure type: " + n);
    this.pexpr = e, this.text = r, this.type = n, this.fluffy = !1;
  }
  getPExpr() {
    return this.pexpr;
  }
  getText() {
    return this.text;
  }
  getType() {
    return this.type;
  }
  isDescription() {
    return this.type === "description";
  }
  isStringTerminal() {
    return this.type === "string";
  }
  isCode() {
    return this.type === "code";
  }
  isFluffy() {
    return this.fluffy;
  }
  makeFluffy() {
    this.fluffy = !0;
  }
  clearFluffy() {
    this.fluffy = !1;
  }
  subsumes(e) {
    return this.getText() === e.getText() && this.type === e.type && (!this.isFluffy() || this.isFluffy() && e.isFluffy());
  }
  toString() {
    return this.type === "string" ? JSON.stringify(this.getText()) : this.getText();
  }
  clone() {
    const e = new pe(this.pexpr, this.text, this.type);
    return this.isFluffy() && e.makeFluffy(), e;
  }
  toKey() {
    return this.toString() + "#" + this.type;
  }
}
O.prototype.toFailure = ue("toFailure");
re.toFailure = function(t) {
  return new pe(this, "any object", "description");
};
te.toFailure = function(t) {
  return new pe(this, "end of input", "description");
};
Z.prototype.toFailure = function(t) {
  return new pe(this, this.obj, "string");
};
ne.prototype.toFailure = function(t) {
  return new pe(this, JSON.stringify(this.from) + ".." + JSON.stringify(this.to), "code");
};
Y.prototype.toFailure = function(t) {
  const e = this.expr === re ? "nothing" : "not " + this.expr.toFailure(t);
  return new pe(this, e, "description");
};
fe.prototype.toFailure = function(t) {
  return this.expr.toFailure(t);
};
q.prototype.toFailure = function(t) {
  let { description: e } = t.rules[this.ruleName];
  return e || (e = (/^[aeiouAEIOU]/.test(this.ruleName) ? "an" : "a") + " " + this.ruleName), new pe(this, e, "description");
};
X.prototype.toFailure = function(t) {
  return new pe(this, "a Unicode [" + this.categoryOrProp + "] character", "description");
};
H.prototype.toFailure = function(t) {
  const r = "(" + this.terms.map((n) => n.toFailure(t)).join(" or ") + ")";
  return new pe(this, r, "description");
};
Q.prototype.toFailure = function(t) {
  const r = "(" + this.factors.map((n) => n.toFailure(t)).join(" ") + ")";
  return new pe(this, r, "description");
};
oe.prototype.toFailure = function(t) {
  const e = "(" + this.expr.toFailure(t) + this.operator + ")";
  return new pe(this, e, "description");
};
O.prototype.toString = ue("toString");
re.toString = function() {
  return "any";
};
te.toString = function() {
  return "end";
};
Z.prototype.toString = function() {
  return JSON.stringify(this.obj);
};
ne.prototype.toString = function() {
  return JSON.stringify(this.from) + ".." + JSON.stringify(this.to);
};
ae.prototype.toString = function() {
  return "$" + this.index;
};
ce.prototype.toString = function() {
  return "#(" + this.expr.toString() + ")";
};
H.prototype.toString = function() {
  return this.terms.length === 1 ? this.terms[0].toString() : "(" + this.terms.map((t) => t.toString()).join(" | ") + ")";
};
Q.prototype.toString = function() {
  return this.factors.length === 1 ? this.factors[0].toString() : "(" + this.factors.map((t) => t.toString()).join(" ") + ")";
};
oe.prototype.toString = function() {
  return this.expr + this.operator;
};
Y.prototype.toString = function() {
  return "~" + this.expr;
};
fe.prototype.toString = function() {
  return "&" + this.expr;
};
q.prototype.toString = function() {
  if (this.args.length > 0) {
    const t = this.args.map((e) => e.toString());
    return this.ruleName + "<" + t.join(",") + ">";
  } else
    return this.ruleName;
};
X.prototype.toString = function() {
  return "\\p{" + this.categoryOrProp + "}";
};
class lt extends O {
  constructor(e) {
    super(), this.obj = e;
  }
  _getString(e) {
    const r = e.currentApplication().args[this.obj.index];
    return _e(r instanceof Z, "expected a Terminal expression"), r.obj;
  }
  // Implementation of the PExpr API
  allowsSkippingPrecedingSpace() {
    return !0;
  }
  eval(e) {
    const { inputStream: r } = e, n = r.pos, i = this._getString(e);
    return r.matchString(i, !0) ? (e.pushBinding(new De(i.length), n), !0) : (e.processFailure(n, this), !1);
  }
  getArity() {
    return 1;
  }
  substituteParams(e) {
    return new lt(this.obj.substituteParams(e));
  }
  toDisplayString() {
    return this.obj.toDisplayString() + " (case-insensitive)";
  }
  toFailure(e) {
    return new pe(
      this,
      this.obj.toFailure(e) + " (case-insensitive)",
      "description"
    );
  }
  _isNullable(e, r) {
    return this.obj._isNullable(e, r);
  }
}
let Gn;
Dn((t) => {
  Gn = t.rules.applySyntactic.body;
});
const Lr = new q("spaces");
class vu {
  constructor(e, r, n) {
    this.matcher = e, this.startExpr = r, this.grammar = e.grammar, this.input = e.getInput(), this.inputStream = new Ar(this.input), this.memoTable = e._memoTable, this.userData = void 0, this.doNotMemoize = !1, this._bindings = [], this._bindingOffsets = [], this._applicationStack = [], this._posStack = [0], this.inLexifiedContextStack = [!1], this.rightmostFailurePosition = -1, this._rightmostFailurePositionStack = [], this._recordedFailuresStack = [], n !== void 0 && (this.positionToRecordFailures = n, this.recordedFailures = /* @__PURE__ */ Object.create(null));
  }
  posToOffset(e) {
    return e - this._posStack[this._posStack.length - 1];
  }
  enterApplication(e, r) {
    this._posStack.push(this.inputStream.pos), this._applicationStack.push(r), this.inLexifiedContextStack.push(!1), e.enter(r), this._rightmostFailurePositionStack.push(this.rightmostFailurePosition), this.rightmostFailurePosition = -1;
  }
  exitApplication(e, r) {
    const n = this._posStack.pop();
    this._applicationStack.pop(), this.inLexifiedContextStack.pop(), e.exit(), this.rightmostFailurePosition = Math.max(
      this.rightmostFailurePosition,
      this._rightmostFailurePositionStack.pop()
    ), r && this.pushBinding(r, n);
  }
  enterLexifiedContext() {
    this.inLexifiedContextStack.push(!0);
  }
  exitLexifiedContext() {
    this.inLexifiedContextStack.pop();
  }
  currentApplication() {
    return this._applicationStack[this._applicationStack.length - 1];
  }
  inSyntacticContext() {
    const e = this.currentApplication();
    return e ? e.isSyntactic() && !this.inLexifiedContext() : this.startExpr.factors[0].isSyntactic();
  }
  inLexifiedContext() {
    return this.inLexifiedContextStack[this.inLexifiedContextStack.length - 1];
  }
  skipSpaces() {
    return this.pushFailuresInfo(), this.eval(Lr), this.popBinding(), this.popFailuresInfo(), this.inputStream.pos;
  }
  skipSpacesIfInSyntacticContext() {
    return this.inSyntacticContext() ? this.skipSpaces() : this.inputStream.pos;
  }
  maybeSkipSpacesBefore(e) {
    return e.allowsSkippingPrecedingSpace() && e !== Lr ? this.skipSpacesIfInSyntacticContext() : this.inputStream.pos;
  }
  pushBinding(e, r) {
    this._bindings.push(e), this._bindingOffsets.push(this.posToOffset(r));
  }
  popBinding() {
    this._bindings.pop(), this._bindingOffsets.pop();
  }
  numBindings() {
    return this._bindings.length;
  }
  truncateBindings(e) {
    for (; this._bindings.length > e; )
      this.popBinding();
  }
  getCurrentPosInfo() {
    return this.getPosInfo(this.inputStream.pos);
  }
  getPosInfo(e) {
    let r = this.memoTable[e];
    return r || (r = this.memoTable[e] = new iu()), r;
  }
  processFailure(e, r) {
    if (this.rightmostFailurePosition = Math.max(this.rightmostFailurePosition, e), this.recordedFailures && e === this.positionToRecordFailures) {
      const n = this.currentApplication();
      n && (r = r.substituteParams(n.args)), this.recordFailure(r.toFailure(this.grammar), !1);
    }
  }
  recordFailure(e, r) {
    const n = e.toKey();
    this.recordedFailures[n] ? this.recordedFailures[n].isFluffy() && !e.isFluffy() && this.recordedFailures[n].clearFluffy() : this.recordedFailures[n] = r ? e.clone() : e;
  }
  recordFailures(e, r) {
    Object.keys(e).forEach((n) => {
      this.recordFailure(e[n], r);
    });
  }
  cloneRecordedFailures() {
    if (!this.recordedFailures)
      return;
    const e = /* @__PURE__ */ Object.create(null);
    return Object.keys(this.recordedFailures).forEach((r) => {
      e[r] = this.recordedFailures[r].clone();
    }), e;
  }
  getRightmostFailurePosition() {
    return this.rightmostFailurePosition;
  }
  _getRightmostFailureOffset() {
    return this.rightmostFailurePosition >= 0 ? this.posToOffset(this.rightmostFailurePosition) : -1;
  }
  // Returns the memoized trace entry for `expr` at `pos`, if one exists, `null` otherwise.
  getMemoizedTraceEntry(e, r) {
    const n = this.memoTable[e];
    if (n && r instanceof q) {
      const i = n.memo[r.toMemoKey()];
      if (i && i.traceEntry) {
        const s = i.traceEntry.cloneWithExpr(r);
        return s.isMemoized = !0, s;
      }
    }
    return null;
  }
  // Returns a new trace entry, with the currently active trace array as its children.
  getTraceEntry(e, r, n, i) {
    if (r instanceof q) {
      const s = this.currentApplication(), l = s ? s.args : [];
      r = r.substituteParams(l);
    }
    return this.getMemoizedTraceEntry(e, r) || new Ie(this.input, e, this.inputStream.pos, r, n, i, this.trace);
  }
  isTracing() {
    return !!this.trace;
  }
  hasNecessaryInfo(e) {
    return this.trace && !e.traceEntry ? !1 : this.recordedFailures && this.inputStream.pos + e.rightmostFailureOffset === this.positionToRecordFailures ? !!e.failuresAtRightmostPosition : !0;
  }
  useMemoizedResult(e, r) {
    this.trace && this.trace.push(r.traceEntry);
    const n = this.inputStream.pos + r.rightmostFailureOffset;
    return this.rightmostFailurePosition = Math.max(
      this.rightmostFailurePosition,
      n
    ), this.recordedFailures && this.positionToRecordFailures === n && r.failuresAtRightmostPosition && this.recordFailures(r.failuresAtRightmostPosition, !0), this.inputStream.examinedLength = Math.max(
      this.inputStream.examinedLength,
      r.examinedLength + e
    ), r.value ? (this.inputStream.pos += r.matchLength, this.pushBinding(r.value, e), !0) : !1;
  }
  // Evaluate `expr` and return `true` if it succeeded, `false` otherwise. On success, `bindings`
  // will have `expr.getArity()` more elements than before, and the input stream's position may
  // have increased. On failure, `bindings` and position will be unchanged.
  eval(e) {
    const { inputStream: r } = this, n = this._bindings.length, i = this.userData;
    let s;
    this.recordedFailures && (s = this.recordedFailures, this.recordedFailures = /* @__PURE__ */ Object.create(null));
    const l = r.pos, c = this.maybeSkipSpacesBefore(e);
    let g;
    this.trace && (g = this.trace, this.trace = []);
    const d = e.eval(this);
    if (this.trace) {
      const F = this._bindings.slice(n), h = this.getTraceEntry(c, e, d, F);
      h.isImplicitSpaces = e === Lr, h.isRootNode = e === this.startExpr, g.push(h), this.trace = g;
    }
    return d ? this.recordedFailures && r.pos === this.positionToRecordFailures && Object.keys(this.recordedFailures).forEach((F) => {
      this.recordedFailures[F].makeFluffy();
    }) : (r.pos = l, this.truncateBindings(n), this.userData = i), this.recordedFailures && this.recordFailures(s, !1), e === Gn && this.skipSpaces(), d;
  }
  getMatchResult() {
    this.grammar._setUpMatchState(this), this.eval(this.startExpr);
    let e;
    this.recordedFailures && (e = Object.keys(this.recordedFailures).map(
      (n) => this.recordedFailures[n]
    ));
    const r = this._bindings[0];
    return r && (r.grammar = this.grammar), new $n(
      this.matcher,
      this.input,
      this.startExpr,
      r,
      this._bindingOffsets[0],
      this.rightmostFailurePosition,
      e
    );
  }
  getTrace() {
    this.trace = [];
    const e = this.getMatchResult(), r = this.trace[this.trace.length - 1];
    return r.result = e, r;
  }
  pushFailuresInfo() {
    this._rightmostFailurePositionStack.push(this.rightmostFailurePosition), this._recordedFailuresStack.push(this.recordedFailures);
  }
  popFailuresInfo() {
    this.rightmostFailurePosition = this._rightmostFailurePositionStack.pop(), this.recordedFailures = this._recordedFailuresStack.pop();
  }
}
class ku {
  constructor(e) {
    this.grammar = e, this._memoTable = [], this._input = "", this._isMemoTableStale = !1;
  }
  _resetMemoTable() {
    this._memoTable = [], this._isMemoTableStale = !1;
  }
  getInput() {
    return this._input;
  }
  setInput(e) {
    return this._input !== e && this.replaceInputRange(0, this._input.length, e), this;
  }
  replaceInputRange(e, r, n) {
    const i = this._input, s = this._memoTable;
    if (e < 0 || e > i.length || r < 0 || r > i.length || e > r)
      throw new Error("Invalid indices: " + e + " and " + r);
    this._input = i.slice(0, e) + n + i.slice(r), this._input !== i && s.length > 0 && (this._isMemoTableStale = !0);
    const l = s.slice(r);
    s.length = e;
    for (let c = 0; c < n.length; c++)
      s.push(void 0);
    for (const c of l)
      s.push(c);
    for (let c = 0; c < e; c++) {
      const g = s[c];
      g && g.clearObsoleteEntries(c, e);
    }
    return this;
  }
  match(e, r = { incremental: !0 }) {
    return this._match(this._getStartExpr(e), {
      incremental: r.incremental,
      tracing: !1
    });
  }
  trace(e, r = { incremental: !0 }) {
    return this._match(this._getStartExpr(e), {
      incremental: r.incremental,
      tracing: !0
    });
  }
  _match(e, r = {}) {
    const n = {
      tracing: !1,
      incremental: !0,
      positionToRecordFailures: void 0,
      ...r
    };
    if (!n.incremental)
      this._resetMemoTable();
    else if (this._isMemoTableStale && !this.grammar.supportsIncrementalParsing)
      throw Ps(this.grammar);
    const i = new vu(this, e, n.positionToRecordFailures);
    return n.tracing ? i.getTrace() : i.getMatchResult();
  }
  /*
    Returns the starting expression for this Matcher's associated grammar. If
    `optStartApplicationStr` is specified, it is a string expressing a rule application in the
    grammar. If not specified, the grammar's default start rule will be used.
  */
  _getStartExpr(e) {
    const r = e || this.grammar.defaultStartRule;
    if (!r)
      throw new Error("Missing start rule argument -- the grammar has no default start rule.");
    const n = this.grammar.parseApplication(r);
    return new Q([n, te]);
  }
}
const rr = [], Xr = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
class zt {
  constructor(e, r, n) {
    this._node = e, this.source = r, this._baseInterval = n, e.isNonterminal() && _e(r === n), this._childWrappers = [];
  }
  _forgetMemoizedResultFor(e) {
    delete this._node[this._semantics.attributeKeys[e]], this.children.forEach((r) => {
      r._forgetMemoizedResultFor(e);
    });
  }
  // Returns the wrapper of the specified child node. Child wrappers are created lazily and
  // cached in the parent wrapper's `_childWrappers` instance variable.
  child(e) {
    if (!(0 <= e && e < this._node.numChildren()))
      return;
    let r = this._childWrappers[e];
    if (!r) {
      const n = this._node.childAt(e), i = this._node.childOffsets[e], s = this._baseInterval.subInterval(i, n.matchLength), l = n.isNonterminal() ? s : this._baseInterval;
      r = this._childWrappers[e] = this._semantics.wrap(n, s, l);
    }
    return r;
  }
  // Returns an array containing the wrappers of all of the children of the node associated
  // with this wrapper.
  _children() {
    for (let e = 0; e < this._node.numChildren(); e++)
      this.child(e);
    return this._childWrappers;
  }
  // Returns `true` if the CST node associated with this wrapper corresponds to an iteration
  // expression, i.e., a Kleene-*, Kleene-+, or an optional. Returns `false` otherwise.
  isIteration() {
    return this._node.isIteration();
  }
  // Returns `true` if the CST node associated with this wrapper is a terminal node, `false`
  // otherwise.
  isTerminal() {
    return this._node.isTerminal();
  }
  // Returns `true` if the CST node associated with this wrapper is a nonterminal node, `false`
  // otherwise.
  isNonterminal() {
    return this._node.isNonterminal();
  }
  // Returns `true` if the CST node associated with this wrapper is a nonterminal node
  // corresponding to a syntactic rule, `false` otherwise.
  isSyntactic() {
    return this.isNonterminal() && this._node.isSyntactic();
  }
  // Returns `true` if the CST node associated with this wrapper is a nonterminal node
  // corresponding to a lexical rule, `false` otherwise.
  isLexical() {
    return this.isNonterminal() && this._node.isLexical();
  }
  // Returns `true` if the CST node associated with this wrapper is an iterator node
  // having either one or no child (? operator), `false` otherwise.
  // Otherwise, throws an exception.
  isOptional() {
    return this._node.isOptional();
  }
  // Create a new _iter wrapper in the same semantics as this wrapper.
  iteration(e) {
    const r = e || [], n = r.map((l) => l._node), i = new Ln(n, [], -1, !1), s = this._semantics.wrap(i, null, null);
    return s._childWrappers = r, s;
  }
  // Returns an array containing the children of this CST node.
  get children() {
    return this._children();
  }
  // Returns the name of grammar rule that created this CST node.
  get ctorName() {
    return this._node.ctorName;
  }
  // Returns the number of children of this CST node.
  get numChildren() {
    return this._node.numChildren();
  }
  // Returns the contents of the input stream consumed by this CST node.
  get sourceString() {
    return this.source.contents;
  }
}
class me {
  constructor(e, r) {
    const n = this;
    if (this.grammar = e, this.checkedActionDicts = !1, this.Wrapper = class extends (r ? r.Wrapper : zt) {
      constructor(i, s, l) {
        super(i, s, l), n.checkActionDictsIfHaventAlready(), this._semantics = n;
      }
      toString() {
        return "[semantics wrapper for " + n.grammar.name + "]";
      }
    }, this.super = r, r) {
      if (!(e.equals(this.super.grammar) || e._inheritsFrom(this.super.grammar)))
        throw new Error(
          "Cannot extend a semantics for grammar '" + this.super.grammar.name + "' for use with grammar '" + e.name + "' (not a sub-grammar)"
        );
      this.operations = Object.create(this.super.operations), this.attributes = Object.create(this.super.attributes), this.attributeKeys = /* @__PURE__ */ Object.create(null);
      for (const i in this.attributes)
        Object.defineProperty(this.attributeKeys, i, {
          value: Kt(i)
        });
    } else
      this.operations = /* @__PURE__ */ Object.create(null), this.attributes = /* @__PURE__ */ Object.create(null), this.attributeKeys = /* @__PURE__ */ Object.create(null);
  }
  toString() {
    return "[semantics for " + this.grammar.name + "]";
  }
  checkActionDictsIfHaventAlready() {
    this.checkedActionDicts || (this.checkActionDicts(), this.checkedActionDicts = !0);
  }
  // Checks that the action dictionaries for all operations and attributes in this semantics,
  // including the ones that were inherited from the super-semantics, agree with the grammar.
  // Throws an exception if one or more of them doesn't.
  checkActionDicts() {
    let e;
    for (e in this.operations)
      this.operations[e].checkActionDict(this.grammar);
    for (e in this.attributes)
      this.attributes[e].checkActionDict(this.grammar);
  }
  toRecipe(e) {
    function r(i) {
      return i.super !== me.BuiltInSemantics._getSemantics();
    }
    let n = `(function(g) {
`;
    if (r(this)) {
      n += "  var semantics = " + this.super.toRecipe(!0) + "(g";
      const i = this.super.grammar;
      let s = this.grammar;
      for (; s !== i; )
        n += ".superGrammar", s = s.superGrammar;
      n += `);
`, n += "  return g.extendSemantics(semantics)";
    } else
      n += "  return g.createSemantics()";
    return ["Operation", "Attribute"].forEach((i) => {
      const s = this[i.toLowerCase() + "s"];
      Object.keys(s).forEach((l) => {
        const { actionDict: c, formals: g, builtInDefault: d } = s[l];
        let F = l;
        g.length > 0 && (F += "(" + g.join(", ") + ")");
        let h;
        r(this) && this.super[i.toLowerCase() + "s"][l] ? h = "extend" + i : h = "add" + i, n += `
    .` + h + "(" + JSON.stringify(F) + ", {";
        const p = [];
        Object.keys(c).forEach((v) => {
          if (c[v] !== d) {
            let I = c[v].toString().trim();
            I = I.replace(/^.*\(/, "function("), p.push(`
      ` + JSON.stringify(v) + ": " + I);
          }
        }), n += p.join(",") + `
    })`;
      });
    }), n += `;
  })`, e || (n = `(function() {
  var grammar = this.fromRecipe(` + this.grammar.toRecipe() + `);
  var semantics = ` + n + `(grammar);
  return semantics;
});
`), n;
  }
  addOperationOrAttribute(e, r, n) {
    const i = e + "s", s = Jt(r, e), { name: l } = s, { formals: c } = s;
    this.assertNewName(l, e);
    const g = bu(e, l, h), d = { _default: g };
    Object.keys(n).forEach((p) => {
      d[p] = n[p];
    });
    const F = e === "operation" ? new nr(l, c, d, g) : new Zr(l, d, g);
    F.checkActionDict(this.grammar), this[i][l] = F;
    function h(...p) {
      const v = this._semantics[i][l];
      if (arguments.length !== v.formals.length)
        throw new Error(
          "Invalid number of arguments passed to " + l + " " + e + " (expected " + v.formals.length + ", got " + arguments.length + ")"
        );
      const I = /* @__PURE__ */ Object.create(null);
      for (const [w, S] of Object.entries(p)) {
        const M = v.formals[w];
        I[M] = S;
      }
      const L = this.args;
      this.args = I;
      const T = v.execute(this._semantics, this);
      return this.args = L, T;
    }
    e === "operation" ? (this.Wrapper.prototype[l] = h, this.Wrapper.prototype[l].toString = function() {
      return "[" + l + " operation]";
    }) : (Object.defineProperty(this.Wrapper.prototype, l, {
      get: h,
      configurable: !0
      // So the property can be deleted.
    }), Object.defineProperty(this.attributeKeys, l, {
      value: Kt(l)
    }));
  }
  extendOperationOrAttribute(e, r, n) {
    const i = e + "s";
    if (Jt(r, "attribute"), !(this.super && r in this.super[i]))
      throw new Error(
        "Cannot extend " + e + " '" + r + "': did not inherit an " + e + " with that name"
      );
    if (Xr(this[i], r))
      throw new Error("Cannot extend " + e + " '" + r + "' again");
    const s = this[i][r].formals, l = this[i][r].actionDict, c = Object.create(l);
    Object.keys(n).forEach((g) => {
      c[g] = n[g];
    }), this[i][r] = e === "operation" ? new nr(r, s, c) : new Zr(r, c), this[i][r].checkActionDict(this.grammar);
  }
  assertNewName(e, r) {
    if (Xr(zt.prototype, e))
      throw new Error("Cannot add " + r + " '" + e + "': that's a reserved name");
    if (e in this.operations)
      throw new Error(
        "Cannot add " + r + " '" + e + "': an operation with that name already exists"
      );
    if (e in this.attributes)
      throw new Error(
        "Cannot add " + r + " '" + e + "': an attribute with that name already exists"
      );
  }
  // Returns a wrapper for the given CST `node` in this semantics.
  // If `node` is already a wrapper, returns `node` itself.  // TODO: why is this needed?
  wrap(e, r, n) {
    const i = n || r;
    return e instanceof this.Wrapper ? e : new this.Wrapper(e, r, i);
  }
}
function Jt(t, e) {
  if (!me.prototypeGrammar)
    return _e(t.indexOf("(") === -1), {
      name: t,
      formals: []
    };
  const r = me.prototypeGrammar.match(
    t,
    e === "operation" ? "OperationSignature" : "AttributeSignature"
  );
  if (r.failed())
    throw new Error(r.message);
  return me.prototypeGrammarSemantics(r).parse();
}
function bu(t, e, r) {
  return function(...n) {
    const s = (this._semantics.operations[e] || this._semantics.attributes[e]).formals.map((l) => this.args[l]);
    if (!this.isIteration() && n.length === 1)
      return r.apply(n[0], s);
    throw Xs(this.ctorName, e, t, rr);
  };
}
me.createSemantics = function(t, e) {
  const r = new me(
    t,
    e !== void 0 ? e : me.BuiltInSemantics._getSemantics()
  ), n = function(s) {
    if (!(s instanceof $n))
      throw new TypeError(
        "Semantics expected a MatchResult, but got " + st(s)
      );
    if (s.failed())
      throw new TypeError("cannot apply Semantics to " + s.toString());
    const l = s._cst;
    if (l.grammar !== t)
      throw new Error(
        "Cannot use a MatchResult from grammar '" + l.grammar.name + "' with a semantics for '" + t.name + "'"
      );
    const c = new Ar(s.input);
    return r.wrap(l, c.interval(s._cstOffset, s.input.length));
  };
  return n.addOperation = function(i, s) {
    return r.addOperationOrAttribute("operation", i, s), n;
  }, n.extendOperation = function(i, s) {
    return r.extendOperationOrAttribute("operation", i, s), n;
  }, n.addAttribute = function(i, s) {
    return r.addOperationOrAttribute("attribute", i, s), n;
  }, n.extendAttribute = function(i, s) {
    return r.extendOperationOrAttribute("attribute", i, s), n;
  }, n._getActionDict = function(i) {
    const s = r.operations[i] || r.attributes[i];
    if (!s)
      throw new Error(
        '"' + i + '" is not a valid operation or attribute name in this semantics for "' + t.name + '"'
      );
    return s.actionDict;
  }, n._remove = function(i) {
    let s;
    return i in r.operations ? (s = r.operations[i], delete r.operations[i]) : i in r.attributes && (s = r.attributes[i], delete r.attributes[i]), delete r.Wrapper.prototype[i], s;
  }, n.getOperationNames = function() {
    return Object.keys(r.operations);
  }, n.getAttributeNames = function() {
    return Object.keys(r.attributes);
  }, n.getGrammar = function() {
    return r.grammar;
  }, n.toRecipe = function(i) {
    return r.toRecipe(i);
  }, n.toString = r.toString.bind(r), n._getSemantics = function() {
    return r;
  }, n;
};
class nr {
  constructor(e, r, n, i) {
    this.name = e, this.formals = r, this.actionDict = n, this.builtInDefault = i;
  }
  checkActionDict(e) {
    e._checkTopDownActionDict(this.typeName, this.name, this.actionDict);
  }
  // Execute this operation on the CST node associated with `nodeWrapper` in the context of the
  // given Semantics instance.
  execute(e, r) {
    try {
      const { ctorName: n } = r._node;
      let i = this.actionDict[n];
      return i ? (rr.push([this, n]), i.apply(r, r._children())) : r.isNonterminal() && (i = this.actionDict._nonterminal, i) ? (rr.push([this, "_nonterminal", n]), i.apply(r, r._children())) : (rr.push([this, "default action", n]), this.actionDict._default.apply(r, r._children()));
    } finally {
      rr.pop();
    }
  }
}
nr.prototype.typeName = "operation";
class Zr extends nr {
  constructor(e, r, n) {
    super(e, [], r, n);
  }
  execute(e, r) {
    const n = r._node, i = e.attributeKeys[this.name];
    return Xr(n, i) || (n[i] = nr.prototype.execute.call(this, e, r)), n[i];
  }
}
Zr.prototype.typeName = "attribute";
const Qt = ["_iter", "_terminal", "_nonterminal", "_default"];
function Yt(t) {
  return Object.keys(t.rules).sort().map((e) => t.rules[e]);
}
const Fu = (t) => t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
let Rn, Pn;
class se {
  constructor(e, r, n, i) {
    if (this.name = e, this.superGrammar = r, this.rules = n, i) {
      if (!(i in n))
        throw new Error(
          "Invalid start rule: '" + i + "' is not a rule in grammar '" + e + "'"
        );
      this.defaultStartRule = i;
    }
    this._matchStateInitializer = void 0, this.supportsIncrementalParsing = !0;
  }
  matcher() {
    return new ku(this);
  }
  // Return true if the grammar is a built-in grammar, otherwise false.
  // NOTE: This might give an unexpected result if called before BuiltInRules is defined!
  isBuiltIn() {
    return this === se.ProtoBuiltInRules || this === se.BuiltInRules;
  }
  equals(e) {
    if (this === e)
      return !0;
    if (e == null || this.name !== e.name || this.defaultStartRule !== e.defaultStartRule || !(this.superGrammar === e.superGrammar || this.superGrammar.equals(e.superGrammar)))
      return !1;
    const r = Yt(this), n = Yt(e);
    return r.length === n.length && r.every((i, s) => i.description === n[s].description && i.formals.join(",") === n[s].formals.join(",") && i.body.toString() === n[s].body.toString());
  }
  match(e, r) {
    const n = this.matcher();
    return n.replaceInputRange(0, 0, e), n.match(r);
  }
  trace(e, r) {
    const n = this.matcher();
    return n.replaceInputRange(0, 0, e), n.trace(r);
  }
  createSemantics() {
    return me.createSemantics(this);
  }
  extendSemantics(e) {
    return me.createSemantics(this, e._getSemantics());
  }
  // Check that every key in `actionDict` corresponds to a semantic action, and that it maps to
  // a function of the correct arity. If not, throw an exception.
  _checkTopDownActionDict(e, r, n) {
    const i = [];
    for (const s in n) {
      const l = n[s];
      if (!Qt.includes(s) && !(s in this.rules)) {
        i.push(`'${s}' is not a valid semantic action for '${this.name}'`);
        continue;
      }
      if (typeof l != "function") {
        i.push(`'${s}' must be a function in an action dictionary for '${this.name}'`);
        continue;
      }
      const g = l.length, d = this._topDownActionArity(s);
      if (g !== d) {
        let F;
        s === "_iter" || s === "_nonterminal" ? F = `it should use a rest parameter, e.g. \`${s}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.` : F = `expected ${d}, got ${g}`, i.push(`Semantic action '${s}' has the wrong arity: ${F}`);
      }
    }
    if (i.length > 0) {
      const s = i.map((c) => "- " + c), l = new Error(
        [
          `Found errors in the action dictionary of the '${r}' ${e}:`,
          ...s
        ].join(`
`)
      );
      throw l.problems = i, l;
    }
  }
  // Return the expected arity for a semantic action named `actionName`, which
  // is either a rule name or a special action name like '_nonterminal'.
  _topDownActionArity(e) {
    return Qt.includes(e) ? 0 : this.rules[e].body.getArity();
  }
  _inheritsFrom(e) {
    let r = this.superGrammar;
    for (; r; ) {
      if (r.equals(e, !0))
        return !0;
      r = r.superGrammar;
    }
    return !1;
  }
  toRecipe(e = void 0) {
    const r = {};
    this.source && (r.source = this.source.contents);
    let n = null;
    this.defaultStartRule && (n = this.defaultStartRule);
    const i = {};
    Object.keys(this.rules).forEach((c) => {
      const g = this.rules[c], { body: d } = g, F = !this.superGrammar || !this.superGrammar.rules[c];
      let h;
      F ? h = "define" : h = d instanceof Tr ? "extend" : "override";
      const p = {};
      if (g.source && this.source) {
        const L = g.source.relativeTo(this.source);
        p.sourceInterval = [L.startIdx, L.endIdx];
      }
      const v = F ? g.description : null, I = d.outputRecipe(g.formals, this.source);
      i[c] = [
        h,
        // "define"/"extend"/"override"
        p,
        v,
        g.formals,
        I
      ];
    });
    let s = "null";
    e ? s = e : this.superGrammar && !this.superGrammar.isBuiltIn() && (s = this.superGrammar.toRecipe());
    const l = [
      ...["grammar", r, this.name].map(JSON.stringify),
      s,
      ...[n, i].map(JSON.stringify)
    ];
    return Fu(`[${l.join(",")}]`);
  }
  // TODO: Come up with better names for these methods.
  // TODO: Write the analog of these methods for inherited attributes.
  toOperationActionDictionaryTemplate() {
    return this._toOperationOrAttributeActionDictionaryTemplate();
  }
  toAttributeActionDictionaryTemplate() {
    return this._toOperationOrAttributeActionDictionaryTemplate();
  }
  _toOperationOrAttributeActionDictionaryTemplate() {
    const e = new xe();
    e.append("{");
    let r = !0;
    for (const n in this.rules) {
      const { body: i } = this.rules[n];
      r ? r = !1 : e.append(","), e.append(`
`), e.append("  "), this.addSemanticActionTemplate(n, i, e);
    }
    return e.append(`
}`), e.contents();
  }
  addSemanticActionTemplate(e, r, n) {
    n.append(e), n.append(": function(");
    const i = this._topDownActionArity(e);
    n.append(Er("_", i).join(", ")), n.append(`) {
`), n.append("  }");
  }
  // Parse a string which expresses a rule application in this grammar, and return the
  // resulting Apply node.
  parseApplication(e) {
    let r;
    if (e.indexOf("<") === -1)
      r = new q(e);
    else {
      const i = Rn.match(e, "Base_application");
      r = Pn(i, {});
    }
    if (!(r.ruleName in this.rules))
      throw jn(r.ruleName, this.name);
    const { formals: n } = this.rules[r.ruleName];
    if (n.length !== r.args.length) {
      const { source: i } = this.rules[r.ruleName];
      throw Sn(
        r.ruleName,
        n.length,
        r.args.length,
        i
      );
    }
    return r;
  }
  _setUpMatchState(e) {
    this._matchStateInitializer && this._matchStateInitializer(e);
  }
}
se.ProtoBuiltInRules = new se(
  "ProtoBuiltInRules",
  // name
  void 0,
  // supergrammar
  {
    any: {
      body: re,
      formals: [],
      description: "any character",
      primitive: !0
    },
    end: {
      body: te,
      formals: [],
      description: "end of input",
      primitive: !0
    },
    caseInsensitive: {
      body: new lt(new ae(0)),
      formals: ["str"],
      primitive: !0
    },
    lower: {
      body: new X("Ll"),
      formals: [],
      description: "a lowercase letter",
      primitive: !0
    },
    upper: {
      body: new X("Lu"),
      formals: [],
      description: "an uppercase letter",
      primitive: !0
    },
    // Union of Lt (titlecase), Lm (modifier), and Lo (other), i.e. any letter not in Ll or Lu.
    unicodeLtmo: {
      body: new X("Ltmo"),
      formals: [],
      description: "a Unicode character in Lt, Lm, or Lo",
      primitive: !0
    },
    // These rules are not truly primitive (they could be written in userland) but are defined
    // here for bootstrapping purposes.
    spaces: {
      body: new Ne(new q("space")),
      formals: []
    },
    space: {
      body: new ne("\0", " "),
      formals: [],
      description: "a space"
    }
  }
);
se.initApplicationParser = function(t, e) {
  Rn = t, Pn = e;
};
class Xt {
  constructor(e) {
    this.name = e;
  }
  // Helpers
  sourceInterval(e, r) {
    return this.source.subInterval(e, r - e);
  }
  ensureSuperGrammar() {
    return this.superGrammar || this.withSuperGrammar(
      // TODO: The conditional expression below is an ugly hack. It's kind of ok because
      // I doubt anyone will ever try to declare a grammar called `BuiltInRules`. Still,
      // we should try to find a better way to do this.
      this.name === "BuiltInRules" ? se.ProtoBuiltInRules : se.BuiltInRules
    ), this.superGrammar;
  }
  ensureSuperGrammarRuleForOverriding(e, r) {
    const n = this.ensureSuperGrammar().rules[e];
    if (!n)
      throw Ms(e, this.superGrammar.name, r);
    return n;
  }
  installOverriddenOrExtendedRule(e, r, n, i) {
    const s = Hr(r);
    if (s.length > 0)
      throw Wt(e, s, i);
    const l = this.ensureSuperGrammar().rules[e], c = l.formals, g = c ? c.length : 0;
    if (r.length !== g)
      throw Sn(e, g, r.length, i);
    return this.install(e, r, n, l.description, i);
  }
  install(e, r, n, i, s, l = !1) {
    return this.rules[e] = {
      body: n.introduceParams(r),
      formals: r,
      description: i,
      source: s,
      primitive: l
    }, this;
  }
  // Stuff that you should only do once
  withSuperGrammar(e) {
    if (this.superGrammar)
      throw new Error("the super grammar of a GrammarDecl cannot be set more than once");
    return this.superGrammar = e, this.rules = Object.create(e.rules), e.isBuiltIn() || (this.defaultStartRule = e.defaultStartRule), this;
  }
  withDefaultStartRule(e) {
    return this.defaultStartRule = e, this;
  }
  withSource(e) {
    return this.source = new Ar(e).interval(0, e.length), this;
  }
  // Creates a Grammar instance, and if it passes the sanity checks, returns it.
  build() {
    const e = new se(
      this.name,
      this.ensureSuperGrammar(),
      this.rules,
      this.defaultStartRule
    );
    e._matchStateInitializer = e.superGrammar._matchStateInitializer, e.supportsIncrementalParsing = e.superGrammar.supportsIncrementalParsing;
    const r = [];
    let n = !1;
    return Object.keys(e.rules).forEach((i) => {
      const { body: s } = e.rules[i];
      try {
        s.assertChoicesHaveUniformArity(i);
      } catch (l) {
        r.push(l);
      }
      try {
        s.assertAllApplicationsAreValid(i, e);
      } catch (l) {
        r.push(l), n = !0;
      }
    }), n || Object.keys(e.rules).forEach((i) => {
      const { body: s } = e.rules[i];
      try {
        s.assertIteratedExprsAreNotNullable(e, []);
      } catch (l) {
        r.push(l);
      }
    }), r.length > 0 && Zs(r), this.source && (e.source = this.source), e;
  }
  // Rule declarations
  define(e, r, n, i, s, l) {
    if (this.ensureSuperGrammar(), this.superGrammar.rules[e])
      throw qt(e, this.name, this.superGrammar.name, s);
    if (this.rules[e])
      throw qt(e, this.name, this.name, s);
    const c = Hr(r);
    if (c.length > 0)
      throw Wt(e, c, s);
    return this.install(e, r, n, i, s, l);
  }
  override(e, r, n, i, s) {
    return this.ensureSuperGrammarRuleForOverriding(e, s), this.installOverriddenOrExtendedRule(e, r, n, s), this;
  }
  extend(e, r, n, i, s) {
    if (!this.ensureSuperGrammar().rules[e])
      throw qs(e, this.superGrammar.name, s);
    const c = new Tr(this.superGrammar, e, n);
    return c.source = n.source, this.installOverriddenOrExtendedRule(e, r, c, s), this;
  }
}
class kr {
  constructor(e) {
    this.currentDecl = null, this.currentRuleName = null, this.options = e || {};
  }
  newGrammar(e) {
    return new Xt(e);
  }
  grammar(e, r, n, i, s) {
    const l = new Xt(r);
    return n && l.withSuperGrammar(
      n instanceof se ? n : this.fromRecipe(n)
    ), i && l.withDefaultStartRule(i), e && e.source && l.withSource(e.source), this.currentDecl = l, Object.keys(s).forEach((c) => {
      this.currentRuleName = c;
      const g = s[c], d = g[0], F = g[1], h = g[2], p = g[3], v = this.fromRecipe(g[4]);
      let I;
      l.source && F && F.sourceInterval && (I = l.source.subInterval(
        F.sourceInterval[0],
        F.sourceInterval[1] - F.sourceInterval[0]
      )), l[d](c, p, v, h, I);
    }), this.currentRuleName = this.currentDecl = null, l.build();
  }
  terminal(e) {
    return new Z(e);
  }
  range(e, r) {
    return new ne(e, r);
  }
  param(e) {
    return new ae(e);
  }
  alt(...e) {
    let r = [];
    for (let n of e)
      n instanceof O || (n = this.fromRecipe(n)), n instanceof H ? r = r.concat(n.terms) : r.push(n);
    return r.length === 1 ? r[0] : new H(r);
  }
  seq(...e) {
    let r = [];
    for (let n of e)
      n instanceof O || (n = this.fromRecipe(n)), n instanceof Q ? r = r.concat(n.factors) : r.push(n);
    return r.length === 1 ? r[0] : new Q(r);
  }
  star(e) {
    return e instanceof O || (e = this.fromRecipe(e)), new Ne(e);
  }
  plus(e) {
    return e instanceof O || (e = this.fromRecipe(e)), new Je(e);
  }
  opt(e) {
    return e instanceof O || (e = this.fromRecipe(e)), new Ee(e);
  }
  not(e) {
    return e instanceof O || (e = this.fromRecipe(e)), new Y(e);
  }
  lookahead(e) {
    return e instanceof O || (e = this.fromRecipe(e)), this.options.eliminateLookaheads ? new Y(new Y(e)) : new fe(e);
  }
  lex(e) {
    return e instanceof O || (e = this.fromRecipe(e)), new ce(e);
  }
  app(e, r) {
    return r && r.length > 0 && (r = r.map(function(n) {
      return n instanceof O ? n : this.fromRecipe(n);
    }, this)), new q(e, r);
  }
  // Note that unlike other methods in this class, this method cannot be used as a
  // convenience constructor. It only works with recipes, because it relies on
  // `this.currentDecl` and `this.currentRuleName` being set.
  splice(e, r) {
    return new yr(
      this.currentDecl.superGrammar,
      this.currentRuleName,
      e.map((n) => this.fromRecipe(n)),
      r.map((n) => this.fromRecipe(n))
    );
  }
  fromRecipe(e) {
    const r = e[0] === "grammar" ? e.slice(1) : e.slice(2), n = this[e[0]](...r), i = e[1];
    return i && i.sourceInterval && this.currentDecl && n.withSource(this.currentDecl.sourceInterval(...i.sourceInterval)), n;
  }
}
function mt(t) {
  return typeof t == "function" ? t.call(new kr()) : (typeof t == "string" && (t = JSON.parse(t)), new kr().fromRecipe(t));
}
const ct = mt(["grammar", { source: `BuiltInRules {

  alnum  (an alpha-numeric character)
    = letter
    | digit

  letter  (a letter)
    = lower
    | upper
    | unicodeLtmo

  digit  (a digit)
    = "0".."9"

  hexDigit  (a hexadecimal digit)
    = digit
    | "a".."f"
    | "A".."F"

  ListOf<elem, sep>
    = NonemptyListOf<elem, sep>
    | EmptyListOf<elem, sep>

  NonemptyListOf<elem, sep>
    = elem (sep elem)*

  EmptyListOf<elem, sep>
    = /* nothing */

  listOf<elem, sep>
    = nonemptyListOf<elem, sep>
    | emptyListOf<elem, sep>

  nonemptyListOf<elem, sep>
    = elem (sep elem)*

  emptyListOf<elem, sep>
    = /* nothing */

  // Allows a syntactic rule application within a lexical context.
  applySyntactic<app> = app
}` }, "BuiltInRules", null, null, { alnum: ["define", { sourceInterval: [18, 78] }, "an alpha-numeric character", [], ["alt", { sourceInterval: [60, 78] }, ["app", { sourceInterval: [60, 66] }, "letter", []], ["app", { sourceInterval: [73, 78] }, "digit", []]]], letter: ["define", { sourceInterval: [82, 142] }, "a letter", [], ["alt", { sourceInterval: [107, 142] }, ["app", { sourceInterval: [107, 112] }, "lower", []], ["app", { sourceInterval: [119, 124] }, "upper", []], ["app", { sourceInterval: [131, 142] }, "unicodeLtmo", []]]], digit: ["define", { sourceInterval: [146, 177] }, "a digit", [], ["range", { sourceInterval: [169, 177] }, "0", "9"]], hexDigit: ["define", { sourceInterval: [181, 254] }, "a hexadecimal digit", [], ["alt", { sourceInterval: [219, 254] }, ["app", { sourceInterval: [219, 224] }, "digit", []], ["range", { sourceInterval: [231, 239] }, "a", "f"], ["range", { sourceInterval: [246, 254] }, "A", "F"]]], ListOf: ["define", { sourceInterval: [258, 336] }, null, ["elem", "sep"], ["alt", { sourceInterval: [282, 336] }, ["app", { sourceInterval: [282, 307] }, "NonemptyListOf", [["param", { sourceInterval: [297, 301] }, 0], ["param", { sourceInterval: [303, 306] }, 1]]], ["app", { sourceInterval: [314, 336] }, "EmptyListOf", [["param", { sourceInterval: [326, 330] }, 0], ["param", { sourceInterval: [332, 335] }, 1]]]]], NonemptyListOf: ["define", { sourceInterval: [340, 388] }, null, ["elem", "sep"], ["seq", { sourceInterval: [372, 388] }, ["param", { sourceInterval: [372, 376] }, 0], ["star", { sourceInterval: [377, 388] }, ["seq", { sourceInterval: [378, 386] }, ["param", { sourceInterval: [378, 381] }, 1], ["param", { sourceInterval: [382, 386] }, 0]]]]], EmptyListOf: ["define", { sourceInterval: [392, 434] }, null, ["elem", "sep"], ["seq", { sourceInterval: [438, 438] }]], listOf: ["define", { sourceInterval: [438, 516] }, null, ["elem", "sep"], ["alt", { sourceInterval: [462, 516] }, ["app", { sourceInterval: [462, 487] }, "nonemptyListOf", [["param", { sourceInterval: [477, 481] }, 0], ["param", { sourceInterval: [483, 486] }, 1]]], ["app", { sourceInterval: [494, 516] }, "emptyListOf", [["param", { sourceInterval: [506, 510] }, 0], ["param", { sourceInterval: [512, 515] }, 1]]]]], nonemptyListOf: ["define", { sourceInterval: [520, 568] }, null, ["elem", "sep"], ["seq", { sourceInterval: [552, 568] }, ["param", { sourceInterval: [552, 556] }, 0], ["star", { sourceInterval: [557, 568] }, ["seq", { sourceInterval: [558, 566] }, ["param", { sourceInterval: [558, 561] }, 1], ["param", { sourceInterval: [562, 566] }, 0]]]]], emptyListOf: ["define", { sourceInterval: [572, 682] }, null, ["elem", "sep"], ["seq", { sourceInterval: [685, 685] }]], applySyntactic: ["define", { sourceInterval: [685, 710] }, null, ["app"], ["param", { sourceInterval: [707, 710] }, 0]] }]);
se.BuiltInRules = ct;
tu(se.BuiltInRules);
const pt = mt(["grammar", { source: `Ohm {

  Grammars
    = Grammar*

  Grammar
    = ident SuperGrammar? "{" Rule* "}"

  SuperGrammar
    = "<:" ident

  Rule
    = ident Formals? ruleDescr? "="  RuleBody  -- define
    | ident Formals?            ":=" OverrideRuleBody  -- override
    | ident Formals?            "+=" RuleBody  -- extend

  RuleBody
    = "|"? NonemptyListOf<TopLevelTerm, "|">

  TopLevelTerm
    = Seq caseName  -- inline
    | Seq

  OverrideRuleBody
    = "|"? NonemptyListOf<OverrideTopLevelTerm, "|">

  OverrideTopLevelTerm
    = "..."  -- superSplice
    | TopLevelTerm

  Formals
    = "<" ListOf<ident, ","> ">"

  Params
    = "<" ListOf<Seq, ","> ">"

  Alt
    = NonemptyListOf<Seq, "|">

  Seq
    = Iter*

  Iter
    = Pred "*"  -- star
    | Pred "+"  -- plus
    | Pred "?"  -- opt
    | Pred

  Pred
    = "~" Lex  -- not
    | "&" Lex  -- lookahead
    | Lex

  Lex
    = "#" Base  -- lex
    | Base

  Base
    = ident Params? ~(ruleDescr? "=" | ":=" | "+=")  -- application
    | oneCharTerminal ".." oneCharTerminal           -- range
    | terminal                                       -- terminal
    | "(" Alt ")"                                    -- paren

  ruleDescr  (a rule description)
    = "(" ruleDescrText ")"

  ruleDescrText
    = (~")" any)*

  caseName
    = "--" (~"\\n" space)* name (~"\\n" space)* ("\\n" | &"}")

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

  ident  (an identifier)
    = name

  terminal
    = "\\"" terminalChar* "\\""

  oneCharTerminal
    = "\\"" terminalChar "\\""

  terminalChar
    = escapeChar
      | ~"\\\\" ~"\\"" ~"\\n" "\\u{0}".."\\u{10FFFF}"

  escapeChar  (an escape sequence)
    = "\\\\\\\\"                                     -- backslash
    | "\\\\\\""                                     -- doubleQuote
    | "\\\\\\'"                                     -- singleQuote
    | "\\\\b"                                      -- backspace
    | "\\\\n"                                      -- lineFeed
    | "\\\\r"                                      -- carriageReturn
    | "\\\\t"                                      -- tab
    | "\\\\u{" hexDigit hexDigit? hexDigit?
             hexDigit? hexDigit? hexDigit? "}"   -- unicodeCodePoint
    | "\\\\u" hexDigit hexDigit hexDigit hexDigit  -- unicodeEscape
    | "\\\\x" hexDigit hexDigit                    -- hexEscape

  space
   += comment

  comment
    = "//" (~"\\n" any)* &("\\n" | end)  -- singleLine
    | "/*" (~"*/" any)* "*/"  -- multiLine

  tokens = token*

  token = caseName | comment | ident | operator | punctuation | terminal | any

  operator = "<:" | "=" | ":=" | "+=" | "*" | "+" | "?" | "~" | "&"

  punctuation = "<" | ">" | "," | "--"
}` }, "Ohm", null, "Grammars", { Grammars: ["define", { sourceInterval: [9, 32] }, null, [], ["star", { sourceInterval: [24, 32] }, ["app", { sourceInterval: [24, 31] }, "Grammar", []]]], Grammar: ["define", { sourceInterval: [36, 83] }, null, [], ["seq", { sourceInterval: [50, 83] }, ["app", { sourceInterval: [50, 55] }, "ident", []], ["opt", { sourceInterval: [56, 69] }, ["app", { sourceInterval: [56, 68] }, "SuperGrammar", []]], ["terminal", { sourceInterval: [70, 73] }, "{"], ["star", { sourceInterval: [74, 79] }, ["app", { sourceInterval: [74, 78] }, "Rule", []]], ["terminal", { sourceInterval: [80, 83] }, "}"]]], SuperGrammar: ["define", { sourceInterval: [87, 116] }, null, [], ["seq", { sourceInterval: [106, 116] }, ["terminal", { sourceInterval: [106, 110] }, "<:"], ["app", { sourceInterval: [111, 116] }, "ident", []]]], Rule_define: ["define", { sourceInterval: [131, 181] }, null, [], ["seq", { sourceInterval: [131, 170] }, ["app", { sourceInterval: [131, 136] }, "ident", []], ["opt", { sourceInterval: [137, 145] }, ["app", { sourceInterval: [137, 144] }, "Formals", []]], ["opt", { sourceInterval: [146, 156] }, ["app", { sourceInterval: [146, 155] }, "ruleDescr", []]], ["terminal", { sourceInterval: [157, 160] }, "="], ["app", { sourceInterval: [162, 170] }, "RuleBody", []]]], Rule_override: ["define", { sourceInterval: [188, 248] }, null, [], ["seq", { sourceInterval: [188, 235] }, ["app", { sourceInterval: [188, 193] }, "ident", []], ["opt", { sourceInterval: [194, 202] }, ["app", { sourceInterval: [194, 201] }, "Formals", []]], ["terminal", { sourceInterval: [214, 218] }, ":="], ["app", { sourceInterval: [219, 235] }, "OverrideRuleBody", []]]], Rule_extend: ["define", { sourceInterval: [255, 305] }, null, [], ["seq", { sourceInterval: [255, 294] }, ["app", { sourceInterval: [255, 260] }, "ident", []], ["opt", { sourceInterval: [261, 269] }, ["app", { sourceInterval: [261, 268] }, "Formals", []]], ["terminal", { sourceInterval: [281, 285] }, "+="], ["app", { sourceInterval: [286, 294] }, "RuleBody", []]]], Rule: ["define", { sourceInterval: [120, 305] }, null, [], ["alt", { sourceInterval: [131, 305] }, ["app", { sourceInterval: [131, 170] }, "Rule_define", []], ["app", { sourceInterval: [188, 235] }, "Rule_override", []], ["app", { sourceInterval: [255, 294] }, "Rule_extend", []]]], RuleBody: ["define", { sourceInterval: [309, 362] }, null, [], ["seq", { sourceInterval: [324, 362] }, ["opt", { sourceInterval: [324, 328] }, ["terminal", { sourceInterval: [324, 327] }, "|"]], ["app", { sourceInterval: [329, 362] }, "NonemptyListOf", [["app", { sourceInterval: [344, 356] }, "TopLevelTerm", []], ["terminal", { sourceInterval: [358, 361] }, "|"]]]]], TopLevelTerm_inline: ["define", { sourceInterval: [385, 408] }, null, [], ["seq", { sourceInterval: [385, 397] }, ["app", { sourceInterval: [385, 388] }, "Seq", []], ["app", { sourceInterval: [389, 397] }, "caseName", []]]], TopLevelTerm: ["define", { sourceInterval: [366, 418] }, null, [], ["alt", { sourceInterval: [385, 418] }, ["app", { sourceInterval: [385, 397] }, "TopLevelTerm_inline", []], ["app", { sourceInterval: [415, 418] }, "Seq", []]]], OverrideRuleBody: ["define", { sourceInterval: [422, 491] }, null, [], ["seq", { sourceInterval: [445, 491] }, ["opt", { sourceInterval: [445, 449] }, ["terminal", { sourceInterval: [445, 448] }, "|"]], ["app", { sourceInterval: [450, 491] }, "NonemptyListOf", [["app", { sourceInterval: [465, 485] }, "OverrideTopLevelTerm", []], ["terminal", { sourceInterval: [487, 490] }, "|"]]]]], OverrideTopLevelTerm_superSplice: ["define", { sourceInterval: [522, 543] }, null, [], ["terminal", { sourceInterval: [522, 527] }, "..."]], OverrideTopLevelTerm: ["define", { sourceInterval: [495, 562] }, null, [], ["alt", { sourceInterval: [522, 562] }, ["app", { sourceInterval: [522, 527] }, "OverrideTopLevelTerm_superSplice", []], ["app", { sourceInterval: [550, 562] }, "TopLevelTerm", []]]], Formals: ["define", { sourceInterval: [566, 606] }, null, [], ["seq", { sourceInterval: [580, 606] }, ["terminal", { sourceInterval: [580, 583] }, "<"], ["app", { sourceInterval: [584, 602] }, "ListOf", [["app", { sourceInterval: [591, 596] }, "ident", []], ["terminal", { sourceInterval: [598, 601] }, ","]]], ["terminal", { sourceInterval: [603, 606] }, ">"]]], Params: ["define", { sourceInterval: [610, 647] }, null, [], ["seq", { sourceInterval: [623, 647] }, ["terminal", { sourceInterval: [623, 626] }, "<"], ["app", { sourceInterval: [627, 643] }, "ListOf", [["app", { sourceInterval: [634, 637] }, "Seq", []], ["terminal", { sourceInterval: [639, 642] }, ","]]], ["terminal", { sourceInterval: [644, 647] }, ">"]]], Alt: ["define", { sourceInterval: [651, 685] }, null, [], ["app", { sourceInterval: [661, 685] }, "NonemptyListOf", [["app", { sourceInterval: [676, 679] }, "Seq", []], ["terminal", { sourceInterval: [681, 684] }, "|"]]]], Seq: ["define", { sourceInterval: [689, 704] }, null, [], ["star", { sourceInterval: [699, 704] }, ["app", { sourceInterval: [699, 703] }, "Iter", []]]], Iter_star: ["define", { sourceInterval: [719, 736] }, null, [], ["seq", { sourceInterval: [719, 727] }, ["app", { sourceInterval: [719, 723] }, "Pred", []], ["terminal", { sourceInterval: [724, 727] }, "*"]]], Iter_plus: ["define", { sourceInterval: [743, 760] }, null, [], ["seq", { sourceInterval: [743, 751] }, ["app", { sourceInterval: [743, 747] }, "Pred", []], ["terminal", { sourceInterval: [748, 751] }, "+"]]], Iter_opt: ["define", { sourceInterval: [767, 783] }, null, [], ["seq", { sourceInterval: [767, 775] }, ["app", { sourceInterval: [767, 771] }, "Pred", []], ["terminal", { sourceInterval: [772, 775] }, "?"]]], Iter: ["define", { sourceInterval: [708, 794] }, null, [], ["alt", { sourceInterval: [719, 794] }, ["app", { sourceInterval: [719, 727] }, "Iter_star", []], ["app", { sourceInterval: [743, 751] }, "Iter_plus", []], ["app", { sourceInterval: [767, 775] }, "Iter_opt", []], ["app", { sourceInterval: [790, 794] }, "Pred", []]]], Pred_not: ["define", { sourceInterval: [809, 824] }, null, [], ["seq", { sourceInterval: [809, 816] }, ["terminal", { sourceInterval: [809, 812] }, "~"], ["app", { sourceInterval: [813, 816] }, "Lex", []]]], Pred_lookahead: ["define", { sourceInterval: [831, 852] }, null, [], ["seq", { sourceInterval: [831, 838] }, ["terminal", { sourceInterval: [831, 834] }, "&"], ["app", { sourceInterval: [835, 838] }, "Lex", []]]], Pred: ["define", { sourceInterval: [798, 862] }, null, [], ["alt", { sourceInterval: [809, 862] }, ["app", { sourceInterval: [809, 816] }, "Pred_not", []], ["app", { sourceInterval: [831, 838] }, "Pred_lookahead", []], ["app", { sourceInterval: [859, 862] }, "Lex", []]]], Lex_lex: ["define", { sourceInterval: [876, 892] }, null, [], ["seq", { sourceInterval: [876, 884] }, ["terminal", { sourceInterval: [876, 879] }, "#"], ["app", { sourceInterval: [880, 884] }, "Base", []]]], Lex: ["define", { sourceInterval: [866, 903] }, null, [], ["alt", { sourceInterval: [876, 903] }, ["app", { sourceInterval: [876, 884] }, "Lex_lex", []], ["app", { sourceInterval: [899, 903] }, "Base", []]]], Base_application: ["define", { sourceInterval: [918, 979] }, null, [], ["seq", { sourceInterval: [918, 963] }, ["app", { sourceInterval: [918, 923] }, "ident", []], ["opt", { sourceInterval: [924, 931] }, ["app", { sourceInterval: [924, 930] }, "Params", []]], ["not", { sourceInterval: [932, 963] }, ["alt", { sourceInterval: [934, 962] }, ["seq", { sourceInterval: [934, 948] }, ["opt", { sourceInterval: [934, 944] }, ["app", { sourceInterval: [934, 943] }, "ruleDescr", []]], ["terminal", { sourceInterval: [945, 948] }, "="]], ["terminal", { sourceInterval: [951, 955] }, ":="], ["terminal", { sourceInterval: [958, 962] }, "+="]]]]], Base_range: ["define", { sourceInterval: [986, 1041] }, null, [], ["seq", { sourceInterval: [986, 1022] }, ["app", { sourceInterval: [986, 1001] }, "oneCharTerminal", []], ["terminal", { sourceInterval: [1002, 1006] }, ".."], ["app", { sourceInterval: [1007, 1022] }, "oneCharTerminal", []]]], Base_terminal: ["define", { sourceInterval: [1048, 1106] }, null, [], ["app", { sourceInterval: [1048, 1056] }, "terminal", []]], Base_paren: ["define", { sourceInterval: [1113, 1168] }, null, [], ["seq", { sourceInterval: [1113, 1124] }, ["terminal", { sourceInterval: [1113, 1116] }, "("], ["app", { sourceInterval: [1117, 1120] }, "Alt", []], ["terminal", { sourceInterval: [1121, 1124] }, ")"]]], Base: ["define", { sourceInterval: [907, 1168] }, null, [], ["alt", { sourceInterval: [918, 1168] }, ["app", { sourceInterval: [918, 963] }, "Base_application", []], ["app", { sourceInterval: [986, 1022] }, "Base_range", []], ["app", { sourceInterval: [1048, 1056] }, "Base_terminal", []], ["app", { sourceInterval: [1113, 1124] }, "Base_paren", []]]], ruleDescr: ["define", { sourceInterval: [1172, 1231] }, "a rule description", [], ["seq", { sourceInterval: [1210, 1231] }, ["terminal", { sourceInterval: [1210, 1213] }, "("], ["app", { sourceInterval: [1214, 1227] }, "ruleDescrText", []], ["terminal", { sourceInterval: [1228, 1231] }, ")"]]], ruleDescrText: ["define", { sourceInterval: [1235, 1266] }, null, [], ["star", { sourceInterval: [1255, 1266] }, ["seq", { sourceInterval: [1256, 1264] }, ["not", { sourceInterval: [1256, 1260] }, ["terminal", { sourceInterval: [1257, 1260] }, ")"]], ["app", { sourceInterval: [1261, 1264] }, "any", []]]]], caseName: ["define", { sourceInterval: [1270, 1338] }, null, [], ["seq", { sourceInterval: [1285, 1338] }, ["terminal", { sourceInterval: [1285, 1289] }, "--"], ["star", { sourceInterval: [1290, 1304] }, ["seq", { sourceInterval: [1291, 1302] }, ["not", { sourceInterval: [1291, 1296] }, ["terminal", { sourceInterval: [1292, 1296] }, `
`]], ["app", { sourceInterval: [1297, 1302] }, "space", []]]], ["app", { sourceInterval: [1305, 1309] }, "name", []], ["star", { sourceInterval: [1310, 1324] }, ["seq", { sourceInterval: [1311, 1322] }, ["not", { sourceInterval: [1311, 1316] }, ["terminal", { sourceInterval: [1312, 1316] }, `
`]], ["app", { sourceInterval: [1317, 1322] }, "space", []]]], ["alt", { sourceInterval: [1326, 1337] }, ["terminal", { sourceInterval: [1326, 1330] }, `
`], ["lookahead", { sourceInterval: [1333, 1337] }, ["terminal", { sourceInterval: [1334, 1337] }, "}"]]]]], name: ["define", { sourceInterval: [1342, 1382] }, "a name", [], ["seq", { sourceInterval: [1363, 1382] }, ["app", { sourceInterval: [1363, 1372] }, "nameFirst", []], ["star", { sourceInterval: [1373, 1382] }, ["app", { sourceInterval: [1373, 1381] }, "nameRest", []]]]], nameFirst: ["define", { sourceInterval: [1386, 1418] }, null, [], ["alt", { sourceInterval: [1402, 1418] }, ["terminal", { sourceInterval: [1402, 1405] }, "_"], ["app", { sourceInterval: [1412, 1418] }, "letter", []]]], nameRest: ["define", { sourceInterval: [1422, 1452] }, null, [], ["alt", { sourceInterval: [1437, 1452] }, ["terminal", { sourceInterval: [1437, 1440] }, "_"], ["app", { sourceInterval: [1447, 1452] }, "alnum", []]]], ident: ["define", { sourceInterval: [1456, 1489] }, "an identifier", [], ["app", { sourceInterval: [1485, 1489] }, "name", []]], terminal: ["define", { sourceInterval: [1493, 1531] }, null, [], ["seq", { sourceInterval: [1508, 1531] }, ["terminal", { sourceInterval: [1508, 1512] }, '"'], ["star", { sourceInterval: [1513, 1526] }, ["app", { sourceInterval: [1513, 1525] }, "terminalChar", []]], ["terminal", { sourceInterval: [1527, 1531] }, '"']]], oneCharTerminal: ["define", { sourceInterval: [1535, 1579] }, null, [], ["seq", { sourceInterval: [1557, 1579] }, ["terminal", { sourceInterval: [1557, 1561] }, '"'], ["app", { sourceInterval: [1562, 1574] }, "terminalChar", []], ["terminal", { sourceInterval: [1575, 1579] }, '"']]], terminalChar: ["define", { sourceInterval: [1583, 1660] }, null, [], ["alt", { sourceInterval: [1602, 1660] }, ["app", { sourceInterval: [1602, 1612] }, "escapeChar", []], ["seq", { sourceInterval: [1621, 1660] }, ["not", { sourceInterval: [1621, 1626] }, ["terminal", { sourceInterval: [1622, 1626] }, "\\"]], ["not", { sourceInterval: [1627, 1632] }, ["terminal", { sourceInterval: [1628, 1632] }, '"']], ["not", { sourceInterval: [1633, 1638] }, ["terminal", { sourceInterval: [1634, 1638] }, `
`]], ["range", { sourceInterval: [1639, 1660] }, "\0", "􏿿"]]]], escapeChar_backslash: ["define", { sourceInterval: [1703, 1758] }, null, [], ["terminal", { sourceInterval: [1703, 1709] }, "\\\\"]], escapeChar_doubleQuote: ["define", { sourceInterval: [1765, 1822] }, null, [], ["terminal", { sourceInterval: [1765, 1771] }, '\\"']], escapeChar_singleQuote: ["define", { sourceInterval: [1829, 1886] }, null, [], ["terminal", { sourceInterval: [1829, 1835] }, "\\'"]], escapeChar_backspace: ["define", { sourceInterval: [1893, 1948] }, null, [], ["terminal", { sourceInterval: [1893, 1898] }, "\\b"]], escapeChar_lineFeed: ["define", { sourceInterval: [1955, 2009] }, null, [], ["terminal", { sourceInterval: [1955, 1960] }, "\\n"]], escapeChar_carriageReturn: ["define", { sourceInterval: [2016, 2076] }, null, [], ["terminal", { sourceInterval: [2016, 2021] }, "\\r"]], escapeChar_tab: ["define", { sourceInterval: [2083, 2132] }, null, [], ["terminal", { sourceInterval: [2083, 2088] }, "\\t"]], escapeChar_unicodeCodePoint: ["define", { sourceInterval: [2139, 2243] }, null, [], ["seq", { sourceInterval: [2139, 2221] }, ["terminal", { sourceInterval: [2139, 2145] }, "\\u{"], ["app", { sourceInterval: [2146, 2154] }, "hexDigit", []], ["opt", { sourceInterval: [2155, 2164] }, ["app", { sourceInterval: [2155, 2163] }, "hexDigit", []]], ["opt", { sourceInterval: [2165, 2174] }, ["app", { sourceInterval: [2165, 2173] }, "hexDigit", []]], ["opt", { sourceInterval: [2188, 2197] }, ["app", { sourceInterval: [2188, 2196] }, "hexDigit", []]], ["opt", { sourceInterval: [2198, 2207] }, ["app", { sourceInterval: [2198, 2206] }, "hexDigit", []]], ["opt", { sourceInterval: [2208, 2217] }, ["app", { sourceInterval: [2208, 2216] }, "hexDigit", []]], ["terminal", { sourceInterval: [2218, 2221] }, "}"]]], escapeChar_unicodeEscape: ["define", { sourceInterval: [2250, 2309] }, null, [], ["seq", { sourceInterval: [2250, 2291] }, ["terminal", { sourceInterval: [2250, 2255] }, "\\u"], ["app", { sourceInterval: [2256, 2264] }, "hexDigit", []], ["app", { sourceInterval: [2265, 2273] }, "hexDigit", []], ["app", { sourceInterval: [2274, 2282] }, "hexDigit", []], ["app", { sourceInterval: [2283, 2291] }, "hexDigit", []]]], escapeChar_hexEscape: ["define", { sourceInterval: [2316, 2371] }, null, [], ["seq", { sourceInterval: [2316, 2339] }, ["terminal", { sourceInterval: [2316, 2321] }, "\\x"], ["app", { sourceInterval: [2322, 2330] }, "hexDigit", []], ["app", { sourceInterval: [2331, 2339] }, "hexDigit", []]]], escapeChar: ["define", { sourceInterval: [1664, 2371] }, "an escape sequence", [], ["alt", { sourceInterval: [1703, 2371] }, ["app", { sourceInterval: [1703, 1709] }, "escapeChar_backslash", []], ["app", { sourceInterval: [1765, 1771] }, "escapeChar_doubleQuote", []], ["app", { sourceInterval: [1829, 1835] }, "escapeChar_singleQuote", []], ["app", { sourceInterval: [1893, 1898] }, "escapeChar_backspace", []], ["app", { sourceInterval: [1955, 1960] }, "escapeChar_lineFeed", []], ["app", { sourceInterval: [2016, 2021] }, "escapeChar_carriageReturn", []], ["app", { sourceInterval: [2083, 2088] }, "escapeChar_tab", []], ["app", { sourceInterval: [2139, 2221] }, "escapeChar_unicodeCodePoint", []], ["app", { sourceInterval: [2250, 2291] }, "escapeChar_unicodeEscape", []], ["app", { sourceInterval: [2316, 2339] }, "escapeChar_hexEscape", []]]], space: ["extend", { sourceInterval: [2375, 2394] }, null, [], ["app", { sourceInterval: [2387, 2394] }, "comment", []]], comment_singleLine: ["define", { sourceInterval: [2412, 2458] }, null, [], ["seq", { sourceInterval: [2412, 2443] }, ["terminal", { sourceInterval: [2412, 2416] }, "//"], ["star", { sourceInterval: [2417, 2429] }, ["seq", { sourceInterval: [2418, 2427] }, ["not", { sourceInterval: [2418, 2423] }, ["terminal", { sourceInterval: [2419, 2423] }, `
`]], ["app", { sourceInterval: [2424, 2427] }, "any", []]]], ["lookahead", { sourceInterval: [2430, 2443] }, ["alt", { sourceInterval: [2432, 2442] }, ["terminal", { sourceInterval: [2432, 2436] }, `
`], ["app", { sourceInterval: [2439, 2442] }, "end", []]]]]], comment_multiLine: ["define", { sourceInterval: [2465, 2501] }, null, [], ["seq", { sourceInterval: [2465, 2487] }, ["terminal", { sourceInterval: [2465, 2469] }, "/*"], ["star", { sourceInterval: [2470, 2482] }, ["seq", { sourceInterval: [2471, 2480] }, ["not", { sourceInterval: [2471, 2476] }, ["terminal", { sourceInterval: [2472, 2476] }, "*/"]], ["app", { sourceInterval: [2477, 2480] }, "any", []]]], ["terminal", { sourceInterval: [2483, 2487] }, "*/"]]], comment: ["define", { sourceInterval: [2398, 2501] }, null, [], ["alt", { sourceInterval: [2412, 2501] }, ["app", { sourceInterval: [2412, 2443] }, "comment_singleLine", []], ["app", { sourceInterval: [2465, 2487] }, "comment_multiLine", []]]], tokens: ["define", { sourceInterval: [2505, 2520] }, null, [], ["star", { sourceInterval: [2514, 2520] }, ["app", { sourceInterval: [2514, 2519] }, "token", []]]], token: ["define", { sourceInterval: [2524, 2600] }, null, [], ["alt", { sourceInterval: [2532, 2600] }, ["app", { sourceInterval: [2532, 2540] }, "caseName", []], ["app", { sourceInterval: [2543, 2550] }, "comment", []], ["app", { sourceInterval: [2553, 2558] }, "ident", []], ["app", { sourceInterval: [2561, 2569] }, "operator", []], ["app", { sourceInterval: [2572, 2583] }, "punctuation", []], ["app", { sourceInterval: [2586, 2594] }, "terminal", []], ["app", { sourceInterval: [2597, 2600] }, "any", []]]], operator: ["define", { sourceInterval: [2604, 2669] }, null, [], ["alt", { sourceInterval: [2615, 2669] }, ["terminal", { sourceInterval: [2615, 2619] }, "<:"], ["terminal", { sourceInterval: [2622, 2625] }, "="], ["terminal", { sourceInterval: [2628, 2632] }, ":="], ["terminal", { sourceInterval: [2635, 2639] }, "+="], ["terminal", { sourceInterval: [2642, 2645] }, "*"], ["terminal", { sourceInterval: [2648, 2651] }, "+"], ["terminal", { sourceInterval: [2654, 2657] }, "?"], ["terminal", { sourceInterval: [2660, 2663] }, "~"], ["terminal", { sourceInterval: [2666, 2669] }, "&"]]], punctuation: ["define", { sourceInterval: [2673, 2709] }, null, [], ["alt", { sourceInterval: [2687, 2709] }, ["terminal", { sourceInterval: [2687, 2690] }, "<"], ["terminal", { sourceInterval: [2693, 2696] }, ">"], ["terminal", { sourceInterval: [2699, 2702] }, ","], ["terminal", { sourceInterval: [2705, 2709] }, "--"]]] }]), Gr = Object.create(O.prototype);
function Zt(t, e) {
  for (const r in t)
    if (r === e) return !0;
  return !1;
}
function Mn(t, e, r, n) {
  const i = new kr(n);
  let s, l, c, g = !1;
  return (r || pt).createSemantics().addOperation("visit", {
    Grammars(h) {
      return h.children.map((p) => p.visit());
    },
    Grammar(h, p, v, I, L) {
      const T = h.visit();
      s = i.newGrammar(T), p.child(0) && p.child(0).visit(), I.children.map((S) => S.visit());
      const w = s.build();
      if (w.source = this.source.trimmed(), Zt(e, T))
        throw Rs(w);
      return e[T] = w, w;
    },
    SuperGrammar(h, p) {
      const v = p.visit();
      if (v === "null")
        s.withSuperGrammar(null);
      else {
        if (!e || !Zt(e, v))
          throw Gs(v, e, p.source);
        s.withSuperGrammar(e[v]);
      }
    },
    Rule_define(h, p, v, I, L) {
      l = h.visit(), c = p.children.map((M) => M.visit())[0] || [], !s.defaultStartRule && s.ensureSuperGrammar() !== se.ProtoBuiltInRules && s.withDefaultStartRule(l);
      const T = L.visit(), w = v.children.map((M) => M.visit())[0], S = this.source.trimmed();
      return s.define(l, c, T, w, S);
    },
    Rule_override(h, p, v, I) {
      l = h.visit(), c = p.children.map((w) => w.visit())[0] || [];
      const L = this.source.trimmed();
      s.ensureSuperGrammarRuleForOverriding(l, L), g = !0;
      const T = I.visit();
      return g = !1, s.override(l, c, T, null, L);
    },
    Rule_extend(h, p, v, I) {
      l = h.visit(), c = p.children.map((w) => w.visit())[0] || [];
      const L = I.visit(), T = this.source.trimmed();
      return s.extend(l, c, L, null, T);
    },
    RuleBody(h, p) {
      return i.alt(...p.visit()).withSource(this.source);
    },
    OverrideRuleBody(h, p) {
      const v = p.visit(), I = v.indexOf(Gr);
      if (I >= 0) {
        const L = v.slice(0, I), T = v.slice(I + 1);
        return T.forEach((w) => {
          if (w === Gr) throw Js(w);
        }), new yr(
          s.superGrammar,
          l,
          L,
          T
        ).withSource(this.source);
      } else
        return i.alt(...v).withSource(this.source);
    },
    Formals(h, p, v) {
      return p.visit();
    },
    Params(h, p, v) {
      return p.visit();
    },
    Alt(h) {
      return i.alt(...h.visit()).withSource(this.source);
    },
    TopLevelTerm_inline(h, p) {
      const v = l + "_" + p.visit(), I = h.visit(), L = this.source.trimmed(), T = !(s.superGrammar && s.superGrammar.rules[v]);
      g && !T ? s.override(v, c, I, null, L) : s.define(v, c, I, null, L);
      const w = c.map((S) => i.app(S));
      return i.app(v, w).withSource(I.source);
    },
    OverrideTopLevelTerm_superSplice(h) {
      return Gr;
    },
    Seq(h) {
      return i.seq(...h.children.map((p) => p.visit())).withSource(this.source);
    },
    Iter_star(h, p) {
      return i.star(h.visit()).withSource(this.source);
    },
    Iter_plus(h, p) {
      return i.plus(h.visit()).withSource(this.source);
    },
    Iter_opt(h, p) {
      return i.opt(h.visit()).withSource(this.source);
    },
    Pred_not(h, p) {
      return i.not(p.visit()).withSource(this.source);
    },
    Pred_lookahead(h, p) {
      return i.lookahead(p.visit()).withSource(this.source);
    },
    Lex_lex(h, p) {
      return i.lex(p.visit()).withSource(this.source);
    },
    Base_application(h, p) {
      const v = p.children.map((I) => I.visit())[0] || [];
      return i.app(h.visit(), v).withSource(this.source);
    },
    Base_range(h, p, v) {
      return i.range(h.visit(), v.visit()).withSource(this.source);
    },
    Base_terminal(h) {
      return i.terminal(h.visit()).withSource(this.source);
    },
    Base_paren(h, p, v) {
      return p.visit();
    },
    ruleDescr(h, p, v) {
      return p.visit();
    },
    ruleDescrText(h) {
      return this.sourceString.trim();
    },
    caseName(h, p, v, I, L) {
      return v.visit();
    },
    name(h, p) {
      return this.sourceString;
    },
    nameFirst(h) {
    },
    nameRest(h) {
    },
    terminal(h, p, v) {
      return p.children.map((I) => I.visit()).join("");
    },
    oneCharTerminal(h, p, v) {
      return p.visit();
    },
    escapeChar(h) {
      try {
        return _n(this.sourceString);
      } catch (p) {
        throw p instanceof RangeError && p.message.startsWith("Invalid code point ") ? Qs(h) : p;
      }
    },
    NonemptyListOf(h, p, v) {
      return [h.visit()].concat(v.children.map((I) => I.visit()));
    },
    EmptyListOf() {
      return [];
    },
    _terminal() {
      return this.sourceString;
    }
  })(t).visit();
}
const Eu = mt(["grammar", { source: `OperationsAndAttributes {

  AttributeSignature =
    name

  OperationSignature =
    name Formals?

  Formals
    = "(" ListOf<name, ","> ")"

  name  (a name)
    = nameFirst nameRest*

  nameFirst
    = "_"
    | letter

  nameRest
    = "_"
    | alnum

}` }, "OperationsAndAttributes", null, "AttributeSignature", { AttributeSignature: ["define", { sourceInterval: [29, 58] }, null, [], ["app", { sourceInterval: [54, 58] }, "name", []]], OperationSignature: ["define", { sourceInterval: [62, 100] }, null, [], ["seq", { sourceInterval: [87, 100] }, ["app", { sourceInterval: [87, 91] }, "name", []], ["opt", { sourceInterval: [92, 100] }, ["app", { sourceInterval: [92, 99] }, "Formals", []]]]], Formals: ["define", { sourceInterval: [104, 143] }, null, [], ["seq", { sourceInterval: [118, 143] }, ["terminal", { sourceInterval: [118, 121] }, "("], ["app", { sourceInterval: [122, 139] }, "ListOf", [["app", { sourceInterval: [129, 133] }, "name", []], ["terminal", { sourceInterval: [135, 138] }, ","]]], ["terminal", { sourceInterval: [140, 143] }, ")"]]], name: ["define", { sourceInterval: [147, 187] }, "a name", [], ["seq", { sourceInterval: [168, 187] }, ["app", { sourceInterval: [168, 177] }, "nameFirst", []], ["star", { sourceInterval: [178, 187] }, ["app", { sourceInterval: [178, 186] }, "nameRest", []]]]], nameFirst: ["define", { sourceInterval: [191, 223] }, null, [], ["alt", { sourceInterval: [207, 223] }, ["terminal", { sourceInterval: [207, 210] }, "_"], ["app", { sourceInterval: [217, 223] }, "letter", []]]], nameRest: ["define", { sourceInterval: [227, 257] }, null, [], ["alt", { sourceInterval: [242, 257] }, ["terminal", { sourceInterval: [242, 245] }, "_"], ["app", { sourceInterval: [252, 257] }, "alnum", []]]] }]);
Tu(se.BuiltInRules);
yu(Eu);
function Tu(t) {
  const e = {
    empty() {
      return this.iteration();
    },
    nonEmpty(r, n, i) {
      return this.iteration([r].concat(i.children));
    },
    self(...r) {
      return this;
    }
  };
  me.BuiltInSemantics = me.createSemantics(t, null).addOperation(
    "asIteration",
    {
      emptyListOf: e.empty,
      nonemptyListOf: e.nonEmpty,
      EmptyListOf: e.empty,
      NonemptyListOf: e.nonEmpty,
      _iter: e.self
    }
  );
}
function yu(t) {
  me.prototypeGrammarSemantics = t.createSemantics().addOperation("parse", {
    AttributeSignature(e) {
      return {
        name: e.parse(),
        formals: []
      };
    },
    OperationSignature(e, r) {
      return {
        name: e.parse(),
        formals: r.children.map((n) => n.parse())[0] || []
      };
    },
    Formals(e, r, n) {
      return r.asIteration().children.map((i) => i.parse());
    },
    name(e, r) {
      return this.sourceString;
    }
  }), me.prototypeGrammar = t;
}
function Au(t) {
  let e = 0;
  const r = [0], n = () => r[r.length - 1], i = {}, s = /( *).*(?:$|\r?\n|\r)/g;
  let l;
  for (; (l = s.exec(t)) != null; ) {
    const [c, g] = l;
    if (c.length === 0) break;
    const d = g.length, F = n(), h = e + d;
    if (d > F)
      r.push(d), i[h] = 1;
    else if (d < F) {
      const p = r.length;
      for (; n() !== d; )
        r.pop();
      i[h] = -1 * (p - r.length);
    }
    e += c.length;
  }
  return r.length > 1 && (i[e] = 1 - r.length), i;
}
const qn = "an indented block", Wn = "a dedent", en = 1114112;
class Iu extends Ar {
  constructor(e) {
    super(e.input), this.state = e;
  }
  _indentationAt(e) {
    return this.state.userData[e] || 0;
  }
  atEnd() {
    return super.atEnd() && this._indentationAt(this.pos) === 0;
  }
  next() {
    if (this._indentationAt(this.pos) !== 0) {
      this.examinedLength = Math.max(this.examinedLength, this.pos);
      return;
    }
    return super.next();
  }
  nextCharCode() {
    return this._indentationAt(this.pos) !== 0 ? (this.examinedLength = Math.max(this.examinedLength, this.pos), en) : super.nextCharCode();
  }
  nextCodePoint() {
    return this._indentationAt(this.pos) !== 0 ? (this.examinedLength = Math.max(this.examinedLength, this.pos), en) : super.nextCodePoint();
  }
}
class rn extends O {
  constructor(e = !0) {
    super(), this.isIndent = e;
  }
  allowsSkippingPrecedingSpace() {
    return !0;
  }
  eval(e) {
    const { inputStream: r } = e, n = e.userData;
    e.doNotMemoize = !0;
    const i = r.pos, s = this.isIndent ? 1 : -1;
    return (n[i] || 0) * s > 0 ? (e.userData = Object.create(n), e.userData[i] -= s, e.pushBinding(new De(0), i), !0) : (e.processFailure(i, this), !1);
  }
  getArity() {
    return 1;
  }
  _assertAllApplicationsAreValid(e, r) {
  }
  _isNullable(e, r) {
    return !1;
  }
  assertChoicesHaveUniformArity(e) {
  }
  assertIteratedExprsAreNotNullable(e) {
  }
  introduceParams(e) {
    return this;
  }
  substituteParams(e) {
    return this;
  }
  toString() {
    return this.isIndent ? "indent" : "dedent";
  }
  toDisplayString() {
    return this.toString();
  }
  toFailure(e) {
    const r = this.isIndent ? qn : Wn;
    return new pe(this, r, "description");
  }
}
const _u = new q("indent"), wu = new q("dedent"), Cu = new yr(ct, "any", [_u, wu], []), ju = new kr().newGrammar("IndentationSensitive").withSuperGrammar(ct).define("indent", [], new rn(!0), qn, void 0, !0).define("dedent", [], new rn(!1), Wn, void 0, !0).extend("any", [], Cu, "any character", void 0).build();
Object.assign(ju, {
  _matchStateInitializer(t) {
    t.userData = Au(t.input), t.inputStream = new Iu(t);
  },
  supportsIncrementalParsing: !1
});
se.initApplicationParser(pt, Mn);
const Su = (t) => !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
function xu(t, e, r) {
  const n = pt.match(t, "Grammars");
  if (n.failed())
    throw Ls(n);
  return Mn(n, e, void 0, r);
}
function Nu(t, e, r) {
  const n = /* @__PURE__ */ Object.create({});
  if (typeof t != "string")
    if (Su(t))
      t = t.toString();
    else
      throw new TypeError(
        "Expected string as first argument, got " + st(t)
      );
  return xu(t, n, r), n;
}
function Du(t, e) {
  return Nu(t);
}
const Ir = {
  // 1
  einn: 1,
  ein: 1,
  eitt: 1,
  // 2 (+ multiplicative)
  tveir: 2,
  tvær: 2,
  tvö: 2,
  tveimur: 2,
  tveim: 2,
  tvisvar: 2,
  // 3 (+ multiplicative)
  þrír: 3,
  þrjár: 3,
  þrjú: 3,
  þremur: 3,
  þrem: 3,
  þrisvar: 3,
  // 4
  fjórir: 4,
  fjórar: 4,
  fjögur: 4,
  fjórum: 4,
  // 5-10
  fimm: 5,
  sex: 6,
  sjö: 7,
  átta: 8,
  níu: 9,
  tíu: 10,
  // 11-20 (indeclinable — no gender variants)
  ellefu: 11,
  tólf: 12,
  þrettán: 13,
  fjórtán: 14,
  fimmtán: 15,
  sextán: 16,
  sautján: 17,
  átján: 18,
  nítján: 19,
  tuttugu: 20
}, dt = {
  sög: "saw",
  sínus: "sine",
  kósínus: "cosine",
  þríhyrnd: "tri",
  kassi: "square",
  handahóf: "rand",
  perlín: "perlin"
}, gt = {
  mjög: 1.5,
  örlítið: 0.5,
  smá: 0.5,
  alveg: 2
}, Un = ["voðalega", "rosalega", "ógeðslega", "mjög", "afar", "enn", "rosa"], ht = {
  minnstur: "minnstur",
  minnst: "minnstur",
  minnsta: "minnstur",
  minni: "minni",
  minna: "minni",
  lítill: "lítill",
  lítil: "lítill",
  lítið: "lítill",
  lítinn: "lítill",
  litla: "lítill",
  stór: "stór",
  stórt: "stór",
  stóran: "stór",
  stóra: "stór",
  stærri: "stærri",
  stærra: "stærri",
  stærstur: "stærstur",
  stærst: "stærstur",
  stærsta: "stærstur",
  // "high" family aliases onto the "big" family values
  hár: "stór",
  há: "stór",
  hátt: "stór",
  háan: "stór",
  háa: "stór",
  hærri: "stærri",
  hærra: "stærri",
  hæstur: "stærstur",
  hæst: "stærstur",
  hæsta: "stærstur"
}, cr = ["minnstur", "minni", "lítill", "stór", "stærri", "stærstur"], Rr = { minnstur: 0.1, minni: 0.2, lítill: 0.5, stór: 0.75, stærri: 0.9, stærstur: 1 }, Bu = /* @__PURE__ */ new Set(["minnstur", "minni", "lítill"]), tn = { "enn minni": 0.15, "voðalega lítill": 0.35, "mjög stór": 0.85 }, $u = (t, e) => {
  const r = ht[e.toLowerCase()];
  let n = Rr[r];
  const i = (t || "").toLowerCase();
  if (i) {
    const s = `${i} ${r}`;
    if (Object.prototype.hasOwnProperty.call(tn, s)) return tn[s];
    const l = cr.indexOf(r);
    if (Bu.has(r)) {
      const c = l > 0 ? Rr[cr[l - 1]] : 0;
      n = Number((n - (n - c) / 2).toFixed(2));
    } else {
      const c = l < cr.length - 1 ? Rr[cr[l + 1]] : 1;
      n = Number((n + (c - n) / 2).toFixed(2));
    }
  }
  return n;
}, et = /* @__PURE__ */ new Map([["h", "hljóð"]]), Vn = [
  "mynstur",
  "mystur",
  "merktu",
  "sem",
  "aldrei",
  "ekkert",
  "spila",
  "spilaðu",
  "spilið",
  "líka",
  "einnig",
  "fylgir",
  "þá",
  "vog",
  "velur",
  "úr",
  "kaflinn",
  "raðaðu",
  "takturinn"
], Kn = new Set(
  "await break case catch class const continue debugger default delete do else enum eval export extends false finally for function if implements import in instanceof interface let new null package private protected public return static super switch this throw true try typeof var void while with yield arguments".split(" ")
), rt = { open: "„", close: "“" }, Ou = [
  rt.open,
  rt.close,
  "«",
  "»",
  "ð",
  "þ",
  "æ",
  "ö",
  "á",
  "é",
  "í",
  "ó",
  "ú",
  "ý"
], qe = (t) => [...t].sort((e, r) => r.length - e.length).map((e) => `caseInsensitive<"${e}">`).join(" | ");
function Lu({
  numberWords: t = Object.keys(Ir),
  scaleAdjectives: e = Object.keys(ht),
  scaleAdverbs: r = Un,
  degreeAdverbs: n = Object.keys(gt),
  signalWords: i = Object.keys(dt),
  keywords: s = Vn
} = {}) {
  return String.raw`
Ristavel {
  // ===== Core sentence skeleton =====
  // Paragraph / sentence / clause / quotation / comment. The four rules the tiers
  // reshape — Clause, word, Sentence, Paragraph — are defined further down next to
  // those tiers; this section holds the parts no tier overrides.
  Text = (space | newline)* Paragraph (paragraphBreak+ Paragraph)* (space | newline)*
  ClauseTail = clauseSeparator Clause

  quotation = openQuote quotedContent closeQuote

  openQuote = "\"" | "„" | "«"
  closeQuote = "\"" | "“" | "»"

  quotedContent = (~("\"" | "„" | "“" | "«" | "»") any)*

  clauseSeparator = punctuationSeparator | dashSeparator | clauseConnector

  // A comma may end its line: a single line break after it reads as a space
  // would (a blank line after it is still a paragraph break, and fails).
  punctuationSeparator = "," (singleLineBreak | space*)

  dashSeparator = space* dash space*
  dash = "—" | "–"

  clauseConnector = space* (caseInsensitive<"og"> | caseInsensitive<"en"> | caseInsensitive<"eða"> | caseInsensitive<"ásamt">) space+

  // Treat newlines explicitly so we can detect paragraph boundaries. The
  // non-breaking and other Unicode Zs spaces count as space; the zero-width space
  // and BOM do not (the editor shows them as markers, so they stay errors).
  space := " " | "\t" | "\r" | "\u00a0" | "\u1680" | "\u2000".."\u200a" | "\u202f" | "\u205f" | "\u3000" | comment
  newline = "\n"
  singleLineBreak = space* newline space*
  paragraphBreak = space* newline space* newline (space* newline)*
  sentenceSep = space+ | singleLineBreak

  // Hyphen-delimited comments — "- like this -" — ignored anywhere (folded into
  // space). The opener is hyphen+space ("- "), which a negative numeral ("-0.5",
  // hyphen+digit) never matches, so comments don't collide with bare numerals.
  // Parentheses are NOT comments: they are reserved for expression parentheticals
  // (the fylgir-expression grouping). The comment body holds no hyphen.
  comment = "-" " " (~"-" any)* "-"

  // ===== Rista-vél tiers: clause alternatives and the rules they add =====
  Clause = Coinage          -- coinage
          | Composition      -- composition
          | TempoClause      -- tempo
          | ArrangeClause    -- arrange
          | MultiAssignment  -- multiassignment
          | Assignment       -- assignment
          | word space* fylgirWord space* ExprArg  -- exprArg
          | additive word space* quotation (space* quotation)*  -- additive
          | imperative word space* quotation (space* quotation)*  -- imperative
          | word space* DegreeArg  -- degree
          | word space* AdjArg  -- adjscale
          | word space* numericArg space* word  -- everyTransform
          | word space* numericArg  -- numarg
          | preposition word space* quotation (space* quotation)*  -- prepphrase
          | negation word space* quotation (space* quotation)*  -- negatedGeneric
          | word space* quotation (space* quotation)*  -- generic
          | word space* word  -- probTransform
          | word  -- nullary

  // Coinage ("languaging"): mint a new Icelandic word for an existing thing.
  //   Merktu „sveifla" sem lfo            -> a FUNCTION (bare target word)
  //   Merktu „trommur" sem hljóð „bd"     -> a SOUND name
  //   Merktu „hé" sem nóta „b"            -> a NOTE pitch-name
  //   Merktu „dúr" sem skali „major"      -> a SCALE name
  // A typed target is a kind keyword + quoted value; a bare word is a function.
  // 'merktu' (mark!) and 'sem' (as) are keywords.
  Coinage = caseInsensitive<"merktu"> space* quotation space* caseInsensitive<"sem"> space* CoinTarget
  CoinTarget = coinKindSound space* quotation   -- sound
             | coinKindNote space* quotation     -- note
             | coinKindScale space* quotation    -- scale
             | word                              -- func
  coinKindSound = caseInsensitive<"hljóð"> ~letter
  coinKindNote = (caseInsensitive<"nóta"> | caseInsensitive<"nótu">) ~letter
  coinKindScale = (caseInsensitive<"skali"> | caseInsensitive<"skala">) ~letter

  // Prepositional noun-phrase clause: a discarded preposition (glue) followed by
  // a dative noun that names the method. e.g. 'með ómi 0.5' -> omur("0.5").
  // The noun goes through normalizeNoun normalization like the generic clause, so
  // the dative 'omi'/'styrk' resolves to the canonical locale key. Tried before
  // the generic alt; non-prepositional clauses fall through unchanged. The
  // preposition 'i' here is harmless: 'i rod'/'i einni lotu' only occur after
  // 'spila' inside a Composition, so there is no collision.
  preposition = (caseInsensitive<"með"> | caseInsensitive<"um"> | caseInsensitive<"á"> | caseInsensitive<"í">) ~letter

  // Bare numeric argument: optional minus, digits, optional decimal part.
  // Emitted as a JS number literal (no quotes, no leading zeros), unlike quoted args.
  // Worded cardinals (einn..tíu with gender variants of 1-4), multiplicatives
  // (tvisvar=2, þrisvar=3), and an "N sinnum" phrase all reduce to the same
  // bare-integer path. TimesPhrase is tried first so a trailing 'sinnum' is
  // consumed rather than left dangling after a bare numeral.
  numericArg = timesPhrase | numeral | numberWord

  // Degree adverb scaling a numeric argument. 'styrkur mjög 0.8' emits a BARE
  // numeric product 'styrkur(0.8 * 1.5)'. The adverb MUST be followed by a
  // numeral (not a quotation): the broken quoted form 'gain("0.8" * 1.5)'
  // evaluates to null, so DegreeArg is constrained to a numeral to guard against
  // it. DegreeArg is a syntactic rule so the inter-token space is auto-skipped.
  degreeAdverb = (${qe(n)}) ~letter
  DegreeArg = degreeAdverb numeral

  // Adjective scaling — "no numbers, just words". A graded Icelandic adjective
  // names an effect amount: 'styrkur stór' -> styrkur(0.75), 'ómur stærstur' ->
  // ómur(1). An optional emphasis adverb nudges it: 'styrkur mjög stór' ->
  // styrkur(0.85). The value table is Tafla 4/5 of the project report. AdjArg is
  // a syntactic rule so the adverb–adjective space is auto-skipped. Adjectives
  // are listed longest-first so the longest surface form wins.
  AdjArg = scaleAdverb? scaleAdjective
  scaleAdverb = (${qe(r)}) ~letter
  scaleAdjective = (${qe(e)}) ~letter

  // "N sinnum": a count (digits or a worded cardinal) followed by 'sinnum'.
  // Lexical (numericArg is lexical), so the inter-token space is explicit.
  timesPhrase = (numeral | numberWord) space+ sinnum

  numeral = "-"? digit+ ("." digit+)?

  // Worded cardinals 1-20. Longer spellings are listed before shorter ones so
  // the longest match wins (e.g. 'tveimur' before 'tveim'). All gender variants
  // of 1-4 are included, the dative of 2-4 ('fjórum sinnum'), plus the
  // multiplicatives tvisvar/þrisvar.
  // ~letter keeps a word that merely starts with one ('sjötta', 'tvöfalda') whole.
  numberWord = (${qe(t)}) ~letter

  sinnum = caseInsensitive<"sinnum"> ~letter

  Assignment = variable spilarWord negation? function quotation

  // Multi-subject assignment: 'Davíð og Ásta spila hljóð «bd»' binds one const per
  // subject to the same call, then the paragraph stack collects them. The plural
  // verb 'spila' (vs singular 'spilar') is the connector. Tried before single
  // Assignment so the 'og' between subjects is read as a subject conjunction
  // rather than a clause connector; SubjectList requires 2+ subjects so a lone
  // subject still falls through to Assignment.
  MultiAssignment = SubjectList spilaWord negation? function quotation
  SubjectList = variable (punctuationSeparator variable)* caseInsensitive<"og"> variable

  // Additive layer: 'Líka hljóð «~ sd»' adds another voice to the running stack
  // without naming a subject. The semantics binds it to an auto-name (lag2, lag3,
  // …) and pushes it so the paragraph stack picks it up.
  additive = (caseInsensitive<"líka"> | caseInsensitive<"einnig">) ~letter space*

  // Imperative command: 'Spilaðu hljóð «bd»' / 'Spilið hljóð «bd»' emit a bare,
  // un-stacked pattern (command mood). The keyword is discarded; the rest is a
  // normal method clause (and may chain via ClauseTail).
  imperative = (caseInsensitive<"spilaðu"> | caseInsensitive<"spilið">) ~letter space*

  Composition = (caseInsensitive<"mynstur"> | caseInsensitive<"mystur">) space* quotation space* spilaWord space* CompositionMode

  variable = ~caseInsensitive<"mynstur"> ~caseInsensitive<"mystur"> ~spilaWord ~spiladuWord ~spilidWord ~ogWord letter+

  // Whole-word lookaheads so a variable that merely starts with these letters is
  // unaffected; here they are exact keywords excluded from being read as a subject
  // name: the plural verb 'spila', the imperative verbs 'spilaðu'/'spilið', and the
  // subject conjunction 'og'. Assignment, MultiAssignment and Composition read
  // their verb through spilarWord/spilaWord, so 'spilar' is never 'spila' plus a
  // function word 'r'.
  spilaWord = caseInsensitive<"spila"> ~letter
  spilarWord = caseInsensitive<"spilar"> ~letter
  spiladuWord = caseInsensitive<"spilaðu"> ~letter
  spilidWord = caseInsensitive<"spilið"> ~letter
  merktuWord = caseInsensitive<"merktu"> ~letter
  semWord = caseInsensitive<"sem"> ~letter
  ogWord = caseInsensitive<"og"> ~letter

  function = letter+

  // Polarity words. 'ekki' negates an assignment (-> hush) or a generic clause
  // (-> gain(0) on a gain control; any other control is left out).
  // 'aldrei'/'ekkert' are stronger: in an assignment they silence
  // the part entirely (-> const x = silence). Labelled alternatives let the
  // semantics branch on which polarity word matched.
  negation = caseInsensitive<"aldrei">  -- aldrei
           | caseInsensitive<"ekkert">  -- ekkert
           | caseInsensitive<"ekki">    -- ekki

  CompositionMode = caseInsensitive<"samtímis">                     -- stack
                  | caseInsensitive<"í"> space* caseInsensitive<"röð">        -- cat
                  | caseInsensitive<"í"> space* caseInsensitive<"einni"> space* caseInsensitive<"lotu">  -- seq
                  | caseInsensitive<"saman">                        -- stacksyn
                  | caseInsensitive<"eða">                          -- randcat
                  | (caseInsensitive<"síðan"> | caseInsensitive<"svo"> | caseInsensitive<"þá">)  -- catsyn

  // Prevent generic clause from treating 'mynstur' as a method name,
  // so that the Composition alternative matches instead. A bare number is an
  // argument, never a method, so it is excluded too (it never starts with a
  // letter anyway, but the lookahead keeps the intent explicit). The silencing
  // polarity words 'aldrei'/'ekkert' are excluded so they are never read as a
  // method word; they are consumed by the negation rule instead. 'ekki' need
  // not be excluded here: in a negated generic clause it is consumed positionally
  // by the negation prefix, never reaching this word rule as a method name.
  word = ~keyword letter+

  // Generated from lexicon.js's KEYWORDS table plus the other generated word-list
  // rules, replacing the hand-listed negative lookaheads above. clauseConnector,
  // numeral and sinnum are folded in as rule references (they already stand for a
  // whole excluded token, same as before); signalWord/degreeAdverb/scaleAdverb/
  // scaleAdjective/numberWord likewise (each carries its own ~letter word-boundary
  // guard, as does sinnum). The discourse/structural KEYWORDS literal group is
  // followed by a single ~letter so a keyword can't be shadowed by a longer real
  // word that merely starts with it (e.g. 'merktu' must not exclude 'merktunni')
  // — matching the *Word helper rules' own guard. This rule replaces those
  // lookaheads only for 'word's purposes; the helper rules stay defined below
  // because other rules (exprKeyword, variable, TempoClause, ArrangeClause,
  // SectionHeader) still reference them directly.
  keyword = clauseConnector | signalWord | degreeAdverb | scaleAdverb | scaleAdjective | numeral | sinnum | numberWord
          | (${qe(s)}) ~letter

  // Whole-word lookaheads (not bare prefixes) so a real method that merely starts
  // with these letters would still match; here they are exact keywords. The
  // discourse keywords (plural verb 'spila', imperatives 'spilaðu'/'spilið',
  // additives 'líka'/'einnig') are excluded so the additive/imperative/multi-
  // assignment alternatives consume them positionally instead.
  aldreiWord = caseInsensitive<"aldrei"> ~letter
  ekkertWord = caseInsensitive<"ekkert"> ~letter
  likaWord = caseInsensitive<"líka"> ~letter
  einnigWord = caseInsensitive<"einnig"> ~letter

  // Expressive terminators: a sentence may end with '.', '?' or '!'.
  // The terminal glyph is consumed exactly like the period and ignored in
  // translation, so the resulting Pattern is byte-identical.
  Sentence = Clause ClauseTail* terminator
  terminator = period | question | exclamation
  period = "."
  question = "?"
  exclamation = "!"

  // ===== Tempo / sections / arrange (song-structure tiers) =================
  // A paragraph may be headed by a section header 'Kaflinn <name>:', which binds
  // the whole paragraph's layer-sentences to 'const <name> = stack(…)'. Kept as
  // an OPTIONAL prefix (not a labelled alternative) so the single Paragraph
  // action keeps one arity; a plain paragraph has an empty header.
  Paragraph = SectionHeader? sentenceSep? Sentence (sentenceSep? Sentence)*

  kaflinnWord = caseInsensitive<"kaflinn"> ~letter
  SectionHeader = kaflinnWord sectionName ":"
  // Section / arrange names may carry trailing digits (build, build2, …),
  // unlike person-name 'variable's.
  sectionName = letter (letter | digit)*

  // Tempo: 'Takturinn er <numeric expression>.' -> setcpm(<expr>).
  takturinnWord = caseInsensitive<"takturinn"> ~letter
  erWord = caseInsensitive<"er"> ~letter
  TempoClause = takturinnWord erWord NumExpr

  // Arrange: 'Raðaðu: N lotur af X, M lotur af Y, …' -> arrange([N,X],[M,Y],…).
  raðaðuWord = caseInsensitive<"raðaðu"> ~letter
  loturWord = (caseInsensitive<"lotur"> | caseInsensitive<"lotu"> | caseInsensitive<"lota">) ~letter
  afWord = caseInsensitive<"af"> ~letter
  ArrangeClause = raðaðuWord ":" ArrangeItem (punctuationSeparator ArrangeItem)*
  ArrangeItem = numLit loturWord afWord ArrangeTarget
  ArrangeTarget = caseInsensitive<"þögn"> ~letter  -- silence
                | sectionName                       -- name

  // ===== Numeric (arithmetic) expressions =================================
  // Words for the four binary operators; 'numLit' is a number with no trailing
  // 'sinnum' (so it never collides with the times-phrase count).
  NumExpr = numLit (ArithOp numLit)*
  numLit = numeral | numberWord
  // The operators are LEXICAL tokens so the word-boundary ~letter binds tightly
  // (in a syntactic rule a space would be auto-skipped before the lookahead).
  ArithOp = divOp  -- div
          | mulOp  -- mul
          | addOp  -- add
          | subOp  -- sub
  divOp = caseInsensitive<"deilt"> space+ caseInsensitive<"með"> ~letter
  mulOp = caseInsensitive<"sinnum"> ~letter
  addOp = caseInsensitive<"plús"> ~letter
  subOp = caseInsensitive<"mínus"> ~letter

  // ===== Signal / value expressions =======================================
  // An expression is a clause-chain whose head is a signal/number/sequence
  // (not a sound). 'fylgir' introduces it; chaining reuses the ordinary
  // separators (comma / og / með / eða). A bare expression runs to the
  // clause/sentence end; a parenthetical (…) bounds one mid-chain (and nests).
  // A parenthetical followed by 'þá' is instead the first term of a sequence.
  fylgirWord = caseInsensitive<"fylgir"> ~letter
  thenWord = caseInsensitive<"þá"> ~letter
  vogWord = caseInsensitive<"vog"> ~letter
  aWord = caseInsensitive<"á"> ~letter
  velurWord = caseInsensitive<"velur"> ~letter
  urWord = caseInsensitive<"úr"> ~letter
  signalWord = (${qe(i)}) ~letter

  ExprArg = "(" Expr ")" ~thenWord  -- paren
          | Expr                    -- bare
  Expr = Seq ExprMethod*
  // A þá-separated sequence -> cat(…); if any term is weighted (vog W á V),
  // the whole sequence -> timecat([W,V], …).
  Seq = SeqTerm (thenWord SeqTerm)*
  SeqTerm = vogWord numLit aWord Term  -- weighted
          | Term                        -- plain
  Term = "(" Expr ")"                                              -- group
       | ExprValue velurWord urWord ExprValue (edaConn ExprValue)*  -- pick
       | ExprValue                                                 -- value
  ExprValue = signalWord  -- signal
            | quotation   -- str
            | numLit      -- num
  ExprMethod = exprSep exprMethodWord ExprArgs?
  ExprArgs = numLit (ogConn numLit)*  -- numeric
           | quotation                 -- quoted
  exprSep = punctuationSeparator | dashSeparator | ogConn | meðConn | edaConn
  ogConn = space* caseInsensitive<"og"> space+
  meðConn = space* caseInsensitive<"með"> space+
  edaConn = space* caseInsensitive<"eða"> space+
  exprMethodWord = ~exprKeyword ~clauseConnector letter+
  exprKeyword = fylgirWord | thenWord | vogWord | aWord | velurWord | urWord | signalWord
}
`;
}
const Gu = Lu(), ye = Du(Gu).Ristavel, Ru = "is", Pu = { family: "FiraGO", css: "https://cdn.jsdelivr.net/npm/@fontsource/firago/index.css" }, Mu = { lpf: ["lágtíðnihleypir", "lth"], hpf: ["hátíðnihleypir", "hth", "háttíðnihleypir"], accelerate: ["hröðun", "inngjöf"], adsr: ["umslag"], always: "alltaf", amp: "mögnun", arp: ["runa", "röð"], attack: "svörun", bank: "banki", begin: "byrja", cat: ["samanlíming", "samsetning", "strengjalíming", "strengjasamsetning", "líming", "Lím"], chop: ["höggva"], choose: ["velja"], color: "litur", compress: "þjappa", compressor: "þjappari", cpm: ["hringrásarhraði", "hrh", "hringirámínútu", "hám"], crush: ["kremja", "mylja", "kreista", "milja"], clip: ["klemma"], cut: ["klippa", "saxa"], cutoff: ["afskurður"], delay: ["endurkast", "endurvarp"], djf: ["djsía"], end: ["endir"], distort: ["bjaga", "bjögun"], echo: ["endurómun", "ómun"], echoWith: ["ómunMeð", "ómaMeð"], every: "hvert", expand: "útvíkka", extend: "framlengja", fast: ["fljótt", "hratt", "hraðar", "snöggt"], fastChunk: "hraðBiti", fastGap: "hraðBil", filter: "sía", filterValues: "síuGildi", filterWhen: "síaÞegar", floor: "gólf", freq: "tíðni", gain: ["hljóðstyrkur", "styrkur", "læti", "hávaði"], hurry: ["drífaSig", "hraðaÁsér", "flýtaSér"], hush: ["uss", "suss", "þögn"], mask: ["gríma"], note: ["nótur", "nóta"], orbit: ["braut"], pan: ["staðsetning", "staður"], range: ["bil", "svið"], room: ["rými", "ómur"], scale: "skali", scramble: ["rugla", "hræra"], setcpm: ["setjaHringrásarhraða", "setjaHrh", "setjaHringirámínútu", "setjaHám"], slow: "hægt", slowcat: ["hæglíming", "hægsetning", "hægLím"], sometimes: ["stundum"], sometimesBy: ["stundumUm"], sound: "hljóð", speed: "hraði", spread: "dreifa", squiz: ["kreista"], stack: ["bunki", "stafli"], striate: ["ráka", "rispa", "strífa"], struct: ["uppbygging", "strúktúr"], sustain: "viðhalda", take: "taka", velocity: "hraði", vowel: ["sérhljóðar", "sérhljóði"], when: "þegar", whenKey: "þegarLykill", zoom: "stækka" }, qu = { red: "rauður", green: "grænn", blue: "blár", yellow: "gulur", cyan: "blágrænn", magenta: "fjólublár", black: "svartur", white: "hvítur", gray: "grár", orange: "appelsínugulur", purple: "fjólublár", pink: "bleikur", brown: "brúnn" }, Wu = { botn: 50, efriBotn: 120, neðriMiðja: 300, miðja: 1e3, efriMiðja: 2e3, neðriToppur: 5e3, toppur: 1e4, efriToppur: 16e3 }, Uu = { bd: ["bt", "bassatromma"], sd: ["st", "sneriltromma", "snerill"], cp: ["kp", "klapp", "handaklapp"], cr: ["mg", "málmgjall"], sh: ["hr", "hrista"], cb: ["kb", "kúabjalla"], tb: "tambúrína", bongo: "bongótromma", conga: "kongatromma", timpani: ["pákur", "páka"], triangles: "þríhorn", glockenspiel: "klukkuspil", gm_xylophone: "sílófónn", vibraphone: "víbrafónn", tubularbells: "pípuklukkur", sleighbells: "sleðabjöllur", anvil: "steðji", piano: ["píanó", "slagharpa"], steinway: "flygill", gm_epiano1: "rafpíanó", gm_church_organ: ["orgel", "kirkjuorgel"], pipeorgan_loud: "pípuorgel", gm_drawbar_organ: "rafmagnsorgel", gm_harpsichord: "semball", gm_celesta: "selesta", gm_music_box: "spiladós", gm_accordion: ["harmonikka", "harmóníka", "dragspil"], harmonica: "munnharpa", harp: "harpa", gm_acoustic_guitar_nylon: "gítar", gm_acoustic_guitar_steel: "kassagítar", gm_electric_guitar_clean: ["rafgítar", "rafmagnsgítar"], gm_acoustic_bass: "bassi", gm_electric_bass_finger: "rafbassi", gm_contrabass: "kontrabassi", gm_violin: "fiðla", gm_viola: ["víóla", "lágfiðla"], gm_cello: ["selló", "knéfiðla"], gm_string_ensemble_1: "strengjasveit", gm_flute: ["flauta", "þverflauta"], gm_recorder: "blokkflauta", gm_pan_flute: "panflauta", gm_clarinet: "klarínetta", gm_oboe: "óbó", gm_bassoon: "fagott", sax: "saxófónn", gm_bagpipe: "sekkjapípa", gm_trumpet: "trompet", gm_trombone: "básúna", gm_french_horn: "horn", gm_tuba: "túba", gm_choir_aahs: "kór", gm_voice_oohs: "rödd", sine: "sínus", sawtooth: ["sög", "sagtönn"], square: ["kassi", "ferningur"], triangle: ["þríhyrningur", "þríhyrnd"], white: "suð", crackle: "brak", wind: "vindur", crow: "kráka", insect: "skordýr", metal: "málmur", space: "geimur", siren: "sírena", wineglass: "vínglas", gm_bird_tweet: "fuglasöngur", gm_seashore: "brim", gm_applause: "lófaklapp", gm_helicopter: "þyrla", gm_telephone: "sími", gm_gunshot: "byssuskot", gm_breath_noise: "andardráttur" }, Vu = { b: "h", bb: "b", "c#": "cis", "d#": "dis", "e#": "eis", "f#": "fis", "g#": "gis", "a#": "ais", "b#": "his", cb: "ces", db: "des", eb: "es", fb: "fes", gb: "ges", ab: "as" }, Ku = { major: "dúr", minor: "moll" }, He = {
  locale: Ru,
  font: Pu,
  functions: Mu,
  colors: qu,
  constants: Wu,
  sounds: Uu,
  notes: Vu,
  scales: Ku
}, _r = new Set(
  Object.values(He.functions || {}).flatMap((t) => Array.isArray(t) ? t : [t]).filter(Boolean)
), vt = /* @__PURE__ */ new Set([...Object.keys(He.functions || {}), "s"]), Hu = /* @__PURE__ */ new Set(["gain", ...He.functions.gain]), nn = (t) => t.charAt(0).toLowerCase() + t.slice(1), kt = (t, e) => {
  const r = t.toLowerCase();
  return r !== e.toLowerCase() && et.get(r) !== e;
}, Hn = new Set([..._r].filter((t) => !/[A-Z]/.test(t)));
function Se() {
  const t = new Set(Hn);
  let e = null;
  const r = (T) => T && typeof T.queryArc == "function" ? T.firstCycleValues : [T], n = /* @__PURE__ */ new Map();
  function i(T, w) {
    for (const S of (Array.isArray(T) ? T : [T]).flatMap(r))
      S && typeof S == "string" && (t.add(S), w && n.set(S, w), e = null);
  }
  const s = [
    "arinsins",
    "arinnar",
    "afirnar",
    "aganirnar",
    "aðanirnar",
    "urinn",
    "arins",
    "arnir",
    "irnir",
    "urnar",
    "irnar",
    "arnar",
    "ananna",
    "nanna",
    "janna",
    "anna",
    "jana",
    "ana",
    "anirnar",
    "anir",
    "afir",
    "aðir",
    "agana",
    "unum",
    "unni",
    "unnar",
    "innar",
    "nnar",
    "inni",
    "inum",
    "jnum",
    "junum",
    "jum",
    "inu",
    "ina",
    "una",
    "anum",
    "ins",
    "sins",
    "ans",
    "num",
    "ann",
    "inn",
    "in",
    "ið",
    "um",
    "ar",
    "ir",
    "ur",
    "na",
    "nn",
    "an",
    "ja",
    "a",
    "i",
    "s",
    "u",
    "n",
    "ð",
    "m",
    "r",
    ""
  ], l = {
    banki: ["bönk"],
    endurómun: ["enduróm"],
    hraði: ["hröð"],
    hávaði: ["hávöð"],
    inngjöf: ["inngjaf"],
    læti: ["lát"],
    mögnun: ["magn"],
    röð: ["rað"],
    skali: ["sköl"],
    stafli: ["stöfl"],
    staður: ["stöð"],
    svörun: ["svar"],
    taka: ["tök"],
    umslag: ["umslög"],
    þjappa: ["þjöpp"],
    þögn: ["þagn"]
  }, c = {
    bjagana: "bjögun",
    bjagananna: "bjögun",
    bjaganir: "bjögun",
    bjaganirnar: "bjögun",
    hraðananna: "hröðun",
    hraðanir: "hröðun",
    hraðanirnar: "hröðun",
    rýmis: "rými",
    rýmisins: "rými",
    ómananna: "ómun",
    ómanir: "ómun",
    ómanirnar: "ómun",
    þjöppurum: "þjappari",
    þjöppurunum: "þjappari"
  }, g = (T) => {
    for (const w of ["ur", "i", "a"])
      if (T.endsWith(w) && T.length - w.length >= 2) return T.slice(0, -w.length);
    return T;
  }, d = /[aeiouyáéíóúýæö][^aeiouyáéíóúýæö]+[iu][ln]$/, F = (T) => {
    const w = [g(T)];
    if (T.endsWith("ir") && T.length >= 5 && w.push(T.slice(0, -2), T.slice(0, -1)), /(ll|nn)$/.test(T) && T.length >= 4) {
      const S = T.slice(0, -1);
      w.push(S), d.test(S) && w.push(S.slice(0, -2) + S.slice(-1));
    }
    return w;
  }, h = (T) => Object.entries(l).flatMap(([w, S]) => T === w ? S : T.endsWith(w) && T.length - w.length >= 2 ? S.map((M) => T.slice(0, -w.length) + M) : []), p = () => {
    const T = /* @__PURE__ */ new Map();
    for (const w of t) {
      const [S, ...M] = [...F(w), ...h(w)];
      T.has(S) || T.set(S, { key: w, bare: !/[ia]$/.test(w) });
      for (const K of M) T.has(K) || T.set(K, { key: w, bare: !0 });
    }
    return T;
  }, v = (T, w) => {
    if (Object.prototype.hasOwnProperty.call(c, T)) return c[T];
    if (t.has(T) && !w?.has(T)) return T;
    e || (e = p());
    let S = null;
    for (const M of s) {
      if (!T.endsWith(M)) continue;
      const K = M ? T.slice(0, -M.length) : T;
      if (K.length < 2) continue;
      const le = e.get(K);
      !le || w?.has(le.key) || !M && !le.bare || (!S || K.length > S.len) && (S = { key: le.key, len: K.length });
    }
    return S ? S.key : T;
  }, I = (T, w) => t.has(T) && !w?.has(T) || _r.has(T) || vt.has(T) || v(T, w) !== T;
  return { normalizeNoun: v, resolveName: (T, w) => {
    for (const S of /* @__PURE__ */ new Set([T, nn(T), T.toLowerCase()])) {
      if (I(S, w)) return v(S, w);
      if (et.has(S)) return et.get(S);
    }
    return T === T.toUpperCase() ? T.toLowerCase() : nn(T);
  }, registerVocabulary: i, vocabulary: t, aliases: n };
}
function zu(t, e) {
  function r() {
    this.constructor = t;
  }
  r.prototype = e.prototype, t.prototype = new r();
}
function ze(t, e, r, n) {
  var i = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(i, ze.prototype), i.expected = e, i.found = r, i.location = n, i.name = "SyntaxError", i;
}
zu(ze, Error);
function Pr(t, e, r) {
  return r = r || " ", t.length > e ? t : (e -= t.length, r += r.repeat(e), t + r.slice(0, e));
}
ze.prototype.format = function(t) {
  var e = "Error: " + this.message;
  if (this.location) {
    var r = null, n;
    for (n = 0; n < t.length; n++)
      if (t[n].source === this.location.source) {
        r = t[n].text.split(/\r\n|\n|\r/g);
        break;
      }
    var i = this.location.start, s = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, l = this.location.source + ":" + s.line + ":" + s.column;
    if (r) {
      var c = this.location.end, g = Pr("", s.line.toString().length, " "), d = r[i.line - 1], F = i.line === c.line ? c.column : d.length + 1, h = F - i.column || 1;
      e += `
 --> ` + l + `
` + g + ` |
` + s.line + " | " + d + `
` + g + " | " + Pr("", i.column - 1, " ") + Pr("", h, "^");
    } else
      e += `
 at ` + l;
  }
  return e;
};
ze.buildMessage = function(t, e) {
  var r = {
    literal: function(d) {
      return '"' + i(d.text) + '"';
    },
    class: function(d) {
      var F = d.parts.map(function(h) {
        return Array.isArray(h) ? s(h[0]) + "-" + s(h[1]) : s(h);
      });
      return "[" + (d.inverted ? "^" : "") + F.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(d) {
      return d.description;
    }
  };
  function n(d) {
    return d.charCodeAt(0).toString(16).toUpperCase();
  }
  function i(d) {
    return d.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + n(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + n(F);
    });
  }
  function s(d) {
    return d.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(F) {
      return "\\x0" + n(F);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(F) {
      return "\\x" + n(F);
    });
  }
  function l(d) {
    return r[d.type](d);
  }
  function c(d) {
    var F = d.map(l), h, p;
    if (F.sort(), F.length > 0) {
      for (h = 1, p = 1; h < F.length; h++)
        F[h - 1] !== F[h] && (F[p] = F[h], p++);
      F.length = p;
    }
    switch (F.length) {
      case 1:
        return F[0];
      case 2:
        return F[0] + " or " + F[1];
      default:
        return F.slice(0, -1).join(", ") + ", or " + F[F.length - 1];
    }
  }
  function g(d) {
    return d ? '"' + i(d) + '"' : "end of input";
  }
  return "Expected " + c(t) + " but " + g(e) + " found.";
};
function Ju(t, e) {
  e = e !== void 0 ? e : {};
  var r = {}, n = e.grammarSource, i = { start: Dt }, s = Dt, l = ".", c = "-", g = "0", d = ",", F = "|", h = "[", p = "]", v = "{", I = "}", L = "%", T = "<", w = ">", S = "!", M = "(", K = ")", le = "/", Qe = "*", sr = "?", ur = ":", Ye = "..", jr = "^", Sr = "struct", m = "target", b = "euclid", E = "slow", y = "rotL", A = "rotR", _ = "fast", x = "scale", G = "//", R = "cat", W = "$", z = "setcps", ke = "setbpm", B = "hush", J = /^[1-9]/, we = /^[eE]/, Be = /^[+\-]/, pa = /^[0-9]/, yt = /^[ \n\r\t\xA0]/, da = /^["']/, ga = /^[#\--.0-9A-Z\^-_a-z~\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376-\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0900-\u0963\u0971-\u0980\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u09FC\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0-\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60-\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0-\u0CE1\u0CF1-\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E46\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065-\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE-\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5-\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD-\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, ha = /^[@_]/, At = /^[^\n]/, va = xr("number"), It = P(".", !1), ka = be([["1", "9"]], !1, !1), ba = be(["e", "E"], !1, !1), Fa = be(["+", "-"], !1, !1), Ea = P("-", !1), Ta = P("0", !1), ya = be([["0", "9"]], !1, !1), Aa = xr("whitespace"), _t = be([" ", `
`, "\r", "	", " "], !1, !1), Ia = P(",", !1), _a = P("|", !1), wa = be(['"', "'"], !1, !1), Ca = xr('a letter, a combining mark, a number, "-", "#", ".", "^", "_"'), ja = be(["#", ["-", "."], ["0", "9"], ["A", "Z"], ["^", "_"], ["a", "z"], "~", "ª", "µ", "º", ["À", "Ö"], ["Ø", "ö"], ["ø", "ˁ"], ["ˆ", "ˑ"], ["ˠ", "ˤ"], "ˬ", "ˮ", ["Ͱ", "ʹ"], ["Ͷ", "ͷ"], ["ͺ", "ͽ"], "Ϳ", "Ά", ["Έ", "Ί"], "Ό", ["Ύ", "Ρ"], ["Σ", "ϵ"], ["Ϸ", "ҁ"], ["Ҋ", "ԯ"], ["Ա", "Ֆ"], "ՙ", ["ՠ", "ֈ"], ["א", "ת"], ["ׯ", "ײ"], ["ؠ", "ي"], ["ٮ", "ٯ"], ["ٱ", "ۓ"], "ە", ["ۥ", "ۦ"], ["ۮ", "ۯ"], ["ۺ", "ۼ"], "ۿ", "ܐ", ["ܒ", "ܯ"], ["ݍ", "ޥ"], "ޱ", ["ߊ", "ߵ"], "ߺ", ["ࠀ", "ࠕ"], "ࠚ", "ࠤ", "ࠨ", ["ࡀ", "ࡘ"], ["ࡠ", "ࡪ"], ["ࢠ", "ࢴ"], ["ࢶ", "ࢽ"], ["ऀ", "ॣ"], ["ॱ", "ঀ"], ["অ", "ঌ"], ["এ", "ঐ"], ["ও", "ন"], ["প", "র"], "ল", ["শ", "হ"], "ঽ", "ৎ", ["ড়", "ঢ়"], ["য়", "ৡ"], ["ৰ", "ৱ"], "ৼ", ["ਅ", "ਊ"], ["ਏ", "ਐ"], ["ਓ", "ਨ"], ["ਪ", "ਰ"], ["ਲ", "ਲ਼"], ["ਵ", "ਸ਼"], ["ਸ", "ਹ"], ["ਖ਼", "ੜ"], "ਫ਼", ["ੲ", "ੴ"], ["અ", "ઍ"], ["એ", "ઑ"], ["ઓ", "ન"], ["પ", "ર"], ["લ", "ળ"], ["વ", "હ"], "ઽ", "ૐ", ["ૠ", "ૡ"], "ૹ", ["ଅ", "ଌ"], ["ଏ", "ଐ"], ["ଓ", "ନ"], ["ପ", "ର"], ["ଲ", "ଳ"], ["ଵ", "ହ"], "ଽ", ["ଡ଼", "ଢ଼"], ["ୟ", "ୡ"], "ୱ", "ஃ", ["அ", "ஊ"], ["எ", "ஐ"], ["ஒ", "க"], ["ங", "ச"], "ஜ", ["ஞ", "ட"], ["ண", "த"], ["ந", "ப"], ["ம", "ஹ"], "ௐ", ["అ", "ఌ"], ["ఎ", "ఐ"], ["ఒ", "న"], ["ప", "హ"], "ఽ", ["ౘ", "ౚ"], ["ౠ", "ౡ"], "ಀ", ["ಅ", "ಌ"], ["ಎ", "ಐ"], ["ಒ", "ನ"], ["ಪ", "ಳ"], ["ವ", "ಹ"], "ಽ", "ೞ", ["ೠ", "ೡ"], ["ೱ", "ೲ"], ["അ", "ഌ"], ["എ", "ഐ"], ["ഒ", "ഺ"], "ഽ", "ൎ", ["ൔ", "ൖ"], ["ൟ", "ൡ"], ["ൺ", "ൿ"], ["අ", "ඖ"], ["ක", "න"], ["ඳ", "ර"], "ල", ["ව", "ෆ"], ["ก", "ะ"], ["า", "ำ"], ["เ", "ๆ"], ["ກ", "ຂ"], "ຄ", ["ງ", "ຈ"], "ຊ", "ຍ", ["ດ", "ທ"], ["ນ", "ຟ"], ["ມ", "ຣ"], "ລ", "ວ", ["ສ", "ຫ"], ["ອ", "ະ"], ["າ", "ຳ"], "ຽ", ["ເ", "ໄ"], "ໆ", ["ໜ", "ໟ"], "ༀ", ["ཀ", "ཇ"], ["ཉ", "ཬ"], ["ྈ", "ྌ"], ["က", "ဪ"], "ဿ", ["ၐ", "ၕ"], ["ၚ", "ၝ"], "ၡ", ["ၥ", "ၦ"], ["ၮ", "ၰ"], ["ၵ", "ႁ"], "ႎ", ["Ⴀ", "Ⴥ"], "Ⴧ", "Ⴭ", ["ა", "ჺ"], ["ჼ", "ቈ"], ["ቊ", "ቍ"], ["ቐ", "ቖ"], "ቘ", ["ቚ", "ቝ"], ["በ", "ኈ"], ["ኊ", "ኍ"], ["ነ", "ኰ"], ["ኲ", "ኵ"], ["ኸ", "ኾ"], "ዀ", ["ዂ", "ዅ"], ["ወ", "ዖ"], ["ዘ", "ጐ"], ["ጒ", "ጕ"], ["ጘ", "ፚ"], ["ᎀ", "ᎏ"], ["Ꭰ", "Ᏽ"], ["ᏸ", "ᏽ"], ["ᐁ", "ᙬ"], ["ᙯ", "ᙿ"], ["ᚁ", "ᚚ"], ["ᚠ", "ᛪ"], ["ᛮ", "ᛸ"], ["ᜀ", "ᜌ"], ["ᜎ", "ᜑ"], ["ᜠ", "ᜱ"], ["ᝀ", "ᝑ"], ["ᝠ", "ᝬ"], ["ᝮ", "ᝰ"], ["ក", "ឳ"], "ៗ", "ៜ", ["ᠠ", "ᡸ"], ["ᢀ", "ᢄ"], ["ᢇ", "ᢨ"], "ᢪ", ["ᢰ", "ᣵ"], ["ᤀ", "ᤞ"], ["ᥐ", "ᥭ"], ["ᥰ", "ᥴ"], ["ᦀ", "ᦫ"], ["ᦰ", "ᧉ"], ["ᨀ", "ᨖ"], ["ᨠ", "ᩔ"], "ᪧ", ["ᬅ", "ᬳ"], ["ᭅ", "ᭋ"], ["ᮃ", "ᮠ"], ["ᮮ", "ᮯ"], ["ᮺ", "ᯥ"], ["ᰀ", "ᰣ"], ["ᱍ", "ᱏ"], ["ᱚ", "ᱽ"], ["ᲀ", "ᲈ"], ["Ა", "Ჺ"], ["Ჽ", "Ჿ"], ["ᳩ", "ᳬ"], ["ᳮ", "ᳱ"], ["ᳵ", "ᳶ"], ["ᴀ", "ᶿ"], ["Ḁ", "ἕ"], ["Ἐ", "Ἕ"], ["ἠ", "ὅ"], ["Ὀ", "Ὅ"], ["ὐ", "ὗ"], "Ὑ", "Ὓ", "Ὕ", ["Ὗ", "ώ"], ["ᾀ", "ᾴ"], ["ᾶ", "ᾼ"], "ι", ["ῂ", "ῄ"], ["ῆ", "ῌ"], ["ῐ", "ΐ"], ["ῖ", "Ί"], ["ῠ", "Ῥ"], ["ῲ", "ῴ"], ["ῶ", "ῼ"], "ⁱ", "ⁿ", ["ₐ", "ₜ"], "ℂ", "ℇ", ["ℊ", "ℓ"], "ℕ", ["ℙ", "ℝ"], "ℤ", "Ω", "ℨ", ["K", "ℭ"], ["ℯ", "ℹ"], ["ℼ", "ℿ"], ["ⅅ", "ⅉ"], "ⅎ", ["Ⅰ", "ↈ"], ["Ⰰ", "Ⱞ"], ["ⰰ", "ⱞ"], ["Ⱡ", "ⳤ"], ["Ⳬ", "ⳮ"], ["Ⳳ", "ⳳ"], ["ⴀ", "ⴥ"], "ⴧ", "ⴭ", ["ⴰ", "ⵧ"], "ⵯ", ["ⶀ", "ⶖ"], ["ⶠ", "ⶦ"], ["ⶨ", "ⶮ"], ["ⶰ", "ⶶ"], ["ⶸ", "ⶾ"], ["ⷀ", "ⷆ"], ["ⷈ", "ⷎ"], ["ⷐ", "ⷖ"], ["ⷘ", "ⷞ"], "ⸯ", ["々", "〇"], ["〡", "〩"], ["〱", "〵"], ["〸", "〼"], ["ぁ", "ゖ"], ["ゝ", "ゟ"], ["ァ", "ヺ"], ["ー", "ヿ"], ["ㄅ", "ㄯ"], ["ㄱ", "ㆎ"], ["ㆠ", "ㆺ"], ["ㇰ", "ㇿ"], ["㐀", "䶵"], ["一", "鿯"], ["ꀀ", "ꒌ"], ["ꓐ", "ꓽ"], ["ꔀ", "ꘌ"], ["ꘐ", "ꘟ"], ["ꘪ", "ꘫ"], ["Ꙁ", "ꙮ"], ["ꙿ", "ꚝ"], ["ꚠ", "ꛯ"], ["ꜗ", "ꜟ"], ["Ꜣ", "ꞈ"], ["Ꞌ", "ꞹ"], ["ꟷ", "ꠁ"], ["ꠃ", "ꠅ"], ["ꠇ", "ꠊ"], ["ꠌ", "ꠢ"], ["ꡀ", "ꡳ"], ["ꢂ", "ꢳ"], ["ꣲ", "ꣷ"], "ꣻ", ["ꣽ", "ꣾ"], ["ꤊ", "ꤥ"], ["ꤰ", "ꥆ"], ["ꥠ", "ꥼ"], ["ꦄ", "ꦲ"], "ꧏ", ["ꧠ", "ꧤ"], ["ꧦ", "ꧯ"], ["ꧺ", "ꧾ"], ["ꨀ", "ꨨ"], ["ꩀ", "ꩂ"], ["ꩄ", "ꩋ"], ["ꩠ", "ꩶ"], "ꩺ", ["ꩾ", "ꪯ"], "ꪱ", ["ꪵ", "ꪶ"], ["ꪹ", "ꪽ"], "ꫀ", "ꫂ", ["ꫛ", "ꫝ"], ["ꫠ", "ꫪ"], ["ꫲ", "ꫴ"], ["ꬁ", "ꬆ"], ["ꬉ", "ꬎ"], ["ꬑ", "ꬖ"], ["ꬠ", "ꬦ"], ["ꬨ", "ꬮ"], ["ꬰ", "ꭚ"], ["ꭜ", "ꭥ"], ["ꭰ", "ꯢ"], ["가", "힣"], ["ힰ", "ퟆ"], ["ퟋ", "ퟻ"], ["豈", "舘"], ["並", "龎"], ["ﬀ", "ﬆ"], ["ﬓ", "ﬗ"], "יִ", ["ײַ", "ﬨ"], ["שׁ", "זּ"], ["טּ", "לּ"], "מּ", ["נּ", "סּ"], ["ףּ", "פּ"], ["צּ", "ﮱ"], ["ﯓ", "ﴽ"], ["ﵐ", "ﶏ"], ["ﶒ", "ﷇ"], ["ﷰ", "ﷻ"], ["ﹰ", "ﹴ"], ["ﹶ", "ﻼ"], ["Ａ", "Ｚ"], ["ａ", "ｚ"], ["ｦ", "ﾾ"], ["ￂ", "ￇ"], ["ￊ", "ￏ"], ["ￒ", "ￗ"], ["ￚ", "ￜ"]], !1, !1), wt = P("[", !1), Ct = P("]", !1), Sa = P("{", !1), xa = P("}", !1), Na = P("%", !1), Da = P("<", !1), Ba = P(">", !1), $a = be(["@", "_"], !1, !1), Oa = P("!", !1), La = P("(", !1), Ga = P(")", !1), Ra = P("/", !1), Pa = P("*", !1), Ma = P("?", !1), qa = P(":", !1), Wa = P("..", !1), Ua = P("^", !1), Va = P("struct", !1), Ka = P("target", !1), Ha = P("euclid", !1), za = P("slow", !1), Ja = P("rotL", !1), Qa = P("rotR", !1), Ya = P("fast", !1), Xa = P("scale", !1), Za = P("//", !1), jt = be([`
`], !0, !1), ei = P("cat", !1), ri = P("$", !1), ti = P("setcps", !1), ni = P("setbpm", !1), ai = P("hush", !1), ii = function() {
    return parseFloat(Ui());
  }, si = function(a) {
    const u = a.join("");
    return u === "." || u === "_";
  }, ui = function(a) {
    return new Ds(a.join(""));
  }, oi = function(a) {
    return a;
  }, fi = function(a, u) {
    return a.arguments_.stepsPerCycle = u, a;
  }, li = function(a) {
    return a;
  }, mi = function(a) {
    return a.arguments_.alignment = "polymeter_slowcat", a;
  }, ci = function(a) {
    return (u) => u.options_.weight = (u.options_.weight ?? 1) + (a ?? 2) - 1;
  }, pi = function(a) {
    return (u) => {
      const f = (u.options_.reps ?? 1) + (a ?? 2) - 1;
      u.options_.reps = f, u.options_.ops = u.options_.ops.filter((k) => k.type_ !== "replicate"), u.options_.ops.push({ type_: "replicate", arguments_: { amount: f } }), u.options_.weight = f;
    };
  }, di = function(a, u, f) {
    return (k) => k.options_.ops.push({ type_: "bjorklund", arguments_: { pulse: a, step: u, rotation: f } });
  }, gi = function(a) {
    return (u) => u.options_.ops.push({ type_: "stretch", arguments_: { amount: a, type: "slow" } });
  }, hi = function(a) {
    return (u) => u.options_.ops.push({ type_: "stretch", arguments_: { amount: a, type: "fast" } });
  }, vi = function(a) {
    return (u) => u.options_.ops.push({ type_: "degradeBy", arguments_: { amount: a, seed: $r++ } });
  }, ki = function(a) {
    return (u) => u.options_.ops.push({ type_: "tail", arguments_: { element: a } });
  }, bi = function(a) {
    return (u) => u.options_.ops.push({ type_: "range", arguments_: { element: a } });
  }, Fi = function(a, u) {
    const f = new $s(a, { ops: [], weight: 1, reps: 1 });
    for (const k of u)
      k(f);
    return f;
  }, Ei = function(a, u) {
    return new mr(u, "fastcat", void 0, !!a);
  }, Ti = function(a) {
    return { alignment: "stack", list: a };
  }, yi = function(a) {
    return { alignment: "rand", list: a, seed: $r++ };
  }, Ai = function(a) {
    return { alignment: "feet", list: a, seed: $r++ };
  }, Ii = function(a, u) {
    return u && u.list.length > 0 ? new mr([a, ...u.list], u.alignment, u.seed) : a;
  }, _i = function(a, u) {
    return new mr(u ? [a, ...u.list] : [a], "polymeter");
  }, wi = function(a) {
    return a;
  }, Ci = function(a) {
    return { name: "struct", args: { mini: a } };
  }, ji = function(a) {
    return { name: "target", args: { name: a } };
  }, Si = function(a, u, f) {
    return { name: "bjorklund", args: { pulse: a, step: parseInt(u) } };
  }, xi = function(a) {
    return { name: "stretch", args: { amount: a } };
  }, Ni = function(a) {
    return { name: "shift", args: { amount: "-" + a } };
  }, Di = function(a) {
    return { name: "shift", args: { amount: a } };
  }, Bi = function(a) {
    return { name: "stretch", args: { amount: "1/" + a } };
  }, $i = function(a) {
    return { name: "scale", args: { scale: a.join("") } };
  }, St = function(a, u) {
    return u;
  }, Oi = function(a, u) {
    return u.unshift(a), new mr(u, "slowcat");
  }, Li = function(a) {
    return a;
  }, Gi = function(a, u) {
    return new Bs(a.name, a.args, u);
  }, Ri = function(a) {
    return a;
  }, Pi = function(a) {
    return a;
  }, Mi = function(a) {
    return new Br("setcps", { value: a });
  }, qi = function(a) {
    return new Br("setcps", { value: a / 120 / 2 });
  }, Wi = function() {
    return new Br("hush");
  }, o = e.peg$currPos | 0, $ = o, $e = [{ line: 1, column: 1 }], de = o, or = e.peg$maxFailExpected || [], C = e.peg$silentFails | 0, Xe;
  if (e.startRule) {
    if (!(e.startRule in i))
      throw new Error(`Can't start parsing from rule "` + e.startRule + '".');
    s = i[e.startRule];
  }
  function Ui() {
    return t.substring($, o);
  }
  function xt() {
    return Nr($, o);
  }
  function P(a, u) {
    return { type: "literal", text: a, ignoreCase: u };
  }
  function be(a, u, f) {
    return { type: "class", parts: a, inverted: u, ignoreCase: f };
  }
  function Vi() {
    return { type: "end" };
  }
  function xr(a) {
    return { type: "other", description: a };
  }
  function Nt(a) {
    var u = $e[a], f;
    if (u)
      return u;
    if (a >= $e.length)
      f = $e.length - 1;
    else
      for (f = a; !$e[--f]; )
        ;
    for (u = $e[f], u = {
      line: u.line,
      column: u.column
    }; f < a; )
      t.charCodeAt(f) === 10 ? (u.line++, u.column = 1) : u.column++, f++;
    return $e[a] = u, u;
  }
  function Nr(a, u, f) {
    var k = Nt(a), j = Nt(u), U = {
      source: n,
      start: {
        offset: a,
        line: k.line,
        column: k.column
      },
      end: {
        offset: u,
        line: j.line,
        column: j.column
      }
    };
    return U;
  }
  function N(a) {
    o < de || (o > de && (de = o, or = []), or.push(a));
  }
  function Ki(a, u, f) {
    return new ze(
      ze.buildMessage(a, u),
      a,
      u,
      f
    );
  }
  function Dt() {
    var a;
    return a = Ns(), a;
  }
  function Fe() {
    var a, u;
    return C++, a = o, Xi(), u = fr(), u !== r ? (Yi(), Qi(), $ = a, a = ii()) : (o = a, a = r), C--, a === r && C === 0 && N(va), a;
  }
  function Hi() {
    var a;
    return t.charCodeAt(o) === 46 ? (a = l, o++) : (a = r, C === 0 && N(It)), a;
  }
  function zi() {
    var a;
    return a = t.charAt(o), J.test(a) ? o++ : (a = r, C === 0 && N(ka)), a;
  }
  function Ji() {
    var a;
    return a = t.charAt(o), we.test(a) ? o++ : (a = r, C === 0 && N(ba)), a;
  }
  function Qi() {
    var a, u, f, k, j;
    if (a = o, u = Ji(), u !== r) {
      if (f = t.charAt(o), Be.test(f) ? o++ : (f = r, C === 0 && N(Fa)), f === r && (f = null), k = [], j = Oe(), j !== r)
        for (; j !== r; )
          k.push(j), j = Oe();
      else
        k = r;
      k !== r ? (u = [u, f, k], a = u) : (o = a, a = r);
    } else
      o = a, a = r;
    return a;
  }
  function Yi() {
    var a, u, f, k;
    if (a = o, u = Hi(), u !== r) {
      if (f = [], k = Oe(), k !== r)
        for (; k !== r; )
          f.push(k), k = Oe();
      else
        f = r;
      f !== r ? (u = [u, f], a = u) : (o = a, a = r);
    } else
      o = a, a = r;
    return a;
  }
  function fr() {
    var a, u, f, k;
    if (a = Zi(), a === r)
      if (a = o, u = zi(), u !== r) {
        for (f = [], k = Oe(); k !== r; )
          f.push(k), k = Oe();
        u = [u, f], a = u;
      } else
        o = a, a = r;
    return a;
  }
  function Xi() {
    var a;
    return t.charCodeAt(o) === 45 ? (a = c, o++) : (a = r, C === 0 && N(Ea)), a;
  }
  function Zi() {
    var a;
    return t.charCodeAt(o) === 48 ? (a = g, o++) : (a = r, C === 0 && N(Ta)), a;
  }
  function Oe() {
    var a;
    return a = t.charAt(o), pa.test(a) ? o++ : (a = r, C === 0 && N(ya)), a;
  }
  function D() {
    var a, u;
    for (C++, a = [], u = t.charAt(o), yt.test(u) ? o++ : (u = r, C === 0 && N(_t)); u !== r; )
      a.push(u), u = t.charAt(o), yt.test(u) ? o++ : (u = r, C === 0 && N(_t));
    return C--, u = r, C === 0 && N(Aa), a;
  }
  function Le() {
    var a, u, f, k;
    return a = o, u = D(), t.charCodeAt(o) === 44 ? (f = d, o++) : (f = r, C === 0 && N(Ia)), f !== r ? (k = D(), u = [u, f, k], a = u) : (o = a, a = r), a;
  }
  function Bt() {
    var a, u, f, k;
    return a = o, u = D(), t.charCodeAt(o) === 124 ? (f = F, o++) : (f = r, C === 0 && N(_a)), f !== r ? (k = D(), u = [u, f, k], a = u) : (o = a, a = r), a;
  }
  function $t() {
    var a, u, f, k;
    return a = o, u = D(), t.charCodeAt(o) === 46 ? (f = l, o++) : (f = r, C === 0 && N(It)), f !== r ? (k = D(), u = [u, f, k], a = u) : (o = a, a = r), a;
  }
  function Ge() {
    var a;
    return a = t.charAt(o), da.test(a) ? o++ : (a = r, C === 0 && N(wa)), a;
  }
  function lr() {
    var a;
    return C++, a = t.charAt(o), ga.test(a) ? o++ : (a = r, C === 0 && N(ja)), C--, a === r && C === 0 && N(Ca), a;
  }
  function Ot() {
    var a, u, f, k;
    if (a = o, D(), u = [], f = lr(), f !== r)
      for (; f !== r; )
        u.push(f), f = lr();
    else
      u = r;
    return u !== r ? (f = D(), $ = o, k = si(u), k ? k = r : k = void 0, k !== r ? ($ = a, a = ui(u)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function es() {
    var a, u, f, k;
    return a = o, D(), t.charCodeAt(o) === 91 ? (u = h, o++) : (u = r, C === 0 && N(wt)), u !== r ? (D(), f = Rt(), f !== r ? (D(), t.charCodeAt(o) === 93 ? (k = p, o++) : (k = r, C === 0 && N(Ct)), k !== r ? (D(), $ = a, a = oi(f)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function rs() {
    var a, u, f, k, j;
    return a = o, D(), t.charCodeAt(o) === 123 ? (u = v, o++) : (u = r, C === 0 && N(Sa)), u !== r ? (D(), f = Pt(), f !== r ? (D(), t.charCodeAt(o) === 125 ? (k = I, o++) : (k = r, C === 0 && N(xa)), k !== r ? (j = ts(), j === r && (j = null), D(), $ = a, a = fi(f, j)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function ts() {
    var a, u, f;
    return a = o, t.charCodeAt(o) === 37 ? (u = L, o++) : (u = r, C === 0 && N(Na)), u !== r ? (f = Re(), f !== r ? ($ = a, a = li(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function ns() {
    var a, u, f, k;
    return a = o, D(), t.charCodeAt(o) === 60 ? (u = T, o++) : (u = r, C === 0 && N(Da)), u !== r ? (D(), f = Pt(), f !== r ? (D(), t.charCodeAt(o) === 62 ? (k = w, o++) : (k = r, C === 0 && N(Ba)), k !== r ? (D(), $ = a, a = mi(f)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function Re() {
    var a;
    return a = Ot(), a === r && (a = es(), a === r && (a = rs(), a === r && (a = ns()))), a;
  }
  function Lt() {
    var a;
    return a = as(), a === r && (a = ss(), a === r && (a = us(), a === r && (a = os(), a === r && (a = is(), a === r && (a = fs(), a === r && (a = ls(), a === r && (a = ms()))))))), a;
  }
  function as() {
    var a, u, f;
    return a = o, D(), u = t.charAt(o), ha.test(u) ? o++ : (u = r, C === 0 && N($a)), u !== r ? (f = Fe(), f === r && (f = null), $ = a, a = ci(f)) : (o = a, a = r), a;
  }
  function is() {
    var a, u, f;
    return a = o, D(), t.charCodeAt(o) === 33 ? (u = S, o++) : (u = r, C === 0 && N(Oa)), u !== r ? (f = Fe(), f === r && (f = null), $ = a, a = pi(f)) : (o = a, a = r), a;
  }
  function ss() {
    var a, u, f, k, j, U, ge;
    return a = o, t.charCodeAt(o) === 40 ? (u = M, o++) : (u = r, C === 0 && N(La)), u !== r ? (D(), f = Ze(), f !== r ? (D(), k = Le(), k !== r ? (D(), j = Ze(), j !== r ? (D(), Le(), D(), U = Ze(), U === r && (U = null), D(), t.charCodeAt(o) === 41 ? (ge = K, o++) : (ge = r, C === 0 && N(Ga)), ge !== r ? ($ = a, a = di(f, j, U)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function us() {
    var a, u, f;
    return a = o, t.charCodeAt(o) === 47 ? (u = le, o++) : (u = r, C === 0 && N(Ra)), u !== r ? (f = Re(), f !== r ? ($ = a, a = gi(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function os() {
    var a, u, f;
    return a = o, t.charCodeAt(o) === 42 ? (u = Qe, o++) : (u = r, C === 0 && N(Pa)), u !== r ? (f = Re(), f !== r ? ($ = a, a = hi(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function fs() {
    var a, u, f;
    return a = o, t.charCodeAt(o) === 63 ? (u = sr, o++) : (u = r, C === 0 && N(Ma)), u !== r ? (f = Fe(), f === r && (f = null), $ = a, a = vi(f)) : (o = a, a = r), a;
  }
  function ls() {
    var a, u, f;
    return a = o, t.charCodeAt(o) === 58 ? (u = ur, o++) : (u = r, C === 0 && N(qa)), u !== r ? (f = Re(), f !== r ? ($ = a, a = ki(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function ms() {
    var a, u, f;
    return a = o, t.substr(o, 2) === Ye ? (u = Ye, o += 2) : (u = r, C === 0 && N(Wa)), u !== r ? (f = Re(), f !== r ? ($ = a, a = bi(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function Ze() {
    var a, u, f, k;
    if (a = o, u = Re(), u !== r) {
      for (f = [], k = Lt(); k !== r; )
        f.push(k), k = Lt();
      $ = a, a = Fi(u, f);
    } else
      o = a, a = r;
    return a;
  }
  function Te() {
    var a, u, f, k;
    if (a = o, t.charCodeAt(o) === 94 ? (u = jr, o++) : (u = r, C === 0 && N(Ua)), u === r && (u = null), f = [], k = Ze(), k !== r)
      for (; k !== r; )
        f.push(k), k = Ze();
    else
      f = r;
    return f !== r ? ($ = a, a = Ei(u, f)) : (o = a, a = r), a;
  }
  function Gt() {
    var a, u, f, k, j;
    if (a = o, u = [], f = o, k = Le(), k !== r ? (j = Te(), j !== r ? f = j : (o = f, f = r)) : (o = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = o, k = Le(), k !== r ? (j = Te(), j !== r ? f = j : (o = f, f = r)) : (o = f, f = r);
    else
      u = r;
    return u !== r && ($ = a, u = Ti(u)), a = u, a;
  }
  function cs() {
    var a, u, f, k, j;
    if (a = o, u = [], f = o, k = Bt(), k !== r ? (j = Te(), j !== r ? f = j : (o = f, f = r)) : (o = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = o, k = Bt(), k !== r ? (j = Te(), j !== r ? f = j : (o = f, f = r)) : (o = f, f = r);
    else
      u = r;
    return u !== r && ($ = a, u = yi(u)), a = u, a;
  }
  function ps() {
    var a, u, f, k, j;
    if (a = o, u = [], f = o, k = $t(), k !== r ? (j = Te(), j !== r ? f = j : (o = f, f = r)) : (o = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = o, k = $t(), k !== r ? (j = Te(), j !== r ? f = j : (o = f, f = r)) : (o = f, f = r);
    else
      u = r;
    return u !== r && ($ = a, u = Ai(u)), a = u, a;
  }
  function Rt() {
    var a, u, f;
    return a = o, u = Te(), u !== r ? (f = Gt(), f === r && (f = cs(), f === r && (f = ps())), f === r && (f = null), $ = a, a = Ii(u, f)) : (o = a, a = r), a;
  }
  function Pt() {
    var a, u, f;
    return a = o, u = Te(), u !== r ? (f = Gt(), f === r && (f = null), $ = a, a = _i(u, f)) : (o = a, a = r), a;
  }
  function ds() {
    var a, u, f, k;
    return a = o, D(), u = Ge(), u !== r ? (D(), f = Rt(), f !== r ? (D(), k = Ge(), k !== r ? ($ = a, a = wi(f)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function gs() {
    var a;
    return a = ys(), a === r && (a = bs(), a === r && (a = Ts(), a === r && (a = vs(), a === r && (a = ks(), a === r && (a = hs(), a === r && (a = Es(), a === r && (a = Fs()))))))), a;
  }
  function hs() {
    var a, u, f;
    return a = o, t.substr(o, 6) === Sr ? (u = Sr, o += 6) : (u = r, C === 0 && N(Va)), u !== r ? (D(), f = Pe(), f !== r ? ($ = a, a = Ci(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function vs() {
    var a, u, f, k, j;
    return a = o, t.substr(o, 6) === m ? (u = m, o += 6) : (u = r, C === 0 && N(Ka)), u !== r ? (D(), f = Ge(), f !== r ? (k = Ot(), k !== r ? (j = Ge(), j !== r ? ($ = a, a = ji(k)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function ks() {
    var a, u, f, k;
    return a = o, t.substr(o, 6) === b ? (u = b, o += 6) : (u = r, C === 0 && N(Ha)), u !== r ? (D(), f = fr(), f !== r ? (D(), k = fr(), k !== r ? (D(), fr(), $ = a, a = Si(f, k)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function bs() {
    var a, u, f;
    return a = o, t.substr(o, 4) === E ? (u = E, o += 4) : (u = r, C === 0 && N(za)), u !== r ? (D(), f = Fe(), f !== r ? ($ = a, a = xi(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function Fs() {
    var a, u, f;
    return a = o, t.substr(o, 4) === y ? (u = y, o += 4) : (u = r, C === 0 && N(Ja)), u !== r ? (D(), f = Fe(), f !== r ? ($ = a, a = Ni(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function Es() {
    var a, u, f;
    return a = o, t.substr(o, 4) === A ? (u = A, o += 4) : (u = r, C === 0 && N(Qa)), u !== r ? (D(), f = Fe(), f !== r ? ($ = a, a = Di(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function Ts() {
    var a, u, f;
    return a = o, t.substr(o, 4) === _ ? (u = _, o += 4) : (u = r, C === 0 && N(Ya)), u !== r ? (D(), f = Fe(), f !== r ? ($ = a, a = Bi(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function ys() {
    var a, u, f, k, j;
    if (a = o, t.substr(o, 5) === x ? (u = x, o += 5) : (u = r, C === 0 && N(Xa)), u !== r)
      if (D(), f = Ge(), f !== r) {
        if (k = [], j = lr(), j !== r)
          for (; j !== r; )
            k.push(j), j = lr();
        else
          k = r;
        k !== r ? (j = Ge(), j !== r ? ($ = a, a = $i(k)) : (o = a, a = r)) : (o = a, a = r);
      } else
        o = a, a = r;
    else
      o = a, a = r;
    return a;
  }
  function Dr() {
    var a, u, f, k;
    if (a = o, t.substr(o, 2) === G ? (u = G, o += 2) : (u = r, C === 0 && N(Za)), u !== r) {
      for (f = [], k = t.charAt(o), At.test(k) ? o++ : (k = r, C === 0 && N(jt)); k !== r; )
        f.push(k), k = t.charAt(o), At.test(k) ? o++ : (k = r, C === 0 && N(jt));
      u = [u, f], a = u;
    } else
      o = a, a = r;
    return a;
  }
  function As() {
    var a, u, f, k, j, U, ge, Me;
    if (a = o, t.substr(o, 3) === R ? (u = R, o += 3) : (u = r, C === 0 && N(ei)), u !== r)
      if (D(), t.charCodeAt(o) === 91 ? (f = h, o++) : (f = r, C === 0 && N(wt)), f !== r)
        if (D(), k = Pe(), k !== r) {
          for (j = [], U = o, ge = Le(), ge !== r ? (Me = Pe(), Me !== r ? ($ = U, U = St(k, Me)) : (o = U, U = r)) : (o = U, U = r); U !== r; )
            j.push(U), U = o, ge = Le(), ge !== r ? (Me = Pe(), Me !== r ? ($ = U, U = St(k, Me)) : (o = U, U = r)) : (o = U, U = r);
          U = D(), t.charCodeAt(o) === 93 ? (ge = p, o++) : (ge = r, C === 0 && N(Ct)), ge !== r ? ($ = a, a = Oi(k, j)) : (o = a, a = r);
        } else
          o = a, a = r;
      else
        o = a, a = r;
    else
      o = a, a = r;
    return a;
  }
  function Is() {
    var a;
    return a = As(), a === r && (a = ds()), a;
  }
  function Pe() {
    var a, u, f, k, j;
    if (a = o, u = Is(), u !== r) {
      for (D(), f = [], k = Dr(); k !== r; )
        f.push(k), k = Dr();
      $ = a, a = Li(u);
    } else
      o = a, a = r;
    return a === r && (a = o, u = gs(), u !== r ? (D(), t.charCodeAt(o) === 36 ? (f = W, o++) : (f = r, C === 0 && N(ri)), f !== r ? (k = D(), j = Pe(), j !== r ? ($ = a, a = Gi(u, j)) : (o = a, a = r)) : (o = a, a = r)) : (o = a, a = r)), a;
  }
  function _s() {
    var a, u;
    return a = o, u = Pe(), u !== r && ($ = a, u = Ri(u)), a = u, a === r && (a = Dr()), a;
  }
  function ws() {
    var a;
    return a = _s(), a;
  }
  function Cs() {
    var a, u;
    return a = o, D(), u = js(), u === r && (u = Ss(), u === r && (u = xs())), u !== r ? (D(), $ = a, a = Pi(u)) : (o = a, a = r), a;
  }
  function js() {
    var a, u, f;
    return a = o, t.substr(o, 6) === z ? (u = z, o += 6) : (u = r, C === 0 && N(ti)), u !== r ? (D(), f = Fe(), f !== r ? ($ = a, a = Mi(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function Ss() {
    var a, u, f;
    return a = o, t.substr(o, 6) === ke ? (u = ke, o += 6) : (u = r, C === 0 && N(ni)), u !== r ? (D(), f = Fe(), f !== r ? ($ = a, a = qi(f)) : (o = a, a = r)) : (o = a, a = r), a;
  }
  function xs() {
    var a, u;
    return a = o, t.substr(o, 4) === B ? (u = B, o += 4) : (u = r, C === 0 && N(ai)), u !== r && ($ = a, u = Wi()), a = u, a;
  }
  function Ns() {
    var a;
    return a = ws(), a === r && (a = Cs()), a;
  }
  var Ds = function(a) {
    this.type_ = "atom", this.source_ = a, this.location_ = xt();
  }, mr = function(a, u, f, k) {
    this.type_ = "pattern", this.arguments_ = { alignment: u, _steps: k }, f !== void 0 && (this.arguments_.seed = f), this.source_ = a;
  }, Bs = function(a, u, f) {
    this.type_ = a, this.arguments_ = u, this.source_ = f;
  }, $s = function(a, u) {
    this.type_ = "element", this.source_ = a, this.options_ = u, this.location_ = xt();
  }, Br = function(a, u) {
    this.type_ = "command", this.name_ = a, this.options_ = u;
  }, $r = 0;
  if (Xe = s(), e.peg$library)
    return (
      /** @type {any} */
      {
        peg$result: Xe,
        peg$currPos: o,
        peg$FAILED: r,
        peg$maxFailExpected: or,
        peg$maxFailPos: de
      }
    );
  if (Xe !== r && o === t.length)
    return Xe;
  throw Xe !== r && o < t.length && N(Vi()), Ki(
    or,
    de < t.length ? t.charAt(de) : null,
    de < t.length ? Nr(de, de + 1) : Nr(de, de)
  );
}
let br = !1;
function Qu(t) {
  const e = br;
  return br = !!t, e;
}
let Fr = 0;
function Yu(t) {
  Fr = Number.isFinite(t) ? t : 0;
}
function an(t) {
  return "'" + String(t).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n").replace(/\r/g, "\\r") + "'";
}
function Xu(t, e) {
  if (!br) return JSON.stringify(t);
  if (typeof e != "number") return `m(${an(t)}, -1)`;
  const r = Fr + e;
  return `m(${an(t)}, ${r})`;
}
function tt(t, e, r) {
  if (!br || typeof e != "number" || typeof r != "number")
    return t;
  const n = Fr + e, i = Fr + r;
  return `lo(${t}, ${n}, ${i})`;
}
function Zu(t, e = 0) {
  const r = [], n = (i) => {
    switch (i.type_) {
      case "pattern":
        i.source_.forEach(n);
        for (const s of i.source_)
          for (const { type_: l, arguments_: c } of s.options_?.ops ?? [])
            l === "stretch" && n(c.amount), l === "bjorklund" && [c.pulse, c.step, c.rotation].filter(Boolean).forEach(n), (l === "tail" || l === "range") && n(c.element);
        i.arguments_.stepsPerCycle && n(i.arguments_.stepsPerCycle);
        return;
      case "element":
        n(i.source_);
        return;
      case "atom": {
        const { start: s, end: l } = i.location_, c = t.slice(s.offset, l.offset), g = c.length - c.trimStart().length, d = c.length - c.trimEnd().length;
        r.push([e + s.offset + g, e + l.offset - d]);
      }
    }
  };
  return n(Ju(t)), r;
}
function eo(t, e = 0) {
  const r = [], n = (p) => {
    p.loc && r.push(...Zu(`"${p.value}"`, e + p.loc.start));
  }, i = (p) => {
    p.loc && r.push([e + p.loc.start, e + p.loc.end]);
  }, s = (p) => {
    switch (p.type) {
      case "scale":
      case "degree":
        i(p);
        return;
      case "name":
        return;
      default:
        d(p);
    }
  }, l = (p, v) => {
    for (const I of v) s(I);
  }, c = (p) => {
    s(p.first);
    for (const v of p.rest) s(v.value);
  }, g = (p) => {
    p.type !== "negatedControl" && l(p.name, p.args);
  }, d = (p) => {
    switch (p.type) {
      case "patternCall":
        l(p.head, p.args);
        for (const v of p.chain) g(v);
        return;
      case "mini":
        n(p);
        return;
      case "number":
        i(p);
        return;
      case "silence":
      case "ref":
      case "signal":
        return;
      case "stack":
      case "cat":
      case "seq":
      case "randcat":
        for (const v of p.items) d(v);
        return;
      case "chain":
        d(p.head);
        for (const v of p.methods) g(v);
        return;
      case "sequence":
        for (const v of p.items)
          v.weight && s(v.weight), d(v.value);
        return;
      case "pick":
        d(p.from);
        for (const v of p.options) d(v);
        return;
      case "tempo":
        c(p.expr);
        return;
      case "arrange":
        for (const v of p.items)
          s(v.count), d(v.target);
        return;
      default:
        return;
    }
  }, F = (p) => {
    switch (p.type) {
      case "output":
        d(p.value);
        return;
      case "binding":
        d(p.value);
        for (const v of p.hushChain || []) g(v);
        return;
      case "section":
        for (const v of p.body) d(v);
        return;
      default:
        return;
    }
  }, { body: h } = t;
  if (h.length > 0 && h[0].type === "paragraphGroup")
    for (const p of h) for (const v of p.body) F(v);
  else
    for (const p of h) F(p);
  return r;
}
function he(t, e) {
  switch (t.type) {
    case "patternCall":
      return uo(t, e);
    case "silence":
      return "silence";
    case "ref":
      return t.name;
    case "stack":
    case "cat":
    case "seq":
    case "randcat":
      return oo(t, e);
    case "mini":
      return Xu(t.value, t.loc && t.loc.start);
    case "number":
      return tt(t.value, t.loc && t.loc.start, t.loc && t.loc.end);
    case "signal":
      return t.value;
    case "chain":
      return no(t, e);
    case "sequence":
      return ro(t, e);
    case "pick":
      return to(t, e);
    case "tempo":
      return `setcpm(${ao(t.expr, e)})`;
    case "arrange":
      return so(t, e);
    case "coinage":
      return Zn(t, e);
    default:
      throw new Error(`lowerIr: don't know how to lower a value node of type '${t.type}'`);
  }
}
function ar(t, e) {
  switch (t.type) {
    case "scale":
      return tt(String(t.value), t.loc && t.loc.start, t.loc && t.loc.end);
    case "degree":
      return tt(`${t.value} * ${t.factor}`, t.loc && t.loc.start, t.loc && t.loc.end);
    case "name":
      return t.canonical;
    default:
      return he(t, e);
  }
}
function ro(t, e) {
  return t.items.some((n) => n.weight !== null) ? `timecat(${t.items.map(
    (i) => `[${i.weight !== null ? ar(i.weight, e) : "1"}, ${he(i.value, e)}]`
  ).join(", ")})` : `cat(${t.items.map((n) => he(n.value, e)).join(", ")})`;
}
const zn = (t) => t.type === "number" || t.type === "chain" && t.methods.length === 0 && zn(t.head);
function Jn(t, e) {
  const r = he(t, e);
  return zn(t) ? `pure(${r})` : r;
}
function to(t, e) {
  const r = t.options.map((n) => he(n, e)).join(", ");
  return `${Jn(t.from, e)}.pick([${r}])`;
}
const wr = (t, e) => Hu.has(e.controlOf(e.resolveName(t.name.surface)));
function Cr(t, e) {
  return t.type === "negatedControl" ? wr(t, e) ? ".gain(0)" : "" : `.${Yn(t.name, t.args, e)}`;
}
function Qn(t, e, r) {
  const n = (l) => l.map((c) => Cr(c, r)).join("");
  if (wr(t, r)) return `gain(0)${n(e)}`;
  const [i, ...s] = e;
  return i ? i.type === "negatedControl" ? Qn(i, s, r) : `${Xn(i.name, i.args, r)}${n(s)}` : "silence";
}
function no(t, e) {
  if (t.head.type === "negatedControl") return Qn(t.head, t.methods, e);
  const r = t.methods.length ? Jn(t.head, e) : he(t.head, e), n = t.methods.map((i) => Cr(i, e));
  return [r, ...n].join("");
}
function ao(t, e) {
  let r = ar(t.first, e);
  for (const { op: n, value: i } of t.rest) r += ` ${n} ${ar(i, e)}`;
  return r;
}
function io(t, e) {
  return `[${ar(t.count, e)}, ${he(t.target, e)}]`;
}
function so(t, e) {
  return `arrange(${t.items.map((r) => io(r, e)).join(", ")})`;
}
function Yn(t, e, r) {
  return `${r.resolveName(t.surface)}(${e.map((i) => ar(i, r)).join(", ")})`;
}
function Xn(t, e, r) {
  if (Kn.has(r.resolveName(t.surface)))
    throw new Error(`„${t.surface}“ er frátekið orð í JavaScript og getur ekki verið nafn.`);
  return Yn(t, e, r);
}
function uo(t, e) {
  const r = Xn(t.head, t.args, e), n = t.chain.map((i) => Cr(i, e));
  return [r, ...n].join("");
}
function oo(t, e) {
  return `${t.type}(${t.items.map((r) => he(r, e)).join(",")})`;
}
function fo(t, e) {
  const r = `const ${t.name.canonical} = ${he(t.value, e)}`;
  if (!t.hush) return r;
  const n = (t.hushChain || []).map((i) => Cr(i, e)).join("");
  return `${r}.hush()${n}`;
}
function lo(t, e) {
  return `const ${t.name.canonical} = stack(${t.body.map((r) => he(r, e)).join(", ")})`;
}
function Zn(t, e) {
  const { coined: r, target: n } = t, i = n.kind === "func" ? e.resolveName(n.value) : null;
  if (n.kind === "func" && e.registerVocabulary(r, e.controlOf(i)), e.localeApi) {
    const { aliasFuncs: s, aliasSounds: l, aliasNotes: c, aliasScales: g, resolveNoteName: d } = e.localeApi;
    try {
      n.kind === "sound" ? l(n.value, r) : n.kind === "note" ? c(n.value.replace(/^\p{L}+/u, (F) => d(F)), r) : n.kind === "scale" ? g(n.value, r) : s(i, r);
    } catch {
    }
  }
  return "silence";
}
function ea(t, e) {
  switch (t.type) {
    case "output":
      return he(t.value, e);
    case "binding":
      return fo(t, e);
    case "section":
      return lo(t, e);
    case "coinage":
      return Zn(t, e);
    default:
      throw new Error(`lowerIr: don't know how to lower a top-level node of type '${t.type}'`);
  }
}
function mo(t, e) {
  return t.body.map((r) => ea(r, e)).join("; ");
}
function ra(t) {
  const e = /* @__PURE__ */ new Set(), r = (n) => {
    if (Array.isArray(n)) {
      n.forEach(r);
      return;
    }
    n === null || typeof n != "object" || (n.type === "coinage" && n.target.kind === "func" && !Hn.has(n.coined) && e.add(n.coined), Object.values(n).forEach(r));
  };
  return r(t), e;
}
function ta(t, e) {
  const { resolveName: r, registerVocabulary: n, aliases: i } = e, s = ra(t);
  return {
    resolveName: (l) => r(l, s),
    // The control a resolved word names: the one its coinage aliased, else
    // the word itself.
    controlOf: (l) => s.has(l) ? l : i.get(l) ?? l,
    registerVocabulary: (l, c) => {
      n(l, c), s.delete(l);
    }
  };
}
function na(t, e = null, r = null) {
  if (!t || t.type !== "program")
    throw new Error(`lowerIr: expected a 'program' node, got '${t && t.type}'`);
  const n = { ...ta(t, r || Se()), localeApi: e }, { body: i } = t;
  return i.length > 0 && i[0].type === "paragraphGroup" ? i.map((s) => mo(s, n)).join(`

`) : i.map((s) => ea(s, n)).join("; ");
}
const co = ["alltaf", "bjaga", "byrja", "djsía", "fljótt", "framlengja", "hratt", "hraðar", "hraðaÁsér", "hrh", "hringirámínútu", "hth", "hvert", "hám", "háttíðnihleypir", "hægt", "höggva", "lth", "milja", "mylja", "nótur", "rugla", "ráka", "saxa", "snöggt", "stundum", "stækka", "sérhljóðar", "síaÞegar", "uss", "velja", "viðhalda", "útvíkka", "þegar"], po = { endurómana: ["endurómun", "endurómur"], endurómunum: ["endurómun", "endurómur"], hraðana: ["hraði", "hröðun"], hraðar: ["hraðar", "hraði"], hröðunum: ["hraði", "hröðun"], mögnunum: ["magn", "mögnun"], nótan: ["nóta", "nótur"], nótna: ["nóta", "nótur"], nótnanna: ["nóta", "nótur"], nótu: ["nóta", "nótur"], nótum: ["nóta", "nótur"], nótuna: ["nóta", "nótur"], nótunnar: ["nóta", "nótur"], nótunni: ["nóta", "nótur"], nótunum: ["nóta", "nótur"], nótur: ["nóta", "nótur"], nóturnar: ["nóta", "nótur"], svörunum: ["svar", "svörun"], sérhljóðar: ["sérhljóðar", "sérhljóði"], ómana: ["ómun", "ómur"], ómunum: ["ómun", "ómur"] }, go = /* @__PURE__ */ JSON.parse('{"afskurður":{"ofl":"kk","forms":[{"form":"afskurðar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"afskurðarins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"afskurða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"afskurðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"afskurður","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"afskurðurinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"afskurðir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"afskurðirnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"afskurð","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"afskurðinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"afskurði","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"afskurðina","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"afskurði","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"afskurðinum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"afskurðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"afskurðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"banki":{"ofl":"kk","forms":[{"form":"banka","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"bankans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"banka","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"bankanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"banki","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"bankinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"bankar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"bankarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"banka","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"bankann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"banka","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"bankana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"banka","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"bankanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"bönkum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"bönkunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"bil":{"ofl":"hk","forms":[{"form":"bils","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"bilsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"bila","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"bilanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"bil","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"bilið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"bil","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"bilin","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"bil","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"bilið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"bil","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"bilin","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"bili","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"bilinu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"bilum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"bilunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"bjögun":{"ofl":"kvk","forms":[{"form":"bjögunar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"bjögunarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"bjagana","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"bjagananna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"bjögun","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"bjögunin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"bjaganir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"bjaganirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"bjögun","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"bjögunina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"bjaganir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"bjaganirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"bjögun","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"bjöguninni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"bjögunum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"bjögununum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"braut":{"ofl":"kvk","forms":[{"form":"brautar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"brautarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"brauta","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"brautanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"braut","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"brautin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"brautir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"brautirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"braut","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"brautu","mark":"ÞFET2","case":"þf","number":"et","definite":false,"variant":2},{"form":"brautina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"brautir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"brautirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"braut","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"brautu","mark":"ÞGFET2","case":"þgf","number":"et","definite":false,"variant":2},{"form":"brautinni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"brautum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"brautunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"bunki":{"ofl":"kk","forms":[{"form":"bunka","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"bunkans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"bunka","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"bunkanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"bunki","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"bunkinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"bunkar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"bunkarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"bunka","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"bunkann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"bunka","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"bunkana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"bunka","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"bunkanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"bunkum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"bunkunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"dreifa":{"ofl":"kvk","forms":[{"form":"dreifu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"dreifunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"dreifa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"dreifanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"dreifa","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"dreifan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"dreifur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"dreifurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"dreifu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"dreifuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"dreifur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"dreifurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"dreifu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"dreifunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"dreifum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"dreifunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"endir":{"ofl":"kk","forms":[{"form":"endis","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"endisins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"enda","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"endanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"endir","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"endirinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"endar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"endarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"endi","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"endinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"endirinn","mark":"ÞFETgr2","case":"þf","number":"et","definite":true,"variant":2},{"form":"enda","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"endana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"endi","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"endinum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"endum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"endunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"endurkast":{"ofl":"hk","forms":[{"form":"endurkasts","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"endurkastsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"endurkast","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"endurkastið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"endurkast","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"endurkastið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"endurkasti","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"endurkastinu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1}]},"endurvarp":{"ofl":"hk","forms":[{"form":"endurvarps","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"endurvarpsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"endurvarp","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"endurvarpið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"endurvarp","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"endurvarpið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"endurvarpi","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"endurvarpinu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1}]},"endurómun":{"ofl":"kvk","forms":[{"form":"endurómunar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"endurómunarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"endurómana","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"endurómananna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"endurómun","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"endurómunin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"endurómanir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"endurómanirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"endurómun","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"endurómunina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"endurómanir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"endurómanirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"endurómun","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"endurómuninni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"endurómunum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"endurómununum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"gríma":{"ofl":"kvk","forms":[{"form":"grímu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"grímunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"grímna","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"gríma","mark":"EFFT2","case":"ef","number":"ft","definite":false,"variant":2},{"form":"grímnanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"grímanna","mark":"EFFTgr2","case":"ef","number":"ft","definite":true,"variant":2},{"form":"gríma","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"gríman","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"grímur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"grímurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"grímu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"grímuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"grímur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"grímurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"grímu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"grímunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"grímum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"grímunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"gólf":{"ofl":"hk","forms":[{"form":"gólfs","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"gólfsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"gólfa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"gólfanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"gólf","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"gólfið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"gólf","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"gólfin","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"gólf","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"gólfið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"gólf","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"gólfin","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"gólfi","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"gólfinu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"gólfum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"gólfunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hljóð":{"ofl":"hk","forms":[{"form":"hljóðs","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hljóðsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hljóða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hljóðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hljóð","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hljóðið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hljóð","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hljóðin","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hljóð","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hljóðið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hljóð","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hljóðin","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hljóði","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hljóðinu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hljóðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hljóðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hljóðstyrkur":{"ofl":"kk","forms":[{"form":"hljóðstyrks","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hljóðstyrksins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hljóðstyrkja","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hljóðstyrkjanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hljóðstyrkur","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hljóðstyrkurinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hljóðstyrkir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hljóðstyrkirnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hljóðstyrk","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hljóðstyrkinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hljóðstyrki","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hljóðstyrkina","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hljóðstyrk","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hljóðstyrknum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hljóðstyrkjum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hljóðstyrkjunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hraði":{"ofl":"kk","forms":[{"form":"hraða","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hraðans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hraða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hraðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hraði","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hraðinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hraðar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hraðarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hraða","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hraðann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hraða","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hraðana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hraða","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hraðanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hröðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hröðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hringrásarhraði":{"ofl":"kk","forms":[{"form":"hringrásarhraða","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hringrásarhraðans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hringrásarhraða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hringrásarhraðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hringrásarhraði","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hringrásarhraðinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hringrásarhraðar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hringrásarhraðarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hringrásarhraða","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hringrásarhraðann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hringrásarhraða","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hringrásarhraðana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hringrásarhraða","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hringrásarhraðanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hringrásarhröðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hringrásarhröðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hræra":{"ofl":"kvk","forms":[{"form":"hræru","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hrærunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hræra","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hræranna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hræra","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hræran","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hrærur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hrærurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hræru","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hræruna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hrærur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hrærurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hræru","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hrærunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hrærum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hrærunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hröðun":{"ofl":"kvk","forms":[{"form":"hröðunar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hröðunarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hraðana","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hraðananna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hröðun","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hröðunin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hraðanir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hraðanirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hröðun","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hröðunina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hraðanir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hraðanirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hröðun","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hröðuninni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hröðunum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hröðununum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hátíðnihleypir":{"ofl":"kk","forms":[{"form":"hátíðnihleypis","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hátíðnihleypisins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hátíðnihleypir","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hátíðnihleypirinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hátíðnihleypi","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hátíðnihleypinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hátíðnihleypi","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hátíðnihleypinum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1}]},"hávaði":{"ofl":"kk","forms":[{"form":"hávaða","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hávaðans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hávaða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hávaðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hávaði","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hávaðinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hávaðar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hávaðarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hávaða","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hávaðann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hávaða","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hávaðana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hávaða","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hávaðanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hávöðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hávöðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hæglíming":{"ofl":"kvk","forms":[{"form":"hæglímingar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hæglímingarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hæglíminga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hæglíminganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hæglíming","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hæglímingin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hæglímingar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hæglímingarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hæglímingu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hæglíminguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hæglímingar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hæglímingarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hæglímingu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hæglímingunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hæglímingum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hæglímingunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"hægsetning":{"ofl":"kvk","forms":[{"form":"hægsetningar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"hægsetningarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"hægsetninga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"hægsetninganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"hægsetning","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"hægsetningin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"hægsetningar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"hægsetningarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"hægsetningu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"hægsetninguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"hægsetningar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"hægsetningarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"hægsetningu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"hægsetningunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"hægsetningum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"hægsetningunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"inngjöf":{"ofl":"kvk","forms":[{"form":"inngjafar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"inngjafarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"inngjafa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"inngjafanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"inngjöf","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"inngjöfin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"inngjafir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"inngjafirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"inngjöf","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"inngjöfina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"inngjafir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"inngjafirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"inngjöf","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"inngjöfinni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"inngjöfum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"inngjöfunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"klemma":{"ofl":"kvk","forms":[{"form":"klemmu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"klemmunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"klemma","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"klemmanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"klemma","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"klemman","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"klemmur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"klemmurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"klemmu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"klemmuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"klemmur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"klemmurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"klemmu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"klemmunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"klemmum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"klemmunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"klippa":{"ofl":"kvk","forms":[{"form":"klippu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"klippunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"klippa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"klippna","mark":"EFFT2","case":"ef","number":"ft","definite":false,"variant":2},{"form":"klippanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"klippnanna","mark":"EFFTgr2","case":"ef","number":"ft","definite":true,"variant":2},{"form":"klippa","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"klippan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"klippur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"klippurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"klippu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"klippuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"klippur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"klippurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"klippu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"klippunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"klippum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"klippunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"kreista":{"ofl":"kvk","forms":[{"form":"kreistu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"kreistunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"kreista","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"kreistanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"kreista","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"kreistan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"kreistur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"kreisturnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"kreistu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"kreistuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"kreistur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"kreisturnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"kreistu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"kreistunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"kreistum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"kreistunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"kremja":{"ofl":"kvk","forms":[{"form":"kremju","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"kremjunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"kremja","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"kremjan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"kremju","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"kremjuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"kremju","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"kremjunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1}]},"litur":{"ofl":"kk","forms":[{"form":"litar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"litarins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"lita","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"litanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"litur","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"liturinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"litir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"litirnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"lit","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"litinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"liti","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"litina","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"lit","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"litnum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"litum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"litunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"lágtíðnihleypir":{"ofl":"kk","forms":[{"form":"lágtíðnihleypis","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"lágtíðnihleypisins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"lágtíðnihleypir","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"lágtíðnihleypirinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"lágtíðnihleypi","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"lágtíðnihleypinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"lágtíðnihleypi","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"lágtíðnihleypinum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1}]},"læti":{"ofl":"hk","forms":[{"form":"láta","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"látanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"læti","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"lætin","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"læti","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"lætin","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"látum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"látunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"líming":{"ofl":"kvk","forms":[{"form":"límingar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"límingarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"líminga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"líminganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"líming","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"límingin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"límingar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"límingarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"límingu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"líminguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"límingar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"límingarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"límingu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"límingunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"límingum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"límingunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"mögnun":{"ofl":"kvk","forms":[{"form":"mögnunar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"mögnunarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"magnana","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"magnananna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"mögnun","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"mögnunin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"magnanir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"magnanirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"mögnun","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"mögnunina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"magnanir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"magnanirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"mögnun","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"mögnuninni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"mögnunum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"mögnununum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"nóta":{"ofl":"kvk","forms":[{"form":"nótu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"nótunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"nótna","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"nótnanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"nóta","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"nótan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"nótur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"nóturnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"nótu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"nótuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"nótur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"nóturnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"nótu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"nótunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"nótum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"nótunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"rispa":{"ofl":"kvk","forms":[{"form":"rispu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"rispunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"rispa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"rispna","mark":"EFFT2","case":"ef","number":"ft","definite":false,"variant":2},{"form":"rispanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"rispnanna","mark":"EFFTgr2","case":"ef","number":"ft","definite":true,"variant":2},{"form":"rispa","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"rispan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"rispur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"rispurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"rispu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"rispuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"rispur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"rispurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"rispu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"rispunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"rispum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"rispunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"runa":{"ofl":"kvk","forms":[{"form":"runu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"rununnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"runa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"runanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"runa","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"runan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"runur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"runurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"runu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"rununa","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"runur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"runurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"runu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"rununni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"runum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"rununum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"röð":{"ofl":"kvk","forms":[{"form":"raðar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"raðarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"raða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"raðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"röð","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"röðin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"raðir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"raðirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"röð","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"röðina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"raðir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"raðirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"röð","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"röðinni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"röðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"röðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"rými":{"ofl":"hk","forms":[{"form":"rýmis","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"rýmisins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"rýma","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"rýmanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"rými","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"rýmið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"rými","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"rýmin","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"rými","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"rýmið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"rými","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"rýmin","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"rými","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"rýminu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"rýmum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"rýmunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"samanlíming":{"ofl":"kvk","forms":[{"form":"samanlímingar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"samanlímingarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"samanlíminga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"samanlíminganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"samanlíming","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"samanlímingin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"samanlímingar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"samanlímingarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"samanlímingu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"samanlíminguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"samanlímingar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"samanlímingarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"samanlímingu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"samanlímingunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"samanlímingum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"samanlímingunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"samsetning":{"ofl":"kvk","forms":[{"form":"samsetningar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"samsetningarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"samsetninga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"samsetninganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"samsetning","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"samsetningin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"samsetningar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"samsetningarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"samsetningu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"samsetninguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"samsetningar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"samsetningarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"samsetningu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"samsetningunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"samsetningum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"samsetningunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"skali":{"ofl":"kk","forms":[{"form":"skala","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"skalans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"skala","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"skalanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"skali","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"skalinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"skalar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"skalarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"skala","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"skalann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"skala","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"skalana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"skala","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"skalanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"skölum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"skölunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"stafli":{"ofl":"kk","forms":[{"form":"stafla","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"staflans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"stafla","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"staflanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"stafli","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"staflinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"staflar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"staflarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"stafla","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"staflann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"stafla","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"staflana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"stafla","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"staflanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"stöflum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"stöflunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"staðsetning":{"ofl":"kvk","forms":[{"form":"staðsetningar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"staðsetningarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"staðsetninga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"staðsetninganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"staðsetning","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"staðsetningin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"staðsetningar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"staðsetningarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"staðsetningu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"staðsetninguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"staðsetningar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"staðsetningarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"staðsetningu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"staðsetningunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"staðsetningum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"staðsetningunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"staður":{"ofl":"kk","forms":[{"form":"staðar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"staðarins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"staða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"staðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"staður","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"staðurinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"staðir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"staðirnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"stað","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"staðinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"staði","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"staðina","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"stað","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"staðnum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"stöðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"stöðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"strengjalíming":{"ofl":"kvk","forms":[{"form":"strengjalímingar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"strengjalímingarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"strengjalíminga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"strengjalíminganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"strengjalíming","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"strengjalímingin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"strengjalímingar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"strengjalímingarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"strengjalímingu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"strengjalíminguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"strengjalímingar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"strengjalímingarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"strengjalímingu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"strengjalímingunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"strengjalímingum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"strengjalímingunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"strengjasamsetning":{"ofl":"kvk","forms":[{"form":"strengjasamsetningar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"strengjasamsetningarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"strengjasamsetninga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"strengjasamsetninganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"strengjasamsetning","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"strengjasamsetningin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"strengjasamsetningar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"strengjasamsetningarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"strengjasamsetningu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"strengjasamsetninguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"strengjasamsetningar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"strengjasamsetningarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"strengjasamsetningu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"strengjasamsetningunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"strengjasamsetningum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"strengjasamsetningunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"strífa":{"ofl":"kvk","forms":[{"form":"strífu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"strífunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"strífa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"strífanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"strífa","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"strífan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"strífur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"strífurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"strífu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"strífuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"strífur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"strífurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"strífu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"strífunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"strífum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"strífunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"strúktúr":{"ofl":"kk","forms":[{"form":"strúktúrs","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"strúktúrsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"strúktúra","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"strúktúranna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"strúktúr","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"strúktúrinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"strúktúrar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"strúktúrarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"strúktúr","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"strúktúrinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"strúktúra","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"strúktúrana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"strúktúr","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"strúktúrnum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"strúktúrum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"strúktúrunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"styrkur":{"ofl":"kk","forms":[{"form":"styrks","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"styrksins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"styrkja","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"styrkjanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"styrkur","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"styrkurinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"styrkir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"styrkirnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"styrk","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"styrkinn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"styrki","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"styrkina","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"styrk","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"styrknum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"styrkjum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"styrkjunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"suss":{"ofl":"hk","forms":[{"form":"suss","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"sussins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"sussa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"sussanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"suss","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"sussið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"suss","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"sussin","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"suss","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"sussið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"suss","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"sussin","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"sussi","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"sussinu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"sussum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"sussunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"svið":{"ofl":"hk","forms":[{"form":"sviðs","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"sviðsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"sviða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"sviðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"svið","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"sviðið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"svið","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"sviðin","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"svið","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"sviðið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"svið","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"sviðin","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"sviði","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"sviðinu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"sviðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"sviðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"svörun":{"ofl":"kvk","forms":[{"form":"svörunar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"svörunarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"svarana","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"svarananna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"svörun","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"svörunin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"svaranir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"svaranirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"svörun","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"svörunina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"svaranir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"svaranirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"svörun","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"svöruninni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"svörunum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"svörununum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"sérhljóði":{"ofl":"kk","forms":[{"form":"sérhljóða","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"sérhljóðans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"sérhljóða","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"sérhljóðanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"sérhljóði","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"sérhljóðinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"sérhljóðar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"sérhljóðarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"sérhljóða","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"sérhljóðann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"sérhljóða","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"sérhljóðana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"sérhljóða","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"sérhljóðanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"sérhljóðum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"sérhljóðunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"sía":{"ofl":"kvk","forms":[{"form":"síu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"síunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"sía","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"síanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"sía","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"sían","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"síur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"síurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"síu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"síuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"síur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"síurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"síu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"síunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"síum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"síunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"taka":{"ofl":"kvk","forms":[{"form":"töku","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"tökunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"taka","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"takna","mark":"EFFT2","case":"ef","number":"ft","definite":false,"variant":2},{"form":"takanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"taknanna","mark":"EFFTgr2","case":"ef","number":"ft","definite":true,"variant":2},{"form":"taka","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"takan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"tökur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"tökurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"töku","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"tökuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"tökur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"tökurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"töku","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"tökunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"tökum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"tökunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"tíðni":{"ofl":"kvk","forms":[{"form":"tíðni","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"tíðninnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"tíðna","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"tíðnanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"tíðni","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"tíðnin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"tíðnir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"tíðnirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"tíðni","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"tíðnina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"tíðnir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"tíðnirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"tíðni","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"tíðninni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"tíðnum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"tíðnunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"umslag":{"ofl":"hk","forms":[{"form":"umslags","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"umslagsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"umslaga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"umslaganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"umslag","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"umslagið","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"umslög","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"umslögin","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"umslag","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"umslagið","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"umslög","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"umslögin","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"umslagi","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"umslaginu","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"umslögum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"umslögunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"uppbygging":{"ofl":"kvk","forms":[{"form":"uppbyggingar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"uppbyggingarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"uppbygginga","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"uppbygginganna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"uppbygging","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"uppbyggingin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"uppbyggingar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"uppbyggingarnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"uppbyggingu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"uppbygginguna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"uppbyggingar","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"uppbyggingarnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"uppbyggingu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"uppbyggingunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"uppbyggingum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"uppbyggingunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"ómun":{"ofl":"kvk","forms":[{"form":"ómunar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"ómunarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"ómana","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"ómananna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"ómun","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"ómunin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"ómanir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"ómanirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"ómun","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"ómunina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"ómanir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"ómanirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"ómun","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"ómuninni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"ómunum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"ómununum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"ómur":{"ofl":"kk","forms":[{"form":"óms","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"ómsins","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"óma","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"ómanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"ómur","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"ómurinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"ómar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"ómarnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"óm","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"óminn","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"óma","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"ómana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"ómi","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"óm","mark":"ÞGFET2","case":"þgf","number":"et","definite":false,"variant":2},{"form":"ómnum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"óminum","mark":"ÞGFETgr2","case":"þgf","number":"et","definite":true,"variant":2},{"form":"ómum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"ómunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"þjappa":{"ofl":"kvk","forms":[{"form":"þjöppu","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"þjöppunnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"þjappa","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"þjappanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"þjappa","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"þjappan","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"þjöppur","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"þjöppurnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"þjöppu","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"þjöppuna","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"þjöppur","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"þjöppurnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"þjöppu","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"þjöppunni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"þjöppum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"þjöppunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"þjappari":{"ofl":"kk","forms":[{"form":"þjappara","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"þjapparans","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"þjappara","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"þjapparanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"þjappari","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"þjapparinn","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"þjapparar","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"þjappararnir","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"þjappara","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"þjapparann","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"þjappara","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"þjapparana","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"þjappara","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"þjapparanum","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"þjöppurum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"þjöppurunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]},"þögn":{"ofl":"kvk","forms":[{"form":"þagnar","mark":"EFET","case":"ef","number":"et","definite":false,"variant":1},{"form":"þagnarinnar","mark":"EFETgr","case":"ef","number":"et","definite":true,"variant":1},{"form":"þagna","mark":"EFFT","case":"ef","number":"ft","definite":false,"variant":1},{"form":"þagnanna","mark":"EFFTgr","case":"ef","number":"ft","definite":true,"variant":1},{"form":"þögn","mark":"NFET","case":"nf","number":"et","definite":false,"variant":1},{"form":"þögnin","mark":"NFETgr","case":"nf","number":"et","definite":true,"variant":1},{"form":"þagnir","mark":"NFFT","case":"nf","number":"ft","definite":false,"variant":1},{"form":"þagnirnar","mark":"NFFTgr","case":"nf","number":"ft","definite":true,"variant":1},{"form":"þögn","mark":"ÞFET","case":"þf","number":"et","definite":false,"variant":1},{"form":"þögnina","mark":"ÞFETgr","case":"þf","number":"et","definite":true,"variant":1},{"form":"þagnir","mark":"ÞFFT","case":"þf","number":"ft","definite":false,"variant":1},{"form":"þagnirnar","mark":"ÞFFTgr","case":"þf","number":"ft","definite":true,"variant":1},{"form":"þögn","mark":"ÞGFET","case":"þgf","number":"et","definite":false,"variant":1},{"form":"þögninni","mark":"ÞGFETgr","case":"þgf","number":"et","definite":true,"variant":1},{"form":"þögnum","mark":"ÞGFFT","case":"þgf","number":"ft","definite":false,"variant":1},{"form":"þögnunum","mark":"ÞGFFTgr","case":"þgf","number":"ft","definite":true,"variant":1}]}}'), je = {
  nonNouns: co,
  ambiguousForms: po,
  nouns: go
}, ho = { nf: "nefnifall", þf: "þolfall", þgf: "þágufall", ef: "eignarfall" };
function vo({ case: t, number: e, definite: r }) {
  const n = e === "et" ? "eintölu" : "fleirtölu", i = r ? "með greini" : "án greinis";
  return `${ho[t]} ${n} ${i}`;
}
let We = null;
function bt() {
  if (We) return We;
  We = /* @__PURE__ */ new Map();
  for (const [t, e] of Object.entries(je.nouns))
    for (const r of e.forms) {
      const n = We.get(r.form) || [];
      n.push({ lemma: t, case: r.case, number: r.number, definite: r.definite }), We.set(r.form, n);
    }
  return We;
}
function aa(t, e) {
  if (je.nouns[e]) return e;
  if (t === e) return null;
  const r = je.ambiguousForms[t];
  if (!r || !r.includes(e)) return null;
  const n = r.filter((i) => je.nouns[i]);
  return n.length === 1 ? n[0] : null;
}
function ko(t) {
  return !!je.nouns[t] || je.nonNouns.includes(t);
}
function ia(t, e) {
  const r = t.toLowerCase(), n = aa(r, e);
  if (!n) return null;
  const i = je.ambiguousForms[r], s = i ? i.filter((c) => c !== n && c !== e) : [], l = (bt().get(r) || []).find((c) => c.lemma === n);
  return {
    kind: "noun-normalization",
    lemma: n,
    features: l ? vo(l) : null,
    source: l ? "paradigm" : "rule",
    confidence: l ? "verified" : "inferred",
    ambiguity: s.length > 0 ? s : null
  };
}
function bo(t, e) {
  const r = t.toLowerCase(), n = aa(r, e);
  return n ? (bt().get(r) || []).filter((i) => i.lemma === n).map(({ case: i, number: s, definite: l }) => ({ case: i, number: s, definite: l })) : [];
}
const Fo = {
  // 'um' ("about"/"around") is a single-case preposition: accusative
  // (þolfall) only — e.g. 'um bókina'. No dative sense.
  um: /* @__PURE__ */ new Set(["þf"]),
  // 'með' ("with") is genuinely two-case: dative for the comitative/
  // instrumental sense ('með mér', 'með hamri' — "with me/a hammer") and
  // accusative for the "bringing/taking along" sense ('fara með e-ð' —
  // "go with/take something"). Both are real, unmarked Icelandic, so the
  // governed set is {þf, þgf}, not a single "correct" case.
  með: /* @__PURE__ */ new Set(["þf", "þgf"]),
  // 'í'/'á' ("in"/"on") are Icelandic's classic dual-case prepositions:
  // accusative for MOTION into/onto ('fara í bæinn'), dative for static
  // LOCATION in/on ('vera í bænum'). Both senses are ordinary Icelandic, so
  // both cases are in the governed set.
  í: /* @__PURE__ */ new Set(["þf", "þgf"]),
  á: /* @__PURE__ */ new Set(["þf", "þgf"])
}, sn = { nf: "nefnifalli", þf: "þolfalli", þgf: "þágufalli", ef: "eignarfalli" };
function nt(t) {
  return t.length === 1 ? t[0] : `${t.slice(0, -1).join(", ")} eða ${t[t.length - 1]}`;
}
function Eo(t, e, r, n) {
  const i = nt(e.map((l) => sn[l])), s = nt(n.map((l) => sn[l]));
  return `„${t}“ er í ${i}, en „${r}“ stýrir ${s}.`;
}
function To({ surface: t, canonical: e, morphology: r }) {
  const n = r.governedBy, i = Fo[n];
  if (!i) return [];
  const s = bo(t, e);
  if (s.length === 0) return [];
  if (s.some((g) => i.has(g.case))) return [];
  const l = [...new Set(s.map((g) => g.case))], c = Eo(t, l, n, [...i]);
  return [{ surface: t, canonical: e, preposition: n, actualCases: l, governedCases: [...i], message: c }];
}
function at(t, e) {
  if (Array.isArray(t)) {
    t.forEach((r) => at(r, e));
    return;
  }
  if (!(t === null || typeof t != "object")) {
    t.type === "name" && t.morphology && t.morphology.governedBy && e.push(...To(t));
    for (const r of Object.keys(t))
      r !== "loc" && at(t[r], e);
  }
}
function sa(t) {
  if (!t || t.type !== "program")
    throw new Error(`checkAgreement: expected a 'program' node, got '${t && t.type}'`);
  const e = [];
  return at(t, e), e;
}
const yo = "A-Za-zÁÉÍÓÚÝÞÆÐÖáéíóúýþæðö", Ao = new RegExp(`[${yo}]`), Io = (t) => t != null && Ao.test(t);
function _o(t, e) {
  let r = e;
  for (; r > 0 && Io(t[r - 1]); ) r--;
  return { from: r, to: e };
}
const wo = /* @__PURE__ */ new Set(['"', "„", "«"]), Co = /* @__PURE__ */ new Set(['"', "“", "»"]);
function ua(t, e) {
  let r = !1;
  for (let n = 0; n < e; n++)
    if (r) r = !Co.has(t[n]);
    else if (t[n] === "-" && t[n + 1] === " ") {
      const i = t.indexOf("-", n + 2);
      n = i === -1 ? e : i;
    } else r = wo.has(t[n]);
  return r;
}
const Ft = /^"(.+)" \(case-insensitive\)$/, jo = /* @__PURE__ */ new Set(["og", "en", "eða", "ásamt"]), So = /* @__PURE__ */ new Set([".", "?", "!"]);
function un(t, e, r) {
  if (!r) return [];
  const n = t.slice(0, e), i = r(n);
  if (!i.failed()) return [];
  if (i.getRightmostFailurePosition() !== n.length) return [];
  const s = /* @__PURE__ */ new Set();
  for (const l of i.getRightmostFailures()) {
    if (l.isStringTerminal()) {
      const d = l.getText();
      So.has(d) && s.add(d);
      continue;
    }
    if (!l.isDescription()) continue;
    const c = Ft.exec(l.getText());
    if (!c) continue;
    const g = c[1].toLowerCase();
    jo.has(g) && s.add(g);
  }
  return [...s];
}
function on(t, e) {
  const r = t(e);
  return r.succeeded() || r.getRightmostFailurePosition() >= e.length;
}
function xo(t) {
  const e = t.matcher();
  return function(n) {
    const i = e.getInput();
    let s = 0;
    for (; s < i.length && s < n.length && i[s] === n[s]; ) s++;
    return e.replaceInputRange(s, i.length, n.slice(s)), e.match("Text");
  };
}
function No({ normalizeNoun: t, vocabulary: e, grammar: r }) {
  const n = r && xo(r);
  return function(s, l) {
    if (ua(s, l)) return null;
    const { from: c, to: g } = _o(s, l), d = /* @__PURE__ */ new Set(), F = [], h = (p, v, I) => {
      if (d.has(p)) return;
      d.add(p);
      const L = { label: p, type: v };
      I && (L.detail = I), F.push(L);
    };
    if (c === g)
      for (const p of un(s, l, n)) h(p, "grammar");
    else {
      const p = s.slice(c, g), v = p.toLowerCase(), I = s.slice(0, c), L = n && on(n, I) ? (S) => on(n, I + S) : () => !0;
      for (const S of e)
        S.toLowerCase().startsWith(v) && L(S) && h(S, "keyword");
      const T = t(v), w = ia(v, T)?.confidence === "verified" || !ko(T);
      T !== v && e.has(T) && w && L(T) && h(T, "keyword", `${p} → ${T}`);
      for (const S of un(s, c, n))
        S.startsWith(v) && h(S, "grammar");
    }
    return F.length === 0 ? null : (F.sort((p, v) => p.label < v.label ? -1 : p.label > v.label ? 1 : 0), { from: c, to: g, options: F, filter: !1 });
  };
}
function Mr(t) {
  return { type: "program", body: t };
}
function qr(t) {
  return { type: "output", value: t };
}
function pr({ head: t, args: e = [], chain: r = [] }) {
  return { type: "patternCall", head: t, args: e, chain: r };
}
function fn({ name: t, args: e = [] }) {
  return { type: "method", name: t, args: e };
}
function Do(t) {
  return { type: "negatedControl", name: t };
}
function ln(t, e) {
  return { type: "mini", value: t, loc: e };
}
function Ue({ surface: t, canonical: e, role: r, morphology: n }) {
  return {
    type: "name",
    surface: t,
    canonical: e,
    role: r,
    morphology: n
  };
}
function mn({ value: t, surface: e, loc: r }) {
  return { type: "number", value: t, surface: e, loc: r };
}
function Bo({ surface: t, value: e, loc: r }) {
  return { type: "scale", surface: t, value: e, loc: r };
}
function $o({ value: t, factor: e, surfaceAdverb: r, loc: n }) {
  return { type: "degree", value: t, factor: e, surfaceAdverb: r, loc: n };
}
function Ve({ name: t, value: e, hush: r = !1, hushChain: n }) {
  return { type: "binding", name: t, value: e, hush: r, ...n !== void 0 && { hushChain: n } };
}
function dr(t) {
  return { type: "ref", name: t };
}
function cn() {
  return { type: "silence" };
}
function pn(t) {
  return { type: "stack", items: t };
}
function Oo(t) {
  return { type: "cat", items: t };
}
function Lo(t) {
  return { type: "seq", items: t };
}
function Go(t) {
  return { type: "randcat", items: t };
}
function Ro({ name: t, body: e }) {
  return { type: "section", name: t, body: e };
}
function dn({ body: t, bodyWithoutAutoStack: e = t, startsWithComposition: r = !1 }) {
  return { type: "paragraphGroup", body: t, bodyWithoutAutoStack: e, startsWithComposition: r };
}
function Po(t) {
  return { type: "tempo", expr: t };
}
function Mo({ first: t, rest: e = [] }) {
  return { type: "numExpr", first: t, rest: e };
}
function qo(t) {
  return { type: "arrange", items: t };
}
function Wo({ count: t, target: e }) {
  return { type: "arrangeItem", count: t, target: e };
}
function Uo({ surface: t, value: e }) {
  return { type: "signal", surface: t, value: e };
}
function Vo(t) {
  return { type: "sequence", items: t };
}
function Ko({ from: t, options: e }) {
  return { type: "pick", from: t, options: e };
}
function gr({ head: t, methods: e = [] }) {
  return { type: "chain", head: t, methods: e };
}
function Ho({ coined: t, target: e }) {
  return { type: "coinage", coined: t, target: e };
}
class oa extends Error {
  constructor(e) {
    super(`toIr: '${e}' is not yet covered by the semantic IR`), this.name = "IrNotCovered", this.ctorName = e;
  }
}
function zo() {
  const { resolveName: t } = Se(), e = (m) => m && m.children ? m.children : [], r = (...m) => {
    const b = [], E = (y) => {
      if (y) {
        if (y.ctorName === "quotation") {
          b.push(y);
          return;
        }
        for (const A of e(y)) E(A);
      }
    };
    for (const y of m) E(y);
    return b;
  }, n = (m) => String(m.toIr()), i = (m) => {
    const { text: b, start: E } = m.toIr();
    return ln(b, { start: E, end: m.source.endIdx });
  }, s = (m) => String(m.toIr().text || "").trim(), l = (m) => ln(s(m)), c = (m, b, E) => [m].concat(r(b), r(E)).map(i), g = (m, b, E, y) => ({
    kind: "call",
    surface: n(m),
    canonical: t(n(m)),
    args: c(b, E, y)
  }), d = (m) => {
    const b = n(m);
    return h(b), Ue({ surface: b, canonical: b.toLowerCase(), role: "transform" });
  }, F = ({ surface: m, canonical: b, role: E, governedBy: y }) => {
    const A = kt(m, b) ? ia(m, b) : null, _ = y ? { ...A || {}, governedBy: y } : A || void 0;
    return Ue({ surface: m, canonical: b, role: E, morphology: _ });
  }, h = (m) => {
    if (Kn.has(m.toLowerCase()))
      throw new Error(`„${m}“ er frátekið orð í JavaScript og getur ekki verið nafn.`);
  }, p = (m) => m.replace(/^(-?)0+(?=\d)/, "$1"), v = (m) => {
    throw new oa(m);
  }, I = (m, b) => ({
    ...m,
    loc: { start: b.source.startIdx, end: b.source.endIdx }
  }), L = (m) => m.kind === "coinage" || m.kind === "value" && m.value.type === "tempo", T = (m) => Do(F({ surface: m.surface, canonical: m.canonical, role: "parameter" })), w = (m) => m.kind === "negated" ? T(m) : fn({
    name: F({ surface: m.surface, canonical: m.canonical, role: "parameter", governedBy: m.preposition }),
    args: m.args
  }), S = (m, b) => m.hush ? Ve({ name: m.name, value: m.value, hush: m.hush, hushChain: b }) : m.value.type === "patternCall" ? Ve({
    name: m.name,
    value: pr({ ...m.value, chain: m.value.chain.concat(b) }),
    hush: m.hush
  }) : Ve({ name: m.name, value: gr({ head: m.value, methods: b }), hush: m.hush }), M = (m, b) => {
    if (m.kind === "assignment")
      return { kind: "assignment", bindings: m.bindings.map((E) => S(E, b)) };
    if (m.kind === "additive")
      return { kind: "additive", call: { ...m.call, chain: (m.call.chain || []).concat(b) } };
    if (m.kind === "composition" || m.kind === "value")
      return { kind: m.kind, value: gr({ head: m.value, methods: b }) };
    v("Sentence (clause-tail after a statement clause)");
  }, K = (m, b, E, y) => {
    const { surface: A, canonical: _ } = b.toIr(), x = i(E), G = y.toIr(), R = G.length > 0 ? G[0] : null, z = R === "negation_aldrei" || R === "negation_ekkert" ? cn() : pr({ head: F({ surface: A, canonical: _, role: "source" }), args: [x], chain: [] }), ke = R === "negation_ekki";
    return m.map((B) => Ve({ name: B, value: z, hush: ke }));
  }, le = { stack: pn, cat: Oo, seq: Lo, randcat: Go }, Qe = {
    Paragraph(m, b, E, y, A) {
      return [E].concat(e(A));
    }
  }, sr = (m, b, E) => {
    let y = m.length;
    for (; y > 0 && b(m[y - 1]); ) y -= 1;
    return y === m.length || y === 0 || !E(m[y - 1]) ? m : m.slice(0, y - 1).concat(m.slice(y), [m[y - 1]]);
  }, ur = (m) => m.type === "output" && m.value.type === "tempo", Ye = (m) => m.type === "output" && m.value.type !== "tempo", jr = (m, b, E) => {
    const y = [], A = [], _ = [];
    let x = 0, G = 0;
    for (const B of m)
      switch (B.kind) {
        case "call": {
          const J = qr(B.value);
          y.push(J), A.push(J);
          break;
        }
        case "assignment":
          for (const J of B.bindings)
            y.push(J), A.push(J), _.push(dr(J.name.canonical));
          x += B.bindings.length;
          break;
        case "additive": {
          const J = pr({
            head: F({ surface: B.call.surface, canonical: B.call.canonical, role: "source" }),
            args: B.call.args,
            // Sentence (below) may already have appended a ClauseTail's
            // methods onto `result.call.chain` — a tail chained directly
            // after 'Líka …'.
            chain: B.call.chain || []
          }), we = `lag${b + x + 1}`, Be = `lag${E + G + 1}`;
          y.push(Ve({ name: Ue({ surface: we, canonical: we, role: "binding" }), value: J })), A.push(Ve({ name: Ue({ surface: Be, canonical: Be, role: "binding" }), value: J })), _.push(dr(we)), x += 1, G += 1;
          break;
        }
        // Composition owns the paragraph's final eval (suppressing the
        // auto-stack below); tempo/arrange ('value') are ordinary
        // whole-sentence values with no such effect.
        case "composition":
        case "value": {
          const J = qr(B.value);
          y.push(J), A.push(J);
          break;
        }
        case "coinage":
          y.push(B.node), A.push(B.node);
          break;
        default:
          v(`Paragraph (sentence kind '${B.kind}')`);
      }
    const R = A, W = m.length > 0 && m[m.length - 1].kind === "composition";
    _.length > 0 && !W && y.push(qr(pn(_)));
    const z = m.find((B) => !L(B)), ke = z !== void 0 && z.kind === "composition";
    return {
      group: dn({
        body: sr(y, ur, Ye),
        bodyWithoutAutoStack: R,
        startsWithComposition: ke
      }),
      bound: x,
      layers: G
    };
  };
  return { actions: {
    // A single paragraph flattens straight onto Program.body (every
    // snapshot/toMatchObject test asserts this flat form). With 2+ paragraphs,
    // Program.body instead holds one `paragraphGroup` per paragraph — lowerIr
    // joins WITHIN a group one way ('; ') and BETWEEN groups another ('\n\n').
    // Either way it is ONE JS program, so each plain paragraph is built with
    // the names earlier paragraphs bound as its offsets: no two paragraphs
    // declare the same auto layer name.
    //
    // The exception: when the LAST of 2+ paragraphs starts with a Composition
    // (its FIRST sentence, past any tempo or coinage), that Composition owns
    // the final eval, so EVERY paragraph is flattened to its bare sentence
    // statements with no paragraph's own auto-stack, and the whole Text
    // collapses to ONE flat body, '; '-joined by lowerIr (the single-paragraph
    // path, since a flat body's first node is never a `paragraphGroup`) — NOT
    // the ordinary '\n\n' join. Exercised by
    // test/semantics.test.js's "composition: samtímis with double newlines".
    Text(m, b, E, y, A) {
      const _ = [b].concat(e(y)).map((B) => B.toIr()), x = [];
      let G = 0, R = 0;
      for (const B of _) {
        if (B.kind === "section") {
          x.push(B.group);
          continue;
        }
        const { group: J, bound: we, layers: Be } = jr(B.results, G, R);
        x.push(J), G += we, R += Be;
      }
      if (x.length === 1) return Mr(x[0].body);
      const W = x[x.length - 1];
      if (W.startsWithComposition) {
        const B = x.slice(0, -1).flatMap((J) => J.bodyWithoutAutoStack).concat(W.body);
        return Mr(B);
      }
      return Mr(sr(x, (B) => B.body.every(ur), (B) => Ye(B.body[B.body.length - 1])));
    },
    // A Sentence's toIr() result is a list of TAGGED shapes — its own, after
    // any clause Sentence hoisted out of it: `{kind: 'call', value}` for
    // a plain value-producing sentence (the whole method-call family, including
    // Clause_negatedGeneric), or a program-level STATEMENT shape —
    // `{kind: 'assignment', bindings}`, `{kind: 'additive', call}`,
    // `{kind: 'composition', value}`, `{kind: 'value', value}` (tempo/arrange),
    // or `{kind: 'coinage', node}`. A plain paragraph returns those results as
    // `{kind: 'sentences', results}`, for Text to build into a group
    // (buildParagraphGroup, above) once it knows the earlier paragraphs'
    // offsets. A section header (`Kaflinn <name>:`) takes a different path:
    // every sentence is a plain layer stacked by VALUE into one `section` node,
    // returned finished as `{kind: 'section', group}`.
    Paragraph(m, b, E, y, A) {
      const _ = this.sentences();
      if (m && m.numChildren > 0) {
        const x = m.child(0).toIr(), G = (W) => W.kind === "value" && W.value.type === "arrange" && W.value.items.some((z) => z.target.type === "ref" && z.target.name === x.canonical), R = _.flatMap((W) => W.toIr()).map((W) => {
          if (G(W))
            throw new Error(`Kaflinn „${x.surface}“ getur ekki raðað sjálfum sér: settu auða línu á undan „Raðaðu“.`);
          if (W.kind === "call" || W.kind === "value" || W.kind === "composition") return W.value;
          if (W.kind === "coinage") return W.node;
          v(`Paragraph (section layer with '${W.kind}' clause)`);
        });
        return { kind: "section", group: dn({ body: [Ro({ name: x, body: R })] }) };
      }
      return { kind: "sentences", results: _.flatMap((x) => x.toIr()) };
    },
    // The first clause becomes the PatternCall head (role 'source'); every
    // ClauseTail becomes a chained Method (role 'parameter'), joined with '.'.
    //
    // A program-level STATEMENT clause (assignment/multiassignment/additive/
    // composition) owns the whole sentence instead, and a following ClauseTail
    // chains onto whatever that statement's own JS ends on. For an unnegated
    // assignment/multiassignment/additive that is each bound name's own
    // patternCall — e.g. test/examples.js's "Verkefni með sjálfvirkri stöflun"
    // ('Davíð spilar hljóð „orgel“, styrkur „1.2“ og ómur „1.5“.') chains the
    // tail onto `hljóð("orgel")`, NOT onto the whole `const davíð = …`
    // statement. appendTailToStatement (above) attaches each kind.
    //
    // A tempo or coinage clause in any position is HOISTED out of the
    // sentence, as if written as its own sentence just before it: it comes
    // back as a result of its own ahead of the sentence, which is rebuilt from
    // the clauses that remain ('hljóð „bd“, Takturinn er 140.' ->
    // `setcpm(140); hljóð("bd")`; in a section, a layer of its own). For a
    // coinage this settles what the coined word reaches: lowerIr's environment
    // learns it in the order of the results, so it reaches every clause of its
    // own sentence, even one written before the Merktu clause, and every later
    // sentence, but no earlier sentence or section layer. Any other statement
    // clause in tail position starts a statement of its own and is declined,
    // with advice from errors.js: an assignment/additive would emit a bare
    // `const` after a '.', and Raðaðu or a mynstur clause owns a whole value.
    Sentence(m, b, E) {
      const y = m.toIr(), A = b.toIr(), _ = A.find((B) => B.kind !== "call" && B.kind !== "negated" && !L(B));
      _ && v(`Sentence (clause-tail of kind '${_.kind === "value" ? _.value.type : _.kind}')`);
      const x = [y, ...A], G = x.filter(L), [R, ...W] = x.filter((B) => !L(B));
      if (R === void 0) return G;
      const z = W.map(w);
      if (R.kind === "negated")
        return [...G, { kind: "call", value: gr({ head: T(R), methods: z }) }];
      if (R.kind !== "call")
        return [...G, z.length === 0 ? R : M(R, z)];
      const ke = pr({
        head: F({
          surface: R.surface,
          canonical: R.canonical,
          role: "source",
          governedBy: R.preposition
        }),
        args: R.args,
        chain: z
      });
      return [...G, { kind: "call", value: ke }];
    },
    ClauseTail(m, b) {
      return b.toIr();
    },
    // Ohm wraps the matched alt in an outer `Clause` node — this is the
    // universal dispatcher.
    Clause(m) {
      return m.toIr();
    },
    Clause_generic(m, b, E, y, A) {
      return g(m, E, y, A);
    },
    // Prepositional noun-phrase clause: the method name comes from the noun word
    // after the preposition (normalizeNoun resolves the inflected dative, e.g.
    // `ómi` -> `ómur`). The preposition itself is glue for the emitted JS, but
    // its lowercased surface is kept as `preposition` on the raw call descriptor
    // — rung 3 provenance (docs/morphology-ladder.md): a name governed by a
    // preposition carries WHICH one, so agreement.js can check the noun's case
    // against what that preposition selects. Read by Sentence/tailToChainLink
    // and folded into `governedBy` on the resulting `name` node's `morphology`;
    // never consumed here, since this action doesn't yet know whether it becomes
    // the sentence's head (role 'source') or a chained method ('parameter').
    Clause_prepphrase(m, b, E, y, A, _) {
      return { ...g(b, y, A, _), preposition: m.sourceString.toLowerCase() };
    },
    // Imperative command: the mood keyword is discarded; the rest is a normal
    // method clause (chaining, if any, is Sentence's concern).
    Clause_imperative(m, b, E, y, A, _) {
      return g(b, y, A, _);
    },
    // Nullary (argument-free) method clause, e.g. 'rev'/'þögn'.
    Clause_nullary(m) {
      return { kind: "call", surface: n(m), canonical: t(n(m)), args: [] };
    },
    // Single-subject assignment: 'davíð spilar hljóð «bd»' -> one `binding`.
    Clause_assignment(m) {
      return m.toIr();
    },
    // Positional per the grammar body (variable "spilar" negation? function
    // quotation). Returns a program-level STATEMENT shape:
    // `{kind: 'assignment', bindings}`, one `binding` per bound name (a
    // single-element array here).
    Assignment(m, b, E, y, A) {
      return { kind: "assignment", bindings: K([m.toIr()], y, A, E) };
    },
    // Multi-subject assignment: 'Davíð og Ásta spila hljóð «bd»' -> one
    // `binding` per subject, all bound to the same call.
    Clause_multiassignment(m) {
      return m.toIr();
    },
    // Positional per the grammar body (SubjectList "spila" negation? function
    // quotation) — Assignment with a name per subject; one shared negation
    // polarity applies uniformly to every subject.
    MultiAssignment(m, b, E, y, A) {
      return { kind: "assignment", bindings: K(m.toIr(), y, A, E) };
    },
    // Polarity words (grammar.js's `negation`), consumed via the `negation?`
    // iteration node's toIr() — [] when absent, one element when present.
    negation_aldrei(m) {
      return "negation_aldrei";
    },
    negation_ekkert(m) {
      return "negation_ekkert";
    },
    negation_ekki(m) {
      return "negation_ekki";
    },
    // SubjectList -> array of `name` nodes (role 'binding'), one per subject
    // (2+); the plural verb and 'og' terminals contribute no names.
    SubjectList(m, b, E, y, A) {
      const _ = m.toIr(), x = e(E).map((R) => R.toIr()), G = A.toIr();
      return [_, ...x, G];
    },
    // A bound subject/variable name -> a `name` node, role 'binding'. No
    // normalizeNoun: person names aren't control nouns.
    variable(m) {
      const b = this.sourceString;
      return h(b), Ue({ surface: b, canonical: b.toLowerCase(), role: "binding" });
    },
    // An Assignment/MultiAssignment's function word -> {surface, canonical} —
    // NOT yet a `name` node: Assignment/MultiAssignment assign role 'source', as
    // methodCallIr defers role to its caller. resolveName case-folds like every
    // other method word, so `Hljóðið` resolves via `hljóðið` while a camelCase
    // `stundumUm` keeps its case (test/ir-regressions.test.js).
    function(m) {
      const b = this.sourceString;
      return { surface: b, canonical: t(b) };
    },
    // Additive layer: 'Líka hljóð «~ sd»' adds a voice under an auto-named layer
    // ('lag2', 'lag3', …). This action can't know its position among sibling
    // sentences, so it returns the raw call shape tagged 'additive'; Paragraph
    // (above) derives the name from how many names earlier sentences in the same
    // paragraph already bound, and builds the `binding`.
    Clause_additive(m, b, E, y, A, _) {
      return { kind: "additive", call: g(b, y, A, _) };
    },
    // Negated generic clause, 'ekki ómur "0.5"': a 'negated' result, which
    // Sentence turns into a `negatedControl` (ir.js) — `.gain(0)` when the word
    // names gain, otherwise left out. The negated argument is discarded.
    Clause_negatedGeneric(m, b, E, y, A, _) {
      const x = n(b);
      return { kind: "negated", surface: x, canonical: t(x) };
    },
    // Clause alt that delegates to the Composition rule.
    Clause_composition(m) {
      return m.toIr();
    },
    // Explicit composition rule: 'mynstur "a b" spila <mode>' -> a program-level
    // STATEMENT shape tagged 'composition', whose `value` is the chosen
    // combinator (stack | cat | seq | randcat) over `ref`s to the named consts.
    // This is the clause that OWNS the paragraph's final eval and suppresses its
    // auto-stack (Paragraph, above).
    Composition(m, b, E, y, A, _, x) {
      const G = s(E).split(/[\s,]+/).filter((B) => B && B.toLowerCase() !== "og");
      if (G.length === 0)
        throw new Error("Ógilt mynstur: auður listi af nöfnum");
      const R = G.find((B) => !/^\p{L}[\p{L}0-9]*$/u.test(B));
      if (R !== void 0)
        throw new Error(`Ógilt nafn í mynstri: „${R}“`);
      G.forEach(h);
      const W = G.map((B) => B.toLowerCase()), z = x.toIr();
      return { kind: "composition", value: le[z](W.map((B) => dr(B))) };
    },
    CompositionMode_stack(m) {
      return "stack";
    },
    CompositionMode_cat(m, b, E) {
      return "cat";
    },
    CompositionMode_seq(m, b, E, y, A) {
      return "seq";
    },
    // Composition-list connectives: 'saman'->stack, 'eða'->randcat,
    // 'síðan'/'svo'/'þá'->cat.
    CompositionMode_stacksyn(m) {
      return "stack";
    },
    CompositionMode_randcat(m) {
      return "randcat";
    },
    CompositionMode_catsyn(m) {
      return "cat";
    },
    // Section header `Kaflinn <name>:` -> a `name` node, role 'section'. No
    // normalizeNoun: a section name isn't a control noun.
    SectionHeader(m, b, E) {
      return b.toIr();
    },
    sectionName(m, b) {
      const E = this.sourceString;
      return h(E), Ue({ surface: E, canonical: E.toLowerCase(), role: "section" });
    },
    // Every action's arity below matches the Clause rule's actual body arity
    // (grammar.js) exactly — ohm-js validates the action dictionary against the
    // grammar.
    // Degree-adverb clause: a word followed by a degree adverb scaling a
    // numeral, e.g. `styrkur mjög 0.8`. The method name is noun-normalized like
    // the generic clause; the DegreeArg action below builds the `degree` product
    // node.
    Clause_degree(m, b, E) {
      return {
        kind: "call",
        surface: n(m),
        canonical: t(n(m)),
        args: [I(E.toIr(), E)]
      };
    },
    // Adjective-scaling clause: a method word + a graded adjective (optionally
    // intensified), e.g. `styrkur stór` -> `styrkur(0.75)`. The AdjArg action
    // below builds the `scale` node.
    Clause_adjscale(m, b, E) {
      return {
        kind: "call",
        surface: n(m),
        canonical: t(n(m)),
        args: [I(E.toIr(), E)]
      };
    },
    // Coinage clause delegates to the Coinage rule.
    Clause_coinage(m) {
      return m.toIr();
    },
    // Coinage ("languaging"): `Merktu „X“ sem Y` mints the word X for the target
    // Y. toIr stays PURE here: it builds a `coinage` node carrying the coined
    // word and the target descriptor, and performs NO registerVocabulary/alias
    // calls itself. Same-program visibility — a later clause seeing the new word
    // — is lowerIr's job instead (see lower.js's header): it lowers Program.body
    // in source order, maintaining its own morphology instance that each
    // `coinage` node updates before later `name` nodes resolve through it.
    // Tagged 'coinage' (a program-level STATEMENT shape, like
    // 'assignment'/'additive'/'composition') so Paragraph threads the node
    // straight onto Program.body rather than wrapping it in an `output` — a
    // Coinage's JS ('silence') never varies by position, so lowerIr dispatches
    // on the node's own `type` alone.
    Coinage(m, b, E, y, A, _, x) {
      const G = s(E), R = x.toIr();
      return { kind: "coinage", node: Ho({ coined: G, target: R }) };
    },
    // Typed coinage targets: a kind keyword + quoted value, or a bare function
    // word. A func target keeps its raw SURFACE word and defers resolution to
    // lowerIr's environment (see Coinage above); a sound/note/scale target's
    // quoted value is a literal name that needs no resolution.
    CoinTarget_sound(m, b, E) {
      return { kind: "sound", value: s(E) };
    },
    CoinTarget_note(m, b, E) {
      return { kind: "note", value: s(E) };
    },
    CoinTarget_scale(m, b, E) {
      return { kind: "scale", value: s(E) };
    },
    CoinTarget_func(m) {
      return { kind: "func", value: n(m) };
    },
    // Higher-order every-family clause: a method word, a numeric count, then a
    // BARE transform word, e.g. `hvert 4 rev` -> `hvert(4, rev)`. The method
    // head is noun-normalized like the generic clause; the transform word
    // becomes a 'transform'-role name node so it lowers as a bare identifier.
    Clause_everyTransform(m, b, E, y, A) {
      return {
        kind: "call",
        surface: n(m),
        canonical: t(n(m)),
        args: [E.toIr(), d(A)]
      };
    },
    // Higher-order probabilistic clause: a method word then a BARE transform
    // word, e.g. `sometimes rev` -> `sometimes(rev)` — Clause_everyTransform
    // without the numeric count.
    Clause_probTransform(m, b, E) {
      return {
        kind: "call",
        surface: n(m),
        canonical: t(n(m)),
        args: [d(E)]
      };
    },
    // Bare numeric argument: a word followed by a digits/decimal/negative
    // literal or a worded numeral, e.g. `hægt 2` / `hægt tvö`. numericArg below
    // builds the `number` node.
    Clause_numarg(m, b, E) {
      return {
        kind: "call",
        surface: n(m),
        canonical: t(n(m)),
        args: [I(E.toIr(), E)]
      };
    },
    // Tempo clause: `Takturinn er <numeric expr>` -> `setcpm(<expr>)`. Tagged
    // 'value', NOT 'call': a `tempo` node is a whole-sentence value, not a
    // method-call family descriptor — Sentence returns it as a result of its
    // own (hoisted, in a longer sentence), and Paragraph's 'value' case pushes
    // it as a plain `output` with no auto-stack participation.
    Clause_tempo(m) {
      return { kind: "value", value: m.toIr() };
    },
    TempoClause(m, b, E) {
      return Po(E.toIr());
    },
    // Arrange clause: `Raðaðu: N lotur af X, …` -> `arrange([N, X], …)`. Tagged
    // 'value' for the same reason as Clause_tempo.
    Clause_arrange(m) {
      return { kind: "value", value: m.toIr() };
    },
    ArrangeClause(m, b, E, y, A) {
      const _ = [E.toIr()].concat(e(A).map((x) => x.toIr()));
      return qo(_);
    },
    ArrangeItem(m, b, E, y) {
      return Wo({ count: m.toIr(), target: y.toIr() });
    },
    ArrangeTarget_silence(m) {
      return cn();
    },
    // sectionName's own action returns a full `name` node (role 'section') for
    // SectionHeader's sake; an arrange target needs only the bare canonical
    // identifier a `ref` points at, so this extracts `.canonical` rather than
    // duplicating sectionName's lowercasing logic.
    ArrangeTarget_name(m) {
      return dr(m.toIr().canonical);
    },
    // Numeric (arithmetic) expression: numbers joined by worded operators.
    // Resolves only WHICH operator matched — the ` op ` spacing is lowerIr's
    // formatting decision (see ir.js's numExpr).
    NumExpr(m, b, E) {
      const y = e(b).map((x) => x.toIr()), A = e(E).map((x) => x.toIr()), _ = y.map((x, G) => ({ op: x, value: A[G] }));
      return Mo({ first: m.toIr(), rest: _ });
    },
    numLit(m) {
      return m.toIr();
    },
    ArithOp_div(m) {
      return "/";
    },
    ArithOp_mul(m) {
      return "*";
    },
    ArithOp_add(m) {
      return "+";
    },
    ArithOp_sub(m) {
      return "-";
    },
    // Expression argument on a control: `<control> fylgir <expr>` ->
    // `control(<expr>)`. Returns the SAME kind:'call' shape as the method-call
    // family (methodCallIr) — a fylgir clause is an ordinary control clause
    // whose sole argument happens to be a `chain` node instead of a
    // mini/number/scale/degree — so it drops into an ordinary chain position via
    // Sentence, which is what lets the 'mid-chain parenthetical' CORPUS row's
    // trailing `, hægt 2` land as a normal Sentence-level ClauseTail after it.
    Clause_exprArg(m, b, E, y, A) {
      return {
        kind: "call",
        surface: n(m),
        canonical: t(n(m)),
        args: [A.toIr()]
      };
    },
    ExprArg_paren(m, b, E) {
      return b.toIr();
    },
    ExprArg_bare(m) {
      return m.toIr();
    },
    // Expr always yields a `chain` node (see ir.js) — even with zero
    // ExprMethods, so the shape is uniform whether or not the expression chains
    // further methods.
    Expr(m, b) {
      const E = m.toIr(), y = e(b).map((A) => A.toIr());
      return gr({ head: E, methods: y });
    },
    // A þá-sequence. A single UNWEIGHTED term collapses to that term's own value
    // (no `sequence` wrapper) — a MEANING decision (whether a sequence construct
    // exists at all), so it belongs here, not in lowerIr; contrast the
    // cat-vs-timecat choice, which IS lowerIr's formatting decision (ir.js's
    // `sequence`).
    Seq(m, b, E) {
      const y = [m.toIr()].concat(e(E).map((_) => _.toIr())), A = y.some((_) => _.weighted);
      return y.length === 1 && !A ? y[0].value : Vo(y.map((_) => ({ weight: _.weighted ? _.weight : null, value: _.value })));
    },
    SeqTerm_weighted(m, b, E, y) {
      return { weighted: !0, weight: b.toIr(), value: y.toIr() };
    },
    SeqTerm_plain(m) {
      return { weighted: !1, value: m.toIr() };
    },
    Term_group(m, b, E) {
      return b.toIr();
    },
    Term_pick(m, b, E, y, A, _) {
      const x = [y.toIr()].concat(e(_).map((G) => G.toIr()));
      return Ko({ from: m.toIr(), options: x });
    },
    Term_value(m) {
      return m.toIr();
    },
    ExprValue_signal(m) {
      return m.toIr();
    },
    ExprValue_str(m) {
      return l(m);
    },
    ExprValue_num(m) {
      return m.toIr();
    },
    // A signal source -> a `signal` node; ir.js's `signal` says why `value`, not
    // `canonical`, carries the resolved English identifier.
    signalWord(m) {
      const b = this.sourceString;
      return Uo({ surface: b, value: dt[b.toLowerCase()] });
    },
    // A chained `.method(args)` inside an Expr -> a `method` node (role
    // 'parameter'), the same shape a patternCall chain link uses (ir.js's
    // `chain`).
    ExprMethod(m, b, E) {
      const y = b.sourceString, A = E && E.numChildren > 0 ? E.child(0).toIr() : [];
      return fn({ name: F({ surface: y, canonical: t(y), role: "parameter" }), args: A });
    },
    ExprArgs_numeric(m, b, E) {
      return [m.toIr()].concat(e(E).map((y) => y.toIr()));
    },
    ExprArgs_quoted(m) {
      return [l(m)];
    },
    word(m) {
      return this.sourceString;
    },
    // Delegates to its single child (timesPhrase | numeral | numberWord); each
    // already yields a `number` node.
    numericArg(m) {
      return m.toIr();
    },
    // Bare numeral -> a `number` node carrying its canonical text, which is the
    // emitted JS number literal: '-0.5', '1.2', '2'. The written text is kept
    // as `surface` only when it differs ('010').
    numeral(m, b, E, y) {
      const A = this.sourceString, _ = p(A);
      return mn({ value: _, surface: _ === A ? void 0 : A });
    },
    // Worded cardinal -> a `number` node whose value is its resolved integer as
    // a string ('tólf' -> '12'), with the original word kept as `surface`.
    numberWord(m) {
      return mn({ value: String(Ir[this.sourceString.toLowerCase()]), surface: this.sourceString });
    },
    // "N sinnum": delegates to the count (numeral | numberWord), dropping the
    // inter-token space and the trailing 'sinnum'.
    timesPhrase(m, b, E) {
      return m.toIr();
    },
    // DegreeArg -> a `degree` node: the numeral's canonical text, the adverb's
    // resolved factor, and the adverb's own source text. The ` * ` product
    // formatting is deferred to lowerIr.
    DegreeArg(m, b) {
      const E = m.sourceString, y = gt[E.toLowerCase()];
      return $o({ value: p(b.sourceString), factor: y, surfaceAdverb: E });
    },
    // AdjArg -> a `scale` node: the resolved 0..1 value (adjScaleValue folds an
    // emphasis adverb's effect into it) plus the whole matched text — adverb +
    // adjective, or just the adjective — as `surface`.
    AdjArg(m, b) {
      const E = m.sourceString.trim(), y = $u(E || null, b.sourceString);
      return Bo({ surface: this.sourceString.trim(), value: y });
    },
    quotation(m, b, E) {
      return { text: b.toIr(), start: this.source.startIdx };
    },
    // Decimal-comma normalization: a comma directly between two digits is an
    // Icelandic decimal separator. A MEANING decision, not a formatting one —
    // the mini-notation string's true value (a decimal point, not a second
    // parallel value) doesn't depend on which backend lowerIr targets — so it
    // belongs in toIr; lowerIr only decides how to quote an already-normalized
    // string. Euclidean rhythm commas ("bd(3,8)") are tracked by paren depth and
    // left alone. Only a run of digits, commas and points that is exactly
    // digits,digits is a decimal: '0,4,7' and '0.5,1' cannot be one number, so
    // their commas stay mini-notation stack commas. A comma joins the run only
    // between digits, so '0,5, 0,75' is two decimals. A two-term '0,4' is read
    // as 0.4 even inside brackets ('<0,5 0,75>'); a two-note chord takes a space
    // ('0, 4').
    quotedContent(m) {
      const b = this.sourceString;
      if (!b.includes(",")) return b;
      const E = (_, x) => /[\d.]/.test(b[_]) || b[_] === "," && /\d/.test(b[x]);
      let y = "", A = 0;
      for (let _ = 0; _ < b.length; _++) {
        const x = b[_];
        if (x === "(" ? A++ : x === ")" && A > 0 && A--, x === "," && A === 0) {
          let G = _;
          for (; G > 0 && E(G - 1, G - 2); ) G--;
          let R = _ + 1;
          for (; R < b.length && E(R, R + 1); ) R++;
          y += /^\d+,\d+$/.test(b.slice(G, R)) ? "." : x;
        } else
          y += x;
      }
      return y;
    },
    _terminal() {
      return this.sourceString;
    },
    _iter(...m) {
      return m.map((b) => b.toIr());
    }
  }, sentenceActions: Qe };
}
function Jo(t, e) {
  const r = [...t], n = [...e], i = new Array(n.length + 1), s = new Array(n.length + 1);
  for (let l = 0; l <= n.length; l++) i[l] = l;
  for (let l = 1; l <= r.length; l++) {
    s[0] = l;
    for (let c = 1; c <= n.length; c++) {
      const g = r[l - 1] === n[c - 1] ? 0 : 1;
      s[c] = Math.min(i[c] + 1, s[c - 1] + 1, i[c - 1] + g);
    }
    for (let c = 0; c <= n.length; c++) i[c] = s[c];
  }
  return i[n.length];
}
const Qo = 2, Yo = (t) => Math.min(Qo, Math.floor([...t].length / 2));
function Xo(t, e) {
  const r = Yo(t);
  if (r < 1) return null;
  let n = null, i = 1 / 0;
  for (const s of e) {
    if (s === t) continue;
    const l = Jo(t, s);
    l > r || (n === null || l < i || l === i && s < n) && (n = s, i = l);
  }
  return n;
}
const ie = (t) => JSON.stringify(t), gn = /* @__PURE__ */ new Map([
  // Quote marks — opener and closer alike collapse to one concept: a quotation
  // is expected here. «, „ and the ASCII " open one; ", “ and » close one (the
  // ASCII " does double duty, per grammar.js's openQuote/closeQuote).
  [ie("«"), "tilvitnun"],
  [ie("„"), "tilvitnun"],
  [ie('"'), "tilvitnun"],
  [ie("»"), "tilvitnun"],
  [ie("“"), "tilvitnun"],
  // Sentence terminators collapse to one word, kept DISTINCT from the
  // clause-separating comma below — losing that distinction would hide that
  // starting a NEW clause is also a valid continuation, not just ending the
  // sentence.
  [ie("."), "punkti"],
  [ie("?"), "punkti"],
  [ie("!"), "punkti"],
  [ie(","), "kommu"],
  // En dash and em dash are interchangeable as a clause separator
  // (dashSeparator) — one Icelandic word covers both.
  [ie("–"), "striki"],
  [ie("—"), "striki"],
  // A section header ends in a colon; a paragraph break is a newline; a
  // parenthetical group opens and closes with a bracket.
  [ie(":"), "tvípunkti"],
  [ie(`
`), "línuskilum"],
  [ie("("), "sviga"],
  [ie(")"), "sviga"],
  ["end of input", "enda textans"],
  // Ohm's generic label for the implicit auto-space-skip between
  // syntactic-rule terms; the only source of this exact text in this grammar.
  ["a space", "bili"],
  // Kernel primitives with no PExpr body left to recurse into, so Ohm reports
  // them atomically. Kept at the CHARACTER level, NOT mapped to a higher-level
  // "numeral"/"word" framing: `digit` also completes a section name's trailing
  // digits (sectionName = letter (letter|digit)*) and `letter` also starts a
  // variable, a section name, or a bare method word — one failure text shared
  // by several unrelated rules, so only a neutral reading is honest in every
  // context.
  ["a digit", "tölustaf"],
  ["a letter", "bókstaf"],
  // `~letter` is only ever a word-end guard after a keyword ('spila' must not
  // run on into 'spilasamtímis'), so its failure reads as a word boundary.
  ["not a letter", "orðaskilum"]
]);
function Zo(t) {
  const e = t.toString();
  if (gn.has(e)) return gn.get(e);
  const r = Ft.exec(e);
  return r ? Object.hasOwn(Ir, r[1]) ? "töluorði" : `„${r[1]}“` : t.isStringTerminal() ? `„${t.getText()}“` : t.isDescription() && e.startsWith("not ") ? null : e;
}
function ef(t, e) {
  const r = /* @__PURE__ */ new Set(), n = [];
  for (const i of t) {
    if (i.isFluffy()) continue;
    const s = Zo(i);
    s === null || r.has(s) || (r.add(s), n.push(s));
  }
  return n.length === 0 ? /^-?\d/.test(e) ? "Þessi tala á ekki heima hér." : "Þetta orð á ekki heima hér." : `Bjóst við ${nt(n)}.`;
}
const rf = /* @__PURE__ */ new Map([
  ["Sentence (clause-tail of kind 'assignment')", "„… spilar …“ byrjar nýja setningu: settu punkt á undan."],
  ["Sentence (clause-tail of kind 'additive')", "„Líka …“ byrjar nýja setningu: settu punkt á undan."],
  ["Sentence (clause-tail of kind 'arrange')", "„Raðaðu: …“ byrjar nýja setningu: settu punkt á undan."],
  ["Sentence (clause-tail of kind 'composition')", "„mynstur … spila …“ byrjar nýja setningu: settu punkt á undan."],
  ["Paragraph (section layer with 'assignment' clause)", "„… spilar …“ á ekki heima í kafla: hver setning í kafla er ónefnt lag."],
  ["Paragraph (section layer with 'additive' clause)", "„Líka …“ á ekki heima í kafla: hver setning í kafla er þegar lag."]
]);
function fa(t) {
  return t instanceof oa ? rf.get(t.ctorName) ?? "Skil setninguna en kann ekki að spila hana." : null;
}
function tf(t, { vocabulary: e = /* @__PURE__ */ new Set() } = {}) {
  const r = [...bt().keys()], n = () => [...e, ...vt, ..._r, ...r];
  function i(l, c) {
    if (/^(?:\s|- [^-]*-)*$/.test(c)) return "Hér er enginn texti enn.";
    const g = c.normalize("NFC");
    if (g !== c && !t.match(g, "Text").failed())
      return "Textinn inniheldur sundraða kommustafi, líklega úr afrituðum texta. Skrifaðu stafina upp á nýtt.";
    const d = l.getRightmostFailurePosition(), F = c.slice(d);
    if (/^\s*$/.test(F) && !t.match(`${c.slice(0, d)}.${F}`, "Text").failed())
      return "Vantar punkt (eða ? / !) í lok setningar.";
    const h = c[d] === "," ? d : c[d - 1] === "," ? d - 1 : -1, p = h > 0 && c.slice(0, h).match(/-?\d+$/), v = h > 0 && c.slice(h + 1).match(/^\d+/);
    if (p && v) {
      const S = t.match(`${c.slice(0, h)}.${c.slice(h + 1)}`, "Text");
      if (!S.failed() || S.getRightmostFailurePosition() >= h + 1 + v[0].length)
        return `Utan gæsalappa er tugabrot skrifað með punkti: ${p[0]}.${v[0]}, ekki ${p[0]},${v[0]}.`;
    }
    let I = 1, L = 1;
    for (let S = 0; S < d; S++)
      c[S] === `
` ? (I += 1, L = 1) : L += 1;
    const T = l.message.split(`
`).slice(1, -1).join(`
`), w = ef(l.getRightmostFailures(), F);
    return `Skil ekki við staf ${L} í línu ${I}:
${T}
${w}`;
  }
  function s(l, c) {
    const g = l && l.message || "", d = g.match(/^Cannot access '([^']+)' before initialization\.?$/);
    if (d) return `Nafnið „${d[1]}“ er notað áður en það er skilgreint.`;
    const F = g.match(/^(?:(\S+) is not defined|Can't find variable: (\S+))$/), h = g.match(/\.([^\s.()]+) is not a function(?:$|\.)/), p = F ? F[1] ?? F[2] : h ? h[1] : null;
    if (!p) return null;
    const v = Xo(p, n());
    return v ? `Óþekkt orð „${p}“ — áttirðu við „${v}“?` : `Óþekkt orð „${p}“.`;
  }
  return { describeFailure: i, describeEvalError: s };
}
function nf(t = {}, e = Se()) {
  const { normalizeNoun: r, resolveName: n, registerVocabulary: i, vocabulary: s } = e, l = (d) => d && d.children ? d.children : [];
  return { actions: {
    // The whole `translate` operation: build the IR via the sibling 'toIr'
    // operation, then lower it to Strudel JS. `this.toIr()` covers the grammar
    // on its own, so this is the ONLY action 'translate' needs — it never
    // recurses through `.translate()` on a child node, hence no _iter/_terminal
    // defaults either. A shape toIr declines surfaces as Icelandic advice
    // (errors.js), the IrNotCovered kept as its `cause`.
    Text(d, F, h, p, v) {
      let I;
      try {
        I = this.toIr();
      } catch (L) {
        const T = fa(L);
        throw T === null ? L : new Error(T, { cause: L });
      }
      return na(I, t, e);
    }
  }, sentenceActions: {
    Paragraph(d, F, h, p, v) {
      return [h].concat(l(v));
    }
  }, registerVocabulary: i, normalizeNoun: r, resolveName: n, vocabulary: s };
}
const af = [
  {
    title: "Eitt hljóð",
    tier: "baseline",
    note: "one function, one pattern arg",
    strudel: 'sound("bd")',
    localeIs: 'hljóð("bt")',
    ristavel: "hljóð „bt“."
  },
  {
    title: "Tveir stillar, tengdir með kommu",
    tier: "baseline",
    note: "comma = method chain",
    strudel: 'sound("bd sd").room("0.5")',
    localeIs: 'hljóð("bt st").ómur("0.5")',
    ristavel: "hljóð „bt st“, ómur „0.5“."
  },
  {
    title: "Tengiorðið „og“",
    tier: "clause-conjunctions",
    note: "og (and) chains like a comma",
    strudel: 'sound("bd sd").distort("0.2 0.5").pan("0")',
    localeIs: 'hljóð("bt st").bjaga("0.2 0.5").staðsetning("0")',
    ristavel: "hljóð „bt st“, bjaga „0.2 0.5“ og staðsetning „0“."
  },
  {
    title: "Tengiorðin „en“ og „ásamt“",
    tier: "clause-conjunctions",
    note: "en / ásamt are further chaining connectors",
    strudel: 'sound("bd").gain("1.2").room("0.3")',
    localeIs: 'hljóð("bt").styrkur("1.2").ómur("0.3")',
    ristavel: "hljóð „bt“, styrkur „1.2“ ásamt ómur „0.3“."
  },
  {
    title: "Þankastrik tengir eins og komma",
    tier: "clause-conjunctions",
    note: "an em dash also chains",
    strudel: 'sound("bd").pan("0.5")',
    localeIs: 'hljóð("bt").staðsetning("0.5")',
    ristavel: "hljóð „bt“ — staðsetning „0.5“."
  },
  {
    title: "Gæsalappir «…»",
    tier: "guillemet-quotes",
    note: "«…» as an alternative quote pair",
    strudel: 'sound("bd").gain("0.8")',
    localeIs: 'hljóð("bt").styrkur("0.8")',
    ristavel: "hljóð «bt», styrkur «0.8»."
  },
  {
    title: "Tölum með orðum",
    tier: "worded-numerals",
    note: "tvisvar (twice) → 2",
    strudel: 'note("c e g").slow(2)',
    localeIs: 'nótur("c e g").hægt(2)',
    ristavel: "nótur „c e g“, hægt tvisvar."
  },
  {
    title: "Talning með „sinnum“",
    tier: "worded-numerals",
    note: "þrisvar sinnum (three times) → 3",
    strudel: 'sound("bd*4").fast(3)',
    localeIs: 'hljóð("bt*4").fljótt(3)',
    ristavel: "hljóð „bt*4“, fljótt þrisvar sinnum."
  },
  {
    title: "Talning með „sinnum“ (þágufall)",
    tier: "worded-numerals",
    note: "sinnum takes the dative: fjórum sinnum (four times) → 4",
    strudel: 'sound("bd*4").fast(4)',
    localeIs: 'hljóð("bt*4").fljótt(4)',
    ristavel: "hljóð „bt*4“, fljótt fjórum sinnum."
  },
  {
    title: "Ber tala sem stilliviðfang",
    tier: "bare-numeric-arg",
    note: "unquoted number, like real Strudel",
    strudel: 'sound("bd*4").fast(2)',
    localeIs: 'hljóð("bt*4").fljótt(2)',
    ristavel: "hljóð „bt*4“, fljótt 2."
  },
  {
    title: "Íslenskt tugabrotskomma",
    tier: "decimal-comma-normalization",
    note: "0,75 → 0.75",
    strudel: 'sound("bd").gain("0.75")',
    localeIs: 'hljóð("bt").styrkur("0.75")',
    ristavel: "hljóð „bt“, styrkur „0,75“."
  },
  {
    title: "Euclid-hrynjandi lifir tugabrotsregluna af",
    tier: "euclid-comma-safe-normalization",
    note: "bt(3,8) stays a euclid call; only the bare decimal comma is fixed",
    strudel: 'sound("bd(3,8)").gain("0.9")',
    localeIs: 'hljóð("bt(3,8)").styrkur("0.9")',
    ristavel: "hljóð „bt(3,8)“, styrkur „0,9“."
  },
  {
    title: "Beygt nafnorð (með greini)",
    tier: "noun-form-normalization",
    note: "ómurinn (the reverb) → ómur",
    strudel: 'sound("bd sd").room("0.5")',
    localeIs: 'hljóð("bt st").ómur("0.5")',
    ristavel: "hljóð „bt st“, ómurinn „0.5“."
  },
  {
    title: "BÍN-beygð mynd: þolfall „litinn“",
    tier: "bin-noun-forms",
    note: "productive inflection: litinn → litur",
    strudel: 'sound("bd").color("rauður")',
    localeIs: 'hljóð("bt").litur("rauður")',
    ristavel: "hljóð „bt“, litinn „rauður“."
  },
  {
    title: "Forsetningarliður",
    tier: "prepositional-noun-phrase",
    note: "með ómi (with reverb, dative) → room",
    strudel: 'sound("bd sd").room("0.5")',
    localeIs: 'hljóð("bt st").ómur("0.5")',
    ristavel: "hljóð „bt st“, með ómi „0.5“."
  },
  {
    title: "Verkefni með sjálfvirkri stöflun",
    tier: "assignment",
    note: "X spilar … ; a named pattern auto-stacks",
    strudel: 'const davíð = sound("gm_church_organ").gain("1.2").room("1.5"); stack(davíð)',
    localeIs: 'const davíð = hljóð("orgel").styrkur("1.2").ómur("1.5"); stack(davíð)',
    ristavel: "Davíð spilar hljóð „orgel“, styrkur „1.2“ og ómur „1.5“."
  },
  {
    title: "Neitun → hush",
    tier: "negation-polarity",
    note: "ekki (not) silences with hush()",
    strudel: 'const davíð = sound("bd").hush(); stack(davíð)',
    localeIs: 'const davíð = hljóð("bt").hush(); stack(davíð)',
    ristavel: "Davíð spilar ekki hljóð „bt“."
  },
  {
    title: "Neitun → silence",
    tier: "negation-polarity",
    note: "aldrei (never) → silence",
    strudel: "const ásta = silence; stack(ásta)",
    localeIs: "const ásta = silence; stack(ásta)",
    ristavel: "Ásta spilar aldrei hljóð „bt“."
  },
  {
    title: "Neitun → silence (ekkert)",
    tier: "negation-polarity",
    note: "ekkert (nothing) silences the part entirely, like aldrei",
    strudel: "const ásta = silence; stack(ásta)",
    localeIs: "const ásta = silence; stack(ásta)",
    ristavel: "Ásta spilar ekkert hljóð „bt“."
  },
  {
    title: "Neitaður stillir → gain(0)",
    tier: "negation-polarity",
    note: "ekki on a gain control mutes the voice with gain(0)",
    strudel: 'sound("bd").gain(0)',
    localeIs: 'hljóð("bt").gain(0)',
    ristavel: "hljóð „bt“, ekki styrkur „1.2“."
  },
  {
    title: "Neitaður stillir fellur brott",
    tier: "negation-polarity",
    note: "ekki on any other control leaves just that control out",
    strudel: 'sound("bd").pan("0.3")',
    localeIs: 'hljóð("bt").staðsetning("0.3")',
    ristavel: "hljóð „bt“, ekki ómur „0.5“, staðsetning „0.3“."
  },
  {
    title: "Mynstur saman (stack)",
    tier: "composition",
    note: "play named patterns simultaneously",
    strudel: 'const davíð = sound("bd ~"); const ásta = sound("~ sd"); stack(davíð,ásta)',
    localeIs: 'const davíð = hljóð("bt ~"); const ásta = hljóð("~ st"); stack(davíð,ásta)',
    ristavel: "Davíð spilar hljóð „bt ~“. Ásta spilar hljóð „~ st“. mynstur „Davíð Ásta“ spila samtímis."
  },
  {
    title: "Mynstur í röð (cat)",
    tier: "composition",
    note: "play named patterns in sequence",
    strudel: 'const davíð = sound("bd ~"); const ásta = sound("~ sd"); cat(davíð,ásta)',
    localeIs: 'const davíð = hljóð("bt ~"); const ásta = hljóð("~ st"); cat(davíð,ásta)',
    ristavel: "Davíð spilar hljóð „bt ~“. Ásta spilar hljóð „~ st“. mynstur „Davíð Ásta“ spila í röð."
  },
  {
    title: "Mynstur til skiptis af handahófi (randcat)",
    tier: "composition",
    note: "spila eða → randcat: pick a different one each cycle",
    strudel: 'const davíð = sound("bd"); const ásta = sound("sd"); randcat(davíð,ásta)',
    localeIs: 'const davíð = hljóð("bt"); const ásta = hljóð("st"); randcat(davíð,ásta)',
    ristavel: "Davíð spilar hljóð „bt“. Ásta spilar hljóð „st“. mynstur „Davíð Ásta“ spila eða."
  },
  {
    title: "Mynstur í einni lotu (seq)",
    tier: "composition",
    note: "spila í einni lotu → seq: all squeezed into one cycle",
    strudel: 'const davíð = sound("bd"); const ásta = sound("sd"); seq(davíð,ásta)',
    localeIs: 'const davíð = hljóð("bt"); const ásta = hljóð("st"); seq(davíð,ásta)',
    ristavel: "Davíð spilar hljóð „bt“. Ásta spilar hljóð „st“. mynstur „Davíð Ásta“ spila í einni lotu."
  },
  {
    title: "Tengiorð samsetningar: „síðan“ (cat)",
    tier: "composition-list-connectives",
    note: "síðan / svo / þá → cat as a list connective after spila",
    strudel: 'const davíð = sound("bd"); const ásta = sound("sd"); cat(davíð,ásta)',
    localeIs: 'const davíð = hljóð("bt"); const ásta = hljóð("st"); cat(davíð,ásta)',
    ristavel: "Davíð spilar hljóð „bt“. Ásta spilar hljóð „st“. mynstur „Davíð Ásta“ spila síðan."
  },
  {
    title: "Margir geranlar í einni setningu",
    tier: "discourse-structure",
    note: "Davíð og Ásta spila … (both play, auto-stacked)",
    strudel: 'const davíð = sound("bd"); const ásta = sound("bd"); stack(davíð,ásta)',
    localeIs: 'const davíð = hljóð("bt"); const ásta = hljóð("bt"); stack(davíð,ásta)',
    ristavel: "Davíð og Ásta spila hljóð „bt“."
  },
  {
    title: "Viðbótarlag með „líka“",
    tier: "discourse-structure",
    note: "Líka … adds an unnamed voice (lag2) under the running stack",
    strudel: 'const davíð = sound("bd ~"); const lag2 = sound("~ sd"); stack(davíð,lag2)',
    localeIs: 'const davíð = hljóð("bt ~"); const lag2 = hljóð("~ st"); stack(davíð,lag2)',
    ristavel: "Davíð spilar hljóð „bt ~“. Líka hljóð „~ st“."
  },
  {
    title: "Boðháttur: „Spilaðu …“",
    tier: "discourse-structure",
    note: "command mood → a bare, un-stacked pattern",
    strudel: 'sound("bd ~").gain("1.2")',
    localeIs: 'hljóð("bt ~").styrkur("1.2")',
    ristavel: "Spilaðu hljóð „bt ~“, styrkur „1.2“."
  },
  {
    title: "Upphrópun lýkur setningu",
    tier: "expressive-terminators",
    note: "! ends a sentence too",
    strudel: 'sound("bd sd").room("0.5")',
    localeIs: 'hljóð("bt st").ómur("0.5")',
    ristavel: "hljóð „bt st“, ómur „0.5“!"
  },
  {
    title: "Spurningarmerki lýkur setningu",
    tier: "expressive-terminators",
    note: "? ends a sentence too (like . and !)",
    strudel: 'sound("bd sd").room("0.5")',
    localeIs: 'hljóð("bt st").ómur("0.5")',
    ristavel: "hljóð „bt st“, ómur „0.5“?"
  },
  {
    title: "Stigsatviksorð skalar tölu",
    tier: "degree-adverbs",
    note: "mjög intensifies a numeral: 0.8 → 0.8 * 1.5",
    strudel: 'sound("bd").gain(0.8 * 1.5)',
    localeIs: 'hljóð("bt").styrkur(0.8 * 1.5)',
    ristavel: "hljóð „bt“, styrkur mjög 0.8."
  },
  {
    title: "Stigsatviksorð sem tvöfaldar (alveg)",
    tier: "degree-adverbs",
    note: "alveg doubles the numeral: 0.4 → 0.4 * 2 (örlítið / smá halve it)",
    strudel: 'sound("bd").gain(0.4 * 2)',
    localeIs: 'hljóð("bt").styrkur(0.4 * 2)',
    ristavel: "hljóð „bt“, styrkur alveg 0.4."
  },
  {
    title: "Viðfangslaus aðferð (nullary)",
    tier: "nullary-method-clause",
    note: "a bare method word chains as a no-arg call: rev → rev()",
    strudel: 'sound("bd sd").room("0.4").rev()',
    localeIs: 'hljóð("bt st").ómur("0.4").rev()',
    ristavel: "hljóð „bt st“, ómur „0.4“, rev."
  },
  {
    title: "Lýsingarorðsskali — „engar tölur, bara orð“",
    tier: "adjective-scaling",
    note: "a graded adjective sets the amount: stór → 0.75 (report Tafla 4)",
    strudel: 'sound("bd").gain(0.75)',
    localeIs: 'hljóð("bt").styrkur(0.75)',
    ristavel: "hljóð „bt“, styrkur stór."
  },
  {
    title: "Lýsingarorðsskali með áherslu",
    tier: "adjective-scaling",
    note: "an emphasis adverb nudges it: mjög stór → 0.85 (report Tafla 5)",
    strudel: 'sound("bd").gain(0.85)',
    localeIs: 'hljóð("bt").styrkur(0.85)',
    ristavel: "hljóð „bt“, styrkur mjög stór."
  },
  {
    title: "Lýsingarorðsskali alhæfir yfir stilla",
    tier: "adjective-scaling",
    note: "same words drive any control: stærstur → 1 on reverb",
    strudel: 'sound("bd").room(1)',
    localeIs: 'hljóð("bt").ómur(1)',
    ristavel: "hljóð „bt“, ómur stærstur."
  },
  {
    title: "Hærri röð: „hvert N <umbreyting>“ (every)",
    tier: "higher-order-transform-clause",
    note: "hvert 4 rev → every(4, rev); the transform stays a bare identifier",
    strudel: 'sound("bd*4").every(4, rev)',
    localeIs: 'hljóð("bt*4").hvert(4, rev)',
    ristavel: "hljóð „bt*4“, hvert 4 rev."
  },
  {
    title: "Líkindaumbreyting: „stundum <umbreyting>“ (sometimes)",
    tier: "higher-order-transform-clause",
    note: "stundum rev → sometimes(rev)",
    strudel: 'sound("bd*4").sometimes(rev)',
    localeIs: 'hljóð("bt*4").stundum(rev)',
    ristavel: "hljóð „bt*4“, stundum rev."
  },
  {
    title: "Norræn/þýsk nótnaheiti (H = B)",
    tier: "note-names",
    note: "preloaded note vocabulary: h → b (German/Nordic H), plus -is/-es accidentals",
    strudel: 'note("h cis e")',
    localeIs: 'nótur("h cis e")',
    ristavel: "nótur „h cis e“."
  },
  {
    title: "Tóntegund: dúr / moll",
    tier: "note-names",
    note: "preloaded scale vocabulary: dúr → major, moll → minor",
    strudel: 'note("0 1 2 3 4").scale("c:major")',
    localeIs: 'nótur("0 1 2 3 4").skali("c:dúr")',
    ristavel: "nótur „0 1 2 3 4“, skali „c:dúr“."
  },
  {
    title: "Bandstriksathugasemd er hunsuð",
    tier: "comments",
    note: "a hyphen-delimited aside - like this - is treated as whitespace and ignored anywhere",
    strudel: 'sound("bd sd").room("0.5")',
    localeIs: 'hljóð("bt st").ómur("0.5")',
    ristavel: "hljóð „bt st“ - mjúkur taktur -, ómur „0.5“."
  },
  {
    title: "Taktur með reikningi",
    tier: "tempo-arithmetic",
    note: "set the cycle tempo with arithmetic: 140 deilt með 4 → 140/4 (also sinnum/plús/mínus)",
    strudel: "setcpm(140 / 4)",
    localeIs: "setcpm(140 / 4)",
    ristavel: "Takturinn er 140 deilt með 4."
  },
  {
    title: "Merkjasveifla sem stilliviðfang",
    tier: "signal-expressions",
    note: "„fylgir“ feeds a live signal as an argument: a saw LFO swept over a range, slowed",
    strudel: 'sound("bd*4").lpf(saw.range(200, 2000).slow(4))',
    localeIs: 'hljóð("bt*4").lágtíðnihleypir(saw.bil(200, 2000).hægt(4))',
    ristavel: "hljóð „bt*4“, lágtíðnihleypir fylgir sög, bil 200 og 2000, hægt 4."
  },
  {
    title: "Gildaröð (cat) með „þá“",
    tier: "sequence-expressions",
    note: "þá strings values into a cat sequence, one per cycle; then slowed",
    strudel: 'sound("bd sd").gain(cat(1, 0.5, 0.25).slow(2))',
    localeIs: 'hljóð("bt st").styrkur(cat(1, 0.5, 0.25).hægt(2))',
    ristavel: "hljóð „bt st“, styrkur fylgir 1 þá 0.5 þá 0.25, hægt 2."
  },
  {
    title: "Vegin gildaröð (timecat) með „vog … á …“",
    tier: "sequence-expressions",
    note: "vog W á V weights each step: vog 3 á 1 holds 1 three times as long as vog 1 á 0.2",
    strudel: 'sound("bd sd hh cp").gain(timecat([3, 1], [1, 0.2]))',
    localeIs: 'hljóð("bt st hh kp").styrkur(timecat([3, 1], [1, 0.2]))',
    ristavel: "hljóð „bt st hh kp“, styrkur fylgir vog 3 á 1 þá vog 1 á 0.2."
  },
  {
    title: "Val úr mynstrum (pick) með „velur úr … eða …“",
    tier: "pick-expression",
    note: "an index pattern picks between option patterns: „0 1 0 1“ chooses „x ~“ / „x x“",
    strudel: 'sound("hh").struct("0 1 0 1".pick(["x ~", "x x"]))',
    localeIs: 'hljóð("hh").uppbygging("0 1 0 1".pick(["x ~", "x x"]))',
    ristavel: "hljóð „hh“, uppbygging fylgir „0 1 0 1“ velur úr „x ~“ eða „x x“."
  },
  {
    title: "Kaflar og útsetning (sections & arrange)",
    tier: "sections-arrange",
    note: "a „Kaflinn …:“ paragraph names a stack; „Raðaðu“ sequences sections by cycle-count. Multi-paragraph — select the whole block and run it together.",
    strudel: `const taktur = stack(sound("bd ~"), sound("~ sd"))

arrange([4, taktur])`,
    localeIs: `const taktur = stack(hljóð("bt ~"), hljóð("~ st"))

arrange([4, taktur])`,
    ristavel: `Kaflinn taktur:
hljóð „bt ~“.
hljóð „~ st“.

Raðaðu: 4 lotur af taktur.`
  },
  {
    title: "Töluorð 11-20",
    tier: "worded-numerals-teens",
    note: "tólf (twelve) → 12",
    strudel: 'note("c e g").slow(12)',
    localeIs: 'nótur("c e g").hægt(12)',
    ristavel: "nótur „c e g“, hægt tólf."
  },
  {
    title: "Talning 11-20 með „sinnum“",
    tier: "worded-numerals-teens",
    note: "a counted phrase: sextán sinnum (sixteen times) → 16",
    strudel: 'sound("bd*4").fast(16)',
    localeIs: 'hljóð("bt*4").fljótt(16)',
    ristavel: "hljóð „bt*4“, fljótt sextán sinnum."
  },
  {
    title: "Kóði, fullt heiti og beygð mynd",
    tier: "sound-names",
    note: "„bt“ = „bassatromma“ = „bassatrommu“: the code, the full name and an inflected form all play bd",
    strudel: 'sound("bd bd bd")',
    localeIs: 'hljóð("bt bassatromma bassatrommu")',
    ristavel: "hljóð „bt bassatromma bassatrommu“."
  },
  {
    title: "Hljóð sneriltrommunnar",
    tier: "sound-names",
    note: 'a definite genitive reads as prose, "the sound of the snare drum", and plays sd',
    strudel: 'sound("sd").room("0.5")',
    localeIs: 'hljóð("sneriltrommunnar").ómur("0.5")',
    ristavel: "hljóð „sneriltrommunnar“, ómur „0.5“."
  },
  {
    title: "Hljóðfæri spilar nótur",
    tier: "sound-names",
    note: "orgel → gm_church_organ, a soundfont that plays any pitch",
    strudel: 'note("c3 e3 g3").sound("gm_church_organ").room("0.8")',
    localeIs: 'nótur("c3 e3 g3").hljóð("orgel").ómur("0.8")',
    ristavel: "nótur „c3 e3 g3“, hljóð „orgel“, ómur „0.8“."
  },
  {
    title: "Sýnisnúmer á íslenskum kóða",
    tier: "sound-names",
    note: "the :n sample index works on an Icelandic code: bt:1 → bd:1",
    strudel: 'sound("bd:1 sd:2")',
    localeIs: 'hljóð("bt:1 st:2")',
    ristavel: "hljóð „bt:1 st:2“."
  },
  {
    title: "Sög og sínus: hljóð og merki",
    tier: "sound-names",
    note: "the waveform words name both: „sög“ is the sawtooth sound, fylgir sínus the sine signal",
    strudel: 'note("c2 c3").sound("sawtooth").lpf(sine.range(300, 2000).slow(4))',
    localeIs: 'nótur("c2 c3").hljóð("sög").lágtíðnihleypir(sine.bil(300, 2000).hægt(4))',
    ristavel: "nótur „c2 c3“, hljóð „sög“, lágtíðnihleypir fylgir sínus, bil 300 og 2000, hægt 4."
  },
  {
    title: "Strengjahljóðfæri saman",
    tier: "sound-names",
    note: "fiðla → gm_violin, kontrabassi → gm_contrabass, one per named part",
    strudel: 'const davíð = note("c4 e4 g4").sound("gm_violin"); const ásta = note("c2").sound("gm_contrabass"); stack(davíð,ásta)',
    localeIs: 'const davíð = nótur("c4 e4 g4").hljóð("fiðla"); const ásta = nótur("c2").hljóð("kontrabassi"); stack(davíð,ásta)',
    ristavel: "Davíð spilar nótur „c4 e4 g4“, hljóð „fiðla“. Ásta spilar nótur „c2“, hljóð „kontrabassi“."
  },
  {
    title: "b er B♭, es er E♭, as er A♭",
    tier: "note-names",
    note: 'b, es and as are B♭, E♭ and A♭ in the language only: plain Strudel note("b") stays B (h is B in both)',
    strudel: 'note("bb eb ab")',
    localeIs: 'nótur("b es as")',
    ristavel: "nótur „b es as“."
  },
  {
    title: "Tóntegundin b-moll",
    tier: "note-names",
    note: "a scale root takes the same note names: b:moll is B♭ minor",
    strudel: 'note("0 2 4").scale("bb:minor")',
    localeIs: 'nótur("0 2 4").skali("b:moll")',
    ristavel: "nótur „0 2 4“, skali „b:moll“."
  }
], hr = "A-Za-zÁÉÍÓÚÝÞÆÐÖáéíóúýþæðö", sf = new RegExp(`[${hr}]`), hn = (t) => t != null && sf.test(t), vn = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function uf(t) {
  const e = new RegExp(`(?<![${hr}])${vn(t)}(?![${hr}])`), r = new RegExp(`(?<![${hr}])${vn(t)}\\(`);
  return af.find((n) => e.test(n.ristavel) && r.test(n.localeIs)) || null;
}
let Wr = null;
function of() {
  if (Wr) return Wr;
  const t = /* @__PURE__ */ new Map();
  for (const [e, r] of Object.entries(He.functions || {})) {
    const n = Array.isArray(r) ? r : [r];
    for (const i of n) {
      if (!i) continue;
      const s = uf(i);
      t.set(i, {
        label: i,
        aliases: n.filter((l) => l !== i),
        strudelName: e,
        tier: s ? s.tier : null,
        example: s ? { source: s.ristavel, js: s.localeIs } : null
      });
    }
  }
  return Wr = t, t;
}
const ff = (t) => ({ label: t, aliases: [], strudelName: null, tier: null, example: null });
function lf(t, e) {
  let r = e, n = e;
  for (; r > 0 && hn(t[r - 1]); ) r--;
  for (; n < t.length && hn(t[n]); ) n++;
  return r === n ? null : { from: r, to: n };
}
function mf(t, e, r, n) {
  const i = t.match(e.slice(0, r), "Text");
  return !i.failed() || i.getRightmostFailurePosition() !== r ? !1 : i.getRightmostFailures().some((s) => Ft.exec(s.getText())?.[1].toLowerCase() === n);
}
function cf({ resolveName: t, vocabulary: e, grammar: r }) {
  const n = of();
  return function(s, l) {
    const c = lf(s, l);
    if (!c || ua(s, c.from)) return null;
    const g = s.slice(c.from, c.to), d = t(g);
    return !n.has(d) && !e.has(d) || r && mf(r, s, c.from, g.toLowerCase()) ? null : {
      from: c.from,
      to: c.to,
      surface: g,
      canonical: d,
      inflected: kt(g, d),
      card: n.get(d) || ff(d)
    };
  };
}
const Ur = (t) => String(t).replace(".", ","), pf = { "/": "deilt með", "*": "sinnum", "+": "plús", "-": "mínus" };
function la(t) {
  return !!(t && t.kind === "noun-normalization" && t.source === "paradigm" && t.confidence === "verified" && t.features);
}
function df({ canonical: t, morphology: e }) {
  return e && e.kind === "noun-normalization" ? e.lemma : t;
}
function gf(t, e, r) {
  const { surface: n, canonical: i } = t;
  if (!e || !e.governedBy) return;
  la(e) && r.lines.push(`Forsetningin „${e.governedBy}“ stýrir fallinu.`);
  const s = r.agreementByKey.get(`${n}|${i}|${e.governedBy}`);
  s && r.lines.push(s.message);
}
function hf(t, e) {
  const { surface: r, role: n } = t;
  if (n !== "source" && n !== "parameter") return;
  const i = e.resolveName(r), s = i === t.canonical ? t.morphology : null;
  if (kt(r, i)) {
    const l = df({ canonical: i, morphology: s });
    if (e.lines.push(`„${r}“ er beygð mynd af „${l}“.`), la(s) && e.lines.push(`Það er ${s.features}.`), s && s.ambiguity)
      for (const c of s.ambiguity)
        e.lines.push(`„${r}“ gæti líka verið beygð mynd af „${c}“.`);
  } else e.known.has(i) ? e.lines.push(n === "source" ? `„${i}“ er hljóðgjafi.` : `„${i}“ er stilling.`) : e.lines.push(`„${i}“ er óþekkt stýriorð.`);
  gf(t, s, e);
}
function tr(t, e, r = !1) {
  switch (t.type) {
    case "scale":
      e.lines.push(`„${t.surface}“ gefur gildið ${Ur(t.value)}.`);
      return;
    case "degree":
      e.lines.push(`„${t.surfaceAdverb}“ margfaldar gildið ${Ur(t.value)} með ${Ur(t.factor)}.`);
      return;
    case "name":
      return;
    case "mini":
      e.lines.push(r ? `„${t.value}“ er gildi stillingarinnar.` : `„${t.value}“ er mynstur.`);
      return;
    default:
      Ae(t, e);
  }
}
function Et(t, e, r, n) {
  hf(t, r), e.forEach((i) => tr(i, r, n));
}
const ma = "Neitunin setur styrkinn á 0, svo að hljóðið þagnar.", it = (t, e) => `Neitunin sleppir stillingunni „${e.resolveName(t.name.surface)}“`;
function ir(t, e) {
  t.type === "negatedControl" ? e.lines.push(wr(t, e) ? ma : `${it(t, e)}.`) : Et(t.name, t.args, e, !0);
}
function ca(t, e, r) {
  if (wr(t, r)) {
    r.lines.push(ma), e.forEach((s) => ir(s, r));
    return;
  }
  const [n, ...i] = e;
  if (!n) {
    r.lines.push(`${it(t, r)}, svo að ekkert hljómar.`);
    return;
  }
  if (r.lines.push(`${it(t, r)}.`), n.type === "negatedControl") {
    ca(n, i, r);
    return;
  }
  Et({ ...n.name, role: "source" }, n.args, r, !1), i.forEach((s) => ir(s, r));
}
function Ae(t, e) {
  switch (t.type) {
    case "patternCall":
      Et(t.head, t.args, e, !1), t.chain.forEach((r) => ir(r, e));
      return;
    case "silence":
    case "ref":
      return;
    // no new fact: a plain identifier/reference
    // The paragraph's auto-stack, or an explicit Composition clause's chosen
    // mode — the mode IS the fact. Items are `ref`s to already-explained
    // bindings, so there is nothing further to say about them.
    case "stack":
      e.lines.push("Nöfnin hljóma saman.");
      return;
    case "cat":
      e.lines.push("Nöfnin hljóma í röð, eitt í hverri lotu.");
      return;
    case "seq":
      e.lines.push("Nöfnin hljóma hvert á eftir öðru innan einnar lotu.");
      return;
    case "randcat":
      e.lines.push("Eitt nafnanna er valið af handahófi í hverri lotu.");
      return;
    case "mini":
      e.lines.push(`„${t.value}“ er mynstur.`);
      return;
    case "number":
      e.lines.push(`„${t.surface || t.value}“ er tala.`);
      return;
    case "signal":
      e.lines.push(`„${t.surface}“ er sveiflugjafi.`);
      return;
    case "chain":
      if (t.head.type === "negatedControl") {
        ca(t.head, t.methods, e);
        return;
      }
      Ae(t.head, e), t.methods.forEach((r) => ir(r, e));
      return;
    case "sequence":
      t.items.forEach((r) => {
        r.weight !== null && tr(r.weight, e), Ae(r.value, e);
      });
      return;
    case "pick":
      Ae(t.from, e), t.options.forEach((r) => Ae(r, e));
      return;
    case "tempo":
      if (e.lines.push("Takturinn er stilltur."), t.expr.rest.length) {
        const r = (i) => i.surface || i.value, n = t.expr.rest.map((i) => `${pf[i.op]} ${r(i.value)}`).join(" ");
        e.lines.push(`Reikningurinn er ${r(t.expr.first)} ${n}.`);
      }
      tr(t.expr.first, e), t.expr.rest.forEach((r) => tr(r.value, e));
      return;
    case "arrange":
      e.lines.push("Köflunum er raðað í röð."), t.items.forEach((r) => {
        tr(r.count, e), r.target.type === "ref" ? e.lines.push(`„${r.target.name}“ vísar í kafla.`) : r.target.type === "silence" && e.lines.push("Þögn.");
      });
      return;
    case "coinage":
      Tt(t, e);
      return;
    default:
      throw new Error(`explain: don't know how to explain a value node of type '${t.type}'`);
  }
}
function Tt(t, e) {
  switch (t.type) {
    case "output":
      Ae(t.value, e);
      return;
    case "binding":
      e.lines.push(`„${t.name.canonical}“ er nafn á mynstri.`), (t.value.type === "silence" || t.hush && !t.hushChain) && e.lines.push(`„${t.name.canonical}“ þegir.`), Ae(t.value, e), t.hushChain && (e.lines.push("Neitunin þaggar niður í mynstrinu."), t.hushChain.forEach((r) => ir(r, e)));
      return;
    case "section":
      e.lines.push(`„${t.name.canonical}“ er kafli.`), t.body.forEach((r) => Ae(r, e));
      return;
    case "coinage":
      e.lines.push(`„${t.coined}“ er nýtt orð fyrir „${t.target.value}“.`), e.known.add(t.coined), t.target.kind === "func" && e.registerVocabulary(t.coined, e.controlOf(e.resolveName(t.target.value)));
      return;
    case "paragraphGroup":
      t.body.forEach((r) => Tt(r, e));
      return;
    default:
      throw new Error(`explain: don't know how to explain a top-level node of type '${t.type}'`);
  }
}
function vf(t, e = {}) {
  if (!t || t.type !== "program")
    throw new Error(`explain: expected a 'program' node, got '${t && t.type}'`);
  const r = e.vocabulary || Se().vocabulary, n = sa(t), i = new Map(n.map((d) => [`${d.surface}|${d.canonical}|${d.preposition}`, d])), s = ra(t), l = /* @__PURE__ */ new Set([...[...r].filter((d) => !s.has(d)), ...vt, ..._r]), c = Se();
  c.registerVocabulary([...r]);
  for (const [d, F] of e.aliases || []) c.registerVocabulary(d, F);
  const g = { known: l, lines: [], agreementByKey: i, ...ta(t, c) };
  return t.body.forEach((d) => Tt(d, g)), g.lines.join(`
`);
}
const kf = /* @__PURE__ */ new Set(["og", "en", "eða", "ásamt"]), kn = /* @__PURE__ */ new Set(['"', "„", "«"]), bn = /* @__PURE__ */ new Set(['"', "“", "»"]), bf = new Set(
  [...Vn, ...Object.keys(ht), ...Un, ...Object.keys(gt), ...Object.keys(dt)].map(
    (t) => t.toLowerCase()
  )
), Ff = /* @__PURE__ */ new Set([...Object.keys(Ir).map((t) => t.toLowerCase()), "sinnum"]), Ef = /\p{L}/u, Tf = /\p{M}/u, Fn = (t) => t !== void 0 && Ef.test(t), yf = (t) => t !== void 0 && Tf.test(t), Ke = (t) => t !== void 0 && t >= "0" && t <= "9";
function Af(t) {
  const e = [], r = t.length;
  let n = 0;
  for (; n < r; ) {
    const i = t[n];
    if (i === "-" && t[n + 1] === " ") {
      const s = t.indexOf("-", n + 2), l = s === -1 ? r : s + 1;
      e.push({ from: n, to: l, kind: "comment" }), n = l;
      continue;
    }
    if (kn.has(i)) {
      let s = n + 1;
      for (; s < r && !bn.has(t[s]) && !kn.has(t[s]); ) s++;
      bn.has(t[s]) && (s += 1), e.push({ from: n, to: s, kind: "quotation" }), n = s;
      continue;
    }
    if (i === "." || i === "?" || i === "!") {
      e.push({ from: n, to: n + 1, kind: "terminator" }), n += 1;
      continue;
    }
    if (Ke(i) || i === "-" && Ke(t[n + 1])) {
      let s = n;
      for (t[s] === "-" && (s += 1); s < r && Ke(t[s]); ) s++;
      if (t[s] === "." && Ke(t[s + 1]))
        for (s += 1; s < r && Ke(t[s]); ) s++;
      e.push({ from: n, to: s, kind: "numeral" }), n = s;
      continue;
    }
    if (Fn(i)) {
      let s = n + 1;
      for (; s < r && (Fn(t[s]) || yf(t[s]) || Ke(t[s])); ) s++;
      const l = t.slice(n, s).normalize("NFC").toLowerCase();
      let c = "name";
      kf.has(l) ? c = "connector" : bf.has(l) ? c = "keyword" : Ff.has(l) && (c = "numeral"), e.push({ from: n, to: s, kind: c }), n = s;
      continue;
    }
    n += 1;
  }
  return e;
}
const If = { bd: ["bassatromman", "bassatrommu", "bassatrommuna", "bassatrommunnar", "bassatrommunni"], sd: ["sneril", "snerilinn", "snerillinn", "snerils", "snerilsins", "sneriltromman", "sneriltrommu", "sneriltrommuna", "sneriltrommunnar", "sneriltrommunni", "snerli", "snerlinum"], cp: ["handaklappi", "handaklappinu", "handaklappið", "handaklapps", "handaklappsins", "klappi", "klappinu", "klappið", "klapps", "klappsins"], cr: ["málmgjalli", "málmgjallinu", "málmgjallið", "málmgjalls", "málmgjallsins"], sh: ["hristan", "hristu", "hristuna", "hristunnar", "hristunni"], cb: ["kúabjallan", "kúabjöllu", "kúabjölluna", "kúabjöllunnar", "kúabjöllunni"], tb: ["tambúrínan", "tambúrínu", "tambúrínuna", "tambúrínunnar", "tambúrínunni"], bongo: ["bongótromman", "bongótrommu", "bongótrommuna", "bongótrommunnar", "bongótrommunni"], conga: ["kongatromman", "kongatrommu", "kongatrommuna", "kongatrommunnar", "kongatrommunni"], timpani: ["pákan", "pákanna", "pákna", "páknanna", "páku", "pákum", "pákuna", "pákunnar", "pákunni", "pákunum", "pákurnar"], triangles: ["þríhorni", "þríhorninu", "þríhornið", "þríhorns", "þríhornsins"], glockenspiel: ["klukkuspili", "klukkuspilinu", "klukkuspilið", "klukkuspils", "klukkuspilsins"], gm_xylophone: ["sílófón", "sílófóni", "sílófóninn", "sílófóninum", "sílófónninn", "sílófóns", "sílófónsins"], vibraphone: ["víbrafón", "víbrafóni", "víbrafóninn", "víbrafóninum", "víbrafónninn", "víbrafóns", "víbrafónsins"], tubularbells: ["pípuklukka", "pípuklukkan", "pípuklukkna", "pípuklukknanna", "pípuklukku", "pípuklukkum", "pípuklukkuna", "pípuklukkunnar", "pípuklukkunni", "pípuklukkunum", "pípuklukkurnar"], sleighbells: ["sleðabjalla", "sleðabjallan", "sleðabjallanna", "sleðabjallna", "sleðabjallnanna", "sleðabjöllu", "sleðabjöllum", "sleðabjölluna", "sleðabjöllunnar", "sleðabjöllunni", "sleðabjöllunum", "sleðabjöllurnar"], anvil: ["steðja", "steðjann", "steðjans", "steðjanum", "steðjinn"], piano: ["píanói", "píanóinu", "píanóið", "píanós", "píanósins", "slagharpan", "slaghörpu", "slaghörpuna", "slaghörpunnar", "slaghörpunni"], steinway: ["flygil", "flygilinn", "flygillinn", "flygils", "flygilsins", "flygli", "flyglinum"], gm_epiano1: ["rafpíanói", "rafpíanóinu", "rafpíanóið", "rafpíanós", "rafpíanósins"], gm_church_organ: ["kirkjuorgeli", "kirkjuorgelinu", "kirkjuorgelið", "kirkjuorgels", "kirkjuorgelsins", "orgeli", "orgelinu", "orgelið", "orgels", "orgelsins"], pipeorgan_loud: ["pípuorgeli", "pípuorgelinu", "pípuorgelið", "pípuorgels", "pípuorgelsins"], gm_drawbar_organ: ["rafmagnsorgeli", "rafmagnsorgelinu", "rafmagnsorgelið", "rafmagnsorgels", "rafmagnsorgelsins"], gm_harpsichord: ["sembal", "sembalinn", "semballinn", "sembalnum", "sembals", "sembalsins"], gm_celesta: ["selestan", "selestu", "selestuna", "selestunnar", "selestunni"], gm_music_box: ["spiladósar", "spiladósarinnar", "spiladósin", "spiladósina", "spiladósinni"], gm_accordion: ["dragspili", "dragspilinu", "dragspilið", "dragspils", "dragspilsins", "harmonikkan", "harmonikku", "harmonikkuna", "harmonikkunnar", "harmonikkunni", "harmóníkan", "harmóníku", "harmóníkuna", "harmóníkunnar", "harmóníkunni"], harmonica: ["munnharpan", "munnhörpu", "munnhörpuna", "munnhörpunnar", "munnhörpunni"], harp: ["harpan", "hörpu", "hörpuna", "hörpunnar", "hörpunni"], gm_acoustic_guitar_nylon: ["gítarinn", "gítarnum", "gítars", "gítarsins"], gm_acoustic_guitar_steel: ["kassagítarinn", "kassagítarnum", "kassagítars", "kassagítarsins"], gm_electric_guitar_clean: ["rafgítarinn", "rafgítarnum", "rafgítars", "rafgítarsins", "rafmagnsgítarinn", "rafmagnsgítarnum", "rafmagnsgítars", "rafmagnsgítarsins"], gm_acoustic_bass: ["bassa", "bassann", "bassans", "bassanum", "bassinn"], gm_electric_bass_finger: ["rafbassa", "rafbassann", "rafbassans", "rafbassanum", "rafbassinn"], gm_contrabass: ["kontrabassa", "kontrabassann", "kontrabassans", "kontrabassanum", "kontrabassinn"], gm_violin: ["fiðlan", "fiðlu", "fiðluna", "fiðlunnar", "fiðlunni"], gm_viola: ["lágfiðlan", "lágfiðlu", "lágfiðluna", "lágfiðlunnar", "lágfiðlunni", "víólan", "víólu", "víóluna", "víólunnar", "víólunni"], gm_cello: ["knéfiðlan", "knéfiðlu", "knéfiðluna", "knéfiðlunnar", "knéfiðlunni", "sellói", "sellóinu", "sellóið", "sellós", "sellósins"], gm_string_ensemble_1: ["strengjasveitar", "strengjasveitarinnar", "strengjasveitin", "strengjasveitina", "strengjasveitinni"], gm_flute: ["flautan", "flautu", "flautuna", "flautunnar", "flautunni", "þverflautan", "þverflautu", "þverflautuna", "þverflautunnar", "þverflautunni"], gm_recorder: ["blokkflautan", "blokkflautu", "blokkflautuna", "blokkflautunnar", "blokkflautunni"], gm_pan_flute: ["panflautan", "panflautu", "panflautuna", "panflautunnar", "panflautunni"], gm_clarinet: ["klarínettan", "klarínettu", "klarínettuna", "klarínettunnar", "klarínettunni"], gm_oboe: ["óbói", "óbóinu", "óbóið", "óbós", "óbósins"], gm_bassoon: ["fagotti", "fagottinu", "fagottið", "fagotts", "fagottsins"], sax: ["saxófón", "saxófóni", "saxófóninn", "saxófóninum", "saxófónninn", "saxófóns", "saxófónsins"], gm_bagpipe: ["sekkjapípan", "sekkjapípu", "sekkjapípuna", "sekkjapípunnar", "sekkjapípunni"], gm_trumpet: ["trompetinn", "trompetinum", "trompets", "trompetsins"], gm_trombone: ["básúnan", "básúnu", "básúnuna", "básúnunnar", "básúnunni"], gm_french_horn: ["horni", "horninu", "hornið", "horns", "hornsins"], gm_tuba: ["túban", "túbu", "túbuna", "túbunnar", "túbunni"], gm_choir_aahs: ["kóri", "kórinu", "kórið", "kórs", "kórsins"], gm_voice_oohs: ["raddar", "raddarinnar", "röddin", "röddina", "röddinni", "röddu"], sine: ["sínusinn", "sínusnum", "sínuss", "sínussins"], sawtooth: ["sagar", "sagarinnar", "sagtannar", "sagtannarinnar", "sagtönnin", "sagtönnina", "sagtönninni", "sögin", "sögina", "söginni"], square: ["ferning", "ferningi", "ferninginn", "ferningnum", "fernings", "ferningsins", "ferningurinn", "kassa", "kassann", "kassans", "kassanum", "kassinn"], triangle: ["þríhyrning", "þríhyrningi", "þríhyrninginn", "þríhyrningnum", "þríhyrnings", "þríhyrningsins", "þríhyrningurinn"], white: ["suði", "suðinu", "suðið", "suðs", "suðsins"], crackle: ["braki", "brakinu", "brakið", "braks", "braksins"], wind: ["vind", "vindi", "vindinn", "vindinum", "vinds", "vindsins", "vindurinn"], crow: ["krákan", "kráku", "krákuna", "krákunnar", "krákunni"], insect: ["skordýri", "skordýrinu", "skordýrið", "skordýrs", "skordýrsins"], metal: ["málm", "málmi", "málminn", "málminum", "málms", "málmsins", "málmurinn"], space: ["geim", "geimi", "geiminn", "geimnum", "geims", "geimsins", "geimurinn"], siren: ["sírenan", "sírenu", "sírenuna", "sírenunnar", "sírenunni"], wineglass: ["vínglasi", "vínglasinu", "vínglasið", "vínglass", "vínglassins"], gm_bird_tweet: ["fuglasöng", "fuglasönginn", "fuglasöngnum", "fuglasöngs", "fuglasöngsins", "fuglasöngurinn"], gm_seashore: ["brimi", "briminu", "brimið", "brims", "brimsins"], gm_applause: ["lófaklappi", "lófaklappinu", "lófaklappið", "lófaklapps", "lófaklappsins"], gm_helicopter: ["þyrlan", "þyrlu", "þyrluna", "þyrlunnar", "þyrlunni"], gm_telephone: ["síma", "símann", "símans", "símanum", "síminn"], gm_gunshot: ["byssuskoti", "byssuskotinu", "byssuskotið", "byssuskots", "byssuskotsins"], gm_breath_noise: ["andardrátt", "andardráttar", "andardráttarins", "andardráttinn", "andardrátturinn", "andardrætti", "andardrættinum"] }, _f = {
  forms: If
}, Cf = "ristavel", jf = { family: "FiraGO", css: "https://cdn.jsdelivr.net/npm/@fontsource/firago/index.css" }, Sf = {
  ...He,
  sounds: Object.fromEntries(
    Object.entries(He.sounds).map(([t, e]) => [t, [...[e].flat(), ..._f.forms[t] || []]])
  )
}, Vr = /* @__PURE__ */ new WeakMap();
function wf(t) {
  return t ? (Vr.has(t) || Vr.set(t, Se()), Vr.get(t)) : Se();
}
function xf(t = {}) {
  const e = wf(t.locale), { actions: r, sentenceActions: n, registerVocabulary: i, normalizeNoun: s, resolveName: l, vocabulary: c } = nf(
    t.locale,
    e
  ), { actions: g } = zo(), d = ye.createSemantics().addOperation("translate", r).addOperation("sentences", n).addOperation("toIr", g), F = (M, K = 0) => {
    const le = ye.match(M, "Text");
    if (le.failed()) return [];
    try {
      const Qe = d(le).toIr();
      return eo(Qe, K);
    } catch {
      return [];
    }
  }, h = (M) => Af(M), p = (M) => na(M, t.locale, e), { describeFailure: v, describeEvalError: I } = tf(ye, { vocabulary: c }), L = cf({ resolveName: l, vocabulary: c, grammar: ye }), T = No({ normalizeNoun: s, vocabulary: c, grammar: ye });
  return {
    grammar: ye,
    semantics: d,
    registerVocabulary: i,
    setBaseOffset: Yu,
    setLocationsEnabled: Qu,
    getLocations: F,
    lowerIr: p,
    describeFailure: v,
    describeEvalError: I,
    getHoverDoc: L,
    getCompletions: T,
    getTokens: h,
    explain: (M) => {
      const K = ye.match(M, "Text");
      if (K.failed()) return v(K, M);
      try {
        return vf(d(K).toIr(), { vocabulary: c, aliases: e.aliases });
      } catch (le) {
        return fa(le) ?? String(le.message);
      }
    },
    checkAgreement: (M) => {
      const K = ye.match(M, "Text");
      if (K.failed()) return [];
      try {
        return sa(d(K).toIr());
      } catch {
        return [];
      }
    },
    // The pane's tab label: DATA the engine relays (like quotes/characters
    // below), not a hook — so the fork's generic explanation pane names nothing
    // itself.
    explainTitle: "skilningur",
    // The Icelandic quote pair + workshop-keyboard character palette: DATA the
    // engine relays (@strudel/ohm's getQuotes/getCharacters) to a generic
    // @strudel/codemirror extension. No Icelandic in the fork — only these two
    // values are.
    quotes: rt,
    characters: Ou
  };
}
export {
  xf as createLanguage,
  jf as font,
  Sf as locale,
  Cf as name
};
