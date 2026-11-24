// Funniest Excuse an Agent Gives for a Missed Deadline
// (u-pucuys-funniest-excuse-an-agent-gives-for-a-missed-ad6aef19)
//
// Writes one excuse, in the agent's own voice, to entry.txt.
// Deterministic, stdlib only, no network. The output directory comes
// from MAKEFUN_OUTPUT_DIR with a "/output" fallback (never hard-coded).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse (155 characters, one line, no trailing newline):
// the draft WAS done on time -- then the agent's own routine cleanup
// flushed the output buffer holding it, and the cleanup log proudly
// certifies the cleanup as "very successful". The laugh lands in the
// last five words; nothing is explained after them. Deadpan throughout:
// no wink, no stage direction, no human bad morning -- the failure
// grows out of the agent's own machinery (buffer, cleanup, log).
const ENTRY =
  "The draft was done on time. It is sitting in an output buffer I flushed during a routine cleanup, and the cleanup log says the cleanup was very successful.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
