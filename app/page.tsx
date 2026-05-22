import { Github } from "lucide-react"
import Link from "next/link"

const features = [
  { label: "Run Tracking", desc: "Records commands, labels, exit codes, duration, output summaries, and estimated cost." },
  { label: "Git Change Evidence", desc: "Captures before/after Git state and summarizes changed, created, deleted, and untracked files." },
  { label: "Local Reports", desc: "Generates Markdown, JSON, and HTML reports for review, demos, and debugging." },
  { label: "Rollback Planning", desc: "Creates dry-run rollback plans before applying recovery actions." },
  { label: "Run Compare", desc: "Compares two saved runs side by side to show command, status, output, and Git differences." },
  { label: "Workflow Layer", desc: "Lists, validates, dry-runs, and safely executes approved local workflow templates." },
  { label: "Safe Workflow Executor", desc: "Keeps dry-run as default, requires allowlisted commands, blocks risky patterns, and logs execution locally." },
  { label: "Workflow Intelligence", desc: "Turns workflow logs into local HTML reports, risk summaries, status summaries, and recommended next actions." },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <span className="font-mono text-sm font-medium text-foreground">RunProof</span>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="#features" className="font-mono text-xs text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#workflows" className="hidden font-mono text-xs text-muted-foreground hover:text-foreground sm:inline">
              Workflows
            </Link>
            <Link href="#reports" className="hidden font-mono text-xs text-muted-foreground hover:text-foreground sm:inline">
              Reports
            </Link>
            <Link href="#quickstart" className="font-mono text-xs text-muted-foreground hover:text-foreground">
              Quickstart
            </Link>
            <Link
              href="https://github.com/5yffb7vk7b-source/agentblackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground hover:bg-secondary"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
            <div className="flex flex-col justify-center">
              {/* Headline */}
              <h1 className="mb-4 font-mono text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                RunProof
              </h1>
              <p className="mb-6 text-xl text-foreground/90">
                Local proof for AI coding-agent work.
              </p>
              <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
                Track commands, Git changes, workflow runs, reports, rollback plans, compare views, and execution logs before you trust AI-generated code.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="https://github.com/5yffb7vk7b-source/agentblackbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-5 py-2.5 font-mono text-sm text-background hover:bg-foreground/90"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
                <Link
                  href="#quickstart"
                  className="inline-flex items-center border border-border px-5 py-2.5 font-mono text-sm text-foreground hover:bg-card"
                >
                  Quick start
                </Link>
              </div>

              {/* Trust line */}
              <p className="mt-6 font-mono text-xs text-muted-foreground">
                Local-first · Open source · No hosted dashboard required
              </p>
            </div>

            {/* Terminal Preview */}
            <div className="flex items-center">
              <div className="w-full border border-border bg-card">
                <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                    <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
                </div>
                <div className="p-4 font-mono text-xs leading-relaxed sm:text-sm">
                  <div className="text-foreground">
                    <span className="text-muted-foreground">$ </span>
                    {"agentblackbox run --project . \\"}
                  </div>
                  <div className="pl-4 text-foreground">{"--label \"codex refactor\" \\"}</div>
                  <div className="pl-4 text-foreground">{"--estimated-cost 0.03 \\"}</div>
                  <div className="pl-4 text-foreground">{"-- pytest -q"}</div>
                  <div className="mt-4 text-primary">8 passed</div>
                  <div className="mt-4">
                    <span className="text-muted-foreground">HTML report: </span>
                    <span className="text-foreground">reports/run-20260519.html</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Dashboard: </span>
                    <span className="text-foreground">9 runs</span>
                    <span className="text-muted-foreground"> · </span>
                    <span className="text-destructive">2 blocked</span>
                    <span className="text-muted-foreground"> · </span>
                    <span className="text-foreground">$0.03 estimated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why RunProof Exists */}
        <section className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Why RunProof exists
            </h2>
            <p className="mb-6 max-w-xl text-muted-foreground">
              AI coding agents move fast. RunProof gives you evidence before you commit:
            </p>
            <ul className="grid gap-1 text-foreground sm:grid-cols-2 lg:grid-cols-3">
              {[
                "What ran",
                "What changed",
                "What failed",
                "What was blocked",
                "What can be rolled back",
                "What should happen next",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-muted-foreground">—</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Features
            </h2>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f) => (
                <div key={f.label} className="bg-background p-5">
                  <p className="mb-2 font-mono text-sm font-medium text-foreground">{f.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflows" className="scroll-mt-16 border-b border-border bg-card/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Built for AI coding-agent workflows
            </h2>
            <p className="mb-10 max-w-2xl text-muted-foreground">
              RunProof sits beside your AI coding tools. Use it with Codex, Claude Code, Claude Desktop/Cowork-style workflows, OpenJarvis, OpenClaw, or your own local automation scripts. The agent writes or edits code. RunProof records the trail.
            </p>
            <div className="border border-border bg-background p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Flow
              </p>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-sm">
                {[
                  "Plan",
                  "Dry-run",
                  "Execute",
                  "Log",
                  "Report",
                  "Compare",
                  "Rollback Plan",
                  "Review",
                  "Ship",
                ].map((step, i, arr) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className={step === "Ship" ? "text-primary" : "text-foreground"}>{step}</span>
                    {i < arr.length - 1 && <span className="text-muted-foreground">→</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reports/Screenshots */}
        <section id="reports" className="scroll-mt-16 border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Reports
            </h2>
            <p className="mb-12 max-w-xl text-muted-foreground">
              Every run generates browsable HTML reports showing exactly what happened.
            </p>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Blocked Command Report */}
              <div className="border border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border bg-muted/20 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-primary/50" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    blocked-command-report.html
                  </span>
                </div>
                <div className="relative aspect-[4/3] w-full bg-muted/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/blocked-report.png"
                    alt="Blocked command report showing blocked commands, policy reasons, command context, and redacted output"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="border-t border-border px-4 py-3">
                  <p className="font-mono text-sm text-foreground">Blocked Command Report</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Shows blocked commands, policy reasons, command context, and redacted output.
                  </p>
                </div>
              </div>

              {/* File Change Report */}
              <div className="border border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border bg-muted/20 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/50" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                    <div className="h-3 w-3 rounded-full bg-primary/50" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    file-change-report.html
                  </span>
                </div>
                <div className="relative aspect-[4/3] w-full bg-muted/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/file-change-report.png"
                    alt="File change report showing Git diffs, before/after state, affected files, and review evidence"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="border-t border-border px-4 py-3">
                  <p className="font-mono text-sm text-foreground">File Change Report</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Shows Git diffs, before/after state, affected files, and review evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="scroll-mt-16 border-b border-border bg-card/30">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Quick start
            </h2>
            <p className="mb-8 text-sm text-muted-foreground">
              The product is transitioning to the RunProof brand. The current CLI command is still <span className="font-mono">agentblackbox</span>.
            </p>
            <div className="border border-border bg-background">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-loose sm:text-sm">
<span className="text-muted-foreground">$</span> <span className="text-foreground">git clone https://github.com/5yffb7vk7b-source/agentblackbox.git</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">cd agentblackbox</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">python3 -m venv .venv</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">source .venv/bin/activate</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">pip install -e .</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox version</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox run --project . --label &quot;demo&quot; -- pytest -q</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox latest</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox workflow list</span>
{"\n"}<span className="text-muted-foreground">$</span> <span className="text-foreground">agentblackbox workflow run workflows/tasks/release-workflow.yml --dry-run</span>
              </pre>
            </div>
          </div>
        </section>

        {/* Trust / Local-first */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Local-first by design
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Runs inside your repo",
                "Stores history locally",
                "Generates local reports",
                "Redacts sensitive output",
                "Blocks risky commands when configured",
                "Keeps workflow execution explicit and reviewable",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 font-mono text-sm text-foreground">
                  <span className="text-primary">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Does not require a hosted dashboard.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-border bg-card/30">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="mb-4 font-mono text-xl text-foreground sm:text-2xl">
              RunProof creates local evidence before you trust AI-generated code.
            </p>
            <p className="mx-auto mb-8 max-w-md text-muted-foreground">
              Track what ran. Review what changed. Ship with confidence.
            </p>
            <Link
              href="https://github.com/5yffb7vk7b-source/agentblackbox"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-foreground px-6 py-3 font-mono text-sm text-background hover:bg-foreground/90"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <span className="font-mono text-sm text-muted-foreground">RunProof</span>
          <span className="text-xs text-muted-foreground">Made by Matei Domenti</span>
        </div>
      </footer>
    </div>
  )
}
