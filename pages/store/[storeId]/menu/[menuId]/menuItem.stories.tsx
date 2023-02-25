import { Meta, Story } from "@storybook/react";
import MenuDetailsPage from "./index.page";

export default {
  title: "store/menu detail",
  component: MenuDetailsPage,
} as Meta;

const Template: Story = args => <MenuDetailsPage {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  nextRouter: {
    pathname: "/store/[storeId]/menu/[menuId]",
    asPath: "/store/1/menu/2",
    query: {
      storeId: "1",
      menuId: "2",
    },
  },
};
