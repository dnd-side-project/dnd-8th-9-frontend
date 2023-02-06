import { Meta, Story } from "@storybook/react";
import MenuPage from ".";

export default {
  title: "store/menu",
  component: MenuPage,
} as Meta;

const Template: Story = args => <MenuPage {...args} />;

export const Default = Template.bind({});
