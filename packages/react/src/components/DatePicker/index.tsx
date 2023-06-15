import { ComponentProps, useState } from 'react';
import {
  Input,
  DatePickerContainer,
  DatePickerErrorContainer,
  ButtonsContainer,
} from './styles';
import { CalendarBlank, Warning } from 'phosphor-react';
import { Text } from '../Text';
import * as Popover from '@radix-ui/react-popover';
import { Calendar } from '../Calendar';
import { BoxContent, BoxRoot } from '../Box';
import dayjs from 'dayjs';
import { Button } from '../Button';

type CalendarTypes = 'Default' | 'OnlyPast' | 'AllDates';

export interface DatePickerProps extends ComponentProps<typeof Input> {
  errorMessage?: string;
  selectedDate: Date;
  calendarType?: CalendarTypes;
  onDateSelected: (date: Date) => void;
}
export function DatePicker({
  errorMessage,
  // selectedDate,
  // onDateSelected,
  calendarType = 'AllDates',
  ...props
}: DatePickerProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const hasError = !!errorMessage;
  const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');

  function handleSelectDate(date: Date) {
    setSelectedDate(date);
    setIsPopoverOpen(false);
  }

  function handleToday() {
    const today = new Date();
    if (selectedDate !== today) {
      handleSelectDate(new Date());
    } else {
      console.log('Já estamos no dia de hoje');
    }
  }

  return (
    <Popover.Root open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <Popover.Trigger asChild>
        <DatePickerContainer isOpen={isPopoverOpen} hasError={hasError}>
          <Input
            onChange={() => {}}
            value={formattedDate}
            type="date"
            {...props}
          />
          <CalendarBlank weight="bold" />
        </DatePickerContainer>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content asChild>
          <BoxRoot hasShadow>
            <BoxContent css={{ maxWidth: '300px', padding: 0 }}>
              <Calendar
                onDateSelected={handleSelectDate}
                selectedDate={selectedDate}
                calendarType={calendarType}
              />
              <ButtonsContainer>
                <Button onClick={handleToday} variant={'secondary'}>
                  Today
                </Button>
              </ButtonsContainer>
            </BoxContent>
          </BoxRoot>
        </Popover.Content>
      </Popover.Portal>
      {hasError && (
        <DatePickerErrorContainer>
          <Warning size={14} />
          <Text size="sm">{errorMessage}</Text>
        </DatePickerErrorContainer>
      )}
    </Popover.Root>
  );
}

DatePicker.displayName = 'DatePicker';
