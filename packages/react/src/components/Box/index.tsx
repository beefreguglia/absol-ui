import { ComponentProps, ElementType, ReactNode } from 'react';
import {
  BoxContainer,
  BoxContentContainer,
  BoxFooterContainer,
  BoxHeaderContainer,
} from './styles';
import { Heading } from '../Heading';
import { Text } from '../Text';

export interface BoxRootProps extends ComponentProps<typeof BoxContainer> {
  as?: ElementType;
}

export function BoxRoot({
  children,
  hasShadow = false,
  ...props
}: BoxRootProps) {
  return (
    <BoxContainer hasShadow={hasShadow} {...props}>
      {children}
    </BoxContainer>
  );
}

BoxRoot.displayName = 'Box';

export interface BoxHeaderProps
  extends ComponentProps<typeof BoxHeaderContainer> {
  title?: string;
  description?: string;
  as?: ElementType;
  children?: ReactNode;
}

export function BoxHeader({
  title,
  description,
  children,
  ...props
}: BoxHeaderProps) {
  return (
    <BoxHeaderContainer {...props}>
      {title && <Heading>{title}</Heading>}
      {description && <Text size="xs">{description}</Text>}
      {children}
    </BoxHeaderContainer>
  );
}

BoxHeader.displayName = 'BoxHeader';

export interface BoxContentProps
  extends ComponentProps<typeof BoxContentContainer> {
  as?: ElementType;
}

export function BoxContent({ children, contents, ...props }: BoxContentProps) {
  return (
    <BoxContentContainer contents={contents} {...props}>
      {children}
    </BoxContentContainer>
  );
}

BoxContent.displayName = 'BoxContent';

export interface BoxFooterProps
  extends ComponentProps<typeof BoxHeaderContainer> {
  as?: ElementType;
  children?: ReactNode;
}
export function BoxFooter({ children, ...props }: BoxFooterProps) {
  return <BoxFooterContainer {...props}>{children}</BoxFooterContainer>;
}

BoxFooter.displayName = 'BoxFooter';
