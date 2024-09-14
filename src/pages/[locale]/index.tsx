import RootLayout from '@/components/layouts/RootLayout';
import { useI18n } from '@/hooks/useI18n';

const RootPage = () => {
  const { t } = useI18n();

  const LinkWithIcon = (props: { url: string; text: string }) => {
    const style =
      'bg-[image:var(--favicon-url)] bg-left bg-no-repeat pl-[20px] inline-block bg-contain';
    let fetchedUrl = '';
    if (props.url.startsWith('/')) {
      fetchedUrl = 'https://www.in05.org/favicon.ico';
    } else if (props.url.startsWith('mailto:')) {
      fetchedUrl =
        'https://www.google.com/s2/favicons?domain=https://webmail.disroot.org';
    } else if (props.url.startsWith('http')) {
      fetchedUrl = `https://www.google.com/s2/favicons?domain=https://${
        new URL(props.url).hostname
      }`;
    }
    return (
      <p>
        <a
          href={props.url}
          target="_blank"
          rel="noreferrer"
          className={style}
          style={
            {
              '--favicon-url': `url(${fetchedUrl})`,
            } as React.CSSProperties
          }
        >
          {props.text}
        </a>
      </p>
    );
  };

  return (
    <RootLayout>
      <div
        id="section"
        className="mx-auto w-full p-4 laptop:w-4/5 laptop:text-left"
      >
        <h1 className="text-center">{t('new-recruitment.title')}</h1>
        <br />
        <div id="content">
          <p>{t('new-recruitment.description')}</p>

          <br />
          <h2>{t('new-recruitment.why')}</h2>
          <p>{t('new-recruitment.why-description')}</p>
          <h2>{t('new-recruitment.ideal-candidates')}</h2>
          <p>{t('new-recruitment.ideal-candidates-description')}</p>
          <ul>
            {(
              t(
                'new-recruitment.ideal-candidates-list',
                {},
                { returnObjects: true },
              ) as string[]
            ).map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index}>{item}</li>
            ))}
          </ul>
          <br />
          <p>{t('new-recruitment.core-values')}</p>
          <ul>
            {(
              t(
                'new-recruitment.core-values-list',
                {},
                { returnObjects: true },
              ) as string[]
            ).map((item, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index}>{item}</li>
            ))}
          </ul>
          <br />
          <p>{t('new-recruitment.final-remarks')}</p>
        </div>
        <div id="bottom" className="py-8">
          <LinkWithIcon url="mailto:contact@in05.org" text="contact us" />
        </div>
      </div>
    </RootLayout>
  );
};

export default RootPage;
