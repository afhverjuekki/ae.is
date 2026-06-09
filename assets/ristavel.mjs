function me(t) {
  const e = t || "";
  return function() {
    throw new Error(
      "this method " + e + " is abstract! (it has no implementation in class " + this.constructor.name + ")"
    );
  };
}
function Ke(t, e) {
  if (!t)
    throw new Error(e || "Assertion failed");
}
function Br(t, e, r) {
  let n;
  Object.defineProperty(t, e, {
    get() {
      return n || (n = r.call(this)), n;
    }
  });
}
function Vn(t, e) {
  const r = [];
  for (; e-- > 0; )
    r.push(t());
  return r;
}
function Jn(t, e) {
  return new Array(e + 1).join(t);
}
function nr(t, e) {
  return Vn(() => t, e);
}
function kr(t) {
  const e = [];
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    t.lastIndexOf(n) !== r && e.indexOf(n) < 0 && e.push(n);
  }
  return e;
}
function Hn(t) {
  const e = [];
  return t.forEach((r) => {
    e.indexOf(r) < 0 && e.push(r);
  }), e;
}
function tt(t) {
  const e = t[0];
  return e === e.toUpperCase();
}
function Un(t) {
  return !tt(t);
}
function Kn(t, e, r) {
  return t.length < e ? Jn(" ", e - t.length) + t : t;
}
function rt() {
  this.strings = [];
}
rt.prototype.append = function(t) {
  this.strings.push(t);
};
rt.prototype.contents = function() {
  return this.strings.join("");
};
const Ir = (t) => String.fromCodePoint(parseInt(t, 16));
function Qn(t) {
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
        return Ir(t.slice(2, 4));
      case "u":
        return t.charAt(2) === "{" ? Ir(t.slice(3, -1)) : Ir(t.slice(2, 6));
      default:
        return t.charAt(1);
    }
  else
    return t;
}
function qr(t) {
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
function Xn(t, e = "unexpected null value") {
  if (t == null)
    throw new Error(e);
  return t;
}
const ia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  StringBuffer: rt,
  abstract: me,
  assert: Ke,
  checkNotNull: Xn,
  copyWithoutDuplicates: Hn,
  defineLazyProperty: Br,
  getDuplicates: kr,
  isLexical: Un,
  isSyntactic: tt,
  padLeft: Kn,
  repeat: nr,
  repeatFn: Vn,
  repeatStr: Jn,
  unescapeCodePoint: Qn,
  unexpectedObjToString: qr
}, Symbol.toStringTag, { value: "Module" })), Zn = (t) => new RegExp(String.raw`\p{${t}}`, "u"), Dr = Object.fromEntries(
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
  ].map((t) => [t, Zn(t)])
);
Dr.Ltmo = /\p{Lt}|\p{Lm}|\p{Lo}/u;
const An = Object.fromEntries(
  ["XID_Start", "XID_Continue", "White_Space"].map((t) => [t, Zn(t)])
);
class j {
  constructor() {
    if (this.constructor === j)
      throw new Error("PExpr cannot be instantiated -- it's abstract");
  }
  // Set the `source` property to the interval containing the source for this expression.
  withSource(e) {
    return e && (this.source = e.trimmed()), this;
  }
}
const le = Object.create(j.prototype), pe = Object.create(j.prototype);
class ae extends j {
  constructor(e) {
    super(), this.obj = e;
  }
}
class he extends j {
  constructor(e, r) {
    super(), this.from = e, this.to = r, this.matchCodePoint = e.length > 1 || r.length > 1;
  }
}
class fe extends j {
  constructor(e) {
    super(), this.index = e;
  }
}
class te extends j {
  constructor(e) {
    super(), this.terms = e;
  }
}
class sr extends te {
  constructor(e, r, n) {
    const s = e.rules[r].body;
    super([n, s]), this.superGrammar = e, this.name = r, this.body = n;
  }
}
class ir extends te {
  constructor(e, r, n, s) {
    const o = e.rules[r].body;
    super([...n, o, ...s]), this.superGrammar = e, this.ruleName = r, this.expansionPos = n.length;
  }
}
class se extends j {
  constructor(e) {
    super(), this.factors = e;
  }
}
class ge extends j {
  constructor(e) {
    super(), this.expr = e;
  }
}
class nt extends ge {
}
class wt extends ge {
}
class We extends ge {
}
nt.prototype.operator = "*";
wt.prototype.operator = "+";
We.prototype.operator = "?";
nt.prototype.minNumMatches = 0;
wt.prototype.minNumMatches = 1;
We.prototype.minNumMatches = 0;
nt.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
wt.prototype.maxNumMatches = Number.POSITIVE_INFINITY;
We.prototype.maxNumMatches = 1;
class ie extends j {
  constructor(e) {
    super(), this.expr = e;
  }
}
class ve extends j {
  constructor(e) {
    super(), this.expr = e;
  }
}
class be extends j {
  constructor(e) {
    super(), this.expr = e;
  }
}
class J extends j {
  constructor(e, r = []) {
    super(), this.ruleName = e, this.args = r;
  }
  isSyntactic() {
    return tt(this.ruleName);
  }
  // This method just caches the result of `this.toString()` in a non-enumerable property.
  toMemoKey() {
    return this._memoKey || Object.defineProperty(this, "_memoKey", { value: this.toString() }), this._memoKey;
  }
}
class oe extends j {
  constructor(e) {
    if (super(), this.categoryOrProp = e, e in Dr)
      this.pattern = Dr[e];
    else if (e in An)
      this.pattern = An[e];
    else
      throw new Error(
        `Invalid Unicode category or property name: ${JSON.stringify(e)}`
      );
  }
}
function X(t, e) {
  let r;
  return e ? (r = new Error(e.getLineAndColumnMessage() + t), r.shortMessage = t, r.interval = e) : r = new Error(t), r;
}
function Or() {
  return X("Interval sources don't match");
}
function oa(t) {
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
function aa(t, e, r) {
  const n = e ? `Grammar ${t} is not declared in namespace '${e}'` : "Undeclared grammar " + t;
  return X(n, r);
}
function ua(t, e) {
  return X("Grammar " + t.name + " is already declared in this namespace");
}
function ca(t) {
  return X(`Grammar '${t.name}' does not support incremental parsing`);
}
function Yn(t, e, r) {
  return X(
    "Rule " + t + " is not declared in grammar " + e,
    r
  );
}
function la(t, e, r) {
  return X(
    "Cannot override rule " + t + " because it is not declared in " + e,
    r
  );
}
function pa(t, e, r) {
  return X(
    "Cannot extend rule " + t + " because it is not declared in " + e,
    r
  );
}
function wn(t, e, r, n) {
  let s = "Duplicate declaration for rule '" + t + "' in grammar '" + e + "'";
  return e !== r && (s += " (originally declared in '" + r + "')"), X(s, n);
}
function es(t, e, r, n) {
  return X(
    "Wrong number of parameters for rule " + t + " (expected " + e + ", got " + r + ")",
    n
  );
}
function ha(t, e, r, n) {
  return X(
    "Wrong number of arguments for rule " + t + " (expected " + e + ", got " + r + ")",
    n
  );
}
function _n(t, e, r) {
  return X(
    "Duplicate parameter names in rule " + t + ": " + e.join(", "),
    r
  );
}
function fa(t, e) {
  return X(
    "Invalid parameter to rule " + t + ": " + e + " has arity " + e.getArity() + ", but parameter expressions must have arity 1",
    e.source
  );
}
const da = "NOTE: A _syntactic rule_ is a rule whose name begins with a capital letter. See https://ohmjs.org/d/svl for more details.";
function ma(t, e) {
  return X(
    "Cannot apply syntactic rule " + t + " from here (inside a lexical context)",
    e.source
  );
}
function ga(t) {
  const { ruleName: e } = t;
  return X(
    `applySyntactic is for syntactic rules, but '${e}' is a lexical rule. ` + da,
    t.source
  );
}
function va(t) {
  return X(
    "applySyntactic is not required here (in a syntactic context)",
    t.source
  );
}
function bn(t, e) {
  return X("Incorrect argument type: expected " + t, e.source);
}
function ya(t) {
  return X("'...' can appear at most once in a rule body", t.source);
}
function Aa(t) {
  const e = t._node;
  Ke(e && e.isNonterminal() && e.ctorName === "escapeChar_unicodeCodePoint");
  const r = t.children.slice(1, -1).map((s) => s.source), n = r[0].coverageWith(...r.slice(1));
  return X(
    `U+${n.contents} is not a valid Unicode code point`,
    n
  );
}
function ts(t, e) {
  const r = e.length > 0 ? e[e.length - 1].args : [];
  let s = "Nullable expression " + t.expr.substituteParams(r) + " is not allowed inside '" + t.operator + "' (possible infinite loop)";
  if (e.length > 0) {
    const o = e.map((a) => new J(a.ruleName, a.args)).join(`
`);
    s += `
Application stack (most recent application last):
` + o;
  }
  return X(s, t.expr.source);
}
function rs(t, e, r, n) {
  return X(
    "Rule " + t + " involves an alternation which has inconsistent arity (expected " + e + ", got " + r + ")",
    n.source
  );
}
function wa(t) {
  const e = t.map((r) => r.message);
  return X(["Errors:"].concat(e).join(`
- `), t[0].interval);
}
function _a(t, e, r, n) {
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
`), l = X(a);
  return l.name = "missingSemanticAction", l;
}
function ba(t) {
  if (t.length === 1)
    throw t[0];
  if (t.length > 1)
    throw wa(t);
}
function Ia(t) {
  let e = 0;
  return t.map((n) => {
    const s = n.toString();
    return e = Math.max(e, s.length), s;
  }).map((n) => Kn(n, e));
}
function In(t, e, r) {
  const n = t.length, s = t.slice(0, r), o = t.slice(r + e.length);
  return (s + e + o).substr(0, n);
}
function Ca(...t) {
  const e = this, { offset: r } = e, { repeatStr: n } = ia, s = new rt();
  s.append("Line " + e.lineNum + ", col " + e.colNum + `:
`);
  const o = Ia([
    e.prevLine == null ? 0 : e.lineNum - 1,
    e.lineNum,
    e.nextLine == null ? 0 : e.lineNum + 1
  ]), a = (v, m, y) => {
    s.append(y + o[v] + " | " + m + `
`);
  };
  e.prevLine != null && a(0, e.prevLine, "  "), a(1, e.line, "> ");
  const l = e.line.length;
  let c = n(" ", l + 1);
  for (let v = 0; v < t.length; ++v) {
    let m = t[v][0], y = t[v][1];
    Ke(m >= 0 && m <= y, "range start must be >= 0 and <= end");
    const I = r - e.colNum + 1;
    m = Math.max(0, m - I), y = Math.min(y - I, l), c = In(c, n("~", y - m), m);
  }
  const d = 2 + o[1].length + 3;
  return s.append(n(" ", d)), c = In(c, "^", e.colNum - 1), s.append(c.replace(/ +$/, "") + `
`), e.nextLine != null && a(2, e.nextLine, "  "), s.contents();
}
let Nr = [];
function ns(t) {
  Nr.push(t);
}
function xa(t) {
  Nr.forEach((e) => {
    e(t);
  }), Nr = null;
}
function Mr(t, e) {
  let r = 1, n = 1, s = 0, o = 0, a = null, l = null, c = -1;
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
  c >= 0 && (l = t.slice(c, o).replace(/\r?\n$/, ""));
  const v = t.slice(o, d).replace(/\r$/, "");
  return {
    offset: e,
    lineNum: r,
    colNum: n,
    line: v,
    prevLine: l,
    nextLine: a,
    toString: Ca
  };
}
function ss(t, e, ...r) {
  return Mr(t, e).toString(...r);
}
const Cn = /* @__PURE__ */ (() => {
  let t = 0;
  return (e) => "" + e + t++;
})();
class ue {
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
    return ue.coverage(...e, this);
  }
  collapsedLeft() {
    return new ue(this.sourceString, this.startIdx, this.startIdx);
  }
  collapsedRight() {
    return new ue(this.sourceString, this.endIdx, this.endIdx);
  }
  getLineAndColumn() {
    return Mr(this.sourceString, this.startIdx);
  }
  getLineAndColumnMessage() {
    const e = [this.startIdx, this.endIdx];
    return ss(this.sourceString, this.startIdx, e);
  }
  // Returns an array of 0, 1, or 2 intervals that represents the result of the
  // interval difference operation.
  minus(e) {
    if (this.sourceString !== e.sourceString)
      throw Or();
    return this.startIdx === e.startIdx && this.endIdx === e.endIdx ? [] : this.startIdx < e.startIdx && e.endIdx < this.endIdx ? [
      new ue(this.sourceString, this.startIdx, e.startIdx),
      new ue(this.sourceString, e.endIdx, this.endIdx)
    ] : this.startIdx < e.endIdx && e.endIdx < this.endIdx ? [new ue(this.sourceString, e.endIdx, this.endIdx)] : this.startIdx < e.startIdx && e.startIdx < this.endIdx ? [new ue(this.sourceString, this.startIdx, e.startIdx)] : [this];
  }
  // Returns a new Interval that has the same extent as this one, but which is relative
  // to `that`, an Interval that fully covers this one.
  relativeTo(e) {
    if (this.sourceString !== e.sourceString)
      throw Or();
    return Ke(
      this.startIdx >= e.startIdx && this.endIdx <= e.endIdx,
      "other interval does not cover this one"
    ), new ue(
      this.sourceString,
      this.startIdx - e.startIdx,
      this.endIdx - e.startIdx
    );
  }
  // Returns a new Interval which contains the same contents as this one,
  // but with whitespace trimmed from both ends.
  trimmed() {
    const { contents: e } = this, r = this.startIdx + e.match(/^\s*/)[0].length, n = this.endIdx - e.match(/\s*$/)[0].length;
    return new ue(this.sourceString, r, n);
  }
  subInterval(e, r) {
    const n = this.startIdx + e;
    return new ue(this.sourceString, n, n + r);
  }
}
ue.coverage = function(t, ...e) {
  let { startIdx: r, endIdx: n } = t;
  for (const s of e) {
    if (s.sourceString !== t.sourceString)
      throw Or();
    r = Math.min(r, s.startIdx), n = Math.max(n, s.endIdx);
  }
  return new ue(t.sourceString, r, n);
};
const Fa = 65535, Sa = 1114111;
class or {
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
    return e > Fa && (this.pos += 1), this.examinedLength = Math.max(this.examinedLength, this.pos), e;
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
    return new ue(this.source, e, r || this.pos);
  }
}
class is {
  constructor(e, r, n, s, o, a, l) {
    this.matcher = e, this.input = r, this.startExpr = n, this._cst = s, this._cstOffset = o, this._rightmostFailurePosition = a, this._rightmostFailures = l, this.failed() && (Br(this, "message", function() {
      const c = "Expected " + this.getExpectedText();
      return ss(this.input, this.getRightmostFailurePosition()) + c;
    }), Br(this, "shortMessage", function() {
      const c = "expected " + this.getExpectedText(), d = Mr(
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
    const e = new rt();
    let r = this.getRightmostFailures();
    r = r.filter((n) => !n.isFluffy());
    for (let n = 0; n < r.length; n++)
      n > 0 && (n === r.length - 1 ? e.append(r.length > 2 ? ", or " : " or ") : e.append(", ")), e.append(r[n].toString());
    return e.contents();
  }
  getInterval() {
    const e = this.getRightmostFailurePosition();
    return new ue(this.input, e, e);
  }
}
class Ea {
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
        const l = n[a];
        this.isInvolved(l) || o.push(l);
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
const Ba = "✗", ka = "✓", Da = "⋅", Oa = "⇒", Na = "␉", La = "␊", $a = "␍", Lr = {
  succeeded: 1,
  isRootNode: 2,
  isImplicitSpaces: 4,
  isMemoized: 8,
  isHeadOfLeftRecursion: 16,
  terminatesLR: 32
};
function Pa(t) {
  return nr(" ", t).join("");
}
function Ra(t, e, r) {
  const n = os(t.slice(e, e + r));
  return n.length < r ? n + nr(" ", r - n.length).join("") : n;
}
function os(t) {
  return typeof t == "string" ? t.replace(/ /g, Da).replace(/\t/g, Na).replace(/\n/g, La).replace(/\r/g, $a) : String(t);
}
class He {
  constructor(e, r, n, s, o, a, l) {
    this.input = e, this.pos = this.pos1 = r, this.pos2 = n, this.source = new ue(e, r, n), this.expr = s, this.bindings = a, this.children = l || [], this.terminatingLREntry = null, this._flags = o ? Lr.succeeded : 0;
  }
  get displayString() {
    return this.expr.toDisplayString();
  }
  clone() {
    return this.cloneWithExpr(this.expr);
  }
  cloneWithExpr(e) {
    const r = new He(
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
    this.terminatingLREntry = new He(
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
    function s(o, a, l) {
      let c = !0;
      n.enter && n.enter.call(r, o, a, l) === He.prototype.SKIP && (c = !1), c && (o.children.forEach((d) => {
        s(d, o, l + 1);
      }), n.exit && n.exit.call(r, o, a, l));
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
    const e = new rt();
    return this.walk((r, n, s) => {
      if (!r)
        return this.SKIP;
      if (r.expr.constructor.name !== "Alt") {
        if (e.append(Ra(r.input, r.pos, 10) + Pa(s * 2 + 1)), e.append((r.succeeded ? ka : Ba) + " " + r.displayString), r.isHeadOfLeftRecursion && e.append(" (LR)"), r.succeeded) {
          const a = os(r.source.contents);
          e.append(" " + Oa + "  "), e.append(typeof a == "string" ? '"' + a + '"' : a);
        }
        e.append(`
`);
      }
    }), e.contents();
  }
}
He.prototype.SKIP = {};
Object.keys(Lr).forEach((t) => {
  const e = Lr[t];
  Object.defineProperty(He.prototype, t, {
    get() {
      return (this._flags & e) !== 0;
    },
    set(r) {
      r ? this._flags |= e : this._flags &= ~e;
    }
  });
});
j.prototype.allowsSkippingPrecedingSpace = me("allowsSkippingPrecedingSpace");
le.allowsSkippingPrecedingSpace = pe.allowsSkippingPrecedingSpace = J.prototype.allowsSkippingPrecedingSpace = ae.prototype.allowsSkippingPrecedingSpace = he.prototype.allowsSkippingPrecedingSpace = oe.prototype.allowsSkippingPrecedingSpace = function() {
  return !0;
};
te.prototype.allowsSkippingPrecedingSpace = ge.prototype.allowsSkippingPrecedingSpace = be.prototype.allowsSkippingPrecedingSpace = ve.prototype.allowsSkippingPrecedingSpace = ie.prototype.allowsSkippingPrecedingSpace = fe.prototype.allowsSkippingPrecedingSpace = se.prototype.allowsSkippingPrecedingSpace = function() {
  return !1;
};
let $t;
ns((t) => {
  $t = t;
});
let Qt;
j.prototype.assertAllApplicationsAreValid = function(t, e) {
  Qt = 0, this._assertAllApplicationsAreValid(t, e);
};
j.prototype._assertAllApplicationsAreValid = me(
  "_assertAllApplicationsAreValid"
);
le._assertAllApplicationsAreValid = pe._assertAllApplicationsAreValid = ae.prototype._assertAllApplicationsAreValid = he.prototype._assertAllApplicationsAreValid = fe.prototype._assertAllApplicationsAreValid = oe.prototype._assertAllApplicationsAreValid = function(t, e) {
};
be.prototype._assertAllApplicationsAreValid = function(t, e) {
  Qt++, this.expr._assertAllApplicationsAreValid(t, e), Qt--;
};
te.prototype._assertAllApplicationsAreValid = function(t, e) {
  for (let r = 0; r < this.terms.length; r++)
    this.terms[r]._assertAllApplicationsAreValid(t, e);
};
se.prototype._assertAllApplicationsAreValid = function(t, e) {
  for (let r = 0; r < this.factors.length; r++)
    this.factors[r]._assertAllApplicationsAreValid(t, e);
};
ge.prototype._assertAllApplicationsAreValid = ie.prototype._assertAllApplicationsAreValid = ve.prototype._assertAllApplicationsAreValid = function(t, e) {
  this.expr._assertAllApplicationsAreValid(t, e);
};
J.prototype._assertAllApplicationsAreValid = function(t, e, r = !1) {
  const n = e.rules[this.ruleName], s = tt(t) && Qt === 0;
  if (!n)
    throw Yn(this.ruleName, e.name, this.source);
  if (!r && tt(this.ruleName) && !s)
    throw ma(this.ruleName, this);
  const o = this.args.length, a = n.formals.length;
  if (o !== a)
    throw ha(this.ruleName, a, o, this.source);
  const l = $t && n === $t.rules.applySyntactic;
  if ($t && n === $t.rules.caseInsensitive && !(this.args[0] instanceof ae))
    throw bn('a Terminal (e.g. "abc")', this.args[0]);
  if (l) {
    const d = this.args[0];
    if (!(d instanceof J))
      throw bn("a syntactic rule application", d);
    if (!tt(d.ruleName))
      throw ga(d);
    if (s)
      throw va(this);
  }
  this.args.forEach((d) => {
    if (d._assertAllApplicationsAreValid(t, e, l), d.getArity() !== 1)
      throw fa(this.ruleName, d);
  });
};
j.prototype.assertChoicesHaveUniformArity = me(
  "assertChoicesHaveUniformArity"
);
le.assertChoicesHaveUniformArity = pe.assertChoicesHaveUniformArity = ae.prototype.assertChoicesHaveUniformArity = he.prototype.assertChoicesHaveUniformArity = fe.prototype.assertChoicesHaveUniformArity = be.prototype.assertChoicesHaveUniformArity = oe.prototype.assertChoicesHaveUniformArity = function(t) {
};
te.prototype.assertChoicesHaveUniformArity = function(t) {
  if (this.terms.length === 0)
    return;
  const e = this.terms[0].getArity();
  for (let r = 0; r < this.terms.length; r++) {
    const n = this.terms[r];
    n.assertChoicesHaveUniformArity();
    const s = n.getArity();
    if (e !== s)
      throw rs(t, e, s, n);
  }
};
sr.prototype.assertChoicesHaveUniformArity = function(t) {
  const e = this.terms[0].getArity(), r = this.terms[1].getArity();
  if (e !== r)
    throw rs(t, r, e, this.terms[0]);
};
se.prototype.assertChoicesHaveUniformArity = function(t) {
  for (let e = 0; e < this.factors.length; e++)
    this.factors[e].assertChoicesHaveUniformArity(t);
};
ge.prototype.assertChoicesHaveUniformArity = function(t) {
  this.expr.assertChoicesHaveUniformArity(t);
};
ie.prototype.assertChoicesHaveUniformArity = function(t) {
};
ve.prototype.assertChoicesHaveUniformArity = function(t) {
  this.expr.assertChoicesHaveUniformArity(t);
};
J.prototype.assertChoicesHaveUniformArity = function(t) {
};
j.prototype.assertIteratedExprsAreNotNullable = me(
  "assertIteratedExprsAreNotNullable"
);
le.assertIteratedExprsAreNotNullable = pe.assertIteratedExprsAreNotNullable = ae.prototype.assertIteratedExprsAreNotNullable = he.prototype.assertIteratedExprsAreNotNullable = fe.prototype.assertIteratedExprsAreNotNullable = oe.prototype.assertIteratedExprsAreNotNullable = function(t) {
};
te.prototype.assertIteratedExprsAreNotNullable = function(t) {
  for (let e = 0; e < this.terms.length; e++)
    this.terms[e].assertIteratedExprsAreNotNullable(t);
};
se.prototype.assertIteratedExprsAreNotNullable = function(t) {
  for (let e = 0; e < this.factors.length; e++)
    this.factors[e].assertIteratedExprsAreNotNullable(t);
};
ge.prototype.assertIteratedExprsAreNotNullable = function(t) {
  if (this.expr.assertIteratedExprsAreNotNullable(t), this.expr.isNullable(t))
    throw ts(this, []);
};
We.prototype.assertIteratedExprsAreNotNullable = ie.prototype.assertIteratedExprsAreNotNullable = ve.prototype.assertIteratedExprsAreNotNullable = be.prototype.assertIteratedExprsAreNotNullable = function(t) {
  this.expr.assertIteratedExprsAreNotNullable(t);
};
J.prototype.assertIteratedExprsAreNotNullable = function(t) {
  this.args.forEach((e) => {
    e.assertIteratedExprsAreNotNullable(t);
  });
};
class Wr {
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
class st extends Wr {
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
class ja extends Wr {
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
    return Un(this.ctorName);
  }
  isSyntactic() {
    return tt(this.ctorName);
  }
}
class as extends Wr {
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
j.prototype.eval = me("eval");
le.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = e.nextCodePoint();
  return n !== void 0 ? (t.pushBinding(new st(String.fromCodePoint(n).length), r), !0) : (t.processFailure(r, this), !1);
};
pe.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return e.atEnd() ? (t.pushBinding(new st(0), r), !0) : (t.processFailure(r, this), !1);
};
ae.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return e.matchString(this.obj) ? (t.pushBinding(new st(this.obj.length), r), !0) : (t.processFailure(r, this), !1);
};
he.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = this.matchCodePoint ? e.nextCodePoint() : e.nextCharCode();
  return n !== void 0 && this.from.codePointAt(0) <= n && n <= this.to.codePointAt(0) ? (t.pushBinding(new st(String.fromCodePoint(n).length), r), !0) : (t.processFailure(r, this), !1);
};
fe.prototype.eval = function(t) {
  return t.eval(t.currentApplication().args[this.index]);
};
be.prototype.eval = function(t) {
  t.enterLexifiedContext();
  const e = t.eval(this.expr);
  return t.exitLexifiedContext(), e;
};
te.prototype.eval = function(t) {
  for (let e = 0; e < this.terms.length; e++)
    if (t.eval(this.terms[e]))
      return !0;
  return !1;
};
se.prototype.eval = function(t) {
  for (let e = 0; e < this.factors.length; e++) {
    const r = this.factors[e];
    if (!t.eval(r))
      return !1;
  }
  return !0;
};
ge.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = this.getArity(), s = [], o = [];
  for (; s.length < n; )
    s.push([]), o.push([]);
  let a = 0, l = r, c;
  for (; a < this.maxNumMatches && t.eval(this.expr); ) {
    if (e.pos === l)
      throw ts(this, t._applicationStack);
    l = e.pos, a++;
    const y = t._bindings.splice(t._bindings.length - n, n), I = t._bindingOffsets.splice(
      t._bindingOffsets.length - n,
      n
    );
    for (c = 0; c < y.length; c++)
      s[c].push(y[c]), o[c].push(I[c]);
  }
  if (a < this.minNumMatches)
    return !1;
  let d = t.posToOffset(r), v = 0;
  if (a > 0) {
    const y = s[n - 1], I = o[n - 1], S = I[I.length - 1] + y[y.length - 1].matchLength;
    d = o[0][0], v = S - d;
  }
  const m = this instanceof We;
  for (c = 0; c < s.length; c++)
    t._bindings.push(
      new as(s[c], o[c], v, m)
    ), t._bindingOffsets.push(d);
  return !0;
};
ie.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  t.pushFailuresInfo();
  const n = t.eval(this.expr);
  return t.popFailuresInfo(), n ? (t.processFailure(r, this), !1) : (e.pos = r, !0);
};
ve.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos;
  return t.eval(this.expr) ? (e.pos = r, !0) : !1;
};
J.prototype.eval = function(t) {
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
J.prototype.handleCycle = function(t) {
  const e = t.getCurrentPosInfo(), { currentLeftRecursion: r } = e, n = this.toMemoKey();
  let s = e.memo[n];
  return r && r.headApplication.toMemoKey() === n ? s.updateInvolvedApplicationMemoKeys() : s || (s = e.memoize(n, {
    matchLength: 0,
    examinedLength: 0,
    value: !1,
    rightmostFailureOffset: -1
  }), e.startLeftRecursion(this, s)), t.useMemoizedResult(t.inputStream.pos, s);
};
J.prototype.reallyEval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = t.getCurrentPosInfo(), s = t.grammar.rules[this.ruleName], { body: o } = s, { description: a } = s;
  t.enterApplication(n, this), a && t.pushFailuresInfo();
  const l = e.examinedLength;
  e.examinedLength = 0;
  let c = this.evalOnce(o, t);
  const d = n.currentLeftRecursion, v = this.toMemoKey(), m = d && d.headApplication.toMemoKey() === v;
  let y;
  t.doNotMemoize ? t.doNotMemoize = !1 : m ? (c = this.growSeedResult(o, t, r, d, c), n.endLeftRecursion(), y = d, y.examinedLength = e.examinedLength - r, y.rightmostFailureOffset = t._getRightmostFailureOffset(), n.memoize(v, y)) : (!d || !d.isInvolved(v)) && (y = n.memoize(v, {
    matchLength: e.pos - r,
    examinedLength: e.examinedLength - r,
    value: c,
    failuresAtRightmostPosition: t.cloneRecordedFailures(),
    rightmostFailureOffset: t._getRightmostFailureOffset()
  }));
  const I = !!c;
  if (a && (t.popFailuresInfo(), I || t.processFailure(r, this), y && (y.failuresAtRightmostPosition = t.cloneRecordedFailures(), y.rightmostFailureOffset = t._getRightmostFailureOffset())), t.isTracing() && y) {
    const S = t.getTraceEntry(r, this, I, I ? [c] : []);
    m && (Ke(S.terminatingLREntry != null || !I), S.isHeadOfLeftRecursion = !0), y.traceEntry = S;
  }
  return e.examinedLength = Math.max(
    e.examinedLength,
    l
  ), t.exitApplication(n, c), I;
};
J.prototype.evalOnce = function(t, e) {
  const { inputStream: r } = e, n = r.pos;
  if (e.eval(t)) {
    const s = t.getArity(), o = e._bindings.splice(e._bindings.length - s, s), a = e._bindingOffsets.splice(e._bindingOffsets.length - s, s), l = r.pos - n;
    return new ja(this.ruleName, o, a, l);
  } else
    return !1;
};
J.prototype.growSeedResult = function(t, e, r, n, s) {
  if (!s)
    return !1;
  const { inputStream: o } = e;
  for (; ; ) {
    if (n.matchLength = o.pos - r, n.value = s, n.failuresAtRightmostPosition = e.cloneRecordedFailures(), e.isTracing()) {
      const a = e.trace[e.trace.length - 1];
      n.traceEntry = new He(
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
oe.prototype.eval = function(t) {
  const { inputStream: e } = t, r = e.pos, n = e.nextCodePoint();
  if (n !== void 0 && n <= Sa) {
    const s = String.fromCodePoint(n);
    if (this.pattern.test(s))
      return t.pushBinding(new st(s.length), r), !0;
  }
  return t.processFailure(r, this), !1;
};
j.prototype.getArity = me("getArity");
le.getArity = pe.getArity = ae.prototype.getArity = he.prototype.getArity = fe.prototype.getArity = J.prototype.getArity = oe.prototype.getArity = function() {
  return 1;
};
te.prototype.getArity = function() {
  return this.terms.length === 0 ? 0 : this.terms[0].getArity();
};
se.prototype.getArity = function() {
  let t = 0;
  for (let e = 0; e < this.factors.length; e++)
    t += this.factors[e].getArity();
  return t;
};
ge.prototype.getArity = function() {
  return this.expr.getArity();
};
ie.prototype.getArity = function() {
  return 0;
};
ve.prototype.getArity = be.prototype.getArity = function() {
  return this.expr.getArity();
};
function Le(t, e) {
  const r = {};
  if (t.source && e) {
    const n = t.source.relativeTo(e);
    r.sourceInterval = [n.startIdx, n.endIdx];
  }
  return r;
}
j.prototype.outputRecipe = me("outputRecipe");
le.outputRecipe = function(t, e) {
  return ["any", Le(this, e)];
};
pe.outputRecipe = function(t, e) {
  return ["end", Le(this, e)];
};
ae.prototype.outputRecipe = function(t, e) {
  return ["terminal", Le(this, e), this.obj];
};
he.prototype.outputRecipe = function(t, e) {
  return ["range", Le(this, e), this.from, this.to];
};
fe.prototype.outputRecipe = function(t, e) {
  return ["param", Le(this, e), this.index];
};
te.prototype.outputRecipe = function(t, e) {
  return ["alt", Le(this, e)].concat(
    this.terms.map((r) => r.outputRecipe(t, e))
  );
};
sr.prototype.outputRecipe = function(t, e) {
  return this.terms[0].outputRecipe(t, e);
};
ir.prototype.outputRecipe = function(t, e) {
  const r = this.terms.slice(0, this.expansionPos), n = this.terms.slice(this.expansionPos + 1);
  return [
    "splice",
    Le(this, e),
    r.map((s) => s.outputRecipe(t, e)),
    n.map((s) => s.outputRecipe(t, e))
  ];
};
se.prototype.outputRecipe = function(t, e) {
  return ["seq", Le(this, e)].concat(
    this.factors.map((r) => r.outputRecipe(t, e))
  );
};
nt.prototype.outputRecipe = wt.prototype.outputRecipe = We.prototype.outputRecipe = ie.prototype.outputRecipe = ve.prototype.outputRecipe = be.prototype.outputRecipe = function(t, e) {
  return [
    this.constructor.name.toLowerCase(),
    Le(this, e),
    this.expr.outputRecipe(t, e)
  ];
};
J.prototype.outputRecipe = function(t, e) {
  return [
    "app",
    Le(this, e),
    this.ruleName,
    this.args.map((r) => r.outputRecipe(t, e))
  ];
};
oe.prototype.outputRecipe = function(t, e) {
  return ["unicodeChar", Le(this, e), this.categoryOrProp];
};
j.prototype.introduceParams = me("introduceParams");
le.introduceParams = pe.introduceParams = ae.prototype.introduceParams = he.prototype.introduceParams = fe.prototype.introduceParams = oe.prototype.introduceParams = function(t) {
  return this;
};
te.prototype.introduceParams = function(t) {
  return this.terms.forEach((e, r, n) => {
    n[r] = e.introduceParams(t);
  }), this;
};
se.prototype.introduceParams = function(t) {
  return this.factors.forEach((e, r, n) => {
    n[r] = e.introduceParams(t);
  }), this;
};
ge.prototype.introduceParams = ie.prototype.introduceParams = ve.prototype.introduceParams = be.prototype.introduceParams = function(t) {
  return this.expr = this.expr.introduceParams(t), this;
};
J.prototype.introduceParams = function(t) {
  const e = t.indexOf(this.ruleName);
  if (e >= 0) {
    if (this.args.length > 0)
      throw new Error("Parameterized rules cannot be passed as arguments to another rule.");
    return new fe(e).withSource(this.source);
  } else
    return this.args.forEach((r, n, s) => {
      s[n] = r.introduceParams(t);
    }), this;
};
j.prototype.isNullable = function(t) {
  return this._isNullable(t, /* @__PURE__ */ Object.create(null));
};
j.prototype._isNullable = me("_isNullable");
le._isNullable = he.prototype._isNullable = fe.prototype._isNullable = wt.prototype._isNullable = oe.prototype._isNullable = function(t, e) {
  return !1;
};
pe._isNullable = function(t, e) {
  return !0;
};
ae.prototype._isNullable = function(t, e) {
  return typeof this.obj == "string" ? this.obj === "" : !1;
};
te.prototype._isNullable = function(t, e) {
  return this.terms.length === 0 || this.terms.some((r) => r._isNullable(t, e));
};
se.prototype._isNullable = function(t, e) {
  return this.factors.every((r) => r._isNullable(t, e));
};
nt.prototype._isNullable = We.prototype._isNullable = ie.prototype._isNullable = ve.prototype._isNullable = function(t, e) {
  return !0;
};
be.prototype._isNullable = function(t, e) {
  return this.expr._isNullable(t, e);
};
J.prototype._isNullable = function(t, e) {
  const r = this.toMemoKey();
  if (!Object.prototype.hasOwnProperty.call(e, r)) {
    const { body: n } = t.rules[this.ruleName], s = n.substituteParams(this.args);
    e[r] = !1, e[r] = s._isNullable(t, e);
  }
  return e[r];
};
j.prototype.substituteParams = me("substituteParams");
le.substituteParams = pe.substituteParams = ae.prototype.substituteParams = he.prototype.substituteParams = oe.prototype.substituteParams = function(t) {
  return this;
};
fe.prototype.substituteParams = function(t) {
  return Xn(t[this.index]);
};
te.prototype.substituteParams = function(t) {
  return new te(this.terms.map((e) => e.substituteParams(t)));
};
se.prototype.substituteParams = function(t) {
  return new se(this.factors.map((e) => e.substituteParams(t)));
};
ge.prototype.substituteParams = ie.prototype.substituteParams = ve.prototype.substituteParams = be.prototype.substituteParams = function(t) {
  return new this.constructor(this.expr.substituteParams(t));
};
J.prototype.substituteParams = function(t) {
  if (this.args.length === 0)
    return this;
  {
    const e = this.args.map((r) => r.substituteParams(t));
    return new J(this.ruleName, e);
  }
};
function xn(t) {
  return /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(t);
}
function zr(t) {
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
j.prototype.toArgumentNameList = me("toArgumentNameList");
le.toArgumentNameList = function(t, e) {
  return ["any"];
};
pe.toArgumentNameList = function(t, e) {
  return ["end"];
};
ae.prototype.toArgumentNameList = function(t, e) {
  return typeof this.obj == "string" && /^[_a-zA-Z0-9]+$/.test(this.obj) ? ["_" + this.obj] : ["$" + t];
};
he.prototype.toArgumentNameList = function(t, e) {
  let r = this.from + "_to_" + this.to;
  return xn(r) || (r = "_" + r), xn(r) || (r = "$" + t), [r];
};
te.prototype.toArgumentNameList = function(t, e) {
  const r = this.terms.map(
    (o) => o.toArgumentNameList(t, !0)
  ), n = [], s = r[0].length;
  for (let o = 0; o < s; o++) {
    const a = [];
    for (let c = 0; c < this.terms.length; c++)
      a.push(r[c][o]);
    const l = Hn(a);
    n.push(l.join("_or_"));
  }
  return e || zr(n), n;
};
se.prototype.toArgumentNameList = function(t, e) {
  let r = [];
  return this.factors.forEach((n) => {
    const s = n.toArgumentNameList(t, !0);
    r = r.concat(s), t += s.length;
  }), e || zr(r), r;
};
ge.prototype.toArgumentNameList = function(t, e) {
  const r = this.expr.toArgumentNameList(t, e).map(
    (n) => n[n.length - 1] === "s" ? n + "es" : n + "s"
  );
  return e || zr(r), r;
};
We.prototype.toArgumentNameList = function(t, e) {
  return this.expr.toArgumentNameList(t, e).map((r) => "opt" + r[0].toUpperCase() + r.slice(1));
};
ie.prototype.toArgumentNameList = function(t, e) {
  return [];
};
ve.prototype.toArgumentNameList = be.prototype.toArgumentNameList = function(t, e) {
  return this.expr.toArgumentNameList(t, e);
};
J.prototype.toArgumentNameList = function(t, e) {
  return [this.ruleName];
};
oe.prototype.toArgumentNameList = function(t, e) {
  return ["$" + t];
};
fe.prototype.toArgumentNameList = function(t, e) {
  return ["param" + this.index];
};
j.prototype.toDisplayString = me("toDisplayString");
te.prototype.toDisplayString = se.prototype.toDisplayString = function() {
  return this.source ? this.source.trimmed().contents : "[" + this.constructor.name + "]";
};
le.toDisplayString = pe.toDisplayString = ge.prototype.toDisplayString = ie.prototype.toDisplayString = ve.prototype.toDisplayString = be.prototype.toDisplayString = ae.prototype.toDisplayString = he.prototype.toDisplayString = fe.prototype.toDisplayString = function() {
  return this.toString();
};
J.prototype.toDisplayString = function() {
  if (this.args.length > 0) {
    const t = this.args.map((e) => e.toDisplayString());
    return this.ruleName + "<" + t.join(",") + ">";
  } else
    return this.ruleName;
};
oe.prototype.toDisplayString = function() {
  return "Unicode [" + this.categoryOrProp + "] character";
};
function Ta(t) {
  return t === "description" || t === "string" || t === "code";
}
class Ie {
  constructor(e, r, n) {
    if (!Ta(n))
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
    const e = new Ie(this.pexpr, this.text, this.type);
    return this.isFluffy() && e.makeFluffy(), e;
  }
  toKey() {
    return this.toString() + "#" + this.type;
  }
}
j.prototype.toFailure = me("toFailure");
le.toFailure = function(t) {
  return new Ie(this, "any object", "description");
};
pe.toFailure = function(t) {
  return new Ie(this, "end of input", "description");
};
ae.prototype.toFailure = function(t) {
  return new Ie(this, this.obj, "string");
};
he.prototype.toFailure = function(t) {
  return new Ie(this, JSON.stringify(this.from) + ".." + JSON.stringify(this.to), "code");
};
ie.prototype.toFailure = function(t) {
  const e = this.expr === le ? "nothing" : "not " + this.expr.toFailure(t);
  return new Ie(this, e, "description");
};
ve.prototype.toFailure = function(t) {
  return this.expr.toFailure(t);
};
J.prototype.toFailure = function(t) {
  let { description: e } = t.rules[this.ruleName];
  return e || (e = (/^[aeiouAEIOU]/.test(this.ruleName) ? "an" : "a") + " " + this.ruleName), new Ie(this, e, "description");
};
oe.prototype.toFailure = function(t) {
  return new Ie(this, "a Unicode [" + this.categoryOrProp + "] character", "description");
};
te.prototype.toFailure = function(t) {
  const r = "(" + this.terms.map((n) => n.toFailure(t)).join(" or ") + ")";
  return new Ie(this, r, "description");
};
se.prototype.toFailure = function(t) {
  const r = "(" + this.factors.map((n) => n.toFailure(t)).join(" ") + ")";
  return new Ie(this, r, "description");
};
ge.prototype.toFailure = function(t) {
  const e = "(" + this.expr.toFailure(t) + this.operator + ")";
  return new Ie(this, e, "description");
};
j.prototype.toString = me("toString");
le.toString = function() {
  return "any";
};
pe.toString = function() {
  return "end";
};
ae.prototype.toString = function() {
  return JSON.stringify(this.obj);
};
he.prototype.toString = function() {
  return JSON.stringify(this.from) + ".." + JSON.stringify(this.to);
};
fe.prototype.toString = function() {
  return "$" + this.index;
};
be.prototype.toString = function() {
  return "#(" + this.expr.toString() + ")";
};
te.prototype.toString = function() {
  return this.terms.length === 1 ? this.terms[0].toString() : "(" + this.terms.map((t) => t.toString()).join(" | ") + ")";
};
se.prototype.toString = function() {
  return this.factors.length === 1 ? this.factors[0].toString() : "(" + this.factors.map((t) => t.toString()).join(" ") + ")";
};
ge.prototype.toString = function() {
  return this.expr + this.operator;
};
ie.prototype.toString = function() {
  return "~" + this.expr;
};
ve.prototype.toString = function() {
  return "&" + this.expr;
};
J.prototype.toString = function() {
  if (this.args.length > 0) {
    const t = this.args.map((e) => e.toString());
    return this.ruleName + "<" + t.join(",") + ">";
  } else
    return this.ruleName;
};
oe.prototype.toString = function() {
  return "\\p{" + this.categoryOrProp + "}";
};
class Gr extends j {
  constructor(e) {
    super(), this.obj = e;
  }
  _getString(e) {
    const r = e.currentApplication().args[this.obj.index];
    return Ke(r instanceof ae, "expected a Terminal expression"), r.obj;
  }
  // Implementation of the PExpr API
  allowsSkippingPrecedingSpace() {
    return !0;
  }
  eval(e) {
    const { inputStream: r } = e, n = r.pos, s = this._getString(e);
    return r.matchString(s, !0) ? (e.pushBinding(new st(s.length), n), !0) : (e.processFailure(n, this), !1);
  }
  getArity() {
    return 1;
  }
  substituteParams(e) {
    return new Gr(this.obj.substituteParams(e));
  }
  toDisplayString() {
    return this.obj.toDisplayString() + " (case-insensitive)";
  }
  toFailure(e) {
    return new Ie(
      this,
      this.obj.toFailure(e) + " (case-insensitive)",
      "description"
    );
  }
  _isNullable(e, r) {
    return this.obj._isNullable(e, r);
  }
}
let us;
ns((t) => {
  us = t.rules.applySyntactic.body;
});
const Cr = new J("spaces");
class qa {
  constructor(e, r, n) {
    this.matcher = e, this.startExpr = r, this.grammar = e.grammar, this.input = e.getInput(), this.inputStream = new or(this.input), this.memoTable = e._memoTable, this.userData = void 0, this.doNotMemoize = !1, this._bindings = [], this._bindingOffsets = [], this._applicationStack = [], this._posStack = [0], this.inLexifiedContextStack = [!1], this.rightmostFailurePosition = -1, this._rightmostFailurePositionStack = [], this._recordedFailuresStack = [], n !== void 0 && (this.positionToRecordFailures = n, this.recordedFailures = /* @__PURE__ */ Object.create(null));
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
    return this.pushFailuresInfo(), this.eval(Cr), this.popBinding(), this.popFailuresInfo(), this.inputStream.pos;
  }
  skipSpacesIfInSyntacticContext() {
    return this.inSyntacticContext() ? this.skipSpaces() : this.inputStream.pos;
  }
  maybeSkipSpacesBefore(e) {
    return e.allowsSkippingPrecedingSpace() && e !== Cr ? this.skipSpacesIfInSyntacticContext() : this.inputStream.pos;
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
    return r || (r = this.memoTable[e] = new Ea()), r;
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
    if (n && r instanceof J) {
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
    if (r instanceof J) {
      const o = this.currentApplication(), a = o ? o.args : [];
      r = r.substituteParams(a);
    }
    return this.getMemoizedTraceEntry(e, r) || new He(this.input, e, this.inputStream.pos, r, n, s, this.trace);
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
    const a = r.pos, l = this.maybeSkipSpacesBefore(e);
    let c;
    this.trace && (c = this.trace, this.trace = []);
    const d = e.eval(this);
    if (this.trace) {
      const v = this._bindings.slice(n), m = this.getTraceEntry(l, e, d, v);
      m.isImplicitSpaces = e === Cr, m.isRootNode = e === this.startExpr, c.push(m), this.trace = c;
    }
    return d ? this.recordedFailures && r.pos === this.positionToRecordFailures && Object.keys(this.recordedFailures).forEach((v) => {
      this.recordedFailures[v].makeFluffy();
    }) : (r.pos = a, this.truncateBindings(n), this.userData = s), this.recordedFailures && this.recordFailures(o, !1), e === us && this.skipSpaces(), d;
  }
  getMatchResult() {
    this.grammar._setUpMatchState(this), this.eval(this.startExpr);
    let e;
    this.recordedFailures && (e = Object.keys(this.recordedFailures).map(
      (n) => this.recordedFailures[n]
    ));
    const r = this._bindings[0];
    return r && (r.grammar = this.grammar), new is(
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
class Ma {
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
    for (let l = 0; l < n.length; l++)
      o.push(void 0);
    for (const l of a)
      o.push(l);
    for (let l = 0; l < e; l++) {
      const c = o[l];
      c && c.clearObsoleteEntries(l, e);
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
      throw ca(this.grammar);
    const s = new qa(this, e, n.positionToRecordFailures);
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
    return new se([n, pe]);
  }
}
const Pt = [], $r = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
class Fn {
  constructor(e, r, n) {
    this._node = e, this.source = r, this._baseInterval = n, e.isNonterminal() && Ke(r === n), this._childWrappers = [];
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
    const r = e || [], n = r.map((a) => a._node), s = new as(n, [], -1, !1), o = this._semantics.wrap(s, null, null);
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
class we {
  constructor(e, r) {
    const n = this;
    if (this.grammar = e, this.checkedActionDicts = !1, this.Wrapper = class extends (r ? r.Wrapper : Fn) {
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
          value: Cn(s)
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
      return s.super !== we.BuiltInSemantics._getSemantics();
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
        const { actionDict: l, formals: c, builtInDefault: d } = o[a];
        let v = a;
        c.length > 0 && (v += "(" + c.join(", ") + ")");
        let m;
        r(this) && this.super[s.toLowerCase() + "s"][a] ? m = "extend" + s : m = "add" + s, n += `
    .` + m + "(" + JSON.stringify(v) + ", {";
        const y = [];
        Object.keys(l).forEach((I) => {
          if (l[I] !== d) {
            let S = l[I].toString().trim();
            S = S.replace(/^.*\(/, "function("), y.push(`
      ` + JSON.stringify(I) + ": " + S);
          }
        }), n += y.join(",") + `
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
    const s = e + "s", o = Sn(r, e), { name: a } = o, { formals: l } = o;
    this.assertNewName(a, e);
    const c = Wa(e, a, m), d = { _default: c };
    Object.keys(n).forEach((y) => {
      d[y] = n[y];
    });
    const v = e === "operation" ? new jt(a, l, d, c) : new Pr(a, d, c);
    v.checkActionDict(this.grammar), this[s][a] = v;
    function m(...y) {
      const I = this._semantics[s][a];
      if (arguments.length !== I.formals.length)
        throw new Error(
          "Invalid number of arguments passed to " + a + " " + e + " (expected " + I.formals.length + ", got " + arguments.length + ")"
        );
      const S = /* @__PURE__ */ Object.create(null);
      for (const [G, xe] of Object.entries(y)) {
        const Ee = I.formals[G];
        S[Ee] = xe;
      }
      const M = this.args;
      this.args = S;
      const H = I.execute(this._semantics, this);
      return this.args = M, H;
    }
    e === "operation" ? (this.Wrapper.prototype[a] = m, this.Wrapper.prototype[a].toString = function() {
      return "[" + a + " operation]";
    }) : (Object.defineProperty(this.Wrapper.prototype, a, {
      get: m,
      configurable: !0
      // So the property can be deleted.
    }), Object.defineProperty(this.attributeKeys, a, {
      value: Cn(a)
    }));
  }
  extendOperationOrAttribute(e, r, n) {
    const s = e + "s";
    if (Sn(r, "attribute"), !(this.super && r in this.super[s]))
      throw new Error(
        "Cannot extend " + e + " '" + r + "': did not inherit an " + e + " with that name"
      );
    if ($r(this[s], r))
      throw new Error("Cannot extend " + e + " '" + r + "' again");
    const o = this[s][r].formals, a = this[s][r].actionDict, l = Object.create(a);
    Object.keys(n).forEach((c) => {
      l[c] = n[c];
    }), this[s][r] = e === "operation" ? new jt(r, o, l) : new Pr(r, l), this[s][r].checkActionDict(this.grammar);
  }
  assertNewName(e, r) {
    if ($r(Fn.prototype, e))
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
function Sn(t, e) {
  if (!we.prototypeGrammar)
    return Ke(t.indexOf("(") === -1), {
      name: t,
      formals: []
    };
  const r = we.prototypeGrammar.match(
    t,
    e === "operation" ? "OperationSignature" : "AttributeSignature"
  );
  if (r.failed())
    throw new Error(r.message);
  return we.prototypeGrammarSemantics(r).parse();
}
function Wa(t, e, r) {
  return function(...n) {
    const o = (this._semantics.operations[e] || this._semantics.attributes[e]).formals.map((a) => this.args[a]);
    if (!this.isIteration() && n.length === 1)
      return r.apply(n[0], o);
    throw _a(this.ctorName, e, t, Pt);
  };
}
we.createSemantics = function(t, e) {
  const r = new we(
    t,
    e !== void 0 ? e : we.BuiltInSemantics._getSemantics()
  ), n = function(o) {
    if (!(o instanceof is))
      throw new TypeError(
        "Semantics expected a MatchResult, but got " + qr(o)
      );
    if (o.failed())
      throw new TypeError("cannot apply Semantics to " + o.toString());
    const a = o._cst;
    if (a.grammar !== t)
      throw new Error(
        "Cannot use a MatchResult from grammar '" + a.grammar.name + "' with a semantics for '" + t.name + "'"
      );
    const l = new or(o.input);
    return r.wrap(a, l.interval(o._cstOffset, o.input.length));
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
class jt {
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
      return s ? (Pt.push([this, n]), s.apply(r, r._children())) : r.isNonterminal() && (s = this.actionDict._nonterminal, s) ? (Pt.push([this, "_nonterminal", n]), s.apply(r, r._children())) : (Pt.push([this, "default action", n]), this.actionDict._default.apply(r, r._children()));
    } finally {
      Pt.pop();
    }
  }
}
jt.prototype.typeName = "operation";
class Pr extends jt {
  constructor(e, r, n) {
    super(e, [], r, n);
  }
  execute(e, r) {
    const n = r._node, s = e.attributeKeys[this.name];
    return $r(n, s) || (n[s] = jt.prototype.execute.call(this, e, r)), n[s];
  }
}
Pr.prototype.typeName = "attribute";
const En = ["_iter", "_terminal", "_nonterminal", "_default"];
function Bn(t) {
  return Object.keys(t.rules).sort().map((e) => t.rules[e]);
}
const za = (t) => t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
let cs, ls;
class de {
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
    return new Ma(this);
  }
  // Return true if the grammar is a built-in grammar, otherwise false.
  // NOTE: This might give an unexpected result if called before BuiltInRules is defined!
  isBuiltIn() {
    return this === de.ProtoBuiltInRules || this === de.BuiltInRules;
  }
  equals(e) {
    if (this === e)
      return !0;
    if (e == null || this.name !== e.name || this.defaultStartRule !== e.defaultStartRule || !(this.superGrammar === e.superGrammar || this.superGrammar.equals(e.superGrammar)))
      return !1;
    const r = Bn(this), n = Bn(e);
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
    return we.createSemantics(this);
  }
  extendSemantics(e) {
    return we.createSemantics(this, e._getSemantics());
  }
  // Check that every key in `actionDict` corresponds to a semantic action, and that it maps to
  // a function of the correct arity. If not, throw an exception.
  _checkTopDownActionDict(e, r, n) {
    const s = [];
    for (const o in n) {
      const a = n[o];
      if (!En.includes(o) && !(o in this.rules)) {
        s.push(`'${o}' is not a valid semantic action for '${this.name}'`);
        continue;
      }
      if (typeof a != "function") {
        s.push(`'${o}' must be a function in an action dictionary for '${this.name}'`);
        continue;
      }
      const c = a.length, d = this._topDownActionArity(o);
      if (c !== d) {
        let v;
        o === "_iter" || o === "_nonterminal" ? v = `it should use a rest parameter, e.g. \`${o}(...children) {}\`. NOTE: this is new in Ohm v16 — see https://ohmjs.org/d/ati for details.` : v = `expected ${d}, got ${c}`, s.push(`Semantic action '${o}' has the wrong arity: ${v}`);
      }
    }
    if (s.length > 0) {
      const o = s.map((l) => "- " + l), a = new Error(
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
    return En.includes(e) ? 0 : this.rules[e].body.getArity();
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
    Object.keys(this.rules).forEach((l) => {
      const c = this.rules[l], { body: d } = c, v = !this.superGrammar || !this.superGrammar.rules[l];
      let m;
      v ? m = "define" : m = d instanceof sr ? "extend" : "override";
      const y = {};
      if (c.source && this.source) {
        const M = c.source.relativeTo(this.source);
        y.sourceInterval = [M.startIdx, M.endIdx];
      }
      const I = v ? c.description : null, S = d.outputRecipe(c.formals, this.source);
      s[l] = [
        m,
        // "define"/"extend"/"override"
        y,
        I,
        c.formals,
        S
      ];
    });
    let o = "null";
    e ? o = e : this.superGrammar && !this.superGrammar.isBuiltIn() && (o = this.superGrammar.toRecipe());
    const a = [
      ...["grammar", r, this.name].map(JSON.stringify),
      o,
      ...[n, s].map(JSON.stringify)
    ];
    return za(`[${a.join(",")}]`);
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
    const e = new rt();
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
    n.append(nr("_", s).join(", ")), n.append(`) {
`), n.append("  }");
  }
  // Parse a string which expresses a rule application in this grammar, and return the
  // resulting Apply node.
  parseApplication(e) {
    let r;
    if (e.indexOf("<") === -1)
      r = new J(e);
    else {
      const s = cs.match(e, "Base_application");
      r = ls(s, {});
    }
    if (!(r.ruleName in this.rules))
      throw Yn(r.ruleName, this.name);
    const { formals: n } = this.rules[r.ruleName];
    if (n.length !== r.args.length) {
      const { source: s } = this.rules[r.ruleName];
      throw es(
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
de.ProtoBuiltInRules = new de(
  "ProtoBuiltInRules",
  // name
  void 0,
  // supergrammar
  {
    any: {
      body: le,
      formals: [],
      description: "any character",
      primitive: !0
    },
    end: {
      body: pe,
      formals: [],
      description: "end of input",
      primitive: !0
    },
    caseInsensitive: {
      body: new Gr(new fe(0)),
      formals: ["str"],
      primitive: !0
    },
    lower: {
      body: new oe("Ll"),
      formals: [],
      description: "a lowercase letter",
      primitive: !0
    },
    upper: {
      body: new oe("Lu"),
      formals: [],
      description: "an uppercase letter",
      primitive: !0
    },
    // Union of Lt (titlecase), Lm (modifier), and Lo (other), i.e. any letter not in Ll or Lu.
    unicodeLtmo: {
      body: new oe("Ltmo"),
      formals: [],
      description: "a Unicode character in Lt, Lm, or Lo",
      primitive: !0
    },
    // These rules are not truly primitive (they could be written in userland) but are defined
    // here for bootstrapping purposes.
    spaces: {
      body: new nt(new J("space")),
      formals: []
    },
    space: {
      body: new he("\0", " "),
      formals: [],
      description: "a space"
    }
  }
);
de.initApplicationParser = function(t, e) {
  cs = t, ls = e;
};
class kn {
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
      this.name === "BuiltInRules" ? de.ProtoBuiltInRules : de.BuiltInRules
    ), this.superGrammar;
  }
  ensureSuperGrammarRuleForOverriding(e, r) {
    const n = this.ensureSuperGrammar().rules[e];
    if (!n)
      throw la(e, this.superGrammar.name, r);
    return n;
  }
  installOverriddenOrExtendedRule(e, r, n, s) {
    const o = kr(r);
    if (o.length > 0)
      throw _n(e, o, s);
    const a = this.ensureSuperGrammar().rules[e], l = a.formals, c = l ? l.length : 0;
    if (r.length !== c)
      throw es(e, c, r.length, s);
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
    return this.source = new or(e).interval(0, e.length), this;
  }
  // Creates a Grammar instance, and if it passes the sanity checks, returns it.
  build() {
    const e = new de(
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
    }), r.length > 0 && ba(r), this.source && (e.source = this.source), e;
  }
  // Rule declarations
  define(e, r, n, s, o, a) {
    if (this.ensureSuperGrammar(), this.superGrammar.rules[e])
      throw wn(e, this.name, this.superGrammar.name, o);
    if (this.rules[e])
      throw wn(e, this.name, this.name, o);
    const l = kr(r);
    if (l.length > 0)
      throw _n(e, l, o);
    return this.install(e, r, n, s, o, a);
  }
  override(e, r, n, s, o) {
    return this.ensureSuperGrammarRuleForOverriding(e, o), this.installOverriddenOrExtendedRule(e, r, n, o), this;
  }
  extend(e, r, n, s, o) {
    if (!this.ensureSuperGrammar().rules[e])
      throw pa(e, this.superGrammar.name, o);
    const l = new sr(this.superGrammar, e, n);
    return l.source = n.source, this.installOverriddenOrExtendedRule(e, r, l, o), this;
  }
}
class Xt {
  constructor(e) {
    this.currentDecl = null, this.currentRuleName = null, this.options = e || {};
  }
  newGrammar(e) {
    return new kn(e);
  }
  grammar(e, r, n, s, o) {
    const a = new kn(r);
    return n && a.withSuperGrammar(
      n instanceof de ? n : this.fromRecipe(n)
    ), s && a.withDefaultStartRule(s), e && e.source && a.withSource(e.source), this.currentDecl = a, Object.keys(o).forEach((l) => {
      this.currentRuleName = l;
      const c = o[l], d = c[0], v = c[1], m = c[2], y = c[3], I = this.fromRecipe(c[4]);
      let S;
      a.source && v && v.sourceInterval && (S = a.source.subInterval(
        v.sourceInterval[0],
        v.sourceInterval[1] - v.sourceInterval[0]
      )), a[d](l, y, I, m, S);
    }), this.currentRuleName = this.currentDecl = null, a.build();
  }
  terminal(e) {
    return new ae(e);
  }
  range(e, r) {
    return new he(e, r);
  }
  param(e) {
    return new fe(e);
  }
  alt(...e) {
    let r = [];
    for (let n of e)
      n instanceof j || (n = this.fromRecipe(n)), n instanceof te ? r = r.concat(n.terms) : r.push(n);
    return r.length === 1 ? r[0] : new te(r);
  }
  seq(...e) {
    let r = [];
    for (let n of e)
      n instanceof j || (n = this.fromRecipe(n)), n instanceof se ? r = r.concat(n.factors) : r.push(n);
    return r.length === 1 ? r[0] : new se(r);
  }
  star(e) {
    return e instanceof j || (e = this.fromRecipe(e)), new nt(e);
  }
  plus(e) {
    return e instanceof j || (e = this.fromRecipe(e)), new wt(e);
  }
  opt(e) {
    return e instanceof j || (e = this.fromRecipe(e)), new We(e);
  }
  not(e) {
    return e instanceof j || (e = this.fromRecipe(e)), new ie(e);
  }
  lookahead(e) {
    return e instanceof j || (e = this.fromRecipe(e)), this.options.eliminateLookaheads ? new ie(new ie(e)) : new ve(e);
  }
  lex(e) {
    return e instanceof j || (e = this.fromRecipe(e)), new be(e);
  }
  app(e, r) {
    return r && r.length > 0 && (r = r.map(function(n) {
      return n instanceof j ? n : this.fromRecipe(n);
    }, this)), new J(e, r);
  }
  // Note that unlike other methods in this class, this method cannot be used as a
  // convenience constructor. It only works with recipes, because it relies on
  // `this.currentDecl` and `this.currentRuleName` being set.
  splice(e, r) {
    return new ir(
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
function Vr(t) {
  return typeof t == "function" ? t.call(new Xt()) : (typeof t == "string" && (t = JSON.parse(t)), new Xt().fromRecipe(t));
}
const Jr = Vr(["grammar", { source: `BuiltInRules {

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
de.BuiltInRules = Jr;
xa(de.BuiltInRules);
const Hr = Vr(["grammar", { source: `Ohm {

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
`], ["app", { sourceInterval: [2439, 2442] }, "end", []]]]]], comment_multiLine: ["define", { sourceInterval: [2465, 2501] }, null, [], ["seq", { sourceInterval: [2465, 2487] }, ["terminal", { sourceInterval: [2465, 2469] }, "/*"], ["star", { sourceInterval: [2470, 2482] }, ["seq", { sourceInterval: [2471, 2480] }, ["not", { sourceInterval: [2471, 2476] }, ["terminal", { sourceInterval: [2472, 2476] }, "*/"]], ["app", { sourceInterval: [2477, 2480] }, "any", []]]], ["terminal", { sourceInterval: [2483, 2487] }, "*/"]]], comment: ["define", { sourceInterval: [2398, 2501] }, null, [], ["alt", { sourceInterval: [2412, 2501] }, ["app", { sourceInterval: [2412, 2443] }, "comment_singleLine", []], ["app", { sourceInterval: [2465, 2487] }, "comment_multiLine", []]]], tokens: ["define", { sourceInterval: [2505, 2520] }, null, [], ["star", { sourceInterval: [2514, 2520] }, ["app", { sourceInterval: [2514, 2519] }, "token", []]]], token: ["define", { sourceInterval: [2524, 2600] }, null, [], ["alt", { sourceInterval: [2532, 2600] }, ["app", { sourceInterval: [2532, 2540] }, "caseName", []], ["app", { sourceInterval: [2543, 2550] }, "comment", []], ["app", { sourceInterval: [2553, 2558] }, "ident", []], ["app", { sourceInterval: [2561, 2569] }, "operator", []], ["app", { sourceInterval: [2572, 2583] }, "punctuation", []], ["app", { sourceInterval: [2586, 2594] }, "terminal", []], ["app", { sourceInterval: [2597, 2600] }, "any", []]]], operator: ["define", { sourceInterval: [2604, 2669] }, null, [], ["alt", { sourceInterval: [2615, 2669] }, ["terminal", { sourceInterval: [2615, 2619] }, "<:"], ["terminal", { sourceInterval: [2622, 2625] }, "="], ["terminal", { sourceInterval: [2628, 2632] }, ":="], ["terminal", { sourceInterval: [2635, 2639] }, "+="], ["terminal", { sourceInterval: [2642, 2645] }, "*"], ["terminal", { sourceInterval: [2648, 2651] }, "+"], ["terminal", { sourceInterval: [2654, 2657] }, "?"], ["terminal", { sourceInterval: [2660, 2663] }, "~"], ["terminal", { sourceInterval: [2666, 2669] }, "&"]]], punctuation: ["define", { sourceInterval: [2673, 2709] }, null, [], ["alt", { sourceInterval: [2687, 2709] }, ["terminal", { sourceInterval: [2687, 2690] }, "<"], ["terminal", { sourceInterval: [2693, 2696] }, ">"], ["terminal", { sourceInterval: [2699, 2702] }, ","], ["terminal", { sourceInterval: [2705, 2709] }, "--"]]] }]), xr = Object.create(j.prototype);
function Dn(t, e) {
  for (const r in t)
    if (r === e) return !0;
  return !1;
}
function ps(t, e, r, n) {
  const s = new Xt(n);
  let o, a, l, c = !1;
  return (r || Hr).createSemantics().addOperation("visit", {
    Grammars(m) {
      return m.children.map((y) => y.visit());
    },
    Grammar(m, y, I, S, M) {
      const H = m.visit();
      o = s.newGrammar(H), y.child(0) && y.child(0).visit(), S.children.map((xe) => xe.visit());
      const G = o.build();
      if (G.source = this.source.trimmed(), Dn(e, H))
        throw ua(G);
      return e[H] = G, G;
    },
    SuperGrammar(m, y) {
      const I = y.visit();
      if (I === "null")
        o.withSuperGrammar(null);
      else {
        if (!e || !Dn(e, I))
          throw aa(I, e, y.source);
        o.withSuperGrammar(e[I]);
      }
    },
    Rule_define(m, y, I, S, M) {
      a = m.visit(), l = y.children.map((Ee) => Ee.visit())[0] || [], !o.defaultStartRule && o.ensureSuperGrammar() !== de.ProtoBuiltInRules && o.withDefaultStartRule(a);
      const H = M.visit(), G = I.children.map((Ee) => Ee.visit())[0], xe = this.source.trimmed();
      return o.define(a, l, H, G, xe);
    },
    Rule_override(m, y, I, S) {
      a = m.visit(), l = y.children.map((G) => G.visit())[0] || [];
      const M = this.source.trimmed();
      o.ensureSuperGrammarRuleForOverriding(a, M), c = !0;
      const H = S.visit();
      return c = !1, o.override(a, l, H, null, M);
    },
    Rule_extend(m, y, I, S) {
      a = m.visit(), l = y.children.map((G) => G.visit())[0] || [];
      const M = S.visit(), H = this.source.trimmed();
      return o.extend(a, l, M, null, H);
    },
    RuleBody(m, y) {
      return s.alt(...y.visit()).withSource(this.source);
    },
    OverrideRuleBody(m, y) {
      const I = y.visit(), S = I.indexOf(xr);
      if (S >= 0) {
        const M = I.slice(0, S), H = I.slice(S + 1);
        return H.forEach((G) => {
          if (G === xr) throw ya(G);
        }), new ir(
          o.superGrammar,
          a,
          M,
          H
        ).withSource(this.source);
      } else
        return s.alt(...I).withSource(this.source);
    },
    Formals(m, y, I) {
      return y.visit();
    },
    Params(m, y, I) {
      return y.visit();
    },
    Alt(m) {
      return s.alt(...m.visit()).withSource(this.source);
    },
    TopLevelTerm_inline(m, y) {
      const I = a + "_" + y.visit(), S = m.visit(), M = this.source.trimmed(), H = !(o.superGrammar && o.superGrammar.rules[I]);
      c && !H ? o.override(I, l, S, null, M) : o.define(I, l, S, null, M);
      const G = l.map((xe) => s.app(xe));
      return s.app(I, G).withSource(S.source);
    },
    OverrideTopLevelTerm_superSplice(m) {
      return xr;
    },
    Seq(m) {
      return s.seq(...m.children.map((y) => y.visit())).withSource(this.source);
    },
    Iter_star(m, y) {
      return s.star(m.visit()).withSource(this.source);
    },
    Iter_plus(m, y) {
      return s.plus(m.visit()).withSource(this.source);
    },
    Iter_opt(m, y) {
      return s.opt(m.visit()).withSource(this.source);
    },
    Pred_not(m, y) {
      return s.not(y.visit()).withSource(this.source);
    },
    Pred_lookahead(m, y) {
      return s.lookahead(y.visit()).withSource(this.source);
    },
    Lex_lex(m, y) {
      return s.lex(y.visit()).withSource(this.source);
    },
    Base_application(m, y) {
      const I = y.children.map((S) => S.visit())[0] || [];
      return s.app(m.visit(), I).withSource(this.source);
    },
    Base_range(m, y, I) {
      return s.range(m.visit(), I.visit()).withSource(this.source);
    },
    Base_terminal(m) {
      return s.terminal(m.visit()).withSource(this.source);
    },
    Base_paren(m, y, I) {
      return y.visit();
    },
    ruleDescr(m, y, I) {
      return y.visit();
    },
    ruleDescrText(m) {
      return this.sourceString.trim();
    },
    caseName(m, y, I, S, M) {
      return I.visit();
    },
    name(m, y) {
      return this.sourceString;
    },
    nameFirst(m) {
    },
    nameRest(m) {
    },
    terminal(m, y, I) {
      return y.children.map((S) => S.visit()).join("");
    },
    oneCharTerminal(m, y, I) {
      return y.visit();
    },
    escapeChar(m) {
      try {
        return Qn(this.sourceString);
      } catch (y) {
        throw y instanceof RangeError && y.message.startsWith("Invalid code point ") ? Aa(m) : y;
      }
    },
    NonemptyListOf(m, y, I) {
      return [m.visit()].concat(I.children.map((S) => S.visit()));
    },
    EmptyListOf() {
      return [];
    },
    _terminal() {
      return this.sourceString;
    }
  })(t).visit();
}
const Ga = Vr(["grammar", { source: `OperationsAndAttributes {

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
Va(de.BuiltInRules);
Ja(Ga);
function Va(t) {
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
  we.BuiltInSemantics = we.createSemantics(t, null).addOperation(
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
function Ja(t) {
  we.prototypeGrammarSemantics = t.createSemantics().addOperation("parse", {
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
  }), we.prototypeGrammar = t;
}
function Ha(t) {
  let e = 0;
  const r = [0], n = () => r[r.length - 1], s = {}, o = /( *).*(?:$|\r?\n|\r)/g;
  let a;
  for (; (a = o.exec(t)) != null; ) {
    const [l, c] = a;
    if (l.length === 0) break;
    const d = c.length, v = n(), m = e + d;
    if (d > v)
      r.push(d), s[m] = 1;
    else if (d < v) {
      const y = r.length;
      for (; n() !== d; )
        r.pop();
      s[m] = -1 * (y - r.length);
    }
    e += l.length;
  }
  return r.length > 1 && (s[e] = 1 - r.length), s;
}
const hs = "an indented block", fs = "a dedent", On = 1114112;
class Ua extends or {
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
    return this._indentationAt(this.pos) !== 0 ? (this.examinedLength = Math.max(this.examinedLength, this.pos), On) : super.nextCharCode();
  }
  nextCodePoint() {
    return this._indentationAt(this.pos) !== 0 ? (this.examinedLength = Math.max(this.examinedLength, this.pos), On) : super.nextCodePoint();
  }
}
class Nn extends j {
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
    return (n[s] || 0) * o > 0 ? (e.userData = Object.create(n), e.userData[s] -= o, e.pushBinding(new st(0), s), !0) : (e.processFailure(s, this), !1);
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
    const r = this.isIndent ? hs : fs;
    return new Ie(this, r, "description");
  }
}
const Ka = new J("indent"), Qa = new J("dedent"), Xa = new ir(Jr, "any", [Ka, Qa], []), Za = new Xt().newGrammar("IndentationSensitive").withSuperGrammar(Jr).define("indent", [], new Nn(!0), hs, void 0, !0).define("dedent", [], new Nn(!1), fs, void 0, !0).extend("any", [], Xa, "any character", void 0).build();
Object.assign(Za, {
  _matchStateInitializer(t) {
    t.userData = Ha(t.input), t.inputStream = new Ua(t);
  },
  supportsIncrementalParsing: !1
});
de.initApplicationParser(Hr, ps);
const Ya = (t) => !!t.constructor && typeof t.constructor.isBuffer == "function" && t.constructor.isBuffer(t);
function eu(t, e, r) {
  const n = Hr.match(t, "Grammars");
  if (n.failed())
    throw oa(n);
  return ps(n, e, void 0, r);
}
function tu(t, e, r) {
  const n = /* @__PURE__ */ Object.create({});
  if (typeof t != "string")
    if (Ya(t))
      t = t.toString();
    else
      throw new TypeError(
        "Expected string as first argument, got " + qr(t)
      );
  return eu(t, n, r), n;
}
function ru(t, e) {
  return tu(t);
}
const nu = ru(String.raw`
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
  word = ~clauseConnector ~caseInsensitive<"mynstur"> ~caseInsensitive<"mystur"> ~merktuWord ~semWord ~aldreiWord ~ekkertWord ~spilaWord ~spiladuWord ~spilidWord ~likaWord ~einnigWord ~fylgirWord ~thenWord ~vogWord ~velurWord ~urWord ~kaflinnWord ~raðaðuWord ~takturinnWord ~signalWord ~degreeAdverb ~scaleAdverb ~scaleAdjective ~numeral ~sinnum ~numberWord letter+

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
`), Fr = nu.Ristavel, su = "is", iu = { family: "FiraGO", css: "https://cdn.jsdelivr.net/npm/@fontsource/firago/index.css" }, ou = { lpf: ["lágtíðnihleypir", "lth"], hpf: ["háttíðnihleypir", "hth"], accelerate: ["hröðun", "inngjöf"], adsr: ["umslag"], always: "alltaf", amp: "mögnun", arp: ["runa", "röð"], attack: "svörun", bank: "banki", begin: "byrja", cat: ["samanlíming", "samsetning", "strengjalíming", "strengjasamsetning", "líming", "Lím"], chop: ["höggva"], choose: ["velja"], color: "litur", compress: "þjappa", compressor: "þjappari", cpm: ["hringrásarhraði", "hrh", "hringirámínútu", "hám"], crush: ["kremja", "milja", "kreista"], clip: ["klemma"], cut: ["klippa", "saxa"], cutoff: ["afskurður"], delay: ["endurkast", "endurvarp"], djf: ["djsía"], end: ["endir"], distort: ["bjaga", "bjögun"], echo: ["endurómun", "ómun"], echoWith: ["ómunMeð", "ómaMeð"], every: "hvert", expand: "útvíkka", extend: "framlengja", fast: ["fljótt", "hratt", "hraðar", "snöggt"], fastChunk: "hraðBiti", fastGap: "hraðBil", filter: "sía", filterValues: "síuGildi", filterWhen: "síaÞegar", floor: "gólf", freq: "tíðni", gain: ["hljóðstyrkur", "styrkur", "læti", "hávaði"], hurry: ["drífaSig", "hraðaÁsér", "flýtaSér"], hush: ["uss", "suss", "þögn"], mask: ["gríma"], note: ["nótur", "nóta"], orbit: ["braut"], pan: ["staðsetning", "staður"], range: ["bil", "svið"], room: ["rými", "ómur"], s: "h", scale: "skali", scramble: ["rugla", "hræra"], setcpm: ["setjaHringrásarhraða", "setjaHrh", "setjaHringirámínútu", "setjaHám"], slow: "hægt", slowcat: ["hæglíming", "hægsetning", "hægLím"], sometimes: ["stundum"], sometimesBy: ["stundumUm"], sound: "hljóð", speed: "hraði", spread: "dreifa", squiz: ["kreista"], stack: ["bunki", "stafli"], striate: ["ráka", "rispa", "strífa"], struct: ["uppbygging", "strúktúr"], sustain: "viðhalda", take: "taka", velocity: "hraði", vowel: ["sérhljóðar", "sérhljóði"], when: "þegar", whenKey: "þegarLykill", zoom: "stækka" }, au = { red: "rauður", green: "grænn", blue: "blár", yellow: "gulur", cyan: "blágrænn", magenta: "fjólublár", black: "svartur", white: "hvítur", gray: "grár", orange: "appelsínugulur", purple: "fjólublár", pink: "bleikur", brown: "brúnn" }, uu = { botn: 50, efriBotn: 120, neðriMiðja: 300, miðja: 1e3, efriMiðja: 2e3, neðriToppur: 5e3, toppur: 1e4, efriToppur: 16e3 }, cu = { b: "h", "c#": "cis", "d#": "dis", "e#": "eis", "f#": "fis", "g#": "gis", "a#": "ais", "b#": "his", cb: "ces", db: "des", eb: "es", fb: "fes", gb: "ges", ab: "as" }, lu = { major: "dúr", minor: "moll" }, ds = {
  locale: su,
  font: iu,
  functions: ou,
  colors: au,
  constants: uu,
  notes: cu,
  scales: lu
};
function pu(t, e) {
  function r() {
    this.constructor = t;
  }
  r.prototype = e.prototype, t.prototype = new r();
}
function yt(t, e, r, n) {
  var s = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(s, yt.prototype), s.expected = e, s.found = r, s.location = n, s.name = "SyntaxError", s;
}
pu(yt, Error);
function Sr(t, e, r) {
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
      var l = this.location.end, c = Sr("", o.line.toString().length, " "), d = r[s.line - 1], v = s.line === l.line ? l.column : d.length + 1, m = v - s.column || 1;
      e += `
 --> ` + a + `
` + c + ` |
` + o.line + " | " + d + `
` + c + " | " + Sr("", s.column - 1, " ") + Sr("", m, "^");
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
      var v = d.parts.map(function(m) {
        return Array.isArray(m) ? o(m[0]) + "-" + o(m[1]) : o(m);
      });
      return "[" + (d.inverted ? "^" : "") + v.join("") + "]";
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
    return d.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(v) {
      return "\\x0" + n(v);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(v) {
      return "\\x" + n(v);
    });
  }
  function o(d) {
    return d.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(v) {
      return "\\x0" + n(v);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(v) {
      return "\\x" + n(v);
    });
  }
  function a(d) {
    return r[d.type](d);
  }
  function l(d) {
    var v = d.map(a), m, y;
    if (v.sort(), v.length > 0) {
      for (m = 1, y = 1; m < v.length; m++)
        v[m - 1] !== v[m] && (v[y] = v[m], y++);
      v.length = y;
    }
    switch (v.length) {
      case 1:
        return v[0];
      case 2:
        return v[0] + " or " + v[1];
      default:
        return v.slice(0, -1).join(", ") + ", or " + v[v.length - 1];
    }
  }
  function c(d) {
    return d ? '"' + s(d) + '"' : "end of input";
  }
  return "Expected " + l(t) + " but " + c(e) + " found.";
};
function hu(t, e) {
  e = e !== void 0 ? e : {};
  var r = {}, n = e.grammarSource, s = { start: pn }, o = pn, a = ".", l = "-", c = "0", d = ",", v = "|", m = "[", y = "]", I = "{", S = "}", M = "%", H = "<", G = ">", xe = "!", Ee = "(", pr = ")", hr = "/", ot = "*", Ct = "?", fr = ":", xt = "..", dr = "^", Ft = "struct", at = "target", St = "euclid", Mt = "slow", ut = "rotL", $e = "rotR", Pe = "fast", Ze = "scale", Et = "//", Wt = "cat", mr = "$", Bt = "setcps", kt = "setbpm", gr = "hush", g = /^[1-9]/, w = /^[eE]/, b = /^[+\-]/, x = /^[0-9]/, D = /^[ \n\r\t\xA0]/, N = /^["']/, T = /^[#\--.0-9A-Z\^-_a-z~\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376-\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E-\u066F\u0671-\u06D3\u06D5\u06E5-\u06E6\u06EE-\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4-\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F-\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC-\u09DD\u09DF-\u09E1\u09F0-\u09F1\u09FC\u0A05-\u0A0A\u0A0F-\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32-\u0A33\u0A35-\u0A36\u0A38-\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2-\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0-\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F-\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32-\u0B33\u0B35-\u0B39\u0B3D\u0B5C-\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99-\u0B9A\u0B9C\u0B9E-\u0B9F\u0BA3-\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60-\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0-\u0CE1\u0CF1-\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32-\u0E33\u0E40-\u0E46\u0E81-\u0E82\u0E84\u0E87-\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA-\u0EAB\u0EAD-\u0EB0\u0EB2-\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065-\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE-\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5-\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD-\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, V = /^[@_]/, Z = /^[^\n]/, ye = yr("number"), Ye = z(".", !1), Fe = je([["1", "9"]], !1, !1), Dt = je(["e", "E"], !1, !1), vr = je(["+", "-"], !1, !1), zs = z("-", !1), Gs = z("0", !1), Vs = je([["0", "9"]], !1, !1), Js = yr("whitespace"), nn = je([" ", `
`, "\r", "	", " "], !1, !1), Hs = z(",", !1), Us = z("|", !1), Ks = je(['"', "'"], !1, !1), Qs = yr('a letter, a number, "-", "#", ".", "^", "_"'), Xs = je(["#", ["-", "."], ["0", "9"], ["A", "Z"], ["^", "_"], ["a", "z"], "~", "ª", "µ", "º", ["À", "Ö"], ["Ø", "ö"], ["ø", "ˁ"], ["ˆ", "ˑ"], ["ˠ", "ˤ"], "ˬ", "ˮ", ["Ͱ", "ʹ"], ["Ͷ", "ͷ"], ["ͺ", "ͽ"], "Ϳ", "Ά", ["Έ", "Ί"], "Ό", ["Ύ", "Ρ"], ["Σ", "ϵ"], ["Ϸ", "ҁ"], ["Ҋ", "ԯ"], ["Ա", "Ֆ"], "ՙ", ["ՠ", "ֈ"], ["א", "ת"], ["ׯ", "ײ"], ["ؠ", "ي"], ["ٮ", "ٯ"], ["ٱ", "ۓ"], "ە", ["ۥ", "ۦ"], ["ۮ", "ۯ"], ["ۺ", "ۼ"], "ۿ", "ܐ", ["ܒ", "ܯ"], ["ݍ", "ޥ"], "ޱ", ["ߊ", "ߪ"], ["ߴ", "ߵ"], "ߺ", ["ࠀ", "ࠕ"], "ࠚ", "ࠤ", "ࠨ", ["ࡀ", "ࡘ"], ["ࡠ", "ࡪ"], ["ࢠ", "ࢴ"], ["ࢶ", "ࢽ"], ["ऄ", "ह"], "ऽ", "ॐ", ["क़", "ॡ"], ["ॱ", "ঀ"], ["অ", "ঌ"], ["এ", "ঐ"], ["ও", "ন"], ["প", "র"], "ল", ["শ", "হ"], "ঽ", "ৎ", ["ড়", "ঢ়"], ["য়", "ৡ"], ["ৰ", "ৱ"], "ৼ", ["ਅ", "ਊ"], ["ਏ", "ਐ"], ["ਓ", "ਨ"], ["ਪ", "ਰ"], ["ਲ", "ਲ਼"], ["ਵ", "ਸ਼"], ["ਸ", "ਹ"], ["ਖ਼", "ੜ"], "ਫ਼", ["ੲ", "ੴ"], ["અ", "ઍ"], ["એ", "ઑ"], ["ઓ", "ન"], ["પ", "ર"], ["લ", "ળ"], ["વ", "હ"], "ઽ", "ૐ", ["ૠ", "ૡ"], "ૹ", ["ଅ", "ଌ"], ["ଏ", "ଐ"], ["ଓ", "ନ"], ["ପ", "ର"], ["ଲ", "ଳ"], ["ଵ", "ହ"], "ଽ", ["ଡ଼", "ଢ଼"], ["ୟ", "ୡ"], "ୱ", "ஃ", ["அ", "ஊ"], ["எ", "ஐ"], ["ஒ", "க"], ["ங", "ச"], "ஜ", ["ஞ", "ட"], ["ண", "த"], ["ந", "ப"], ["ம", "ஹ"], "ௐ", ["అ", "ఌ"], ["ఎ", "ఐ"], ["ఒ", "న"], ["ప", "హ"], "ఽ", ["ౘ", "ౚ"], ["ౠ", "ౡ"], "ಀ", ["ಅ", "ಌ"], ["ಎ", "ಐ"], ["ಒ", "ನ"], ["ಪ", "ಳ"], ["ವ", "ಹ"], "ಽ", "ೞ", ["ೠ", "ೡ"], ["ೱ", "ೲ"], ["അ", "ഌ"], ["എ", "ഐ"], ["ഒ", "ഺ"], "ഽ", "ൎ", ["ൔ", "ൖ"], ["ൟ", "ൡ"], ["ൺ", "ൿ"], ["අ", "ඖ"], ["ක", "න"], ["ඳ", "ර"], "ල", ["ව", "ෆ"], ["ก", "ะ"], ["า", "ำ"], ["เ", "ๆ"], ["ກ", "ຂ"], "ຄ", ["ງ", "ຈ"], "ຊ", "ຍ", ["ດ", "ທ"], ["ນ", "ຟ"], ["ມ", "ຣ"], "ລ", "ວ", ["ສ", "ຫ"], ["ອ", "ະ"], ["າ", "ຳ"], "ຽ", ["ເ", "ໄ"], "ໆ", ["ໜ", "ໟ"], "ༀ", ["ཀ", "ཇ"], ["ཉ", "ཬ"], ["ྈ", "ྌ"], ["က", "ဪ"], "ဿ", ["ၐ", "ၕ"], ["ၚ", "ၝ"], "ၡ", ["ၥ", "ၦ"], ["ၮ", "ၰ"], ["ၵ", "ႁ"], "ႎ", ["Ⴀ", "Ⴥ"], "Ⴧ", "Ⴭ", ["ა", "ჺ"], ["ჼ", "ቈ"], ["ቊ", "ቍ"], ["ቐ", "ቖ"], "ቘ", ["ቚ", "ቝ"], ["በ", "ኈ"], ["ኊ", "ኍ"], ["ነ", "ኰ"], ["ኲ", "ኵ"], ["ኸ", "ኾ"], "ዀ", ["ዂ", "ዅ"], ["ወ", "ዖ"], ["ዘ", "ጐ"], ["ጒ", "ጕ"], ["ጘ", "ፚ"], ["ᎀ", "ᎏ"], ["Ꭰ", "Ᏽ"], ["ᏸ", "ᏽ"], ["ᐁ", "ᙬ"], ["ᙯ", "ᙿ"], ["ᚁ", "ᚚ"], ["ᚠ", "ᛪ"], ["ᛮ", "ᛸ"], ["ᜀ", "ᜌ"], ["ᜎ", "ᜑ"], ["ᜠ", "ᜱ"], ["ᝀ", "ᝑ"], ["ᝠ", "ᝬ"], ["ᝮ", "ᝰ"], ["ក", "ឳ"], "ៗ", "ៜ", ["ᠠ", "ᡸ"], ["ᢀ", "ᢄ"], ["ᢇ", "ᢨ"], "ᢪ", ["ᢰ", "ᣵ"], ["ᤀ", "ᤞ"], ["ᥐ", "ᥭ"], ["ᥰ", "ᥴ"], ["ᦀ", "ᦫ"], ["ᦰ", "ᧉ"], ["ᨀ", "ᨖ"], ["ᨠ", "ᩔ"], "ᪧ", ["ᬅ", "ᬳ"], ["ᭅ", "ᭋ"], ["ᮃ", "ᮠ"], ["ᮮ", "ᮯ"], ["ᮺ", "ᯥ"], ["ᰀ", "ᰣ"], ["ᱍ", "ᱏ"], ["ᱚ", "ᱽ"], ["ᲀ", "ᲈ"], ["Ა", "Ჺ"], ["Ჽ", "Ჿ"], ["ᳩ", "ᳬ"], ["ᳮ", "ᳱ"], ["ᳵ", "ᳶ"], ["ᴀ", "ᶿ"], ["Ḁ", "ἕ"], ["Ἐ", "Ἕ"], ["ἠ", "ὅ"], ["Ὀ", "Ὅ"], ["ὐ", "ὗ"], "Ὑ", "Ὓ", "Ὕ", ["Ὗ", "ώ"], ["ᾀ", "ᾴ"], ["ᾶ", "ᾼ"], "ι", ["ῂ", "ῄ"], ["ῆ", "ῌ"], ["ῐ", "ΐ"], ["ῖ", "Ί"], ["ῠ", "Ῥ"], ["ῲ", "ῴ"], ["ῶ", "ῼ"], "ⁱ", "ⁿ", ["ₐ", "ₜ"], "ℂ", "ℇ", ["ℊ", "ℓ"], "ℕ", ["ℙ", "ℝ"], "ℤ", "Ω", "ℨ", ["K", "ℭ"], ["ℯ", "ℹ"], ["ℼ", "ℿ"], ["ⅅ", "ⅉ"], "ⅎ", ["Ⅰ", "ↈ"], ["Ⰰ", "Ⱞ"], ["ⰰ", "ⱞ"], ["Ⱡ", "ⳤ"], ["Ⳬ", "ⳮ"], ["Ⳳ", "ⳳ"], ["ⴀ", "ⴥ"], "ⴧ", "ⴭ", ["ⴰ", "ⵧ"], "ⵯ", ["ⶀ", "ⶖ"], ["ⶠ", "ⶦ"], ["ⶨ", "ⶮ"], ["ⶰ", "ⶶ"], ["ⶸ", "ⶾ"], ["ⷀ", "ⷆ"], ["ⷈ", "ⷎ"], ["ⷐ", "ⷖ"], ["ⷘ", "ⷞ"], "ⸯ", ["々", "〇"], ["〡", "〩"], ["〱", "〵"], ["〸", "〼"], ["ぁ", "ゖ"], ["ゝ", "ゟ"], ["ァ", "ヺ"], ["ー", "ヿ"], ["ㄅ", "ㄯ"], ["ㄱ", "ㆎ"], ["ㆠ", "ㆺ"], ["ㇰ", "ㇿ"], ["㐀", "䶵"], ["一", "鿯"], ["ꀀ", "ꒌ"], ["ꓐ", "ꓽ"], ["ꔀ", "ꘌ"], ["ꘐ", "ꘟ"], ["ꘪ", "ꘫ"], ["Ꙁ", "ꙮ"], ["ꙿ", "ꚝ"], ["ꚠ", "ꛯ"], ["ꜗ", "ꜟ"], ["Ꜣ", "ꞈ"], ["Ꞌ", "ꞹ"], ["ꟷ", "ꠁ"], ["ꠃ", "ꠅ"], ["ꠇ", "ꠊ"], ["ꠌ", "ꠢ"], ["ꡀ", "ꡳ"], ["ꢂ", "ꢳ"], ["ꣲ", "ꣷ"], "ꣻ", ["ꣽ", "ꣾ"], ["ꤊ", "ꤥ"], ["ꤰ", "ꥆ"], ["ꥠ", "ꥼ"], ["ꦄ", "ꦲ"], "ꧏ", ["ꧠ", "ꧤ"], ["ꧦ", "ꧯ"], ["ꧺ", "ꧾ"], ["ꨀ", "ꨨ"], ["ꩀ", "ꩂ"], ["ꩄ", "ꩋ"], ["ꩠ", "ꩶ"], "ꩺ", ["ꩾ", "ꪯ"], "ꪱ", ["ꪵ", "ꪶ"], ["ꪹ", "ꪽ"], "ꫀ", "ꫂ", ["ꫛ", "ꫝ"], ["ꫠ", "ꫪ"], ["ꫲ", "ꫴ"], ["ꬁ", "ꬆ"], ["ꬉ", "ꬎ"], ["ꬑ", "ꬖ"], ["ꬠ", "ꬦ"], ["ꬨ", "ꬮ"], ["ꬰ", "ꭚ"], ["ꭜ", "ꭥ"], ["ꭰ", "ꯢ"], ["가", "힣"], ["ힰ", "ퟆ"], ["ퟋ", "ퟻ"], ["豈", "舘"], ["並", "龎"], ["ﬀ", "ﬆ"], ["ﬓ", "ﬗ"], "יִ", ["ײַ", "ﬨ"], ["שׁ", "זּ"], ["טּ", "לּ"], "מּ", ["נּ", "סּ"], ["ףּ", "פּ"], ["צּ", "ﮱ"], ["ﯓ", "ﴽ"], ["ﵐ", "ﶏ"], ["ﶒ", "ﷇ"], ["ﷰ", "ﷻ"], ["ﹰ", "ﹴ"], ["ﹶ", "ﻼ"], ["Ａ", "Ｚ"], ["ａ", "ｚ"], ["ｦ", "ﾾ"], ["ￂ", "ￇ"], ["ￊ", "ￏ"], ["ￒ", "ￗ"], ["ￚ", "ￜ"]], !1, !1), sn = z("[", !1), on = z("]", !1), Zs = z("{", !1), Ys = z("}", !1), ei = z("%", !1), ti = z("<", !1), ri = z(">", !1), ni = je(["@", "_"], !1, !1), si = z("!", !1), ii = z("(", !1), oi = z(")", !1), ai = z("/", !1), ui = z("*", !1), ci = z("?", !1), li = z(":", !1), pi = z("..", !1), hi = z("^", !1), fi = z("struct", !1), di = z("target", !1), mi = z("euclid", !1), gi = z("slow", !1), vi = z("rotL", !1), yi = z("rotR", !1), Ai = z("fast", !1), wi = z("scale", !1), _i = z("//", !1), an = je([`
`], !0, !1), bi = z("cat", !1), Ii = z("$", !1), Ci = z("setcps", !1), xi = z("setbpm", !1), Fi = z("hush", !1), Si = function() {
    return parseFloat(ho());
  }, Ei = function(i) {
    const u = i.join("");
    return u === "." || u === "_";
  }, Bi = function(i) {
    return new ra(i.join(""));
  }, ki = function(i) {
    return i;
  }, Di = function(i, u) {
    return i.arguments_.stepsPerCycle = u, i;
  }, Oi = function(i) {
    return i;
  }, Ni = function(i) {
    return i.arguments_.alignment = "polymeter_slowcat", i;
  }, Li = function(i) {
    return (u) => u.options_.weight = (u.options_.weight ?? 1) + (i ?? 2) - 1;
  }, $i = function(i) {
    return (u) => {
      const f = (u.options_.reps ?? 1) + (i ?? 2) - 1;
      u.options_.reps = f, u.options_.ops = u.options_.ops.filter((_) => _.type_ !== "replicate"), u.options_.ops.push({ type_: "replicate", arguments_: { amount: f } }), u.options_.weight = f;
    };
  }, Pi = function(i, u, f) {
    return (_) => _.options_.ops.push({ type_: "bjorklund", arguments_: { pulse: i, step: u, rotation: f } });
  }, Ri = function(i) {
    return (u) => u.options_.ops.push({ type_: "stretch", arguments_: { amount: i, type: "slow" } });
  }, ji = function(i) {
    return (u) => u.options_.ops.push({ type_: "stretch", arguments_: { amount: i, type: "fast" } });
  }, Ti = function(i) {
    return (u) => u.options_.ops.push({ type_: "degradeBy", arguments_: { amount: i, seed: br++ } });
  }, qi = function(i) {
    return (u) => u.options_.ops.push({ type_: "tail", arguments_: { element: i } });
  }, Mi = function(i) {
    return (u) => u.options_.ops.push({ type_: "range", arguments_: { element: i } });
  }, Wi = function(i, u) {
    const f = new sa(i, { ops: [], weight: 1, reps: 1 });
    for (const _ of u)
      _(f);
    return f;
  }, zi = function(i, u) {
    return new Jt(u, "fastcat", void 0, !!i);
  }, Gi = function(i) {
    return { alignment: "stack", list: i };
  }, Vi = function(i) {
    return { alignment: "rand", list: i, seed: br++ };
  }, Ji = function(i) {
    return { alignment: "feet", list: i, seed: br++ };
  }, Hi = function(i, u) {
    return u && u.list.length > 0 ? new Jt([i, ...u.list], u.alignment, u.seed) : i;
  }, Ui = function(i, u) {
    return new Jt(u ? [i, ...u.list] : [i], "polymeter");
  }, Ki = function(i) {
    return i;
  }, Qi = function(i) {
    return { name: "struct", args: { mini: i } };
  }, Xi = function(i) {
    return { name: "target", args: { name: i } };
  }, Zi = function(i, u, f) {
    return { name: "bjorklund", args: { pulse: i, step: parseInt(u) } };
  }, Yi = function(i) {
    return { name: "stretch", args: { amount: i } };
  }, eo = function(i) {
    return { name: "shift", args: { amount: "-" + i } };
  }, to = function(i) {
    return { name: "shift", args: { amount: i } };
  }, ro = function(i) {
    return { name: "stretch", args: { amount: "1/" + i } };
  }, no = function(i) {
    return { name: "scale", args: { scale: i.join("") } };
  }, un = function(i, u) {
    return u;
  }, so = function(i, u) {
    return u.unshift(i), new Jt(u, "slowcat");
  }, io = function(i) {
    return i;
  }, oo = function(i, u) {
    return new na(i.name, i.args, u);
  }, ao = function(i) {
    return i;
  }, uo = function(i) {
    return i;
  }, co = function(i) {
    return new _r("setcps", { value: i });
  }, lo = function(i) {
    return new _r("setcps", { value: i / 120 / 2 });
  }, po = function() {
    return new _r("hush");
  }, h = e.peg$currPos | 0, R = h, ct = [{ line: 1, column: 1 }], Be = h, zt = e.peg$maxFailExpected || [], O = e.peg$silentFails | 0, Ot;
  if (e.startRule) {
    if (!(e.startRule in s))
      throw new Error(`Can't start parsing from rule "` + e.startRule + '".');
    o = s[e.startRule];
  }
  function ho() {
    return t.substring(R, h);
  }
  function cn() {
    return Ar(R, h);
  }
  function z(i, u) {
    return { type: "literal", text: i, ignoreCase: u };
  }
  function je(i, u, f) {
    return { type: "class", parts: i, inverted: u, ignoreCase: f };
  }
  function fo() {
    return { type: "end" };
  }
  function yr(i) {
    return { type: "other", description: i };
  }
  function ln(i) {
    var u = ct[i], f;
    if (u)
      return u;
    if (i >= ct.length)
      f = ct.length - 1;
    else
      for (f = i; !ct[--f]; )
        ;
    for (u = ct[f], u = {
      line: u.line,
      column: u.column
    }; f < i; )
      t.charCodeAt(f) === 10 ? (u.line++, u.column = 1) : u.column++, f++;
    return ct[i] = u, u;
  }
  function Ar(i, u, f) {
    var _ = ln(i), L = ln(u), K = {
      source: n,
      start: {
        offset: i,
        line: _.line,
        column: _.column
      },
      end: {
        offset: u,
        line: L.line,
        column: L.column
      }
    };
    return K;
  }
  function $(i) {
    h < Be || (h > Be && (Be = h, zt = []), zt.push(i));
  }
  function mo(i, u, f) {
    return new yt(
      yt.buildMessage(i, u),
      i,
      u,
      f
    );
  }
  function pn() {
    var i;
    return i = ta(), i;
  }
  function Te() {
    var i, u;
    return O++, i = h, _o(), u = Gt(), u !== r ? (wo(), Ao(), R = i, i = Si()) : (h = i, i = r), O--, i === r && O === 0 && $(ye), i;
  }
  function go() {
    var i;
    return t.charCodeAt(h) === 46 ? (i = a, h++) : (i = r, O === 0 && $(Ye)), i;
  }
  function vo() {
    var i;
    return i = t.charAt(h), g.test(i) ? h++ : (i = r, O === 0 && $(Fe)), i;
  }
  function yo() {
    var i;
    return i = t.charAt(h), w.test(i) ? h++ : (i = r, O === 0 && $(Dt)), i;
  }
  function Ao() {
    var i, u, f, _, L;
    if (i = h, u = yo(), u !== r) {
      if (f = t.charAt(h), b.test(f) ? h++ : (f = r, O === 0 && $(vr)), f === r && (f = null), _ = [], L = lt(), L !== r)
        for (; L !== r; )
          _.push(L), L = lt();
      else
        _ = r;
      _ !== r ? (u = [u, f, _], i = u) : (h = i, i = r);
    } else
      h = i, i = r;
    return i;
  }
  function wo() {
    var i, u, f, _;
    if (i = h, u = go(), u !== r) {
      if (f = [], _ = lt(), _ !== r)
        for (; _ !== r; )
          f.push(_), _ = lt();
      else
        f = r;
      f !== r ? (u = [u, f], i = u) : (h = i, i = r);
    } else
      h = i, i = r;
    return i;
  }
  function Gt() {
    var i, u, f, _;
    if (i = bo(), i === r)
      if (i = h, u = vo(), u !== r) {
        for (f = [], _ = lt(); _ !== r; )
          f.push(_), _ = lt();
        u = [u, f], i = u;
      } else
        h = i, i = r;
    return i;
  }
  function _o() {
    var i;
    return t.charCodeAt(h) === 45 ? (i = l, h++) : (i = r, O === 0 && $(zs)), i;
  }
  function bo() {
    var i;
    return t.charCodeAt(h) === 48 ? (i = c, h++) : (i = r, O === 0 && $(Gs)), i;
  }
  function lt() {
    var i;
    return i = t.charAt(h), x.test(i) ? h++ : (i = r, O === 0 && $(Vs)), i;
  }
  function P() {
    var i, u;
    for (O++, i = [], u = t.charAt(h), D.test(u) ? h++ : (u = r, O === 0 && $(nn)); u !== r; )
      i.push(u), u = t.charAt(h), D.test(u) ? h++ : (u = r, O === 0 && $(nn));
    return O--, u = r, O === 0 && $(Js), i;
  }
  function pt() {
    var i, u, f, _;
    return i = h, u = P(), t.charCodeAt(h) === 44 ? (f = d, h++) : (f = r, O === 0 && $(Hs)), f !== r ? (_ = P(), u = [u, f, _], i = u) : (h = i, i = r), i;
  }
  function hn() {
    var i, u, f, _;
    return i = h, u = P(), t.charCodeAt(h) === 124 ? (f = v, h++) : (f = r, O === 0 && $(Us)), f !== r ? (_ = P(), u = [u, f, _], i = u) : (h = i, i = r), i;
  }
  function fn() {
    var i, u, f, _;
    return i = h, u = P(), t.charCodeAt(h) === 46 ? (f = a, h++) : (f = r, O === 0 && $(Ye)), f !== r ? (_ = P(), u = [u, f, _], i = u) : (h = i, i = r), i;
  }
  function ht() {
    var i;
    return i = t.charAt(h), N.test(i) ? h++ : (i = r, O === 0 && $(Ks)), i;
  }
  function Vt() {
    var i;
    return O++, i = t.charAt(h), T.test(i) ? h++ : (i = r, O === 0 && $(Xs)), O--, i === r && O === 0 && $(Qs), i;
  }
  function dn() {
    var i, u, f, _;
    if (i = h, P(), u = [], f = Vt(), f !== r)
      for (; f !== r; )
        u.push(f), f = Vt();
    else
      u = r;
    return u !== r ? (f = P(), R = h, _ = Ei(u), _ ? _ = r : _ = void 0, _ !== r ? (R = i, i = Bi(u)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Io() {
    var i, u, f, _;
    return i = h, P(), t.charCodeAt(h) === 91 ? (u = m, h++) : (u = r, O === 0 && $(sn)), u !== r ? (P(), f = vn(), f !== r ? (P(), t.charCodeAt(h) === 93 ? (_ = y, h++) : (_ = r, O === 0 && $(on)), _ !== r ? (P(), R = i, i = ki(f)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Co() {
    var i, u, f, _, L;
    return i = h, P(), t.charCodeAt(h) === 123 ? (u = I, h++) : (u = r, O === 0 && $(Zs)), u !== r ? (P(), f = yn(), f !== r ? (P(), t.charCodeAt(h) === 125 ? (_ = S, h++) : (_ = r, O === 0 && $(Ys)), _ !== r ? (L = xo(), L === r && (L = null), P(), R = i, i = Di(f, L)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function xo() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 37 ? (u = M, h++) : (u = r, O === 0 && $(ei)), u !== r ? (f = ft(), f !== r ? (R = i, i = Oi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Fo() {
    var i, u, f, _;
    return i = h, P(), t.charCodeAt(h) === 60 ? (u = H, h++) : (u = r, O === 0 && $(ti)), u !== r ? (P(), f = yn(), f !== r ? (P(), t.charCodeAt(h) === 62 ? (_ = G, h++) : (_ = r, O === 0 && $(ri)), _ !== r ? (P(), R = i, i = Ni(f)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function ft() {
    var i;
    return i = dn(), i === r && (i = Io(), i === r && (i = Co(), i === r && (i = Fo()))), i;
  }
  function mn() {
    var i;
    return i = So(), i === r && (i = Bo(), i === r && (i = ko(), i === r && (i = Do(), i === r && (i = Eo(), i === r && (i = Oo(), i === r && (i = No(), i === r && (i = Lo()))))))), i;
  }
  function So() {
    var i, u, f;
    return i = h, P(), u = t.charAt(h), V.test(u) ? h++ : (u = r, O === 0 && $(ni)), u !== r ? (f = Te(), f === r && (f = null), R = i, i = Li(f)) : (h = i, i = r), i;
  }
  function Eo() {
    var i, u, f;
    return i = h, P(), t.charCodeAt(h) === 33 ? (u = xe, h++) : (u = r, O === 0 && $(si)), u !== r ? (f = Te(), f === r && (f = null), R = i, i = $i(f)) : (h = i, i = r), i;
  }
  function Bo() {
    var i, u, f, _, L, K, ke;
    return i = h, t.charCodeAt(h) === 40 ? (u = Ee, h++) : (u = r, O === 0 && $(ii)), u !== r ? (P(), f = Nt(), f !== r ? (P(), _ = pt(), _ !== r ? (P(), L = Nt(), L !== r ? (P(), pt(), P(), K = Nt(), K === r && (K = null), P(), t.charCodeAt(h) === 41 ? (ke = pr, h++) : (ke = r, O === 0 && $(oi)), ke !== r ? (R = i, i = Pi(f, L, K)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function ko() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 47 ? (u = hr, h++) : (u = r, O === 0 && $(ai)), u !== r ? (f = ft(), f !== r ? (R = i, i = Ri(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Do() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 42 ? (u = ot, h++) : (u = r, O === 0 && $(ui)), u !== r ? (f = ft(), f !== r ? (R = i, i = ji(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Oo() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 63 ? (u = Ct, h++) : (u = r, O === 0 && $(ci)), u !== r ? (f = Te(), f === r && (f = null), R = i, i = Ti(f)) : (h = i, i = r), i;
  }
  function No() {
    var i, u, f;
    return i = h, t.charCodeAt(h) === 58 ? (u = fr, h++) : (u = r, O === 0 && $(li)), u !== r ? (f = ft(), f !== r ? (R = i, i = qi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Lo() {
    var i, u, f;
    return i = h, t.substr(h, 2) === xt ? (u = xt, h += 2) : (u = r, O === 0 && $(pi)), u !== r ? (f = ft(), f !== r ? (R = i, i = Mi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Nt() {
    var i, u, f, _;
    if (i = h, u = ft(), u !== r) {
      for (f = [], _ = mn(); _ !== r; )
        f.push(_), _ = mn();
      R = i, i = Wi(u, f);
    } else
      h = i, i = r;
    return i;
  }
  function ze() {
    var i, u, f, _;
    if (i = h, t.charCodeAt(h) === 94 ? (u = dr, h++) : (u = r, O === 0 && $(hi)), u === r && (u = null), f = [], _ = Nt(), _ !== r)
      for (; _ !== r; )
        f.push(_), _ = Nt();
    else
      f = r;
    return f !== r ? (R = i, i = zi(u, f)) : (h = i, i = r), i;
  }
  function gn() {
    var i, u, f, _, L;
    if (i = h, u = [], f = h, _ = pt(), _ !== r ? (L = ze(), L !== r ? f = L : (h = f, f = r)) : (h = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = h, _ = pt(), _ !== r ? (L = ze(), L !== r ? f = L : (h = f, f = r)) : (h = f, f = r);
    else
      u = r;
    return u !== r && (R = i, u = Gi(u)), i = u, i;
  }
  function $o() {
    var i, u, f, _, L;
    if (i = h, u = [], f = h, _ = hn(), _ !== r ? (L = ze(), L !== r ? f = L : (h = f, f = r)) : (h = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = h, _ = hn(), _ !== r ? (L = ze(), L !== r ? f = L : (h = f, f = r)) : (h = f, f = r);
    else
      u = r;
    return u !== r && (R = i, u = Vi(u)), i = u, i;
  }
  function Po() {
    var i, u, f, _, L;
    if (i = h, u = [], f = h, _ = fn(), _ !== r ? (L = ze(), L !== r ? f = L : (h = f, f = r)) : (h = f, f = r), f !== r)
      for (; f !== r; )
        u.push(f), f = h, _ = fn(), _ !== r ? (L = ze(), L !== r ? f = L : (h = f, f = r)) : (h = f, f = r);
    else
      u = r;
    return u !== r && (R = i, u = Ji(u)), i = u, i;
  }
  function vn() {
    var i, u, f;
    return i = h, u = ze(), u !== r ? (f = gn(), f === r && (f = $o(), f === r && (f = Po())), f === r && (f = null), R = i, i = Hi(u, f)) : (h = i, i = r), i;
  }
  function yn() {
    var i, u, f;
    return i = h, u = ze(), u !== r ? (f = gn(), f === r && (f = null), R = i, i = Ui(u, f)) : (h = i, i = r), i;
  }
  function Ro() {
    var i, u, f, _;
    return i = h, P(), u = ht(), u !== r ? (P(), f = vn(), f !== r ? (P(), _ = ht(), _ !== r ? (R = i, i = Ki(f)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function jo() {
    var i;
    return i = Jo(), i === r && (i = Wo(), i === r && (i = Vo(), i === r && (i = qo(), i === r && (i = Mo(), i === r && (i = To(), i === r && (i = Go(), i === r && (i = zo()))))))), i;
  }
  function To() {
    var i, u, f;
    return i = h, t.substr(h, 6) === Ft ? (u = Ft, h += 6) : (u = r, O === 0 && $(fi)), u !== r ? (P(), f = dt(), f !== r ? (R = i, i = Qi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function qo() {
    var i, u, f, _, L;
    return i = h, t.substr(h, 6) === at ? (u = at, h += 6) : (u = r, O === 0 && $(di)), u !== r ? (P(), f = ht(), f !== r ? (_ = dn(), _ !== r ? (L = ht(), L !== r ? (R = i, i = Xi(_)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Mo() {
    var i, u, f, _;
    return i = h, t.substr(h, 6) === St ? (u = St, h += 6) : (u = r, O === 0 && $(mi)), u !== r ? (P(), f = Gt(), f !== r ? (P(), _ = Gt(), _ !== r ? (P(), Gt(), R = i, i = Zi(f, _)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Wo() {
    var i, u, f;
    return i = h, t.substr(h, 4) === Mt ? (u = Mt, h += 4) : (u = r, O === 0 && $(gi)), u !== r ? (P(), f = Te(), f !== r ? (R = i, i = Yi(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function zo() {
    var i, u, f;
    return i = h, t.substr(h, 4) === ut ? (u = ut, h += 4) : (u = r, O === 0 && $(vi)), u !== r ? (P(), f = Te(), f !== r ? (R = i, i = eo(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Go() {
    var i, u, f;
    return i = h, t.substr(h, 4) === $e ? (u = $e, h += 4) : (u = r, O === 0 && $(yi)), u !== r ? (P(), f = Te(), f !== r ? (R = i, i = to(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Vo() {
    var i, u, f;
    return i = h, t.substr(h, 4) === Pe ? (u = Pe, h += 4) : (u = r, O === 0 && $(Ai)), u !== r ? (P(), f = Te(), f !== r ? (R = i, i = ro(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Jo() {
    var i, u, f, _, L;
    if (i = h, t.substr(h, 5) === Ze ? (u = Ze, h += 5) : (u = r, O === 0 && $(wi)), u !== r)
      if (P(), f = ht(), f !== r) {
        if (_ = [], L = Vt(), L !== r)
          for (; L !== r; )
            _.push(L), L = Vt();
        else
          _ = r;
        _ !== r ? (L = ht(), L !== r ? (R = i, i = no(_)) : (h = i, i = r)) : (h = i, i = r);
      } else
        h = i, i = r;
    else
      h = i, i = r;
    return i;
  }
  function wr() {
    var i, u, f, _;
    if (i = h, t.substr(h, 2) === Et ? (u = Et, h += 2) : (u = r, O === 0 && $(_i)), u !== r) {
      for (f = [], _ = t.charAt(h), Z.test(_) ? h++ : (_ = r, O === 0 && $(an)); _ !== r; )
        f.push(_), _ = t.charAt(h), Z.test(_) ? h++ : (_ = r, O === 0 && $(an));
      u = [u, f], i = u;
    } else
      h = i, i = r;
    return i;
  }
  function Ho() {
    var i, u, f, _, L, K, ke, mt;
    if (i = h, t.substr(h, 3) === Wt ? (u = Wt, h += 3) : (u = r, O === 0 && $(bi)), u !== r)
      if (P(), t.charCodeAt(h) === 91 ? (f = m, h++) : (f = r, O === 0 && $(sn)), f !== r)
        if (P(), _ = dt(), _ !== r) {
          for (L = [], K = h, ke = pt(), ke !== r ? (mt = dt(), mt !== r ? (R = K, K = un(_, mt)) : (h = K, K = r)) : (h = K, K = r); K !== r; )
            L.push(K), K = h, ke = pt(), ke !== r ? (mt = dt(), mt !== r ? (R = K, K = un(_, mt)) : (h = K, K = r)) : (h = K, K = r);
          K = P(), t.charCodeAt(h) === 93 ? (ke = y, h++) : (ke = r, O === 0 && $(on)), ke !== r ? (R = i, i = so(_, L)) : (h = i, i = r);
        } else
          h = i, i = r;
      else
        h = i, i = r;
    else
      h = i, i = r;
    return i;
  }
  function Uo() {
    var i;
    return i = Ho(), i === r && (i = Ro()), i;
  }
  function dt() {
    var i, u, f, _, L;
    if (i = h, u = Uo(), u !== r) {
      for (P(), f = [], _ = wr(); _ !== r; )
        f.push(_), _ = wr();
      R = i, i = io(u);
    } else
      h = i, i = r;
    return i === r && (i = h, u = jo(), u !== r ? (P(), t.charCodeAt(h) === 36 ? (f = mr, h++) : (f = r, O === 0 && $(Ii)), f !== r ? (_ = P(), L = dt(), L !== r ? (R = i, i = oo(u, L)) : (h = i, i = r)) : (h = i, i = r)) : (h = i, i = r)), i;
  }
  function Ko() {
    var i, u;
    return i = h, u = dt(), u !== r && (R = i, u = ao(u)), i = u, i === r && (i = wr()), i;
  }
  function Qo() {
    var i;
    return i = Ko(), i;
  }
  function Xo() {
    var i, u;
    return i = h, P(), u = Zo(), u === r && (u = Yo(), u === r && (u = ea())), u !== r ? (P(), R = i, i = uo(u)) : (h = i, i = r), i;
  }
  function Zo() {
    var i, u, f;
    return i = h, t.substr(h, 6) === Bt ? (u = Bt, h += 6) : (u = r, O === 0 && $(Ci)), u !== r ? (P(), f = Te(), f !== r ? (R = i, i = co(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function Yo() {
    var i, u, f;
    return i = h, t.substr(h, 6) === kt ? (u = kt, h += 6) : (u = r, O === 0 && $(xi)), u !== r ? (P(), f = Te(), f !== r ? (R = i, i = lo(f)) : (h = i, i = r)) : (h = i, i = r), i;
  }
  function ea() {
    var i, u;
    return i = h, t.substr(h, 4) === gr ? (u = gr, h += 4) : (u = r, O === 0 && $(Fi)), u !== r && (R = i, u = po()), i = u, i;
  }
  function ta() {
    var i;
    return i = Qo(), i === r && (i = Xo()), i;
  }
  var ra = function(i) {
    this.type_ = "atom", this.source_ = i, this.location_ = cn();
  }, Jt = function(i, u, f, _) {
    this.type_ = "pattern", this.arguments_ = { alignment: u, _steps: _ }, f !== void 0 && (this.arguments_.seed = f), this.source_ = i;
  }, na = function(i, u, f) {
    this.type_ = i, this.arguments_ = u, this.source_ = f;
  }, sa = function(i, u) {
    this.type_ = "element", this.source_ = i, this.options_ = u, this.location_ = cn();
  }, _r = function(i, u) {
    this.type_ = "command", this.name_ = i, this.options_ = u;
  }, br = 0;
  if (Ot = o(), e.peg$library)
    return (
      /** @type {any} */
      {
        peg$result: Ot,
        peg$currPos: h,
        peg$FAILED: r,
        peg$maxFailExpected: zt,
        peg$maxFailPos: Be
      }
    );
  if (Ot !== r && h === t.length)
    return Ot;
  throw Ot !== r && h < t.length && $(fo()), mo(
    zt,
    Be < t.length ? t.charAt(Be) : null,
    Be < t.length ? Ar(Be, Be + 1) : Ar(Be, Be)
  );
}
const ms = "strudel.log";
let fu = 1e3, Ln, $n;
function du(t, e = "cyclist") {
  process.env.NODE_ENV === "development" && console.error(t), _t(`[${e}] error: ${t.message}`);
}
function _t(t, e, r = {}) {
  let n = performance.now();
  Ln === t && n - $n < fu || (Ln = t, $n = n, console.log(`%c${t}`, "background-color: black;color:white;border-radius:15px"), typeof document < "u" && typeof CustomEvent < "u" && document.dispatchEvent(
    new CustomEvent(ms, {
      detail: {
        message: t,
        type: e,
        data: r
      }
    })
  ));
}
_t.key = ms;
typeof BigInt > "u" && (BigInt = function(t) {
  if (isNaN(t)) throw new Error("");
  return t;
});
const k = BigInt(0), W = BigInt(1), ne = BigInt(2), Rt = BigInt(3), vt = BigInt(5), Ae = BigInt(10);
BigInt(Number.MAX_SAFE_INTEGER);
const mu = 2e3, E = {
  s: W,
  n: k,
  d: W
};
function qe(t, e) {
  try {
    t = BigInt(t);
  } catch {
    throw Ge();
  }
  return t * e;
}
function De(t) {
  return typeof t == "bigint" ? t : Math.floor(t);
}
function Q(t, e) {
  if (e === k)
    throw Ur();
  const r = Object.create(U.prototype);
  r.s = t < k ? -W : W, t = t < k ? -t : t;
  const n = et(t, e);
  return r.n = t / n, r.d = e / n, r;
}
const gu = [ne * ne, ne, ne * ne, ne, ne * ne, ne * Rt, ne, ne * Rt];
function gt(t) {
  const e = /* @__PURE__ */ Object.create(null);
  if (t <= W)
    return e[t] = W, e;
  const r = (n) => {
    e[n] = (e[n] || k) + W;
  };
  for (; t % ne === k; )
    r(ne), t /= ne;
  for (; t % Rt === k; )
    r(Rt), t /= Rt;
  for (; t % vt === k; )
    r(vt), t /= vt;
  for (let n = 0, s = ne + vt; s * s <= t; ) {
    for (; t % s === k; )
      r(s), t /= s;
    s += gu[n], n = n + 1 & 7;
  }
  return t > W && r(t), e;
}
const re = function(t, e) {
  let r = k, n = W, s = W;
  if (t != null) if (e !== void 0) {
    if (typeof t == "bigint")
      r = t;
    else {
      if (isNaN(t))
        throw Ge();
      if (t % 1 !== 0)
        throw Pn();
      r = BigInt(t);
    }
    if (typeof e == "bigint")
      n = e;
    else {
      if (isNaN(e))
        throw Ge();
      if (e % 1 !== 0)
        throw Pn();
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
      throw Ge();
    s = r * n;
  } else if (typeof t == "number") {
    if (isNaN(t))
      throw Ge();
    if (t < 0 && (s = -W, t = -t), t % 1 === 0)
      r = BigInt(t);
    else {
      let o = 1, a = 0, l = 1, c = 1, d = 1, v = 1e7;
      for (t >= 1 && (o = 10 ** Math.floor(1 + Math.log10(t)), t /= o); l <= v && d <= v; ) {
        let m = (a + c) / (l + d);
        if (t === m) {
          l + d <= v ? (r = a + c, n = l + d) : d > l ? (r = c, n = d) : (r = a, n = l);
          break;
        } else
          t > m ? (a += c, l += d) : (c += a, d += l), l > v ? (r = c, n = d) : (r = a, n = l);
      }
      r = BigInt(r) * BigInt(o), n = BigInt(n);
    }
  } else if (typeof t == "string") {
    let o = 0, a = k, l = k, c = k, d = W, v = W, m = t.replace(/_/g, "").match(/\d+|./g);
    if (m === null)
      throw Ge();
    if (m[o] === "-" ? (s = -W, o++) : m[o] === "+" && o++, m.length === o + 1 ? l = qe(m[o++], s) : m[o + 1] === "." || m[o] === "." ? (m[o] !== "." && (a = qe(m[o++], s)), o++, (o + 1 === m.length || m[o + 1] === "(" && m[o + 3] === ")" || m[o + 1] === "'" && m[o + 3] === "'") && (l = qe(m[o], s), d = Ae ** BigInt(m[o].length), o++), (m[o] === "(" && m[o + 2] === ")" || m[o] === "'" && m[o + 2] === "'") && (c = qe(m[o + 1], s), v = Ae ** BigInt(m[o + 1].length) - W, o += 3)) : m[o + 1] === "/" || m[o + 1] === ":" ? (l = qe(m[o], s), d = qe(m[o + 2], W), o += 3) : m[o + 3] === "/" && m[o + 1] === " " && (a = qe(m[o], s), l = qe(m[o + 2], s), d = qe(m[o + 4], W), o += 5), m.length <= o)
      n = d * v, s = /* void */
      r = c + n * a + v * l;
    else
      throw Ge();
  } else if (typeof t == "bigint")
    r = t, s = t, n = W;
  else
    throw Ge();
  if (n === k)
    throw Ur();
  E.s = s < k ? -W : W, E.n = r < k ? -r : r, E.d = n < k ? -n : n;
};
function vu(t, e, r) {
  let n = W;
  for (; e > k; t = t * t % r, e >>= W)
    e & W && (n = n * t % r);
  return n;
}
function yu(t, e) {
  for (; e % ne === k; e /= ne)
    ;
  for (; e % vt === k; e /= vt)
    ;
  if (e === W)
    return k;
  let r = Ae % e, n = 1;
  for (; r !== W; n++)
    if (r = r * Ae % e, n > mu)
      return k;
  return BigInt(n);
}
function Au(t, e, r) {
  let n = W, s = vu(Ae, r, e);
  for (let o = 0; o < 300; o++) {
    if (n === s)
      return BigInt(o);
    n = n * Ae % e, s = s * Ae % e;
  }
  return 0;
}
function et(t, e) {
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
function U(t, e) {
  if (re(t, e), this instanceof U)
    t = et(E.d, E.n), this.s = E.s, this.n = E.n / t, this.d = E.d / t;
  else
    return Q(E.s * E.n, E.d);
}
const Ur = function() {
  return new Error("Division by Zero");
}, Ge = function() {
  return new Error("Invalid argument");
}, Pn = function() {
  return new Error("Parameters must be integer");
};
U.prototype = {
  s: W,
  n: k,
  d: W,
  /**
   * Calculates the absolute value
   *
   * Ex: new Fraction(-4).abs() => 4
   **/
  abs: function() {
    return Q(this.n, this.d);
  },
  /**
   * Inverts the sign of the current fraction
   *
   * Ex: new Fraction(-4).neg() => 4
   **/
  neg: function() {
    return Q(-this.s * this.n, this.d);
  },
  /**
   * Adds two rational numbers
   *
   * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
   **/
  add: function(t, e) {
    return re(t, e), Q(
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
    return re(t, e), Q(
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
    return re(t, e), Q(
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
    return re(t, e), Q(
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
    return Q(this.s * this.n, this.d);
  },
  /**
   * Calculates the modulo of two rational numbers - a more precise fmod
   *
   * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
   * Ex: new Fraction(20, 10).mod().equals(0) ? "is Integer"
   **/
  mod: function(t, e) {
    if (t === void 0)
      return Q(this.s * this.n % this.d, W);
    if (re(t, e), k === E.n * this.d)
      throw Ur();
    return Q(
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
    return re(t, e), Q(et(E.n, this.n) * et(E.d, this.d), E.d * this.d);
  },
  /**
   * Calculates the fractional lcm of two rational numbers
   *
   * Ex: new Fraction(5,8).lcm(3,7) => 15
   */
  lcm: function(t, e) {
    return re(t, e), E.n === k && this.n === k ? Q(k, W) : Q(E.n * this.n, et(E.n, this.n) * et(E.d, this.d));
  },
  /**
   * Gets the inverse of the fraction, means numerator and denominator are exchanged
   *
   * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
   **/
  inverse: function() {
    return Q(this.s * this.d, this.n);
  },
  /**
   * Calculates the fraction to some integer exponent
   *
   * Ex: new Fraction(-1,2).pow(-3) => -8
   */
  pow: function(t, e) {
    if (re(t, e), E.d === W)
      return E.s < k ? Q((this.s * this.d) ** E.n, this.n ** E.n) : Q((this.s * this.n) ** E.n, this.d ** E.n);
    if (this.s < k) return null;
    let r = gt(this.n), n = gt(this.d), s = W, o = W;
    for (let a in r)
      if (a !== "1") {
        if (a === "0") {
          s = k;
          break;
        }
        if (r[a] *= E.n, r[a] % E.d === k)
          r[a] /= E.d;
        else return null;
        s *= BigInt(a) ** r[a];
      }
    for (let a in n)
      if (a !== "1") {
        if (n[a] *= E.n, n[a] % E.d === k)
          n[a] /= E.d;
        else return null;
        o *= BigInt(a) ** n[a];
      }
    return E.s < k ? Q(o, s) : Q(s, o);
  },
  /**
   * Calculates the logarithm of a fraction to a given rational base
   *
   * Ex: new Fraction(27, 8).log(9, 4) => 3/2
   */
  log: function(t, e) {
    if (re(t, e), this.s <= k || E.s <= k) return null;
    const r = /* @__PURE__ */ Object.create(null), n = gt(E.n), s = gt(E.d), o = gt(this.n), a = gt(this.d);
    for (const d in s)
      n[d] = (n[d] || k) - s[d];
    for (const d in a)
      o[d] = (o[d] || k) - a[d];
    for (const d in n)
      d !== "1" && (r[d] = !0);
    for (const d in o)
      d !== "1" && (r[d] = !0);
    let l = null, c = null;
    for (const d in r) {
      const v = n[d] || k, m = o[d] || k;
      if (v === k) {
        if (m !== k)
          return null;
        continue;
      }
      let y = m, I = v;
      const S = et(y, I);
      if (y /= S, I /= S, l === null && c === null)
        l = y, c = I;
      else if (y * c !== l * I)
        return null;
    }
    return l !== null && c !== null ? Q(l, c) : null;
  },
  /**
   * Check if two rational numbers are the same
   *
   * Ex: new Fraction(19.6).equals([98, 5]);
   **/
  equals: function(t, e) {
    return re(t, e), this.s * this.n * E.d === E.s * E.n * this.d;
  },
  /**
   * Check if this rational number is less than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lt: function(t, e) {
    return re(t, e), this.s * this.n * E.d < E.s * E.n * this.d;
  },
  /**
   * Check if this rational number is less than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  lte: function(t, e) {
    return re(t, e), this.s * this.n * E.d <= E.s * E.n * this.d;
  },
  /**
   * Check if this rational number is greater than another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gt: function(t, e) {
    return re(t, e), this.s * this.n * E.d > E.s * E.n * this.d;
  },
  /**
   * Check if this rational number is greater than or equal another
   *
   * Ex: new Fraction(19.6).lt([98, 5]);
   **/
  gte: function(t, e) {
    return re(t, e), this.s * this.n * E.d >= E.s * E.n * this.d;
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
    re(t, e);
    let r = this.s * this.n * E.d - E.s * E.n * this.d;
    return (k < r) - (r < k);
  },
  /**
   * Calculates the ceil of a rational number
   *
   * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
   **/
  ceil: function(t) {
    return t = Ae ** BigInt(t || 0), Q(
      De(this.s * t * this.n / this.d) + (t * this.n % this.d > k && this.s >= k ? W : k),
      t
    );
  },
  /**
   * Calculates the floor of a rational number
   *
   * Ex: new Fraction('4.(3)').floor() => (4 / 1)
   **/
  floor: function(t) {
    return t = Ae ** BigInt(t || 0), Q(
      De(this.s * t * this.n / this.d) - (t * this.n % this.d > k && this.s < k ? W : k),
      t
    );
  },
  /**
   * Rounds a rational numbers
   *
   * Ex: new Fraction('4.(3)').round() => (4 / 1)
   **/
  round: function(t) {
    return t = Ae ** BigInt(t || 0), Q(
      De(this.s * t * this.n / this.d) + this.s * ((this.s >= k ? W : k) + ne * (t * this.n % this.d) > this.d ? W : k),
      t
    );
  },
  /**
    * Rounds a rational number to a multiple of another rational number
    *
    * Ex: new Fraction('0.9').roundTo("1/8") => 7 / 8
    **/
  roundTo: function(t, e) {
    re(t, e);
    const r = this.n * E.d, n = this.d * E.n, s = r % n;
    let o = De(r / n);
    return s + s >= n && o++, Q(this.s * o * E.n, E.d);
  },
  /**
   * Check if two rational numbers are divisible
   *
   * Ex: new Fraction(19.6).divisible(1.5);
   */
  divisible: function(t, e) {
    return re(t, e), E.n === k ? !1 : this.n * E.d % (E.n * this.d) === k;
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
  toString: function(t = 15) {
    let e = this.n, r = this.d, n = yu(e, r), s = Au(e, r, n), o = this.s < k ? "-" : "";
    if (o += De(e / r), e %= r, e *= Ae, e && (o += "."), n) {
      for (let a = s; a--; )
        o += De(e / r), e %= r, e *= Ae;
      o += "(";
      for (let a = n; a--; )
        o += De(e / r), e %= r, e *= Ae;
      o += ")";
    } else
      for (let a = t; e && a--; )
        o += De(e / r), e %= r, e *= Ae;
    return o;
  },
  /**
   * Returns a string-fraction representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toFraction() => "4 1/3"
   **/
  toFraction: function(t = !1) {
    let e = this.n, r = this.d, n = this.s < k ? "-" : "";
    if (r === W)
      n += e;
    else {
      const s = De(e / r);
      t && s > k && (n += s, n += " ", e %= r), n += e, n += "/", n += r;
    }
    return n;
  },
  /**
   * Returns a latex representation of a Fraction object
   *
   * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
   **/
  toLatex: function(t = !1) {
    let e = this.n, r = this.d, n = this.s < k ? "-" : "";
    if (r === W)
      n += e;
    else {
      const s = De(e / r);
      t && s > k && (n += s, e %= r), n += "\\frac{", n += e, n += "}{", n += r, n += "}";
    }
    return n;
  },
  /**
   * Returns an array of continued fraction elements
   *
   * Ex: new Fraction("7/8").toContinued() => [0,1,7]
   */
  toContinued: function() {
    let t = this.n, e = this.d;
    const r = [];
    for (; e; ) {
      r.push(De(t / e));
      const n = t % e;
      t = e, e = n;
    }
    return r;
  },
  simplify: function(t = 1e-3) {
    const e = BigInt(Math.ceil(1 / t)), r = this.abs(), n = r.toContinued();
    for (let s = 1; s < n.length; s++) {
      let o = Q(n[s - 1], W);
      for (let l = s - 2; l >= 0; l--)
        o = o.inverse().add(n[l]);
      let a = o.sub(r);
      if (a.n * e < a.d)
        return o.mul(this.s);
    }
    return this;
  }
};
const Rn = {}, gs = (t) => {
  if (typeof t != "string" || !t) return t;
  const e = t.toLowerCase();
  let r = "";
  for (const n in Rn)
    e.startsWith(n) && n.length > r.length && (r = n);
  return r ? Rn[r] + t.slice(r.length) : t;
}, wu = (t) => /^[a-gA-G][#bsf]*-?[0-9]*$/.test(gs(t)), _u = (t) => {
  if (typeof t != "string")
    return [];
  t = gs(t);
  const [e, r = "", n] = t.match(/^([a-gA-G])([#bsf]*)(-?[0-9]*)$/)?.slice(1) || [];
  return e ? [e, r, n ? Number(n) : void 0] : [];
}, bu = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 }, Iu = { "#": 1, b: -1, s: 1, f: -1 }, Cu = (t) => t?.split("").reduce((e, r) => e + Iu[r], 0) || 0, xu = (t, e = 3) => {
  const [r, n, s = e] = _u(t);
  if (!r)
    throw new Error('not a note: "' + t + '"');
  const o = bu[r.toLowerCase()], a = Cu(n);
  return (Number(s) + 1) * 12 + o + a;
}, vs = (t, e) => (t % e + e) % e, Fu = (t, e) => t.slice(e).concat(t.slice(0, e)), qt = (t) => t.filter((e) => e != null), Ve = (t) => [].concat(...t), Ht = (t) => t, ar = (t, e) => Array.from({ length: e - t + 1 }, (r, n) => n + t);
function q(t, e, r = t.length) {
  const n = function s(...o) {
    if (o.length >= r)
      return t.apply(this, o);
    {
      const a = function(...l) {
        return s.apply(this, o.concat(l));
      };
      return e && e(a, o), a;
    }
  };
  return e && e(n, []), n;
}
function ys(t) {
  const e = Number(t);
  if (!isNaN(e))
    return e;
  if (wu(t))
    return xu(t);
  throw new Error(`cannot parse as numeral: "${t}"`);
}
function Su(t, e) {
  return (...r) => t(...r.map(e));
}
function Oe(t) {
  return Su(t, ys);
}
const As = function(t, e) {
  return [e.slice(0, t), e.slice(t)];
}, Kr = (t, e, r) => e.map((n, s) => t(n, r[s])), Eu = function(t) {
  const e = [];
  for (let r = 0; r < t.length - 1; ++r)
    e.push([t[r], t[r + 1]]);
  return e;
}, Bu = (t, e, r) => Math.min(Math.max(t, e), r);
function ku(t) {
  return t.sort((e, r) => e.compare(r)).filter(function(e, r, n) {
    return !r || e.ne(n[r - 1]);
  });
}
function Du(t, e) {
  return Array.isArray(t) ? t.map(e) : Object.fromEntries(Object.entries(t).map(([r, n], s) => [r, e(n, r, s)]));
}
const Ou = /* @__PURE__ */ new Map([
  ["control", "Control"],
  ["ctrl", "Control"],
  ["alt", "Alt"],
  ["shift", "Shift"],
  ["down", "ArrowDown"],
  ["up", "ArrowUp"],
  ["left", "ArrowLeft"],
  ["right", "ArrowRight"]
]);
let Lt;
function Nu() {
  if (Lt == null) {
    if (typeof window > "u")
      return;
    Lt = {}, window.addEventListener("keydown", (t) => {
      Lt[t.key] = !0;
    }), window.addEventListener("keyup", (t) => {
      Lt[t.key] = !1;
    });
  }
  return { ...Lt };
}
function ws(t, e = !1) {
  return typeof t == "object" ? e ? JSON.stringify(t).slice(1, -1).replaceAll('"', "").replaceAll(",", " ") : JSON.stringify(t) : t;
}
U.prototype.sam = function() {
  return this.floor();
};
U.prototype.nextSam = function() {
  return this.sam().add(1);
};
U.prototype.wholeCycle = function() {
  return new Y(this.sam(), this.nextSam());
};
U.prototype.cyclePos = function() {
  return this.sub(this.sam());
};
U.prototype.lt = function(t) {
  return this.compare(t) < 0;
};
U.prototype.gt = function(t) {
  return this.compare(t) > 0;
};
U.prototype.lte = function(t) {
  return this.compare(t) <= 0;
};
U.prototype.gte = function(t) {
  return this.compare(t) >= 0;
};
U.prototype.eq = function(t) {
  return this.compare(t) == 0;
};
U.prototype.ne = function(t) {
  return this.compare(t) != 0;
};
U.prototype.max = function(t) {
  return this.gt(t) ? this : t;
};
U.prototype.maximum = function(...t) {
  return t = t.map((e) => new U(e)), t.reduce((e, r) => r.max(e), this);
};
U.prototype.min = function(t) {
  return this.lt(t) ? this : t;
};
U.prototype.mulmaybe = function(t) {
  return t !== void 0 ? this.mul(t) : void 0;
};
U.prototype.divmaybe = function(t) {
  return t !== void 0 ? this.div(t) : void 0;
};
U.prototype.addmaybe = function(t) {
  return t !== void 0 ? this.add(t) : void 0;
};
U.prototype.submaybe = function(t) {
  return t !== void 0 ? this.sub(t) : void 0;
};
U.prototype.show = function() {
  return this.s * this.n + "/" + this.d;
};
U.prototype.or = function(t) {
  return this.eq(0) ? t : this;
};
const F = (t) => U(t), Lu = (...t) => {
  if (t = qt(t), t.length !== 0)
    return t.reduce((e, r) => e.gcd(r), F(1));
}, Je = (...t) => {
  if (t = qt(t), t.length === 0)
    return;
  const e = t.pop();
  return t.reduce(
    (r, n) => r === void 0 || n === void 0 ? void 0 : r.lcm(n),
    e
  );
}, $u = (t) => t instanceof U;
F._original = U;
class Y {
  constructor(e, r) {
    this.begin = F(e), this.end = F(r);
  }
  get spanCycles() {
    const e = [];
    var r = this.begin;
    const n = this.end, s = n.sam();
    if (r.equals(n))
      return [new Y(r, n)];
    for (; n.gt(r); ) {
      if (r.sam().equals(s)) {
        e.push(new Y(r, this.end));
        break;
      }
      const o = r.nextSam();
      e.push(new Y(r, o)), r = o;
    }
    return e;
  }
  get duration() {
    return this.end.sub(this.begin);
  }
  cycleArc() {
    const e = this.begin.cyclePos(), r = e.add(this.duration);
    return new Y(e, r);
  }
  withTime(e) {
    return new Y(e(this.begin), e(this.end));
  }
  withEnd(e) {
    return new Y(this.begin, e(this.end));
  }
  withCycle(e) {
    const r = this.begin.sam(), n = r.add(e(this.begin.sub(r))), s = r.add(e(this.end.sub(r)));
    return new Y(n, s);
  }
  intersection(e) {
    const r = this.begin.max(e.begin), n = this.end.min(e.end);
    if (!r.gt(n) && !(r.equals(n) && (r.equals(this.end) && this.begin.lt(this.end) || r.equals(e.end) && e.begin.lt(e.end))))
      return new Y(r, n);
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
class ee {
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
    return new ee(r, e(this.part), this.value, this.context);
  }
  withValue(e) {
    return new ee(this.whole, this.part, e(this.value), this.context);
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
      return [n, new ee(this.whole, this.part, s, this.context, !1)];
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
    return `${this.whole == null ? "~" : this.whole.show()}: ${ws(this.value, e)}`;
  }
  combineContext(e) {
    const r = this;
    return { ...r.context, ...e.context, locations: (r.context.locations || []).concat(e.context.locations || []) };
  }
  setContext(e) {
    return new ee(this.whole, this.part, this.value, e);
  }
  ensureObjectValue() {
    if (typeof this.value != "object")
      throw new Error(
        `expected hap.value to be an object, but got "${this.value}". Hint: append .note() or .s() to the end`,
        "error"
      );
  }
}
class Tt {
  constructor(e, r = {}) {
    this.span = e, this.controls = r;
  }
  // Returns new State with different span
  setSpan(e) {
    return new Tt(e, this.controls);
  }
  withSpan(e) {
    return this.setSpan(e(this.span));
  }
  // Returns new State with added controls.
  setControls(e) {
    return new Tt(this.span, { ...this.controls, ...e });
  }
}
function Pu(t, e, r) {
  if (e?.value !== void 0 && Object.keys(e).length === 1)
    return _t("[warn]: Can't do arithmetic on control pattern."), t;
  const n = Object.keys(t).filter((s) => Object.keys(e).includes(s));
  return Object.assign({}, t, e, Object.fromEntries(n.map((s) => [s, r(t[s], e[s])])));
}
q((t, e) => t * e);
q((t, e) => e.map(t));
function Ru(t, e = 60) {
  let r = 0, n = F(0), s = [""], o = "";
  for (; s[0].length < e; ) {
    const a = t.queryArc(r, r + 1), l = a.filter((v) => v.hasOnset()).map((v) => v.duration), c = Lu(...l), d = c.inverse();
    s = s.map((v) => v + "|"), o += "|";
    for (let v = 0; v < d; v++) {
      const [m, y] = [n, n.add(c)], I = a.filter((M) => M.whole.begin.lte(m) && M.whole.end.gte(y)), S = I.length - s.length;
      S > 0 && (s = s.concat(Array(S).fill(o))), s = s.map((M, H) => {
        const G = I[H];
        if (G) {
          const Ee = G.whole.begin.eq(m) ? "" + G.value : "-";
          return M + Ee;
        }
        return M + ".";
      }), o += ".", n = n.add(c);
    }
    r++;
  }
  return s.join(`
`);
}
const Qr = {};
globalThis.strudelScope = Qr;
const Rr = /* @__PURE__ */ new Set();
globalThis.userDefinedKeys = Rr;
const ju = () => {
  for (const t of Rr)
    delete Qr[t], delete globalThis[t];
  return Rr.clear(), globalThis.silence;
};
globalThis.clearScope = ju;
class C {
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
    return new C(this.query, this._steps === void 0 ? void 0 : e(this._steps));
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
    const r = new C((n) => this.query(n).map((s) => s.withValue(e)));
    return r._steps = this._steps, r;
  }
  // runs func on query state
  withState(e) {
    return new C((r) => this.query(e(r)));
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
      const a = n.query(o), l = r.query(o), c = function(d, v) {
        const m = d.part.intersection(v.part);
        if (m != null)
          return new ee(
            e(d.whole, v.whole),
            m,
            d.value(v.value),
            v.combineContext(d)
          );
      };
      return Ve(
        a.map((d) => qt(l.map((v) => c(d, v))))
      );
    };
    return new C(s);
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
    return s._steps = Je(e._steps, r._steps), s;
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
      for (const l of r.query(o)) {
        const c = e.query(o.setSpan(l.wholeOrPart()));
        for (const d of c) {
          const v = l.whole, m = l.part.intersection(d.part);
          if (m) {
            const y = l.value(d.value), I = d.combineContext(l), S = new ee(v, m, y, I);
            a.push(S);
          }
        }
      }
      return a;
    }, s = new C(n);
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
      for (const l of e.query(o)) {
        const c = r.query(o.setSpan(l.wholeOrPart()));
        for (const d of c) {
          const v = l.whole, m = d.part.intersection(l.part);
          if (m) {
            const y = d.value(l.value), I = l.combineContext(d), S = new ee(v, m, y, I);
            a.push(S);
          }
        }
      }
      return a;
    }, s = new C(n);
    return s._steps = e._steps, s;
  }
  bindWhole(e, r) {
    const n = this, s = function(o) {
      const a = function(c, d) {
        return new ee(
          e(c.whole, d.whole),
          d.part,
          d.value,
          Object.assign({}, c.context, d.context, {
            locations: (c.context.locations || []).concat(d.context.locations || [])
          })
        );
      }, l = function(c) {
        return r(c.value).query(o.setSpan(c.part)).map((d) => a(c, d));
      };
      return Ve(n.query(o).map((c) => l(c)));
    };
    return new C(s);
  }
  bind(e) {
    const r = function(n, s) {
      if (!(n == null || s == null))
        return n.intersection_e(s);
    };
    return this.bindWhole(r, e);
  }
  join() {
    return this.bind(Ht);
  }
  outerBind(e) {
    return this.bindWhole((r) => r, e).setSteps(this._steps);
  }
  outerJoin() {
    return this.outerBind(Ht);
  }
  innerBind(e) {
    return this.bindWhole((r, n) => n, e);
  }
  innerJoin() {
    return this.innerBind(Ht);
  }
  // Flatterns patterns of patterns, by retriggering/resetting inner patterns at onsets of outer pattern haps
  resetJoin(e = !1) {
    const r = this;
    return new C((n) => r.discreteOnly().query(n).map((s) => s.value.late(e ? s.whole.begin : s.whole.begin.cyclePos()).query(n).map(
      (o) => new ee(
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
      function o(l) {
        const d = l.value._focusSpan(l.wholeOrPart()).query(n.setSpan(l.part));
        function v(m, y) {
          let I;
          if (y.whole && m.whole && (I = y.whole.intersection(m.whole), !I))
            return;
          const S = y.part.intersection(m.part);
          if (!S)
            return;
          const M = y.combineContext(m);
          return new ee(I, S, y.value, M);
        }
        return d.map((m) => v(l, m));
      }
      return Ve(s.map(o)).filter((l) => l);
    }
    return new C(r);
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
      return this.query(new Tt(new Y(e, r), n));
    } catch (s) {
      return du(s, "query"), [];
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
    const e = this, r = (n) => Ve(n.span.spanCycles.map((s) => e.query(n.setSpan(s))));
    return new C(r);
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
    return new C((r) => this.query(r.withSpan(e)));
  }
  withQuerySpanMaybe(e) {
    const r = this;
    return new C((n) => {
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
    return new C((r) => this.query(r.withSpan((n) => n.withTime(e))));
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
    return new C((r) => this.query(r).map((n) => n.withSpan(e)));
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
    const r = new C((n) => e(this.query(n), n));
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
    return new C((r) => this.query(r).filter(e));
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
    return new C((r) => this.query(r).filter((n) => e(n.value))).setSteps(this._steps);
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
          for (var l = !1, c = s + 1; c < r.length; c++) {
            const v = r[c];
            if (a.whole.equals(v.whole)) {
              if (a.part.begin.eq(v.part.end)) {
                if (d === JSON.stringify(v.value)) {
                  a = new ee(a.whole, new Y(v.part.begin, a.part.end), a.value), r.splice(c, 1), l = !0;
                  break;
                }
              } else if (v.part.begin.eq(a.part.end) && d == JSON.stringify(v.value)) {
                a = new ee(a.whole, new Y(a.part.begin, v.part.end), a.value), r.splice(c, 1), l = !0;
                break;
              }
            }
          }
          o = l;
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
    return e || (r = r.stripContext()), r.query(new Tt(new Y(F(0), F(1))));
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
    return this.fmap(ys);
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
    return _e(...e.map((r) => r(this)));
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
    return _e(this, ...e);
  }
  sequence(...e) {
    return Ue(this, ...e);
  }
  seq(...e) {
    return Ue(this, ...e);
  }
  cat(...e) {
    return Zt(this, ...e);
  }
  fastcat(...e) {
    return Ce(this, ...e);
  }
  slowcat(...e) {
    return it(this, ...e);
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
  logValues(e = (r) => `[hap] ${ws(r, !0)}`) {
    return this.log((r) => e(r.value));
  }
  //////////////////////////////////////////////////////////////////////
  // Visualisation
  drawLine() {
    return console.log(Ru(this)), this;
  }
  //////////////////////////////////////////////////////////////////////
  // methods relating to breaking patterns into subcycles
  // Breaks a pattern into a pattern of patterns, according to the structure of the given binary pattern.
  unjoin(e, r = Ht) {
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
function Tu(t, e) {
  let r = [];
  return e.forEach((n) => {
    const s = r.findIndex(([o]) => t(n, o));
    s === -1 ? r.push([n]) : r[s].push(n);
  }), r;
}
const qu = (t, e) => t.spanEquals(e);
C.prototype.collect = function() {
  return this.withHaps(
    (t) => Tu(qu, t).map((e) => new ee(e[0].whole, e[0].part, e, {}))
  );
};
A("arpWith", (t, e) => e.collect().fmap((r) => B(t(r))).innerJoin().withHap((r) => new ee(r.whole, r.part, r.value.value, r.combineContext(r.value))));
A(
  "arp",
  (t, e) => e.arpWith((r) => B(t).fmap((n) => r[n % r.length])),
  !1
);
function Ut(t) {
  return !Array.isArray(t) && typeof t == "object" && !$u(t);
}
function Mu(t, e, r) {
  return Ut(t) || Ut(e) ? (Ut(t) || (t = { value: t }), Ut(e) || (e = { value: e }), Pu(t, e, r)) : r(t, e);
}
const Wu = {
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
  add: [Oe((t, e) => t + e)],
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
  sub: [Oe((t, e) => t - e)],
  /**
   *
   * Multiplies each number by the given factor.
   * @name mul
   * @memberof Pattern
   * @tags math
   * @example
   * "<1 1.5 [1.66, <2 2.33>]>*4".mul(150).freq()
   */
  mul: [Oe((t, e) => t * e)],
  /**
   *
   * Divides each number by the given factor.
   * @name div
   * @memberof Pattern
   * @tags math
   */
  div: [Oe((t, e) => t / e)],
  mod: [Oe(vs)],
  pow: [Oe(Math.pow)],
  band: [Oe((t, e) => t & e)],
  bor: [Oe((t, e) => t | e)],
  bxor: [Oe((t, e) => t ^ e)],
  blshift: [Oe((t, e) => t << e)],
  brshift: [Oe((t, e) => t >> e)],
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
}, zu = () => {
  for (const [t, [e, r]] of Object.entries(Wu))
    C.prototype["_" + t] = function(n) {
      return this.fmap((s) => e(s, n));
    }, Object.defineProperty(C.prototype, t, {
      // Set to configurable so we can update if the default alignment changes
      configurable: !0,
      // a getter that returns a function, so 'pat' can be
      // accessed by closures that are methods of that function..
      get: function() {
        const n = this, s = (...o) => n[t][Gu](...o);
        for (const o of Xr)
          s[o.toLowerCase()] = function(...a) {
            var l = n;
            a = Ue(a), r && (l = r(l), a = r(a));
            var c;
            return t === "keepif" ? (c = l["_op" + o](a, (d) => (v) => e(d, v)), c = c.removeUndefineds()) : c = l["_op" + o](a, (d) => (v) => Mu(d, v, e)), c;
          };
        return s.squeezein = s.squeeze, s;
      }
    });
};
let Gu = "in";
const Xr = ["In", "Out", "Mix", "Squeeze", "SqueezeOut", "Reset", "Restart", "Poly"];
Xr.map((t) => t.toLowerCase());
(function() {
  zu();
  for (const t of Xr)
    C.prototype[t.toLowerCase()] = function(...e) {
      return this.set[t.toLowerCase()](e);
    };
  C.prototype.struct = function(...t) {
    return this.keepif.out(...t);
  }, C.prototype.structAll = function(...t) {
    return this.keep.out(...t);
  }, C.prototype.mask = function(...t) {
    return this.keepif.in(...t);
  }, C.prototype.maskAll = function(...t) {
    return this.keep.in(...t);
  }, C.prototype.reset = function(...t) {
    return this.keepif.reset(...t);
  }, C.prototype.resetAll = function(...t) {
    return this.keep.reset(...t);
  }, C.prototype.restart = function(...t) {
    return this.keepif.restart(...t);
  }, C.prototype.restartAll = function(...t) {
    return this.keep.restart(...t);
  };
})();
const _s = (t) => new C(() => [], t), Se = _s(1), Ne = _s(0);
function ce(t) {
  function e(n) {
    return n.span.spanCycles.map((s) => new ee(F(s.begin).wholeCycle(), s, t));
  }
  const r = new C(e, 1);
  return r.__pure = t, r;
}
function bs(t) {
  return t instanceof C || t?._Pattern;
}
function B(t) {
  return bs(t) ? t : ce(t);
}
function _e(...t) {
  t = t.map((n) => Array.isArray(n) ? Ue(...n) : B(n));
  const e = (n) => Ve(t.map((s) => s.query(n))), r = new C(e);
  return r._steps = Je(...t.map((n) => n._steps)), r;
}
function it(...t) {
  if (t = t.map((n) => Array.isArray(n) ? Ce(...n) : B(n)), t.length == 1)
    return t[0];
  const e = function(n) {
    const s = n.span, o = vs(s.begin.sam(), t.length), a = t[o];
    if (!a)
      return [];
    const l = s.begin.floor().sub(s.begin.div(t.length).floor());
    return a.withHapTime((c) => c.add(l)).query(n.setSpan(s.withTime((c) => c.sub(l))));
  }, r = Je(...t.map((n) => n._steps));
  return new C(e).splitQueries().setSteps(r);
}
function Is(...t) {
  t = t.map(B);
  const e = function(r) {
    const n = Math.floor(r.span.begin) % t.length;
    return t[n]?.query(r) || [];
  };
  return new C(e).splitQueries();
}
function Zt(...t) {
  return it(...t);
}
function Ce(...t) {
  let e = it(...t);
  return t.length > 1 && (e = e._fast(t.length), e._steps = t.length), t.length == 1 && t[0].__steps_source && (t._steps = t[0]._steps), e;
}
function Ue(...t) {
  return Ce(...t);
}
function Vu(...t) {
  return Ce(...t);
}
q((t, e) => B(e).mask(t));
q((t, e) => B(e).struct(t));
q((t, e) => B(e).superimpose(...t));
q((t, e) => B(e).withValue(t));
q((t, e) => B(e).bind(t));
q((t, e) => B(e).innerBind(t));
q((t, e) => B(e).outerBind(t));
q((t, e) => B(e).squeezeBind(t));
q((t, e) => B(e).stepBind(t));
q((t, e) => B(e).polyBind(t));
q((t, e) => B(e).set(t));
q((t, e) => B(e).keep(t));
q((t, e) => B(e).keepif(t));
q((t, e) => B(e).add(t));
q((t, e) => B(e).sub(t));
q((t, e) => B(e).mul(t));
q((t, e) => B(e).div(t));
q((t, e) => B(e).mod(t));
q((t, e) => B(e).pow(t));
q((t, e) => B(e).band(t));
q((t, e) => B(e).bor(t));
q((t, e) => B(e).bxor(t));
q((t, e) => B(e).blshift(t));
q((t, e) => B(e).brshift(t));
q((t, e) => B(e).lt(t));
q((t, e) => B(e).gt(t));
q((t, e) => B(e).lte(t));
q((t, e) => B(e).gte(t));
q((t, e) => B(e).eq(t));
q((t, e) => B(e).eqt(t));
q((t, e) => B(e).ne(t));
q((t, e) => B(e).net(t));
q((t, e) => B(e).and(t));
q((t, e) => B(e).or(t));
q((t, e) => B(e).func(t));
function A(t, e, r = !0, n = !1, s = (o) => o.innerJoin()) {
  if (bs(t))
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
    let v;
    if (o === 1)
      v = e(d);
    else {
      const m = c.slice(0, -1);
      if (m.every((y) => y.__pure != null)) {
        const y = m.map((S) => S.__pure), I = m.filter((S) => S.__pure_loc).map((S) => S.__pure_loc);
        v = e(...y, d), v = v.withContext((S) => {
          const M = (S.locations || []).concat(I);
          return { ...S, locations: M };
        });
      } else {
        const [y, ...I] = m;
        let S = (...M) => e(...M, d);
        S = q(S, null, o - 1), v = s(I.reduce((M, H) => M.appLeft(H), y.fmap(S)));
      }
    }
    return n && (v._steps = d._steps), v;
  } : a = function(...c) {
    c = c.map(B);
    const d = e(...c);
    return n && (d._steps = c[c.length - 1]._steps), d;
  }, C.prototype[t] = function(...c) {
    if (o === 2 && c.length !== 1)
      c = [Ue(...c)];
    else if (o !== c.length + 1)
      throw new Error(`.${t}() expects ${o - 1} inputs but got ${c.length}.`);
    return c = c.map(B), a(...c, this);
  }, o > 1 && (C.prototype["_" + t] = function(...c) {
    const d = e(...c, this);
    return n && d.setSteps(this._steps), d;
  });
  const l = q(a, null, o);
  return Qr[t] = l, l;
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
  return t = F(t), e = F(e), t.gt(e) || t.gt(1) || e.gt(1) || t.lt(0) || e.lt(0) ? Se : r._fastGap(F(1).div(e.sub(t)))._late(t);
});
const { compressSpan: Oc, compressspan: Nc } = A(["compressSpan", "compressspan"], function(t, e) {
  return e._compress(t.begin, t.end);
}), { fastGap: Lc, fastgap: $c } = A(["fastGap", "fastgap"], function(t, e) {
  const r = function(s) {
    const o = s.begin.sam(), a = s.begin.sub(o).mul(t).min(1), l = s.end.sub(o).mul(t).min(1);
    if (!(a >= 1))
      return new Y(o.add(a), o.add(l));
  }, n = function(s) {
    const o = s.part.begin, a = s.part.end, l = o.sam(), c = o.sub(l).div(t).min(1), d = a.sub(l).div(t).min(1), v = new Y(l.add(c), l.add(d)), m = s.whole ? new Y(
      v.begin.sub(o.sub(s.whole.begin).div(t)),
      v.end.add(s.whole.end.sub(a).div(t))
    ) : void 0;
    return new ee(m, v, s.value, s.context);
  };
  return e.withQuerySpanMaybe(r).withHap(n).splitQueries();
});
A("focus", function(t, e, r) {
  return t = F(t), e = F(e), r._early(t.sam())._fast(F(1).div(e.sub(t)))._late(t);
});
const { focusSpan: Pc, focusspan: Rc } = A(["focusSpan", "focusspan"], function(t, e) {
  return e._focus(t.begin, t.end);
});
A("ply", function(t, e) {
  const r = e.fmap((n) => ce(n)._fast(t)).squeezeJoin();
  return r._steps = F(t).mulmaybe(e._steps), r;
});
const { fast: jc, density: Tc } = A(
  ["fast", "density"],
  function(t, e) {
    return t === 0 ? Se : (t = F(t), e.withQueryTime((n) => n.mul(t)).withHapTime((n) => n.div(t)).setSteps(e._steps));
  },
  !0,
  !0
);
A("hurry", function(t, e) {
  return e._fast(t).mul(ce({ speed: t }));
});
const { slow: qc, sparsity: Mc } = A(["slow", "sparsity"], function(t, e) {
  return t === 0 ? Se : e._fast(F(1).div(t));
});
A("inside", function(t, e, r) {
  return e(r._slow(t))._fast(t);
});
A("outside", function(t, e, r) {
  return e(r._fast(t))._slow(t);
});
A("lastOf", function(t, e, r) {
  const n = Array(t - 1).fill(r);
  return n.push(e(r)), Is(...n);
});
const { firstOf: Wc, every: zc } = A(["firstOf", "every"], function(t, e, r) {
  const n = Array(t - 1).fill(r);
  return n.unshift(e(r)), Is(...n);
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
const Ju = A(
  "late",
  function(t, e) {
    return t = F(t), e._early(F(0).sub(t));
  },
  !0,
  !0
);
A("zoom", function(t, e, r) {
  if (e = F(e), t = F(t), t.gte(e))
    return Ne;
  const n = e.sub(t), s = r._steps?.mulmaybe(n);
  return r.withQuerySpan((o) => o.withCycle((a) => a.mul(n).add(t))).withHapSpan((o) => o.withCycle((a) => a.sub(t).div(n))).splitQueries().setSteps(s);
});
const { zoomArc: Gc, zoomarc: Vc } = A(["zoomArc", "zoomarc"], function(t, e) {
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
    return t == 0 ? Se : t < 0 ? e._zoom(t.add(1), 1)._slow(t) : e._zoom(0, t)._slow(t);
  },
  !0,
  !0
);
const { segment: Jc, seg: Hc } = A(["segment", "seg"], function(t, e) {
  return e.struct(ce(!0)._fast(t)).setSteps(t);
});
A("swingBy", (t, e, r) => r.inside(e, Ju(Vu(0, t / 2))));
A("swing", (t, e) => e.swingBy(1 / 3, t));
const { invert: Uc, inv: Kc } = A(
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
  return _e(r, e(r.late(t)));
});
A("brak", function(t) {
  return t.when(it(!1, !0), (e) => Ce(e, Se)._late(0.25));
});
const Hu = A(
  "rev",
  function(t) {
    const e = function(r) {
      const n = r.span, s = n.begin.sam(), o = n.begin.nextSam(), a = function(c) {
        const d = c.withTime((m) => s.add(o.sub(m))), v = d.begin;
        return d.begin = d.end, d.end = v, d;
      };
      return t.query(r.setSpan(a(n))).map((c) => c.withSpan(a));
    };
    return new C(e).splitQueries();
  },
  !1,
  !0
);
A("revv", function(t) {
  const e = (r) => new Y(F(0).sub(r.end), F(0).sub(r.begin));
  return t.withQuerySpan(e).withHapSpan(e);
});
A("pressBy", function(t, e) {
  return e.fmap((r) => ce(r).compress(t, 1)).squeezeJoin();
});
A("press", function(t) {
  return t._pressBy(0.5);
});
C.prototype.hush = function() {
  return Se;
};
A(
  "palindrome",
  function(t) {
    return t.lastOf(2, Hu);
  },
  !0,
  !0
);
const { juxBy: Qc, juxby: Xc } = A(["juxBy", "juxby"], function(t, e, r) {
  t /= 2;
  const n = function(a, l, c) {
    return l in a ? a[l] : c;
  }, s = r.withValue((a) => Object.assign({}, a, { pan: n(a, "pan", 0.5) - t })), o = e(r.withValue((a) => Object.assign({}, a, { pan: n(a, "pan", 0.5) + t })));
  return _e(s, o).setSteps(Je(s._steps, o._steps));
}), { juxFlipBy: Zc, juxflipby: Yc, fluxBy: el, fluxby: tl } = A(
  ["juxFlipBy", "juxflipby", "fluxBy", "fluxby"],
  function(t, e, r) {
    return r.juxBy(it(t, -t), e);
  }
);
A("jux", function(t, e) {
  return e._juxBy(1, t, e);
});
const { juxFlip: rl, flux: nl } = A(["juxFlip", "juxflip", "flux"], function(t, e) {
  return e._juxFlipBy(1, t, e);
}), { echoWith: sl, echowith: il, stutWith: ol, stutwith: al } = A(
  ["echoWith", "echowith", "stutWith", "stutwith"],
  function(t, e, r, n) {
    return _e(...ar(0, t - 1).map((s) => r(n.late(F(e).mul(s)), s)));
  }
);
A("echo", function(t, e, r, n) {
  return n._echoWith(t, e, (s, o) => s.gain(Math.pow(r, o)));
});
A("stut", function(t, e, r, n) {
  return n._echoWith(t, r, (s, o) => s.gain(Math.pow(e, o)));
});
const Uu = A("applyN", function(t, e, r) {
  let n = r;
  for (let s = 0; s < t; s++)
    n = e(n);
  return n;
});
A(["plyWith", "plywith"], function(t, e, r) {
  const n = r.fmap((s) => Zt(...ar(0, t - 1).map((o) => Uu(o, e, s)))._fast(t)).squeezeJoin();
  return n._steps = F(t).mulmaybe(r._steps), n;
});
A(["plyForEach", "plyforeach"], function(t, e, r) {
  const n = r.fmap((s) => Zt(Zt(ce(s), ...ar(1, t - 1).map((o) => e(ce(s), o))))._fast(t)).squeezeJoin();
  return n._steps = F(t).mulmaybe(r._steps), n;
});
const Zr = function(t, e, r = !1) {
  return t = F(t), it(
    ...ar(0, t.sub(1)).map(
      (n) => r ? e.late(F(n).div(t)) : e.early(F(n).div(t))
    )
  );
};
A(
  "iter",
  function(t, e) {
    return Zr(t, e, !1);
  },
  !0,
  !0
);
const { iterBack: ul, iterback: cl } = A(
  ["iterBack", "iterback"],
  function(t, e) {
    return Zr(t, e, !0);
  },
  !0,
  !0
), { repeatCycles: ll } = A(
  "repeatCycles",
  function(t, e) {
    return new C(function(r) {
      const n = r.span.begin.sam(), s = n.div(t).sam(), o = n.sub(s);
      return r = r.withSpan((a) => a.withTime((l) => l.sub(o))), e.query(r).map((a) => a.withSpan((l) => l.withTime((c) => c.add(o))));
    }).splitQueries();
  },
  !0,
  !0
), Yr = function(t, e, r, n = !1, s = !1) {
  const o = Array(t - 1).fill(!1);
  o.unshift(!0);
  const a = Zr(t, Ue(...o), !n);
  return s || (r = r.repeatCycles(t)), r.when(a, e);
}, { chunk: pl, slowchunk: hl, slowChunk: fl } = A(
  ["chunk", "slowchunk", "slowChunk"],
  function(t, e, r) {
    return Yr(t, e, r, !1, !1);
  },
  !0,
  !0
), { chunkBack: dl, chunkback: ml } = A(
  ["chunkBack", "chunkback"],
  function(t, e, r) {
    return Yr(t, e, r, !0);
  },
  !0,
  !0
), { fastchunk: gl, fastChunk: vl } = A(
  ["fastchunk", "fastChunk"],
  function(t, e, r) {
    return Yr(t, e, r, !1, !0);
  },
  !0,
  !0
), { chunkinto: yl, chunkInto: Al } = A(["chunkinto", "chunkInto"], function(t, e, r) {
  return r.into(Ce(!0, ...Array(t - 1).fill(!1))._iterback(t), e);
}), { chunkbackinto: wl, chunkBackInto: _l } = A(["chunkbackinto", "chunkBackInto"], function(t, e, r) {
  return r.into(
    Ce(!0, ...Array(t - 1).fill(!1))._iter(t)._early(1),
    e
  );
});
A(
  "bypass",
  function(t, e) {
    return t = !!parseInt(t), t ? Se : e;
  },
  !0,
  !0
);
const { ribbon: bl, rib: Il } = A(
  ["ribbon", "rib"],
  (t, e, r) => r.early(t).restart(ce(1).slow(e))
);
A("hsla", (t, e, r, n, s) => s.color(`hsla(${t}turn,${e * 100}%,${r * 100}%,${n})`));
A("hsl", (t, e, r, n) => n.color(`hsl(${t}turn,${e * 100}%,${r * 100}%)`));
C.prototype.tag = function(t) {
  return this.withContext((e) => ({ ...e, tags: (e.tags || []).concat([t]) }));
};
A("filter", (t, e) => e.withHaps((r) => r.filter(t)));
A("filterWhen", (t, e) => e.filter((r) => t(r.whole.begin)));
A(
  "within",
  (t, e, r, n) => _e(
    r(n.filterWhen((s) => s.cyclePos() >= t && s.cyclePos() <= e)),
    n.filterWhen((s) => s.cyclePos() < t || s.cyclePos() > e)
  )
);
C.prototype.stepJoin = function() {
  const t = this, e = At(...jn(Tn(t.queryArc(0, 1))))._steps, r = function(n) {
    const o = t.early(n.span.begin.sam()).query(n.setSpan(new Y(F(0), F(1))));
    return At(...jn(Tn(o))).query(n);
  };
  return new C(r, e);
};
C.prototype.stepBind = function(t) {
  return this.fmap(t).stepJoin();
};
function jn(t) {
  const e = t.filter((o, a) => a.hasSteps).reduce((o, a) => o.add(a), F(0)), r = qt(t.map((o, a) => a._steps)).reduce(
    (o, a) => o.add(a),
    F(0)
  ), n = e.eq(0) ? void 0 : r.div(e);
  function s(o, a) {
    return a._steps === void 0 ? [o.mulmaybe(n), a] : [a._steps, a];
  }
  return t.map((o) => s(...o));
}
function Tn(t) {
  const e = Ve(t.map((s) => [s.part.begin, s.part.end])), r = ku([F(0), F(1), ...e]);
  return Eu(r).map((s) => [
    s[1].sub(s[0]),
    _e(...Ku(new Y(...s), t).map((o) => o.value.withHap((a) => a.setContext(a.combineContext(o)))))
  ]);
}
function Ku(t, e) {
  return qt(e.map((r) => Qu(t, r)));
}
function Qu(t, e) {
  const r = t.intersection(e.part);
  if (r != null)
    return new ee(e.whole, r, e.value, e.context);
}
A("pace", function(t, e) {
  return e._steps === void 0 ? e : e._steps.eq(F(0)) ? Ne : e._fast(F(t).div(e._steps)).setSteps(t);
});
function At(...t) {
  if (t.length === 0)
    return Ne;
  const e = (a) => Array.isArray(a) ? a : [a._steps ?? 1, a];
  if (t = t.map(e), t.find((a) => a[0] === void 0)) {
    const a = t.map((c) => c[0]).filter((c) => c !== void 0);
    if (a.length === 0)
      return Ce(...t.map((c) => c[1]));
    if (a.length === t.length)
      return Ne;
    const l = a.reduce((c, d) => c.add(d), F(0)).div(a.length);
    for (let c of t)
      c[0] === void 0 && (c[0] = l);
  }
  if (t.length == 1)
    return B(t[0][1]).withSteps((l) => t[0][0]);
  const r = t.map((a) => a[0]).reduce((a, l) => a.add(l), F(0));
  let n = F(0);
  const s = [];
  for (const [a, l] of t) {
    if (F(a).eq(0))
      continue;
    const c = n.add(a);
    s.push(B(l)._compress(n.div(r), c.div(r))), n = c;
  }
  const o = _e(...s);
  return o._steps = r, o;
}
bt("take", function(t, e) {
  if (!e.hasSteps || e._steps.lte(0) || (t = F(t), t.eq(0)))
    return Ne;
  const r = t < 0;
  r && (t = t.abs());
  const n = t.div(e._steps);
  return n.lte(0) ? Ne : n.gte(1) ? e : r ? e.zoom(F(1).sub(n), 1) : e.zoom(0, n);
});
bt("drop", function(t, e) {
  return e.hasSteps ? (t = F(t), t.lt(0) ? e.take(e._steps.add(t)) : e.take(F(0).sub(e._steps.sub(t)))) : Ne;
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
C.prototype.shrinklist = function(t) {
  const e = this;
  if (!e.hasSteps)
    return [e];
  let [r, n] = Array.isArray(t) ? t : [t, e._steps];
  if (r = F(r), n === 0 || r === 0)
    return [e];
  const s = r > 0, o = [];
  if (s) {
    const a = F(1).div(e._steps).mul(r);
    for (let l = 0; l < n; ++l) {
      const c = a.mul(l);
      if (c.gt(1))
        break;
      o.push([c, 1]);
    }
  } else {
    r = F(0).sub(r);
    const a = F(1).div(e._steps).mul(r);
    for (let l = 0; l < n; ++l) {
      const c = F(1).sub(a.mul(l));
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
      return Ne;
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
      return Ne;
    const r = e.shrinklist(F(0).sub(t));
    r.reverse();
    const n = At(...r);
    return n._steps = r.reduce((s, o) => s.add(o._steps), F(0)), n;
  },
  !0,
  !1,
  (t) => t.stepJoin()
);
C.prototype.tour = function(...t) {
  return At(
    ...[].concat(
      ...t.map((e, r) => [...t.slice(0, t.length - r), this, ...t.slice(t.length - r)]),
      this,
      ...t
    )
  );
};
const Cs = At;
C.prototype.s_polymeter = C.prototype.polymeter;
C.prototype.s_taper = C.prototype.shrink;
C.prototype.s_taperlist = C.prototype.shrinklist;
C.prototype.s_add = C.prototype.take;
C.prototype.s_sub = C.prototype.drop;
C.prototype.s_expand = C.prototype.expand;
C.prototype.s_extend = C.prototype.extend;
C.prototype.s_contract = C.prototype.contract;
C.prototype.s_tour = C.prototype.tour;
C.prototype.s_zip = C.prototype.zip;
C.prototype.steps = C.prototype.pace;
A("chop", function(t, e) {
  const n = Array.from({ length: t }, (a, l) => l).map((a) => ({ begin: a / t, end: (a + 1) / t })), s = function(a, l) {
    if ("begin" in a && "end" in a && a.begin !== void 0 && a.end !== void 0) {
      const c = a.end - a.begin;
      l = { begin: a.begin + l.begin * c, end: a.begin + l.end * c };
    }
    return Object.assign({}, a, l);
  }, o = function(a) {
    return Ue(n.map((l) => s(a, l)));
  };
  return e.squeezeBind(o).setSteps(F(t).mulmaybe(e._steps));
});
A("striate", function(t, e) {
  const n = Array.from({ length: t }, (o, a) => a).map((o) => ({ begin: o / t, end: (o + 1) / t })), s = it(...n);
  return e.set(s)._fast(t).setSteps(F(t).mulmaybe(e._steps));
});
const xs = function(t, e, r = 0.5) {
  return e.speed(1 / t * r).unit("c").slow(t);
}, { loopAt: Cl, loopat: xl } = A(["loopAt", "loopat"], function(t, e) {
  const r = e._steps ? e._steps.div(t) : void 0;
  return new C((n) => xs(t, e, n.controls._cps).query(n), r);
}), Xu = A(
  "slice",
  function(t, e, r) {
    return t.innerBind(
      (n) => e.outerBind(
        (s) => r.outerBind((o) => {
          o = o instanceof Object ? o : { s: o };
          const a = Array.isArray(n) ? n[s] : s / n, l = Array.isArray(n) ? n[s + 1] : (s + 1) / n;
          return ce({ begin: a, end: l, _slices: n, ...o });
        })
      )
    ).setSteps(e._steps);
  },
  !1
  // turns off auto-patternification
);
C.prototype.onTriggerTime = function(t) {
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
    const n = Xu(t, e, r);
    return new C((s) => {
      const o = s.controls._cps || 1;
      return n.query(s).map(
        (l) => l.withValue((c) => ({
          speed: o / c._slices / l.whole.duration * (c.speed || 1),
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
const { loopAtCps: Fl, loopatcps: Sl } = A(["loopAtCps", "loopatcps"], function(t, e, r) {
  return xs(t, r, e);
});
let qn = (t) => t < 0.5 ? 1 : 1 - (t - 0.5) / 0.5, Zu = (t, e, r) => {
  e = B(e), t = B(t), r = B(r);
  let n = e.fmap((o) => ({ gain: qn(o) })), s = e.fmap((o) => ({ gain: qn(1 - o) }));
  return _e(t.mul(n), r.mul(s));
};
C.prototype.xfade = function(t, e) {
  return Zu(this, t, e);
};
const Yu = (t) => (e, r, n) => {
  e = F(e).mod(r), r = F(r);
  const s = e.div(r), o = e.add(1).div(r);
  return t(n.fmap((a) => ce(a)._compress(s, o)));
}, { beat: El } = A(
  ["beat"],
  Yu((t) => t.innerJoin())
), ec = (t, e, r) => {
  r = F(r);
  const n = F(1).div(t.length), s = (l) => {
    const c = [];
    for (const [d, v] of l.entries())
      v && c.push([F(d).div(l.length), v]);
    return c;
  }, o = Kr(
    ([l, c], [d, v]) => {
      const m = r.mul(d - l).add(l), y = m.add(n);
      return new Y(m, y);
    },
    s(t),
    s(e)
  );
  function a(l) {
    const c = l.span.begin.sam(), d = l.span.cycleArc(), v = [];
    for (const m of o) {
      const y = m.intersection(d);
      y !== void 0 && v.push(
        new ee(
          m.withTime((I) => I.add(c)),
          y.withTime((I) => I.add(c)),
          !0
        )
      );
    }
    return v;
  }
  return new C(a).splitQueries();
}, Qe = function(t) {
  const e = function(r, n) {
    const s = B(r).fmap((o) => Array.isArray(o) ? [...o, t] : [o, 1, t]);
    return n ? n.distort(s) : ce({}).distort(s);
  };
  return C.prototype[t] = function(r) {
    return e(r, this);
  }, e;
};
Qe("soft");
Qe("hard");
Qe("cubic");
Qe("diode");
Qe("asym");
Qe("fold");
Qe("sinefold");
Qe("chebyshev");
const Fs = (t) => {
  let r = ce(q((...n) => n, null, t.length));
  for (const n of t) r = r.appBoth(B(n));
  return r;
}, Ss = (t) => Array.isArray(t) ? Fs(t) : B(t);
C.prototype.partials = function(t) {
  return this.withValue((e) => (r) => ({ ...e, partials: r })).appLeft(Ss(t));
};
C.prototype.phases = function(t) {
  return this.withValue((e) => (r) => ({ ...e, phases: r })).appLeft(Ss(t));
};
C.prototype.FX = function(...t) {
  return t = t.map(B), this.withValue((e) => (r) => {
    const n = e.FX ?? [];
    return { ...e, FX: n.concat(r) };
  }).appLeft(Fs(t));
};
const tc = (t) => {
  let r = ce(q((...n) => n, null, t.length));
  for (const n of t) r = r.appLeft(n);
  return r;
};
C.prototype.worklet = function(t, ...e) {
  return e = e.map(B), this.outerBind((r) => tc(e).withValue((n) => {
    const s = r.workletInputs ?? [];
    return { ...r, workletSrc: t, workletInputs: s.concat(n) };
  }));
};
function rc(t) {
  let e = Array.isArray(t);
  t = e ? t : [t];
  const r = t[0], n = (o) => {
    let a;
    if (typeof o == "object" && o.value !== void 0 && (a = { ...o }, o = o.value, delete a.value), e && Array.isArray(o)) {
      const l = a || {};
      return o.forEach((c, d) => {
        d < t.length && (l[t[d]] = c);
      }), l;
    } else return a ? (a[r] = o, a) : { [r]: o };
  }, s = function(o, a) {
    return a ? typeof o > "u" ? a.fmap(n) : a.set(B(o).withValue(n)) : B(o).withValue(n);
  };
  return C.prototype[r] = function(o) {
    return s(o, this);
  }, s;
}
const Yt = /* @__PURE__ */ new Map();
function p(t, ...e) {
  const r = Array.isArray(t) ? t[0] : t;
  let n = {};
  return n[r] = rc(t), Yt.set(r, r), e.forEach((s) => {
    n[s] = n[r], Yt.set(s, r), C.prototype[s] = C.prototype[r];
  }), n;
}
function Xe(t, e, ...r) {
  t = Array.isArray(t) ? t : [t];
  let n = {};
  for (let s = 1; s <= e; s++) {
    let o = [...r], a = [...t];
    if (s === 1) {
      const c = o.map((v) => `${v}1`), d = a.map((v) => `${v}1`);
      o = o.concat(c).concat(d);
    } else
      o = o.map((c) => `${c}${s}`), a = a.map((c) => `${c}${s}`);
    const l = p(a, ...o);
    n = { ...n, ...l };
  }
  return n;
}
p(["s", "n", "gain"], "sound");
p("wt", "wavetablePosition");
p("wtenv");
p("wtattack", "wtatt");
p("wtdecay", "wtdec");
p("wtsustain", "wtsus");
p("wtrelease", "wtrel");
p("wtrate");
p("wtsync");
p("wtdepth");
p("wtshape");
p("wtdc");
p("wtskew");
p("warp", "wavetableWarp");
p("warpattack", "warpatt");
p("warpdecay", "warpdec");
p("warpsustain", "warpsus");
p("warprelease", "warprel");
p("warprate");
p("warpdepth");
p("warpshape");
p("warpdc");
p("warpskew");
p("warpmode", "wavetableWarpMode");
p("wtphaserand", "wavetablePhaseRand");
p("warpenv");
p("warpsync");
p("source", "src");
p("n");
p("i");
p(["note", "n"]);
p("accelerate");
p("velocity", "vel");
p("gain");
p("postgain");
p("amp");
const { fmh: Bl, fmh1: kl, fmh2: Dl, fmh3: Ol, fmh4: Nl, fmh5: Ll, fmh6: $l, fmh7: Pl, fmh8: Rl } = Xe(["fmh", "fmi"], 8, "fmh"), { fmi: jl, fmi1: Tl, fmi2: ql, fmi3: Ml, fmi4: Wl, fmi5: zl, fmi6: Gl, fmi7: Vl, fmi8: Jl, fm: Hl, fm1: Ul, fm2: Kl, fm3: Ql, fm4: Xl, fm5: Zl, fm6: Yl, fm7: ep, fm8: tp } = Xe(["fmi", "fmh"], 8, "fm"), { fmenv: rp, fmenv1: np, fmenv2: sp, fmenv3: ip, fmenv4: op, fmenv5: ap, fmenv6: up, fmenv7: cp, fmenv8: lp, fme: pp } = Xe(
  "fmenv",
  8,
  "fme"
), {
  fmattack: hp,
  fmattack1: fp,
  fmattack2: dp,
  fmattack3: mp,
  fmattack4: gp,
  fmattack5: vp,
  fmattack6: yp,
  fmattack7: Ap,
  fmattack8: wp,
  fmatt: _p,
  fmatt1: bp,
  fmatt2: Ip,
  fmatt3: Cp,
  fmatt4: xp,
  fmatt5: Fp,
  fmatt6: Sp,
  fmatt7: Ep,
  fmatt8: Bp
} = Xe("fmattack", 8, "fmatt"), { fmwave: kp, fmwave1: Dp, fmwave2: Op, fmwave3: Np, fmwave4: Lp, fmwave5: $p, fmwave6: Pp, fmwave7: Rp, fmwave8: jp } = Xe(
  "fmwave",
  8
), {
  fmdecay: Tp,
  fmdecay1: qp,
  fmdecay2: Mp,
  fmdecay3: Wp,
  fmdecay4: zp,
  fmdecay5: Gp,
  fmdecay6: Vp,
  fmdecay7: Jp,
  fmdecay8: Hp,
  fmdec: Up,
  fmdec1: Kp,
  fmdec2: Qp,
  fmdec3: Xp,
  fmdec4: Zp,
  fmdec5: Yp,
  fmdec6: eh,
  fmdec7: th,
  fmdec8: rh
} = Xe("fmdecay", 8, "fmdec"), {
  fmsustain: nh,
  fmsustain1: sh,
  fmsustain2: ih,
  fmsustain3: oh,
  fmsustain4: ah,
  fmsustain5: uh,
  fmsustain6: ch,
  fmsustain7: lh,
  fmsustain8: ph,
  fmsus: hh,
  fmsus1: fh,
  fmsus2: dh,
  fmsus3: mh,
  fmsus4: gh,
  fmsus5: vh,
  fmsus6: yh,
  fmsus7: Ah,
  fmsus8: wh
} = Xe("fmsustain", 8, "fmsus"), {
  fmrelease: _h,
  fmrelease1: bh,
  fmrelease2: Ih,
  fmrelease3: Ch,
  fmrelease4: xh,
  fmrelease5: Fh,
  fmrelease6: Sh,
  fmrelease7: Eh,
  fmrelease8: Bh,
  fmrel: kh,
  fmrel1: Dh,
  fmrel2: Oh,
  fmrel3: Nh,
  fmrel4: Lh,
  fmrel5: $h,
  fmrel6: Ph,
  fmrel7: Rh,
  fmrel8: jh
} = Xe("fmrelease", 8, "fmrel");
for (let t = 0; t <= 8; t++)
  for (let e = 0; e <= 8; e++)
    p(`fmi${t}${e}`, `fm${t}${e}`);
p("bank");
p("chorus");
p("analyze");
p("fft");
p("follow");
p("sense");
p("attack", "att");
p("decay", "dec");
p("sustain", "sus");
p("release", "rel");
p("hold");
p(["bandf", "bandq", "bpenv"], "bpf", "bp");
p("bandq", "bpq");
p("begin");
p("end");
p("loop");
p("loopBegin", "loopb");
p("loopEnd", "loope");
p("crush");
p("coarse");
p(["tremolo", "tremolodepth", "tremoloskew", "tremolophase"], "trem");
p(
  ["tremolosync", "tremolodepth", "tremoloskew", "tremolophase"],
  "tremsync"
);
p("tremolodepth", "tremdepth");
p("tremoloskew", "tremskew");
p("tremolophase", "tremphase");
p("tremoloshape", "tremshape");
p("drive");
p("duckorbit", "duck");
p("duckdepth");
p("duckonset", "duckons");
p("duckattack", "duckatt", "datt");
p("byteBeatExpression", "bbexpr", "bb");
p("byteBeatStartTime", "bbst");
p("channels", "ch");
p(["pw", "pwrate", "pwsweep"]);
p("pwrate", "pwr");
p("pwsweep", "pws");
p(
  ["phaserrate", "phaserdepth", "phasercenter", "phasersweep"],
  "ph",
  "phaser"
);
p("phasersweep", "phs");
p("phasercenter", "phc");
p("phaserdepth", "phd", "phasdp");
p("channel");
p("cut");
p(["cutoff", "resonance", "lpenv"], "ctf", "lpf", "lp");
p("lpenv", "lpe");
p("hpenv", "hpe");
p("bpenv", "bpe");
p("lpattack", "lpa");
p("hpattack", "hpa");
p("bpattack", "bpa");
p("lpdecay", "lpd");
p("hpdecay", "hpd");
p("bpdecay", "bpd");
p("lpsustain", "lps");
p("hpsustain", "hps");
p("bpsustain", "bps");
p("lprelease", "lpr");
p("hprelease", "hpr");
p("bprelease", "bpr");
p("ftype");
p("fanchor");
p("lprate");
p("lpsync");
p("lpdepth");
p("lpdepthfrequency", "lpdepthfreq");
p("lpshape");
p("lpdc");
p("lpskew");
p("bprate");
p("bpsync");
p("bpdepth");
p("bpdepthfrequency", "bpdepthfreq");
p("bpshape");
p("bpdc");
p("bpskew");
p("hprate");
p("hpsync");
p("hpdepth");
p("hpdepthfrequency", "hpdepthfreq");
p("hpshape");
p("hpdc");
p("hpskew");
p(["vib", "vibmod"], "vibrato", "v");
p("noise");
p(["vibmod", "vib"], "vmod");
p(["hcutoff", "hresonance", "hpenv"], "hpf", "hp");
p("hresonance", "hpq");
p("resonance", "lpq");
p("djf");
p(["delay", "delaytime", "delayfeedback"]);
p("delayfeedback", "delayfb", "dfb");
p("delayspeed");
p("delaytime", "delayt", "dt");
p("delaysync", "delays", "ds");
p("lock");
p("detune", "det");
p("unison");
p("spread");
p("dry");
p("fadeTime", "fadeOutTime");
p("fadeInTime");
p("freq");
p("pattack", "patt");
p("pdecay", "pdec");
p("psustain", "psus");
p("prelease", "prel");
p("penv");
p("pcurve");
p("panchor");
p("gate", "gat");
p("leslie");
p("lrate");
p("lsize");
p("activeLabel");
p(["label", "activeLabel"]);
p("degree");
p("mtranspose");
p("ctranspose");
p("harmonic");
p("stepsPerOctave");
p("octaveR");
p("nudge");
p("octave", "oct");
p("orbit", "o");
p("bus");
p("busgain", "bgain");
p("overgain");
p("overshape");
p("pan");
p("panspan");
p("pansplay");
p("panwidth");
p("panorient");
p("slide");
p("semitone");
p("voice");
p("chord");
p("dictionary", "dict");
p("anchor");
p("offset");
p("octaves");
p(["mode", "anchor"]);
p(["room", "size"]);
p("roomlp", "rlp");
p("roomdim", "rdim");
p("roomfade", "rfade");
p(["ir", "i"], "iresponse");
p("irspeed");
p("irbegin");
p("roomsize", "size", "sz", "rsize");
p(["shape", "shapevol"]);
p(["distort", "distortvol", "distorttype"], "dist");
p("distortvol", "distvol");
p("distorttype", "disttype");
p([
  "compressor",
  "compressorRatio",
  "compressorKnee",
  "compressorAttack",
  "compressorRelease"
]);
p("compressorKnee");
p("compressorRatio");
p("compressorAttack");
p("compressorRelease");
const { speed: nc } = p("speed");
p("stretch");
p("unit");
p("squiz");
p("vowel");
p("waveloss");
p("density");
p("expression");
p("sustainpedal");
p("fshift");
p("fshiftnote");
p("fshiftphase");
p("triode");
p("krush");
p("kcutoff");
p("octer");
p("octersub");
p("octersubsub");
p("ring");
p("ringf");
p("ringdf");
p("freeze");
p("xsdelay");
p("tsdelay");
p("real");
p("imag");
p("enhance");
p("comb");
p("smear");
p("scram");
p("binshift");
p("hbrick");
p("lbrick");
p("frameRate");
p("frames");
p("hours");
p("minutes");
p("seconds");
p("songPtr");
p("uid");
p("val");
p("cps");
p("clip", "legato");
p("duration", "dur");
p("zrand");
p("curve");
p("deltaSlide");
p("pitchJump");
p("pitchJumpTime");
p("znoise");
p("zmod");
p("zcrush");
p("zdelay");
p("zzfx");
p(["color", "colour"]);
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
p("midichan");
p("midimap");
p("midiport");
p("midicmd");
A("control", (t, e) => {
  if (!Array.isArray(t))
    throw new Error("control expects an array of [ccn, ccv]");
  const [r, n] = t;
  return e.ccn(r).ccv(n);
});
p("ccn");
p("ccv");
p("ctlNum");
p("nrpnn");
p("nrpv");
p("progNum");
A("sysex", (t, e) => {
  if (!Array.isArray(t))
    throw new Error("sysex expects an array of [id, data]");
  const [r, n] = t;
  return e.sysexid(r).sysexdata(n);
});
p("sysexid");
p("sysexdata");
p("midibend");
p("miditouch");
p("polyTouch");
p("oschost");
p("oscport");
const jr = (t) => Yt.has(t) ? Yt.get(t) : t;
A("as", (t, e) => (t = Array.isArray(t) ? t : [t], e.fmap((r) => {
  r = Array.isArray(r) ? r : [r];
  const n = [];
  for (let s = 0; s < t.length; ++s)
    r[s] !== void 0 && n.push([jr(t[s]), r[s]]);
  return Object.fromEntries(n);
})));
A(
  "scrub",
  (t, e) => t.outerBind((r) => {
    Array.isArray(r) || (r = [r]);
    const [n, s = 1] = r;
    return e.begin(n).mul(nc(s)).clip(1);
  }),
  !1
);
const Tr = /* @__PURE__ */ new Map(), sc = (t, e, ...r) => {
  const n = Tr.get(t) ?? /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set([e, ...r]);
  for (const o of s)
    n.set(String(o).toLowerCase(), e);
  Tr.set(t, n);
}, en = (t, e = []) => {
  for (const [r, ...n] of e)
    sc(t, r, ...n);
}, ic = (t, e) => {
  const r = Tr.get(t);
  return r ? r.get(String(e).toLowerCase()) ?? e : e;
};
en("lfo", [
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
en("env", [
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
en("bmod", [
  ["bus", "b"],
  ["control", "c"],
  ["subControl", "sc"],
  ["depth", "dep", "dr"],
  ["depthabs", "da"],
  ["dc"],
  ["fxi"]
]);
C.prototype.modulate = function(t, e, r) {
  e = { control: void 0, ...e };
  const n = ["lfo", "env", "bmod"];
  if (!n.includes(t))
    return _t(`[core] Modulation type ${t} not found. Please use one of 'lfo', 'env', 'bmod'`), this;
  let s = this, o;
  s = s.fmap((a) => (l) => ({ v: a, id: l })).appLeft(B(r));
  for (const [a, l] of Object.entries(e)) {
    const c = ic(t, a), d = B(l);
    s = s.fmap(({ v, id: m }) => (y) => {
      if (o === void 0) {
        let S = jr(Object.keys(v).at(-1));
        n.includes(S) && (S = `${S}_${[...v[S].__ids].at(-1)}`), o = S;
      }
      v[t] ??= { __ids: /* @__PURE__ */ new Set() };
      const I = v[t];
      return m ??= I.__ids.size, I[m] ??= { control: o }, I.__ids.add(m), y === void 0 ? { v, id: m } : (c === "control" || c === "subControl" ? I[m][c] = jr(y) : I[m][c] = y, { v, id: m });
    }).appLeft(d);
  }
  return s.fmap(({ v: a }) => a);
};
C.prototype.lfo = function(t, e) {
  return this.modulate("lfo", t, e);
};
C.prototype.env = function(t, e) {
  return this.modulate("env", t, e);
};
C.prototype.bmod = function(t, e) {
  return this.modulate("bmod", t, e);
};
p(["transient", "transsustain"]);
p("FXrelease", "FXrel", "FXr", "fxr");
const oc = function(t, e) {
  const [r, n] = t, [s, o] = e, [a, l] = As(n, s);
  return [
    [n, r - n],
    [Kr((c, d) => c.concat(d), a, o), l]
  ];
}, ac = function(t, e) {
  const [r, n] = t, [s, o] = e, [a, l] = As(r, o);
  return [
    [r, n - r],
    [Kr((d, v) => d.concat(v), s, a), l]
  ];
}, Es = function(t, e) {
  const [r, n] = t;
  return Math.min(r, n) <= 1 ? [t, e] : Es(...r > n ? oc(t, e) : ac(t, e));
}, Bs = function(t, e) {
  const r = t < 0, n = Math.abs(t), s = e - n, o = Array(n).fill([1]), a = Array(s).fill([0]), l = Es([n, s], [o, a]), c = Ve(l[1][0]).concat(Ve(l[1][1]));
  return r ? c.map((d) => 1 - d) : c;
}, ur = function(t, e, r) {
  const n = Bs(t, e);
  return r ? Fu(n, -r) : n;
};
A("euclid", function(t, e, r) {
  return r.struct(ur(t, e, 0));
});
A("bjork", function(t, e) {
  Array.isArray(t) || (t = [t]);
  const [r, n = r, s = 0] = t;
  return e.struct(ur(r, n, s));
});
const { euclidrot: Th, euclidRot: qh } = A(["euclidrot", "euclidRot"], function(t, e, r, n) {
  return n.struct(ur(t, e, r));
}), ks = function(t, e, r, n) {
  if (t < 1)
    return Se;
  const o = ur(t, e, 0).join("").split("1").slice(1).map((a) => [a.length + 1, !0]);
  return n.struct(Cs(...o)).late(F(r).div(e));
};
A(["euclidLegato"], function(t, e, r) {
  return ks(t, e, 0, r);
});
A(["euclidLegatoRot"], function(t, e, r, n) {
  return ks(t, e, r, n);
});
const { euclidish: Mh, eish: Wh } = A(["euclidish", "eish"], function(t, e, r, n) {
  const s = ec(Bs(t, e), new Array(t).fill(1), r);
  return n.struct(s).setSteps(e);
});
let Kt = {};
A(
  "timeline",
  function(t, e) {
    t = B(t);
    const r = function(n) {
      const s = !!n.controls.cyclist, o = t.query(n), a = [];
      for (const l of o) {
        const c = l.value;
        let d;
        if (c === 0)
          d = 0;
        else if (c in Kt)
          d = Kt[c];
        else {
          const m = l.wholeOrPart();
          !s || n.span.begin.lt(m.midpoint()) ? d = m.begin : d = m.end;
        }
        s && (Kt[c] = d, c !== 0 && delete Kt[-c]);
        const v = e.late(d).query(n.setSpan(l.part)).map((m) => m.setContext(m.combineContext(l)));
        a.push(...v);
      }
      return a;
    };
    return new C(r, e._steps);
  },
  !1
);
const Re = function(t, e, r = !0) {
  const n = Array.isArray(t), s = Object.keys(t).length;
  return t = Du(t, B), s === 0 ? Se : e.fmap((o) => {
    let a = o;
    return n && (a = r ? Math.round(a) % s : Bu(Math.round(a), 0, t.length - 1)), t[a];
  });
}, uc = function(t, e) {
  return Array.isArray(e) && ([e, t] = [t, e]), cc(t, e);
}, cc = A("pick", function(t, e) {
  return Re(t, e, !1).innerJoin();
}), lc = A("pickmod", function(t, e) {
  return Re(t, e, !0).innerJoin();
});
A("pickF", function(t, e, r) {
  return r.apply(uc(e, t));
});
A("pickmodF", function(t, e, r) {
  return r.apply(lc(e, t));
});
A("pickOut", function(t, e) {
  return Re(t, e, !1).outerJoin();
});
A("pickmodOut", function(t, e) {
  return Re(t, e, !0).outerJoin();
});
A("pickRestart", function(t, e) {
  return Re(t, e, !1).restartJoin();
});
A("pickmodRestart", function(t, e) {
  return Re(t, e, !0).restartJoin();
});
A("pickReset", function(t, e) {
  return Re(t, e, !1).resetJoin();
});
A("pickmodReset", function(t, e) {
  return Re(t, e, !0).resetJoin();
});
const { inhabit: zh, pickSqueeze: Gh } = A(["inhabit", "pickSqueeze"], function(t, e) {
  return Re(t, e, !1).squeezeJoin();
}), { inhabitmod: Vh, pickmodSqueeze: Jh } = A(["inhabitmod", "pickmodSqueeze"], function(t, e) {
  return Re(t, e, !0).squeezeJoin();
}), It = (t) => {
  const e = (r) => [new ee(void 0, r.span, t(r.span.begin, r.controls))];
  return new C(e);
}, tn = It((t) => t % 1), Ds = tn.toBipolar(), rn = It((t) => 1 - t % 1), Os = rn.toBipolar(), Ns = It((t) => Math.sin(Math.PI * 2 * t)), pc = Ns.fromBipolar();
pc._early(F(1).div(4));
Ns._early(F(1).div(4));
const hc = It((t) => Math.floor(t * 2 % 2));
hc.toBipolar();
Ce(tn, rn);
Ce(Ds, Os);
Ce(rn, tn);
Ce(Os, Ds);
typeof window < "u" && document.addEventListener("mousemove", (t) => {
  t.clientY / document.body.clientHeight, t.clientX / document.body.clientWidth;
});
const Ls = (t) => {
  const e = t << 13 ^ t, r = e >> 17 ^ e;
  return r << 5 ^ r;
}, fc = (t) => t - Math.trunc(t), dc = (t) => Ls(Math.trunc(fc(t / 300) * 536870912)), Mn = (t) => t % 536870912 / 536870912, mc = (t, e) => {
  if (e === 1)
    return Math.abs(Mn(t));
  const r = [];
  for (let n = 0; n < e; n++)
    r.push(Mn(t)), t = Ls(t);
  return r;
}, gc = (t, e) => mc(dc(t), e), $s = (t, e = 1, r = 0) => gc(t + r, e), vc = (t) => It((e, r) => {
  let n = $s(e.floor().add(0.5), t, r.randSeed);
  Array.isArray(n) || (n = [n]);
  const s = n.map((a, l) => [a, l]).sort((a, l) => (a[0] > l[0]) - (a[0] < l[0])).map((a) => a[1]), o = e.cyclePos().mul(t).floor() % t;
  return s[o];
})._segment(t), Ps = (t, e, r) => {
  const n = [...Array(e).keys()].map((s) => r.zoom(F(s).div(e), F(s + 1).div(e)));
  return t.fmap((s) => n[s].repeatCycles(e)._fast(e)).innerJoin();
};
A("shuffle", (t, e) => Ps(vc(t), t, e));
A("scramble", (t, e) => Ps(wc(t)._segment(t), t, e));
const yc = (t, e) => new C((r) => {
  let { randSeed: n, ...s } = r.controls;
  return n = t(n), e.query(r.setControls({ ...s, randSeed: n }));
}, e._steps);
A("seed", (t, e) => yc(() => t, e));
const Me = It((t, e) => $s(t, 1, e.randSeed));
Me.toBipolar();
const Ac = (t) => Me.fmap((e) => e < t);
Ac(0.5);
const wc = (t) => Me.fmap((e) => Math.trunc(e * t)), Rs = (t, e) => (e = e.map(B), e.length == 0 ? Se : t.range(0, e.length).fmap((r) => {
  const n = Math.min(Math.max(Math.floor(r), 0), e.length - 1);
  return e[n];
})), js = (t, e) => Rs(t, e).outerJoin(), _c = (t, e) => Rs(t, e).innerJoin();
C.prototype.choose = function(...t) {
  return js(this, t);
};
C.prototype.choose2 = function(...t) {
  return js(this.fromBipolar(), t);
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
    return e._degradeByWith(Me, t);
  },
  !0,
  !0
);
A("degrade", (t) => t._degradeBy(0.5), !0, !0);
A(
  "undegradeBy",
  function(t, e) {
    return e._degradeByWith(
      Me.fmap((r) => 1 - r),
      t
    );
  },
  !0,
  !0
);
A("undegrade", (t) => t._undegradeBy(0.5), !0, !0);
A("sometimesBy", function(t, e, r) {
  return B(t).fmap((n) => _e(r._degradeBy(n), e(r._undegradeBy(1 - n)))).innerJoin();
});
A("sometimes", function(t, e) {
  return e._sometimesBy(0.5, t);
});
A("someCyclesBy", function(t, e, r) {
  return B(t).fmap(
    (n) => _e(
      r._degradeByWith(Me._segment(1), n),
      e(r._degradeByWith(Me.fmap((s) => 1 - s)._segment(1), 1 - n))
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
function Ts(t) {
  Array.isArray(t) === !1 && (t = [t]);
  const e = Nu();
  return t.every((r) => {
    const n = Ou.get(r) ?? r;
    return e[n];
  });
}
A("whenKey", function(t, e, r) {
  return r.when(Ts(t), e);
});
A("keyDown", function(t) {
  return t.fmap(Ts);
});
let er;
try {
  er = window?.speechSynthesis;
} catch {
  console.warn("cannot use window: not in browser?");
}
let Wn = er?.getVoices();
function bc(t, e, r) {
  er.cancel();
  const n = new SpeechSynthesisUtterance(t);
  n.lang = e, Wn = er.getVoices();
  const s = Wn.filter((o) => o.lang.includes(e));
  typeof r == "number" ? n.voice = s[r % s.length] : typeof r == "string" && (n.voice = s.find((o) => o.name === o)), speechSynthesis.speak(n);
}
A("speak", function(t, e, r) {
  return r.onTrigger((n) => {
    bc(n.value, t, e);
  });
});
_t("🌀 @strudel/core loaded 🌀");
globalThis._strudelLoaded && console.warn(
  `@strudel/core was loaded more than once...
This might happen when you have multiple versions of strudel installed. 
Please check with "npm ls @strudel/core".`
);
globalThis._strudelLoaded = !0;
const qs = 3e-4, Ic = (t, e) => (r, n) => {
  const a = t.source_[n].options_?.ops, l = r.__steps_source;
  if (a)
    for (const c of a)
      switch (c.type_) {
        case "stretch": {
          const d = ["fast", "slow"], { type: v, amount: m } = c.arguments_;
          if (!d.includes(v))
            throw new Error(`mini: stretch: type must be one of ${d.join("|")} but got ${v}`);
          r = B(r)[v](e(m));
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
          r = B(r)._degradeByWith(Me.early(qs * c.arguments_.seed), c.arguments_.amount ?? 0.5);
          break;
        }
        case "tail": {
          const d = e(c.arguments_.element);
          r = r.fmap((v) => (m) => Array.isArray(v) ? [...v, m] : [v, m]).appLeft(d);
          break;
        }
        case "range": {
          const d = e(c.arguments_.element);
          r = B(r);
          const v = (y, I, S = 1) => Array.from(
            { length: Math.abs(I - y) / S + 1 },
            (M, H) => y < I ? y + H * S : y - H * S
          );
          r = ((y, I) => y.squeezeBind((S) => I.bind((M) => Ce(...v(S, M)))))(r, d);
          break;
        }
        default:
          console.warn(`operator "${c.type_}" not implemented`);
      }
  return r.__steps_source = r.__steps_source || l, r;
};
function Ms(t, e, r, n = 0) {
  r?.(t);
  const s = (o) => Ms(o, e, r, n);
  switch (t.type_) {
    case "pattern": {
      const o = t.source_.map((d) => s(d)).map(Ic(t, s)), a = t.arguments_.alignment, l = o.filter((d) => d.__steps_source);
      let c;
      switch (a) {
        case "stack": {
          c = _e(...o), l.length && (c._steps = Je(...l.map((d) => F(d._steps))));
          break;
        }
        case "polymeter_slowcat": {
          c = _e(...o.map((d) => d._slow(d.__weight))), l.length && (c._steps = Je(...l.map((d) => F(d._steps))));
          break;
        }
        case "polymeter": {
          const d = t.arguments_.stepsPerCycle ? s(t.arguments_.stepsPerCycle).fmap((m) => F(m)) : ce(F(o.length > 0 ? o[0].__weight : 1)), v = o.map((m) => m.fast(d.fmap((y) => y.div(m.__weight))));
          c = _e(...v);
          break;
        }
        case "rand": {
          c = _c(Me.early(qs * t.arguments_.seed).segment(1), o), l.length && (c._steps = Je(...l.map((d) => F(d._steps))));
          break;
        }
        case "feet": {
          c = Ce(...o);
          break;
        }
        default: {
          if (t.source_.some((v) => !!v.options_?.weight)) {
            const v = t.source_.reduce(
              (m, y) => m.add(y.options_?.weight || F(1)),
              F(0)
            );
            c = Cs(
              ...t.source_.map((m, y) => [m.options_?.weight || F(1), o[y]])
            ), c.__weight = v, c._steps = v, l.length && (c._steps = c._steps.mul(Je(...l.map((m) => F(m._steps)))));
          } else
            c = Ue(...o), c._steps = o.length;
          t.arguments_._steps && (c.__steps_source = !0);
        }
      }
      return l.length && (c.__steps_source = !0), c;
    }
    case "element":
      return s(t.source_);
    case "atom": {
      if (t.source_ === "~" || t.source_ === "-")
        return Se;
      if (!t.location_)
        return console.warn("no location for", t), t.source_;
      const o = isNaN(Number(t.source_)) ? t.source_ : Number(t.source_);
      if (n === -1)
        return ce(o);
      const [a, l] = Ws(e, t, n);
      return ce(o).withLoc(a, l);
    }
    case "stretch":
      return s(t.source_).slow(s(t.arguments_.amount));
    default:
      return console.warn(`node type "${t.type_}" not implemented -> returning silence`), Se;
  }
}
const Ws = (t, e, r = 0) => {
  const { start: n, end: s } = e.location_, o = t?.split("").slice(n.offset, s.offset).join(""), [a = 0, l = 0] = o ? o.split(e.source_).map((c) => c.split("").filter((d) => d === " ").length) : [];
  return [n.offset + a + r, s.offset - l + r];
}, Cc = (t, e = 0, r = t) => {
  try {
    return hu(t);
  } catch (n) {
    const s = [n.location.start.offset + e, n.location.end.offset + e], o = r.slice(0, s[0]).split(`
`).length;
    throw new Error(`[mini] parse error at line ${o}: ${n.message}`);
  }
}, xc = (t, e, r) => {
  const n = Cc(t, e, r);
  let s = [];
  return Ms(
    n,
    t,
    (o) => {
      o.type_ === "atom" && s.push(o);
    },
    -1
  ), s;
}, Fc = (t, e = 0, r) => xc(t, e, r).map((n) => Ws(t, n, e));
let tr = !1;
function Er(t) {
  const e = tr;
  return tr = !!t, e;
}
let rr = 0;
function zn(t) {
  rr = Number.isFinite(t) ? t : 0;
}
function Sc(t) {
  return "'" + String(t).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\n/g, "\\n") + "'";
}
let cr = !1, lr = [];
function Ec() {
  cr = !0, lr = [];
}
function Bc() {
  return cr = !1, lr;
}
function Gn(t, e) {
  if (!tr || typeof e != "number")
    return JSON.stringify(t);
  const r = rr + e;
  return cr && lr.push(...Fc(`"${t}"`, r)), `m(${Sc(t)}, ${r})`;
}
function kc(t, e, r) {
  if (!tr || typeof e != "number" || typeof r != "number")
    return t;
  const n = rr + e, s = rr + r;
  return cr && lr.push([n, s]), `lo(${t}, ${n}, ${s})`;
}
function Dc(t = {}) {
  const { aliasFuncs: e, aliasSounds: r, aliasNotes: n, aliasScales: s } = t;
  let o = [];
  const a = () => o[o.length - 1], l = (g) => g && g.children ? g.children : [], c = (g, w) => g.find((b) => b && b.ctorName === w), d = new Set(
    Object.values(ds.functions || {}).flatMap((g) => Array.isArray(g) ? g : [g]).filter((g) => g && !/[A-Z]/.test(g))
  );
  let v = null;
  function m(g) {
    for (const w of Array.isArray(g) ? g : [g])
      w && typeof w == "string" && (d.add(w), v = null);
  }
  const y = [
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
  ], I = {
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
  }, S = {
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
  }, M = (g) => {
    for (const w of ["ur", "nn", "ll", "i", "a"])
      if (g.endsWith(w) && g.length - w.length >= 2) return g.slice(0, -w.length);
    return g;
  }, H = () => {
    const g = /* @__PURE__ */ new Map();
    for (const w of d) {
      const b = I[w] ? [M(w), ...I[w]] : [M(w)];
      for (const x of b) g.has(x) || g.set(x, w);
    }
    return g;
  }, G = (g) => {
    if (Object.prototype.hasOwnProperty.call(S, g)) return S[g];
    if (d.has(g)) return g;
    v || (v = H());
    let w = null;
    for (const b of y) {
      if (!g.endsWith(b)) continue;
      const x = b ? g.slice(0, -b.length) : g, D = v.get(x);
      D && (!w || x.length > w.len) && (w = { key: D, len: x.length });
    }
    return w ? w.key : g;
  }, xe = {
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
  }, Ee = {
    sög: "saw",
    sínus: "sine",
    kósínus: "cosine",
    þríhyrnd: "tri",
    kassi: "square",
    handahóf: "rand",
    perlín: "perlin"
  }, pr = {
    mjög: 1.5,
    örlítið: 0.5,
    smá: 0.5,
    alveg: 2
  }, hr = {
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
  }, ot = ["minnstur", "minni", "lítill", "stór", "stærri", "stærstur"], Ct = { minnstur: 0.1, minni: 0.2, lítill: 0.5, stór: 0.75, stærri: 0.9, stærstur: 1 }, fr = /* @__PURE__ */ new Set(["minnstur", "minni", "lítill"]), xt = { "enn minni": 0.15, "voðalega lítill": 0.35, "mjög stór": 0.85 }, dr = (g, w) => {
    const b = hr[w.toLowerCase()];
    let x = Ct[b];
    const D = (g || "").toLowerCase();
    if (D) {
      const N = `${D} ${b}`;
      if (Object.prototype.hasOwnProperty.call(xt, N)) return xt[N];
      const T = ot.indexOf(b);
      if (fr.has(b)) {
        const V = T > 0 ? Ct[ot[T - 1]] : 0;
        x = Number((x - (x - V) / 2).toFixed(2));
      } else {
        const V = T < ot.length - 1 ? Ct[ot[T + 1]] : 1;
        x = Number((x + (V - x) / 2).toFixed(2));
      }
    }
    return x;
  }, Ft = (...g) => {
    const w = [], b = (x) => {
      if (x) {
        if (x.ctorName === "quotation") {
          w.push(x);
          return;
        }
        for (const D of l(x)) b(D);
      }
    };
    for (const x of g) b(x);
    return w;
  }, at = (g) => g && typeof g == "object" && "text" in g ? g.text : g, St = (g) => Gn(at(g ? g.translate() : ""), g && g.source.startIdx), Mt = (g) => g.map(St), ut = (g, w) => `${G(Pe(g))}(${kc(
    w.translate(),
    w.source.startIdx,
    w.source.endIdx
  )})`, $e = (g) => String(at(g.translate()) || "").trim(), Pe = (g) => String(at(g.translate())), Ze = (g, w, b, x) => `${G(Pe(g))}(${Mt(
    [w].concat(Ft(b), Ft(x))
  ).join(", ")})`, Et = (g, w) => ({
    methodName: G(Pe(g)),
    transformName: Pe(w).toLowerCase()
  }), Wt = (g) => {
    const w = c(g, "_iter"), b = w && w.numChildren > 0 ? w.child(0) : null;
    return b && b.child(0) ? b.child(0).ctorName : null;
  }, mr = (g, w, b, x) => {
    if (x === "negation_aldrei" || x === "negation_ekkert") return `const ${g} = silence`;
    const D = `const ${g} = ${w}(${b})`;
    return x === "negation_ekki" ? `${D}; ${g}.hush()` : D;
  }, Bt = (g, w) => {
    const b = c(g, "function"), x = c(g, "quotation"), D = b ? b.translate() : "", N = St(x), T = Wt(g), V = a();
    if (V) for (const Z of w) V.names.push(Z);
    return w.map((Z) => mr(Z, D, N, T)).join("; ");
  }, kt = (g) => {
    const w = l(g)[0];
    if (!w || w.ctorName !== "Clause") return !1;
    const b = l(w)[0];
    return !!(b && b.ctorName === "Clause_composition");
  };
  return { actions: {
    // Top-level override to collapse paragraphs when final paragraph composes names.
    Text(g, w, b, x, D) {
      const N = [w].concat(l(x)), T = (Fe) => {
        if (!Fe || !Fe.children) return [];
        const Dt = Fe.children[2], vr = Fe.children[4];
        return [Dt].concat(l(vr)).filter(Boolean);
      }, V = N[N.length - 1];
      if (!kt(T(V)[0]))
        return N.map((Fe) => Fe.translate()).join(`

`);
      const Z = (Fe) => T(Fe).map((Dt) => Dt.translate()).join("; "), ye = N.slice(0, -1).map(Z), Ye = V.translate();
      return ye.concat([Ye]).filter(Boolean).join("; ");
    },
    // Track assigned names per paragraph via a module-level stack.
    Clause_assignment(g) {
      const w = l(g), b = c(w, "variable"), x = b ? b.translate() : "";
      return Bt(w, [x]);
    },
    // Multi-subject assignment: 'Davíð og Ásta spila hljóð «bd»' binds one const per
    // subject to the same call. Every subject name is pushed to the paragraph stack
    // so the trailing stack(...) collects them (auto-stack of voices). A negation
    // applies per subject, mirroring single Assignment polarity.
    Clause_multiassignment(g) {
      const w = l(g), b = c(w, "SubjectList"), x = b ? b.translate() : [];
      return Bt(w, x);
    },
    // SubjectList -> array of lowercased variable names (2+). The plural verb and
    // the conjunction terminals are structural and contribute no names.
    SubjectList(g, w, b, x, D) {
      const N = g.translate(), T = l(b).map((Z) => Z.translate()), V = D.translate();
      return [N, ...T, V];
    },
    // Additive layer: 'Líka hljóð «~ sd»' adds a voice under an auto-generated name
    // (lag2, lag3, …) keyed off how many names the paragraph already holds, then
    // pushes it so the paragraph stack collects it. Mirrors Clause_generic for the
    // method call itself.
    Clause_additive(g, w, b, x, D, N) {
      const T = Ze(w, x, D, N), V = a(), Z = `lag${(V ? V.names.length : 0) + 1}`;
      return V && V.names.push(Z), `const ${Z} = ${T}`;
    },
    // Imperative command: 'Spilaðu hljóð «bd»' emits a bare pattern (command mood).
    // It is NOT pushed to the paragraph stack, so no trailing stack(...) wraps it;
    // the keyword is discarded and the rest is a normal method clause that may chain
    // via ClauseTail. Mirrors Clause_generic for the method call.
    Clause_imperative(g, w, b, x, D, N) {
      return Ze(w, x, D, N);
    },
    // Negated generic clause: 'ekki styrkur "1.2"' -> gain(0). The negated method
    // and its argument are discarded; the clause collapses to gain(0), which the
    // ClauseTail joiner chains as '.gain(0)' (or leaves bare when leading). This
    // silences just this control while preserving the rest of the method chain.
    Clause_negatedGeneric(g, w, b, x, D, N) {
      return "gain(0)";
    },
    // Nullary (argument-free) method clause: a bare method word with no quotation
    // or numeric argument, e.g. 'rev'/'palindrome'/'brak' (and Icelandic 'þögn' ->
    // hush). Mirrors Clause_generic's method-name extraction and noun normalization
    // but emits an empty argument list. ClauseTail prefixes the leading '.' when
    // chaining, so 'hljóð "bd", rev.' becomes hljóð("bd").rev().
    Clause_nullary(g) {
      return `${G(Pe(g))}()`;
    },
    Clause_generic(g, w, b, x, D) {
      return Ze(g, b, x, D);
    },
    // Prepositional noun-phrase clause: a discarded preposition (glue) plus a
    // dative noun that names the method. Mirrors Clause_generic but the method
    // name comes from the noun word after the preposition; normalizeNoun resolves
    // the inflected dative (`ómi`->`ómur`, `styrk`->`styrkur`) to its locale key.
    Clause_prepphrase(g, w, b, x, D, N) {
      return Ze(w, x, D, N);
    },
    // Degree-adverb clause: word followed by a degree adverb scaling a numeral.
    // Emits a BARE numeric product, e.g. `styrkur mjög 0.8` -> `styrkur(0.8 * 1.5)`.
    // The method name still goes through noun normalization like the generic clause.
    Clause_degree(g, w, b) {
      return ut(g, b);
    },
    // Adjective-scaling clause: a method word + a graded adjective (optionally
    // intensified), e.g. `styrkur stór` -> `styrkur(0.75)`, `styrkur mjög stór` ->
    // `styrkur(0.85)`. Emits a BARE number. Method name is noun-normalized like
    // the generic clause; it generalizes across effects (styrkur, ómur, …).
    Clause_adjscale(g, w, b) {
      return ut(g, b);
    },
    // AdjArg -> the numeric value of the (optionally adverb-intensified) adjective,
    // as a bare number literal. `scaleAdverb?` is an optional iteration node whose
    // sourceString is '' when the adverb is absent.
    AdjArg(g, w) {
      const b = g.sourceString.trim();
      return String(dr(b || null, w.sourceString));
    },
    // Coinage clause delegates to the Coinage rule.
    Clause_coinage(g) {
      return g.translate();
    },
    // Coinage ("languaging"): `Merktu „sveifla" sem lfo` mints the word `sveifla`
    // for the function `lfo`. Coinage is a stateful declaration, so we do BOTH halves
    // at translate time: registerVocabulary(coined) so it (and its inflections)
    // normalize, and aliasFuncs(target, coined) so it is callable. Doing it here —
    // rather than emitting a call — means later clauses in the SAME program already
    // see the new word, and avoids the transpiler rewriting string args into
    // mini-notation. The clause evaluates to `silence`, so a coinage-only line is a
    // valid (silent) program. The target is noun-normalized so `sem ómurinn` works.
    Coinage(g, w, b, x, D, N, T) {
      const V = $e(b), { kind: Z, value: ye } = T.translate();
      try {
        Z === "sound" ? r(ye, V) : Z === "note" ? n(ye, V) : Z === "scale" ? s(ye, V) : (m(V), e(ye, V));
      } catch {
      }
      return "silence";
    },
    // Typed coinage targets: a kind keyword + quoted value, or a bare function word.
    CoinTarget_sound(g, w, b) {
      return { kind: "sound", value: $e(b) };
    },
    CoinTarget_note(g, w, b) {
      return { kind: "note", value: $e(b) };
    },
    CoinTarget_scale(g, w, b) {
      return { kind: "scale", value: $e(b) };
    },
    CoinTarget_func(g) {
      return { kind: "func", value: G(Pe(g)) };
    },
    // DegreeArg -> the verbatim numeral, a space, a times sign, and the factor,
    // e.g. '0.8 * 1.5'. The numeral is emitted verbatim (no quotes) so the whole
    // expression is a bare JS product that evaluates to a number.
    DegreeArg(g, w) {
      const b = pr[g.sourceString.toLowerCase()];
      return `${w.translate()} * ${b}`;
    },
    // Higher-order every-family clause: a method word, a numeric count, then a
    // BARE transform word, e.g. `hvert 4 rev` -> `hvert(4, rev)`. The transform is
    // emitted as a bare identifier (NOT JSON.stringified and NOT noun-normalized as
    // a control noun) so the locale alias resolves the function reference at eval
    // time (rev, palindrome, and Icelandic transform names all resolve). The method
    // head still goes through noun normalization like the generic clause.
    Clause_everyTransform(g, w, b, x, D) {
      const { methodName: N, transformName: T } = Et(g, D);
      return `${N}(${b.translate()}, ${T})`;
    },
    // Higher-order probabilistic clause: a method word then a BARE transform word,
    // e.g. `sometimes rev` -> `sometimes(rev)`. Like everyTransform, the transform
    // stays a bare identifier so the locale alias resolves it at eval time.
    Clause_probTransform(g, w, b) {
      const { methodName: x, transformName: D } = Et(g, b);
      return `${x}(${D})`;
    },
    // Bare numeric argument: word followed by a digits/decimal/negative literal.
    // The number is emitted verbatim (no quotes) so it becomes a JS number, e.g.
    // `hægt 2` -> `hægt(2)` and `staðsetning -0.5` -> `staðsetning(-0.5)`. The
    // method name still goes through noun normalization like the generic clause.
    Clause_numarg(g, w, b) {
      return ut(g, b);
    },
    // numericArg delegates to its single child (TimesPhrase | numeral | numberWord);
    // each yields the bare integer/number string emitted verbatim into the JS.
    numericArg(g) {
      return g.translate();
    },
    numeral(g, w, b, x) {
      return this.sourceString;
    },
    // Worded cardinal -> its integer (as a string), e.g. 'tvö' -> "2".
    numberWord(g) {
      return String(xe[this.sourceString.toLowerCase()]);
    },
    // "N sinnum": keep the count, drop the inter-token space and trailing 'sinnum'.
    timesPhrase(g, w, b) {
      return g.translate();
    },
    // Clause alt that delegates to Composition rule
    Clause_composition(g) {
      return g.translate();
    },
    // Explicit composition rule: mynstur "a b" spila <mode>
    Composition(g, w, b, x, D, N, T) {
      const V = $e(b).split(/\s+/).filter(Boolean).map((ye) => ye.toLowerCase());
      if (V.length === 0)
        throw new Error("Ógilt mynstur: auður listi af nöfnum");
      return `${T.translate().kind}(${V.join(",")})`;
    },
    CompositionMode_stack(g) {
      return { kind: "stack" };
    },
    CompositionMode_cat(g, w, b) {
      return { kind: "cat" };
    },
    CompositionMode_seq(g, w, b, x, D) {
      return { kind: "seq" };
    },
    // Composition-list connectives: 'saman'->stack, 'eða'->randcat,
    // 'síðan'/'svo'/'þá'->cat. These mode words live only after 'spila' inside a
    // Composition, so they never clash with clause-level connectors.
    CompositionMode_stacksyn(g) {
      return { kind: "stack" };
    },
    CompositionMode_randcat(g) {
      return { kind: "randcat" };
    },
    CompositionMode_catsyn(g) {
      return { kind: "cat" };
    },
    // Override Paragraph to inject default stack(...) at the end, and to handle a
    // section header (`Kaflinn <name>:`) which binds the whole paragraph's layers
    // to `const <name> = stack(<layer1>, <layer2>, …)`.
    Paragraph(g, w, b, x, D) {
      const N = [b].concat(l(D));
      if (g && g.numChildren > 0) {
        const ye = g.child(0).translate();
        o.push({ names: [] });
        const Ye = N.map((Fe) => Fe.translate());
        return o.pop(), `const ${ye} = stack(${Ye.join(", ")})`;
      }
      o.push({ names: [] });
      const T = N.map((ye) => ye.translate()), V = kt(N[N.length - 1]), Z = o.pop();
      return Z.names.length > 0 && !V && T.push(`stack(${Z.names.join(",")})`), T.join("; ");
    },
    // Section header `Kaflinn <name>:` -> the (lowercased) section name.
    SectionHeader(g, w, b) {
      return w.translate();
    },
    // Section / arrange names: letters then optional digits (build, build2, …).
    sectionName(g, w) {
      return this.sourceString.toLowerCase();
    },
    // Tempo clause: `Takturinn er <numeric expr>` -> setcpm(<expr>).
    Clause_tempo(g) {
      return g.translate();
    },
    TempoClause(g, w, b) {
      return `setcpm(${b.translate()})`;
    },
    // Arrange clause: `Raðaðu: N lotur af X, …` -> arrange([N, X], …).
    Clause_arrange(g) {
      return g.translate();
    },
    ArrangeClause(g, w, b, x, D) {
      return `arrange(${[b.translate()].concat(l(D).map((T) => T.translate())).join(", ")})`;
    },
    ArrangeItem(g, w, b, x) {
      return `[${g.translate()}, ${x.translate()}]`;
    },
    ArrangeTarget_silence(g) {
      return "silence";
    },
    ArrangeTarget_name(g) {
      return g.translate();
    },
    // Numeric (arithmetic) expression: numbers joined by worded operators.
    NumExpr(g, w, b) {
      const x = l(w).map((T) => T.translate()), D = l(b).map((T) => T.translate());
      let N = g.translate();
      for (let T = 0; T < x.length; T++) N += ` ${x[T]} ${D[T]}`;
      return N;
    },
    numLit(g) {
      return g.translate();
    },
    ArithOp_div(g) {
      return "/";
    },
    ArithOp_mul(g) {
      return "*";
    },
    ArithOp_add(g) {
      return "+";
    },
    ArithOp_sub(g) {
      return "-";
    },
    // Expression argument on a control: `<control> fylgir <expr>` -> control(<expr>).
    Clause_exprArg(g, w, b, x, D) {
      return `${G(Pe(g))}(${D.translate()})`;
    },
    ExprArg_paren(g, w, b) {
      return w.translate();
    },
    ExprArg_bare(g) {
      return g.translate();
    },
    Expr(g, w) {
      let b = g.translate();
      for (const x of l(w)) b += x.translate();
      return b;
    },
    // A þá-sequence: 1 term -> the value; many plain terms -> cat(…); any weighted
    // term (vog W á V) -> timecat([W,V], …), plain terms defaulting to weight 1.
    Seq(g, w, b) {
      const x = [g.translate()].concat(l(b).map((N) => N.translate())), D = x.some((N) => N.weighted);
      return x.length === 1 && !D ? x[0].v : D ? `timecat(${x.map((T) => T.weighted ? `[${T.w}, ${T.v}]` : `[1, ${T.v}]`).join(", ")})` : `cat(${x.map((N) => N.v).join(", ")})`;
    },
    SeqTerm_weighted(g, w, b, x) {
      return { weighted: !0, w: w.translate(), v: x.translate() };
    },
    SeqTerm_plain(g) {
      return { weighted: !1, v: g.translate() };
    },
    Term_group(g, w, b) {
      return w.translate();
    },
    Term_pick(g, w, b, x, D, N) {
      const T = [x.translate()].concat(l(N).map((V) => V.translate()));
      return `${g.translate()}.pick([${T.join(", ")}])`;
    },
    Term_value(g) {
      return g.translate();
    },
    ExprValue_signal(g) {
      return g.translate();
    },
    ExprValue_str(g) {
      return JSON.stringify($e(g));
    },
    ExprValue_num(g) {
      return g.translate();
    },
    signalWord(g) {
      return Ee[this.sourceString.toLowerCase()];
    },
    ExprMethod(g, w, b) {
      const x = G(w.sourceString), D = b && b.numChildren > 0 ? b.child(0).translate() : "";
      return `.${x}(${D})`;
    },
    ExprArgs_numeric(g, w, b) {
      return [g.translate()].concat(l(b).map((D) => D.translate())).join(", ");
    },
    ExprArgs_quoted(g) {
      return JSON.stringify($e(g));
    },
    variable(g) {
      return this.sourceString.toLowerCase();
    },
    function(g) {
      return G(this.sourceString.toLowerCase());
    },
    // ===== Core skeleton actions (the rules no tier reshapes) =====
    Sentence(g, w, b) {
      return [g.translate(), ...w.translate()].join("");
    },
    ClauseTail(g, w) {
      const b = w.translate();
      return b ? "." + b : "";
    },
    Clause(g) {
      const w = g.translate();
      if (!Array.isArray(w)) return w;
      if (!w || w.length === 0) return "";
      const b = w.find((N) => N && N.kind === "word"), x = b ? b.text : "", D = w.filter((N) => N && N.kind === "quote").map((N) => Gn(N.text, N.start));
      return `${x}(${D.join(", ")})`;
    },
    word(g) {
      return { kind: "word", text: this.sourceString };
    },
    quotation(g, w, b) {
      return { kind: "quote", text: w.translate(), start: this.source.startIdx };
    },
    quotedContent(g) {
      const w = this.sourceString;
      if (!w.includes(",")) return w;
      let b = "", x = 0;
      for (let D = 0; D < w.length; D++) {
        const N = w[D];
        N === "(" ? x++ : N === ")" && x > 0 && x--, N === "," && x === 0 && /\d/.test(w[D - 1]) && /\d/.test(w[D + 1]) ? b += "." : b += N;
      }
      return b;
    },
    _terminal() {
      return this.sourceString;
    },
    _iter(...g) {
      return g.map((w) => w.translate());
    }
  }, registerVocabulary: m };
}
const Hh = "ristavel", Uh = { family: "FiraGO", css: "https://cdn.jsdelivr.net/npm/@fontsource/firago/index.css" }, Kh = ds;
function Qh(t = {}) {
  const { actions: e, registerVocabulary: r } = Dc(t.locale), n = Fr.createSemantics().addOperation("translate", e);
  return { grammar: Fr, semantics: n, registerVocabulary: r, setBaseOffset: zn, setLocationsEnabled: Er, getLocations: (o, a = 0) => {
    const l = Fr.match(o, "Text");
    if (l.failed()) return [];
    const c = Er(!0);
    zn(a), Ec();
    try {
      n(l).translate();
    } catch {
    }
    const d = Bc();
    return Er(c), d;
  } };
}
export {
  Qh as createLanguage,
  Uh as font,
  Kh as locale,
  Hh as name
};
