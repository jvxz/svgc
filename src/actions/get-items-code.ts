'use server'

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

const base = `
const Icon = {
    
}

export { Icon };
`;

async function getItemsCode(items: Logo[]) {
    const data = await getSvgs(items);

    return `
        const Icon = {
            ${data.map(item => icons(item.name, item.svg)).join('\n')}
        }

    export { Icon };
    `
}

export { getItemsCode };
