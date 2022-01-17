import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-potus',
        propDefaults: {
            impeachmentCount: 0,
            name: 'Joe Biden',
            party: 'Democrat',
        }
    },
};
const visualHints = {
    stylePaths: [
        '/style/common.css'
    ],
};
const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, {}).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});
