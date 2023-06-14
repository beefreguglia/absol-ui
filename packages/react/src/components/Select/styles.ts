import * as Select from '@radix-ui/react-select';
import { styled } from '../../styles';
import { Text } from '../Text';

export const SelectContainer = styled(Select.Root, {});

export const SelectTriggerContainer = styled(Select.Trigger, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '$sm',
  padding: '$3 $4',
  gap: '$2',
  border: '1px solid $gray300',
  backgroundColor: '$white',
  color: '$gray400',
  cursor: 'pointer',
  fontFamily: '$default',
  lineHeight: '$base',

  '&:focus': {
    border: '1px solid $green300',
    boxShadow: '0 0 0 1px $green300',
    outline: 0,
  },

  '&:hover': {
    border: '1px solid $green300',
    backgroundColor: '$neutralGray50',
  },

  variants: {
    haveError: {
      true: {
        border: '1px solid $red500',
        '&:focus': {
          border: '1px solid $red500',
          boxShadow: '0 0 0 1px $red500',
          outline: 0,
        },

        '&:hover': {
          border: '1px solid $red500',
        },
      },
    },
  },
});

export const SelectContentContainer = styled(Select.Content, {
  backgroundColor: '$white',
  borderRadius: '$sm',
  overflow: 'hidden',
  border: '1px solid $gray300',
});

export const SelectViewport = styled(Select.Viewport, {
  padding: '$1',
});

export const SelectItemContainer = styled(Select.Item, {
  lineHeight: '$base',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '$2 $4',
  position: 'relative',
  userSelect: 'none',
  borderRadius: '$xs',
  borderBottom: '1px solid transparent',
  borderTop: '1px solid transparent',
  cursor: 'pointer',

  '&:focus': {
    borderBottom: '1px solid $gray300',
    borderTop: '1px solid $gray300',
    boxShadow: '0 0 0 1px $green300',
    outline: 0,
  },

  '&:hover': {
    backgroundColor: '$neutralGray50',
  },
});

export const SelectedItemIndicator = styled(Select.ItemIndicator, {
  position: 'absolute',
  left: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$green300',
});

export const SelectScrollUpButton = styled(Select.ScrollUpButton, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  padding: '$2 $4',
  color: '$gray300',

  '&:hover': {
    transition: 'background 100ms ease-in-out',
    backgroundColor: '$gray50',
  },
});

export const SelectScrollDownButton = styled(Select.ScrollDownButton, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$white',
  padding: '$2 $4',
  color: '$gray300',

  '&:hover': {
    transition: 'background 100ms ease-in-out',
    backgroundColor: '$gray50',
  },
});

export const SelectErrorContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',

  gap: '$2',
  marginTop: '$1',
  padding: '0 $2',

  svg: {
    color: '$red500',
  },

  [`${Text}`]: {
    color: '$red500',
  },
});
