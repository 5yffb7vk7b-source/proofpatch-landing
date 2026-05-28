#!/usr/bin/env python3
"""Validate outreach-tracker.csv after the 2026-05-28 ProofPatch send.

Fails loudly (non-zero exit) if any invariant is violated.
"""
import csv
import re
import sys

TRACKER = "go-to-market/outreach-tracker.csv"

APPROVED = {
    "tdwhere123@gmail.com",
    "yiming.wu@outlook.com",
    "kailesk@houseofmvps.com",
    "florian@bruniaux.com",
    "sean@seandonahoe.com",
    "git-public@hesreallyhim.com",
    "vladta@wix.com",
    "sgroy10@gmail.com",
    "bayram.annakov@gmail.com",
}

WRONG_ICP_NAMES = [
    "shari", "pilates", "landscaping", "sba tax", "crimson park",
    "bookkeepers for small businesses", "studio verve", "event company",
    "precision landscape", "local marketing", "hle",
]

# Gmail internal message/draft IDs look like 19exxxxxxxxxxxxx (hex). Also OAuth/token-ish.
ID_PATTERNS = [
    re.compile(r"\b19e[0-9a-f]{10,}\b"),
    re.compile(r"\bya29\."),
    re.compile(r"\b(ghp_|github_pat_|sk-|AIza)"),
]

errors = []

with open(TRACKER, newline="", encoding="utf-8") as f:
    rows = list(csv.DictReader(f))

total = len(rows)
contacted = [r for r in rows if r["Status"].strip() == "contacted"]
contacted_values = [r["Contact Value"].strip() for r in contacted]

print(f"total rows: {total}")
print(f"contacted count: {len(contacted)}")
print("contacted Contact Value values:")
for v in contacted_values:
    print(f"  - {v}")

# 1. contacted set == approved set
contacted_set = set(contacted_values)
if contacted_set != APPROVED:
    extra = contacted_set - APPROVED
    missing = APPROVED - contacted_set
    if extra:
        errors.append(f"UNAPPROVED leads marked contacted: {sorted(extra)}")
    if missing:
        errors.append(f"Approved leads NOT marked contacted: {sorted(missing)}")
print(f"contacted == 9 approved recipients: {contacted_set == APPROVED}")

# 2. iannuttall pending
iann = [r for r in rows if "iannuttall" in r["Lead Name"].lower()
        or "iannuttall" in r["Contact Value"].lower()]
iann_pending = bool(iann) and all(r["Status"].strip() == "pending" for r in iann)
if not iann_pending:
    errors.append(f"iannuttall is not pending: {[r['Status'] for r in iann]}")
print(f"iannuttall pending: {iann_pending}")

# 3. every contacted row has Sent 2026-05-28
all_have_date = all("Sent 2026-05-28" in r["Notes"] for r in contacted)
if not all_have_date:
    missing_date = [r["Contact Value"] for r in contacted
                    if "Sent 2026-05-28" not in r["Notes"]]
    errors.append(f"contacted rows missing 'Sent 2026-05-28': {missing_date}")
print(f"every contacted row has 'Sent 2026-05-28': {all_have_date}")

# 4. no raw Gmail message/draft IDs or secrets in any field
id_hits = []
for r in rows:
    for field, val in r.items():
        for pat in ID_PATTERNS:
            if pat.search(val or ""):
                id_hits.append((r["Lead Name"], field, val))
if id_hits:
    errors.append(f"Raw ID/secret-like content found: {id_hits}")
print(f"no raw Gmail/secret IDs in any field: {not id_hits}")

# 5. no wrong-ICP name in contacted rows
icp_hits = []
for r in contacted:
    blob = " ".join(r.values()).lower()
    for name in WRONG_ICP_NAMES:
        if name in blob:
            icp_hits.append((r["Contact Value"], name))
if icp_hits:
    errors.append(f"Wrong-ICP names in contacted rows: {icp_hits}")
print(f"no wrong-ICP names in contacted rows: {not icp_hits}")

print()
if errors:
    print("VALIDATION FAILED:")
    for e in errors:
        print(f"  ! {e}")
    sys.exit(1)
print("VALIDATION PASSED: all invariants hold.")
