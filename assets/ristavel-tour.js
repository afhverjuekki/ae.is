// Rista-vél — a guided tour. Run each block in its own REPL cell (Ctrl-Enter).
//
// FIRST: open Settings and tick "Enable Block-based Evaluation (EXPERIMENTAL)".
// The tour relies on it — otherwise Ctrl-Enter evaluates the whole document instead
// of just the block under the cursor, and the steps run all at once.
//
// Sections:
// 1. Grunnatriði (baseline)
// 2. Tengingar (clause conjunctions)
// 3. Gæsalappir (guillemet quotes)
// 4. Töluorð (worded numerals)
// 5. Berar tölur (bare numeric args)
// 6. Tugabrotskomma (decimal comma)
// 7. Euklíðsk hrynjandi (euclid-safe comma)
// 8. Beygð nafnorð (noun-form normalization)
// 9. BÍN-beygingar (BÍN noun forms)
// 10. Forsetningarliður (prepositional phrase)
// 11. Úthlutun (assignment)
// 12. Neitun (negation)
// 13. Samsetning (composition)
// 14. Raðtengingar (list connectives)
// 15. Orðræðubygging (discourse structure)
// 16. Endamerki (expressive terminators)
// 17. Stigsatviksorð (degree adverbs)
// 18. Viðfangslausar aðferðir (nullary methods)
// 19. Lýsingarorðsskali (adjective scaling)
// 20. Hærri rað-aðgerðir (higher-order transforms)
// 21. Nótnaheiti (note & scale names)
// 22. Athugasemdir (comments)
// 23. Taktur og reikningur (tempo & arithmetic)
// 24. Merkjasveiflur (signal LFOs)
// 25. Gildaraðir (cat / timecat sequences)
// 26. Val úr mynstrum (pick)
// 27. Kaflar og útsetning (sections & arrange)
// 28. Töluorð 11-20 (worded numerals, teens)
// 29. Hljóðaheiti (sound names)
// 30. Orðasmíð (coinage)

await ohmlang('https://æ.is/assets/ristavel.mjs')


// 1. Grunnatriði (baseline)

// „bt“ = bassatromma = bd — Icelandic sound names are explained in section 29.
// Eitt hljóð — one function, one pattern arg
// → sound("bd")
ohmjs`hljóð „bt“.`

// Tveir stillar, tengdir með kommu — comma = method chain
// → sound("bd sd").room("0.5")
ohmjs`hljóð „bt st“, ómur „0.5“.`


// 2. Tengingar (clause conjunctions)

// Tengiorðið „og“ — og (and) chains like a comma
// → sound("bd sd").distort("0.2 0.5").pan("0")
ohmjs`hljóð „bt st“, bjaga „0.2 0.5“ og staðsetning „0“.`

// Tengiorðin „en“ og „ásamt“ — en / ásamt are further chaining connectors
// → sound("bd").gain("1.2").room("0.3")
ohmjs`hljóð „bt“, styrkur „1.2“ ásamt ómur „0.3“.`

// Þankastrik tengir eins og komma — an em dash also chains
// → sound("bd").pan("0.5")
ohmjs`hljóð „bt“ — staðsetning „0.5“.`


// 3. Gæsalappir (guillemet quotes)

// Gæsalappir «…» — «…» as an alternative quote pair
// → sound("bd").gain("0.8")
ohmjs`hljóð «bt», styrkur «0.8».`


// 4. Töluorð (worded numerals)

// Tölum með orðum — tvisvar (twice) → 2
// → note("c e g").slow(2)
ohmjs`nótur „c e g“, hægt tvisvar.`

// Talning með „sinnum“ — þrisvar sinnum (three times) → 3
// → sound("bd*4").fast(3)
ohmjs`hljóð „bt*4“, fljótt þrisvar sinnum.`

// Talning með „sinnum“ (þágufall) — sinnum takes the dative: fjórum sinnum (four times) → 4
// → sound("bd*4").fast(4)
ohmjs`hljóð „bt*4“, fljótt fjórum sinnum.`


// 5. Berar tölur (bare numeric args)

// Ber tala sem stilliviðfang — unquoted number, like real Strudel
// → sound("bd*4").fast(2)
ohmjs`hljóð „bt*4“, fljótt 2.`


// 6. Tugabrotskomma (decimal comma)

// Íslenskt tugabrotskomma — 0,75 → 0.75
// → sound("bd").gain("0.75")
ohmjs`hljóð „bt“, styrkur „0,75“.`


