import { StoryObj, Meta } from '@storybook/react';
import {
  BoxRoot,
  Button,
  Modal,
  ModalActions,
  ModalActionsProps,
  ModalProvider,
  ModalTrigger,
  Text,
} from '@absol-ui/react';

export default {
  title: 'Overlay/Modal/ModalActions',
  component: ModalActions,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Button variant="secondary">Cancelar</Button>
        <Button>Concluir</Button>
      </>
    ),
    align: 'right',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho',
      defaultValue: 'none',
    },
    align: {
      control: { type: 'select' },
      options: ['right', 'left', 'center'],
      defaultValue: 'right',
      description: 'Alinhamento do conteúdo',
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
} as Meta<ModalActionsProps>;

export const Primary: StoryObj<ModalActionsProps> = {
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <ModalTrigger>
            <Button>Abrir Modal</Button>
          </ModalTrigger>
          <Modal size="full">
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
            {Story()}
          </Modal>
        </ModalProvider>
      );
    },
  ],
};

export const LeftModal: StoryObj<ModalActionsProps> = {
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <ModalTrigger>
            <Button>Abrir Modal</Button>
          </ModalTrigger>
          <Modal position="left" size="md">
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
            {Story()}
          </Modal>
        </ModalProvider>
      );
    },
  ],
};

export const RightModal: StoryObj<ModalActionsProps> = {
  decorators: [
    (Story) => {
      return (
        <ModalProvider>
          <ModalTrigger>
            <Button>Abrir Modal</Button>
          </ModalTrigger>
          <Modal position="right" size="md">
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
            {Story()}
          </Modal>
        </ModalProvider>
      );
    },
  ],
};
