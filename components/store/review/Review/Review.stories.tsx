import { Meta, Story } from "@storybook/react";
import { reviews } from "@/mocks/mockData/review";
import Review, { IProp } from "./Review";

export default {
  title: "Review",
  component: Review,
} as Meta;

const Template: Story<IProp> = args => <Review {...args} />;

export const Default = Template.bind({});
Default.args = {
  review: reviews[0],
};
