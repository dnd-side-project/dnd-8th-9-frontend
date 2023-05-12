import Text from "@/components/shared/Text/Text";
import styled from "@emotion/styled";

export const HeroWrap = styled.div`
  width: 100%;
  height: 56rem;
  padding-bottom: 4.2rem;
  border-bottom: 0.6rem solid ${({ theme }) => theme.colors.blue[100]};
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 31rem;
  background: linear-gradient(0deg, #e4e4f8 11.86%, #e5e0ff 97.82%);
  padding-top: 4.2rem;
`;

export const HeroTitle = styled.div`
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  padding-inline: 2rem;
  column-gap: 2.3rem;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;

export const Title = styled(Text)`
  line-height: 140%;

  strong {
    font-size: inherit;
    color: ${({ theme }) => theme.colors.pink[800]};
  }
`;

export const Desc = styled(Text)`
  letter-spacing: -0.01em;
  line-height: 140%;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 13.5rem;
  height: 12.6rem;
  flex-shrink: 0;
`;

export const StoreWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.4rem;
  width: 100%;
  overflow-x: scroll;
  margin-top: 2.4rem;
  margin-bottom: 1.5rem;
  padding: 0 1.6rem;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;
