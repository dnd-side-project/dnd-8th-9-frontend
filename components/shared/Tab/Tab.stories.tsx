import { css } from "@emotion/react";
import { Meta, Story } from "@storybook/react";
import { homeTab, storeTab } from "@/constants/tabs";
import Tab, { IProp } from "./Tab";

export default {
  title: "shared/Tab",
  component: Tab,
  argTypes: {},
} as Meta;

const Template: Story<IProp> = args => <Tab {...args} />;

export const SwipeableTab = Template.bind({});
SwipeableTab.args = {
  menuList: storeTab,
};

export const FixedTab = Template.bind({});
FixedTab.args = {
  menuList: homeTab,
};
