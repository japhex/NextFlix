import React from 'react'
import App from 'next/app'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { flixTheme } from 'styled/themes/flix-theme'
import { GlobalStyles } from 'styled/global.styled'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Helmet>
          <title>NextFlix</title>
        </Helmet>
        <ThemeProvider theme={flixTheme}>
          <GlobalStyles />
          <header>NextFlix!</header>
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
export default MyApp
