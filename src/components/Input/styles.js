import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark_900};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  

  > input {
    padding: 0.75rem;
    background-color: transparent;
    border: none;
    width: 100%;
  }
`