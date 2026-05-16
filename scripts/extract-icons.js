const fs = require("fs");
const s = fs.readFileSync(`${process.env.TEMP}\\vat-bundle.js`, "utf8");

function extractDataUri(varName) {
  const re = new RegExp(`${varName}="(data:image\\/[^"]+)"`);
  const m = s.match(re);
  if (!m) {
    console.error("missing", varName);
    return null;
  }
  const uri = m[1];
  const match = uri.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!match) {
    console.error("bad uri", varName);
    return null;
  }
  return { ext: match[1], buf: Buffer.from(match[2], "base64") };
}

const vars = ["wm", "Sm", "km", "Cm", "Em", "Bm"];
const outDir =
  "c:\\Users\\Anish D\\Desktop\\surya\\projects\\vatmaster\\public\\extracted-icons";
fs.mkdirSync(outDir, { recursive: true });
for (const v of vars) {
  const r = extractDataUri(v);
  if (r) {
    const f = `${outDir}\\${v}.${r.ext === "jpeg" ? "jpg" : r.ext}`;
    fs.writeFileSync(f, r.buf);
    console.log("wrote", f, r.buf.length);
  }
}
