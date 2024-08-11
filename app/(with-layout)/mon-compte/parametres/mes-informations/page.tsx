'use client';
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { lusitana } from '@/app/ui/fonts';

type FieldType = {
  email?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  phoneNumber?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const MesInformationsPage = () => {
  return (
    <>
      <h1 className={`text-3xl flex justify-center ${lusitana.className} text-greena-500 mb-8`}>
        Mes Informations
      </h1>
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        className="mb-28 md:mb-0"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType> label="Email" name="email" initialValue="exemple@hotmail.com">
          <Input type="primary" disabled />
        </Form.Item>

        <Form.Item<FieldType> label="Prénom" name="firstName" initialValue="">
          <Input type="primary" />
        </Form.Item>

        <Form.Item<FieldType> label="Nom" name="lastName" initialValue="">
          <Input type="primary" />
        </Form.Item>

        <Form.Item<FieldType> label="Adresse" name="address" initialValue="">
          <Input type="primary" />
        </Form.Item>

        <Form.Item<FieldType> label="Téléphone" name="phoneNumber" initialValue="">
          <Input type="primary" />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Modifier
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default MesInformationsPage;
