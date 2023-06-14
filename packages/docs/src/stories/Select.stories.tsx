import { StoryObj, Meta } from '@storybook/react';
import {
  BoxContent,
  BoxRoot,
  SelectRoot,
  SelectOption,
  SelectRootProps,
  SelectTrigger,
  SelectContent,
} from '@churrasco-ui/react';

export default {
  title: 'Form/Select/Select',
  component: SelectRoot,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <SelectTrigger ariaLabel="options" placeholder="Select option" />
        <SelectContent>
          <SelectOption
            options={[
              { value: 'option1', name: 'option 1' },
              { value: 'option2', name: 'option 2' },
              { value: 'option3', name: 'option 3' },
              { value: 'option4', name: 'option 4' },
              { value: 'option5', name: 'option 5' },
            ]}
          />
          <SelectOption
            options={[
              { value: 'option6', name: 'option 6' },
              { value: 'option7', name: 'option 7' },
              { value: 'option8', name: 'option 8' },
              { value: 'option9', name: 'option 9' },
              { value: 'option10', name: 'option 10' },
            ]}
            categoryLabel="Category 2"
          />
        </SelectContent>
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
} as Meta<SelectRootProps>;

export const Primary: StoryObj<SelectRootProps> = {};

export const WithError: StoryObj<SelectRootProps> = {
  args: {
    children: (
      <>
        <SelectTrigger
          ariaLabel="options"
          placeholder="Select option"
          error="Error message"
        />
        <SelectContent>
          <SelectOption
            options={[
              { value: 'option1', name: 'option 1' },
              { value: 'option2', name: 'option 2' },
              { value: 'option3', name: 'option 3' },
              { value: 'option4', name: 'option 4' },
              { value: 'option5', name: 'option 5' },
            ]}
          />
          <SelectOption
            options={[
              { value: 'option6', name: 'option 6' },
              { value: 'option7', name: 'option 7' },
              { value: 'option8', name: 'option 8' },
              { value: 'option9', name: 'option 9' },
              { value: 'option10', name: 'option 10' },
            ]}
            categoryLabel="Category 2"
          />
        </SelectContent>
      </>
    ),
  },
};
