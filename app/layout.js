import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Invy Management',
  description: 'Invy Management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className='max-auto max-w-5xl text-2xl gap-2 mb-10'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
