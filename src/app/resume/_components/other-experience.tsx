import Link from "next/link";

function OtherExperience() {
  return (
    <section className="mt-12" aria-labelledby="work-experience-title">
      <h2 className="text-lg font-semibold text-black">Other Experience.</h2>
      <article className="mt-6 border-t border-zinc-200 pt-6">
        <header className="flex flex-col gap-1">
          <h3 className="text-base font-semibold text-black">Side Project</h3>
          <p className="text-sm text-zinc-600">
            <time dateTime="2020-08">2025. 07</time> –&nbsp;
            <time dateTime="present">현재</time>
          </p>
        </header>
        <section className="mt-4" aria-labelledby="project-title">
          <h4 className="text-base font-semibold text-black">
            <Link
              href="https://apps.apple.com/us/app/%EC%95%BD%EA%BC%AD/id6752120136"
              target="_blank"
              className="hover:underline"
            >
              약꼭
            </Link>
          </h4>
          <p className="mt-2 leading-7 text-zinc-600">
            개인 사이드 프로젝트로 복용 관리 경험을 개선하는 앱 서비스를
            기획하고 개발하고 있습니다.
          </p>
          <section className="mt-4" aria-labelledby="what-i-did-title">
            <h5 className="text-md font-semibold text-black">What did I do</h5>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
              <li>React Native 기반 앱 기획 및 개발</li>
            </ul>
          </section>
          <footer className="mt-4 text-sm text-zinc-600">
            <span className="font-medium text-zinc-800">Tech Stack.</span> React
            Native, TypeScript, React Native CLI, Firebase
          </footer>
        </section>
      </article>
    </section>
  );
}

export default OtherExperience;
