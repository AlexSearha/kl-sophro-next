import { ConfigProvider } from 'antd';

export default function AntThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#06752e',
          colorTextTertiary: '#ff0000',
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
