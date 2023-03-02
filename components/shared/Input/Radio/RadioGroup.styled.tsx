import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
  margin-block: 1.6rem 2rem;
  min-height: 18.5rem;
  overflow-y: scroll;
`;

export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  position: relative;
  padding-left: 4rem;
  cursor: pointer;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  color: ${({ theme }) => theme.colors.grey[900]};
`;

export const CustomRadio = styled.span`
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  height: 2rem;
  width: 2rem;
  background-color: ${({ theme }) => theme.colors.grey[400]};
  border-radius: 50%;

  &::after {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${({ theme }) => theme.colors.grey[100]};
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export const RadioInput = styled.input`
  display: none;

  &:checked ~ ${CustomRadio} {
    background-color: ${({ theme }) => theme.colors.blue[700]};
  }
`;
