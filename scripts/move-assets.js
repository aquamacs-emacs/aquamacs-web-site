const Fs = require('fs');
const Fsp = require('fs').promises;
const Path = require('path');

const ReadDir = require('fs-readdir-recursive');

// Move asset files into the docs/ directory.
(async() => {
    const assetDir = Path.join(__dirname, `../public/assets`);
    const outDir = Path.join(__dirname, `../docs/assets`);
    const outDirImages = Path.join(outDir, `images`);
    const outDirImagesLatex = Path.join(outDir, `images/latex`);
    const outDirJs = Path.join(outDir, `js`);

    const files = ReadDir(assetDir);

    if (!Fs.existsSync(outDir)) {
        Fs.mkdirSync(outDir, { recursive: true });
    }

    if (!Fs.existsSync(outDirImages) || !Fs.existsSync(outDirJs) || !Fs.existsSync(outDirImagesLatex)) {
        Fs.mkdirSync(outDirImages, { recursive: true });
        Fs.mkdirSync(outDirJs, { recursive: true });
        Fs.mkdirSync(outDirImagesLatex, { recursive: true });
    }

    files
        .filter( it => !it.endsWith(`.scss`))
        .forEach( async it => {
            let filePath = Path.join(__dirname, `../public/assets`, it);
            await Fsp.copyFile(filePath, Path.join(__dirname, `../docs/assets`, it));
        });

    // Extra root files
    const favIconFile = Path.join(__dirname, `../public`, `favicon.ico`);
    const manifestFile = Path.join(__dirname, `../public`, `manifest.json`);
    await Fsp.copyFile(favIconFile, Path.join(__dirname, `../docs`, `favicon.ico`));
    await Fsp.copyFile(manifestFile, Path.join(__dirname, `../docs`, `manifest.json`));
})();