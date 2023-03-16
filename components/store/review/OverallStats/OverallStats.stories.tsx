import { Meta, Story } from "@storybook/react";
import { reviews } from "@/mocks/mockData/review";
import { IOverallStats } from "@/api/types/review";
import OverallStats from "./OverallStats";

export default {
  title: "OverallStats",
  component: OverallStats,
} as Meta;

const Template: Story<IOverallStats> = args => <OverallStats {...args} />;
const { rating, totalReviews, stats } = reviews.overallStats;
export const Default = Template.bind({});
Default.args = {
  rating,
  totalReviews,
  stats,
};
