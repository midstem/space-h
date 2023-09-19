'use client'
import styled, { css } from 'styled-components'
import { FlexColumn } from 'src/styles'

export const HomeWrapper = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100svh;
    color: ${theme.colors.white[1000]};

    @media (min-width: ${theme.breakpoints.lg}) {
      flex-direction: row;
      gap: ${theme.spaces[1]};
    }
  `,
)

// LEFT COLUMN

export const LeftColumn = styled(FlexColumn)(
  ({ theme }) => css`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding-top: ${theme.spaces[8]};
  `,
)

export const MainHeader = styled.h1(
  ({ theme }) => css`
    text-align: center;
    padding: 0 ${theme.spaces[3]};
    margin: 0;
    font-size: ${theme.fontSizes[14]};
    font-weight: 500;

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes[20]};
    }
  `,
)

export const Description = styled.p(
  ({ theme }) => css`
    text-align: center;
    max-width: 500px;
    padding: ${theme.spaces[2]} ${theme.spaces[3]} 0;
    font-size: ${theme.fontSizes[5]};

    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes[8]};
    }
  `,
)

// RIGHT COLUMN

export const RightColumn = styled(FlexColumn)(
  ({ theme }) => css`
    flex: 1;
    justify-content: flex-end;
    max-width: none;
    min-height: 500px;
    background-image: url('/static/images/astronaut.png');
    background-position: 50% 35%;
    background-repeat: no-repeat;
    background-size: cover;

    @media (min-width: ${theme.breakpoints.lg}) {
      max-width: 50vw;
    }
  `,
)

export const Quote = styled(FlexColumn)(
  ({ theme }) => css`
    gap: ${theme.spaces[3]};
    max-width: 550px;
    margin-bottom: ${theme.spaces[8]};
    padding: 0 ${theme.spaces[6]};
    font-size: ${theme.fontSizes[14]};
  `,
)
