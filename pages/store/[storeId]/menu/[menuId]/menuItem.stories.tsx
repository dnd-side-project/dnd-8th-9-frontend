import { Meta, Story } from "@storybook/react";
import MenuDetailsPage from "./index.page";

export default {
  title: "store/menu detail",
  component: MenuDetailsPage,
} as Meta;

const Template: Story = args => <MenuDetailsPage {...args} />;

export const Default = Template.bind({});
