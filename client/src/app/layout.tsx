import type { Metadata } from 'next';
import '@Styles/index.scss';
import Layout from '@/components/Layout';
import { contentFont } from '@/utils/fonts';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <Layout className={contentFont.className}>{children}</Layout>
    </html>
  );
}
