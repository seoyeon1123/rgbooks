import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        jumping: 'jumping 0.7s ease-out ',
      },
      keyframes: {
        jumping: {
          '0%': {
            transform: 'translateY(0)', // 처음 상태
          },
          '50%': {
            transform: 'translateY(-15px)', // 점프 효과 (위로)
          },
          '100%': {
            transform: 'translateY(0)', // 원위치
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        darkBlue: 'var(--darkBlue)',
        mediumBlue: 'var(--mediumBlue)',
        lightBlue: 'var(--lightBlue)',
      },
      screens: {
        xs: { max: '479px' },
        sm: { min: '480px', max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px' },
      },
    },
    fontFamily: {
      establish: ["'establishRetrosansOTF'", 'sans-serif'],
      LOTTERIADDAG: ['LOTTERIADDAG', 'sans-serif'],
      NEXON: ['NEXON Lv2 Gothic', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
