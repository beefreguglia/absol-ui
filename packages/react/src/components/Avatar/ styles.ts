import * as Avatar from '@radix-ui/react-avatar';
import { styled } from '../../styles';

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  overflow: 'hidden',
  background: '$white',

  variants: {
    size: {
      sm: {
        width: '$8',
        height: '$8',
      },
      md: {
        width: '$12',
        height: '$12',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
});

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const AvatarFallBack = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray100',
  color: '$gray500',

  svg: {
    width: '$7',
    height: '$7',
  },
});
