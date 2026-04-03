declare module 'react-date-range' {
  import * as React from 'react';

  export interface CalendarProps {
    date?: Date;
    shownDate?: Date;
    onChange?: (date: Date) => void;
    onShownDateChange?: (date: Date) => void;
    color?: string;
    className?: string;
    dayContentRenderer?: (date: Date) => React.ReactNode;
    [key: string]: unknown;
  }

  export const Calendar: React.ComponentType<CalendarProps>;
}
