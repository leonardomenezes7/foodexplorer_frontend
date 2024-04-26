import styled from "styled-components";

export const Container = styled.div`
  height: 28.8rem;
  width: 19rem;
  background-color: ${({ theme }) => theme.colors.dark_300};
  border-radius: 0.5rem;
  margin-top: 1.40rem;
  display: flex;
  flex-direction: column;
  padding: 1rem 1.12rem;
  cursor: pointer;


  > .edit {
    align-self: flex-end;
    color: ${({ theme }) => theme.colors.light_300};
    
    svg {
      font-size: 1.5rem;
    }
  }

  > .details{
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
`