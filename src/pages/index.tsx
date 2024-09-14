import { useI18n } from '@/hooks/usei18n';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const RootPage = () => {
  const { t } = useI18n();

  const [isHover, setIsHover] = useState(false);

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
    );
  };

  return (
    <div className="text-left font-mono">
      <div
        className="inline-block p-6"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link className="no-underline hover:text-neutral-100" href="/">
          <div className="flex items-baseline">
            <span
              className={`font-bold text-[36px] ${isHover ? 'text-info' : ''}`}
            >
              🏠.
            </span>{' '}
            <Image
              src={
                isHover
                  ? 'https://www.in05.org/images/logotype_blue.png'
                  : 'https://www.in05.org/images/logotype_white.png'
              }
              alt="Logo"
              width={72}
              height={72}
            />
          </div>
        </Link>
      </div>

      <div id="section" className="">
        <div className="fixed inset-0 z-[-1] h-full w-full opacity-50">
          <Image
            src="https://www.in05.org/images/logomark.svg"
            alt="IN05"
            layout="fill"
          />
        </div>
        <div className="w-full p-4 font-mono laptop:text-left">
          <div className="mx-auto p-4 laptop:w-4/5">
            <h1 className="text-center">{t('new-recruitment.title')}</h1>
            <br />
            <div id="top" className="">
              <p>We are recruiting new members to the IN05 network.</p>
              <br />
              <p>
                New members can also opt to be residents of the IN05 house,
                located in the center of Tokyo. IN05 house is a co-residential
                space for our members to create a mutually empowering
                environment and lifestyle.
              </p>
              <br />
              <h2>Why?</h2>
              <p>
                Our team is expanding to open a second base of operations,
                located in the outskirts of Metropolitan tokyo. To support this
                strategic expansion, we also intend to recruit a few new members
                to the IN05 crew.
              </p>
              <h2>Who are we looking for?</h2>
              <p>
                We are looking for young professionals (18-29 yrs), with a
                strong passion for personal growth and collaborative living. We
                welcome individuals from diverse backgrounds, including but not
                limited to:
              </p>
              <ul>
                <li>Engineers, Technologists and "Hackers"</li>
                <li>Entrepreneurs and startup founders</li>
                <li>Multidisciplinary researchers</li>
                <li>Creative professionals (designers, writers, etc.)</li>
                <li>Service professionals (chefs, baristas, etc.)</li>
              </ul>
              <br />
              <p>Our members share the following core values:</p>
              <ul>
                <li>Open-minded and adaptable</li>
                <li>Eager to contribute to a vibrant community</li>
                <li> Interested in cross-disciplinary collaboration </li>
                <li>Committed to a sustainably exciting lifestyle</li>
              </ul>
              <br />
              <p>
                Join us in creating a dynamic, supportive environment where
                ideas flourish, and lifelong connections are forged. Whether
                you're a coder, a creator, or a changemaker, if you have
                something special to bring to the table, there's a place for you
                in the IN05 community.
              </p>
            </div>
            <div id="bottom" className="py-8">
              <ul>
                <li>
                  <LinkWithIcon url="mailto:contact@in05.org" text="contact" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
