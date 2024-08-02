import React from 'react';
import { ModalProvider } from './modalProvider';
import { ConfigProvider } from 'antd';
import { AdminProvider } from './adminProvider';

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      <AdminProvider>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: '#06752e',
              borderRadius: 2,
            },
          }}
        >
          {children}
        </ConfigProvider>
      </AdminProvider>
    </ModalProvider>
  );
};

export default MainProvider;
