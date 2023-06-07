import { StoryObj, Meta } from '@storybook/react';

import {
  Box,
  BoxContent,
  BoxHeader,
  BoxHeaderProps,
  Text,
} from '@churrasco-ui/react';
import { X } from 'phosphor-react';

export default {
  title: 'Surfaces/Box/BoxHeader',
  component: BoxHeader,
  tags: ['autodocs'],
  args: {
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipis icing elit.',
    rightContent: undefined,
    baseline: false,
  },
  argTypes: {
    rightContent: {
      options: ['Text', 'Image'],
      mapping: {
        Text: <Text>Example</Text>,
        Image: <X />,
      },
      description: 'Componente que ficará do lado direito no header',
      defaultValue: 'Text',
    },
    baseline: {
      description:
        'Altera o align do container direito para baseline (Ideal para ícones)',
    },
    description: {
      description: 'Descrição do conteúdo',
    },
    title: {
      description: 'Título do card',
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
            height: '300px',
            display: 'flex',
          }}
        >
          {Story()}
          <BoxContent>
            <Text css={{ maxWidth: '500px' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              molestiae facere voluptatem animi quasi nihil quidem accusantium
              quod illum dicta sit voluptates illo sint, inventore asperiores
              minima nemo cupiditate reiciendis. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Aut molestiae facere voluptatem
              animi quasi nihil quidem accusantium quod illum dicta sit
              voluptates illo sint, inventore asperiores minima nemo cupiditate
              reiciendis. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Aut molestiae facere voluptatem animi quasi nihil quidem
              accusantium quod illum dicta sit voluptates illo sint, inventore
              asperiores minima nemo cupiditate reiciendis.
            </Text>
          </BoxContent>
        </Box>
      );
    },
  ],
} as Meta<BoxHeaderProps>;

export const Primary: StoryObj<BoxHeaderProps> = {};
