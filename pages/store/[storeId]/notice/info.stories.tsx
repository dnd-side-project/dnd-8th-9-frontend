import { Meta, Story } from "@storybook/react";
import InfoPage from ".";

export default {
  title: "store/info",
  component: InfoPage,
} as Meta;

const Template: Story = args => <InfoPage {...args} />;

export const Default = Template.bind({});
