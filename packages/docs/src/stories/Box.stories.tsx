import { StoryObj, Meta } from '@storybook/react';
import {
  BoxRoot,
  BoxContent,
  BoxRootProps,
  Text,
  ScrollArea,
} from '@churrasco-ui/react';

export default {
  title: 'Surfaces/Box/Box',
  component: BoxRoot,
  tags: ['autodocs'],
  args: {
    children: (
      <BoxContent
        css={{ maxWidth: '800px', maxHeight: '200px', padding: '$4  ' }}
      >
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          atque, quod unde porro qui dolore et facere, earum, mollitia iste
          aspernatur error quos ad sequi inventore necessitatibus dolores animi
          ea? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque,
          aspernatur? Nostrum recusandae magni provident corporis laudantium?
          Quos facere vel voluptatum perferendis sed qui exercitationem tenetur
          fugiat, nihil itaque nulla. Minima! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Assumenda nisi perferendis tempore
          recusandae quasi voluptates repellat quae itaque odio accusamus
          dolores, et quis harum placeat alias aliquid deleniti! Beatae, ullam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          accusamus non optio eum sequi molestiae voluptatem dignissimos
          distinctio quod eveniet blanditiis unde laudantium amet officiis omnis
          at totam, pariatur ullam. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet dicta unde eaque accusamus cum est debitis
          voluptatibus consequuntur maiores voluptate rem et numquam, sapiente
          commodi quibusdam impedit, vero architecto labore.
        </Text>
      </BoxContent>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
      description: 'Componente filho',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Componente caixa',
      },
    },

    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <BoxRoot hasShadow>
          <BoxContent
            css={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '$4',
              backgroundColor: '$blue50',
            }}
          >
            <ScrollArea>{Story()}</ScrollArea>
          </BoxContent>
        </BoxRoot>
      );
    },
  ],
} as Meta<BoxRootProps>;

export const Primary: StoryObj<BoxRootProps> = {};
