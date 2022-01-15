import {html, define} from 'may-it-be/index.js';
import {CongressProps, CongressActions} from './types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<CongressProps, CongressActions> = {
    config: {
        tagName: 'cotus-congress',
    }
};

const visualHints: VisualHints<CongressProps, CongressActions> = {
    propPresentationMap: {
        house: {
            tagName: 'cotus-house',
        },
        senate: {
            tagName: 'cotus-senate',
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

