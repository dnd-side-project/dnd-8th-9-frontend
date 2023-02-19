import OrderTemplatePage from "@/pages/store/[storeId]/order";
import { Meta, Story } from "@storybook/react";

export default {
  title: "store/order",
  component: OrderTemplatePage,
} as Meta;

const Template: Story = args => <OrderTemplatePage {...args} />;

export const Default = Template.bind({});
