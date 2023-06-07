import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxContent, BoxProps, Text } from '@churrasco-ui/react';

export default {
  title: 'Surfaces/Box/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <BoxContent>
        <Text css={{ maxWidth: '500px' }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
          molestiae facere voluptatem animi quasi nihil quidem accusantium quod
          illum dicta sit voluptates illo sint, inventore asperiores minima nemo
          cupiditate reiciendis.
        </Text>
      </BoxContent>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente caixa para utilizar no sistema',
      },
    },

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
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
