import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// 最终定案的借口：地板需要一条“好消息”，猫只是尽责送达——不道歉、不认罪。
const entry = "The glass was due on the floor, and I was only delivering the notice.";

/** 校验单句借口：UTF-8 可编码、无 BOM、非空白、单行无控制字符、1–200 码点。 */
function validateEntry(raw: string): string {
  if (raw.startsWith("\uFEFF")) throw new Error("entry must not start with a BOM");
  const text = raw.trim();
  if (!text) throw new Error("entry must be non-empty");
  if (/[\r\n\u0000-\u001f\u007f]/u.test(text)) throw new Error("entry must be a single clean line");
  const length = [...text].length;
  if (length < 1 || length > 200) throw new Error("entry must be 1-200 characters");
  // 严格 UTF-8 往返：任何无法无损编码的字符都会在这里被拦下。
  const encoded = Buffer.from(text, "utf8");
  if (Buffer.from(encoded).toString("utf8") !== text) throw new Error("entry must round-trip as UTF-8");
  return text;
}

/** 解析输出目录；未设置或仅空白时回退 /output。 */
function resolveOutputDir(): string {
  const configured = process.env.MAKEFUN_OUTPUT_DIR?.trim();
  return resolve(configured && configured.length > 0 ? configured : "/output");
}

const text = validateEntry(entry);
const outputDir = resolveOutputDir();
mkdirSync(outputDir, { recursive: true });
writeFileSync(resolve(outputDir, "entry.txt"), text, { encoding: "utf8", mode: 0o644 });