// 7. Euklíðsk hrynjandi (euclid-safe comma)

// Euclid-hrynjandi lifir tugabrotsregluna af — bt(3,8) stays a euclid call; only the bare decimal comma is fixed
// → sound("bd(3,8)").gain("0.9")
ohmjs`hljóð „bt(3,8)“, styrkur „0,9“.`


// 8. Beygð nafnorð (noun-form normalization)

// Beygt nafnorð (með greini) — ómurinn (the reverb) → ómur
// → sound("bd sd").room("0.5")
ohmjs`hljóð „bt st“, ómurinn „0.5“.`


// 9. BÍN-beygingar (BÍN noun forms)

// BÍN-beygð mynd: þolfall „litinn“ — productive inflection: litinn → litur
// → sound("bd").color("rauður")
ohmjs`hljóð „bt“, litinn „rauður“.`


// 10. Forsetningarliður (prepositional phrase)

// Forsetningarliður — með ómi (with reverb, dative) → room
// → sound("bd sd").room("0.5")
ohmjs`hljóð „bt st“, með ómi „0.5“.`


// 11. Úthlutun (assignment)

// Verkefni með sjálfvirkri stöflun — X spilar … ; a named pattern auto-stacks
// → const davíð = sound("gm_church_organ").gain("1.2").room("1.5"); stack(davíð)
ohmjs`Davíð spilar hljóð „orgel“, styrkur „1.2“ og ómur „1.5“.`


// 12. Neitun (negation)

// Neitun → hush — ekki (not) silences with hush()
// → const davíð = sound("bd").hush(); stack(davíð)
ohmjs`Davíð spilar ekki hljóð „bt“.`

// Neitun → silence — aldrei (never) → silence
// → const ásta = silence; stack(ásta)
ohmjs`Ásta spilar aldrei hljóð „bt“.`

// Neitun → silence (ekkert) — ekkert (nothing) silences the part entirely, like aldrei
// → const ásta = silence; stack(ásta)
ohmjs`Ásta spilar ekkert hljóð „bt“.`

// Neitaður stillir → gain(0) — ekki on a gain control mutes the voice with gain(0)
// → sound("bd").gain(0)
ohmjs`hljóð „bt“, ekki styrkur „1.2“.`

// Neitaður stillir fellur brott — ekki on any other control leaves just that control out
// → sound("bd").pan("0.3")
ohmjs`hljóð „bt“, ekki ómur „0.5“, staðsetning „0.3“.`


// 13. Samsetning (composition)

// Mynstur saman (stack) — play named patterns simultaneously
// → const davíð = sound("bd ~"); const ásta = sound("~ sd"); stack(davíð,ásta)
ohmjs`Davíð spilar hljóð „bt ~“. Ásta spilar hljóð „~ st“. mynstur „Davíð Ásta“ spila samtímis.`

// Mynstur í röð (cat) — play named patterns in sequence
// → const davíð = sound("bd ~"); const ásta = sound("~ sd"); cat(davíð,ásta)
ohmjs`Davíð spilar hljóð „bt ~“. Ásta spilar hljóð „~ st“. mynstur „Davíð Ásta“ spila í röð.`

// Mynstur til skiptis af handahófi (randcat) — spila eða → randcat: pick a different one each cycle
// → const davíð = sound("bd"); const ásta = sound("sd"); randcat(davíð,ásta)
ohmjs`Davíð spilar hljóð „bt“. Ásta spilar hljóð „st“. mynstur „Davíð Ásta“ spila eða.`

// Mynstur í einni lotu (seq) — spila í einni lotu → seq: all squeezed into one cycle
// → const davíð = sound("bd"); const ásta = sound("sd"); seq(davíð,ásta)
ohmjs`Davíð spilar hljóð „bt“. Ásta spilar hljóð „st“. mynstur „Davíð Ásta“ spila í einni lotu.`


// 14. Raðtengingar (list connectives)

// Tengiorð samsetningar: „síðan“ (cat) — síðan / svo / þá → cat as a list connective after spila
// → const davíð = sound("bd"); const ásta = sound("sd"); cat(davíð,ásta)
ohmjs`Davíð spilar hljóð „bt“. Ásta spilar hljóð „st“. mynstur „Davíð Ásta“ spila síðan.`


// 15. Orðræðubygging (discourse structure)

