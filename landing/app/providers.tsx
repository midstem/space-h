// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'

import { ThemeProvider } from 'styled-components'
import React from 'react'

import { ChildrenProp } from 'src/types'
import theme from 'src/theme'

import GlobalStyles from 'src/styles/GlobalStyle'

const Providers = ({ children }: ChildrenProp): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default Providers
