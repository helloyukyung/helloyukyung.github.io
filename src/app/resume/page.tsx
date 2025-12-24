import WorkExperience from "@/app/resume/_components/work-experience";

export default function ResumePage() {
  return (
    <div className="flex items-center justify-center font-sans">
      <main className="w-full max-w-3xl px-6 py-16">
        <header className="flex flex-col items-center text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black">
            안녕하세요, 김유경입니다.
          </h1>
          <p className="mt-4 leading-8 text-zinc-600">
            4년차 웹 프론트엔드 엔지니어로, 단순히 보이는 UI 뿐만 아니라, 서비스
            흐름 전반의 사용자 경험을 중요하게 생각합니다. 개발자의 가치는 기능
            구현을 넘어 비즈니스 임팩트를 만드는 데 있다고 믿으며, 팀원들과 함께
            대화하며 문제를 해결하는 것을 좋아합니다.
          </p>
        </header>
        <WorkExperience />
      </main>
    </div>
  );
}
