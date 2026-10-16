import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  verification: { google: "HGzvAwZrtShsKPubV8YGK3zMEcXAt_cRsulYXU2bSws", other: { "naver-site-verification": "eead2fb82d8fce100173041d7215698861d3395b" } },
  metadataBase: new URL("https://jmtec-homepage.vercel.app"),
  title: "제이엠텍 JM-TEC · JMTEC | 컴프레서 부품 정밀가공",
  description: "천안 제이엠텍(JMTEC) · 컴프레서·인터쿨러 부품 정밀가공. CNC·MCT·연삭·측정검사, 회사소개서와 견적 문의.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "ko_KR", siteName: "제이엠텍 JM-TEC",
    title: "제이엠텍 JM-TEC | 컴프레서 부품 정밀가공",
    description: "회사 소개, 생산 제품, 가공·검사 설비와 견적 문의",
    url: "/", images: [{ url: "/final-building.jpg", alt: "제이엠텍 회사 건물" }],
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


