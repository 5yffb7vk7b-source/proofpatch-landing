import { Github } from "lucide-react"
import Link from "next/link"

const features = [
  { label: "Local Run Tracking", desc: "Records commands, labels, exit codes, duration, output summaries, and estimated cost." },
  { label: "Git Change Evidence", desc: "Captures before/after Git state and summarizes changed, created, deleted, and untracked files." },
  { label: "Local Reports", desc: "Generates Markdown, JSON, and HTML reports for demos, review, and debugging." },
  { label: "Rollback Planning", desc: "Creates dry-run rollback plans before applying recovery actions." },
  { label: "Run Compare", desc: "Compares two saved runs side by side." },
  { label: "Workflow Layer", desc: "Lists, validates, dry-runs, and safely executes approved local workflow templates." },
  { label: "Safe Workflow Executor", desc: "Keeps dry-run as default, requires allowlisted commands, blocks risky patterns, and logs execution locally." },
  { label: "Workflow Intelligence Dashboard", desc: "Turns workflow logs into local HTML reports, risk summaries, and recommended next actions." },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="border-b border-border">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <span className="font-mono text-sm text-foreground">RunProof</span>
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
              {/* Badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
                  Python CLI
                </span>
                <span className="border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
                  local-first
                </span>
                <span className="border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground">
                  open source
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-4 font-mono text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                RunProof
              </h1>
              <p className="mb-6 text-lg text-muted-foreground">
                Proof of what your AI coding agent ran.
              </p>
              <p className="mb-8 max-w-md leading-relaxed text-muted-foreground">
                Track commands, Git changes, workflow runs, reports, rollback plans, compare views, 
                and execution logs during AI-assisted development. RunProof gives developers a local 
                evidence layer before they commit, release, or trust AI-generated code.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="https://github.com/5yffb7vk7b-source/agentblackbox"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground px-4 py-2 font-mono text-sm text-background hover:bg-foreground/90"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </Link>
                <Link
                  href="#quickstart"
                  className="inline-flex items-center border border-border px-4 py-2 font-mono text-sm text-foreground hover:bg-card"
                >
                  Quick start
                </Link>
              </div>

              {/* Transition note */}
              <p className="mt-6 text-xs text-muted-foreground/70">
                Currently released as the <span className="font-mono">agentblackbox</span> CLI while the project transitions to the RunProof brand.
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
                    <span className="text-muted-foreground"> • </span>
                    <span className="text-destructive">2 blocked</span>
                    <span className="text-muted-foreground"> • </span>
                    <span className="text-foreground">$0.03 estimated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why RunProof Exists */}
        <section className="border-b border-border bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Why RunProof exists
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                AI coding agents move fast, but developers still need proof:
              </p>
              <ul className="grid gap-2 text-muted-foreground sm:grid-cols-2">
                <li className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-muted-foreground/50">—</span> what ran
                </li>
                <li className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-muted-foreground/50">—</span> what changed
                </li>
                <li className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-muted-foreground/50">—</span> what failed
                </li>
                <li className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-muted-foreground/50">—</span> what was blocked
                </li>
                <li className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-muted-foreground/50">—</span> what reports were generated
                </li>
                <li className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-muted-foreground/50">—</span> what rollback plan exists
                </li>
                <li className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-muted-foreground/50">—</span> what should happen next
                </li>
              </ul>
            </div>
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
                <div key={f.label} className="bg-background p-6">
                  <p className="mb-2 font-mono text-sm text-foreground">{f.label}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow */}
        <section id="workflows" className="scroll-mt-16 border-b border-border bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Built for AI coding-agent workflows
            </h2>
            <p className="mb-8 max-w-2xl leading-relaxed text-muted-foreground">
              Use RunProof around tools like Codex, Claude Code, Claude Desktop/Cowork-style workflows, 
              OpenJarvis, OpenClaw, and other local coding assistants. RunProof does not replace the 
              coding agent. It records and reviews the trail the agent leaves behind.
            </p>
            <div className="border border-border bg-background p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Flow
              </p>
              <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-foreground">
                <span>Plan</span>
                <span className="text-muted-foreground">→</span>
                <span>Dry-run</span>
                <span className="text-muted-foreground">→</span>
                <span>Execute</span>
                <span className="text-muted-foreground">→</span>
                <span>Log</span>
                <span className="text-muted-foreground">→</span>
                <span>Report</span>
                <span className="text-muted-foreground">→</span>
                <span>Compare</span>
                <span className="text-muted-foreground">→</span>
                <span>Rollback plan</span>
                <span className="text-muted-foreground">→</span>
                <span>Review</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary">Ship</span>
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
              <div className="border-2 border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    blocked-command-report.html
                  </span>
                </div>
                <div className="relative aspect-[4/3] w-full bg-muted/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/blocked-report.png"
                    alt="Blocked command report showing blocked commands with reasons and context"
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <div className="border-t border-border px-4 py-3">
                  <p className="font-mono text-sm text-foreground">Blocked Command Report</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Shows blocked commands, reasons, and full context
                  </p>
                </div>
              </div>

              {/* File Change Report */}
              <div className="border-2 border-border bg-background">
                <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-destructive/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-primary/60" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">
                    file-change-report.html
                  </span>
                </div>
                <div className="relative aspect-[4/3] w-full bg-muted/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/file-change-report.png"
                    alt="File change report showing Git diffs and before/after snapshots"
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <div className="border-t border-border px-4 py-3">
                  <p className="font-mono text-sm text-foreground">File Change Report</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Git diffs, before/after snapshots, and affected files
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section id="quickstart" className="scroll-mt-16 border-b border-border bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Quick start
            </h2>
            <p className="mb-8 text-xs text-muted-foreground">
              The CLI command remains <span className="font-mono">agentblackbox</span> during the RunProof brand transition.
            </p>
            <div className="border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <div className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">terminal</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-xs leading-loose sm:text-sm">
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
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Runs locally in your repo",
                "Stores history locally",
                "Generates local reports",
                "Redacts sensitive output",
                "Blocks risky commands when configured",
                "Keeps workflow execution explicit and reviewable",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-background p-4">
                  <span className="text-primary">—</span>
                  <span className="font-mono text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Does not require a hosted dashboard to review local runs.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-b border-border bg-card/50">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <p className="mb-4 font-mono text-2xl text-foreground">
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
          <span className="font-mono text-xs text-muted-foreground">RunProof</span>
          <span className="font-mono text-xs text-muted-foreground">Made by Matei Domenti</span>
        </div>
      </footer>
    </div>
  )
}
