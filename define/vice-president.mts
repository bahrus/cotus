import {html, define} from 'may-it-be/index.js';
import {VicePresidentProps} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<VicePresidentProps, {}> = {
    config:{
        tagName: 'cotus-vice-president',
        propDefaults:{
            name: 'Kamala Harris',
            party: 'Democrat',
        }

    },
};

const visualHints: VisualHints<VicePresidentProps> = {
    stylePaths: [
        '/style/common.css'
    ],
    fieldSets: {
        'Summary': ['name', 'party'],

    }
};

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});