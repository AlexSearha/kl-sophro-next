import React from 'react';
import { DatePicker, Space } from 'antd';
import type { GetProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

dayjs.extend(customParseFormat);

const range = (start: number, end: number) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf('day');
};

const disabledDateTime = () => ({
  disabledHours: () => {
    const hours = range(0, 24);
    hours.splice(9, 10);
    return hours;
  },
  // disabledMinutes: () => range(30, 60),
});

const AdminCalendarForm: React.FC = () => (
  <Space direction="vertical" size={12}>
    <DatePicker
      format="le ddd DD,MM YYYY à HH:mm"
      className="w-[350px]"
      size="large"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      minuteStep={30}
      showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm') }}
    />
  </Space>
);

export default AdminCalendarForm;
