import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../../styles';
import { Text } from '../Text';

export const ModalProviderContainer = styled(Dialog.Root, {});

export const ModalTriggerContainer = styled(Dialog.Trigger, {});

export const ModalPortal = styled(Dialog.Portal, {});

export const ModalOverlay = styled(Dialog.DialogOverlay, {
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: '10',
});

export const ModalHeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '$8 $8 $4 $8',
  borderRadius: '$md $md 0 0',
  position: 'relative',

  variants: {
    hasCloseContent: {
      true: {
        justifyContent: 'space-between',
      },
    },
  },

  [`& ${Text}`]: {
    maxWidth: '25vw',
  },
});

export const ModalHeaderTitle = styled(Dialog.Title, {});

export const ModalHeaderDescription = styled(Dialog.Description, {});

export const ModalContentContainer = styled(Dialog.Content, {
  borderRadius: '$md',
  backgroundColor: '$white',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  zIndex: '10',
  position: 'fixed',

  variants: {
    position: {
      center: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      left: {
        top: 0,
        left: 0,
        height: '100vh',
        borderRadius: '0 $md $md 0',
      },
      right: {
        top: 0,
        right: 0,
        height: '100vh',
        borderRadius: '$md 0 0 $md',
      },
    },

    size: {
      sm: {
        maxWidth: '300px',
      },
      md: {
        maxWidth: '500px',
      },
      lg: {
        maxWidth: '900px',
      },
      full: {
        width: '80vw',
        height: '80vh',
      },
    },
  },

  defaultVariants: {
    position: 'center',
    size: 'sm',
  },
});

export const CloseContentContainer = styled('div', {
  display: 'flex',
  cursor: 'pointer',
  variants: {
    baseLine: {
      true: {
        alignSelf: 'baseline',
      },
    },
    position: {
      left: {
        background: '$gray100',
        padding: '$4',
        position: 'absolute',
        top: '1rem',
        right: '-3rem',
        borderRadius: '0 $md $md 0',
      },
      center: {},
      right: {
        background: '$gray100',
        padding: '$4',
        position: 'absolute',
        top: '1rem',
        left: '-3rem',
        borderRadius: '$md 0 0 $md',
      },
    },
  },
  defaultVariants: {
    baseLine: false,
  },
});

export const ModalActionsContainer = styled('footer', {
  display: 'flex',
  padding: '$6',
  alignItems: 'center',
  gap: '$4',
  borderRadius: '0 0 $md $md',
  variants: {
    align: {
      center: {
        justifyContent: 'center',
      },
      left: {
        justifyContent: 'flex-start',
      },
      right: {
        justifyContent: 'flex-end',
      },
    },
  },
  defaultVariants: {
    align: 'right',
  },
});
