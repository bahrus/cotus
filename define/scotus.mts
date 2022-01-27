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
//https://corslet.bahrus.workers.dev/?href=https%3A%2F%2Fwww.supremecourt.gov%2Fabout%2Fmembers_text.aspx&between=%3Cdiv+id%3D%22ctl00_ctl00_MainEditable_mainContent_RadEditor1%22%3E%3Cscript&ts=2022-01-27T12%3A43%3A08.593Z&wrapper=%3Cdiv%3E%7C%3C%2Fdiv%3E&ua=

const visualHints: VisualHints<ScotusProps, ScotusActions> = {
    mayItBe: {
        beReformable: {
            action: 'https://corslet.bahrus.workers.dev/?href=https%3A%2F%2Fwww.supremecourt.gov%2Fabout%2Fmembers_text.aspx&between=%3Cdiv+id%3D%22ctl00_ctl00_MainEditable_mainContent_RadEditor1%22%3E%3Cscript&ts=2022-01-27T12%3A43%3A08.593Z&wrapper=%3Cdiv%3E%7C%3C%2Fdiv%3E&ua=',
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