# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

김유경의 개인 포트폴리오/이력서 사이트. Next.js 기반 정적 사이트로 GitHub Pages에 배포.

## 명령어

- `yarn dev` — 개발 서버 실행
- `yarn build` — 정적 빌드 (`out/` 디렉토리에 출력)
- `yarn lint` — ESLint 실행 (Next.js core-web-vitals + TypeScript 규칙)

## 아키텍처

- **Next.js 16** App Router, React 19, TypeScript, Tailwind CSS v4
- **정적 내보내기** (`output: "export"`) — API 라우트, SSR 등 서버 기능 사용 불가
- **React Compiler** 활성화 (`reactCompiler: true`)
- **패키지 매니저**: Yarn 1 (Classic)
- **경로 별칭**: `@/*` → `./src/*`

### 라우트 구조

- `/` — 홈 페이지 (`src/app/page.tsx`)
- `/resume/` — 이력서 페이지, `WorkExperience`·`OtherExperience` 컴포넌트는 `src/app/resume/_components/`에 위치

### 배포

GitHub Actions (`.github/workflows/deploy.yml`)로 `main` 브랜치 push 시 자동 빌드 및 GitHub Pages 배포. `yarn install --frozen-lockfile` 사용.
