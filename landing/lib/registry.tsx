// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'

import React, { ReactNode, useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

export const StyledComponentRegistry = ({
  children,
}: {
  children: ReactNode
}): JSX.Element => {
  const [styleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styleSheet.getStyleElement()
    styleSheet.instance.clearTag()

    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

export default StyledComponentRegistry
