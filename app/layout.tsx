import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: { google: "HGzvAwZrtShsKPubV8YGK3zMEcXAt_cRsulYXU2bSws" },
  metadataBase: new URL("https://jmtec-homepage.vercel.app"),
  title: "제이엠텍 JM-TEC · JMTEC | 컴프레서 부품 정밀가공",
  description: "제이엠텍(JM-TEC, JMTEC)의 왕복동·스크롤 컴프레서 부품과 CNC 선삭, MCT, 연삭·연마 및 측정 설비를 소개합니다. 회사소개서 다운로드와 도면 기반 견적 문의: kjo7320@hanmail.net.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "ko_KR", siteName: "제이엠텍 JM-TEC",
    title: "제이엠텍 JM-TEC | 컴프레서 부품 정밀가공",
    description: "회사 소개, 생산 제품, 가공·검사 설비와 견적 문의",
    url: "/", images: [{ url: "/company-building.jpg", alt: "제이엠텍 회사 건물" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "Organization",
          name: "제이엠텍", alternateName: ["JM-TEC", "JMTEC"],
          url: "https://jmtec-homepage.vercel.app", email: "kjo7320@hanmail.net",
          foundingDate: "2004-04-09",
        }) }} />
        {children}
      </body>
    </html>
  );
}

