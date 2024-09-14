import '@/styles/globals.css';
import I18nProvider from 'next-translate/I18nProvider';
import type { AppProps } from 'next/app';
import { i18nConfig } from '../../i18n';
import commonEN from '../../locales/en/common.json';
import commonJA from '../../locales/ja/common.json';

const App = ({ Component, pageProps, router }: AppProps) => {
  const lang = i18nConfig.locales.includes(router.query.locale as string)
    ? String(router.query.locale)
    : i18nConfig.defaultLocale;

  return (
    <I18nProvider
      lang={lang}
      namespaces={{ common: lang === 'ja' ? commonJA : commonEN }}
    >
      <Component {...pageProps} />
    </I18nProvider>
  );
};

export default App;
