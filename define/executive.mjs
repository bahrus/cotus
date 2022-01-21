import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-executive',
    }
};
const visualHints = {
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
                        on: 'currentchange',
                        vft: 'current.getState|.union.congress.house.noOfPresidentialImpeachments',
                        translate: -4,
                    }
                }
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
    globalStylePaths: ['https://unpkg.com/open-props/colors.min.css']
});
