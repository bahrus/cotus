import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-congress',
    },
};
const visualHints = {
    propPresentationMap: {
        house: {
            tagName: 'cotus-house',
            ssrPath: 'cotus/cotus-house.html'
        },
        senate: {
            tagName: 'cotus-senate',
            ssrPath: 'cotus/cotus-senate.html'
        }
    }
};
const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
    dependencies: [],
});
