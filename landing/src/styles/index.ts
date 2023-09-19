import styled, { css } from 'styled-components'

export const Flex = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spaces[3]};
  `,
)

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`
