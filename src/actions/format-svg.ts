import * as pluginTypescript from "prettier/parser-typescript";
import * as pluginEstree from "prettier/plugins/estree";
import * as prettier from "prettier/standalone";

// @ts-nocheck
/* eslint-disable */

export type FormatSvgMode = {
    retainBrandColors?: boolean;
    addSizeProps?: boolean;
}

export async function formatSvg(svg: string) {
    const formattedCode = await prettier.format(svg, {
        parser: "typescript",
        plugins: [pluginTypescript, pluginEstree] as any[],
        semi: true,
        singleQuote: false,
        tabWidth: 2,
    });
    return formattedCode;
}