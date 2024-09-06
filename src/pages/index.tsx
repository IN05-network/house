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
            <h1 className="text-center">
              Membership Recruitment: Seeking New Residents
            </h1>
            <br />
            <div id="top" className="">
              <p>We are recruiting new members to the IN05 network. </p>
              <br />
              <p>
                New members can also opt to be residents of the IN05 house,
                located in the center of Tokyo.
              </p>
              <br />
              <h2>Why?</h2>
              <p>
                The IN05 team is expanding to open a second base of operations,
                located in the outskirts of Metropolitan tokyo. To support this
                strategic expansion, we also intend to recruit a few new members
                to the IN05 crew.
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
