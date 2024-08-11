import React from 'react';
import { Button, DatePicker, Form, Space } from 'antd';
import type { GetProps, FormProps } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

type FieldType = {
  date?: string;
};

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

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const AdminCalendarForm: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 2 }}
    wrapperCol={{ span: 16 }}
    initialValues={{ remember: true }}
    className="w-[350px] p-2 bg-white rounded"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      name="date"
      rules={[{ required: true, message: 'Choisir une date de rendez-vous' }]}
    >
      <DatePicker
        format="le ddd DD,MM YYYY à HH:mm"
        className="w-full"
        size="large"
        disabledDate={disabledDate}
        disabledTime={disabledDateTime}
        minuteStep={30}
        showTime={{ defaultValue: dayjs('00:00:00', 'HH:mm') }}
      />
    </Form.Item>

    <Form.Item className="mb-2" wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Reserver
      </Button>
    </Form.Item>
  </Form>
);

export default AdminCalendarForm;
