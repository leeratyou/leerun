const theme = {
  unit: 'rem',
  gap: 1.5,
  fontFamily: 'Source sans',
  fontSize: {
    text: '1rem',
    sub: '0.8rem',
    smallSub: '0.6rem',
    heading1: 'calc(1.625rem + 1.6vw)',
    heading2: 'calc(1.375rem + 1.5vw)',
    heading3: 'calc(1.25rem + 1vw)',
    heading4: 'calc(1.135rem + .6vw)',
    heading5: 'calc(1.15rem + .2vw)',
    heading6: 'calc(1rem + .2vw)'
  },
  color: {
    base: '#222',
    text: '#333',
    background: 'rgba(246, 247, 250, 1)',
    darkBackground: 'rgba(37, 34, 74, 0.3)',
    notActiveWhite: '#8d8d8d',
    darkBlue: 'rgba(37, 34, 74, 1)',
    blue: '#3E50F7',
    red: '#F23D5D',
    green: '#25B380',
    purple: '#C271F4',
    orange: '#F2A73D'
    // error: '#ca2119',
    // warning: '#f5cdcd',
    // secondary: '#129ca6',
    // background: '#f1f4f4',
    // accent: '#195a63',
    // disable: '#cccccc',
    // link: '#2460c3',
    // white: '#ffffff',
    // red: '#c13636',
    // lightred: '#c1363633',
    // green: '#2f8256',
    // lightgreen: '#5aaf4b33',
    // back: '#cce2e1',
    // black: '#000000',
    // lightgray: '#e2e2e2',
    // grey: '#ebebeb',
    // blue: '#1f54ad',
    // pink: '#f5cdcd'
  },
  fonts: {

  },
  space(...args: any[]) {
    const result = (args.length ? [...args] : [1]).reduce((str, curr) => `${str} ${curr * theme.gap}rem`, '')
    return result
  },
  css: {
    centered: 'position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);',
    transition: 'all 300ms ease-in-out;',
  }
};

export default theme
