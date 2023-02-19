import MenuDetailsPage from "@/pages/store/[storeId]/menu/[menuId]";
import { Meta, Story } from "@storybook/react";

export default {
  title: "store/menu detail",
  component: MenuDetailsPage,
} as Meta;

const Template: Story = args => <MenuDetailsPage {...args} />;

export const Default = Template.bind({});
