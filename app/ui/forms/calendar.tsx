import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers';
import { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';

interface CalendareElementProps {
  setDateValue: Dispatch<SetStateAction<Date | null | undefined>>;
}

export default function CalendarElement({
  setDateValue,
}: CalendareElementProps) {
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setDateValue(date);
    } else {
      setDateValue(null);
    }
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
        <DateCalendar
          disablePast
          onChange={handleDateChange}
          referenceDate={dayjs()}
        />
      </LocalizationProvider>
    </>
  );
}
