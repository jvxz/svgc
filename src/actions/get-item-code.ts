import { formatSvg } from "./format-svg";

const replacements = [
    // replace fill with currentColor
    [/fill="#(?:[A-Fa-f0-9]{3}){1,2}\b"/g, 'fill="currentColor"'],
    // remove xml declaration
    [/<\?xml version="[0-9]*\.[0-9]+" encoding="UTF-8"\?>/i, ''],
    // remove title tag
    [/<title>[A-Za-z\s]+<\/title>/i, '']
] as const;

async function getItemsCode(itemName: string[]) {
    try {
        const data = await Promise.all(itemName.map(async (item) => {
            const res = await fetch(`https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${item}`);
            const data = await res.text();
            return data;
        }))

        return data;

    } catch { throw new Error("Failed to get items code") }
}

async function getItemCode(itemName: string) {
    try {
        const res = await fetch(`https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${itemName}`);
        const data = await res.text();

        const optimizedData = replacements.reduce((acc, [pattern, replacement]) => {
            return acc.replace(pattern, replacement);
        }, data);

        const formattedData = await formatSvg(optimizedData);

        return formattedData;

    } catch { throw new Error("Failed to get items code") }
}

export { getItemCode, getItemsCode };
