import fs from "fs";
import path from "path";

const distClient = path.resolve(process.cwd(), "dist/client");
const assetsDir = path.join(distClient, "assets");

if (!fs.existsSync(distClient)) {
  throw new Error("dist/client directory does not exist. Run npm run build first.");
}
if (!fs.existsSync(assetsDir)) {
  throw new Error("dist/client/assets directory does not exist. Run npm run build first.");
}

const files = fs.readdirSync(assetsDir);
const jsFiles = files.filter((file) => file.endsWith(".js") && file.startsWith("index-"));
const cssFiles = files.filter((file) => file.endsWith(".css") && file.startsWith("styles-"));

if (jsFiles.length === 0) {
  throw new Error("No entry JS file found in dist/client/assets. Expected index-*.js.");
}

const entryJs = jsFiles.sort((a, b) => {
  const aStat = fs.statSync(path.join(assetsDir, a));
  const bStat = fs.statSync(path.join(assetsDir, b));
  return bStat.size - aStat.size;
})[0];

const cssFile = cssFiles.length > 0 ? cssFiles.sort((a, b) => {
  const aStat = fs.statSync(path.join(assetsDir, a));
  const bStat = fs.statSync(path.join(assetsDir, b));
  return bStat.size - aStat.size;
})[0] : null;

const cssLink = cssFile ? `    <link rel="stylesheet" href="./assets/${cssFile}" />\n` : '';

const indexHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <base href="/nurture-community/" />
${cssLink}    <title>Nurture Community</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/${entryJs}"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(distClient, "index.html"), indexHtml, "utf8");
fs.writeFileSync(path.join(distClient, ".nojekyll"), "", "utf8");

console.log("Generated dist/client/index.html and .nojekyll");
