import React from "react";
import { css, Theme } from "@emotion/react";
import { Meta, Story } from "@storybook/react";
import BookmarkIcon from "@/assets/icons/bookmark.svg";
import InstagramIcon from "@/assets/icons/instagram.svg";
import Button, { IProp } from "./Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<IProp> = args => <Button {...args} />;

export const TextSquareButton = Template.bind({});
TextSquareButton.args = {
  type: "button",
  label: "주문양식 복사하기",
  shape: "square",
  children: "복사하기",
  disabled: false,
  cssProp: ({ colors, fontSizes }: Theme) =>
    css`
      width: 100%;
      max-width: 48rem;
      color: ${colors.white};
      font-size: ${fontSizes[16]};
      background-color: ${colors.dark[500]};
    `,
};

export const TextRoundButton = Template.bind({});
TextRoundButton.parameters = {
  backgrounds: { default: "dark" },
};
TextRoundButton.args = {
  type: "button",
  label: "인기스토어",
  shape: "round",
  children: "인기스토어",
  disabled: false,
  cssProp: ({ colors, fontSizes }: Theme) =>
    css`
      color: ${colors.black};
      font-size: ${fontSizes[14]};
    `,
};

export const IconButton = Template.bind({});
IconButton.parameters = {
  backgrounds: { default: "dark" },
};
IconButton.args = {
  type: "button",
  label: "북마크",
  shape: "square",
  children: <BookmarkIcon height="20" width="20" className="icon" fill="none" stroke="#202020" />,
  disabled: false,
  cssProp: ({ colors }: Theme) =>
    css`
      width: 3.2rem;
      height: 3.2rem;
      color: ${colors.black};
      padding: 0;

      &:hover {
        .icon {
          fill: ${colors.primary};
          stroke: ${colors.primary};
        }
      }
    `,
};

export const IconTextButton = Template.bind({});
IconTextButton.args = {
  type: "button",
  label: "실시간 문의 및 응답",
  shape: "square",
  children: (
    // eslint-disable-next-line react/jsx-fragments
    <React.Fragment>
      <InstagramIcon />
      <p>실시간 문의 및 응답</p>
    </React.Fragment>
  ),
  disabled: false,
  cssProp: ({ colors, fontSizes }: Theme) =>
    css`
      width: 100%;
      max-width: 48rem;
      color: ${colors.dark[500]};
      font-size: ${fontSizes[12]};
      border: 1px solid ${colors.dark[500]};
      background-color: transparent;
      gap: 0.5rem;
    `,
};
