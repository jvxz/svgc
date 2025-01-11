'use server'
import isSvg from "is-svg";
import { optimize } from "svgo";
import { z } from 'zod';

const LogoSchema = z.array(
  z.object({
    name: z.string(),
    shortname: z.string(),
    url: z.string(),
    files: z.array(z.string())
  })
)

export type LogoList = z.infer<typeof LogoSchema>
export type Logo = LogoList[number]

export async function getAllSvgs(fetchOptions?: RequestInit) {
  try {
    const res = await fetch(
      "https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos.json",
      {
        ...fetchOptions,
        cache: "force-cache",
      },
    );
    const data: unknown = await res.json();
    const parsedData = LogoSchema.parse(data);
    return parsedData;
  } catch (error) {
    console.error(error)
  }
}

export async function getSvgs(name: LogoList) {
  const dataArray = await Promise.all(
    name.map(async (item) => {
      console.log(item.files[0])
      const res = await fetch(
        `https://zrevwgazrkablpkwsbfe.supabase.co/storage/v1/object/public/svgs/logos/${item.files[0]}`
      );

      const data = await res.text();
      if (isSvg(data)) {
        const optimized = optimize(data, {
          multipass: true,
        });
        return {
          name: item.name,
          svg: optimized.data,
        };
      }
      return {
        name: item.name,
        svg: data,
      };
    })
  );
  return dataArray;
}
