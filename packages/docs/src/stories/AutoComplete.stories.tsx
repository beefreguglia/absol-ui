import { StoryObj, Meta } from '@storybook/react';
import {
  BoxContent,
  BoxRoot,
  AutoComplete,
  AutoCompleteProps,
} from '@absol-ui/react';

export default {
  title: 'Form/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        story: 'Componente AutoComplete para utilizar no sistema',
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
} as Meta<AutoCompleteProps>;

export const Primary: StoryObj<AutoCompleteProps> = {};

export const WithError: StoryObj<AutoCompleteProps> = {
  args: {
    errorMessage: 'Error message',
  },
};
