import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { Props } from '.';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Example/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const TemplateBtn: ComponentStory<typeof Button> = (args: Props) => (
    <Button {...args}>로그인</Button>
);

export const Primary = TemplateBtn.bind({});
Primary.args = {
    theme: 'gray',
};
export const Large = TemplateBtn.bind({});
Large.args = {
    size: 'large',
    theme: 'gray',
};
export const Small = TemplateBtn.bind({});
Small.args = {
    size: 'small',
    theme: 'gray',
};
