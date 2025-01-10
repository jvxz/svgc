'use server'
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
    const res = await fetch("https://github.com/gilbarbara/logos/raw/refs/heads/main/logos.json", {
      ...fetchOptions,
    })
    const data: unknown = await res.json()
    const parsedData = LogoSchema.parse(data)
    return parsedData
  } catch (error) {
    console.error(error)
  }
}