const Fs = require('fs');
const Fsp = require('fs').promises;
const Path = require('path');

const Nunjucks = require('nunjucks');

// Render the templated .njk files into .html output
(async () => {
    const baseDir = Path.join(__dirname, `../public`);
    const outDir = Path.join(__dirname, `../docs`);
    const files = await Fsp.readdir(baseDir);

    Nunjucks.configure(Path.join(__dirname, `../public/`), {
        autoescape: false,
    });

    if (!Fs.existsSync(outDir)) {
        Fs.mkdirSync(outDir, { recursive: true });
    }

    files
        .filter((it) => it.endsWith(`.njk`))
        .forEach(async (it) => {
            console.log(`Building HTML page for ${it} ....`);

            const templateFilePath = Path.join(__dirname, `../docs/${it}`);

            let pageData = await Nunjucks.render(it, {
                version: require(`../package.json`).version,
            });

            await Fsp.writeFile(
                `${templateFilePath.substring(
                    0,
                    templateFilePath.length - 4
                )}.html`,
                pageData
            );
        });
})();
