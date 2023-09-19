import * as styled from 'styled-components'

const GlobalStyle = styled.createGlobalStyle(
  ({ theme }) => styled.css`
    * {
      box-sizing: border-box;
    }
    body {
      background-color: ${theme.colors.black[1000]};
      font-family:
        'Sora',
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Open Sans',
        'Helvetica Neue',
        sans-serif;
      margin: 0;
      overflow-x: hidden;
    }
    p,
    h1,
    ul {
      margin: 0;
      padding: 0;
    }

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  `,
)

export default GlobalStyle
