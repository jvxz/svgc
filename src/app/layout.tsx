import "@/styles/globals.css";
import { Radio_Canada_Big, DM_Serif_Display } from "next/font/google";
import { type Metadata } from "next";
import Providers from "@/components/Providers";

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  variable: "--font-radio-canada-big",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif-display",
});

export const metadata: Metadata = {
  title: "svgc – a simple solution for brand logos",
  description: "a simple solution for brand logos",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${radioCanadaBig.variable} ${dmSerifDisplay.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
