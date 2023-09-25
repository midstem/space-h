import 'styled-components'
import { BreakPoints, Colors, FontSizes, Spaces } from 'src/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: typeof BreakPoints
    fontSizes: typeof FontSizes
    colors: typeof Colors
    spaces: typeof Spaces
  }
}
