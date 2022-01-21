import {html, define} from 'may-it-be/index.js';
import {ExecutiveProps} from '../types';
import {MayItBe as mib, BeDefinitiveVirtualProps as def } from 'may-it-be/types';
import { BaseScaffoldGenerator,  VisualHints} from 'may-it-be/BaseScaffold.js';

const mode = process.argv[2] as '-js' | '-html';

const beDefinitiveProps: def<ExecutiveProps, {}> = {
    config:{
        tagName: 'cotus-executive',
    }
};

const visualHints: VisualHints<ExecutiveProps> = {
    propPresentationMap: {
        president: {
            name: 'POTUS',
            tagName: 'cotus-potus',
            ssrPath: './cotus-potus.html',
            style: {
                minHeight: '200px',
                minWidth: '425px',
                display: 'flex',
            },
            mayItBe: {
                beObservant: {
                    impeachmentCount: {
                        observeWinObj: 'appHistory',
                        on:'currentchange',
                        vft: 'current.getState|.union.congress.house.noOfPresidentialImpeachments',
                        translate: -4,
                    }
                }
            },
        },
        vicePresident: {
            name: 'Vice President',
            tagName: 'cotus-vice-president',
            ssrPath: './cotus-vice-president.html',
        }
    },
    fieldSets: {
        Elected: ['president', 'vicePresident'],
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
    globalStylePaths: ['https://unpkg.com/open-props/colors.min.css']
});