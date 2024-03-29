import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const BookmarkIconWrap = styled.button<{ location: "nav" | "page" | "card" }>`
  ${({ location, theme }) =>
    location === "card" &&
    css`
      max-width: 3.2rem;
      max-height: 3.2rem;
      width: 100%;
      aspect-ratio: 1/1;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.8rem;
      background-color: white;
      position: absolute;
      right: 0.6rem;
      bottom: 0.6rem;
      z-index: ${theme["z-index"].navbar};
      cursor: pointer;
    `}
`;
