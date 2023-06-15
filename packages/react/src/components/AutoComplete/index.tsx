import { ComponentProps } from 'react';
import {
  Input,
  AutoCompleteContainer,
  AutoCompleteErrorContainer,
} from './styles';
import { Warning } from 'phosphor-react';
import { Text } from '../Text';

export interface AutoCompleteProps extends ComponentProps<typeof Input> {
  errorMessage?: string;
}
export function AutoComplete({ errorMessage, ...props }: AutoCompleteProps) {
  const hasError = !!errorMessage;

  return (
    <>
      <AutoCompleteContainer hasError={hasError}>
        <Input list="suggestions" onChange={() => {}} {...props} />

        <datalist id="suggestions">
          <option value="projeto1" />
          <option value="projeto2" />
          <option value="projeto3" />
          <option value="projeto4" />
          <option value="projeto5" />
        </datalist>
      </AutoCompleteContainer>
      {hasError && (
        <AutoCompleteErrorContainer>
          <Warning size={14} />
          <Text size="sm">{errorMessage}</Text>
        </AutoCompleteErrorContainer>
      )}
    </>
  );
}

AutoComplete.displayName = 'AutoComplete';
