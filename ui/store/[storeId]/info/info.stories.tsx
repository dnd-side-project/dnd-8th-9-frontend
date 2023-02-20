import InfoPage from "@/pages/store/[storeId]/info/index.page";
import { Meta, Story } from "@storybook/react";

export default {
  title: "store/info",
  component: InfoPage,
} as Meta;

const Template: Story = args => <InfoPage {...args} />;

export const Default = Template.bind({});
