import { Navbar } from "@/components/navbar/Navbar";
import { Providers } from "@/components/Providers";
import "@/styles/globals.css";
import { type Metadata } from "next";
import {
  DM_Serif_Display,
  JetBrains_Mono,
  Radio_Canada_Big,
} from "next/font/google";

const radioCanadaBig = Radio_Canada_Big({
  subsets: ["latin"],
  variable: "--font-radio-canada-big",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet-brains-mono",
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
      className={`${radioCanadaBig.variable} ${dmSerifDisplay.variable} ${jetBrainsMono.variable}`}
    >
      <body className="flex h-screen flex-col">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
