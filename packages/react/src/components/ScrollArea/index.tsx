import { ComponentProps, ElementType } from 'react';
import {
  Scrollbar,
  ScrollbarContainer,
  ScrollbarCorner,
  ScrollbarThumb,
  ScrollbarViewport,
} from './styles';

export interface ScrollAreaProps
  extends ComponentProps<typeof ScrollbarContainer> {
  as?: ElementType;
}

export function ScrollArea({ children, ...props }: ScrollAreaProps) {
  return (
    <ScrollbarContainer {...props}>
      <ScrollbarViewport>{children}</ScrollbarViewport>
      <Scrollbar orientation="vertical">
        <ScrollbarThumb />
      </Scrollbar>
      <Scrollbar orientation="horizontal">
        <ScrollbarThumb />
      </Scrollbar>
      <ScrollbarCorner />
    </ScrollbarContainer>
  );
}

ScrollArea.displayName = 'ScrollArea';
