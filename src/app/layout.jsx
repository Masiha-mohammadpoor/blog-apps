import "@/styles/globals.css";
import vazirFont from "@/constants/localFont";
import Header from "@/components/Header";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster/>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
