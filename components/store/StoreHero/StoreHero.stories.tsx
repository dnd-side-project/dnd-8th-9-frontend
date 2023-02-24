import { Meta, Story } from "@storybook/react";
import StoreHero from "./StoreHero";

export default {
  title: "store/StoreHero",
  component: StoreHero,
} as Meta;

const Template: Story = args => (
  <div style={{ maxWidth: "480px" }}>
    <StoreHero {...args} />
  </div>
);

export const Default = Template.bind({});
