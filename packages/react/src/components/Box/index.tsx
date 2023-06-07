import { ComponentProps, ElementType } from 'react';
import {
  BoxContainer,
  BoxContentContainer,
  BoxHeaderContainer,
} from './styles';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { ScrollArea } from '../ScrollArea';

export interface BoxProps extends ComponentProps<typeof BoxContainer> {
  as?: ElementType;
}

export function Box({ children, ...props }: BoxProps) {
  return <BoxContainer {...props}>{children}</BoxContainer>;
}

Box.displayName = 'Box';

export interface BoxHeaderProps
  extends ComponentProps<typeof BoxHeaderContainer> {
  title: string;
  description: string;
  as?: ElementType;
}

export function BoxHeader({ title, description, ...props }: BoxHeaderProps) {
  return (
    <BoxHeaderContainer {...props}>
      <div>
        <Heading>{title}</Heading>
        <Text size="xs">{description}</Text>
      </div>
    </BoxHeaderContainer>
  );
}

BoxHeader.displayName = 'BoxHeader';

export interface BoxContentProps
  extends ComponentProps<typeof BoxContentContainer> {
  as?: ElementType;
  hasActions?: boolean;
}

export function BoxContent({ children, ...props }: BoxContentProps) {
  return (
    <ScrollArea>
      <BoxContentContainer {...props}>{children}</BoxContentContainer>
    </ScrollArea>
  );
}
