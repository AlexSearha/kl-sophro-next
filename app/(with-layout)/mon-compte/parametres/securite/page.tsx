'use client';
import React from 'react';
import type { FormProps } from 'antd';
import { Button, ConfigProvider, Form, Input } from 'antd';
import { lusitana } from '@/app/ui/fonts';
import { useModal } from '@/app/lib/providers/modalProvider';
import DeleteModal from '@/app/ui/modals/DeleteModal';

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
  const { dispatch } = useModal();
  const handleDeleteAccount = () => {
    dispatch({
      type: 'update_modal',
      payload: {
        title: 'Suppression de compte',
        content: (
          <DeleteModal subTitle="Ceci entrainera une action irréversible qui effacera toutes vos données. Êtes-vous sûr de vouloir continuer ?" />
        ),
      },
    });
  };
  return (
    <div className="mb-32">
      {/* Password changing */}
      <h1 id="parameter-title" className={`text-4xl text-center text-greena-500 ${lusitana.className}`}>
        Parametres
      </h1>
      <h2 className={`text-2xl text-greena-500 mt-8 ${lusitana.className}`}>Modification du mot de passe</h2>
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
            <Button type="primary" htmlType="submit">
              Modifier
            </Button>
          </Form.Item>
        </Form>
      </div>
      <hr />
      {/* Delete account */}
      <div className="flex flex-col gap-2 justify-center items-center">
        <h2 className={`text-2xl text-greena-500 mt-8 text-center ${lusitana.className}`}>
          Suppression du compte
        </h2>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#990000',
            },
          }}
        >
          <Button danger type="primary" onClick={handleDeleteAccount}>
            Supprimer
          </Button>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default SecurityPage;
