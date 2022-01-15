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
            name: 'House of Representatives',
            tagName: 'cotus-house',
            ssrPath: 'cotus/cotus-house.html',
            style: {
                minHeight: '200px'
            }
        },
        senate: {
            name: 'Senate',
            tagName: 'cotus-senate',
            ssrPath: 'cotus/cotus-senate.html'
        }
    },
    fieldSets: {
        'Chambers': ['house', 'senate'],
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
