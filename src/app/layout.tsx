import { Philosopher } from "next/font/google";
import "./globals.css";
import ClientNavbar from './Component/Navbar/ClientNavbar';
import { Toaster } from 'react-hot-toast';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${philosopher.className} `}
      >
        <Toaster />
        <ClientNavbar/>
        {children}
      </body>
    </html>
  );
}
