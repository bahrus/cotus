import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-house',
        propDefaults: {
            noOfDemocrats: 217,
            noOfRepublicans: 217,
            noOfIndependents: 1,
            noOfPresidentialImpeachments: 4,
            inSession: false,
            termNumber: 117
        },
        propInfo: {
            inSession: {
                notify: {
                    reflect: {
                        asAttr: true,
                    }
                }
            }
        }
    },
    scriptPath: './act/house.js',
    superclass: 'House',
};
const visualHints = {
    fieldSets: {
        'Party Breakdown': ['noOfDemocrats', 'noOfRepublicans', 'noOfIndependents'],
        'Status': ['inSession', 'noOfPresidentialImpeachments', 'termNumber'],
        'Actions': ['impeachPresident'],
    },
    stylePaths: [
        '/style/common.css'
    ],
    actionPresentationMap: {
        impeachPresident: {
            name: 'Impeach President',
        }
    },
    propPresentationMap: {
        'termNumber': {
            max: 117,
            min: 102,
        }
    }
};
const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});
