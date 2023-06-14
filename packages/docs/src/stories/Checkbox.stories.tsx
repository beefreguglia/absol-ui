import { StoryObj, Meta } from '@storybook/react';
import {
  BoxContent,
  BoxRoot,
  Checkbox,
  CheckboxProps,
  Text,
} from '@churrasco-ui/react';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],

  parameters: {
    docs: {
      description: {
        story: 'Componente checkbox para utilizar no sistema',
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
              <BoxContent
                css={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '$2',
                }}
              >
                {Story()}
                <Text size="xs">Accept terms of use</Text>
              </BoxContent>
            </BoxRoot>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {};
