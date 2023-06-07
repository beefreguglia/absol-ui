import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$md',
  fontSize: '$sm',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 144,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',
  boxShadow: '0 3px 5px 1px #0D4BD0',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  ':disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$blue500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '#2B6CB0',
        },

        ':disabled': {
          backgroundColor: '$blue300',
        },
      },
      secondary: {
        color: '$blue500',
        border: '2px solid $blue500',
      },
    },
    size: {
      sm: {
        height: 32,
      },
      md: {
        height: 40,
      },
    },
    isFull: {
      true: {
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    isFull: false,
  },
});

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
  isFull?: boolean;
}

Button.displayName = 'Button';
