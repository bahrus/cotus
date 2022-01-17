import {html, define} from 'may-it-be/index.js';
import {UnionProps, UnionActions} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<UnionProps, UnionActions> = {
    config: {
        tagName: 'cotus-union',
    }
};

const visualHints: VisualHints<UnionProps, UnionActions> = {
    propPresentationMap: {
        congress: {
            name: 'Congress',
            tagName: 'cotus-congress',
            ssrPath: './cotus-congress.html',
            style: {
                minHeight: '400px',
                display: 'flex',
            }
        },
        executive: {
            name: 'Executive',
            tagName: 'cotus-executive',
            ssrPath: './cotus-executive.html',
            style: {
                minHeight: '400px',
                display: 'flex',
            }
        },
    }
}

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,

});