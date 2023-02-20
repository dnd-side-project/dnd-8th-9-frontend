import ReviewPage from "@/pages/store/[storeId]/review/index.page";
import { Meta, Story } from "@storybook/react";

export default {
  title: "store/review",
  component: ReviewPage,
} as Meta;

const Template: Story = args => <ReviewPage {...args} />;

export const Default = Template.bind({});
