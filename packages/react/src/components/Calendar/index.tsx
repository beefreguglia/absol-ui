import { getWeekDays } from '../../utils/get-week-days';
import dayjs from 'dayjs';
import { CaretLeft, CaretRight } from 'phosphor-react';
import { useMemo, useState } from 'react';
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles';

import 'dayjs/locale/pt-br';
import { Text } from '../Text';
import * as Popover from '@radix-ui/react-popover';

type MonthTypes = 'Current' | 'Next' | 'Previous';

interface CalendarDays {
  date: dayjs.Dayjs;
  disabled: boolean;
  monthType: MonthTypes;
}

interface CalendarWeek {
  week: number;
  days: CalendarDays[];
}

dayjs.locale('pt-br');

type CalendarWeeks = CalendarWeek[];
type CalendarTypes = 'Default' | 'OnlyPast' | 'AllDates';

export interface CalendarProps {
  selectedDate: Date | null;
  onDateSelected: (date: Date) => void;
  calendarType?: CalendarTypes;
}

export function Calendar({
  selectedDate,
  onDateSelected,
  calendarType,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(() => {
    if (selectedDate !== null) {
      return dayjs(selectedDate).set('date', 1);
    }
    return dayjs().set('date', 1);
  });

  function handlePreviousMonth() {
    const previousMonthDate = currentDate.subtract(1, 'month');
    setCurrentDate(previousMonthDate);
  }

  function handleNextMonth() {
    const nextMonthDate = currentDate.add(1, 'month');
    setCurrentDate(nextMonthDate);
  }

  const shortWeekDays = getWeekDays({ short: true });
  const currentMonth = currentDate.format('MMMM');
  const currentYear = currentDate.format('YYYY');

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, index) => {
      return currentDate.set('date', index + 1);
    });

    const firstWeekDay = currentDate.get('day');

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, index) => {
        return currentDate.subtract(index + 1, 'day');
      })
      .reverse();

    const lastDayInCurrentMonth = currentDate.set(
      'date',
      currentDate.daysInMonth(),
    );
    const lastWeekDay = lastDayInCurrentMonth.get('day');
    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, index) => {
      return lastDayInCurrentMonth.add(index + 1, 'day');
    });

    let calendarDays: CalendarDays[] = [];

    switch (calendarType) {
      case 'OnlyPast': {
        calendarDays = [
          ...previousMonthFillArray.map((date) => {
            return {
              date,
              disabled: true,
              monthType: 'Previous',
            } as CalendarDays;
          }),
          ...daysInMonthArray.map((date) => {
            return {
              date,
              disabled: date.endOf('day').isAfter(new Date()),
              monthType: 'Current',
            } as CalendarDays;
          }),
          ...nextMonthFillArray.map((date) => {
            return { date, disabled: true, monthType: 'Next' } as CalendarDays;
          }),
        ];
        break;
      }
      case 'AllDates': {
        calendarDays = [
          ...previousMonthFillArray.map((date) => {
            return {
              date,
              disabled: true,
              monthType: 'Previous',
            } as CalendarDays;
          }),
          ...daysInMonthArray.map((date) => {
            return {
              date,
              disabled: false,
              monthType: 'Current',
            } as CalendarDays;
          }),
          ...nextMonthFillArray.map((date) => {
            return { date, disabled: true, monthType: 'Next' } as CalendarDays;
          }),
        ];
        break;
      }
      default: {
        calendarDays = [
          ...previousMonthFillArray.map((date) => {
            return {
              date,
              disabled: true,
              monthType: 'Previous',
            } as CalendarDays;
          }),
          ...daysInMonthArray.map((date) => {
            return {
              date,
              disabled: date.endOf('day').isBefore(new Date()),
              monthType: 'Current',
            } as CalendarDays;
          }),
          ...nextMonthFillArray.map((date) => {
            return { date, disabled: true, monthType: 'Next' } as CalendarDays;
          }),
        ];
        break;
      }
    }

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>(
      (weeks, _, index, arrayOriginal) => {
        const isNewWeek = index % 7 === 0;
        if (isNewWeek) {
          weeks.push({
            week: index / 7 + 1,
            days: arrayOriginal.slice(index, index + 7),
          });
        }
        return weeks;
      },
      [],
    );
    return calendarWeeks;
  }, [calendarType, currentDate]);

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Popover.Trigger asChild>
          <CalendarTitle>
            {currentMonth} <Text as="span">{currentYear}</Text>
          </CalendarTitle>
        </Popover.Trigger>
        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Mês anterior">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Próximo mês">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled, monthType }) => {
                  const isToday = date.isSame(dayjs(new Date()), 'day');
                  console.log(isToday);
                  return (
                    <td key={date.toString()}>
                      <CalendarDay
                        disabled={monthType === 'Current' && disabled}
                        onClick={
                          monthType === 'Next' || monthType === 'Previous'
                            ? () => {
                                if (monthType === 'Next') {
                                  handleNextMonth();
                                }
                                if (monthType === 'Previous') {
                                  handlePreviousMonth();
                                }
                              }
                            : () => onDateSelected(date.toDate())
                        }
                        isOtherMonth={
                          monthType === 'Previous' || monthType === 'Next'
                        }
                        isToday={isToday}
                      >
                        {date.get('date')}
                      </CalendarDay>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  );
}
