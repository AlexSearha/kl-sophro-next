import React from 'react';
import { ModalProvider } from './modalProvider';
import { ConfigProvider } from 'antd';
import { AdminProvider } from './adminProvider';
import AntThemeProvider from './antThemeProvider';

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ModalProvider>
      <AdminProvider>
        <AntThemeProvider>{children}</AntThemeProvider>
      </AdminProvider>
    </ModalProvider>
  );
};

export default MainProvider;
