import { StoryObj, Meta } from '@storybook/react';
import {
  Calendar,
  CalendarProps,
  BoxContent,
  BoxRoot,
} from '@churrasco-ui/react';

export default {
  title: 'Data Display/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot hasShadow>
          <BoxContent
            css={{
              backgroundColor: '$blue50',
              padding: '$4',
            }}
          >
            {Story()}
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<CalendarProps>;

export const Primary: StoryObj<CalendarProps> = {};

export const OnlyPast: StoryObj<CalendarProps> = {
  args: {
    calendarType: 'OnlyPast',
  },
};

export const AllDates: StoryObj<CalendarProps> = {
  args: {
    calendarType: 'AllDates',
  },
};
