import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-congress',
        propDefaults: {
            inSession: false,
        }
    },
    //scriptPath: './cotus-congress.cs.js',
};
const visualHints = {
    propPresentationMap: {
        house: {
            name: 'House of Representatives',
            tagName: 'cotus-house',
            ssrPath: './cotus-house.html',
            style: {
                minHeight: '200px',
                display: 'flex',
            }
        },
        senate: {
            name: 'Senate',
            tagName: 'cotus-senate',
            ssrPath: './cotus-senate.html',
            style: {
                minHeight: '200px',
                display: 'flex',
            }
        },
        inSession: {
            name: 'In Session',
            mayItBe: {
                beConsensual: {
                    elementSelector: '[is-importing][is-definitive]',
                    onStateSelector: '[in-session]',
                    offStateSelector: ':not([in-session])',
                }
            }
        }
    },
    fieldSets: {
        'Chambers': ['house', 'senate'],
        'Status': ['inSession'],
    },
};
const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
    dependencies: ['be-consensual@0.0.2/be-consensual.js'],
});
