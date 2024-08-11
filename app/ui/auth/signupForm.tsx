import React, { useEffect, useState } from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { useLazyGetFetchData } from '@/app/lib/hooks/fetching-hooks';
import useDebounce from '@/app/lib/hooks/useDebounce';
import { ApiAdressRoot } from '@/app/types';

type FieldType = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SignUpForm = () => {
  const { data, fetchData, isSuccess } = useLazyGetFetchData<ApiAdressRoot>();
  const [searchValue, setSearchValue] = useState('');

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 350 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="bg-white rounded p-2"
    >
      <Form.Item<FieldType>
        label="Email"
        name="email"
        className="md:mb-2 mb-0"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input type="primary" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Mot de passe"
        name="password"
        className="md:mb-2 mb-0"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Prénom"
        name="firstName"
        className="md:mb-2 mb-0"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input type="primary" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Nom"
        name="lastName"
        className="md:mb-2 mb-0"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input type="primary" />
      </Form.Item>

      <Form.Item<FieldType>
        label="Adresse"
        name="address"
        className="md:mb-2 mb-0"
        rules={[{ required: true, message: 'Merci de remplir ce champ' }]}
      >
        <Input type="primary" className="relative" style={{ margin: 0 }} />
        {/* {isSuccess && (
          <div className="absolute flex justify-center items-center bottom-0 left-0 translate-y-full z-10 w-full h-auto rounded bg-white border-2 border-black/15">
            <ul>
              {data?.features.map((address, index) => (
                <li
                  key={index}
                  className="list-decimal hover:bg-slate-300 p-1 rounded cursor-pointer"
                  onClick={() => form.setFieldValue('address', address.properties.label)}
                >
                  {address.properties.label}
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </Form.Item>

      <Form.Item<FieldType>
        label="Téléphone"
        name="phoneNumber"
        initialValue=""
        rules={[{ required: false }]}
      >
        <Input type="primary" className="md:mb-2 mb-0" />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Inscription
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
