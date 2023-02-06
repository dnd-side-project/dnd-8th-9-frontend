import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";

export const supportDeviceSize = 768;

const style = css`
  ${emotionReset}

  html {
    font-size: 62.5%;

    @media all and (max-width: ${supportDeviceSize}px) {
      font-size: 31.25%;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  button {
    border: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
  }

  input {
    border: none;
    outline: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
