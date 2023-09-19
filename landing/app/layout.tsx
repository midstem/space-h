import StyledComponentsRegistry from 'lib/registry'
import Providers from 'app/providers'
import localFont from 'next/font/local'

const font = localFont({
  src: [
    {
      path: '../public/static/font/GTWalsheimPro-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/static/font/GTWalsheimPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/static/font/GTWalsheimPro-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/static/font/GTWalsheimPro-UltraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/static/font/GTWalsheimPro-Bold.woff2',
      weight: '600',
      style: 'bold',
    },
    {
      path: '../public/static/font/GTWalsheimPro-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/static/font/GTWalsheimPro-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: 'SpaceH',
  description: `SpaceH - the tool to keep all information about your team, in one single place`,
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  return (
    <html lang="en">
      <body className={font.className}>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
