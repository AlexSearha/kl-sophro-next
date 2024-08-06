'use client';
import { useEffect, useState } from 'react';
import { ConfigProvider, Space, Switch } from 'antd';
import { lusitana } from '@/app/ui/fonts';

export default function NotificationsPage() {
  const [isSwitchActive, setIsSwitchActive] = useState<boolean>(false);
  const onChange = (checked: boolean) => {
    setIsSwitchActive(checked);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#06752e',
          colorTextTertiary: '#ff0000',
        },
      }}
    >
      <div className={`flex flex-col gap-2 items-center justify-center mt-8 ${lusitana.className}`}>
        <h1 className="text-4xl text-greena-500 ">Notifications</h1>
        <p className="w-3/4 text-center">
          Cliquez sur le bouton ci-dessous pour <span className="font-bold">Activer</span>&nbsp;/&nbsp;
          <span className="font-bold">Désactiver</span> les notifications
        </p>
        <Space direction="vertical">
          <Switch checkedChildren="Activé" unCheckedChildren="Desactivé" onChange={onChange} style={{}} />
        </Space>
      </div>
    </ConfigProvider>
  );
}
