import styled from "@emotion/styled";
import Text from "@/components/shared/Text/Text";
import Button from "@/components/shared/Button/Button";

export const Container = styled.div`
  margin-top: 3.2rem;
`;

export const FormTitle = styled(Text)`
  padding: 1rem;
  text-align: center;
`;

export const Explanation = styled(Text)`
  text-align: center;
  white-space: pre-line;
  line-height: 150%;
  margin-bottom: 4.9rem;
`;

export const Size = styled.div`
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 12rem;
  aspect-ratio: 1/1;
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const Name = styled(Text)`
  margin-block: 2rem;
`;

export const SizeList = styled.div`
  display: flex;
  column-gap: 0.8rem;
`;

export const SizeButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.grey[300]};
  border-radius: 2.4rem;
  font-size: ${({ theme }) => theme.fontSizes[15]};
  padding: 0.9rem 1.6rem;

  &.selected {
    background-color: ${({ theme }) => theme.colors.blue[700]};
    color: ${({ theme }) => theme.colors.grey[100]};
  }
`;

export const DangdoBox = styled.div`
  margin-top: 8vh;
`;

export const DangdoComment = styled.div`
  width: 28rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputContainer = styled.div<{ dangdo: number }>`
  margin-top: 1.6rem;
  position: relative;
  width: 100%;

  input[type="range"] {
    width: 100%;
    -webkit-appearance: none;
    height: 13px;
    border-radius: 6px;
    background: #f1f1f1;
    outline: none;
    padding: 0;
    margin: 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.blue[800]},
      ${({ theme }) => theme.colors.blue[800]} ${({ dangdo }) => `${dangdo}%`},
      ${({ theme }) => theme.colors.blue[200]} ${({ dangdo }) => `${dangdo}%`},
      ${({ theme }) => theme.colors.blue[200]} 100%
    );
  }

  /* custom thumb */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
    background: ${({ theme }) => theme.colors.blue[800]};
    border: ${({ theme }) => theme.colors.grey[100]} 5px solid;
    cursor: pointer;
    -webkit-transition: background 0.15s ease-in-out;
    transition: background 0.15s ease-in-out;
  }

  [type="range"]::-webkit-slider-thumb:hover,
  [type="range"]::-moz-range-thumb:hover {
    background: ${({ theme }) => theme.colors.blue[700]};
  }

  [type="range"]::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: 0;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.blue[800]};
    border: ${({ theme }) => theme.colors.grey[100]} 5px solid;
    cursor: pointer;
    -webkit-transition: background 0.15s ease-in-out;
    transition: background 0.15s ease-in-out;
  }

  input::-moz-focus-inner,
  input::-moz-focus-outer {
    border: 0;
  }
`;
