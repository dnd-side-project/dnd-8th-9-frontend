import { Meta, Story } from "@storybook/react";
import NoticePage from "./index.page";

export default {
  title: "store/notice",
  component: NoticePage,
} as Meta;

const Template: Story = args => <NoticePage {...args} />;

export const Default = Template.bind({});
