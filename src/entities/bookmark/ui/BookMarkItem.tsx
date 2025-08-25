import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { ConfirmDialog } from "@/shared/ui/ComfirmDialog";

type Props = {
  icon: string;
  name: string;
  url?: string;
  onDelete?: () => void;
  className?: string;
};

export function BookMarkCard({ icon, name, url, onDelete, className }: Props) {
  const [openConfirm, setOpenConfirm] = React.useState(false);

  return (
    <>
      <div className={cn("flex items-center gap-3 px-4 py-3", className)}>
        <div className="shrink-0">
          <div className="h-12 w-12 rounded-xl bg-white shadow-sm ring-1 ring-black/5 grid place-items-center overflow-hidden">
            <img src={icon} alt={name} className="h-8 w-8 object-contain" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-[17px] font-semibold leading-tight truncate">
            {name}
          </div>
          {url && (
            <div className="text-sm text-muted-foreground leading-snug truncate">
              {url}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpenConfirm(true)}
          className="ml-2 shrink-0 text-xs text-muted-foreground hover:text-foreground inline-flex flex-col items-center gap-1"
          aria-label="즐겨찾기 삭제"
        >
          <div className="h-6 w-6 rounded-md bg-muted grid place-items-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M6 2h12a2 2 0 0 1 2 2v18l-8-4-8 4V4a2 2 0 0 1 2-2z" />
            </svg>
          </div>
          <span>삭제</span>
        </button>
      </div>

      <div className="h-px w-full bg-border" />

      <ConfirmDialog
        open={openConfirm}
        onOpenChange={setOpenConfirm}
        title="즐겨찾기 삭제"
        description="이 사이트를 즐겨찾기 목록에서 삭제하시겠습니까?"
        cancelText="취소"
        confirmText="확인"
        contentClassName="w-[270px]"
        confirmClassName="w-28"
        onConfirm={() => {
          setOpenConfirm(false);
          onDelete?.();
        }}
      />
    </>
  );
}
