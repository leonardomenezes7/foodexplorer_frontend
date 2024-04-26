import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.header`
  width: 100%;
  height: 6.5rem;
  background-color: ${({ theme }) => theme.colors.dark_600};
  grid-area: header;
  padding: 1.75rem 7.68rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0 1.75rem;
    justify-content: space-between;
  }

  > .sign-out {
    background-color: transparent;

    svg {
      font-size: 2rem;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }

  > .sign-out-desktop {
    background-color: transparent;
    font-size: 2rem;
    display: flex;
    align-items: center;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }

  > section {
    display: flex;
    flex-direction: column;
    text-align: right;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    }

    h4 {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.6rem;

      img {
        height: 1.8rem;
        width: 1.8rem;
      }
    }

    > span {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.colors.tints_cake_200};
    }
  }

  > div {
    width: 36rem;
    padding: 0rem 6.25rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }

  > a  {
    button {
      width: 13.5rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }

  > a {
    color: ${({ theme }) => theme.colors.light_100};
    
    svg {
      font-size: 2rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: none;
    }
  }
`