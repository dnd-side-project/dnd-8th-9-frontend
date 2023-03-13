import styled from "@emotion/styled";

export const Wrap = styled.div`
  position: relative;
`;

export const CarouselWrap = styled.div`
  width: 100%;
  height: 48.5rem;
`;

export const Main = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme["z-index"].storeContent};
  margin-top: 47rem;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 7px solid ${({ theme }) => theme.colors.white[200]};
  padding: 0 1.6rem;
`;

export const MainInfoSection = styled(Section)`
  padding: 3rem 1.6rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.white[100]};
  border-top-left-radius: 1.6rem;
  border-top-right-radius: 1.6rem;
`;
