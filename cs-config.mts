import {html, define} from 'may-it-be/index.js';
import {SenateProps, SenateActions} from './types';
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
        }
    }
};

//const VisualHints: VisualHints<SenateProps, SenateActions> = {};

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});

