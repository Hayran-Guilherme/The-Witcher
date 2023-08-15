import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        backgroundButton : '#445454',
        redEmphasis: '#BD0919',
        textEmphasis: '#FFFFFF',
        textDefault: '#D9D9D9',
        gradient: 'linear-gradient(90deg, rgba(13,18,18,1) 70%, rgba(13,18,18,1) 70%, rgba(16,21,21,1) 100%)',
      }
    }
  },
  plugins: [],
}
export default config
