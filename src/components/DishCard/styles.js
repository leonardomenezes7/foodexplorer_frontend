import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 19rem;
  background-color: ${({ theme }) => theme.colors.dark_300};
  border-radius: 0.5rem;
  margin-top: 1.40rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.12rem;
  cursor: pointer;
  height: 28.8rem;

  > .edit {
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.light_300};
    
    svg {
      font-size: 1.5rem;
      z-index: 3;
    }
  }

  > .details {
    display: flex;
    flex-direction: column;
    word-break: break-all;

    img {
      height: 11rem;
      width: 11rem;
      margin: 0 auto;
      margin-top: 1.6rem;
      object-fit: cover;
      border-radius: 50%;
    }

    strong {
      margin: 0 auto;
      margin-top: 1rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.light_300};
    }

    small {
      font-size: 0.87rem;
      color: ${({ theme }) => theme.colors.light_400};
      margin: 1rem auto;
    }

    h4 {
      margin: 0 auto;
      color: ${({ theme }) => theme.colors.tints_cake_200};
      font-size: 2rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
  }

  > div {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin: 1rem 0;
   
    > div {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    button {
      width: 5.75rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: 20rem;
      }
    }

    svg, p {
      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        display: none;
      }
    }
  }
`