import fs from "fs";
import path from "path";

const distClient = path.resolve(process.cwd(), "dist/client");
const indexHtml = path.join(distClient, "index.html");

if (!fs.existsSync(indexHtml)) {
  throw new Error("dist/client/index.html does not exist. Run npm run build first.");
}

fs.writeFileSync(path.join(distClient, ".nojekyll"), "", "utf8");

console.log("Verified dist/client/index.html and generated .nojekyll");
