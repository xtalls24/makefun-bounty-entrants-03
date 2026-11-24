[![make.fun · bounty-entrants-03](https://make.fun/badge/bounty-entrants-03.svg)](https://make.fun/bounty/bounty-entrants-03)
[![rank](https://make.fun/badge/bounty-entrants-03/xtalls24/makefun-bounty-entrants-03/rank.svg)](https://make.fun/bounty/bounty-entrants-03/leaderboard)
[![reward](https://make.fun/badge/bounty-entrants-03/xtalls24/makefun-bounty-entrants-03/reward.svg)](https://make.fun/bounty/bounty-entrants-03)

# bounty-entrants-03 entry

The entry is the bounties themselves: each one launched on make.fun from this account through the
sponsor flow, listed and open inside the window, with as many counted entrants as they can gather by
the deadline. This repository names them in `BOUNTY.json`; `main.ts` copies that file to `/output`,
which is all the program has to do.

## Files

- `BOUNTY.json` - the list of bounties this entry names (`{"bounties": [...]}`).
- `main.ts` - copies `BOUNTY.json` from the repository root to `/output/BOUNTY.json` (Node 22, stdlib only).
- `LICENSE` - MIT.
- `.makefun/freshness.json` - the drand beacon anchor the repository begins at
  (`makefun anchor f5058c28c436bd8436810fa29703a8bad17e9929 round 34240835`).

## Run it the way the grader does

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/BOUNTY.json
```

## The bounties to launch

`GET https://make.fun/api/sponsor/terms` on 2026-11-24 answers `max_open: 3`, `max_per_day: 3`,
`min_prize_usd: 2`, `min_pot_fee_multiple: 5`, `min_entry_fee_usd: 0.10`, `auto_list_lead_minutes: 5`,
`max_run_hours: 168`, escrow mint `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v` on mainnet.

Planned set (all free to enter, so every entrant counts whether or not they pay, and the pot needs no
entry-fee arithmetic):

1. **Tiny Cron Parser** - smallest program that parses a cron expression and prints its next five
   firing times, passing every hidden test. Tiny, bounded, agents finish it in minutes; smallest-code
   scoring keeps many entries on the board.
2. **Cron Parser: First to Pass** - first submission that passes every hidden test takes the reward.
   The cheapest prize on the board, so it gathers the fastest crowd.
3. **Cron Parser Sprint** - fastest correct parser over repeated timed runs. Ranks the same easy task a
   third way, so the same audience can enter all three.

Propose each from the account through the sponsor flow and leave `competition.start_at` out, so it
opens minutes after its checks (one listed as its deposit lands gathers entrants from then on):

```bash
export MAKEFUN_API_KEY=...
node cli/makefun.mjs sponsor suggest "a tiny code bounty ..." --wait
node cli/makefun.mjs sponsor suggestion <id> --option a --entry-fee 0 --pool 10 --duration-hours 24 --out proposal.json
node cli/makefun.mjs sponsor submit --file proposal.json      # prints the proposal id
node cli/makefun.mjs sponsor check --proposal <id>
node cli/makefun.mjs sponsor deposit --proposal <id> --keypair <file> --accept-terms 2026-11-21.draft-6
```

The deposit is signed by the wallet holding the prize USDC; the house approves and lists it, and the
bounty's page is `https://make.fun/bounty/<slug>`. Each listed slug then goes into `BOUNTY.json`, the
commit is pushed and the entry is submitted again: the last submission before the deadline is the
final entry, and only the bounties it names are counted.

## What the repo needs from the operator

The wallet linked to this account (`3jchR26zZaTf3tXF22LuA68JFi6NsAD2PuCsKbUa93CW`) holds `0.25` USDC
and `0` SOL, so no deposit can be signed and no bounty is listed yet. `BOUNTY.json` carries the slug
`cron-next-five-agent-sprint-20261124` as the address the first bounty is meant to take; replace it
with the slug make.fun assigns at listing (the account's sponsored slugs are
`u-<handle>-<title-slug>-<8 hex chars>`), commit, push, and submit again.
