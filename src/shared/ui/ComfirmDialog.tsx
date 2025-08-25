import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/components/ui/alert-dialog";
import { cn } from "@/shared/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  contentClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  footerClassName?: string;
  cancelClassName?: string;
  confirmClassName?: string;
};

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmText = "확인",
  cancelText = "취소",
  onConfirm,
  contentClassName,
  titleClassName,
  descriptionClassName,
  footerClassName,
  cancelClassName,
  confirmClassName,
}: Props) {
  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent
        className={cn(
          "mx-auto w-[280px] max-w-[90%] rounded-2xl p-4",
          contentClassName
        )}
      >
        <AlertDialogHeader>
          <AlertDialogTitle
            className={cn(
              "text-center text-base font-semibold",
              titleClassName
            )}
          >
            {title}
          </AlertDialogTitle>
          {description ? (
            <AlertDialogDescription
              className={cn(
                "text-left text-sm text-muted-foreground mt-2",
                descriptionClassName
              )}
            >
              {description}
            </AlertDialogDescription>
          ) : null}
        </AlertDialogHeader>

        <AlertDialogFooter
          className={cn("mt-4 flex justify-center gap-3", footerClassName)}
        >
          <AlertDialogCancel
            className={cn("w-24 h-9 text-sm", cancelClassName)}
          >
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className={cn(
              "w-24 h-9 text-sm bg-black text-white hover:bg-black/80",
              confirmClassName
            )}
          >
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
