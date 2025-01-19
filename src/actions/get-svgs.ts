import { type ItemOptions } from '@/lib/config';
import { z } from 'zod';
import { formatSvg } from './format-svg';

const LogoSchema = z.array(
  z.object({
    name: z.string(),
    shortname: z.string(),
    url: z.string(),
    files: z.array(z.string())
  })
)

export type ItemList = z.infer<typeof LogoSchema>
export type Item = ItemList[number]

export async function getAllSvgs(fetchOptions?: RequestInit) {
  try {
    const res = await fetch(
      `/icons.json`,
      fetchOptions
    );

    const data: unknown = await res.json();

    return LogoSchema.parse(data);
  } catch (error) {
    console.error('Error fetching SVGs:', error);
    return undefined;
  }
}

export async function getSvgData(name: string | undefined, options: ItemOptions | undefined) {
  try {
    if (!name) return undefined;

    const res = await fetch(
      `https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${name}`
    );

    let data = await res.text();

    if (!options?.persistBrandColors) data = persistBrandColors(data);

    const formattedData = await formatSvg(data);

    return formattedData;
  } catch (error) {
    console.error('Error fetching SVG:', error);
    return undefined;
  }
}

function persistBrandColors(data: string) {


  return data.replace(/fill="[^"]*"/g, 'fill="currentColor"');
}