function _e(t) {
  const e = t || "";
  return function() {
    throw new Error(
      "this method " + e + " is abstract! (it has no implementation in class " + this.constructor.name + ")"
    );
  };
}
function Ye(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
function vr(t, e, r) {
  let n;
  Object.defineProperty(t, e, {
    get() {
      return n || (n = r.call(this)), n;
    }
  });
}
function jn(t, e) {
  const r = [];
  for (; e-- > 0; )
    r.push(t());
  return r;
}
function Tn(t, e) {
  return new Array(e + 1).join(t);
}
function Qt(t, e) {
  return jn(() => t, e);
}
function yr(t) {
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    t.lastIndexOf(n) !== r && e.indexOf(n) < 0 && e.push(n);
  }
  return e;
}
function qn(t) {
  const e = [];
  return t.forEach((r) => {
    e.indexOf(r) < 0 && e.push(r);
  }), e;
}
function st(t) {
  const e = t[0];
  return e === e.toUpperCase();
}
function Mn(t) {
  return !st(t);
}
function Wn(t, e, r) {
  return t.length < e ? Tn(" ", e - t.length) + t : t;
}
function it() {
  this.strings = [];
}
it.prototype.append = function(t) {
  this.strings.push(t);
};
it.prototype.contents = function() {
  return this.strings.join("");
};
const lr = (t) => String.fromCodePoint(parseInt(t, 16));
function zn(t) {
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
        return lr(t.slice(2, 4));
      case "u":
        return t.charAt(2) === "{" ? lr(t.slice(3, -1)) : lr(t.slice(2, 6));
      default:
        return t.charAt(1);
    }
  else
    return t;
}
function Br(t) {
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
function Gn(t, e = "unexpected null value") {
  if (t == null)
    throw new Error(e);
  return t;
}
const oa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  StringBuffer: it,
  abstract: _e,
  assert: Ye,
  checkNotNull: Gn,
  copyWithoutDuplicates: qn,
  defineLazyProperty: vr,
  getDuplicates: yr,
  isLexical: Mn,
  isSyntactic: st,
  padLeft: Wn,
  repeat: Qt,
  repeatFn: jn,
  repeatStr: Tn,
  unescapeCodePoint: zn,
  unexpectedObjToString: Br
}, Symbol.toStringTag, { value: "Module" })), Vn = (t) => new RegExp(String.raw`\p{${t}}`, "u"), Ar = Object.fromEntries(
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
  ].map((t) => [t, Vn(t)])
);
Ar.Ltmo = /\p{Lt}|\p{Lm}|\p{Lo}/u;
const fn = Object.fromEntries(
  ["XID_Start", "XID_Continue", "White_Space"].map((t) => [t, Vn(t)])
);
class T {
  constructor() {
    if (this.constructor === T)
      throw new Error("PExpr cannot be instantiated -- it's abstract");
  }
  // Set the `source` property to the interval containing the source for this expression.
  withSource(e) {
    return e && (this.source = e.trimmed()), this;
  }
}
const me = Object.create(T.prototype), ge = Object.create(T.prototype);
class he extends T {
  constructor(e) {
    super(), this.obj = e;
  }
}
class ve extends T {
  constructor(e, r) {
    super(), this.from = e, this.to = r, this.matchCodePoint = e.length > 1 || r.length > 1;
  }
}
class ye extends T {
  constructor(e) {
    super(), this.index = e;
  }
}
class oe extends T {
  constructor(e) {
    super(), this.terms = e;
  }
}
class Xt extends oe {
  constructor(e, r, n) {
    const s = e.rules[r].body;
    super([n, s]), this.superGrammar = e, this.name = r, this.body = n;
  }
}
class Zt extends oe {
  constructor(e, r, n, s) {
    const o = e.rules[r].body;
    super([...n, o, ...s]), this.superGrammar = e, this.ruleName = r, this.expansionPos = n.length;
  }
}
class ue extends T {
  constructor(e) {
    super(), this.factors = e;
  }
}
class be extends T {
  constructor(e) {
    super(), this.expr = e;
  }
}
class ot extends be {
}
class wt extends be {
}
class Je extends be {
}
ot.prototype.operator = "*";
wt.prototype.operator = "+";
Je.prototype.operator = "?";
ot.prototype.minNumMatches = 0;
wt.prototype.minNumMatches = 1;
Je.prototype.minNumMatches = 0;
ot.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
wt.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
Je.prototype.maxNumMatches = 1;
class le extends T {
  constructor(e) {
    super(), this.expr = e;
  }
}
class Ie extends T {
  constructor(e) {
    super(), this.expr = e;
  }
}
class Be extends T {
  constructor(e) {
    super(), this.expr = e;
  }
}
class H extends T {
  constructor(e, r = []) {
    super(), this.ruleName = e, this.args = r;
  }
  isSyntactic() {
    return st(this.ruleName);
  }
  // This method just caches the result of `this.toString()` in a non-enumerable property.
  toMemoKey() {
    return this._memoKey || Object.defineProperty(this, "_memoKey", { value: this.toString() }), this._memoKey;
  }
}
class pe extends T {
  constructor(e) {
    if (super(), this.categoryOrProp = e, e in Ar)
      this.pattern = Ar[e];
    else if (e in fn)
      this.pattern = fn[e];
    else
      throw new Error(
        `Invalid Unicode category or property name: ${JSON.stringify(e)}`
      );
  }
}
function ne(t, e) {
  let r;
  return e ? (r = new Error(e.getLineAndColumnMessage() + t), r.shortMessage = t, r.interval = e) : r = new Error(t), r;
}
function wr() {
  return ne("Interval sources don't match");
}
function aa(t) {
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
function ua(t, e, r) {
  const n = e ? `Grammar ${t} is not declared in namespace '${e}'` : "Undeclared grammar " + t;
  return ne(n, r);
}
function ca(t, e) {
  return ne("Grammar " + t.name + " is already declared in this namespace");
}
function la(t) {
  return ne(`Grammar '${t.name}' does not support incremental parsing`);
}
function Jn(t, e, r) {
  return ne(
    "Rule " + t + " is not declared in grammar " + e,
    r
  );
}
function pa(t, e, r) {
  return ne(
    "Cannot override rule " + t + " because it is not declared in " + e,
    r
  );
}
function ha(t, e, r) {
  return ne(
    "Cannot extend rule " + t + " because it is not declared in " + e,
    r
  );
}
function dn(t, e, r, n) {
  let s = "Duplicate declaration for rule '" + t + "' in grammar '" + e + "'";
  return e !== r && (s += " (originally declared in '" + r + "')"), ne(s, n);
}
function Hn(t, e, r, n) {
  return ne(
    "Wrong number of parameters for rule " + t + " (expected " + e + ", got " + r + ")",
    n
  );
}
function fa(t, e, r, n) {
  return ne(
    "Wrong number of arguments for rule " + t + " (expected " + e + ", got " + r + ")",
    n
  );
}
function mn(t, e, r) {
  return ne(
    "Duplicate parameter names in rule " + t + ": " + e.join(", "),
    r
  );
}
function da(t, e) {
  return ne(
    "Invalid parameter to rule " + t + ": " + e + " has arity " + e.getArity() + ", but parameter expressions must have arity 1",
    e.source
  );
}
const ma = "NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";
function ga(t, e) {
  return ne(
    "Cannot apply syntactic rule " + t + " from here (inside a lexical context)",
    e.source
  );
}
function va(t) {
  const { ruleName: e } = t;
  return ne(
    `applySyntactic is for syntactic rules, but '${e}' is a lexical rule. ` + ma,
    t.source
  );
}
function ya(t) {
  return ne(
    "applySyntactic is not required here (in a syntactic context)",
    t.source
  );
}
function gn(t, e) {
  return ne("Incorrect argument type: expected " + t, e.source);
}
function Aa(t) {
  return ne("'...' can appear at most once in a rule body", t.source);
}
function wa(t) {
  const e = t._node;
  Ye(e && e.isNonterminal() && e.ctorName === "escapeChar_unicodeCodePoint");
  const r = t.children.slice(1, -1).map((s) => s.source), n = r[0].coverageWith(...r.slice(1));
  return ne(
    `U+${n.contents} is not a valid Unicode code point`,
    n
  );
}
function Un(t, e) {
  const r = e.length > 0 ? e[e.length - 1].args : [];
  let s = "Nullable expression " + t.expr.substituteParams(r) + " is not allowed inside '" + t.operator + "' (possible infinite loop)";
  if (e.length > 0) {
    const o = e.map((a) => new H(a.ruleName, a.args)).join(`
`);
    s += `
Application stack (most recent application last):
` + o;
  }
  return ne(s, t.expr.source);
}
function Kn(t, e, r, n) {
  return ne(
    "Rule " + t + " involves an alternation which has inconsistent arity (expected " + e + ", got " + r + ")",
    n.source
  );
}
function _a(t) {
  const e = t.map((r) => r.message);
  return ne(["Errors:"].concat(e).join(`
- `), t[0].interval);
}
function ba(t, e, r, n) {
  let s = n.slice(0, -1).map((c) => {
    const d = "  " + c[0].name + " > " + c[1];
    return c.length === 3 ? d + " for '" + c[2] + "'" : d;
  }).join(`
`);
  s += `
  ` + e + " > " + t;
  let o = "";
  t === "_iter" && (o = [
    `
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,
    "  https://ohmjs.org/d/dsa for details."
  ].join(`
`));
  const a = [
    `Missing semantic action for '${t}' in ${r} '${e}'.${o}`,
    "Action stack (most recent call last):",
    s
  ].join(`
`), p = ne(a);
  return p.name = "missingSemanticAction", p;
}
function Ia(t) {
  if (t.length === 1)
    throw t[0];
  if (t.length > 1)
    throw _a(t);
}
function xa(t) {
  let e = 0;
  return t.map((n) => {
    const s = n.toString();
    return e = Math.max(e, s.length), s;
  }).map((n) => Wn(n, e));
}
function vn(t, e, r) {
  const n = t.length, s = t.slice(0, r), o = t.slice(r + e.length);
  return (s + e + o).substr(0, n);
}
function Ca(...t) {
  const e = this, { offset: r } = e, { repeatStr: n } = oa, s = new it();
  s.append("Line " + e.lineNum + ", col " + e.colNum + `:
`);
  const o = xa([
    e.prevLine == null ? 0 : e.lineNum - 1,
    e.lineNum,
    e.nextLine == null ? 0 : e.lineNum + 1
  ]), a = (g, m, v) => {
    s.append(v + o[g] + " | " + m + `
`);
  };
  e.prevLine != null && a(0, e.prevLine, "  "), a(1, e.line, "> ");
  const p = e.line.length;
  let c = n(" ", p + 1);
  for (let g = 0; g < t.length; ++g) {
    let m = t[g][0], v = t[g][1];
    Ye(m >= 0 && m <= v, "range start must be >= 0 and <= end");
    const I = r - e.colNum + 1;
    m = Math.max(0, m - I), v = Math.min(v - I, p), c = vn(c, n("~", v - m), m);
  }
  const d = 2 + o[1].length + 3;
  return s.append(n(" ", d)), c = vn(c, "^", e.colNum - 1), s.append(c.replace(/ +$/, "") + `
`), e.nextLine != null && a(2, e.nextLine, "  "), s.contents();
}
let _r = [];
function Qn(t) {
  _r.push(t);
}
function Fa(t) {
  _r.forEach((e) => {
    e(t);
  }), _r = null;
}
function kr(t, e) {
  let r = 1, n = 1, s = 0, o = 0, a = null, p = null, c = -1;
  for (; s < e; ) {
    const m = t.charAt(s++);
    m === `
` ? (r++, n = 1, c = o, o = s) : m !== "\r" && n++;
  }
  let d = t.indexOf(`
`, o);
  if (d === -1)
    d = t.length;
  else {
    const m = t.indexOf(`
`, d + 1);
    a = m === -1 ? t.slice(d) : t.slice(d, m), a = a.replace(/^\r?\n/, "").replace(/\r$/, "");
  }
  c >= 0 && (p = t.slice(c, o).replace(/\r?\n$/, ""));
  const g = t.slice(o, d).replace(/\r$/, "");
  return {
    offset: e,
    lineNum: r,
    colNum: n,
    line: g,
    prevLine: p,
    nextLine: a,
    toString: Ca
  };
}
function Xn(t, e, ...r) {
  return kr(t, e).toString(...r);
}
const yn = /* @__PURE__ */ (() => {
  let t = 0;
  return (e) => "" + e + t++;
})();
class fe {
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
    return fe.coverage(...e, this);
  }
  collapsedLeft() {
    return new fe(this.sourceString, this.startIdx, this.startIdx);
  }
  collapsedRight() {
    return new fe(this.sourceString, this.endIdx, this.endIdx);
  }
  getLineAndColumn() {
    return kr(this.sourceString, this.startIdx);
  }
  getLineAndColumnMessage() {
    const e = [this.startIdx, this.endIdx];
    return Xn(this.sourceString, this.startIdx, e);
  }
  // Returns an array of 0, 1, or 2 intervals that represents the result of the
  // interval difference operation.
  minus(e) {
    if (this.sourceString !== e.sourceString)
      throw wr();
    return this.startIdx === e.startIdx && this.endIdx === e.endIdx ? [] : this.startIdx < e.startIdx && e.endIdx < this.endIdx ? [
      new fe(this.sourceString, this.startIdx, e.startIdx),
      new fe(this.sourceString, e.endIdx, this.endIdx)
    ] : this.startIdx < e.endIdx && e.endIdx < this.endIdx ? [new fe(this.sourceString, e.endIdx, this.endIdx)] : this.startIdx < e.startIdx && e.startIdx < this.endIdx ? [new fe(this.sourceString, this.startIdx, e.startIdx)] : [this];
  }
  // Returns a new Interval that has the same extent as this one, but which is relative
  // to `that`, an Interval that fully covers this one.
  relativeTo(e) {
    if (this.sourceString !== e.sourceString)
      throw wr();
    return Ye(
      this.startIdx >= e.startIdx && this.endIdx <= e.endIdx,
      "other interval does not cover this one"
    ), new fe(
      this.sourceString,
      this.startIdx - e.startIdx,
      this.endIdx - e.startIdx
    );
  }
  // Returns a new Interval which contains the same contents as this one,
  // but with whitespace trimmed from both ends.
  trimmed() {
    const { contents: e } = this, r = this.startIdx + e.match(/^\s*/)[0].length, n = this.endIdx - e.match(/\s*$/)[0].length;
    return new fe(this.sourceString, r, n);
  }
  subInterval(e, r) {
    const n = this.startIdx + e;
    return new fe(this.sourceString, n, n + r);
  }
}
fe.coverage = function(t, ...e) {
  let { startIdx: r, endIdx: n } = t;
  for (const s of e) {
    if (s.sourceString !== t.sourceString)
      throw wr();
    r = Math.min(r, s.startIdx), n = Math.max(n, s.endIdx);
  }
  return new fe(t.sourceString, r, n);
};
const Sa = 65535, Ea = 1114111;
class Yt {
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
    return e > Sa && (this.pos += 1), this.examinedLength = Math.max(this.examinedLength, this.pos), e;
  }
  matchString(e, r) {
    let n;
    if (r) {
      for (n = 0; n < e.length; n++) {
        const s = this.next(), o = e[n];
        if (s == null || s.toUpperCase() !== o.toUpperCase())
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
    return new fe(this.source, e, r || this.pos);
  }
}
class Zn {
  constructor(e, r, n, s, o, a, p) {
    this.matcher = e, this.input = r, this.startExpr = n, this._cst = s, this._cstOffset = o, this._rightmostFailurePosition = a, this._rightmostFailures = p, this.failed() && (vr(this, "message", function() {
      const c = "Expected " + this.getExpectedText();
      return Xn(this.input, this.getRightmostFailurePosition()) + c;
    }), vr(this, "shortMessage", function() {
      const c = "expected " + this.getExpectedText(), d = kr(
        this.input,
        this.getRightmostFailurePosition()
      );
      return "Line " + d.lineNum + ", col " + d.colNum + ": " + c;
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
    const e = new it();
    let r = this.getRightmostFailures();
    r = r.filter((n) => !n.isFluffy());
    for (let n = 0; n < r.length; n++)
      n > 0 && (n === r.length - 1 ? e.append(r.length > 2 ? ", or " : " or ") : e.append(", ")), e.append(r[n].toString());
    return e.contents();
  }
  getInterval() {
    const e = this.getRightmostFailurePosition();
    return new fe(this.input, e, e);
  }
}
class Ba {
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
    const { applicationMemoKeyStack: n } = this, s = n.indexOf(e.toMemoKey()) + 1, o = n.slice(
      s
    );
    r.isInvolved = function(a) {
      return o.indexOf(a) >= 0;
    }, r.updateInvolvedApplicationMemoKeys = function() {
      for (let a = s; a < n.length; a++) {
        const p = n[a];
        this.isInvolved(p) || o.push(p);
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
      const s = r[n];
      if (e.isInvolved(s))
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
    this.maxExaminedLength = 0, this.maxRightmostFailureOffset = -1, Object.keys(n).forEach((s) => {
      const o = n[s];
      e + o.examinedLength > r ? delete n[s] : (this.maxExaminedLength = Math.max(this.maxExaminedLength, o.examinedLength), this.maxRightmostFailureOffset = Math.max(
        this.maxRightmostFailureOffset,
        o.rightmostFailureOffset
      ));
    });
  }
}
const ka = "✗", Da = "✓", Na = "⋅", Oa = "⇒", $a = "␉", La = "␊", Pa = "␍", br = {
  succeeded: 1,
  isRootNode: 2,
  isImplicitSpaces: 4,
  isMemoized: 8,
  isHeadOfLeftRecursion: 16,
  terminatesLR: 32
};
function Ra(t) {
  return Qt(" ", t).join("");
}
function ja(t, e, r) {
  const n = Yn(t.slice(e, e + r));
  return n.length < r ? n + Qt(" ", r - n.length).join("") : n;
}
function Yn(t) {
  return typeof t == "string" ? t.replace(/ /g, Na).replace(/\t/g, $a).replace(/\n/g, La).replace(/\r/g, Pa) : String(t);
}
class Xe {
  constructor(e, r, n, s, o, a, p) {
    this.input = e, this.pos = this.pos1 = r, this.pos2 = n, this.source = new fe(e, r, n), this.expr = s, this.bindings = a, this.children = p || [], this.terminatingLREntry = null, this._flags = o ? br.succeeded : 0;
  }
  get displayString() {
    return this.expr.toDisplayString();
  }
  clone() {
    return this.cloneWithExpr(this.expr);
  }
  cloneWithExpr(e) {
    const r = new Xe(
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
    this.terminatingLREntry = new Xe(
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
    function s(o, a, p) {
      let c = !0;
      n.enter && n.enter.call(r, o, a, p) === Xe.prototype.SKIP && (c = !1), c && (o.children.forEach((d) => {
        s(d, o, p + 1);
      }), n.exit && n.exit.call(r, o, a, p));
    }
    this.isRootNode ? this.children.forEach((o) => {
      s(o, null, 0);
    }) : s(this, null, 0);
  }
  // Return a string representation of the trace.
  // Sample:
  //     12⋅+⋅2⋅*⋅3 ✓ exp ⇒  "12"
  //     12⋅+⋅2⋅*⋅3   ✓ addExp (LR) ⇒  "12"
  //     12⋅+⋅2⋅*⋅3       ✗ addExp_plus
  toString() {
    const e = new it();
    return this.walk((r, n, s) => {
      if (!r)
        return this.SKIP;
      if (r.expr.constructor.name !== "Alt") {
        if (e.append(ja(r.input, r.pos, 10) + Ra(s * 2 + 1)), e.append((r.succeeded ? Da : ka) + " " + r.displayString), r.isHeadOfLeftRecursion && e.append(" (LR)"), r.succeeded) {
          const a = Yn(r.source.contents);
          e.append(" " + Oa + "  "), e.append(typeof a == "string" ? '"' + a + '"' : a);
        }
        e.append(`
`);
      }
    }), e.contents();
  }
}
Xe.prototype.SKIP = {};
Object.keys(br).forEach((t) => {
  const e = br[t];
  Object.defineProperty(Xe.prototype, t, {
    get() {
      return (this._flags & e) !== 0;
    },
    set(r) {
      r ? this._flags |= e : this._flags &= ~e;
    }
  });
});
T.prototype.allowsSkippingPrecedingSpace = _e("allowsSkippingPrecedingSpace");
me.allowsSkippingPrecedingSpace = ge.allowsSkippingPrecedingSpace = H.prototype.allowsSkippingPrecedingSpace = he.prototype.allowsSkippingPrecedingSpace = ve.prototype.allowsSkippingPrecedingSpace = pe.prototype.allowsSkippingPrecedingSpace = function() {
  return !0;
};
oe.prototype.allowsSkippingPrecedingSpace = be.prototype.allowsSkippingPrecedingSpace = Be.prototype.allowsSkippingPrecedingSpace = Ie.prototype.allowsSkippingPrecedingSpace = le.prototype.allowsSkippingPrecedingSpace = ye.prototype.allowsSkippingPrecedingSpace = ue.prototype.allowsSkippingPrecedingSpace = function() {
  return !1;
};
let St;
Qn((t) => {
  St = t;
});
let zt;
T.prototype.assertAllApplicationsAreValid = function(t, e) {
  zt = 0, this._assertAllApplicationsAreValid(t, e);
};
T.prototype._assertAllApplicationsAreValid = _e(
  "_assertAllApplicationsAreValid"
);
me._assertAllApplicationsAreValid = ge._assertAllApplicationsAreValid = he.prototype._assertAllApplicationsAreValid = ve.prototype._assertAllApplicationsAreValid = ye.prototype._assertAllApplicationsAreValid = pe.prototype._assertAllApplicationsAreValid = function(t, e) {
};
Be.prototype._assertAllApplicationsAreValid = function(t, e) {
  zt++, this.expr._assertAllApplicationsAreValid(t, e), zt--;
};
oe.prototype._assertAllApplicationsAreValid = function(t, e) {
  for (let r = 0; r < this.terms.length; r++)
    this.terms[r]._assertAllApplicationsAreValid(t, e);
};
ue.prototype._assertAllApplicationsAreValid = function(t, e) {
  for (let r = 0; r < this.factors.length; r++)
    this.factors[r]._assertAllApplicationsAreValid(t, e);
};
be.prototype._assertAllApplicationsAreValid = le.prototype._assertAllApplicationsAreValid = Ie.prototype._assertAllApplicationsAreValid = function(t, e) {
  this.expr._assertAllApplicationsAreValid(t, e);
};
H.prototype._assertAllApplicationsAreValid = function(t, e, r = !1) {
  const n = e.rules[this.ruleName], s = st(t) && zt === 0;
  if (!n)
    throw Jn(this.ruleName, e.name, this.source);
  if (!r && st(this.ruleName) && !s)
    throw ga(this.ruleName, this);
  const o = this.args.length, a = n.formals.length;
  if (o !== a)
    throw fa(this.ruleName, a, o, this.source);
  const p = St && n === St.rules.applySyntactic;
  if (St && n === St.rules.caseInsensitive && !(this.args[0] instanceof he))
    throw gn('a Terminal (e.g. "abc")', this.args[0]);
  if (p) {
    const d = this.args[0];
    if (!(d instanceof H))
      throw gn("a syntactic rule application", d);
    if (!st(d.ruleName))
      throw va(d);
    if (s)
      throw ya(this);
  }
  this.args.forEach((d) => {
    if (d._assertAllApplicationsAreValid(t, e, p), d.getArity() !== 1)
      throw da(this.ruleName, d);
  });
};
T.prototype.assertChoicesHaveUniformArity = _e(
  "assertChoicesHaveUniformArity"
);
me.assertChoicesHaveUniformArity = ge.assertChoicesHaveUniformArity = he.prototype.assertChoicesHaveUniformArity = ve.prototype.assertChoicesHaveUniformArity = ye.prototype.assertChoicesHaveUniformArity = Be.prototype.assertChoicesHaveUniformArity = pe.prototype.assertChoicesHaveUniformArity = function(t) {
};
oe.prototype.assertChoicesHaveUniformArity = function(t) {
  if (this.terms.length === 0)
    return;
  const e = this.terms[0].getArity();
  for (let r = 0; r < this.terms.length; r++) {
    const n = this.terms[r];
    n.assertChoicesHaveUniformArity();
    const s = n.getArity();
    if (e !== s)
      throw Kn(t, e, s, n);
  }
};
Xt.prototype.assertChoicesHaveUniformArity = function(t) {
  const e = this.terms[0].getArity(), r = this.terms[1].getArity();
  if (e !== r)
    throw Kn(t, r, e, this.terms[0]);
};
ue.prototype.assertChoicesHaveUniformArity = function(t) {
  for (let e = 0; e < this.factors.length; e++)
    this.factors[e].assertChoicesHaveUniformArity(t);
};
be.prototype.assertChoicesHaveUniformArity = function(t) {
  this.expr.assertChoicesHaveUniformArity(t);
};
le.prototype.assertChoicesHaveUniformArity = function(t) {
};
Ie.prototype.assertChoicesHaveUniformArity = function(t) {
  this.expr.assertChoicesHaveUniformArity(t);
};
H.prototype.assertChoicesHaveUniformArity = function(t) {
};
T.prototype.assertIteratedExprsAreNotNullable = _e(
  "assertIteratedExprsAreNotNullable"
);
me.assertIteratedExprsAreNotNullable = ge.assertIteratedExprsAreNotNullable = he.prototype.assertIteratedExprsAreNotNullable = ve.prototype.assertIteratedExprsAreNotNullable = ye.prototype.assertIteratedExprsAreNotNullable = pe.prototype.assertIteratedExprsAreNotNullable = function(t) {
};
oe.prototype.assertIteratedExprsAreNotNullable = function(t) {
  for (let e = 0; e < this.terms.length; e++)
    this.terms[e].assertIteratedExprsAreNotNullable(t);
};
ue.prototype.assertIteratedExprsAreNotNullable = function(t) {
  for (let e = 0; e < this.factors.length; e++)
    this.factors[e].assertIteratedExprsAreNotNullable(t);
};
be.prototype.assertIteratedExprsAreNotNullable = function(t) {
  if (this.expr.assertIteratedExprsAreNotNullable(t), this.expr.isNullable(t))
    throw Un(this, []);
};
Je.prototype.assertIteratedExprsAreNotNullable = le.prototype.assertIteratedExprsAreNotNullable = Ie.prototype.assertIteratedExprsAreNotNullable = Be.prototype.assertIteratedExprsAreNotNullable = function(t) {
  this.expr.assertIteratedExprsAreNotNullable(t);
};
H.prototype.assertIteratedExprsAreNotNullable = function(t) {
  this.args.forEach((e) => {
    e.assertIteratedExprsAreNotNullable(t);
  });
};
class Dr {
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
class at extends Dr {
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
class Ta extends Dr {
  constructor(e, r, n, s) {
    super(s), this.ruleName = e, this.children = r, this.childOffsets = n;
  }
  get ctorName() {
    return this.ruleName;
  }
  isNonterminal() {
    return !0;
  }
  isLexical() {
    return Mn(this.ctorName);
  }
  isSyntactic() {
    return st(this.ctorName);
  }
}
class es extends Dr {
  constructor(e, r, n, s) {
    super(n), this.children = e, this.childOffsets = r, this.optional = s;
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
T.prototype.eval = _e("eval");
me.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = e.nextCodePoint();
  return n !== void 0 ? (t.pushBinding(new at(String.fromCodePoint(n).length), r), !0) : (t.processFailure(r, this), !1);
};
ge.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return e.atEnd() ? (t.pushBinding(new at(0), r), !0) : (t.processFailure(r, this), !1);
};
he.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return e.matchString(this.obj) ? (t.pushBinding(new at(this.obj.length), r), !0) : (t.processFailure(r, this), !1);
};
ve.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = this.matchCodePoint ? e.nextCodePoint() : e.nextCharCode();
  return n !== void 0 && this.from.codePointAt(0) <= n && n <= this.to.codePointAt(0) ? (t.pushBinding(new at(String.fromCodePoint(n).length), r), !0) : (t.processFailure(r, this), !1);
};
ye.prototype.eval = function(t) {
  return t.eval(t.currentApplication().args[this.index]);
};
Be.prototype.eval = function(t) {
  t.enterLexifiedContext();
  const e = t.eval(this.expr);
  return t.exitLexifiedContext(), e;
};
oe.prototype.eval = function(t) {
  for (let e = 0; e < this.terms.length; e++)
    if (t.eval(this.terms[e]))
      return !0;
  return !1;
};
ue.prototype.eval = function(t) {
  for (let e = 0; e < this.factors.length; e++) {
    const r = this.factors[e];
    if (!t.eval(r))
      return !1;
  }
  return !0;
};
be.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = this.getArity(), s = [], o = [];
  for (; s.length < n; )
    s.push([]), o.push([]);
  let a = 0, p = r, c;
  for (; a < this.maxNumMatches && t.eval(this.expr); ) {
    if (e.pos === p)
      throw Un(this, t._applicationStack);
    p = e.pos, a++;
    const v = t._bindings.splice(t._bindings.length - n, n), I = t._bindingOffsets.splice(
      t._bindingOffsets.length - n,
      n
    );
    for (c = 0; c < v.length; c++)
      s[c].push(v[c]), o[c].push(I[c]);
  }
  if (a < this.minNumMatches)
    return !1;
  let d = t.posToOffset(r), g = 0;
  if (a > 0) {
    const v = s[n - 1], I = o[n - 1], C = I[I.length - 1] + v[v.length - 1].matchLength;
    d = o[0][0], g = C - d;
  }
  const m = this instanceof Je;
  for (c = 0; c < s.length; c++)
    t._bindings.push(
      new es(s[c], o[c], g, m)
    ), t._bindingOffsets.push(d);
  return !0;
};
le.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  t.pushFailuresInfo();
  const n = t.eval(this.expr);
  return t.popFailuresInfo(), n ? (t.processFailure(r, this), !1) : (e.pos = r, !0);
};
Ie.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return t.eval(this.expr) ? (e.pos = r, !0) : !1;
};
H.prototype.eval = function(t) {
  const e = t.currentApplication(), r = e ? e.args : [], n = this.substituteParams(r), s = t.getCurrentPosInfo();
  if (s.isActive(n))
    return n.handleCycle(t);
  const o = n.toMemoKey(), a = s.memo[o];
  if (a && s.shouldUseMemoizedResult(a)) {
    if (t.hasNecessaryInfo(a))
      return t.useMemoizedResult(t.inputStream.pos, a);
    delete s.memo[o];
  }
  return n.reallyEval(t);
};
H.prototype.handleCycle = function(t) {
  const e = t.getCurrentPosInfo(), { currentLeftRecursion: r } = e, n = this.toMemoKey();
  let s = e.memo[n];
  return r && r.headApplication.toMemoKey() === n ? s.updateInvolvedApplicationMemoKeys() : s || (s = e.memoize(n, {
    matchLength: 0,
    examinedLength: 0,
    value: !1,
    rightmostFailureOffset: -1
  }), e.startLeftRecursion(this, s)), t.useMemoizedResult(t.inputStream.pos, s);
};
H.prototype.reallyEval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = t.getCurrentPosInfo(), s = t.grammar.rules[this.ruleName], { body: o } = s, { description: a } = s;
  t.enterApplication(n, this), a && t.pushFailuresInfo();
  const p = e.examinedLength;
  e.examinedLength = 0;
  let c = this.evalOnce(o, t);
  const d = n.currentLeftRecursion, g = this.toMemoKey(), m = d && d.headApplication.toMemoKey() === g;
  let v;
  t.doNotMemoize ? t.doNotMemoize = !1 : m ? (c = this.growSeedResult(o, t, r, d, c), n.endLeftRecursion(), v = d, v.examinedLength = e.examinedLength - r, v.rightmostFailureOffset = t._getRightmostFailureOffset(), n.memoize(g, v)) : (!d || !d.isInvolved(g)) && (v = n.memoize(g, {
    matchLength: e.pos - r,
    examinedLength: e.examinedLength - r,
    value: c,
    failuresAtRightmostPosition: t.cloneRecordedFailures(),
    rightmostFailureOffset: t._getRightmostFailureOffset()
  }));
  const I = !!c;
  if (a && (t.popFailuresInfo(), I || t.processFailure(r, this), v && (v.failuresAtRightmostPosition = t.cloneRecordedFailures(), v.rightmostFailureOffset = t._getRightmostFailureOffset())), t.isTracing() && v) {
    const C = t.getTraceEntry(r, this, I, I ? [c] : []);
    m && (Ye(C.terminatingLREntry != null || !I), C.isHeadOfLeftRecursion = !0), v.traceEntry = C;
  }
  return e.examinedLength = Math.max(
    e.examinedLength,
    p
  ), t.exitApplication(n, c), I;
};
H.prototype.evalOnce = function(t, e) {
  const { inputStream: r } = e, n = r.pos;
  if (e.eval(t)) {
    const s = t.getArity(), o = e._bindings.splice(e._bindings.length - s, s), a = e._bindingOffsets.splice(e._bindingOffsets.length - s, s), p = r.pos - n;
    return new Ta(this.ruleName, o, a, p);
  } else
    return !1;
};
H.prototype.growSeedResult = function(t, e, r, n, s) {
  if (!s)
    return !1;
  const { inputStream: o } = e;
  for (; ; ) {
    if (n.matchLength = o.pos - r, n.value = s, n.failuresAtRightmostPosition = e.cloneRecordedFailures(), e.isTracing()) {
      const a = e.trace[e.trace.length - 1];
      n.traceEntry = new Xe(
        e.input,
        r,
        o.pos,
        this,
        !0,
        [s],
        [a.clone()]
      );
    }
    if (o.pos = r, s = this.evalOnce(t, e), o.pos - r <= n.matchLength)
      break;
    e.isTracing() && e.trace.splice(-2, 1);
  }
  return e.isTracing() && n.traceEntry.recordLRTermination(e.trace.pop(), s), o.pos = r + n.matchLength, n.value;
};
pe.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = e.nextCodePoint();
  if (n !== void 0 && n <= Ea) {
    const s = String.fromCodePoint(n);
    if (this.pattern.test(s))
      return t.pushBinding(new at(s.length), r), !0;
  }
  return t.processFailure(r, this), !1;
};
T.prototype.getArity = _e("getArity");
me.getArity = ge.getArity = he.prototype.getArity = ve.prototype.getArity = ye.prototype.getArity = H.prototype.getArity = pe.prototype.getArity = function() {
  return 1;
};
oe.prototype.getArity = function() {
  return this.terms.length === 0 ? 0 : this.terms[0].getArity();
};
ue.prototype.getArity = function() {
  let t = 0;
  for (let e = 0; e < this.factors.length; e++)
    t += this.factors[e].getArity();
  return t;
};
be.prototype.getArity = function() {
  return this.expr.getArity();
};
le.prototype.getArity = function() {
  return 0;
};
Ie.prototype.getArity = Be.prototype.getArity = function() {
  return this.expr.getArity();
};
function Te(t, e) {
  const r = {};
  if (t.source && e) {
    const n = t.source.relativeTo(e);
    r.sourceInterval = [n.startIdx, n.endIdx];
  }
  return r;
}
T.prototype.outputRecipe = _e("outputRecipe");
me.outputRecipe = function(t, e) {
  return ["any", Te(this, e)];
};
ge.outputRecipe = function(t, e) {
  return ["end", Te(this, e)];
};
he.prototype.outputRecipe = function(t, e) {
  return ["terminal", Te(this, e), this.obj];
};
ve.prototype.outputRecipe = function(t, e) {
  return ["range", Te(this, e), this.from, this.to];
};
ye.prototype.outputRecipe = function(t, e) {
  return ["param", Te(this, e), this.index];
};
oe.prototype.outputRecipe = function(t, e) {
  return ["alt", Te(this, e)].concat(
    this.terms.map((r) => r.outputRecipe(t, e))
  );
};
Xt.prototype.outputRecipe = function(t, e) {
  return this.terms[0].outputRecipe(t, e);
};
Zt.prototype.outputRecipe = function(t, e) {
  const r = this.terms.slice(0, this.expansionPos), n = this.terms.slice(this.expansionPos + 1);
  return [
    "splice",
    Te(this, e),
    r.map((s) => s.outputRecipe(t, e)),
    n.map((s) => s.outputRecipe(t, e))
  ];
};
ue.prototype.outputRecipe = function(t, e) {
  return ["seq", Te(this, e)].concat(
    this.factors.map((r) => r.outputRecipe(t, e))
  );
};
ot.prototype.outputRecipe = wt.prototype.outputRecipe = Je.prototype.outputRecipe = le.prototype.outputRecipe = Ie.prototype.outputRecipe = Be.prototype.outputRecipe = function(t, e) {
  return [
    this.constructor.name.toLowerCase(),
    Te(this, e),
    this.expr.outputRecipe(t, e)
  ];
};
H.prototype.outputRecipe = function(t, e) {
  return [
    "app",
    Te(this, e),
    this.ruleName,
    this.args.map((r) => r.outputRecipe(t, e))
  ];
};
pe.prototype.outputRecipe = function(t, e) {
  return ["unicodeChar", Te(this, e), this.categoryOrProp];
};
T.prototype.introduceParams = _e("introduceParams");
me.introduceParams = ge.introduceParams = he.prototype.introduceParams = ve.prototype.introduceParams = ye.prototype.introduceParams = pe.prototype.introduceParams = function(t) {
  return this;
};
oe.prototype.introduceParams = function(t) {
  return this.terms.forEach((e, r, n) => {
    n[r] = e.introduceParams(t);
  }), this;
};
ue.prototype.introduceParams = function(t) {
  return this.factors.forEach((e, r, n) => {
    n[r] = e.introduceParams(t);
  }), this;
};
be.prototype.introduceParams = le.prototype.introduceParams = Ie.prototype.introduceParams = Be.prototype.introduceParams = function(t) {
  return this.expr = this.expr.introduceParams(t), this;
};
H.prototype.introduceParams = function(t) {
  const e = t.indexOf(this.ruleName);
  if (e >= 0) {
    if (this.args.length > 0)
      throw new Error("Parameterized rules cannot be passed as arguments to another rule.");
    return new ye(e).withSource(this.source);
  } else
    return this.args.forEach((r, n, s) => {
      s[n] = r.introduceParams(t);
    }), this;
};
T.prototype.isNullable = function(t) {
  return this._isNullable(t, /* @__PURE__ */ Object.create(null));
};
T.prototype._isNullable = _e("_isNullable");
me._isNullable = ve.prototype._isNullable = ye.prototype._isNullable = wt.prototype._isNullable = pe.prototype._isNullable = function(t, e) {
  return !1;
};
ge._isNullable = function(t, e) {
  return !0;
};
he.prototype._isNullable = function(t, e) {
  return typeof this.obj == "string" ? this.obj === "" : !1;
};
oe.prototype._isNullable = function(t, e) {
  return this.terms.length === 0 || this.terms.some((r) => r._isNullable(t, e));
};
ue.prototype._isNullable = function(t, e) {
  return this.factors.every((r) => r._isNullable(t, e));
};
ot.prototype._isNullable = Je.prototype._isNullable = le.prototype._isNullable = Ie.prototype._isNullable = function(t, e) {
  return !0;
};
Be.prototype._isNullable = function(t, e) {
  return this.expr._isNullable(t, e);
};
H.prototype._isNullable = function(t, e) {
  const r = this.toMemoKey();
  if (!Object.prototype.hasOwnProperty.call(e, r)) {
    const { body: n } = t.rules[this.ruleName], s = n.substituteParams(this.args);
    e[r] = !1, e[r] = s._isNullable(t, e);
  }
  return e[r];
};
T.prototype.substituteParams = _e("substituteParams");
me.substituteParams = ge.substituteParams = he.prototype.substituteParams = ve.prototype.substituteParams = pe.prototype.substituteParams = function(t) {
  return this;
};
ye.prototype.substituteParams = function(t) {
  return Gn(t[this.index]);
};
oe.prototype.substituteParams = function(t) {
  return new oe(this.terms.map((e) => e.substituteParams(t)));
};
ue.prototype.substituteParams = function(t) {
  return new ue(this.factors.map((e) => e.substituteParams(t)));
};
be.prototype.substituteParams = le.prototype.substituteParams = Ie.prototype.substituteParams = Be.prototype.substituteParams = function(t) {
  return new this.constructor(this.expr.substituteParams(t));
};
H.prototype.substituteParams = function(t) {
  if (this.args.length === 0)
    return this;
  {
    const e = this.args.map((r) => r.substituteParams(t));
    return new H(this.ruleName, e);
  }
};
function An(t) {
  return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t);
}
function Nr(t) {
  const e = /* @__PURE__ */ Object.create(null);
  t.forEach((r) => {
    e[r] = (e[r] || 0) + 1;
  }), Object.keys(e).forEach((r) => {
    if (e[r] <= 1)
      return;
    let n = 1;
    t.forEach((s, o) => {
      s === r && (t[o] = s + "_" + n++);
    });
  });
}
T.prototype.toArgumentNameList = _e("toArgumentNameList");
me.toArgumentNameList = function(t, e) {
  return ["any"];
};
ge.toArgumentNameList = function(t, e) {
  return ["end"];
};
he.prototype.toArgumentNameList = function(t, e) {
  return typeof this.obj == "string" && /^[_a-zA-Z0-9]+$/.test(this.obj) ? ["_" + this.obj] : ["$" + t];
};
ve.prototype.toArgumentNameList = function(t, e) {
  let r = this.from + "_to_" + this.to;
  return An(r) || (r = "_" + r), An(r) || (r = "$" + t), [r];
};
oe.prototype.toArgumentNameList = function(t, e) {
  const r = this.terms.map(
    (o) => o.toArgumentNameList(t, !0)
  ), n = [], s = r[0].length;
  for (let o = 0; o < s; o++) {
    const a = [];
    for (let c = 0; c < this.terms.length; c++)
      a.push(r[c][o]);
    const p = qn(a);
    n.push(p.join("_or_"));
  }
  return e || Nr(n), n;
};
ue.prototype.toArgumentNameList = function(t, e) {
  let r = [];
  return this.factors.forEach((n) => {
    const s = n.toArgumentNameList(t, !0);
    r = r.concat(s), t += s.length;
  }), e || Nr(r), r;
};
be.prototype.toArgumentNameList = function(t, e) {
  const r = this.expr.toArgumentNameList(t, e).map(
    (n) => n[n.length - 1] === "s" ? n + "es" : n + "s"
  );
  return e || Nr(r), r;
};
Je.prototype.toArgumentNameList = function(t, e) {
  return this.expr.toArgumentNameList(t, e).map((r) => "opt" + r[0].toUpperCase() + r.slice(1));
};
le.prototype.toArgumentNameList = function(t, e) {
  return [];
};
Ie.prototype.toArgumentNameList = Be.prototype.toArgumentNameList = function(t, e) {
  return this.expr.toArgumentNameList(t, e);
};
H.prototype.toArgumentNameList = function(t, e) {
  return [this.ruleName];
};
pe.prototype.toArgumentNameList = function(t, e) {
  return ["$" + t];
};
ye.prototype.toArgumentNameList = function(t, e) {
  return ["param" + this.index];
};
T.prototype.toDisplayString = _e("toDisplayString");
oe.prototype.toDisplayString = ue.prototype.toDisplayString = function() {
  return this.source ? this.source.trimmed().contents : "[" + this.constructor.name + "]";
};
me.toDisplayString = ge.toDisplayString = be.prototype.toDisplayString = le.prototype.toDisplayString = Ie.prototype.toDisplayString = Be.prototype.toDisplayString = he.prototype.toDisplayString = ve.prototype.toDisplayString = ye.prototype.toDisplayString = function() {
  return this.toString();
};
H.prototype.toDisplayString = function() {
  if (this.args.length > 0) {
    const t = this.args.map((e) => e.toDisplayString());
    return this.ruleName + "<" + t.join(",") + ">";
  } else
    return this.ruleName;
};
pe.prototype.toDisplayString = function() {
  return "Unicode [" + this.categoryOrProp + "] character";
};
function qa(t) {
  return t === "description" || t === "string" || t === "code";
}
class ke {
  constructor(e, r, n) {
    if (!qa(n))
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
    const e = new ke(this.pexpr, this.text, this.type);
    return this.isFluffy() && e.makeFluffy(), e;
  }
  toKey() {
    return this.toString() + "#" + this.type;
  }
}
T.prototype.toFailure = _e("toFailure");
me.toFailure = function(t) {
  return new ke(this, "any object", "description");
};
ge.toFailure = function(t) {
  return new ke(this, "end of input", "description");
};
he.prototype.toFailure = function(t) {
  return new ke(this, this.obj, "string");
};
ve.prototype.toFailure = function(t) {
  return new ke(this, JSON.stringify(this.from) + ".." + JSON.stringify(this.to), "code");
};
le.prototype.toFailure = function(t) {
  const e = this.expr === me ? "nothing" : "not " + this.expr.toFailure(t);
  return new ke(this, e, "description");
};
Ie.prototype.toFailure = function(t) {
  return this.expr.toFailure(t);
};
H.prototype.toFailure = function(t) {
  let { description: e } = t.rules[this.ruleName];
  return e || (e = (/^[aeiouAEIOU]/.test(this.ruleName) ? "an" : "a") + " " + this.ruleName), new ke(this, e, "description");
};
pe.prototype.toFailure = function(t) {
  return new ke(this, "a Unicode [" + this.categoryOrProp + "] character", "description");
};
oe.prototype.toFailure = function(t) {
  const r = "(" + this.terms.map((n) => n.toFailure(t)).join(" or ") + ")";
  return new ke(this, r, "description");
};
ue.prototype.toFailure = function(t) {
  const r = "(" + this.factors.map((n) => n.toFailure(t)).join(" ") + ")";
  return new ke(this, r, "description");
};
be.prototype.toFailure = function(t) {
  const e = "(" + this.expr.toFailure(t) + this.operator + ")";
  return new ke(this, e, "description");
};
T.prototype.toString = _e("toString");
me.toString = function() {
  return "any";
};
ge.toString = function() {
  return "end";
};
he.prototype.toString = function() {
  return JSON.stringify(this.obj);
};
ve.prototype.toString = function() {
  return JSON.stringify(this.from) + ".." + JSON.stringify(this.to);
};
ye.prototype.toString = function() {
  return "$" + this.index;
};
Be.prototype.toString = function() {
  return "#(" + this.expr.toString() + ")";
};
oe.prototype.toString = function() {
  return this.terms.length === 1 ? this.terms[0].toString() : "(" + this.terms.map((t) => t.toString()).join(" | ") + ")";
};
ue.prototype.toString = function() {
  return this.factors.length === 1 ? this.factors[0].toString() : "(" + this.factors.map((t) => t.toString()).join(" ") + ")";
};
be.prototype.toString = function() {
  return this.expr + this.operator;
};
le.prototype.toString = function() {
  return "~" + this.expr;
};
Ie.prototype.toString = function() {
  return "&" + this.expr;
};
H.prototype.toString = function() {
  if (this.args.length > 0) {
    const t = this.args.map((e) => e.toString());
    return this.ruleName + "<" + t.join(",") + ">";
  } else
    return this.ruleName;
};
pe.prototype.toString = function() {
  return "\\p{" + this.categoryOrProp + "}";
};
class Or extends T {
  constructor(e) {
    super(), this.obj = e;
  }
  _getString(e) {
    const r = e.currentApplication().args[this.obj.index];
    return Ye(r instanceof he, "expected a Terminal expression"), r.obj;
  }
  // Implementation of the PExpr API
  allowsSkippingPrecedingSpace() {
    return !0;
  }
  eval(e) {
    const { inputStream: r } = e, n = r.pos, s = this._getString(e);
    return r.matchString(s, !0) ? (e.pushBinding(new at(s.length), n), !0) : (e.processFailure(n, this), !1);
  }
  getArity() {
    return 1;
  }
  substituteParams(e) {
    return new Or(this.obj.substituteParams(e));
  }
  toDisplayString() {
    return this.obj.toDisplayString() + " (case-insensitive)";
  }
  toFailure(e) {
    return new ke(
      this,
      this.obj.toFailure(e) + " (case-insensitive)",
      "description"
    );
  }
  _isNullable(e, r) {
    return this.obj._isNullable(e, r);
  }
}
let ts;
Qn((t) => {
  ts = t.rules.applySyntactic.body;
});
const pr = new H("spaces");
class Ma {
  constructor(e, r, n) {
    this.matcher = e, this.startExpr = r, this.grammar = e.grammar, this.input = e.getInput(), this.inputStream = new Yt(this.input), this.memoTable = e._memoTable, this.userData = void 0, this.doNotMemoize = !1, this._bindings = [], this._bindingOffsets = [], this._applicationStack = [], this._posStack = [0], this.inLexifiedContextStack = [!1], this.rightmostFailurePosition = -1, this._rightmostFailurePositionStack = [], this._recordedFailuresStack = [], n !== void 0 && (this.positionToRecordFailures = n, this.recordedFailures = /* @__PURE__ */ Object.create(null));
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
    return this.pushFailuresInfo(), this.eval(pr), this.popBinding(), this.popFailuresInfo(), this.inputStream.pos;
  }
  skipSpacesIfInSyntacticContext() {
    return this.inSyntacticContext() ? this.skipSpaces() : this.inputStream.pos;
  }
  maybeSkipSpacesBefore(e) {
    return e.allowsSkippingPrecedingSpace() && e !== pr ? this.skipSpacesIfInSyntacticContext() : this.inputStream.pos;
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
    return r || (r = this.memoTable[e] = new Ba()), r;
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
    if (n && r instanceof H) {
      const s = n.memo[r.toMemoKey()];
      if (s && s.traceEntry) {
        const o = s.traceEntry.cloneWithExpr(r);
        return o.isMemoized = !0, o;
      }
    }
    return null;
  }
  // Returns a new trace entry, with the currently active trace array as its children.
  getTraceEntry(e, r, n, s) {
    if (r instanceof H) {
      const o = this.currentApplication(), a = o ? o.args : [];
      r = r.substituteParams(a);
    }
    return this.getMemoizedTraceEntry(e, r) || new Xe(this.input, e, this.inputStream.pos, r, n, s, this.trace);
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
    const { inputStream: r } = this, n = this._bindings.length, s = this.userData;
    let o;
    this.recordedFailures && (o = this.recordedFailures, this.recordedFailures = /* @__PURE__ */ Object.create(null));
    const a = r.pos, p = this.maybeSkipSpacesBefore(e);
    let c;
    this.trace && (c = this.trace, this.trace = []);
    const d = e.eval(this);
    if (this.trace) {
      const g = this._bindings.slice(n), m = this.getTraceEntry(p, e, d, g);
      m.isImplicitSpaces = e === pr, m.isRootNode = e === this.startExpr, c.push(m), this.trace = c;
    }
    return d ? this.recordedFailures && r.pos === this.positionToRecordFailures && Object.keys(this.recordedFailures).forEach((g) => {
      this.recordedFailures[g].makeFluffy();
    }) : (r.pos = a, this.truncateBindings(n), this.userData = s), this.recordedFailures && this.recordFailures(o, !1), e === ts && this.skipSpaces(), d;
  }
  getMatchResult() {
    this.grammar._setUpMatchState(this), this.eval(this.startExpr);
    let e;
    this.recordedFailures && (e = Object.keys(this.recordedFailures).map(
      (n) => this.recordedFailures[n]
    ));
    const r = this._bindings[0];
    return r && (r.grammar = this.grammar), new Zn(
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
class Wa {
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
    const s = this._input, o = this._memoTable;
    if (e < 0 || e > s.length || r < 0 || r > s.length || e > r)
      throw new Error("Invalid indices: " + e + " and " + r);
    this._input = s.slice(0, e) + n + s.slice(r), this._input !== s && o.length > 0 && (this._isMemoTableStale = !0);
    const a = o.slice(r);
    o.length = e;
    for (let p = 0; p < n.length; p++)
      o.push(void 0);
    for (const p of a)
      o.push(p);
    for (let p = 0; p < e; p++) {
      const c = o[p];
      c && c.clearObsoleteEntries(p, e);
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
      throw la(this.grammar);
    const s = new Ma(this, e, n.positionToRecordFailures);
    return n.tracing ? s.getTrace() : s.getMatchResult();
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
    return new ue([n, ge]);
  }
}
const Et = [], Ir = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
class wn {
  constructor(e, r, n) {
    this._node = e, this.source = r, this._baseInterval = n, e.isNonterminal() && Ye(r === n), this._childWrappers = [];
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
      const n = this._node.childAt(e), s = this._node.childOffsets[e], o = this._baseInterval.subInterval(s, n.matchLength), a = n.isNonterminal() ? o : this._baseInterval;
      r = this._childWrappers[e] = this._semantics.wrap(n, o, a);
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
    const r = e || [], n = r.map((a) => a._node), s = new es(n, [], -1, !1), o = this._semantics.wrap(s, null, null);
    return o._childWrappers = r, o;
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
class Se {
  constructor(e, r) {
    const n = this;
    if (this.grammar = e, this.checkedActionDicts = !1, this.Wrapper = class extends (r ? r.Wrapper : wn) {
      constructor(s, o, a) {
        super(s, o, a), n.checkActionDictsIfHaventAlready(), this._semantics = n;
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
      for (const s in this.attributes)
        Object.defineProperty(this.attributeKeys, s, {
          value: yn(s)
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
    function r(s) {
      return s.super !== Se.BuiltInSemantics._getSemantics();
    }
    let n = `(function(g) {
`;
    if (r(this)) {
      n += "  var semantics = " + this.super.toRecipe(!0) + "(g";
      const s = this.super.grammar;
      let o = this.grammar;
      for (; o !== s; )
        n += ".superGrammar", o = o.superGrammar;
      n += `);
`, n += "  return g.extendSemantics(semantics)";
    } else
      n += "  return g.createSemantics()";
    return ["Operation", "Attribute"].forEach((s) => {
      const o = this[s.toLowerCase() + "s"];
      Object.keys(o).forEach((a) => {
        const { actionDict: p, formals: c, builtInDefault: d } = o[a];
        let g = a;
        c.length > 0 && (g += "(" + c.join(", ") + ")");
        let m;
        r(this) && this.super[s.toLowerCase() + "s"][a] ? m = "extend" + s : m = "add" + s, n += `
    .` + m + "(" + JSON.stringify(g) + ", {";
        const v = [];
        Object.keys(p).forEach((I) => {
          if (p[I] !== d) {
            let C = p[I].toString().trim();
            C = C.replace(/^.*\(/, "function("), v.push(`
      ` + JSON.stringify(I) + ": " + C);
          }
        }), n += v.join(",") + `
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
    const s = e + "s", o = _n(r, e), { name: a } = o, { formals: p } = o;
    this.assertNewName(a, e);
    const c = za(e, a, m), d = { _default: c };
    Object.keys(n).forEach((v) => {
      d[v] = n[v];
    });
    const g = e === "operation" ? new Bt(a, p, d, c) : new xr(a, d, c);
    g.checkActionDict(this.grammar), this[s][a] = g;
    function m(...v) {
      const I = this._semantics[s][a];
      if (arguments.length !== I.formals.length)
        throw new Error(
          "Invalid number of arguments passed to " + a + " " + e + " (expected " + I.formals.length + ", got " + arguments.length + ")"
        );
      const C = /* @__PURE__ */ Object.create(null);
      for (const [U, xe] of Object.entries(v)) {
        const Oe = I.formals[U];
        C[Oe] = xe;
      }
      const z = this.args;
      this.args = C;
      const Q = I.execute(this._semantics, this);
      return this.args = z, Q;
    }
    e === "operation" ? (this.Wrapper.prototype[a] = m, this.Wrapper.prototype[a].toString = function() {
      return "[" + a + " operation]";
    }) : (Object.defineProperty(this.Wrapper.prototype, a, {
      get: m,
      configurable: !0
      // So the property can be deleted.
    }), Object.defineProperty(this.attributeKeys, a, {
      value: yn(a)
    }));
  }
  extendOperationOrAttribute(e, r, n) {
    const s = e + "s";
    if (_n(r, "attribute"), !(this.super && r in this.super[s]))
      throw new Error(
        "Cannot extend " + e + " '" + r + "': did not inherit an " + e + " with that name"
      );
    if (Ir(this[s], r))
      throw new Error("Cannot extend " + e + " '" + r + "' again");
    const o = this[s][r].formals, a = this[s][r].actionDict, p = Object.create(a);
    Object.keys(n).forEach((c) => {
      p[c] = n[c];
    }), this[s][r] = e === "operation" ? new Bt(r, o, p) : new xr(r, p), this[s][r].checkActionDict(this.grammar);
  }
  assertNewName(e, r) {
    if (Ir(wn.prototype, e))
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
    const s = n || r;
    return e instanceof this.Wrapper ? e : new this.Wrapper(e, r, s);
  }
}
function _n(t, e) {
  if (!Se.prototypeGrammar)
    return Ye(t.indexOf("(") === -1), {
      name: t,
      formals: []
    };
  const r = Se.prototypeGrammar.match(
    t,
    e === "operation" ? "OperationSignature" : "AttributeSignature"
  );
  if (r.failed())
    throw new Error(r.message);
  return Se.prototypeGrammarSemantics(r).parse();
}
function za(t, e, r) {
  return function(...n) {
    const o = (this._semantics.operations[e] || this._semantics.attributes[e]).formals.map((a) => this.args[a]);
    if (!this.isIteration() && n.length === 1)
      return r.apply(n[0], o);
    throw ba(this.ctorName, e, t, Et);
  };
}
Se.createSemantics = function(t, e) {
  const r = new Se(
    t,
    e !== void 0 ? e : Se.BuiltInSemantics._getSemantics()
  ), n = function(o) {
    if (!(o instanceof Zn))
      throw new TypeError(
        "Semantics expected a MatchResult, but got " + Br(o)
      );
    if (o.failed())
      throw new TypeError("cannot apply Semantics to " + o.toString());
    const a = o._cst;
    if (a.grammar !== t)
      throw new Error(
        "Cannot use a MatchResult from grammar '" + a.grammar.name + "' with a semantics for '" + t.name + "'"
      );
    const p = new Yt(o.input);
    return r.wrap(a, p.interval(o._cstOffset, o.input.length));
  };
  return n.addOperation = function(s, o) {
    return r.addOperationOrAttribute("operation", s, o), n;
  }, n.extendOperation = function(s, o) {
    return r.extendOperationOrAttribute("operation", s, o), n;
  }, n.addAttribute = function(s, o) {
    return r.addOperationOrAttribute("attribute", s, o), n;
  }, n.extendAttribute = function(s, o) {
    return r.extendOperationOrAttribute("attribute", s, o), n;
  }, n._getActionDict = function(s) {
    const o = r.operations[s] || r.attributes[s];
    if (!o)
      throw new Error(
        '"' + s + '" is not a valid operation or attribute name in this semantics for "' + t.name + '"'
      );
    return o.actionDict;
  }, n._remove = function(s) {
    let o;
    return s in r.operations ? (o = r.operations[s], delete r.operations[s]) : s in r.attributes && (o = r.attributes[s], delete r.attributes[s]), delete r.Wrapper.prototype[s], o;
  }, n.getOperationNames = function() {
    return Object.keys(r.operations);
  }, n.getAttributeNames = function() {
    return Object.keys(r.attributes);
  }, n.getGrammar = function() {
    return r.grammar;
  }, n.toRecipe = function(s) {
    return r.toRecipe(s);
  }, n.toString = r.toString.bind(r), n._getSemantics = function() {
    return r;
  }, n;
};
class Bt {
  constructor(e, r, n, s) {
    this.name = e, this.formals = r, this.actionDict = n, this.builtInDefault = s;
  }
  checkActionDict(e) {
    e._checkTopDownActionDict(this.typeName, this.name, this.actionDict);
  }
  // Execute this operation on the CST node associated with `nodeWrapper` in the context of the
  // given Semantics instance.
  execute(e, r) {
    try {
      const { ctorName: n } = r._node;
      let s = this.actionDict[n];
      return s ? (Et.push([this, n]), s.apply(r, r._children())) : r.isNonterminal() && (s = this.actionDict._nonterminal, s) ? (Et.push([this, "_nonterminal", n]), s.apply(r, r._children())) : (Et.push([this, "default action", n]), this.actionDict._default.apply(r, r._children()));
    } finally {
      Et.pop();
    }
  }
}
Bt.prototype.typeName = "operation";
class xr extends Bt {
  constructor(e, r, n) {
    super(e, [], r, n);
  }
  execute(e, r) {
    const n = r._node, s = e.attributeKeys[this.name];
    return Ir(n, s) || (n[s] = Bt.prototype.execute.call(this, e, r)), n[s];
  }
}
xr.prototype.typeName = "attribute";
const bn = ["_iter", "_terminal", "_nonterminal", "_default"];
function In(t) {
  return Object.keys(t.rules).sort().map((e) => t.rules[e]);
}
const Ga = (t) => t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
let rs, ns;
class we {
  constructor(e, r, n, s) {
    if (this.name = e, this.superGrammar = r, this.rules = n, s) {
      if (!(s in n))
        throw new Error(
          "Invalid start rule: '" + s + "' is not a rule in grammar '" + e + "'"
        );
      this.defaultStartRule = s;
    }
    this._matchStateInitializer = void 0, this.supportsIncrementalParsing = !0;
  }
  matcher() {
    return new Wa(this);
  }
  // Return true if the grammar is a built-in grammar, otherwise false.
  // NOTE: This might give an unexpected result if called before BuiltInRules is defined!
  isBuiltIn() {
    return this === we.ProtoBuiltInRules || this === we.BuiltInRules;
  }
  equals(e) {
    if (this === e)
      return !0;
    if (e == null || this.name !== e.name || this.defaultStartRule !== e.defaultStartRule || !(this.superGrammar === e.superGrammar || this.superGrammar.equals(e.superGrammar)))
      return !1;
    const r = In(this), n = In(e);
    return r.length === n.length && r.every((s, o) => s.description === n[o].description && s.formals.join(",") === n[o].formals.join(",") && s.body.toString() === n[o].body.toString());
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
    return Se.createSemantics(this);
  }
  extendSemantics(e) {
    return Se.createSemantics(this, e._getSemantics());
  }
  // Check that every key in `actionDict` corresponds to a semantic action, and that it maps to
  // a function of the correct arity. If not, throw an exception.
  _checkTopDownActionDict(e, r, n) {
    const s = [];
    for (const o in n) {
      const a = n[o];
      if (!bn.includes(o) && !(o in this.rules)) {
        s.push(`'${o}' is not a valid semantic action for '${this.name}'`);
        continue;
      }
      if (typeof a != "function") {
        s.push(`'${o}' must be a function in an action dictionary for '${this.name}'`);
        continue;
      }
      const c = a.length, d = this._topDownActionArity(o);
      if (c !== d) {
        let g;
        o === "_iter" || o === "_nonterminal" ? g = `it should use a rest parameter, e.g. \`${o}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.` : g = `expected ${d}, got ${c}`, s.push(`Semantic action '${o}' has the wrong arity: ${g}`);
      }
    }
    if (s.length > 0) {
      const o = s.map((p) => "- " + p), a = new Error(
        [
          `Found errors in the action dictionary of the '${r}' ${e}:`,
          ...o
        ].join(`
`)
      );
      throw a.problems = s, a;
    }
  }
  // Return the expected arity for a semantic action named `actionName`, which
  // is either a rule name or a special action name like '_nonterminal'.
  _topDownActionArity(e) {
    return bn.includes(e) ? 0 : this.rules[e].body.getArity();
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
    const s = {};
    Object.keys(this.rules).forEach((p) => {
      const c = this.rules[p], { body: d } = c, g = !this.superGrammar || !this.superGrammar.rules[p];
      let m;
      g ? m = "define" : m = d instanceof Xt ? "extend" : "override";
      const v = {};
      if (c.source && this.source) {
        const z = c.source.relativeTo(this.source);
        v.sourceInterval = [z.startIdx, z.endIdx];
      }
      const I = g ? c.description : null, C = d.outputRecipe(c.formals, this.source);
      s[p] = [
        m,
        // "define"/"extend"/"override"
        v,
        I,
        c.formals,
        C
      ];
    });
    let o = "null";
    e ? o = e : this.superGrammar && !this.superGrammar.isBuiltIn() && (o = this.superGrammar.toRecipe());
    const a = [
      ...["grammar", r, this.name].map(JSON.stringify),
      o,
      ...[n, s].map(JSON.stringify)
    ];
    return Ga(`[${a.join(",")}]`);
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
    const e = new it();
    e.append("{");
    let r = !0;
    for (const n in this.rules) {
      const { body: s } = this.rules[n];
      r ? r = !1 : e.append(","), e.append(`
`), e.append("  "), this.addSemanticActionTemplate(n, s, e);
    }
    return e.append(`
}`), e.contents();
  }
  addSemanticActionTemplate(e, r, n) {
    n.append(e), n.append(": function(");
    const s = this._topDownActionArity(e);
    n.append(Qt("_", s).join(", ")), n.append(`) {
`), n.append("  }");
  }
  // Parse a string which expresses a rule application in this grammar, and return the
  // resulting Apply node.
  parseApplication(e) {
    let r;
    if (e.indexOf("<") === -1)
      r = new H(e);
    else {
      const s = rs.match(e, "Base_application");
      r = ns(s, {});
    }
    if (!(r.ruleName in this.rules))
      throw Jn(r.ruleName, this.name);
    const { formals: n } = this.rules[r.ruleName];
    if (n.length !== r.args.length) {
      const { source: s } = this.rules[r.ruleName];
      throw Hn(
        r.ruleName,
        n.length,
        r.args.length,
        s
      );
    }
    return r;
  }
  _setUpMatchState(e) {
    this._matchStateInitializer && this._matchStateInitializer(e);
  }
}
we.ProtoBuiltInRules = new we(
  "ProtoBuiltInRules",
  // name
  void 0,
  // supergrammar
  {
    any: {
      body: me,
      formals: [],
      description: "any character",
      primitive: !0
    },
    end: {
      body: ge,
      formals: [],
      description: "end of input",
      primitive: !0
    },
    caseInsensitive: {
      body: new Or(new ye(0)),
      formals: ["str"],
      primitive: !0
    },
    lower: {
      body: new pe("Ll"),
      formals: [],
      description: "a lowercase letter",
      primitive: !0
    },
    upper: {
      body: new pe("Lu"),
      formals: [],
      description: "an uppercase letter",
      primitive: !0
    },
    // Union of Lt (titlecase), Lm (modifier), and Lo (other), i.e. any letter not in Ll or Lu.
    unicodeLtmo: {
      body: new pe("Ltmo"),
      formals: [],
      description: "a Unicode character in Lt, Lm, or Lo",
      primitive: !0
    },
    // These rules are not truly primitive (they could be written in userland) but are defined
    // here for bootstrapping purposes.
    spaces: {
      body: new ot(new H("space")),
      formals: []
    },
    space: {
      body: new ve("\0", " "),
      formals: [],
      description: "a space"
    }
  }
);
we.initApplicationParser = function(t, e) {
  rs = t, ns = e;
};
class xn {
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
      this.name === "BuiltInRules" ? we.ProtoBuiltInRules : we.BuiltInRules
    ), this.superGrammar;
  }
  ensureSuperGrammarRuleForOverriding(e, r) {
    const n = this.ensureSuperGrammar().rules[e];
    if (!n)
      throw pa(e, this.superGrammar.name, r);
    return n;
  }
  installOverriddenOrExtendedRule(e, r, n, s) {
    const o = yr(r);
    if (o.length > 0)
      throw mn(e, o, s);
    const a = this.ensureSuperGrammar().rules[e], p = a.formals, c = p ? p.length : 0;
    if (r.length !== c)
      throw Hn(e, c, r.length, s);
    return this.install(e, r, n, a.description, s);
  }
  install(e, r, n, s, o, a = !1) {
    return this.rules[e] = {
      body: n.introduceParams(r),
      formals: r,
      description: s,
      source: o,
      primitive: a
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
    return this.source = new Yt(e).interval(0, e.length), this;
  }
  // Creates a Grammar instance, and if it passes the sanity checks, returns it.
  build() {
    const e = new we(
      this.name,
      this.ensureSuperGrammar(),
      this.rules,
      this.defaultStartRule
    );
    e._matchStateInitializer = e.superGrammar._matchStateInitializer, e.supportsIncrementalParsing = e.superGrammar.supportsIncrementalParsing;
    const r = [];
    let n = !1;
    return Object.keys(e.rules).forEach((s) => {
      const { body: o } = e.rules[s];
      try {
        o.assertChoicesHaveUniformArity(s);
      } catch (a) {
        r.push(a);
      }
      try {
        o.assertAllApplicationsAreValid(s, e);
      } catch (a) {
        r.push(a), n = !0;
      }
    }), n || Object.keys(e.rules).forEach((s) => {
      const { body: o } = e.rules[s];
      try {
        o.assertIteratedExprsAreNotNullable(e, []);
      } catch (a) {
        r.push(a);
      }
    }), r.length > 0 && Ia(r), this.source && (e.source = this.source), e;
  }
  // Rule declarations
  define(e, r, n, s, o, a) {
    if (this.ensureSuperGrammar(), this.superGrammar.rules[e])
      throw dn(e, this.name, this.superGrammar.name, o);
    if (this.rules[e])
      throw dn(e, this.name, this.name, o);
    const p = yr(r);
    if (p.length > 0)
      throw mn(e, p, o);
    return this.install(e, r, n, s, o, a);
  }
  override(e, r, n, s, o) {
    return this.ensureSuperGrammarRuleForOverriding(e, o), this.installOverriddenOrExtendedRule(e, r, n, o), this;
  }
  extend(e, r, n, s, o) {
    if (!this.ensureSuperGrammar().rules[e])
      throw ha(e, this.superGrammar.name, o);
    const p = new Xt(this.superGrammar, e, n);
    return p.source = n.source, this.installOverriddenOrExtendedRule(e, r, p, o), this;
  }
}
class Gt {
  constructor(e) {
    this.currentDecl = null, this.currentRuleName = null, this.options = e || {};
  }
  newGrammar(e) {
    return new xn(e);
  }
  grammar(e, r, n, s, o) {
    const a = new xn(r);
    return n && a.withSuperGrammar(
      n instanceof we ? n : this.fromRecipe(n)
    ), s && a.withDefaultStartRule(s), e && e.source && a.withSource(e.source), this.currentDecl = a, Object.keys(o).forEach((p) => {
      this.currentRuleName = p;
      const c = o[p], d = c[0], g = c[1], m = c[2], v = c[3], I = this.fromRecipe(c[4]);
      let C;
      a.source && g && g.sourceInterval && (C = a.source.subInterval(
        g.sourceInterval[0],
        g.sourceInterval[1] - g.sourceInterval[0]
      )), a[d](p, v, I, m, C);
    }), this.currentRuleName = this.currentDecl = null, a.build();
  }
  terminal(e) {
    return new he(e);
  }
  range(e, r) {
    return new ve(e, r);
  }
  param(e) {
    return new ye(e);
  }
  alt(...e) {
    let r = [];
    for (let n of e)
      n instanceof T || (n = this.fromRecipe(n)), n instanceof oe ? r = r.concat(n.terms) : r.push(n);
    return r.length === 1 ? r[0] : new oe(r);
  }
  seq(...e) {
    let r = [];
    for (let n of e)
      n instanceof T || (n = this.fromRecipe(n)), n instanceof ue ? r = r.concat(n.factors) : r.push(n);
    return r.length === 1 ? r[0] : new ue(r);
  }
  star(e) {
    return e instanceof T || (e = this.fromRecipe(e)), new ot(e);
  }
  plus(e) {
    return e instanceof T || (e = this.fromRecipe(e)), new wt(e);
  }
  opt(e) {
    return e instanceof T || (e = this.fromRecipe(e)), new Je(e);
  }
  not(e) {
    return e instanceof T || (e = this.fromRecipe(e)), new le(e);
  }
  lookahead(e) {
    return e instanceof T || (e = this.fromRecipe(e)), this.options.eliminateLookaheads ? new le(new le(e)) : new Ie(e);
  }
  lex(e) {
    return e instanceof T || (e = this.fromRecipe(e)), new Be(e);
  }
  app(e, r) {
    return r && r.length > 0 && (r = r.map(function(n) {
      return n instanceof T ? n : this.fromRecipe(n);
    }, this)), new H(e, r);
  }
  // Note that unlike other methods in this class, this method cannot be used as a
  // convenience constructor. It only works with recipes, because it relies on
  // `this.currentDecl` and `this.currentRuleName` being set.
  splice(e, r) {
    return new Zt(
      this.currentDecl.superGrammar,
      this.currentRuleName,
      e.map((n) => this.fromRecipe(n)),
      r.map((n) => this.fromRecipe(n))
    );
  }
  fromRecipe(e) {
    const r = e[0] === "grammar" ? e.slice(1) : e.slice(2), n = this[e[0]](...r), s = e[1];
    return s && s.sourceInterval && this.currentDecl && n.withSource(this.currentDecl.sourceInterval(...s.sourceInterval)), n;
  }
}
function $r(t) {
  return typeof t == "function" ? t.call(new Gt()) : (typeof t == "string" && (t = JSON.parse(t)), new Gt().fromRecipe(t));
}
const Lr = $r(["grammar", { source: `BuiltInRules {

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
we.BuiltInRules = Lr;
Fa(we.BuiltInRules);
const Pr = $r(["grammar", { source: `Ohm {

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
`], ["app", { sourceInterval: [2439, 2442] }, "end", []]]]]], comment_multiLine: ["define", { sourceInterval: [2465, 2501] }, null, [], ["seq", { sourceInterval: [2465, 2487] }, ["terminal", { sourceInterval: [2465, 2469] }, "/*"], ["star", { sourceInterval: [2470, 2482] }, ["seq", { sourceInterval: [2471, 2480] }, ["not", { sourceInterval: [2471, 2476] }, ["terminal", { sourceInterval: [2472, 2476] }, "*/"]], ["app", { sourceInterval: [2477, 2480] }, "any", []]]], ["terminal", { sourceInterval: [2483, 2487] }, "*/"]]], comment: ["define", { sourceInterval: [2398, 2501] }, null, [], ["alt", { sourceInterval: [2412, 2501] }, ["app", { sourceInterval: [2412, 2443] }, "comment_singleLine", []], ["app", { sourceInterval: [2465, 2487] }, "comment_multiLine", []]]], tokens: ["define", { sourceInterval: [2505, 2520] }, null, [], ["star", { sourceInterval: [2514, 2520] }, ["app", { sourceInterval: [2514, 2519] }, "token", []]]], token: ["define", { sourceInterval: [2524, 2600] }, null, [], ["alt", { sourceInterval: [2532, 2600] }, ["app", { sourceInterval: [2532, 2540] }, "caseName", []], ["app", { sourceInterval: [2543, 2550] }, "comment", []], ["app", { sourceInterval: [2553, 2558] }, "ident", []], ["app", { sourceInterval: [2561, 2569] }, "operator", []], ["app", { sourceInterval: [2572, 2583] }, "punctuation", []], ["app", { sourceInterval: [2586, 2594] }, "terminal", []], ["app", { sourceInterval: [2597, 2600] }, "any", []]]], operator: ["define", { sourceInterval: [2604, 2669] }, null, [], ["alt", { sourceInterval: [2615, 2669] }, ["terminal", { sourceInterval: [2615, 2619] }, "<:"], ["terminal", { sourceInterval: [2622, 2625] }, "="], ["terminal", { sourceInterval: [2628, 2632] }, ":="], ["terminal", { sourceInterval: [2635, 2639] }, "+="], ["terminal", { sourceInterval: [2642, 2645] }, "*"], ["terminal", { sourceInterval: [2648, 2651] }, "+"], ["terminal", { sourceInterval: [2654, 2657] }, "?"], ["terminal", { sourceInterval: [2660, 2663] }, "~"], ["terminal", { sourceInterval: [2666, 2669] }, "&"]]], punctuation: ["define", { sourceInterval: [2673, 2709] }, null, [], ["alt", { sourceInterval: [2687, 2709] }, ["terminal", { sourceInterval: [2687, 2690] }, "<"], ["terminal", { sourceInterval: [2693, 2696] }, ">"], ["terminal", { sourceInterval: [2699, 2702] }, ","], ["terminal", { sourceInterval: [2705, 2709] }, "--"]]] }]), hr = Object.create(T.prototype);
function Cn(t, e) {
  for (const r in t)
    if (r === e) return !0;
  return !1;
}
function ss(t, e, r, n) {
  const s = new Gt(n);
  let o, a, p, c = !1;
  return (r || Pr).createSemantics().addOperation("visit", {
    Grammars(m) {
      return m.children.map((v) => v.visit());
    },
    Grammar(m, v, I, C, z) {
      const Q = m.visit();
      o = s.newGrammar(Q), v.child(0) && v.child(0).visit(), C.children.map((xe) => xe.visit());
      const U = o.build();
      if (U.source = this.source.trimmed(), Cn(e, Q))
        throw ca(U);
      return e[Q] = U, U;
    },
    SuperGrammar(m, v) {
      const I = v.visit();
      if (I === "null")
        o.withSuperGrammar(null);
      else {
        if (!e || !Cn(e, I))
          throw ua(I, e, v.source);
        o.withSuperGrammar(e[I]);
      }
    },
    Rule_define(m, v, I, C, z) {
      a = m.visit(), p = v.children.map((Oe) => Oe.visit())[0] || [], !o.defaultStartRule && o.ensureSuperGrammar() !== we.ProtoBuiltInRules && o.withDefaultStartRule(a);
      const Q = z.visit(), U = I.children.map((Oe) => Oe.visit())[0], xe = this.source.trimmed();
      return o.define(a, p, Q, U, xe);
    },
    Rule_override(m, v, I, C) {
      a = m.visit(), p = v.children.map((U) => U.visit())[0] || [];
      const z = this.source.trimmed();
      o.ensureSuperGrammarRuleForOverriding(a, z), c = !0;
      const Q = C.visit();
      return c = !1, o.override(a, p, Q, null, z);
    },
    Rule_extend(m, v, I, C) {
      a = m.visit(), p = v.children.map((U) => U.visit())[0] || [];
      const z = C.visit(), Q = this.source.trimmed();
      return o.extend(a, p, z, null, Q);
    },
    RuleBody(m, v) {
      return s.alt(...v.visit()).withSource(this.source);
    },
    OverrideRuleBody(m, v) {
      const I = v.visit(), C = I.indexOf(hr);
      if (C >= 0) {
        const z = I.slice(0, C), Q = I.slice(C + 1);
        return Q.forEach((U) => {
          if (U === hr) throw Aa(U);
        }), new Zt(
          o.superGrammar,
          a,
          z,
          Q
        ).withSource(this.source);
      } else
        return s.alt(...I).withSource(this.source);
    },
    Formals(m, v, I) {
      return v.visit();
    },
    Params(m, v, I) {
      return v.visit();
    },
    Alt(m) {
      return s.alt(...m.visit()).withSource(this.source);
    },
    TopLevelTerm_inline(m, v) {
      const I = a + "_" + v.visit(), C = m.visit(), z = this.source.trimmed(), Q = !(o.superGrammar && o.superGrammar.rules[I]);
      c && !Q ? o.override(I, p, C, null, z) : o.define(I, p, C, null, z);
      const U = p.map((xe) => s.app(xe));
      return s.app(I, U).withSource(C.source);
    },
    OverrideTopLevelTerm_superSplice(m) {
      return hr;
    },
    Seq(m) {
      return s.seq(...m.children.map((v) => v.visit())).withSource(this.source);
    },
    Iter_star(m, v) {
      return s.star(m.visit()).withSource(this.source);
    },
    Iter_plus(m, v) {
      return s.plus(m.visit()).withSource(this.source);
    },
    Iter_opt(m, v) {
      return s.opt(m.visit()).withSource(this.source);
    },
    Pred_not(m, v) {
      return s.not(v.visit()).withSource(this.source);
    },
    Pred_lookahead(m, v) {
      return s.lookahead(v.visit()).withSource(this.source);
    },
    Lex_lex(m, v) {
      return s.lex(v.visit()).withSource(this.source);
    },
    Base_application(m, v) {
      const I = v.children.map((C) => C.visit())[0] || [];
      return s.app(m.visit(), I).withSource(this.source);
    },
    Base_range(m, v, I) {
      return s.range(m.visit(), I.visit()).withSource(this.source);
    },
    Base_terminal(m) {
      return s.terminal(m.visit()).withSource(this.source);
    },
    Base_paren(m, v, I) {
      return v.visit();
    },
    ruleDescr(m, v, I) {
      return v.visit();
    },
    ruleDescrText(m) {
      return this.sourceString.trim();
    },
    caseName(m, v, I, C, z) {
      return I.visit();
    },
    name(m, v) {
      return this.sourceString;
    },
    nameFirst(m) {
    },
    nameRest(m) {
    },
    terminal(m, v, I) {
      return v.children.map((C) => C.visit()).join("");
    },
    oneCharTerminal(m, v, I) {
      return v.visit();
    },
    escapeChar(m) {
      try {
        return zn(this.sourceString);
      } catch (v) {
        throw v instanceof RangeError && v.message.startsWith("Invalid code point ") ? wa(m) : v;
      }
    },
    NonemptyListOf(m, v, I) {
      return [m.visit()].concat(I.children.map((C) => C.visit()));
    },
    EmptyListOf() {
      return [];
    },
    _terminal() {
      return this.sourceString;
    }
  })(t).visit();
}
const Va = $r(["grammar", { source: `OperationsAndAttributes {

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
Ja(we.BuiltInRules);
Ha(Va);
function Ja(t) {
  const e = {
    empty() {
      return this.iteration();
    },
    nonEmpty(r, n, s) {
      return this.iteration([r].concat(s.children));
    },
    self(...r) {
      return this;
    }
  };
  Se.BuiltInSemantics = Se.createSemantics(t, null).addOperation(
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
function Ha(t) {
  Se.prototypeGrammarSemantics = t.createSemantics().addOperation("parse", {
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
      return r.asIteration().children.map((s) => s.parse());
    },
    name(e, r) {
      return this.sourceString;
    }
  }), Se.prototypeGrammar = t;
}
function Ua(t) {
  let e = 0;
  const r = [0], n = () => r[r.length - 1], s = {}, o = /( *).*(?:$|\r?\n|\r)/g;
  let a;
  for (; (a = o.exec(t)) != null; ) {
    const [p, c] = a;
    if (p.length === 0) break;
    const d = c.length, g = n(), m = e + d;
    if (d > g)
      r.push(d), s[m] = 1;
    else if (d < g) {
      const v = r.length;
      for (; n() !== d; )
        r.pop();
      s[m] = -1 * (v - r.length);
    }
    e += p.length;
  }
  return r.length > 1 && (s[e] = 1 - r.length), s;
}
const is = "an indented block", os = "a dedent", Fn = 1114112;
class Ka extends Yt {
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
    return this._indentationAt(this.pos) !== 0 ? (this.examinedLength = Math.max(this.examinedLength, this.pos), Fn) : super.nextCharCode();
  }
  nextCodePoint() {
    return this._indentationAt(this.pos) !== 0 ? (this.examinedLength = Math.max(this.examinedLength, this.pos), Fn) : super.nextCodePoint();
  }
}
class Sn extends T {
  constructor(e = !0) {
    super(), this.isIndent = e;
  }
  allowsSkippingPrecedingSpace() {
    return !0;
  }
  eval(e) {
    const { inputStream: r } = e, n = e.userData;
    e.doNotMemoize = !0;
    const s = r.pos, o = this.isIndent ? 1 : -1;
    return (n[s] || 0) * o > 0 ? (e.userData = Object.create(n), e.userData[s] -= o, e.pushBinding(new at(0), s), !0) : (e.processFailure(s, this), !1);
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
    const r = this.isIndent ? is : os;
    return new ke(this, r, "description");
  }
}
const Qa = new H("indent"), Xa = new H("dedent"), Za = new Zt(Lr, "any", [Qa, Xa], []), Ya = new Gt().newGrammar("IndentationSensitive").withSuperGrammar(Lr).define("indent", [], new Sn(!0), is, void 0, !0).define("dedent", [], new Sn(!1), os, void 0, !0).extend("any", [], Za, "any character", void 0).build();
Object.assign(Ya, {
  _matchStateInitializer(t) {
    t.userData = Ua(t.input), t.inputStream = new Ka(t);
  },
  supportsIncrementalParsing: !1
});
we.initApplicationParser(Pr, ss);
const eu = (t) => !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
function tu(t, e, r) {
  const n = Pr.match(t, "Grammars");
  if (n.failed())
    throw aa(n);
  return ss(n, e, void 0, r);
}
function ru(t, e, r) {
  const n = /* @__PURE__ */ Object.create({});
  if (typeof t != "string")
    if (eu(t))
      t = t.toString();
    else
      throw new TypeError(
        "Expected string as first argument, got " + Br(t)
      );
  return tu(t, n, r), n;
}
function nu(t, e) {
  return ru(t);
}
const su = nu(String.raw`
RistavelBase {
  Text = (space | newline)* Paragraph (paragraphBreak+ Paragraph)* (space | newline)*
  Paragraph = Sentence (sentenceSep? Sentence)*
  Sentence = Clause ClauseTail* "."
  ClauseTail = clauseSeparator Clause

  Clause = (word | quotation)+

  word = ~clauseConnector letter+

  quotation = openQuote quotedContent closeQuote

  openQuote = "\"" | "„" | "«"
  closeQuote = "\"" | "“" | "»"

  quotedContent = (~("\"" | "„" | "“" | "«" | "»") any)*

  clauseSeparator = punctuationSeparator | dashSeparator | clauseConnector

  punctuationSeparator = "," space*

  dashSeparator = space* dash space*
  dash = "—" | "–"

  clauseConnector = space* (caseInsensitive<"og"> | caseInsensitive<"en"> | caseInsensitive<"eða"> | caseInsensitive<"ásamt">) space+

  // Treat newlines explicitly so we can detect paragraph boundaries
  space := " " | "\t" | "\r" | comment
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
}

Ristavel <: RistavelBase {
  Clause := Coinage          -- coinage
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
  //   Merktu „trommur" sem hljóð „bd"     -> a SAMPLE name
  //   Merktu „hé" sem nóta „b"            -> a NOTE pitch-name
  //   Merktu „dúr" sem skali „major"      -> a SCALE name
  // A typed target is a kind keyword + quoted value; a bare word is a function.
  // 'merktu' (mark!) and 'sem' (as) are keywords.
  Coinage = caseInsensitive<"merktu"> space* quotation space* caseInsensitive<"sem"> space* CoinTarget
  CoinTarget = coinKindSample space* quotation  -- sample
             | coinKindNote space* quotation     -- note
             | coinKindScale space* quotation    -- scale
             | word                              -- func
  coinKindSample = caseInsensitive<"hljóð"> ~letter
  coinKindNote = (caseInsensitive<"nóta"> | caseInsensitive<"nótu">) ~letter
  coinKindScale = (caseInsensitive<"skali"> | caseInsensitive<"skala">) ~letter

  // Prepositional noun-phrase clause: a discarded preposition (glue) followed by
  // a dative noun that names the method. e.g. 'með ómi 0.5' -> omur("0.5").
  // The noun goes through NOUN_FORMS normalization like the generic clause, so
  // the dative 'omi'/'styrk' resolves to the canonical locale key. Tried before
  // the generic alt; non-prepositional clauses fall through unchanged. The
  // preposition 'i' here is harmless: 'i rod'/'i einni lotu' only occur after
  // 'spila' inside a Composition, so there is no collision.
  preposition = (caseInsensitive<"með"> | caseInsensitive<"um"> | caseInsensitive<"á"> | caseInsensitive<"í">) ~letter

  // Bare numeric argument: optional minus, digits, optional decimal part.
  // Emitted verbatim as a JS number literal (no quotes), unlike quoted args.
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
  degreeAdverb = (caseInsensitive<"mjög"> | caseInsensitive<"örlítið"> | caseInsensitive<"smá"> | caseInsensitive<"alveg">) ~letter
  DegreeArg = degreeAdverb numeral

  // Adjective scaling — "no numbers, just words". A graded Icelandic adjective
  // names an effect amount: 'styrkur stór' -> styrkur(0.75), 'ómur stærstur' ->
  // ómur(1). An optional emphasis adverb nudges it: 'styrkur mjög stór' ->
  // styrkur(0.85). The value table is Tafla 4/5 of the project report. AdjArg is
  // a syntactic rule so the adverb–adjective space is auto-skipped. Adjectives
  // are listed longest-first so the longest surface form wins.
  AdjArg = scaleAdverb? scaleAdjective
  scaleAdverb = (caseInsensitive<"voðalega"> | caseInsensitive<"rosalega"> | caseInsensitive<"ógeðslega">
               | caseInsensitive<"mjög"> | caseInsensitive<"afar"> | caseInsensitive<"enn"> | caseInsensitive<"rosa">) ~letter
  scaleAdjective = (caseInsensitive<"minnstur"> | caseInsensitive<"minnsta"> | caseInsensitive<"minnst">
                  | caseInsensitive<"stærstur"> | caseInsensitive<"stærsta"> | caseInsensitive<"stærst">
                  | caseInsensitive<"stærri"> | caseInsensitive<"stærra">
                  | caseInsensitive<"minni"> | caseInsensitive<"minna">
                  | caseInsensitive<"lítill"> | caseInsensitive<"lítinn"> | caseInsensitive<"lítil"> | caseInsensitive<"lítið"> | caseInsensitive<"litla">
                  | caseInsensitive<"stóran"> | caseInsensitive<"stóra"> | caseInsensitive<"stórt"> | caseInsensitive<"stór">
                  | caseInsensitive<"hæstur"> | caseInsensitive<"hæsta"> | caseInsensitive<"hæst">
                  | caseInsensitive<"hærri"> | caseInsensitive<"hærra">
                  | caseInsensitive<"háan"> | caseInsensitive<"hátt"> | caseInsensitive<"hár">) ~letter

  // "N sinnum": a count (digits or a worded cardinal) followed by 'sinnum'.
  // Lexical (numericArg is lexical), so the inter-token space is explicit.
  timesPhrase = (numeral | numberWord) space+ sinnum

  numeral = "-"? digit+ ("." digit+)?

  // Worded cardinals 1-10. Longer spellings are listed before shorter ones so
  // the longest match wins (e.g. 'tveir' before any shorter prefix). All gender
  // variants of 1-4 are included, plus the multiplicatives tvisvar/þrisvar.
  numberWord = caseInsensitive<"tvisvar">
             | caseInsensitive<"þrisvar">
             | caseInsensitive<"tveir"> | caseInsensitive<"tvær"> | caseInsensitive<"tvö">
             | caseInsensitive<"þrír"> | caseInsensitive<"þrjár"> | caseInsensitive<"þrjú">
             | caseInsensitive<"fjórir"> | caseInsensitive<"fjórar"> | caseInsensitive<"fjögur">
             | caseInsensitive<"einn"> | caseInsensitive<"ein"> | caseInsensitive<"eitt">
             | caseInsensitive<"fimm"> | caseInsensitive<"sex"> | caseInsensitive<"sjö">
             | caseInsensitive<"átta"> | caseInsensitive<"níu"> | caseInsensitive<"tíu">

  sinnum = caseInsensitive<"sinnum">

  Assignment = variable caseInsensitive<"spilar"> negation? function quotation

  // Multi-subject assignment: 'Davíð og Ásta spila hljóð «bd»' binds one const per
  // subject to the same call, then the paragraph stack collects them. The plural
  // verb 'spila' (vs singular 'spilar') is the connector. Tried before single
  // Assignment so the 'og' between subjects is read as a subject conjunction
  // rather than a clause connector; SubjectList requires 2+ subjects so a lone
  // subject still falls through to Assignment.
  MultiAssignment = SubjectList caseInsensitive<"spila"> negation? function quotation
  SubjectList = variable (punctuationSeparator variable)* caseInsensitive<"og"> variable

  // Additive layer: 'Líka hljóð «~ sd»' adds another voice to the running stack
  // without naming a subject. The semantics binds it to an auto-name (lag2, lag3,
  // …) and pushes it so the paragraph stack picks it up.
  additive = (caseInsensitive<"líka"> | caseInsensitive<"einnig">) ~letter space*

  // Imperative command: 'Spilaðu hljóð «bd»' / 'Spilið hljóð «bd»' emit a bare,
  // un-stacked pattern (command mood). The keyword is discarded; the rest is a
  // normal method clause (and may chain via ClauseTail).
  imperative = (caseInsensitive<"spilaðu"> | caseInsensitive<"spilið">) ~letter space*

  Composition = (caseInsensitive<"mynstur"> | caseInsensitive<"mystur">) space* quotation space* caseInsensitive<"spila"> space* CompositionMode

  variable = ~caseInsensitive<"mynstur"> ~caseInsensitive<"mystur"> ~spilaWord ~spiladuWord ~spilidWord ~ogWord letter+

  // Whole-word lookaheads so a variable that merely starts with these letters is
  // unaffected; here they are exact keywords excluded from being read as a subject
  // name: the plural verb 'spila', the imperative verbs 'spilaðu'/'spilið', and the
  // subject conjunction 'og'.
  spilaWord = caseInsensitive<"spila"> ~letter
  spiladuWord = caseInsensitive<"spilaðu"> ~letter
  spilidWord = caseInsensitive<"spilið"> ~letter
  merktuWord = caseInsensitive<"merktu"> ~letter
  semWord = caseInsensitive<"sem"> ~letter
  ogWord = caseInsensitive<"og"> ~letter

  function = letter+

  // Polarity words. 'ekki' negates an assignment (-> hush) or a generic clause
  // (-> gain(0)). 'aldrei'/'ekkert' are stronger: in an assignment they silence
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
  word := ~clauseConnector ~caseInsensitive<"mynstur"> ~caseInsensitive<"mystur"> ~merktuWord ~semWord ~aldreiWord ~ekkertWord ~spilaWord ~spiladuWord ~spilidWord ~likaWord ~einnigWord ~fylgirWord ~thenWord ~vogWord ~velurWord ~urWord ~kaflinnWord ~raðaðuWord ~takturinnWord ~signalWord ~degreeAdverb ~scaleAdverb ~scaleAdjective ~numeral ~sinnum ~numberWord letter+

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
  Sentence := Clause ClauseTail* terminator
  terminator = period | question | exclamation
  period = "."
  question = "?"
  exclamation = "!"

  // ===== Tempo / sections / arrange (song-structure tiers) =================
  // A paragraph may be headed by a section header 'Kaflinn <name>:', which binds
  // the whole paragraph's layer-sentences to 'const <name> = stack(…)'. Kept as
  // an OPTIONAL prefix (not a labelled alternative) so the single Paragraph
  // action keeps one arity; a plain paragraph has an empty header.
  Paragraph := SectionHeader? sentenceSep? Sentence (sentenceSep? Sentence)*

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
  fylgirWord = caseInsensitive<"fylgir"> ~letter
  thenWord = caseInsensitive<"þá"> ~letter
  vogWord = caseInsensitive<"vog"> ~letter
  aWord = caseInsensitive<"á"> ~letter
  velurWord = caseInsensitive<"velur"> ~letter
  urWord = caseInsensitive<"úr"> ~letter
  signalWord = (caseInsensitive<"sög"> | caseInsensitive<"sínus"> | caseInsensitive<"kósínus">
              | caseInsensitive<"þríhyrnd"> | caseInsensitive<"kassi"> | caseInsensitive<"handahóf">
              | caseInsensitive<"perlín">) ~letter

  ExprArg = "(" Expr ")"  -- paren
          | Expr          -- bare
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
`), fr = su.Ristavel;
function iu(t, e) {
  function r() {
    this.constructor = t;
  }
  r.prototype = e.prototype, t.prototype = new r();
}
function yt(t, e, r, n) {
  var s = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(s, yt.prototype), s.expected = e, s.found = r, s.location = n, s.name = "SyntaxError", s;
}
iu(yt, Error);
function dr(t, e, r) {
  return r = r || " ", t.length > e ? t : (e -= t.length, r += r.repeat(e), t + r.slice(0, e));
}
yt.prototype.format = function(t) {
  var e = "Error: " + this.message;
  if (this.location) {
    var r = null, n;
    for (n = 0; n < t.length; n++)
      if (t[n].source === this.location.source) {
        r = t[n].text.split(/\r\n|\n|\r/g);
        break;
      }
    var s = this.location.start, o = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(s) : s, a = this.location.source + ":" + o.line + ":" + o.column;
    if (r) {
      var p = this.location.end, c = dr("", o.line.toString().length, " "), d = r[s.line - 1], g = s.line === p.line ? p.column : d.length + 1, m = g - s.column || 1;
      e += `
 --> ` + a + `
` + c + ` |
` + o.line + " | " + d + `
` + c + " | " + dr("", s.column - 1, " ") + dr("", m, "^");
    } else
      e += `
 at ` + a;
  }
  return e;
};
yt.buildMessage = function(t, e) {
  var r = {
    literal: function(d) {
      return '"' + s(d.text) + '"';
    },
    class: function(d) {
      var g = d.parts.map(function(m) {
        return Array.isArray(m) ? o(m[0]) + "-" + o(m[1]) : o(m);
      });
      return "[" + (d.inverted ? "^" : "") + g.join("") + "]";
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
  function s(d) {
    return d.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(g) {
      return "\\x0" + n(g);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(g) {
      return "\\x" + n(g);
    });
  }
  function o(d) {
    return d.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(g) {
      return "\\x0" + n(g);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(g) {
      return "\\x" + n(g);
    });
  }
  function a(d) {
    return r[d.type](d);
  }
  function p(d) {
    var g = d.map(a), m, v;
    if (g.sort(), g.length > 0) {
      for (m = 1, v = 1; m < g.length; m++)
        g[m - 1] !== g[m] && (g[v] = g[m], v++);
      g.length = v;
    }
    switch (g.length) {
      case 1:
        return g[0];
      case 2:
        return g[0] + " or " + g[1];
      default:
        return g.slice(0, -1).join(", ") + ", or " + g[g.length - 1];
    }
  }
  function c(d) {
    return d ? '"' + s(d) + '"' : "end of input";
  }
  return "Expected " + p(t) + " but " + c(e) + " found.";
};
function ou(t, e) {
  e = e !== void 0 ? e : {};
  var r = {}, n = e.grammarSource, s = { start: sn }, o = sn, a = ".", p = "-", c = "0", d = ",", g = "|", m = "[", v = "]", I = "{", C = "}", z = "%", Q = "<", U = ">", xe = "!", Oe = "(", Ot = ")", sr = "/", qe = "*", ct = "?", rt = ":", ce = "..", Hr = "^", y = "struct", b = "target", _ = "euclid", S = "slow", k = "rotL", L = "rotR", N = "fast", q = "scale", X = "//", K = "cat", J = "$", re = "setcps", Ae = "setbpm", Z = "hush", Ce = /^[1-9]/, G = /^[eE]/, $t = /^[+\-]/, Ps = /^[0-9]/, Ur = /^[ \n\r\t\xA0]/, Rs = /^["']/, js = /^[#\--.0-9A-Z\^-_a-z~\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376-\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4-\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u09FC\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0-\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60-\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0-\u0CE1\u0CF1-\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E46\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065-\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE-\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5-\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD-\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, Ts = /^[@_]/, Kr = /^[^\n]/, qs = ir("number"), Qr = V(".", !1), Ms = We([["1", "9"]], !1, !1), Ws = We(["e", "E"], !1, !1), zs = We(["+", "-"], !1, !1), Gs = V("-", !1), Vs = V("0", !1), Js = We([["0", "9"]], !1, !1), Hs = ir("whitespace"), Xr = We([" ", `
`, "\r", "	", " "], !1, !1), Us = V(",", !1), Ks = V("|", !1), Qs = We(['"', "'"], !1, !1), Xs = ir('a letter, a number, "-", "#", ".", "^", "_"'), Zs = We(["#", ["-", "."], ["0", "9"], ["A", "Z"], ["^", "_"], ["a", "z"], "~", "ª", "µ", "º", ["À", "Ö"], ["Ø", "ö"], ["ø", "ˁ"], ["ˆ", "ˑ"], ["ˠ", "ˤ"], "ˬ", "ˮ", ["Ͱ", "ʹ"], ["Ͷ", "ͷ"], ["ͺ", "ͽ"], "Ϳ", "Ά", ["Έ", "Ί"], "Ό", ["Ύ", "Ρ"], ["Σ", "ϵ"], ["Ϸ", "ҁ"], ["Ҋ", "ԯ"], ["Ա", "Ֆ"], "ՙ", ["ՠ", "ֈ"], ["א", "ת"], ["ׯ", "ײ"], ["ؠ", "ي"], ["ٮ", "ٯ"], ["ٱ", "ۓ"], "ە", ["ۥ", "ۦ"], ["ۮ", "ۯ"], ["ۺ", "ۼ"], "ۿ", "ܐ", ["ܒ", "ܯ"], ["ݍ", "ޥ"], "ޱ", ["ߊ", "ߪ"], ["ߴ", "ߵ"], "ߺ", ["ࠀ", "ࠕ"], "ࠚ", "ࠤ", "ࠨ", ["ࡀ", "ࡘ"], ["ࡠ", "ࡪ"], ["ࢠ", "ࢴ"], ["ࢶ", "ࢽ"], ["ऄ", "ह"], "ऽ", "ॐ", ["क़", "ॡ"], ["ॱ", "ঀ"], ["অ", "ঌ"], ["এ", "ঐ"], ["ও", "ন"], ["প", "র"], "ল", ["শ", "হ"], "ঽ", "ৎ", ["ড়", "ঢ়"], ["য়", "ৡ"], ["ৰ", "ৱ"], "ৼ", ["ਅ", "ਊ"], ["ਏ", "ਐ"], ["ਓ", "ਨ"], ["ਪ", "ਰ"], ["ਲ", "ਲ਼"], ["ਵ", "ਸ਼"], ["ਸ", "ਹ"], ["ਖ਼", "ੜ"], "ਫ਼", ["ੲ", "ੴ"], ["અ", "ઍ"], ["એ", "ઑ"], ["ઓ", "ન"], ["પ", "ર"], ["લ", "ળ"], ["વ", "હ"], "ઽ", "ૐ", ["ૠ", "ૡ"], "ૹ", ["ଅ", "ଌ"], ["ଏ", "ଐ"], ["ଓ", "ନ"], ["ପ", "ର"], ["ଲ", "ଳ"], ["ଵ", "ହ"], "ଽ", ["ଡ଼", "ଢ଼"], ["ୟ", "ୡ"], "ୱ", "ஃ", ["அ", "ஊ"], ["எ", "ஐ"], ["ஒ", "க"], ["ங", "ச"], "ஜ", ["ஞ", "ட"], ["ண", "த"], ["ந", "ப"], ["ம", "ஹ"], "ௐ", ["అ", "ఌ"], ["ఎ", "ఐ"], ["ఒ", "న"], ["ప", "హ"], "ఽ", ["ౘ", "ౚ"], ["ౠ", "ౡ"], "ಀ", ["ಅ", "ಌ"], ["ಎ", "ಐ"], ["ಒ", "ನ"], ["ಪ", "ಳ"], ["ವ", "ಹ"], "ಽ", "ೞ", ["ೠ", "ೡ"], ["ೱ", "ೲ"], ["അ", "ഌ"], ["എ", "ഐ"], ["ഒ", "ഺ"], "ഽ", "ൎ", ["ൔ", "ൖ"], ["ൟ", "ൡ"], ["ൺ", "ൿ"], ["අ", "ඖ"], ["ක", "න"], ["ඳ", "ර"], "ල", ["ව", "ෆ"], ["ก", "ะ"], ["า", "ำ"], ["เ", "ๆ"], ["ກ", "ຂ"], "ຄ", ["ງ", "ຈ"], "ຊ", "ຍ", ["ດ", "ທ"], ["ນ", "ຟ"], ["ມ", "ຣ"], "ລ", "ວ", ["ສ", "ຫ"], ["ອ", "ະ"], ["າ", "ຳ"], "ຽ", ["ເ", "ໄ"], "ໆ", ["ໜ", "ໟ"], "ༀ", ["ཀ", "ཇ"], ["ཉ", "ཬ"], ["ྈ", "ྌ"], ["က", "ဪ"], "ဿ", ["ၐ", "ၕ"], ["ၚ", "ၝ"], "ၡ", ["ၥ", "ၦ"], ["ၮ", "ၰ"], ["ၵ", "ႁ"], "ႎ", ["Ⴀ", "Ⴥ"], "Ⴧ", "Ⴭ", ["ა", "ჺ"], ["ჼ", "ቈ"], ["ቊ", "ቍ"], ["ቐ", "ቖ"], "ቘ", ["ቚ", "ቝ"], ["በ", "ኈ"], ["ኊ", "ኍ"], ["ነ", "ኰ"], ["ኲ", "ኵ"], ["ኸ", "ኾ"], "ዀ", ["ዂ", "ዅ"], ["ወ", "ዖ"], ["ዘ", "ጐ"], ["ጒ", "ጕ"], ["ጘ", "ፚ"], ["ᎀ", "ᎏ"], ["Ꭰ", "Ᏽ"], ["ᏸ", "ᏽ"], ["ᐁ", "ᙬ"], ["ᙯ", "ᙿ"], ["ᚁ", "ᚚ"], ["ᚠ", "ᛪ"], ["ᛮ", "ᛸ"], ["ᜀ", "ᜌ"], ["ᜎ", "ᜑ"], ["ᜠ", "ᜱ"], ["ᝀ", "ᝑ"], ["ᝠ", "ᝬ"], ["ᝮ", "ᝰ"], ["ក", "ឳ"], "ៗ", "ៜ", ["ᠠ", "ᡸ"], ["ᢀ", "ᢄ"], ["ᢇ", "ᢨ"], "ᢪ", ["ᢰ", "ᣵ"], ["ᤀ", "ᤞ"], ["ᥐ", "ᥭ"], ["ᥰ", "ᥴ"], ["ᦀ", "ᦫ"], ["ᦰ", "ᧉ"], ["ᨀ", "ᨖ"], ["ᨠ", "ᩔ"], "ᪧ", ["ᬅ", "ᬳ"], ["ᭅ", "ᭋ"], ["ᮃ", "ᮠ"], ["ᮮ", "ᮯ"], ["ᮺ", "ᯥ"], ["ᰀ", "ᰣ"], ["ᱍ", "ᱏ"], ["ᱚ", "ᱽ"], ["ᲀ", "ᲈ"], ["Ა", "Ჺ"], ["Ჽ", "Ჿ"], ["ᳩ", "ᳬ"], ["ᳮ", "ᳱ"], ["ᳵ", "ᳶ"], ["ᴀ", "ᶿ"], ["Ḁ", "ἕ"], ["Ἐ", "Ἕ"], ["ἠ", "ὅ"], ["Ὀ", "Ὅ"], ["ὐ", "ὗ"], "Ὑ", "Ὓ", "Ὕ", ["Ὗ", "ώ"], ["ᾀ", "ᾴ"], ["ᾶ", "ᾼ"], "ι", ["ῂ", "ῄ"], ["ῆ", "ῌ"], ["ῐ", "ΐ"], ["ῖ", "Ί"], ["ῠ", "Ῥ"], ["ῲ", "ῴ"], ["ῶ", "ῼ"], "ⁱ", "ⁿ", ["ₐ", "ₜ"], "ℂ", "ℇ", ["ℊ", "ℓ"], "ℕ", ["ℙ", "ℝ"], "ℤ", "Ω", "ℨ", ["K", "ℭ"], ["ℯ", "ℹ"], ["ℼ", "ℿ"], ["ⅅ", "ⅉ"], "ⅎ", ["Ⅰ", "ↈ"], ["Ⰰ", "Ⱞ"], ["ⰰ", "ⱞ"], ["Ⱡ", "ⳤ"], ["Ⳬ", "ⳮ"], ["Ⳳ", "ⳳ"], ["ⴀ", "ⴥ"], "ⴧ", "ⴭ", ["ⴰ", "ⵧ"], "ⵯ", ["ⶀ", "ⶖ"], ["ⶠ", "ⶦ"], ["ⶨ", "ⶮ"], ["ⶰ", "ⶶ"], ["ⶸ", "ⶾ"], ["ⷀ", "ⷆ"], ["ⷈ", "ⷎ"], ["ⷐ", "ⷖ"], ["ⷘ", "ⷞ"], "ⸯ", ["々", "〇"], ["〡", "〩"], ["〱", "〵"], ["〸", "〼"], ["ぁ", "ゖ"], ["ゝ", "ゟ"], ["ァ", "ヺ"], ["ー", "ヿ"], ["ㄅ", "ㄯ"], ["ㄱ", "ㆎ"], ["ㆠ", "ㆺ"], ["ㇰ", "ㇿ"], ["㐀", "䶵"], ["一", "鿯"], ["ꀀ", "ꒌ"], ["ꓐ", "ꓽ"], ["ꔀ", "ꘌ"], ["ꘐ", "ꘟ"], ["ꘪ", "ꘫ"], ["Ꙁ", "ꙮ"], ["ꙿ", "ꚝ"], ["ꚠ", "ꛯ"], ["ꜗ", "ꜟ"], ["Ꜣ", "ꞈ"], ["Ꞌ", "ꞹ"], ["ꟷ", "ꠁ"], ["ꠃ", "ꠅ"], ["ꠇ", "ꠊ"], ["ꠌ", "ꠢ"], ["ꡀ", "ꡳ"], ["ꢂ", "ꢳ"], ["ꣲ", "ꣷ"], "ꣻ", ["ꣽ", "ꣾ"], ["ꤊ", "ꤥ"], ["ꤰ", "ꥆ"], ["ꥠ", "ꥼ"], ["ꦄ", "ꦲ"], "ꧏ", ["ꧠ", "ꧤ"], ["ꧦ", "ꧯ"], ["ꧺ", "ꧾ"], ["ꨀ", "ꨨ"], ["ꩀ", "ꩂ"], ["ꩄ", "ꩋ"], ["ꩠ", "ꩶ"], "ꩺ", ["ꩾ", "ꪯ"], "ꪱ", ["ꪵ", "ꪶ"], ["ꪹ", "ꪽ"], "ꫀ", "ꫂ", ["ꫛ", "ꫝ"], ["ꫠ", "ꫪ"], ["ꫲ", "ꫴ"], ["ꬁ", "ꬆ"], ["ꬉ", "ꬎ"], ["ꬑ", "ꬖ"], ["ꬠ", "ꬦ"], ["ꬨ", "ꬮ"], ["ꬰ", "ꭚ"], ["ꭜ", "ꭥ"], ["ꭰ", "ꯢ"], ["가", "힣"], ["ힰ", "ퟆ"], ["ퟋ", "ퟻ"], ["豈", "舘"], ["並", "龎"], ["ﬀ", "ﬆ"], ["ﬓ", "ﬗ"], "יִ", ["ײַ", "ﬨ"], ["שׁ", "זּ"], ["טּ", "לּ"], "מּ", ["נּ", "סּ"], ["ףּ", "פּ"], ["צּ", "ﮱ"], ["ﯓ", "ﴽ"], ["ﵐ", "ﶏ"], ["ﶒ", "ﷇ"], ["ﷰ", "ﷻ"], ["ﹰ", "ﹴ"], ["ﹶ", "ﻼ"], ["Ａ", "Ｚ"], ["ａ", "ｚ"], ["ｦ", "ﾾ"], ["ￂ", "ￇ"], ["ￊ", "ￏ"], ["ￒ", "ￗ"], ["ￚ", "ￜ"]], !1, !1), Zr = V("[", !1), Yr = V("]", !1), Ys = V("{", !1), ei = V("}", !1), ti = V("%", !1), ri = V("<", !1), ni = V(">", !1), si = We(["@", "_"], !1, !1), ii = V("!", !1), oi = V("(", !1), ai = V(")", !1), ui = V("/", !1), ci = V("*", !1), li = V("?", !1), pi = V(":", !1), hi = V("..", !1), fi = V("^", !1), di = V("struct", !1), mi = V("target", !1), gi = V("euclid", !1), vi = V("slow", !1), yi = V("rotL", !1), Ai = V("rotR", !1), wi = V("fast", !1), _i = V("scale", !1), bi = V("//", !1), en = We([`
`], !0, !1), Ii = V("cat", !1), xi = V("$", !1), Ci = V("setcps", !1), Fi = V("setbpm", !1), Si = V("hush", !1), Ei = function() {
    return parseFloat(fo());
  }, Bi = function(i) {
    const u = i.join("");
    return u === "." || u === "_";
  }, ki = function(i) {
    return new na(i.join(""));
  }, Di = function(i) {
    return i;
  }, Ni = function(i, u) {
    return i.arguments_.stepsPerCycle = u, i;
  }, Oi = function(i) {
    return i;
  }, $i = function(i) {
    return i.arguments_.alignment = "polymeter_slowcat", i;
  }, Li = function(i) {
    return (u) => u.options_.weight = (u.options_.weight ?? 1) + (i ?? 2) - 1;
  }, Pi = function(i) {
    return (u) => {
      const f = (u.options_.reps ?? 1) + (i ?? 2) - 1;
      u.options_.reps = f, u.options_.ops = u.options_.ops.filter((w) => w.type_ !== "replicate"), u.options_.ops.push({ type_: "replicate", arguments_: { amount: f } }), u.options_.weight = f;
    };
  }, Ri = function(i, u, f) {
    return (w) => w.options_.ops.push({ type_: "bjorklund", arguments_: { pulse: i, step: u, rotation: f } });
  }, ji = function(i) {
    return (u) => u.options_.ops.push({ type_: "stretch", arguments_: { amount: i, type: "slow" } });
  }, Ti = function(i) {
    return (u) => u.options_.ops.push({ type_: "stretch", arguments_: { amount: i, type: "fast" } });
  }, qi = function(i) {
    return (u) => u.options_.ops.push({ type_: "degradeBy", arguments_: { amount: i, seed: cr++ } });
  }, Mi = function(i) {
    return (u) => u.options_.ops.push({ type_: "tail", arguments_: { element: i } });
  }, Wi = function(i) {
    return (u) => u.options_.ops.push({ type_: "range", arguments_: { element: i } });
  }, zi = function(i, u) {
    const f = new ia(i, { ops: [], weight: 1, reps: 1 });
    for (const w of u)
      w(f);
    return f;
  }, Gi = function(i, u) {
    return new jt(u, "fastcat", void 0, !!i);
  }, Vi = function(i) {
    return { alignment: "stack", list: i };
  }, Ji = function(i) {
    return { alignment: "rand", list: i, seed: cr++ };
  }, Hi = function(i) {
    return { alignment: "feet", list: i, seed: cr++ };
  }, Ui = function(i, u) {
    return u && u.list.length > 0 ? new jt([i, ...u.list], u.alignment, u.seed) : i;
  }, Ki = function(i, u) {
    return new jt(u ? [i, ...u.list] : [i], "polymeter");
  }, Qi = function(i) {
    return i;
  }, Xi = function(i) {
    return { name: "struct", args: { mini: i } };
  }, Zi = function(i) {
    return { name: "target", args: { name: i } };
  }, Yi = function(i, u, f) {
    return { name: "bjorklund", args: { pulse: i, step: parseInt(u) } };
  }, eo = function(i) {
    return { name: "stretch", args: { amount: i } };
  }, to = function(i) {
    return { name: "shift", args: { amount: "-" + i } };
  }, ro = function(i) {
    return { name: "shift", args: { amount: i } };
  }, no = function(i) {
    return { name: "stretch", args: { amount: "1/" + i } };
  }, so = function(i) {
    return { name: "scale", args: { scale: i.join("") } };
  }, tn = function(i, u) {
    return u;
  }, io = function(i, u) {
    return u.unshift(i), new jt(u, "slowcat");
  }, oo = function(i) {
    return i;
  }, ao = function(i, u) {
    return new sa(i.name, i.args, u);
  }, uo = function(i) {
    return i;
  }, co = function(i) {
    return i;
  }, lo = function(i) {
    return new ur("setcps", { value: i });
  }, po = function(i) {
    return new ur("setcps", { value: i / 120 / 2 });
  }, ho = function() {
    return new ur("hush");
  }, h = e.peg$currPos | 0, j = h, lt = [{ line: 1, column: 1 }], $e = h, Lt = e.peg$maxFailExpected || [], D = e.peg$silentFails | 0, xt;
  if (e.startRule) {
    if (!(e.startRule in s))
      throw new Error(`Can't start parsing from rule "` + e.startRule + '".');
    o = s[e.startRule];
  }
  function fo() {
    return t.substring(j, h);
  }
  function rn() {
    return or(j, h);
  }
  function V(i, u) {
    return { type: "literal", text: i, ignoreCase: u };
  }
  function We(i, u, f) {
    return { type: "class", parts: i, inverted: u, ignoreCase: f };
  }
  function mo() {
    return { type: "end" };
  }
  function ir(i) {
    return { type: "other", description: i };
  }
  function nn(i) {
    var u = lt[i], f;
    if (u)
      return u;
    if (i >= lt.length)
      f = lt.length - 1;
    else
      for (f = i; !lt[--f]; )
        ;
    for (u = lt[f], u = {
      line: u.line,
      column: u.column
    }; f < i; )
      t.charCodeAt(f) === 10 ? (u.line++, u.column = 1) : u.column++, f++;
    return lt[i] = u, u;
  }
  function or(i, u, f) {
    var w = nn(i), O = nn(u), ee = {
      source: n,
      start: {
        offset: i,
        line: w.line,
        column: w.column
      },
      end: {
        offset: u,
        line: O.line,
        column: O.column
      }
    };
    return ee;
  }
  function P(i) {
    h < $e || (h > $e && ($e = h, Lt = []), Lt.push(i));
  }
  function go(i, u, f) {
    return new yt(
      yt.buildMessage(i, u),
      i,
      u,
      f
    );
  }
  function sn() {
    var i;
    return i = ra(), i;
  }
  function ze() {
    var i, u;
    return D++, i = h, bo(), u = Pt(), u !== r ? (_o(), wo(), j = i, i = Ei()) : (h = i, i = r), D--, i === r && D === 0 && P(qs), i;
  }
  function vo() {
    var i;
    return t.charCodeAt(h) === 46 ? (i = a, h++) : (i = r, D === 0 && P(Qr)), i;
  }
  function yo() {
    var i;
    return i = t.charAt(h), Ce.test(i) ? h++ : (i = r, D === 0 && P(Ms)), i;
  }
  function Ao() {
    var i;
    return i = t.charAt(h), G.test(i) ? h++ : (i = r, D === 0 && P(Ws)), i;
  }
  function wo() {
    var i, u, f, w, O;
    if (i = h, u = Ao(), u !== r) {
      if (f = t.charAt(h), $t.test(f) ? h++ : (f = r, D === 0 && P(zs)), f === r && (f = null), w = [], O = pt(), O !== r)
        for (; O !== r; )
          w.push(O), O = pt();
      else
        w = r;
      w !== r ? (u = [u, f, w], i = u) : (h = i, i = r);
    } else
      h = i, i = r;
    return i;
  }
  function _o() {
    var i, u, f, w;
    if (i = h, u = vo(), u !== r) {
      if (f = [], w = pt(), w !== r)
        for (; w !== r; )
          f.push(w), w = pt();
      else
        f = r;
      f !== r ? (u = [u, f], i = u) : (h = i, i = r);
    } else
      h = i, i = r;
    return i;
  }
  function Pt() {
    var i, u, f, w;
    if (i = Io(), i === r)
      if (i = h, u = yo(), u !== r) {
        for (f = [], w = pt(); w !== r; )
          f.push(w), w = pt();
        u = [u, f], i = u;
      } else
        h = i, i = r;
    return i;
  }
  function bo() {
    var i;
    return t.charCodeAt(h) === 45 ? (i = p, h++) : (i = r, D === 0 && P(Gs)), i;
  }
  function Io() {
    var i;
    return t.charCodeAt(h) === 48 ? (i = c, h++) : (i = r, D === 0 && P(Vs)), i;
  }
  function pt() {
    var i;
    return i = t.charAt(h), Ps.test(i) ? h++ : (i = r, D === 0 && P(Js)), i;
  }
  function R() {
    var i, u;
    for (D++, i = [], u = t.charAt(h), Ur.test(u) ? h++ : (u = r, D === 0 && P(Xr)); u !== r; )
      i.push(u), u = t.charAt(h), Ur.test(u) ? h++ : (u = r, D === 0 && P(Xr));
    return D--, u = r, D === 0 && P(Hs), i;
  }
  function ht() {
    var i, u, f, w;
    return i = h, u = R(), t.charCodeAt(h) === 44 ? (f = d, h++) : (f = r, D === 0 && P(Us)), f !== r ? (w = R(), u = [u, f, w], i = u) : (h = i, i = r), i;
  }
  function on() {
    var i, u, f, w;
    return i = h, u = R(), t.charCodeAt(h) === 124 ? (f = g, h++) : (f = r, D === 0 && P(Ks)), f !== r ? (w = R(), u = [u, f, w], i = u) : (h = i, i = r), i;
  }
  function an() {
    var i, u, f, w;
    return i = h, u = R(), t.charCodeAt(h) === 46 ? (f = a, h++) : (f = r, D === 0 && P(Qr)), f !== r ? (w = R(), u = [u, f, w], i = u) : (h = i, i = r), i;
  }
  function ft() {
    var i;
    return i = t.charAt(h), Rs.test(i) ? h++ : (i = r, D === 0 && P(Qs)), i;
  }
  function Rt() {
    var i;
    return D++, i = t.charAt(h), js.test(i) ? h++ : (i = r, D === 0 && P(Zs)), D--, i === r && D === 0 && P(Xs), i;
  }
  function un() {
    var i, u, f, w;
    if (i = h, R(), u = [], f = Rt(), f !== r)
      for (; f !== r; )
        u.push(f), f = Rt();
    else
      u = r;
    return u !== r ? (f = R(), j = h, w = Bi(u), w ? w = r : w = void 0, w !== r ? (j = i, i = ki(u)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function xo() {
    var i, u, f, w;
    return i = h, R(), t.charCodeAt(h) === 91 ? (u = m, h++) : (u = r, D === 0 && P(Zr)), u !== r ? (R(), f = pn(), f !== r ? (R(), t.charCodeAt(h) === 93 ? (w = v, h++) : (w = r, D === 0 && P(Yr)), w !== r ? (R(), j = i, i = Di(f)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Co() {
    var i, u, f, w, O;
    return i = h, R(), t.charCodeAt(h) === 123 ? (u = I, h++) : (u = r, D === 0 && P(Ys)), u !== r ? (R(), f = hn(), f !== r ? (R(), t.charCodeAt(h) === 125 ? (w = C, h++) : (w = r, D === 0 && P(ei)), w !== r ? (O = Fo(), O === r && (O = null), R(), j = i, i = Ni(f, O)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Fo() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 37 ? (u = z, h++) : (u = r, D === 0 && P(ti)), u !== r ? (f = dt(), f !== r ? (j = i, i = Oi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function So() {
    var i, u, f, w;
    return i = h, R(), t.charCodeAt(h) === 60 ? (u = Q, h++) : (u = r, D === 0 && P(ri)), u !== r ? (R(), f = hn(), f !== r ? (R(), t.charCodeAt(h) === 62 ? (w = U, h++) : (w = r, D === 0 && P(ni)), w !== r ? (R(), j = i, i = $i(f)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function dt() {
    var i;
    return i = un(), i === r && (i = xo(), i === r && (i = Co(), i === r && (i = So()))), i;
  }
  function cn() {
    var i;
    return i = Eo(), i === r && (i = ko(), i === r && (i = Do(), i === r && (i = No(), i === r && (i = Bo(), i === r && (i = Oo(), i === r && (i = $o(), i === r && (i = Lo()))))))), i;
  }
  function Eo() {
    var i, u, f;
    return i = h, R(), u = t.charAt(h), Ts.test(u) ? h++ : (u = r, D === 0 && P(si)), u !== r ? (f = ze(), f === r && (f = null), j = i, i = Li(f)) : (h = i, i = r), i;
  }
  function Bo() {
    var i, u, f;
    return i = h, R(), t.charCodeAt(h) === 33 ? (u = xe, h++) : (u = r, D === 0 && P(ii)), u !== r ? (f = ze(), f === r && (f = null), j = i, i = Pi(f)) : (h = i, i = r), i;
  }
  function ko() {
    var i, u, f, w, O, ee, Le;
    return i = h, t.charCodeAt(h) === 40 ? (u = Oe, h++) : (u = r, D === 0 && P(oi)), u !== r ? (R(), f = Ct(), f !== r ? (R(), w = ht(), w !== r ? (R(), O = Ct(), O !== r ? (R(), ht(), R(), ee = Ct(), ee === r && (ee = null), R(), t.charCodeAt(h) === 41 ? (Le = Ot, h++) : (Le = r, D === 0 && P(ai)), Le !== r ? (j = i, i = Ri(f, O, ee)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Do() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 47 ? (u = sr, h++) : (u = r, D === 0 && P(ui)), u !== r ? (f = dt(), f !== r ? (j = i, i = ji(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function No() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 42 ? (u = qe, h++) : (u = r, D === 0 && P(ci)), u !== r ? (f = dt(), f !== r ? (j = i, i = Ti(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Oo() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 63 ? (u = ct, h++) : (u = r, D === 0 && P(li)), u !== r ? (f = ze(), f === r && (f = null), j = i, i = qi(f)) : (h = i, i = r), i;
  }
  function $o() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 58 ? (u = rt, h++) : (u = r, D === 0 && P(pi)), u !== r ? (f = dt(), f !== r ? (j = i, i = Mi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Lo() {
    var i, u, f;
    return i = h, t.substr(h, 2) === ce ? (u = ce, h += 2) : (u = r, D === 0 && P(hi)), u !== r ? (f = dt(), f !== r ? (j = i, i = Wi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Ct() {
    var i, u, f, w;
    if (i = h, u = dt(), u !== r) {
      for (f = [], w = cn(); w !== r; )
        f.push(w), w = cn();
      j = i, i = zi(u, f);
    } else
      h = i, i = r;
    return i;
  }
  function He() {
    var i, u, f, w;
    if (i = h, t.charCodeAt(h) === 94 ? (u = Hr, h++) : (u = r, D === 0 && P(fi)), u === r && (u = null), f = [], w = Ct(), w !== r)
      for (; w !== r; )
        f.push(w), w = Ct();
    else
      f = r;
    return f !== r ? (j = i, i = Gi(u, f)) : (h = i, i = r), i;
  }
  function ln() {
    var i, u, f, w, O;
    if (i = h, u = [], f = h, w = ht(), w !== r ? (O = He(), O !== r ? f = O : (h = f, f = r)) : (h = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = h, w = ht(), w !== r ? (O = He(), O !== r ? f = O : (h = f, f = r)) : (h = f, f = r);
    else
      u = r;
    return u !== r && (j = i, u = Vi(u)), i = u, i;
  }
  function Po() {
    var i, u, f, w, O;
    if (i = h, u = [], f = h, w = on(), w !== r ? (O = He(), O !== r ? f = O : (h = f, f = r)) : (h = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = h, w = on(), w !== r ? (O = He(), O !== r ? f = O : (h = f, f = r)) : (h = f, f = r);
    else
      u = r;
    return u !== r && (j = i, u = Ji(u)), i = u, i;
  }
  function Ro() {
    var i, u, f, w, O;
    if (i = h, u = [], f = h, w = an(), w !== r ? (O = He(), O !== r ? f = O : (h = f, f = r)) : (h = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = h, w = an(), w !== r ? (O = He(), O !== r ? f = O : (h = f, f = r)) : (h = f, f = r);
    else
      u = r;
    return u !== r && (j = i, u = Hi(u)), i = u, i;
  }
  function pn() {
    var i, u, f;
    return i = h, u = He(), u !== r ? (f = ln(), f === r && (f = Po(), f === r && (f = Ro())), f === r && (f = null), j = i, i = Ui(u, f)) : (h = i, i = r), i;
  }
  function hn() {
    var i, u, f;
    return i = h, u = He(), u !== r ? (f = ln(), f === r && (f = null), j = i, i = Ki(u, f)) : (h = i, i = r), i;
  }
  function jo() {
    var i, u, f, w;
    return i = h, R(), u = ft(), u !== r ? (R(), f = pn(), f !== r ? (R(), w = ft(), w !== r ? (j = i, i = Qi(f)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function To() {
    var i;
    return i = Ho(), i === r && (i = zo(), i === r && (i = Jo(), i === r && (i = Mo(), i === r && (i = Wo(), i === r && (i = qo(), i === r && (i = Vo(), i === r && (i = Go()))))))), i;
  }
  function qo() {
    var i, u, f;
    return i = h, t.substr(h, 6) === y ? (u = y, h += 6) : (u = r, D === 0 && P(di)), u !== r ? (R(), f = mt(), f !== r ? (j = i, i = Xi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Mo() {
    var i, u, f, w, O;
    return i = h, t.substr(h, 6) === b ? (u = b, h += 6) : (u = r, D === 0 && P(mi)), u !== r ? (R(), f = ft(), f !== r ? (w = un(), w !== r ? (O = ft(), O !== r ? (j = i, i = Zi(w)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Wo() {
    var i, u, f, w;
    return i = h, t.substr(h, 6) === _ ? (u = _, h += 6) : (u = r, D === 0 && P(gi)), u !== r ? (R(), f = Pt(), f !== r ? (R(), w = Pt(), w !== r ? (R(), Pt(), j = i, i = Yi(f, w)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function zo() {
    var i, u, f;
    return i = h, t.substr(h, 4) === S ? (u = S, h += 4) : (u = r, D === 0 && P(vi)), u !== r ? (R(), f = ze(), f !== r ? (j = i, i = eo(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Go() {
    var i, u, f;
    return i = h, t.substr(h, 4) === k ? (u = k, h += 4) : (u = r, D === 0 && P(yi)), u !== r ? (R(), f = ze(), f !== r ? (j = i, i = to(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Vo() {
    var i, u, f;
    return i = h, t.substr(h, 4) === L ? (u = L, h += 4) : (u = r, D === 0 && P(Ai)), u !== r ? (R(), f = ze(), f !== r ? (j = i, i = ro(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Jo() {
    var i, u, f;
    return i = h, t.substr(h, 4) === N ? (u = N, h += 4) : (u = r, D === 0 && P(wi)), u !== r ? (R(), f = ze(), f !== r ? (j = i, i = no(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Ho() {
    var i, u, f, w, O;
    if (i = h, t.substr(h, 5) === q ? (u = q, h += 5) : (u = r, D === 0 && P(_i)), u !== r)
      if (R(), f = ft(), f !== r) {
        if (w = [], O = Rt(), O !== r)
          for (; O !== r; )
            w.push(O), O = Rt();
        else
          w = r;
        w !== r ? (O = ft(), O !== r ? (j = i, i = so(w)) : (h = i, i = r)) : (h = i, i = r);
      } else
        h = i, i = r;
    else
      h = i, i = r;
    return i;
  }
  function ar() {
    var i, u, f, w;
    if (i = h, t.substr(h, 2) === X ? (u = X, h += 2) : (u = r, D === 0 && P(bi)), u !== r) {
      for (f = [], w = t.charAt(h), Kr.test(w) ? h++ : (w = r, D === 0 && P(en)); w !== r; )
        f.push(w), w = t.charAt(h), Kr.test(w) ? h++ : (w = r, D === 0 && P(en));
      u = [u, f], i = u;
    } else
      h = i, i = r;
    return i;
  }
  function Uo() {
    var i, u, f, w, O, ee, Le, gt;
    if (i = h, t.substr(h, 3) === K ? (u = K, h += 3) : (u = r, D === 0 && P(Ii)), u !== r)
      if (R(), t.charCodeAt(h) === 91 ? (f = m, h++) : (f = r, D === 0 && P(Zr)), f !== r)
        if (R(), w = mt(), w !== r) {
          for (O = [], ee = h, Le = ht(), Le !== r ? (gt = mt(), gt !== r ? (j = ee, ee = tn(w, gt)) : (h = ee, ee = r)) : (h = ee, ee = r); ee !== r; )
            O.push(ee), ee = h, Le = ht(), Le !== r ? (gt = mt(), gt !== r ? (j = ee, ee = tn(w, gt)) : (h = ee, ee = r)) : (h = ee, ee = r);
          ee = R(), t.charCodeAt(h) === 93 ? (Le = v, h++) : (Le = r, D === 0 && P(Yr)), Le !== r ? (j = i, i = io(w, O)) : (h = i, i = r);
        } else
          h = i, i = r;
      else
        h = i, i = r;
    else
      h = i, i = r;
    return i;
  }
  function Ko() {
    var i;
    return i = Uo(), i === r && (i = jo()), i;
  }
  function mt() {
    var i, u, f, w, O;
    if (i = h, u = Ko(), u !== r) {
      for (R(), f = [], w = ar(); w !== r; )
        f.push(w), w = ar();
      j = i, i = oo(u);
    } else
      h = i, i = r;
    return i === r && (i = h, u = To(), u !== r ? (R(), t.charCodeAt(h) === 36 ? (f = J, h++) : (f = r, D === 0 && P(xi)), f !== r ? (w = R(), O = mt(), O !== r ? (j = i, i = ao(u, O)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r)), i;
  }
  function Qo() {
    var i, u;
    return i = h, u = mt(), u !== r && (j = i, u = uo(u)), i = u, i === r && (i = ar()), i;
  }
  function Xo() {
    var i;
    return i = Qo(), i;
  }
  function Zo() {
    var i, u;
    return i = h, R(), u = Yo(), u === r && (u = ea(), u === r && (u = ta())), u !== r ? (R(), j = i, i = co(u)) : (h = i, i = r), i;
  }
  function Yo() {
    var i, u, f;
    return i = h, t.substr(h, 6) === re ? (u = re, h += 6) : (u = r, D === 0 && P(Ci)), u !== r ? (R(), f = ze(), f !== r ? (j = i, i = lo(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function ea() {
    var i, u, f;
    return i = h, t.substr(h, 6) === Ae ? (u = Ae, h += 6) : (u = r, D === 0 && P(Fi)), u !== r ? (R(), f = ze(), f !== r ? (j = i, i = po(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function ta() {
    var i, u;
    return i = h, t.substr(h, 4) === Z ? (u = Z, h += 4) : (u = r, D === 0 && P(Si)), u !== r && (j = i, u = ho()), i = u, i;
  }
  function ra() {
    var i;
    return i = Xo(), i === r && (i = Zo()), i;
  }
  var na = function(i) {
    this.type_ = "atom", this.source_ = i, this.location_ = rn();
  }, jt = function(i, u, f, w) {
    this.type_ = "pattern", this.arguments_ = { alignment: u, _steps: w }, f !== void 0 && (this.arguments_.seed = f), this.source_ = i;
  }, sa = function(i, u, f) {
    this.type_ = i, this.arguments_ = u, this.source_ = f;
  }, ia = function(i, u) {
    this.type_ = "element", this.source_ = i, this.options_ = u, this.location_ = rn();
  }, ur = function(i, u) {
    this.type_ = "command", this.name_ = i, this.options_ = u;
  }, cr = 0;
  if (xt = o(), e.peg$library)
    return (
      /** @type {any} */
      {
        peg$result: xt,
        peg$currPos: h,
        peg$FAILED: r,
        peg$maxFailExpected: Lt,
        peg$maxFailPos: $e
      }
    );
  if (xt !== r && h === t.length)
    return xt;
  throw xt !== r && h < t.length && P(mo()), go(
    Lt,
    $e < t.length ? t.charAt($e) : null,
    $e < t.length ? or($e, $e + 1) : or($e, $e)
  );
}
const as = "strudel.log";
let au = 1e3, En, Bn;
function uu(t, e = "cyclist") {
  process.env.NODE_ENV === "development" && console.error(t), _t(`[${e}] error: ${t.message}`);
}
function _t(t, e, r = {}) {
  let n = performance.now();
  En === t && n - Bn < au || (En = t, Bn = n, console.log(`%c${t}`, "background-color: black;color:white;border-radius:15px"), typeof document < "u" && typeof CustomEvent < "u" && document.dispatchEvent(
    new CustomEvent(as, {
      detail: {
        message: t,
        type: e,
        data: r
      }
    })
  ));
}
_t.key = as;
typeof BigInt > "u" && (BigInt = function(t) {
  if (isNaN(t)) throw new Error("");
  return t;
});
const $ = BigInt(0), M = BigInt(1), kt = BigInt(2), Cr = BigInt(5), Fe = BigInt(10), cu = 2e3, E = {
  s: M,
  n: $,
  d: M
};
function Ge(t, e) {
  try {
    t = BigInt(t);
  } catch {
    throw Ue();
  }
  return t * e;
}
function Pe(t) {
  return typeof t == "bigint" ? t : Math.floor(t);
}
function te(t, e) {
  if (e === $)
    throw Rr();
  const r = Object.create(Y.prototype);
  r.s = t < $ ? -M : M, t = t < $ ? -t : t;
  const n = nt(t, e);
  return r.n = t / n, r.d = e / n, r;
}
function vt(t) {
  const e = {};
  let r = t, n = kt, s = Cr - M;
  for (; s <= r; ) {
    for (; r % n === $; )
      r /= n, e[n] = (e[n] || $) + M;
    s += M + kt * n++;
  }
  return r !== t ? r > 1 && (e[r] = (e[r] || $) + M) : e[t] = (e[t] || $) + M, e;
}
const ae = function(t, e) {
  let r = $, n = M, s = M;
  if (t != null) if (e !== void 0) {
    if (typeof t == "bigint")
      r = t;
    else {
      if (isNaN(t))
        throw Ue();
      if (t % 1 !== 0)
        throw kn();
      r = BigInt(t);
    }
    if (typeof e == "bigint")
      n = e;
    else {
      if (isNaN(e))
        throw Ue();
      if (e % 1 !== 0)
        throw kn();
      n = BigInt(e);
    }
    s = r * n;
  } else if (typeof t == "object") {
    if ("d" in t && "n" in t)
      r = BigInt(t.n), n = BigInt(t.d), "s" in t && (r *= BigInt(t.s));
    else if (0 in t)
      r = BigInt(t[0]), 1 in t && (n = BigInt(t[1]));
    else if (typeof t == "bigint")
      r = t;
    else
      throw Ue();
    s = r * n;
  } else if (typeof t == "number") {
    if (isNaN(t))
      throw Ue();
    if (t < 0 && (s = -M, t = -t), t % 1 === 0)
      r = BigInt(t);
    else if (t > 0) {
      let o = 1, a = 0, p = 1, c = 1, d = 1, g = 1e7;
      for (t >= 1 && (o = 10 ** Math.floor(1 + Math.log10(t)), t /= o); p <= g && d <= g; ) {
        let m = (a + c) / (p + d);
        if (t === m) {
          p + d <= g ? (r = a + c, n = p + d) : d > p ? (r = c, n = d) : (r = a, n = p);
          break;
        } else
          t > m ? (a += c, p += d) : (c += a, d += p), p > g ? (r = c, n = d) : (r = a, n = p);
      }
      r = BigInt(r) * BigInt(o), n = BigInt(n);
    }
  } else if (typeof t == "string") {
    let o = 0, a = $, p = $, c = $, d = M, g = M, m = t.replace(/_/g, "").match(/\d+|./g);
    if (m === null)
      throw Ue();
    if (m[o] === "-" ? (s = -M, o++) : m[o] === "+" && o++, m.length === o + 1 ? p = Ge(m[o++], s) : m[o + 1] === "." || m[o] === "." ? (m[o] !== "." && (a = Ge(m[o++], s)), o++, (o + 1 === m.length || m[o + 1] === "(" && m[o + 3] === ")" || m[o + 1] === "'" && m[o + 3] === "'") && (p = Ge(m[o], s), d = Fe ** BigInt(m[o].length), o++), (m[o] === "(" && m[o + 2] === ")" || m[o] === "'" && m[o + 2] === "'") && (c = Ge(m[o + 1], s), g = Fe ** BigInt(m[o + 1].length) - M, o += 3)) : m[o + 1] === "/" || m[o + 1] === ":" ? (p = Ge(m[o], s), d = Ge(m[o + 2], M), o += 3) : m[o + 3] === "/" && m[o + 1] === " " && (a = Ge(m[o], s), p = Ge(m[o + 2], s), d = Ge(m[o + 4], M), o += 5), m.length <= o)
      n = d * g, s = /* void */
      r = c + n * a + g * p;
    else
      throw Ue();
  } else if (typeof t == "bigint")
    r = t, s = t, n = M;
  else
    throw Ue();
  if (n === $)
    throw Rr();
  E.s = s < $ ? -M : M, E.n = r < $ ? -r : r, E.d = n < $ ? -n : n;
};
function lu(t, e, r) {
  let n = M;
  for (; e > $; t = t * t % r, e >>= M)
    e & M && (n = n * t % r);
  return n;
}
function pu(t, e) {
  for (; e % kt === $; e /= kt)
    ;
  for (; e % Cr === $; e /= Cr)
    ;
  if (e === M)
    return $;
  let r = Fe % e, n = 1;
  for (; r !== M; n++)
    if (r = r * Fe % e, n > cu)
      return $;
  return BigInt(n);
}
function hu(t, e, r) {
  let n = M, s = lu(Fe, r, e);
  for (let o = 0; o < 300; o++) {
    if (n === s)
      return BigInt(o);
    n = n * Fe % e, s = s * Fe % e;
  }
  return 0;
}
function nt(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  for (; ; ) {
    if (t %= e, !t)
      return e;
    if (e %= t, !e)
      return t;
  }
}
function Y(t, e) {
  if (ae(t, e), this instanceof Y)
    t = nt(E.d, E.n), this.s = E.s, this.n = E.n / t, this.d = E.d / t;
  else
    return te(E.s * E.n, E.d);
}
var Rr = function() {
  return new Error("Division by Zero");
}, Ue = function() {
  return new Error("Invalid argument");
}, kn = function() {
  return new Error("Parameters must be integer");
};
Y.prototype = {
  s: M,
  n: $,
  d: M,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return te(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return te(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(t, e) {
    return ae(t, e), te(
      this.s * this.n * E.d + E.s * this.d * E.n,
      this.d * E.d
    );
  },
  /**
   * Subtracts two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
   **/
  sub: function(t, e) {
    return ae(t, e), te(
      this.s * this.n * E.d - E.s * this.d * E.n,
      this.d * E.d
    );
  },
  /**
   * Multiplies two rational numbers
   *
   * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
   **/
  mul: function(t, e) {
    return ae(t, e), te(
      this.s * E.s * this.n * E.n,
      this.d * E.d
    );
  },
  /**
   * Divides two rational numbers
   *
   * Ex: new Fraction("-17.(345)").inverse().div(3)
   **/
  div: function(t, e) {
    return ae(t, e), te(
      this.s * E.s * this.n * E.d,
      this.d * E.n
    );
  },
  /**
   * Clones the actual object
   *
   * Ex: new Fraction("-17.(345)").clone()
   **/
  clone: function() {
    return te(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
   **/
  mod: function(t, e) {
    if (t === void 0)
      return te(this.s * this.n % this.d, M);
    if (ae(t, e), $ === E.n * this.d)
      throw Rr();
    return te(
      this.s * (E.d * this.n) % (E.n * this.d),
      E.d * this.d
    );
  },
  /**
   * Calculates the fractional gcd of two rational numbers
   *
   * Ex: new Fraction(5,8).gcd(3,7) => 1/56
   */
  gcd: function(t, e) {
    return ae(t, e), te(nt(E.n, this.n) * nt(E.d, this.d), E.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(t, e) {
    return ae(t, e), E.n === $ && this.n === $ ? te($, M) : te(E.n * this.n, nt(E.n, this.n) * nt(E.d, this.d));
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return te(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some integer exponent
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(t, e) {
    if (ae(t, e), E.d === M)
      return E.s < $ ? te((this.s * this.d) ** E.n, this.n ** E.n) : te((this.s * this.n) ** E.n, this.d ** E.n);
    if (this.s < $) return null;
    let r = vt(this.n), n = vt(this.d), s = M, o = M;
    for (let a in r)
      if (a !== "1") {
        if (a === "0") {
          s = $;
          break;
        }
        if (r[a] *= E.n, r[a] % E.d === $)
          r[a] /= E.d;
        else return null;
        s *= BigInt(a) ** r[a];
      }
    for (let a in n)
      if (a !== "1") {
        if (n[a] *= E.n, n[a] % E.d === $)
          n[a] /= E.d;
        else return null;
        o *= BigInt(a) ** n[a];
      }
    return E.s < $ ? te(o, s) : te(s, o);
  },
  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */
  log: function(t, e) {
    if (ae(t, e), this.s <= $ || E.s <= $) return null;
    const r = {}, n = vt(E.n), s = vt(E.d), o = vt(this.n), a = vt(this.d);
    for (const d in s)
      n[d] = (n[d] || $) - s[d];
    for (const d in a)
      o[d] = (o[d] || $) - a[d];
    for (const d in n)
      d !== "1" && (r[d] = !0);
    for (const d in o)
      d !== "1" && (r[d] = !0);
    let p = null, c = null;
    for (const d in r) {
      const g = n[d] || $, m = o[d] || $;
      if (g === $) {
        if (m !== $)
          return null;
        continue;
      }
      let v = m, I = g;
      const C = nt(v, I);
      if (v /= C, I /= C, p === null && c === null)
        p = v, c = I;
      else if (v * c !== p * I)
        return null;
    }
    return p !== null && c !== null ? te(p, c) : null;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(t, e) {
    return ae(t, e), this.s * this.n * E.d === E.s * E.n * this.d;
  },
  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lt: function(t, e) {
    return ae(t, e), this.s * this.n * E.d < E.s * E.n * this.d;
  },
  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lte: function(t, e) {
    return ae(t, e), this.s * this.n * E.d <= E.s * E.n * this.d;
  },
  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gt: function(t, e) {
    return ae(t, e), this.s * this.n * E.d > E.s * E.n * this.d;
  },
  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gte: function(t, e) {
    return ae(t, e), this.s * this.n * E.d >= E.s * E.n * this.d;
  },
  /**
   * Compare two rational numbers
   * < 0 iff this < that
   * > 0 iff this > that
   * = 0 iff this = that
   *
   * Ex: new Fraction(19.6).compare([98, 5]);
   **/
  compare: function(t, e) {
    ae(t, e);
    let r = this.s * this.n * E.d - E.s * E.n * this.d;
    return ($ < r) - (r < $);
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(t) {
    return t = Fe ** BigInt(t || 0), te(
      Pe(this.s * t * this.n / this.d) + (t * this.n % this.d > $ && this.s >= $ ? M : $),
      t
    );
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(t) {
    return t = Fe ** BigInt(t || 0), te(
      Pe(this.s * t * this.n / this.d) - (t * this.n % this.d > $ && this.s < $ ? M : $),
      t
    );
  },
  /**
   * Rounds a rational numbers
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(t) {
    return t = Fe ** BigInt(t || 0), te(
      Pe(this.s * t * this.n / this.d) + this.s * ((this.s >= $ ? M : $) + kt * (t * this.n % this.d) > this.d ? M : $),
      t
    );
  },
  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  roundTo: function(t, e) {
    ae(t, e);
    const r = this.n * E.d, n = this.d * E.n, s = r % n;
    let o = Pe(r / n);
    return s + s >= n && o++, te(this.s * o * E.n, E.d);
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(t, e) {
    return ae(t, e), !(!(E.n * this.d) || this.n * E.d % (E.n * this.d));
  },
  /**
   * Returns a decimal representation of the fraction
   *
   * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
   **/
  valueOf: function() {
    return Number(this.s * this.n) / Number(this.d);
  },
  /**
   * Creates a string representation of a fraction with all digits
   *
   * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
   **/
  toString: function(t) {
    let e = this.n, r = this.d;
    t = t || 15;
    let n = pu(e, r), s = hu(e, r, n), o = this.s < $ ? "-" : "";
    if (o += Pe(e / r), e %= r, e *= Fe, e && (o += "."), n) {
      for (let a = s; a--; )
        o += Pe(e / r), e %= r, e *= Fe;
      o += "(";
      for (let a = n; a--; )
        o += Pe(e / r), e %= r, e *= Fe;
      o += ")";
    } else
      for (let a = t; e && a--; )
        o += Pe(e / r), e %= r, e *= Fe;
    return o;
  },
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
   **/
  toFraction: function(t) {
    let e = this.n, r = this.d, n = this.s < $ ? "-" : "";
    if (r === M)
      n += e;
    else {
      let s = Pe(e / r);
      t && s > $ && (n += s, n += " ", e %= r), n += e, n += "/", n += r;
    }
    return n;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(t) {
    let e = this.n, r = this.d, n = this.s < $ ? "-" : "";
    if (r === M)
      n += e;
    else {
      let s = Pe(e / r);
      t && s > $ && (n += s, e %= r), n += "\\frac{", n += e, n += "}{", n += r, n += "}";
    }
    return n;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    let t = this.n, e = this.d, r = [];
    do {
      r.push(Pe(t / e));
      let n = t % e;
      t = e, e = n;
    } while (t !== M);
    return r;
  },
  simplify: function(t) {
    const e = BigInt(1 / (t || 1e-3) | 0), r = this.abs(), n = r.toContinued();
    for (let s = 1; s < n.length; s++) {
      let o = te(n[s - 1], M);
      for (let p = s - 2; p >= 0; p--)
        o = o.inverse().add(n[p]);
      let a = o.sub(r);
      if (a.n * e < a.d)
        return o.mul(this.s);
    }
    return this;
  }
};
const Dn = {}, us = (t) => {
  if (typeof t != "string" || !t) return t;
  const e = t.toLowerCase();
  let r = "";
  for (const n in Dn)
    e.startsWith(n) && n.length > r.length && (r = n);
  return r ? Dn[r] + t.slice(r.length) : t;
}, fu = (t) => /^[a-gA-G][#bsf]*-?[0-9]*$/.test(us(t)), du = (t) => {
  if (typeof t != "string")
    return [];
  t = us(t);
  const [e, r = "", n] = t.match(/^([a-gA-G])([#bsf]*)(-?[0-9]*)$/)?.slice(1) || [];
  return e ? [e, r, n ? Number(n) : void 0] : [];
}, mu = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 }, gu = { "#": 1, b: -1, s: 1, f: -1 }, vu = (t) => t?.split("").reduce((e, r) => e + gu[r], 0) || 0, yu = (t, e = 3) => {
  const [r, n, s = e] = du(t);
  if (!r)
    throw new Error('not a note: "' + t + '"');
  const o = mu[r.toLowerCase()], a = vu(n);
  return (Number(s) + 1) * 12 + o + a;
}, cs = (t, e) => (t % e + e) % e, Au = (t, e) => t.slice(e).concat(t.slice(0, e)), Nt = (t) => t.filter((e) => e != null), Ke = (t) => [].concat(...t), Tt = (t) => t, er = (t, e) => Array.from({ length: e - t + 1 }, (r, n) => n + t);
function W(t, e, r = t.length) {
  const n = function s(...o) {
    if (o.length >= r)
      return t.apply(this, o);
    {
      const a = function(...p) {
        return s.apply(this, o.concat(p));
      };
      return e && e(a, o), a;
    }
  };
  return e && e(n, []), n;
}
function ls(t) {
  const e = Number(t);
  if (!isNaN(e))
    return e;
  if (fu(t))
    return yu(t);
  throw new Error(`cannot parse as numeral: "${t}"`);
}
function wu(t, e) {
  return (...r) => t(...r.map(e));
}
function Re(t) {
  return wu(t, ls);
}
const ps = function(t, e) {
  return [e.slice(0, t), e.slice(t)];
}, jr = (t, e, r) => e.map((n, s) => t(n, r[s])), _u = function(t) {
  const e = [];
  for (let r = 0; r < t.length - 1; ++r)
    e.push([t[r], t[r + 1]]);
  return e;
}, bu = (t, e, r) => Math.min(Math.max(t, e), r);
function Iu(t) {
  return t.sort((e, r) => e.compare(r)).filter(function(e, r, n) {
    return !r || e.ne(n[r - 1]);
  });
}
function xu(t, e) {
  return Array.isArray(t) ? t.map(e) : Object.fromEntries(Object.entries(t).map(([r, n], s) => [r, e(n, r, s)]));
}
const Cu = /* @__PURE__ */ new Map([
  ["control", "Control"],
  ["ctrl", "Control"],
  ["alt", "Alt"],
  ["shift", "Shift"],
  ["down", "ArrowDown"],
  ["up", "ArrowUp"],
  ["left", "ArrowLeft"],
  ["right", "ArrowRight"]
]);
let Ft;
function Fu() {
  if (Ft == null) {
    if (typeof window > "u")
      return;
    Ft = {}, window.addEventListener("keydown", (t) => {
      Ft[t.key] = !0;
    }), window.addEventListener("keyup", (t) => {
      Ft[t.key] = !1;
    });
  }
  return { ...Ft };
}
function hs(t, e = !1) {
  return typeof t == "object" ? e ? JSON.stringify(t).slice(1, -1).replaceAll('"', "").replaceAll(",", " ") : JSON.stringify(t) : t;
}
Y.prototype.sam = function() {
  return this.floor();
};
Y.prototype.nextSam = function() {
  return this.sam().add(1);
};
Y.prototype.wholeCycle = function() {
  return new se(this.sam(), this.nextSam());
};
Y.prototype.cyclePos = function() {
  return this.sub(this.sam());
};
Y.prototype.lt = function(t) {
  return this.compare(t) < 0;
};
Y.prototype.gt = function(t) {
  return this.compare(t) > 0;
};
Y.prototype.lte = function(t) {
  return this.compare(t) <= 0;
};
Y.prototype.gte = function(t) {
  return this.compare(t) >= 0;
};
Y.prototype.eq = function(t) {
  return this.compare(t) == 0;
};
Y.prototype.ne = function(t) {
  return this.compare(t) != 0;
};
Y.prototype.max = function(t) {
  return this.gt(t) ? this : t;
};
Y.prototype.maximum = function(...t) {
  return t = t.map((e) => new Y(e)), t.reduce((e, r) => r.max(e), this);
};
Y.prototype.min = function(t) {
  return this.lt(t) ? this : t;
};
Y.prototype.mulmaybe = function(t) {
  return t !== void 0 ? this.mul(t) : void 0;
};
Y.prototype.divmaybe = function(t) {
  return t !== void 0 ? this.div(t) : void 0;
};
Y.prototype.addmaybe = function(t) {
  return t !== void 0 ? this.add(t) : void 0;
};
Y.prototype.submaybe = function(t) {
  return t !== void 0 ? this.sub(t) : void 0;
};
Y.prototype.show = function() {
  return this.s * this.n + "/" + this.d;
};
Y.prototype.or = function(t) {
  return this.eq(0) ? t : this;
};
const Tr = (t) => Y(t), Su = (...t) => {
  if (t = Nt(t), t.length !== 0)
    return t.reduce((e, r) => e.gcd(r), Tr(1));
}, Qe = (...t) => {
  if (t = Nt(t), t.length === 0)
    return;
  const e = t.pop();
  return t.reduce(
    (r, n) => r === void 0 || n === void 0 ? void 0 : r.lcm(n),
    e
  );
}, Eu = (t) => t instanceof Y;
Tr._original = Y;
const F = Tr;
class se {
  constructor(e, r) {
    this.begin = F(e), this.end = F(r);
  }
  get spanCycles() {
    const e = [];
    var r = this.begin;
    const n = this.end, s = n.sam();
    if (r.equals(n))
      return [new se(r, n)];
    for (; n.gt(r); ) {
      if (r.sam().equals(s)) {
        e.push(new se(r, this.end));
        break;
      }
      const o = r.nextSam();
      e.push(new se(r, o)), r = o;
    }
    return e;
  }
  get duration() {
    return this.end.sub(this.begin);
  }
  cycleArc() {
    const e = this.begin.cyclePos(), r = e.add(this.duration);
    return new se(e, r);
  }
  withTime(e) {
    return new se(e(this.begin), e(this.end));
  }
  withEnd(e) {
    return new se(this.begin, e(this.end));
  }
  withCycle(e) {
    const r = this.begin.sam(), n = r.add(e(this.begin.sub(r))), s = r.add(e(this.end.sub(r)));
    return new se(n, s);
  }
  intersection(e) {
    const r = this.begin.max(e.begin), n = this.end.min(e.end);
    if (!r.gt(n) && !(r.equals(n) && (r.equals(this.end) && this.begin.lt(this.end) || r.equals(e.end) && e.begin.lt(e.end))))
      return new se(r, n);
  }
  intersection_e(e) {
    const r = this.intersection(e);
    if (r == null)
      throw "TimeSpans do not intersect";
    return r;
  }
  midpoint() {
    return this.begin.add(this.duration.div(F(2)));
  }
  equals(e) {
    return this.begin.equals(e.begin) && this.end.equals(e.end);
  }
  show() {
    return this.begin.show() + " → " + this.end.show();
  }
}
class ie {
  /*
        Event class, representing a value active during the timespan
        'part'. This might be a fragment of an event, in which case the
        timespan will be smaller than the 'whole' timespan, otherwise the
        two timespans will be the same. The 'part' must never extend outside of the
        'whole'. If the event represents a continuously changing value
        then the whole will be returned as None, in which case the given
        value will have been sampled from the point halfway between the
        start and end of the 'part' timespan.
        The context is to store a list of source code locations causing the event.
  
        The word 'Event' is more or less a reserved word in javascript, hence this
        class is named called 'Hap'.
        */
  constructor(e, r, n, s = {}, o = !1) {
    this.whole = e, this.part = r, this.value = n, this.context = s, this.stateful = o, o && console.assert(typeof this.value == "function", "Stateful values must be functions");
  }
  get duration() {
    let e;
    return typeof this.value?.duration == "number" ? e = F(this.value.duration) : e = this.whole.end.sub(this.whole.begin), typeof this.value?.clip == "number" ? e.mul(this.value.clip) : e;
  }
  get endClipped() {
    return this.whole.begin.add(this.duration);
  }
  isActive(e) {
    return this.whole.begin <= e && this.endClipped >= e;
  }
  isInPast(e) {
    return e > this.endClipped;
  }
  isInNearPast(e, r) {
    return r - e <= this.endClipped;
  }
  isInFuture(e) {
    return e < this.whole.begin;
  }
  isInNearFuture(e, r) {
    return r < this.whole.begin && r > this.whole.begin - e;
  }
  isWithinTime(e, r) {
    return this.whole.begin <= r && this.endClipped >= e;
  }
  wholeOrPart() {
    return this.whole ? this.whole : this.part;
  }
  withSpan(e) {
    const r = this.whole ? e(this.whole) : void 0;
    return new ie(r, e(this.part), this.value, this.context);
  }
  withValue(e) {
    return new ie(this.whole, this.part, e(this.value), this.context);
  }
  hasOnset() {
    return this.whole != null && this.whole.begin.equals(this.part.begin);
  }
  hasTag(e) {
    return this.context.tags?.includes(e);
  }
  resolveState(e) {
    if (this.stateful && this.hasOnset()) {
      console.log("stateful");
      const r = this.value, [n, s] = r(e);
      return [n, new ie(this.whole, this.part, s, this.context, !1)];
    }
    return [e, this];
  }
  spanEquals(e) {
    return this.whole == null && e.whole == null || this.whole.equals(e.whole);
  }
  equals(e) {
    return this.spanEquals(e) && this.part.equals(e.part) && // TODO would == be better ??
    this.value === e.value;
  }
  show(e = !1) {
    const r = typeof this.value == "object" ? e ? JSON.stringify(this.value).slice(1, -1).replaceAll('"', "").replaceAll(",", " ") : JSON.stringify(this.value) : this.value;
    var n = "";
    if (this.whole == null)
      n = "~" + this.part.show;
    else {
      var s = this.whole.begin.equals(this.part.begin) && this.whole.end.equals(this.part.end);
      this.whole.begin.equals(this.part.begin) || (n = this.whole.begin.show() + " ⇜ "), s || (n += "("), n += this.part.show(), s || (n += ")"), this.whole.end.equals(this.part.end) || (n += " ⇝ " + this.whole.end.show());
    }
    return "[ " + n + " | " + r + " ]";
  }
  showWhole(e = !1) {
    return `${this.whole == null ? "~" : this.whole.show()}: ${hs(this.value, e)}`;
  }
  combineContext(e) {
    const r = this;
    return { ...r.context, ...e.context, locations: (r.context.locations || []).concat(e.context.locations || []) };
  }
  setContext(e) {
    return new ie(this.whole, this.part, this.value, e);
  }
  ensureObjectValue() {
    if (typeof this.value != "object")
      throw new Error(
        `expected hap.value to be an object, but got "${this.value}". Hint: append .note() or .s() to the end`,
        "error"
      );
  }
}
class Dt {
  constructor(e, r = {}) {
    this.span = e, this.controls = r;
  }
  // Returns new State with different span
  setSpan(e) {
    return new Dt(e, this.controls);
  }
  withSpan(e) {
    return this.setSpan(e(this.span));
  }
  // Returns new State with added controls.
  setControls(e) {
    return new Dt(this.span, { ...this.controls, ...e });
  }
}
function Bu(t, e, r) {
  if (e?.value !== void 0 && Object.keys(e).length === 1)
    return _t("[warn]: Can't do arithmetic on control pattern."), t;
  const n = Object.keys(t).filter((s) => Object.keys(e).includes(s));
  return Object.assign({}, t, e, Object.fromEntries(n.map((s) => [s, r(t[s], e[s])])));
}
W((t, e) => t * e);
W((t, e) => e.map(t));
function ku(t, e = 60) {
  let r = 0, n = F(0), s = [""], o = "";
  for (; s[0].length < e; ) {
    const a = t.queryArc(r, r + 1), p = a.filter((g) => g.hasOnset()).map((g) => g.duration), c = Su(...p), d = c.inverse();
    s = s.map((g) => g + "|"), o += "|";
    for (let g = 0; g < d; g++) {
      const [m, v] = [n, n.add(c)], I = a.filter((z) => z.whole.begin.lte(m) && z.whole.end.gte(v)), C = I.length - s.length;
      C > 0 && (s = s.concat(Array(C).fill(o))), s = s.map((z, Q) => {
        const U = I[Q];
        if (U) {
          const Oe = U.whole.begin.eq(m) ? "" + U.value : "-";
          return z + Oe;
        }
        return z + ".";
      }), o += ".", n = n.add(c);
    }
    r++;
  }
  return s.join(`
`);
}
const qr = {};
globalThis.strudelScope = qr;
const Fr = /* @__PURE__ */ new Set();
globalThis.userDefinedKeys = Fr;
const Du = () => {
  for (const t of Fr)
    delete qr[t], delete globalThis[t];
  return Fr.clear(), globalThis.silence;
};
globalThis.clearScope = Du;
class x {
  /**
   * Create a pattern. As an end user, you will most likely not create a Pattern directly.
   *
   * @param {function} query - The function that maps a `State` to an array of `Hap`.
   * @noAutocomplete
   */
  constructor(e, r = void 0) {
    this.query = e, this._Pattern = !0, this._steps = r;
  }
  get _steps() {
    return this.__steps;
  }
  set _steps(e) {
    this.__steps = e === void 0 ? void 0 : F(e);
  }
  setSteps(e) {
    return this._steps = e, this;
  }
  withSteps(e) {
    return new x(this.query, this._steps === void 0 ? void 0 : e(this._steps));
  }
  get hasSteps() {
    return this._steps !== void 0;
  }
  //////////////////////////////////////////////////////////////////////
  // Haskell-style functor, applicative and monadic operations
  /**
   * Returns a new pattern, with the function applied to the value of
   * each hap. It has the alias `fmap`.
   * @tags functional
   * @synonyms fmap
   * @param {Function} func to to apply to the value
   * @returns Pattern
   * @example
   * "0 1 2".withValue(v => v + 10).log()
   */
  withValue(e) {
    const r = new x((n) => this.query(n).map((s) => s.withValue(e)));
    return r._steps = this._steps, r;
  }
  // runs func on query state
  withState(e) {
    return new x((r) => this.query(e(r)));
  }
  /**
   * see `withValue`
   * @noAutocomplete
   */
  fmap(e) {
    return this.withValue(e);
  }
  /**
   * Assumes 'this' is a pattern of functions, and given a function to
   * resolve wholes, applies a given pattern of values to that
   * pattern of functions.
   * @tags functional
   * @param {Function} whole_func
   * @param {Function} func
   * @noAutocomplete
   * @returns Pattern
   */
  appWhole(e, r) {
    const n = this, s = function(o) {
      const a = n.query(o), p = r.query(o), c = function(d, g) {
        const m = d.part.intersection(g.part);
        if (m != null)
          return new ie(
            e(d.whole, g.whole),
            m,
            d.value(g.value),
            g.combineContext(d)
          );
      };
      return Ke(
        a.map((d) => Nt(p.map((g) => c(d, g))))
      );
    };
    return new x(s);
  }
  /**
   * When this method is called on a pattern of functions, it matches its haps
   * with those in the given pattern of values.  A new pattern is returned, with
   * each matching value applied to the corresponding function.
   *
   * In this `_appBoth` variant, where timespans of the function and value haps
   * are not the same but do intersect, the resulting hap has a timespan of the
   * intersection. This applies to both the part and the whole timespan.
   * @tags functional
   * @param {Pattern} pat_val
   * @noAutocomplete
   * @returns Pattern
   */
  appBoth(e) {
    const r = this, n = function(o, a) {
      if (!(o == null || a == null))
        return o.intersection_e(a);
    }, s = r.appWhole(n, e);
    return s._steps = Qe(e._steps, r._steps), s;
  }
  /**
   * As with `appBoth`, but the `whole` timespan is not the intersection,
   * but the timespan from the function of patterns that this method is called
   * on. In practice, this means that the pattern structure, including onsets,
   * are preserved from the pattern of functions (often referred to as the left
   * hand or inner pattern).
   * @tags functional
   * @param {Pattern} pat_val
   * @noAutocomplete
   * @returns Pattern
   */
  appLeft(e) {
    const r = this, n = function(o) {
      const a = [];
      for (const p of r.query(o)) {
        const c = e.query(o.setSpan(p.wholeOrPart()));
        for (const d of c) {
          const g = p.whole, m = p.part.intersection(d.part);
          if (m) {
            const v = p.value(d.value), I = d.combineContext(p), C = new ie(g, m, v, I);
            a.push(C);
          }
        }
      }
      return a;
    }, s = new x(n);
    return s._steps = this._steps, s;
  }
  /**
   * As with `appLeft`, but `whole` timespans are instead taken from the
   * pattern of values, i.e. structure is preserved from the right hand/outer
   * pattern.
   * @tags functional
   * @param {Pattern} pat_val
   * @noAutocomplete
   * @returns Pattern
   */
  appRight(e) {
    const r = this, n = function(o) {
      const a = [];
      for (const p of e.query(o)) {
        const c = r.query(o.setSpan(p.wholeOrPart()));
        for (const d of c) {
          const g = p.whole, m = d.part.intersection(p.part);
          if (m) {
            const v = d.value(p.value), I = p.combineContext(d), C = new ie(g, m, v, I);
            a.push(C);
          }
        }
      }
      return a;
    }, s = new x(n);
    return s._steps = e._steps, s;
  }
  bindWhole(e, r) {
    const n = this, s = function(o) {
      const a = function(c, d) {
        return new ie(
          e(c.whole, d.whole),
          d.part,
          d.value,
          Object.assign({}, c.context, d.context, {
            locations: (c.context.locations || []).concat(d.context.locations || [])
          })
        );
      }, p = function(c) {
        return r(c.value).query(o.setSpan(c.part)).map((d) => a(c, d));
      };
      return Ke(n.query(o).map((c) => p(c)));
    };
    return new x(s);
  }
  bind(e) {
    const r = function(n, s) {
      if (!(n == null || s == null))
        return n.intersection_e(s);
    };
    return this.bindWhole(r, e);
  }
  join() {
    return this.bind(Tt);
  }
  outerBind(e) {
    return this.bindWhole((r) => r, e).setSteps(this._steps);
  }
  outerJoin() {
    return this.outerBind(Tt);
  }
  innerBind(e) {
    return this.bindWhole((r, n) => n, e);
  }
  innerJoin() {
    return this.innerBind(Tt);
  }
  // Flatterns patterns of patterns, by retriggering/resetting inner patterns at onsets of outer pattern haps
  resetJoin(e = !1) {
    const r = this;
    return new x((n) => r.discreteOnly().query(n).map((s) => s.value.late(e ? s.whole.begin : s.whole.begin.cyclePos()).query(n).map(
      (o) => new ie(
        // Supports continuous haps in the inner pattern
        o.whole ? o.whole.intersection(s.whole) : void 0,
        o.part.intersection(s.part),
        o.value
      ).setContext(s.combineContext(o))
    ).filter((o) => o.part)).flat());
  }
  restartJoin() {
    return this.resetJoin(!0);
  }
  // Like the other joins above, joins a pattern of patterns of values, into a flatter
  // pattern of values. In this case it takes whole cycles of the inner pattern to fit each event
  // in the outer pattern.
  squeezeJoin() {
    const e = this;
    function r(n) {
      const s = e.discreteOnly().query(n);
      function o(p) {
        const d = p.value._focusSpan(p.wholeOrPart()).query(n.setSpan(p.part));
        function g(m, v) {
          let I;
          if (v.whole && m.whole && (I = v.whole.intersection(m.whole), !I))
            return;
          const C = v.part.intersection(m.part);
          if (!C)
            return;
          const z = v.combineContext(m);
          return new ie(I, C, v.value, z);
        }
        return d.map((m) => g(p, m));
      }
      return Ke(s.map(o)).filter((p) => p);
    }
    return new x(r);
  }
  squeezeBind(e) {
    return this.fmap(e).squeezeJoin();
  }
  polyJoin = function() {
    const e = this;
    return e.fmap((r) => r.extend(e._steps.div(r._steps))).outerJoin();
  };
  polyBind(e) {
    return this.fmap(e).polyJoin();
  }
  //////////////////////////////////////////////////////////////////////
  // Utility methods mainly for internal use
  /**
   * Query haps inside the given time span.
   *
   * @tags internals
   * @param {Fraction | number} begin from time
   * @param {Fraction | number} end to time
   * @returns Hap[]
   * @example
   * const pattern = sequence('a', ['b', 'c'])
   * const haps = pattern.queryArc(0, 1)
   * console.log(haps)
   * silence
   * @noAutocomplete
   */
  queryArc(e, r, n = {}) {
    try {
      return this.query(new Dt(new se(e, r), n));
    } catch (s) {
      return uu(s, "query"), [];
    }
  }
  /**
   * Returns a new pattern, with queries split at cycle boundaries. This makes
   * some calculations easier to express, as all haps are then constrained to
   * happen within a cycle.
   * @tags internals
   * @returns Pattern
   * @noAutocomplete
   */
  splitQueries() {
    const e = this, r = (n) => Ke(n.span.spanCycles.map((s) => e.query(n.setSpan(s))));
    return new x(r);
  }
  /**
   * Returns a new pattern, where the given function is applied to the query
   * timespan before passing it to the original pattern.
   * @tags internals
   * @param {Function} func the function to apply
   * @returns Pattern
   * @noAutocomplete
   */
  withQuerySpan(e) {
    return new x((r) => this.query(r.withSpan(e)));
  }
  withQuerySpanMaybe(e) {
    const r = this;
    return new x((n) => {
      const s = n.withSpan(e);
      return s.span ? r.query(s) : [];
    });
  }
  /**
   * As with `withQuerySpan`, but the function is applied to both the
   * begin and end time of the query timespan.
   * @tags internals
   * @param {Function} func the function to apply
   * @returns Pattern
   * @noAutocomplete
   */
  withQueryTime(e) {
    return new x((r) => this.query(r.withSpan((n) => n.withTime(e))));
  }
  /**
   * Similar to `withQuerySpan`, but the function is applied to the timespans
   * of all haps returned by pattern queries (both `part` timespans, and where
   * present, `whole` timespans).
   * @tags internals
   * @param {Function} func
   * @returns Pattern
   * @noAutocomplete
   */
  withHapSpan(e) {
    return new x((r) => this.query(r).map((n) => n.withSpan(e)));
  }
  /**
   * As with `withHapSpan`, but the function is applied to both the
   * begin and end time of the hap timespans.
   * @tags internals
   * @param {Function} func the function to apply
   * @returns Pattern
   * @noAutocomplete
   */
  withHapTime(e) {
    return this.withHapSpan((r) => r.withTime(e));
  }
  /**
   * Returns a new pattern with the given function applied to the list of haps returned by every query.
   * @tags internals
   * @param {Function} func
   * @returns Pattern
   * @noAutocomplete
   */
  withHaps(e) {
    const r = new x((n) => e(this.query(n), n));
    return r._steps = this._steps, r;
  }
  /**
   * As with `withHaps`, but applies the function to every hap, rather than every list of haps.
   * @tags internals
   * @param {Function} func
   * @returns Pattern
   * @noAutocomplete
   */
  withHap(e) {
    return this.withHaps((r) => r.map(e));
  }
  /**
   * Returns a new pattern with the context field set to every hap set to the given value.
   * @tags internals
   * @param {*} context
   * @returns Pattern
   * @noAutocomplete
   */
  setContext(e) {
    return this.withHap((r) => r.setContext(e));
  }
  /**
   * Returns a new pattern with the given function applied to the context field of every hap.
   * @tags internals
   * @param {Function} func
   * @returns Pattern
   * @noAutocomplete
   */
  withContext(e) {
    const r = this.withHap((n) => n.setContext(e(n.context)));
    return this.__pure !== void 0 && (r.__pure = this.__pure, r.__pure_loc = this.__pure_loc), r;
  }
  /**
   * Returns a new pattern with the context field of every hap set to an empty object.
   * @tags internals
   * @returns Pattern
   * @noAutocomplete
   */
  stripContext() {
    return this.withHap((e) => e.setContext({}));
  }
  /**
   * Returns a new pattern with the given location information added to the
   * context of every hap.
   * @tags internals
   * @param {Number} start start offset
   * @param {Number} end end offset
   * @returns Pattern
   * @noAutocomplete
   */
  withLoc(e, r) {
    const n = {
      start: e,
      end: r
    }, s = this.withContext((o) => {
      const a = (o.locations || []).concat([n]);
      return { ...o, locations: a };
    });
    return this.__pure && (s.__pure = this.__pure, s.__pure_loc = n), s;
  }
  /**
   * Returns a new Pattern, which only returns haps that meet the given test.
   * @tags internals
   * @param {Function} hap_test - a function which returns false for haps to be removed from the pattern
   * @returns Pattern
   * @example
   * s("bd*8").velocity(rand).filterHaps((h) => (h.whole.begin % 1) < h.value.velocity)
   */
  filterHaps(e) {
    return new x((r) => this.query(r).filter(e));
  }
  /**
   * As with `filterHaps`, but the function is applied to values
   * inside haps.
   * @tags internals
   * @param {Function} value_test
   * @returns Pattern
   * @example
   * const drums = s("bd sd bd sd")
   * kick: drums.filterValues((v) => v.s === 'bd').duck(2)
   * snare: drums.filterValues((v) => v.s === 'sd')
   * bass: s("saw!4").note("G#1").lpf(80).lpenv(4).orbit(2)
   */
  filterValues(e) {
    return new x((r) => this.query(r).filter((n) => e(n.value))).setSteps(this._steps);
  }
  /**
   * Returns a new pattern, with haps containing undefined values removed from
   * query results.
   * @tags internals
   * @returns Pattern
   * @noAutocomplete
   */
  removeUndefineds() {
    return this.filterValues((e) => e != null);
  }
  /**
   * Returns a new pattern, with all haps without onsets filtered out. A hap
   * with an onset is one with a `whole` timespan that begins at the same time
   * as its `part` timespan.
   * @tags internals
   * @returns Pattern
   * @noAutocomplete
   */
  onsetsOnly() {
    return this.filterHaps((e) => e.hasOnset());
  }
  /**
   * Returns a new pattern, with 'continuous' haps (those without 'whole'
   * timespans) removed from query results.
   * @tags internals
   * @returns Pattern
   * @noAutocomplete
   */
  discreteOnly() {
    return this.filterHaps((e) => e.whole);
  }
  /**
   * Combines adjacent haps with the same value and whole.  Only
   * intended for use in tests.
   * @tags internals
   * @noAutocomplete
   */
  defragmentHaps() {
    return this.discreteOnly().withHaps((r) => {
      const n = [];
      for (var s = 0; s < r.length; ++s) {
        for (var o = !0, a = r[s]; o; ) {
          const d = JSON.stringify(r[s].value);
          for (var p = !1, c = s + 1; c < r.length; c++) {
            const g = r[c];
            if (a.whole.equals(g.whole)) {
              if (a.part.begin.eq(g.part.end)) {
                if (d === JSON.stringify(g.value)) {
                  a = new ie(a.whole, new se(g.part.begin, a.part.end), a.value), r.splice(c, 1), p = !0;
                  break;
                }
              } else if (g.part.begin.eq(a.part.end) && d == JSON.stringify(g.value)) {
                a = new ie(a.whole, new se(a.part.begin, g.part.end), a.value), r.splice(c, 1), p = !0;
                break;
              }
            }
          }
          o = p;
        }
        n.push(a);
      }
      return n;
    });
  }
  /**
   * Queries the pattern for the first cycle, returning Haps. Mainly of use when
   * debugging a pattern.
   * @tags internals
   * @param {Boolean} with_context - set to true, otherwise the context field
   * will be stripped from the resulting haps.
   * @returns [Hap]
   * @noAutocomplete
   */
  firstCycle(e = !1) {
    var r = this;
    return e || (r = r.stripContext()), r.query(new Dt(new se(F(0), F(1))));
  }
  /**
   * Accessor for a list of values returned by querying the first cycle.
   * @tags internals
   * @noAutocomplete
   */
  get firstCycleValues() {
    return this.firstCycle().map((e) => e.value);
  }
  /**
   * More human-readable version of the `firstCycleValues` accessor.
   * @tags internals
   * @noAutocomplete
   */
  get showFirstCycle() {
    return this.firstCycle().map(
      (e) => `${e.value}: ${e.whole.begin.toFraction()} - ${e.whole.end.toFraction()}`
    );
  }
  /**
   * Returns a new pattern, which returns haps sorted in temporal order. Mainly
   * of use when comparing two patterns for equality, in tests.
   * @tags internals
   * @returns Pattern
   * @noAutocomplete
   */
  sortHapsByPart() {
    return this.withHaps(
      (e) => e.sort(
        (r, n) => r.part.begin.sub(n.part.begin).or(r.part.end.sub(n.part.end)).or(r.whole.begin.sub(n.whole.begin).or(r.whole.end.sub(n.whole.end)))
      )
    );
  }
  /**
   * Returns a new pattern with all values parsed as numerals.
   * @tags internals
   */
  asNumber() {
    return this.fmap(ls);
  }
  //////////////////////////////////////////////////////////////////////
  // Operators - see 'make composers' later..
  _opIn(e, r) {
    return this.fmap(r).appLeft(B(e));
  }
  _opOut(e, r) {
    return this.fmap(r).appRight(B(e));
  }
  _opMix(e, r) {
    return this.fmap(r).appBoth(B(e));
  }
  _opSqueeze(e, r) {
    const n = B(e);
    return this.fmap((s) => n.fmap((o) => r(s)(o))).squeezeJoin();
  }
  _opSqueezeOut(e, r) {
    const n = this;
    return B(e).fmap((o) => n.fmap((a) => r(a)(o))).squeezeJoin();
  }
  _opReset(e, r) {
    return B(e).fmap((s) => this.fmap((o) => r(o)(s))).resetJoin();
  }
  _opRestart(e, r) {
    return B(e).fmap((s) => this.fmap((o) => r(o)(s))).restartJoin();
  }
  _opPoly(e, r) {
    const n = B(e);
    return this.fmap((s) => n.fmap((o) => r(o)(s))).polyJoin();
  }
  //////////////////////////////////////////////////////////////////////
  // End-user methods.
  // Those beginning with an underscore (_) are 'patternified',
  // i.e. versions are created without the underscore, that are
  // magically transformed to accept patterns for all their arguments.
  //////////////////////////////////////////////////////////////////////
  // Methods without corresponding toplevel functions
  /**
   * Layers the result of the given function(s). Like `superimpose`, but without the original pattern:
   * @name layer
   * @tags combiners
   * @memberof Pattern
   * @returns Pattern
   * @example
   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
   *   .layer(x=>x.add("0,2"))
   *   .scale('C minor').note()
   */
  layer(...e) {
    return Ee(...e.map((r) => r(this)));
  }
  /**
   * Superimposes the result of the given function(s) on top of the original pattern:
   * @name superimpose
   * @tags combiners
   * @memberof Pattern
   * @returns Pattern
   * @example
   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
   *   .superimpose(x=>x.add(2))
   *   .scale('C minor').note()
   */
  superimpose(...e) {
    return this.stack(...e.map((r) => r(this)));
  }
  //////////////////////////////////////////////////////////////////////
  // Multi-pattern functions
  stack(...e) {
    return Ee(this, ...e);
  }
  sequence(...e) {
    return Ze(this, ...e);
  }
  seq(...e) {
    return Ze(this, ...e);
  }
  cat(...e) {
    return Vt(this, ...e);
  }
  fastcat(...e) {
    return De(this, ...e);
  }
  slowcat(...e) {
    return ut(this, ...e);
  }
  //////////////////////////////////////////////////////////////////////
  // Context methods - ones that deal with metadata
  onTrigger(e, r = !0) {
    return this.withHap(
      (n) => n.setContext({
        ...n.context,
        onTrigger: (...s) => {
          n.context.onTrigger?.(...s), e(...s);
        },
        // if dominantTrigger is set to true, the default output (webaudio) will be disabled
        // when using multiple triggers, you cannot flip this flag to false again!
        // example: x.csound('CooLSynth').log() as well as x.log().csound('CooLSynth') should work the same
        dominantTrigger: n.context.dominantTrigger || r
      })
    );
  }
  /**
   * Writes the content of the current event to the console (visible in the side menu).
   * @tags visualization
   * @name log
   * @memberof Pattern
   * @example
   * s("bd sd").log()
   */
  log(e = (n) => `[hap] ${n.showWhole(!0)}`, r = (n) => ({ hap: n })) {
    return this.onTrigger((...n) => {
      _t(e(...n), void 0, r(...n));
    }, !1);
  }
  /**
   * A simplified version of `log` which writes all "values" (various configurable parameters)
   * within the event to the console (visible in the side menu).
   * @tags visualization
   * @name logValues
   * @memberof Pattern
   * @example
   * s("bd sd").gain("0.25 0.5 1").n("2 1 0").logValues()
   */
  logValues(e = (r) => `[hap] ${hs(r, !0)}`) {
    return this.log((r) => e(r.value));
  }
  //////////////////////////////////////////////////////////////////////
  // Visualisation
  drawLine() {
    return console.log(ku(this)), this;
  }
  //////////////////////////////////////////////////////////////////////
  // methods relating to breaking patterns into subcycles
  // Breaks a pattern into a pattern of patterns, according to the structure of the given binary pattern.
  unjoin(e, r = Tt) {
    return e.withHap(
      (n) => n.withValue((s) => s ? r(this.ribbon(n.whole.begin, n.whole.duration)) : this)
    );
  }
  /**
   * Breaks a pattern into pieces according to the structure of a given pattern.
   * True values in the given pattern cause the corresponding subcycle of the
   * source pattern to be looped, and for an (optional) given function to be
   * applied. False values result in the corresponding part of the source pattern
   * to be played unchanged.
   * @tags temporal
   * @name into
   * @memberof Pattern
   * @example
   * sound("bd sd ht lt").into("1 0", hurry(2))
   */
  into(e, r) {
    return this.unjoin(e, r).innerJoin();
  }
}
function Nu(t, e) {
  let r = [];
  return e.forEach((n) => {
    const s = r.findIndex(([o]) => t(n, o));
    s === -1 ? r.push([n]) : r[s].push(n);
  }), r;
}
const Ou = (t, e) => t.spanEquals(e);
x.prototype.collect = function() {
  return this.withHaps(
    (t) => Nu(Ou, t).map((e) => new ie(e[0].whole, e[0].part, e, {}))
  );
};
A("arpWith", (t, e) => e.collect().fmap((r) => B(t(r))).innerJoin().withHap((r) => new ie(r.whole, r.part, r.value.value, r.combineContext(r.value))));
A(
  "arp",
  (t, e) => e.arpWith((r) => B(t).fmap((n) => r[n % r.length])),
  !1
);
function qt(t) {
  return !Array.isArray(t) && typeof t == "object" && !Eu(t);
}
function $u(t, e, r) {
  return qt(t) || qt(e) ? (qt(t) || (t = { value: t }), qt(e) || (e = { value: e }), Bu(t, e, r)) : r(t, e);
}
const Lu = {
  /**
   * When called on a pattern `a`, with a input pattern `b` (`a.set(b)`),
   * combines `a` and `b` such that anything defined in `b`
   * and anything defined in `a` that is *not* defined in `b`
   * will be in the resulting pattern.
   *
   * The structure is maintained from `a`,
   * because the default pattern alignment is `in`,
   * see the section on `Pattern Alignment`
   * in the technical manual in the docs
   *
   * This is the inverse of `keep`
   *
   * See examples below
   * @name set
   * @param {Pattern} pat
   * @returns {Pattern}
   * @memberof Pattern
   * @tags internal, combiners
   * @example
   * // because input pattern has `s` set,
   * // it overrides the "sine" declared earlier
   * note("c a f e").s("sine").set(s("triangle"))
   */
  set: [(t, e) => e],
  /**
   * When called on a pattern `a`, with a input pattern `b` (`a.keep(b)`),
   * combines `a` and `b` such that anything defined in `a`,
   * and anything defined in `b` that is *not* defined in `a`
   * will be in the resulting pattern
   *
   * The structure is maintained from `a`,
   * because the default pattern alignment is `in`,
   * see the section on `Pattern Alignment`
   * in the technical manual in the docs
   *
   * This is the inverse of `set`
   *
   * See examples below
   * @name keep
   * @param {Pattern} pat
   * @memberof Pattern
   * @returns {Pattern}
   * @tags internal, combiners
   * @example
   * // notes, already defined, will stay "c a f e",
   * // while "s", not defined, will be set to "piano"
   * note("c a f e").keep(note("e f a c").s("piano"))
   */
  keep: [(t) => t],
  keepif: [(t, e) => e ? t : void 0],
  // numerical functions
  /**
   *
   * Assumes a pattern of numbers. Adds the given number to each item in the pattern.
   * @name add
   * @memberof Pattern
   * @tags math
   * @example
   * // Here, the triad 0, 2, 4 is shifted by different amounts
   * n("0 2 4".add("<0 3 4 0>")).scale("C:major")
   * // Without add, the equivalent would be:
   * // n("<[0 2 4] [3 5 7] [4 6 8] [0 2 4]>").scale("C:major")
   * @example
   * // You can also use add with notes:
   * note("c3 e3 g3".add("<0 5 7 0>"))
   * // Behind the scenes, the notes are converted to midi numbers:
   * // note("48 52 55".add("<0 5 7 0>"))
   */
  add: [Re((t, e) => t + e)],
  // support string concatenation
  /**
   *
   * Like add, but the given numbers are subtracted.
   * @name sub
   * @memberof Pattern
   * @tags math
   * @example
   * n("0 2 4".sub("<0 1 2 3>")).scale("C4:minor")
   * // See add for more information.
   */
  sub: [Re((t, e) => t - e)],
  /**
   *
   * Multiplies each number by the given factor.
   * @name mul
   * @memberof Pattern
   * @tags math
   * @example
   * "<1 1.5 [1.66, <2 2.33>]>*4".mul(150).freq()
   */
  mul: [Re((t, e) => t * e)],
  /**
   *
   * Divides each number by the given factor.
   * @name div
   * @memberof Pattern
   * @tags math
   */
  div: [Re((t, e) => t / e)],
  mod: [Re(cs)],
  pow: [Re(Math.pow)],
  band: [Re((t, e) => t & e)],
  bor: [Re((t, e) => t | e)],
  bxor: [Re((t, e) => t ^ e)],
  blshift: [Re((t, e) => t << e)],
  brshift: [Re((t, e) => t >> e)],
  // TODO - force numerical comparison if both look like numbers?
  lt: [(t, e) => t < e],
  gt: [(t, e) => t > e],
  lte: [(t, e) => t <= e],
  gte: [(t, e) => t >= e],
  eq: [(t, e) => t == e],
  eqt: [(t, e) => t === e],
  ne: [(t, e) => t != e],
  net: [(t, e) => t !== e],
  and: [(t, e) => t && e],
  or: [(t, e) => t || e],
  //  bitwise ops
  func: [(t, e) => e(t)]
}, Pu = () => {
  for (const [t, [e, r]] of Object.entries(Lu))
    x.prototype["_" + t] = function(n) {
      return this.fmap((s) => e(s, n));
    }, Object.defineProperty(x.prototype, t, {
      // Set to configurable so we can update if the default alignment changes
      configurable: !0,
      // a getter that returns a function, so 'pat' can be
      // accessed by closures that are methods of that function..
      get: function() {
        const n = this, s = (...o) => n[t][Ru](...o);
        for (const o of Mr)
          s[o.toLowerCase()] = function(...a) {
            var p = n;
            a = Ze(a), r && (p = r(p), a = r(a));
            var c;
            return t === "keepif" ? (c = p["_op" + o](a, (d) => (g) => e(d, g)), c = c.removeUndefineds()) : c = p["_op" + o](a, (d) => (g) => $u(d, g, e)), c;
          };
        return s.squeezein = s.squeeze, s;
      }
    });
};
let Ru = "in";
const Mr = ["In", "Out", "Mix", "Squeeze", "SqueezeOut", "Reset", "Restart", "Poly"];
Mr.map((t) => t.toLowerCase());
(function() {
  Pu();
  for (const t of Mr)
    x.prototype[t.toLowerCase()] = function(...e) {
      return this.set[t.toLowerCase()](e);
    };
  x.prototype.struct = function(...t) {
    return this.keepif.out(...t);
  }, x.prototype.structAll = function(...t) {
    return this.keep.out(...t);
  }, x.prototype.mask = function(...t) {
    return this.keepif.in(...t);
  }, x.prototype.maskAll = function(...t) {
    return this.keep.in(...t);
  }, x.prototype.reset = function(...t) {
    return this.keepif.reset(...t);
  }, x.prototype.resetAll = function(...t) {
    return this.keep.reset(...t);
  }, x.prototype.restart = function(...t) {
    return this.keepif.restart(...t);
  }, x.prototype.restartAll = function(...t) {
    return this.keep.restart(...t);
  };
})();
const fs = (t) => new x(() => [], t), Ne = fs(1), je = fs(0);
function de(t) {
  function e(n) {
    return n.span.spanCycles.map((s) => new ie(F(s.begin).wholeCycle(), s, t));
  }
  const r = new x(e, 1);
  return r.__pure = t, r;
}
function ds(t) {
  return t instanceof x || t?._Pattern;
}
function B(t) {
  return ds(t) ? t : de(t);
}
function Ee(...t) {
  t = t.map((n) => Array.isArray(n) ? Ze(...n) : B(n));
  const e = (n) => Ke(t.map((s) => s.query(n))), r = new x(e);
  return r._steps = Qe(...t.map((n) => n._steps)), r;
}
function ut(...t) {
  if (t = t.map((n) => Array.isArray(n) ? De(...n) : B(n)), t.length == 1)
    return t[0];
  const e = function(n) {
    const s = n.span, o = cs(s.begin.sam(), t.length), a = t[o];
    if (!a)
      return [];
    const p = s.begin.floor().sub(s.begin.div(t.length).floor());
    return a.withHapTime((c) => c.add(p)).query(n.setSpan(s.withTime((c) => c.sub(p))));
  }, r = Qe(...t.map((n) => n._steps));
  return new x(e).splitQueries().setSteps(r);
}
function ms(...t) {
  t = t.map(B);
  const e = function(r) {
    const n = Math.floor(r.span.begin) % t.length;
    return t[n]?.query(r) || [];
  };
  return new x(e).splitQueries();
}
function Vt(...t) {
  return ut(...t);
}
function De(...t) {
  let e = ut(...t);
  return t.length > 1 && (e = e._fast(t.length), e._steps = t.length), t.length == 1 && t[0].__steps_source && (t._steps = t[0]._steps), e;
}
function Ze(...t) {
  return De(...t);
}
function ju(...t) {
  return De(...t);
}
W((t, e) => B(e).mask(t));
W((t, e) => B(e).struct(t));
W((t, e) => B(e).superimpose(...t));
W((t, e) => B(e).withValue(t));
W((t, e) => B(e).bind(t));
W((t, e) => B(e).innerBind(t));
W((t, e) => B(e).outerBind(t));
W((t, e) => B(e).squeezeBind(t));
W((t, e) => B(e).stepBind(t));
W((t, e) => B(e).polyBind(t));
W((t, e) => B(e).set(t));
W((t, e) => B(e).keep(t));
W((t, e) => B(e).keepif(t));
W((t, e) => B(e).add(t));
W((t, e) => B(e).sub(t));
W((t, e) => B(e).mul(t));
W((t, e) => B(e).div(t));
W((t, e) => B(e).mod(t));
W((t, e) => B(e).pow(t));
W((t, e) => B(e).band(t));
W((t, e) => B(e).bor(t));
W((t, e) => B(e).bxor(t));
W((t, e) => B(e).blshift(t));
W((t, e) => B(e).brshift(t));
W((t, e) => B(e).lt(t));
W((t, e) => B(e).gt(t));
W((t, e) => B(e).lte(t));
W((t, e) => B(e).gte(t));
W((t, e) => B(e).eq(t));
W((t, e) => B(e).eqt(t));
W((t, e) => B(e).ne(t));
W((t, e) => B(e).net(t));
W((t, e) => B(e).and(t));
W((t, e) => B(e).or(t));
W((t, e) => B(e).func(t));
function A(t, e, r = !0, n = !1, s = (o) => o.innerJoin()) {
  if (ds(t))
    throw new Error(
      `Name argument for register is a pattern, try using single quotes ('name') instead of double quotes ("name")`
    );
  if (Array.isArray(t)) {
    const c = {};
    for (const d of t)
      c[d] = A(d, e, r, n, s);
    return c;
  }
  const o = e.length;
  var a;
  r ? a = function(...c) {
    c = c.map(B);
    const d = c[c.length - 1];
    let g;
    if (o === 1)
      g = e(d);
    else {
      const m = c.slice(0, -1);
      if (m.every((v) => v.__pure != null)) {
        const v = m.map((C) => C.__pure), I = m.filter((C) => C.__pure_loc).map((C) => C.__pure_loc);
        g = e(...v, d), g = g.withContext((C) => {
          const z = (C.locations || []).concat(I);
          return { ...C, locations: z };
        });
      } else {
        const [v, ...I] = m;
        let C = (...z) => e(...z, d);
        C = W(C, null, o - 1), g = s(I.reduce((z, Q) => z.appLeft(Q), v.fmap(C)));
      }
    }
    return n && (g._steps = d._steps), g;
  } : a = function(...c) {
    c = c.map(B);
    const d = e(...c);
    return n && (d._steps = c[c.length - 1]._steps), d;
  }, x.prototype[t] = function(...c) {
    if (o === 2 && c.length !== 1)
      c = [Ze(...c)];
    else if (o !== c.length + 1)
      throw new Error(`.${t}() expects ${o - 1} inputs but got ${c.length}.`);
    return c = c.map(B), a(...c, this);
  }, o > 1 && (x.prototype["_" + t] = function(...c) {
    const d = e(...c, this);
    return n && d.setSteps(this._steps), d;
  });
  const p = W(a, null, o);
  return qr[t] = p, p;
}
function bt(t, e, r = !0, n = !1, s = (o) => o.stepJoin()) {
  return A(t, e, r, n, s);
}
A("round", function(t) {
  return t.asNumber().fmap((e) => Math.round(e));
});
A("floor", function(t) {
  return t.asNumber().fmap((e) => Math.floor(e));
});
A("log2", (t) => t.asNumber().fmap((e) => Math.log2(e)));
A("ceil", function(t) {
  return t.asNumber().fmap((e) => Math.ceil(e));
});
A("toBipolar", function(t) {
  return t.fmap((e) => e * 2 - 1);
});
A("fromBipolar", function(t) {
  return t.fmap((e) => (e + 1) / 2);
});
A("range", function(t, e, r) {
  return r.mul(e - t).add(t);
});
A("rangex", function(t, e, r) {
  return r._range(Math.log(t), Math.log(e)).fmap(Math.exp);
});
A("range2", function(t, e, r) {
  return r.fromBipolar()._range(t, e);
});
A(
  "ratio",
  (t) => t.fmap((e) => Array.isArray(e) ? e.slice(1).reduce((r, n) => r / n, e[0]) : e)
);
A("compress", function(t, e, r) {
  return t = F(t), e = F(e), t.gt(e) || t.gt(1) || e.gt(1) || t.lt(0) || e.lt(0) ? Ne : r._fastGap(F(1).div(e.sub(t)))._late(t);
});
const { compressSpan: kc, compressspan: Dc } = A(["compressSpan", "compressspan"], function(t, e) {
  return e._compress(t.begin, t.end);
}), { fastGap: Nc, fastgap: Oc } = A(["fastGap", "fastgap"], function(t, e) {
  const r = function(s) {
    const o = s.begin.sam(), a = s.begin.sub(o).mul(t).min(1), p = s.end.sub(o).mul(t).min(1);
    if (!(a >= 1))
      return new se(o.add(a), o.add(p));
  }, n = function(s) {
    const o = s.part.begin, a = s.part.end, p = o.sam(), c = o.sub(p).div(t).min(1), d = a.sub(p).div(t).min(1), g = new se(p.add(c), p.add(d)), m = s.whole ? new se(
      g.begin.sub(o.sub(s.whole.begin).div(t)),
      g.end.add(s.whole.end.sub(a).div(t))
    ) : void 0;
    return new ie(m, g, s.value, s.context);
  };
  return e.withQuerySpanMaybe(r).withHap(n).splitQueries();
});
A("focus", function(t, e, r) {
  return t = F(t), e = F(e), r._early(t.sam())._fast(F(1).div(e.sub(t)))._late(t);
});
const { focusSpan: $c, focusspan: Lc } = A(["focusSpan", "focusspan"], function(t, e) {
  return e._focus(t.begin, t.end);
});
A("ply", function(t, e) {
  const r = e.fmap((n) => de(n)._fast(t)).squeezeJoin();
  return r._steps = F(t).mulmaybe(e._steps), r;
});
const { fast: Pc, density: Rc } = A(
  ["fast", "density"],
  function(t, e) {
    return t === 0 ? Ne : (t = F(t), e.withQueryTime((n) => n.mul(t)).withHapTime((n) => n.div(t)).setSteps(e._steps));
  },
  !0,
  !0
);
A("hurry", function(t, e) {
  return e._fast(t).mul(de({ speed: t }));
});
const { slow: jc, sparsity: Tc } = A(["slow", "sparsity"], function(t, e) {
  return t === 0 ? Ne : e._fast(F(1).div(t));
});
A("inside", function(t, e, r) {
  return e(r._slow(t))._fast(t);
});
A("outside", function(t, e, r) {
  return e(r._fast(t))._slow(t);
});
A("lastOf", function(t, e, r) {
  const n = Array(t - 1).fill(r);
  return n.push(e(r)), ms(...n);
});
const { firstOf: qc, every: Mc } = A(["firstOf", "every"], function(t, e, r) {
  const n = Array(t - 1).fill(r);
  return n.unshift(e(r)), ms(...n);
});
A("apply", function(t, e) {
  return t(e);
});
A("cpm", function(t, e) {
  return e._fast(t / 60 / 1);
});
A(
  "early",
  function(t, e) {
    return t = F(t), e.withQueryTime((r) => r.add(t)).withHapTime((r) => r.sub(t));
  },
  !0,
  !0
);
const Tu = A(
  "late",
  function(t, e) {
    return t = F(t), e._early(F(0).sub(t));
  },
  !0,
  !0
);
A("zoom", function(t, e, r) {
  if (e = F(e), t = F(t), t.gte(e))
    return je;
  const n = e.sub(t), s = r._steps?.mulmaybe(n);
  return r.withQuerySpan((o) => o.withCycle((a) => a.mul(n).add(t))).withHapSpan((o) => o.withCycle((a) => a.sub(t).div(n))).splitQueries().setSteps(s);
});
const { zoomArc: Wc, zoomarc: zc } = A(["zoomArc", "zoomarc"], function(t, e) {
  return e.zoom(t.begin, t.end);
});
A(
  "bite",
  (t, e, r) => e.fmap((n) => (s) => {
    const o = F(n).div(s).mod(1), a = o.add(F(1).div(s));
    return r.zoom(o, a);
  }).appLeft(t).squeezeJoin(),
  !1
);
A(
  "linger",
  function(t, e) {
    return t == 0 ? Ne : t < 0 ? e._zoom(t.add(1), 1)._slow(t) : e._zoom(0, t)._slow(t);
  },
  !0,
  !0
);
const { segment: Gc, seg: Vc } = A(["segment", "seg"], function(t, e) {
  return e.struct(de(!0)._fast(t)).setSteps(t);
});
A("swingBy", (t, e, r) => r.inside(e, Tu(ju(0, t / 2))));
A("swing", (t, e) => e.swingBy(1 / 3, t));
const { invert: Jc, inv: Hc } = A(
  ["invert", "inv"],
  function(t) {
    return t.fmap((e) => !e);
  },
  !0,
  !0
);
A("when", function(t, e, r) {
  return t ? e(r) : r;
});
A("off", function(t, e, r) {
  return Ee(r, e(r.late(t)));
});
A("brak", function(t) {
  return t.when(ut(!1, !0), (e) => De(e, Ne)._late(0.25));
});
const qu = A(
  "rev",
  function(t) {
    const e = function(r) {
      const n = r.span, s = n.begin.sam(), o = n.begin.nextSam(), a = function(c) {
        const d = c.withTime((m) => s.add(o.sub(m))), g = d.begin;
        return d.begin = d.end, d.end = g, d;
      };
      return t.query(r.setSpan(a(n))).map((c) => c.withSpan(a));
    };
    return new x(e).splitQueries();
  },
  !1,
  !0
);
A("revv", function(t) {
  const e = (r) => new se(F(0).sub(r.end), F(0).sub(r.begin));
  return t.withQuerySpan(e).withHapSpan(e);
});
A("pressBy", function(t, e) {
  return e.fmap((r) => de(r).compress(t, 1)).squeezeJoin();
});
A("press", function(t) {
  return t._pressBy(0.5);
});
x.prototype.hush = function() {
  return Ne;
};
A(
  "palindrome",
  function(t) {
    return t.lastOf(2, qu);
  },
  !0,
  !0
);
const { juxBy: Uc, juxby: Kc } = A(["juxBy", "juxby"], function(t, e, r) {
  t /= 2;
  const n = function(a, p, c) {
    return p in a ? a[p] : c;
  }, s = r.withValue((a) => Object.assign({}, a, { pan: n(a, "pan", 0.5) - t })), o = e(r.withValue((a) => Object.assign({}, a, { pan: n(a, "pan", 0.5) + t })));
  return Ee(s, o).setSteps(Qe(s._steps, o._steps));
}), { juxFlipBy: Qc, juxflipby: Xc, fluxBy: Zc, fluxby: Yc } = A(
  ["juxFlipBy", "juxflipby", "fluxBy", "fluxby"],
  function(t, e, r) {
    return r.juxBy(ut(t, -t), e);
  }
);
A("jux", function(t, e) {
  return e._juxBy(1, t, e);
});
const { juxFlip: el, flux: tl } = A(["juxFlip", "juxflip", "flux"], function(t, e) {
  return e._juxFlipBy(1, t, e);
}), { echoWith: rl, echowith: nl, stutWith: sl, stutwith: il } = A(
  ["echoWith", "echowith", "stutWith", "stutwith"],
  function(t, e, r, n) {
    return Ee(...er(0, t - 1).map((s) => r(n.late(F(e).mul(s)), s)));
  }
);
A("echo", function(t, e, r, n) {
  return n._echoWith(t, e, (s, o) => s.gain(Math.pow(r, o)));
});
A("stut", function(t, e, r, n) {
  return n._echoWith(t, r, (s, o) => s.gain(Math.pow(e, o)));
});
const Mu = A("applyN", function(t, e, r) {
  let n = r;
  for (let s = 0; s < t; s++)
    n = e(n);
  return n;
});
A(["plyWith", "plywith"], function(t, e, r) {
  const n = r.fmap((s) => Vt(...er(0, t - 1).map((o) => Mu(o, e, s)))._fast(t)).squeezeJoin();
  return n._steps = F(t).mulmaybe(r._steps), n;
});
A(["plyForEach", "plyforeach"], function(t, e, r) {
  const n = r.fmap((s) => Vt(Vt(de(s), ...er(1, t - 1).map((o) => e(de(s), o))))._fast(t)).squeezeJoin();
  return n._steps = F(t).mulmaybe(r._steps), n;
});
const Wr = function(t, e, r = !1) {
  return t = F(t), ut(
    ...er(0, t.sub(1)).map(
      (n) => r ? e.late(F(n).div(t)) : e.early(F(n).div(t))
    )
  );
};
A(
  "iter",
  function(t, e) {
    return Wr(t, e, !1);
  },
  !0,
  !0
);
const { iterBack: ol, iterback: al } = A(
  ["iterBack", "iterback"],
  function(t, e) {
    return Wr(t, e, !0);
  },
  !0,
  !0
), { repeatCycles: ul } = A(
  "repeatCycles",
  function(t, e) {
    return new x(function(r) {
      const n = r.span.begin.sam(), s = n.div(t).sam(), o = n.sub(s);
      return r = r.withSpan((a) => a.withTime((p) => p.sub(o))), e.query(r).map((a) => a.withSpan((p) => p.withTime((c) => c.add(o))));
    }).splitQueries();
  },
  !0,
  !0
), zr = function(t, e, r, n = !1, s = !1) {
  const o = Array(t - 1).fill(!1);
  o.unshift(!0);
  const a = Wr(t, Ze(...o), !n);
  return s || (r = r.repeatCycles(t)), r.when(a, e);
}, { chunk: cl, slowchunk: ll, slowChunk: pl } = A(
  ["chunk", "slowchunk", "slowChunk"],
  function(t, e, r) {
    return zr(t, e, r, !1, !1);
  },
  !0,
  !0
), { chunkBack: hl, chunkback: fl } = A(
  ["chunkBack", "chunkback"],
  function(t, e, r) {
    return zr(t, e, r, !0);
  },
  !0,
  !0
), { fastchunk: dl, fastChunk: ml } = A(
  ["fastchunk", "fastChunk"],
  function(t, e, r) {
    return zr(t, e, r, !1, !0);
  },
  !0,
  !0
), { chunkinto: gl, chunkInto: vl } = A(["chunkinto", "chunkInto"], function(t, e, r) {
  return r.into(De(!0, ...Array(t - 1).fill(!1))._iterback(t), e);
}), { chunkbackinto: yl, chunkBackInto: Al } = A(["chunkbackinto", "chunkBackInto"], function(t, e, r) {
  return r.into(
    De(!0, ...Array(t - 1).fill(!1))._iter(t)._early(1),
    e
  );
});
A(
  "bypass",
  function(t, e) {
    return t = !!parseInt(t), t ? Ne : e;
  },
  !0,
  !0
);
const { ribbon: wl, rib: _l } = A(
  ["ribbon", "rib"],
  (t, e, r) => r.early(t).restart(de(1).slow(e))
);
A("hsla", (t, e, r, n, s) => s.color(`hsla(${t}turn,${e * 100}%,${r * 100}%,${n})`));
A("hsl", (t, e, r, n) => n.color(`hsl(${t}turn,${e * 100}%,${r * 100}%)`));
x.prototype.tag = function(t) {
  return this.withContext((e) => ({ ...e, tags: (e.tags || []).concat([t]) }));
};
A("filter", (t, e) => e.withHaps((r) => r.filter(t)));
A("filterWhen", (t, e) => e.filter((r) => t(r.whole.begin)));
A(
  "within",
  (t, e, r, n) => Ee(
    r(n.filterWhen((s) => s.cyclePos() >= t && s.cyclePos() <= e)),
    n.filterWhen((s) => s.cyclePos() < t || s.cyclePos() > e)
  )
);
x.prototype.stepJoin = function() {
  const t = this, e = At(...Nn(On(t.queryArc(0, 1))))._steps, r = function(n) {
    const o = t.early(n.span.begin.sam()).query(n.setSpan(new se(F(0), F(1))));
    return At(...Nn(On(o))).query(n);
  };
  return new x(r, e);
};
x.prototype.stepBind = function(t) {
  return this.fmap(t).stepJoin();
};
function Nn(t) {
  const e = t.filter((o, a) => a.hasSteps).reduce((o, a) => o.add(a), F(0)), r = Nt(t.map((o, a) => a._steps)).reduce(
    (o, a) => o.add(a),
    F(0)
  ), n = e.eq(0) ? void 0 : r.div(e);
  function s(o, a) {
    return a._steps === void 0 ? [o.mulmaybe(n), a] : [a._steps, a];
  }
  return t.map((o) => s(...o));
}
function On(t) {
  const e = Ke(t.map((s) => [s.part.begin, s.part.end])), r = Iu([F(0), F(1), ...e]);
  return _u(r).map((s) => [
    s[1].sub(s[0]),
    Ee(...Wu(new se(...s), t).map((o) => o.value.withHap((a) => a.setContext(a.combineContext(o)))))
  ]);
}
function Wu(t, e) {
  return Nt(e.map((r) => zu(t, r)));
}
function zu(t, e) {
  const r = t.intersection(e.part);
  if (r != null)
    return new ie(e.whole, r, e.value, e.context);
}
A("pace", function(t, e) {
  return e._steps === void 0 ? e : e._steps.eq(F(0)) ? je : e._fast(F(t).div(e._steps)).setSteps(t);
});
function At(...t) {
  if (t.length === 0)
    return je;
  const e = (a) => Array.isArray(a) ? a : [a._steps ?? 1, a];
  if (t = t.map(e), t.find((a) => a[0] === void 0)) {
    const a = t.map((c) => c[0]).filter((c) => c !== void 0);
    if (a.length === 0)
      return De(...t.map((c) => c[1]));
    if (a.length === t.length)
      return je;
    const p = a.reduce((c, d) => c.add(d), F(0)).div(a.length);
    for (let c of t)
      c[0] === void 0 && (c[0] = p);
  }
  if (t.length == 1)
    return B(t[0][1]).withSteps((p) => t[0][0]);
  const r = t.map((a) => a[0]).reduce((a, p) => a.add(p), F(0));
  let n = F(0);
  const s = [];
  for (const [a, p] of t) {
    if (F(a).eq(0))
      continue;
    const c = n.add(a);
    s.push(B(p)._compress(n.div(r), c.div(r))), n = c;
  }
  const o = Ee(...s);
  return o._steps = r, o;
}
bt("take", function(t, e) {
  if (!e.hasSteps || e._steps.lte(0) || (t = F(t), t.eq(0)))
    return je;
  const r = t < 0;
  r && (t = t.abs());
  const n = t.div(e._steps);
  return n.lte(0) ? je : n.gte(1) ? e : r ? e.zoom(F(1).sub(n), 1) : e.zoom(0, n);
});
bt("drop", function(t, e) {
  return e.hasSteps ? (t = F(t), t.lt(0) ? e.take(e._steps.add(t)) : e.take(F(0).sub(e._steps.sub(t)))) : je;
});
bt("extend", function(t, e) {
  return e.fast(t).expand(t);
});
bt("replicate", function(t, e) {
  return e.repeatCycles(t).fast(t).expand(t);
});
bt("expand", function(t, e) {
  return e.withSteps((r) => r.mul(F(t)));
});
bt("contract", function(t, e) {
  return e.withSteps((r) => r.div(F(t)));
});
x.prototype.shrinklist = function(t) {
  const e = this;
  if (!e.hasSteps)
    return [e];
  let [r, n] = Array.isArray(t) ? t : [t, e._steps];
  if (r = F(r), n === 0 || r === 0)
    return [e];
  const s = r > 0, o = [];
  if (s) {
    const a = F(1).div(e._steps).mul(r);
    for (let p = 0; p < n; ++p) {
      const c = a.mul(p);
      if (c.gt(1))
        break;
      o.push([c, 1]);
    }
  } else {
    r = F(0).sub(r);
    const a = F(1).div(e._steps).mul(r);
    for (let p = 0; p < n; ++p) {
      const c = F(1).sub(a.mul(p));
      if (c.lt(0))
        break;
      o.push([F(0), c]);
    }
  }
  return o.map((a) => e.zoom(...a));
};
A(
  "shrink",
  function(t, e) {
    if (!e.hasSteps)
      return je;
    const r = e.shrinklist(t), n = At(...r);
    return n._steps = r.reduce((s, o) => s.add(o._steps), F(0)), n;
  },
  !0,
  !1,
  (t) => t.stepJoin()
);
A(
  "grow",
  function(t, e) {
    if (!e.hasSteps)
      return je;
    const r = e.shrinklist(F(0).sub(t));
    r.reverse();
    const n = At(...r);
    return n._steps = r.reduce((s, o) => s.add(o._steps), F(0)), n;
  },
  !0,
  !1,
  (t) => t.stepJoin()
);
x.prototype.tour = function(...t) {
  return At(
    ...[].concat(
      ...t.map((e, r) => [...t.slice(0, t.length - r), this, ...t.slice(t.length - r)]),
      this,
      ...t
    )
  );
};
const gs = At;
x.prototype.s_polymeter = x.prototype.polymeter;
x.prototype.s_taper = x.prototype.shrink;
x.prototype.s_taperlist = x.prototype.shrinklist;
x.prototype.s_add = x.prototype.take;
x.prototype.s_sub = x.prototype.drop;
x.prototype.s_expand = x.prototype.expand;
x.prototype.s_extend = x.prototype.extend;
x.prototype.s_contract = x.prototype.contract;
x.prototype.s_tour = x.prototype.tour;
x.prototype.s_zip = x.prototype.zip;
x.prototype.steps = x.prototype.pace;
A("chop", function(t, e) {
  const n = Array.from({ length: t }, (a, p) => p).map((a) => ({ begin: a / t, end: (a + 1) / t })), s = function(a, p) {
    if ("begin" in a && "end" in a && a.begin !== void 0 && a.end !== void 0) {
      const c = a.end - a.begin;
      p = { begin: a.begin + p.begin * c, end: a.begin + p.end * c };
    }
    return Object.assign({}, a, p);
  }, o = function(a) {
    return Ze(n.map((p) => s(a, p)));
  };
  return e.squeezeBind(o).setSteps(F(t).mulmaybe(e._steps));
});
A("striate", function(t, e) {
  const n = Array.from({ length: t }, (o, a) => a).map((o) => ({ begin: o / t, end: (o + 1) / t })), s = ut(...n);
  return e.set(s)._fast(t).setSteps(F(t).mulmaybe(e._steps));
});
const vs = function(t, e, r = 0.5) {
  return e.speed(1 / t * r).unit("c").slow(t);
}, { loopAt: bl, loopat: Il } = A(["loopAt", "loopat"], function(t, e) {
  const r = e._steps ? e._steps.div(t) : void 0;
  return new x((n) => vs(t, e, n.controls._cps).query(n), r);
}), Gu = A(
  "slice",
  function(t, e, r) {
    return t.innerBind(
      (n) => e.outerBind(
        (s) => r.outerBind((o) => {
          o = o instanceof Object ? o : { s: o };
          const a = Array.isArray(n) ? n[s] : s / n, p = Array.isArray(n) ? n[s + 1] : (s + 1) / n;
          return de({ begin: a, end: p, _slices: n, ...o });
        })
      )
    ).setSteps(e._steps);
  },
  !1
  // turns off auto-patternification
);
x.prototype.onTriggerTime = function(t) {
  return this.onTrigger((e, r, n, s) => {
    const o = s - r;
    window.setTimeout(() => {
      t(e);
    }, o * 1e3);
  }, !1);
};
A(
  "splice",
  function(t, e, r) {
    const n = Gu(t, e, r);
    return new x((s) => {
      const o = s.controls._cps || 1;
      return n.query(s).map(
        (p) => p.withValue((c) => ({
          speed: o / c._slices / p.whole.duration * (c.speed || 1),
          unit: "c",
          ...c
        }))
      );
    }).setSteps(e._steps);
  },
  !1
  // turns off auto-patternification
);
A(
  "fit",
  (t) => t.withHaps(
    (e, r) => e.map(
      (n) => n.withValue((s) => {
        const o = ("end" in s ? s.end : 1) - ("begin" in s ? s.begin : 0);
        return {
          ...s,
          speed: (r.controls._cps || 1) / n.whole.duration * o,
          unit: "c"
        };
      })
    )
  )
);
const { loopAtCps: xl, loopatcps: Cl } = A(["loopAtCps", "loopatcps"], function(t, e, r) {
  return vs(t, r, e);
});
let $n = (t) => t < 0.5 ? 1 : 1 - (t - 0.5) / 0.5, Vu = (t, e, r) => {
  e = B(e), t = B(t), r = B(r);
  let n = e.fmap((o) => ({ gain: $n(o) })), s = e.fmap((o) => ({ gain: $n(1 - o) }));
  return Ee(t.mul(n), r.mul(s));
};
x.prototype.xfade = function(t, e) {
  return Vu(this, t, e);
};
const Ju = (t) => (e, r, n) => {
  e = F(e).mod(r), r = F(r);
  const s = e.div(r), o = e.add(1).div(r);
  return t(n.fmap((a) => de(a)._compress(s, o)));
}, { beat: Fl } = A(
  ["beat"],
  Ju((t) => t.innerJoin())
), Hu = (t, e, r) => {
  r = F(r);
  const n = F(1).div(t.length), s = (p) => {
    const c = [];
    for (const [d, g] of p.entries())
      g && c.push([F(d).div(p.length), g]);
    return c;
  }, o = jr(
    ([p, c], [d, g]) => {
      const m = r.mul(d - p).add(p), v = m.add(n);
      return new se(m, v);
    },
    s(t),
    s(e)
  );
  function a(p) {
    const c = p.span.begin.sam(), d = p.span.cycleArc(), g = [];
    for (const m of o) {
      const v = m.intersection(d);
      v !== void 0 && g.push(
        new ie(
          m.withTime((I) => I.add(c)),
          v.withTime((I) => I.add(c)),
          !0
        )
      );
    }
    return g;
  }
  return new x(a).splitQueries();
}, et = function(t) {
  const e = function(r, n) {
    const s = B(r).fmap((o) => Array.isArray(o) ? [...o, t] : [o, 1, t]);
    return n ? n.distort(s) : de({}).distort(s);
  };
  return x.prototype[t] = function(r) {
    return e(r, this);
  }, e;
};
et("soft");
et("hard");
et("cubic");
et("diode");
et("asym");
et("fold");
et("sinefold");
et("chebyshev");
const ys = (t) => {
  let r = de(W((...n) => n, null, t.length));
  for (const n of t) r = r.appBoth(B(n));
  return r;
}, As = (t) => Array.isArray(t) ? ys(t) : B(t);
x.prototype.partials = function(t) {
  return this.withValue((e) => (r) => ({ ...e, partials: r })).appLeft(As(t));
};
x.prototype.phases = function(t) {
  return this.withValue((e) => (r) => ({ ...e, phases: r })).appLeft(As(t));
};
x.prototype.FX = function(...t) {
  return t = t.map(B), this.withValue((e) => (r) => {
    const n = e.FX ?? [];
    return { ...e, FX: n.concat(r) };
  }).appLeft(ys(t));
};
const Uu = (t) => {
  let r = de(W((...n) => n, null, t.length));
  for (const n of t) r = r.appLeft(n);
  return r;
};
x.prototype.worklet = function(t, ...e) {
  return e = e.map(B), this.outerBind((r) => Uu(e).withValue((n) => {
    const s = r.workletInputs ?? [];
    return { ...r, workletSrc: t, workletInputs: s.concat(n) };
  }));
};
function Ku(t) {
  let e = Array.isArray(t);
  t = e ? t : [t];
  const r = t[0], n = (o) => {
    let a;
    if (typeof o == "object" && o.value !== void 0 && (a = { ...o }, o = o.value, delete a.value), e && Array.isArray(o)) {
      const p = a || {};
      return o.forEach((c, d) => {
        d < t.length && (p[t[d]] = c);
      }), p;
    } else return a ? (a[r] = o, a) : { [r]: o };
  }, s = function(o, a) {
    return a ? typeof o > "u" ? a.fmap(n) : a.set(B(o).withValue(n)) : B(o).withValue(n);
  };
  return x.prototype[r] = function(o) {
    return s(o, this);
  }, s;
}
const Jt = /* @__PURE__ */ new Map();
function l(t, ...e) {
  const r = Array.isArray(t) ? t[0] : t;
  let n = {};
  return n[r] = Ku(t), Jt.set(r, r), e.forEach((s) => {
    n[s] = n[r], Jt.set(s, r), x.prototype[s] = x.prototype[r];
  }), n;
}
function tt(t, e, ...r) {
  t = Array.isArray(t) ? t : [t];
  let n = {};
  for (let s = 1; s <= e; s++) {
    let o = [...r], a = [...t];
    if (s === 1) {
      const c = o.map((g) => `${g}1`), d = a.map((g) => `${g}1`);
      o = o.concat(c).concat(d);
    } else
      o = o.map((c) => `${c}${s}`), a = a.map((c) => `${c}${s}`);
    const p = l(a, ...o);
    n = { ...n, ...p };
  }
  return n;
}
l(["s", "n", "gain"], "sound");
l("wt", "wavetablePosition");
l("wtenv");
l("wtattack", "wtatt");
l("wtdecay", "wtdec");
l("wtsustain", "wtsus");
l("wtrelease", "wtrel");
l("wtrate");
l("wtsync");
l("wtdepth");
l("wtshape");
l("wtdc");
l("wtskew");
l("warp", "wavetableWarp");
l("warpattack", "warpatt");
l("warpdecay", "warpdec");
l("warpsustain", "warpsus");
l("warprelease", "warprel");
l("warprate");
l("warpdepth");
l("warpshape");
l("warpdc");
l("warpskew");
l("warpmode", "wavetableWarpMode");
l("wtphaserand", "wavetablePhaseRand");
l("warpenv");
l("warpsync");
l("source", "src");
l("n");
l("i");
l(["note", "n"]);
l("accelerate");
l("velocity", "vel");
l("gain");
l("postgain");
l("amp");
const { fmh: Sl, fmh1: El, fmh2: Bl, fmh3: kl, fmh4: Dl, fmh5: Nl, fmh6: Ol, fmh7: $l, fmh8: Ll } = tt(["fmh", "fmi"], 8, "fmh"), { fmi: Pl, fmi1: Rl, fmi2: jl, fmi3: Tl, fmi4: ql, fmi5: Ml, fmi6: Wl, fmi7: zl, fmi8: Gl, fm: Vl, fm1: Jl, fm2: Hl, fm3: Ul, fm4: Kl, fm5: Ql, fm6: Xl, fm7: Zl, fm8: Yl } = tt(["fmi", "fmh"], 8, "fm"), { fmenv: ep, fmenv1: tp, fmenv2: rp, fmenv3: np, fmenv4: sp, fmenv5: ip, fmenv6: op, fmenv7: ap, fmenv8: up, fme: cp } = tt(
  "fmenv",
  8,
  "fme"
), {
  fmattack: lp,
  fmattack1: pp,
  fmattack2: hp,
  fmattack3: fp,
  fmattack4: dp,
  fmattack5: mp,
  fmattack6: gp,
  fmattack7: vp,
  fmattack8: yp,
  fmatt: Ap,
  fmatt1: wp,
  fmatt2: _p,
  fmatt3: bp,
  fmatt4: Ip,
  fmatt5: xp,
  fmatt6: Cp,
  fmatt7: Fp,
  fmatt8: Sp
} = tt("fmattack", 8, "fmatt"), { fmwave: Ep, fmwave1: Bp, fmwave2: kp, fmwave3: Dp, fmwave4: Np, fmwave5: Op, fmwave6: $p, fmwave7: Lp, fmwave8: Pp } = tt(
  "fmwave",
  8
), {
  fmdecay: Rp,
  fmdecay1: jp,
  fmdecay2: Tp,
  fmdecay3: qp,
  fmdecay4: Mp,
  fmdecay5: Wp,
  fmdecay6: zp,
  fmdecay7: Gp,
  fmdecay8: Vp,
  fmdec: Jp,
  fmdec1: Hp,
  fmdec2: Up,
  fmdec3: Kp,
  fmdec4: Qp,
  fmdec5: Xp,
  fmdec6: Zp,
  fmdec7: Yp,
  fmdec8: eh
} = tt("fmdecay", 8, "fmdec"), {
  fmsustain: th,
  fmsustain1: rh,
  fmsustain2: nh,
  fmsustain3: sh,
  fmsustain4: ih,
  fmsustain5: oh,
  fmsustain6: ah,
  fmsustain7: uh,
  fmsustain8: ch,
  fmsus: lh,
  fmsus1: ph,
  fmsus2: hh,
  fmsus3: fh,
  fmsus4: dh,
  fmsus5: mh,
  fmsus6: gh,
  fmsus7: vh,
  fmsus8: yh
} = tt("fmsustain", 8, "fmsus"), {
  fmrelease: Ah,
  fmrelease1: wh,
  fmrelease2: _h,
  fmrelease3: bh,
  fmrelease4: Ih,
  fmrelease5: xh,
  fmrelease6: Ch,
  fmrelease7: Fh,
  fmrelease8: Sh,
  fmrel: Eh,
  fmrel1: Bh,
  fmrel2: kh,
  fmrel3: Dh,
  fmrel4: Nh,
  fmrel5: Oh,
  fmrel6: $h,
  fmrel7: Lh,
  fmrel8: Ph
} = tt("fmrelease", 8, "fmrel");
for (let t = 0; t <= 8; t++)
  for (let e = 0; e <= 8; e++)
    l(`fmi${t}${e}`, `fm${t}${e}`);
l("bank");
l("chorus");
l("analyze");
l("fft");
l("attack", "att");
l("decay", "dec");
l("sustain", "sus");
l("release", "rel");
l("hold");
l(["bandf", "bandq", "bpenv"], "bpf", "bp");
l("bandq", "bpq");
l("begin");
l("end");
l("loop");
l("loopBegin", "loopb");
l("loopEnd", "loope");
l("crush");
l("coarse");
l(["tremolo", "tremolodepth", "tremoloskew", "tremolophase"], "trem");
l(
  ["tremolosync", "tremolodepth", "tremoloskew", "tremolophase"],
  "tremsync"
);
l("tremolodepth", "tremdepth");
l("tremoloskew", "tremskew");
l("tremolophase", "tremphase");
l("tremoloshape", "tremshape");
l("drive");
l("duckorbit", "duck");
l("duckdepth");
l("duckonset", "duckons");
l("duckattack", "duckatt", "datt");
l("byteBeatExpression", "bbexpr", "bb");
l("byteBeatStartTime", "bbst");
l("channels", "ch");
l(["pw", "pwrate", "pwsweep"]);
l("pwrate", "pwr");
l("pwsweep", "pws");
l(
  ["phaserrate", "phaserdepth", "phasercenter", "phasersweep"],
  "ph",
  "phaser"
);
l("phasersweep", "phs");
l("phasercenter", "phc");
l("phaserdepth", "phd", "phasdp");
l("channel");
l("cut");
l(["cutoff", "resonance", "lpenv"], "ctf", "lpf", "lp");
l("lpenv", "lpe");
l("hpenv", "hpe");
l("bpenv", "bpe");
l("lpattack", "lpa");
l("hpattack", "hpa");
l("bpattack", "bpa");
l("lpdecay", "lpd");
l("hpdecay", "hpd");
l("bpdecay", "bpd");
l("lpsustain", "lps");
l("hpsustain", "hps");
l("bpsustain", "bps");
l("lprelease", "lpr");
l("hprelease", "hpr");
l("bprelease", "bpr");
l("ftype");
l("fanchor");
l("lprate");
l("lpsync");
l("lpdepth");
l("lpdepthfrequency", "lpdepthfreq");
l("lpshape");
l("lpdc");
l("lpskew");
l("bprate");
l("bpsync");
l("bpdepth");
l("bpdepthfrequency", "bpdepthfreq");
l("bpshape");
l("bpdc");
l("bpskew");
l("hprate");
l("hpsync");
l("hpdepth");
l("hpdepthfrequency", "hpdepthfreq");
l("hpshape");
l("hpdc");
l("hpskew");
l(["vib", "vibmod"], "vibrato", "v");
l("noise");
l(["vibmod", "vib"], "vmod");
l(["hcutoff", "hresonance", "hpenv"], "hpf", "hp");
l("hresonance", "hpq");
l("resonance", "lpq");
l("djf");
l(["delay", "delaytime", "delayfeedback"]);
l("delayfeedback", "delayfb", "dfb");
l("delayspeed");
l("delaytime", "delayt", "dt");
l("delaysync", "delays", "ds");
l("lock");
l("detune", "det");
l("unison");
l("spread");
l("dry");
l("fadeTime", "fadeOutTime");
l("fadeInTime");
l("freq");
l("pattack", "patt");
l("pdecay", "pdec");
l("psustain", "psus");
l("prelease", "prel");
l("penv");
l("pcurve");
l("panchor");
l("gate", "gat");
l("leslie");
l("lrate");
l("lsize");
l("activeLabel");
l(["label", "activeLabel"]);
l("degree");
l("mtranspose");
l("ctranspose");
l("harmonic");
l("stepsPerOctave");
l("octaveR");
l("nudge");
l("octave", "oct");
l("orbit", "o");
l("bus");
l("busgain", "bgain");
l("overgain");
l("overshape");
l("pan");
l("panspan");
l("pansplay");
l("panwidth");
l("panorient");
l("slide");
l("semitone");
l("voice");
l("chord");
l("dictionary", "dict");
l("anchor");
l("offset");
l("octaves");
l(["mode", "anchor"]);
l(["room", "size"]);
l("roomlp", "rlp");
l("roomdim", "rdim");
l("roomfade", "rfade");
l(["ir", "i"], "iresponse");
l("irspeed");
l("irbegin");
l("roomsize", "size", "sz", "rsize");
l(["shape", "shapevol"]);
l(["distort", "distortvol", "distorttype"], "dist");
l("distortvol", "distvol");
l("distorttype", "disttype");
l([
  "compressor",
  "compressorRatio",
  "compressorKnee",
  "compressorAttack",
  "compressorRelease"
]);
l("compressorKnee");
l("compressorRatio");
l("compressorAttack");
l("compressorRelease");
const { speed: Qu } = l("speed");
l("stretch");
l("unit");
l("squiz");
l("vowel");
l("waveloss");
l("density");
l("expression");
l("sustainpedal");
l("fshift");
l("fshiftnote");
l("fshiftphase");
l("triode");
l("krush");
l("kcutoff");
l("octer");
l("octersub");
l("octersubsub");
l("ring");
l("ringf");
l("ringdf");
l("freeze");
l("xsdelay");
l("tsdelay");
l("real");
l("imag");
l("enhance");
l("comb");
l("smear");
l("scram");
l("binshift");
l("hbrick");
l("lbrick");
l("frameRate");
l("frames");
l("hours");
l("minutes");
l("seconds");
l("songPtr");
l("uid");
l("val");
l("cps");
l("clip", "legato");
l("duration", "dur");
l("zrand");
l("curve");
l("deltaSlide");
l("pitchJump");
l("pitchJumpTime");
l("znoise");
l("zmod");
l("zcrush");
l("zdelay");
l("zzfx");
l(["color", "colour"]);
A("adsr", (t, e) => {
  t = Array.isArray(t) ? t : [t];
  const [r, n, s, o] = t;
  return e.set({ attack: r, decay: n, sustain: s, release: o });
});
A("ad", (t, e) => {
  t = Array.isArray(t) ? t : [t];
  const [r, n = r] = t;
  return e.attack(r).decay(n);
});
A("ds", (t, e) => {
  t = Array.isArray(t) ? t : [t];
  const [r, n = 0] = t;
  return e.set({ decay: r, sustain: n });
});
A("ar", (t, e) => {
  t = Array.isArray(t) ? t : [t];
  const [r, n = r] = t;
  return e.set({ attack: r, release: n });
});
l("midichan");
l("midimap");
l("midiport");
l("midicmd");
A("control", (t, e) => {
  if (!Array.isArray(t))
    throw new Error("control expects an array of [ccn, ccv]");
  const [r, n] = t;
  return e.ccn(r).ccv(n);
});
l("ccn");
l("ccv");
l("ctlNum");
l("nrpnn");
l("nrpv");
l("progNum");
A("sysex", (t, e) => {
  if (!Array.isArray(t))
    throw new Error("sysex expects an array of [id, data]");
  const [r, n] = t;
  return e.sysexid(r).sysexdata(n);
});
l("sysexid");
l("sysexdata");
l("midibend");
l("miditouch");
l("polyTouch");
l("oschost");
l("oscport");
const Sr = (t) => Jt.has(t) ? Jt.get(t) : t;
A("as", (t, e) => (t = Array.isArray(t) ? t : [t], e.fmap((r) => {
  r = Array.isArray(r) ? r : [r];
  const n = [];
  for (let s = 0; s < t.length; ++s)
    r[s] !== void 0 && n.push([Sr(t[s]), r[s]]);
  return Object.fromEntries(n);
})));
A(
  "scrub",
  (t, e) => t.outerBind((r) => {
    Array.isArray(r) || (r = [r]);
    const [n, s = 1] = r;
    return e.begin(n).mul(Qu(s)).clip(1);
  }),
  !1
);
const Er = /* @__PURE__ */ new Map(), Xu = (t, e, ...r) => {
  const n = Er.get(t) ?? /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set([e, ...r]);
  for (const o of s)
    n.set(String(o).toLowerCase(), e);
  Er.set(t, n);
}, Gr = (t, e = []) => {
  for (const [r, ...n] of e)
    Xu(t, r, ...n);
}, Zu = (t, e) => {
  const r = Er.get(t);
  return r ? r.get(String(e).toLowerCase()) ?? e : e;
};
Gr("lfo", [
  ["control", "c"],
  ["subControl", "sc"],
  ["rate", "r"],
  ["depth", "dep", "dr"],
  ["depthabs", "da"],
  ["dcoffset", "dc"],
  ["shape", "sh"],
  ["skew", "sk"],
  ["curve", "cu"],
  ["sync", "s"],
  ["retrig", "rt"],
  ["fxi"]
]);
Gr("env", [
  ["control", "c"],
  ["subControl", "sc"],
  ["attack", "att", "a"],
  ["decay", "dec", "d"],
  ["sustain", "sus", "s"],
  ["release", "rel", "r"],
  ["depth", "dep", "dr"],
  ["depthabs", "da"],
  ["acurve", "ac"],
  ["dcurve", "dc"],
  ["rcurve", "rc"],
  ["fxi"]
]);
Gr("bmod", [
  ["bus", "b"],
  ["control", "c"],
  ["subControl", "sc"],
  ["depth", "dep", "dr"],
  ["depthabs", "da"],
  ["dc"],
  ["fxi"]
]);
x.prototype.modulate = function(t, e, r) {
  e = { control: void 0, ...e };
  const n = ["lfo", "env", "bmod"];
  if (!n.includes(t))
    return _t(`[core] Modulation type ${t} not found. Please use one of 'lfo', 'env', 'bmod'`), this;
  let s = this, o;
  s = s.fmap((a) => (p) => ({ v: a, id: p })).appLeft(B(r));
  for (const [a, p] of Object.entries(e)) {
    const c = Zu(t, a), d = B(p);
    s = s.fmap(({ v: g, id: m }) => (v) => {
      if (o === void 0) {
        let C = Sr(Object.keys(g).at(-1));
        n.includes(C) && (C = `${C}_${[...g[C].__ids].at(-1)}`), o = C;
      }
      g[t] ??= { __ids: /* @__PURE__ */ new Set() };
      const I = g[t];
      return m ??= I.__ids.size, I[m] ??= { control: o }, I.__ids.add(m), v === void 0 ? { v: g, id: m } : (c === "control" || c === "subControl" ? I[m][c] = Sr(v) : I[m][c] = v, { v: g, id: m });
    }).appLeft(d);
  }
  return s.fmap(({ v: a }) => a);
};
x.prototype.lfo = function(t, e) {
  return this.modulate("lfo", t, e);
};
x.prototype.env = function(t, e) {
  return this.modulate("env", t, e);
};
x.prototype.bmod = function(t, e) {
  return this.modulate("bmod", t, e);
};
l(["transient", "transsustain"]);
l("FXrelease", "FXrel", "FXr", "fxr");
const Yu = function(t, e) {
  const [r, n] = t, [s, o] = e, [a, p] = ps(n, s);
  return [
    [n, r - n],
    [jr((c, d) => c.concat(d), a, o), p]
  ];
}, ec = function(t, e) {
  const [r, n] = t, [s, o] = e, [a, p] = ps(r, o);
  return [
    [r, n - r],
    [jr((d, g) => d.concat(g), s, a), p]
  ];
}, ws = function(t, e) {
  const [r, n] = t;
  return Math.min(r, n) <= 1 ? [t, e] : ws(...r > n ? Yu(t, e) : ec(t, e));
}, _s = function(t, e) {
  const r = t < 0, n = Math.abs(t), s = e - n, o = Array(n).fill([1]), a = Array(s).fill([0]), p = ws([n, s], [o, a]), c = Ke(p[1][0]).concat(Ke(p[1][1]));
  return r ? c.map((d) => 1 - d) : c;
}, tr = function(t, e, r) {
  const n = _s(t, e);
  return r ? Au(n, -r) : n;
};
A("euclid", function(t, e, r) {
  return r.struct(tr(t, e, 0));
});
A("bjork", function(t, e) {
  Array.isArray(t) || (t = [t]);
  const [r, n = r, s = 0] = t;
  return e.struct(tr(r, n, s));
});
const { euclidrot: Rh, euclidRot: jh } = A(["euclidrot", "euclidRot"], function(t, e, r, n) {
  return n.struct(tr(t, e, r));
}), bs = function(t, e, r, n) {
  if (t < 1)
    return Ne;
  const o = tr(t, e, 0).join("").split("1").slice(1).map((a) => [a.length + 1, !0]);
  return n.struct(gs(...o)).late(F(r).div(e));
};
A(["euclidLegato"], function(t, e, r) {
  return bs(t, e, 0, r);
});
A(["euclidLegatoRot"], function(t, e, r, n) {
  return bs(t, e, r, n);
});
const { euclidish: Th, eish: qh } = A(["euclidish", "eish"], function(t, e, r, n) {
  const s = Hu(_s(t, e), new Array(t).fill(1), r);
  return n.struct(s).setSteps(e);
});
let Mt = {};
A(
  "timeline",
  function(t, e) {
    t = B(t);
    const r = function(n) {
      const s = !!n.controls.cyclist, o = t.query(n), a = [];
      for (const p of o) {
        const c = p.value;
        let d;
        if (c === 0)
          d = 0;
        else if (c in Mt)
          d = Mt[c];
        else {
          const m = p.wholeOrPart();
          !s || n.span.begin.lt(m.midpoint()) ? d = m.begin : d = m.end;
        }
        s && (Mt[c] = d, c !== 0 && delete Mt[-c]);
        const g = e.late(d).query(n.setSpan(p.part)).map((m) => m.setContext(m.combineContext(p)));
        a.push(...g);
      }
      return a;
    };
    return new x(r, e._steps);
  },
  !1
);
const Me = function(t, e, r = !0) {
  const n = Array.isArray(t), s = Object.keys(t).length;
  return t = xu(t, B), s === 0 ? Ne : e.fmap((o) => {
    let a = o;
    return n && (a = r ? Math.round(a) % s : bu(Math.round(a), 0, t.length - 1)), t[a];
  });
}, tc = function(t, e) {
  return Array.isArray(e) && ([e, t] = [t, e]), rc(t, e);
}, rc = A("pick", function(t, e) {
  return Me(t, e, !1).innerJoin();
}), nc = A("pickmod", function(t, e) {
  return Me(t, e, !0).innerJoin();
});
A("pickF", function(t, e, r) {
  return r.apply(tc(e, t));
});
A("pickmodF", function(t, e, r) {
  return r.apply(nc(e, t));
});
A("pickOut", function(t, e) {
  return Me(t, e, !1).outerJoin();
});
A("pickmodOut", function(t, e) {
  return Me(t, e, !0).outerJoin();
});
A("pickRestart", function(t, e) {
  return Me(t, e, !1).restartJoin();
});
A("pickmodRestart", function(t, e) {
  return Me(t, e, !0).restartJoin();
});
A("pickReset", function(t, e) {
  return Me(t, e, !1).resetJoin();
});
A("pickmodReset", function(t, e) {
  return Me(t, e, !0).resetJoin();
});
const { inhabit: Mh, pickSqueeze: Wh } = A(["inhabit", "pickSqueeze"], function(t, e) {
  return Me(t, e, !1).squeezeJoin();
}), { inhabitmod: zh, pickmodSqueeze: Gh } = A(["inhabitmod", "pickmodSqueeze"], function(t, e) {
  return Me(t, e, !0).squeezeJoin();
}), It = (t) => {
  const e = (r) => [new ie(void 0, r.span, t(r.span.begin, r.controls))];
  return new x(e);
}, Vr = It((t) => t % 1), Is = Vr.toBipolar(), Jr = It((t) => 1 - t % 1), xs = Jr.toBipolar(), Cs = It((t) => Math.sin(Math.PI * 2 * t)), sc = Cs.fromBipolar();
sc._early(F(1).div(4));
Cs._early(F(1).div(4));
const ic = It((t) => Math.floor(t * 2 % 2));
ic.toBipolar();
De(Vr, Jr);
De(Is, xs);
De(Jr, Vr);
De(xs, Is);
typeof window < "u" && document.addEventListener("mousemove", (t) => {
  t.clientY / document.body.clientHeight, t.clientX / document.body.clientWidth;
});
const Fs = (t) => {
  const e = t << 13 ^ t, r = e >> 17 ^ e;
  return r << 5 ^ r;
}, oc = (t) => t - Math.trunc(t), ac = (t) => Fs(Math.trunc(oc(t / 300) * 536870912)), Ln = (t) => t % 536870912 / 536870912, uc = (t, e) => {
  if (e === 1)
    return Math.abs(Ln(t));
  const r = [];
  for (let n = 0; n < e; n++)
    r.push(Ln(t)), t = Fs(t);
  return r;
}, cc = (t, e) => uc(ac(t), e), Ss = (t, e = 1, r = 0) => cc(t + r, e), lc = (t) => It((e, r) => {
  let n = Ss(e.floor().add(0.5), t, r.randSeed);
  Array.isArray(n) || (n = [n]);
  const s = n.map((a, p) => [a, p]).sort((a, p) => (a[0] > p[0]) - (a[0] < p[0])).map((a) => a[1]), o = e.cyclePos().mul(t).floor() % t;
  return s[o];
})._segment(t), Es = (t, e, r) => {
  const n = [...Array(e).keys()].map((s) => r.zoom(F(s).div(e), F(s + 1).div(e)));
  return t.fmap((s) => n[s].repeatCycles(e)._fast(e)).innerJoin();
};
A("shuffle", (t, e) => Es(lc(t), t, e));
A("scramble", (t, e) => Es(fc(t)._segment(t), t, e));
const pc = (t, e) => new x((r) => {
  let { randSeed: n, ...s } = r.controls;
  return n = t(n), e.query(r.setControls({ ...s, randSeed: n }));
}, e._steps);
A("seed", (t, e) => pc(() => t, e));
const Ve = It((t, e) => Ss(t, 1, e.randSeed));
Ve.toBipolar();
const hc = (t) => Ve.fmap((e) => e < t);
hc(0.5);
const fc = (t) => Ve.fmap((e) => Math.trunc(e * t)), Bs = (t, e) => (e = e.map(B), e.length == 0 ? Ne : t.range(0, e.length).fmap((r) => {
  const n = Math.min(Math.max(Math.floor(r), 0), e.length - 1);
  return e[n];
})), ks = (t, e) => Bs(t, e).outerJoin(), dc = (t, e) => Bs(t, e).innerJoin();
x.prototype.choose = function(...t) {
  return ks(this, t);
};
x.prototype.choose2 = function(...t) {
  return ks(this.fromBipolar(), t);
};
A(
  "degradeByWith",
  (t, e, r) => r.fmap((n) => (s) => n).appLeft(t.filterValues((n) => n > e)),
  !0,
  !0
);
A(
  "degradeBy",
  function(t, e) {
    return e._degradeByWith(Ve, t);
  },
  !0,
  !0
);
A("degrade", (t) => t._degradeBy(0.5), !0, !0);
A(
  "undegradeBy",
  function(t, e) {
    return e._degradeByWith(
      Ve.fmap((r) => 1 - r),
      t
    );
  },
  !0,
  !0
);
A("undegrade", (t) => t._undegradeBy(0.5), !0, !0);
A("sometimesBy", function(t, e, r) {
  return B(t).fmap((n) => Ee(r._degradeBy(n), e(r._undegradeBy(1 - n)))).innerJoin();
});
A("sometimes", function(t, e) {
  return e._sometimesBy(0.5, t);
});
A("someCyclesBy", function(t, e, r) {
  return B(t).fmap(
    (n) => Ee(
      r._degradeByWith(Ve._segment(1), n),
      e(r._degradeByWith(Ve.fmap((s) => 1 - s)._segment(1), 1 - n))
    )
  ).innerJoin();
});
A("someCycles", function(t, e) {
  return e._someCyclesBy(0.5, t);
});
A("often", function(t, e) {
  return e.sometimesBy(0.75, t);
});
A("rarely", function(t, e) {
  return e.sometimesBy(0.25, t);
});
A("almostNever", function(t, e) {
  return e.sometimesBy(0.1, t);
});
A("almostAlways", function(t, e) {
  return e.sometimesBy(0.9, t);
});
A("never", function(t, e) {
  return e;
});
A("always", function(t, e) {
  return t(e);
});
function Ds(t) {
  Array.isArray(t) === !1 && (t = [t]);
  const e = Fu();
  return t.every((r) => {
    const n = Cu.get(r) ?? r;
    return e[n];
  });
}
A("whenKey", function(t, e, r) {
  return r.when(Ds(t), e);
});
A("keyDown", function(t) {
  return t.fmap(Ds);
});
let Ht;
try {
  Ht = window?.speechSynthesis;
} catch {
  console.warn("cannot use window: not in browser?");
}
let Pn = Ht?.getVoices();
function mc(t, e, r) {
  Ht.cancel();
  const n = new SpeechSynthesisUtterance(t);
  n.lang = e, Pn = Ht.getVoices();
  const s = Pn.filter((o) => o.lang.includes(e));
  typeof r == "number" ? n.voice = s[r % s.length] : typeof r == "string" && (n.voice = s.find((o) => o.name === o)), speechSynthesis.speak(n);
}
A("speak", function(t, e, r) {
  return r.onTrigger((n) => {
    mc(n.value, t, e);
  });
});
_t("🌀 @strudel/core loaded 🌀");
globalThis._strudelLoaded && console.warn(
  `@strudel/core was loaded more than once...
This might happen when you have multiple versions of strudel installed. 
Please check with "npm ls @strudel/core".`
);
globalThis._strudelLoaded = !0;
const Ns = 3e-4, gc = (t, e) => (r, n) => {
  const a = t.source_[n].options_?.ops, p = r.__steps_source;
  if (a)
    for (const c of a)
      switch (c.type_) {
        case "stretch": {
          const d = ["fast", "slow"], { type: g, amount: m } = c.arguments_;
          if (!d.includes(g))
            throw new Error(`mini: stretch: type must be one of ${d.join("|")} but got ${g}`);
          r = B(r)[g](e(m));
          break;
        }
        case "replicate": {
          const { amount: d } = c.arguments_;
          r = B(r), r = r._repeatCycles(d)._fast(d);
          break;
        }
        case "bjorklund": {
          c.arguments_.rotation ? r = r.euclidRot(e(c.arguments_.pulse), e(c.arguments_.step), e(c.arguments_.rotation)) : r = r.euclid(e(c.arguments_.pulse), e(c.arguments_.step));
          break;
        }
        case "degradeBy": {
          r = B(r)._degradeByWith(Ve.early(Ns * c.arguments_.seed), c.arguments_.amount ?? 0.5);
          break;
        }
        case "tail": {
          const d = e(c.arguments_.element);
          r = r.fmap((g) => (m) => Array.isArray(g) ? [...g, m] : [g, m]).appLeft(d);
          break;
        }
        case "range": {
          const d = e(c.arguments_.element);
          r = B(r);
          const g = (v, I, C = 1) => Array.from(
            { length: Math.abs(I - v) / C + 1 },
            (z, Q) => v < I ? v + Q * C : v - Q * C
          );
          r = ((v, I) => v.squeezeBind((C) => I.bind((z) => De(...g(C, z)))))(r, d);
          break;
        }
        default:
          console.warn(`operator "${c.type_}" not implemented`);
      }
  return r.__steps_source = r.__steps_source || p, r;
};
function Os(t, e, r, n = 0) {
  r?.(t);
  const s = (o) => Os(o, e, r, n);
  switch (t.type_) {
    case "pattern": {
      const o = t.source_.map((d) => s(d)).map(gc(t, s)), a = t.arguments_.alignment, p = o.filter((d) => d.__steps_source);
      let c;
      switch (a) {
        case "stack": {
          c = Ee(...o), p.length && (c._steps = Qe(...p.map((d) => F(d._steps))));
          break;
        }
        case "polymeter_slowcat": {
          c = Ee(...o.map((d) => d._slow(d.__weight))), p.length && (c._steps = Qe(...p.map((d) => F(d._steps))));
          break;
        }
        case "polymeter": {
          const d = t.arguments_.stepsPerCycle ? s(t.arguments_.stepsPerCycle).fmap((m) => F(m)) : de(F(o.length > 0 ? o[0].__weight : 1)), g = o.map((m) => m.fast(d.fmap((v) => v.div(m.__weight))));
          c = Ee(...g);
          break;
        }
        case "rand": {
          c = dc(Ve.early(Ns * t.arguments_.seed).segment(1), o), p.length && (c._steps = Qe(...p.map((d) => F(d._steps))));
          break;
        }
        case "feet": {
          c = De(...o);
          break;
        }
        default: {
          if (t.source_.some((g) => !!g.options_?.weight)) {
            const g = t.source_.reduce(
              (m, v) => m.add(v.options_?.weight || F(1)),
              F(0)
            );
            c = gs(
              ...t.source_.map((m, v) => [m.options_?.weight || F(1), o[v]])
            ), c.__weight = g, c._steps = g, p.length && (c._steps = c._steps.mul(Qe(...p.map((m) => F(m._steps)))));
          } else
            c = Ze(...o), c._steps = o.length;
          t.arguments_._steps && (c.__steps_source = !0);
        }
      }
      return p.length && (c.__steps_source = !0), c;
    }
    case "element":
      return s(t.source_);
    case "atom": {
      if (t.source_ === "~" || t.source_ === "-")
        return Ne;
      if (!t.location_)
        return console.warn("no location for", t), t.source_;
      const o = isNaN(Number(t.source_)) ? t.source_ : Number(t.source_);
      if (n === -1)
        return de(o);
      const [a, p] = $s(e, t, n);
      return de(o).withLoc(a, p);
    }
    case "stretch":
      return s(t.source_).slow(s(t.arguments_.amount));
    default:
      return console.warn(`node type "${t.type_}" not implemented -> returning silence`), Ne;
  }
}
const $s = (t, e, r = 0) => {
  const { start: n, end: s } = e.location_, o = t?.split("").slice(n.offset, s.offset).join(""), [a = 0, p = 0] = o ? o.split(e.source_).map((c) => c.split("").filter((d) => d === " ").length) : [];
  return [n.offset + a + r, s.offset - p + r];
}, vc = (t, e = 0, r = t) => {
  try {
    return ou(t);
  } catch (n) {
    const s = [n.location.start.offset + e, n.location.end.offset + e], o = r.slice(0, s[0]).split(`
`).length;
    throw new Error(`[mini] parse error at line ${o}: ${n.message}`);
  }
}, yc = (t, e, r) => {
  const n = vc(t, e, r);
  let s = [];
  return Os(
    n,
    t,
    (o) => {
      o.type_ === "atom" && s.push(o);
    },
    -1
  ), s;
}, Ac = (t, e = 0, r) => yc(t, e, r).map((n) => $s(t, n, e));
let Ut = !1;
function mr(t) {
  const e = Ut;
  return Ut = !!t, e;
}
let Kt = 0;
function Rn(t) {
  Kt = Number.isFinite(t) ? t : 0;
}
function wc(t) {
  return "'" + String(t).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n") + "'";
}
let rr = !1, nr = [];
function _c() {
  rr = !0, nr = [];
}
function bc() {
  return rr = !1, nr;
}
function Wt(t, e) {
  if (!Ut || typeof e != "number")
    return JSON.stringify(t);
  const r = Kt + e;
  return rr && nr.push(...Ac(`"${t}"`, r)), `m(${wc(t)}, ${r})`;
}
function gr(t, e, r) {
  if (!Ut || typeof e != "number" || typeof r != "number")
    return t;
  const n = Kt + e, s = Kt + r;
  return rr && nr.push([n, s]), `lo(${t}, ${n}, ${s})`;
}
const Ic = {
  Text(t, e, r, n, s) {
    const o = n && n.children ? n.children : [];
    return [e].concat(o).map((p) => p.translate()).join(`

`);
  },
  Paragraph(t, e, r) {
    const n = r.children || [];
    return [t].concat(n).map((o) => o.translate()).join("; ");
  },
  Sentence(t, e, r) {
    const n = t.translate(), s = e.translate();
    return [n, ...s].join("");
  },
  ClauseTail(t, e) {
    const r = e.translate();
    return r ? "." + r : "";
  },
  Clause(t) {
    const e = t.translate();
    if (!Array.isArray(e)) return e;
    if (!e || e.length === 0) return "";
    const r = e.find((o) => o && o.kind === "word"), n = r ? r.text : "", s = e.filter((o) => o && o.kind === "quote").map((o) => Wt(o.text, o.start));
    return `${n}(${s.join(", ")})`;
  },
  word(t) {
    return { kind: "word", text: this.sourceString };
  },
  quotation(t, e, r) {
    return { kind: "quote", text: e.translate(), start: this.source.startIdx };
  },
  quotedContent(t) {
    const e = this.sourceString;
    let r = "", n = 0;
    for (let s = 0; s < e.length; s++) {
      const o = e[s];
      o === "(" ? n++ : o === ")" && n > 0 && n--, o === "," && n === 0 && /\d/.test(e[s - 1]) && /\d/.test(e[s + 1]) ? r += "." : r += o;
    }
    return r;
  },
  _terminal() {
    return this.sourceString;
  },
  _iter(...t) {
    return t.map((e) => e.translate());
  }
}, xc = { lpf: ["lágtíðnihleypir", "lth"], hpf: ["háttíðnihleypir", "hth"], accelerate: ["hröðun", "inngjöf"], adsr: ["umslag"], always: "alltaf", amp: "mögnun", arp: ["runa", "röð"], attack: "svörun", bank: "banki", begin: "byrja", cat: ["samanlíming", "samsetning", "strengjalíming", "strengjasamsetning", "líming", "Lím"], chop: ["höggva"], choose: ["velja"], color: "litur", compress: "þjappa", compressor: "þjappari", cpm: ["hringrásarhraði", "hrh", "hringirámínútu", "hám"], crush: ["kremja", "milja", "kreista"], clip: ["klemma"], cut: ["klippa", "saxa"], cutoff: ["afskurður"], delay: ["endurkast", "endurvarp"], djf: ["djsía"], end: ["endir"], distort: ["bjaga", "bjögun"], echo: ["endurómun", "ómun"], echoWith: ["ómunMeð", "ómaMeð"], every: "hvert", expand: "útvíkka", extend: "framlengja", fast: ["fljótt", "hratt", "hraðar", "snöggt"], fastChunk: "hraðBiti", fastGap: "hraðBil", filter: "sía", filterValues: "síuGildi", filterWhen: "síaÞegar", floor: "gólf", freq: "tíðni", gain: ["hljóðstyrkur", "styrkur", "læti", "hávaði"], hurry: ["drífaSig", "hraðaÁsér", "flýtaSér"], hush: ["uss", "suss", "þögn"], mask: ["gríma"], note: ["nótur", "nóta"], orbit: ["braut"], pan: ["staðsetning", "staður"], range: ["bil", "svið"], room: ["rými", "ómur"], s: "h", scale: "skali", scramble: ["rugla", "hræra"], setcpm: ["setjaHringrásarhraða", "setjaHrh", "setjaHringirámínútu", "setjaHám"], slow: "hægt", slowcat: ["hæglíming", "hægsetning", "hægLím"], sometimes: ["stundum"], sometimesBy: ["stundumUm"], sound: "hljóð", speed: "hraði", spread: "dreifa", squiz: ["kreista"], stack: ["bunki", "stafli"], striate: ["ráka", "rispa", "strífa"], struct: ["uppbygging", "strúktúr"], sustain: "viðhalda", take: "taka", velocity: "hraði", vowel: ["sérhljóðar", "sérhljóði"], when: "þegar", whenKey: "þegarLykill", zoom: "stækka" }, Cc = { red: "rauður", green: "grænn", blue: "blár", yellow: "gulur", cyan: "blágrænn", magenta: "fjólublár", black: "svartur", white: "hvítur", gray: "grár", orange: "appelsínugulur", purple: "fjólublár", pink: "bleikur", brown: "brúnn" }, Fc = { botn: 50, efriBotn: 120, neðriMiðja: 300, miðja: 1e3, efriMiðja: 2e3, neðriToppur: 5e3, toppur: 1e4, efriToppur: 16e3 }, Sc = { b: "h", "c#": "cis", "d#": "dis", "e#": "eis", "f#": "fis", "g#": "gis", "a#": "ais", "b#": "his", cb: "ces", db: "des", eb: "es", fb: "fes", gb: "ges", ab: "as" }, Ec = { major: "dúr", minor: "moll" }, Ls = {
  functions: xc,
  colors: Cc,
  constants: Fc,
  notes: Sc,
  scales: Ec
};
function Bc(t = {}) {
  const { aliasFuncs: e, aliasSamples: r, aliasNotes: n, aliasScales: s } = t;
  let o = [];
  const a = new Set(
    Object.values(Ls.functions || {}).flatMap((y) => Array.isArray(y) ? y : [y]).filter((y) => y && !/[A-Z]/.test(y))
  );
  function p(y) {
    for (const b of Array.isArray(y) ? y : [y])
      b && typeof b == "string" && a.add(b);
  }
  const c = [
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
  ], d = {
    banki: ["bönk"],
    hraði: ["hröð"],
    hávaði: ["hávöð"],
    inngjöf: ["inngjaf"],
    læti: ["lát"],
    röð: ["rað"],
    skali: ["sköl"],
    stafli: ["stöfl"],
    staður: ["stöð"],
    taka: ["tök"],
    umslag: ["umslög"],
    þjappa: ["þjöpp"],
    þögn: ["þagn"]
  }, g = {
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
  }, m = (y) => {
    for (const b of ["ur", "nn", "ll", "i", "a"])
      if (y.endsWith(b) && y.length - b.length >= 2) return y.slice(0, -b.length);
    return y;
  }, v = (y) => {
    if (Object.prototype.hasOwnProperty.call(g, y)) return g[y];
    if (a.has(y)) return y;
    let b = null;
    for (const _ of a) {
      const S = d[_] ? [m(_), ...d[_]] : [m(_)];
      for (const k of S)
        for (const L of c)
          y === k + L && (!b || k.length > b.len) && (b = { key: _, len: k.length });
    }
    return b ? b.key : y;
  }, I = {
    // 1
    einn: 1,
    ein: 1,
    eitt: 1,
    // 2 (+ multiplicative)
    tveir: 2,
    tvær: 2,
    tvö: 2,
    tvisvar: 2,
    // 3 (+ multiplicative)
    þrír: 3,
    þrjár: 3,
    þrjú: 3,
    þrisvar: 3,
    // 4
    fjórir: 4,
    fjórar: 4,
    fjögur: 4,
    // 5-10
    fimm: 5,
    sex: 6,
    sjö: 7,
    átta: 8,
    níu: 9,
    tíu: 10
  }, C = {
    sög: "saw",
    sínus: "sine",
    kósínus: "cosine",
    þríhyrnd: "tri",
    kassi: "square",
    handahóf: "rand",
    perlín: "perlin"
  }, z = {
    mjög: 1.5,
    örlítið: 0.5,
    smá: 0.5,
    alveg: 2
  }, Q = {
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
    hátt: "stór",
    háan: "stór",
    hærri: "stærri",
    hærra: "stærri",
    hæstur: "stærstur",
    hæst: "stærstur",
    hæsta: "stærstur"
  }, U = ["minnstur", "minni", "lítill", "stór", "stærri", "stærstur"], xe = { minnstur: 0.1, minni: 0.2, lítill: 0.5, stór: 0.75, stærri: 0.9, stærstur: 1 }, Oe = /* @__PURE__ */ new Set(["minnstur", "minni", "lítill"]), Ot = { "enn minni": 0.15, "voðalega lítill": 0.35, "mjög stór": 0.85 }, sr = (y, b) => {
    const _ = Q[b.toLowerCase()];
    let S = xe[_];
    const k = (y || "").toLowerCase();
    if (k) {
      const L = `${k} ${_}`;
      if (Object.prototype.hasOwnProperty.call(Ot, L)) return Ot[L];
      const N = U.indexOf(_);
      if (Oe.has(_)) {
        const q = N > 0 ? xe[U[N - 1]] : 0;
        S = Number((S - (S - q) / 2).toFixed(2));
      } else {
        const q = N < U.length - 1 ? xe[U[N + 1]] : 1;
        S = Number((S + (q - S) / 2).toFixed(2));
      }
    }
    return S;
  }, qe = (...y) => {
    const b = [], _ = (S) => {
      if (S) {
        if (S.ctorName === "quotation") {
          b.push(S);
          return;
        }
        if (S.children && S.children.length)
          for (const k of S.children) _(k);
      }
    };
    for (const S of y) _(S);
    return b;
  }, ct = (y) => y.map((b) => {
    const _ = b.translate(), S = _ && typeof _ == "object" && "text" in _ ? _.text : String(_);
    return Wt(S, b.source && b.source.startIdx);
  }), rt = (y) => {
    const b = y.translate();
    return (b && typeof b == "object" && "text" in b ? b.text : String(b || "")).trim();
  }, ce = (y) => {
    const b = y.translate();
    return typeof b == "object" && b && "text" in b ? b.text : String(b);
  };
  return { extended: {
    // Top-level override to collapse paragraphs when final paragraph composes names.
    Text(y, b, _, S, k) {
      const L = [b].concat(S && S.children ? S.children : []), N = (Z) => {
        if (!Z || !Z.children) return [];
        const Ce = Z.children[2], G = Z.children[4];
        return [Ce].concat(G && G.children ? G.children : []).filter(Boolean);
      }, q = L[L.length - 1];
      let X = !1;
      const K = N(q)[0];
      if (K && K.children && K.children.length > 0) {
        const Z = K.children[0];
        if (Z && Z.ctorName === "Clause") {
          const Ce = Z.children && Z.children[0];
          Ce && Ce.ctorName === "Clause_composition" && (X = !0);
        }
      }
      if (!X)
        return L.map((Z) => Z.translate()).join(`

`);
      const J = (Z) => N(Z).map((Ce) => Ce.translate()).join("; "), re = L.slice(0, -1).map(J), Ae = q.translate();
      return re.concat([Ae]).filter(Boolean).join("; ");
    },
    // Track assigned names per paragraph via a module-level stack.
    Clause_assignment(y) {
      const b = y.children || [], _ = b.find((G) => G && G.ctorName === "variable"), S = b.find((G) => G && G.ctorName === "function"), k = b.find((G) => G && G.ctorName === "quotation"), L = b.find((G) => G && G.ctorName === "_iter"), N = L && L.numChildren > 0 ? L.child(0) : null, q = N && N.child(0) ? N.child(0).ctorName : null, X = _ ? _.translate() : "", K = S ? S.translate() : "", J = k ? k.translate() : "", re = J && typeof J == "object" && "text" in J ? J.text : J, Ae = Wt(re, k && k.source.startIdx), Z = o[o.length - 1];
      if (Z && Z.names.push(X), q === "negation_aldrei" || q === "negation_ekkert")
        return `const ${X} = silence`;
      const Ce = `const ${X} = ${K}(${Ae})`;
      return q === "negation_ekki" ? `${Ce}; ${X}.hush()` : Ce;
    },
    // Multi-subject assignment: 'Davíð og Ásta spila hljóð «bd»' binds one const per
    // subject to the same call. Every subject name is pushed to the paragraph stack
    // so the trailing stack(...) collects them (auto-stack of voices). A negation
    // applies per subject, mirroring single Assignment polarity.
    Clause_multiassignment(y) {
      const b = y.children || [], _ = b.find((G) => G && G.ctorName === "SubjectList"), S = b.find((G) => G && G.ctorName === "function"), k = b.find((G) => G && G.ctorName === "quotation"), L = b.find((G) => G && G.ctorName === "_iter"), N = L && L.numChildren > 0 ? L.child(0) : null, q = N && N.child(0) ? N.child(0).ctorName : null, X = _ ? _.translate() : [], K = S ? S.translate() : "", J = k ? k.translate() : "", re = J && typeof J == "object" && "text" in J ? J.text : J, Ae = Wt(re, k && k.source.startIdx), Z = o[o.length - 1];
      if (Z)
        for (const G of X) Z.names.push(G);
      return X.map((G) => {
        if (q === "negation_aldrei" || q === "negation_ekkert")
          return `const ${G} = silence`;
        const $t = `const ${G} = ${K}(${Ae})`;
        return q === "negation_ekki" ? `${$t}; ${G}.hush()` : $t;
      }).join("; ");
    },
    // SubjectList -> array of lowercased variable names (2+). The plural verb and
    // the conjunction terminals are structural and contribute no names.
    SubjectList(y, b, _, S, k) {
      const L = y.translate(), N = _.children ? _.children.map((X) => X.translate()) : [], q = k.translate();
      return [L, ...N, q];
    },
    // Additive layer: 'Líka hljóð «~ sd»' adds a voice under an auto-generated name
    // (lag2, lag3, …) keyed off how many names the paragraph already holds, then
    // pushes it so the paragraph stack collects it. Mirrors Clause_generic for the
    // method call itself.
    Clause_additive(y, b, _, S, k, L) {
      const N = v(ce(b)), q = [S].concat(qe(k), qe(L)), X = `${N}(${ct(q).join(", ")})`, K = o[o.length - 1], J = `lag${(K ? K.names.length : 0) + 1}`;
      return K && K.names.push(J), `const ${J} = ${X}`;
    },
    // Imperative command: 'Spilaðu hljóð «bd»' emits a bare pattern (command mood).
    // It is NOT pushed to the paragraph stack, so no trailing stack(...) wraps it;
    // the keyword is discarded and the rest is a normal method clause that may chain
    // via ClauseTail. Mirrors Clause_generic for the method call.
    Clause_imperative(y, b, _, S, k, L) {
      const N = v(ce(b)), q = [S].concat(qe(k), qe(L));
      return `${N}(${ct(q).join(", ")})`;
    },
    // Negated generic clause: 'ekki styrkur "1.2"' -> gain(0). The negated method
    // and its argument are discarded; the clause collapses to gain(0), which the
    // ClauseTail joiner chains as '.gain(0)' (or leaves bare when leading). This
    // silences just this control while preserving the rest of the method chain.
    Clause_negatedGeneric(y, b, _, S, k, L) {
      return "gain(0)";
    },
    // Nullary (argument-free) method clause: a bare method word with no quotation
    // or numeric argument, e.g. 'rev'/'palindrome'/'brak' (and Icelandic 'þögn' ->
    // hush). Mirrors Clause_generic's method-name extraction and noun normalization
    // but emits an empty argument list. ClauseTail prefixes the leading '.' when
    // chaining, so 'hljóð "bd", rev.' becomes hljóð("bd").rev().
    Clause_nullary(y) {
      return `${v(ce(y))}()`;
    },
    Clause_generic(y, b, _, S, k) {
      const L = v(ce(y)), N = [_].concat(qe(S), qe(k));
      return `${L}(${ct(N).join(", ")})`;
    },
    // Prepositional noun-phrase clause: a discarded preposition (glue) plus a
    // dative noun that names the method. Mirrors Clause_generic but the method
    // name comes from the noun word after the preposition; NOUN_FORMS normalizes
    // the inflected dative (`ómi`->`ómur`, `styrk`->`styrkur`) to its locale key.
    Clause_prepphrase(y, b, _, S, k, L) {
      const N = v(ce(b)), q = [S].concat(qe(k), qe(L));
      return `${N}(${ct(q).join(", ")})`;
    },
    // Degree-adverb clause: word followed by a degree adverb scaling a numeral.
    // Emits a BARE numeric product, e.g. `styrkur mjög 0.8` -> `styrkur(0.8 * 1.5)`.
    // The method name still goes through noun normalization like the generic clause.
    Clause_degree(y, b, _) {
      const S = v(ce(y)), k = gr(_.translate(), _.source.startIdx, _.source.endIdx);
      return `${S}(${k})`;
    },
    // Adjective-scaling clause: a method word + a graded adjective (optionally
    // intensified), e.g. `styrkur stór` -> `styrkur(0.75)`, `styrkur mjög stór` ->
    // `styrkur(0.85)`. Emits a BARE number. Method name is noun-normalized like
    // the generic clause; it generalizes across effects (styrkur, ómur, …).
    Clause_adjscale(y, b, _) {
      const S = v(ce(y)), k = gr(_.translate(), _.source.startIdx, _.source.endIdx);
      return `${S}(${k})`;
    },
    // AdjArg -> the numeric value of the (optionally adverb-intensified) adjective,
    // as a bare number literal. `scaleAdverb?` is an optional iteration node whose
    // sourceString is '' when the adverb is absent.
    AdjArg(y, b) {
      const _ = y.sourceString.trim();
      return String(sr(_ || null, b.sourceString));
    },
    // Coinage clause delegates to the Coinage rule.
    Clause_coinage(y) {
      return y.translate();
    },
    // Coinage ("languaging"): `Merktu „sveifla" sem lfo` mints the word `sveifla`
    // for the function `lfo`. Coinage is a stateful declaration, so we do BOTH halves
    // at translate time: registerVocabulary(coined) so it (and its inflections)
    // normalize, and aliasFuncs(target, coined) so it is callable. Doing it here —
    // rather than emitting a call — means later clauses in the SAME program already
    // see the new word, and avoids the transpiler rewriting string args into
    // mini-notation. The clause evaluates to `silence`, so a coinage-only line is a
    // valid (silent) program. The target is noun-normalized so `sem ómurinn` works.
    Coinage(y, b, _, S, k, L, N) {
      const q = _.translate(), X = (q && typeof q == "object" && "text" in q ? q.text : String(q || "")).trim(), { kind: K, value: J } = N.translate();
      try {
        K === "sample" ? r(J, X) : K === "note" ? n(J, X) : K === "scale" ? s(J, X) : (p(X), e(J, X));
      } catch {
      }
      return "silence";
    },
    // Typed coinage targets: a kind keyword + quoted value, or a bare function word.
    CoinTarget_sample(y, b, _) {
      return { kind: "sample", value: rt(_) };
    },
    CoinTarget_note(y, b, _) {
      return { kind: "note", value: rt(_) };
    },
    CoinTarget_scale(y, b, _) {
      return { kind: "scale", value: rt(_) };
    },
    CoinTarget_func(y) {
      return { kind: "func", value: v(ce(y)) };
    },
    // DegreeArg -> the verbatim numeral, a space, a times sign, and the factor,
    // e.g. '0.8 * 1.5'. The numeral is emitted verbatim (no quotes) so the whole
    // expression is a bare JS product that evaluates to a number.
    DegreeArg(y, b) {
      const _ = z[y.sourceString.toLowerCase()];
      return `${b.translate()} * ${_}`;
    },
    // Higher-order every-family clause: a method word, a numeric count, then a
    // BARE transform word, e.g. `hvert 4 rev` -> `hvert(4, rev)`. The transform is
    // emitted as a bare identifier (NOT JSON.stringified and NOT noun-normalized as
    // a control noun) so the locale alias resolves the function reference at eval
    // time (rev, palindrome, and Icelandic transform names all resolve). The method
    // head still goes through noun normalization like the generic clause.
    Clause_everyTransform(y, b, _, S, k) {
      const L = v(ce(y)), N = ce(k).toLowerCase();
      return `${L}(${_.translate()}, ${N})`;
    },
    // Higher-order probabilistic clause: a method word then a BARE transform word,
    // e.g. `sometimes rev` -> `sometimes(rev)`. Like everyTransform, the transform
    // stays a bare identifier so the locale alias resolves it at eval time.
    Clause_probTransform(y, b, _) {
      const S = v(ce(y)), k = ce(_).toLowerCase();
      return `${S}(${k})`;
    },
    // Bare numeric argument: word followed by a digits/decimal/negative literal.
    // The number is emitted verbatim (no quotes) so it becomes a JS number, e.g.
    // `hægt 2` -> `hægt(2)` and `staðsetning -0.5` -> `staðsetning(-0.5)`. The
    // method name still goes through noun normalization like the generic clause.
    Clause_numarg(y, b, _) {
      const S = v(ce(y)), k = gr(_.translate(), _.source.startIdx, _.source.endIdx);
      return `${S}(${k})`;
    },
    // numericArg delegates to its single child (TimesPhrase | numeral | numberWord);
    // each yields the bare integer/number string emitted verbatim into the JS.
    numericArg(y) {
      return y.translate();
    },
    numeral(y, b, _, S) {
      return this.sourceString;
    },
    // Worded cardinal -> its integer (as a string), e.g. 'tvö' -> "2".
    numberWord(y) {
      return String(I[this.sourceString.toLowerCase()]);
    },
    // "N sinnum": keep the count, drop the inter-token space and trailing 'sinnum'.
    timesPhrase(y, b, _) {
      return y.translate();
    },
    // Clause alt that delegates to Composition rule
    Clause_composition(y) {
      return y.translate();
    },
    // Explicit composition rule: mynstur "a b" spila <mode>
    Composition(y, b, _, S, k, L, N) {
      const q = _.translate(), K = (q && typeof q == "object" && "text" in q ? q.text : String(q || "")).trim().split(/\s+/).filter(Boolean).map((Ce) => Ce.toLowerCase());
      if (K.length === 0)
        throw new Error("Ógilt mynstur: auður listi af nöfnum");
      const J = N.translate(), re = J && typeof J == "object" && "kind" in J ? J.kind : String(J), Ae = re === "stack" ? "stack" : re === "cat" ? "cat" : re === "randcat" ? "randcat" : "seq", Z = o[o.length - 1];
      return Z && (Z.explicitComposition = !0), `${Ae}(${K.join(",")})`;
    },
    CompositionMode_stack(y) {
      return { kind: "stack" };
    },
    CompositionMode_cat(y, b, _) {
      return { kind: "cat" };
    },
    CompositionMode_seq(y, b, _, S, k) {
      return { kind: "seq" };
    },
    // Composition-list connectives: 'saman'->stack, 'eða'->randcat,
    // 'síðan'/'svo'/'þá'->cat. These mode words live only after 'spila' inside a
    // Composition, so they never clash with clause-level connectors.
    CompositionMode_stacksyn(y) {
      return { kind: "stack" };
    },
    CompositionMode_randcat(y) {
      return { kind: "randcat" };
    },
    CompositionMode_catsyn(y) {
      return { kind: "cat" };
    },
    // Override Paragraph to inject default stack(...) at the end, and to handle a
    // section header (`Kaflinn <name>:`) which binds the whole paragraph's layers
    // to `const <name> = stack(<layer1>, <layer2>, …)`.
    Paragraph(y, b, _, S, k) {
      const L = k && k.children ? k.children : [], N = [_].concat(L);
      if (y && y.numChildren > 0) {
        const re = y.child(0).translate();
        o.push({ names: [], explicitComposition: !1 });
        const Ae = N.map((Z) => Z.translate());
        return o.pop(), `const ${re} = stack(${Ae.join(", ")})`;
      }
      o.push({ names: [], explicitComposition: !1 });
      const q = N.map((re) => re.translate());
      let X = !1;
      const K = N[N.length - 1];
      if (K && K.children && K.children.length > 0) {
        const re = K.children[0];
        if (re && re.ctorName === "Clause") {
          const Ae = re.children && re.children[0];
          Ae && Ae.ctorName === "Clause_composition" && (X = !0);
        }
      }
      const J = o.pop() || { names: [] };
      return J.names.length > 0 && !X && q.push(`stack(${J.names.join(",")})`), q.join("; ");
    },
    // Section header `Kaflinn <name>:` -> the (lowercased) section name.
    SectionHeader(y, b, _) {
      return b.translate();
    },
    // Section / arrange names: letters then optional digits (build, build2, …).
    sectionName(y, b) {
      return this.sourceString.toLowerCase();
    },
    // Tempo clause: `Takturinn er <numeric expr>` -> setcpm(<expr>).
    Clause_tempo(y) {
      return y.translate();
    },
    TempoClause(y, b, _) {
      return `setcpm(${_.translate()})`;
    },
    // Arrange clause: `Raðaðu: N lotur af X, …` -> arrange([N, X], …).
    Clause_arrange(y) {
      return y.translate();
    },
    ArrangeClause(y, b, _, S, k) {
      return `arrange(${[_.translate()].concat(
        k && k.children ? k.children.map((N) => N.translate()) : []
      ).join(", ")})`;
    },
    ArrangeItem(y, b, _, S) {
      return `[${y.translate()}, ${S.translate()}]`;
    },
    ArrangeTarget_silence(y) {
      return "silence";
    },
    ArrangeTarget_name(y) {
      return y.translate();
    },
    // Numeric (arithmetic) expression: numbers joined by worded operators.
    NumExpr(y, b, _) {
      const S = b && b.children ? b.children.map((N) => N.translate()) : [], k = _ && _.children ? _.children.map((N) => N.translate()) : [];
      let L = y.translate();
      for (let N = 0; N < S.length; N++) L += ` ${S[N]} ${k[N]}`;
      return L;
    },
    numLit(y) {
      return y.translate();
    },
    ArithOp_div(y) {
      return "/";
    },
    ArithOp_mul(y) {
      return "*";
    },
    ArithOp_add(y) {
      return "+";
    },
    ArithOp_sub(y) {
      return "-";
    },
    // Expression argument on a control: `<control> fylgir <expr>` -> control(<expr>).
    Clause_exprArg(y, b, _, S, k) {
      return `${v(ce(y))}(${k.translate()})`;
    },
    ExprArg_paren(y, b, _) {
      return b.translate();
    },
    ExprArg_bare(y) {
      return y.translate();
    },
    Expr(y, b) {
      let _ = y.translate();
      if (b && b.children)
        for (const S of b.children) _ += S.translate();
      return _;
    },
    // A þá-sequence: 1 term -> the value; many plain terms -> cat(…); any weighted
    // term (vog W á V) -> timecat([W,V], …), plain terms defaulting to weight 1.
    Seq(y, b, _) {
      const S = [y.translate()].concat(
        _ && _.children ? _.children.map((L) => L.translate()) : []
      ), k = S.some((L) => L.weighted);
      return S.length === 1 && !k ? S[0].v : k ? `timecat(${S.map((N) => N.weighted ? `[${N.w}, ${N.v}]` : `[1, ${N.v}]`).join(", ")})` : `cat(${S.map((L) => L.v).join(", ")})`;
    },
    SeqTerm_weighted(y, b, _, S) {
      return { weighted: !0, w: b.translate(), v: S.translate() };
    },
    SeqTerm_plain(y) {
      return { weighted: !1, v: y.translate() };
    },
    Term_group(y, b, _) {
      return b.translate();
    },
    Term_pick(y, b, _, S, k, L) {
      const N = [S.translate()].concat(
        L && L.children ? L.children.map((q) => q.translate()) : []
      );
      return `${y.translate()}.pick([${N.join(", ")}])`;
    },
    Term_value(y) {
      return y.translate();
    },
    ExprValue_signal(y) {
      return y.translate();
    },
    ExprValue_str(y) {
      return JSON.stringify(rt(y));
    },
    ExprValue_num(y) {
      return y.translate();
    },
    signalWord(y) {
      return C[this.sourceString.toLowerCase()];
    },
    ExprMethod(y, b, _) {
      const S = v(b.sourceString), k = _ && _.numChildren > 0 ? _.child(0).translate() : "";
      return `.${S}(${k})`;
    },
    ExprArgs_numeric(y, b, _) {
      return [y.translate()].concat(
        _ && _.children ? _.children.map((k) => k.translate()) : []
      ).join(", ");
    },
    ExprArgs_quoted(y) {
      return JSON.stringify(rt(y));
    },
    variable(y) {
      return this.sourceString.toLowerCase();
    },
    function(y) {
      return v(this.sourceString.toLowerCase());
    }
  }, registerVocabulary: p };
}
const Vh = "ristavel", Jh = Ls;
function Hh(t = {}) {
  const { extended: e, registerVocabulary: r } = Bc(t.locale), n = fr.createSemantics().addOperation("translate", { ...Ic, ...e });
  return { grammar: fr, semantics: n, registerVocabulary: r, setBaseOffset: Rn, setLocationsEnabled: mr, getLocations: (o, a = 0) => {
    const p = fr.match(o, "Text");
    if (p.failed()) return [];
    const c = mr(!0);
    Rn(a), _c();
    try {
      n(p).translate();
    } catch {
    }
    const d = bc();
    return mr(c), d;
  } };
}
export {
  Hh as createLanguage,
  Jh as locale,
  Vh as name
};
