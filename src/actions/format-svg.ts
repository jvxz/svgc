import * as pluginHtml from "prettier/parser-html";
import * as pluginEstree from "prettier/plugins/estree";
import * as prettier from "prettier/standalone";

// @ts-nocheck
/* eslint-disable */

export type FormatSvgMode = {
    retainBrandColors?: boolean;
    addSizeProps?: boolean;
}

export async function formatSvg(svg: string) {
    try {
        const formattedCode = await prettier.format(svg, {
            parser: "html",
            plugins: [pluginHtml, pluginEstree] as any[],
            semi: true,
            singleQuote: false,
            tabWidth: 2,
        });
        return formattedCode;
    } catch (error) {
        throw new Error('Error formatting SVG', { cause: error });
    }
}