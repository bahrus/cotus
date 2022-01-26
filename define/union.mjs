import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-union',
    }
};
const visualHints = {
    propPresentationMap: {
        congress: {
            name: 'Congress',
            tagName: 'cotus-congress',
            ssrPath: './cotus-congress.html',
            style: {
                minHeight: '700px',
                minWidth: '550px',
                display: 'flex',
            }
        },
        executive: {
            name: 'Executive',
            tagName: 'cotus-executive',
            ssrPath: './cotus-executive.html',
            style: {
                minHeight: '400px',
                minWidth: '550px',
                display: 'flex',
            }
        },
        judicial: {
            name: 'Judicial',
            tagName: 'cotus-judicial',
            ssrPath: './cotus-judicial.html',
            style: {
                minHeight: '400px',
                minWidth: '550px',
                display: 'flex',
            }
        }
    },
    stylePaths: [
        '/style/common.css',
    ]
};
const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});
