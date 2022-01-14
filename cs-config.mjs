import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-senate',
        propDefaults: {
            noOfDemocrats: 49,
            noOfRepublicans: 49,
            noOfIndependents: 2,
        }
    }
};
const scaffold = {
    propPresentationMap: {
        noOfDemocrats: {},
        noOfRepublicans: {},
        noOfIndependents: {},
    }
};
const innerHTML = (new BaseScaffoldGenerator(beDefinitiveProps, scaffold)).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});
// export class cotusSenateController extends HTMLElement{
// }
