import isSvg from "is-svg";
import { z } from 'zod';

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

export async function getSvgs(name: ItemList) {
  const dataArray = await Promise.all(
    name.map(async (item) => {
      const res = await fetch(
        `https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${item.files[0]}`
      );

      const data = await res.text();

      if (isSvg(data)) {
        const name = item.name === ".NET" ? "DotNet" : item.name === "100tb" ? "OneHundredTB" : item.name === "500px" ? "FiveHundredPx" : item.name

        return {
          name,
          svg: data,
        };
      }
      throw new Error("Invalid SVG")
    })
  );
  return dataArray;
}

