module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        hover: 'var(--hover)',
        'hover-1': 'var(--hover-1)',
        'hover-2': 'var(--hover-2)',
        'accents-0': 'var(--accents-0)',
        'accents-1': 'var(--accents-1)',
        'accents-2': 'var(--accents-2)',
        'accents-3': 'var(--accents-3)',
        'accents-4': 'var(--accents-4)',
        'accents-5': 'var(--accents-5)',
        'accents-6': 'var(--accents-6)',
        'accents-7': 'var(--accents-7)',
        'accents-8': 'var(--accents-8)',
        'accents-9': 'var(--accents-9)',
        violet: 'var(--violet)',
        'violet-light': 'var(--violet-light)',
        pink: 'var(--pink)',
        cyan: 'var(--cyan)',
        blue: 'var(--blue)',
        green: 'var(--green)',
        red: 'var(--red)',
      },
      textColor: {
        base: 'var(--text-base)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      boxShadow: {
        'outline-2': '0 0 0 2px var(--accents-2)',
        'menu-light':
          'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;',
        magical:
          'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
      },
      screens: {
        xs: { min: '320px', max: '639px' },
      },
    },
    fontFamily: {
      body: ['"Poppins"', 'sans-serif'],
    },
    keyframes: {
      slideLeft: {
        '0%': { transform: 'translateX(20rem)' },
        '100%': { transform: 'translateX(0rem)' },
      },
      slideRight: {
        '0%': { transform: 'translateX(0rem)' },
        '100%': { transform: 'translateX(20rem)' },
      },
    },
    animation: {
      slideLeft: 'slideLeft 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      slideRight:
        'slideRight 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
