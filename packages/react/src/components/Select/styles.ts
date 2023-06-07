import * as Select from '@radix-ui/react-select';
import { styled } from '../../styles';

export const SelectContainer = styled(Select.Root, {
  backgroundColor: 'red',
});

export const SelectTrigger = styled(Select.Trigger, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  padding: '$2 $4',
  lineHeight: '1',
  gap: '$2',
  backgroundColor: '$white',
  border: '1px solid $gray300',
  color: '$gray400',
  cursor: 'pointer',
  boxShadow: '0 2px 10px $gray300',
  '&:focus': {
    border: '1px solid $green300',
    boxShadow: '0 0 0 2px $green300',
  },
});
