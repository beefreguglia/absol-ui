import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentProps, ReactNode } from 'react';
import {
  SelectContainer,
  SelectContentContainer,
  SelectItemContainer,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTriggerContainer,
  SelectViewport,
  SelectedItemIndicator,
} from './styles';
import { CaretDown, CaretUp, Check } from 'phosphor-react';
import { Text } from '../Text';

export interface SelectRootProps
  extends ComponentProps<typeof SelectContainer> {}

export function SelectRoot({ children, ...props }: SelectRootProps) {
  return <SelectContainer {...props}>{children}</SelectContainer>;
}

export interface SelectTriggerProps
  extends ComponentProps<typeof SelectTriggerContainer> {
  ariaLabel: string;
}

export function SelectTrigger({ ariaLabel, placeholder }: SelectTriggerProps) {
  return (
    <SelectTriggerContainer aria-label={ariaLabel}>
      <SelectPrimitive.Value placeholder={placeholder} />
      <SelectPrimitive.Icon asChild>
        <CaretDown size={10} weight="fill" />
      </SelectPrimitive.Icon>
    </SelectTriggerContainer>
  );
}

SelectTrigger.displayName = 'SelectTrigger';

export interface SelectContentProps
  extends ComponentProps<typeof SelectContentContainer> {
  children: ReactNode;
}
export function SelectContent({ children, ...props }: SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectContentContainer {...props}>
        <SelectScrollUpButton>
          <CaretUp weight="fill" />
        </SelectScrollUpButton>
        <SelectViewport>{children}</SelectViewport>
        <SelectScrollDownButton>
          <CaretDown weight="fill" />
        </SelectScrollDownButton>
      </SelectContentContainer>
    </SelectPrimitive.Portal>
  );
}

export interface SelectValuesOptions {
  name: string;
  value: string;
}
interface SelectOptionProps {
  options: SelectValuesOptions[];
  categoryLabel?: string;
}
export function SelectOption({ options, categoryLabel }: SelectOptionProps) {
  return (
    <SelectPrimitive.Group>
      {categoryLabel && (
        <SelectPrimitive.Label asChild>
          <Text
            as="label"
            size="xs"
            css={{ color: '$gray200', padding: '0 $1' }}
          >
            {categoryLabel}
          </Text>
        </SelectPrimitive.Label>
      )}
      {options.length > 0 &&
        options.map(({ value, name }) => (
          <SelectItemContainer value={value} key="value">
            <SelectedItemIndicator asChild>
              <Check />
            </SelectedItemIndicator>
            <SelectPrimitive.ItemText asChild>
              <Text>{name}</Text>
            </SelectPrimitive.ItemText>
          </SelectItemContainer>
        ))}
    </SelectPrimitive.Group>
  );
}
