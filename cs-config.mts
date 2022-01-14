import {html, define} from 'may-it-be/index.js';
import {SenateProps, SenateActions} from './types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  Scaffold} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<SenateProps, SenateActions> = {
    config: {
        tagName: 'cotus-senate',
        propDefaults:{
            noOfDemocrats: 49,
            noOfRepublicans: 49,
            noOfIndependents: 2,

        }
    }
};

const scaffold: Scaffold<SenateProps, SenateActions> = {
    propPresentationMap:{
        noOfDemocrats: {},
        noOfRepublicans: {},
        noOfIndependents: {},
    }
}

const innerHTML = (new BaseScaffoldGenerator(beDefinitiveProps, scaffold)).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});

// export class cotusSenateController extends HTMLElement{
    
// }