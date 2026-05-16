const fs = require("fs");
const s = fs.readFileSync(`${process.env.TEMP}\\vat-bundle.js`, "utf8");
const outDir =
  "c:\\Users\\Anish D\\Desktop\\surya\\projects\\vatmaster\\public\\extracted-site";
fs.mkdirSync(outDir, { recursive: true });

function extract(varName) {
  const re = new RegExp(`\\b${varName}\\s*=\\s*"(data:image\\/[^"]+)"`);
  const m = s.match(re);
  if (!m) {
    console.error("missing", varName);
    return;
  }
  const uri = m[1];
  const parts = uri.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!parts) {
    console.error("bad", varName);
    return;
  }
  const ext = parts[1] === "jpeg" ? "jpg" : parts[1];
  const buf = Buffer.from(parts[2], "base64");
  const f = `${outDir}\\${varName}.${ext}`;
  fs.writeFileSync(f, buf);
  console.log("wrote", f, buf.length);
}

for (const v of ["ag", "fs", "wm"]) {
  extract(v);
}
