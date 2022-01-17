import {html, define} from 'may-it-be/index.js';
import {SenateProps, SenateActions} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<SenateProps, SenateActions> = {
    config: {
        tagName: 'cotus-senate',
        propDefaults:{
            noOfDemocrats: 49,
            noOfRepublicans: 49,
            noOfIndependents: 2,
            inSession: false,
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
    }
};

const visualHints: VisualHints<SenateProps, SenateActions> = {
    fieldSets: {
        'Party Breakdown': ['noOfDemocrats', 'noOfRepublicans', 'noOfIndependents'],
        'Status': ['inSession'],
    },
    stylePaths: [
        '/style/common.css'
    ],
};

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});

