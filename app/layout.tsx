import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JM-TEC | Precision Machining Partner",
  description: "정밀가공 부품 공급을 위한 JM-TEC 회사소개 홈페이지",
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
