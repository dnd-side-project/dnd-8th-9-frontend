import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 47rem;
`;

export const CarouselWrap = styled.div`
  width: 100%;
  height: 50rem;
  position: absolute;
  top: 0;
  z-index: -99;
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
