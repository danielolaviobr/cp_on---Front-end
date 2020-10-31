import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import CponLogo from '../assets/logo.svg'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="Logo">
        <CponLogo />
      </div>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
