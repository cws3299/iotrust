# 사용한 기술 스택

- **TanStack Query** 

- **Tailwind** 
- **Shadcn**
- **embla-carousel-autoplay**

- **react-loading-skeleton** 
-  **axios** 
- **react-error-boundary** 
- **react-spinners**
- **TanStack Router**



# 프로젝트 실행 및 빌드 방법

1️⃣ npm install 

2️⃣ npm run dev

(빠뜨려서 추가로 정의)
dev기준으로 목업데이터를 가져오기 위해서는 port를 5173으로 설정해야합니다.



# 구현한 주요 요소 설명

### 폴더구조

- FSD 기반 폴더구조로 설계하였습니다.
- 대부분의 페이지가 동작이 있긴하지만 Feature레이어에 넣을 정도의 액션이라고는 생각되지 않아. Entities폴더내부에서 진행하였습니다
  

### 레이아웃

- 헤더영역과 푸터영역의 경우, 과제 내용에 포함되지 않아, 각각 sticky와 fixed를 활용해 div 태그가 위치만 차지하도록 고정시켜놓았습니다.
- 헤더와 푸터를 제외한 나머지 영역(`배너 목록` , `즐겨찾기 목록` , `일반 목록`을 div태그 안에서 각각 컴포넌트화 하여 구현했습니다. (`Banner`, `BookMark`, `Service`)



### 기본사항

- 데이터 표현에 있어 `국문/영문 설정` / `사용자 os` / `빌드환경` 의 경우  따로 설정하지 않기 때문에, 테스트를 위해 shared/lib/utils 파일의 getSelectConfig 함수를 통해 기본 **language** , **os** , **env** 를 설정합니다.



### 데이터 호출 및 변환

- 각 컴포넌트의`배너 목록`, `즐겨찾기 목록`, `서비스 목록` (`Banner` , `BookMark` , `Service`)  최상단에서 TanStackQuery → axios를 통해 데이터를 호출합니다.

- 각 컴포넌트  모두 실제 api응답 데이터를 클라이언트에서 그대로 사용할 수 없기에, useSuspenseQuery의 select 메서드 내부에서 어댑터 레이어 등을 활용하여, 클라이언트 type에 맞는 데이터를 최종적으로 구성합니다.

  - 예시 (`배너목록`)

    - 배너 목록의 api 데이터는 `연결링크` , `버튼텍스트` , `배너설명` 이 국문/영문 모두 다르게 전달받고 있으며, `배너이미지`의 경우 국문/영문/디폴트 3가지 중 옵셔널하게 전달받고 있습니다.

    - 사용자의 현재 언어에 맞춰 불필요한 프로퍼티는 삭제하고 필요한 프로퍼티로만 구성합니다.

    - ```ts
      export type Language = "en" | "ko";
      
      export type LocalizedOptional = Partial<Record<Language, string>>;
      
      export type ImageSet = {
        default?: string;
      } & Partial<Record<Language, string>>;
      
      // 서버로 부터 응답받는 데이터 양식
      export type BannerItemDto = {
        itemId: number;
        itemName: string;
        description?: LocalizedOptional;
        link?: LocalizedOptional;
        buttonText?: LocalizedOptional;
        image: ImageSet;
      };
      
      // 실제 화면에서 사용하는 데이터 양식
      export type BannerItem = {
        itemId: number;
        itemName: string;
        description: string;
        link: string;
        buttonText: string;
        image: string;
      };
      
      ```



### 배너 영역 특징

- 배너의 경우, 다른 영역과 달리 자동으로 refetch되는 기능이 필요하다고 생각하여 refetchInterval을 추가하였습니다.
- 캐루젤의 경우 **ShadCn**의 Carousel을 기반으로 개발하였으며, 자동으로 캐루젤이 넘어가도록 하기위해 **embla-carousel-autoplay** 라이브러리를 추가적으로 함께 사용하였습니다.
- 시간 간격의 경우 호출부에서 커스텀할 수 있도록 파라미터로 받을 수 있게 설계하였습니다.



### 북마크 영역 특징

- BookMark → BookMarkList → BookMarkCard의 구조로 작성되어 있습니다.
- 삭제 다이얼로그의 경우 **Shad Cn**의 alert-dialog를 활용하여 개발했습니다.
- 목업데이터를 통해 현재 고정된 즐겨찾기 목록 데이터를 받도록 구성되어 있기 때문에, useMutation에서 mutationFn 함수를 따로 구성하지 않았습니다. onMutate메서드내에서 quertClient에 접근하여 삭제된것 처럼 표현되도록 구성하였습니다.



### 목록 영역 특징

- Service  → BookMarkList → BookMarkCard 구조로 작성되어있습니다.
- 각 서비스 클릭시 생성되는 bottomSheet의 경우 **ShadCn**의 Drawer를 활용하여 개발했습니다.
- 닫기 버튼이 직관적으로 있는것도 좋을 것 같아 추가하였습니다.



### 로딩 및 예외 처리

- `배너` , `북마크` , `목록` 영역을 각각 Suspense레이어를 기반으로 설계하였으며, `배너` 영역의 경우 로딩스피너로 fallback ui를 구현했으며,  `북마크` , `목록`의 경우 react-loading-skeleton 라이브러리를 활용해 스켈레톤 형태로 구성하였습니다.
- 단순한 1회성 네트워크 오류의 경우 TanStack Query에서 retry 옵션에 2를 주어 새롭게 로드할 수 있게 하였습니다.
- 실제 서버 에러가 발생하는 경우는 명시적으로 사용자에게 직관적인 상태를 표현하는 것이 좋다고 판단되어 `react-error-boundary` 를 활용하여 예외처리를 하였고,  컴포넌트 별 fallbackComponent에 다시 시도 버튼을 두어, 사용자가 해당 컴포넌트를 수동으로 리로드 할 수 있는 기능 또한 추가하였습니다.



### 기타사항

- 라우터의 경우 페이지가 하나 밖에 없긴 하지만 TanStack Router를 사용하여 구성하였습니다.





# 제한 시간 내 구현하지 못한 부분 & 보완하고 싶은 점 등



- 오후 2시부터 저녁 11시까지 식사및 이외 시간을 제외하면 8시간 정도 개발을 진행하였습니다.
- 처음에 실제 api 데이터 구조를 화면에 표현하는 데이터 구조로 변화하는 과정에서 꽤 많은 시간적 고민이 있었습니다.
- dev / stage / production 기반으로 분기를 나누어 설계 하는 구조를 조금 더 명확하고 효율적인 방식으로 구분해보고 싶습니다.
  - 지금은 .env.development / .env.stage / .env.production 에 BASE_URL을 정의하고, package.json의 script에서 실행한 명령어에 따라 자동으로 환경변수가 정해지도록만 설정되어 있습니다.





# 기타사항

AI 도구를 이용했던 방식 (`Chat GPT`)

- type관련하여 제대로 제가 작성한 내용의 피드백을 부탁하는 형태로 이용하였습니다.
- mockup에 사용될 데이터를 json파일로 받은게 아니다보니, 문서에 있는 파일을 최종적으로 정의된 type에 맞추어 json으로 변환해달라고 요청하였습니다.
- 처음 사용해보는 라이브러리 (예시 `embla-carousel-autoplay`) 등의 경우 공식문서를 읽고 기본적인 작성을 해본 후, 인공지능에 문의하여 확인 하였습니다. 또한 이런 경우 인공지능의 답변이 올바르지 않은 경우도 많아 저 →  인공지능 →  저 이런식으로 크로스 체크를 하며 작업을 진행했습니다.



과제 제출 자체가 Public 레포지토리 제출이라 몇일간 Public으로 잠시 놔두겠습니다.
