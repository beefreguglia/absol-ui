import { StoryObj, Meta } from '@storybook/react';
import {
  BoxRoot,
  Button,
  Modal,
  ModalHeader,
  ModalHeaderProps,
  ModalProvider,
  ModalTrigger,
  Text,
} from '@absol-ui/react';
import { X } from 'phosphor-react';

export default {
  title: 'Overlay/Modal/ModalHeader',
  component: ModalHeader,
  tags: ['autodocs'],
  args: {
    title: 'Lorem',
    description: 'Lorem ipsum dolor sit amet consectetur adipis icing elit.',
    closeContent: undefined,
    baseline: false,
  },
  argTypes: {
    closeContent: {
      options: ['Text', 'Image', 'undefined'],
      mapping: {
        Text: <Text>Example</Text>,
        Image: <X />,
        undefined,
      },
      table: {
        type: { summary: 'ReactElement' },
      },
      description: 'Componente que ficará do lado direito no header',
      defaultValue: undefined,
    },
    baseline: {
      description:
        'Altera o align do container direito para baseline (Ideal para ícones)',
      table: {
        type: { summary: 'boolean' },
      },
    },
    description: {
      description: 'Descrição do conteúdo',
      table: {
        type: { summary: 'string' },
      },
    },
    title: {
      description: 'Título do card',
      table: {
        type: { summary: 'string' },
      },
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
} as Meta<ModalHeaderProps>;

export const Primary: StoryObj<ModalHeaderProps> = {
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <ModalTrigger>
            <Button>Abrir Modal</Button>
          </ModalTrigger>
          <Modal size="full">
            {Story()}
            <BoxRoot css={{ padding: '$4', height: '100%' }}>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                molestiae facere voluptatem animi quasi nihil quidem accusantium
                quod illum dicta sit voluptates illo sint, inventore asperiores
                minima nemo cupiditate reiciendis. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aut molestiae facere voluptatem
                animi quasi nihil quidem accusantium quod illum dicta sit
                voluptates illo sint, inventore asperiores minima nemo
                cupiditate reiciendis. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Aut molestiae facere voluptatem animi quasi
                nihil quidem accusantium quod illum dicta sit voluptates illo
                sint, inventore asperiores minima nemo cupiditate reiciendis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                molestiae facere voluptatem animi quasi nihil quidem accusantium
                quod illum dicta sit voluptates illo sint, inventore asperiores
                minima nemo cupiditate reiciendis.
              </Text>
            </BoxRoot>
          </Modal>
        </ModalProvider>
      );
    },
  ],
};

export const LeftModal: StoryObj<ModalHeaderProps> = {
  args: {
    position: 'left',
    closeContent: <X />,
  },
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <ModalTrigger>
            <Button>Abrir Modal</Button>
          </ModalTrigger>
          <Modal position="left">
            {Story()}
            <BoxRoot css={{ padding: '$4', height: '100%' }}>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                molestiae facere voluptatem animi quasi nihil quidem accusantium
                quod illum dicta sit voluptates illo sint, inventore asperiores
                minima nemo cupiditate reiciendis. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aut molestiae facere voluptatem
                animi quasi nihil quidem accusantium quod illum dicta sit
                voluptates illo sint, inventore asperiores minima nemo
                cupiditate reiciendis. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Aut molestiae facere voluptatem animi quasi
                nihil quidem accusantium quod illum dicta sit voluptates illo
                sint, inventore asperiores minima nemo cupiditate reiciendis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                molestiae facere voluptatem animi quasi nihil quidem accusantium
                quod illum dicta sit voluptates illo sint, inventore asperiores
                minima nemo cupiditate reiciendis.
              </Text>
            </BoxRoot>
          </Modal>
        </ModalProvider>
      );
    },
  ],
};

export const RightModal: StoryObj<ModalHeaderProps> = {
  args: {
    position: 'right',
    closeContent: <X />,
  },
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <ModalTrigger>
            <Button>Abrir Modal</Button>
          </ModalTrigger>
          <Modal position="right">
            {Story()}
            <BoxRoot css={{ padding: '$4', height: '100%' }}>
              <Text>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                molestiae facere voluptatem animi quasi nihil quidem accusantium
                quod illum dicta sit voluptates illo sint, inventore asperiores
                minima nemo cupiditate reiciendis. Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Aut molestiae facere voluptatem
                animi quasi nihil quidem accusantium quod illum dicta sit
                voluptates illo sint, inventore asperiores minima nemo
                cupiditate reiciendis. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Aut molestiae facere voluptatem animi quasi
                nihil quidem accusantium quod illum dicta sit voluptates illo
                sint, inventore asperiores minima nemo cupiditate reiciendis.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                molestiae facere voluptatem animi quasi nihil quidem accusantium
                quod illum dicta sit voluptates illo sint, inventore asperiores
                minima nemo cupiditate reiciendis.
              </Text>
            </BoxRoot>
          </Modal>
        </ModalProvider>
      );
    },
  ],
};
