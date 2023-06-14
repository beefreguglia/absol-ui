import { styled } from '../../styles';
import { Text } from '../Text';

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '1px solid $gray300',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$green300',
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
  },

  variants: {
    hasError: {
      true: {
        border: '1px solid $red500',
        '&:has(input:focus)': {
          border: '1px solid $red500',
          boxShadow: '0 0 0 1px $red500',
          outline: 0,
        },

        '&:has(input:hover)': {
          border: '1px solid $red500',
        },
      },
    },
  },
});

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray800',
  fontWeight: 'regular',
  background: '$white',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray300',
  },
});

export const TextInputErrorContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '$2',
  marginTop: '$1',
  padding: '0 $2',

  [`${Text}`]: {
    color: '$red500',
  },

  svg: {
    minWidth: '14px',
    minHeight: '14px',
    color: '$red500',
  },
});
