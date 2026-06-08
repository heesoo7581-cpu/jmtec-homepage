# JM-TEC Homepage (Vercel Ready)

JM-TEC 회사소개/영업용 랜딩페이지 프로젝트입니다.  
Next.js App Router 기반이며, Vercel에 바로 업로드할 수 있는 구조로 정리했습니다.

## 1) 로컬 실행
```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속

## 2) Vercel 배포
1. GitHub에 이 프로젝트 업로드
2. Vercel에서 **Add New Project**
3. GitHub 저장소 선택
4. Framework는 자동으로 **Next.js** 감지
5. Deploy 클릭

## 3) 배포 전 꼭 수정할 것
- `app/page.tsx` 안의 이메일/전화번호
- 제품 설명 문구
- 실제 고객사/품질 인증/실적 정보
- `public/` 폴더 이미지 교체

## 4) 현재 반영된 자료
- 기존 회사소개 자료에서 추출한 회사 전경/설비/측정/제품 이미지 일부
- 구매팀/영업용으로 다듬은 운영 문구

## 5) 권장 추가 개선
- 문의 폼 연동(Formspree, EmailJS, 자체 메일 서버 등)
- 주요 고객사/실적 섹션 추가
- 모바일 메뉴 추가
- 다국어(국문/영문) 분리
