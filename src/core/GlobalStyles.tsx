import { createGlobalStyle, css } from 'styled-components'

import 'normalize.css'
import 'system-font-css'

const globalStyles = css`
  :root {
    --appbar-height: 70px;
  }
  html {
    box-sizing: border-box;
    font-size: calc(12px + .25vw);
  }
  body {
    font-family: system-ui,serif;
    background: rgba(246, 247, 250, 1);
  }
`

const GlobalStyles = createGlobalStyle`${globalStyles}`

export default GlobalStyles
