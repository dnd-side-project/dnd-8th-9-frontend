import { Meta, Story } from "@storybook/react";
import OrderTemplatePage from ".";

export default {
  title: "store/order",
  component: OrderTemplatePage,
} as Meta;

const Template: Story = args => <OrderTemplatePage {...args} />;

export const Default = Template.bind({});
