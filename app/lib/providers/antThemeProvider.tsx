import { ConfigProvider } from 'antd';

export default function AntThemeProvider({ children }: { children: React.ReactNode }) {
  return <ConfigProvider>{children}</ConfigProvider>;
}
