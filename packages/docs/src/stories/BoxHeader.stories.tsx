import { StoryObj, Meta } from '@storybook/react';

import {
  BoxRoot,
  BoxContent,
  BoxHeader,
  BoxHeaderProps,
  Text,
  ScrollArea,
} from '@absol-ui/react';

export default {
  title: 'Surfaces/Box/BoxHeader',
  component: BoxHeader,
  tags: ['autodocs'],
  args: {
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipis icing elit.',
    children: (
      <BoxRoot>
        <BoxContent
          css={{ backgroundColor: '$neutralGray200', marginTop: '$3' }}
        >
          <Text>Elemento Filho do header</Text>
        </BoxContent>
      </BoxRoot>
    ),
  },
  argTypes: {
    description: {
      description: 'Descrição do conteúdo',
    },
    title: {
      description: 'Título do card',
    },
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
        story: 'Componente caixa com header',
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
            <BoxRoot hasShadow>
              {Story()}
              <BoxContent contents="header">
                <ScrollArea>
                  <Text
                    css={{
                      maxWidth: '98%',
                      maxHeight: '200px',
                    }}
                  >
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
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<BoxHeaderProps>;

export const Primary: StoryObj<BoxHeaderProps> = {};
