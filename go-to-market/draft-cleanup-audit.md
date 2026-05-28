# ProofPatch — Gmail Draft Cleanup Audit

**Audit date:** 2026-05-28
**Type:** Post-send draft hygiene check.

## Tooling Limitation (read first)

The Gmail MCP server available in this session exposes only these tools:
`create_draft`, `find_and_draft_reply`, `search_emails`, `get_email_details`,
`list_emails`, `send_email`.

**There is no delete-draft or trash-draft tool.** Programmatic deletion/trashing of
drafts was therefore **not possible** in this session. No draft was deleted, trashed, or
modified. Group A duplicate drafts and the Group B stale Bayram draft are flagged here for
**manual deletion** by the user in the Gmail web UI (Drafts → select → Delete). This is the
only available remediation path given the MCP toolset.

Duplicate-send risk is mitigated in the meantime by the fact that drafts never auto-send —
sending requires an explicit manual action — and by this written flag.

## Draft Group Summary

| Draft Group | Count Before | Action Taken | Count After | Notes |
|---|---|---|---|---|
| A — Duplicate developer-ICP drafts (already sent directly) | 8 | None — no delete tool in Gmail MCP; flagged for manual deletion | 8 | Duplicate-send risk; delete manually in Gmail |
| B — Stale Bayram draft (forbidden price text) | 1 | None — no delete tool in Gmail MCP; flagged for manual deletion | 1 | Contains "$200" / "paid setups" / "teams who want it running in their repo"; delete manually |
| C — Wrong-ICP small-business drafts | 10 | Left untouched (per instructions) | 10 | Remain unsent; do not send |
| D — Test / unrelated drafts | 2 | Left untouched | 2 | Clearly test junk ("Do not send it" / self-test); left intact — not deleted to avoid acting beyond the audit's safety scope. Safe to delete manually if desired |
| **Total** | **21** | | **21** | No drafts deleted (no tool available) |

## Group A — Duplicate developer-ICP drafts (manual-delete recommended)

These drafts duplicate emails already sent via direct send on 2026-05-28. Keeping them
creates duplicate-send risk.

| Recipient | Subject | Group | Action |
|---|---|---|---|
| tdwhere123@gmail.com | your "evidence-backed completion" repo | A | Flag for manual deletion |
| yiming.wu@outlook.com | the evidence layer for HOTL's review step | A | Flag for manual deletion |
| kailesk@houseofmvps.com | client audit trail for your Claude Code builds | A | Flag for manual deletion |
| florian@bruniaux.com | ctxharness validates before — ProofPatch captures after | A | Flag for manual deletion |
| sean@seandonahoe.com | logging the verification loops from agents-md | A | Flag for manual deletion |
| git-public@hesreallyhim.com | ProofPatch for awesome-claude-code — local audit trail tool | A | Flag for manual deletion |
| vladta@wix.com | you review agent instructions — I log what they ran | A | Flag for manual deletion |
| sgroy10@gmail.com | what happens when speclock's rules run | A | Flag for manual deletion |

## Group B — Stale Bayram draft (manual-delete recommended)

| Recipient | Subject | Group | Action |
|---|---|---|---|
| bayram.annakov@gmail.com | claude-reflect captures feedback — ProofPatch captures what triggered it | B | Flag for manual deletion — stale body contains forbidden price text; the corrected version was already sent |

## Group C — Wrong-ICP small-business drafts (LEFT UNTOUCHED)

10 drafts, all "Quick website idea for ..." — left intact and unsent per instructions:
Shari Leid Coaching, Precision Landscape, The Event Company, Studio Verve Pilates,
Small Business Accounting (SBA Tax), Local Marketing, HLE Landscaping,
The Pilates Point Studio, Crimson Park Digital, Bookkeepers for Small Businesses.

## Group D — Test / unrelated drafts (LEFT UNTOUCHED)

- "ProofPatch outreach test" — body: "This is a real workflow test. Do not send it."
- "[self-test] Gmail MCP works" — body: self-test draft, "Do not send it."

## Post-Action Draft State

No deletion was possible (no tool), so the draft list is unchanged from the audit snapshot:

- Drafts remaining for the 9 sent developer recipients: **9** (8 Group A + 1 Group B Bayram) — **manual deletion required**
- Stale Bayram draft remaining: **1** — **manual deletion required**
- Wrong-ICP small-business drafts: **10**, all unsent (correct)
- Test/unrelated drafts: **2**, untouched (correct)

**Action item for user:** Manually delete the 9 Group A/B drafts in Gmail to remove
duplicate-send risk. Leave the 10 wrong-ICP drafts as-is unless you decide to discard them.
