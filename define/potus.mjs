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
    fieldSets: {
        'Summary': ['name', 'party'],
        'Metrics': ['impeachmentCount'],
    }
};
const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});
