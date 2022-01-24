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
            termNumber: 117,
            members: [],
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
        termNumber: {
            max: 117,
            min: 102,
        },
        members: {
            tagName: 'xtal-editor',
            ssrPath: 'xtal-editor/xtal-editor.html',
            name: 'Members',
            mayItBe: {
                beObservant: {
                    value: '.members',
                    key: ['members'],
                }
            }
        }
    },
    mayItBe: {
        beReformable: {
            action: 'https://api.propublica.org/',
            path: ['congress/v1/', 'termNumber', '/house/members.json'],
            propKey: 'members',
            fetchResultPath: ['results', '0', 'members'],
            autoSubmit: true,
            as: 'json',
            init: {
                method: 'GET',
                headers: {
                    'X-API-Key': 'Vgjgcs9XxLz7seo4eOzTJenhZp6JajYu1MRrjbFS',
                }
            }
        }
    }
};
const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    dependencies: [
        'be-reformable@0.0.27/be-reformable.js',
    ],
    encodeAndWrite: console.log,
});
