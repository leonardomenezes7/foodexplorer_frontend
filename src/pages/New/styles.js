import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
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

     button {
      display: none;
    }
  }

  > main {
    padding: 0 7.68rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0 2rem;
    }

    a {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.light_300};
      margin-top: 2.5rem;
    }

    h2 {
      margin-top: 1.5rem;
      font-size: 2rem;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
    }
  }
`

export const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  > button {
    width: 10.75rem;
    margin-bottom: 10.75rem;
  }
`

export const Section = styled.section`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;

  @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 1rem;
      color: ${({ theme }) => theme.colors.light_400};
    }

    input {
      padding: 0.75rem 0.875rem;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.dark_800};
    }

    .large {
      width: 29rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: auto;
      }
    }

    select {
      width: 22.75rem;
      background-color: ${({ theme }) => theme.colors.dark_800};
      border: none;
      outline: none;
      color: ${({ theme }) => theme.colors.light_100};
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      padding: 0.75rem 0.875rem;
      border-radius: 0.5rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: auto;
      }
    }

    label {
      display: flex;
      position: relative;
      background-color: ${({ theme }) => theme.colors.dark_800};
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      align-items: center;
      gap: 0.5rem;
      width: 100%;

      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        right: 0;
      }
    }
  }
`

export const Ingredients = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    flex-direction: column;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
      color: ${({ theme }) => theme.colors.light_400};
    }
    
    div {
      display: flex;
      background-color: ${({ theme }) => theme.colors.dark_800};
      gap: 1rem;
      padding: 0.25rem 0.5rem;
      flex-wrap: wrap;
      border-radius: 0.5rem;
      width: 52rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: auto;
      }
    }

    .price {
      width: 15rem;
      background-color: ${({ theme }) => theme.colors.dark_800};
      padding: 0.75rem 0.875rem;
      border-radius: 0.5rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        width: auto;
      }
    }
  }
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  > span {
    color: ${({ theme }) => theme.colors.light_400};
    margin-bottom: 1rem;
  }

  > textarea {
    resize: none;
    width: 70rem;
    background-color: ${({ theme }) => theme.colors.dark_800};
    padding: 0.875rem;
    height: 10.75rem;
    border-radius: 0.5rem;

    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: auto;
    }
  }
`
