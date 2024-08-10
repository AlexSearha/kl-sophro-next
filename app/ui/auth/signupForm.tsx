import React, { useEffect, useState } from 'react';
import type { FormProps, InputRef } from 'antd';
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
  const [searchAddress, setSearchAddress] = useState('');
  const debounceValue = useDebounce(searchAddress, 500);
  const { data, fetchData, isError, isLoading } = useLazyGetFetchData<ApiAdressRoot>();

  useEffect(() => {
    if (debounceValue) {
      fetchData({ url: `${searchAddress}&type=housenumber&autocomplete=1`, instance: 2 });
    }
  }, [debounceValue]);

  useEffect(() => {
    console.log('test', data);
  }, [data]);

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="bg-white rounded p-2"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input type="primary" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Mot de passe"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType>
          label="Prénom"
          name="firstName"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="primary" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Nom"
          name="lastName"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input type="primary" />
        </Form.Item>

        <Form.Item<FieldType>
          label="Adresse"
          name="address"
          rules={[{ required: true, message: 'Merci de remplir ce champs' }]}
        >
          <Input
            type="primary"
            className="relative"
            onChange={(event) => setSearchAddress(event.target.value)}
          />
          {data && (
            <div className="absolute flex justify-center items-center bottom-0 left-0 translate-y-full z-10 w-full h-auto rounded bg-white border-2 border-black/15 ">
              <ul>
                {data.features.map((address, index) => {
                  return (
                    <li
                      key={index}
                      className="list-decimal hover:bg-slate-300 p-1 rounded"
                      onClick={() => setSearchAddress(address.properties.label)}
                    >
                      {address.properties.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </Form.Item>

        <Form.Item<FieldType>
          label="Téléphone"
          name="phoneNumber"
          initialValue=""
          rules={[{ required: false }]}
        >
          <Input type="primary" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUpForm;
