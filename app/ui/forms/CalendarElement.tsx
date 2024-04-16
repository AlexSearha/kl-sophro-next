import { CalendareElementProps } from '@/app/types';
import { Calendar, theme } from 'antd';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import frFR from 'antd/locale/fr_FR';
import type { CalendarProps } from 'antd';
import type { Dayjs } from 'dayjs';

const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
  console.log(value.format('DD-MM-YYYY'), mode);
};

const disabledDate = (current: Dayjs | null) => {
  return current ? current.isBefore(dayjs(), 'day') : false;
};

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
          onPanelChange={onPanelChange}
        />
      </ConfigProvider>
    </>
  );
}
