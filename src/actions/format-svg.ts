'use server'
import { optimize } from "svgo";

export async function formatSvg(svg: string) {
    return optimize(svg, {
        multipass: true,
    });
}