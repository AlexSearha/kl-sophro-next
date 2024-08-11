import { Select, Space } from 'antd';
import React, { Dispatch, SetStateAction } from 'react';

interface SelectElementProps {
  setSelectValue: Dispatch<SetStateAction<string>>;
}

export default function SelectElement({ setSelectValue }: SelectElementProps) {
  return (
    <>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Select
          placeholder="Heure du rendez-vous"
          style={{ width: '100%', height: 50 }}
          onChange={setSelectValue}
          options={[
            { value: '10H', label: '10H' },
            { value: '11H', label: '11H' },
            { value: '12H', label: '12H' },
          ]}
        />
      </Space>
    </>
  );
}
