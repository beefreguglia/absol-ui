import { ComponentProps, ElementType, ReactElement, ReactNode } from 'react';
import {
  ModalProviderContainer,
  ModalContentContainer,
  ModalHeaderContainer,
  ModalOverlay,
  ModalPortal,
  ModalTriggerContainer,
  ModalHeaderTitle,
  ModalHeaderDescription,
  CloseContentContainer,
  ModalActionsContainer,
} from './styles';
import { Heading } from '../Heading';
import { Text } from '../Text';

export interface ModalProviderProps
  extends ComponentProps<typeof ModalProviderContainer> {}

export function ModalProvider({ children, ...props }: ModalProviderProps) {
  return <ModalProviderContainer {...props}>{children}</ModalProviderContainer>;
}

ModalProvider.displayName = 'ModalProvider';

export interface ModalTriggerProps
  extends ComponentProps<typeof ModalTriggerContainer> {}

export function ModalTrigger({
  children,
  asChild,
  ...props
}: ModalTriggerProps) {
  return (
    <ModalTriggerContainer {...props} asChild={asChild !== false}>
      {children}
    </ModalTriggerContainer>
  );
}

ModalTrigger.displayName = 'ModalTrigger';

export interface ModalProps
  extends ComponentProps<typeof ModalContentContainer> {}

export function Modal({ children, ...props }: ModalProps) {
  return (
    <ModalPortal>
      <ModalOverlay />
      <ModalContentContainer {...props}>{children}</ModalContentContainer>
    </ModalPortal>
  );
}

ModalProvider.displayName = 'ModalProvider';

export interface ModalHeaderProps
  extends ComponentProps<typeof ModalHeaderContainer> {
  title: string;
  description?: string;
  closeContent?: ReactElement;
  baseline?: boolean;
  position?: 'center' | 'left' | 'right';
  as?: ElementType;
}

export function ModalHeader({
  title,
  description,
  closeContent,
  baseline,
  position,
  ...props
}: ModalHeaderProps) {
  return (
    <ModalHeaderContainer hasCloseContent={!!closeContent} {...props}>
      <div>
        <ModalHeaderTitle asChild>
          <Heading>{title}</Heading>
        </ModalHeaderTitle>
        <ModalHeaderDescription asChild>
          <Text size="xs">{description}</Text>
        </ModalHeaderDescription>
      </div>

      {closeContent && (
        <CloseContentContainer position={position} baseLine={baseline}>
          {closeContent}
        </CloseContentContainer>
      )}
    </ModalHeaderContainer>
  );
}

ModalHeader.displayName = 'ModalHeader';

export interface ModalActionsProps {
  children: ReactNode;
  align: 'right' | 'left' | 'center';
}

export function ModalActions({ children, align }: ModalActionsProps) {
  return (
    <ModalActionsContainer align={align}>{children}</ModalActionsContainer>
  );
}

ModalActions.displayName = 'ModalActions';
