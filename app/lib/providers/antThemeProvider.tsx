import { ConfigProvider } from 'antd';
import { TailwindTheme } from '@/tailwind.config';

export default function AntThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: TailwindTheme.extend.colors.greena[400],
        },
        components: {
          Button: {
            fontWeight: '700',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
