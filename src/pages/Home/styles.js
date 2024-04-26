import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 6.5rem auto 4.8rem;
  grid-template-areas: 
  "header"
  "content"
  "footer";

  > main {
    display: flex;
    flex-direction: column;
    padding: 0 7.75rem;
    overflow-y: auto;

    @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      padding: 0 1.5rem;
    }
    
    > .hero {
      display: flex;
      margin-top: 10.75rem;
      margin-bottom: 3.8rem;
      position: relative;
      background-color: ${({ theme }) => theme.colors.gradients_100};
      justify-content: flex-end;
      min-height: 16.25rem;
      align-items: center;
      border-radius: 0.5rem;

      @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
        margin-top: 2.75rem;
        min-height: 7.5rem;
      }

      img {
        position: absolute;
        left: -3rem;
        bottom: 0;

        @media (min-width: ${DEVICE_BREAKPOINTS.XS}) and (max-width: ${DEVICE_BREAKPOINTS.LG}) {
          height: 9.3rem;
          width: 11.93rem;
          left: -1rem;
        }
      }

      div {
        margin-right: 6.25rem;

        @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
          text-align: right;
          margin-right: 1rem;
        }

        h2 {
          font-size: 2.5rem;
          font-family: "Poppins", sans-serif;
          font-weight: 500;

          @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            font-size: 1.1rem;
          }
        }

        span {
          @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
            display: none;
          }
        }
      }
    }
  }
`

export const Dishes = styled.section`
  margin-bottom: 3.93rem ;
  font-family: "Poppins", sans-serif;

  > h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  > div {
    display: flex;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none ;
    }
  }
`