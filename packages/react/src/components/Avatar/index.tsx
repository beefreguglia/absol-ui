import { ComponentProps } from 'react';
import { AvatarContainer, AvatarFallBack, AvatarImage } from './ styles';
import { User } from 'phosphor-react';

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  size?: 'sm' | 'md';
}

export function Avatar({ size, ...imageProps }: AvatarProps) {
  console.log('TESTE');
  return (
    <AvatarContainer size={size}>
      <AvatarImage {...imageProps} />
      <AvatarFallBack delayMs={600}>
        <User />
      </AvatarFallBack>
    </AvatarContainer>
  );
}

Avatar.displayName = 'Avatar';
