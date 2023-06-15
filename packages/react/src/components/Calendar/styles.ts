import { styled } from '../../styles';
import { Text } from '../Text';

export const CalendarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6 $6 0',
  background: '$white',
  borderRadius: '$md',
  '@media (max-width: 400px)': {
    gap: '$3',
  },
});

export const CalendarHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const CalendarTitle = styled(Text, {
  fontWeight: '$medium',
  textTransform: 'capitalize',
  '> span': {
    color: '$blue500',
  },
});

export const CalendarActions = styled('div', {
  display: 'flex',
  gap: '$2',
  color: '$blue500',

  '> button': {
    all: 'unset',
    cursor: 'pointer',
    lineHeight: 0,
    borderRadius: '$sm',

    '> svg': {
      width: '$5',
      height: '$5',
    },

    '&:hover': {
      transition: 'color 300ms',
      color: '$blue300',
    },

    '&:focus': {
      boxShadow: '0 0 0 2px $colors$blue500',
    },
  },
});

export const CalendarBody = styled('table', {
  width: '100%',
  fontFamily: '$default',
  borderSpacing: '0.25rem',
  tableLayout: 'fixed',

  'thead th': {
    color: '$blue500',
    fontWeight: '$medium',
    fontSize: '$xs',

    '@media (max-width: 400px)': {
      fontSize: '$xs',
    },
  },

  'tbody:before': {
    content: '',
    lineHeight: '0.75rem',
    display: 'block',
    color: '$gray800',
  },

  'tbody td': {
    boxSizing: 'border-box',
  },
});

export const CalendarDay = styled('button', {
  all: 'unset',
  width: '100%',
  aspectRatio: '1 / 1',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '$sm',
  border: '1px solid $gray300',
  fontSize: '$xs',
  color: '$gray800',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
    border: 'none',
  },

  '&:not(:disabled):hover': {
    border: '1px solid $blue500',
    color: '$blue500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$blue500',
  },

  variants: {
    isOtherMonth: {
      true: {
        background: 'none',
        opacity: 0.4,
        border: '1px solid transparent',
      },
    },
    isToday: {
      true: {
        background: '$gray50',

        '&:hover': {
          background: '$darkBlue50',
        },
      },
    },
  },
});
