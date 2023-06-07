import { styled } from '../../styles';
import { Text } from '../Text';

export const BoxContainer = styled('div', {
  borderRadius: '$md',
  backgroundColor: '$white',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
});

export const BoxHeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: '$gray300',
  padding: '$8 $8 $4 $8',
  borderRadius: '$md $md 0 0',

  variants: {
    hasRightContent: {
      true: {
        justifyContent: 'space-between',
      },
    },
  },

  [`& ${Text}`]: {
    maxWidth: '25vw',
  },
});

export const BoxContentContainer = styled('div', {
  padding: '$8',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '0 0 $md $md',

  variants: {
    hasActions: {
      true: {
        borderRadius: 0,
      },
    },
  },
});
