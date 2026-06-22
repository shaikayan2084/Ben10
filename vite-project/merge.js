const fs = require("fs");

const base = "";

const existingContent = fs.readFileSync(
  "D:/ben10-web/clone/vite-project/src/data/aliens.js",
  "utf8"
);
const newContent = fs.readFileSync(
  "D:/ben10-web/clone/vite-project/src/data/new_aliens.js",
  "utf8"
);

const baseMatch = existingContent.match(/const base = .+?;/);
const baseDecl = baseMatch
  ? baseMatch[0]
  : 'const base = import.meta.env.BASE_URL || "/";';

function extractAliens(text) {
  const results = [];
  let idx = text.indexOf("{", text.indexOf("aliens = [") || text.indexOf("newAliens = ["));
  if (idx === -1) idx = text.indexOf("{");
  while (true) {
    const objStart = text.indexOf("{", idx);
    if (objStart === -1) break;
    let depth = 0;
    let pos = objStart;
    while (pos < text.length) {
      if (text[pos] === "{") depth++;
      if (text[pos] === "}") {
        depth--;
        if (depth === 0) break;
      }
      pos++;
    }
    if (depth === 0) {
      results.push(text.substring(objStart, pos + 1));
      idx = pos + 1;
    } else break;
  }
  return results;
}

const existingAliens = extractAliens(existingContent);
const newAliens = extractAliens(newContent);
console.log("Existing:", existingAliens.length, "New:", newAliens.length);

const lookup = {};
function getName(objStr) {
  const m = objStr.match(/name: "(.+?)"/);
  return m ? m[1] : null;
}

existingAliens.forEach((o) => {
  const n = getName(o);
  if (n) lookup[n] = o;
});
newAliens.forEach((o) => {
  const n = getName(o);
  if (n) lookup[n] = o;
});

const orderedNames = [
  "Heatblast", "Wildmutt", "Stinkfly", "Diamondhead", "XLR8",
  "Grey Matter", "Four Arms", "Ripjaws", "Upgrade", "Ghostfreak",
  "Cannonbolt", "Buzzshock", "Upchuck", "Way Big",
  "Swampfire", "Echo Echo", "Humungousaur", "Jetray", "Big Chill",
  "Chromastone", "Brainstorm", "Spidermonkey", "Goop", "Alien X", "Rath",
  "Water Hazard", "AmpFibian", "Armodrillo", "Terraspin", "NRG",
  "Fasttrack", "Clockwork", "ChamAlien", "Eatle", "Juryrigg",
  "Feedback", "Bloxx", "Gravattack", "Crashhopper", "Ball Weevil",
  "Walkatrout", "Pesky Dust", "Mole-Stache", "The Worst", "Kickin Hawk",
  "Toepick", "Astrodactyl", "Bullfrag", "Atomix", "Gutrot", "Whampire",
];

let output = baseDecl + "\n\nexport const aliens = [\n";
orderedNames.forEach((name, idx) => {
  const obj = lookup[name];
  if (!obj) {
    console.error("MISSING:", name);
    return;
  }
  const newId = idx + 1;
  const updated = obj.replace(/id: \d+/, "id: " + newId);
  output += "  " + updated.trim();
  if (idx < orderedNames.length - 1) output += ",";
  output += "\n";
});
output += "];\n";

fs.writeFileSync(
  "D:/ben10-web/clone/vite-project/src/data/aliens.js",
  output,
  "utf8"
);
console.log("Written", orderedNames.length, "aliens");
