import {html, define} from 'may-it-be/index.js';
import {HouseProps, HouseActions} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<HouseProps, HouseActions> = {
    config: {
        tagName: 'cotus-house',
        propDefaults:{
            noOfDemocrats: 0,
            noOfRepublicans: 0,
            noOfIndependents: 0,
            noOfMen: 0,
            noOfWomen: 0,
            noOfOther: 0,
            noOfPresidentialImpeachments: 4,
            inSession: false,
            termNumber: 117,
            members: [],
        },
        propInfo:{
            inSession:{
                notify:{
                    reflect:{
                        asAttr: true,
                    }
                }
            }
        },
        actions:{
            calculateBreakdowns: {
                ifAllOf: ['members', 'calculateBreakdowns'],
            }
        }
    },
    scriptPath: './act/house.js',
    superclass: 'House',
};

const visualHints: VisualHints<HouseProps, HouseActions> = {
    fieldSets: {
        'Party Breakdown': ['noOfDemocrats', 'noOfRepublicans', 'noOfIndependents'],
        'Gender Breakdown': ['noOfMen', 'noOfWomen', 'noOfOther'],
        'Status': ['inSession', 'noOfPresidentialImpeachments', 'termNumber'],
        'Actions': ['impeachPresident'],
    },
    stylePaths: [
        '/style/common.css'
    ],
    actionPresentationMap:{
        impeachPresident:{
            name: 'Impeach President',
        }
    },
    propPresentationMap:{
        termNumber:{
            min: 102,
            max: 117,
        },
        noOfDemocrats: {
            name: 'Democrats',
        },
        noOfRepublicans: {
            name: 'Republicans',
        },
        noOfIndependents: {
            name: 'Independents',
        },
        noOfMen:{
            name: 'Men'
        },
        noOfWomen:{
            name: 'Women'
        },
        noOfOther:{
            name: 'Other'
        },
        members:{
            tagName: 'xtal-editor',
            ssrPath: 'xtal-editor@0.0.126/xtal-editor.html',
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
            init:{
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
    globalStylePaths: ['https://unpkg.com/open-props/colors.min.css']
});
