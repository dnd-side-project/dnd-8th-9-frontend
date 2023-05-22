import Button from "@/components/shared/Button/Button";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding-inline: 1.6rem;
`;

export const IconWrap = styled.div`
  transform: translate(-50%, 50%);
  position: absolute;
  top: 5vh;
  left: 50%;
  width: 30rem;
  height: 8.2rem;
`;

export const CakeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 9vh;
  transform: translateX(-50%);
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 12rem;
  aspect-ratio: 1/1;
  border-radius: 0.8rem;
  overflow: hidden;
  margin-bottom: 1.2rem;
`;

export const ReviewWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
  margin-top: 1rem;
`;

export const TextContent = styled.div`
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 23rem;
  row-gap: 0.8rem;
  text-align: center;

  p {
    line-height: 140%;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
  padding-inline: 1.6rem;
  position: absolute;
  left: 0;
  bottom: 6rem;
  width: 100%;
`;

export const ReviewButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.pink[800]};
  color: ${({ theme }) => theme.colors.grey[100]};
`;

export const HomeButton = styled(Button)`
  color: ${({ theme }) => theme.colors.grey[700]};
`;
