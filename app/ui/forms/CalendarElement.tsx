import { CalendareElementProps } from '@/app/types';
import { Calendar, theme } from 'antd';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import frFR from 'antd/locale/fr_FR';
import type { Dayjs } from 'dayjs';

const disabledDate = (current: Dayjs | null) => {
  return current ? current.isBefore(dayjs(), 'day') : false;
};

export default function CalendarElement({
  setDateValue,
}: CalendareElementProps) {
  const handleSelect = (date: dayjs.Dayjs) => {
    if (date) {
      setDateValue(date.toDate());
    }
  };

  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };
  return (
    <>
      <ConfigProvider locale={frFR}>
        <Calendar
          fullscreen={false}
          disabledDate={disabledDate}
          onSelect={handleSelect}
        />
      </ConfigProvider>
    </>
  );
}
