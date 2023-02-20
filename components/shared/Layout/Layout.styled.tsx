import styled from "@emotion/styled";

export const Centering = styled.div`
  display: flex;
  justify-content: center;
`;

export const FixedWidth = styled.div`
  width: 480px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;
