import {html, define} from 'may-it-be/index.js';
import {HouseProps, HouseActions} from './types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<HouseProps, HouseActions> = {
    config: {
        tagName: 'cotus-house',
        propDefaults:{
            noOfDemocrats: 217,
            noOfRepublicans: 217,
            noOfIndependents: 1,
            inSession: false,
        }
    }
};

const visualHints: VisualHints<HouseProps, HouseActions> = {
    fieldSets: {
        'Party Breakdown': ['noOfDemocrats', 'noOfRepublicans', 'noOfIndependents'],
        'Status': ['inSession'],
    }
};

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});
