import type { Metadata } from 'next';
import '@/src/app/styles/globals.css';

export const metadata: Metadata = {
  title: 'Weekending',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
