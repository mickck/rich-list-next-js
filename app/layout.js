import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: "%s | Rich People",
    default: "Rich People",
  },
  description: {
    default: "Rich people list",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex justify-center bg-slate-100 p-5 md:p-10">
        <container className="container bg-black p-6 md:p-10 rounded-lg shadow-md">
          {children}
        </container>
      </body>
    </html>
  );
}
