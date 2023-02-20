import { Meta, Story } from "@storybook/react";
import ReviewPage from "./index.page";

export default {
  title: "store/review",
  component: ReviewPage,
} as Meta;

const Template: Story = args => <ReviewPage {...args} />;

export const Default = Template.bind({});
