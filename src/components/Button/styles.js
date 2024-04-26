import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.tints_tomato_100};
  padding: 0.75rem 2rem;
  border-radius: 0.30rem;
  display: flex;
  align-items: center;
  justify-content: center;
`