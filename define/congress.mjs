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
            ssrPath: './cotus-house.html',
            style: {
                minHeight: '280px',
                minWidth: '425px',
                display: 'flex',
            },
            mayItBe: {
                beTransactional: {
                    noOfPresidentialImpeachments: 'union.congress.house.noOfPresidentialImpeachments',
                },
                beConsensualMember: true
            }
        },
        senate: {
            name: 'Senate',
            tagName: 'cotus-senate',
            ssrPath: './cotus-senate.html',
            style: {
                minHeight: '250px',
                minWidth: '425px',
                display: 'flex',
            },
            mayItBe: {
                beConsensualMember: true
            }
        },
        inSession: {
            name: 'In Session',
            mayItBe: {
                beConsensual: {
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
        'be-consensual@0.0.7/be-consensual.js',
        'be-transactional@0.0.1/be-transactional.js',
    ],
    globalStylePaths: ['https://unpkg.com/open-props/colors.min.css']
});
