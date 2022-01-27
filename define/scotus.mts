import {html, define} from 'may-it-be/index.js';
import {ScotusProps, ScotusActions} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<ScotusProps, ScotusActions> = {
    config: {
        tagName: 'cotus-scotus',

    }
}

const visualHints: VisualHints<ScotusProps, ScotusActions> = {
    mayItBe: {
        beReformable: {
            action: 'https://www.supremecourt.gov/about/members_text.aspx',
            path: [],
            autoSubmit: true,
            as: 'text'
        }
    }
};

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    dependencies: [
        'be-reformable@0.0.27/be-reformable.js',
    ],
    encodeAndWrite: console.log,
    globalStylePaths: ['https://unpkg.com/open-props/colors.min.css']
});