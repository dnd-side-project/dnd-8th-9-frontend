import styled from "@emotion/styled";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const CarouselWrap = styled.div`
  width: 100%;
  height: 50rem;
`;

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 7px solid ${({ theme }) => theme.colors.white[200]};
  padding: 0 1.6rem;
`;

export const MainInfoSection = styled(Section)`
  padding: 3rem 1.6rem 1.4rem;
  /* border-top-left-radius: 2.4rem;
  border-top-right-radius: 2.4rem;
  position: absolute;
  width: 100%;
  bottom: -290px;
  z-index: 1; */
`;
