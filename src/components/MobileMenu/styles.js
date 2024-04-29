import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  z-index: 2;
  width: 100%;
  height: 100vh;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.dark_500};
  flex-direction: column;
  display: none;
  

  @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
  > div {
    padding: 0 2.3rem;
    display: flex;
    flex-direction: column;

    .sign-out {
      width: 100%;
      text-align: left;
      background-color: transparent;
      font-size: 1.5rem;
      border-bottom: 1px solid;
      border-bottom-color: ${({ theme }) => theme.colors.dark_1000};
      padding: 0.6rem;
      font-family: "Poppins", sans-serif;
      margin: 2rem auto;
    }

    > a {
      color: ${({ theme }) => theme.colors.light_300};
      font-size: 1.5rem;
      border-bottom: 1px solid;
      border-bottom-color: ${({ theme }) => theme.colors.dark_1000};
      padding: 0.6rem;
    }
  }

  > header {
    width: 100%;
    height: 7rem;
    background-color: ${({ theme }) => theme.colors.dark_700};
    align-items: center;
    display: flex;
    padding: 1.8rem;
    
    button {
      display: flex;
      background-color: transparent;
      font-size: 2rem;
      align-items: center;
      gap: 1rem;
    }
  }
`