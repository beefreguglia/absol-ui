import { StoryObj, Meta } from '@storybook/react';

import {
  BoxRoot,
  BoxContent,
  BoxFooter,
  BoxFooterProps,
  Text,
  Button,
  ScrollArea,
} from '@churrasco-ui/react';

export default {
  title: 'Surfaces/Box/BoxFooter',
  component: BoxFooter,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Button variant="secondary">Cancelar</Button>
        <Button>Próximo</Button>
      </>
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
        story: 'Componente caixa com Footer',
      },
    },

    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot>
          <BoxContent
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '$blue50',
              padding: '$4',
            }}
          >
            <BoxRoot>
              <BoxContent contents="footer">
                <ScrollArea>
                  <Text css={{ width: '98%', maxHeight: '200px' }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                    accusantium quod illum dicta sit voluptates illo sint,
                    inventore asperiores minima nemo cupiditate reiciendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                    accusantium quod illum dicta sit voluptates illo sint,
                    inventore asperiores minima nemo cupiditate reiciendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                    molestiae facere voluptatem animi quasi nihil quidem
                    accusantium quod illum dicta sit voluptates illo sint,
                    inventore asperiores minima nemo cupiditate reiciendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                    accusantium quod illum dicta sit voluptates illo sint,
                    inventore asperiores minima nemo cupiditate reiciendis.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut molestiae facere voluptatem animi quasi nihil quidem
                  </Text>
                </ScrollArea>
              </BoxContent>
              {Story()}
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<BoxFooterProps>;

export const Primary: StoryObj<BoxFooterProps> = {};
