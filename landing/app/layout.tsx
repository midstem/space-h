import localFont from 'next/font/local'
import type { Metadata } from 'next'
import StyledComponentsRegistry from 'lib/registry'
import Providers from 'app/providers'
import { ChildrenProp } from 'src/types'

const fonts = localFont({
  src: [
    {
      path: '../public/static/fonts/GTWalsheimPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/GTWalsheimPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/GTWalsheimPro-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/GTWalsheimPro-UltraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/GTWalsheimPro-Bold.woff2',
      weight: '600',
      style: 'bold',
    },
    {
      path: '../public/static/fonts/GTWalsheimPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/GTWalsheimPro-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'SpaceH',
  description: `SpaceH - the tool to keep all information about your team, in one single place`,
}

const RootLayout = ({ children }: ChildrenProp): JSX.Element => {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
