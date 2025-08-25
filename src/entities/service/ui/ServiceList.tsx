import { useGetServices } from "../hook/useGetService";
import * as React from "react";
import ServiceCard from "./ServiceCard";
import { ServiceBottomDrawer } from "./ServiceBottomDrawer";
import type { ServiceItem } from "../type/service";

export function ServiceList() {
  const { data: services } = useGetServices();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<ServiceItem | null>(null);

  if (!services?.length) {
    return (
      <div className="text-sm text-muted-foreground p-4">
        표시할 서비스가 없습니다
      </div>
    );
  }

  const handleClick = (s: ServiceItem) => {
    setSelected(s);
    setOpen(true);
  };

  return (
    <>
      <ul className="divide-y divide-border">
        {services.map((s) => (
          <li key={s.id} className="py-1">
            <ServiceCard
              iconSrc={s.icon}
              name={s.name}
              description={s.description}
              onClick={() => handleClick(s)}
            />
          </li>
        ))}
      </ul>

      <ServiceBottomDrawer
        open={open}
        onOpenChange={setOpen}
        service={selected}
      />
    </>
  );
}
