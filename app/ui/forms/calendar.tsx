import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers';
import { CalendareElementProps } from '@/app/types';
import dayjs from 'dayjs';

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
