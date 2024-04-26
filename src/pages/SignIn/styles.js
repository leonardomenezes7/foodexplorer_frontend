import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 19.12rem;
  align-items: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
    gap: 4.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.18rem;

    h1 {
      font-size: 2.6rem;
      font-weight: bold;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 2.3rem;
      }
    }
  }
`

export const Form = styled.form`
  width: 29.75rem;
  background-color: ${({ theme }) => theme.colors.dark_700};
  border-radius: 1rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    background-color: transparent;
    padding: 1rem;
    width: 25rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 40rem;
  }

  > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2rem;
    margin: 0 auto;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      display: none;
    }
  }
 
  > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  > a {
    color: ${({ theme }) => theme.colors.light_100};
    margin: 0 auto;
  }
`

