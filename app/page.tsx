import Image from "next/image";
import {
  Building2,
  CheckCircle2,
  Factory,
  Gauge,
  Mail,
  Phone,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const strengths = [
  {
    icon: ShieldCheck,
    title: "품질 중심 대응",
    desc: "3차원 측정기 및 각종 계측 장비 기반으로 초기품 검증과 반복 생산 품질 대응을 지원합니다.",
  },
  {
    icon: Wrench,
    title: "정밀가공 실행력",
    desc: "COMP 계열 부품 중심의 정밀가공 경험을 바탕으로 도면 이해부터 생산 연결까지 빠르게 대응합니다.",
  },
  {
    icon: CheckCircle2,
    title: "납기 협의 유연성",
    desc: "슬림한 조직 운영 구조로 일정 조정과 변경 대응 커뮤니케이션 속도를 높입니다.",
  },
];

const capabilities = [
  { title: "CNC 선반", icon: Settings },
  { title: "MCT 가공", icon: Factory },
  { title: "원통 / 앵귤라 연삭", icon: Gauge },
  { title: "평면연마", icon: Wrench },
  { title: "정밀 측정 및 검사", icon: ShieldCheck },
  { title: "다품종 중소량 대응", icon: Building2 },
];

const products = [
  { title: "왕복동 COMP 부품", image: "/product-1.jpg" },
  { title: "Scroll COMP 부품", image: "/product-2.jpg" },
  { title: "전동콤프 프레임 및 브라켓", image: "/product-3.jpg" },
  { title: "정밀 가공 기구부품", image: "/product-4.jpg" },
];

const process = [
  "도면 및 요구사항 검토",
  "가공 공정 설계",
  "초도품 대응 및 측정",
  "양산 운영",
  "검사 후 납품",
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="container-shell flex items-center justify-between py-4">
          <div>
            <div className="text-2xl font-black tracking-tight">JM-TEC</div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Precision Machining Partner
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-slate-950">회사소개</a>
            <a href="#capability" className="transition hover:text-slate-950">생산역량</a>
            <a href="#products" className="transition hover:text-slate-950">제품군</a>
            <a href="#process" className="transition hover:text-slate-950">운영방식</a>
            <a href="#contact" className="transition hover:text-slate-950">문의</a>
         <a
  href="https://jmtekerp.duckdns.org"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-slate-900 px-4 py-2 text-white transition hover:bg-blue-600"
>
  ERP 접속
</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(135deg,#020617_0%,#0f172a_45%,#1e3a8a_100%)] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-500 blur-3xl" />
        </div>

        <div className="container-shell relative grid gap-10 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-slate-200 backdrop-blur">
              정밀가공 부품 공급 · 영업/구매 검토용
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
              정밀가공 부품 공급을 위한
              <span className="mt-2 block text-blue-300">실행력 있는 협력 파트너</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              JM-TEC은 COMP 계열 부품 및 정밀 가공품을 중심으로 생산, 검사, 납품까지
              연결되는 실무형 제조 파트너를 지향합니다. 설비 나열보다 실제 대응력과
              운영 연결성을 보여주는 데 초점을 맞췄습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-0.5 hover:bg-blue-400"
              >
                협력 문의하기
              </a>
              <a
                href="#products"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                제품군 보기
                <a
  href="https://jmtekerp.duckdns.org"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-2xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-950/40 transition hover:-translate-y-0.5 hover:bg-emerald-400"
>
  ERP 접속
</a>
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <div className="text-sm text-slate-300">핵심 가치</div>
                <div className="mt-3 text-2xl font-bold">납기 대응</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  실행 중심의 조직 구조로 일정 협의와 변경 대응 속도를 높입니다.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <div className="text-sm text-slate-300">핵심 가치</div>
                <div className="mt-3 text-2xl font-bold">검사 체계</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  계측 장비 기반으로 초기품 검증과 품질 확인을 지원합니다.
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 shadow-2xl backdrop-blur">
              <div className="relative h-[250px] w-full">
                <Image
                  src="/company-building.jpg"
                  alt="JM-TEC 회사 전경"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <div className="text-sm text-slate-300">JM-TEC 포지션</div>
                  <div className="mt-2 text-2xl font-bold leading-tight">
                    대량 범용품보다 정밀가공 품목에서 강한 협력사
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    도면 검토, 가공 대응, 측정, 납품까지 이어지는 운영 흐름에서
                    실무 효율과 커뮤니케이션 속도를 강점으로 가져갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="container-shell section-space">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <SectionTitle
              eyebrow="About JM-TEC"
              title="실행력이 보이는 정밀가공 협력사"
              description="JM-TEC은 왕복동 COMP 부품, Scroll COMP 부품, 전동콤프 관련 부품 등 정밀 가공 영역을 중심으로 대응합니다. 구매 검토 관점에서는 설비 보유 자체보다 도면 이해, 생산 대응, 측정, 납품까지의 연결성이 더 중요하며, 이 부분이 JM-TEC의 실질적인 강점입니다."
            />
          </div>

          <div className="grid gap-4">
            {strengths.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-surface p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-blue-100 p-3 text-blue-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-slate-900">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="capability" className="section-space bg-slate-50">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Capability"
            title="생산 및 검사 역량"
            description="가공, 연삭, 측정 장비를 바탕으로 시제품부터 반복 발주까지 연결 가능한 생산 구조를 지향합니다."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="card-surface p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-slate-100 p-3 text-slate-800">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-lg font-bold">{item.title}</div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      실제 운영 협의를 통해 품목별 적용 범위와 가공 조건을 구체화할 수 있습니다.
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { src: "/quality-cmm.jpg", alt: "3차원 측정기" },
                { src: "/quality-screen.jpg", alt: "측정 소프트웨어 화면" },
                { src: "/cnc-line.jpg", alt: "CNC 설비" },
                { src: "/machining-center.jpg", alt: "MCT 설비" },
              ].map((image) => (
                <div key={image.src} className="relative min-h-[210px] overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="container-shell section-space">
        <SectionTitle
          eyebrow="Products"
          title="주요 제품군"
          description="기존 회사소개 자료 기준으로 정리한 대표 대응 품목입니다. 실제 운영 시에는 납품 실적, 고객사 요구 규격, 적용 산업을 추가하는 편이 더 강합니다."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-56 w-full">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="text-lg font-bold text-slate-900">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  정밀 가공, 검사 대응, 납품 운영과 연계하여 검토 가능한 품목군입니다.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="process" className="section-space bg-slate-950 text-white">
        <div className="container-shell">
          <SectionTitle
            eyebrow="Process"
            title="운영 방식"
            description="협력 검토 이후 실제로는 도면 검토부터 초도품 대응, 양산 운영, 검사 및 납품까지의 흐름이 중요합니다."
          />

          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {process.map((item, idx) => (
              <div
                key={item}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-sm text-blue-300">STEP {idx + 1}</div>
                <div className="mt-3 text-lg font-bold leading-7">{item}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="card-surface overflow-hidden border-white/10 bg-white/5 p-0">
              <div className="relative h-72 w-full">
                <Image src="/factory-floor.jpg" alt="공장 내부" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 to-transparent" />
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Purchase Point
              </div>
              <p className="mt-5 text-base leading-8 text-slate-300">
                JM-TEC은 대규모 설비 과시형 제조사라기보다, 정밀가공 품목에서
                응답성과 실무 협의 효율이 강한 협력사 포지션에 가깝습니다.
                따라서 파일럿 품목을 먼저 선정한 후 초도품 기준을 맞춰가는 방식이 가장 현실적입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container-shell section-space">
        <div className="rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <SectionTitle
                eyebrow="Contact"
                title="협력 문의"
                description="정밀가공 부품 공급, 협력사 등록, 파일럿 품목 검토 관련 문의를 환영합니다. 현재 연락처 정보는 임시 문구이므로 실제 운영 전 수정이 필요합니다."
              />
            </div>

            <div className="min-w-[300px] rounded-[28px] bg-slate-950 p-7 text-white shadow-xl">
              <div className="text-sm text-slate-400">Company Website</div>
              <div className="mt-2 text-2xl font-bold">www.jm-tec.com</div>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4" />
                  sales@jm-tec.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4" />
                  000-0000-0000
                </div>
              </div>
              <a
                href="mailto:sales@jm-tec.com"
                className="mt-6 inline-flex rounded-2xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
              >
                이메일 문의하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
