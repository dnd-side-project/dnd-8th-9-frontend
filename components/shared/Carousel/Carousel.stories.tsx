import { Meta, Story } from "@storybook/react";
import Carousel, { IProp } from "./Carousel";

export default {
  title: "Carousel",
  component: Carousel,
} as Meta;

const Template: Story<IProp> = args => <Carousel {...args} />;

const MediumImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2192&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2753&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
];

const LargeImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2192&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2753&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1618426703623-c1b335803e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1618426703623-c1b335803e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1618426703623-c1b335803e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1568827999250-3f6afff96e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
  },
];

export const Primary = Template.bind({});
Primary.args = {
  images: [],
};

export const Medium = Template.bind({});
Medium.args = {
  images: MediumImages,
};

export const Large = Template.bind({});
Large.args = {
  images: LargeImages,
};
