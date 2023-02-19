import NoticePage from "@/pages/store/[storeId]/notice";
import { Meta, Story } from "@storybook/react";

export default {
  title: "store/notice",
  component: NoticePage,
} as Meta;

const Template: Story = args => <NoticePage {...args} />;

export const Default = Template.bind({});
