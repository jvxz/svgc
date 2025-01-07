'use server'
import { z } from 'zod'
import { optimize } from 'svgo';


const themeOptionsSchema = z.object({
  light: z.string(),
  dark: z.string()
})

const iSVGSchema = z.object({
  id: z.number(),
  title: z.string(),
  category: z.union([z.string(), z.array(z.string())]),
  route: z.union([z.string(), themeOptionsSchema]),
  wordmark: z.union([z.string(), themeOptionsSchema]).optional(),
  url: z.string()
})

const iSVGListSchema = z.array(iSVGSchema)

export type iSVG = z.infer<typeof iSVGSchema>
export type iSVGList = z.infer<typeof iSVGListSchema>

export async function getAllSvgs() {
  try {
    const res = await fetch("https://api.svgl.app", {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data: unknown = await res.json()
    const parsedData = iSVGListSchema.parse(data)
    return parsedData
  } catch (error) {
    console.error(error)
  }
}

export async function getSVG(search: string) {
  try {
    const res = await fetch(`https://api.svgl.app?search=${search}`, {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data: unknown = await res.json()
    const parsedData = iSVGListSchema.parse(data)
    if (!parsedData[0]) throw new Error('No data found')

    const svgIsColored = typeof parsedData[0].route === 'string' ? false : true

    const svgUrl = typeof parsedData[0].route === 'string' ? parsedData[0].route : parsedData[0].route.light;
    const svgRes = await fetch(svgUrl);
    const svgContent = await svgRes.text();

    const optimizedSvg = optimize(svgContent)

    const svg = svgIsColored ? optimizedSvg.data.replace(/fill="#[A-Fa-f0-9]{3,6}"/g, 'fill="currentColor"') : optimizedSvg.data

    return {
      svg,
      title: parsedData[0].title,
      category: parsedData[0].category,
      route: parsedData[0].route
    }
  } catch (error) {
    console.error(error)
  }
}