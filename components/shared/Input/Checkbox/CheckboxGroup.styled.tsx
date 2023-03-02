import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  margin-block: 1.6rem 2rem;
  min-height: 18.5rem;
  overflow-y: scroll;
`;

export const Wrap = styled.div`
  height: 2.4rem;
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  label {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes[14]};
    color: ${({ theme }) => theme.colors.grey[900]};
  }
`;

export const CheckboxInput = styled.input`
  width: 2rem;
  height: 2rem;
  color: white;
  vertical-align: middle;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.grey[400]};
  transition: background 300ms;
  cursor: pointer;

  &::before {
    content: "";
    color: transparent;
    display: block;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    border: 0;
    background-color: transparent;
    background-size: cover;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E %3Cpath d='M15.88 8.29L10 14.17l-1.88-1.88a.996.996 0 1 0-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 0 0 0-1.41c-.39-.39-1.03-.39-1.42 0z' fill='%23fff'/%3E %3C/svg%3E");
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.blue[800]};
  }
`;
