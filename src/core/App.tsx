import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { createTheme, StylesProvider, ThemeProvider as MUIThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as NewThemeProvider } from '@mui/styles'

import Layout from 'core/Layout'
import Routes from 'pages/Routes'
import GlobalStyles from './GlobalStyles'
import Modals from 'modals/Modals'
import Snackbar from 'core/Snackbar'

import { theme } from 'ui'
const mtheme = createTheme();

function App() {
  return (
    <Router>
      <NewThemeProvider theme={mtheme}>
        <ThemeProvider theme={theme}>
          <MUIThemeProvider theme={mtheme}>
            <StylesProvider injectFirst>
              <GlobalStyles />
              <Layout>
                <Routes />
              </Layout>
              <Snackbar />
              <Modals />
            </StylesProvider>
          </MUIThemeProvider>
        </ThemeProvider>
      </NewThemeProvider>
    </Router>
  )
}

export default App
