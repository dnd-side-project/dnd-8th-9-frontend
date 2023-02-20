import { Meta, Story } from "@storybook/react";
import { storeHandler } from "@/mocks/handlers/store";
import MenuPage from "./index.page";

export default {
  title: "store/menu",
  component: MenuPage,
} as Meta;

const Template: Story = args => <MenuPage {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  msw: {
    handlers: [storeHandler],
  },
};
