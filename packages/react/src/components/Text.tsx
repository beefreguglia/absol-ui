import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$gray800',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$$xl' },
      '2xl': { fontSize: '$2xl' },
    },
  },

  defaultVariants: {
    size: '$md',
  },
});

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType;
}

Text.displayName = 'Text';
