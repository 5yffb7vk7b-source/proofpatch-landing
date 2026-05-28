# ProofPatch — Sent Email Audit

**Audit date:** 2026-05-28
**Type:** Post-send audit (emails were already sent via Gmail direct send on 2026-05-28).

This document verifies the 9 ProofPatch developer/AI-coding outreach emails against
Gmail **Sent Mail** (not just the tracker). It does not store raw Gmail message IDs.

## Approved Recipient Audit

| Recipient | Expected Subject | Sent Found? | Subject OK? | Body OK? | Forbidden Price Text? | Wrong-ICP Language? | Tracker Status | Notes |
|---|---|---|---|---|---|---|---|---|
| tdwhere123@gmail.com | your "evidence-backed completion" repo | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; ProofPatch dev positioning (commands/diffs/blocked actions/rollback) |
| yiming.wu@outlook.com | the evidence layer for HOTL's review step | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; HOTL review-step evidence positioning |
| kailesk@houseofmvps.com | client audit trail for your Claude Code builds | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; client audit-trail positioning. Body contains "$200 flat" (allowed for this lead — Kailesk is an agency price quote, not a forbidden Bayram phrase) |
| florian@bruniaux.com | ctxharness validates before — ProofPatch captures after | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; pre-run/post-run pairing positioning |
| sean@seandonahoe.com | logging the verification loops from agents-md | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; verification-loop evidence positioning |
| git-public@hesreallyhim.com | ProofPatch for awesome-claude-code — local audit trail tool | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; awesome-claude-code listing request, audit-trail positioning |
| vladta@wix.com | you review agent instructions — I log what they ran | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; instruction-side vs execution-side evidence positioning |
| sgroy10@gmail.com | what happens when speclock's rules run | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; enforcement+evidence positioning |
| bayram.annakov@gmail.com | claude-reflect captures feedback — ProofPatch captures what triggered it | Yes | Yes | Yes | None | None | contacted | Sent Mail verified; CORRECTED relationship-first body. Stale price body was NOT sent (see Bayram check below) |

**Result: 9/9 verified present in Sent Mail with correct subjects and ProofPatch developer/AI-coding positioning.**

## Bayram Forbidden-Phrase Check

The actual Bayram email in Sent Mail was opened and the full body read. Confirmed **absent**:

- "$200" — absent
- "paid setups" — absent
- "teams who want it running in their repo" — absent

The sent body is the corrected, relationship-first version ("You close the learning loop.
I generate the evidence before the loop starts. Worth a look?"). The stale priced draft was
not the version sent.

## Wrong-ICP Send Check

Searches performed in Gmail **Sent Mail**:

- `in:sent (Shari OR Pilates OR Landscaping OR "SBA Tax" OR "Crimson Park" OR "Bookkeepers for Small Businesses")` → 0 results
- `in:sent ("Studio Verve" OR "Event Company" OR "Precision Landscape" OR "Quick website idea" OR "website issue" OR "website fix")` → 0 results
- `in:sent ("I was browsing your site" OR "ProofPatch helps turn website issues" OR "noticed something small")` → 0 results
- `in:sent newer_than:2d` → exactly 9 results, all to approved developer-ICP recipients

**Conclusion:** No wrong-ICP / small-business email was sent. Total sent in the window is
exactly 9, matching the approved recipient list with zero extras.
