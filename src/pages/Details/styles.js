import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container= styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 6rem auto 4.81rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  > header {
    justify-content: space-between;

    .sign-out-desktop {
      display: none;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    padding: 0 7.68rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0 3.5rem;
    }

    a {
      margin-top: 2rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.colors.light_300};
      font-size: 1.5rem;
    }

    div {
      display: flex;
      margin-top: 2.6rem;
      gap: 3rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        flex-direction: column;
        text-align: center;
        align-items: center;
      }

      img {
        height: 24rem;
        width: 24rem;

        @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
          height: 20rem;
          width: 20rem;
        }
      }
    }
  }
`

export const Items = styled.section`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h2 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  > p {
    max-width: 42rem;
    font-size: 1.5rem;
    font-weight: 400;
  }

  > .ingredients  {
    display: flex;
    gap: 0.75rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;

    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      justify-content: center;
    }
  }

  > a {
    width: 12rem;
    margin-bottom: 1rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: auto;
    }
  }
`