import { css, Theme } from "@emotion/react";

export const tabType = {
  swipeable: css`
    width: 100%;
    overflow-x: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }

    li {
      min-width: 8rem;
    }
  `,
  fixed: css`
    max-width: 48rem;
    width: 100%;
    padding: 0 var(--padding);

    li {
      width: calc(100% / var(--size));
    }
  `,
};

export const tab = ({ colors, fontSizes }: Theme) => css`
  border-bottom: 1px solid ${colors.gray[100]};
  height: 4.8rem;
  display: flex;
  align-items: center;
  color: var(--color);
  font-size: ${fontSizes[16]};
  font-weight: 500;

  li,
  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  li {
    border-bottom: 2px solid transparent;
    &.isSelected {
      border-bottom: 2px solid var(--selected-color);
      font-weight: 700;
      color: var(--selected-color);
      transition: all 0.2s ease-in-out;

      button {
        color: ${colors.grey[900]};
        font-weight: 600;
      }
    }
  }

  button {
    font-size: ${fontSizes[14]};
    font-weight: 500;
    color: ${colors.grey[700]};
  }
`;
