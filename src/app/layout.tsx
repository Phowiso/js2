import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Страны и Города — Next.js",
  description: "Учебный проект: страны и их города",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
