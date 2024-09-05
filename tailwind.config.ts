import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors:{
      primary: '#40189D',
      white: '#FFFFFF',
      background: '#F2F2F2',
      black: '#000000',
      gradientFrom: '#1F3D8E',
      gradientTo: '#3D76E4',
      gray: '#E5E7EB'
    }
  },
  plugins: [],
};
export default config;
