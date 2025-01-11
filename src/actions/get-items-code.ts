"use server";
import * as pluginTypescript from "prettier/parser-typescript";
import * as pluginEstree from "prettier/plugins/estree";
import * as prettier from "prettier/standalone";

import { optimize } from "svgo";
import { type FormatSvgMode } from "./format-svg";
import { getSvgs, type Logo } from "./get-svgs";

async function getItemsCode(items: Logo[], mode: FormatSvgMode) {
    try {
        const data = await getSvgs(items);

        const formatted = await Promise.all(
            data.map(async (item) => {
                const optimized = optimize(item.svg, {
                    multipass: true,
                    plugins: [
                        {
                            name: "preset-default",
                            params: { overrides: { removeViewBox: false } },
                        },
                        {
                            name: "convertColors",
                            params: { currentColor: mode.retainBrandColors },
                        },
                    ],
                });
                return {
                    ...item,
                    svg: optimized.data,
                };
            }),
        );

        let code = `
      ${mode.addSizeProps ? 'import { type SVGProps } from "react";' : ""}

      const Icon = {
        ${formatted
                .map(
                    (item) =>
                        `${item.name.replace(/\s+/g, "")}: (${mode.addSizeProps
                            ? `{
              width = 64,
              height = 64,
              size = 64,
              ...props
            }: SVGProps<SVGSVGElement> & { size?: number }`
                            : ""
                        }) => {
              return (
                ${item.svg}
              )
            },`,
                )
                .join("\n")}
      }
      
      export { Icon };
    `;

        if (mode.addSizeProps)
            code = code
                .replace(/width="[0-9]+"/g, "width={size ?? width}")
                .replace(
                    /height="[0-9]+"/g,
                    `height={size ?? height}
          {...props}`,
                );

        const formattedCode = await prettier.format(code, {
            parser: "typescript",
            plugins: [pluginTypescript, pluginEstree],
            semi: true,
            singleQuote: false,
            tabWidth: 2,
        });
        return formattedCode;
    } catch (error) {
        console.error("Error getting items code", error);
        return null;
    }
}

export { getItemsCode };
