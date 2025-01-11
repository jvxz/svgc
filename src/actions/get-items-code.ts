import * as pluginTypescript from 'prettier/parser-typescript';
import * as pluginEstree from "prettier/plugins/estree";
import * as prettier from 'prettier/standalone';

import { getSvgs, type Logo } from "./get-svgs";

const icons = (name: string, svg: string) => {
    return `
    ${name}: () => {
        return (
            ${svg}
        )
    },
    `
}

async function getItemsCode(items: Logo[]) {
    try {
        const data = await getSvgs(items);

        const code = await prettier.format(`
        const Icon = {
            ${data.map(item => icons(item.name.replace(/\s+/g, ''), item.svg.data)).join('\n')}
            }
            
            export { Icon };
            `, {
            parser: "typescript",
            plugins: [pluginTypescript, pluginEstree],
            semi: true,
            singleQuote: false,
            tabWidth: 2
        })

        return code
    } catch (error) {
        console.error("Error getting items code", error);
        return null;
    }
}

export { getItemsCode };
