import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import  Button  from '.';
import * as styles from "./style.module.scss"
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const TemplateBtn: ComponentStory<typeof Button> = (args) => <Button {...args}>template</Button>;

export const Primary = TemplateBtn.bind({});
Primary.args = {
}
export const Large = TemplateBtn.bind({});

Large.args = {
  size: "large",
  theme: "orange",
};