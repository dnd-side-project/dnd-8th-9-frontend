import { Meta, Story } from "@storybook/react";
import { reviews } from "@/mocks/mockData/review";
import Review, { IReview } from "./Review";

export default {
  title: "Review",
  component: Review,
} as Meta;

const Template: Story<IReview> = args => <Review {...args} />;

export const Default = Template.bind({});
Default.args = {
  review: reviews.reviewList[0],
};
