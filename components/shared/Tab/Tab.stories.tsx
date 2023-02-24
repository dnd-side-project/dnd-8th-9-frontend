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
  type: "swipeable",
  menuList: storeTab,
  cssProp: css``,
};

export const FixedTab = Template.bind({});
FixedTab.args = {
  type: "fixed",
  menuList: homeTab,
  cssProp: css`
    --size: ${homeTab.length};
    --padding: 1.6rem;
  `,
};
