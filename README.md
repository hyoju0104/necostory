# 🐾 NecoStory

입양을 기다리는 반려동물을 소개하고, 사용자 친화적인 인터페이스를 통해 입양 신청까지 가능한 **정적 웹 애플리케이션**입니다.  
JSON 데이터 기반의 동적 렌더링, 외부 API 연동, 반응형 UI 설계를 통해 프론트엔드 개발 역량을 강화했습니다.

---

## 🚀 주요 기능

- **데이터 렌더링**
  - `cats.json` 데이터를 불러와 목록 페이지와 상세 페이지에서 동적 렌더링
  - URL 쿼리 파라미터(`?id=`)를 활용한 상세 정보 조회 기능

- **입양 신청 페이지**
  - `adopt.html`에서 jQuery 기반 입력값 검증 및 예외 처리
  - 상세 페이지에서 넘어올 경우 고양이 이름 자동 입력(readonly) 처리
  - 카카오 주소 검색 API 연동으로 사용자 입력 편의성 강화

- **외부 API 연동**
  - TheCatAPI를 이용한 “오늘의 랜덤 이미지” 출력 기능 구현 (`main.js`)

- **UI/UX**
  - Mobile-first 접근 방식으로 반응형 레이아웃 구현
  - 네비게이션 바, 카드 UI 등 공통 컴포넌트 구조화

---

## 🛠️ Stacks

### Front-End
- HTML5, CSS3, JavaScript(ES6), jQuery
- Responsive Web, Bootstrap, Fetch API, JSON

### Back-End (간단 로직 중심)
- 데이터(JSON 파일) 기반 렌더링
- 외부 API 연동 및 예외 처리

### Tools & Others
- Git, GitHub
- Kakao Address API
- TheCatAPI

---

## 📂 폴더 구조

myweb/
├─ index.html # 메인 페이지
├─ cats.html # 목록 페이지
├─ cat-detail.html # 상세 페이지
├─ adopt.html # 입양 신청 페이지
├─ css/
│ └─ style.css
├─ js/
│ ├─ main.js
│ ├─ cats.js
│ ├─ cat-detail.js
│ └─ adopt.js
├─ data/
│ └─ cats.json
├─ img/ # 이미지 리소스
└─ doc/
└─ doc진짜ㄹㅇ최종.pdf # 프로젝트 보고서

## ⚙️ 실행 방법

1. 레포지토리 클론
   ```bash
   git clone https://github.com/your-id/necostory.git
2. index.html을 브라우저로 실행

## 📂 폴더 구조

