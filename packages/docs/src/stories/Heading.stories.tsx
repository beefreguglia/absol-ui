import { StoryObj, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '@churrasco-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'text',
      description: 'Texto utilizado como exemplo',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
      description: 'Tamanhos utilizados para os cabeçalhos.',
      control: { type: 'select' },
    },
    as: {
      control: { type: null },
      description: 'Valor utilizado para alterar a tag padrão `h2` para outra',
    },
  },
  args: {
    children: 'Custom title',
  },
  parameters: {
    layout: 'centered',
  },
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2` mas podemos alterar isso utilizando a propriedade `as`',
      },
    },
  },
};
