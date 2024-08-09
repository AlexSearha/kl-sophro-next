'use client';
import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { lusitana } from '@/app/ui/fonts';
import { TailwindTheme } from '@/tailwind.config';

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

const SecurityPage = () => {
  return (
    <>
      <h1 className={`text-3xl text-greena-500 ${lusitana.className}`}>Modification du mot de passe</h1>
      <div id="form-content" className="flex justify-center mt-6">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 300 }}
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
            <Button
              type="primary"
              htmlType="submit"
              // style={{ background: TailwindTheme.extend.colors.greena[400] }}
            >
              Modifier
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SecurityPage;
