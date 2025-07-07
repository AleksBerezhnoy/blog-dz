import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Мой блог",
  description: "Блог от AleksBerezhnoy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body >
        {children}
      </body>
    </html>
  );
}
