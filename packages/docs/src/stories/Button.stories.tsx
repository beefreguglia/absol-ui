import { StoryObj, Meta } from '@storybook/react';
import { BoxContent, BoxRoot, Button, ButtonProps } from '@churrasco-ui/react';

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Desabilita o botão',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Variantes do botão',
      defaultValue: 'primary',
    },
    children: {
      description: 'Texto do botão',
    },
  },
  args: {
    children: 'Enviar',
    disabled: false,
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot>
          <BoxContent
            css={{
              backgroundColor: '$blue50',
              padding: '$4',
              minWidth: '200px',
            }}
          >
            {Story()}
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const PrimaryDisabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
};
