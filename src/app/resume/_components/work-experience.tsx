import Link from "next/link";

function WorkExperience() {
  return (
    <section className="mt-12" aria-labelledby="work-experience-title">
      <h2 className="text-lg font-semibold text-black">Work Experience</h2>
      <article className="mt-6 border-t border-zinc-200 pt-6">
        <header className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-black">
            Frontend Developer
          </h3>
          <p className="text-sm text-zinc-600">
            <time dateTime="2020-08">2025. 03</time> –{" "}
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
            웍스아웃(Worksout) 커머스 웹 및 앱 서비스의 프론트엔드 개발과 운영을
            담당하고 있습니다. Next.js 기반 웹 서비스 개발부터,
            이벤트·분석·마케팅 연동까지 전반적인 사용자 경험과 비즈니스 흐름을
            개발해왔습니다.
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
    </section>
  );
}

export default WorkExperience;
