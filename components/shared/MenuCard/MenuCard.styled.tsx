import theme from "@/styles/theme";
import styled from "@emotion/styled";

export const Container = styled.div<{ isMenuPage: boolean }>`
  padding: 0.8rem 1.3rem;
  display: flex;
  column-gap: 1.2rem;
  position: relative;

  border: ${props => !props.isMenuPage && `1px solid ${theme.colors.white[500]}`};
  border-radius: ${props => !props.isMenuPage && `8px`};
  border-bottom: ${props => props.isMenuPage && `1px solid ${theme.colors.white[500]}`};
`;

export const IconWrap = styled.div`
  max-width: 3.2rem;
  max-height: 3.2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  background-color: ${theme.colors.white[100]};
  position: absolute;
  bottom: 13px;
  left: 45px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  justify-content: space-around;

  h3,
  span {
    font-weight: 600;
    font-size: ${theme.fontSizes[15]};
    color: ${theme.colors.black};
  }

  p {
    font-weight: 400;
    font-size: ${theme.fontSizes[14]};
    color: ${theme.colors.gray[200]};
  }

  span {
    color: ${theme.colors.navy[400]};
  }
`;
