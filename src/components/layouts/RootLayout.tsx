import '@/styles/globals.css';
import type { ReactNode } from 'react';

const RootLayout = (props: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-background font-sans antialiased">
        {props.children}
      </body>
    </html>
  );
};

export default RootLayout;
