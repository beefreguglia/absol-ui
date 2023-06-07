import { StoryObj, Meta } from '@storybook/react';
import { Box, ScrollArea, ScrollAreaProps, Text } from '@sapron-ui/react';

export default {
  title: 'Navigation/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  args: {
    children: (
      <Text size="lg" css={{ width: '500px', padding: '$4' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        mollitia quisquam amet blanditiis eligendi harum officia, dolorum
        perspiciatis quia cupiditate quam ducimus. Nihil fuga aut necessitatibus
        minima enim dolorum architecto?
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        mollitia quisquam amet blanditiis eligendi harum officia, dolorum
        perspiciatis quia cupiditate quam ducimus. Nihil fuga aut necessitatibus
        minima enim dolorum architecto?
      </Text>
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
        story: 'Componente responsável por colocar scrolls estilizados',
      },
    },

    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            width: '500px',
            height: '200px',
            display: 'flex',
            backgroundColor: '$gray100',
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<ScrollAreaProps>;

export const Primary: StoryObj<ScrollAreaProps> = {};
