import {html, define} from 'may-it-be/index.js';
import {HouseProps, HouseActions} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';
import { House } from '../act/house';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<HouseProps, HouseActions> = {
    config: {
        tagName: 'cotus-house',
        propDefaults:{
            noOfDemocrats: 217,
            noOfRepublicans: 217,
            noOfIndependents: 1,
            noOfPresidentialImpeachments: 4,
            inSession: false,
            termNumber: 117
        },
        propInfo:{
            inSession:{
                notify:{
                    reflect:{
                        asAttr: true,
                    }
                }
            }
        }
    },
    scriptPath: './act/house.js',
    superclass: 'House',
};

const visualHints: VisualHints<HouseProps, HouseActions> = {
    fieldSets: {
        'Party Breakdown': ['noOfDemocrats', 'noOfRepublicans', 'noOfIndependents'],
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
        'termNumber':{
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
