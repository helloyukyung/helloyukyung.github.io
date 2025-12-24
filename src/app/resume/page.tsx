import WorkExperience from "@/app/resume/_components/work-experience";

export default function ResumePage() {
  return (
    <div className="flex items-center justify-center font-sans">
      <main className="w-full max-w-3xl px-6 py-16">
        {/* Header / Intro */}
        <header className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black">
            안녕하세요, 김유경입니다.
          </h1>

          <p className="mt-4 leading-8 text-zinc-600">
            서울에서 7년차 웹 프론트엔드 엔지니어로 일하고 있으며 아름다운
            인터페이스와 애니메이션을 구현하는 것을 좋아합니다. 개발자의 가치는
            비즈니스 가치를 구현하는데서 나온다고 믿습니다. 주도적으로 업무를
            진행할 수 있는 환경을 선호합니다.
          </p>
        </header>
        <WorkExperience />
      </main>
    </div>
  );
}
