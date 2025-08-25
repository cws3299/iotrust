import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/shared/components/ui/drawer";
import { Button } from "@/shared/components/ui/button";
import type { ServiceItem } from "@/entities/service/type/service";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  service?: ServiceItem | null;
};

export function ServiceBottomDrawer({ open, onOpenChange, service }: Props) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent
        className="
          mx-auto w-[calc(100%-32px)] max-w-[375px] 
          rounded-t-2xl p-4 pb-[max(16px,env(safe-area-inset-bottom))]
        "
      >
        <DrawerHeader className="text-left px-0">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-white shadow-sm ring-1 ring-black/5 grid place-items-center overflow-hidden">
              {service?.icon && (
                <img
                  src={service.icon}
                  alt={service?.name ?? ""}
                  className="h-8 w-8 object-contain"
                />
              )}
            </div>
            <DrawerTitle className="flex flex-col items-start">
              <div className="text-xl">{service?.name}</div>
              <div className="text-gray-400">{service?.url}</div>
            </DrawerTitle>
          </div>
          {service?.description && (
            <DrawerDescription className="pt-2 px-0 text-left leading-relaxed">
              {service?.description}
            </DrawerDescription>
          )}
        </DrawerHeader>

        <DrawerFooter className="px-0">
          {service?.url ? (
            <a href={service.url} target="_blank" rel="noreferrer">
              <Button className="w-full">이동하기</Button>
            </a>
          ) : null}
          <DrawerClose asChild>
            <Button variant="outline" className="w-full">
              닫기
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