// Margir geranlar í einni setningu — Davíð og Ásta spila … (both play, auto-stacked)
// → const davíð = sound("bd"); const ásta = sound("bd"); stack(davíð,ásta)
ohmjs`Davíð og Ásta spila hljóð „bt“.`

// Viðbótarlag með „líka“ — Líka … adds an unnamed voice (lag2) under the running stack
// → const davíð = sound("bd ~"); const lag2 = sound("~ sd"); stack(davíð,lag2)
ohmjs`Davíð spilar hljóð „bt ~“. Líka hljóð „~ st“.`

// Boðháttur: „Spilaðu …“ — command mood → a bare, un-stacked pattern
// → sound("bd ~").gain("1.2")
ohmjs`Spilaðu hljóð „bt ~“, styrkur „1.2“.`


// 16. Endamerki (expressive terminators)

// Upphrópun lýkur setningu — ! ends a sentence too
// → sound("bd sd").room("0.5")
ohmjs`hljóð „bt st“, ómur „0.5“!`

// Spurningarmerki lýkur setningu — ? ends a sentence too (like . and !)
// → sound("bd sd").room("0.5")
ohmjs`hljóð „bt st“, ómur „0.5“?`


// Viðmiðunartafla — lýsingarorð og atviksorð (reference: adjectives & adverbs)
//
//   Lýsingarorð (graded adjective → amount on a 0..1 scale; drives any control):
//     minnstur 0.1 · minni 0.2 · lítill 0.5 · stór 0.75 · stærri 0.9 · stærstur 1.0
//     "há" family aliases the same values:  hár = stór · hærri = stærri · hæstur = stærstur
//
//   Stigsatviksorð (degree adverb → multiplies a bare numeral):
//     mjög ×1.5 · alveg ×2 · örlítið ×0.5 · smá ×0.5
//
//   Áhersla á lýsingarorð (emphasis nudges half a grade; tabulated overrides):
//     mjög stór 0.85 · enn minni 0.15 · voðalega lítill 0.35


// 17. Stigsatviksorð (degree adverbs)

// Stigsatviksorð skalar tölu — mjög intensifies a numeral: 0.8 → 0.8 * 1.5
// → sound("bd").gain(0.8 * 1.5)
ohmjs`hljóð „bt“, styrkur mjög 0.8.`

// Stigsatviksorð sem tvöfaldar (alveg) — alveg doubles the numeral: 0.4 → 0.4 * 2 (örlítið / smá halve it)
// → sound("bd").gain(0.4 * 2)
ohmjs`hljóð „bt“, styrkur alveg 0.4.`


// 18. Viðfangslausar aðferðir (nullary methods)

// Viðfangslaus aðferð (nullary) — a bare method word chains as a no-arg call: rev → rev()
// → sound("bd sd").room("0.4").rev()
ohmjs`hljóð „bt st“, ómur „0.4“, rev.`


// 19. Lýsingarorðsskali (adjective scaling)

// Lýsingarorðsskali — „engar tölur, bara orð“ — a graded adjective sets the amount: stór → 0.75 (report Tafla 4)
// → sound("bd").gain(0.75)
ohmjs`hljóð „bt“, styrkur stór.`

// Lýsingarorðsskali með áherslu — an emphasis adverb nudges it: mjög stór → 0.85 (report Tafla 5)
// → sound("bd").gain(0.85)
ohmjs`hljóð „bt“, styrkur mjög stór.`

// Lýsingarorðsskali alhæfir yfir stilla — same words drive any control: stærstur → 1 on reverb
// → sound("bd").room(1)
ohmjs`hljóð „bt“, ómur stærstur.`


// 20. Hærri rað-aðgerðir (higher-order transforms)

// Hærri röð: „hvert N <umbreyting>“ (every) — hvert 4 rev → every(4, rev); the transform stays a bare identifier
// → sound("bd*4").every(4, rev)
ohmjs`hljóð „bt*4“, hvert 4 rev.`

// Líkindaumbreyting: „stundum <umbreyting>“ (sometimes) — stundum rev → sometimes(rev)
// → sound("bd*4").sometimes(rev)
ohmjs`hljóð „bt*4“, stundum rev.`


// 21. Nótnaheiti (note & scale names)

// Norræn/þýsk nótnaheiti (H = B) — preloaded note vocabulary: h → b (German/Nordic H), plus -is/-es accidentals
// → note("h cis e")
ohmjs`nótur „h cis e“.`

