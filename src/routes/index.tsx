import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-full w-full overflow-hidden bg-[#ffffff] antialiased">
      <div className="h-full max-w-[375px] mx-auto bg-background flex flex-col">
        <header className="sticky top-0 z-50 h-[48px] mt-2 px-4 font-bold text-[20px] border-b">
          헤더영역
        </header>
        <div className="flex-1 overflow-y-scroll">
          <div>슬라이더</div>
          <div>즐겨찾기</div>
          <div>목록</div>
        </div>
        <footer className="h-[48px] border-t bg-white z-50">
          <div className="mx-auto max-w-[480px] h-full flex items-center justify-center">
            푸터영역
          </div>
        </footer>
      </div>
    </div>
  );
}
