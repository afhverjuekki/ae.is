function H(r) {
  const e = r || "";
  return function() {
    throw new Error(
      "this method " + e + " is abstract! (it has no implementation in class " + this.constructor.name + ")"
    );
  };
}
function oe(r, e) {
  if (!r)
    throw new Error(e || "Assertion failed");
}
function ke(r, e, t) {
  let n;
  Object.defineProperty(r, e, {
    get() {
      return n || (n = t.call(this)), n;
    }
  });
}
function at(r, e) {
  const t = [];
  for (; e-- > 0; )
    t.push(r());
  return t;
}
function ot(r, e) {
  return new Array(e + 1).join(r);
}
function xe(r, e) {
  return at(() => r, e);
}
function Le(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) {
    const n = r[t];
    r.lastIndexOf(n) !== t && e.indexOf(n) < 0 && e.push(n);
  }
  return e;
}
function ct(r) {
  const e = [];
  return r.forEach((t) => {
    e.indexOf(t) < 0 && e.push(t);
  }), e;
}
function le(r) {
  const e = r[0];
  return e === e.toUpperCase();
}
function lt(r) {
  return !le(r);
}
function ut(r, e, t) {
  return r.length < e ? ot(" ", e - r.length) + r : r;
}
function ue() {
  this.strings = [];
}
ue.prototype.append = function(r) {
  this.strings.push(r);
};
ue.prototype.contents = function() {
  return this.strings.join("");
};
const Ae = (r) => String.fromCodePoint(parseInt(r, 16));
function pt(r) {
  if (r.charAt(0) === "\\")
    switch (r.charAt(1)) {
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
        return Ae(r.slice(2, 4));
      case "u":
        return r.charAt(2) === "{" ? Ae(r.slice(3, -1)) : Ae(r.slice(2, 6));
      default:
        return r.charAt(1);
    }
  else
    return r;
}
function Te(r) {
  if (r == null)
    return String(r);
  const e = Object.prototype.toString.call(r);
  try {
    let t;
    return r.constructor && r.constructor.name ? t = r.constructor.name : e.indexOf("[object ") === 0 ? t = e.slice(8, -1) : t = typeof r, t + ": " + JSON.stringify(String(r));
  } catch {
    return e;
  }
}
function ht(r, e = "unexpected null value") {
  if (r == null)
    throw new Error(e);
  return r;
}
const Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  StringBuffer: ue,
  abstract: H,
  assert: oe,
  checkNotNull: ht,
  copyWithoutDuplicates: ct,
  defineLazyProperty: ke,
  getDuplicates: Le,
  isLexical: lt,
  isSyntactic: le,
  padLeft: ut,
  repeat: xe,
  repeatFn: at,
  repeatStr: ot,
  unescapeCodePoint: pt,
  unexpectedObjToString: Te
}, Symbol.toStringTag, { value: "Module" })), mt = (r) => new RegExp(String.raw`\p{${r}}`, "u"), Ce = Object.fromEntries(
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
  ].map((r) => [r, mt(r)])
);
Ce.Ltmo = /\p{Lt}|\p{Lm}|\p{Lo}/u;
const Ue = Object.fromEntries(
  ["XID_Start", "XID_Continue", "White_Space"].map((r) => [r, mt(r)])
);
class I {
  constructor() {
    if (this.constructor === I)
      throw new Error("PExpr cannot be instantiated -- it's abstract");
  }
  // Set the `source` property to the interval containing the source for this expression.
  withSource(e) {
    return e && (this.source = e.trimmed()), this;
  }
}
const B = Object.create(I.prototype), $ = Object.create(I.prototype);
class M extends I {
  constructor(e) {
    super(), this.obj = e;
  }
}
class G extends I {
  constructor(e, t) {
    super(), this.from = e, this.to = t, this.matchCodePoint = e.length > 1 || t.length > 1;
  }
}
class W extends I {
  constructor(e) {
    super(), this.index = e;
  }
}
class E extends I {
  constructor(e) {
    super(), this.terms = e;
  }
}
class Se extends E {
  constructor(e, t, n) {
    const s = e.rules[t].body;
    super([n, s]), this.superGrammar = e, this.name = t, this.body = n;
  }
}
class be extends E {
  constructor(e, t, n, s) {
    const i = e.rules[t].body;
    super([...n, i, ...s]), this.superGrammar = e, this.ruleName = t, this.expansionPos = n.length;
  }
}
class F extends I {
  constructor(e) {
    super(), this.factors = e;
  }
}
class z extends I {
  constructor(e) {
    super(), this.expr = e;
  }
}
class pe extends z {
}
class me extends z {
}
class ne extends z {
}
pe.prototype.operator = "*";
me.prototype.operator = "+";
ne.prototype.operator = "?";
pe.prototype.minNumMatches = 0;
me.prototype.minNumMatches = 1;
ne.prototype.minNumMatches = 0;
pe.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
me.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
ne.prototype.maxNumMatches = 1;
class T extends I {
  constructor(e) {
    super(), this.expr = e;
  }
}
class V extends I {
  constructor(e) {
    super(), this.expr = e;
  }
}
class Q extends I {
  constructor(e) {
    super(), this.expr = e;
  }
}
class N extends I {
  constructor(e, t = []) {
    super(), this.ruleName = e, this.args = t;
  }
  isSyntactic() {
    return le(this.ruleName);
  }
  // This method just caches the result of `this.toString()` in a non-enumerable property.
  toMemoKey() {
    return this._memoKey || Object.defineProperty(this, "_memoKey", { value: this.toString() }), this._memoKey;
  }
}
class D extends I {
  constructor(e) {
    if (super(), this.categoryOrProp = e, e in Ce)
      this.pattern = Ce[e];
    else if (e in Ue)
      this.pattern = Ue[e];
    else
      throw new Error(
        `Invalid Unicode category or property name: ${JSON.stringify(e)}`
      );
  }
}
function C(r, e) {
  let t;
  return e ? (t = new Error(e.getLineAndColumnMessage() + r), t.shortMessage = r, t.interval = e) : t = new Error(r), t;
}
function Re() {
  return C("Interval sources don't match");
}
function Pt(r) {
  const e = new Error();
  return Object.defineProperty(e, "message", {
    enumerable: !0,
    get() {
      return r.message;
    }
  }), Object.defineProperty(e, "shortMessage", {
    enumerable: !0,
    get() {
      return "Expected " + r.getExpectedText();
    }
  }), e.interval = r.getInterval(), e;
}
function jt(r, e, t) {
  const n = e ? `Grammar ${r} is not declared in namespace '${e}'` : "Undeclared grammar " + r;
  return C(n, t);
}
function Et(r, e) {
  return C("Grammar " + r.name + " is already declared in this namespace");
}
function Ft(r) {
  return C(`Grammar '${r.name}' does not support incremental parsing`);
}
function dt(r, e, t) {
  return C(
    "Rule " + r + " is not declared in grammar " + e,
    t
  );
}
function Tt(r, e, t) {
  return C(
    "Cannot override rule " + r + " because it is not declared in " + e,
    t
  );
}
function Dt(r, e, t) {
  return C(
    "Cannot extend rule " + r + " because it is not declared in " + e,
    t
  );
}
function Ke(r, e, t, n) {
  let s = "Duplicate declaration for rule '" + r + "' in grammar '" + e + "'";
  return e !== t && (s += " (originally declared in '" + t + "')"), C(s, n);
}
function ft(r, e, t, n) {
  return C(
    "Wrong number of parameters for rule " + r + " (expected " + e + ", got " + t + ")",
    n
  );
}
function Mt(r, e, t, n) {
  return C(
    "Wrong number of arguments for rule " + r + " (expected " + e + ", got " + t + ")",
    n
  );
}
function He(r, e, t) {
  return C(
    "Duplicate parameter names in rule " + r + ": " + e.join(", "),
    t
  );
}
function qt(r, e) {
  return C(
    "Invalid parameter to rule " + r + ": " + e + " has arity " + e.getArity() + ", but parameter expressions must have arity 1",
    e.source
  );
}
const Bt = "NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";
function $t(r, e) {
  return C(
    "Cannot apply syntactic rule " + r + " from here (inside a lexical context)",
    e.source
  );
}
function Gt(r) {
  const { ruleName: e } = r;
  return C(
    `applySyntactic is for syntactic rules, but '${e}' is a lexical rule. ` + Bt,
    r.source
  );
}
function Wt(r) {
  return C(
    "applySyntactic is not required here (in a syntactic context)",
    r.source
  );
}
function ze(r, e) {
  return C("Incorrect argument type: expected " + r, e.source);
}
function Ut(r) {
  return C("'...' can appear at most once in a rule body", r.source);
}
function Kt(r) {
  const e = r._node;
  oe(e && e.isNonterminal() && e.ctorName === "escapeChar_unicodeCodePoint");
  const t = r.children.slice(1, -1).map((s) => s.source), n = t[0].coverageWith(...t.slice(1));
  return C(
    `U+${n.contents} is not a valid Unicode code point`,
    n
  );
}
function gt(r, e) {
  const t = e.length > 0 ? e[e.length - 1].args : [];
  let s = "Nullable expression " + r.expr.substituteParams(t) + " is not allowed inside '" + r.operator + "' (possible infinite loop)";
  if (e.length > 0) {
    const i = e.map((a) => new N(a.ruleName, a.args)).join(`
`);
    s += `
Application stack (most recent application last):
` + i;
  }
  return C(s, r.expr.source);
}
function vt(r, e, t, n) {
  return C(
    "Rule " + r + " involves an alternation which has inconsistent arity (expected " + e + ", got " + t + ")",
    n.source
  );
}
function Ht(r) {
  const e = r.map((t) => t.message);
  return C(["Errors:"].concat(e).join(`
- `), r[0].interval);
}
function zt(r, e, t, n) {
  let s = n.slice(0, -1).map((u) => {
    const d = "  " + u[0].name + " > " + u[1];
    return u.length === 3 ? d + " for '" + u[2] + "'" : d;
  }).join(`
`);
  s += `
  ` + e + " > " + r;
  let i = "";
  r === "_iter" && (i = [
    `
NOTE: as of Ohm v16, there is no default action for iteration nodes — see `,
    "  https://ohmjs.org/d/dsa for details."
  ].join(`
`));
  const a = [
    `Missing semantic action for '${r}' in ${t} '${e}'.${i}`,
    "Action stack (most recent call last):",
    s
  ].join(`
`), c = C(a);
  return c.name = "missingSemanticAction", c;
}
function Vt(r) {
  if (r.length === 1)
    throw r[0];
  if (r.length > 1)
    throw Ht(r);
}
function Jt(r) {
  let e = 0;
  return r.map((n) => {
    const s = n.toString();
    return e = Math.max(e, s.length), s;
  }).map((n) => ut(n, e));
}
function Ve(r, e, t) {
  const n = r.length, s = r.slice(0, t), i = r.slice(t + e.length);
  return (s + e + i).substr(0, n);
}
function Qt(...r) {
  const e = this, { offset: t } = e, { repeatStr: n } = Rt, s = new ue();
  s.append("Line " + e.lineNum + ", col " + e.colNum + `:
`);
  const i = Jt([
    e.prevLine == null ? 0 : e.lineNum - 1,
    e.lineNum,
    e.nextLine == null ? 0 : e.lineNum + 1
  ]), a = (v, l, o) => {
    s.append(o + i[v] + " | " + l + `
`);
  };
  e.prevLine != null && a(0, e.prevLine, "  "), a(1, e.line, "> ");
  const c = e.line.length;
  let u = n(" ", c + 1);
  for (let v = 0; v < r.length; ++v) {
    let l = r[v][0], o = r[v][1];
    oe(l >= 0 && l <= o, "range start must be >= 0 and <= end");
    const f = t - e.colNum + 1;
    l = Math.max(0, l - f), o = Math.min(o - f, c), u = Ve(u, n("~", o - l), l);
  }
  const d = 2 + i[1].length + 3;
  return s.append(n(" ", d)), u = Ve(u, "^", e.colNum - 1), s.append(u.replace(/ +$/, "") + `
`), e.nextLine != null && a(2, e.nextLine, "  "), s.contents();
}
let Pe = [];
function It(r) {
  Pe.push(r);
}
function Zt(r) {
  Pe.forEach((e) => {
    e(r);
  }), Pe = null;
}
function De(r, e) {
  let t = 1, n = 1, s = 0, i = 0, a = null, c = null, u = -1;
  for (; s < e; ) {
    const l = r.charAt(s++);
    l === `
` ? (t++, n = 1, u = i, i = s) : l !== "\r" && n++;
  }
  let d = r.indexOf(`
`, i);
  if (d === -1)
    d = r.length;
  else {
    const l = r.indexOf(`
`, d + 1);
    a = l === -1 ? r.slice(d) : r.slice(d, l), a = a.replace(/^\r?\n/, "").replace(/\r$/, "");
  }
  u >= 0 && (c = r.slice(u, i).replace(/\r?\n$/, ""));
  const v = r.slice(i, d).replace(/\r$/, "");
  return {
    offset: e,
    lineNum: t,
    colNum: n,
    line: v,
    prevLine: c,
    nextLine: a,
    toString: Qt
  };
}
function yt(r, e, ...t) {
  return De(r, e).toString(...t);
}
const Je = /* @__PURE__ */ (() => {
  let r = 0;
  return (e) => "" + e + r++;
})();
class q {
  constructor(e, t, n) {
    Object.defineProperty(this, "_sourceString", {
      value: e,
      configurable: !1,
      enumerable: !1,
      writable: !1
    }), this.startIdx = t, this.endIdx = n;
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
    return q.coverage(...e, this);
  }
  collapsedLeft() {
    return new q(this.sourceString, this.startIdx, this.startIdx);
  }
  collapsedRight() {
    return new q(this.sourceString, this.endIdx, this.endIdx);
  }
  getLineAndColumn() {
    return De(this.sourceString, this.startIdx);
  }
  getLineAndColumnMessage() {
    const e = [this.startIdx, this.endIdx];
    return yt(this.sourceString, this.startIdx, e);
  }
  // Returns an array of 0, 1, or 2 intervals that represents the result of the
  // interval difference operation.
  minus(e) {
    if (this.sourceString !== e.sourceString)
      throw Re();
    return this.startIdx === e.startIdx && this.endIdx === e.endIdx ? [] : this.startIdx < e.startIdx && e.endIdx < this.endIdx ? [
      new q(this.sourceString, this.startIdx, e.startIdx),
      new q(this.sourceString, e.endIdx, this.endIdx)
    ] : this.startIdx < e.endIdx && e.endIdx < this.endIdx ? [new q(this.sourceString, e.endIdx, this.endIdx)] : this.startIdx < e.startIdx && e.startIdx < this.endIdx ? [new q(this.sourceString, this.startIdx, e.startIdx)] : [this];
  }
  // Returns a new Interval that has the same extent as this one, but which is relative
  // to `that`, an Interval that fully covers this one.
  relativeTo(e) {
    if (this.sourceString !== e.sourceString)
      throw Re();
    return oe(
      this.startIdx >= e.startIdx && this.endIdx <= e.endIdx,
      "other interval does not cover this one"
    ), new q(
      this.sourceString,
      this.startIdx - e.startIdx,
      this.endIdx - e.startIdx
    );
  }
  // Returns a new Interval which contains the same contents as this one,
  // but with whitespace trimmed from both ends.
  trimmed() {
    const { contents: e } = this, t = this.startIdx + e.match(/^\s*/)[0].length, n = this.endIdx - e.match(/\s*$/)[0].length;
    return new q(this.sourceString, t, n);
  }
  subInterval(e, t) {
    const n = this.startIdx + e;
    return new q(this.sourceString, n, n + t);
  }
}
q.coverage = function(r, ...e) {
  let { startIdx: t, endIdx: n } = r;
  for (const s of e) {
    if (s.sourceString !== r.sourceString)
      throw Re();
    t = Math.min(t, s.startIdx), n = Math.max(n, s.endIdx);
  }
  return new q(r.sourceString, t, n);
};
const Xt = 65535, Yt = 1114111;
class _e {
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
    return e > Xt && (this.pos += 1), this.examinedLength = Math.max(this.examinedLength, this.pos), e;
  }
  matchString(e, t) {
    let n;
    if (t) {
      for (n = 0; n < e.length; n++) {
        const s = this.next(), i = e[n];
        if (s == null || s.toUpperCase() !== i.toUpperCase())
          return !1;
      }
      return !0;
    }
    for (n = 0; n < e.length; n++)
      if (this.next() !== e[n])
        return !1;
    return !0;
  }
  sourceSlice(e, t) {
    return this.source.slice(e, t);
  }
  interval(e, t) {
    return new q(this.source, e, t || this.pos);
  }
}
class xt {
  constructor(e, t, n, s, i, a, c) {
    this.matcher = e, this.input = t, this.startExpr = n, this._cst = s, this._cstOffset = i, this._rightmostFailurePosition = a, this._rightmostFailures = c, this.failed() && (ke(this, "message", function() {
      const u = "Expected " + this.getExpectedText();
      return yt(this.input, this.getRightmostFailurePosition()) + u;
    }), ke(this, "shortMessage", function() {
      const u = "expected " + this.getExpectedText(), d = De(
        this.input,
        this.getRightmostFailurePosition()
      );
      return "Line " + d.lineNum + ", col " + d.colNum + ": " + u;
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
    const e = new ue();
    let t = this.getRightmostFailures();
    t = t.filter((n) => !n.isFluffy());
    for (let n = 0; n < t.length; n++)
      n > 0 && (n === t.length - 1 ? e.append(t.length > 2 ? ", or " : " or ") : e.append(", ")), e.append(t[n].toString());
    return e.contents();
  }
  getInterval() {
    const e = this.getRightmostFailurePosition();
    return new q(this.input, e, e);
  }
}
class er {
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
  startLeftRecursion(e, t) {
    t.isLeftRecursion = !0, t.headApplication = e, t.nextLeftRecursion = this.currentLeftRecursion, this.currentLeftRecursion = t;
    const { applicationMemoKeyStack: n } = this, s = n.indexOf(e.toMemoKey()) + 1, i = n.slice(
      s
    );
    t.isInvolved = function(a) {
      return i.indexOf(a) >= 0;
    }, t.updateInvolvedApplicationMemoKeys = function() {
      for (let a = s; a < n.length; a++) {
        const c = n[a];
        this.isInvolved(c) || i.push(c);
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
    const { applicationMemoKeyStack: t } = this;
    for (let n = 0; n < t.length; n++) {
      const s = t[n];
      if (e.isInvolved(s))
        return !1;
    }
    return !0;
  }
  memoize(e, t) {
    return this.memo[e] = t, this.maxExaminedLength = Math.max(this.maxExaminedLength, t.examinedLength), this.maxRightmostFailureOffset = Math.max(
      this.maxRightmostFailureOffset,
      t.rightmostFailureOffset
    ), t;
  }
  clearObsoleteEntries(e, t) {
    if (e + this.maxExaminedLength <= t)
      return;
    const { memo: n } = this;
    this.maxExaminedLength = 0, this.maxRightmostFailureOffset = -1, Object.keys(n).forEach((s) => {
      const i = n[s];
      e + i.examinedLength > t ? delete n[s] : (this.maxExaminedLength = Math.max(this.maxExaminedLength, i.examinedLength), this.maxRightmostFailureOffset = Math.max(
        this.maxRightmostFailureOffset,
        i.rightmostFailureOffset
      ));
    });
  }
}
const tr = "✗", rr = "✓", nr = "⋅", sr = "⇒", ir = "␉", ar = "␊", or = "␍", je = {
  succeeded: 1,
  isRootNode: 2,
  isImplicitSpaces: 4,
  isMemoized: 8,
  isHeadOfLeftRecursion: 16,
  terminatesLR: 32
};
function cr(r) {
  return xe(" ", r).join("");
}
function lr(r, e, t) {
  const n = St(r.slice(e, e + t));
  return n.length < t ? n + xe(" ", t - n.length).join("") : n;
}
function St(r) {
  return typeof r == "string" ? r.replace(/ /g, nr).replace(/\t/g, ir).replace(/\n/g, ar).replace(/\r/g, or) : String(r);
}
class ae {
  constructor(e, t, n, s, i, a, c) {
    this.input = e, this.pos = this.pos1 = t, this.pos2 = n, this.source = new q(e, t, n), this.expr = s, this.bindings = a, this.children = c || [], this.terminatingLREntry = null, this._flags = i ? je.succeeded : 0;
  }
  get displayString() {
    return this.expr.toDisplayString();
  }
  clone() {
    return this.cloneWithExpr(this.expr);
  }
  cloneWithExpr(e) {
    const t = new ae(
      this.input,
      this.pos,
      this.pos2,
      e,
      this.succeeded,
      this.bindings,
      this.children
    );
    return t.isHeadOfLeftRecursion = this.isHeadOfLeftRecursion, t.isImplicitSpaces = this.isImplicitSpaces, t.isMemoized = this.isMemoized, t.isRootNode = this.isRootNode, t.terminatesLR = this.terminatesLR, t.terminatingLREntry = this.terminatingLREntry, t;
  }
  // Record the trace information for the terminating condition of the LR loop.
  recordLRTermination(e, t) {
    this.terminatingLREntry = new ae(
      this.input,
      this.pos,
      this.pos2,
      this.expr,
      !1,
      [t],
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
  walk(e, t) {
    let n = e;
    typeof n == "function" && (n = { enter: n });
    function s(i, a, c) {
      let u = !0;
      n.enter && n.enter.call(t, i, a, c) === ae.prototype.SKIP && (u = !1), u && (i.children.forEach((d) => {
        s(d, i, c + 1);
      }), n.exit && n.exit.call(t, i, a, c));
    }
    this.isRootNode ? this.children.forEach((i) => {
      s(i, null, 0);
    }) : s(this, null, 0);
  }
  // Return a string representation of the trace.
  // Sample:
  //     12⋅+⋅2⋅*⋅3 ✓ exp ⇒  "12"
  //     12⋅+⋅2⋅*⋅3   ✓ addExp (LR) ⇒  "12"
  //     12⋅+⋅2⋅*⋅3       ✗ addExp_plus
  toString() {
    const e = new ue();
    return this.walk((t, n, s) => {
      if (!t)
        return this.SKIP;
      if (t.expr.constructor.name !== "Alt") {
        if (e.append(lr(t.input, t.pos, 10) + cr(s * 2 + 1)), e.append((t.succeeded ? rr : tr) + " " + t.displayString), t.isHeadOfLeftRecursion && e.append(" (LR)"), t.succeeded) {
          const a = St(t.source.contents);
          e.append(" " + sr + "  "), e.append(typeof a == "string" ? '"' + a + '"' : a);
        }
        e.append(`
`);
      }
    }), e.contents();
  }
}
ae.prototype.SKIP = {};
Object.keys(je).forEach((r) => {
  const e = je[r];
  Object.defineProperty(ae.prototype, r, {
    get() {
      return (this._flags & e) !== 0;
    },
    set(t) {
      t ? this._flags |= e : this._flags &= ~e;
    }
  });
});
I.prototype.allowsSkippingPrecedingSpace = H("allowsSkippingPrecedingSpace");
B.allowsSkippingPrecedingSpace = $.allowsSkippingPrecedingSpace = N.prototype.allowsSkippingPrecedingSpace = M.prototype.allowsSkippingPrecedingSpace = G.prototype.allowsSkippingPrecedingSpace = D.prototype.allowsSkippingPrecedingSpace = function() {
  return !0;
};
E.prototype.allowsSkippingPrecedingSpace = z.prototype.allowsSkippingPrecedingSpace = Q.prototype.allowsSkippingPrecedingSpace = V.prototype.allowsSkippingPrecedingSpace = T.prototype.allowsSkippingPrecedingSpace = W.prototype.allowsSkippingPrecedingSpace = F.prototype.allowsSkippingPrecedingSpace = function() {
  return !1;
};
let de;
It((r) => {
  de = r;
});
let Ie;
I.prototype.assertAllApplicationsAreValid = function(r, e) {
  Ie = 0, this._assertAllApplicationsAreValid(r, e);
};
I.prototype._assertAllApplicationsAreValid = H(
  "_assertAllApplicationsAreValid"
);
B._assertAllApplicationsAreValid = $._assertAllApplicationsAreValid = M.prototype._assertAllApplicationsAreValid = G.prototype._assertAllApplicationsAreValid = W.prototype._assertAllApplicationsAreValid = D.prototype._assertAllApplicationsAreValid = function(r, e) {
};
Q.prototype._assertAllApplicationsAreValid = function(r, e) {
  Ie++, this.expr._assertAllApplicationsAreValid(r, e), Ie--;
};
E.prototype._assertAllApplicationsAreValid = function(r, e) {
  for (let t = 0; t < this.terms.length; t++)
    this.terms[t]._assertAllApplicationsAreValid(r, e);
};
F.prototype._assertAllApplicationsAreValid = function(r, e) {
  for (let t = 0; t < this.factors.length; t++)
    this.factors[t]._assertAllApplicationsAreValid(r, e);
};
z.prototype._assertAllApplicationsAreValid = T.prototype._assertAllApplicationsAreValid = V.prototype._assertAllApplicationsAreValid = function(r, e) {
  this.expr._assertAllApplicationsAreValid(r, e);
};
N.prototype._assertAllApplicationsAreValid = function(r, e, t = !1) {
  const n = e.rules[this.ruleName], s = le(r) && Ie === 0;
  if (!n)
    throw dt(this.ruleName, e.name, this.source);
  if (!t && le(this.ruleName) && !s)
    throw $t(this.ruleName, this);
  const i = this.args.length, a = n.formals.length;
  if (i !== a)
    throw Mt(this.ruleName, a, i, this.source);
  const c = de && n === de.rules.applySyntactic;
  if (de && n === de.rules.caseInsensitive && !(this.args[0] instanceof M))
    throw ze('a Terminal (e.g. "abc")', this.args[0]);
  if (c) {
    const d = this.args[0];
    if (!(d instanceof N))
      throw ze("a syntactic rule application", d);
    if (!le(d.ruleName))
      throw Gt(d);
    if (s)
      throw Wt(this);
  }
  this.args.forEach((d) => {
    if (d._assertAllApplicationsAreValid(r, e, c), d.getArity() !== 1)
      throw qt(this.ruleName, d);
  });
};
I.prototype.assertChoicesHaveUniformArity = H(
  "assertChoicesHaveUniformArity"
);
B.assertChoicesHaveUniformArity = $.assertChoicesHaveUniformArity = M.prototype.assertChoicesHaveUniformArity = G.prototype.assertChoicesHaveUniformArity = W.prototype.assertChoicesHaveUniformArity = Q.prototype.assertChoicesHaveUniformArity = D.prototype.assertChoicesHaveUniformArity = function(r) {
};
E.prototype.assertChoicesHaveUniformArity = function(r) {
  if (this.terms.length === 0)
    return;
  const e = this.terms[0].getArity();
  for (let t = 0; t < this.terms.length; t++) {
    const n = this.terms[t];
    n.assertChoicesHaveUniformArity();
    const s = n.getArity();
    if (e !== s)
      throw vt(r, e, s, n);
  }
};
Se.prototype.assertChoicesHaveUniformArity = function(r) {
  const e = this.terms[0].getArity(), t = this.terms[1].getArity();
  if (e !== t)
    throw vt(r, t, e, this.terms[0]);
};
F.prototype.assertChoicesHaveUniformArity = function(r) {
  for (let e = 0; e < this.factors.length; e++)
    this.factors[e].assertChoicesHaveUniformArity(r);
};
z.prototype.assertChoicesHaveUniformArity = function(r) {
  this.expr.assertChoicesHaveUniformArity(r);
};
T.prototype.assertChoicesHaveUniformArity = function(r) {
};
V.prototype.assertChoicesHaveUniformArity = function(r) {
  this.expr.assertChoicesHaveUniformArity(r);
};
N.prototype.assertChoicesHaveUniformArity = function(r) {
};
I.prototype.assertIteratedExprsAreNotNullable = H(
  "assertIteratedExprsAreNotNullable"
);
B.assertIteratedExprsAreNotNullable = $.assertIteratedExprsAreNotNullable = M.prototype.assertIteratedExprsAreNotNullable = G.prototype.assertIteratedExprsAreNotNullable = W.prototype.assertIteratedExprsAreNotNullable = D.prototype.assertIteratedExprsAreNotNullable = function(r) {
};
E.prototype.assertIteratedExprsAreNotNullable = function(r) {
  for (let e = 0; e < this.terms.length; e++)
    this.terms[e].assertIteratedExprsAreNotNullable(r);
};
F.prototype.assertIteratedExprsAreNotNullable = function(r) {
  for (let e = 0; e < this.factors.length; e++)
    this.factors[e].assertIteratedExprsAreNotNullable(r);
};
z.prototype.assertIteratedExprsAreNotNullable = function(r) {
  if (this.expr.assertIteratedExprsAreNotNullable(r), this.expr.isNullable(r))
    throw gt(this, []);
};
ne.prototype.assertIteratedExprsAreNotNullable = T.prototype.assertIteratedExprsAreNotNullable = V.prototype.assertIteratedExprsAreNotNullable = Q.prototype.assertIteratedExprsAreNotNullable = function(r) {
  this.expr.assertIteratedExprsAreNotNullable(r);
};
N.prototype.assertIteratedExprsAreNotNullable = function(r) {
  this.args.forEach((e) => {
    e.assertIteratedExprsAreNotNullable(r);
  });
};
class Me {
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
    const t = this.indexOfChild(e);
    if (t < 0)
      throw new Error("Node.childBefore() called w/ an argument that is not a child");
    if (t === 0)
      throw new Error("cannot get child before first child");
    return this.childAt(t - 1);
  }
  childAfter(e) {
    const t = this.indexOfChild(e);
    if (t < 0)
      throw new Error("Node.childAfter() called w/ an argument that is not a child");
    if (t === this.numChildren() - 1)
      throw new Error("cannot get child after last child");
    return this.childAt(t + 1);
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
class he extends Me {
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
class ur extends Me {
  constructor(e, t, n, s) {
    super(s), this.ruleName = e, this.children = t, this.childOffsets = n;
  }
  get ctorName() {
    return this.ruleName;
  }
  isNonterminal() {
    return !0;
  }
  isLexical() {
    return lt(this.ctorName);
  }
  isSyntactic() {
    return le(this.ctorName);
  }
}
class bt extends Me {
  constructor(e, t, n, s) {
    super(n), this.children = e, this.childOffsets = t, this.optional = s;
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
I.prototype.eval = H("eval");
B.eval = function(r) {
  const { inputStream: e } = r, t = e.pos, n = e.nextCodePoint();
  return n !== void 0 ? (r.pushBinding(new he(String.fromCodePoint(n).length), t), !0) : (r.processFailure(t, this), !1);
};
$.eval = function(r) {
  const { inputStream: e } = r, t = e.pos;
  return e.atEnd() ? (r.pushBinding(new he(0), t), !0) : (r.processFailure(t, this), !1);
};
M.prototype.eval = function(r) {
  const { inputStream: e } = r, t = e.pos;
  return e.matchString(this.obj) ? (r.pushBinding(new he(this.obj.length), t), !0) : (r.processFailure(t, this), !1);
};
G.prototype.eval = function(r) {
  const { inputStream: e } = r, t = e.pos, n = this.matchCodePoint ? e.nextCodePoint() : e.nextCharCode();
  return n !== void 0 && this.from.codePointAt(0) <= n && n <= this.to.codePointAt(0) ? (r.pushBinding(new he(String.fromCodePoint(n).length), t), !0) : (r.processFailure(t, this), !1);
};
W.prototype.eval = function(r) {
  return r.eval(r.currentApplication().args[this.index]);
};
Q.prototype.eval = function(r) {
  r.enterLexifiedContext();
  const e = r.eval(this.expr);
  return r.exitLexifiedContext(), e;
};
E.prototype.eval = function(r) {
  for (let e = 0; e < this.terms.length; e++)
    if (r.eval(this.terms[e]))
      return !0;
  return !1;
};
F.prototype.eval = function(r) {
  for (let e = 0; e < this.factors.length; e++) {
    const t = this.factors[e];
    if (!r.eval(t))
      return !1;
  }
  return !0;
};
z.prototype.eval = function(r) {
  const { inputStream: e } = r, t = e.pos, n = this.getArity(), s = [], i = [];
  for (; s.length < n; )
    s.push([]), i.push([]);
  let a = 0, c = t, u;
  for (; a < this.maxNumMatches && r.eval(this.expr); ) {
    if (e.pos === c)
      throw gt(this, r._applicationStack);
    c = e.pos, a++;
    const o = r._bindings.splice(r._bindings.length - n, n), f = r._bindingOffsets.splice(
      r._bindingOffsets.length - n,
      n
    );
    for (u = 0; u < o.length; u++)
      s[u].push(o[u]), i[u].push(f[u]);
  }
  if (a < this.minNumMatches)
    return !1;
  let d = r.posToOffset(t), v = 0;
  if (a > 0) {
    const o = s[n - 1], f = i[n - 1], y = f[f.length - 1] + o[o.length - 1].matchLength;
    d = i[0][0], v = y - d;
  }
  const l = this instanceof ne;
  for (u = 0; u < s.length; u++)
    r._bindings.push(
      new bt(s[u], i[u], v, l)
    ), r._bindingOffsets.push(d);
  return !0;
};
T.prototype.eval = function(r) {
  const { inputStream: e } = r, t = e.pos;
  r.pushFailuresInfo();
  const n = r.eval(this.expr);
  return r.popFailuresInfo(), n ? (r.processFailure(t, this), !1) : (e.pos = t, !0);
};
V.prototype.eval = function(r) {
  const { inputStream: e } = r, t = e.pos;
  return r.eval(this.expr) ? (e.pos = t, !0) : !1;
};
N.prototype.eval = function(r) {
  const e = r.currentApplication(), t = e ? e.args : [], n = this.substituteParams(t), s = r.getCurrentPosInfo();
  if (s.isActive(n))
    return n.handleCycle(r);
  const i = n.toMemoKey(), a = s.memo[i];
  if (a && s.shouldUseMemoizedResult(a)) {
    if (r.hasNecessaryInfo(a))
      return r.useMemoizedResult(r.inputStream.pos, a);
    delete s.memo[i];
  }
  return n.reallyEval(r);
};
N.prototype.handleCycle = function(r) {
  const e = r.getCurrentPosInfo(), { currentLeftRecursion: t } = e, n = this.toMemoKey();
  let s = e.memo[n];
  return t && t.headApplication.toMemoKey() === n ? s.updateInvolvedApplicationMemoKeys() : s || (s = e.memoize(n, {
    matchLength: 0,
    examinedLength: 0,
    value: !1,
    rightmostFailureOffset: -1
  }), e.startLeftRecursion(this, s)), r.useMemoizedResult(r.inputStream.pos, s);
};
N.prototype.reallyEval = function(r) {
  const { inputStream: e } = r, t = e.pos, n = r.getCurrentPosInfo(), s = r.grammar.rules[this.ruleName], { body: i } = s, { description: a } = s;
  r.enterApplication(n, this), a && r.pushFailuresInfo();
  const c = e.examinedLength;
  e.examinedLength = 0;
  let u = this.evalOnce(i, r);
  const d = n.currentLeftRecursion, v = this.toMemoKey(), l = d && d.headApplication.toMemoKey() === v;
  let o;
  r.doNotMemoize ? r.doNotMemoize = !1 : l ? (u = this.growSeedResult(i, r, t, d, u), n.endLeftRecursion(), o = d, o.examinedLength = e.examinedLength - t, o.rightmostFailureOffset = r._getRightmostFailureOffset(), n.memoize(v, o)) : (!d || !d.isInvolved(v)) && (o = n.memoize(v, {
    matchLength: e.pos - t,
    examinedLength: e.examinedLength - t,
    value: u,
    failuresAtRightmostPosition: r.cloneRecordedFailures(),
    rightmostFailureOffset: r._getRightmostFailureOffset()
  }));
  const f = !!u;
  if (a && (r.popFailuresInfo(), f || r.processFailure(t, this), o && (o.failuresAtRightmostPosition = r.cloneRecordedFailures(), o.rightmostFailureOffset = r._getRightmostFailureOffset())), r.isTracing() && o) {
    const y = r.getTraceEntry(t, this, f, f ? [u] : []);
    l && (oe(y.terminatingLREntry != null || !f), y.isHeadOfLeftRecursion = !0), o.traceEntry = y;
  }
  return e.examinedLength = Math.max(
    e.examinedLength,
    c
  ), r.exitApplication(n, u), f;
};
N.prototype.evalOnce = function(r, e) {
  const { inputStream: t } = e, n = t.pos;
  if (e.eval(r)) {
    const s = r.getArity(), i = e._bindings.splice(e._bindings.length - s, s), a = e._bindingOffsets.splice(e._bindingOffsets.length - s, s), c = t.pos - n;
    return new ur(this.ruleName, i, a, c);
  } else
    return !1;
};
N.prototype.growSeedResult = function(r, e, t, n, s) {
  if (!s)
    return !1;
  const { inputStream: i } = e;
  for (; ; ) {
    if (n.matchLength = i.pos - t, n.value = s, n.failuresAtRightmostPosition = e.cloneRecordedFailures(), e.isTracing()) {
      const a = e.trace[e.trace.length - 1];
      n.traceEntry = new ae(
        e.input,
        t,
        i.pos,
        this,
        !0,
        [s],
        [a.clone()]
      );
    }
    if (i.pos = t, s = this.evalOnce(r, e), i.pos - t <= n.matchLength)
      break;
    e.isTracing() && e.trace.splice(-2, 1);
  }
  return e.isTracing() && n.traceEntry.recordLRTermination(e.trace.pop(), s), i.pos = t + n.matchLength, n.value;
};
D.prototype.eval = function(r) {
  const { inputStream: e } = r, t = e.pos, n = e.nextCodePoint();
  if (n !== void 0 && n <= Yt) {
    const s = String.fromCodePoint(n);
    if (this.pattern.test(s))
      return r.pushBinding(new he(s.length), t), !0;
  }
  return r.processFailure(t, this), !1;
};
I.prototype.getArity = H("getArity");
B.getArity = $.getArity = M.prototype.getArity = G.prototype.getArity = W.prototype.getArity = N.prototype.getArity = D.prototype.getArity = function() {
  return 1;
};
E.prototype.getArity = function() {
  return this.terms.length === 0 ? 0 : this.terms[0].getArity();
};
F.prototype.getArity = function() {
  let r = 0;
  for (let e = 0; e < this.factors.length; e++)
    r += this.factors[e].getArity();
  return r;
};
z.prototype.getArity = function() {
  return this.expr.getArity();
};
T.prototype.getArity = function() {
  return 0;
};
V.prototype.getArity = Q.prototype.getArity = function() {
  return this.expr.getArity();
};
function ee(r, e) {
  const t = {};
  if (r.source && e) {
    const n = r.source.relativeTo(e);
    t.sourceInterval = [n.startIdx, n.endIdx];
  }
  return t;
}
I.prototype.outputRecipe = H("outputRecipe");
B.outputRecipe = function(r, e) {
  return ["any", ee(this, e)];
};
$.outputRecipe = function(r, e) {
  return ["end", ee(this, e)];
};
M.prototype.outputRecipe = function(r, e) {
  return ["terminal", ee(this, e), this.obj];
};
G.prototype.outputRecipe = function(r, e) {
  return ["range", ee(this, e), this.from, this.to];
};
W.prototype.outputRecipe = function(r, e) {
  return ["param", ee(this, e), this.index];
};
E.prototype.outputRecipe = function(r, e) {
  return ["alt", ee(this, e)].concat(
    this.terms.map((t) => t.outputRecipe(r, e))
  );
};
Se.prototype.outputRecipe = function(r, e) {
  return this.terms[0].outputRecipe(r, e);
};
be.prototype.outputRecipe = function(r, e) {
  const t = this.terms.slice(0, this.expansionPos), n = this.terms.slice(this.expansionPos + 1);
  return [
    "splice",
    ee(this, e),
    t.map((s) => s.outputRecipe(r, e)),
    n.map((s) => s.outputRecipe(r, e))
  ];
};
F.prototype.outputRecipe = function(r, e) {
  return ["seq", ee(this, e)].concat(
    this.factors.map((t) => t.outputRecipe(r, e))
  );
};
pe.prototype.outputRecipe = me.prototype.outputRecipe = ne.prototype.outputRecipe = T.prototype.outputRecipe = V.prototype.outputRecipe = Q.prototype.outputRecipe = function(r, e) {
  return [
    this.constructor.name.toLowerCase(),
    ee(this, e),
    this.expr.outputRecipe(r, e)
  ];
};
N.prototype.outputRecipe = function(r, e) {
  return [
    "app",
    ee(this, e),
    this.ruleName,
    this.args.map((t) => t.outputRecipe(r, e))
  ];
};
D.prototype.outputRecipe = function(r, e) {
  return ["unicodeChar", ee(this, e), this.categoryOrProp];
};
I.prototype.introduceParams = H("introduceParams");
B.introduceParams = $.introduceParams = M.prototype.introduceParams = G.prototype.introduceParams = W.prototype.introduceParams = D.prototype.introduceParams = function(r) {
  return this;
};
E.prototype.introduceParams = function(r) {
  return this.terms.forEach((e, t, n) => {
    n[t] = e.introduceParams(r);
  }), this;
};
F.prototype.introduceParams = function(r) {
  return this.factors.forEach((e, t, n) => {
    n[t] = e.introduceParams(r);
  }), this;
};
z.prototype.introduceParams = T.prototype.introduceParams = V.prototype.introduceParams = Q.prototype.introduceParams = function(r) {
  return this.expr = this.expr.introduceParams(r), this;
};
N.prototype.introduceParams = function(r) {
  const e = r.indexOf(this.ruleName);
  if (e >= 0) {
    if (this.args.length > 0)
      throw new Error("Parameterized rules cannot be passed as arguments to another rule.");
    return new W(e).withSource(this.source);
  } else
    return this.args.forEach((t, n, s) => {
      s[n] = t.introduceParams(r);
    }), this;
};
I.prototype.isNullable = function(r) {
  return this._isNullable(r, /* @__PURE__ */ Object.create(null));
};
I.prototype._isNullable = H("_isNullable");
B._isNullable = G.prototype._isNullable = W.prototype._isNullable = me.prototype._isNullable = D.prototype._isNullable = function(r, e) {
  return !1;
};
$._isNullable = function(r, e) {
  return !0;
};
M.prototype._isNullable = function(r, e) {
  return typeof this.obj == "string" ? this.obj === "" : !1;
};
E.prototype._isNullable = function(r, e) {
  return this.terms.length === 0 || this.terms.some((t) => t._isNullable(r, e));
};
F.prototype._isNullable = function(r, e) {
  return this.factors.every((t) => t._isNullable(r, e));
};
pe.prototype._isNullable = ne.prototype._isNullable = T.prototype._isNullable = V.prototype._isNullable = function(r, e) {
  return !0;
};
Q.prototype._isNullable = function(r, e) {
  return this.expr._isNullable(r, e);
};
N.prototype._isNullable = function(r, e) {
  const t = this.toMemoKey();
  if (!Object.prototype.hasOwnProperty.call(e, t)) {
    const { body: n } = r.rules[this.ruleName], s = n.substituteParams(this.args);
    e[t] = !1, e[t] = s._isNullable(r, e);
  }
  return e[t];
};
I.prototype.substituteParams = H("substituteParams");
B.substituteParams = $.substituteParams = M.prototype.substituteParams = G.prototype.substituteParams = D.prototype.substituteParams = function(r) {
  return this;
};
W.prototype.substituteParams = function(r) {
  return ht(r[this.index]);
};
E.prototype.substituteParams = function(r) {
  return new E(this.terms.map((e) => e.substituteParams(r)));
};
F.prototype.substituteParams = function(r) {
  return new F(this.factors.map((e) => e.substituteParams(r)));
};
z.prototype.substituteParams = T.prototype.substituteParams = V.prototype.substituteParams = Q.prototype.substituteParams = function(r) {
  return new this.constructor(this.expr.substituteParams(r));
};
N.prototype.substituteParams = function(r) {
  if (this.args.length === 0)
    return this;
  {
    const e = this.args.map((t) => t.substituteParams(r));
    return new N(this.ruleName, e);
  }
};
function Qe(r) {
  return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(r);
}
function qe(r) {
  const e = /* @__PURE__ */ Object.create(null);
  r.forEach((t) => {
    e[t] = (e[t] || 0) + 1;
  }), Object.keys(e).forEach((t) => {
    if (e[t] <= 1)
      return;
    let n = 1;
    r.forEach((s, i) => {
      s === t && (r[i] = s + "_" + n++);
    });
  });
}
I.prototype.toArgumentNameList = H("toArgumentNameList");
B.toArgumentNameList = function(r, e) {
  return ["any"];
};
$.toArgumentNameList = function(r, e) {
  return ["end"];
};
M.prototype.toArgumentNameList = function(r, e) {
  return typeof this.obj == "string" && /^[_a-zA-Z0-9]+$/.test(this.obj) ? ["_" + this.obj] : ["$" + r];
};
G.prototype.toArgumentNameList = function(r, e) {
  let t = this.from + "_to_" + this.to;
  return Qe(t) || (t = "_" + t), Qe(t) || (t = "$" + r), [t];
};
E.prototype.toArgumentNameList = function(r, e) {
  const t = this.terms.map(
    (i) => i.toArgumentNameList(r, !0)
  ), n = [], s = t[0].length;
  for (let i = 0; i < s; i++) {
    const a = [];
    for (let u = 0; u < this.terms.length; u++)
      a.push(t[u][i]);
    const c = ct(a);
    n.push(c.join("_or_"));
  }
  return e || qe(n), n;
};
F.prototype.toArgumentNameList = function(r, e) {
  let t = [];
  return this.factors.forEach((n) => {
    const s = n.toArgumentNameList(r, !0);
    t = t.concat(s), r += s.length;
  }), e || qe(t), t;
};
z.prototype.toArgumentNameList = function(r, e) {
  const t = this.expr.toArgumentNameList(r, e).map(
    (n) => n[n.length - 1] === "s" ? n + "es" : n + "s"
  );
  return e || qe(t), t;
};
ne.prototype.toArgumentNameList = function(r, e) {
  return this.expr.toArgumentNameList(r, e).map((t) => "opt" + t[0].toUpperCase() + t.slice(1));
};
T.prototype.toArgumentNameList = function(r, e) {
  return [];
};
V.prototype.toArgumentNameList = Q.prototype.toArgumentNameList = function(r, e) {
  return this.expr.toArgumentNameList(r, e);
};
N.prototype.toArgumentNameList = function(r, e) {
  return [this.ruleName];
};
D.prototype.toArgumentNameList = function(r, e) {
  return ["$" + r];
};
W.prototype.toArgumentNameList = function(r, e) {
  return ["param" + this.index];
};
I.prototype.toDisplayString = H("toDisplayString");
E.prototype.toDisplayString = F.prototype.toDisplayString = function() {
  return this.source ? this.source.trimmed().contents : "[" + this.constructor.name + "]";
};
B.toDisplayString = $.toDisplayString = z.prototype.toDisplayString = T.prototype.toDisplayString = V.prototype.toDisplayString = Q.prototype.toDisplayString = M.prototype.toDisplayString = G.prototype.toDisplayString = W.prototype.toDisplayString = function() {
  return this.toString();
};
N.prototype.toDisplayString = function() {
  if (this.args.length > 0) {
    const r = this.args.map((e) => e.toDisplayString());
    return this.ruleName + "<" + r.join(",") + ">";
  } else
    return this.ruleName;
};
D.prototype.toDisplayString = function() {
  return "Unicode [" + this.categoryOrProp + "] character";
};
function pr(r) {
  return r === "description" || r === "string" || r === "code";
}
class Z {
  constructor(e, t, n) {
    if (!pr(n))
      throw new Error("invalid Failure type: " + n);
    this.pexpr = e, this.text = t, this.type = n, this.fluffy = !1;
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
    const e = new Z(this.pexpr, this.text, this.type);
    return this.isFluffy() && e.makeFluffy(), e;
  }
  toKey() {
    return this.toString() + "#" + this.type;
  }
}
I.prototype.toFailure = H("toFailure");
B.toFailure = function(r) {
  return new Z(this, "any object", "description");
};
$.toFailure = function(r) {
  return new Z(this, "end of input", "description");
};
M.prototype.toFailure = function(r) {
  return new Z(this, this.obj, "string");
};
G.prototype.toFailure = function(r) {
  return new Z(this, JSON.stringify(this.from) + ".." + JSON.stringify(this.to), "code");
};
T.prototype.toFailure = function(r) {
  const e = this.expr === B ? "nothing" : "not " + this.expr.toFailure(r);
  return new Z(this, e, "description");
};
V.prototype.toFailure = function(r) {
  return this.expr.toFailure(r);
};
N.prototype.toFailure = function(r) {
  let { description: e } = r.rules[this.ruleName];
  return e || (e = (/^[aeiouAEIOU]/.test(this.ruleName) ? "an" : "a") + " " + this.ruleName), new Z(this, e, "description");
};
D.prototype.toFailure = function(r) {
  return new Z(this, "a Unicode [" + this.categoryOrProp + "] character", "description");
};
E.prototype.toFailure = function(r) {
  const t = "(" + this.terms.map((n) => n.toFailure(r)).join(" or ") + ")";
  return new Z(this, t, "description");
};
F.prototype.toFailure = function(r) {
  const t = "(" + this.factors.map((n) => n.toFailure(r)).join(" ") + ")";
  return new Z(this, t, "description");
};
z.prototype.toFailure = function(r) {
  const e = "(" + this.expr.toFailure(r) + this.operator + ")";
  return new Z(this, e, "description");
};
I.prototype.toString = H("toString");
B.toString = function() {
  return "any";
};
$.toString = function() {
  return "end";
};
M.prototype.toString = function() {
  return JSON.stringify(this.obj);
};
G.prototype.toString = function() {
  return JSON.stringify(this.from) + ".." + JSON.stringify(this.to);
};
W.prototype.toString = function() {
  return "$" + this.index;
};
Q.prototype.toString = function() {
  return "#(" + this.expr.toString() + ")";
};
E.prototype.toString = function() {
  return this.terms.length === 1 ? this.terms[0].toString() : "(" + this.terms.map((r) => r.toString()).join(" | ") + ")";
};
F.prototype.toString = function() {
  return this.factors.length === 1 ? this.factors[0].toString() : "(" + this.factors.map((r) => r.toString()).join(" ") + ")";
};
z.prototype.toString = function() {
  return this.expr + this.operator;
};
T.prototype.toString = function() {
  return "~" + this.expr;
};
V.prototype.toString = function() {
  return "&" + this.expr;
};
N.prototype.toString = function() {
  if (this.args.length > 0) {
    const r = this.args.map((e) => e.toString());
    return this.ruleName + "<" + r.join(",") + ">";
  } else
    return this.ruleName;
};
D.prototype.toString = function() {
  return "\\p{" + this.categoryOrProp + "}";
};
class Be extends I {
  constructor(e) {
    super(), this.obj = e;
  }
  _getString(e) {
    const t = e.currentApplication().args[this.obj.index];
    return oe(t instanceof M, "expected a Terminal expression"), t.obj;
  }
  // Implementation of the PExpr API
  allowsSkippingPrecedingSpace() {
    return !0;
  }
  eval(e) {
    const { inputStream: t } = e, n = t.pos, s = this._getString(e);
    return t.matchString(s, !0) ? (e.pushBinding(new he(s.length), n), !0) : (e.processFailure(n, this), !1);
  }
  getArity() {
    return 1;
  }
  substituteParams(e) {
    return new Be(this.obj.substituteParams(e));
  }
  toDisplayString() {
    return this.obj.toDisplayString() + " (case-insensitive)";
  }
  toFailure(e) {
    return new Z(
      this,
      this.obj.toFailure(e) + " (case-insensitive)",
      "description"
    );
  }
  _isNullable(e, t) {
    return this.obj._isNullable(e, t);
  }
}
let _t;
It((r) => {
  _t = r.rules.applySyntactic.body;
});
const Ne = new N("spaces");
class hr {
  constructor(e, t, n) {
    this.matcher = e, this.startExpr = t, this.grammar = e.grammar, this.input = e.getInput(), this.inputStream = new _e(this.input), this.memoTable = e._memoTable, this.userData = void 0, this.doNotMemoize = !1, this._bindings = [], this._bindingOffsets = [], this._applicationStack = [], this._posStack = [0], this.inLexifiedContextStack = [!1], this.rightmostFailurePosition = -1, this._rightmostFailurePositionStack = [], this._recordedFailuresStack = [], n !== void 0 && (this.positionToRecordFailures = n, this.recordedFailures = /* @__PURE__ */ Object.create(null));
  }
  posToOffset(e) {
    return e - this._posStack[this._posStack.length - 1];
  }
  enterApplication(e, t) {
    this._posStack.push(this.inputStream.pos), this._applicationStack.push(t), this.inLexifiedContextStack.push(!1), e.enter(t), this._rightmostFailurePositionStack.push(this.rightmostFailurePosition), this.rightmostFailurePosition = -1;
  }
  exitApplication(e, t) {
    const n = this._posStack.pop();
    this._applicationStack.pop(), this.inLexifiedContextStack.pop(), e.exit(), this.rightmostFailurePosition = Math.max(
      this.rightmostFailurePosition,
      this._rightmostFailurePositionStack.pop()
    ), t && this.pushBinding(t, n);
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
    return this.pushFailuresInfo(), this.eval(Ne), this.popBinding(), this.popFailuresInfo(), this.inputStream.pos;
  }
  skipSpacesIfInSyntacticContext() {
    return this.inSyntacticContext() ? this.skipSpaces() : this.inputStream.pos;
  }
  maybeSkipSpacesBefore(e) {
    return e.allowsSkippingPrecedingSpace() && e !== Ne ? this.skipSpacesIfInSyntacticContext() : this.inputStream.pos;
  }
  pushBinding(e, t) {
    this._bindings.push(e), this._bindingOffsets.push(this.posToOffset(t));
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
    let t = this.memoTable[e];
    return t || (t = this.memoTable[e] = new er()), t;
  }
  processFailure(e, t) {
    if (this.rightmostFailurePosition = Math.max(this.rightmostFailurePosition, e), this.recordedFailures && e === this.positionToRecordFailures) {
      const n = this.currentApplication();
      n && (t = t.substituteParams(n.args)), this.recordFailure(t.toFailure(this.grammar), !1);
    }
  }
  recordFailure(e, t) {
    const n = e.toKey();
    this.recordedFailures[n] ? this.recordedFailures[n].isFluffy() && !e.isFluffy() && this.recordedFailures[n].clearFluffy() : this.recordedFailures[n] = t ? e.clone() : e;
  }
  recordFailures(e, t) {
    Object.keys(e).forEach((n) => {
      this.recordFailure(e[n], t);
    });
  }
  cloneRecordedFailures() {
    if (!this.recordedFailures)
      return;
    const e = /* @__PURE__ */ Object.create(null);
    return Object.keys(this.recordedFailures).forEach((t) => {
      e[t] = this.recordedFailures[t].clone();
    }), e;
  }
  getRightmostFailurePosition() {
    return this.rightmostFailurePosition;
  }
  _getRightmostFailureOffset() {
    return this.rightmostFailurePosition >= 0 ? this.posToOffset(this.rightmostFailurePosition) : -1;
  }
  // Returns the memoized trace entry for `expr` at `pos`, if one exists, `null` otherwise.
  getMemoizedTraceEntry(e, t) {
    const n = this.memoTable[e];
    if (n && t instanceof N) {
      const s = n.memo[t.toMemoKey()];
      if (s && s.traceEntry) {
        const i = s.traceEntry.cloneWithExpr(t);
        return i.isMemoized = !0, i;
      }
    }
    return null;
  }
  // Returns a new trace entry, with the currently active trace array as its children.
  getTraceEntry(e, t, n, s) {
    if (t instanceof N) {
      const i = this.currentApplication(), a = i ? i.args : [];
      t = t.substituteParams(a);
    }
    return this.getMemoizedTraceEntry(e, t) || new ae(this.input, e, this.inputStream.pos, t, n, s, this.trace);
  }
  isTracing() {
    return !!this.trace;
  }
  hasNecessaryInfo(e) {
    return this.trace && !e.traceEntry ? !1 : this.recordedFailures && this.inputStream.pos + e.rightmostFailureOffset === this.positionToRecordFailures ? !!e.failuresAtRightmostPosition : !0;
  }
  useMemoizedResult(e, t) {
    this.trace && this.trace.push(t.traceEntry);
    const n = this.inputStream.pos + t.rightmostFailureOffset;
    return this.rightmostFailurePosition = Math.max(
      this.rightmostFailurePosition,
      n
    ), this.recordedFailures && this.positionToRecordFailures === n && t.failuresAtRightmostPosition && this.recordFailures(t.failuresAtRightmostPosition, !0), this.inputStream.examinedLength = Math.max(
      this.inputStream.examinedLength,
      t.examinedLength + e
    ), t.value ? (this.inputStream.pos += t.matchLength, this.pushBinding(t.value, e), !0) : !1;
  }
  // Evaluate `expr` and return `true` if it succeeded, `false` otherwise. On success, `bindings`
  // will have `expr.getArity()` more elements than before, and the input stream's position may
  // have increased. On failure, `bindings` and position will be unchanged.
  eval(e) {
    const { inputStream: t } = this, n = this._bindings.length, s = this.userData;
    let i;
    this.recordedFailures && (i = this.recordedFailures, this.recordedFailures = /* @__PURE__ */ Object.create(null));
    const a = t.pos, c = this.maybeSkipSpacesBefore(e);
    let u;
    this.trace && (u = this.trace, this.trace = []);
    const d = e.eval(this);
    if (this.trace) {
      const v = this._bindings.slice(n), l = this.getTraceEntry(c, e, d, v);
      l.isImplicitSpaces = e === Ne, l.isRootNode = e === this.startExpr, u.push(l), this.trace = u;
    }
    return d ? this.recordedFailures && t.pos === this.positionToRecordFailures && Object.keys(this.recordedFailures).forEach((v) => {
      this.recordedFailures[v].makeFluffy();
    }) : (t.pos = a, this.truncateBindings(n), this.userData = s), this.recordedFailures && this.recordFailures(i, !1), e === _t && this.skipSpaces(), d;
  }
  getMatchResult() {
    this.grammar._setUpMatchState(this), this.eval(this.startExpr);
    let e;
    this.recordedFailures && (e = Object.keys(this.recordedFailures).map(
      (n) => this.recordedFailures[n]
    ));
    const t = this._bindings[0];
    return t && (t.grammar = this.grammar), new xt(
      this.matcher,
      this.input,
      this.startExpr,
      t,
      this._bindingOffsets[0],
      this.rightmostFailurePosition,
      e
    );
  }
  getTrace() {
    this.trace = [];
    const e = this.getMatchResult(), t = this.trace[this.trace.length - 1];
    return t.result = e, t;
  }
  pushFailuresInfo() {
    this._rightmostFailurePositionStack.push(this.rightmostFailurePosition), this._recordedFailuresStack.push(this.recordedFailures);
  }
  popFailuresInfo() {
    this.rightmostFailurePosition = this._rightmostFailurePositionStack.pop(), this.recordedFailures = this._recordedFailuresStack.pop();
  }
}
class mr {
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
  replaceInputRange(e, t, n) {
    const s = this._input, i = this._memoTable;
    if (e < 0 || e > s.length || t < 0 || t > s.length || e > t)
      throw new Error("Invalid indices: " + e + " and " + t);
    this._input = s.slice(0, e) + n + s.slice(t), this._input !== s && i.length > 0 && (this._isMemoTableStale = !0);
    const a = i.slice(t);
    i.length = e;
    for (let c = 0; c < n.length; c++)
      i.push(void 0);
    for (const c of a)
      i.push(c);
    for (let c = 0; c < e; c++) {
      const u = i[c];
      u && u.clearObsoleteEntries(c, e);
    }
    return this;
  }
  match(e, t = { incremental: !0 }) {
    return this._match(this._getStartExpr(e), {
      incremental: t.incremental,
      tracing: !1
    });
  }
  trace(e, t = { incremental: !0 }) {
    return this._match(this._getStartExpr(e), {
      incremental: t.incremental,
      tracing: !0
    });
  }
  _match(e, t = {}) {
    const n = {
      tracing: !1,
      incremental: !0,
      positionToRecordFailures: void 0,
      ...t
    };
    if (!n.incremental)
      this._resetMemoTable();
    else if (this._isMemoTableStale && !this.grammar.supportsIncrementalParsing)
      throw Ft(this.grammar);
    const s = new hr(this, e, n.positionToRecordFailures);
    return n.tracing ? s.getTrace() : s.getMatchResult();
  }
  /*
    Returns the starting expression for this Matcher's associated grammar. If
    `optStartApplicationStr` is specified, it is a string expressing a rule application in the
    grammar. If not specified, the grammar's default start rule will be used.
  */
  _getStartExpr(e) {
    const t = e || this.grammar.defaultStartRule;
    if (!t)
      throw new Error("Missing start rule argument -- the grammar has no default start rule.");
    const n = this.grammar.parseApplication(t);
    return new F([n, $]);
  }
}
const fe = [], Ee = (r, e) => Object.prototype.hasOwnProperty.call(r, e);
class Ze {
  constructor(e, t, n) {
    this._node = e, this.source = t, this._baseInterval = n, e.isNonterminal() && oe(t === n), this._childWrappers = [];
  }
  _forgetMemoizedResultFor(e) {
    delete this._node[this._semantics.attributeKeys[e]], this.children.forEach((t) => {
      t._forgetMemoizedResultFor(e);
    });
  }
  // Returns the wrapper of the specified child node. Child wrappers are created lazily and
  // cached in the parent wrapper's `_childWrappers` instance variable.
  child(e) {
    if (!(0 <= e && e < this._node.numChildren()))
      return;
    let t = this._childWrappers[e];
    if (!t) {
      const n = this._node.childAt(e), s = this._node.childOffsets[e], i = this._baseInterval.subInterval(s, n.matchLength), a = n.isNonterminal() ? i : this._baseInterval;
      t = this._childWrappers[e] = this._semantics.wrap(n, i, a);
    }
    return t;
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
    const t = e || [], n = t.map((a) => a._node), s = new bt(n, [], -1, !1), i = this._semantics.wrap(s, null, null);
    return i._childWrappers = t, i;
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
class J {
  constructor(e, t) {
    const n = this;
    if (this.grammar = e, this.checkedActionDicts = !1, this.Wrapper = class extends (t ? t.Wrapper : Ze) {
      constructor(s, i, a) {
        super(s, i, a), n.checkActionDictsIfHaventAlready(), this._semantics = n;
      }
      toString() {
        return "[semantics wrapper for " + n.grammar.name + "]";
      }
    }, this.super = t, t) {
      if (!(e.equals(this.super.grammar) || e._inheritsFrom(this.super.grammar)))
        throw new Error(
          "Cannot extend a semantics for grammar '" + this.super.grammar.name + "' for use with grammar '" + e.name + "' (not a sub-grammar)"
        );
      this.operations = Object.create(this.super.operations), this.attributes = Object.create(this.super.attributes), this.attributeKeys = /* @__PURE__ */ Object.create(null);
      for (const s in this.attributes)
        Object.defineProperty(this.attributeKeys, s, {
          value: Je(s)
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
    function t(s) {
      return s.super !== J.BuiltInSemantics._getSemantics();
    }
    let n = `(function(g) {
`;
    if (t(this)) {
      n += "  var semantics = " + this.super.toRecipe(!0) + "(g";
      const s = this.super.grammar;
      let i = this.grammar;
      for (; i !== s; )
        n += ".superGrammar", i = i.superGrammar;
      n += `);
`, n += "  return g.extendSemantics(semantics)";
    } else
      n += "  return g.createSemantics()";
    return ["Operation", "Attribute"].forEach((s) => {
      const i = this[s.toLowerCase() + "s"];
      Object.keys(i).forEach((a) => {
        const { actionDict: c, formals: u, builtInDefault: d } = i[a];
        let v = a;
        u.length > 0 && (v += "(" + u.join(", ") + ")");
        let l;
        t(this) && this.super[s.toLowerCase() + "s"][a] ? l = "extend" + s : l = "add" + s, n += `
    .` + l + "(" + JSON.stringify(v) + ", {";
        const o = [];
        Object.keys(c).forEach((f) => {
          if (c[f] !== d) {
            let y = c[f].toString().trim();
            y = y.replace(/^.*\(/, "function("), o.push(`
      ` + JSON.stringify(f) + ": " + y);
          }
        }), n += o.join(",") + `
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
  addOperationOrAttribute(e, t, n) {
    const s = e + "s", i = Xe(t, e), { name: a } = i, { formals: c } = i;
    this.assertNewName(a, e);
    const u = dr(e, a, l), d = { _default: u };
    Object.keys(n).forEach((o) => {
      d[o] = n[o];
    });
    const v = e === "operation" ? new ge(a, c, d, u) : new Fe(a, d, u);
    v.checkActionDict(this.grammar), this[s][a] = v;
    function l(...o) {
      const f = this._semantics[s][a];
      if (arguments.length !== f.formals.length)
        throw new Error(
          "Invalid number of arguments passed to " + a + " " + e + " (expected " + f.formals.length + ", got " + arguments.length + ")"
        );
      const y = /* @__PURE__ */ Object.create(null);
      for (const [P, re] of Object.entries(o)) {
        const se = f.formals[P];
        y[se] = re;
      }
      const j = this.args;
      this.args = y;
      const R = f.execute(this._semantics, this);
      return this.args = j, R;
    }
    e === "operation" ? (this.Wrapper.prototype[a] = l, this.Wrapper.prototype[a].toString = function() {
      return "[" + a + " operation]";
    }) : (Object.defineProperty(this.Wrapper.prototype, a, {
      get: l,
      configurable: !0
      // So the property can be deleted.
    }), Object.defineProperty(this.attributeKeys, a, {
      value: Je(a)
    }));
  }
  extendOperationOrAttribute(e, t, n) {
    const s = e + "s";
    if (Xe(t, "attribute"), !(this.super && t in this.super[s]))
      throw new Error(
        "Cannot extend " + e + " '" + t + "': did not inherit an " + e + " with that name"
      );
    if (Ee(this[s], t))
      throw new Error("Cannot extend " + e + " '" + t + "' again");
    const i = this[s][t].formals, a = this[s][t].actionDict, c = Object.create(a);
    Object.keys(n).forEach((u) => {
      c[u] = n[u];
    }), this[s][t] = e === "operation" ? new ge(t, i, c) : new Fe(t, c), this[s][t].checkActionDict(this.grammar);
  }
  assertNewName(e, t) {
    if (Ee(Ze.prototype, e))
      throw new Error("Cannot add " + t + " '" + e + "': that's a reserved name");
    if (e in this.operations)
      throw new Error(
        "Cannot add " + t + " '" + e + "': an operation with that name already exists"
      );
    if (e in this.attributes)
      throw new Error(
        "Cannot add " + t + " '" + e + "': an attribute with that name already exists"
      );
  }
  // Returns a wrapper for the given CST `node` in this semantics.
  // If `node` is already a wrapper, returns `node` itself.  // TODO: why is this needed?
  wrap(e, t, n) {
    const s = n || t;
    return e instanceof this.Wrapper ? e : new this.Wrapper(e, t, s);
  }
}
function Xe(r, e) {
  if (!J.prototypeGrammar)
    return oe(r.indexOf("(") === -1), {
      name: r,
      formals: []
    };
  const t = J.prototypeGrammar.match(
    r,
    e === "operation" ? "OperationSignature" : "AttributeSignature"
  );
  if (t.failed())
    throw new Error(t.message);
  return J.prototypeGrammarSemantics(t).parse();
}
function dr(r, e, t) {
  return function(...n) {
    const i = (this._semantics.operations[e] || this._semantics.attributes[e]).formals.map((a) => this.args[a]);
    if (!this.isIteration() && n.length === 1)
      return t.apply(n[0], i);
    throw zt(this.ctorName, e, r, fe);
  };
}
J.createSemantics = function(r, e) {
  const t = new J(
    r,
    e !== void 0 ? e : J.BuiltInSemantics._getSemantics()
  ), n = function(i) {
    if (!(i instanceof xt))
      throw new TypeError(
        "Semantics expected a MatchResult, but got " + Te(i)
      );
    if (i.failed())
      throw new TypeError("cannot apply Semantics to " + i.toString());
    const a = i._cst;
    if (a.grammar !== r)
      throw new Error(
        "Cannot use a MatchResult from grammar '" + a.grammar.name + "' with a semantics for '" + r.name + "'"
      );
    const c = new _e(i.input);
    return t.wrap(a, c.interval(i._cstOffset, i.input.length));
  };
  return n.addOperation = function(s, i) {
    return t.addOperationOrAttribute("operation", s, i), n;
  }, n.extendOperation = function(s, i) {
    return t.extendOperationOrAttribute("operation", s, i), n;
  }, n.addAttribute = function(s, i) {
    return t.addOperationOrAttribute("attribute", s, i), n;
  }, n.extendAttribute = function(s, i) {
    return t.extendOperationOrAttribute("attribute", s, i), n;
  }, n._getActionDict = function(s) {
    const i = t.operations[s] || t.attributes[s];
    if (!i)
      throw new Error(
        '"' + s + '" is not a valid operation or attribute name in this semantics for "' + r.name + '"'
      );
    return i.actionDict;
  }, n._remove = function(s) {
    let i;
    return s in t.operations ? (i = t.operations[s], delete t.operations[s]) : s in t.attributes && (i = t.attributes[s], delete t.attributes[s]), delete t.Wrapper.prototype[s], i;
  }, n.getOperationNames = function() {
    return Object.keys(t.operations);
  }, n.getAttributeNames = function() {
    return Object.keys(t.attributes);
  }, n.getGrammar = function() {
    return t.grammar;
  }, n.toRecipe = function(s) {
    return t.toRecipe(s);
  }, n.toString = t.toString.bind(t), n._getSemantics = function() {
    return t;
  }, n;
};
class ge {
  constructor(e, t, n, s) {
    this.name = e, this.formals = t, this.actionDict = n, this.builtInDefault = s;
  }
  checkActionDict(e) {
    e._checkTopDownActionDict(this.typeName, this.name, this.actionDict);
  }
  // Execute this operation on the CST node associated with `nodeWrapper` in the context of the
  // given Semantics instance.
  execute(e, t) {
    try {
      const { ctorName: n } = t._node;
      let s = this.actionDict[n];
      return s ? (fe.push([this, n]), s.apply(t, t._children())) : t.isNonterminal() && (s = this.actionDict._nonterminal, s) ? (fe.push([this, "_nonterminal", n]), s.apply(t, t._children())) : (fe.push([this, "default action", n]), this.actionDict._default.apply(t, t._children()));
    } finally {
      fe.pop();
    }
  }
}
ge.prototype.typeName = "operation";
class Fe extends ge {
  constructor(e, t, n) {
    super(e, [], t, n);
  }
  execute(e, t) {
    const n = t._node, s = e.attributeKeys[this.name];
    return Ee(n, s) || (n[s] = ge.prototype.execute.call(this, e, t)), n[s];
  }
}
Fe.prototype.typeName = "attribute";
const Ye = ["_iter", "_terminal", "_nonterminal", "_default"];
function et(r) {
  return Object.keys(r.rules).sort().map((e) => r.rules[e]);
}
const fr = (r) => r.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
let wt, At;
class K {
  constructor(e, t, n, s) {
    if (this.name = e, this.superGrammar = t, this.rules = n, s) {
      if (!(s in n))
        throw new Error(
          "Invalid start rule: '" + s + "' is not a rule in grammar '" + e + "'"
        );
      this.defaultStartRule = s;
    }
    this._matchStateInitializer = void 0, this.supportsIncrementalParsing = !0;
  }
  matcher() {
    return new mr(this);
  }
  // Return true if the grammar is a built-in grammar, otherwise false.
  // NOTE: This might give an unexpected result if called before BuiltInRules is defined!
  isBuiltIn() {
    return this === K.ProtoBuiltInRules || this === K.BuiltInRules;
  }
  equals(e) {
    if (this === e)
      return !0;
    if (e == null || this.name !== e.name || this.defaultStartRule !== e.defaultStartRule || !(this.superGrammar === e.superGrammar || this.superGrammar.equals(e.superGrammar)))
      return !1;
    const t = et(this), n = et(e);
    return t.length === n.length && t.every((s, i) => s.description === n[i].description && s.formals.join(",") === n[i].formals.join(",") && s.body.toString() === n[i].body.toString());
  }
  match(e, t) {
    const n = this.matcher();
    return n.replaceInputRange(0, 0, e), n.match(t);
  }
  trace(e, t) {
    const n = this.matcher();
    return n.replaceInputRange(0, 0, e), n.trace(t);
  }
  createSemantics() {
    return J.createSemantics(this);
  }
  extendSemantics(e) {
    return J.createSemantics(this, e._getSemantics());
  }
  // Check that every key in `actionDict` corresponds to a semantic action, and that it maps to
  // a function of the correct arity. If not, throw an exception.
  _checkTopDownActionDict(e, t, n) {
    const s = [];
    for (const i in n) {
      const a = n[i];
      if (!Ye.includes(i) && !(i in this.rules)) {
        s.push(`'${i}' is not a valid semantic action for '${this.name}'`);
        continue;
      }
      if (typeof a != "function") {
        s.push(`'${i}' must be a function in an action dictionary for '${this.name}'`);
        continue;
      }
      const u = a.length, d = this._topDownActionArity(i);
      if (u !== d) {
        let v;
        i === "_iter" || i === "_nonterminal" ? v = `it should use a rest parameter, e.g. \`${i}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.` : v = `expected ${d}, got ${u}`, s.push(`Semantic action '${i}' has the wrong arity: ${v}`);
      }
    }
    if (s.length > 0) {
      const i = s.map((c) => "- " + c), a = new Error(
        [
          `Found errors in the action dictionary of the '${t}' ${e}:`,
          ...i
        ].join(`
`)
      );
      throw a.problems = s, a;
    }
  }
  // Return the expected arity for a semantic action named `actionName`, which
  // is either a rule name or a special action name like '_nonterminal'.
  _topDownActionArity(e) {
    return Ye.includes(e) ? 0 : this.rules[e].body.getArity();
  }
  _inheritsFrom(e) {
    let t = this.superGrammar;
    for (; t; ) {
      if (t.equals(e, !0))
        return !0;
      t = t.superGrammar;
    }
    return !1;
  }
  toRecipe(e = void 0) {
    const t = {};
    this.source && (t.source = this.source.contents);
    let n = null;
    this.defaultStartRule && (n = this.defaultStartRule);
    const s = {};
    Object.keys(this.rules).forEach((c) => {
      const u = this.rules[c], { body: d } = u, v = !this.superGrammar || !this.superGrammar.rules[c];
      let l;
      v ? l = "define" : l = d instanceof Se ? "extend" : "override";
      const o = {};
      if (u.source && this.source) {
        const j = u.source.relativeTo(this.source);
        o.sourceInterval = [j.startIdx, j.endIdx];
      }
      const f = v ? u.description : null, y = d.outputRecipe(u.formals, this.source);
      s[c] = [
        l,
        // "define"/"extend"/"override"
        o,
        f,
        u.formals,
        y
      ];
    });
    let i = "null";
    e ? i = e : this.superGrammar && !this.superGrammar.isBuiltIn() && (i = this.superGrammar.toRecipe());
    const a = [
      ...["grammar", t, this.name].map(JSON.stringify),
      i,
      ...[n, s].map(JSON.stringify)
    ];
    return fr(`[${a.join(",")}]`);
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
    const e = new ue();
    e.append("{");
    let t = !0;
    for (const n in this.rules) {
      const { body: s } = this.rules[n];
      t ? t = !1 : e.append(","), e.append(`
`), e.append("  "), this.addSemanticActionTemplate(n, s, e);
    }
    return e.append(`
}`), e.contents();
  }
  addSemanticActionTemplate(e, t, n) {
    n.append(e), n.append(": function(");
    const s = this._topDownActionArity(e);
    n.append(xe("_", s).join(", ")), n.append(`) {
`), n.append("  }");
  }
  // Parse a string which expresses a rule application in this grammar, and return the
  // resulting Apply node.
  parseApplication(e) {
    let t;
    if (e.indexOf("<") === -1)
      t = new N(e);
    else {
      const s = wt.match(e, "Base_application");
      t = At(s, {});
    }
    if (!(t.ruleName in this.rules))
      throw dt(t.ruleName, this.name);
    const { formals: n } = this.rules[t.ruleName];
    if (n.length !== t.args.length) {
      const { source: s } = this.rules[t.ruleName];
      throw ft(
        t.ruleName,
        n.length,
        t.args.length,
        s
      );
    }
    return t;
  }
  _setUpMatchState(e) {
    this._matchStateInitializer && this._matchStateInitializer(e);
  }
}
K.ProtoBuiltInRules = new K(
  "ProtoBuiltInRules",
  // name
  void 0,
  // supergrammar
  {
    any: {
      body: B,
      formals: [],
      description: "any character",
      primitive: !0
    },
    end: {
      body: $,
      formals: [],
      description: "end of input",
      primitive: !0
    },
    caseInsensitive: {
      body: new Be(new W(0)),
      formals: ["str"],
      primitive: !0
    },
    lower: {
      body: new D("Ll"),
      formals: [],
      description: "a lowercase letter",
      primitive: !0
    },
    upper: {
      body: new D("Lu"),
      formals: [],
      description: "an uppercase letter",
      primitive: !0
    },
    // Union of Lt (titlecase), Lm (modifier), and Lo (other), i.e. any letter not in Ll or Lu.
    unicodeLtmo: {
      body: new D("Ltmo"),
      formals: [],
      description: "a Unicode character in Lt, Lm, or Lo",
      primitive: !0
    },
    // These rules are not truly primitive (they could be written in userland) but are defined
    // here for bootstrapping purposes.
    spaces: {
      body: new pe(new N("space")),
      formals: []
    },
    space: {
      body: new G("\0", " "),
      formals: [],
      description: "a space"
    }
  }
);
K.initApplicationParser = function(r, e) {
  wt = r, At = e;
};
class tt {
  constructor(e) {
    this.name = e;
  }
  // Helpers
  sourceInterval(e, t) {
    return this.source.subInterval(e, t - e);
  }
  ensureSuperGrammar() {
    return this.superGrammar || this.withSuperGrammar(
      // TODO: The conditional expression below is an ugly hack. It's kind of ok because
      // I doubt anyone will ever try to declare a grammar called `BuiltInRules`. Still,
      // we should try to find a better way to do this.
      this.name === "BuiltInRules" ? K.ProtoBuiltInRules : K.BuiltInRules
    ), this.superGrammar;
  }
  ensureSuperGrammarRuleForOverriding(e, t) {
    const n = this.ensureSuperGrammar().rules[e];
    if (!n)
      throw Tt(e, this.superGrammar.name, t);
    return n;
  }
  installOverriddenOrExtendedRule(e, t, n, s) {
    const i = Le(t);
    if (i.length > 0)
      throw He(e, i, s);
    const a = this.ensureSuperGrammar().rules[e], c = a.formals, u = c ? c.length : 0;
    if (t.length !== u)
      throw ft(e, u, t.length, s);
    return this.install(e, t, n, a.description, s);
  }
  install(e, t, n, s, i, a = !1) {
    return this.rules[e] = {
      body: n.introduceParams(t),
      formals: t,
      description: s,
      source: i,
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
    return this.source = new _e(e).interval(0, e.length), this;
  }
  // Creates a Grammar instance, and if it passes the sanity checks, returns it.
  build() {
    const e = new K(
      this.name,
      this.ensureSuperGrammar(),
      this.rules,
      this.defaultStartRule
    );
    e._matchStateInitializer = e.superGrammar._matchStateInitializer, e.supportsIncrementalParsing = e.superGrammar.supportsIncrementalParsing;
    const t = [];
    let n = !1;
    return Object.keys(e.rules).forEach((s) => {
      const { body: i } = e.rules[s];
      try {
        i.assertChoicesHaveUniformArity(s);
      } catch (a) {
        t.push(a);
      }
      try {
        i.assertAllApplicationsAreValid(s, e);
      } catch (a) {
        t.push(a), n = !0;
      }
    }), n || Object.keys(e.rules).forEach((s) => {
      const { body: i } = e.rules[s];
      try {
        i.assertIteratedExprsAreNotNullable(e, []);
      } catch (a) {
        t.push(a);
      }
    }), t.length > 0 && Vt(t), this.source && (e.source = this.source), e;
  }
  // Rule declarations
  define(e, t, n, s, i, a) {
    if (this.ensureSuperGrammar(), this.superGrammar.rules[e])
      throw Ke(e, this.name, this.superGrammar.name, i);
    if (this.rules[e])
      throw Ke(e, this.name, this.name, i);
    const c = Le(t);
    if (c.length > 0)
      throw He(e, c, i);
    return this.install(e, t, n, s, i, a);
  }
  override(e, t, n, s, i) {
    return this.ensureSuperGrammarRuleForOverriding(e, i), this.installOverriddenOrExtendedRule(e, t, n, i), this;
  }
  extend(e, t, n, s, i) {
    if (!this.ensureSuperGrammar().rules[e])
      throw Dt(e, this.superGrammar.name, i);
    const c = new Se(this.superGrammar, e, n);
    return c.source = n.source, this.installOverriddenOrExtendedRule(e, t, c, i), this;
  }
}
class ye {
  constructor(e) {
    this.currentDecl = null, this.currentRuleName = null, this.options = e || {};
  }
  newGrammar(e) {
    return new tt(e);
  }
  grammar(e, t, n, s, i) {
    const a = new tt(t);
    return n && a.withSuperGrammar(
      n instanceof K ? n : this.fromRecipe(n)
    ), s && a.withDefaultStartRule(s), e && e.source && a.withSource(e.source), this.currentDecl = a, Object.keys(i).forEach((c) => {
      this.currentRuleName = c;
      const u = i[c], d = u[0], v = u[1], l = u[2], o = u[3], f = this.fromRecipe(u[4]);
      let y;
      a.source && v && v.sourceInterval && (y = a.source.subInterval(
        v.sourceInterval[0],
        v.sourceInterval[1] - v.sourceInterval[0]
      )), a[d](c, o, f, l, y);
    }), this.currentRuleName = this.currentDecl = null, a.build();
  }
  terminal(e) {
    return new M(e);
  }
  range(e, t) {
    return new G(e, t);
  }
  param(e) {
    return new W(e);
  }
  alt(...e) {
    let t = [];
    for (let n of e)
      n instanceof I || (n = this.fromRecipe(n)), n instanceof E ? t = t.concat(n.terms) : t.push(n);
    return t.length === 1 ? t[0] : new E(t);
  }
  seq(...e) {
    let t = [];
    for (let n of e)
      n instanceof I || (n = this.fromRecipe(n)), n instanceof F ? t = t.concat(n.factors) : t.push(n);
    return t.length === 1 ? t[0] : new F(t);
  }
  star(e) {
    return e instanceof I || (e = this.fromRecipe(e)), new pe(e);
  }
  plus(e) {
    return e instanceof I || (e = this.fromRecipe(e)), new me(e);
  }
  opt(e) {
    return e instanceof I || (e = this.fromRecipe(e)), new ne(e);
  }
  not(e) {
    return e instanceof I || (e = this.fromRecipe(e)), new T(e);
  }
  lookahead(e) {
    return e instanceof I || (e = this.fromRecipe(e)), this.options.eliminateLookaheads ? new T(new T(e)) : new V(e);
  }
  lex(e) {
    return e instanceof I || (e = this.fromRecipe(e)), new Q(e);
  }
  app(e, t) {
    return t && t.length > 0 && (t = t.map(function(n) {
      return n instanceof I ? n : this.fromRecipe(n);
    }, this)), new N(e, t);
  }
  // Note that unlike other methods in this class, this method cannot be used as a
  // convenience constructor. It only works with recipes, because it relies on
  // `this.currentDecl` and `this.currentRuleName` being set.
  splice(e, t) {
    return new be(
      this.currentDecl.superGrammar,
      this.currentRuleName,
      e.map((n) => this.fromRecipe(n)),
      t.map((n) => this.fromRecipe(n))
    );
  }
  fromRecipe(e) {
    const t = e[0] === "grammar" ? e.slice(1) : e.slice(2), n = this[e[0]](...t), s = e[1];
    return s && s.sourceInterval && this.currentDecl && n.withSource(this.currentDecl.sourceInterval(...s.sourceInterval)), n;
  }
}
function $e(r) {
  return typeof r == "function" ? r.call(new ye()) : (typeof r == "string" && (r = JSON.parse(r)), new ye().fromRecipe(r));
}
const Ge = $e(["grammar", { source: `BuiltInRules {

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
K.BuiltInRules = Ge;
Zt(K.BuiltInRules);
const We = $e(["grammar", { source: `Ohm {

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
`], ["app", { sourceInterval: [2439, 2442] }, "end", []]]]]], comment_multiLine: ["define", { sourceInterval: [2465, 2501] }, null, [], ["seq", { sourceInterval: [2465, 2487] }, ["terminal", { sourceInterval: [2465, 2469] }, "/*"], ["star", { sourceInterval: [2470, 2482] }, ["seq", { sourceInterval: [2471, 2480] }, ["not", { sourceInterval: [2471, 2476] }, ["terminal", { sourceInterval: [2472, 2476] }, "*/"]], ["app", { sourceInterval: [2477, 2480] }, "any", []]]], ["terminal", { sourceInterval: [2483, 2487] }, "*/"]]], comment: ["define", { sourceInterval: [2398, 2501] }, null, [], ["alt", { sourceInterval: [2412, 2501] }, ["app", { sourceInterval: [2412, 2443] }, "comment_singleLine", []], ["app", { sourceInterval: [2465, 2487] }, "comment_multiLine", []]]], tokens: ["define", { sourceInterval: [2505, 2520] }, null, [], ["star", { sourceInterval: [2514, 2520] }, ["app", { sourceInterval: [2514, 2519] }, "token", []]]], token: ["define", { sourceInterval: [2524, 2600] }, null, [], ["alt", { sourceInterval: [2532, 2600] }, ["app", { sourceInterval: [2532, 2540] }, "caseName", []], ["app", { sourceInterval: [2543, 2550] }, "comment", []], ["app", { sourceInterval: [2553, 2558] }, "ident", []], ["app", { sourceInterval: [2561, 2569] }, "operator", []], ["app", { sourceInterval: [2572, 2583] }, "punctuation", []], ["app", { sourceInterval: [2586, 2594] }, "terminal", []], ["app", { sourceInterval: [2597, 2600] }, "any", []]]], operator: ["define", { sourceInterval: [2604, 2669] }, null, [], ["alt", { sourceInterval: [2615, 2669] }, ["terminal", { sourceInterval: [2615, 2619] }, "<:"], ["terminal", { sourceInterval: [2622, 2625] }, "="], ["terminal", { sourceInterval: [2628, 2632] }, ":="], ["terminal", { sourceInterval: [2635, 2639] }, "+="], ["terminal", { sourceInterval: [2642, 2645] }, "*"], ["terminal", { sourceInterval: [2648, 2651] }, "+"], ["terminal", { sourceInterval: [2654, 2657] }, "?"], ["terminal", { sourceInterval: [2660, 2663] }, "~"], ["terminal", { sourceInterval: [2666, 2669] }, "&"]]], punctuation: ["define", { sourceInterval: [2673, 2709] }, null, [], ["alt", { sourceInterval: [2687, 2709] }, ["terminal", { sourceInterval: [2687, 2690] }, "<"], ["terminal", { sourceInterval: [2693, 2696] }, ">"], ["terminal", { sourceInterval: [2699, 2702] }, ","], ["terminal", { sourceInterval: [2705, 2709] }, "--"]]] }]), Oe = Object.create(I.prototype);
function rt(r, e) {
  for (const t in r)
    if (t === e) return !0;
  return !1;
}
function Nt(r, e, t, n) {
  const s = new ye(n);
  let i, a, c, u = !1;
  return (t || We).createSemantics().addOperation("visit", {
    Grammars(l) {
      return l.children.map((o) => o.visit());
    },
    Grammar(l, o, f, y, j) {
      const R = l.visit();
      i = s.newGrammar(R), o.child(0) && o.child(0).visit(), y.children.map((re) => re.visit());
      const P = i.build();
      if (P.source = this.source.trimmed(), rt(e, R))
        throw Et(P);
      return e[R] = P, P;
    },
    SuperGrammar(l, o) {
      const f = o.visit();
      if (f === "null")
        i.withSuperGrammar(null);
      else {
        if (!e || !rt(e, f))
          throw jt(f, e, o.source);
        i.withSuperGrammar(e[f]);
      }
    },
    Rule_define(l, o, f, y, j) {
      a = l.visit(), c = o.children.map((se) => se.visit())[0] || [], !i.defaultStartRule && i.ensureSuperGrammar() !== K.ProtoBuiltInRules && i.withDefaultStartRule(a);
      const R = j.visit(), P = f.children.map((se) => se.visit())[0], re = this.source.trimmed();
      return i.define(a, c, R, P, re);
    },
    Rule_override(l, o, f, y) {
      a = l.visit(), c = o.children.map((P) => P.visit())[0] || [];
      const j = this.source.trimmed();
      i.ensureSuperGrammarRuleForOverriding(a, j), u = !0;
      const R = y.visit();
      return u = !1, i.override(a, c, R, null, j);
    },
    Rule_extend(l, o, f, y) {
      a = l.visit(), c = o.children.map((P) => P.visit())[0] || [];
      const j = y.visit(), R = this.source.trimmed();
      return i.extend(a, c, j, null, R);
    },
    RuleBody(l, o) {
      return s.alt(...o.visit()).withSource(this.source);
    },
    OverrideRuleBody(l, o) {
      const f = o.visit(), y = f.indexOf(Oe);
      if (y >= 0) {
        const j = f.slice(0, y), R = f.slice(y + 1);
        return R.forEach((P) => {
          if (P === Oe) throw Ut(P);
        }), new be(
          i.superGrammar,
          a,
          j,
          R
        ).withSource(this.source);
      } else
        return s.alt(...f).withSource(this.source);
    },
    Formals(l, o, f) {
      return o.visit();
    },
    Params(l, o, f) {
      return o.visit();
    },
    Alt(l) {
      return s.alt(...l.visit()).withSource(this.source);
    },
    TopLevelTerm_inline(l, o) {
      const f = a + "_" + o.visit(), y = l.visit(), j = this.source.trimmed(), R = !(i.superGrammar && i.superGrammar.rules[f]);
      u && !R ? i.override(f, c, y, null, j) : i.define(f, c, y, null, j);
      const P = c.map((re) => s.app(re));
      return s.app(f, P).withSource(y.source);
    },
    OverrideTopLevelTerm_superSplice(l) {
      return Oe;
    },
    Seq(l) {
      return s.seq(...l.children.map((o) => o.visit())).withSource(this.source);
    },
    Iter_star(l, o) {
      return s.star(l.visit()).withSource(this.source);
    },
    Iter_plus(l, o) {
      return s.plus(l.visit()).withSource(this.source);
    },
    Iter_opt(l, o) {
      return s.opt(l.visit()).withSource(this.source);
    },
    Pred_not(l, o) {
      return s.not(o.visit()).withSource(this.source);
    },
    Pred_lookahead(l, o) {
      return s.lookahead(o.visit()).withSource(this.source);
    },
    Lex_lex(l, o) {
      return s.lex(o.visit()).withSource(this.source);
    },
    Base_application(l, o) {
      const f = o.children.map((y) => y.visit())[0] || [];
      return s.app(l.visit(), f).withSource(this.source);
    },
    Base_range(l, o, f) {
      return s.range(l.visit(), f.visit()).withSource(this.source);
    },
    Base_terminal(l) {
      return s.terminal(l.visit()).withSource(this.source);
    },
    Base_paren(l, o, f) {
      return o.visit();
    },
    ruleDescr(l, o, f) {
      return o.visit();
    },
    ruleDescrText(l) {
      return this.sourceString.trim();
    },
    caseName(l, o, f, y, j) {
      return f.visit();
    },
    name(l, o) {
      return this.sourceString;
    },
    nameFirst(l) {
    },
    nameRest(l) {
    },
    terminal(l, o, f) {
      return o.children.map((y) => y.visit()).join("");
    },
    oneCharTerminal(l, o, f) {
      return o.visit();
    },
    escapeChar(l) {
      try {
        return pt(this.sourceString);
      } catch (o) {
        throw o instanceof RangeError && o.message.startsWith("Invalid code point ") ? Kt(l) : o;
      }
    },
    NonemptyListOf(l, o, f) {
      return [l.visit()].concat(f.children.map((y) => y.visit()));
    },
    EmptyListOf() {
      return [];
    },
    _terminal() {
      return this.sourceString;
    }
  })(r).visit();
}
const gr = $e(["grammar", { source: `OperationsAndAttributes {

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
vr(K.BuiltInRules);
Ir(gr);
function vr(r) {
  const e = {
    empty() {
      return this.iteration();
    },
    nonEmpty(t, n, s) {
      return this.iteration([t].concat(s.children));
    },
    self(...t) {
      return this;
    }
  };
  J.BuiltInSemantics = J.createSemantics(r, null).addOperation(
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
function Ir(r) {
  J.prototypeGrammarSemantics = r.createSemantics().addOperation("parse", {
    AttributeSignature(e) {
      return {
        name: e.parse(),
        formals: []
      };
    },
    OperationSignature(e, t) {
      return {
        name: e.parse(),
        formals: t.children.map((n) => n.parse())[0] || []
      };
    },
    Formals(e, t, n) {
      return t.asIteration().children.map((s) => s.parse());
    },
    name(e, t) {
      return this.sourceString;
    }
  }), J.prototypeGrammar = r;
}
function yr(r) {
  let e = 0;
  const t = [0], n = () => t[t.length - 1], s = {}, i = /( *).*(?:$|\r?\n|\r)/g;
  let a;
  for (; (a = i.exec(r)) != null; ) {
    const [c, u] = a;
    if (c.length === 0) break;
    const d = u.length, v = n(), l = e + d;
    if (d > v)
      t.push(d), s[l] = 1;
    else if (d < v) {
      const o = t.length;
      for (; n() !== d; )
        t.pop();
      s[l] = -1 * (o - t.length);
    }
    e += c.length;
  }
  return t.length > 1 && (s[e] = 1 - t.length), s;
}
const Ot = "an indented block", kt = "a dedent", nt = 1114112;
class xr extends _e {
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
    return this._indentationAt(this.pos) !== 0 ? (this.examinedLength = Math.max(this.examinedLength, this.pos), nt) : super.nextCharCode();
  }
  nextCodePoint() {
    return this._indentationAt(this.pos) !== 0 ? (this.examinedLength = Math.max(this.examinedLength, this.pos), nt) : super.nextCodePoint();
  }
}
class st extends I {
  constructor(e = !0) {
    super(), this.isIndent = e;
  }
  allowsSkippingPrecedingSpace() {
    return !0;
  }
  eval(e) {
    const { inputStream: t } = e, n = e.userData;
    e.doNotMemoize = !0;
    const s = t.pos, i = this.isIndent ? 1 : -1;
    return (n[s] || 0) * i > 0 ? (e.userData = Object.create(n), e.userData[s] -= i, e.pushBinding(new he(0), s), !0) : (e.processFailure(s, this), !1);
  }
  getArity() {
    return 1;
  }
  _assertAllApplicationsAreValid(e, t) {
  }
  _isNullable(e, t) {
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
    const t = this.isIndent ? Ot : kt;
    return new Z(this, t, "description");
  }
}
const Sr = new N("indent"), br = new N("dedent"), _r = new be(Ge, "any", [Sr, br], []), wr = new ye().newGrammar("IndentationSensitive").withSuperGrammar(Ge).define("indent", [], new st(!0), Ot, void 0, !0).define("dedent", [], new st(!1), kt, void 0, !0).extend("any", [], _r, "any character", void 0).build();
Object.assign(wr, {
  _matchStateInitializer(r) {
    r.userData = yr(r.input), r.inputStream = new xr(r);
  },
  supportsIncrementalParsing: !1
});
K.initApplicationParser(We, Nt);
const Ar = (r) => !!r.constructor && typeof r.constructor.isBuffer == "function" && r.constructor.isBuffer(r);
function Nr(r, e, t) {
  const n = We.match(r, "Grammars");
  if (n.failed())
    throw Pt(n);
  return Nt(n, e, void 0, t);
}
function Or(r, e, t) {
  const n = /* @__PURE__ */ Object.create({});
  if (typeof r != "string")
    if (Ar(r))
      r = r.toString();
    else
      throw new TypeError(
        "Expected string as first argument, got " + Te(r)
      );
  return Nr(r, n, t), n;
}
function kr(r, e) {
  return Or(r);
}
const Lr = kr(String.raw`
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

  // Parentheses comments (can be nested) that are ignored anywhere
  comment = "(" (comment | enclosedchar<")">)* ")"
  enclosedchar<terminator> = escapedchar | (~terminator any)
  escapedchar = "\\" any
}

Ristavel <: RistavelBase {
  Clause := Coinage          -- coinage
          | Composition      -- composition
          | MultiAssignment  -- multiassignment
          | Assignment       -- assignment
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
  word := ~clauseConnector ~caseInsensitive<"mynstur"> ~caseInsensitive<"mystur"> ~merktuWord ~semWord ~aldreiWord ~ekkertWord ~spilaWord ~spiladuWord ~spilidWord ~likaWord ~einnigWord ~degreeAdverb ~scaleAdverb ~scaleAdjective ~numeral ~sinnum ~numberWord letter+

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
}
`), it = Lr.Ristavel, Cr = {
  Text(r, e, t, n, s) {
    const i = n && n.children ? n.children : [];
    return [e].concat(i).map((c) => c.translate()).join(`

`);
  },
  Paragraph(r, e, t) {
    const n = t.children || [];
    return [r].concat(n).map((i) => i.translate()).join("; ");
  },
  Sentence(r, e, t) {
    const n = r.translate(), s = e.translate();
    return [n, ...s].join("");
  },
  ClauseTail(r, e) {
    const t = e.translate();
    return t ? "." + t : "";
  },
  Clause(r) {
    const e = r.translate();
    if (!Array.isArray(e)) return e;
    if (!e || e.length === 0) return "";
    const t = e.find((i) => i && i.kind === "word"), n = t ? t.text : "", s = e.filter((i) => i && i.kind === "quote").map((i) => JSON.stringify(i.text));
    return `${n}(${s.join(", ")})`;
  },
  word(r) {
    return { kind: "word", text: this.sourceString };
  },
  quotation(r, e, t) {
    return { kind: "quote", text: e.translate() };
  },
  quotedContent(r) {
    const e = this.sourceString;
    let t = "", n = 0;
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      i === "(" ? n++ : i === ")" && n > 0 && n--, i === "," && n === 0 && /\d/.test(e[s - 1]) && /\d/.test(e[s + 1]) ? t += "." : t += i;
    }
    return t;
  },
  _terminal() {
    return this.sourceString;
  },
  _iter(...r) {
    return r.map((e) => e.translate());
  }
}, Rr = { lpf: ["lágtíðnihleypir", "lth"], hpf: ["háttíðnihleypir", "hth"], accelerate: ["hröðun", "inngjöf"], adsr: ["umslag"], always: "alltaf", amp: "mögnun", arp: ["runa", "röð"], attack: "svörun", bank: "banki", begin: "byrja", cat: ["samanlíming", "samsetning", "strengjalíming", "strengjasamsetning", "líming", "Lím"], chop: ["höggva"], choose: ["velja"], color: "litur", compress: "þjappa", compressor: "þjappari", cpm: ["hringrásarhraði", "hrh", "hringirámínútu", "hám"], crush: ["kremja", "milja", "kreista"], cut: ["klippa", "saxa"], cutoff: ["afskurður"], delay: ["endurkast", "endurvarp"], distort: ["bjaga", "bjögun"], echo: ["endurómun", "ómun"], echoWith: ["ómunMeð", "ómaMeð"], every: "hvert", expand: "útvíkka", extend: "framlengja", fast: ["fljótt", "hratt", "hraðar", "snöggt"], fastChunk: "hraðBiti", fastGap: "hraðBil", filter: "sía", filterValues: "síuGildi", filterWhen: "síaÞegar", floor: "gólf", freq: "tíðni", gain: ["hljóðstyrkur", "styrkur", "læti", "hávaði"], hurry: ["drífaSig", "hraðaÁsér", "flýtaSér"], hush: ["uss", "suss", "þögn"], mask: ["gríma"], note: ["nótur", "nóta"], pan: ["staðsetning", "staður"], range: ["bil", "svið"], room: ["rými", "ómur"], s: "h", scale: "skali", scramble: ["rugla", "hræra"], setcpm: ["setjaHringrásarhraða", "setjaHrh", "setjaHringirámínútu", "setjaHám"], slow: "hægt", slowcat: ["hæglíming", "hægsetning", "hægLím"], sometimes: ["stundum"], sometimesBy: ["stundumUm"], sound: "hljóð", speed: "hraði", spread: "dreifa", squiz: ["kreista"], stack: ["bunki", "stafli"], striate: ["ráka", "rispa", "strífa"], struct: ["uppbygging", "strúktúr"], sustain: "viðhalda", take: "taka", velocity: "hraði", vowel: ["sérhljóðar", "sérhljóði"], when: "þegar", whenKey: "þegarLykill", zoom: "stækka" }, Pr = { red: "rauður", green: "grænn", blue: "blár", yellow: "gulur", cyan: "blágrænn", magenta: "fjólublár", black: "svartur", white: "hvítur", gray: "grár", orange: "appelsínugulur", purple: "fjólublár", pink: "bleikur", brown: "brúnn" }, jr = { botn: 50, efriBotn: 120, neðriMiðja: 300, miðja: 1e3, efriMiðja: 2e3, neðriToppur: 5e3, toppur: 1e4, efriToppur: 16e3 }, Er = { b: "h", "c#": "cis", "d#": "dis", "e#": "eis", "f#": "fis", "g#": "gis", "a#": "ais", "b#": "his", cb: "ces", db: "des", eb: "es", fb: "fes", gb: "ges", ab: "as" }, Fr = { major: "dúr", minor: "moll" }, Lt = {
  functions: Rr,
  colors: Pr,
  constants: jr,
  notes: Er,
  scales: Fr
};
function Tr(r = {}) {
  const { aliasFuncs: e, aliasSamples: t, aliasNotes: n, aliasScales: s } = r;
  let i = [];
  const a = new Set(
    Object.values(Lt.functions || {}).flatMap((p) => Array.isArray(p) ? p : [p]).filter((p) => p && !/[A-Z]/.test(p))
  );
  function c(p) {
    for (const h of Array.isArray(p) ? p : [p])
      h && typeof h == "string" && a.add(h);
  }
  const u = [
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
  }, v = {
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
  }, l = (p) => {
    for (const h of ["ur", "nn", "ll", "i", "a"])
      if (p.endsWith(h) && p.length - h.length >= 2) return p.slice(0, -h.length);
    return p;
  }, o = (p) => {
    if (Object.prototype.hasOwnProperty.call(v, p)) return v[p];
    if (a.has(p)) return p;
    let h = null;
    for (const m of a) {
      const g = d[m] ? [l(m), ...d[m]] : [l(m)];
      for (const S of g)
        for (const _ of u)
          p === S + _ && (!h || S.length > h.len) && (h = { key: m, len: S.length });
    }
    return h ? h.key : p;
  }, f = {
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
  }, y = {
    mjög: 1.5,
    örlítið: 0.5,
    smá: 0.5,
    alveg: 2
  }, j = {
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
  }, R = ["minnstur", "minni", "lítill", "stór", "stærri", "stærstur"], P = { minnstur: 0.1, minni: 0.2, lítill: 0.5, stór: 0.75, stærri: 0.9, stærstur: 1 }, re = /* @__PURE__ */ new Set(["minnstur", "minni", "lítill"]), se = { "enn minni": 0.15, "voðalega lítill": 0.35, "mjög stór": 0.85 }, Ct = (p, h) => {
    const m = j[h.toLowerCase()];
    let g = P[m];
    const S = (p || "").toLowerCase();
    if (S) {
      const _ = `${S} ${m}`;
      if (Object.prototype.hasOwnProperty.call(se, _)) return se[_];
      const b = R.indexOf(m);
      if (re.has(m)) {
        const x = b > 0 ? P[R[b - 1]] : 0;
        g = Number((g - (g - x) / 2).toFixed(2));
      } else {
        const x = b < R.length - 1 ? P[R[b + 1]] : 1;
        g = Number((g + (x - g) / 2).toFixed(2));
      }
    }
    return g;
  }, ie = (...p) => {
    const h = [], m = (g) => {
      if (g) {
        if (g.ctorName === "quotation") {
          h.push(g);
          return;
        }
        if (g.children && g.children.length)
          for (const S of g.children) m(S);
      }
    };
    for (const g of p) m(g);
    return h;
  }, ve = (p) => p.map((h) => {
    const m = h.translate(), g = m && typeof m == "object" && "text" in m ? m.text : String(m);
    return JSON.stringify(g);
  }), we = (p) => {
    const h = p.translate();
    return (h && typeof h == "object" && "text" in h ? h.text : String(h || "")).trim();
  }, X = (p) => {
    const h = p.translate();
    return typeof h == "object" && h && "text" in h ? h.text : String(h);
  };
  return { extended: {
    // Top-level override to collapse paragraphs when final paragraph composes names.
    Text(p, h, m, g, S) {
      const _ = [h].concat(g && g.children ? g.children : []), b = _[_.length - 1];
      let x = !1;
      if (b && b.children && b.children.length > 0) {
        const L = b.children[0];
        if (L && L.children && L.children.length > 0) {
          const Y = L.children[0];
          if (Y && Y.ctorName === "Clause") {
            const U = Y.children && Y.children[0];
            U && U.ctorName === "Clause_composition" && (x = !0);
          }
        }
      }
      if (!x)
        return _.map((L) => L.translate()).join(`

`);
      const k = (L) => {
        const Y = L && L.children ? L.children[0] : null, U = L && L.children ? L.children[1] : null, ce = U && U.children ? U.children.map((te) => te && te.children ? te.children[te.children.length - 1] : te) : [];
        return [Y].concat(ce).filter(Boolean).map((te) => te.translate()).join("; ");
      }, O = _.slice(0, -1).map(k), w = b.translate();
      return O.concat([w]).filter(Boolean).join("; ");
    },
    // Track assigned names per paragraph via a module-level stack.
    Clause_assignment(p) {
      const h = p.children || [], m = h.find((A) => A && A.ctorName === "variable"), g = h.find((A) => A && A.ctorName === "function"), S = h.find((A) => A && A.ctorName === "quotation"), _ = h.find((A) => A && A.ctorName === "_iter"), b = _ && _.numChildren > 0 ? _.child(0) : null, x = b && b.child(0) ? b.child(0).ctorName : null, k = m ? m.translate() : "", O = g ? g.translate() : "", w = S ? S.translate() : "", L = w && typeof w == "object" && "text" in w ? w.text : w, Y = JSON.stringify(L), U = i[i.length - 1];
      if (U && U.names.push(k), x === "negation_aldrei" || x === "negation_ekkert")
        return `const ${k} = silence`;
      const ce = `const ${k} = ${O}(${Y})`;
      return x === "negation_ekki" ? `${ce}; ${k}.hush()` : ce;
    },
    // Multi-subject assignment: 'Davíð og Ásta spila hljóð «bd»' binds one const per
    // subject to the same call. Every subject name is pushed to the paragraph stack
    // so the trailing stack(...) collects them (auto-stack of voices). A negation
    // applies per subject, mirroring single Assignment polarity.
    Clause_multiassignment(p) {
      const h = p.children || [], m = h.find((A) => A && A.ctorName === "SubjectList"), g = h.find((A) => A && A.ctorName === "function"), S = h.find((A) => A && A.ctorName === "quotation"), _ = h.find((A) => A && A.ctorName === "_iter"), b = _ && _.numChildren > 0 ? _.child(0) : null, x = b && b.child(0) ? b.child(0).ctorName : null, k = m ? m.translate() : [], O = g ? g.translate() : "", w = S ? S.translate() : "", L = w && typeof w == "object" && "text" in w ? w.text : w, Y = JSON.stringify(L), U = i[i.length - 1];
      if (U)
        for (const A of k) U.names.push(A);
      return k.map((A) => {
        if (x === "negation_aldrei" || x === "negation_ekkert")
          return `const ${A} = silence`;
        const te = `const ${A} = ${O}(${Y})`;
        return x === "negation_ekki" ? `${te}; ${A}.hush()` : te;
      }).join("; ");
    },
    // SubjectList -> array of lowercased variable names (2+). The plural verb and
    // the conjunction terminals are structural and contribute no names.
    SubjectList(p, h, m, g, S) {
      const _ = p.translate(), b = m.children ? m.children.map((k) => k.translate()) : [], x = S.translate();
      return [_, ...b, x];
    },
    // Additive layer: 'Líka hljóð «~ sd»' adds a voice under an auto-generated name
    // (lag2, lag3, …) keyed off how many names the paragraph already holds, then
    // pushes it so the paragraph stack collects it. Mirrors Clause_generic for the
    // method call itself.
    Clause_additive(p, h, m, g, S, _) {
      const b = o(X(h)), x = [g].concat(ie(S), ie(_)), k = `${b}(${ve(x).join(", ")})`, O = i[i.length - 1], w = `lag${(O ? O.names.length : 0) + 1}`;
      return O && O.names.push(w), `const ${w} = ${k}`;
    },
    // Imperative command: 'Spilaðu hljóð «bd»' emits a bare pattern (command mood).
    // It is NOT pushed to the paragraph stack, so no trailing stack(...) wraps it;
    // the keyword is discarded and the rest is a normal method clause that may chain
    // via ClauseTail. Mirrors Clause_generic for the method call.
    Clause_imperative(p, h, m, g, S, _) {
      const b = o(X(h)), x = [g].concat(ie(S), ie(_));
      return `${b}(${ve(x).join(", ")})`;
    },
    // Negated generic clause: 'ekki styrkur "1.2"' -> gain(0). The negated method
    // and its argument are discarded; the clause collapses to gain(0), which the
    // ClauseTail joiner chains as '.gain(0)' (or leaves bare when leading). This
    // silences just this control while preserving the rest of the method chain.
    Clause_negatedGeneric(p, h, m, g, S, _) {
      return "gain(0)";
    },
    // Nullary (argument-free) method clause: a bare method word with no quotation
    // or numeric argument, e.g. 'rev'/'palindrome'/'brak' (and Icelandic 'þögn' ->
    // hush). Mirrors Clause_generic's method-name extraction and noun normalization
    // but emits an empty argument list. ClauseTail prefixes the leading '.' when
    // chaining, so 'hljóð "bd", rev.' becomes hljóð("bd").rev().
    Clause_nullary(p) {
      return `${o(X(p))}()`;
    },
    Clause_generic(p, h, m, g, S) {
      const _ = o(X(p)), b = [m].concat(ie(g), ie(S));
      return `${_}(${ve(b).join(", ")})`;
    },
    // Prepositional noun-phrase clause: a discarded preposition (glue) plus a
    // dative noun that names the method. Mirrors Clause_generic but the method
    // name comes from the noun word after the preposition; NOUN_FORMS normalizes
    // the inflected dative (`ómi`->`ómur`, `styrk`->`styrkur`) to its locale key.
    Clause_prepphrase(p, h, m, g, S, _) {
      const b = o(X(h)), x = [g].concat(ie(S), ie(_));
      return `${b}(${ve(x).join(", ")})`;
    },
    // Degree-adverb clause: word followed by a degree adverb scaling a numeral.
    // Emits a BARE numeric product, e.g. `styrkur mjög 0.8` -> `styrkur(0.8 * 1.5)`.
    // The method name still goes through noun normalization like the generic clause.
    Clause_degree(p, h, m) {
      return `${o(X(p))}(${m.translate()})`;
    },
    // Adjective-scaling clause: a method word + a graded adjective (optionally
    // intensified), e.g. `styrkur stór` -> `styrkur(0.75)`, `styrkur mjög stór` ->
    // `styrkur(0.85)`. Emits a BARE number. Method name is noun-normalized like
    // the generic clause; it generalizes across effects (styrkur, ómur, …).
    Clause_adjscale(p, h, m) {
      return `${o(X(p))}(${m.translate()})`;
    },
    // AdjArg -> the numeric value of the (optionally adverb-intensified) adjective,
    // as a bare number literal. `scaleAdverb?` is an optional iteration node whose
    // sourceString is '' when the adverb is absent.
    AdjArg(p, h) {
      const m = p.sourceString.trim();
      return String(Ct(m || null, h.sourceString));
    },
    // Coinage clause delegates to the Coinage rule.
    Clause_coinage(p) {
      return p.translate();
    },
    // Coinage ("languaging"): `Merktu „sveifla" sem lfo` mints the word `sveifla`
    // for the function `lfo`. Coinage is a stateful declaration, so we do BOTH halves
    // at translate time: registerVocabulary(coined) so it (and its inflections)
    // normalize, and aliasFuncs(target, coined) so it is callable. Doing it here —
    // rather than emitting a call — means later clauses in the SAME program already
    // see the new word, and avoids the transpiler rewriting string args into
    // mini-notation. The clause evaluates to `silence`, so a coinage-only line is a
    // valid (silent) program. The target is noun-normalized so `sem ómurinn` works.
    Coinage(p, h, m, g, S, _, b) {
      const x = m.translate(), k = (x && typeof x == "object" && "text" in x ? x.text : String(x || "")).trim(), { kind: O, value: w } = b.translate();
      try {
        O === "sample" ? t(w, k) : O === "note" ? n(w, k) : O === "scale" ? s(w, k) : (c(k), e(w, k));
      } catch {
      }
      return "silence";
    },
    // Typed coinage targets: a kind keyword + quoted value, or a bare function word.
    CoinTarget_sample(p, h, m) {
      return { kind: "sample", value: we(m) };
    },
    CoinTarget_note(p, h, m) {
      return { kind: "note", value: we(m) };
    },
    CoinTarget_scale(p, h, m) {
      return { kind: "scale", value: we(m) };
    },
    CoinTarget_func(p) {
      return { kind: "func", value: o(X(p)) };
    },
    // DegreeArg -> the verbatim numeral, a space, a times sign, and the factor,
    // e.g. '0.8 * 1.5'. The numeral is emitted verbatim (no quotes) so the whole
    // expression is a bare JS product that evaluates to a number.
    DegreeArg(p, h) {
      const m = y[p.sourceString.toLowerCase()];
      return `${h.translate()} * ${m}`;
    },
    // Higher-order every-family clause: a method word, a numeric count, then a
    // BARE transform word, e.g. `hvert 4 rev` -> `hvert(4, rev)`. The transform is
    // emitted as a bare identifier (NOT JSON.stringified and NOT noun-normalized as
    // a control noun) so the locale alias resolves the function reference at eval
    // time (rev, palindrome, and Icelandic transform names all resolve). The method
    // head still goes through noun normalization like the generic clause.
    Clause_everyTransform(p, h, m, g, S) {
      const _ = o(X(p)), b = X(S).toLowerCase();
      return `${_}(${m.translate()}, ${b})`;
    },
    // Higher-order probabilistic clause: a method word then a BARE transform word,
    // e.g. `sometimes rev` -> `sometimes(rev)`. Like everyTransform, the transform
    // stays a bare identifier so the locale alias resolves it at eval time.
    Clause_probTransform(p, h, m) {
      const g = o(X(p)), S = X(m).toLowerCase();
      return `${g}(${S})`;
    },
    // Bare numeric argument: word followed by a digits/decimal/negative literal.
    // The number is emitted verbatim (no quotes) so it becomes a JS number, e.g.
    // `hægt 2` -> `hægt(2)` and `staðsetning -0.5` -> `staðsetning(-0.5)`. The
    // method name still goes through noun normalization like the generic clause.
    Clause_numarg(p, h, m) {
      return `${o(X(p))}(${m.translate()})`;
    },
    // numericArg delegates to its single child (TimesPhrase | numeral | numberWord);
    // each yields the bare integer/number string emitted verbatim into the JS.
    numericArg(p) {
      return p.translate();
    },
    numeral(p, h, m, g) {
      return this.sourceString;
    },
    // Worded cardinal -> its integer (as a string), e.g. 'tvö' -> "2".
    numberWord(p) {
      return String(f[this.sourceString.toLowerCase()]);
    },
    // "N sinnum": keep the count, drop the inter-token space and trailing 'sinnum'.
    timesPhrase(p, h, m) {
      return p.translate();
    },
    // Clause alt that delegates to Composition rule
    Clause_composition(p) {
      return p.translate();
    },
    // Explicit composition rule: mynstur "a b" spila <mode>
    Composition(p, h, m, g, S, _, b) {
      const x = m.translate(), O = (x && typeof x == "object" && "text" in x ? x.text : String(x || "")).trim().split(/\s+/).filter(Boolean).map((ce) => ce.toLowerCase());
      if (O.length === 0)
        throw new Error("Ógilt mynstur: auður listi af nöfnum");
      const w = b.translate(), L = w && typeof w == "object" && "kind" in w ? w.kind : String(w), Y = L === "stack" ? "stack" : L === "cat" ? "cat" : L === "randcat" ? "randcat" : "seq", U = i[i.length - 1];
      return U && (U.explicitComposition = !0), `${Y}(${O.join(",")})`;
    },
    CompositionMode_stack(p) {
      return { kind: "stack" };
    },
    CompositionMode_cat(p, h, m) {
      return { kind: "cat" };
    },
    CompositionMode_seq(p, h, m, g, S) {
      return { kind: "seq" };
    },
    // Composition-list connectives: 'saman'->stack, 'eða'->randcat,
    // 'síðan'/'svo'/'þá'->cat. These mode words live only after 'spila' inside a
    // Composition, so they never clash with clause-level connectors.
    CompositionMode_stacksyn(p) {
      return { kind: "stack" };
    },
    CompositionMode_randcat(p) {
      return { kind: "randcat" };
    },
    CompositionMode_catsyn(p) {
      return { kind: "cat" };
    },
    // Override Paragraph to inject default stack(...) at the end
    Paragraph(p, h, m) {
      i.push({ names: [], explicitComposition: !1 });
      const g = m && m.children ? m.children : [], S = [p].concat(g), _ = S.map((O) => O.translate());
      let b = !1;
      const x = S[S.length - 1];
      if (x && x.children && x.children.length > 0) {
        const O = x.children[0];
        if (O && O.ctorName === "Clause") {
          const w = O.children && O.children[0];
          w && w.ctorName === "Clause_composition" && (b = !0);
        }
      }
      const k = i.pop() || { names: [] };
      return k.names.length > 0 && !b && _.push(`stack(${k.names.join(",")})`), _.join("; ");
    },
    variable(p) {
      return this.sourceString.toLowerCase();
    },
    function(p) {
      return o(this.sourceString.toLowerCase());
    }
  }, registerVocabulary: c };
}
const Mr = "ristavel", qr = Lt;
function Br(r = {}) {
  const { extended: e, registerVocabulary: t } = Tr(r.locale), n = it.createSemantics().addOperation("translate", { ...Cr, ...e });
  return { grammar: it, semantics: n, registerVocabulary: t };
}
export {
  Br as createLanguage,
  qr as locale,
  Mr as name
};
