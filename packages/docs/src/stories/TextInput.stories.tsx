import { StoryObj, Meta } from '@storybook/react';
import {
  BoxContent,
  BoxRoot,
  TextInput,
  TextInputProps,
} from '@absol-ui/react';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        story: 'Componente TextInput para utilizar no sistema',
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
              <BoxContent>{Story()}</BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {};

export const WithError: StoryObj<TextInputProps> = {
  args: {
    errorMessage: 'Error message',
  },
};
