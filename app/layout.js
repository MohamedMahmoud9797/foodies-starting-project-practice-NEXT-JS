import './globals.css';
import Headerbackground from './../components/Header/Header-background';
import MainHeader from '@/components/Header/MainHeader';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
     <Headerbackground></Headerbackground>
        {<MainHeader></MainHeader>}
        {children}
      </body>
    </html>
  );
}
