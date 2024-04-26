import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.footer`
  grid-area: footer;
  height: 4.8rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark_600};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7.68rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 0 1.68rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.62rem;

    h5 {
      color: ${({ theme }) => theme.colors.light_700};
      font-size: 1.5rem;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 1rem;
      }
    }
  }

  > p {
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 1rem;
    }
  }
`