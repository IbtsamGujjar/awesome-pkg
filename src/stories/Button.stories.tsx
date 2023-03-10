import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/button/Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button />;

export const Primary = Template.bind({});
Primary.args = {};
