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
            mayItBe: {
                beImporting: {
                    path: './cotus-congress.html'
                }
            },
            style: {
                minHeight: '700px',
                minWidth: '550px',
                display: 'flex',
            }
        },
        executive: {
            name: 'Executive',
            tagName: 'cotus-executive',
            mayItBe: {
                beImporting: {
                    path: './cotus-executive.html'
                }
            },
            style: {
                minHeight: '400px',
                minWidth: '550px',
                display: 'flex',
            }
        },
        judicial: {
            name: 'Judicial',
            tagName: 'cotus-judicial',
            mayItBe: {
                beImporting: {
                    path: './cotus-judicial.html'
                }
            },
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
}

const innerHTML = BaseScaffoldGenerator.generateFrom(beDefinitiveProps, visualHints).html;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,

});