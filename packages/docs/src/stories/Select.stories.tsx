import { StoryObj, Meta } from '@storybook/react';
import { Box, Select, SelectOption, SelectProps } from '@sapron-ui/react';

export default {
  title: 'Form/Select/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <SelectOption value="option1" name="option1" />
        <SelectOption value="option2" name="option2" />
        <SelectOption value="option3" name="option3" />
        <SelectOption value="option4" name="option4" />
        <SelectOption value="option5" name="option5" />
      </>
    ),
    ariaLabel: 'options',
    placeholder: 'Select a option',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho composto por componentes SelectOption',
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
            padding: '$4',
          }}
        >
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<SelectProps>;

export const Primary: StoryObj<SelectProps> = {};
