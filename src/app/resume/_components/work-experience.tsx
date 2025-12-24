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
            토스페이먼츠 JavaScript SDK
          </h4>

          <p className="mt-2 leading-7 text-zinc-600">
            토스페이먼츠의 결제를 연동하기 위해 사용하는 JavaScript SDK를 만들고
            유지보수하고 있습니다.
          </p>

          <section className="mt-4" aria-labelledby="what-i-did-title">
            <h5
              id="what-i-did-title"
              className="text-sm font-semibold text-black"
            >
              What did I do
            </h5>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
              <li>일반 결제 JavaScript SDK 구현</li>
              <li>커넥트페이 JavaScript SDK 구현</li>
              <li>npm 퍼블릭 패키지 배포</li>
            </ul>
          </section>

          <footer className="mt-4 text-sm text-zinc-600">
            <span className="font-medium text-zinc-800">Tech Stack.</span>{" "}
            TypeScript, Jest, Rollup
          </footer>
        </section>
      </article>
    </section>
  );
}

export default WorkExperience;
