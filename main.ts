// One-word verdict on an ex: the relationship, filed under
// subscriptions — cancelled, never renewed, no refund asked.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const VERDICT = "Unsubscribe";

// The gate: one word, 1 to 111 characters, nothing else attached.
if (!/^\S{1,111}$/.test(VERDICT)) {
  throw new Error("verdict must be a single word of 1-111 characters");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), VERDICT, "utf8");
console.log(`wrote ${VERDICT.length} characters to entry.txt`);
