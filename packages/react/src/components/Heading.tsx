import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$darkerBlue900',

  variants: {
    size: {
      sm: { fontSize: '$md' },
      md: { fontSize: '$lg' },
      lg: { fontSize: '$2xl' },
    },
  },

  defaultVariants: {
    size: '$md',
  },
});

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType;
}

Heading.displayName = 'Heading';
