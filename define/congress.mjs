import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-congress',
        propDefaults: {
            inSession: false,
        },
        actions: {
        // onInSession: {
        //     ifAllOf: ['inSession'],
        // },
        }
    },
    scriptPath: './act/congress.js',
    superclass: 'Congress',
};
const visualHints = {
    propPresentationMap: {
        house: {
            name: 'House of Representatives',
            tagName: 'cotus-house',
            style: {
                minHeight: '280px',
                minWidth: '425px',
                display: 'flex',
            },
            mayItBe: {
                beImporting: {
                    path: './cotus-house.html'
                },
                beTransactional: {
                    noOfPresidentialImpeachments: 'union.congress.house.noOfPresidentialImpeachments',
                },
                beConsensualMember: true
            }
        },
        senate: {
            name: 'Senate',
            tagName: 'cotus-senate',
            style: {
                minHeight: '250px',
                minWidth: '425px',
                display: 'flex',
            },
            mayItBe: {
                beImporting: {
                    path: './cotus-senate.html'
                },
                beConsensualMember: true
            }
        },
        inSession: {
            name: 'In Session',
            mayItBe: {
                beConsensual: {
                    selfProp: 'checked',
                    memberProp: 'inSession',
                }
            }
        }
    },
    fieldSets: {
        'Chambers': ['house', 'senate'],
        'Status': ['inSession'],
    },
    stylePaths: [
        '/style/common.css',
    ]
};
const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
    dependencies: [
        'be-consensual@0.0.11/be-consensual.js',
        'be-transactional@0.0.5/be-transactional.js',
        'be-reformable@0.0.27/be-reformable.js',
    ],
    globalStylePaths: ['https://unpkg.com/open-props/colors.min.css']
});
