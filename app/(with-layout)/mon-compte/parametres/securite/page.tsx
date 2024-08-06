'use client';
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';

type FieldType = {
  password?: string;
  checkPassword?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SecurityPage = () => (
  <>
    <h1 className={`text-3xl text-greena-500`}>Modification du mot de passe</h1>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Nouveau mot de passe"
        name="password"
        rules={[{ required: true, message: 'Le champ est obligatoire' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        label="Retaper le mot de passe"
        name="checkPassword"
        rules={[{ required: true, message: 'Le champ est obligatoire' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Modifier
        </Button>
      </Form.Item>
    </Form>
  </>
);

export default SecurityPage;
