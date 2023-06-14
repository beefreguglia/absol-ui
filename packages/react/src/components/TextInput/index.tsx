import { ComponentProps } from 'react';
import { Input, TextInputContainer, TextInputErrorContainer } from './styles';
import { Warning } from 'phosphor-react';
import { Text } from '../Text';

export interface TextInputProps extends ComponentProps<typeof Input> {
  errorMessage?: string;
}

export function TextInput({ errorMessage, ...props }: TextInputProps) {
  const hasError = !!errorMessage;
  return (
    <>
      <TextInputContainer hasError={hasError}>
        <Input {...props} />
      </TextInputContainer>
      {hasError && (
        <TextInputErrorContainer>
          <Warning size={14} />
          <Text size="sm">{errorMessage}</Text>
        </TextInputErrorContainer>
      )}
    </>
  );
}

TextInput.displayName = 'TextInput';
