import { StoryObj, Meta } from '@storybook/react';
import { Box, Button, ButtonProps } from '@sapron-ui/react';

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      defaultValue: 'md',
      description: 'Tamanhos utilizados para alterar o tamanho do botão.',
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
      description: 'Variantes do botão',
      defaultValue: 'primary',
    },
    isFull: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Ocupar todo tamanho disponível em tela',
    },
    children: {
      description: 'Texto do botão',
    },
  },
  args: {
    children: 'Enviar',
    size: 'md',
    isFull: false,
    variant: 'primary',
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            width: '50vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '$gray100',
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
};

export const Full: StoryObj<ButtonProps> = {
  args: {
    isFull: true,
  },
};
