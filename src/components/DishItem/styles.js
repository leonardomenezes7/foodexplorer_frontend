import styled from "styled-components";

export const Container = styled.span`
  display: flex;
  background-color: ${({ theme, isnew }) => isnew ? "transparent" : theme.colors.light_600};
  border: ${({ theme, isnew }) => isnew ? `2px dashed ${theme.colors.light_600}` : "none"};
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  align-items: center;

  input {
    background-color: transparent;
    width: 4.25rem;
  }

  button {
    background: transparent;
    display: flex;
    align-items: center;
  }
`