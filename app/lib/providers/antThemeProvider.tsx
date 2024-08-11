import { ConfigProvider } from 'antd';
import { TailwindTheme } from '@/tailwind.config';
import frFR from 'antd/locale/fr_FR';

export default function AntThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      locale={frFR}
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
