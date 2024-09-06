import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const RootPage = () => {
  const [isHover, setIsHover] = useState(false);

  const LinkWithIcon = (props: { url: string; text: string }) => {
    const style =
      'bg-[image:var(--favicon-url)] bg-left bg-no-repeat pl-[20px] inline-block bg-contain';
    let fetchedUrl = '';
    if (props.url.startsWith('/')) {
      fetchedUrl = '/favicon.ico';
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
    <div className="text-left">
      <div
        className="inline-block p-6"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Link className="no-underline hover:text-neutral-100" href="/">
          <div className="flex items-baseline">
            <span
              className={`font-bold font-mono text-[48px] ${isHover ? 'text-info' : ''}`}
            >
              house.
            </span>{' '}
            <Image
              src={
                isHover
                  ? 'https://www.in05.org/images/logotype_blue.png'
                  : 'https://www.in05.org/images/logotype_white.png'
              }
              alt="Logo"
              width={100}
              height={100}
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

        <div className="w-full p-4 text-center laptop:text-left">
          <ul>
            <li>
              <LinkWithIcon url="mailto:contact@in05.org" text="contact" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RootPage;