// Tóntegund: dúr / moll — preloaded scale vocabulary: dúr → major, moll → minor
// → note("0 1 2 3 4").scale("c:major")
ohmjs`nótur „0 1 2 3 4“, skali „c:dúr“.`


// 22. Athugasemdir (comments)

// Bandstriksathugasemd er hunsuð — a hyphen-delimited aside - like this - is treated as whitespace and ignored anywhere
// → sound("bd sd").room("0.5")
ohmjs`hljóð „bt st“ - mjúkur taktur -, ómur „0.5“.`


// 23. Taktur og reikningur (tempo & arithmetic)

// Taktur með reikningi — set the cycle tempo with arithmetic: 140 deilt með 4 → 140/4 (also sinnum/plús/mínus)
// → setcpm(140 / 4)
ohmjs`Takturinn er 140 deilt með 4.`


// 24. Merkjasveiflur (signal LFOs)

// Merkjasveifla sem stilliviðfang — „fylgir“ feeds a live signal as an argument: a saw LFO swept over a range, slowed
// → sound("bd*4").lpf(saw.range(200, 2000).slow(4))
ohmjs`hljóð „bt*4“, lágtíðnihleypir fylgir sög, bil 200 og 2000, hægt 4.`


// 25. Gildaraðir (cat / timecat sequences)

// Gildaröð (cat) með „þá“ — þá strings values into a cat sequence, one per cycle; then slowed
// → sound("bd sd").gain(cat(1, 0.5, 0.25).slow(2))
ohmjs`hljóð „bt st“, styrkur fylgir 1 þá 0.5 þá 0.25, hægt 2.`

// Vegin gildaröð (timecat) með „vog … á …“ — vog W á V weights each step: vog 3 á 1 holds 1 three times as long as vog 1 á 0.2
// → sound("bd sd hh cp").gain(timecat([3, 1], [1, 0.2]))
ohmjs`hljóð „bt st hh kp“, styrkur fylgir vog 3 á 1 þá vog 1 á 0.2.`


// 26. Val úr mynstrum (pick)

// Val úr mynstrum (pick) með „velur úr … eða …“ — an index pattern picks between option patterns: „0 1 0 1“ chooses „x ~“ / „x x“
// → sound("hh").struct("0 1 0 1".pick(["x ~", "x x"]))
ohmjs`hljóð „hh“, uppbygging fylgir „0 1 0 1“ velur úr „x ~“ eða „x x“.`


// 27. Kaflar og útsetning (sections & arrange)

// Kaflar og útsetning (sections & arrange) — a „Kaflinn …:“ paragraph names a stack; „Raðaðu“ sequences sections by cycle-count. Multi-paragraph — select the whole block and run it together.
// → const taktur = stack(sound("bd ~"), sound("~ sd"))
// 
// arrange([4, taktur])
ohmjs`Kaflinn taktur:
hljóð „bt ~“.
hljóð „~ st“.

Raðaðu: 4 lotur af taktur.`


// 28. Töluorð 11-20 (worded numerals, teens)

// Töluorð 11-20 — tólf (twelve) → 12
// → note("c e g").slow(12)
ohmjs`nótur „c e g“, hægt tólf.`

// Talning 11-20 með „sinnum“ — a counted phrase: sextán sinnum (sixteen times) → 16
// → sound("bd*4").fast(16)
ohmjs`hljóð „bt*4“, fljótt sextán sinnum.`


// 29. Hljóðaheiti (sound names)

// Viðmiðunartafla — hljóðaheiti (reference: sound names)
//
//   Trommukóðar (kit codes, two letters like Strudel's bd/sd/cp):
//     kóði  fullt heiti    beygðar myndir (inflected forms)                          Strudel
//     bt    bassatromma    bassatromman, bassatrommu, bassatrommuna, …               bd
//     st    sneriltromma   sneriltromman, sneriltrommu, sneriltrommuna, … · snerill  sd
//     kp    klapp          klappi, klappinu, klappið, … · handaklapp                 cp
//     mg    málmgjall      málmgjalli, málmgjallinu, málmgjallið, …                  cr
//     hr    hrista         hristan, hristu, hristuna, …                              sh
//     kb    kúabjalla      kúabjallan, kúabjöllu, kúabjölluna, …                     cb
//     tb    tambúrína      tambúrínan, tambúrínu, tambúrínuna, …                     tb (same code)
//   Án íslensks kóða enn (no Icelandic code yet): hh oh rd rim lt mt ht
//
//   Öll full heiti beygjast (every full name also plays inflected, singular, with or
//   without the article): „bassatrommu“, „píanóinu“, „orgelsins“ — 463 BÍN forms.
//   Laglínuhljóðfæri og hljóðgjafar halda fullu heiti (melodic instruments and synths
//   keep their full names): píanó, orgel, fiðla, kontrabassi, sög, sínus, kassi …

