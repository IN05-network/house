import { useRouteRedirect } from '@/hooks/useRouteRedirect';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';

const RootLayout = (props: { children: ReactNode }) => {
  const [isHover, setIsHover] = useState(false);
  const { redirect } = useRouteRedirect();

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen text-left font-mono antialiased">
        <div className="fixed inset-0 h-full w-full opacity-50">
          <Image
            src="https://www.in05.org/images/logomark.svg"
            alt="IN05"
            layout="fill"
          />
        </div>

        {/* Header */}
        <div className="relative flex justify-between p-6">
          {/* Home logo */}
          <div
            className="inline-block"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            <button type="button" onClick={() => redirect('/')}>
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
            </button>
          </div>
          {/* Language */}
          <div className="flex items-center space-x-2">
            <LanguageSwitcher locale="en" />
            <span>/</span>
            <LanguageSwitcher locale="ja" />
          </div>
        </div>
        <div className="relative">{props.children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
