import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 12px;

      input, textarea, select {
        font-size: 16px;
      }
    }
  }

  ::-webkit-scrollbar {
    background: none;
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.tints_cake_100};
    border-radius: .8rem;
  }

  body {
    background-color: ${({ theme }) => theme.colors.dark_400};
    color: ${({ theme }) => theme.colors.light_300};
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
    font-family: "Roboto", sans-serif;
  }

  button, textarea, input {
    font-size: 1rem;
    outline: none;
    font-family: "Roboto", sans-serif;
    border: none;
    color: ${({ theme }) => theme.colors.light_300};
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter .3s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }
`