import { css, SerializedStyles, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { numberToRem } from "@/utils/util";
import Text from "../Text/Text";

interface IVariant {
  [key: string]: SerializedStyles;
}

type IContentType = "menuDouble" | "menuSingle" | "storeDouble" | "storeSingle" | "reviewDouble";

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 0.8rem;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export const Container = styled.div<{
  dir: "row" | "col";
  gap: number;
  imgWidth: number;
  imgHeight: number;
}>`
  display: flex;
  align-items: ${({ dir }) => dir === "row" && "center"};
  flex-direction: ${({ dir }) => (dir === "row" ? "row" : "column")};
  gap: ${({ gap }) => numberToRem(gap)};
  width: ${({ dir, imgWidth }) => (dir === "col" ? numberToRem(imgWidth) : "100%")};
  height: ${({ dir, imgHeight }) => (dir === "row" ? numberToRem(imgHeight) : "auto")};

  ${ImageWrap} {
    max-width: ${({ imgWidth }) => numberToRem(imgWidth)};
    height: ${({ imgHeight }) => numberToRem(imgHeight)};
  }
`;

export const Store = styled(Text)``;
export const Menu = styled(Text)``;
export const Price = styled(Text)``;
export const Location = styled(Text)``;

export const Desc = styled(Text)`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: keep-all;
`;

export const CategoryWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;

  :first-of-type::after {
    content: "";
    display: inline-block;
    height: 0.8rem;
    margin: 0 0.6rem;
    background-color: ${({ theme }) => theme.colors.grey[900]};
  }
`;

export const Review = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.8rem;
`;

export const ReviewImageWrap = styled(ImageWrap)`
  width: 20rem;
  height: 14.8rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  aspect-ratio: auto;
`;

export const ReviewContent = styled.div`
  display: flex;
  width: inherit;
  min-height: 8.5rem;
  column-gap: 0.4rem;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  .icon {
    min-width: 1rem;
  }
`;

export const ReviewText = styled(Text)`
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-break: keep-all;
  line-height: 140%;
`;

export const variantCSS: IVariant = {
  menuDouble: css`
    ${Store} {
      margin-bottom: 0.4rem;
    }

    ${Menu} {
      margin-bottom: 1rem;
    }

    ${Price} {
      margin-bottom: 0.8rem;
    }
  `,
  menuSingle: css`
    ${Menu} {
      margin-bottom: 0.8rem;
    }

    ${Price} {
      margin-top: 1.6rem;
    }
  `,
  storeSingle: css`
    ${Store} {
      margin-bottom: 0.8rem;
    }

    ${Review} {
      margin-bottom: 0.8rem;
    }

    ${Price} {
      margin-bottom: 1rem;
    }

    ${CategoryWrap} {
      margin-top: 0.7rem;
    }
  `,
  storeDouble: css`
    ${Store} {
      margin-bottom: 0.6rem;
    }

    ${Location} {
      margin-bottom: 0.8rem;
    }

    ${CategoryWrap} {
      margin-bottom: 1.2rem;
    }

    ${Price} {
      margin-bottom: 1rem;
    }
  `,
  reviewDouble: css`
    ${Review} {
      margin: 0.8rem 0;
    }

    ${InfoWrap} {
      margin-bottom: 0.8rem;
    }
  `,
};

export const ContentWrap = styled.div<{ type: IContentType }>`
  display: flex;
  flex-direction: column;
  ${({ type }) => variantCSS[type]};
`;

export const storeDoubleCss = ({ colors }: Theme) => css`
  border: 1px solid ${colors.grey[300]};
  border-radius: 0.8rem;
  margin-bottom: 1.6rem;

  ${ContentWrap} {
    padding: 0 1.6rem 1.6rem;
  }
`;
