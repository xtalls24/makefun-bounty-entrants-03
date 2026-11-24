// bounty-entrants-03 entrypoint: copies BOUNTY.json from the repository root to /output/BOUNTY.json.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(BOT_DIR, 'BOUNTY.json'), join(OUTPUT_DIR, 'BOUNTY.json'));