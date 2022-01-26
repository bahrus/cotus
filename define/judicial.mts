import {html, define} from 'may-it-be/index.js';
import {JudicialProps, JudicialActions} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<JudicialProps, JudicialActions> = {
    config: {
        tagName: 'cotus-judicial',
    }
}

const visualHints: VisualHints<JudicialProps, JudicialActions> = {
    propPresentationMap: {
        supremeCourt:{
            tagName: 'cotus-supreme-court',
            ssrPath: './cotus-supreme-court.html',
        }
    }
};

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
    globalStylePaths: ['https://unpkg.com/open-props/colors.min.css']
});