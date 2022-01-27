import { define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-scotus',
    }
};
const visualHints = {
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
