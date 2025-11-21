import { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});
// change to actual prod url
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!

export const metadata: Metadata = {
  title: 'testttt',
  description:
    'testermit your application to join the event and showcase your skills!',
  icons: `${baseUrl}/logo_pink.png`,
  keywords: [
    'SF Hacks 2026',
    'hackathon',
    'student hackathon',
    'signup',
    'application',
    'sf hacks'
  ],
  authors: [{ name: 'miks', url: 'https://open-graph-test-plum.vercel.app/' }],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: 'test again boy',
    description:
      'nnew description here',
    siteName: 'something',
    images: [
      {
        url: `${baseUrl}/images.png`,
        width: 1200,
        height: 630,
        alt: 'SFHacks Hackathon'
      }
    ],
    locale: 'en_US',
    type: 'website',
    url: baseUrl,
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        test again i think hopefully it works  
        {baseUrl}
      </body>
    </html>
  );
}
