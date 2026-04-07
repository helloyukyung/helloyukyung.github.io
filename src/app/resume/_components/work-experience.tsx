import Link from "next/link";

function WorkExperience() {
  return (
    <section className="mt-12" aria-labelledby="work-experience-title">
      <h2 className="text-lg font-semibold text-black">Work Experience</h2>
      {/* 웍스아웃 */}
      <article className="mt-6 border-t border-zinc-200 pt-6">
        <header className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-black">
            Frontend Developer
          </h3>
          <p className="text-sm text-zinc-600">
            <time dateTime="2020-08">2025. 03</time> –&nbsp;
            <time dateTime="present">현재</time>
          </p>
        </header>
        <section className="mt-4" aria-labelledby="project-title">
          <h4 className="text-base font-semibold text-black">
            <Link
              href="https://www.worksout.co.kr"
              target="_blank"
              className="hover:underline"
            >
              웍스아웃
            </Link>
          </h4>
          <p className="mt-2 leading-7 text-zinc-600">
            웍스아웃 커머스 웹 및 앱 서비스의 프론트엔드 개발과 운영을 담당하고
            있습니다. Next.js 기반 웹 서비스 개발부터, 이벤트·분석·마케팅
            연동까지 전반적인 사용자 경험과 비즈니스 흐름을 개발해왔습니다.
          </p>
          <section className="mt-4" aria-labelledby="what-i-did-title">
            <h5 className="text-md font-semibold text-black">What did I do</h5>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
              <li>Next.js 기반 커머스 웹 서비스 개발 및 유지보수</li>
              <li>
                상품 리스트, 상품 상세, 장바구니, 주문/결제 등 주요 플로우 구현
              </li>
              <li>
                Braze, Amplitude, GTM, GA4, Meta Pixel 등 이벤트 로깅 설계 및
                구현
              </li>
              <li>AWS(S3, CloudFront) 기반 배포 환경 운영</li>
            </ul>
          </section>
          <footer className="mt-4 text-sm text-zinc-600">
            <span className="font-medium text-zinc-800">Tech Stack.</span>{" "}
            Next.js, React, React Query, S3, CloudFront
          </footer>
        </section>
      </article>
      {/* 위플래닛 (현 팀 스파르타 빌더스 자회사) */}
      <article className="mt-6 border-t border-zinc-200 pt-6">
        <header className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-black">
            Frontend Developer
          </h3>
          <p className="text-sm text-zinc-600">
            <time dateTime="2022-03">2022. 03</time> –&nbsp;
            <time dateTime="2025-03">2025. 03</time>
          </p>
        </header>
        <h4 className="mt-4 text-base font-semibold text-black">
          <Link
            href="https://www.sparta-builders.com"
            target="_blank"
            className="hover:underline"
          >
            위플래닛 (현 팀 스파르타 빌더스 자회사)
          </Link>
        </h4>
        <p className="mt-2 leading-7 text-zinc-600">
          e커머스(의류·구매대행) 및 숙박 예약 등 다양한 도메인의 React/Next.js
          기반 서비스와 백오피스를 설계·개발·유지보수했습니다. 약 30명 정도
          규모의 스쿼드 조직에서 다양한 직군과 협업하며 사내 공통 템플릿과 개발
          문화 개선에도 기여했습니다.
        </p>

        {/* 안다르 채널톡 */}
        <section className="mt-6">
          <h5 className="text-md font-semibold text-black">
            <Link
              href="https://www.andar.co.kr"
              target="_blank"
              className="hover:underline"
            >
              안다르 채널톡 CS Tool
            </Link>
          </h5>
          <p className="mt-1 text-sm text-zinc-600">
            <time dateTime="2024-06">2024. 06</time> –&nbsp;
            <time dateTime="2024-11">2024. 11</time> · 에슬레저 브랜드 안다르의
            채널톡 내 주문 CS Tool(커맨드) 개발
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
            <li>
              카페24 API를 활용해 주문 상태에 따른 주문취소/교환/환불/배송지
              변경 기능 개발
            </li>
            <li>
              ErrorBoundary & Suspense를 도입해 데이터 패칭을 선언적으로 처리
            </li>
            <li>
              다양한 타입의 ProductItem에 Compound Component 패턴을 적용해
              재사용성 확보
            </li>
            <li>
              복잡한 배송·교환 로직에 Early Return 패턴을 적용해 가독성 및
              유지보수성 개선
            </li>
          </ul>
          <footer className="mt-2 text-sm text-zinc-600">
            <span className="font-medium text-zinc-800">Tech Stack.</span> Vite,
            React, React Query, bezier-react
          </footer>
        </section>

        {/* 픽투셀 */}
        <section className="mt-6">
          <h5 className="text-md font-semibold text-black">
            <Link
              href="https://www.pick2sell.kr/"
              target="_blank"
              className="hover:underline"
            >
              픽투셀 (Pick2Sell)
            </Link>
          </h5>
          <p className="mt-1 text-sm text-zinc-600">
            <time dateTime="2023-12">2023. 12</time> –&nbsp;
            <time dateTime="2024-04">2024. 04</time> · 온라인 구매대행 플랫폼
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
            <li>
              상품 상세 모달에 리스트 가상화를 도입해 초기 로딩 속도 42.5% 개선
            </li>
            <li>
              React Query 캐싱을 활용해 ‘번역 중’ 상태 상품이 자동 갱신되는 동적
              리스트 개발
            </li>
            <li>Session → JWT 인증 전환 과정의 동시성 문제 해결</li>
            <li>
              axios Interceptor 내 refreshToken 갱신 중복 요청 방지 및 예외 처리
              구현
            </li>
          </ul>
          <footer className="mt-2 text-sm text-zinc-600">
            <span className="font-medium text-zinc-800">Tech Stack.</span>{" "}
            React, Ant Design, React Query, Zustand
          </footer>
        </section>

        {/* 와이컬렉션 스테이 */}
        <section className="mt-6">
          <h5 className="text-md font-semibold text-black">
            <Link
              href="https://www.ycollection.kr/"
              target="_blank"
              className="hover:underline"
            >
              와이컬렉션 스테이
            </Link>
          </h5>
          <p className="mt-1 text-sm text-zinc-600">
            <time dateTime="2023-07">2023. 07</time> –&nbsp;
            <time dateTime="2023-11">2023. 11</time> · 숙박 예약 플랫폼
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
            <li>
              공통 컴포넌트(Button, Input, Form, Modal 등) 개발 및 Storybook
              도입
            </li>
            <li>
              i18n 다국어 환경 구축 및 구글 스프레드시트 기반 번역 파일 자동화
            </li>
            <li>숙소 예약 및 결제 페이지 개발</li>
            <li>
              랜딩 페이지 이미지 압축·리사이징 및 srcSet 최적화로 리소스 36.7MB
              → 13.3MB, 초기 로딩 5000ms → 2300ms 개선
            </li>
          </ul>
          <footer className="mt-2 text-sm text-zinc-600">
            <span className="font-medium text-zinc-800">Tech Stack.</span>{" "}
            Next.js (App Router), TailwindCSS, React Query, Zustand,
            react-hook-form, i18n, Storybook
          </footer>
        </section>
      </article>
    </section>
  );
}

export default WorkExperience;
