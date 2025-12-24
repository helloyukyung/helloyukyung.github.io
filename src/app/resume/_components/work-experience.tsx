function WorkExperience() {
  return (
    <section className="mt-12" aria-labelledby="work-experience-title">
      <h2
        id="work-experience-title"
        className="text-lg font-semibold text-black"
      >
        Work Experience
      </h2>

      <article className="mt-6 border-t border-zinc-200 pt-6">
        <header className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-black">
            Frontend Developer
          </h3>
          <p className="text-sm text-zinc-600">
            <time dateTime="2020-08">2020. 08</time> –{" "}
            <time dateTime="present">현재</time>
          </p>
        </header>
        <section className="mt-4" aria-labelledby="project-title">
          <h4 id="project-title" className="text-sm font-semibold text-black">
            웍스아웃
          </h4>

          <p className="mt-2 leading-7 text-zinc-600">
            웍스아웃(Worksout) 커머스 웹 및 앱 서비스의 프론트엔드 개발과 운영을
            담당하고 있습니다. Next.js 기반 웹 서비스 개발부터,
            이벤트·분석·마케팅 연동까지 전반적인 사용자 경험과 비즈니스 흐름을
            책임지고 있습니다.
          </p>

          <section className="mt-4" aria-labelledby="what-i-did-title">
            <h5
              id="what-i-did-title"
              className="text-sm font-semibold text-black"
            >
              What did I do
            </h5>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
              <li>Next.js 기반 커머스 웹 서비스 개발 및 유지보수</li>
              <li>상품, 장바구니, 주문/결제 등 주요 구매 플로우 UI 구현</li>
              <li>
                GA4, Amplitude, Braze, Meta Pixel 등 이벤트 로깅 체계 설계 및
                표준화
              </li>
              <li>Domain/Event 기반 이벤트 네이밍 및 스키마 정립</li>
              <li>GTM 및 SDK 연동, 이벤트 누락/중복 이슈 디버깅</li>
              <li>AWS(S3, CloudFront) 기반 배포 환경 운영 및 트러블슈팅</li>
              <li>실서비스 운영 중 발생하는 이슈 대응 및 성능 개선</li>
            </ul>
          </section>

          <footer className="mt-4 text-sm text-zinc-600">
            <span className="font-medium text-zinc-800">Tech Stack.</span>{" "}
            Next.js, React, TypeScript, React Query, GA4, GTM, Amplitude, Braze,
            AWS
          </footer>
        </section>
      </article>
    </section>
  );
}

export default WorkExperience;
