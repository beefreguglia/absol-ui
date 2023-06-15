import { StoryObj, Meta } from '@storybook/react';
import {
  BoxContent,
  BoxRoot,
  Button,
  Modal,
  ModalProps,
  ModalProvider,
  ModalTrigger,
  Text,
} from '@absol-ui/react';

export default {
  title: 'Overlay/Modal/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    children: (
      <BoxRoot >
        <BoxContent css={{ padding: '$4', height: '100%' }}>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            molestiae facere voluptatem animi quasi nihil quidem accusantium
            quod illum dicta sit voluptates illo sint, inventore asperiores
            minima nemo cupiditate reiciendis. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Aut molestiae facere voluptatem animi
            quasi nihil quidem accusantium quod illum dicta sit voluptates illo
            sint,
          </Text>
        </BoxContent>
      </BoxRoot>
    ),
    size: 'sm',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho',
    },
    size: {
      options: ['sm', 'md', 'lg', 'full'],
      control: {
        type: 'select',
      },
      description: 'Tamanho do modal',
    },
    position: {
      options: ['center', 'left', 'right'],
      control: {
        type: 'select',
      },
      description: 'Posição do modal',
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
        <ModalProvider>
          <ModalTrigger>
            <Button>Abrir modal</Button>
          </ModalTrigger>
          {Story()}
        </ModalProvider>
      );
    },
  ],
} as Meta<ModalProps>;

export const Primary: StoryObj<ModalProps> = {};

export const LeftModal: StoryObj<ModalProps> = {
  args: {
    position: 'left',
  },
};

export const RightModal: StoryObj<ModalProps> = {
  args: {
    position: 'right',
  },
};

export const MediumModal: StoryObj<ModalProps> = {
  args: {
    size: 'md',
  },
};

export const LargeModal: StoryObj<ModalProps> = {
  args: {
    size: 'lg',
  },
};

export const FullModal: StoryObj<ModalProps> = {
  args: {
    size: 'lg',
  },
};
