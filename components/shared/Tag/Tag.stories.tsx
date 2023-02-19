import React from "react";
import { css, Theme } from "@emotion/react";
import { Meta, Story } from "@storybook/react";
import DeliverIcon from "@/assets/icons/delivery.svg";
import StoreIcon from "@/assets/icons/store.svg";
import Tag, { IProp } from "./Tag";

export default {
  title: "shared/Tag",
  component: Tag,
  argTypes: {},
} as Meta;

const Template: Story<IProp> = args => (
  <div style={{ zoom: 3.3 }}>
    <Tag {...args} />
  </div>
);

export const SquareTag = Template.bind({});
SquareTag.args = {
  type: "square",
  label: "vip",
  children: "단골",
};

export const DeliveryIconTag = Template.bind({});
DeliveryIconTag.args = {
  type: "icon",
  label: "deliver available",
  children: (
    <>
      <DeliverIcon stroke="white" stroke-width="1.2" width="20" height="20" fill="transparent" />
      택배
    </>
  ),
};

export const PickupIconTag = Template.bind({});
PickupIconTag.args = {
  type: "icon",
  label: "pickup available",
  children: (
    <>
      <StoreIcon stroke="white" stroke-width="1.2" width="20" height="20" fill="transparent" />
      픽업
    </>
  ),
};

export const SingleTag = Template.bind({});
SingleTag.args = {
  type: "single",
  label: "delicious",
  children: "맛있어요",
};

export const DoubleTag = Template.bind({});
DoubleTag.args = {
  type: "double",
  label: "delicious votes",
  children: (
    <>
      맛있어요
      <span>12</span>
    </>
  ),
};
