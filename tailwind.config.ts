import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-radio-canada-big)", ...fontFamily.sans],
        serif: ["var(--font-dm-serif-display)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
