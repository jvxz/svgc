import { DisplayNavbar } from "@/components/index/DisplayNavbar";
import { Navbar } from "@/components/navbar/Navbar";
import { Providers } from "@/components/Providers";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { SidebarSearch } from "@/components/sidebar/SidebarSearch";
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
          <div className="flex h-16 border-b border-border">
            <div className="flex h-full min-w-[20%] items-center justify-center border-r border-border px-4">
              <SidebarSearch />
            </div>
            <div className="flex h-full flex-1 items-center justify-center px-4">
              <DisplayNavbar />
            </div>
          </div>
          <main className="flex flex-1 overflow-y-auto">
            <Sidebar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
