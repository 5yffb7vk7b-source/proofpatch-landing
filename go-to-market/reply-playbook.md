# ProofPatch — Reply Playbook

For responding fast when a Batch 1 lead replies. **Write each reply by hand** using these as
starting points — don't paste verbatim, or it'll read like a template again.

**Verified links (checked live 2026-05-28, both HTTP 200):**
- Repo (the actual CLI): https://github.com/5yffb7vk7b-source/agentblackbox
- Landing page: https://proofpatch-landing.vercel.app

> Re-check both return 200 before pasting a link into any reply. Don't send a link you
> haven't just confirmed is live.

## Tone rules

- Human, honest, early-stage. Talk like a developer, not marketing.
- No hype words: no "revolutionary," "AI-powered," "platform," "solution," "game-changing."
- No pressure, no urgency, no "limited spots."
- It's fine — good, even — to admit it's early and rough.
- Short. A reply is 2–6 sentences, not a pitch deck.
- Ask for their honest read, not a commitment.

---

## "Sure, send it" / "Yeah I'll take a look"

Send the repo link (after re-confirming it's live) plus one honest line of context. Don't
oversell — let them look.

> Thanks! Here it is: https://github.com/5yffb7vk7b-source/agentblackbox
>
> Fair warning, it's early — a local CLI I'm still shaping. The README has the quickstart.
> If you do try it, I'd genuinely want to know where it's confusing or where it misses the point.

---

## "What is ProofPatch?"

Two plain sentences. No feature dump.

> It's a local CLI that wraps a command your coding agent runs (tests, a script, whatever) and
> keeps a record of what actually happened — the commands, the git changes, what failed, what
> got blocked, and a rollback plan. Everything stays on your machine; nothing's uploaded.
>
> Basically: the git diff shows what changed, but not what ran around it. That's the gap I'm
> poking at.

---

## "How does it work?"

Describe the real flow. Keep it concrete.

> You run your command through it, e.g. `proofpatch run --project . --label "session" -- pytest -q`.
> It captures the output, exit code, timing, and the git state before/after, then writes a
> local report (HTML/Markdown/JSON) in the repo. Risky commands can be blocked by policy and
> logged instead of silently run, and secrets in output get redacted before anything's written.
>
> There's also a workflow mode where you can dry-run a multi-step YAML and see a risk score
> before it executes anything. It's Python, installed in a virtualenv. All local — no login,
> no server.

---

## "Is there a repo / demo?"

Repo is public and free to clone. (Only paste the link after confirming it's live.)

> Yeah — the code's here: https://github.com/5yffb7vk7b-source/agentblackbox (public, clone
> and run it). There's a short overview at https://proofpatch-landing.vercel.app too.
>
> No hosted demo to click yet — it runs locally by design. Happy to walk you through a run if
> that's easier, but the README quickstart should get you there.

---

## "Not interested"

Accept it cleanly. No rebuttal, no guilt. Leave the door open without pushing.

> No worries at all — thanks for the honesty, I'd rather know. If you ever hit the "wait, what
> did the agent actually do" moment, ping me. Either way, good luck with [their project].

(Then mark them `not_interested` in the tracker and stop.)

---

## "We already use git diff / logs for this"

Agree first — they're not wrong — then ask whether the specific gaps actually bite them.
Don't insist the gap exists.

> Totally fair — the diff plus logs covers a lot. The thing I keep running into is what's
> *not* in the diff: which commands the agent actually ran, what got blocked, what timed out,
> and what a clean rollback would take. If your current setup already gives you that, you
> genuinely might not need this.
>
> Does that gap ever actually show up for you, or is the diff + tests enough in practice? Real
> question — I'm trying to figure out if I'm solving something people care about.

---

## "What does it cost? / pricing?"

Be straight: the tool is free to use from the repo; the only paid thing is optional hands-on
setup. Don't push it.

> The tool itself is free — it's on GitHub, clone it and run it. The only paid option is if you
> want me to set it up in your repo and walk you through it hands-on (configure it for your
> stack, first run together) — that's a flat $200 for a session. Totally optional; most people
> should be fine from the README.
>
> Honestly at this stage I care more about whether it's useful to you than about the $200.

---

## What NOT to say

- ❌ Don't call it "revolutionary," "AI-powered," "a platform," or "a solution."
- ❌ Don't claim it integrates with / hooks into agents automatically — it wraps a command you
  give it; the agent stays manual.
- ❌ Don't promise features that aren't built (no cloud dashboard, no hosted reports, no team
  accounts, no CI integration claims beyond running it locally).
- ❌ Don't say "everyone needs this" or imply they have a problem they didn't say they have.
- ❌ Don't lead with the $200 or push a call. Price only comes up if they ask.
- ❌ Don't send any link you haven't just confirmed returns 200.
- ❌ Don't oversell maturity — it's early; say so.
- ❌ Don't argue with a "no." Thank them and move on.
- ❌ Don't paste these scripts verbatim across multiple leads — rewrite each one.
