import {html, define} from 'may-it-be/index.js';
import {PresidentProps} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<PresidentProps, {}> = {
    config:{
        tagName: 'cotus-potus',
        propDefaults:{
            impeachmentCount: 0,
            name: 'Joe Biden',
            party: 'Democrat',
        }
    },
};

const visualHints: VisualHints<PresidentProps> = {
    stylePaths: [
        '/style/common.css'
    ],
};

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, {}).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});