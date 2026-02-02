import Link from "next/link";

/**
 * 프로젝트 정보
 */
interface Project {
  id: string; // 고유 식별자
  name: string; // 프로젝트명
  url?: string; // 선택적 프로젝트 URL
  duration: string; // 프로젝트 기간
  description: string; // 프로젝트 설명
  tasks: string[]; // 주요 업무 목록
  techStack: string; // 기술 스택
  isPlaceholder?: boolean; // TBD 프로젝트 플래그
}

/**
 * 회사 정보
 */
interface Company {
  position: string; // 직책
  startDate: string; // ISO 형식 시작일
  endDate: string | "present"; // ISO 형식 종료일 또는 "present"
  displayDateRange: string; // 표시용 날짜 범위
  companyName: string; // 회사명
  companyUrl: string; // 회사 웹사이트
  projects: Project[]; // 프로젝트 배열
}

/**
 * 경력 데이터
 * NOTE: TBD 프로젝트는 isPlaceholder: true로 표시됨
 */
const companies: Company[] = [
  {
    position: "Frontend Developer",
    startDate: "2025-03",
    endDate: "present",
    displayDateRange: "2025. 03 - 현재",
    companyName: "웍스아웃",
    companyUrl: "https://www.worksout.co.kr",
    projects: [
      {
        id: "worksout-main",
        name: "웍스아웃 커머스 플랫폼",
        duration: "2025.03 - 현재",
        description:
          "웍스아웃 커머스 웹 및 앱 서비스의 프론트엔드 개발과 운영을 담당하고 있습니다. 웍스아웃 사이트 뿐만 아니라 B2B로 연결되어 그라미치, 소프 등의 자사 브랜드 사이트 개발 및 유지보수를 해왔습니다. Next.js 기반 웹 서비스 개발부터, 이벤트·분석·마케팅 연동까지 전반적인 사용자 경험과 비즈니스 흐름을 개발해왔습니다.",
        tasks: [
          "Next.js 기반 커머스 웹 서비스 개발 및 유지보수 및 아키텍쳐 설계",
          "상품 리스트, 상품 상세, 장바구니, 주문/결제 등 주요 플로우 구현",
          "외주 앱개발의 한계로 인한 웹뷰 도입 및 브릿지 연결",
          "Braze, Amplitude, GTM, GA4, Meta Pixel 등 이벤트 로깅 설계 및 구현",
          "AWS(S3, CloudFront), Ampulify 기반 배포 환경 운영",
        ],
        techStack: "Next.js, React, React Query, S3, CloudFront",
        isPlaceholder: false,
      },
      // TODO: 웍스아웃 추가 프로젝트 정보 필요
    ],
  },
  {
    position: "Frontend Developer",
    startDate: "2022-03",
    endDate: "2025-02",
    displayDateRange: "2022. 03 - 2025. 02 (3년)",
    companyName: "위플래닛",
    companyUrl: "https://www.weplanet.co.kr",
    projects: [
      {
        id: "channeltalk-andar",
        name: "채널톡(안다르)",
        duration: "2024.06 ~ 2024.11",
        description:
          "에슬레저 브랜드 안다르의 채널톡 내 주문 CS Tool(커맨드)을 개발했습니다. Cafe24 API를 활용한 주문 관리 시스템을 구현하고, 체계적인 에러 처리와 컴포넌트 설계 패턴을 적용했습니다.",
        tasks: [
          "Cafe24 API 활용 주문 상태에 따른 주문 취소/교환/환불/배송지 변경 기능 개발",
          "ErrorBoundary & Suspense를 사용해 데이터 패칭을 선언적으로 처리",
          "다양한 타입의 ProductItem을 Compound Component 패턴을 적용하여 선언적 구현",
          "복잡한 배송 교환 로직을 단순화시키기 위해 Early Return 패턴을 적용",
        ],
        techStack: "Vite, React, React Query, Bezier React, Cafe24 API",
        isPlaceholder: false,
      },
      {
        id: "weplanet-project-2",
        name: "프로젝트 2 (작성 예정)",
        duration: "TBD",
        description: "프로젝트 상세 내용 작성 예정입니다.",
        tasks: ["내용 추가 예정"],
        techStack: "TBD",
        isPlaceholder: true,
      },
      {
        id: "weplanet-project-3",
        name: "프로젝트 3 (작성 예정)",
        duration: "TBD",
        description: "프로젝트 상세 내용 작성 예정입니다.",
        tasks: ["내용 추가 예정"],
        techStack: "TBD",
        isPlaceholder: true,
      },
    ],
  },
];

function WorkExperience() {
  return (
    <section className="mt-12" aria-labelledby="work-experience-title">
      <h2
        id="work-experience-title"
        className="text-lg font-semibold text-black"
      >
        Work Experience
      </h2>

      {companies.map((company) => (
        <article
          key={`${company.companyName}-${company.startDate}`}
          className="mt-6 border-t border-zinc-200 pt-6"
        >
          <header className="flex flex-col gap-1">
            <h3
              id={`company-${company.companyName.toLowerCase()}-position`}
              className="text-base font-semibold text-black"
            >
              {company.position}
            </h3>
            <h4 className="text-base font-semibold text-black">
              <Link
                href={company.companyUrl}
                target="_blank"
                className="hover:underline"
              >
                {company.companyName}
              </Link>
            </h4>
            <p className="text-sm text-zinc-600">
              <time dateTime={company.startDate}>
                {company.displayDateRange.split(" - ")[0]}
              </time>{" "}
              –{" "}
              <time dateTime={company.endDate}>
                {company.displayDateRange.split(" - ")[1]}
              </time>
            </p>
          </header>

          {company.projects.map((project, index) => (
            <section
              key={project.id}
              className={`${
                index === 0 ? "mt-4" : "mt-6 pt-6 border-t border-zinc-100"
              } ${project.isPlaceholder ? "opacity-60" : ""}`}
              aria-labelledby={`project-${project.id}-header`}
            >
              <header className="flex flex-col gap-1 mb-3 md:flex-row md:items-baseline md:gap-3">
                <h5
                  id={`project-${project.id}-header`}
                  className="text-base font-semibold text-black"
                >
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {project.name}
                    </Link>
                  ) : (
                    project.name
                  )}
                </h5>
                <p className="text-sm text-zinc-500">{project.duration}</p>
              </header>

              <p className="mt-2 leading-7 text-zinc-600">
                {project.description}
              </p>

              <section
                className="mt-4"
                aria-labelledby={`project-${project.id}-tasks`}
              >
                <h6
                  id={`project-${project.id}-tasks`}
                  className="text-md font-semibold text-black"
                >
                  What did I do
                </h6>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-zinc-600">
                  {project.tasks.map((task, taskIndex) => (
                    <li key={taskIndex}>{task}</li>
                  ))}
                </ul>
              </section>

              <footer className="mt-4 text-sm text-zinc-600">
                <span className="font-medium text-zinc-800">Tech Stack.</span>{" "}
                {project.techStack}
              </footer>
            </section>
          ))}
        </article>
      ))}
    </section>
  );
}

export default WorkExperience;
