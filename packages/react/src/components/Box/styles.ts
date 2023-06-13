import { styled } from '../../styles';

export const BoxContainer = styled('div', {
  borderRadius: '$md',
  backgroundColor: '$white',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    hasShadow: {
      true: {
        boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  defaultVariants: {
    hasShadow: 'false',
  },
});

export const BoxHeaderContainer = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  borderRadius: '$md $md 0 0',
});

export const BoxContentContainer = styled('div', {
  padding: '$6',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '$md',

  variants: {
    contents: {
      header: {
        padding: '0 $6 $6 $6',
        borderRadius: '0 0 $md $md',
      },
      footer: {
        borderRadius: '$md $md 0 0',
        padding: '$6 $6 0',
      },
      both: {
        borderRadius: 0,
      },
    },
  },
});

export const BoxFooterContainer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: '$6',
  borderRadius: '0 0 $md $md',
  gap: '$4',
});