// Kóði, fullt heiti og beygð mynd — „bt“ = „bassatromma“ = „bassatrommu“: the code, the full name and an inflected form all play bd
// → sound("bd bd bd")
ohmjs`hljóð „bt bassatromma bassatrommu“.`

// Hljóð sneriltrommunnar — a definite genitive reads as prose, "the sound of the snare drum", and plays sd
// → sound("sd").room("0.5")
ohmjs`hljóð „sneriltrommunnar“, ómur „0.5“.`

// Hljóðfæri spilar nótur — orgel → gm_church_organ, a soundfont that plays any pitch
// → note("c3 e3 g3").sound("gm_church_organ").room("0.8")
ohmjs`nótur „c3 e3 g3“, hljóð „orgel“, ómur „0.8“.`

// Sýnisnúmer á íslenskum kóða — the :n sample index works on an Icelandic code: bt:1 → bd:1
// → sound("bd:1 sd:2")
ohmjs`hljóð „bt:1 st:2“.`

// Sög og sínus: hljóð og merki — the waveform words name both: „sög“ is the sawtooth sound, fylgir sínus the sine signal
// → note("c2 c3").sound("sawtooth").lpf(sine.range(300, 2000).slow(4))
ohmjs`nótur „c2 c3“, hljóð „sög“, lágtíðnihleypir fylgir sínus, bil 300 og 2000, hægt 4.`

// Strengjahljóðfæri saman — fiðla → gm_violin, kontrabassi → gm_contrabass, one per named part
// → const davíð = note("c4 e4 g4").sound("gm_violin"); const ásta = note("c2").sound("gm_contrabass"); stack(davíð,ásta)
ohmjs`Davíð spilar nótur „c4 e4 g4“, hljóð „fiðla“. Ásta spilar nótur „c2“, hljóð „kontrabassi“.`


// 21. Nótnaheiti (note & scale names)

// b er B♭, es er E♭, as er A♭ — b, es and as are B♭, E♭ and A♭ in the language only: plain Strudel note("b") stays B (h is B in both)
// → note("bb eb ab")
ohmjs`nótur „b es as“.`

// Tóntegundin b-moll — a scale root takes the same note names: b:moll is B♭ minor
// → note("0 2 4").scale("bb:minor")
ohmjs`nótur „0 2 4“, skali „b:moll“.`


// 30. Orðasmíð (coinage)
// Coinage mints a NEW Icelandic word for a function that lacks one (aliasFuncs).
// The mint line makes no sound (→ silence); afterwards the word — and its
// inflections — behave like any native word. Run the mint block, then the use block.

// Coin a word, then use it (with inflection) — `ymur` is minted for room (via ómur); `ymurinn` (definite) then normalizes to it.
// → silence
ohmjs`Merktu „ymur“ sem ómur.`

// → hljóð("bt").ymur("0.5")
ohmjs`hljóð „bt“, ymurinn „0.5“.`

// Coin a sound name (aliasSounds) — `trommur` is minted as a name for the bd sound; then s("trommur") plays bd.
// → silence
ohmjs`Merktu „trommur“ sem hljóð „bt“.`

// → hljóð("trommur")
ohmjs`hljóð „trommur“.`

// Coin a word for a function with no Icelandic name (jux) — jux has no entry in is.json; `spegill` (mirror) is minted for it, then chains like any method.
// → silence
ohmjs`Merktu „spegill“ sem jux.`

// → hljóð("bt st").spegill(rev)
ohmjs`hljóð „bt st“, spegill rev.`

// Coin a word for a transform that takes a number (ply) — ply has no Icelandic name; `margfalda` (multiply) is minted, used with a bare numeral.
// → silence
ohmjs`Merktu „margfalda“ sem ply.`

// → hljóð("bt st").margfalda(2)
ohmjs`hljóð „bt st“, margfalda 2.`

// Coin a word for a control (coarse) — coarse has no Icelandic name; `gróft` (coarse/rough) is minted as a control word.
// → silence
ohmjs`Merktu „gróft“ sem coarse.`

// → hljóð("bt").gróft("4")
ohmjs`hljóð „bt“, gróft „4“.`
