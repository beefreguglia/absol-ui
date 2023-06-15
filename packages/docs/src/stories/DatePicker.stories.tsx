import { StoryObj, Meta } from '@storybook/react';
import {
  BoxContent,
  BoxRoot,
  DatePicker,
  DatePickerProps,
} from '@churrasco-ui/react';

export default {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        story: 'Componente DatePicker para utilizar no sistema',
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
} as Meta<DatePickerProps>;

export const Primary: StoryObj<DatePickerProps> = {};

export const WithError: StoryObj<DatePickerProps> = {
  args: {
    errorMessage: 'Error message',
  },
};
