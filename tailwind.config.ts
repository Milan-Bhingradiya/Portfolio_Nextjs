import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(to right, blue, green)',
        
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        backgroundColor: {
        'primary': '#191C2B',
        'primary2': '#2B3049',
        'newprimary':'#14161A',
        'newprimary2':'#60A5FA',
        'custom-blue': '#3490dc',
      },
      textColor: {
        'primary': '#191C2B', // Replace with your desired color code
      },
      screens: {
        'xs': '400px',    // Custom extra small screen
        'sm': '640px',    // Default small screen
        'md': '768px',    // Default medium screen
        'lg': '1024px',   // Default large screen
        'xl': '1280px',   // Default extra large screen
        '2xl': '1440px',  // Custom extra large screen
      },
    },
  },
  plugins: [],
}
export default config

