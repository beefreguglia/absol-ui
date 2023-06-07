import * as SelectPrimitive from '@radix-ui/react-select';
import { ComponentProps } from 'react';
import { SelectContainer, SelectTrigger } from './styles';
import { CaretDown, CaretUp, Check } from 'phosphor-react';
import { Text } from '../Text';

export interface SelectProps extends ComponentProps<typeof SelectContainer> {
  ariaLabel: string;
  placeholder: string;
}

export function Select({
  ariaLabel,
  placeholder,
  children,
  ...props
}: SelectProps) {
  return (
    <SelectContainer {...props}>
      <SelectTrigger aria-label={ariaLabel}>
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <CaretDown size={32} weight="fill" />
        </SelectPrimitive.Icon>
      </SelectTrigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content>
          <SelectPrimitive.ScrollUpButton>
            <CaretUp size={32} weight="fill" />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton>
            <CaretDown size={32} weight="fill" />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectContainer>
  );
}

Select.displayName = 'Select';

interface SelectOptionProps {
  value: string;
  name: string;
  label?: string;
}
export function SelectOption({ value, name, label }: SelectOptionProps) {
  return (
    <SelectPrimitive.Group>
      {label && <SelectPrimitive.Label>{label}</SelectPrimitive.Label>}
      <SelectPrimitive.Item value={value}>
        <SelectPrimitive.ItemText>
          <Text>{name}</Text>
        </SelectPrimitive.ItemText>
        <SelectPrimitive.ItemIndicator>
          <Check size={32} />
        </SelectPrimitive.ItemIndicator>
      </SelectPrimitive.Item>
    </SelectPrimitive.Group>
  );
}
