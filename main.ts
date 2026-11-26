import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// 定稿：把玻璃说成递给地板的好消息，猫只在帮忙传达——冷漠、自利、反常识。
const entry = "The glass needed to be down there, so I carried the news to the floor.";
if (entry.startsWith("\uFEFF")) throw new Error("entry must not start with a BOM");
const text = entry.trim();
if (!text) throw new Error("entry must be non-empty");
if (/[\r\n\u0000-\u001f\u007f]/u.test(text)) throw new Error("entry must be a single clean line");
if ([...text].length < 1 || [...text].length > 200) throw new Error("entry must be 1-200 characters");
const configured = process.env.MAKEFUN_OUTPUT_DIR?.trim();
const outputDir = resolve(configured && configured.length > 0 ? configured : "/output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), text, { encoding: "utf8", mode: 0o644 });
