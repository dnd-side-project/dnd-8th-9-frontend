import styled from "@emotion/styled";
import { css, Theme } from "@emotion/react";

export const Container = styled.div`
  margin-top: 3.2rem;
`;

export const FormTitle = styled.div`
  padding: 1rem;
  height: 4.1rem;
  font-size: ${({ theme }) => theme.fontSizes[18]};
  font-weight: 600;
  line-height: 21px;
  text-align: center;
`;

export const Explanation = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray[400]};
  white-space: pre-line;
  margin-bottom: 6.8rem;
`;

export const Size = styled.div`
  border: 1px solid red;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Name = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.9rem;
  margin: 1.6rem 0;
`;

export const SizeList = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const SizeButton = css`
  border: 1px solid #e9e9e9;
`;

export const ClickedSizeButton = ({ colors }: Theme) => css`
  background-color: ${colors.black};
  color: ${colors.white[100]};
`;

export const DangdoBox = styled.div`
  margin-top: 4rem;
  border: 1px solid blue;
`;

export const DangdoComment = styled.div`
  width: 28rem;
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: 500;
  line-height: 1.7rem;
`;

export const Dangdo = styled.div`
  color: ${({ theme }) => theme.colors.black};
`;

export const Comment = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

// TODO: input styling

export const InputWrap = styled.div`
  margin-top: 1.2rem;

  input[type="range"] {
    overflow: hidden;
    height: 0.8rem;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    background: transparent;
    border-radius: 8px;
  }

  input[type="range"]:focus {
    outline: none;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.8rem;
    cursor: pointer;
    border-radius: 8px;
    background: #edeff8;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;

    margin-top: -5px;
    width: 20px;
    height: 20px;
    border-radius: 25px;
    background: #ff494f;
    cursor: pointer;
    box-shadow: -100vw 0 0 100vw #6f82c9;
  }

  /* input[type="range"] {
    height: 25px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type="range"]:focus {
    outline: none;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #edeff8;
    border-radius: 1px;
    border: 0px solid #000000;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000; 
    border: 1px solid #2497e3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  } */
  /* input[type="range"]:focus::-webkit-slider-runnable-track {
    background: #2497e3;
  } */
  /* input[type="range"]::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #000000;
    background: #2497e3;
    border-radius: 1px;
    border: 0px solid #000000;
  }
  input[type="range"]::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497e3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
  }
  input[type="range"]::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-fill-lower {
    background: #2497e3;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-fill-upper {
    background: #2497e3;
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  input[type="range"]::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497e3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
  }
  input[type="range"]:focus::-ms-fill-lower {
    background: #2497e3;
  }
  input[type="range"]:focus::-ms-fill-upper {
    background: #2497e3;
  } */
`;
