// de Module resolution in typescript importeerd enkel de bestanden met extensies
// .ts .tsx of .d.ts hierdoor worden modules met een andere extensie niet herkent.

// Ook moeten we npm install --save-dev file-loader gebruiken om hier gebruik van te moeten maken.

// Daarom moeten we de extensies voor bijvoorbeeld foto bestanden hier toevoegen.

// Als we in de body declaren dat dit van type string moet zijn in plaats van type any krijgen
// we errors wanneer we perongeluk het bestand meegeven aan iets dat geen string gebruikt.


declare module "*.gif" {
    const path: string;
    export default path;
}

declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.jpeg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module "*.svg" {
    const path: string;
    export default path;
}