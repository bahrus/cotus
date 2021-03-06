import { html, define } from 'may-it-be/index.js';
import { BaseScaffoldGenerator } from 'may-it-be/BaseScaffold.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'cotus-judicial',
    }
};
const visualHints = {
    propPresentationMap: {
        scotus: {
            tagName: 'cotus-scotus',
            mayItBe: {
                beImporting: {
                    path: 'https://corslet.bahrus.workers.dev/?href=https%3A%2F%2Fwww.supremecourt.gov%2Fabout%2Fmembers_text.aspx&lhs=%3Cdiv+id%3D%22pagemaindiv%22+class%3D%22col-md-9%22%3E&rhs=%3Cscript&exclude_rhs=on&ts=2022-01-28T12%3A15%3A02.943Z&wrapper=%3Ccotus-scotus%3E%3Ctemplate+shadowroot%3Dopen%3E%7C%3C%2Ftemplate%3E%3C%2Fcotus-scotus%3E',
                    beBased: {
                        rules: [
                            {
                                selector: 'a',
                                attr: 'href',
                                "baseHref": "https://www.supremecourt.gov/about/"
                            }
                        ]
                    }
                }
            },
            innerHTML: html `
<template slot=header-sd>
    <style ${{
                beLoaded: {
                    fallback: '/style/common.css',
                    preloadRef: '/style/common.css',
                }
            }}></style>
    
</template>
<template slot=footer-sd>
    <a href=https://www.supremecourt.gov/about/members_text.aspx target=_blank>Source</a>
    <be-hive></be-hive>
</template>
`,
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
