import { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps, Box } from '@churrasco-ui/react';

export default {
  title: 'Data Display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md'],
      defaultValue: 'md',
      description: 'Tamanhos utilizados para o avatar.',
      control: { type: 'select' },
    },
    alt: {
      description: 'Texto alternativo',
    },
    src: {
      description: 'String contendo link da imagem ou arquivo de imagem',
      control: { type: null },
    },
  },
  args: {
    src: 'https://reservas.seazone.com.br/media/6298f1e1e94569b8232c852f/md',
    alt: 'Logo do SAPRON',
    size: 'md',
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            backgroundColor: '$gray300',
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

export const Small: StoryObj<AvatarProps> = {
  args: {
    size: 'sm',
  },
};
