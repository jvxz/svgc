'use server'
import { optimize } from "svgo";

export type FormatSvgMode = {
    retainBrandColors?: boolean;
    addSizeProps?: boolean;
}

export async function formatSvg(svg: string, mode: FormatSvgMode) {
    const optimizedSvg = optimize(svg, {
        multipass: true,
        plugins: [
            { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
            { name: 'convertColors', params: { currentColor: mode.retainBrandColors } },
        ],
    });

    if (mode.addSizeProps) return optimizedSvg.data.replace(/height="[0-9]+"/g, "height={size ?? height}").replace(/width="[0-9]+"/g, "width={size ?? width}")
    return optimizedSvg.data
}